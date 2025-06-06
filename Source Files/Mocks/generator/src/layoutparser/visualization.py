from layoutparser.visualization import image_loader, _create_font_object, _calculate_default_box_width, _create_color_palette, _draw_transparent_box_on_handler, _draw_box_outline_on_handler, DEFAULT_TEXT_BACKGROUND, DEFAULT_TEXT_COLOR, DEFAULT_OUTLINE_COLOR
import numpy as np
from PIL import Image, ImageFont, ImageDraw, ImageColor
from typing import List, Optional, Union, Dict, Any, Tuple, Dict
from layoutparser.elements import (
    Layout,
    Interval,
    Rectangle,
    TextBlock,
    Quadrilateral,
)

def _draw_vertical_text(
    text,
    image_font,
    text_color,
    text_background_color,
    character_spacing=2,
    space_width=1,
):
    """Helper function to draw text vertically.
    Ref: https://github.com/Belval/TextRecognitionDataGenerator/blob/7f4c782c33993d2b6f712d01e86a2f342025f2df/trdg/computer_text_generator.py
    """

    space_height = int(getsize(image_font.getbbox(" "))[1] * space_width)

    char_heights = [
        getsize(image_font.getbbox(c))[1] if c != " " else space_height for c in text
    ]
    text_width = max([getsize(image_font.getbbox(c))[0] for c in text])
    text_height = sum(char_heights) + character_spacing * len(text)

    txt_img = Image.new("RGBA", (text_width, text_height), color=text_background_color)
    txt_mask = Image.new("RGBA", (text_width, text_height), color=text_background_color)

    txt_img_draw = ImageDraw.Draw(txt_img)
    txt_mask_draw = ImageDraw.Draw(txt_mask)

    for i, c in enumerate(text):
        txt_img_draw.text(
            (0, sum(char_heights[0:i]) + i * character_spacing),
            c,
            fill=text_color,
            font=image_font,
        )

    return txt_img.crop(getsize(txt_img.getbbox()))

@image_loader
def draw_box(
    canvas: Image.Image,
    layout: Layout,
    box_width: Optional[Union[List[int], int]] = None,
    box_alpha: Optional[Union[List[float], float]] = None,
    box_color: Optional[Union[List[str], str]] = None,
    color_map: Optional[Dict] = None,
    show_element_id: bool = False,
    show_element_type: bool = False,
    id_font_size: Optional[int] = None,
    id_font_path: Optional[str] = None,
    id_text_color: Optional[str] = None,
    id_text_background_color: Optional[str] = None,
    id_text_background_alpha: Optional[float] = 1,
):
    """Draw the layout region on the input canvas(image).

    Args:
        canvas (:obj:`~np.ndarray` or :obj:`~PIL.Image.Image`):
            The canvas to draw the layout boxes.
        layout (:obj:`Layout` or :obj:`list`):
            The layout of the canvas to show.
        box_width (:obj:`int` or :obj:`List[int]`, optional):
            Set to change the width of the drawn layout box boundary.
            Defaults to None, when the boundary is automatically
            calculated as the the :const:`DEFAULT_BOX_WIDTH_RATIO`
            * the maximum of (height, width) of the canvas.
            If box_with is a list, it will assign different widths to
            the corresponding layout object, and should have the same
            length as the number of blocks in `layout`.
        box_alpha (:obj:`float`  or :obj:`List[float]`, optional):
            A float or list of floats ranging from 0 to 1. Set to change
            the alpha of the drawn layout box.
            Defaults to 0 - the layout box will be fully transparent.
            If box_alpha is a list of floats, it will assign different
            alphas to the corresponding layout object, and should have
            the same length as the number of blocks in `layout`.
        box_color (:obj:`str`  or :obj:`List[str]`, optional):
            A string or a list of strings for box colors, e.g.,
            `['red', 'green', 'blue']` or `'red'`.
            If box_color is a list of strings, it will assign different
            colors to the corresponding layout object, and should have
            the same length as the number of blocks in `layout`.
            Defaults to None. When `box_color` is set, it will override the
            `color_map`.
        color_map (dict, optional):
            A map from `block.type` to the colors, e.g., `{1: 'red'}`.
            You can set it to `{}` to use only the
            :const:`DEFAULT_OUTLINE_COLOR` for the outlines.
            Defaults to None, when a color palette is is automatically
            created based on the input layout.
        show_element_id (bool, optional):
            Whether to display `block.id` on the top-left corner of
            the block.
            Defaults to False.
        show_element_type (bool, optional):
            Whether to display `block.type` on the top-left corner of
            the block.
            Defaults to False.
        id_font_size (int, optional):
            Set to change the font size used for drawing `block.id`.
            Defaults to None, when the size is set to
            :const:`DEFAULT_FONT_SIZE`.
        id_font_path (:obj:`str`, optional):
            Set to change the font used for drawing `block.id`.
            Defaults to None, when the :const:`DEFAULT_FONT_OBJECT` is used.
        id_text_color (:obj:`str`, optional):
            Set to change the text color used for drawing `block.id`.
            Defaults to None, when the color is set to
            :const:`DEFAULT_TEXT_COLOR`.
        id_text_background_color (:obj:`str`, optional):
            Set to change the text region background used for drawing `block.id`.
            Defaults to None, when the color is set to
            :const:`DEFAULT_TEXT_BACKGROUND`.
        id_text_background_alpha (:obj:`float`, optional):
            A float range from 0 to 1. Set to change the alpha of the
            drawn text.
            Defaults to 1 - the text box will be solid.
    Returns:
        :obj:`PIL.Image.Image`:
            A Image object containing the `layout` draw upon the input `canvas`.
    """

    assert 0 <= id_text_background_alpha <= 1, ValueError(
        f"The id_text_background_alpha value {id_text_background_alpha} is not within range [0,1]."
    )

    draw = ImageDraw.Draw(canvas, mode="RGBA")

    id_text_background_color = id_text_background_color or DEFAULT_TEXT_BACKGROUND
    id_text_color = id_text_color or DEFAULT_TEXT_COLOR

    if show_element_id or show_element_type:
        font_obj = _create_font_object(id_font_size, id_font_path)

    if box_alpha is None:
        box_alpha = [0] * len(layout)
    else:
        if isinstance(box_alpha, (float, int)):
            box_alpha = [box_alpha] * len(layout)

        if len(box_alpha) != len(layout):
            raise ValueError(
                f"The number of alphas {len(box_alpha)} is not equal to the number of blocks {len(layout)}"
            )
        if not all(0 <= a <= 1 for a in box_alpha):
            raise ValueError(
                f"The box_alpha value {box_alpha} is not within range [0,1]."
            )

    if box_width is None:
        box_width = _calculate_default_box_width(canvas)
        box_width = [box_width] * len(layout)
    else:
        if isinstance(box_width, (float, int)):
            box_width = [box_width] * len(layout)

        if len(box_width) != len(layout):
            raise ValueError(
                f"The number of widths {len(box_width)} is not equal to the number of blocks {len(layout)}"
            )

    if box_color is None:
        if color_map is None:
            all_types = set([b.type for b in layout if hasattr(b, "type")])
            color_map = _create_color_palette(all_types)
        box_color = [
            DEFAULT_OUTLINE_COLOR
            if not isinstance(ele, TextBlock)
            else color_map.get(ele.type, DEFAULT_OUTLINE_COLOR)
            for ele in layout
        ]
    else:
        if isinstance(box_color, str):
            box_color = [box_color] * len(layout)

        if len(box_color) != len(layout):
            raise ValueError(
                f"The number of colors {len(box_color)} is not equal to the number of blocks {len(layout)}"
            )

    # A post check of the lengths of the input lists
    # To support more versions of python, we do not use 
    # zip(*, strict=True)
    assert len(layout) == len(box_color) == len(box_alpha) == len(box_width)

    for idx, (ele, color, alpha, width) in enumerate(
        zip(layout, box_color, box_alpha, box_width)
    ):

        if isinstance(ele, Interval):
            ele = ele.put_on_canvas(canvas)

        if width > 0:
            _draw_box_outline_on_handler(draw, ele, color, width)

        _draw_transparent_box_on_handler(draw, ele, color, alpha)

        if show_element_id or show_element_type:
            text = ""
            if show_element_id:
                ele_id = ele.id or idx
                text += str(ele_id)
            if show_element_type:
                text = str(ele.type) if not text else text + ": " + str(ele.type)

            start_x, start_y = ele.coordinates[:2]
            text_w, text_h = getsize(font_obj.getbbox(text))

            text_box_object = Rectangle(
                start_x, start_y, start_x + text_w, start_y + text_h
            )
            # Add a small background for the text

            _draw_transparent_box_on_handler(
                draw,
                text_box_object,
                id_text_background_color,
                id_text_background_alpha,
            )

            # Draw the ids
            draw.text(
                (start_x, start_y),
                text,
                fill=id_text_color,
                font=font_obj,
            )

    return canvas

def getsize(bbox):
    return bbox[2] - bbox[0], bbox[3] - bbox[1]
