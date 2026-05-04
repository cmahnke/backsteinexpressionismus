(()=>{var kf=Object.defineProperty;var I_=Object.getOwnPropertyDescriptor;var v_=Object.getOwnPropertyNames;var L_=Object.prototype.hasOwnProperty;var w=(n,t)=>()=>(n&&(t=n(n=0)),t);var A_=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of v_(t))!L_.call(n,r)&&r!==e&&kf(n,r,{get:()=>t[r],enumerable:!(i=I_(t,r))||i.enumerable});return n};var P_=n=>A_(kf({},"__esModule",{value:!0}),n);var Mt,$r=w(()=>{Mt={ADD:"add",REMOVE:"remove"}});var De,Zn=w(()=>{De={PROPERTYCHANGE:"propertychange"}});function Je(n){for(let t in n)delete n[t]}function ge(n){let t;for(t in n)return!1;return!t}var Re=w(()=>{});function j(n,t,e,i,r){if(r){let o=e;e=function(a){return n.removeEventListener(t,e),o.call(i??this,a)}}else i&&i!==n&&(e=e.bind(i));let s={target:n,type:t,listener:e};return n.addEventListener(t,e),s}function Hn(n,t,e,i){return j(n,t,e,i,!0)}function q(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),Je(n))}var Bt=w(()=>{Re()});var k,lt=w(()=>{k={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}});var yl,Bi,Jr=w(()=>{yl=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}},Bi=yl});function Nf(n,t,e){let i,r;e=e||re;let s=0,o=n.length,a=!1;for(;s<o;)i=s+(o-s>>1),r=+e(n[i],t),r<0?s=i+1:(o=i,a=!r);return a?s:~s}function re(n,t){return n>t?1:n<t?-1:0}function Gf(n,t){return n<t?1:n>t?-1:0}function qn(n,t,e){if(n[0]<=t)return 0;let i=n.length;if(t<=n[i-1])return i-1;if(typeof e=="function"){for(let r=1;r<i;++r){let s=n[r];if(s===t)return r;if(s<t)return e(t,n[r-1],s)>0?r-1:r}return i-1}if(e>0){for(let r=1;r<i;++r)if(n[r]<t)return r-1;return i-1}if(e<0){for(let r=1;r<i;++r)if(n[r]<=t)return r;return i-1}for(let r=1;r<i;++r){if(n[r]==t)return r;if(n[r]<t)return n[r-1]-t<t-n[r]?r-1:r}return i-1}function zf(n,t,e){for(;t<e;){let i=n[t];n[t]=n[e],n[e]=i,++t,--e}}function kt(n,t){let e=Array.isArray(t)?t:[t],i=e.length;for(let r=0;r<i;r++)n[n.length]=e[r]}function Kt(n,t){let e=n.length;if(e!==t.length)return!1;for(let i=0;i<e;i++)if(n[i]!==t[i])return!1;return!0}function Xf(n,t,e){let i=t||re;return n.every(function(r,s){if(s===0)return!0;let o=i(n[s-1],r);return!(o>0||e&&o===0)})}var ft=w(()=>{});function xi(){return!0}function Ei(){return!1}function Ci(){}function yo(n){let t,e,i;return function(){let r=Array.prototype.slice.call(arguments);return(!e||this!==i||!Kt(r,e))&&(i=this,e=r,t=n.apply(this,arguments)),t}}function Wf(n){function t(){let e;try{e=n()}catch(i){return Promise.reject(i)}return e instanceof Promise?e:Promise.resolve(e)}return t()}var te=w(()=>{ft()});var xl,Ot,Qe=w(()=>{xl=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}},Ot=xl});var El,Ki,Qr=w(()=>{Jr();te();Re();Qe();El=class extends Bi{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let i=this.listeners_||(this.listeners_={}),r=i[t]||(i[t]=[]);r.includes(e)||r.push(e)}dispatchEvent(t){let e=typeof t=="string",i=e?t:t.type,r=this.listeners_&&this.listeners_[i];if(!r)return;let s=e?new Ot(t):t;s.target||(s.target=this.eventTarget_||this);let o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});i in o||(o[i]=0,a[i]=0),++o[i];let l;for(let h=0,c=r.length;h<c;++h)if("handleEvent"in r[h]?l=r[h].handleEvent(s):l=r[h].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--o[i]===0){let h=a[i];for(delete a[i];h--;)this.removeEventListener(i,Ci);delete o[i]}return l}disposeInternal(){this.listeners_&&Je(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(t,e){if(!this.listeners_)return;let i=this.listeners_[t];if(!i)return;let r=i.indexOf(e);r!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[r]=Ci,++this.pendingRemovals_[t]):(i.splice(r,1),i.length===0&&delete this.listeners_[t]))}},Ki=El});function M_(n){if(Array.isArray(n))for(let t=0,e=n.length;t<e;++t)q(n[t]);else q(n)}var $n,xo,Cl=w(()=>{Bt();lt();Qr();$n=class extends Ki{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(k.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let i=t.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=j(this,t[s],e);return r}return j(this,t,e)}onceInternal(t,e){let i;if(Array.isArray(t)){let r=t.length;i=new Array(r);for(let s=0;s<r;++s)i[s]=Hn(this,t[s],e)}else i=Hn(this,t,e);return e.ol_key=i,i}unInternal(t,e){let i=e.ol_key;if(i)M_(i);else if(Array.isArray(t))for(let r=0,s=t.length;r<s;++r)this.removeEventListener(t[r],e);else this.removeEventListener(t,e)}};$n.prototype.on;$n.prototype.once;$n.prototype.un;xo=$n});function W(){throw new Error("Unimplemented abstract method.")}function Y(n){return n.ol_uid||(n.ol_uid=String(++O_))}var O_,ht=w(()=>{O_=0});var Eo,wl,xt,Te=w(()=>{Zn();Cl();Qe();Re();ht();Eo=class extends Ot{constructor(t,e,i){super(t),this.key=e,this.oldValue=i}},wl=class extends xo{constructor(t){super(),this.on,this.once,this.un,Y(this),this.values_=null,t!==void 0&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let i;i=`change:${t}`,this.hasListener(i)&&this.dispatchEvent(new Eo(i,t,e)),i=De.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new Eo(i,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,i){let r=this.values_||(this.values_={});if(i)r[t]=e;else{let s=r[t];r[t]=e,s!==e&&this.notify(t,s)}}setProperties(t,e){for(let i in t)this.set(i,t[i],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let i=this.values_[t];delete this.values_[t],ge(this.values_)&&(this.values_=null),e||this.notify(t,i)}}},xt=wl});var Uf,Jn,Sl,Nt,Qn=w(()=>{$r();Te();Qe();Uf={LENGTH:"length"},Jn=class extends Ot{constructor(t,e,i){super(t),this.element=e,this.index=i}},Sl=class extends xt{constructor(t,e){if(super(),this.on,this.once,this.un,e=e||{},this.unique_=!!e.unique,this.array_=t??[],this.unique_)for(let i=1,r=this.array_.length;i<r;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(t){for(let e=0,i=t.length;e<i;++e)this.push(t[e]);return this}forEach(t){let e=this.array_;for(let i=0,r=e.length;i<r;++i)t(e[i],i,e)}getArray(){return this.array_}item(t){return this.array_[t]}getLength(){return this.get(Uf.LENGTH)}insertAt(t,e){if(t<0||t>this.getLength())throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new Jn(Mt.ADD,e,t))}pop(){return this.removeAt(this.getLength()-1)}push(t){let e=this.getLength();return this.insertAt(e,t),this.getLength()}remove(t){let e=this.array_;for(let i=0,r=e.length;i<r;++i)if(e[i]===t)return this.removeAt(i)}removeAt(t){if(t<0||t>=this.getLength())return;let e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new Jn(Mt.REMOVE,e,t)),e}setAt(t,e){let i=this.getLength();if(t>=i){this.insertAt(t,e);return}if(t<0)throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e,t);let r=this.array_[t];this.array_[t]=e,this.dispatchEvent(new Jn(Mt.REMOVE,r,t)),this.dispatchEvent(new Jn(Mt.ADD,e,t))}updateLength_(){this.set(Uf.LENGTH,this.array_.length)}assertUnique_(t,e){let i=this.array_;for(let r=0,s=i.length;r<s;++r)if(i[r]===t&&r!==e)throw new Error("Duplicate item added to a unique collection")}},Nt=Sl});var Rl,Vi,Tl=w(()=>{Qe();Rl=class extends Ot{constructor(t,e,i){super(t),this.map=e,this.frameState=i!==void 0?i:null}},Vi=Rl});var Il,ti,vl=w(()=>{Tl();Il=class extends Vi{constructor(t,e,i,r,s,o){super(t,e,s),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(t){this.pixel_=t}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(t){this.coordinate_=t}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}},ti=Il});var ct,ts=w(()=>{lt();ct={SINGLECLICK:"singleclick",CLICK:k.CLICK,DBLCLICK:k.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}});var Tn,b_,AE,jf,Ll,Yf,vt,Al,Co,ke=w(()=>{Tn=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",b_=Tn.includes("safari")&&!Tn.includes("chrom"),AE=b_&&(Tn.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(Tn)),jf=Tn.includes("webkit")&&!Tn.includes("edge"),Ll=Tn.includes("macintosh"),Yf=typeof devicePixelRatio<"u"?devicePixelRatio:1,vt=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Al=typeof Image<"u"&&Image.prototype.decode,Co=(function(){let n=!1;try{let t=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return n})()});var es,Pl=w(()=>{es={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}});var Ml,Bf,Kf=w(()=>{vl();ts();Bt();lt();Qr();ke();Pl();Ml=class extends Ki{constructor(t,e){super(t),this.map_=t,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=e===void 0?1:e,this.down_=null;let i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=j(i,es.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=j(i,es.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(k.TOUCHMOVE,this.boundHandleTouchMove_,Co?{passive:!1}:!1)}emulateClick_(t){let e=new ti(ct.CLICK,this.map_,t);this.dispatchEvent(e),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new ti(ct.DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let i=new ti(ct.SINGLECLICK,this.map_,t);this.dispatchEvent(i)},250)}updateActivePointers_(t){let e=t,i=e.pointerId;if(e.type==ct.POINTERUP||e.type==ct.POINTERCANCEL){delete this.trackedTouches_[i];for(let r in this.trackedTouches_)if(this.trackedTouches_[r].target!==e.target){delete this.trackedTouches_[r];break}}else(e.type==ct.POINTERDOWN||e.type==ct.POINTERMOVE)&&(this.trackedTouches_[i]=e);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(t){this.updateActivePointers_(t);let e=new ti(ct.POINTERUP,this.map_,t,void 0,void 0,this.activePointers_);this.dispatchEvent(e),this.emulateClicks_&&!e.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(t)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(q),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(t){return t.button===0}handlePointerDown_(t){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(t);let e=new ti(ct.POINTERDOWN,this.map_,t,void 0,void 0,this.activePointers_);if(this.dispatchEvent(e),this.down_=new PointerEvent(t.type,t),Object.defineProperty(this.down_,"target",{writable:!1,value:t.target}),this.dragListenerKeys_.length===0){let i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(j(i,ct.POINTERMOVE,this.handlePointerMove_,this),j(i,ct.POINTERUP,this.handlePointerUp_,this),j(this.element_,ct.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(j(this.element_.getRootNode(),ct.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(t){if(this.isMoving_(t)){this.updateActivePointers_(t),this.dragging_=!0;let e=new ti(ct.POINTERDRAG,this.map_,t,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(e)}}relayMoveEvent_(t){this.originalPointerMoveEvent_=t;let e=!!(this.down_&&this.isMoving_(t));this.dispatchEvent(new ti(ct.POINTERMOVE,this.map_,t,e))}handleTouchMove_(t){let e=this.originalPointerMoveEvent_;(!e||e.defaultPrevented)&&(typeof t.cancelable!="boolean"||t.cancelable===!0)&&t.preventDefault()}isMoving_(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(q(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(k.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(q(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(q),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}},Bf=Ml});var Ie,wo=w(()=>{Ie={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"}});var Rt,Ol=w(()=>{Rt={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"}});var G,ei=w(()=>{G={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}});function K(n,t){if(!n)throw new Error(t)}var Gt=w(()=>{});var is,bl,Vf,Zf=w(()=>{Gt();Re();is=1/0,bl=class{constructor(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,Je(this.queuedElements_)}dequeue(){let t=this.elements_,e=this.priorities_,i=t[0];t.length==1?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));let r=this.keyFunction_(i);return delete this.queuedElements_[r],i}enqueue(t){K(!(this.keyFunction_(t)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let e=this.priorityFunction_(t);return e!=is?(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(t){return t*2+1}getRightChildIndex_(t){return t*2+2}getParentIndex_(t){return t-1>>1}heapify_(){let t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)}isEmpty(){return this.elements_.length===0}isKeyQueued(t){return t in this.queuedElements_}isQueued(t){return this.isKeyQueued(this.keyFunction_(t))}siftUp_(t){let e=this.elements_,i=this.priorities_,r=e.length,s=e[t],o=i[t],a=t;for(;t<r>>1;){let l=this.getLeftChildIndex_(t),h=this.getRightChildIndex_(t),c=h<r&&i[h]<i[l]?h:l;e[t]=e[c],i[t]=i[c],t=c}e[t]=s,i[t]=o,this.siftDown_(a,t)}siftDown_(t,e){let i=this.elements_,r=this.priorities_,s=i[e],o=r[e];for(;e>t;){let a=this.getParentIndex_(e);if(r[a]>o)i[e]=i[a],r[e]=r[a],e=a;else break}i[e]=s,r[e]=o}reprioritize(){let t=this.priorityFunction_,e=this.elements_,i=this.priorities_,r=0,s=e.length,o,a,l;for(a=0;a<s;++a)o=e[a],l=t(o),l==is?delete this.queuedElements_[this.keyFunction_(o)]:(i[r]=l,e[r++]=o);e.length=r,i.length=r,this.heapify_()}},Vf=bl});function qf(n,t,e,i,r){if(!n||!(e in n.wantedTiles))return is;if(!n.wantedTiles[e][t.getKey()])return is;let s=n.viewState.center,o=i[0]-s[0],a=i[1]-s[1];return 65536*Math.log(r)+Math.sqrt(o*o+a*a)/r}var Fl,Hf,$f=w(()=>{ei();lt();Zf();Fl=class extends Vf{constructor(t,e){super(i=>t.apply(null,i),i=>i[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=e,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(t){let e=super.enqueue(t);return e&&t[0].addEventListener(k.CHANGE,this.boundHandleTileChange_),e}getTilesLoading(){return this.tilesLoading_}handleTileChange(t){let e=t.target,i=e.getState();if(i===G.LOADED||i===G.ERROR||i===G.EMPTY){i!==G.ERROR&&e.removeEventListener(k.CHANGE,this.boundHandleTileChange_);let r=e.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(t,e){let i=0;for(;this.tilesLoading_<t&&i<e&&this.getCount()>0;){let r=this.dequeue()[0],s=r.getKey();r.getState()===G.IDLE&&!(s in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[s]=!0,++this.tilesLoading_,++i,r.load())}}},Hf=Fl});var Lt,So=w(()=>{Lt={ANIMATING:0,INTERACTING:1}});var ve,Jf=w(()=>{ve={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"}});function it(n,t,e){return Math.min(Math.max(n,t),e)}function Qf(n,t,e,i,r,s){let o=r-e,a=s-i;if(o!==0||a!==0){let l=((n-e)*o+(t-i)*a)/(o*o+a*a);l>1?(e=r,i=s):l>0&&(e+=o*l,i+=a*l)}return Ne(n,t,e,i)}function Ne(n,t,e,i){let r=e-n,s=i-t;return r*r+s*s}function td(n){let t=n.length;for(let i=0;i<t;i++){let r=i,s=Math.abs(n[i][i]);for(let a=i+1;a<t;a++){let l=Math.abs(n[a][i]);l>s&&(s=l,r=a)}if(s===0)return null;let o=n[r];n[r]=n[i],n[i]=o;for(let a=i+1;a<t;a++){let l=-n[a][i]/n[i][i];for(let h=i;h<t+1;h++)i==h?n[a][h]=0:n[a][h]+=l*n[i][h]}}let e=new Array(t);for(let i=t-1;i>=0;i--){e[i]=n[i][t]/n[i][i];for(let r=i-1;r>=0;r--)n[r][t]-=n[r][i]*e[i]}return e}function Ro(n){return n*180/Math.PI}function Ge(n){return n*Math.PI/180}function ii(n,t){let e=n%t;return e*t<0?e+t:e}function zt(n,t,e){return n+e*(t-n)}function In(n,t){let e=Math.pow(10,t);return Math.round(n*e)/e}function ns(n,t){return Math.floor(In(n,t))}function rs(n,t){return Math.ceil(In(n,t))}function To(n,t,e){if(n>=t&&n<e)return n;let i=e-t;return((n-t)%i+i)%i+t}var dt=w(()=>{});function Dl(n,t,e){return(function(i,r,s,o,a){if(!i)return;if(!r&&!t)return i;let l=t?0:s[0]*r,h=t?0:s[1]*r,c=a?a[0]:0,u=a?a[1]:0,f=n[0]+l/2+c,d=n[2]-l/2+c,g=n[1]+h/2+u,p=n[3]-h/2+u;f>d&&(f=(d+f)/2,d=f),g>p&&(g=(p+g)/2,p=g);let m=it(i[0],f,d),y=it(i[1],g,p);if(o&&e&&r){let x=30*r;m+=-x*Math.log(1+Math.max(0,f-i[0])/x)+x*Math.log(1+Math.max(0,i[0]-d)/x),y+=-x*Math.log(1+Math.max(0,g-i[1])/x)+x*Math.log(1+Math.max(0,i[1]-p)/x)}return[m,y]})}function ed(n){return n}var id=w(()=>{dt()});var Tt,kl=w(()=>{Tt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}});function Nl(n){let t=gt();for(let e=0,i=n.length;e<i;++e)vn(t,n[e]);return t}function F_(n,t,e){let i=Math.min.apply(null,n),r=Math.min.apply(null,t),s=Math.max.apply(null,n),o=Math.max.apply(null,t);return me(i,r,s,o,e)}function Zi(n,t,e){return e?(e[0]=n[0]-t,e[1]=n[1]-t,e[2]=n[2]+t,e[3]=n[3]+t,e):[n[0]-t,n[1]-t,n[2]+t,n[3]+t]}function vo(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n.slice()}function se(n,t,e){let i,r;return t<n[0]?i=n[0]-t:n[2]<t?i=t-n[2]:i=0,e<n[1]?r=n[1]-e:n[3]<e?r=e-n[3]:r=0,i*i+r*r}function ze(n,t){return ss(n,t[0],t[1])}function wi(n,t){return n[0]<=t[0]&&t[2]<=n[2]&&n[1]<=t[1]&&t[3]<=n[3]}function ss(n,t,e){return n[0]<=t&&t<=n[2]&&n[1]<=e&&e<=n[3]}function Io(n,t){let e=n[0],i=n[1],r=n[2],s=n[3],o=t[0],a=t[1],l=Tt.UNKNOWN;return o<e?l=l|Tt.LEFT:o>r&&(l=l|Tt.RIGHT),a<i?l=l|Tt.BELOW:a>s&&(l=l|Tt.ABOVE),l===Tt.UNKNOWN&&(l=Tt.INTERSECTING),l}function gt(){return[1/0,1/0,-1/0,-1/0]}function me(n,t,e,i,r){return r?(r[0]=n,r[1]=t,r[2]=e,r[3]=i,r):[n,t,e,i]}function Si(n){return me(1/0,1/0,-1/0,-1/0,n)}function tr(n,t){let e=n[0],i=n[1];return me(e,i,e,i,t)}function er(n,t,e,i,r){let s=Si(r);return Gl(s,n,t,e,i)}function Ri(n,t){return n[0]==t[0]&&n[2]==t[2]&&n[1]==t[1]&&n[3]==t[3]}function ir(n,t){return t[0]<n[0]&&(n[0]=t[0]),t[2]>n[2]&&(n[2]=t[2]),t[1]<n[1]&&(n[1]=t[1]),t[3]>n[3]&&(n[3]=t[3]),n}function vn(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function Gl(n,t,e,i,r){for(;e<i;e+=r)D_(n,t[e],t[e+1]);return n}function D_(n,t,e){n[0]=Math.min(n[0],t),n[1]=Math.min(n[1],e),n[2]=Math.max(n[2],t),n[3]=Math.max(n[3],e)}function Lo(n,t){let e;return e=t(nr(n)),e||(e=t(rr(n)),e)||(e=t(sr(n)),e)||(e=t(oe(n)),e)?e:!1}function os(n){let t=0;return ri(n)||(t=$(n)*ut(n)),t}function nr(n){return[n[0],n[1]]}function rr(n){return[n[2],n[1]]}function Vt(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function nd(n,t){let e;if(t==="bottom-left")e=nr(n);else if(t==="bottom-right")e=rr(n);else if(t==="top-left")e=oe(n);else if(t==="top-right")e=sr(n);else throw new Error("Invalid corner");return e}function as(n,t,e,i,r){let[s,o,a,l,h,c,u,f]=zl(n,t,e,i);return me(Math.min(s,a,h,u),Math.min(o,l,c,f),Math.max(s,a,h,u),Math.max(o,l,c,f),r)}function zl(n,t,e,i){let r=t*i[0]/2,s=t*i[1]/2,o=Math.cos(e),a=Math.sin(e),l=r*o,h=r*a,c=s*o,u=s*a,f=n[0],d=n[1];return[f-l+u,d-h-c,f-l-u,d-h+c,f+l-u,d+h+c,f+l+u,d+h-c,f-l+u,d-h-c]}function ut(n){return n[3]-n[1]}function ni(n,t,e){let i=e||gt();return pt(n,t)?(n[0]>t[0]?i[0]=n[0]:i[0]=t[0],n[1]>t[1]?i[1]=n[1]:i[1]=t[1],n[2]<t[2]?i[2]=n[2]:i[2]=t[2],n[3]<t[3]?i[3]=n[3]:i[3]=t[3]):Si(i),i}function oe(n){return[n[0],n[3]]}function sr(n){return[n[2],n[3]]}function $(n){return n[2]-n[0]}function pt(n,t){return n[0]<=t[2]&&n[2]>=t[0]&&n[1]<=t[3]&&n[3]>=t[1]}function ri(n){return n[2]<n[0]||n[3]<n[1]}function rd(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n}function sd(n,t,e){let i=!1,r=Io(n,t),s=Io(n,e);if(r===Tt.INTERSECTING||s===Tt.INTERSECTING)i=!0;else{let o=n[0],a=n[1],l=n[2],h=n[3],c=t[0],u=t[1],f=e[0],d=e[1],g=(d-u)/(f-c),p,m;s&Tt.ABOVE&&!(r&Tt.ABOVE)&&(p=f-(d-h)/g,i=p>=o&&p<=l),!i&&s&Tt.RIGHT&&!(r&Tt.RIGHT)&&(m=d-(f-l)*g,i=m>=a&&m<=h),!i&&s&Tt.BELOW&&!(r&Tt.BELOW)&&(p=f-(d-a)/g,i=p>=o&&p<=l),!i&&s&Tt.LEFT&&!(r&Tt.LEFT)&&(m=d-(f-o)*g,i=m>=a&&m<=h)}return i}function od(n,t,e,i){if(ri(n))return Si(e);let r=[];if(i>1){let a=n[2]-n[0],l=n[3]-n[1];for(let h=0;h<i;++h)r.push(n[0]+a*h/i,n[1],n[2],n[1]+l*h/i,n[2]-a*h/i,n[3],n[0],n[3]-l*h/i)}else r=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]];t(r,r,2);let s=[],o=[];for(let a=0,l=r.length;a<l;a+=2)s.push(r[a]),o.push(r[a+1]);return F_(s,o,e)}function Xl(n,t){let e=t.getExtent(),i=Vt(n);if(t.canWrapX()&&(i[0]<e[0]||i[0]>=e[2])){let r=$(e),o=Math.floor((i[0]-e[0])/r)*r;n[0]-=o,n[2]-=o}return n}function Ao(n,t,e){if(t.canWrapX()){let i=t.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[i[0],n[1],i[2],n[3]]];Xl(n,t);let r=$(i);if($(n)>r&&!e)return[[i[0],n[1],i[2],n[3]]];if(n[0]<i[0])return[[n[0]+r,n[1],i[2],n[3]],[i[0],n[1],n[2],n[3]]];if(n[2]>i[2])return[[n[0],n[1],i[2],n[3]],[i[0],n[1],n[2]-r,n[3]]]}return[n]}var H=w(()=>{kl()});function Po(n,t){return n[0]+=+t[0],n[1]+=+t[1],n}function Ln(n,t){let e=!0;for(let i=n.length-1;i>=0;--i)if(n[i]!=t[i]){e=!1;break}return e}function or(n,t){let e=Math.cos(t),i=Math.sin(t),r=n[0]*e-n[1]*i,s=n[1]*e+n[0]*i;return n[0]=r,n[1]=s,n}function Mo(n,t){return n[0]*=t,n[1]*=t,n}function Oo(n,t){if(t.canWrapX()){let e=$(t.getExtent()),i=ad(n,t,e);i&&(n[0]-=i*e)}return n}function ad(n,t,e){let i=t.getExtent(),r=0;return t.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(e=e||$(i),r=Math.floor((n[0]-i[0])/e)),r}function ld(n,t,e){let i=Math.sqrt((t[0]-n[0])*(t[0]-n[0])+(t[1]-n[1])*(t[1]-n[1])),r=[(t[0]-n[0])/i,(t[1]-n[1])/i],s=[-r[1],r[0]],o=Math.sqrt((e[0]-n[0])*(e[0]-n[0])+(e[1]-n[1])*(e[1]-n[1])),a=[(e[0]-n[0])/o,(e[1]-n[1])/o],l=i===0||o===0?0:Math.acos(it(a[0]*r[0]+a[1]*r[1],-1,1));return l=Math.max(l,1e-5),a[0]*s[0]+a[1]*s[1]>0?l:Math.PI*2-l}var Ti=w(()=>{H();dt()});function Wl(n){return Math.pow(n,3)}function Le(n){return 1-Wl(1-n)}function hd(n){return 3*n*n-2*n*n*n}function cd(n){return n}var Hi=w(()=>{});function Ul(n,t,e){e=e||k_;let i=Ge(n[1]),r=Ge(t[1]),s=(r-i)/2,o=Ge(t[0]-n[0])/2,a=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(i)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}var k_,ud=w(()=>{dt();k_=63710088e-1});function bo(...n){N_>fd.warn||console.warn(...n)}var fd,N_,jl=w(()=>{fd={info:1,warn:2,error:3,none:4},N_=fd.info});var Ii,Yl=w(()=>{Ii={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937}});var Bl,ar,Fo=w(()=>{Yl();Bl=class{constructor(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||Ii[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(t){this.defaultTileGrid_=t}setExtent(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)}setWorldExtent(t){this.worldExtent_=t}setGetPointResolution(t){this.getPointResolutionFunc_=t}getPointResolutionFunc(){return this.getPointResolutionFunc_}},ar=Bl});function dd(n,t,e,i){let r=n.length;e=e>1?e:2,i=i??e,t===void 0&&(e>2?t=n.slice():t=new Array(r));for(let s=0;s<r;s+=i){t[s]=lr*n[s]/180;let o=ls*Math.log(Math.tan(Math.PI*(+n[s+1]+90)/360));o>Do?o=Do:o<-Do&&(o=-Do),t[s+1]=o}return t}function gd(n,t,e,i){let r=n.length;e=e>1?e:2,i=i??e,t===void 0&&(e>2?t=n.slice():t=new Array(r));for(let s=0;s<r;s+=i)t[s]=180*n[s]/lr,t[s+1]=360*Math.atan(Math.exp(n[s+1]/ls))/Math.PI-90;return t}var ls,lr,G_,z_,Do,qi,Kl,md=w(()=>{Fo();ls=6378137,lr=Math.PI*ls,G_=[-lr,-lr,lr,lr],z_=[-180,-85,180,85],Do=ls*Math.log(Math.tan(Math.PI/2)),qi=class extends ar{constructor(t){super({code:t,units:"m",extent:G_,global:!0,worldExtent:z_,getPointResolution:function(e,i){return e/Math.cosh(i[1]/ls)}})}},Kl=[new qi("EPSG:3857"),new qi("EPSG:102100"),new qi("EPSG:102113"),new qi("EPSG:900913"),new qi("http://www.opengis.net/def/crs/EPSG/0/3857"),new qi("http://www.opengis.net/gml/srs/epsg.xml#3857")]});var X_,pd,W_,vi,Vl,_d=w(()=>{Fo();X_=6378137,pd=[-180,-90,180,90],W_=Math.PI*X_/180,vi=class extends ar{constructor(t,e){super({code:t,units:"degrees",extent:pd,axisOrientation:e,global:!0,metersPerUnit:W_,worldExtent:pd})}},Vl=[new vi("CRS:84"),new vi("EPSG:4326","neu"),new vi("urn:ogc:def:crs:OGC:1.3:CRS84"),new vi("urn:ogc:def:crs:OGC:2:84"),new vi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new vi("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new vi("http://www.opengis.net/def/crs/EPSG/0/4326","neu")]});function yd(n){return Zl[n]||Zl[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function xd(n,t){Zl[n]=t}var Zl,Ed=w(()=>{Zl={}});function cr(n,t,e){let i=n.getCode(),r=t.getCode();i in hr||(hr[i]={}),hr[i][r]=e}function ko(n,t){return n in hr&&t in hr[n]?hr[n][t]:null}var hr,Cd=w(()=>{hr={}});function H_(n,t,e){let i=n-5e5,o=(e.north?t:t-1e7)/No/(Go*Ld),a=o+B_*Math.sin(2*o)+K_*Math.sin(4*o)+V_*Math.sin(6*o)+Z_*Math.sin(8*o),l=Math.sin(a),h=l*l,c=Math.cos(a),u=l/c,f=u*u,d=f*f,g=1-Ae*h,p=Math.sqrt(1-Ae*h),m=Go/p,y=(1-Ae)/g,x=An*c**2,C=x*x,_=i/(m*No),E=_*_,I=E*_,A=I*_,T=A*_,S=T*_,v=a-u/y*(E/2-A/24*(5+3*f+10*x-4*C-9*An))+S/720*(61+90*f+298*x+45*d-252*An-3*C),F=(_-I/6*(1+2*f+x)+T/120*(5-2*x+28*f-3*C+8*An+24*d))/c;return F=To(F+Ge(Ad(e.number)),-Math.PI,Math.PI),[Ro(F),Ro(v)]}function J_(n,t,e){n=To(n,q_,$_),t<Sd?t=Sd:t>Rd&&(t=Rd);let i=Ge(t),r=Math.sin(i),s=Math.cos(i),o=r/s,a=o*o,l=a*a,h=Ge(n),c=Ad(e.number),u=Ge(c),f=Go/Math.sqrt(1-Ae*r**2),d=An*s**2,g=s*To(h-u,-Math.PI,Math.PI),p=g*g,m=p*g,y=m*g,x=y*g,C=x*g,_=Go*(Ld*i-U_*Math.sin(2*i)+j_*Math.sin(4*i)-Y_*Math.sin(6*i)),E=No*f*(g+m/6*(1-a+d)+x/120*(5-18*a+l+72*d-58*An))+5e5,I=No*(_+f*o*(p/2+y/24*(5-a+9*d+4*d**2)+C/720*(61-58*a+l+600*d-330*An)));return e.north||(I+=1e7),[E,I]}function Ad(n){return(n-1)*6-180+3}function Pd(n){let t=0;for(let r of Q_){let s=n.match(r);if(s){t=parseInt(s[1]);break}}if(!t)return null;let e=0,i=!1;return t>32700&&t<32761?e=t-32700:t>32600&&t<32661&&(i=!0,e=t-32600),e?{number:e,north:i}:null}function Td(n,t){return function(e,i,r,s){let o=e.length;r=r>1?r:2,s=s??r,i||(r>2?i=e.slice():i=new Array(o));for(let a=0;a<o;a+=s){let l=e[a],h=e[a+1],c=n(l,h,t);i[a]=c[0],i[a+1]=c[1]}return i}}function Md(n){return Pd(n)?new ar({code:n,units:"m"}):null}function Od(n){let t=Pd(n.getCode());return t?{forward:Td(J_,t),inverse:Td(H_,t)}:null}var No,Ae,zo,Xo,An,wd,ur,Id,Hl,ql,vd,Ld,U_,j_,Y_,B_,K_,V_,Z_,Go,Sd,Rd,q_,$_,Q_,bd=w(()=>{dt();Fo();No=.9996,Ae=.00669438,zo=Ae*Ae,Xo=zo*Ae,An=Ae/(1-Ae),wd=Math.sqrt(1-Ae),ur=(1-wd)/(1+wd),Id=ur*ur,Hl=Id*ur,ql=Hl*ur,vd=ql*ur,Ld=1-Ae/4-3*zo/64-5*Xo/256,U_=3*Ae/8+3*zo/32+45*Xo/1024,j_=15*zo/256+45*Xo/1024,Y_=35*Xo/3072,B_=3/2*ur-27/32*Hl+269/512*vd,K_=21/16*Id-55/32*ql,V_=151/96*Hl-417/128*vd,Z_=1097/512*ql,Go=6378137;Sd=-80,Rd=84,q_=-180,$_=180;Q_=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/]});function Dd(n){Jl=!(n===void 0?!0:n)}function th(n,t){if(t!==void 0){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];t=t}else t=n.slice();return t}function Ql(n){xd(n.getCode(),n),cr(n,n,th)}function iy(n){n.forEach(Ql)}function ot(n){if(typeof n!="string")return n;let t=yd(n);if(t)return t;for(let e of ey){let i=e(n);if(i)return i}return null}function eh(n,t,e,i){n=ot(n);let r,s=n.getPointResolutionFunc();if(s){if(r=s(t,e),i&&i!==n.getUnits()){let o=n.getMetersPerUnit();o&&(r=r*o/Ii[i])}}else{let o=n.getUnits();if(o=="degrees"&&!i||i=="degrees")r=t;else{let a=Pn(n,ot("EPSG:4326"));if(!a&&o!=="degrees")r=t*n.getMetersPerUnit();else{let h=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];h=a(h,h,2);let c=Ul(h.slice(0,2),h.slice(2,4)),u=Ul(h.slice(4,6),h.slice(6,8));r=(c+u)/2}let l=i?Ii[i]:n.getMetersPerUnit();l!==void 0&&(r/=l)}}return r}function Fd(n){iy(n),n.forEach(function(t){n.forEach(function(e){t!==e&&cr(t,e,th)})})}function ny(n,t,e,i){n.forEach(function(r){t.forEach(function(s){cr(r,s,e),cr(s,r,i)})})}function Wo(n,t){return n?typeof n=="string"?ot(n):n:ot(t)}function kd(n){return(function(t,e,i,r){let s=t.length;i=i!==void 0?i:2,r=r??i,e=e!==void 0?e:new Array(s);for(let o=0;o<s;o+=r){let a=n(t.slice(o,o+i)),l=a.length;for(let h=0,c=r;h<c;++h)e[o+h]=h>=l?t[o+h]:a[h]}return e})}function $i(n,t){if(n===t)return!0;let e=n.getUnits()===t.getUnits();return(n.getCode()===t.getCode()||Pn(n,t)===th)&&e}function Pn(n,t){let e=n.getCode(),i=t.getCode(),r=ko(e,i);if(r)return r;let s=null,o=null;for(let l of ty)s||(s=l(n)),o||(o=l(t));if(!s&&!o)return null;let a="EPSG:4326";if(o)if(s)r=$l(s.inverse,o.forward);else{let l=ko(e,a);l&&(r=$l(l,o.forward))}else{let l=ko(a,i);l&&(r=$l(s.inverse,l))}return r&&(Ql(n),Ql(t),cr(n,t,r)),r}function $l(n,t){return function(e,i,r,s){return i=n(e,i,r,s),t(i,i,r,s)}}function Li(n,t){let e=ot(n),i=ot(t);return Pn(e,i)}function fr(n,t,e){let i=Li(t,e);if(!i){let r=ot(t).getCode(),s=ot(e).getCode();throw new Error(`No transform available between ${r} and ${s}`)}return i(n,void 0,n.length)}function ih(n,t,e,i){let r=Li(t,e);return od(n,r,void 0,i)}function Mn(){return Xe}function hs(n,t){return Xe?fr(n,t,Xe):n}function pe(n,t){return Xe?fr(n,Xe,t):(Jl&&!Ln(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(Jl=!1,bo("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n)}function Ji(n,t){return Xe?ih(n,t,Xe):n}function _e(n,t){return Xe?ih(n,Xe,t):n}function Nd(n,t){if(!Xe)return n;let e=ot(t).getMetersPerUnit(),i=Xe.getMetersPerUnit();return e&&i?n*e/i:n}function ry(){Fd(Kl),Fd(Vl),ny(Vl,Kl,dd,gd)}var ty,ey,Jl,Xe,Xt=w(()=>{jl();Ti();H();Yl();md();_d();Ed();Cd();bd();ud();ty=[Od],ey=[Md],Jl=!0;Xe=null;ry()});function bt(){return[1,0,0,1,0,0]}function Gd(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function _t(n,t){let e=t[0],i=t[1];return t[0]=n[0]*e+n[2]*i+n[4],t[1]=n[1]*e+n[3]*i+n[5],t}function Wt(n,t,e,i,r,s,o,a){let l=Math.sin(s),h=Math.cos(s);return n[0]=i*h,n[1]=r*l,n[2]=-i*l,n[3]=r*h,n[4]=o*i*h-a*i*l+t,n[5]=o*r*l+a*r*h+e,n}function jo(n,t){let e=sy(t);K(e!==0,"Transformation matrix cannot be inverted");let i=t[0],r=t[1],s=t[2],o=t[3],a=t[4],l=t[5];return n[0]=o/e,n[1]=-r/e,n[2]=-s/e,n[3]=i/e,n[4]=(s*l-o*a)/e,n[5]=-(i*l-r*a)/e,n}function sy(n){return n[0]*n[3]-n[1]*n[2]}function zd(n){return"matrix("+n.join(", ")+")"}function Uo(n){return n.substring(7,n.length-1).split(",").map(parseFloat)}function Xd(n,t){let e=Uo(n),i=Uo(t);for(let r=0;r<6;++r)if(Math.round((e[r]-i[r])*oy[r])!==0)return!1;return!0}var GC,oy,Pe=w(()=>{Gt();GC=new Array(6);oy=[1e5,1e5,1e5,1e5,2,2]});function ae(n,t,e,i,r,s,o){s=s||[],o=o||2;let a=0;for(let l=t;l<e;l+=i){let h=n[l],c=n[l+1];s[a++]=r[0]*h+r[2]*c+r[4],s[a++]=r[1]*h+r[3]*c+r[5];for(let u=2;u<o;u++)s[a++]=n[l+u]}return s&&s.length!=a&&(s.length=a),s}function Yo(n,t,e,i,r,s,o){o=o||[];let a=Math.cos(r),l=Math.sin(r),h=s[0],c=s[1],u=0;for(let f=t;f<e;f+=i){let d=n[f]-h,g=n[f+1]-c;o[u++]=h+d*a-g*l,o[u++]=c+d*l+g*a;for(let p=f+2;p<f+i;++p)o[u++]=n[p]}return o&&o.length!=u&&(o.length=u),o}function Wd(n,t,e,i,r,s,o,a){a=a||[];let l=o[0],h=o[1],c=0;for(let u=t;u<e;u+=i){let f=n[u]-l,d=n[u+1]-h;a[c++]=l+r*f,a[c++]=h+s*d;for(let g=u+2;g<u+i;++g)a[c++]=n[g]}return a&&a.length!=c&&(a.length=c),a}function Ud(n,t,e,i,r,s,o){o=o||[];let a=0;for(let l=t;l<e;l+=i){o[a++]=n[l]+r,o[a++]=n[l+1]+s;for(let h=l+2;h<l+i;++h)o[a++]=n[h]}return o&&o.length!=a&&(o.length=a),o}var Qi=w(()=>{});var jd,ay,nh,Bo,rh=w(()=>{Te();H();te();Xt();Pe();ht();Qi();jd=bt(),ay=[NaN,NaN],nh=class extends xt{constructor(){super(),this.extent_=gt(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=yo((t,e,i)=>{if(!i)return this.getSimplifiedGeometry(e);let r=this.clone();return r.applyTransform(i),r.getSimplifiedGeometry(e)})}simplifyTransformed(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)}clone(){return W()}closestPointXY(t,e,i,r){return W()}containsXY(t,e){return this.closestPointXY(t,e,ay,Number.MIN_VALUE)===0}getClosestPoint(t,e){return e=e||[NaN,NaN],this.closestPointXY(t[0],t[1],e,1/0),e}intersectsCoordinate(t){return this.containsXY(t[0],t[1])}computeExtent(t){return W()}getExtent(t){if(this.extentRevision_!=this.getRevision()){let e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&Si(e),this.extentRevision_=this.getRevision()}return rd(this.extent_,t)}rotate(t,e){W()}scale(t,e,i){W()}simplify(t){return this.getSimplifiedGeometry(t*t)}getSimplifiedGeometry(t){return W()}getType(){return W()}applyTransform(t){W()}intersectsExtent(t){return W()}translate(t,e){W()}transform(t,e){let i=ot(t),r=i.getUnits()=="tile-pixels"?function(s,o,a){let l=i.getExtent(),h=i.getWorldExtent(),c=ut(h)/ut(l);Wt(jd,h[0],h[3],c,-c,0,0,0);let u=ae(s,0,s.length,a,jd,o),f=Li(i,e);return f?f(u,u,a):u}:Li(i,e);return this.applyTransform(r),this}},Bo=nh});function tn(n){let t;return n==2?t="XY":n==3?t="XYZ":n==4&&(t="XYZM"),t}function Yd(n){let t;return n=="XY"?t=2:n=="XYZ"||n=="XYM"?t=3:n=="XYZM"&&(t=4),t}function Bd(n,t,e){let i=n.getFlatCoordinates();if(!i)return null;let r=n.getStride();return ae(i,0,i.length,r,t,e)}var sh,le,si=w(()=>{H();ht();rh();Qi();sh=class extends Bo{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(t){return er(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinates(){return W()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getSimplifiedGeometryInternal(t){return this}getStride(){return this.stride}setFlatCoordinates(t,e){this.stride=Yd(t),this.layout=t,this.flatCoordinates=e}setCoordinates(t,e){W()}setLayout(t,e,i){let r;if(t)r=Yd(t);else{for(let s=0;s<i;++s){if(e.length===0){this.layout="XY",this.stride=2;return}e=e[0]}r=e.length,t=tn(r)}this.layout=t,this.stride=r}applyTransform(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith("XYZ")?3:2,this.stride),this.changed())}rotate(t,e){let i=this.getFlatCoordinates();if(i){let r=this.getStride();Yo(i,0,i.length,r,t,e,i),this.changed()}}scale(t,e,i){e===void 0&&(e=t),i||(i=Vt(this.getExtent()));let r=this.getFlatCoordinates();if(r){let s=this.getStride();Wd(r,0,r.length,s,t,e,i,r),this.changed()}}translate(t,e){let i=this.getFlatCoordinates();if(i){let r=this.getStride();Ud(i,0,i.length,r,t,e,i),this.changed()}}};le=sh});function oh(n,t,e,i){let r=0,s=n[e-i],o=n[e-i+1],a=0,l=0;for(;t<e;t+=i){let h=n[t]-s,c=n[t+1]-o;r+=l*h-a*c,a=h,l=c}return r/2}function ah(n,t,e,i){let r=0;for(let s=0,o=e.length;s<o;++s){let a=e[s];r+=oh(n,t,a,i),t=a}return r}function Kd(n,t,e,i){let r=0;for(let s=0,o=e.length;s<o;++s){let a=e[s];r+=ah(n,t,a,i),t=a[a.length-1]}return r}var Ko=w(()=>{});function Vd(n,t,e,i,r,s,o){let a=n[t],l=n[t+1],h=n[e]-a,c=n[e+1]-l,u;if(h===0&&c===0)u=t;else{let f=((r-a)*h+(s-l)*c)/(h*h+c*c);if(f>1)u=e;else if(f>0){for(let d=0;d<i;++d)o[d]=zt(n[t+d],n[e+d],f);o.length=i;return}else u=t}for(let f=0;f<i;++f)o[f]=n[u+f];o.length=i}function cs(n,t,e,i,r){let s=n[t],o=n[t+1];for(t+=i;t<e;t+=i){let a=n[t],l=n[t+1],h=Ne(s,o,a,l);h>r&&(r=h),s=a,o=l}return r}function us(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s){let a=e[s];r=cs(n,t,a,i,r),t=a}return r}function Zd(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s){let a=e[s];r=us(n,t,a,i,r),t=a[a.length-1]}return r}function fs(n,t,e,i,r,s,o,a,l,h,c){if(t==e)return h;let u,f;if(r===0){if(f=Ne(o,a,n[t],n[t+1]),f<h){for(u=0;u<i;++u)l[u]=n[t+u];return l.length=i,f}return h}c=c||[NaN,NaN];let d=t+i;for(;d<e;)if(Vd(n,d-i,d,i,o,a,c),f=Ne(o,a,c[0],c[1]),f<h){for(h=f,u=0;u<i;++u)l[u]=c[u];l.length=i,d+=i}else d+=i*Math.max((Math.sqrt(f)-Math.sqrt(h))/r|0,1);if(s&&(Vd(n,e-i,t,i,o,a,c),f=Ne(o,a,c[0],c[1]),f<h)){for(h=f,u=0;u<i;++u)l[u]=c[u];l.length=i}return h}function ds(n,t,e,i,r,s,o,a,l,h,c){c=c||[NaN,NaN];for(let u=0,f=e.length;u<f;++u){let d=e[u];h=fs(n,t,d,i,r,s,o,a,l,h,c),t=d}return h}function Hd(n,t,e,i,r,s,o,a,l,h,c){c=c||[NaN,NaN];for(let u=0,f=e.length;u<f;++u){let d=e[u];h=ds(n,t,d,i,r,s,o,a,l,h,c),t=d[d.length-1]}return h}var dr=w(()=>{dt()});function qd(n,t,e,i){for(let r=0,s=e.length;r<s;++r)n[t++]=e[r];return t}function On(n,t,e,i){for(let r=0,s=e.length;r<s;++r){let o=e[r];for(let a=0;a<i;++a)n[t++]=o[a]}return t}function en(n,t,e,i,r){r=r||[];let s=0;for(let o=0,a=e.length;o<a;++o){let l=On(n,t,e[o],i);r[s++]=l,t=l}return r.length=s,r}function Vo(n,t,e,i,r){r=r||[];let s=0;for(let o=0,a=e.length;o<a;++o){let l=en(n,t,e[o],i,r[s]);l.length===0&&(l[0]=t),r[s++]=l,t=l[l.length-1]}return r.length=s,r}var Ai=w(()=>{});function Me(n,t,e,i,r){r=r!==void 0?r:[];let s=0;for(let o=t;o<e;o+=i)r[s++]=n.slice(o,o+i);return r.length=s,r}function nn(n,t,e,i,r){r=r!==void 0?r:[];let s=0;for(let o=0,a=e.length;o<a;++o){let l=e[o];r[s++]=Me(n,t,l,i,r[s]),t=l}return r.length=s,r}function gs(n,t,e,i,r){r=r!==void 0?r:[];let s=0;for(let o=0,a=e.length;o<a;++o){let l=e[o];r[s++]=l.length===1&&l[0]===t?[]:nn(n,t,l,i,r[s]),t=l[l.length-1]}return r.length=s,r}var rn=w(()=>{});function bn(n,t,e,i,r,s,o){let a=(e-t)/i;if(a<3){for(;t<e;t+=i)s[o++]=n[t],s[o++]=n[t+1];return o}let l=new Array(a);l[0]=1,l[a-1]=1;let h=[t,e-i],c=0;for(;h.length>0;){let u=h.pop(),f=h.pop(),d=0,g=n[f],p=n[f+1],m=n[u],y=n[u+1];for(let x=f+i;x<u;x+=i){let C=n[x],_=n[x+1],E=Qf(C,_,g,p,m,y);E>d&&(c=x,d=E)}d>r&&(l[(c-t)/i]=1,f+i<c&&h.push(f,c),c+i<u&&h.push(c,u))}for(let u=0;u<a;++u)l[u]&&(s[o++]=n[t+u*i],s[o++]=n[t+u*i+1]);return o}function Zo(n,t,e,i,r,s,o,a){for(let l=0,h=e.length;l<h;++l){let c=e[l];o=bn(n,t,c,i,r,s,o),a.push(o),t=c}return o}function sn(n,t){return t*Math.round(n/t)}function ly(n,t,e,i,r,s,o){if(t==e)return o;let a=sn(n[t],r),l=sn(n[t+1],r);t+=i,s[o++]=a,s[o++]=l;let h,c;do if(h=sn(n[t],r),c=sn(n[t+1],r),t+=i,t==e)return s[o++]=h,s[o++]=c,o;while(h==a&&c==l);for(;t<e;){let u=sn(n[t],r),f=sn(n[t+1],r);if(t+=i,u==h&&f==c)continue;let d=h-a,g=c-l,p=u-a,m=f-l;if(d*m==g*p&&(d<0&&p<d||d==p||d>0&&p>d)&&(g<0&&m<g||g==m||g>0&&m>g)){h=u,c=f;continue}s[o++]=h,s[o++]=c,a=h,l=c,h=u,c=f}return s[o++]=h,s[o++]=c,o}function ms(n,t,e,i,r,s,o,a){for(let l=0,h=e.length;l<h;++l){let c=e[l];o=ly(n,t,c,i,r,s,o),a.push(o),t=c}return o}function $d(n,t,e,i,r,s,o,a){for(let l=0,h=e.length;l<h;++l){let c=e[l],u=[];o=ms(n,t,c,i,r,s,o,u),a.push(u),t=c[c.length-1]}return o}var on=w(()=>{dt()});var lh,hh,Jd=w(()=>{H();si();Ko();dr();Ai();rn();on();lh=class n extends le{constructor(t,e){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}clone(){return new n(this.flatCoordinates.slice(),this.layout)}closestPointXY(t,e,i,r){return r<se(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(cs(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),fs(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,i,r))}getArea(){return oh(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return Me(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){let e=[];return e.length=bn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new n(e,"XY")}getType(){return"LinearRing"}intersectsExtent(t){return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=On(this.flatCoordinates,0,t,this.stride),this.changed()}},hh=lh});var ch,Pi,ps=w(()=>{H();dt();si();Ai();ch=class n extends le{constructor(t,e){super(),this.setCoordinates(t,e)}clone(){let t=new n(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,r){let s=this.flatCoordinates,o=Ne(t,e,s[0],s[1]);if(o<r){let a=this.stride;for(let l=0;l<a;++l)i[l]=s[l];return i.length=a,o}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(t){return tr(this.flatCoordinates,t)}getType(){return"Point"}intersectsExtent(t){return ss(t,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=qd(this.flatCoordinates,0,t,this.stride),this.changed()}},Pi=ch});function Qd(n,t,e,i,r){return!Lo(r,function(o){return!an(n,t,e,i,o[0],o[1])})}function an(n,t,e,i,r,s){let o=0,a=n[e-i],l=n[e-i+1];for(;t<e;t+=i){let h=n[t],c=n[t+1];l<=s?c>s&&(h-a)*(s-l)-(r-a)*(c-l)>0&&o++:c<=s&&(h-a)*(s-l)-(r-a)*(c-l)<0&&o--,a=h,l=c}return o!==0}function _s(n,t,e,i,r,s){if(e.length===0||!an(n,t,e[0],i,r,s))return!1;for(let o=1,a=e.length;o<a;++o)if(an(n,e[o-1],e[o],i,r,s))return!1;return!0}function tg(n,t,e,i,r,s){if(e.length===0)return!1;for(let o=0,a=e.length;o<a;++o){let l=e[o];if(_s(n,t,l,i,r,s))return!0;t=l[l.length-1]}return!1}var ys=w(()=>{H()});function xs(n,t,e,i,r,s,o){let a,l,h,c,u,f,d,g=r[s+1],p=[];for(let x=0,C=e.length;x<C;++x){let _=e[x];for(c=n[_-i],f=n[_-i+1],a=t;a<_;a+=i)u=n[a],d=n[a+1],(g<=f&&d<=g||f<=g&&g<=d)&&(h=(g-f)/(d-f)*(u-c)+c,p.push(h)),c=u,f=d}let m=NaN,y=-1/0;for(p.sort(re),c=p[0],a=1,l=p.length;a<l;++a){u=p[a];let x=Math.abs(u-c);x>y&&(h=(c+u)/2,_s(n,t,e,i,h,g)&&(m=h,y=x)),c=u}return isNaN(m)&&(m=r[s]),o?(o.push(m,g,y),o):[m,g,y]}function Ho(n,t,e,i,r){let s=[];for(let o=0,a=e.length;o<a;++o){let l=e[o];s=xs(n,t,l,i,r,2*o,s),t=l[l.length-1]}return s}var qo=w(()=>{ft();ys()});function $o(n,t,e,i,r){let s;for(t+=i;t<e;t+=i)if(s=r(n.slice(t-i,t),n.slice(t,t+i)),s)return s;return!1}var uh=w(()=>{});function Es(n,t,e,i,r,s){return s=s??Gl(gt(),n,t,e,i),pt(r,s)?s[0]>=r[0]&&s[2]<=r[2]||s[1]>=r[1]&&s[3]<=r[3]?!0:$o(n,t,e,i,function(o,a){return sd(r,o,a)}):!1}function eg(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s){if(Es(n,t,e[s],i,r))return!0;t=e[s]}return!1}function fh(n,t,e,i,r){return!!(Es(n,t,e,i,r)||an(n,t,e,i,r[0],r[1])||an(n,t,e,i,r[0],r[3])||an(n,t,e,i,r[2],r[1])||an(n,t,e,i,r[2],r[3]))}function dh(n,t,e,i,r){if(!fh(n,t,e[0],i,r))return!1;if(e.length===1)return!0;for(let s=1,o=e.length;s<o;++s)if(Qd(n,e[s-1],e[s],i,r)&&!Es(n,e[s-1],e[s],i,r))return!1;return!0}function ig(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s){let a=e[s];if(dh(n,t,a,i,r))return!0;t=a[a.length-1]}return!1}var gr=w(()=>{H();ys();uh()});function ng(n,t,e,i){for(;t<e-i;){for(let r=0;r<i;++r){let s=n[t+r];n[t+r]=n[e-i+r],n[e-i+r]=s}t+=i,e-=i}}var rg=w(()=>{});function gh(n,t,e,i){let r=0,s=n[e-i],o=n[e-i+1];for(;t<e;t+=i){let a=n[t],l=n[t+1];r+=(a-s)*(l+o),s=a,o=l}return r===0?void 0:r>0}function Cs(n,t,e,i,r){r=r!==void 0?r:!1;for(let s=0,o=e.length;s<o;++s){let a=e[s],l=gh(n,t,a,i);if(s===0){if(r&&l||!r&&!l)return!1}else if(r&&!l||!r&&l)return!1;t=a}return!0}function Jo(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s){let a=e[s];if(!Cs(n,t,a,i,r))return!1;a.length&&(t=a[a.length-1])}return!0}function mr(n,t,e,i,r){r=r!==void 0?r:!1;for(let s=0,o=e.length;s<o;++s){let a=e[s],l=gh(n,t,a,i);(s===0?r&&l||!r&&!l:r&&!l||!r&&l)&&ng(n,t,a,i),t=a}return t}function ws(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s)t=mr(n,t,e[s],i,r);return t}function sg(n,t){let e=[],i=0,r=0,s;for(let o=0,a=t.length;o<a;++o){let l=t[o],h=gh(n,i,l,2);if(s===void 0&&(s=h),h===s)e.push(t.slice(r,o+1));else{if(e.length===0)continue;e[e.length-1].push(t[r])}r=o+1,i=l}return e}var Ss=w(()=>{rg()});function mh(n){if(ri(n))throw new Error("Cannot create polygon from empty extent");let t=n[0],e=n[1],i=n[2],r=n[3],s=[t,e,t,r,i,r,i,e,t,e];return new Qo(s,"XY",[s.length])}var Qo,Fn,Rs=w(()=>{ft();H();Jd();ps();si();Ko();dr();ys();Ai();rn();qo();gr();Ss();on();Qo=class n extends le{constructor(t,e,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,e!==void 0&&i?(this.setFlatCoordinates(e,t),this.ends_=i):this.setCoordinates(t,e)}appendLinearRing(t){this.flatCoordinates?kt(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new n(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,r){return r<se(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(us(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),ds(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,i,r))}containsXY(t,e){return _s(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)}getArea(){return ah(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),mr(e,0,this.ends_,this.stride,t)):e=this.flatCoordinates,nn(e,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let t=Vt(this.getExtent());this.flatInteriorPoint_=xs(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new Pi(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(t){return t<0||this.ends_.length<=t?null:new hh(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLinearRings(){let t=this.layout,e=this.flatCoordinates,i=this.ends_,r=[],s=0;for(let o=0,a=i.length;o<a;++o){let l=i[o],h=new hh(e.slice(s,l),t);r.push(h),s=l}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let t=this.flatCoordinates;Cs(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=mr(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let e=[],i=[];return e.length=ms(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),e,0,i),new n(e,"XY",i)}getType(){return"Polygon"}intersectsExtent(t){return dh(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);let i=en(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},Fn=Qo});function ph(n,t,e,i){let r=$(t)/e[0],s=ut(t)/e[1];return i?Math.min(n,Math.max(r,s)):Math.min(n,Math.min(r,s))}function _h(n,t,e){let i=Math.min(n,t),r=50;return i*=Math.log(1+r*Math.max(0,n/t-1))/r+1,e&&(i=Math.max(i,e),i/=Math.log(1+r*Math.max(0,e/n-1))/r+1),it(i,e/2,t*2)}function og(n,t,e,i){return t=t!==void 0?t:!0,(function(r,s,o,a){if(r!==void 0){let l=n[0],h=n[n.length-1],c=e?ph(l,e,o,i):l;if(a)return t?_h(r,c,h):it(r,h,c);let u=Math.min(c,r),f=Math.floor(qn(n,u,s));return n[f]>c&&f<n.length-1?n[f+1]:n[f]}})}function ag(n,t,e,i,r,s){return i=i!==void 0?i:!0,e=e!==void 0?e:0,(function(o,a,l,h){if(o!==void 0){let c=r?ph(t,r,l,s):t;if(h)return i?_h(o,c,e):it(o,e,c);let u=1e-9,f=Math.ceil(Math.log(t/c)/Math.log(n)-u),d=-a*(.5-u)+.5,g=Math.min(c,o),p=Math.floor(Math.log(t/g)/Math.log(n)+d),m=Math.max(f,p),y=t/Math.pow(n,m);return it(y,e,c)}})}function yh(n,t,e,i,r){return e=e!==void 0?e:!0,(function(s,o,a,l){if(s!==void 0){let h=i?ph(n,i,a,r):n;return!e||!l?it(s,t,h):_h(s,h,t)}})}var lg=w(()=>{ft();H();dt()});function pr(n){if(n!==void 0)return 0}function xh(n){if(n!==void 0)return n}function hg(n){let t=2*Math.PI/n;return(function(e,i){if(i)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e})}function cg(n){let t=n===void 0?Ge(5):n;return(function(e,i){return i||e===void 0?e:Math.abs(e)<=t?0:e})}var ta=w(()=>{dt()});function ea(n,t){setTimeout(function(){n(t)},0)}function hy(n){if(n.extent!==void 0){let e=n.smoothExtentConstraint!==void 0?n.smoothExtentConstraint:!0;return Dl(n.extent,n.constrainOnlyCenter,e)}let t=Wo(n.projection,"EPSG:3857");if(n.multiWorld!==!0&&t.isGlobal()){let e=t.getExtent().slice();return e[0]=-1/0,e[2]=1/0,Dl(e,!1,!1)}return ed}function cy(n){let t,e,i,o=n.minZoom!==void 0?n.minZoom:Eh,a=n.maxZoom!==void 0?n.maxZoom:28,l=n.zoomFactor!==void 0?n.zoomFactor:2,h=n.multiWorld!==void 0?n.multiWorld:!1,c=n.smoothResolutionConstraint!==void 0?n.smoothResolutionConstraint:!0,u=n.showFullExtent!==void 0?n.showFullExtent:!1,f=Wo(n.projection,"EPSG:3857"),d=f.getExtent(),g=n.constrainOnlyCenter,p=n.extent;if(!h&&!p&&f.isGlobal()&&(g=!1,p=d),n.resolutions!==void 0){let m=n.resolutions;e=m[o],i=m[a]!==void 0?m[a]:m[m.length-1],n.constrainResolution?t=og(m,c,!g&&p,u):t=yh(e,i,c,!g&&p,u)}else{let y=(d?Math.max($(d),ut(d)):360*Ii.degrees/f.getMetersPerUnit())/256/Math.pow(2,Eh),x=y/Math.pow(2,28-Eh);e=n.maxResolution,e!==void 0?o=0:e=y/Math.pow(l,o),i=n.minResolution,i===void 0&&(n.maxZoom!==void 0?n.maxResolution!==void 0?i=e/Math.pow(l,a):i=y/Math.pow(l,a):i=x),a=o+Math.floor(Math.log(e/i)/Math.log(l)),i=e/Math.pow(l,a-o),n.constrainResolution?t=ag(l,e,i,c,!g&&p,u):t=yh(e,i,c,!g&&p,u)}return{constraint:t,maxResolution:e,minResolution:i,minZoom:o,zoomFactor:l}}function uy(n){if(n.enableRotation!==void 0?n.enableRotation:!0){let e=n.constrainRotation;return e===void 0||e===!0?cg():e===!1?xh:typeof e=="number"?hg(e):xh}return pr}function fy(n){return!(n.sourceCenter&&n.targetCenter&&!Ln(n.sourceCenter,n.targetCenter)||n.sourceResolution!==n.targetResolution||n.sourceRotation!==n.targetRotation)}function Ch(n,t,e,i,r){let s=Math.cos(-r),o=Math.sin(-r),a=n[0]*s-n[1]*o,l=n[1]*s+n[0]*o;a+=(t[0]/2-e[0])*i,l+=(e[1]-t[1]/2)*i,o=-o;let h=a*s-l*o,c=l*s+a*o;return[h,c]}var Eh,wh,Zt,Ts=w(()=>{Te();So();Jf();ft();Gt();id();Ti();Hi();H();te();Rs();dt();Xt();lg();ta();Eh=0,wh=class extends xt{constructor(t){super(),this.on,this.once,this.un,t=Object.assign({},t),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=Wo(t.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,t.projection&&Dd(),t.center&&(t.center=pe(t.center,this.projection_)),t.extent&&(t.extent=_e(t.extent,this.projection_)),this.applyOptions_(t)}applyOptions_(t){let e=Object.assign({},t);for(let a in ve)delete e[a];this.setProperties(e,!0);let i=cy(t);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=i.minZoom;let r=hy(t),s=i.constraint,o=uy(t);this.constraints_={center:r,resolution:s,rotation:o},this.setRotation(t.rotation!==void 0?t.rotation:0),this.setCenterInternal(t.center!==void 0?t.center:null),t.resolution!==void 0?this.setResolution(t.resolution):t.zoom!==void 0&&this.setZoom(t.zoom)}get padding(){return this.padding_}set padding(t){let e=this.padding_;this.padding_=t;let i=this.getCenterInternal();if(i){let r=t||[0,0,0,0];e=e||[0,0,0,0];let s=this.getResolution(),o=s/2*(r[3]-e[3]+e[1]-r[1]),a=s/2*(r[0]-e[0]+e[2]-r[2]);this.setCenterInternal([i[0]+o,i[1]-a])}}getUpdatedOptions_(t){let e=this.getProperties();return e.resolution!==void 0?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object.assign({},e,t)}animate(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let e=new Array(arguments.length);for(let i=0;i<e.length;++i){let r=arguments[i];r.center&&(r=Object.assign({},r),r.center=pe(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=pe(r.anchor,this.getProjection())),e[i]=r}this.animateInternal.apply(this,e)}animateInternal(t){let e=arguments.length,i;e>1&&typeof arguments[e-1]=="function"&&(i=arguments[e-1],--e);let r=0;for(;r<e&&!this.isDef();++r){let c=arguments[r];c.center&&this.setCenterInternal(c.center),c.zoom!==void 0?this.setZoom(c.zoom):c.resolution&&this.setResolution(c.resolution),c.rotation!==void 0&&this.setRotation(c.rotation)}if(r===e){i&&ea(i,!0);return}let s=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_,h=[];for(;r<e;++r){let c=arguments[r],u={start:s,complete:!1,anchor:c.anchor,duration:c.duration!==void 0?c.duration:1e3,easing:c.easing||hd,callback:i};if(c.center&&(u.sourceCenter=o,u.targetCenter=c.center.slice(),o=u.targetCenter),c.zoom!==void 0?(u.sourceResolution=a,u.targetResolution=this.getResolutionForZoom(c.zoom),a=u.targetResolution):c.resolution&&(u.sourceResolution=a,u.targetResolution=c.resolution,a=u.targetResolution),c.rotation!==void 0){u.sourceRotation=l;let f=ii(c.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+f,l=u.targetRotation}fy(u)?u.complete=!0:s+=u.duration,h.push(u)}this.animations_.push(h),this.setHint(Lt.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[Lt.ANIMATING]>0}getInteracting(){return this.hints_[Lt.INTERACTING]>0}cancelAnimations(){this.setHint(Lt.ANIMATING,-this.hints_[Lt.ANIMATING]);let t;for(let e=0,i=this.animations_.length;e<i;++e){let r=this.animations_[e];if(r[0].callback&&ea(r[0].callback,!1),!t)for(let s=0,o=r.length;s<o;++s){let a=r[s];if(!a.complete){t=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let t=Date.now(),e=!1;for(let i=this.animations_.length-1;i>=0;--i){let r=this.animations_[i],s=!0;for(let o=0,a=r.length;o<a;++o){let l=r[o];if(l.complete)continue;let h=t-l.start,c=l.duration>0?h/l.duration:1;c>=1?(l.complete=!0,c=1):s=!1;let u=l.easing(c);if(l.sourceCenter){let f=l.sourceCenter[0],d=l.sourceCenter[1],g=l.targetCenter[0],p=l.targetCenter[1];this.nextCenter_=l.targetCenter;let m=f+u*(g-f),y=d+u*(p-d);this.targetCenter_=[m,y]}if(l.sourceResolution&&l.targetResolution){let f=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){let d=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(f,0,d,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=f,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){let f=u===1?ii(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){let d=this.constraints_.rotation(f,!0);this.targetCenter_=this.calculateCenterRotate(d,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=f}if(this.applyTargetState_(!0),e=!0,!l.complete)break}if(s){this.animations_[i]=null,this.setHint(Lt.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let o=r[0].callback;o&&ea(o,!0)}}this.animations_=this.animations_.filter(Boolean),e&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(t,e){let i,r=this.getCenterInternal();return r!==void 0&&(i=[r[0]-e[0],r[1]-e[1]],or(i,t-this.getRotation()),Po(i,e)),i}calculateCenterZoom(t,e){let i,r=this.getCenterInternal(),s=this.getResolution();if(r!==void 0&&s!==void 0){let o=e[0]-t*(e[0]-r[0])/s,a=e[1]-t*(e[1]-r[1])/s;i=[o,a]}return i}getViewportSize_(t){let e=this.viewportSize_;if(t){let i=e[0],r=e[1];return[Math.abs(i*Math.cos(t))+Math.abs(r*Math.sin(t)),Math.abs(i*Math.sin(t))+Math.abs(r*Math.cos(t))]}return e}setViewportSize(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let t=this.getCenterInternal();return t&&hs(t,this.getProjection())}getCenterInternal(){return this.get(ve.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(t){return t!==void 0?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()}calculateExtent(t){let e=this.calculateExtentInternal(t);return Ji(e,this.getProjection())}calculateExtentInternal(t){t=t||this.getViewportSizeMinusPadding_();let e=this.getCenterInternal();K(e,"The view center is not defined");let i=this.getResolution();K(i!==void 0,"The view resolution is not defined");let r=this.getRotation();return K(r!==void 0,"The view rotation is not defined"),as(e,i,r,t)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))}setConstrainResolution(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))}getProjection(){return this.projection_}getResolution(){return this.get(ve.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(t,e){return this.getResolutionForExtentInternal(_e(t,this.getProjection()),e)}getResolutionForExtentInternal(t,e){e=e||this.getViewportSizeMinusPadding_();let i=$(t)/e[0],r=ut(t)/e[1];return Math.max(i,r)}getResolutionForValueFunction(t){t=t||2;let e=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,r=Math.log(e/i)/Math.log(t);return(function(s){return e/Math.pow(t,s*r)})}getRotation(){return this.get(ve.ROTATION)}getValueForResolutionFunction(t){let e=Math.log(t||2),i=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,s=Math.log(i/r)/e;return(function(o){return Math.log(i/o)/e/s})}getViewportSizeMinusPadding_(t){let e=this.getViewportSize_(t),i=this.padding_;return i&&(e=[e[0]-i[1]-i[3],e[1]-i[0]-i[2]]),e}getState(){let t=this.getProjection(),e=this.getResolution(),i=this.getRotation(),r=this.getCenterInternal(),s=this.padding_;if(s){let o=this.getViewportSizeMinusPadding_();r=Ch(r,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],e,i)}return{center:r.slice(0),projection:t!==void 0?t:null,resolution:e,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let t,e=this.getResolution();return e!==void 0&&(t=this.getZoomForResolution(e)),t}getZoomForResolution(t){let e=this.minZoom_||0,i,r;if(this.resolutions_){let s=qn(this.resolutions_,t,1);e=s,i=this.resolutions_[s],s==this.resolutions_.length-1?r=2:r=i/this.resolutions_[s+1]}else i=this.maxResolution_,r=this.zoomFactor_;return e+Math.log(i/t)/Math.log(r)}getResolutionForZoom(t){if(this.resolutions_?.length){if(this.resolutions_.length===1)return this.resolutions_[0];let e=it(Math.floor(t),0,this.resolutions_.length-2),i=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(i,it(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)}fit(t,e){let i;if(K(Array.isArray(t)||typeof t.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(t)){K(!ri(t),"Cannot fit empty extent provided as `geometry`");let r=_e(t,this.getProjection());i=mh(r)}else if(t.getType()==="Circle"){let r=_e(t.getExtent(),this.getProjection());i=mh(r),i.rotate(this.getRotation(),Vt(r))}else{let r=Mn();r?i=t.clone().transform(r,this.getProjection()):i=t}this.fitInternal(i,e)}rotatedExtentForGeometry(t){let e=this.getRotation(),i=Math.cos(e),r=Math.sin(-e),s=t.getFlatCoordinates(),o=t.getStride(),a=1/0,l=1/0,h=-1/0,c=-1/0;for(let u=0,f=s.length;u<f;u+=o){let d=s[u]*i-s[u+1]*r,g=s[u]*r+s[u+1]*i;a=Math.min(a,d),l=Math.min(l,g),h=Math.max(h,d),c=Math.max(c,g)}return[a,l,h,c]}fitInternal(t,e){e=e||{};let i=e.size;i||(i=this.getViewportSizeMinusPadding_());let r=e.padding!==void 0?e.padding:[0,0,0,0],s=e.nearest!==void 0?e.nearest:!1,o;e.minResolution!==void 0?o=e.minResolution:e.maxZoom!==void 0?o=this.getResolutionForZoom(e.maxZoom):o=0;let a=this.rotatedExtentForGeometry(t),l=this.getResolutionForExtentInternal(a,[i[0]-r[1]-r[3],i[1]-r[0]-r[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,s?0:1);let h=this.getRotation(),c=Math.sin(h),u=Math.cos(h),f=Vt(a);f[0]+=(r[1]-r[3])/2*l,f[1]+=(r[0]-r[2])/2*l;let d=f[0]*u-f[1]*c,g=f[1]*u+f[0]*c,p=this.getConstrainedCenter([d,g],l),m=e.callback?e.callback:Ci;e.duration!==void 0?this.animateInternal({resolution:l,center:p,duration:e.duration,easing:e.easing},m):(this.targetResolution_=l,this.targetCenter_=p,this.applyTargetState_(!1,!0),ea(m,!0))}centerOn(t,e,i){this.centerOnInternal(pe(t,this.getProjection()),e,i)}centerOnInternal(t,e,i){this.setCenterInternal(Ch(t,e,i,this.getResolution(),this.getRotation()))}calculateCenterShift(t,e,i,r){let s,o=this.padding_;if(o&&t){let a=this.getViewportSizeMinusPadding_(-i),l=Ch(t,r,[a[0]/2+o[3],a[1]/2+o[0]],e,i);s=[t[0]-l[0],t[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(t){let e=hs(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])}adjustCenterInternal(t){let e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])}adjustResolution(t,e){e=e&&pe(e,this.getProjection()),this.adjustResolutionInternal(t,e)}adjustResolutionInternal(t,e){let i=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*t,0,r,i);e&&(this.targetCenter_=this.calculateCenterZoom(s,e)),this.targetResolution_*=t,this.applyTargetState_()}adjustZoom(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)}adjustRotation(t,e){e&&(e=pe(e,this.getProjection())),this.adjustRotationInternal(t,e)}adjustRotationInternal(t,e){let i=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+t,i);e&&(this.targetCenter_=this.calculateCenterRotate(r,e)),this.targetRotation_+=t,this.applyTargetState_()}setCenter(t){this.setCenterInternal(t&&pe(t,this.getProjection()))}setCenterInternal(t){this.targetCenter_=t,this.applyTargetState_()}setHint(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]}setResolution(t){this.targetResolution_=t,this.applyTargetState_()}setRotation(t){this.targetRotation_=t,this.applyTargetState_()}setZoom(t){this.setResolution(this.getResolutionForZoom(t))}applyTargetState_(t,e){let i=this.getAnimating()||this.getInteracting()||e,r=this.constraints_.rotation(this.targetRotation_,i),s=this.getViewportSize_(r),o=this.constraints_.resolution(this.targetResolution_,0,s,i),a=this.constraints_.center(this.targetCenter_,o,s,i,this.calculateCenterShift(this.targetCenter_,o,r,s));this.get(ve.ROTATION)!==r&&this.set(ve.ROTATION,r),this.get(ve.RESOLUTION)!==o&&(this.set(ve.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(ve.CENTER)||!Ln(this.get(ve.CENTER),a))&&this.set(ve.CENTER,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(t,e,i){t=t!==void 0?t:200;let r=e||0,s=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(s),a=this.constraints_.resolution(this.targetResolution_,r,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,s,o));if(t===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}i=i||(t===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==s||!this.getCenterInternal()||!Ln(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:a,duration:t,easing:Le,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(Lt.INTERACTING,1)}endInteraction(t,e,i){i=i&&pe(i,this.getProjection()),this.endInteractionInternal(t,e,i)}endInteractionInternal(t,e,i){this.getInteracting()&&(this.setHint(Lt.INTERACTING,-1),this.resolveConstraints(t,e,i))}getConstrainedCenter(t,e){let i=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),i)}getConstrainedZoom(t,e){let i=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(i,e))}getConstrainedResolution(t,e){e=e||0;let i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,e,i)}};Zt=wh});var Is,fg,oi,Sh,ln,Rh,dy,ug,na,ra,hn=w(()=>{Is="ol-hidden",fg="ol-selectable",oi="ol-unselectable",Sh="ol-unsupported",ln="ol-control",Rh="ol-collapsed",dy=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`].join(""),"i"),ug=["style","variant","weight","size","lineHeight","family"],na={normal:400,bold:700},ra=function(n){let t=n.match(dy);if(!t)return null;let e={lineHeight:"normal",size:"1.2em",style:"normal",weight:"400",variant:"normal"};for(let i=0,r=ug.length;i<r;++i){let s=t[i+1];s!==void 0&&(e[ug[i]]=typeof s=="string"?s.trim():s)}return isNaN(Number(e.weight))&&e.weight in na&&(e.weight=na[e.weight]),e.families=e.family.split(/,\s?/).map(i=>i.trim().replace(/^['"]|['"]$/g,"")),e}});function nt(n,t,e,i){let r;return e&&e.length?r=e.shift():vt?r=new class extends OffscreenCanvas{style={}}(n??300,t??150):r=document.createElement("canvas"),n&&(r.width=n),t&&(r.height=t),r.getContext("2d",i)}function _r(){return Th||(Th=nt(1,1)),Th}function Dn(n){let t=n.canvas;t.width=1,t.height=1,n.clearRect(0,0,1,1)}function dg(n){let t=n.offsetWidth,e=getComputedStyle(n);return t+=parseInt(e.marginLeft,10)+parseInt(e.marginRight,10),t}function gg(n){let t=n.offsetHeight,e=getComputedStyle(n);return t+=parseInt(e.marginTop,10)+parseInt(e.marginBottom,10),t}function yr(n,t){let e=t.parentNode;e&&e.replaceChild(n,t)}function sa(n){for(;n.lastChild;)n.lastChild.remove()}function mg(n,t){let e=n.childNodes;for(let i=0;;++i){let r=e[i],s=t[i];if(!r&&!s)break;if(r!==s){if(!r){n.appendChild(s);continue}if(!s){n.removeChild(r),--i;continue}n.insertBefore(s,r)}}}function oa(){return new Proxy({childNodes:[],appendChild:function(t){return this.childNodes.push(t),t},remove:function(){},removeChild:function(t){let e=this.childNodes.indexOf(t);if(e===-1)throw new Error("Node to remove was not found");return this.childNodes.splice(e,1),t},insertBefore:function(t,e){let i=this.childNodes.indexOf(e);if(i===-1)throw new Error("Reference node not found");return this.childNodes.splice(i,0,t),t},style:{}},{get(t,e,i){return e==="firstElementChild"?t.childNodes.length>0?t.childNodes[0]:null:Reflect.get(t,e,i)}})}function We(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}var Th,Ct=w(()=>{ke()});var Ih,Oe,xr=w(()=>{wo();Te();Bt();te();Ih=class extends xt{constructor(t){super();let e=t.element;e&&!t.target&&!e.style.pointerEvents&&(e.style.pointerEvents="auto"),this.element=e||null,this.target_=null,this.map_=null,this.listenerKeys=[],t.render&&(this.render=t.render),t.target&&this.setTarget(t.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(t){this.map_&&this.element?.remove();for(let e=0,i=this.listenerKeys.length;e<i;++e)q(this.listenerKeys[e]);if(this.listenerKeys.length=0,this.map_=t,t){let e=this.target_??t.getOverlayContainerStopEvent();this.element&&e.appendChild(this.element),this.render!==Ci&&this.listenerKeys.push(j(t,Ie.POSTRENDER,this.render,this)),t.render()}}render(t){}setTarget(t){this.target_=typeof t=="string"?document.getElementById(t):t}},Oe=Ih});var vh,aa,Lh=w(()=>{ft();hn();Ct();lt();te();xr();vh=class extends Oe{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=t.collapsed!==void 0?t.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=t.collapsible!==void 0,this.collapsible_=t.collapsible!==void 0?t.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.attributions_=t.attributions;let e=t.className!==void 0?t.className:"ol-attribution",i=t.tipLabel!==void 0?t.tipLabel:"Attributions",r=t.expandClassName!==void 0?t.expandClassName:e+"-expand",s=t.collapseLabel!==void 0?t.collapseLabel:"\u203A",o=t.collapseClassName!==void 0?t.collapseClassName:e+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=o):this.collapseLabel_=s;let a=t.label!==void 0?t.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=r):this.label_=a;let l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(k.CLICK,this.handleClick_.bind(this),!1);let h=e+" "+oi+" "+ln+(this.collapsed_&&this.collapsible_?" "+Rh:"")+(this.collapsible_?"":" ol-uncollapsible"),c=this.element;c.className=h,c.appendChild(this.toggleButton_),c.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(t){let e=this.getMap().getAllLayers(),i=new Set(e.flatMap(r=>r.getAttributions(t)));if(this.attributions_!==void 0&&(Array.isArray(this.attributions_)?this.attributions_.forEach(r=>i.add(r)):i.add(this.attributions_)),!this.overrideCollapsible_){let r=!e.some(s=>s.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(r)}return Array.from(i)}async updateElement_(t){if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}let e=await Promise.all(this.collectSourceAttributions_(t).map(r=>Wf(()=>r))),i=e.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!Kt(e,this.renderedAttributions_)){sa(this.ulElement_);for(let r=0,s=e.length;r<s;++r){let o=document.createElement("li");o.innerHTML=e[r],this.ulElement_.appendChild(o)}this.renderedAttributions_=e}}handleClick_(t){t.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(Rh),this.collapsed_?yr(this.collapseLabel_,this.label_):yr(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(t){this.userCollapsed_=t,!(!this.collapsible_||this.collapsed_===t)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(t){this.updateElement_(t.frameState)}},aa=vh});var Ah,vs,Ph=w(()=>{hn();Hi();lt();xr();Ah=class extends Oe{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target});let e=t.className!==void 0?t.className:"ol-rotate",i=t.label!==void 0?t.label:"\u21E7",r=t.compassClassName!==void 0?t.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(r));let s=t.tipLabel?t.tipLabel:"Reset rotation",o=document.createElement("button");o.className=e+"-reset",o.setAttribute("type","button"),o.title=s,o.appendChild(this.label_),o.addEventListener(k.CLICK,this.handleClick_.bind(this),!1);let a=e+" "+oi+" "+ln,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=t.resetNorth?t.resetNorth:void 0,this.duration_=t.duration!==void 0?t.duration:250,this.autoHide_=t.autoHide!==void 0?t.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Is)}handleClick_(t){t.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){let e=this.getMap().getView();if(!e)return;let i=e.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?e.animate({rotation:0,duration:this.duration_,easing:Le}):e.setRotation(0))}render(t){let e=t.frameState;if(!e)return;let i=e.viewState.rotation;if(i!=this.rotation_){let r="rotate("+i+"rad)";if(this.autoHide_){let s=this.element.classList.contains(Is);!s&&i===0?this.element.classList.add(Is):s&&i!==0&&this.element.classList.remove(Is)}this.label_.style.transform=r}this.rotation_=i}},vs=Ah});var Mh,kn,Oh=w(()=>{hn();Hi();lt();xr();Mh=class extends Oe{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target});let e=t.className!==void 0?t.className:"ol-zoom",i=t.delta!==void 0?t.delta:1,r=t.zoomInClassName!==void 0?t.zoomInClassName:e+"-in",s=t.zoomOutClassName!==void 0?t.zoomOutClassName:e+"-out",o=t.zoomInLabel!==void 0?t.zoomInLabel:"+",a=t.zoomOutLabel!==void 0?t.zoomOutLabel:"\u2013",l=t.zoomInTipLabel!==void 0?t.zoomInTipLabel:"Zoom in",h=t.zoomOutTipLabel!==void 0?t.zoomOutTipLabel:"Zoom out",c=document.createElement("button");c.className=r,c.setAttribute("type","button"),c.title=l,c.appendChild(typeof o=="string"?document.createTextNode(o):o),c.addEventListener(k.CLICK,this.handleClick_.bind(this,i),!1);let u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=h,u.appendChild(typeof a=="string"?document.createTextNode(a):a),u.addEventListener(k.CLICK,this.handleClick_.bind(this,-i),!1);let f=e+" "+oi+" "+ln,d=this.element;d.className=f,d.appendChild(c),d.appendChild(u),this.duration_=t.duration!==void 0?t.duration:250}handleClick_(t,e){e.preventDefault(),this.zoomByDelta_(t)}zoomByDelta_(t){let i=this.getMap().getView();if(!i)return;let r=i.getZoom();if(r!==void 0){let s=i.getConstrainedZoom(r+t);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:s,duration:this.duration_,easing:Le})):i.setZoom(s)}}},kn=Mh});function pg(n){n=n||{};let t=new Nt;return(n.zoom===void 0||n.zoom)&&t.push(new kn(n.zoomOptions)),(n.rotate===void 0||n.rotate)&&t.push(new vs(n.rotateOptions)),(n.attribution===void 0||n.attribution)&&t.push(new aa(n.attributionOptions)),t}var _g=w(()=>{Qn();Lh();Ph();Oh()});var bh,yg,xg=w(()=>{bh=class{constructor(t,e,i){this.decay_=t,this.minVelocity_=e,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(t,e){this.points_.push(t,e,Date.now())}end(){if(this.points_.length<6)return!1;let t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;let i=e-3;for(;i>0&&this.points_[i+2]>t;)i-=3;let r=this.points_[e+2]-this.points_[i+2];if(r<1e3/60)return!1;let s=this.points_[e]-this.points_[i],o=this.points_[e+1]-this.points_[i+1];return this.angle_=Math.atan2(o,s),this.initialVelocity_=Math.sqrt(s*s+o*o)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},yg=bh});var Fh,Eg=w(()=>{Fh={ACTIVE:"active"}});function Cg(n,t,e){let i=n.getCenterInternal();if(i){let r=[i[0]+t[0],i[1]+t[1]];n.animateInternal({duration:e!==void 0?e:250,easing:cd,center:n.getConstrainedCenter(r)})}}function Er(n,t,e,i){let r=n.getZoom();if(r===void 0)return;let s=n.getConstrainedZoom(r+t),o=n.getResolutionForZoom(s);n.getAnimating()&&n.cancelAnimations(),n.animate({resolution:o,anchor:e,duration:i!==void 0?i:250,easing:Le})}var Dh,ai,Cr=w(()=>{Te();Hi();Eg();Dh=class extends xt{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(Fh.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(Fh.ACTIVE,t)}setMap(t){this.map_=t}};ai=Dh});var kh,wg,Sg=w(()=>{ts();Cr();kh=class extends ai{constructor(t){super(),t=t||{},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:250}handleEvent(t){let e=!1;if(t.type==ct.DBLCLICK){let i=t.originalEvent,r=t.map,s=t.coordinate,o=i.shiftKey?-this.delta_:this.delta_,a=r.getView();Er(a,o,s,this.duration_),i.preventDefault(),e=!0}return!e}},wg=kh});function Ls(n){let t=arguments;return function(e){let i=!0;for(let r=0,s=t.length;r<s&&(i=i&&t[r](e),!!i);++r);return i}}var Rg,gy,la,Tg,ha,ca,Ig,vg,ua,fa,Lg,cn=w(()=>{te();ke();Rg=function(n){let t=n.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},gy=function(n){let t=n.map.getTargetElement(),e=t.getRootNode(),i=n.map.getOwnerDocument().activeElement;return e instanceof ShadowRoot?e.host.contains(i):t.contains(i)},la=function(n){let t=n.map.getTargetElement(),e=t.getRootNode();return(e instanceof ShadowRoot?e.host:t).hasAttribute("tabindex")?gy(n):!0},Tg=xi,ha=function(n){let t=n.originalEvent;return"pointerId"in t&&t.button==0&&!(jf&&Ll&&t.ctrlKey)},ca=function(n){let t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey},Ig=function(n){let t=n.originalEvent;return Ll?t.metaKey:t.ctrlKey},vg=function(n){let t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},ua=function(n){let t=n.originalEvent,e=t.target.tagName;return e!=="INPUT"&&e!=="SELECT"&&e!=="TEXTAREA"&&!t.target.isContentEditable},fa=function(n){let t=n.originalEvent;return"pointerId"in t&&t.pointerType=="mouse"},Lg=function(n){let t=n.originalEvent;return"pointerId"in t&&t.isPrimary&&t.button===0}});function wr(n){let t=n.length,e=0,i=0;for(let r=0;r<t;r++)e+=n[r].clientX,i+=n[r].clientY;return{clientX:e/t,clientY:i/t}}var Nh,li,Sr=w(()=>{ts();Cr();Nh=class extends ai{constructor(t){t=t||{},super(t),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==ct.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==ct.POINTERUP){let i=this.handleUpEvent(t);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(t.type==ct.POINTERDOWN){let i=this.handleDownEvent(t);this.handlingDownUpSequence=i,e=this.stopDown(i)}else t.type==ct.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}};li=Nh});var Gh,Ag,Pg=w(()=>{Ti();Hi();cn();te();Sr();Gh=class extends li{constructor(t){super({stopDown:Ei}),t=t||{},this.kinetic_=t.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;let e=t.condition?t.condition:Ls(ca,Lg);this.condition_=t.onFocusOnly?Ls(la,e):e,this.noKinetic_=!1}handleDragEvent(t){let e=t.map;this.panning_||(this.panning_=!0,e.getView().beginInteraction());let i=this.targetPointers,r=e.getEventPixel(wr(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){let s=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],a=t.map.getView();Mo(s,a.getResolution()),or(s,a.getRotation()),a.adjustCenterInternal(s)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=i.length,t.originalEvent.preventDefault()}handleUpEvent(t){let e=t.map,i=e.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let r=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),o=i.getCenterInternal(),a=e.getPixelFromCoordinateInternal(o),l=e.getCoordinateFromPixelInternal([a[0]-r*Math.cos(s),a[1]-r*Math.sin(s)]);i.animateInternal({center:i.getConstrainedCenter(l),duration:500,easing:Le})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(t){if(this.targetPointers.length>0&&this.condition_(t)){let i=t.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}},Ag=Gh});var zh,Mg,Og=w(()=>{cn();te();ta();Sr();zh=class extends li{constructor(t){t=t||{},super({stopDown:Ei}),this.condition_=t.condition?t.condition:Rg,this.lastAngle_=void 0,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){if(!fa(t))return;let e=t.map,i=e.getView();if(i.getConstraints().rotation===pr)return;let r=e.getSize(),s=t.pixel,o=Math.atan2(r[1]/2-s[1],s[0]-r[0]/2);if(this.lastAngle_!==void 0){let a=o-this.lastAngle_;i.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(t){return fa(t)?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){return fa(t)&&ha(t)&&this.condition_(t)?(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}},Mg=zh});var Xh,bg,Fg=w(()=>{Jr();Rs();Xh=class extends Bi{constructor(t){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+t,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let t=this.startPixel_,e=this.endPixel_,i="px",r=this.element_.style;r.left=Math.min(t[0],e[0])+i,r.top=Math.min(t[1],e[1])+i,r.width=Math.abs(e[0]-t[0])+i,r.height=Math.abs(e[1]-t[1])+i}setMap(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let e=this.element_.style;e.left="inherit",e.top="inherit",e.width="inherit",e.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let t=this.startPixel_,e=this.endPixel_,r=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new Fn([r])}getGeometry(){return this.geometry_}},bg=Xh});var Rr,Nn,Wh,Dg,kg=w(()=>{Qe();cn();Fg();Sr();Rr={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"},Nn=class extends Ot{constructor(t,e,i){super(t),this.coordinate=e,this.mapBrowserEvent=i}},Wh=class extends li{constructor(t){super(),this.on,this.once,this.un,t=t??{},this.box_=new bg(t.className||"ol-dragbox"),this.minArea_=t.minArea??64,t.onBoxEnd&&(this.onBoxEnd=t.onBoxEnd),this.startPixel_=null,this.condition_=t.condition??ha,this.boxEndCondition_=t.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(t,e,i){let r=i[0]-e[0],s=i[1]-e[1];return r*r+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(t){this.startPixel_&&(this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new Nn(Rr.BOXDRAG,t.coordinate,t)))}handleUpEvent(t){if(!this.startPixel_)return!1;let e=this.boxEndCondition_(t,this.startPixel_,t.pixel);return e&&this.onBoxEnd(t),this.dispatchEvent(new Nn(e?Rr.BOXEND:Rr.BOXCANCEL,t.coordinate,t)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(t){return this.condition_(t)?(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Nn(Rr.BOXSTART,t.coordinate,t)),!0):!1}onBoxEnd(t){}setActive(t){t||(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new Nn(Rr.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setActive(t)}setMap(t){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new Nn(Rr.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setMap(t)}},Dg=Wh});var Uh,Ng,Gg=w(()=>{Hi();cn();kg();Uh=class extends Dg{constructor(t){t=t||{};let e=t.condition?t.condition:vg;super({condition:e,className:t.className||"ol-dragzoom",minArea:t.minArea}),this.duration_=t.duration!==void 0?t.duration:200,this.out_=t.out!==void 0?t.out:!1}onBoxEnd(t){let i=this.getMap().getView(),r=this.getGeometry();if(this.out_){let s=i.rotatedExtentForGeometry(r),o=i.getResolutionForExtentInternal(s),a=i.getResolution()/o;r=r.clone(),r.scale(a*a)}i.fitInternal(r,{duration:this.duration_,easing:Le})}},Ng=Uh});var un,zg=w(()=>{un={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"}});var jh,Xg,Wg=w(()=>{Ti();lt();zg();cn();Cr();jh=class extends ai{constructor(t){super(),t=t||{},this.defaultCondition_=function(e){return ca(e)&&ua(e)},this.condition_=t.condition!==void 0?t.condition:this.defaultCondition_,this.duration_=t.duration!==void 0?t.duration:100,this.pixelDelta_=t.pixelDelta!==void 0?t.pixelDelta:128}handleEvent(t){let e=!1;if(t.type==k.KEYDOWN){let i=t.originalEvent,r=i.key;if(this.condition_(t)&&(r==un.DOWN||r==un.LEFT||r==un.RIGHT||r==un.UP)){let o=t.map.getView(),a=o.getResolution()*this.pixelDelta_,l=0,h=0;r==un.DOWN?h=-a:r==un.LEFT?l=-a:r==un.RIGHT?l=a:h=a;let c=[l,h];or(c,o.getRotation()),Cg(o,c,this.duration_),i.preventDefault(),e=!0}}return!e}},Xg=jh});var Yh,Ug,jg=w(()=>{lt();cn();Cr();Yh=class extends ai{constructor(t){super(),t=t||{},this.condition_=t.condition?t.condition:function(e){return!Ig(e)&&ua(e)},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:100}handleEvent(t){let e=!1;if(t.type==k.KEYDOWN||t.type==k.KEYPRESS){let i=t.originalEvent,r=i.key;if(this.condition_(t)&&(r==="+"||r==="-")){let s=t.map,o=r==="+"?this.delta_:-this.delta_,a=s.getView();Er(a,o,void 0,this.duration_),i.preventDefault(),e=!0}}return!e}},Ug=Yh});var my,py,_y,Bh,Yg,Bg=w(()=>{Bt();lt();cn();dt();Cr();my=40,py=300,_y=3,Bh=class extends ai{constructor(t){t=t||{},super(t),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=t.maxDelta!==void 0?t.maxDelta:1,this.duration_=t.duration!==void 0?t.duration:250,this.timeout_=t.timeout!==void 0?t.timeout:80,this.useAnchor_=t.useAnchor!==void 0?t.useAnchor:!0,this.constrainResolution_=t.constrainResolution!==void 0?t.constrainResolution:!1;let e=t.condition?t.condition:Tg;this.condition_=t.onFocusOnly?Ls(la,e):e,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(t){if(this.ctrlKeyListenerKeys_.forEach(q),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(t),t){let e=t.getOwnerDocument();this.ctrlKeyListenerKeys_.push(j(e,"keydown",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!0)}),j(e,"keyup",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let t=this.getMap();if(!t)return;let e=t.getView(),i=this.lastDelta_?this.lastDelta_>0?1:-1:0;e.endInteraction(this.constrainResolution_||e.getConstrainResolution()?100:void 0,i,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(t){if(!this.condition_(t)||t.type!==k.WHEEL)return!0;let i=t.map,r=t.originalEvent;r.preventDefault();let s=r.ctrlKey&&!this.ctrlKeyPressed_;r.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=t.pixel);let o=r.deltaY;switch(r.deltaMode){case WheelEvent.DOM_DELTA_LINE:o*=my;break;case WheelEvent.DOM_DELTA_PAGE:o*=py;break;default:}if(o===0)return!1;this.lastDelta_=o;let a=Date.now();this.startTime_===void 0&&(this.startTime_=a),(!this.mode_||a-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(o)<4?"trackpad":"wheel");let l=i.getView();if(this.mode_==="trackpad")return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(l.getAnimating()&&l.cancelAnimations(),l.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),s&&(o=o*_y),l.adjustZoom(-o/this.deltaPerZoom_,this.lastAnchor_?i.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=a,!1;this.totalDelta_+=o;let h=Math.max(this.timeout_-(a-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),h),!1}handleWheelZoom_(t){let e=t.getView();e.getAnimating()&&e.cancelAnimations();let i=-it(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(e.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),Er(e,i,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(t){this.useAnchor_=t,t||(this.lastAnchor_=null)}},Yg=Bh});var Kh,Kg,Vg=w(()=>{te();ta();Sr();Kh=class extends li{constructor(t){t=t||{};let e=t;e.stopDown||(e.stopDown=Ei),super(e),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=t.threshold!==void 0?t.threshold:.3,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){let e=0,i=this.targetPointers[0],r=this.targetPointers[1],s=Math.atan2(r.clientY-i.clientY,r.clientX-i.clientX);if(this.lastAngle_!==void 0){let l=s-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=l}this.lastAngle_=s;let o=t.map,a=o.getView();a.getConstraints().rotation!==pr&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(wr(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(e,this.anchor_)))}handleUpEvent(t){return this.targetPointers.length<2?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){if(this.targetPointers.length>=2){let e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}},Kg=Kh});var Vh,Zg,Hg=w(()=>{te();Sr();Vh=class extends li{constructor(t){t=t||{};let e=t;e.stopDown||(e.stopDown=Ei),super(e),this.anchor_=null,this.duration_=t.duration!==void 0?t.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(t){let e=1,i=this.targetPointers[0],r=this.targetPointers[1],s=i.clientX-r.clientX,o=i.clientY-r.clientY,a=Math.sqrt(s*s+o*o);this.lastDistance_!==void 0&&(e=this.lastDistance_/a),this.lastDistance_=a;let l=t.map,h=l.getView();e!=1&&(this.lastScaleDelta_=e),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(wr(this.targetPointers))),l.render(),h.adjustResolutionInternal(e,this.anchor_)}handleUpEvent(t){if(this.targetPointers.length<2){let i=t.map.getView(),r=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,r),!1}return!0}handleDownEvent(t){if(this.targetPointers.length>=2){let e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}},Zg=Vh});function qg(n){n=n||{};let t=new Nt,e=new yg(-.005,.05,100);return(n.altShiftDragRotate===void 0||n.altShiftDragRotate)&&t.push(new Mg),(n.doubleClickZoom===void 0||n.doubleClickZoom)&&t.push(new wg({delta:n.zoomDelta,duration:n.zoomDuration})),(n.dragPan===void 0||n.dragPan)&&t.push(new Ag({onFocusOnly:n.onFocusOnly,kinetic:e})),(n.pinchRotate===void 0||n.pinchRotate)&&t.push(new Kg),(n.pinchZoom===void 0||n.pinchZoom)&&t.push(new Zg({duration:n.zoomDuration})),(n.keyboard===void 0||n.keyboard)&&(t.push(new Xg),t.push(new Ug({delta:n.zoomDelta,duration:n.zoomDuration}))),(n.mouseWheelZoom===void 0||n.mouseWheelZoom)&&t.push(new Yg({onFocusOnly:n.onFocusOnly,duration:n.zoomDuration})),(n.shiftDragZoom===void 0||n.shiftDragZoom)&&t.push(new Ng({duration:n.zoomDuration})),t}var $g=w(()=>{Qn();xg();Sg();Pg();Og();Gg();Wg();jg();Bg();Vg();Hg()});var rt,Zh=w(()=>{rt={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"}});var Hh,da,qh=w(()=>{Te();Gt();dt();ht();Zh();Hh=class extends xt{constructor(t){super(),this.on,this.once,this.un,this.background_=t.background;let e=Object.assign({},t);typeof t.properties=="object"&&(delete e.properties,Object.assign(e,t.properties)),e[rt.OPACITY]=t.opacity!==void 0?t.opacity:1,K(typeof e[rt.OPACITY]=="number","Layer opacity must be a number"),e[rt.VISIBLE]=t.visible!==void 0?t.visible:!0,e[rt.Z_INDEX]=t.zIndex,e[rt.MAX_RESOLUTION]=t.maxResolution!==void 0?t.maxResolution:1/0,e[rt.MIN_RESOLUTION]=t.minResolution!==void 0?t.minResolution:0,e[rt.MIN_ZOOM]=t.minZoom!==void 0?t.minZoom:-1/0,e[rt.MAX_ZOOM]=t.maxZoom!==void 0?t.maxZoom:1/0,this.className_=e.className!==void 0?e.className:"ol-layer",delete e.className,this.setProperties(e),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(t){let e=this.state_||{layer:this,managed:t===void 0?!0:t},i=this.getZIndex();return e.opacity=it(Math.round(this.getOpacity()*100)/100,0,1),e.visible=this.getVisible(),e.extent=this.getExtent(),e.zIndex=i===void 0&&!e.managed?1/0:i,e.maxResolution=this.getMaxResolution(),e.minResolution=Math.max(this.getMinResolution(),0),e.minZoom=this.getMinZoom(),e.maxZoom=this.getMaxZoom(),this.state_=e,e}getLayersArray(t){return W()}getLayerStatesArray(t){return W()}getExtent(){return this.get(rt.EXTENT)}getMaxResolution(){return this.get(rt.MAX_RESOLUTION)}getMinResolution(){return this.get(rt.MIN_RESOLUTION)}getMinZoom(){return this.get(rt.MIN_ZOOM)}getMaxZoom(){return this.get(rt.MAX_ZOOM)}getOpacity(){return this.get(rt.OPACITY)}getSourceState(){return W()}getVisible(){return this.get(rt.VISIBLE)}getZIndex(){return this.get(rt.Z_INDEX)}setBackground(t){this.background_=t,this.changed()}setExtent(t){this.set(rt.EXTENT,t)}setMaxResolution(t){this.set(rt.MAX_RESOLUTION,t)}setMinResolution(t){this.set(rt.MIN_RESOLUTION,t)}setMaxZoom(t){this.set(rt.MAX_ZOOM,t)}setMinZoom(t){this.set(rt.MIN_ZOOM,t)}setOpacity(t){K(typeof t=="number","Layer opacity must be a number"),this.set(rt.OPACITY,t)}setVisible(t){this.set(rt.VISIBLE,t)}setZIndex(t){this.set(rt.Z_INDEX,t)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}},da=Hh});var fn,Ue,$h,Jh,As,Jg=w(()=>{Qn();$r();Zn();Gt();Bt();Qe();lt();H();Re();ht();qh();fn={ADDLAYER:"addlayer",REMOVELAYER:"removelayer"},Ue=class extends Ot{constructor(t,e){super(t),this.layer=e}},$h={LAYERS:"layers"},Jh=class n extends da{constructor(t){t=t||{};let e=Object.assign({},t);delete e.layers;let i=t.layers;super(e),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener($h.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new Nt(i.slice(),{unique:!0}):K(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new Nt(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(q),this.layersListenerKeys_.length=0;let t=this.getLayers();this.layersListenerKeys_.push(j(t,Mt.ADD,this.handleLayersAdd_,this),j(t,Mt.REMOVE,this.handleLayersRemove_,this));for(let i in this.listenerKeys_)this.listenerKeys_[i].forEach(q);Je(this.listenerKeys_);let e=t.getArray();for(let i=0,r=e.length;i<r;i++){let s=e[i];this.registerLayerListeners_(s),this.dispatchEvent(new Ue(fn.ADDLAYER,s))}this.changed()}registerLayerListeners_(t){let e=[j(t,De.PROPERTYCHANGE,this.handleLayerChange_,this),j(t,k.CHANGE,this.handleLayerChange_,this)];t instanceof n&&e.push(j(t,fn.ADDLAYER,this.handleLayerGroupAdd_,this),j(t,fn.REMOVELAYER,this.handleLayerGroupRemove_,this)),this.listenerKeys_[Y(t)]=e}handleLayerGroupAdd_(t){this.dispatchEvent(new Ue(fn.ADDLAYER,t.layer))}handleLayerGroupRemove_(t){this.dispatchEvent(new Ue(fn.REMOVELAYER,t.layer))}handleLayersAdd_(t){let e=t.element;this.registerLayerListeners_(e),this.dispatchEvent(new Ue(fn.ADDLAYER,e)),this.changed()}handleLayersRemove_(t){let e=t.element,i=Y(e);this.listenerKeys_[i].forEach(q),delete this.listenerKeys_[i],this.dispatchEvent(new Ue(fn.REMOVELAYER,e)),this.changed()}getLayers(){return this.get($h.LAYERS)}setLayers(t){let e=this.getLayers();if(e){let i=e.getArray();for(let r=0,s=i.length;r<s;++r)this.dispatchEvent(new Ue(fn.REMOVELAYER,i[r]))}this.set($h.LAYERS,t)}getLayersArray(t){return t=t!==void 0?t:[],this.getLayers().forEach(function(e){e.getLayersArray(t)}),t}getLayerStatesArray(t){let e=t!==void 0?t:[],i=e.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(e)});let r=this.getLayerState(),s=r.zIndex;!t&&r.zIndex===void 0&&(s=0);for(let o=i,a=e.length;o<a;o++){let l=e[o];l.opacity*=r.opacity,l.visible=l.visible&&r.visible,l.maxResolution=Math.min(l.maxResolution,r.maxResolution),l.minResolution=Math.max(l.minResolution,r.minResolution),l.minZoom=Math.max(l.minZoom,r.minZoom),l.maxZoom=Math.min(l.maxZoom,r.maxZoom),r.extent!==void 0&&(l.extent!==void 0?l.extent=ni(l.extent,r.extent):l.extent=r.extent),l.zIndex===void 0&&(l.zIndex=s)}return e}getSourceState(){return"ready"}},As=Jh});var Ut,Tr=w(()=>{Ut={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"}});function Ps(n,t){if(!n.visible)return!1;let e=t.resolution;if(e<n.minResolution||e>=n.maxResolution)return!1;let i=t.zoom;return i>n.minZoom&&i<=n.maxZoom}var Qh,Gn,Ir=w(()=>{Ts();Gt();Bt();lt();H();Tr();qh();Zh();Qh=class extends da{constructor(t){let e=Object.assign({},t);delete e.source,super(e),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,t.render&&(this.render=t.render),t.map&&this.setMap(t.map),this.addChangeListener(rt.SOURCE,this.handleSourcePropertyChange_);let i=t.source?t.source:null;this.setSource(i)}getLayersArray(t){return t=t||[],t.push(this),t}getLayerStatesArray(t){return t=t||[],t.push(this.getLayerState()),t}getSource(){return this.get(rt.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let t=this.getSource();return t?t.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(q(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;let t=this.getSource();t&&(this.sourceChangeKey_=j(t,k.CHANGE,this.handleSourceChange_,this),t.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(t){return this.renderer_?this.renderer_.getFeatures(t):Promise.resolve([])}getData(t){return!this.renderer_||!this.rendered?null:this.renderer_.getData(t)}isVisible(t){let e,i=this.getMapInternal();!t&&i&&(t=i.getView()),t instanceof Zt?e={viewState:t.getState(),extent:t.calculateExtent()}:e=t,!e.layerStatesArray&&i&&(e.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let r;if(e.layerStatesArray){if(r=e.layerStatesArray.find(o=>o.layer===this),!r)return!1}else r=this.getLayerState();let s=this.getExtent();return Ps(r,e.viewState)&&(!s||pt(s,e.extent))}getAttributions(t){if(!this.isVisible(t))return[];let e=this.getSource()?.getAttributions();if(!e)return[];let i=t instanceof Zt?t.getViewStateAndExtent():t,r=e(i);return Array.isArray(r)||(r=[r]),r}render(t,e){let i=this.getRenderer();return i.prepareFrame(t)?(this.rendered=!0,i.renderFrame(t,e)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(t,e){}renderDeferred(t){let e=this.getRenderer();e&&e.renderDeferred(t)}setMapInternal(t){t||this.unrender(),this.set(rt.MAP,t)}getMapInternal(){return this.get(rt.MAP)}setMap(t){this.mapPrecomposeKey_&&(q(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&(q(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=j(t,Ut.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=j(this,k.CHANGE,t.render,t),this.changed())}handlePrecompose_(t){let e=t.frameState.layerStatesArray,i=this.getLayerState(!1);K(!e.some(r=>r.layer===i.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),e.push(i)}setSource(t){this.set(rt.SOURCE,t)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}};Gn=Qh});function ga(n,t,e=0,i=n.length-1,r=yy){for(;i>e;){if(i-e>600){let l=i-e+1,h=t-e+1,c=Math.log(l),u=.5*Math.exp(2*c/3),f=.5*Math.sqrt(c*u*(l-u)/l)*(h-l/2<0?-1:1),d=Math.max(e,Math.floor(t-h*u/l+f)),g=Math.min(i,Math.floor(t+(l-h)*u/l+f));ga(n,t,d,g,r)}let s=n[t],o=e,a=i;for(Ms(n,e,t),r(n[i],s)>0&&Ms(n,e,i);o<a;){for(Ms(n,o,a),o++,a--;r(n[o],s)<0;)o++;for(;r(n[a],s)>0;)a--}r(n[e],s)===0?Ms(n,e,a):(a++,Ms(n,a,i)),a<=t&&(e=a+1),t<=a&&(i=a-1)}}function Ms(n,t,e){let i=n[t];n[t]=n[e],n[e]=i}function yy(n,t){return n<t?-1:n>t?1:0}var Qg=w(()=>{});function xy(n,t,e){if(!e)return t.indexOf(n);for(let i=0;i<t.length;i++)if(e(n,t[i]))return i;return-1}function vr(n,t){Os(n,0,n.children.length,t,n)}function Os(n,t,e,i,r){r||(r=Lr(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s=t;s<e;s++){let o=n.children[s];bs(r,n.leaf?i(o):o)}return r}function bs(n,t){return n.minX=Math.min(n.minX,t.minX),n.minY=Math.min(n.minY,t.minY),n.maxX=Math.max(n.maxX,t.maxX),n.maxY=Math.max(n.maxY,t.maxY),n}function Ey(n,t){return n.minX-t.minX}function Cy(n,t){return n.minY-t.minY}function tc(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function ma(n){return n.maxX-n.minX+(n.maxY-n.minY)}function wy(n,t){return(Math.max(t.maxX,n.maxX)-Math.min(t.minX,n.minX))*(Math.max(t.maxY,n.maxY)-Math.min(t.minY,n.minY))}function Sy(n,t){let e=Math.max(n.minX,t.minX),i=Math.max(n.minY,t.minY),r=Math.min(n.maxX,t.maxX),s=Math.min(n.maxY,t.maxY);return Math.max(0,r-e)*Math.max(0,s-i)}function ec(n,t){return n.minX<=t.minX&&n.minY<=t.minY&&t.maxX<=n.maxX&&t.maxY<=n.maxY}function pa(n,t){return t.minX<=n.maxX&&t.minY<=n.maxY&&t.maxX>=n.minX&&t.maxY>=n.minY}function Lr(n){return{children:n,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function tm(n,t,e,i,r){let s=[t,e];for(;s.length;){if(e=s.pop(),t=s.pop(),e-t<=i)continue;let o=t+Math.ceil((e-t)/i/2)*i;ga(n,o,t,e,r),s.push(t,o,o,e)}}var zn,ic=w(()=>{Qg();zn=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data,i=[];if(!pa(t,e))return i;let r=this.toBBox,s=[];for(;e;){for(let o=0;o<e.children.length;o++){let a=e.children[o],l=e.leaf?r(a):a;pa(t,l)&&(e.leaf?i.push(a):ec(t,l)?this._all(a,i):s.push(a))}e=s.pop()}return i}collides(t){let e=this.data;if(!pa(t,e))return!1;let i=[];for(;e;){for(let r=0;r<e.children.length;r++){let s=e.children[r],o=e.leaf?this.toBBox(s):s;if(pa(t,o)){if(e.leaf||ec(t,o))return!0;i.push(s)}}e=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let i=0;i<t.length;i++)this.insert(t[i]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){let i=this.data;this.data=e,e=i}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Lr([]),this}remove(t,e){if(!t)return this;let i=this.data,r=this.toBBox(t),s=[],o=[],a,l,h;for(;i||s.length;){if(i||(i=s.pop(),l=s[s.length-1],a=o.pop(),h=!0),i.leaf){let c=xy(t,i.children,e);if(c!==-1)return i.children.splice(c,1),s.push(i),this._condense(s),this}!h&&!i.leaf&&ec(i,r)?(s.push(i),o.push(a),a=0,l=i,i=i.children[0]):l?(a++,i=l.children[a],h=!1):i=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let i=[];for(;t;)t.leaf?e.push(...t.children):i.push(...t.children),t=i.pop();return e}_build(t,e,i,r){let s=i-e+1,o=this._maxEntries,a;if(s<=o)return a=Lr(t.slice(e,i+1)),vr(a,this.toBBox),a;r||(r=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,r-1))),a=Lr([]),a.leaf=!1,a.height=r;let l=Math.ceil(s/o),h=l*Math.ceil(Math.sqrt(o));tm(t,e,i,h,this.compareMinX);for(let c=e;c<=i;c+=h){let u=Math.min(c+h-1,i);tm(t,c,u,l,this.compareMinY);for(let f=c;f<=u;f+=l){let d=Math.min(f+l-1,u);a.children.push(this._build(t,f,d,r-1))}}return vr(a,this.toBBox),a}_chooseSubtree(t,e,i,r){for(;r.push(e),!(e.leaf||r.length-1===i);){let s=1/0,o=1/0,a;for(let l=0;l<e.children.length;l++){let h=e.children[l],c=tc(h),u=wy(t,h)-c;u<o?(o=u,s=c<s?c:s,a=h):u===o&&c<s&&(s=c,a=h)}e=a||e.children[0]}return e}_insert(t,e,i){let r=i?t:this.toBBox(t),s=[],o=this._chooseSubtree(r,this.data,e,s);for(o.children.push(t),bs(o,r);e>=0&&s[e].children.length>this._maxEntries;)this._split(s,e),e--;this._adjustParentBBoxes(r,s,e)}_split(t,e){let i=t[e],r=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,r);let o=this._chooseSplitIndex(i,s,r),a=Lr(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,vr(i,this.toBBox),vr(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)}_splitRoot(t,e){this.data=Lr([t,e]),this.data.height=t.height+1,this.data.leaf=!1,vr(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let r,s=1/0,o=1/0;for(let a=e;a<=i-e;a++){let l=Os(t,0,a,this.toBBox),h=Os(t,a,i,this.toBBox),c=Sy(l,h),u=tc(l)+tc(h);c<s?(s=c,r=a,o=u<o?u:o):c===s&&u<o&&(o=u,r=a)}return r||i-e}_chooseSplitAxis(t,e,i){let r=t.leaf?this.compareMinX:Ey,s=t.leaf?this.compareMinY:Cy,o=this._allDistMargin(t,e,i,r),a=this._allDistMargin(t,e,i,s);o<a&&t.children.sort(r)}_allDistMargin(t,e,i,r){t.children.sort(r);let s=this.toBBox,o=Os(t,0,e,s),a=Os(t,i-e,i,s),l=ma(o)+ma(a);for(let h=e;h<i-e;h++){let c=t.children[h];bs(o,t.leaf?s(c):c),l+=ma(o)}for(let h=i-e-1;h>=e;h--){let c=t.children[h];bs(a,t.leaf?s(c):c),l+=ma(a)}return l}_adjustParentBBoxes(t,e,i){for(let r=i;r>=0;r--)bs(e[r],t)}_condense(t){for(let e=t.length-1,i;e>=0;e--)t[e].children.length===0?e>0?(i=t[e-1].children,i.splice(i.indexOf(t[e]),1)):this.clear():vr(t[e],this.toBBox)}}});function Ry(){return nc||(nc=nt(1,1,void 0,{willReadFrequently:!0,desynchronized:!0})),nc}function _a(n,t){return n.endsWith("%")?Number(n.substring(0,n.length-1))/t:Number(n)}function Ds(n){throw new Error('failed to parse "'+n+'" as color')}function em(n){if(n.toLowerCase().startsWith("rgb")){let s=n.match(Iy)||n.match(Ty)||n.match(vy);if(s){let o=s[4],a=100/255;return[it(_a(s[1],a)+.5|0,0,255),it(_a(s[2],a)+.5|0,0,255),it(_a(s[3],a)+.5|0,0,255),o!==void 0?it(_a(o,100),0,1):1]}Ds(n)}if(n.startsWith("#")){if(Ly.test(n)){let s=n.substring(1),o=s.length<=4?1:2,a=[0,0,0,255];for(let l=0,h=s.length;l<h;l+=o){let c=parseInt(s.substring(l,l+o),16);o===1&&(c+=c<<4),a[l/o]=c}return a[3]=a[3]/255,a}Ds(n)}let t=Ry();t.fillStyle="#abcdef";let e=t.fillStyle;t.fillStyle=n,t.fillStyle===e&&(t.fillStyle="#fedcba",e=t.fillStyle,t.fillStyle=n,t.fillStyle===e&&Ds(n));let i=t.fillStyle;if(i.startsWith("#")||i.startsWith("rgba"))return em(i);t.clearRect(0,0,1,1),t.fillRect(0,0,1,1);let r=Array.from(t.getImageData(0,0,1,1).data);return r[3]=In(r[3]/255,3),r}function im(n){return typeof n=="string"?n:Ns(n)}function nm(n){if(n.length===4)return n;let t=n.slice();return t[3]=1,t}function sc(n){return n>.0031308?Math.pow(n,1/2.4)*269.025-14.025:n*3294.6}function oc(n){return n>.2068965?Math.pow(n,3):(n-4/29)*(108/841)}function ac(n){return n>10.314724?Math.pow((n+14.025)/269.025,2.4):n/3294.6}function lc(n){return n>.0088564?Math.pow(n,1/3):n/(108/841)+4/29}function hc(n){let t=ac(n[0]),e=ac(n[1]),i=ac(n[2]),r=lc(t*.222488403+e*.716873169+i*.06060791),s=500*(lc(t*.452247074+e*.399439023+i*.148375274)-r),o=200*(r-lc(t*.016863605+e*.117638439+i*.865350722)),a=Math.atan2(o,s)*(180/Math.PI);return[116*r-16,Math.sqrt(s*s+o*o),a<0?a+360:a,n[3]]}function rm(n){let t=(n[0]+16)/116,e=n[1],i=n[2]*Math.PI/180,r=oc(t),s=oc(t+e/500*Math.cos(i)),o=oc(t-e/200*Math.sin(i)),a=sc(s*3.021973625-r*1.617392459-o*.404875592),l=sc(s*-.943766287+r*1.916279586+o*.027607165),h=sc(s*.069407491-r*.22898585+o*1.159737864);return[it(a+.5|0,0,255),it(l+.5|0,0,255),it(h+.5|0,0,255),n[3]]}function ks(n){if(n==="none")return ya;if(Fs.hasOwnProperty(n))return Fs[n];if(rc>=Ay){let e=0;for(let i in Fs)(e++&3)===0&&(delete Fs[i],--rc)}let t=em(n);t.length!==4&&Ds(n);for(let e of t)isNaN(e)&&Ds(n);return Fs[n]=t,++rc,t}function be(n){return Array.isArray(n)?n:ks(n)}function Ns(n){let t=n[0];t!=(t|0)&&(t=t+.5|0);let e=n[1];e!=(e|0)&&(e=e+.5|0);let i=n[2];i!=(i|0)&&(i=i+.5|0);let r=n[3]===void 0?1:Math.round(n[3]*1e3)/1e3;return"rgba("+t+","+e+","+i+","+r+")"}var ya,nc,Ty,Iy,vy,Ly,Ay,Fs,rc,je=w(()=>{Ct();dt();ya=[NaN,NaN,NaN,0];Ty=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,Iy=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,vy=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,Ly=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;Ay=1024,Fs={},rc=0});function cc(n){return n[0]>0&&n[1]>0}function sm(n,t,e){return e===void 0&&(e=[0,0]),e[0]=n[0]*t+.5|0,e[1]=n[1]*t+.5|0,e}function mt(n,t){return Array.isArray(n)?n:(t===void 0?t=[n,n]:(t[0]=n,t[1]=n),t)}var Ye=w(()=>{});function My(n){return n in dc}function zs(n){let t=[];for(let e of Py)Xs(n,e)&&t.push(dc[e]);return t.length===0?"untyped":t.length<3?t.join(" or "):t.slice(0,-1).join(", ")+", or "+t[t.length-1]}function Xs(n,t){return(n&t)===t}function dn(n,t){return n===t}function gc(){return{variables:new Set,properties:new Set,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1}}function Ft(n,t,e){switch(typeof n){case"boolean":{if(dn(t,ee))return new Et(ee,n?"true":"false");if(!Xs(t,Ht))throw new Error(`got a boolean, but expected ${zs(t)}`);return new Et(Ht,n)}case"number":{if(dn(t,Gs))return new Et(Gs,mt(n));if(dn(t,Ht))return new Et(Ht,!!n);if(dn(t,ee))return new Et(ee,n.toString());if(!Xs(t,tt))throw new Error(`got a number, but expected ${zs(t)}`);return new Et(tt,n)}case"string":{if(dn(t,ye))return new Et(ye,ks(n));if(dn(t,Ht))return new Et(Ht,!!n);if(!Xs(t,ee))throw new Error(`got a string, but expected ${zs(t)}`);return new Et(ee,n)}default:}if(!Array.isArray(n))throw new Error("expression must be an array or a primitive value");if(n.length===0)throw new Error("empty expression");if(typeof n[0]=="string")return jy(n,t,e);for(let i of n)if(typeof i!="number")throw new Error("expected an array of numbers");if(dn(t,Gs)){if(n.length!==2)throw new Error(`expected an array of two values for a size, got ${n.length}`);return new Et(Gs,n)}if(dn(t,ye)){if(n.length===3)return new Et(ye,[...n,1]);if(n.length===4)return new Et(ye,n);throw new Error(`expected an array of 3 or 4 values for a color, got ${n.length}`)}if(!Xs(t,gn))throw new Error(`got an array of numbers, but expected ${zs(t)}`);return new Et(gn,n)}function om(n,t,e){let i=n.length-1,r=new Array(i);for(let s=0;s<i;++s){let o=n[s+1];switch(typeof o){case"number":{r[s]=new Et(tt,o);break}case"string":{r[s]=new Et(ee,o);break}default:throw new Error(`expected a string key or numeric array index for a get operation, got ${o}`)}s===0&&e.properties.add(String(o))}return r}function by(n,t,e){let i=n[1];if(typeof i!="string")throw new Error("expected a string argument for var operation");return e.variables.add(i),[new Et(ee,i)]}function Fy(n,t,e){e.featureId=!0}function Dy(n,t,e){e.geometryType=!0}function ky(n,t,e){e.mCoordinate=!0}function uc(n,t,e){e.mapState=!0}function Ar(n,t,e){let i=n[0];if(n.length!==1)throw new Error(`expected no arguments for ${i} operation`);return[]}function J(n,t){return function(e,i,r){let s=e[0],o=e.length-1;if(n===t){if(o!==n){let a=n===1?"":"s";throw new Error(`expected ${n} argument${a} for ${s}, got ${o}`)}}else if(o<n||o>t){let a=t===1/0?`${n} or more`:`${n} to ${t}`;throw new Error(`expected ${a} arguments for ${s}, got ${o}`)}}}function am(n,t,e){let i=n.length-1,r=new Array(i);for(let s=0;s<i;++s){let o=Ft(n[s+1],t,e);r[s]=o}return r}function st(n){return function(t,e,i){let r=t.length-1,s=new Array(r);for(let o=0;o<r;++o){let a=Ft(t[o+1],n,i);s[o]=a}return s}}function Ny(n,t,e){let i=n[0],r=n.length-1;if(r%2===0)throw new Error(`expected an odd number of arguments for ${i}, got ${r} instead`)}function lm(n,t,e){let i=n[0],r=n.length-1;if(r%2===1)throw new Error(`expected an even number of arguments for operation ${i}, got ${r} instead`)}function Gy(n,t,e){let i=n.length-1,r=ee|tt|Ht,s=Ft(n[1],r,e),o=Ft(n[n.length-1],t,e),a=new Array(i-2);for(let l=0;l<i-2;l+=2){try{let h=Ft(n[l+2],s.type,e);a[l]=h}catch(h){throw new Error(`failed to parse argument ${l+1} of match expression: ${h.message}`)}try{let h=Ft(n[l+3],o.type,e);a[l+1]=h}catch(h){throw new Error(`failed to parse argument ${l+2} of match expression: ${h.message}`)}}return[s,...a,o]}function zy(n,t,e){let i=n[1],r;switch(i[0]){case"linear":r=1;break;case"exponential":let l=i[1];if(typeof l!="number"||l<=0)throw new Error(`expected a number base for exponential interpolation, got ${JSON.stringify(l)} instead`);r=l;break;default:throw new Error(`invalid interpolation type: ${JSON.stringify(i)}`)}let s=new Et(tt,r),o;try{o=Ft(n[2],tt,e)}catch(l){throw new Error(`failed to parse argument 1 in interpolate expression: ${l.message}`)}let a=new Array(n.length-3);for(let l=0;l<a.length;l+=2){try{let h=Ft(n[l+3],tt,e);a[l]=h}catch(h){throw new Error(`failed to parse argument ${l+2} for interpolate expression: ${h.message}`)}try{let h=Ft(n[l+4],t,e);a[l+1]=h}catch(h){throw new Error(`failed to parse argument ${l+3} for interpolate expression: ${h.message}`)}}return[s,o,...a]}function Xy(n,t,e){let i=Ft(n[n.length-1],t,e),r=new Array(n.length-1);for(let s=0;s<r.length-1;s+=2){try{let o=Ft(n[s+1],Ht,e);r[s]=o}catch(o){throw new Error(`failed to parse argument ${s} of case expression: ${o.message}`)}try{let o=Ft(n[s+2],i.type,e);r[s+1]=o}catch(o){throw new Error(`failed to parse argument ${s+1} of case expression: ${o.message}`)}}return r[r.length-1]=i,r}function Wy(n,t,e){let i=n[2];if(!Array.isArray(i))throw new Error('the second argument for the "in" operator must be an array');let r;if(i[0]==="literal"){if(i=i[1],!Array.isArray(i))throw new Error('failed to parse "in" expression: the literal operator must be followed by an array')}else if(typeof i[0]=="string")throw new Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');typeof i[0]=="string"?r=ee:r=tt;let s=new Array(i.length);for(let a=0;a<s.length;a++)try{let l=Ft(i[a],r,e);s[a]=l}catch(l){throw new Error(`failed to parse haystack item ${a} for "in" expression: ${l.message}`)}return[Ft(n[1],r,e),...s]}function Uy(n,t,e){let i;try{i=Ft(n[1],tt,e)}catch(o){throw new Error(`failed to parse first argument in palette expression: ${o.message}`)}let r=n[2];if(!Array.isArray(r))throw new Error("the second argument of palette must be an array");let s=new Array(r.length);for(let o=0;o<s.length;o++){let a;try{a=Ft(r[o],ye,e)}catch(l){throw new Error(`failed to parse color at index ${o} in palette expression: ${l.message}`)}if(!(a instanceof Et))throw new Error(`the palette color at index ${o} must be a literal value`);s[o]=a}return[i,...s]}function V(...n){return function(t,e,i){let r=t[0],s;for(let o=0;o<n.length;o++){let a=n[o](t,e,i);if(o==n.length-1){if(!a)throw new Error("expected last argument validator to return the parsed args");s=a}}return new fc(e,r,...s)}}function jy(n,t,e){let i=n[0],r=Oy[i];if(!r)throw new Error(`unknown operator: ${i}`);return r(n,t,e)}function mc(n){if(!n)return"";let t=n.getType();switch(t){case"Point":case"LineString":case"Polygon":return t;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return t.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return mc(n.getGeometries()[0]);default:return""}}var Xn,Ht,tt,ee,ye,gn,Gs,xa,dc,Py,Et,fc,R,Oy,pc=w(()=>{ft();je();Ye();Xn=0,Ht=1<<Xn++,tt=1<<Xn++,ee=1<<Xn++,ye=1<<Xn++,gn=1<<Xn++,Gs=1<<Xn++,xa=Math.pow(2,Xn)-1,dc={[Ht]:"boolean",[tt]:"number",[ee]:"string",[ye]:"color",[gn]:"number[]",[Gs]:"size"},Py=Object.keys(dc).map(Number).sort(re);Et=class{constructor(t,e){if(!My(t))throw new Error(`literal expressions must have a specific type, got ${zs(t)}`);this.type=t,this.value=e}},fc=class{constructor(t,e,...i){this.type=t,this.operator=e,this.args=i}};R={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",LineMetric:"line-metric",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string",Has:"has"},Oy={[R.Get]:V(J(1,1/0),om),[R.Var]:V(J(1,1),by),[R.Has]:V(J(1,1/0),om),[R.Id]:V(Fy,Ar),[R.Concat]:V(J(2,1/0),st(ee)),[R.GeometryType]:V(Dy,Ar),[R.LineMetric]:V(ky,Ar),[R.Resolution]:V(uc,Ar),[R.Zoom]:V(uc,Ar),[R.Time]:V(uc,Ar),[R.Any]:V(J(2,1/0),st(Ht)),[R.All]:V(J(2,1/0),st(Ht)),[R.Not]:V(J(1,1),st(Ht)),[R.Equal]:V(J(2,2),st(xa)),[R.NotEqual]:V(J(2,2),st(xa)),[R.GreaterThan]:V(J(2,2),st(tt)),[R.GreaterThanOrEqualTo]:V(J(2,2),st(tt)),[R.LessThan]:V(J(2,2),st(tt)),[R.LessThanOrEqualTo]:V(J(2,2),st(tt)),[R.Multiply]:V(J(2,1/0),am),[R.Coalesce]:V(J(2,1/0),am),[R.Divide]:V(J(2,2),st(tt)),[R.Add]:V(J(2,1/0),st(tt)),[R.Subtract]:V(J(2,2),st(tt)),[R.Clamp]:V(J(3,3),st(tt)),[R.Mod]:V(J(2,2),st(tt)),[R.Pow]:V(J(2,2),st(tt)),[R.Abs]:V(J(1,1),st(tt)),[R.Floor]:V(J(1,1),st(tt)),[R.Ceil]:V(J(1,1),st(tt)),[R.Round]:V(J(1,1),st(tt)),[R.Sin]:V(J(1,1),st(tt)),[R.Cos]:V(J(1,1),st(tt)),[R.Atan]:V(J(1,2),st(tt)),[R.Sqrt]:V(J(1,1),st(tt)),[R.Match]:V(J(4,1/0),lm,Gy),[R.Between]:V(J(3,3),st(tt)),[R.Interpolate]:V(J(6,1/0),lm,zy),[R.Case]:V(J(3,1/0),Ny,Xy),[R.In]:V(J(2,2),Wy),[R.Number]:V(J(1,1/0),st(xa)),[R.String]:V(J(1,1/0),st(xa)),[R.Array]:V(J(1,1/0),st(tt)),[R.Color]:V(J(1,4),st(tt)),[R.Band]:V(J(1,3),st(tt)),[R.Palette]:V(J(2,2),Uy),[R.ToString]:V(J(1,1),st(Ht|tt|ee|ye))}});function _c(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function Ke(n,t,e){let i=Ft(n,t,e);return Be(i,e)}function Be(n,t){if(n instanceof Et){if(n.type===ye&&typeof n.value=="string"){let i=ks(n.value);return function(){return i}}return function(){return n.value}}let e=n.operator;switch(e){case R.Number:case R.String:case R.Coalesce:return Yy(n,t);case R.Get:case R.Var:case R.Has:return By(n,t);case R.Id:return i=>i.featureId;case R.GeometryType:return i=>i.geometryType;case R.Concat:{let i=n.args.map(r=>Be(r,t));return r=>"".concat(...i.map(s=>s(r).toString()))}case R.Resolution:return i=>i.resolution;case R.Any:case R.All:case R.Between:case R.In:case R.Not:return Vy(n,t);case R.Equal:case R.NotEqual:case R.LessThan:case R.LessThanOrEqualTo:case R.GreaterThan:case R.GreaterThanOrEqualTo:return Ky(n,t);case R.Multiply:case R.Divide:case R.Add:case R.Subtract:case R.Clamp:case R.Mod:case R.Pow:case R.Abs:case R.Floor:case R.Ceil:case R.Round:case R.Sin:case R.Cos:case R.Atan:case R.Sqrt:return Zy(n,t);case R.Case:return Hy(n,t);case R.Match:return qy(n,t);case R.Interpolate:return $y(n,t);case R.ToString:return Jy(n,t);default:throw new Error(`Unsupported operator ${e}`)}}function Yy(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Be(n.args[s],t);switch(e){case R.Coalesce:return s=>{for(let o=0;o<i;++o){let a=r[o](s);if(typeof a<"u"&&a!==null)return a}throw new Error("Expected one of the values to be non-null")};case R.Number:case R.String:return s=>{for(let o=0;o<i;++o){let a=r[o](s);if(typeof a===e)return a}throw new Error(`Expected one of the values to be a ${e}`)};default:throw new Error(`Unsupported assertion operator ${e}`)}}function By(n,t){let i=n.args[0].value;switch(n.operator){case R.Get:return r=>{let s=n.args,o=r.properties[i];for(let a=1,l=s.length;a<l;++a){let c=s[a].value;o=o[c]}return o};case R.Var:return r=>r.variables[i];case R.Has:return r=>{let s=n.args;if(!(i in r.properties))return!1;let o=r.properties[i];for(let a=1,l=s.length;a<l;++a){let c=s[a].value;if(!o||!Object.hasOwn(o,c))return!1;o=o[c]}return!0};default:throw new Error(`Unsupported accessor operator ${n.operator}`)}}function Ky(n,t){let e=n.operator,i=Be(n.args[0],t),r=Be(n.args[1],t);switch(e){case R.Equal:return s=>i(s)===r(s);case R.NotEqual:return s=>i(s)!==r(s);case R.LessThan:return s=>i(s)<r(s);case R.LessThanOrEqualTo:return s=>i(s)<=r(s);case R.GreaterThan:return s=>i(s)>r(s);case R.GreaterThanOrEqualTo:return s=>i(s)>=r(s);default:throw new Error(`Unsupported comparison operator ${e}`)}}function Vy(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Be(n.args[s],t);switch(e){case R.Any:return s=>{for(let o=0;o<i;++o)if(r[o](s))return!0;return!1};case R.All:return s=>{for(let o=0;o<i;++o)if(!r[o](s))return!1;return!0};case R.Between:return s=>{let o=r[0](s),a=r[1](s),l=r[2](s);return o>=a&&o<=l};case R.In:return s=>{let o=r[0](s);for(let a=1;a<i;++a)if(o===r[a](s))return!0;return!1};case R.Not:return s=>!r[0](s);default:throw new Error(`Unsupported logical operator ${e}`)}}function Zy(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Be(n.args[s],t);switch(e){case R.Multiply:return s=>{let o=1;for(let a=0;a<i;++a)o*=r[a](s);return o};case R.Divide:return s=>r[0](s)/r[1](s);case R.Add:return s=>{let o=0;for(let a=0;a<i;++a)o+=r[a](s);return o};case R.Subtract:return s=>r[0](s)-r[1](s);case R.Clamp:return s=>{let o=r[0](s),a=r[1](s);if(o<a)return a;let l=r[2](s);return o>l?l:o};case R.Mod:return s=>r[0](s)%r[1](s);case R.Pow:return s=>Math.pow(r[0](s),r[1](s));case R.Abs:return s=>Math.abs(r[0](s));case R.Floor:return s=>Math.floor(r[0](s));case R.Ceil:return s=>Math.ceil(r[0](s));case R.Round:return s=>Math.round(r[0](s));case R.Sin:return s=>Math.sin(r[0](s));case R.Cos:return s=>Math.cos(r[0](s));case R.Atan:return i===2?s=>Math.atan2(r[0](s),r[1](s)):s=>Math.atan(r[0](s));case R.Sqrt:return s=>Math.sqrt(r[0](s));default:throw new Error(`Unsupported numeric operator ${e}`)}}function Hy(n,t){let e=n.args.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Be(n.args[r],t);return r=>{for(let s=0;s<e-1;s+=2)if(i[s](r))return i[s+1](r);return i[e-1](r)}}function qy(n,t){let e=n.args.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Be(n.args[r],t);return r=>{let s=i[0](r);for(let o=1;o<e-1;o+=2)if(s===i[o](r))return i[o+1](r);return i[e-1](r)}}function $y(n,t){let e=n.args.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Be(n.args[r],t);return r=>{let s=i[0](r),o=i[1](r),a,l;for(let h=2;h<e;h+=2){let c=i[h](r),u=i[h+1](r),f=Array.isArray(u);if(f&&(u=nm(u)),c>=o)return h===2?u:f?Qy(s,o,a,l,c,u):Ws(s,o,a,l,c,u);a=c,l=u}return l}}function Jy(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Be(n.args[s],t);if(e===R.ToString)return s=>{let o=r[0](s);return n.args[0].type===ye?Ns(o):o.toString()};throw new Error(`Unsupported convert operator ${e}`)}function Ws(n,t,e,i,r,s){let o=r-e;if(o===0)return i;let a=t-e,l=n===1?a/o:(Math.pow(n,a)-1)/(Math.pow(n,o)-1);return i+l*(s-i)}function Qy(n,t,e,i,r,s){if(r-e===0)return i;let a=hc(i),l=hc(s),h=l[2]-a[2];h>180?h-=360:h<-180&&(h+=360);let c=[Ws(n,t,e,a[0],r,l[0]),Ws(n,t,e,a[1],r,l[1]),a[2]+Ws(n,t,e,0,r,h),Ws(n,t,e,i[3],r,s[3])];return rm(c)}var hm=w(()=>{je();pc()});var B,Mi=w(()=>{B={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}});function cm(n,t,e){let i=n,r=!0,s=!1,o=!1,a=[Hn(i,k.LOAD,function(){o=!0,s||t()})];return i.src&&Al?(s=!0,i.decode().then(function(){r&&t()}).catch(function(l){r&&(o?t():e())})):a.push(Hn(i,k.ERROR,e)),function(){r=!1,a.forEach(q)}}function t0(n,t){return new Promise((e,i)=>{function r(){o(),e(n)}function s(){o(),i(new Error("Image load error"))}function o(){n.removeEventListener("load",r),n.removeEventListener("error",s)}n.addEventListener("load",r),n.addEventListener("error",s),t&&(n.src=t)})}function um(n,t){return t&&(n.src=t),n.src&&Al?new Promise((e,i)=>n.decode().then(()=>e(n)).catch(r=>n.complete&&n.width?e(n):i(r))):t0(n)}var yc=w(()=>{Bt();lt();ke()});function xc(n,t){let e=t?be(t):"null";return n+":"+e}var Ec,qt,Us=w(()=>{Mi();je();Ct();Ec=class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let t=0;for(let e in this.cache_){let i=this.cache_[e];(t++&3)===0&&!i.hasListener()&&(delete this.cache_[e],delete this.patternCache_[e],--this.cacheSize_)}}}get(t,e){let i=xc(t,e);return i in this.cache_?this.cache_[i]:null}getPattern(t,e){let i=xc(t,e);return i in this.patternCache_?this.patternCache_[i]:null}set(t,e,i,r){let s=xc(t,e),o=s in this.cache_;this.cache_[s]=i,r&&(i.getImageState()===B.IDLE&&i.load(),i.getImageState()===B.LOADING?i.ready().then(()=>{this.patternCache_[s]=_r().createPattern(i.getImage(1),"repeat")}):this.patternCache_[s]=_r().createPattern(i.getImage(1),"repeat")),o||++this.cacheSize_}setSize(t){this.maxCacheSize_=t,this.expire()}};qt=new Ec});function mn(n,t,e,i,r,s){let o=t===void 0?void 0:qt.get(t,r);return o||(o=new Ea(n,n&&"src"in n?n.src||void 0:t,e,i,r),qt.set(t,r,o,s)),s&&o&&!qt.getPattern(t,r)&&qt.set(t,r,o,s),o}var js,Ea,fm,Ys=w(()=>{yc();Mi();je();Ct();lt();Qr();Us();js=null,Ea=class extends Ki{constructor(t,e,i,r,s){super(),this.hitDetectionImage_=null,this.image_=t,this.crossOrigin_=i?.crossOrigin,this.referrerPolicy_=i?.referrerPolicy,this.canvas_={},this.color_=s,this.imageState_=r===void 0?B.IDLE:r,this.size_=t&&t.width&&t.height?[t.width,t.height]:null,this.src_=e,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===B.LOADED){js||(js=nt(1,1,void 0,{willReadFrequently:!0})),js.drawImage(this.image_,0,0);try{js.getImageData(0,0,1,1),this.tainted_=!1}catch{js=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(k.CHANGE)}handleImageError_(){this.imageState_=B.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=B.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(t){return this.image_||this.initializeImage_(),this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_}setImage(t){this.image_=t}getPixelRatio(t){return this.replaceColor_(t),this.canvas_[t]?t:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){let t=this.size_[0],e=this.size_[1],i=nt(t,e);i.fillRect(0,0,t,e),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===B.IDLE){this.image_||this.initializeImage_(),this.imageState_=B.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&um(this.image_,this.src_).then(t=>{this.image_=t,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(t){if(!this.color_||this.canvas_[t]||this.imageState_!==B.LOADED)return;let e=this.image_,i=nt(Math.ceil(e.width*t),Math.ceil(e.height*t)),r=i.canvas;i.scale(t,t),i.drawImage(e,0,0),i.globalCompositeOperation="multiply",i.fillStyle=im(this.color_),i.fillRect(0,0,r.width/t,r.height/t),i.globalCompositeOperation="destination-in",i.drawImage(e,0,0),this.canvas_[t]=r}ready(){return this.ready_||(this.ready_=new Promise(t=>{if(this.imageState_===B.LOADED||this.imageState_===B.ERROR)t();else{let e=()=>{(this.imageState_===B.LOADED||this.imageState_===B.ERROR)&&(this.removeEventListener(k.CHANGE,e),t())};this.addEventListener(k.CHANGE,e)}})),this.ready_}};fm=Ea});function he(n){return n?Array.isArray(n)?Ns(n):typeof n=="object"&&"src"in n?e0(n):n:null}function e0(n){if(!n.offset||!n.size)return qt.getPattern(n.src,n.color);let t=n.src+":"+n.offset,e=qt.getPattern(t,n.color);if(e)return e;let i=qt.get(n.src,null);if(i.getImageState()!==B.LOADED)return null;let r=nt(n.size[0],n.size[1]);return r.drawImage(i.getImage(1),n.offset[0],n.offset[1],n.size[0],n.size[1],0,0,n.size[0],n.size[1]),mn(r.canvas,t,void 0,B.LOADED,n.color,!0),qt.getPattern(t,n.color)}var Bs=w(()=>{Mi();je();Ct();Ys();Us()});function n0(n,t,e){return`${n} ${t} 16px "${e}"`}function pm(n,t){return Ks||(Ks=nt(1,1)),n!=dm&&(Ks.font=n,dm=Ks.font),Ks.measureText(t)}function _m(n,t){return pm(n,t).width}function wc(n,t,e){if(t in e)return e[t];let i=t.split(`
`).reduce((r,s)=>Math.max(r,_m(n,s)),0);return e[t]=i,i}function ym(n,t){let e=[],i=[],r=[],s=0,o=0,a=0,l=0;for(let h=0,c=t.length;h<=c;h+=2){let u=t[h];if(u===`
`||h===c){s=Math.max(s,o),r.push(o),o=0,a+=l,l=0;continue}let f=t[h+1]||n.font,d=_m(f,u);e.push(d),o+=d;let g=r0(f);i.push(g),l=Math.max(l,g)}return{width:s,height:a,widths:e,heights:i,lineWidths:r}}function xm(n,t,e,i,r,s,o,a,l,h,c){n.save(),e!==1&&(n.globalAlpha===void 0?n.globalAlpha=u=>u.globalAlpha*=e:n.globalAlpha*=e),t&&n.transform.apply(n,t),i.contextInstructions?(n.translate(l,h),n.scale(c[0],c[1]),s0(i,n)):c[0]<0||c[1]<0?(n.translate(l,h),n.scale(c[0],c[1]),n.drawImage(i,r,s,o,a,0,0,o,a)):n.drawImage(i,r,s,o,a,l,h,o*c[0],a*c[1]),n.restore()}function s0(n,t){let e=n.contextInstructions;for(let i=0,r=e.length;i<r;i+=2)Array.isArray(e[i+1])?t[e[i]].apply(t,e[i+1]):t[e[i]]=e[i+1]}var Ca,At,hi,ce,ue,ci,Oi,gm,$t,pn,Un,bi,Fi,Wn,Ks,dm,Cc,i0,mm,r0,Di=w(()=>{Te();hn();Ct();ke();Re();Ca="10px sans-serif",At="#000",hi="round",ce=[],ue=0,ci="round",Oi=10,gm=0,$t="#000",pn="center",Un="middle",bi=[0,0,0,0],Fi=1,Wn=new xt,Ks=null,Cc={},i0=new Set(["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","emoji","math","fangsong"]);mm=(function(){let t,e;async function i(s){await e.ready;let o=await e.load(s);if(o.length===0)return!1;let a=ra(s),l=a.families[0].toLowerCase(),h=a.weight;return o.some(c=>{let u=c.family.replace(/^['"]|['"]$/g,"").toLowerCase(),f=na[c.weight]||c.weight;return u===l&&c.style===a.style&&f==h})}async function r(){await e.ready;let s=!0,o=Wn.getProperties(),a=Object.keys(o).filter(l=>o[l]<100);for(let l=a.length-1;l>=0;--l){let h=a[l],c=o[h];c<100&&(await i(h)?(Je(Cc),Wn.set(h,100)):(c+=10,Wn.set(h,c,!0),c<100&&(s=!1)))}t=void 0,s||(t=setTimeout(r,100))}return async function(s){e||(e=vt?self.fonts:document.fonts);let o=ra(s);if(!o)return;let a=o.families,l=!1;for(let h of a){if(i0.has(h))continue;let c=n0(o.style,o.weight,h);Wn.get(c)===void 0&&(Wn.set(c,0,!0),l=!0)}l&&(clearTimeout(t),t=setTimeout(r,100))}})(),r0=(function(){let n;return function(t){let e=Cc[t];if(e==null){if(vt){let i=ra(t),r=pm(t,"\u017Dg");e=(isNaN(Number(i.lineHeight))?1.2:Number(i.lineHeight))*(r.actualBoundingBoxAscent+r.actualBoundingBoxDescent)}else n||(n=document.createElement("div"),n.innerHTML="M",n.style.minHeight="0",n.style.maxHeight="none",n.style.height="auto",n.style.padding="0",n.style.border="none",n.style.position="absolute",n.style.display="block",n.style.left="-99999px"),n.style.font=t,document.body.appendChild(n),e=n.offsetHeight,document.body.removeChild(n);Cc[t]=e}return e}})()});var Sc,wa,Rc=w(()=>{Ye();ht();Sc=class n{constructor(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=mt(t.scale),this.displacement_=t.displacement,this.declutterMode_=t.declutterMode}clone(){let t=this.getScale();return new n({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return W()}getImage(t){return W()}getHitDetectionImage(){return W()}getPixelRatio(t){return 1}getImageState(){return W()}getImageSize(){return W()}getOrigin(){return W()}getSize(){return W()}setDisplacement(t){this.displacement_=t}setOpacity(t){this.opacity_=t}setRotateWithView(t){this.rotateWithView_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=mt(t)}listenImageChange(t){W()}load(){W()}unlistenImageChange(t){W()}ready(){return Promise.resolve()}},wa=Sc});var Tc,Sa,Ic=w(()=>{Mi();je();Bs();Ct();Di();Ys();Us();Rc();Tc=class n extends wa{constructor(t){super({opacity:1,rotateWithView:t.rotateWithView!==void 0?t.rotateWithView:!1,rotation:t.rotation!==void 0?t.rotation:0,scale:t.scale!==void 0?t.scale:1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=t.fill!==void 0?t.fill:null,this.origin_=[0,0],this.points_=t.points,this.radius=t.radius,this.radius2_=t.radius2,this.angle_=t.angle!==void 0?t.angle:0,this.stroke_=t.stroke!==void 0?t.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?B.LOADING:B.LOADED,this.imageState_===B.LOADING&&this.ready().then(()=>this.imageState_=B.LOADED),this.render()}clone(){let t=this.getScale(),e=new n({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}getAnchor(){let t=this.size_,e=this.getDisplacement(),i=this.getScaleArray();return[t[0]/2-e[0]/i[0],t[1]/2+e[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(t){this.fill_=t,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(t){let e=this.fill_?.getKey(),i=`${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${e}`+Object.values(this.renderOptions_).join(","),r=qt.get(i,null)?.getImage(1);if(!r){let s=this.renderOptions_,o=Math.ceil(s.size*t),a=nt(o,o);this.draw_(s,a,t),r=a.canvas;let l=new fm(r,void 0,null,B.LOADED,null);qt.set(i,null,l),createImageBitmap(r).then(h=>{l.setImage(h)})}return r}getPixelRatio(t){return t}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(t){this.radius!==t&&(this.radius=t,this.render())}getRadius2(){return this.radius2_}setRadius2(t){this.radius2_!==t&&(this.radius2_=t,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t,this.render()}listenImageChange(t){}load(){}unlistenImageChange(t){}calculateLineJoinSize_(t,e,i){if(e===0||this.points_===1/0||t!=="bevel"&&t!=="miter")return e;let r=this.radius,s=this.radius2_===void 0?r:this.radius2_;if(r<s){let I=r;r=s,s=I}let o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=s*Math.sin(a),h=Math.sqrt(s*s-l*l),c=r-h,u=Math.sqrt(l*l+c*c),f=u/l;if(t==="miter"&&f<=i)return f*e;let d=e/2/f,g=e/2*(c/u),m=Math.sqrt((r+d)*(r+d)+g*g)-r;if(this.radius2_===void 0||t==="bevel")return m*2;let y=r*Math.sin(a),x=Math.sqrt(r*r-y*y),C=s-x,E=Math.sqrt(y*y+C*C)/y;if(E<=i){let I=E*e/2-s-r;return 2*Math.max(m,I)}return m*2}createRenderOptions(){let t=hi,e=ci,i=0,r=null,s=0,o,a=0;this.stroke_&&(o=he(this.stroke_.getColor()??$t),a=this.stroke_.getWidth()??Fi,r=this.stroke_.getLineDash(),s=this.stroke_.getLineDashOffset()??0,e=this.stroke_.getLineJoin()??ci,t=this.stroke_.getLineCap()??hi,i=this.stroke_.getMiterLimit()??Oi);let l=this.calculateLineJoinSize_(e,a,i),h=Math.max(this.radius,this.radius2_||0),c=Math.ceil(2*h+l);return{strokeStyle:o,strokeWidth:a,size:c,lineCap:t,lineDash:r,lineDashOffset:s,lineJoin:e,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();let t=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[t,t]}draw_(t,e,i){if(e.scale(i,i),e.translate(t.size/2,t.size/2),this.createPath_(e),this.fill_){let r=this.fill_.getColor();r===null&&(r=At),e.fillStyle=he(r),e.fill()}t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}createHitDetectionCanvas_(t){let e;if(this.fill_){let i=this.fill_.getColor(),r=0;typeof i=="string"&&(i=be(i)),i===null?r=1:Array.isArray(i)&&(r=i.length===4?i[3]:1),r===0&&(e=nt(t.size,t.size),this.drawHitDetectionCanvas_(t,e))}return e?e.canvas:this.getImage(1)}createPath_(t){let e=this.points_,i=this.radius;if(e===1/0)t.arc(0,0,i,0,2*Math.PI);else{let r=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(e*=2);let s=this.angle_-Math.PI/2,o=2*Math.PI/e;for(let a=0;a<e;a++){let l=s+a*o,h=a%2===0?i:r;t.lineTo(h*Math.cos(l),h*Math.sin(l))}t.closePath()}}drawHitDetectionCanvas_(t,e){e.translate(t.size/2,t.size/2),this.createPath_(e),e.fillStyle=At,e.fill(),t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},Sa=Tc});var vc,ki,Ra=w(()=>{Ic();vc=class n extends Sa{constructor(t){t=t||{radius:5},super({points:1/0,fill:t.fill,radius:t.radius,stroke:t.stroke,scale:t.scale!==void 0?t.scale:1,rotation:t.rotation!==void 0?t.rotation:0,rotateWithView:t.rotateWithView!==void 0?t.rotateWithView:!1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode})}clone(){let t=this.getScale(),e=new n({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}},ki=vc});var Lc,xe,Vs=w(()=>{Mi();je();ht();Ys();Lc=class n{constructor(t){t=t||{},this.patternImage_=null,this.color_=null,t.color!==void 0&&this.setColor(t.color)}clone(){let t=this.getColor();return new n({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){if(t!==null&&typeof t=="object"&&"src"in t){let e=mn(null,t.src,{crossOrigin:"anonymous"},void 0,t.offset?null:t.color?t.color:null,!(t.offset&&t.size));e.ready().then(()=>{this.patternImage_=null}),e.getImageState()===B.IDLE&&e.load(),e.getImageState()===B.LOADING&&(this.patternImage_=e)}this.color_=t}getKey(){let t=this.getColor();return t?t instanceof CanvasPattern||t instanceof CanvasGradient?Y(t):typeof t=="object"&&"src"in t?t.src+":"+t.offset:be(t).toString():""}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}},xe=Lc});function Em(n,t,e,i){return e!==void 0&&i!==void 0?[e/n,i/t]:e!==void 0?e/n:i!==void 0?i/t:1}var Ac,Ni,Ta=w(()=>{Mi();Gt();je();lt();ht();Ys();Rc();Ac=class n extends wa{constructor(t){t=t||{};let e=t.opacity!==void 0?t.opacity:1,i=t.rotation!==void 0?t.rotation:0,r=t.scale!==void 0?t.scale:1,s=t.rotateWithView!==void 0?t.rotateWithView:!1;super({opacity:e,rotation:i,scale:r,displacement:t.displacement!==void 0?t.displacement:[0,0],rotateWithView:s,declutterMode:t.declutterMode}),this.anchor_=t.anchor!==void 0?t.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=t.anchorOrigin!==void 0?t.anchorOrigin:"top-left",this.anchorXUnits_=t.anchorXUnits!==void 0?t.anchorXUnits:"fraction",this.anchorYUnits_=t.anchorYUnits!==void 0?t.anchorYUnits:"fraction",this.crossOrigin_=t.crossOrigin!==void 0?t.crossOrigin:null,this.referrerPolicy_=t.referrerPolicy;let o=t.img!==void 0?t.img:null,a=t.src;K(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||Y(o)),K(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),K(!((t.width!==void 0||t.height!==void 0)&&t.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(t.src!==void 0?l=B.IDLE:o!==void 0&&("complete"in o?o.complete?l=o.src?B.LOADED:B.IDLE:l=B.LOADING:l=B.LOADED),this.color_=t.color!==void 0?be(t.color):null,this.iconImage_=mn(o,a,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},l,this.color_),this.offset_=t.offset!==void 0?t.offset:[0,0],this.offsetOrigin_=t.offsetOrigin!==void 0?t.offsetOrigin:"top-left",this.origin_=null,this.size_=t.size!==void 0?t.size:null,this.initialOptions_,t.width!==void 0||t.height!==void 0){let h,c;if(t.size)[h,c]=t.size;else{let u=this.getImage(1);if(u.width&&u.height)h=u.width,c=u.height;else if(u instanceof HTMLImageElement){this.initialOptions_=t;let f=()=>{if(this.unlistenImageChange(f),!this.initialOptions_)return;let d=this.iconImage_.getSize();this.setScale(Em(d[0],d[1],t.width,t.height))};this.listenImageChange(f);return}}h!==void 0&&this.setScale(Em(h,c,t.width,t.height))}}clone(){let t,e,i;return this.initialOptions_?(e=this.initialOptions_.width,i=this.initialOptions_.height):(t=this.getScale(),t=Array.isArray(t)?t.slice():t),new n({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:e,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let t=this.normalizedAnchor_;if(!t){t=this.anchor_;let r=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!r)return null;t=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(t[0]*=r[0]),this.anchorYUnits_=="fraction"&&(t[1]*=r[1])}if(this.anchorOrigin_!="top-left"){if(!r)return null;t===this.anchor_&&(t=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(t[0]=-t[0]+r[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(t[1]=-t[1]+r[1])}this.normalizedAnchor_=t}let e=this.getDisplacement(),i=this.getScaleArray();return[t[0]-e[0]/i[0],t[1]+e[1]/i[1]]}setAnchor(t){this.anchor_=t,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(t){let e=t?be(t):null;if(this.color_===e||this.color_&&e&&this.color_.length===e.length&&this.color_.every((o,a)=>o===e[a]))return;this.color_=e;let i=this.getSrc(),r=i!==void 0?null:this.getHitDetectionImage(),s=i!==void 0?B.IDLE:this.iconImage_.getImageState();this.iconImage_=mn(r,i,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},s,this.color_)}getImage(t){return this.iconImage_.getImage(t)}getPixelRatio(t){return this.iconImage_.getPixelRatio(t)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let t=this.offset_;if(this.offsetOrigin_!="top-left"){let e=this.getSize(),i=this.iconImage_.getSize();if(!e||!i)return null;t=t.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(t[0]=i[0]-e[0]-t[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(t[1]=i[1]-e[1]-t[1])}return this.origin_=t,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(t){this.iconImage_=mn(null,t,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},B.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let t=this.getScaleArray();if(this.size_)return this.size_[0]*t[0];if(this.iconImage_.getImageState()==B.LOADED)return this.iconImage_.getSize()[0]*t[0]}getHeight(){let t=this.getScaleArray();if(this.size_)return this.size_[1]*t[1];if(this.iconImage_.getImageState()==B.LOADED)return this.iconImage_.getSize()[1]*t[1]}setScale(t){delete this.initialOptions_,super.setScale(t)}listenImageChange(t){this.iconImage_.addEventListener(k.CHANGE,t)}load(){this.iconImage_.load()}unlistenImageChange(t){this.iconImage_.removeEventListener(k.CHANGE,t)}ready(){return this.iconImage_.ready()}},Ni=Ac});var Pc,Gi,Ia=w(()=>{Pc=class n{constructor(t){t=t||{},this.color_=t.color!==void 0?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=t.lineDash!==void 0?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.offset_=t.offset,this.width_=t.width}clone(){let t=this.getColor();return new n({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setOffset(t){this.offset_=t}setWidth(t){this.width_=t}},Gi=Pc});function wm(n){let t;if(typeof n=="function")t=n;else{let e;Array.isArray(n)?e=n:(K(typeof n.getZIndex=="function","Expected an `Style` or an array of `Style`"),e=[n]),t=function(){return e}}return t}function Oc(n,t){if(!Mc){let e=new xe({color:"rgba(255,255,255,0.4)"}),i=new Gi({color:"#3399CC",width:1.25});Mc=[new va({image:new ki({fill:e,stroke:i,radius:5}),fill:e,stroke:i})]}return Mc}function Cm(n){return n.getGeometry()}var va,Mc,ie,La=w(()=>{Gt();Ra();Vs();Ia();va=class n{constructor(t){t=t||{},this.geometry_=null,this.geometryFunction_=Cm,t.geometry!==void 0&&this.setGeometry(t.geometry),this.fill_=t.fill!==void 0?t.fill:null,this.image_=t.image!==void 0?t.image:null,this.renderer_=t.renderer!==void 0?t.renderer:null,this.hitDetectionRenderer_=t.hitDetectionRenderer!==void 0?t.hitDetectionRenderer:null,this.stroke_=t.stroke!==void 0?t.stroke:null,this.text_=t.text!==void 0?t.text:null,this.zIndex_=t.zIndex}clone(){let t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new n({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(t){this.renderer_=t}setHitDetectionRenderer(t){this.hitDetectionRenderer_=t}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(t){this.fill_=t}getImage(){return this.image_}setImage(t){this.image_=t}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t}getText(){return this.text_}setText(t){this.text_=t}getZIndex(){return this.zIndex_}setGeometry(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=Cm,this.geometry_=t}setZIndex(t){this.zIndex_=t}};Mc=null;ie=va});var o0,bc,Pr,Fc=w(()=>{Ye();Vs();o0="#333",bc=class n{constructor(t){t=t||{},this.font_=t.font,this.rotation_=t.rotation,this.rotateWithView_=t.rotateWithView,this.keepUpright_=t.keepUpright,this.scale_=t.scale,this.scaleArray_=mt(t.scale!==void 0?t.scale:1),this.text_=t.text,this.textAlign_=t.textAlign,this.justify_=t.justify,this.repeat_=t.repeat,this.textBaseline_=t.textBaseline,this.fill_=t.fill!==void 0?t.fill:new xe({color:o0}),this.maxAngle_=t.maxAngle!==void 0?t.maxAngle:Math.PI/4,this.placement_=t.placement!==void 0?t.placement:"point",this.overflow_=!!t.overflow,this.stroke_=t.stroke!==void 0?t.stroke:null,this.offsetX_=t.offsetX!==void 0?t.offsetX:0,this.offsetY_=t.offsetY!==void 0?t.offsetY:0,this.backgroundFill_=t.backgroundFill?t.backgroundFill:null,this.backgroundStroke_=t.backgroundStroke?t.backgroundStroke:null,this.padding_=t.padding===void 0?null:t.padding,this.declutterMode_=t.declutterMode}clone(){let t=this.getScale();return new n({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof xe?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(t){this.overflow_=t}setFont(t){this.font_=t}setMaxAngle(t){this.maxAngle_=t}setOffsetX(t){this.offsetX_=t}setOffsetY(t){this.offsetY_=t}setPlacement(t){this.placement_=t}setRepeat(t){this.repeat_=t}setRotateWithView(t){this.rotateWithView_=t}setKeepUpright(t){this.keepUpright_=t}setFill(t){this.fill_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=mt(t!==void 0?t:1)}setStroke(t){this.stroke_=t}setText(t){this.text_=t}setTextAlign(t){this.textAlign_=t}setJustify(t){this.justify_=t}setTextBaseline(t){this.textBaseline_=t}setBackgroundFill(t){this.backgroundFill_=t}setBackgroundStroke(t){this.backgroundStroke_=t}setPadding(t){this.padding_=t}},Pr=bc});function a0(n){return!0}function Im(n){let t=gc(),e=l0(n,t),i=_c();return function(r,s){if(i.properties=r.getPropertiesInternal(),i.resolution=s,t.featureId){let o=r.getId();o!==void 0?i.featureId=o:i.featureId=null}return t.geometryType&&(i.geometryType=mc(r.getGeometry())),e(i)}}function Nc(n){let t=gc(),e=n.length,i=new Array(e);for(let o=0;o<e;++o)i[o]=Dc(n[o],t);let r=_c(),s=new Array(e);return function(o,a){if(r.properties=o.getPropertiesInternal(),r.resolution=a,t.featureId){let h=o.getId();h!==void 0?r.featureId=h:r.featureId=null}let l=0;for(let h=0;h<e;++h){let c=i[h](r);c&&(s[l]=c,l+=1)}return s.length=l,s}}function l0(n,t){let e=n.length,i=new Array(e);for(let r=0;r<e;++r){let s=n[r],o="filter"in s?Ke(s.filter,Ht,t):a0,a;if(Array.isArray(s.style)){let l=s.style.length;a=new Array(l);for(let h=0;h<l;++h)a[h]=Dc(s.style[h],t)}else a=[Dc(s.style,t)];i[r]={filter:o,styles:a}}return function(r){let s=[],o=!1;for(let a=0;a<e;++a){let l=i[a].filter;if(l(r)&&!(n[a].else&&o)){o=!0;for(let h of i[a].styles){let c=h(r);c&&s.push(c)}}}return s}}function Dc(n,t){let e=Zs(n,"",t),i=Hs(n,"",t),r=h0(n,t),s=c0(n,t),o=jt(n,"z-index",t);if(!e&&!i&&!r&&!s&&!ge(n))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(n));let a=new ie;return function(l){let h=!0;if(e){let c=e(l);c&&(h=!1),a.setFill(c)}if(i){let c=i(l);c&&(h=!1),a.setStroke(c)}if(r){let c=r(l);c&&(h=!1),a.setText(c)}if(s){let c=s(l);c&&(h=!1),a.setImage(c)}return o&&a.setZIndex(o(l)),h?null:a}}function Zs(n,t,e){let i;if(t+"fill-pattern-src"in n)i=g0(n,t+"fill-",e);else{if(n[t+"fill-color"]==="none")return s=>null;i=Pa(n,t+"fill-color",e)}if(!i)return null;let r=new xe;return function(s){let o=i(s);return o===ya?null:(r.setColor(o),r)}}function Hs(n,t,e){let i=jt(n,t+"stroke-width",e),r=Pa(n,t+"stroke-color",e);if(!i&&!r)return null;let s=zi(n,t+"stroke-line-cap",e),o=zi(n,t+"stroke-line-join",e),a=vm(n,t+"stroke-line-dash",e),l=jt(n,t+"stroke-line-dash-offset",e),h=jt(n,t+"stroke-miter-limit",e),c=jt(n,t+"stroke-offset",e),u=new Gi;return function(f){if(r){let d=r(f);if(d===ya)return null;u.setColor(d)}if(i&&u.setWidth(i(f)),s){let d=s(f);if(d!=="butt"&&d!=="round"&&d!=="square")throw new Error("Expected butt, round, or square line cap");u.setLineCap(d)}if(o){let d=o(f);if(d!=="bevel"&&d!=="round"&&d!=="miter")throw new Error("Expected bevel, round, or miter line join");u.setLineJoin(d)}return a&&u.setLineDash(a(f)),l&&u.setLineDashOffset(l(f)),h&&u.setMiterLimit(h(f)),c&&u.setOffset(c(f)),u}}function h0(n,t){let e="text-",i=zi(n,e+"value",t);if(!i)return null;let r=Zs(n,e,t),s=Zs(n,e+"background-",t),o=Hs(n,e,t),a=Hs(n,e+"background-",t),l=zi(n,e+"font",t),h=jt(n,e+"max-angle",t),c=jt(n,e+"offset-x",t),u=jt(n,e+"offset-y",t),f=Mr(n,e+"overflow",t),d=zi(n,e+"placement",t),g=jt(n,e+"repeat",t),p=Ma(n,e+"scale",t),m=Mr(n,e+"rotate-with-view",t),y=jt(n,e+"rotation",t),x=zi(n,e+"align",t),C=zi(n,e+"justify",t),_=zi(n,e+"baseline",t),E=Mr(n,e+"keep-upright",t),I=vm(n,e+"padding",t),A=Oa(n,e+"declutter-mode"),T=new Pr({declutterMode:A});return function(S){if(T.setText(i(S)),r&&T.setFill(r(S)),s&&T.setBackgroundFill(s(S)),o&&T.setStroke(o(S)),a&&T.setBackgroundStroke(a(S)),l&&T.setFont(l(S)),h&&T.setMaxAngle(h(S)),c&&T.setOffsetX(c(S)),u&&T.setOffsetY(u(S)),f&&T.setOverflow(f(S)),d){let v=d(S);if(v!=="point"&&v!=="line")throw new Error("Expected point or line for text-placement");T.setPlacement(v)}if(g&&T.setRepeat(g(S)),p&&T.setScale(p(S)),m&&T.setRotateWithView(m(S)),y&&T.setRotation(y(S)),x){let v=x(S);if(v!=="left"&&v!=="center"&&v!=="right"&&v!=="end"&&v!=="start")throw new Error("Expected left, right, center, start, or end for text-align");T.setTextAlign(v)}if(C){let v=C(S);if(v!=="left"&&v!=="right"&&v!=="center")throw new Error("Expected left, right, or center for text-justify");T.setJustify(v)}if(_){let v=_(S);if(v!=="bottom"&&v!=="top"&&v!=="middle"&&v!=="alphabetic"&&v!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");T.setTextBaseline(v)}return I&&T.setPadding(I(S)),E&&T.setKeepUpright(E(S)),T}}function c0(n,t){return"icon-src"in n?u0(n,t):"shape-points"in n?f0(n,t):"circle-radius"in n?d0(n,t):null}function u0(n,t){let e="icon-",i=e+"src",r=Lm(n[i],i),s=Aa(n,e+"anchor",t),o=Ma(n,e+"scale",t),a=jt(n,e+"opacity",t),l=Aa(n,e+"displacement",t),h=jt(n,e+"rotation",t),c=Mr(n,e+"rotate-with-view",t),u=Rm(n,e+"anchor-origin"),f=Tm(n,e+"anchor-x-units"),d=Tm(n,e+"anchor-y-units"),g=Xi(n,e+"color"),p,m=null;g!==void 0&&(Array.isArray(g)&&g.length>0&&typeof g[0]=="string"?m=Pa(n,e+"color",t):p=Am(g,e+"color"));let y=p0(n,e+"cross-origin"),x=_0(n,e+"offset"),C=Rm(n,e+"offset-origin"),_=kc(n,e+"width"),E=kc(n,e+"height"),I=m0(n,e+"size"),A=Oa(n,e+"declutter-mode"),T={src:r,anchorOrigin:u,anchorXUnits:f,anchorYUnits:d,crossOrigin:y,offset:x,offsetOrigin:C,height:E,width:_,size:I,declutterMode:A},S=null;return function(v){if(S)m&&S.setColor(m(v));else{let F=m?m(v):p;S=new Ni(F!==void 0?Object.assign({},T,{color:F}):Object.assign({},T))}return a&&S.setOpacity(a(v)),l&&S.setDisplacement(l(v)),h&&S.setRotation(h(v)),c&&S.setRotateWithView(c(v)),o&&S.setScale(o(v)),s&&S.setAnchor(s(v)),S}}function f0(n,t){let e="shape-",i=e+"points",r=e+"radius",s=Gc(n[i],i);if(!(r in n))throw new Error(`Expected a number for ${r}`);let o=jt(n,r,t),a=typeof n[r]=="number"?n[r]:5,l=e+"radius2",h=jt(n,l,t),c=typeof n[l]=="number"?n[l]:void 0,u=Zs(n,e,t),f=Hs(n,e,t),d=Ma(n,e+"scale",t),g=Aa(n,e+"displacement",t),p=jt(n,e+"rotation",t),m=Mr(n,e+"rotate-with-view",t),y=kc(n,e+"angle"),x=Oa(n,e+"declutter-mode"),C=new Sa({points:s,radius:a,radius2:c,angle:y,declutterMode:x});return function(_){return o&&C.setRadius(o(_)),h&&C.setRadius2(h(_)),u&&C.setFill(u(_)),f&&C.setStroke(f(_)),g&&C.setDisplacement(g(_)),p&&C.setRotation(p(_)),m&&C.setRotateWithView(m(_)),d&&C.setScale(d(_)),C}}function d0(n,t){let e="circle-",i=Zs(n,e,t),r=Hs(n,e,t),s=jt(n,e+"radius",t),o=Ma(n,e+"scale",t),a=Aa(n,e+"displacement",t),l=jt(n,e+"rotation",t),h=Mr(n,e+"rotate-with-view",t),c=Oa(n,e+"declutter-mode"),u=new ki({radius:5,declutterMode:c});return function(f){return s&&u.setRadius(s(f)),i&&u.setFill(i(f)),r&&u.setStroke(r(f)),a&&u.setDisplacement(a(f)),l&&u.setRotation(l(f)),h&&u.setRotateWithView(h(f)),o&&u.setScale(o(f)),u}}function Xi(n,t){if(!(t in n))return;let e=n[t];return e===void 0?void 0:e}function jt(n,t,e){let i=Xi(n,t);if(i===void 0)return;let r=Ke(i,tt,e);return function(s){return Gc(r(s),t)}}function zi(n,t,e){let i=Xi(n,t);if(i===void 0)return null;let r=Ke(i,ee,e);return function(s){return Lm(r(s),t)}}function g0(n,t,e){let i=zi(n,t+"pattern-src",e),r=Sm(n,t+"pattern-offset",e),s=Sm(n,t+"pattern-size",e),o=Pa(n,t+"color",e);return function(a){return{src:i(a),offset:r&&r(a),size:s&&s(a),color:o&&o(a)}}}function Mr(n,t,e){let i=Xi(n,t);if(i===void 0)return null;let r=Ke(i,Ht,e);return function(s){let o=r(s);if(typeof o!="boolean")throw new Error(`Expected a boolean for ${t}`);return o}}function Pa(n,t,e){let i=Xi(n,t);if(i===void 0)return null;let r=Ke(i,ye,e);return function(s){return Am(r(s),t)}}function vm(n,t,e){let i=Xi(n,t);if(i===void 0)return null;if(Array.isArray(i)&&(i.length===0||typeof i[0]!="string")){let s=i.map((o,a)=>{if(typeof o=="number")return()=>o;let l=Ke(o,tt,e);return function(h){return Gc(l(h),`${t}[${a}]`)}});return function(o){let a=new Array(s.length);for(let l=0;l<s.length;++l)a[l]=s[l](o);return a}}let r=Ke(i,gn,e);return function(s){return qs(r(s),t)}}function Aa(n,t,e){let i=Xi(n,t);if(i===void 0)return null;let r=Ke(i,gn,e);return function(s){let o=qs(r(s),t);if(o.length!==2)throw new Error(`Expected two numbers for ${t}`);return o}}function Sm(n,t,e){let i=Xi(n,t);if(i===void 0)return null;let r=Ke(i,gn,e);return function(s){return Pm(r(s),t)}}function Ma(n,t,e){let i=Xi(n,t);if(i===void 0)return null;let r=Ke(i,gn|tt,e);return function(s){return y0(r(s),t)}}function kc(n,t){let e=n[t];if(e!==void 0){if(typeof e!="number")throw new Error(`Expected a number for ${t}`);return e}}function m0(n,t){let e=n[t];if(e!==void 0){if(typeof e=="number")return mt(e);if(!Array.isArray(e))throw new Error(`Expected a number or size array for ${t}`);if(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error(`Expected a number or size array for ${t}`);return e}}function p0(n,t){let e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);return e}}function Rm(n,t){let e=n[t];if(e!==void 0){if(e!=="bottom-left"&&e!=="bottom-right"&&e!=="top-left"&&e!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);return e}}function Tm(n,t){let e=n[t];if(e!==void 0){if(e!=="pixels"&&e!=="fraction")throw new Error(`Expected pixels or fraction for ${t}`);return e}}function _0(n,t){let e=n[t];if(e!==void 0)return qs(e,t)}function Oa(n,t){let e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);if(e!=="declutter"&&e!=="obstacle"&&e!=="none")throw new Error(`Expected declutter, obstacle, or none for ${t}`);return e}}function qs(n,t){if(!Array.isArray(n))throw new Error(`Expected an array for ${t}`);let e=n.length;for(let i=0;i<e;++i)if(typeof n[i]!="number")throw new Error(`Expected an array of numbers for ${t}`);return n}function Lm(n,t){if(typeof n!="string")throw new Error(`Expected a string for ${t}`);return n}function Gc(n,t){if(typeof n!="number")throw new Error(`Expected a number for ${t}`);return n}function Am(n,t){if(typeof n=="string")return n;let e=qs(n,t),i=e.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${t}`);return e}function Pm(n,t){let e=qs(n,t);if(e.length!==2)throw new Error(`Expected an array of two numbers for ${t}`);return e}function y0(n,t){return typeof n=="number"?n:Pm(n,t)}var Mm=w(()=>{je();hm();pc();Re();Ye();Ra();Vs();Ta();Ic();Ia();La();Fc()});function x0(n){if(n===void 0)return Oc;if(!n)return null;if(typeof n=="function"||n instanceof ie)return n;if(!Array.isArray(n))return Nc([n]);if(n.length===0)return[];let t=n.length,e=n[0];if(e instanceof ie){let r=new Array(t);for(let s=0;s<t;++s){let o=n[s];if(!(o instanceof ie))throw new Error("Expected a list of style instances");r[s]=o}return r}if("style"in e){let r=new Array(t);for(let s=0;s<t;++s){let o=n[s];if(!("style"in o))throw new Error("Expected a list of rules with a style property");r[s]=o}return Im(r)}return Nc(n)}var Om,zc,ba,Xc=w(()=>{ic();Mm();La();Ir();Om={RENDER_ORDER:"renderOrder"},zc=class extends Gn{constructor(t){t=t||{};let e=Object.assign({},t);delete e.style,delete e.renderBuffer,delete e.updateWhileAnimating,delete e.updateWhileInteracting,super(e),this.declutter_=t.declutter?String(t.declutter):void 0,this.renderBuffer_=t.renderBuffer!==void 0?t.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(t.style),this.updateWhileAnimating_=t.updateWhileAnimating!==void 0?t.updateWhileAnimating:!1,this.updateWhileInteracting_=t.updateWhileInteracting!==void 0?t.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(t){return super.getFeatures(t)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(Om.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(t,e){let i=this.getDeclutter();i in t.declutter||(t.declutter[i]=new zn(9)),this.getRenderer().renderDeclutter(t,e)}setRenderOrder(t){this.set(Om.RENDER_ORDER,t)}setStyle(t){this.style_=t===void 0?Oc:t;let e=x0(t);this.styleFunction_=t===null?void 0:wm(e),this.changed()}setDeclutter(t){this.declutter_=t?String(t):void 0,this.changed()}};ba=zc});var Wc,Fa,Uc=w(()=>{Qe();Wc=class extends Ot{constructor(t,e,i,r){super(t),this.inversePixelTransform=e,this.frameState=i,this.context=r}},Fa=Wc});function E0(n,t){qt.expire()}var jc,bm,Fm=w(()=>{Jr();Ti();H();te();Ir();Us();Pe();ht();jc=class extends Bi{constructor(t){super(),this.map_=t}dispatchRenderEvent(t,e){W()}calculateMatrices2D(t){let e=t.viewState,i=t.coordinateToPixelTransform,r=t.pixelToCoordinateTransform;Wt(i,t.size[0]/2,t.size[1]/2,1/e.resolution,-1/e.resolution,-e.rotation,-e.center[0],-e.center[1]),jo(r,i)}forEachFeatureAtCoordinate(t,e,i,r,s,o,a,l){let h,c=e.viewState;function u(_,E,I,A){return s.call(o,E,_?I:null,A)}let f=c.projection,d=Oo(t.slice(),f),g=[[0,0]];if(f.canWrapX()&&r){let _=f.getExtent(),E=$(_);g.push([-E,0],[E,0])}let p=e.layerStatesArray,m=p.length,y=[],x=[];for(let _=0;_<g.length;_++)for(let E=m-1;E>=0;--E){let I=p[E],A=I.layer;if(A.hasRenderer()&&Ps(I,c)&&a.call(l,A)){let T=A.getRenderer(),S=A.getSource();if(T&&S){let v=S.getWrapX()?d:t,F=u.bind(null,I.managed);x[0]=v[0]+g[_][0],x[1]=v[1]+g[_][1],h=T.forEachFeatureAtCoordinate(x,e,i,F,y)}if(h)return h}}if(y.length===0)return;let C=1/y.length;return y.forEach((_,E)=>_.distanceSq+=E*C),y.sort((_,E)=>_.distanceSq-E.distanceSq),y.some(_=>h=_.callback(_.feature,_.layer,_.geometry)),h}hasFeatureAtCoordinate(t,e,i,r,s,o){return this.forEachFeatureAtCoordinate(t,e,i,r,xi,this,s,o)!==void 0}getMap(){return this.map_}renderFrame(t){W()}scheduleExpireIconCache(t){qt.canExpireCache()&&t.postRenderFunctions.push(E0)}};bm=jc});var Yc,Dm,km=w(()=>{Zn();hn();Ct();Bt();ke();Xc();Ir();Uc();Tr();Di();Pe();Fm();Yc=class extends bm{constructor(t){super(t),this.fontChangeListenerKey_=j(Wn,De.PROPERTYCHANGE,t.redrawText,t),this.element_=vt?oa():document.createElement("div");let e=this.element_.style;e.position="absolute",e.width="100%",e.height="100%",e.zIndex="0",this.element_.className=oi+" ol-layers";let i=t.getViewport();i&&i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(t,e){let i=this.getMap();if(i.hasListener(t)){let r=new Fa(t,void 0,e);i.dispatchEvent(r)}}disposeInternal(){q(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(t){if(!t){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(t),this.dispatchRenderEvent(Ut.PRECOMPOSE,t);let e=t.layerStatesArray.sort((h,c)=>h.zIndex-c.zIndex);e.some(h=>h.layer instanceof ba&&h.layer.getDeclutter())&&(t.declutter={});let r=t.viewState;this.children_.length=0;let s=[],o=null;for(let h=0,c=e.length;h<c;++h){let u=e[h];t.layerIndex=h;let f=u.layer,d=f.getSourceState();if(!Ps(u,r)||d!="ready"&&d!="undefined"){f.unrender();continue}let g=f.render(t,o);g&&(g!==o&&(this.children_.push(g),o=g),s.push(u))}this.declutter(t,s),mg(this.element_,this.children_);let l=this.getMap().getTargetElement();if(We(l)){let h=l.getContext("2d");for(let c of this.children_){let u=c.firstElementChild||c,f=c.style.backgroundColor;if(f&&(!We(u)||u.width>0)&&(h.fillStyle=f,h.fillRect(0,0,l.width,l.height)),We(u)&&u.width>0){h.save();let d=c.style.opacity||u.style.opacity;h.globalAlpha=d===""?1:Number(d);let g=u.style.transform;if(g)h.transform(...Uo(g));else{let p=parseFloat(u.style.width)/u.width,m=parseFloat(u.style.height)/u.height;h.transform(p,0,0,m,0,0)}h.drawImage(u,0,0),h.restore()}}}this.dispatchRenderEvent(Ut.POSTCOMPOSE,t),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(t)}declutter(t,e){if(t.declutter){for(let i=e.length-1;i>=0;--i){let r=e[i],s=r.layer;s.getDeclutter()&&s.renderDeclutter(t,r)}e.forEach(i=>i.layer.renderDeferred(t))}}},Dm=Yc});function Nm(n){if(n instanceof Gn){n.setMapInternal(null);return}n instanceof As&&n.getLayers().forEach(Nm)}function Gm(n,t){if(n instanceof Gn){n.setMapInternal(t);return}if(n instanceof As){let e=n.getLayers().getArray();for(let i=0,r=e.length;i<r;++i)Gm(e[i],t)}}function C0(n){let t=null;n.keyboardEventTarget!==void 0&&(t=typeof n.keyboardEventTarget=="string"?document.getElementById(n.keyboardEventTarget):n.keyboardEventTarget);let e={},i=n.layers&&typeof n.layers.getLayers=="function"?n.layers:new As({layers:n.layers});e[Rt.LAYERGROUP]=i,e[Rt.TARGET]=n.target,e[Rt.VIEW]=n.view instanceof Zt?n.view:new Zt;let r;n.controls!==void 0&&(Array.isArray(n.controls)?r=new Nt(n.controls.slice()):(K(typeof n.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),r=n.controls));let s;n.interactions!==void 0&&(Array.isArray(n.interactions)?s=new Nt(n.interactions.slice()):(K(typeof n.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),s=n.interactions));let o;return n.overlays!==void 0?Array.isArray(n.overlays)?o=new Nt(n.overlays.slice()):(K(typeof n.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=n.overlays):o=new Nt,{controls:r,interactions:s,keyboardEventTarget:t,overlays:o,values:e}}var Bc,$s,Kc=w(()=>{Qn();$r();vl();Kf();ts();Tl();wo();Ol();Te();Zn();$f();Ts();So();ft();Gt();jl();_g();Ct();Bt();lt();H();te();ke();$g();Jg();Ir();Pl();Xt();Tr();km();Ye();Pe();ht();Bc=class extends xt{constructor(t){super(),t=t||{},this.on,this.once,this.un;let e=C0(t);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=t.maxTilesLoading!==void 0?t.maxTilesLoading:16,this.pixelRatio_=t.pixelRatio!==void 0?t.pixelRatio:Yf,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=bt(),this.pixelToCoordinateTransform_=bt(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,vt||(this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=t.moveTolerance,this.keyboardEventTarget_=e.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,vt||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=e.controls||(vt?new Nt:pg()),this.interactions=e.interactions||(vt?new Nt:qg({onFocusOnly:!0})),this.overlays_=e.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new Hf(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(Rt.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(Rt.VIEW,this.handleViewChanged_),this.addChangeListener(Rt.SIZE,this.handleSizeChanged_),this.addChangeListener(Rt.TARGET,this.handleTargetChanged_),this.setProperties(e.values);let i=this;t.view&&!(t.view instanceof Zt)&&t.view.then(function(r){i.setView(new Zt(r))}),this.controls.addEventListener(Mt.ADD,r=>{r.element.setMap(this)}),this.controls.addEventListener(Mt.REMOVE,r=>{r.element.setMap(null)}),this.interactions.addEventListener(Mt.ADD,r=>{r.element.setMap(this)}),this.interactions.addEventListener(Mt.REMOVE,r=>{r.element.setMap(null)}),this.overlays_.addEventListener(Mt.ADD,r=>{this.addOverlayInternal_(r.element)}),this.overlays_.addEventListener(Mt.REMOVE,r=>{let s=r.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],r.element.setMap(null)}),this.controls.forEach(r=>{r.setMap(this)}),this.interactions.forEach(r=>{r.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(t){this.getControls().push(t)}addInteraction(t){this.getInteractions().push(t)}addLayer(t){this.getLayerGroup().getLayers().push(t)}handleLayerAdd_(t){Gm(t.layer,this)}addOverlay(t){this.getOverlays().push(t)}addOverlayInternal_(t){let e=t.getId();e!==void 0&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(t,e,i){if(!this.frameState_||!this.renderer_)return;let r=this.getCoordinateFromPixelInternal(t);i=i!==void 0?i:{};let s=i.hitTolerance!==void 0?i.hitTolerance:0,o=i.layerFilter!==void 0?i.layerFilter:xi,a=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,s,a,e,null,o,null)}getFeaturesAtPixel(t,e){let i=[];return this.forEachFeatureAtPixel(t,function(r){i.push(r)},e),i}getAllLayers(){let t=[];function e(i){i.forEach(function(r){r instanceof As?e(r.getLayers()):t.push(r)})}return e(this.getLayers()),t}hasFeatureAtPixel(t,e){if(!this.frameState_||!this.renderer_)return!1;let i=this.getCoordinateFromPixelInternal(t);e=e!==void 0?e:{};let r=e.layerFilter!==void 0?e.layerFilter:xi,s=e.hitTolerance!==void 0?e.hitTolerance:0,o=e.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,s,o,r,null)}getEventCoordinate(t){return this.getCoordinateFromPixel(this.getEventPixel(t))}getEventCoordinateInternal(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))}getEventPixel(t){let i=this.viewport_.getBoundingClientRect(),r=this.getSize(),s=i.width/r[0],o=i.height/r[1],a="changedTouches"in t?t.changedTouches[0]:t;return[(a.clientX-i.left)/s,(a.clientY-i.top)/o]}getTarget(){return this.get(Rt.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(t){return hs(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())}getCoordinateFromPixelInternal(t){let e=this.frameState_;return e?_t(e.pixelToCoordinateTransform,t.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(t){let e=this.overlayIdIndex_[t.toString()];return e!==void 0?e:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(Rt.LAYERGROUP)}setLayers(t){let e=this.getLayerGroup();if(t instanceof Nt){e.setLayers(t);return}let i=e.getLayers();i.clear(),i.extend(t)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){let r=t[e];if(!r.visible)continue;let s=r.layer.getRenderer();if(s&&!s.ready)return!0;let o=r.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(t){let e=pe(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)}getPixelFromCoordinateInternal(t){let e=this.frameState_;return e?_t(e.coordinateToPixelTransform,t.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(t){this.pixelRatio_!==t&&(this.pixelRatio_=t,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(Rt.SIZE)}getView(){return this.get(Rt.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let t=this.getTargetElement();return t?t.ownerDocument:document}getTilePriority(t,e,i,r){return qf(this.frameState_,t,e,i,r)}handleBrowserEvent(t,e){e=e||t.type;let i=new ti(e,this,t);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(t){if(!this.frameState_)return;let e=t.originalEvent,i=e.type;if(i===es.POINTERDOWN||i===k.WHEEL||i===k.KEYDOWN){let r=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():r,o=e.target,a=s instanceof ShadowRoot?s.host===o?s.host.ownerDocument:s:s===r?r.documentElement:s;if(this.overlayContainerStopEvent_.contains(o)||!a.contains(o))return}if(t.frameState=this.frameState_,this.dispatchEvent(t)!==!1){let r=this.getInteractions().getArray().slice();for(let s=r.length-1;s>=0;s--){let o=r[s];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(t)||t.propagationStopped)break}}}handlePostRender(){let t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){let r=this.maxTilesLoading_,s=r,o=t?t.viewHints:void 0,a=o?o[Lt.ANIMATING]||o[Lt.INTERACTING]:!1;if(a){let l=Date.now()-t.time>8;r=l?0:8,s=l?0:2}e.getTilesLoading()<r&&(a&&e.reprioritize(),e.loadMoreTiles(r,s))}t&&this.renderer_&&!t.animate&&(this.renderComplete_?(this.hasListener(Ut.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(Ut.RENDERCOMPLETE,t),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Vi(Ie.LOADEND,this,t)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Vi(Ie.LOADSTART,this,t))));let i=this.postRenderFunctions_;if(t)for(let r=0,s=i.length;r<s;++r)i[r](this,t);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,r=this.targetChangeHandlerKeys_.length;i<r;++i)q(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(k.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(k.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!We(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}let t=this.getTarget(),e=typeof t=="string"?document.getElementById(t):t;if(this.targetElement_=e,!e)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{if(We(e)||e.appendChild(this.viewport_),this.renderer_||(this.renderer_=new Dm(this)),!We(e)){this.mapBrowserEventHandler_=new Bf(this,this.moveTolerance_);for(let r in ct)this.mapBrowserEventHandler_.addEventListener(ct[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(k.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(k.WHEEL,this.boundHandleBrowserEvent_,Co?{passive:!1}:!1);let i;if(this.keyboardEventTarget_)i=this.keyboardEventTarget_;else{let r=e.getRootNode();i=r instanceof ShadowRoot?r.host:e}if(this.targetChangeHandlerKeys_=[j(i,k.KEYDOWN,this.handleBrowserEvent,this),j(i,k.KEYPRESS,this.handleBrowserEvent,this)],e instanceof HTMLElement){let r=e.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.observe(r.host),this.resizeObserver_?.observe(e)}}this.updateSize()}}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(q(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(q(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);let t=this.getView();t&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=j(t,De.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=j(t,k.CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(q),this.layerGroupPropertyListenerKeys_=null);let t=this.getLayerGroup();t&&(this.handleLayerAdd_(new Ue("addlayer",t)),this.layerGroupPropertyListenerKeys_=[j(t,De.PROPERTYCHANGE,this.render,this),j(t,k.CHANGE,this.render,this),j(t,"addlayer",this.handleLayerAdd_,this),j(t,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let t=this.frameState_.layerStatesArray;for(let e=0,i=t.length;e<i;++e){let r=t[e].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(t){return this.getControls().remove(t)}removeInteraction(t){return this.getInteractions().remove(t)}removeLayer(t){return this.getLayerGroup().getLayers().remove(t)}handleLayerRemove_(t){Nm(t.layer)}removeOverlay(t){return this.getOverlays().remove(t)}renderFrame_(t){let e=this.getSize(),i=this.getView(),r=this.frameState_,s=null;if(e!==void 0&&cc(e)&&i&&i.isDef()){let o=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=i.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:as(a.center,a.resolution,a.rotation,e),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:e,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:Y(this),renderTargets:{}},a.nextCenter&&a.nextResolution){let l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;s.nextExtent=as(a.nextCenter,a.nextResolution,l,e)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),r&&(!this.previousExtent_||!ri(this.previousExtent_)&&!Ri(s.extent,this.previousExtent_))&&(this.dispatchEvent(new Vi(Ie.MOVESTART,this,r)),this.previousExtent_=Si(this.previousExtent_)),this.previousExtent_&&!s.viewHints[Lt.ANIMATING]&&!s.viewHints[Lt.INTERACTING]&&!Ri(s.extent,this.previousExtent_)&&(this.dispatchEvent(new Vi(Ie.MOVEEND,this,s)),vo(s.extent,this.previousExtent_))),this.dispatchEvent(new Vi(Ie.POSTRENDER,this,s)),this.renderComplete_=(this.hasListener(Ie.LOADSTART)||this.hasListener(Ie.LOADEND)||this.hasListener(Ut.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(t){let e=this.getLayerGroup();e&&this.handleLayerRemove_(new Ue("removelayer",e)),this.set(Rt.LAYERGROUP,t)}setSize(t){this.set(Rt.SIZE,t)}setTarget(t){this.set(Rt.TARGET,t)}setView(t){if(!t||t instanceof Zt){this.set(Rt.VIEW,t);return}this.set(Rt.VIEW,new Zt);let e=this;t.then(function(i){e.setView(new Zt(i))})}updateSize(){let t=this.getTargetElement(),e;if(t){let r,s;if(We(t)){let o=t.getContext("2d").getTransform();r=t.width/o.a,s=t.height/o.d}else{let o=getComputedStyle(t);r=t.offsetWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight)-parseFloat(o.borderRightWidth),s=t.offsetHeight-parseFloat(o.borderTopWidth)-parseFloat(o.paddingTop)-parseFloat(o.paddingBottom)-parseFloat(o.borderBottomWidth)}!isNaN(r)&&!isNaN(s)&&(e=[Math.max(0,r),Math.max(0,s)],!cc(e)&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)&&bo("No map visible because the map container's width or height are 0."))}let i=this.getSize();e&&(!i||!Kt(e,i))&&(this.updateViewportSize_(e),this.setSize(e))}updateViewportSize_(t){let e=this.getView();e&&e.setViewportSize(t)}};$s=Bc});function Zm(n){return n?typeof n=="function"?n:(Array.isArray(n)||(n=[n]),t=>n):null}var ou,Wa,au=w(()=>{Te();Xt();ou=class extends xt{constructor(t){super(),this.projection=ot(t.projection),this.attributions_=Zm(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible??!0,this.loading=!1,this.state_=t.state!==void 0?t.state:"ready",this.wrapX_=t.wrapX!==void 0?t.wrapX:!1,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;let e=this;this.viewPromise_=new Promise(function(i,r){e.viewResolver=i,e.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=Zm(t),this.changed()}setState(t){this.state_=t,this.changed()}};Wa=ou});var _u,Ua,yu=w(()=>{Ct();_u=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.context_=new Proxy(_r(),{get:(t,e)=>{if(typeof _r()[e]=="function")return this.push_(e),this.pushMethodArgs_},set:(t,e,i)=>(this.push_(e,i),!0)})}push_(...t){let e=this.instructions_,i=this.zIndex+this.offset_;e[i]||(e[i]=[]),e[i].push(...t)}pushMethodArgs_=(...t)=>(this.push_(t),this);pushFunction(t){this.push_(t)}getContext(){return this.context_}draw(t){this.instructions_.forEach(e=>{for(let i=0,r=e.length;i<r;++i){let s=e[i];if(typeof s=="function"){s(t);continue}let o=e[++i];if(typeof t[s]=="function")t[s](...o);else{if(typeof o=="function"){t[s]=o(t);continue}t[s]=o}}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}},Ua=_u});var W0,Ru,up,fp=w(()=>{Mi();Cl();lt();ht();W0=5,Ru=class extends xo{constructor(t){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=t,this.staleKeys_=new Array,this.maxStaleKeys=W0}getStaleKeys(){return this.staleKeys_}prependStaleKey(t){this.staleKeys_.unshift(t),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}getFeatures(t){return W()}getData(t){return null}prepareFrame(t){return W()}renderFrame(t,e){return W()}forEachFeatureAtCoordinate(t,e,i,r,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(t){let e=t.target;(e.getState()===B.LOADED||e.getState()===B.ERROR)&&this.renderIfReadyAndVisible()}loadImage(t){let e=t.getState();return e!=B.LOADED&&e!=B.ERROR&&t.addEventListener(k.CHANGE,this.boundHandleImageChange_),e==B.IDLE&&(t.load(),e=t.getState()),e==B.LOADED}renderIfReadyAndVisible(){let t=this.getLayer();t&&t.getVisible()&&t.getSourceState()==="ready"&&t.changed()}renderDeferred(t){}disposeInternal(){delete this.layer_,super.disposeInternal()}},up=Ru});function U0(){Dr=nt(1,1,void 0,{willReadFrequently:!0})}var Iu,Dr,Tu,ja,vu=w(()=>{ft();je();Ct();H();ke();Uc();Tr();yu();Pe();fp();Iu=[],Dr=null;Tu=class extends up{constructor(t){super(t),this.container=null,this.renderedResolution,this.tempTransform=bt(),this.pixelTransform=bt(),this.inversePixelTransform=bt(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(t,e,i){Dr||U0(),Dr.clearRect(0,0,1,1);let r;try{Dr.drawImage(t,e,i,1,1,0,0,1,1),r=Dr.getImageData(0,0,1,1).data}catch{return Dr=null,null}return r}getBackground(t){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(t.viewState.resolution)),i||void 0}useContainer(t,e,i){let r=this.getLayer().getClassName(),s,o;if(t&&t.className===r&&(!i||t&&t.style.backgroundColor&&Kt(be(t.style.backgroundColor),be(i)))){let a=t.firstElementChild;We(a)&&(o=a.getContext("2d"))}if(o&&Xd(o.canvas.style.transform,e)?(this.container=t,this.context=o,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){s=vt?oa():document.createElement("div"),s.className=r;let a=s.style;a.position="absolute",a.width="100%",a.height="100%",o=nt();let l=o.canvas;s.appendChild(l),a=l.style,a.position="absolute",a.left="0",a.transformOrigin="top left",this.container=s,this.context=o}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(t,e,i){let r=oe(i),s=sr(i),o=rr(i),a=nr(i);_t(e.coordinateToPixelTransform,r),_t(e.coordinateToPixelTransform,s),_t(e.coordinateToPixelTransform,o),_t(e.coordinateToPixelTransform,a);let l=this.inversePixelTransform;_t(l,r),_t(l,s),_t(l,o),_t(l,a),t.save(),t.beginPath(),t.moveTo(Math.round(r[0]),Math.round(r[1])),t.lineTo(Math.round(s[0]),Math.round(s[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(a[0]),Math.round(a[1])),t.clip()}prepareContainer(t,e){let i=t.extent,r=t.viewState.resolution,s=t.viewState.rotation,o=t.pixelRatio,a=Math.round($(i)/r*o),l=Math.round(ut(i)/r*o);Wt(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/o,1/o,s,-a/2,-l/2),jo(this.inversePixelTransform,this.pixelTransform);let h=zd(this.pixelTransform);if(this.useContainer(e,h,this.getBackground(t)),!this.containerReused){let c=this.context.canvas;c.width!=a||c.height!=l?(c.width=a,c.height=l):this.context.clearRect(0,0,a,l),h!==c.style.transform&&(c.style.transform=h)}}dispatchRenderEvent_(t,e,i){let r=this.getLayer();if(r.hasListener(t)){let s=new Fa(t,this.inversePixelTransform,i,e);r.dispatchEvent(s)}}preRender(t,e){this.frameState=e,!e.declutter&&this.dispatchRenderEvent_(Ut.PRERENDER,t,e)}postRender(t,e){e.declutter||this.dispatchRenderEvent_(Ut.POSTRENDER,t,e)}renderDeferredInternal(t){}getRenderContext(t){return t.declutter&&!this.deferredContext_&&(this.deferredContext_=new Ua),t.declutter?this.deferredContext_.getContext():this.context}renderDeferred(t){t.declutter&&(this.dispatchRenderEvent_(Ut.PRERENDER,this.context,t),t.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(t),this.dispatchRenderEvent_(Ut.POSTRENDER,this.context,t))}getRenderTransform(t,e,i,r,s,o,a){let l=s/2,h=o/2,c=r/e,u=-c,f=-t[0]+a,d=-t[1];return Wt(this.tempTransform,l,h,c,u,-i,f,d)}disposeInternal(){delete this.frameState,super.disposeInternal()}},ja=Tu});var Pu,kr,Ba=w(()=>{ei();Hi();lt();Qr();ht();Pu=class extends Ki{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(k.CHANGE)}release(){this.setState(G.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==G.EMPTY){if(this.state!==G.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()}}load(){W()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(!i)i=e,this.transitionStarts_[t]=i;else if(i===-1)return 1;let r=e-i+1e3/60;return r>=this.transition_?1:Wl(r/this.transition_)}inTransition(t){return this.transition_?this.transitionStarts_[t]!==-1:!1}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}disposeInternal(){this.release(),super.disposeInternal()}},kr=Pu});function Ka(n){return n instanceof Image||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement||n instanceof ImageBitmap?n:null}var j0,Y0,Mu,Ou,gp=w(()=>{Ba();ei();j0=new Error("disposed"),Y0=[256,256],Mu=class extends kr{constructor(t){let e=G.IDLE;super(t.tileCoord,e,{transition:t.transition,interpolate:t.interpolate}),this.loader_=t.loader,this.data_=null,this.error_=null,this.size_=t.size||null,this.controller_=t.controller||null}getSize(){if(this.size_)return this.size_;let t=Ka(this.data_);return t?[t.width,t.height]:Y0}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==G.IDLE&&this.state!==G.ERROR)return;this.state=G.LOADING,this.changed();let t=this;this.loader_().then(function(e){t.data_=e,t.state=G.LOADED,t.changed()}).catch(function(e){t.error_=e,t.state=G.ERROR,t.changed()})}disposeInternal(){this.controller_&&(this.controller_.abort(j0),this.controller_=null),super.disposeInternal()}},Ou=Mu});function B0(){let n=nt(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}var bu,Nr,Va=w(()=>{yc();Ba();ei();Ct();ke();bu=class extends kr{constructor(t,e,i,r,s,o){super(t,e,o),this.crossOrigin_=r?.crossOrigin,this.referrerPolicy_=r?.referrerPolicy,this.src_=i,this.key=i,this.image_,vt?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(t){this.image_=t,this.state=G.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=G.ERROR,this.unlistenImage_(),this.image_=B0(),this.changed()}handleImageLoad_(){if(vt)this.state=G.LOADED;else{let t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=G.LOADED:this.state=G.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==G.ERROR&&(this.state=G.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==G.IDLE&&(this.state=G.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=cm(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}};Nr=bu});function mp(n,t,e,i,r){n.beginPath(),n.moveTo(0,0),n.lineTo(t,e),n.lineTo(i,r),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(t,i)+1,Math.max(e,r)),n.restore()}function Du(n,t){return Math.abs(n[t*4]-210)>2||Math.abs(n[t*4+3]-.75*255)>2}function K0(){if(Fu===void 0){let n=nt(6,6,Yn);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",mp(n,4,5,4,0),mp(n,4,5,0,5);let t=n.getImageData(0,0,3,3).data;Fu=Du(t,0)||Du(t,4)||Du(t,8),Dn(n),Yn.push(n.canvas)}return Fu}function pp(n,t,e,i){let r=fr(e,t,n),s=eh(t,i,e),o=t.getMetersPerUnit();o!==void 0&&(s*=o);let a=n.getMetersPerUnit();a!==void 0&&(s/=a);let l=n.getExtent();if(!l||ze(l,r)){let h=eh(n,s,r)/s;isFinite(h)&&h>0&&(s/=h)}return s}function _p(n,t,e,i){let r=Vt(e),s=pp(n,t,r,i);return(!isFinite(s)||s<=0)&&Lo(e,function(o){return s=pp(n,t,o,i),isFinite(s)&&s>0}),s}function yp(n,t,e,i,r,s,o,a,l,h,c,u,f,d){let g=nt(Math.round(e*n),Math.round(e*t),Yn);if(u||(g.imageSmoothingEnabled=!1),l.length===0)return g.canvas;g.scale(e,e);function p(E){return Math.round(E*e)/e}g.globalCompositeOperation="lighter";let m=gt();l.forEach(function(E,I,A){ir(m,E.extent)});let y,x=e/i,C=(u?1:1+Math.pow(2,-24))/x;if(!f||l.length!==1||h!==0){if(y=nt(Math.round($(m)*x),Math.round(ut(m)*x),Yn),u||(y.imageSmoothingEnabled=!1),r&&d){let E=(r[0]-m[0])*x,I=-(r[3]-m[3])*x,A=$(r)*x,T=ut(r)*x;y.rect(E,I,A,T),y.clip()}l.forEach(function(E,I,A){if(E.image.width>0&&E.image.height>0){if(E.clipExtent){y.save();let P=(E.clipExtent[0]-m[0])*x,O=-(E.clipExtent[3]-m[3])*x,N=$(E.clipExtent)*x,Q=ut(E.clipExtent)*x;y.rect(u?P:Math.round(P),u?O:Math.round(O),u?N:Math.round(P+N)-Math.round(P),u?Q:Math.round(O+Q)-Math.round(O)),y.clip()}let T=(E.extent[0]-m[0])*x,S=-(E.extent[3]-m[3])*x,v=$(E.extent)*x,F=ut(E.extent)*x;y.drawImage(E.image,h,h,E.image.width-2*h,E.image.height-2*h,u?T:Math.round(T),u?S:Math.round(S),u?v:Math.round(T+v)-Math.round(T),u?F:Math.round(S+F)-Math.round(S)),E.clipExtent&&y.restore()}})}let _=oe(o);return a.getTriangles().forEach(function(E,I,A){let T=E.source,S=E.target,v=T[0][0],F=T[0][1],P=T[1][0],O=T[1][1],N=T[2][0],Q=T[2][1],D=p((S[0][0]-_[0])/s),M=p(-(S[0][1]-_[1])/s),b=p((S[1][0]-_[0])/s),X=p(-(S[1][1]-_[1])/s),z=p((S[2][0]-_[0])/s),Z=p(-(S[2][1]-_[1])/s),et=v,at=F;v=0,F=0,P-=et,O-=at,N-=et,Q-=at;let L=[[P,O,0,0,b-D],[N,Q,0,0,z-D],[0,0,P,O,X-M],[0,0,N,Q,Z-M]],Pt=td(L);if(!Pt)return;if(g.save(),g.beginPath(),K0()||!u){g.moveTo(b,X);let Dt=4,fe=D-b,wn=M-X;for(let de=0;de<Dt;de++)g.lineTo(b+p((de+1)*fe/Dt),X+p(de*wn/(Dt-1))),de!=Dt-1&&g.lineTo(b+p((de+1)*fe/Dt),X+p((de+1)*wn/(Dt-1)));g.lineTo(z,Z)}else g.moveTo(b,X),g.lineTo(D,M),g.lineTo(z,Z);g.clip(),g.transform(Pt[0],Pt[2],Pt[1],Pt[3],D,M),g.translate(m[0]-et,m[3]-at);let It;if(y)It=y.canvas,g.scale(C,-C);else{let Dt=l[0],fe=Dt.extent;It=Dt.image,g.scale($(fe)/It.width,-ut(fe)/It.height)}g.drawImage(It,0,0),g.restore()}),y&&(Dn(y),Yn.push(y.canvas)),c&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,a.getTriangles().forEach(function(E,I,A){let T=E.target,S=(T[0][0]-_[0])/s,v=-(T[0][1]-_[1])/s,F=(T[1][0]-_[0])/s,P=-(T[1][1]-_[1])/s,O=(T[2][0]-_[0])/s,N=-(T[2][1]-_[1])/s;g.beginPath(),g.moveTo(F,P),g.lineTo(S,v),g.lineTo(O,N),g.closePath(),g.stroke()}),g.restore()),g.canvas}var Fu,Yn,xp=w(()=>{Ct();H();dt();Xt();Yn=[]});var V0,Ep,ku,Cp,wp=w(()=>{H();dt();Xt();Pe();V0=10,Ep=.25,ku=class{constructor(t,e,i,r,s,o,a){this.sourceProj_=t,this.targetProj_=e;let l={},h=a?kd(C=>_t(a,fr(C,this.targetProj_,this.sourceProj_))):Li(this.targetProj_,this.sourceProj_);this.transformInv_=function(C){let _=C[0]+"/"+C[1];return l[_]||(l[_]=h(C)),l[_]},this.maxSourceExtent_=r,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&$(r)>=$(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?$(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?$(this.targetProj_.getExtent()):null;let c=oe(i),u=sr(i),f=rr(i),d=nr(i),g=this.transformInv_(c),p=this.transformInv_(u),m=this.transformInv_(f),y=this.transformInv_(d),x=V0+(o?Math.max(0,Math.ceil(Math.log2(os(i)/(o*o*256*256)))):0);if(this.addQuad_(c,u,f,d,g,p,m,y,x),this.wrapsXInSource_){let C=1/0;this.triangles_.forEach(function(_,E,I){C=Math.min(C,_.source[0][0],_.source[1][0],_.source[2][0])}),this.triangles_.forEach(_=>{if(Math.max(_.source[0][0],_.source[1][0],_.source[2][0])-C>this.sourceWorldWidth_/2){let E=[[_.source[0][0],_.source[0][1]],[_.source[1][0],_.source[1][1]],[_.source[2][0],_.source[2][1]]];E[0][0]-C>this.sourceWorldWidth_/2&&(E[0][0]-=this.sourceWorldWidth_),E[1][0]-C>this.sourceWorldWidth_/2&&(E[1][0]-=this.sourceWorldWidth_),E[2][0]-C>this.sourceWorldWidth_/2&&(E[2][0]-=this.sourceWorldWidth_);let I=Math.min(E[0][0],E[1][0],E[2][0]);Math.max(E[0][0],E[1][0],E[2][0])-I<this.sourceWorldWidth_/2&&(_.source=E)}})}l={}}addTriangle_(t,e,i,r,s,o){this.triangles_.push({source:[r,s,o],target:[t,e,i]})}addQuad_(t,e,i,r,s,o,a,l,h){let c=Nl([s,o,a,l]),u=this.sourceWorldWidth_?$(c)/this.sourceWorldWidth_:null,f=this.sourceWorldWidth_,d=this.sourceProj_.canWrapX()&&u>.5&&u<1,g=!1;if(h>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){let m=Nl([t,e,i,r]);g=$(m)/this.targetWorldWidth_>Ep||g}!d&&this.sourceProj_.isGlobal()&&u&&(g=u>Ep||g)}if(!g&&this.maxSourceExtent_&&isFinite(c[0])&&isFinite(c[1])&&isFinite(c[2])&&isFinite(c[3])&&!pt(c,this.maxSourceExtent_))return;let p=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(h>0)g=!0;else if(p=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),p!=1&&p!=2&&p!=4&&p!=8)return}if(h>0){if(!g){let m=[(t[0]+i[0])/2,(t[1]+i[1])/2],y=this.transformInv_(m),x;d?x=(ii(s[0],f)+ii(a[0],f))/2-ii(y[0],f):x=(s[0]+a[0])/2-y[0];let C=(s[1]+a[1])/2-y[1];g=x*x+C*C>this.errorThresholdSquared_}if(g){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){let m=[(e[0]+i[0])/2,(e[1]+i[1])/2],y=this.transformInv_(m),x=[(r[0]+t[0])/2,(r[1]+t[1])/2],C=this.transformInv_(x);this.addQuad_(t,e,m,x,s,o,y,C,h-1),this.addQuad_(x,m,i,r,C,y,a,l,h-1)}else{let m=[(t[0]+e[0])/2,(t[1]+e[1])/2],y=this.transformInv_(m),x=[(i[0]+r[0])/2,(i[1]+r[1])/2],C=this.transformInv_(x);this.addQuad_(t,m,x,r,s,y,C,l,h-1),this.addQuad_(m,e,i,x,y,o,a,C,h-1)}return}}if(d){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(p&11)==0&&this.addTriangle_(t,i,r,s,a,l),(p&14)==0&&this.addTriangle_(t,i,e,s,a,o),p&&((p&13)==0&&this.addTriangle_(e,r,t,o,l,s),(p&7)==0&&this.addTriangle_(e,r,i,o,l,a))}calculateSourceExtent(){let t=gt();return this.triangles_.forEach(function(e,i,r){let s=e.source;vn(t,s[0]),vn(t,s[1]),vn(t,s[2])}),t}getTriangles(){return this.triangles_}},Cp=ku});var Nu,Za,Gu=w(()=>{Ba();ei();Ct();Bt();lt();H();dt();xp();wp();Nu=class extends kr{constructor(t,e,i,r,s,o,a,l,h,c,u,f){super(s,G.IDLE,f),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=r,this.wrappedTileCoord_=o||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=t.canWrapX()?t.getExtent():void 0;let d=r.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent(),p=this.sourceTileGrid_.getExtent(),m=g?ni(d,g):d;if(os(m)===0){this.state=G.EMPTY;return}let y=t.getExtent();y&&(p?p=ni(p,y):p=y);let x=r.getResolution(this.wrappedTileCoord_[0]),C=_p(t,i,m,x);if(!isFinite(C)||C<=0){this.state=G.EMPTY;return}let _=c!==void 0?c:.5;if(this.triangulation_=new Cp(t,i,m,p,C*_,x),this.triangulation_.getTriangles().length===0){this.state=G.EMPTY;return}this.sourceZ_=e.getZForResolution(C);let E=this.triangulation_.calculateSourceExtent();if(p&&(t.canWrapX()?(E[1]=it(E[1],p[1],p[3]),E[3]=it(E[3],p[1],p[3])):E=ni(E,p)),!os(E))this.state=G.EMPTY;else{let I=0,A=0;t.canWrapX()&&(I=$(y),A=Math.floor((E[0]-y[0])/I)),Ao(E.slice(),t,!0).forEach(S=>{let v=e.getTileRangeForExtentAndZ(S,this.sourceZ_);for(let F=v.minX;F<=v.maxX;F++)for(let P=v.minY;P<=v.maxY;P++){let O=A*I;this.sourceTiles_.push({getTile:()=>h(this.sourceZ_,F,P,a),offset:O})}++A}),this.sourceTiles_.length===0&&(this.state=G.EMPTY)}}getImage(){return this.canvas_}reproject_(){let t=[];if(this.sourceTiles_.forEach(e=>{let i=e.tile;if(i&&i.getState()==G.LOADED){let r=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);r[0]+=e.offset,r[2]+=e.offset;let s=this.clipExtent_?.slice();s&&(s[0]+=e.offset,s[2]+=e.offset),t.push({extent:r,clipExtent:s,image:i.getImage()})}}),this.sourceTiles_.length=0,t.length===0)this.state=G.ERROR;else{let e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),r=typeof i=="number"?i:i[0],s=typeof i=="number"?i:i[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=yp(r,s,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=G.LOADED}this.changed()}load(){for(let t of this.sourceTiles_)t.tile=t.getTile();if(this.state==G.IDLE){this.state=G.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:e})=>{let i=e.getState();if(i==G.IDLE||i==G.LOADING){t++;let r=j(e,k.CHANGE,s=>{let o=e.getState();(o==G.LOADED||o==G.ERROR||o==G.EMPTY)&&(q(r),t--,t===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(r)}}),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:e},i,r){e.getState()==G.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(q),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Dn(this.canvas_.getContext("2d")),Yn.push(this.canvas_),this.canvas_=null),this.sourceTiles_.length=0,super.release()}},Za=Nu});function Bn(n,t,e,i,r){return r!==void 0?(r.minX=n,r.maxX=t,r.minY=e,r.maxY=i,r):new Ha(n,t,e,i)}var Ha,qa,zu=w(()=>{Ha=class{constructor(t,e,i,r){this.minX=t,this.maxX=e,this.minY=i,this.maxY=r}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}};qa=Ha});var Xu,Wu,Sp=w(()=>{Jr();Gt();Xu=class{constructor(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let t=this.pop();t instanceof Bi&&t.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){let i=this.entries_[t];return K(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){let e=this.entries_[t];return K(e!==void 0,"Tried to get a value for a key that does not exist in the cache"),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){let t=new Array(this.count_),e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.key_;return t}getValues(){let t=new Array(this.count_),e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.value_;return t}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){return this.entries_[t]?.value_}pop(){let t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){K(!(t in this.entries_),"Tried to set a value for a key that is used already");let i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}},Wu=Xu});function Gr(n,t,e,i){return i!==void 0?(i[0]=n,i[1]=t,i[2]=e,i):[n,t,e]}function Z0(n,t,e){return n+"/"+t+"/"+e}function zr(n,t,e,i,r){return`${Y(n)},${t},${Z0(e,i,r)}`}function Rp(n){return H0(n[0],n[1],n[2])}function H0(n,t,e){return(t<<n)+e}function Tp(n,t){let e=n[0],i=n[1],r=n[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;let s=t.getFullTileRange(e);return s?s.containsXY(i,r):!0}var Xr=w(()=>{ht()});function Uu(n,t,e){if(!(e in n))return n[e]=new Set([t]),!0;let i=n[e],r=i.has(t);return r||i.add(t),!r}function q0(n,t,e){let i=n[e];return i?i.delete(t):!1}function Ip(n,t){let e=n.layerStatesArray[n.layerIndex];e.extent&&(t=ni(t,_e(e.extent,n.viewState.projection)));let i=e.layer.getRenderSource();if(!i.getWrapX()){let r=i.getTileGridForProjection(n.viewState.projection).getExtent();r&&(t=ni(t,r))}return t}var ju,vp,Lp=w(()=>{gp();Va();zu();ei();ft();H();Xt();Gu();Ye();Sp();Xr();Pe();ht();vu();ju=class extends ja{constructor(t,e){super(t),e=e||{},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceKey_,this.renderedSourceRevision_,this.tempExtent=gt(),this.tempTileRange_=new qa(0,0,0,0),this.tempTileCoord_=Gr(0,0,0);let i=e.cacheSize!==void 0?e.cacheSize:512;this.tileCache_=new Wu(i),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=i*.5}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||(this.sourceTileCache_=new Wu(512)),this.sourceTileCache_}getOrCreateTile(t,e,i,r){let s=this.tileCache_,a=this.getLayer().getSource(),l=zr(a,a.getKey(),t,e,i),h;if(s.containsKey(l))h=s.get(l);else{let c=r.viewState.projection,u=a.getProjection();if(h=a.getTile(t,e,i,r.pixelRatio,c,!u||$i(u,c)?void 0:this.getSourceTileCache()),!h)return null;s.set(l,h)}return h}getTile(t,e,i,r){let s=this.getOrCreateTile(t,e,i,r);return s||null}getData(t){let e=this.frameState;if(!e)return null;let i=this.getLayer(),r=_t(e.pixelToCoordinateTransform,t.slice()),s=i.getExtent();if(s&&!ze(s,r))return null;let o=e.viewState,a=i.getRenderSource(),l=a.getTileGridForProjection(o.projection),h=a.getTilePixelRatio(e.pixelRatio);for(let c=l.getZForResolution(o.resolution);c>=l.getMinZoom();--c){let u=l.getTileCoordForCoordAndZ(r,c),f=this.getTile(c,u[1],u[2],e);if(!f||f.getState()!==G.LOADED)continue;let d=l.getOrigin(c),g=mt(l.getTileSize(c)),p=l.getResolution(c),m;if(f instanceof Nr||f instanceof Za)m=f.getImage();else if(f instanceof Ou){if(m=Ka(f.getData()),!m)continue}else continue;let y=Math.floor(h*((r[0]-d[0])/p-u[1]*g[0])),x=Math.floor(h*((d[1]-r[1])/p-u[2]*g[1])),C=Math.round(h*a.getGutterForProjection(o.projection));return this.getImageData(m,y+C,x+C)}return null}prepareFrame(t){this.renderedProjection?t.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=t.viewState.projection):this.renderedProjection=t.viewState.projection;let e=this.getLayer().getSource();if(!e)return!1;let i=e.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==i&&(this.renderedSourceRevision_=i,this.renderedSourceKey_===e.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=i,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(t,e,i,r,s){let o=t.viewState,a=this.getLayer(),l=a.getRenderSource(),h=l.getTileGridForProjection(o.projection),c=Y(l);c in t.wantedTiles||(t.wantedTiles[c]={});let u=t.wantedTiles[c],f=a.getMapInternal(),d=Math.max(i-s,h.getMinZoom(),h.getZForResolution(Math.min(a.getMaxResolution(),f?f.getView().getResolutionForZoom(Math.max(a.getMinZoom(),0)):h.getResolution(0)),l.zDirection)),g=o.rotation,p=g?zl(o.center,o.resolution,g,t.size):void 0;for(let m=i;m>=d;--m){let y=h.getTileRangeForExtentAndZ(e,m,this.tempTileRange_),x=h.getResolution(m);for(let C=y.minX;C<=y.maxX;++C)for(let _=y.minY;_<=y.maxY;++_){if(g&&!h.tileCoordIntersectsViewport([m,C,_],p))continue;let E=this.getTile(m,C,_,t);if(!E||!Uu(r,E,m))continue;let A=E.getKey();if(u[A]=!0,E.getState()===G.IDLE&&!t.tileQueue.isKeyQueued(A)){let T=Gr(m,C,_,this.tempTileCoord_);t.tileQueue.enqueue([E,c,h.getTileCoordCenter(T),x])}}}}findStaleTile_(t,e){let i=this.tileCache_,r=t[0],s=t[1],o=t[2],a=this.getStaleKeys();for(let l=0;l<a.length;++l){let h=zr(this.getLayer().getSource(),a[l],r,s,o);if(i.containsKey(h)){let c=i.peek(h);if(c.getState()===G.LOADED)return c.endTransition(Y(this)),Uu(e,c,r),!0}}return!1}findAltTiles_(t,e,i,r){let s=t.getTileRangeForTileCoordAndZ(e,i,this.tempTileRange_);if(!s)return!1;let o=!0,a=this.tileCache_,l=this.getLayer().getRenderSource(),h=l.getKey();for(let c=s.minX;c<=s.maxX;++c)for(let u=s.minY;u<=s.maxY;++u){let f=zr(l,h,i,c,u),d=!1;if(a.containsKey(f)){let g=a.peek(f);g.getState()===G.LOADED&&(Uu(r,g,i),d=!0)}d||(o=!1)}return o}renderFrame(t,e){this.renderComplete=!0;let i=t.layerStatesArray[t.layerIndex],r=t.viewState,s=r.projection,o=r.resolution,a=r.center,l=t.pixelRatio,h=this.getLayer(),c=h.getSource(),u=c.getTileGridForProjection(s),f=u.getZForResolution(o,c.zDirection),d=u.getResolution(f),g=c.getKey();this.renderedSourceKey_?this.renderedSourceKey_!==g&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=g):this.renderedSourceKey_=g;let p=t.extent,m=c.getTilePixelRatio(l);this.prepareContainer(t,e);let y=this.context.canvas.width,x=this.context.canvas.height;this.layerExtent=i.extent?_e(i.extent,s):null,this.layerExtent&&(p=ni(p,this.layerExtent));let C=d*y/2/m,_=d*x/2/m,E=[a[0]-C,a[1]-_,a[0]+C,a[1]+_],I={};this.renderedTiles.length=0;let A=h.getPreload();if(t.nextExtent&&this.enqueueTilesForNextExtent()){let M=u.getZForResolution(r.nextResolution,c.zDirection),b=Ip(t,t.nextExtent);this.enqueueTiles(t,b,M,I,A)}let T=Ip(t,p);if(this.enqueueTiles(t,T,f,I,0),A>0&&setTimeout(()=>{this.enqueueTiles(t,T,f-1,I,A-1)},0),!(f in I))return this.container;let S=Y(this),v=t.time;for(let M of I[f]){let b=M.getState();if(b===G.EMPTY)continue;let X=M.tileCoord;if(b===G.LOADED&&M.getAlpha(S,v)===1){M.endTransition(S);continue}if(b!==G.ERROR&&(this.renderComplete=!1),this.findStaleTile_(X,I)){q0(I,M,f),t.animate=!0;continue}if(this.findAltTiles_(u,X,f+1,I))continue;let et=u.getMinZoom();for(let at=f-1;at>=et&&!this.findAltTiles_(u,X,at,I);--at);}let F=d/o*l/m,P=this.getRenderContext(t);Wt(this.tempTransform,y/2,x/2,F,F,0,-y/2,-x/2),this.layerExtent&&this.clipUnrotated(P,t,this.layerExtent),c.getInterpolate()||(P.imageSmoothingEnabled=!1),this.preRender(P,t);let O=Object.keys(I).map(Number);O.sort(re);let N,Q=[],D=[];for(let M=O.length-1;M>=0;--M){let b=O[M],X=c.getTilePixelSize(b,l,s),Z=u.getResolution(b)/d,et=X[0]*Z*F,at=X[1]*Z*F,L=u.getTileCoordForCoordAndZ(oe(E),b),Pt=u.getTileCoordExtent(L),It=_t(this.tempTransform,[m*(Pt[0]-E[0])/d,m*(E[3]-Pt[3])/d]),Dt=m*c.getGutterForProjection(s);for(let fe of I[b]){if(fe.getState()!==G.LOADED)continue;let wn=fe.tileCoord,de=L[1]-wn[1],co=Math.round(It[0]-(de-1)*et),Yr=L[2]-wn[2],fl=Math.round(It[1]-(Yr-1)*at),He=Math.round(It[0]-de*et),Fe=Math.round(It[1]-Yr*at),qe=co-He,Yi=fl-Fe,uo=O.length===1,Br=!1;N=[He,Fe,He+qe,Fe,He+qe,Fe+Yi,He,Fe+Yi];for(let Vn=0,fo=Q.length;Vn<fo;++Vn)if(!uo&&b<D[Vn]){let Yt=Q[Vn];pt([He,Fe,He+qe,Fe+Yi],[Yt[0],Yt[3],Yt[4],Yt[7]])&&(Br||(P.save(),Br=!0),P.beginPath(),P.moveTo(N[0],N[1]),P.lineTo(N[2],N[3]),P.lineTo(N[4],N[5]),P.lineTo(N[6],N[7]),P.moveTo(Yt[6],Yt[7]),P.lineTo(Yt[4],Yt[5]),P.lineTo(Yt[2],Yt[3]),P.lineTo(Yt[0],Yt[1]),P.clip())}Q.push(N),D.push(b),this.drawTile(fe,t,He,Fe,qe,Yi,Dt,uo),Br&&P.restore(),this.renderedTiles.unshift(fe),this.updateUsedTiles(t.usedTiles,c,fe)}}if(this.renderedResolution=d,this.extentChanged=!this.renderedExtent_||!Ri(this.renderedExtent_,E),this.renderedExtent_=E,this.renderedPixelRatio=l,this.postRender(this.context,t),this.layerExtent&&P.restore(),P.imageSmoothingEnabled=!0,this.renderComplete){let M=(b,X)=>{let z=Y(c),Z=X.wantedTiles[z],et=Z?Object.keys(Z).length:0;this.updateCacheSize(et),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()};t.postRenderFunctions.push(M)}return this.container}updateCacheSize(t){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,t*2)}drawTile(t,e,i,r,s,o,a,l){let h;if(t instanceof Ou){if(h=Ka(t.getData()),!h)throw new Error("Rendering array data is not yet supported")}else h=this.getTileImage(t);if(!h)return;let c=this.getRenderContext(e),u=Y(this),f=e.layerStatesArray[e.layerIndex],d=f.opacity*(l?t.getAlpha(u,e.time):1),g=d!==c.globalAlpha;g&&(c.save(),c.globalAlpha=d),c.drawImage(h,a,a,h.width-2*a,h.height-2*a,i,r,s,o),g&&c.restore(),d!==f.opacity?e.animate=!0:l&&t.endTransition(u)}getImage(){let t=this.context;return t?t.canvas:null}getTileImage(t){return t.getImage()}updateUsedTiles(t,e,i){let r=Y(e);r in t||(t[r]={}),t[r][i.getKey()]=!0}},vp=ju});var ro,Ap=w(()=>{ro={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"}});var Yu,Pp,Mp=w(()=>{Ir();Ap();Yu=class extends Gn{constructor(t){t=t||{};let e=Object.assign({},t),i=t.cacheSize;delete t.cacheSize,delete e.preload,delete e.useInterimTilesOnError,super(e),this.on,this.once,this.un,this.cacheSize_=i,this.setPreload(t.preload!==void 0?t.preload:0),this.setUseInterimTilesOnError(t.useInterimTilesOnError!==void 0?t.useInterimTilesOnError:!0)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(ro.PRELOAD)}setPreload(t){this.set(ro.PRELOAD,t)}getUseInterimTilesOnError(){return this.get(ro.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(t){this.set(ro.USE_INTERIM_TILES_ON_ERROR,t)}getData(t){return super.getData(t)}},Pp=Yu});var Bu,En,Ku=w(()=>{Lp();Mp();Bu=class extends Pp{constructor(t){super(t)}createRenderer(){return new vp(this,{cacheSize:this.getCacheSize()})}},En=Bu});var Jt,ef,kp,Np=w(()=>{wo();Te();hn();Ct();Bt();H();Jt={ELEMENT:"element",MAP:"map",OFFSET:"offset",POSITION:"position",POSITIONING:"positioning"},ef=class extends xt{constructor(t){super(),this.on,this.once,this.un,this.options=t,this.id=t.id,this.insertFirst=t.insertFirst!==void 0?t.insertFirst:!0,this.stopEvent=t.stopEvent!==void 0?t.stopEvent:!0,this.element=document.createElement("div"),this.element.className=t.className!==void 0?t.className:"ol-overlay-container "+fg,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=t.autoPan===!0?{}:t.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(Jt.ELEMENT,this.handleElementChanged),this.addChangeListener(Jt.MAP,this.handleMapChanged),this.addChangeListener(Jt.OFFSET,this.handleOffsetChanged),this.addChangeListener(Jt.POSITION,this.handlePositionChanged),this.addChangeListener(Jt.POSITIONING,this.handlePositioningChanged),t.element!==void 0&&this.setElement(t.element),this.setOffset(t.offset!==void 0?t.offset:[0,0]),this.setPositioning(t.positioning||"top-left"),t.position!==void 0&&this.setPosition(t.position)}getElement(){return this.get(Jt.ELEMENT)}getId(){return this.id}getMap(){return this.get(Jt.MAP)||null}getOffset(){return this.get(Jt.OFFSET)}getPosition(){return this.get(Jt.POSITION)}getPositioning(){return this.get(Jt.POSITIONING)}handleElementChanged(){sa(this.element);let t=this.getElement();t&&this.element.appendChild(t)}handleMapChanged(){this.mapPostrenderListenerKey&&(this.element?.remove(),q(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);let t=this.getMap();if(t){this.mapPostrenderListenerKey=j(t,Ie.POSTRENDER,this.render,this),this.updatePixelPosition();let e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(t){this.set(Jt.ELEMENT,t)}setMap(t){this.set(Jt.MAP,t)}setOffset(t){this.set(Jt.OFFSET,t)}setPosition(t){this.set(Jt.POSITION,t)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(t){let e=this.getMap();if(!e||!e.getTargetElement()||!this.get(Jt.POSITION))return;let i=this.getRect(e.getTargetElement(),e.getSize()),r=this.getElement(),s=this.getRect(r,[dg(r),gg(r)]);t=t||{};let o=t.margin===void 0?20:t.margin;if(!wi(i,s)){let a=s[0]-i[0],l=i[2]-s[2],h=s[1]-i[1],c=i[3]-s[3],u=[0,0];if(a<0?u[0]=a-o:l<0&&(u[0]=Math.abs(l)+o),h<0?u[1]=h-o:c<0&&(u[1]=Math.abs(c)+o),u[0]!==0||u[1]!==0){let f=e.getView().getCenterInternal(),d=e.getPixelFromCoordinateInternal(f);if(!d)return;let g=[d[0]+u[0],d[1]+u[1]],p=t.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(g),duration:p.duration,easing:p.easing})}}}getRect(t,e){let i=t.getBoundingClientRect(),r=i.left+window.pageXOffset,s=i.top+window.pageYOffset;return[r,s,r+e[0],s+e[1]]}setPositioning(t){this.set(Jt.POSITIONING,t)}setVisible(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)}updatePixelPosition(){let t=this.getMap(),e=this.getPosition();if(!t||!t.isRendered()||!e){this.setVisible(!1);return}let i=t.getPixelFromCoordinate(e),r=t.getSize();this.updateRenderedPosition(i,r)}updateRenderedPosition(t,e){let i=this.element.style,r=this.getOffset(),s=this.getPositioning();this.setVisible(!0);let o=`${t[0]+r[0]}px`,a=`${t[1]+r[1]}px`,l="0%",h="0%";s=="bottom-right"||s=="center-right"||s=="top-right"?l="-100%":(s=="bottom-center"||s=="center-center"||s=="top-center")&&(l="-50%"),s=="bottom-left"||s=="bottom-center"||s=="bottom-right"?h="-100%":(s=="center-left"||s=="center-center"||s=="center-right")&&(h="-50%");let c=`translate(${l}, ${h}) translate(${o}, ${a})`;this.rendered.transform_!=c&&(this.rendered.transform_=c,i.transform=c)}getOptions(){return this.options}},kp=ef});function Gp(n,t,e,i,r){return n.replace(gx,t.toString()).replace(mx,e.toString()).replace(px,i.toString()).replace(_x,function(){if(r===void 0)throw new Error("If the URL template has a {-y} placeholder, the grid extent must be known");return(r-i).toString()})}function zp(n){let t=[],e=/\{([a-z])-([a-z])\}/.exec(n);if(e){let i=e[1].charCodeAt(0),r=e[2].charCodeAt(0),s;for(s=i;s<=r;++s)t.push(n.replace(e[0],String.fromCharCode(s)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(n),e){let i=parseInt(e[2],10);for(let r=parseInt(e[1],10);r<=i;r++)t.push(n.replace(e[0],r.toString()));return t}return t.push(n),t}var gx,mx,px,_x,nf=w(()=>{gx=/\{z\}/g,mx=/\{x\}/g,px=/\{y\}/g,_x=/\{-y\}/g});var Wr,Cn,rf,so,sf=w(()=>{zu();ft();Gt();H();gr();dt();Ye();Xr();Wr=[0,0,0],Cn=5,rf=class{constructor(t){this.minZoom=t.minZoom!==void 0?t.minZoom:0,this.resolutions_=t.resolutions,K(Xf(this.resolutions_,(r,s)=>s-r,!0),"`resolutions` must be sorted in descending order");let e;if(!t.origins){for(let r=0,s=this.resolutions_.length-1;r<s;++r)if(!e)e=this.resolutions_[r]/this.resolutions_[r+1];else if(this.resolutions_[r]/this.resolutions_[r+1]!==e){e=void 0;break}}this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,K(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));let i=t.extent;i!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=oe(i)),K(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,K(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:256,K(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=i!==void 0?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.sizes!==void 0?this.fullTileRanges_=t.sizes.map((r,s)=>{let o=new qa(Math.min(0,r[0]),Math.max(r[0]-1,-1),Math.min(0,r[1]),Math.max(r[1]-1,-1));if(i){let a=this.getTileRangeForExtentAndZ(i,s);o.minX=Math.max(a.minX,o.minX),o.maxX=Math.min(a.maxX,o.maxX),o.minY=Math.max(a.minY,o.minY),o.maxY=Math.min(a.maxY,o.maxY)}return o}):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){let r=this.getTileRangeForExtentAndZ(t,e);for(let s=r.minX,o=r.maxX;s<=o;++s)for(let a=r.minY,l=r.maxY;a<=l;++a)i([e,s,a])}forEachTileCoordParentTileRange(t,e,i,r){let s,o,a,l=null,h=t[0]-1;for(this.zoomFactor_===2?(o=t[1],a=t[2]):l=this.getTileCoordExtent(t,r);h>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),s=Bn(o,o,a,a,i)):s=this.getTileRangeForExtentAndZ(l,h,i),e(h,s))return!0;--h}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getOrigins(){return this.origins_}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){let s=t[1]*2,o=t[2]*2;return Bn(s,s+1,o,o+1,e)}let r=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;let r=t[0],s=t[1],o=t[2];if(e===r)return Bn(s,o,s,o,i);if(this.zoomFactor_){let l=Math.pow(this.zoomFactor_,e-r),h=Math.floor(s*l),c=Math.floor(o*l);if(e<r)return Bn(h,h,c,c,i);let u=Math.floor(l*(s+1))-1,f=Math.floor(l*(o+1))-1;return Bn(h,u,c,f,i)}let a=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,Wr);let r=Wr[1],s=Wr[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,Wr);let o=Wr[1],a=Wr[2];return Bn(r,o,s,a,i)}getTileCoordCenter(t){let e=this.getOrigin(t[0]),i=this.getResolution(t[0]),r=mt(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*r[0]*i,e[1]-(t[2]+.5)*r[1]*i]}getTileCoordExtent(t,e){let i=this.getOrigin(t[0]),r=this.getResolution(t[0]),s=mt(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*s[0]*r,a=i[1]-(t[2]+1)*s[1]*r,l=o+s[0]*r,h=a+s[1]*r;return me(o,a,l,h,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,r,s){let o=this.getZForResolution(i),a=i/this.getResolution(o),l=this.getOrigin(o),h=mt(this.getTileSize(o),this.tmpSize_),c=a*(t-l[0])/i/h[0],u=a*(l[1]-e)/i/h[1];return r?(c=rs(c,Cn)-1,u=rs(u,Cn)-1):(c=ns(c,Cn),u=ns(u,Cn)),Gr(o,c,u,s)}getTileCoordForXYAndZ_(t,e,i,r,s){let o=this.getOrigin(i),a=this.getResolution(i),l=mt(this.getTileSize(i),this.tmpSize_),h=(t-o[0])/a/l[0],c=(o[1]-e)/a/l[1];return r?(h=rs(h,Cn)-1,c=rs(c,Cn)-1):(h=ns(h,Cn),c=ns(c,Cn)),Gr(i,h,c,s)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){let i=qn(this.resolutions_,t,e||0);return it(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return fh(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){let e=this.resolutions_.length,i=new Array(e);for(let r=this.minZoom;r<e;++r)i[r]=this.getTileRangeForExtentAndZ(t,r);this.fullTileRanges_=i}},so=rf});function tl(n){let t=n.getDefaultTileGrid();return t||(t=xx(n),n.setDefaultTileGrid(t)),t}function Xp(n,t,e){let i=t[0],r=n.getTileCoordCenter(t),s=il(e);if(!ze(s,r)){let o=$(s),a=Math.ceil((s[0]-r[0])/o);return r[0]+=o*a,n.getTileCoordForCoordAndZ(r,i)}return t}function yx(n,t,e,i){i=i!==void 0?i:"top-left";let r=Up(n,t,e);return new so({extent:n,origin:nd(n,i),resolutions:r,tileSize:e})}function Wp(n){let t=n||{},e=t.extent||ot("EPSG:3857").getExtent(),i={extent:e,minZoom:t.minZoom,tileSize:t.tileSize,resolutions:Up(e,t.maxZoom,t.tileSize,t.maxResolution)};return new so(i)}function Up(n,t,e,i){t=t!==void 0?t:42,e=mt(e!==void 0?e:256);let r=ut(n),s=$(n);i=i>0?i:Math.max(s/e[0],r/e[1]);let o=t+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=i/Math.pow(2,l);return a}function xx(n,t,e,i){let r=il(n);return yx(r,t,e,i)}function il(n){n=ot(n);let t=n.getExtent();if(!t){let e=180*Ii.degrees/n.getMetersPerUnit();t=me(-e,-e,e,e)}return t}var nl=w(()=>{H();Xt();Ye();sf()});function Ex(n,t){return(function(e,i,r){if(!e)return;let s,o=e[0];if(t){let a=t.getFullTileRange(o);a&&(s=a.getHeight()-1)}return Gp(n,o,e[1],e[2],s)})}function jp(n,t){let e=n.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Ex(n[r],t);return Cx(i)}function Cx(n){return n.length===1?n[0]:(function(t,e,i){if(!t)return;let r=Rp(t),s=ii(r,n.length);return n[s](t,e,i)})}var Yp=w(()=>{dt();Xr();nf()});var of,rl,Bp,Kp=w(()=>{Qe();Ye();Xr();nl();ht();au();of=class extends Wa{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,this.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;let e=[256,256];this.tileGrid&&mt(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),e),this.tmpSize=[0,0],this.key_=t.key||Y(this),this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getResolutions(t){let e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,r,s,o){return W()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:tl(t)}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){let r=this.getTileGridForProjection(i),s=this.getTilePixelRatio(e),o=mt(r.getTileSize(t),this.tmpSize);return s==1?o:sm(o,s,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){let i=e!==void 0?e:this.getProjection(),r=e!==void 0?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=Xp(r,t,i)),Tp(t,r)?t:null}clear(){}refresh(){this.clear(),super.refresh()}},rl=class extends Ot{constructor(t,e){super(t),this.tile=e}},Bp=of});var sl,Vp=w(()=>{sl={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"}});var af,Zp,Hp=w(()=>{ei();Yp();nf();ht();Kp();Vp();af=class n extends Bp{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===n.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){let e=t.target,i=Y(e),r=e.getState(),s;r==G.LOADING?(this.tileLoadingKeys_[i]=!0,s=sl.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],s=r==G.ERROR?sl.TILELOADERROR:r==G.LOADED?sl.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new rl(s,e))}setTileLoadFunction(t){this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,typeof e<"u"?this.setKey(e):this.changed()}setUrl(t){let e=zp(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;let e=t.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(jp(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}},Zp=af});function wx(n,t){if(vt){let e=n.getCrossOrigin(),i="same-origin",r="same-origin";e==="anonymous"||e===""?(i="cors",r="omit"):e==="use-credentials"&&(i="cors",r="include");let s={mode:i,credentials:r,referrerPolicy:n.getReferrerPolicy()};fetch(t,s).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.blob()}).then(o=>createImageBitmap(o)).then(o=>{let a=n.getImage();a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),o.close?.(),a.dispatchEvent(new Event("load"))}).catch(()=>{n.getImage().dispatchEvent(new Event("error"))});return}n.getImage().src=t}var lf,ol,hf=w(()=>{Va();ei();lt();ke();Xt();Gu();Xr();nl();ht();Hp();lf=class extends Zp{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:wx,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate!==void 0?t.interpolate:!0,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=t.crossOrigin!==void 0?t.crossOrigin:null,this.referrerPolicy=t.referrerPolicy,this.tileClass=t.tileClass!==void 0?t.tileClass:Nr,this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(t){return this.getProjection()&&t&&!$i(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getTileGridForProjection(t){let e=this.getProjection();if(this.tileGrid&&(!e||$i(e,t)))return this.tileGrid;let i=Y(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=tl(t)),this.tileGridForProjection[i]}createTile_(t,e,i,r,s,o){let a=[t,e,i],l=this.getTileCoordForTileUrlFunction(a,s),h=l?this.tileUrlFunction(l,r,s):void 0,c=new this.tileClass(a,h!==void 0?G.IDLE:G.EMPTY,h!==void 0?h:"",{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return c.key=o,c.addEventListener(k.CHANGE,this.handleTileChange.bind(this)),c}getTile(t,e,i,r,s,o){let a=this.getProjection();if(!a||!s||$i(a,s))return this.getTileInternal(t,e,i,r,a||s);let l=[t,e,i],h=this.getKey(),c=this.getTileGridForProjection(a),u=this.getTileGridForProjection(s),f=this.getTileCoordForTileUrlFunction(l,s),d=new Za(a,c,s,u,l,f,this.getTilePixelRatio(r),this.getGutter(),(g,p,m,y)=>this.getTileInternal(g,p,m,y,a,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return d.key=h,d}getTileInternal(t,e,i,r,s,o){let a=this.getKey(),l=zr(this,a,t,e,i);if(o&&o.containsKey(l))return o.get(l);let h=this.createTile_(t,e,i,r,s,a);return o?.set(l,h),h}setRenderReprojectionEdges(t){this.renderReprojectionEdges_!=t&&(this.renderReprojectionEdges_=t,this.changed())}setTileGridForProjection(t,e){let i=ot(t);if(i){let r=Y(i);r in this.tileGridForProjection||(this.tileGridForProjection[r]=e)}}};ol=lf});function Tx(n){let t=n.getComplianceLevelSupportedFeatures();return t===void 0&&(t=Kn[wt.VERSION1].level0),{url:n.imageInfo["@id"]===void 0?void 0:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:t.supports,formats:[...t.formats,n.imageInfo.formats===void 0?[]:n.imageInfo.formats],qualities:[...t.qualities,n.imageInfo.qualities===void 0?[]:n.imageInfo.qualities],resolutions:n.imageInfo.scale_factors,tileSize:n.imageInfo.tile_width!==void 0?n.imageInfo.tile_height!==void 0?[n.imageInfo.tile_width,n.imageInfo.tile_height]:[n.imageInfo.tile_width,n.imageInfo.tile_width]:n.imageInfo.tile_height!=null?[n.imageInfo.tile_height,n.imageInfo.tile_height]:void 0}}function Ix(n){let t=n.getComplianceLevelSupportedFeatures(),e=Array.isArray(n.imageInfo.profile)&&n.imageInfo.profile.length>1,i=e&&n.imageInfo.profile[1].supports?n.imageInfo.profile[1].supports:[],r=e&&n.imageInfo.profile[1].formats?n.imageInfo.profile[1].formats:[],s=e&&n.imageInfo.profile[1].qualities?n.imageInfo.profile[1].qualities:[];return{url:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(o){return[o.width,o.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(o){return o.width})[0],n.imageInfo.tiles.map(function(o){return o.height===void 0?o.width:o.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(o){return o.scaleFactors})[0],supports:[...t.supports,...i],formats:[...t.formats,...r],qualities:[...t.qualities,...s]}}function vx(n){let t=n.getComplianceLevelSupportedFeatures(),e=n.imageInfo.extraFormats===void 0?t.formats:[...t.formats,...n.imageInfo.extraFormats],i=n.imageInfo.preferredFormats!==void 0&&Array.isArray(n.imageInfo.preferredFormats)&&n.imageInfo.preferredFormats.length>0?n.imageInfo.preferredFormats.filter(function(r){return["jpg","png","gif"].includes(r)}).reduce(function(r,s){return r===void 0&&e.includes(s)?s:r},void 0):void 0;return{url:n.imageInfo.id,sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(r){return[r.width,r.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(r){return r.width})[0],n.imageInfo.tiles.map(function(r){return r.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(r){return r.scaleFactors})[0],supports:n.imageInfo.extraFeatures===void 0?t.supports:[...t.supports,...n.imageInfo.extraFeatures],formats:e,qualities:n.imageInfo.extraQualities===void 0?t.qualities:[...t.qualities,...n.imageInfo.extraQualities],preferredFormat:i}}var wt,Kn,Sx,qp,Rx,al,df,gf,mf=w(()=>{Gt();wt={VERSION1:"version1",VERSION2:"version2",VERSION3:"version3"},Kn={};Kn[wt.VERSION1]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}};Kn[wt.VERSION2]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}};Kn[wt.VERSION3]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}};Kn.none={none:{supports:[],formats:[],qualities:[]}};Sx=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,qp=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,Rx=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;al={};al[wt.VERSION1]=Tx;al[wt.VERSION2]=Ix;al[wt.VERSION3]=vx;df=class{constructor(t){this.setImageInfo(t)}setImageInfo(t){typeof t=="string"?this.imageInfo=JSON.parse(t):this.imageInfo=t}getImageApiVersion(){if(this.imageInfo===void 0)return;let t=this.imageInfo["@context"]||"ol-no-context";typeof t=="string"&&(t=[t]);for(let e=0;e<t.length;e++)switch(t[e]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return wt.VERSION1;case"http://iiif.io/api/image/2/context.json":return wt.VERSION2;case"http://iiif.io/api/image/3/context.json":return wt.VERSION3;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(wt.VERSION1)&&this.imageInfo.identifier)return wt.VERSION1;break;default:}K(!1,"Cannot determine IIIF Image API version from provided image information JSON")}getComplianceLevelEntryFromProfile(t){if(!(this.imageInfo===void 0||this.imageInfo.profile===void 0))switch(t===void 0&&(t=this.getImageApiVersion()),t){case wt.VERSION1:if(Sx.test(this.imageInfo.profile))return this.imageInfo.profile;break;case wt.VERSION3:if(Rx.test(this.imageInfo.profile))return this.imageInfo.profile;break;case wt.VERSION2:if(typeof this.imageInfo.profile=="string"&&qp.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&typeof this.imageInfo.profile[0]=="string"&&qp.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0];break;default:}}getComplianceLevelFromProfile(t){let e=this.getComplianceLevelEntryFromProfile(t);if(e===void 0)return;let i=e.match(/level[0-2](?:\.json)?$/g);return Array.isArray(i)?i[0].replace(".json",""):void 0}getComplianceLevelSupportedFeatures(){if(this.imageInfo===void 0)return;let t=this.getImageApiVersion(),e=this.getComplianceLevelFromProfile(t);return e===void 0?Kn.none.none:Kn[t][e]}getTileSourceOptions(t){let e=t||{},i=this.getImageApiVersion();if(i===void 0)return;let r=i===void 0?void 0:al[i](this);if(r!==void 0)return{url:r.url,version:i,size:[this.imageInfo.width,this.imageInfo.height],sizes:r.sizes,format:e.format!==void 0&&r.formats.includes(e.format)?e.format:r.preferredFormat!==void 0?r.preferredFormat:"jpg",supports:r.supports,quality:e.quality&&r.qualities.includes(e.quality)?e.quality:r.qualities.includes("native")?"native":"default",resolutions:Array.isArray(r.resolutions)?r.resolutions.sort(function(s,o){return o-s}):void 0,tileSize:r.tileSize}}},gf=df});var ll,$p=w(()=>{Va();ei();Ct();ll=class extends Nr{constructor(t,e,i,r,s,o,a){super(e,i,r,s,o,a),this.zoomifyImage_=null,this.tileSize_=t}getImage(){if(this.zoomifyImage_)return this.zoomifyImage_;let t=super.getImage();if(this.state==G.LOADED){let e=this.tileSize_;if(t.width==e[0]&&t.height==e[1])return this.zoomifyImage_=t,t;let i=nt(e[0],e[1]);return i.drawImage(t,0,0),this.zoomifyImage_=i.canvas,i.canvas}return t}}});function oo(n){return n.toLocaleString("en",{maximumFractionDigits:10})}var pf,_f,Jp=w(()=>{Gt();H();mf();Ye();sf();hf();$p();pf=class extends ol{constructor(t){let e=t||{},i=e.url||"";i=i+(i.lastIndexOf("/")===i.length-1||i===""?"":"/");let r=e.version||wt.VERSION2,s=e.sizes||[],o=e.size;K(o!=null&&Array.isArray(o)&&o.length==2&&!isNaN(o[0])&&o[0]>0&&!isNaN(o[1])&&o[1]>0,"Missing or invalid `size`");let a=o[0],l=o[1],h=e.tileSize,c=e.tilePixelRatio||1,u=e.format||"jpg",f=e.quality||(e.version==wt.VERSION1?"native":"default"),d=e.resolutions||[],g=e.supports||[],p=e.extent||[0,-l,a,0],m=s!=null&&Array.isArray(s)&&s.length>0,y=h!==void 0&&(typeof h=="number"&&Number.isInteger(h)&&h>0||Array.isArray(h)&&h.length>0),x=g!=null&&Array.isArray(g)&&(g.includes("regionByPx")||g.includes("regionByPct"))&&(g.includes("sizeByWh")||g.includes("sizeByH")||g.includes("sizeByW")||g.includes("sizeByPct")),C,_,E;if(d.sort(function(S,v){return v-S}),y||x)if(h!=null&&(typeof h=="number"&&Number.isInteger(h)&&h>0?(C=h,_=h):Array.isArray(h)&&h.length>0&&((h.length==1||h[1]==null&&Number.isInteger(h[0]))&&(C=h[0],_=h[0]),h.length==2&&(Number.isInteger(h[0])&&Number.isInteger(h[1])?(C=h[0],_=h[1]):h[0]==null&&Number.isInteger(h[1])&&(C=h[1],_=h[1])))),(C===void 0||_===void 0)&&(C=256,_=256),d.length==0){E=Math.max(Math.ceil(Math.log(a/C)/Math.LN2),Math.ceil(Math.log(l/_)/Math.LN2));for(let S=E;S>=0;S--)d.push(Math.pow(2,S))}else{let S=Math.max(...d);E=Math.round(Math.log(S)/Math.LN2)}else if(C=a,_=l,d=[],m){s.sort(function(v,F){return v[0]-F[0]}),E=-1;let S=[];for(let v=0;v<s.length;v++){let F=a/s[v][0];if(d.length>0&&d[d.length-1]==F){S.push(v);continue}d.push(F),E++}if(S.length>0)for(let v=0;v<S.length;v++)s.splice(S[v]-v,1)}else d.push(1),s.push([a,l]),E=0;let I=new so({tileSize:[C,_],extent:p,origin:oe(p),resolutions:d}),A=function(S,v,F){let P,O,N=S[0];if(N>E)return;let Q=S[1],D=S[2],M=d[N];if(!(Q===void 0||D===void 0||M===void 0||Q<0||Math.ceil(a/M/C)<=Q||D<0||Math.ceil(l/M/_)<=D)){if(x||y){let b=Q*C*M,X=D*_*M,z=C*M,Z=_*M,et=C,at=_;if(b+z>a&&(z=a-b),X+Z>l&&(Z=l-X),b+C*M>a&&(et=Math.floor((a-b+M-1)/M)),X+_*M>l&&(at=Math.floor((l-X+M-1)/M)),b==0&&z==a&&X==0&&Z==l)P="full";else if(!x||g.includes("regionByPx"))P=b+","+X+","+z+","+Z;else if(g.includes("regionByPct")){let L=oo(b/a*100),Pt=oo(X/l*100),It=oo(z/a*100),Dt=oo(Z/l*100);P="pct:"+L+","+Pt+","+It+","+Dt}r==wt.VERSION3&&(!x||g.includes("sizeByWh"))?O=et+","+at:!x||g.includes("sizeByW")?O=et+",":g.includes("sizeByH")?O=","+at:g.includes("sizeByWh")?O=et+","+at:g.includes("sizeByPct")&&(O="pct:"+oo(100/M))}else if(P="full",m){let b=s[N][0],X=s[N][1];r==wt.VERSION3?b==a&&X==l?O="max":O=b+","+X:b==a?O="full":O=b+","}else O=r==wt.VERSION3?"max":"full";return i+P+"/"+O+"/0/"+f+"."+u}},T=ll.bind(null,mt(h||256).map(function(S){return S*c}));super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:e.state,tileClass:T,tileGrid:I,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:A,transition:e.transition}),this.zDirection=e.zDirection}},_f=pf});function e_(n){let t=n.body;return!!(t.webkitRequestFullscreen||t.requestFullscreen&&n.fullscreenEnabled)}function i_(n){return!!(n.webkitIsFullScreen||n.fullscreenElement)}function n_(n){n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function Ax(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():n_(n)}function Px(n){n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen&&n.webkitExitFullscreen()}var Qp,t_,xf,ao,r_=w(()=>{Ol();hn();Ct();Bt();lt();xr();Qp=["fullscreenchange","webkitfullscreenchange"],t_={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},xf=class extends Oe{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target}),this.on,this.once,this.un,this.keys_=t.keys!==void 0?t.keys:!1,this.source_=t.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=t.className!==void 0?t.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=t.activeClassName!==void 0?t.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=t.inactiveClassName!==void 0?t.inactiveClassName.split(" "):[this.cssClassName_+"-false"];let e=t.label!==void 0?t.label:"\u2922";this.labelNode_=typeof e=="string"?document.createTextNode(e):e;let i=t.labelActive!==void 0?t.labelActive:"\xD7";this.labelActiveNode_=typeof i=="string"?document.createTextNode(i):i;let r=t.tipLabel?t.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=r,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener(k.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${oi} ${ln}`,this.element.appendChild(this.button_)}handleClick_(t){t.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){let t=this.getMap();if(!t)return;let e=t.getOwnerDocument();if(e_(e))if(i_(e))Px(e);else{let i;this.source_?i=typeof this.source_=="string"?e.getElementById(this.source_):this.source_:i=t.getTargetElement(),this.keys_?Ax(i):n_(i)}}handleFullScreenChange_(){let t=this.getMap();if(!t)return;let e=this.isInFullscreen_;this.isInFullscreen_=i_(t.getOwnerDocument()),e!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(yr(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(t_.ENTERFULLSCREEN)):(yr(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(t_.LEAVEFULLSCREEN)),t.updateSize())}setClassName_(t,e){e?(t.classList.remove(...this.inactiveClassName_),t.classList.add(...this.activeClassName_)):(t.classList.remove(...this.activeClassName_),t.classList.add(...this.inactiveClassName_))}setMap(t){let e=this.getMap();e&&e.removeChangeListener(Rt.TARGET,this.boundHandleMapTargetChange_),super.setMap(t),this.handleMapTargetChange_(),t&&t.addChangeListener(Rt.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){let t=this.documentListeners_;for(let i=0,r=t.length;i<r;++i)q(t[i]);t.length=0;let e=this.getMap();if(e){let i=e.getOwnerDocument();e_(i)?this.element.classList.remove(Sh):this.element.classList.add(Sh);for(let r=0,s=Qp.length;r<s;++r)t.push(j(i,Qp[r],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}};ao=xf});var Ef=w(()=>{xr();r_();Ph();Oh()});function Ce(n){return(t,...e)=>bx(n,t,e)}function jr(n,t){return Ce(Fx(n,t).get)}function Sf(){let n={colorSpace:wf.DEFAULT_COLORSPACE,colorType:"float16",toneMapping:{mode:"extended"}};return Array.isArray(navigator.userAgent.match(/Version\/[\d.]+.*Safari/))&&(n.colorSpace="display-p3"),n}function p_(){HTMLCanvasElement.prototype._getContext=HTMLCanvasElement.prototype.getContext,HTMLCanvasElement.prototype.getContext=function(n,t){return t!==void 0?t=Object.assign({},t,Sf()):t=Sf(),this._getContext(n,t)}}function Tf(){try{let n=window.matchMedia("(dynamic-range: high)").matches;return!!((window.matchMedia("(color-gamut: rec2020)").matches||window.matchMedia("(color-gamut: p3)").matches)&&n)}catch(n){return console.error("Exception during check for HDR",n),!1}}function __(){if(!Tf()||!jx())return!1;try{let n=document.createElement("canvas");if(!n.getContext)return!1;let t=Sf();return n.getContext("2d",t)!==null}catch(n){return console.error("Bad canvas ColorSpace test - make sure that the Chromium browser flag 'enable-experimental-web-platform-features' has been enabled",n),!1}return!1}function jx(){try{new ImageData(new Float16Array(4),1,1,{pixelFormat:"rgba-float16"})}catch(n){return console.error("Browser doesn't support Float16Array",n),!1}return!0}var wf,bx,Fx,Rf,Dx,HD,qD,h_,kx,$D,Nx,Gx,l_,c_,ne,zx,u_,f_,d_,Xx,Wx,g_,JD,QD,gi,mi,m_,ho,Ux,y_=w(()=>{wf=class{static DEFAULT_COLORSPACE="rec2100-hlg";static SDR_MULTIPLIER=2**16-1;data;height;width;constructor(t,e){this.height=e,this.width=t}static fromImageData(t){throw new Error("Method not implemented!")}static fromImageDataArray(t,e,i){throw new Error("Method not implemented!")}static async loadSDRImageData(t){return fetch(t).then(e=>e.blob()).then(e=>createImageBitmap(e)).then(e=>{let{width:i,height:r}=e,o=new OffscreenCanvas(i,r).getContext("2d");return o.drawImage(e,0,0),o.getImageData(0,0,i,r)})}getPixel(t,e){let i=(e*this.width+t)*4;return this.data.slice(i,i+4)}setPixel(t,e,i){let r=(e*this.width+t)*4;this.data[r+0]=i[0],this.data[r+1]=i[1],this.data[r+2]=i[2],this.data[r+3]=i[3]}clone(){let t=Object.create(Object.getPrototypeOf(this));return Object.assign(t,this),t}};({apply:bx,getOwnPropertyDescriptor:Fx,getPrototypeOf:Rf}=Reflect),{EPSILON:Dx,isFinite:HD,isNaN:qD}=Number,{iterator:h_,toStringTag:kx}=Symbol,{abs:$D}=Math,Nx=ArrayBuffer,Gx=Nx.prototype;jr(Gx,"byteLength");l_=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;l_&&jr(l_.prototype,"byteLength");c_=Rf(Uint8Array);c_.from;ne=c_.prototype;ne[h_];Ce(ne.keys);Ce(ne.values);Ce(ne.entries);Ce(ne.set);Ce(ne.reverse);Ce(ne.fill);Ce(ne.copyWithin);Ce(ne.sort);Ce(ne.slice);Ce(ne.subarray);jr(ne,"buffer");jr(ne,"byteOffset");jr(ne,"length");jr(ne,kx);zx=Uint8Array,u_=Uint16Array,f_=Uint32Array,d_=Rf([][h_]());Ce(d_.next);Ce((function*(){})().next);Rf(d_);Xx=1/Dx,Wx=6103515625e-14,g_=.0009765625,JD=g_*Wx,QD=g_*Xx,gi=new u_(512),mi=new zx(512);for(let n=0;n<256;++n){let t=n-127;t<-24?(gi[n]=0,gi[n|256]=32768,mi[n]=24,mi[n|256]=24):t<-14?(gi[n]=1024>>-t-14,gi[n|256]=1024>>-t-14|32768,mi[n]=-t-1,mi[n|256]=-t-1):t<=15?(gi[n]=t+15<<10,gi[n|256]=t+15<<10|32768,mi[n]=13,mi[n|256]=13):t<128?(gi[n]=31744,gi[n|256]=64512,mi[n]=24,mi[n|256]=24):(gi[n]=31744,gi[n|256]=64512,mi[n]=13,mi[n|256]=13)}m_=new f_(2048);for(let n=1;n<1024;++n){let t=n<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,m_[n]=t|e}for(let n=1024;n<2048;++n)m_[n]=939524096+(n-1024<<13);ho=new f_(64);for(let n=1;n<31;++n)ho[n]=n<<23;ho[31]=1199570944;ho[32]=2147483648;for(let n=33;n<63;++n)ho[n]=2147483648+(n-32<<23);ho[63]=3347054592;Ux=new u_(64);for(let n=1;n<64;++n)n!==32&&(Ux[n]=1024)});var Yx={};var If,vf,Lf,x_=w(()=>{Jp();mf();Kc();Ku();Ts();Ef();Xt();y_();If=class extends Zt{constructor(t){let e=t||{};super(t),this.pauseableAnimations_=[],this.animationsPointer_=-1,this.lastAnimation_={},this.initalCenter=this.getCenter()}getPauseableAnimation_(){return this.pauseableAnimations_.length-1>this.animationsPointer_?(this.animationsPointer_++,this.pauseableAnimations_[this.animationsPointer_]):(this.animationsPointer_=0,this.pauseableAnimations_[this.animationsPointer_])}nextAnimation_(t){if(t===void 0||t){var e=this,i=this.getPauseableAnimation_();this.animate(i,function(r){e.nextAnimation_(r)})}}pauseAnimation(){if(!this.getAnimating())return;var t=this.animations_[0][0],e=Date.now(),i=e-t.start;let r={center:t.center,zoom:t.zoom,rotation:t.rotation,duration:t.duration-i};this.lastAnimation_=r,this.cancelAnimations()}startAnimation_(){if(!this.getAnimating()){Object.keys(this.lastAnimation_).length!==0&&(this.lastAnimation_={});var t=this;this.animate(this.getPauseableAnimation_,function(e){t.nextAnimation_(e)})}}resumeAnimation(){if(!this.getAnimating())if(Object.keys(this.lastAnimation_).length===0)this.startAnimation_();else{var t=this;this.animate(this.lastAnimation_,function(e){t.nextAnimation_(e)})}}setPauseableAnimation(t){var e=new Array(arguments.length);for(let r=0;r<e.length;++r){var i=arguments[r];e[r]=i}this.animationsPointer_=-1,this.pauseableAnimations_=e}getPauseableAnimation(){return this.pauseableAnimations_}setCenter(t){this.initalCenter=t,this.setCenterInternal(pe(t,this.getProjection()))}isNoopAnimation(t){return!1}setResolutions(t){this.resolutions_=t}setExtent(t){var e={};e.extent=_e(t,this.projection_),this.applyOptions_(e)}},vf=class extends Oe{constructor(t){let e=t||{},i=e.tipLabel?e.tipLabel:"Rotate 90\xB0 left",r=document.createElement("button");r.innerHTML='<i class="icon-left"></i>',r.title=i;let s=document.createElement("div");s.className="rotate-left ol-unselectable ol-control",s.appendChild(r),super({element:s,target:e.target}),r.addEventListener("click",this.handleRotateLeft.bind(this),!1)}handleRotateLeft(){var t=this.getMap().getView().getRotation();this.getMap().getView().setRotation(t+-90*Math.PI/180)}},Lf=class extends Oe{constructor(t){let e=t||{},i=e.tipLabel?e.tipLabel:"Rotate 90\xB0 right",r=document.createElement("button");r.innerHTML='<i class="icon-right"></i>',r.title=i;let s=document.createElement("div");s.className="rotate-right ol-unselectable ol-control",s.appendChild(r),super({element:s,target:e.target}),r.addEventListener("click",this.handleRotateRight.bind(this),!1)}handleRotateRight(){var t=this.getMap().getView().getRotation();this.getMap().getView().setRotation(t+90*Math.PI/180)}};window.addMap=function(n,t,e,i,r){var s=0;e!==void 0&&e!=0&&(s=e*Math.PI/180),r===void 0&&(r=!1);var o="en";document.documentElement.lang!==void 0&&(o=new Intl.Locale(document.documentElement.lang).language);var a={de:{zoomIn:"Vergr\xF6\xDFern",zoomOut:"Verkleinern",fullscreen:"Vollbildansicht",rotate:"Rotation zur\xFCcksetzen",rotateLeft:"90\xB0 nach links drehen",rotateRight:"90\xB0 nach rechst drehen"},en:{zoomIn:"Zoom in",zoomOut:"Zoom out",fullscreen:"Toggle full-screen",rotate:"Reset rotation",rotateLeft:"Rotate 90\xB0 left",rotateRight:"Rotate 90\xB0 right"}};console.log("Setting up "+o),r&&Tf()&&__()&&(p_(),console.log("Enabled HDR Canvas"));var l=new En,h=new $s({controls:[new kn({zoomInTipLabel:a[o].zoomIn,zoomOutTipLabel:a[o].zoomOut}),new ao({tipLabel:a[o].fullscreen}),new vs({tipLabel:a[o].rotate}),new vf({tipLabel:a[o].rotateLeft}),new Lf({tipLabel:a[o].rotateRight})],layers:[l],target:n});return fetch(t).then(function(c){c.json().then(function(u){var f=new gf(u).getTileSourceOptions();if(f===void 0||f.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}f.zDirection=-1,i!==void 0&&i!=""&&(f.url=i);var d=new _f(f);l.setSource(d),h.setView(new Zt({resolutions:d.getTileGrid().getResolutions(),extent:d.getTileGrid().getExtent(),constrainOnlyCenter:!0,rotation:s})),h.getView().fit(d.getTileGrid().getExtent())}).catch(function(u){console.log("Could not read image info json. "+u)})}).catch(function(){console.log("Could not read data from URL.")}),h};window.animatedMap=function(n,t,e,i,r,s,o,a){var l=0;e!==void 0&&e!=0&&(l=e*Math.PI/180);var h=new En,c=new $s({controls:[],layers:[h],target:n}),u=new If({constrainOnlyCenter:!0,rotation:l});return fetch(t).then(function(f){f.json().then(function(d){var g=new gf(d).getTileSourceOptions();if(g===void 0||g.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}g.zDirection=-1,i!==void 0&&i!=""&&(g.url=i);var p=new _f(g);h.setSource(p),u.setExtent(p.getTileGrid().getExtent()),u.setResolutions(p.getTileGrid().getResolutions()),c.setView(u),c.getView().fit(p.getTileGrid().getExtent()),r!==void 0&&r!==""&&c.getView().setZoom(r),a!==void 0&&a!==""&&c.getView().setCenter(a)}).catch(function(d){console.log(`Could not read image info json from "${t}".`+d)})}).catch(function(){console.log("Could not read data from URL.")}),s!==void 0&&s!==""&&o!==void 0&&(Array.isArray(s)?u.setPauseableAnimation(...s):u.setPauseableAnimation(s),c.once("rendercomplete",function(){o.addEventListener("mouseenter",function(){u.resumeAnimation()}),o.addEventListener("mouseleave",function(f){u.pauseAnimation()})})),c}});Kc();Te();Gt();Bt();lt();var Vc=class n extends xt{constructor(t){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),t)if(typeof t.getSimplifiedGeometry=="function"){let e=t;this.setGeometry(e)}else{let e=t;this.setProperties(e)}}clone(){let t=new n,e=this.geometryName_;t.setGeometryName(e);let i=this.getPropertiesInternal();if(i){let s=this.getGeometry();for(let o in i)o===e&&s?t.set(o,s.clone()):t.set(o,i[o],!0)}let r=this.getStyle();return r&&t.setStyle(r),t}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&(q(this.geometryChangeKey_),this.geometryChangeKey_=null);let t=this.getGeometry();t&&(this.geometryChangeKey_=j(t,k.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(t){this.set(this.geometryName_,t)}setStyle(t){this.style_=t,this.styleFunction_=t?w0(t):void 0,this.changed()}setId(t){this.id_=t,this.changed()}setGeometryName(t){t!==this.geometryName_&&(this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=t,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_())}};function w0(n){if(typeof n=="function")return n;let t;return Array.isArray(n)?t=n:(K(typeof n.getZIndex=="function","Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),t=[n]),function(){return t}}var Or=Vc;ft();H();si();dr();Ai();rn();ft();dt();function jn(n,t,e,i,r,s,o){let a,l,h=(e-t)/i;if(h===1)a=t;else if(h===2)a=t,l=r;else if(h!==0){let c=n[t],u=n[t+1],f=0,d=[0];for(let m=t+i;m<e;m+=i){let y=n[m],x=n[m+1];f+=Math.sqrt((y-c)*(y-c)+(x-u)*(x-u)),d.push(f),c=y,u=x}let g=r*f,p=Nf(d,g);p<0?(l=(g-d[-p-2])/(d[-p-1]-d[-p-2]),a=t+(-p-2)*i):a=t+p*i}o=o>1?o:2,s=s||new Array(o);for(let c=0;c<o;++c)s[c]=a===void 0?NaN:l===void 0?n[a+c]:zt(n[a+c],n[a+i+c],l);return s}function Da(n,t,e,i,r,s){if(e==t)return null;let o;if(r<n[t+i-1])return s?(o=n.slice(t,t+i),o[i-1]=r,o):null;if(n[e-1]<r)return s?(o=n.slice(e-i,e),o[i-1]=r,o):null;if(r==n[t+i-1])return n.slice(t,t+i);let a=t/i,l=e/i;for(;a<l;){let f=a+l>>1;r<n[(f+1)*i-1]?l=f:a=f+1}let h=n[a*i-1];if(r==h)return n.slice((a-1)*i,(a-1)*i+i);let c=n[(a+1)*i-1],u=(r-h)/(c-h);o=[];for(let f=0;f<i-1;++f)o.push(zt(n[(a-1)*i+f],n[a*i+f],u));return o.push(r),o}function zm(n,t,e,i,r,s,o){if(o)return Da(n,t,e[e.length-1],i,r,s);let a;if(r<n[i-1])return s?(a=n.slice(0,i),a[i-1]=r,a):null;if(n[n.length-1]<r)return s?(a=n.slice(n.length-i),a[i-1]=r,a):null;for(let l=0,h=e.length;l<h;++l){let c=e[l];if(t!=c){if(r<n[t+i-1])return null;if(r<=n[c-1])return Da(n,t,c,i,r,!1);t=c}}return null}gr();function br(n,t,e,i){let r=n[t],s=n[t+1],o=0;for(let a=t+i;a<e;a+=i){let l=n[a],h=n[a+1];o+=Math.sqrt((l-r)*(l-r)+(h-s)*(h-s)),r=l,s=h}return o}uh();on();var Zc=class n extends le{constructor(t,e){super(),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendCoordinate(t){kt(this.flatCoordinates,t),this.changed()}clone(){let t=new n(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,r){return r<se(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(cs(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),fs(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,r))}forEachSegment(t){return $o(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinateAtM(t,e){return this.layout!="XYM"&&this.layout!="XYZM"?null:(e=e!==void 0?e:!1,Da(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e))}getCoordinates(){return Me(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinateAt(t,e){return jn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,this.stride)}getLength(){return br(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getFlatMidpoint(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_??void 0),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_}getSimplifiedGeometryInternal(t){let e=[];return e.length=bn(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new n(e,"XY")}getType(){return"LineString"}intersectsExtent(t){return Es(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,this.getExtent())}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=On(this.flatCoordinates,0,t,this.stride),this.changed()}},Js=Zc;ft();Bs();H();si();Ti();function ka(n,t,e,i,r,s,o,a){o=o??[],a=a??i;let l=n[t+i],h=n[t+i+1],c=n[e-2*i],u=n[e-2*i+1],f,d,g,p,m,y,x,C,_=0;for(let E=t;E<e;E+=i){g=f,p=d,m=void 0,y=void 0,E+i<e&&(m=n[E+i],y=n[E+i+1]),s&&E===t&&(g=c,p=u),s&&E===e-i&&(m=l,y=h),f=n[E],d=n[E+1],[x,C]=S0(f,d,g,p,m,y,r),o[_++]=x,o[_++]=C;for(let I=2;I<a;I++)o[_++]=n[E+I]}return o.length!=_&&(o.length=_),o}function S0(n,t,e,i,r,s,o){let a,l;e!==void 0&&i!==void 0?(a=n-e,l=t-i):r!==void 0&&s!==void 0?(a=r-n,l=s-t):(a=1,l=0);let h=Math.hypot(a,l),c=a/h,u=l/h;if(a=-u,l=c,e===void 0||i===void 0)return[n+a*o,t+l*o];if(r===void 0||s===void 0)return[n+a*o,t+l*o];let f=ld([n,t],[e,i],[r,s]);if(Math.cos(f)>.998)return[n+c*o,t+u*o];let d=Math.cos(f/2),g=Math.sin(f/2),p=g*a+d*l,m=-d*a+g*l,y=p*(1/g),x=m*(1/g);return[n+y*o,t+x*o]}function Na(n,t){for(let e=0,i=n.length-2;e<i;e+=t)for(let r=n.length-2*t;r>e+t;r-=t){let s=n[e],o=n[e+1],a=n[e+t],l=n[e+t+1],h=n[r],c=n[r+1],u=n[r+t],f=n[r+t+1],d=(f-c)*(a-s)-(u-h)*(l-o);if(d===0)continue;let g=((u-h)*(o-c)-(f-c)*(s-h))/d,p=((a-s)*(o-c)-(l-o)*(s-h))/d;if(g>0&&g<1&&p>0&&p<1){let m=s+g*(a-s),y=o+g*(l-o);n[e+t]=m,n[e+t+1]=y,n.splice(e+2*t,r-e-t);break}}return n}Qi();dt();Pe();var Hc=class{drawCustom(t,e,i,r,s){}drawGeometry(t){}setStyle(t){}drawCircle(t,e,i){}drawFeature(t,e,i){}drawGeometryCollection(t,e,i){}drawLineString(t,e,i){}drawMultiLineString(t,e,i){}drawMultiPoint(t,e,i){}drawMultiPolygon(t,e,i){}drawPoint(t,e,i){}drawPolygon(t,e,i){}drawText(t,e,i){}setFillStrokeStyle(t,e){}setImageStyle(t,e){}setTextStyle(t,e){}},Ga=Hc;Di();var qc=class extends Ga{constructor(t,e,i,r,s,o,a){super(),this.context_=t,this.pixelRatio_=e,this.extent_=i,this.transform_=r,this.transformRotation_=r?In(Math.atan2(r[1],r[0]),10):0,this.viewRotation_=s,this.squaredTolerance_=o,this.userTransform_=a,this.contextFillState_=null,this.contextStrokeState_=null,this.contextTextState_=null,this.fillState_=null,this.strokeState_=null,this.image_=null,this.imageAnchorX_=0,this.imageAnchorY_=0,this.imageHeight_=0,this.imageOpacity_=0,this.imageOriginX_=0,this.imageOriginY_=0,this.imageRotateWithView_=!1,this.imageRotation_=0,this.imageScale_=[0,0],this.imageWidth_=0,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=!1,this.textRotation_=0,this.textScale_=[0,0],this.textFillState_=null,this.textStrokeState_=null,this.textState_=null,this.pixelCoordinates_=[],this.tmpLocalTransform_=bt()}drawImages_(t,e,i,r){if(!this.image_)return;let s=ae(t,e,i,r,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.tmpLocalTransform_,l=o.globalAlpha;this.imageOpacity_!=1&&(o.globalAlpha=l*this.imageOpacity_);let h=this.imageRotation_;this.transformRotation_===0&&(h-=this.viewRotation_),this.imageRotateWithView_&&(h+=this.viewRotation_);for(let c=0,u=s.length;c<u;c+=2){let f=s[c]-this.imageAnchorX_,d=s[c+1]-this.imageAnchorY_;if(h!==0||this.imageScale_[0]!=1||this.imageScale_[1]!=1){let g=f+this.imageAnchorX_,p=d+this.imageAnchorY_;Wt(a,g,p,1,1,h,-g,-p),o.save(),o.transform.apply(o,a),o.translate(g,p),o.scale(this.imageScale_[0],this.imageScale_[1]),o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,-this.imageAnchorX_,-this.imageAnchorY_,this.imageWidth_,this.imageHeight_),o.restore()}else o.drawImage(this.image_,this.imageOriginX_,this.imageOriginY_,this.imageWidth_,this.imageHeight_,f,d,this.imageWidth_,this.imageHeight_)}this.imageOpacity_!=1&&(o.globalAlpha=l)}drawText_(t,e,i,r){if(!this.textState_||this.text_==="")return;this.textFillState_&&this.setContextFillState_(this.textFillState_),this.textStrokeState_&&this.setContextStrokeState_(this.textStrokeState_),this.setContextTextState_(this.textState_);let s=ae(t,e,i,r,this.transform_,this.pixelCoordinates_),o=this.context_,a=this.textRotation_;for(this.transformRotation_===0&&(a-=this.viewRotation_),this.textRotateWithView_&&(a+=this.viewRotation_);e<i;e+=r){let l=s[e]+this.textOffsetX_,h=s[e+1]+this.textOffsetY_;a!==0||this.textScale_[0]!=1||this.textScale_[1]!=1?(o.save(),o.translate(l-this.textOffsetX_,h-this.textOffsetY_),o.rotate(a),o.translate(this.textOffsetX_,this.textOffsetY_),o.scale(this.textScale_[0],this.textScale_[1]),this.textStrokeState_&&o.strokeText(this.text_,0,0),this.textFillState_&&o.fillText(this.text_,0,0),o.restore()):(this.textStrokeState_&&o.strokeText(this.text_,l,h),this.textFillState_&&o.fillText(this.text_,l,h))}}moveToLineTo_(t,e,i,r,s,o){let a=this.context_,l=ae(t,e,i,r,this.transform_,this.pixelCoordinates_);Math.abs(o)>0&&(l=ka(l,0,l.length,2,o,s,l),Na(l,2)),a.moveTo(l[0],l[1]);let h=l.length;s&&(h-=2);for(let c=2;c<h;c+=2)a.lineTo(l[c],l[c+1]);return s&&a.closePath(),i}drawRings_(t,e,i,r,s){for(let o=0,a=i.length;o<a;++o)e=this.moveToLineTo_(t,e,i[o],r,!0,s);return e}drawCircle(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!pt(this.extent_,t.getExtent())){if(this.fillState_||this.strokeState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let e=Bd(t,this.transform_,this.pixelCoordinates_),i=e[2]-e[0],r=e[3]-e[1],s=Math.sqrt(i*i+r*r),o=this.context_;o.beginPath(),o.arc(e[0],e[1],s,0,2*Math.PI),this.fillState_&&o.fill(),this.strokeState_&&o.stroke()}this.text_!==""&&this.drawText_(t.getCenter(),0,2,2)}}setStyle(t){this.setFillStrokeStyle(t.getFill(),t.getStroke()),this.setImageStyle(t.getImage()),this.setTextStyle(t.getText())}setTransform(t){this.transform_=t}drawGeometry(t){switch(t.getType()){case"Point":this.drawPoint(t);break;case"LineString":this.drawLineString(t);break;case"Polygon":this.drawPolygon(t);break;case"MultiPoint":this.drawMultiPoint(t);break;case"MultiLineString":this.drawMultiLineString(t);break;case"MultiPolygon":this.drawMultiPolygon(t);break;case"GeometryCollection":this.drawGeometryCollection(t);break;case"Circle":this.drawCircle(t);break;default:}}drawFeature(t,e){let i=e.getGeometryFunction()(t);i&&(this.setStyle(e),this.drawGeometry(i))}drawGeometryCollection(t){let e=t.getGeometriesArray();for(let i=0,r=e.length;i<r;++i)this.drawGeometry(e[i])}drawPoint(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),this.text_!==""&&this.drawText_(e,0,e.length,i)}drawMultiPoint(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let e=t.getFlatCoordinates(),i=t.getStride();this.image_&&this.drawImages_(e,0,e.length,i),this.text_!==""&&this.drawText_(e,0,e.length,i)}drawLineString(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!pt(this.extent_,t.getExtent())){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);let e=this.context_,i=t.getFlatCoordinates();e.beginPath(),this.moveToLineTo_(i,0,i.length,t.getStride(),!1,this.strokeState_.strokeOffset),e.stroke()}if(this.text_!==""){let e=t.getFlatMidpoint();this.drawText_(e,0,2,2)}}}drawMultiLineString(t){this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_));let e=t.getExtent();if(pt(this.extent_,e)){if(this.strokeState_){this.setContextStrokeState_(this.strokeState_);let i=this.context_,r=t.getFlatCoordinates(),s=0,o=t.getEnds(),a=t.getStride();i.beginPath();for(let l=0,h=o.length;l<h;++l)s=this.moveToLineTo_(r,s,o[l],a,!1,this.strokeState_.strokeOffset);i.stroke()}if(this.text_!==""){let i=t.getFlatMidpoints();this.drawText_(i,0,i.length,2)}}}drawPolygon(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!pt(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let e=this.context_;e.beginPath(),this.drawRings_(t.getOrientedFlatCoordinates(),0,t.getEnds(),t.getStride(),this.strokeState_?.strokeOffset),this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(this.text_!==""){let e=t.getFlatInteriorPoint();this.drawText_(e,0,2,2)}}}drawMultiPolygon(t){if(this.squaredTolerance_&&(t=t.simplifyTransformed(this.squaredTolerance_,this.userTransform_)),!!pt(this.extent_,t.getExtent())){if(this.strokeState_||this.fillState_){this.fillState_&&this.setContextFillState_(this.fillState_),this.strokeState_&&this.setContextStrokeState_(this.strokeState_);let e=this.context_,i=t.getOrientedFlatCoordinates(),r=0,s=t.getEndss(),o=t.getStride();e.beginPath();for(let a=0,l=s.length;a<l;++a){let h=s[a];r=this.drawRings_(i,r,h,o,this.strokeState_?.strokeOffset)}this.fillState_&&e.fill(),this.strokeState_&&e.stroke()}if(this.text_!==""){let e=t.getFlatInteriorPoints();this.drawText_(e,0,e.length,2)}}}setContextFillState_(t){let e=this.context_,i=this.contextFillState_;i?i.fillStyle!=t.fillStyle&&(i.fillStyle=t.fillStyle,e.fillStyle=t.fillStyle):(e.fillStyle=t.fillStyle,this.contextFillState_={fillStyle:t.fillStyle})}setContextStrokeState_(t){let e=this.context_,i=this.contextStrokeState_;i?(i.lineCap!=t.lineCap&&(i.lineCap=t.lineCap,e.lineCap=t.lineCap),Kt(i.lineDash,t.lineDash)||e.setLineDash(i.lineDash=t.lineDash),i.lineDashOffset!=t.lineDashOffset&&(i.lineDashOffset=t.lineDashOffset,e.lineDashOffset=t.lineDashOffset),i.lineJoin!=t.lineJoin&&(i.lineJoin=t.lineJoin,e.lineJoin=t.lineJoin),i.lineWidth!=t.lineWidth&&(i.lineWidth=t.lineWidth,e.lineWidth=t.lineWidth),i.miterLimit!=t.miterLimit&&(i.miterLimit=t.miterLimit,e.miterLimit=t.miterLimit),i.strokeStyle!=t.strokeStyle&&(i.strokeStyle=t.strokeStyle,e.strokeStyle=t.strokeStyle)):(e.lineCap=t.lineCap,e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.strokeStyle=t.strokeStyle,this.contextStrokeState_={lineCap:t.lineCap,lineDash:t.lineDash,lineDashOffset:t.lineDashOffset,lineJoin:t.lineJoin,lineWidth:t.lineWidth,miterLimit:t.miterLimit,strokeStyle:t.strokeStyle})}setContextTextState_(t){let e=this.context_,i=this.contextTextState_,r=t.textAlign?t.textAlign:pn;i?(i.font!=t.font&&(i.font=t.font,e.font=t.font),i.textAlign!=r&&(i.textAlign=r,e.textAlign=r),i.textBaseline!=t.textBaseline&&(i.textBaseline=t.textBaseline,e.textBaseline=t.textBaseline)):(e.font=t.font,e.textAlign=r,e.textBaseline=t.textBaseline,this.contextTextState_={font:t.font,textAlign:r,textBaseline:t.textBaseline})}setFillStrokeStyle(t,e){if(!t)this.fillState_=null;else{let i=t.getColor();this.fillState_={fillStyle:he(i||At)}}if(!e)this.strokeState_=null;else{let i=e.getColor(),r=e.getLineCap(),s=e.getLineDash(),o=e.getLineDashOffset(),a=e.getLineJoin(),l=e.getWidth(),h=e.getMiterLimit(),c=s||ce,u=e.getOffset();this.strokeState_={lineCap:r!==void 0?r:hi,lineDash:this.pixelRatio_===1?c:c.map(f=>f*this.pixelRatio_),lineDashOffset:(o||ue)*this.pixelRatio_,lineJoin:a!==void 0?a:ci,lineWidth:(l!==void 0?l:Fi)*this.pixelRatio_,miterLimit:h!==void 0?h:Oi,strokeStyle:he(i||$t),strokeOffset:(u??0)*this.pixelRatio_}}}setImageStyle(t){let e;if(!t||!(e=t.getSize())){this.image_=null;return}let i=t.getPixelRatio(this.pixelRatio_),r=t.getAnchor(),s=t.getOrigin();this.image_=t.getImage(this.pixelRatio_),this.imageAnchorX_=r[0]*i,this.imageAnchorY_=r[1]*i,this.imageHeight_=e[1]*i,this.imageOpacity_=t.getOpacity(),this.imageOriginX_=s[0],this.imageOriginY_=s[1],this.imageRotateWithView_=t.getRotateWithView(),this.imageRotation_=t.getRotation();let o=t.getScaleArray();this.imageScale_=[o[0]*this.pixelRatio_/i,o[1]*this.pixelRatio_/i],this.imageWidth_=e[0]*i}setTextStyle(t){if(!t)this.text_="";else{let e=t.getFill();if(!e)this.textFillState_=null;else{let d=e.getColor();this.textFillState_={fillStyle:he(d||At)}}let i=t.getStroke();if(!i)this.textStrokeState_=null;else{let d=i.getColor(),g=i.getLineCap(),p=i.getLineDash(),m=i.getLineDashOffset(),y=i.getLineJoin(),x=i.getWidth(),C=i.getMiterLimit();this.textStrokeState_={lineCap:g!==void 0?g:hi,lineDash:p||ce,lineDashOffset:m||ue,lineJoin:y!==void 0?y:ci,lineWidth:x!==void 0?x:Fi,miterLimit:C!==void 0?C:Oi,strokeStyle:he(d||$t)}}let r=t.getFont(),s=t.getOffsetX(),o=t.getOffsetY(),a=t.getRotateWithView(),l=t.getRotation(),h=t.getScaleArray(),c=t.getText(),u=t.getTextAlign(),f=t.getTextBaseline();this.textState_={font:r!==void 0?r:Ca,textAlign:u!==void 0?u:pn,textBaseline:f!==void 0?f:Un},this.text_=c!==void 0?Array.isArray(c)?c.reduce((d,g,p)=>d+=p%2?" ":g,""):c:"",this.textOffsetX_=s!==void 0?this.pixelRatio_*s:0,this.textOffsetY_=o!==void 0?this.pixelRatio_*o:0,this.textRotateWithView_=a!==void 0?a:!1,this.textRotation_=l!==void 0?l:0,this.textScale_=[this.pixelRatio_*h[0],this.pixelRatio_*h[1]]}}},Xm=qc;Mi();ht();var R0=.5,Wm={Point:M0,LineString:L0,Polygon:b0,MultiPoint:O0,MultiLineString:A0,MultiPolygon:P0,GeometryCollection:v0,Circle:T0};function Um(n,t){return parseInt(Y(n),10)-parseInt(Y(t),10)}function $c(n,t){let e=Jc(n,t);return e*e}function Jc(n,t){return R0*n/t}function T0(n,t,e,i,r){let s=e.getFill(),o=e.getStroke();if(s||o){let l=n.getBuilder(e.getZIndex(),"Circle");l.setFillStrokeStyle(s,o),l.drawCircle(t,i,r)}let a=e.getText();if(a&&a.getText()){let l=n.getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i,r)}}function Qc(n,t,e,i,r,s,o,a){let l=[],h=e.getImage();if(h){let f=!0,d=h.getImageState();d==B.LOADED||d==B.ERROR?f=!1:d==B.IDLE&&h.load(),f&&l.push(h.ready())}let c=e.getFill();c&&c.loading()&&l.push(c.ready());let u=l.length>0;return u&&Promise.all(l).then(()=>r(null)),I0(n,t,e,i,s,o,a),u}function I0(n,t,e,i,r,s,o){let a=e.getGeometryFunction()(t);if(!a)return;let l=a.simplifyTransformed(i,r);if(e.getRenderer())jm(n,l,e,t,o);else{let c=Wm[l.getType()];c(n,l,e,t,o,s)}}function jm(n,t,e,i,r){if(t.getType()=="GeometryCollection"){let o=t.getGeometries();for(let a=0,l=o.length;a<l;++a)jm(n,o[a],e,i,r);return}n.getBuilder(e.getZIndex(),"Default").drawCustom(t,i,e.getRenderer(),e.getHitDetectionRenderer(),r)}function v0(n,t,e,i,r,s){let o=t.getGeometriesArray(),a,l;for(a=0,l=o.length;a<l;++a){let h=Wm[o[a].getType()];h(n,o[a],e,i,r,s)}}function L0(n,t,e,i,r){let s=e.getStroke();if(s){let a=n.getBuilder(e.getZIndex(),"LineString");a.setFillStrokeStyle(null,s),a.drawLineString(t,i,r)}let o=e.getText();if(o&&o.getText()){let a=n.getBuilder(e.getZIndex(),"Text");a.setTextStyle(o),a.drawText(t,i,r)}}function A0(n,t,e,i,r){let s=e.getStroke();if(s){let a=n.getBuilder(e.getZIndex(),"LineString");a.setFillStrokeStyle(null,s),a.drawMultiLineString(t,i,r)}let o=e.getText();if(o&&o.getText()){let a=n.getBuilder(e.getZIndex(),"Text");a.setTextStyle(o),a.drawText(t,i,r)}}function P0(n,t,e,i,r){let s=e.getFill(),o=e.getStroke();if(o||s){let l=n.getBuilder(e.getZIndex(),"Polygon");l.setFillStrokeStyle(s,o),l.drawMultiPolygon(t,i,r)}let a=e.getText();if(a&&a.getText()){let l=n.getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i,r)}}function M0(n,t,e,i,r,s){let o=e.getImage(),a=e.getText(),l=a&&a.getText(),h=s&&o&&l?{}:void 0;if(o){if(o.getImageState()!=B.LOADED)return;let c=n.getBuilder(e.getZIndex(),"Image");c.setImageStyle(o,h),c.drawPoint(t,i,r)}if(l){let c=n.getBuilder(e.getZIndex(),"Text");c.setTextStyle(a,h),c.drawText(t,i,r)}}function O0(n,t,e,i,r,s){let o=e.getImage(),a=o&&o.getOpacity()!==0,l=e.getText(),h=l&&l.getText(),c=s&&a&&h?{}:void 0;if(a){if(o.getImageState()!=B.LOADED)return;let u=n.getBuilder(e.getZIndex(),"Image");u.setImageStyle(o,c),u.drawMultiPoint(t,i,r)}if(h){let u=n.getBuilder(e.getZIndex(),"Text");u.setTextStyle(l,c),u.drawText(t,i,r)}}function b0(n,t,e,i,r){let s=e.getFill(),o=e.getStroke();if(s||o){let l=n.getBuilder(e.getZIndex(),"Polygon");l.setFillStrokeStyle(s,o),l.drawPolygon(t,i,r)}let a=e.getText();if(a&&a.getText()){let l=n.getBuilder(e.getZIndex(),"Text");l.setTextStyle(a),l.drawText(t,i,r)}}Qn();$r();Zn();ft();Gt();Bt();Qe();lt();H();var F0=!1;function D0(n,t,e,i,r,s,o){let a=new XMLHttpRequest;a.open("GET",typeof n=="function"?n(e,i,r):n,!0),t.getType()=="arraybuffer"&&(a.responseType="arraybuffer"),a.withCredentials=F0,a.onload=function(l){if(!a.status||a.status>=200&&a.status<300){let h=t.getType();try{let c;h=="text"||h=="json"?c=a.responseText:h=="xml"?c=a.responseXML||a.responseText:h=="arraybuffer"&&(c=a.response),c?s(t.readFeatures(c,{extent:e,featureProjection:r}),t.readProjection(c)):o()}catch{o()}}else o()},a.onerror=o,a.send()}function tu(n,t){return function(e,i,r,s,o){D0(n,t,e,i,r,(a,l)=>{this.addFeatures(a),s!==void 0&&s(a)},()=>{this.changed(),o!==void 0&&o()})}}te();Xt();function Ym(n,t){return[[-1/0,-1/0,1/0,1/0]]}Re();ft();H();te();ft();H();si();dr();Ai();rn();gr();on();var eu=class n extends le{constructor(t,e,i){if(super(),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(t[0]))this.setCoordinates(t,e);else if(e!==void 0&&i)this.setFlatCoordinates(e,t),this.ends_=i;else{let r=t,s=[],o=[];for(let l=0,h=r.length;l<h;++l){let c=r[l];kt(s,c.getFlatCoordinates()),o.push(s.length)}let a=r.length===0?this.getLayout():r[0].getLayout();this.setFlatCoordinates(a,s),this.ends_=o}}appendLineString(t){kt(this.flatCoordinates,t.getFlatCoordinates().slice()),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new n(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,r){return r<se(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(us(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),ds(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,r))}getCoordinateAtM(t,e,i){return this.layout!="XYM"&&this.layout!="XYZM"||this.flatCoordinates.length===0?null:(e=e!==void 0?e:!1,i=i!==void 0?i:!1,zm(this.flatCoordinates,0,this.ends_,this.stride,t,e,i))}getCoordinates(){return nn(this.flatCoordinates,0,this.ends_,this.stride)}getEnds(){return this.ends_}getLineString(t){return t<0||this.ends_.length<=t?null:new Js(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLineStrings(){let t=this.flatCoordinates,e=this.ends_,i=this.layout,r=[],s=0;for(let o=0,a=e.length;o<a;++o){let l=e[o],h=new Js(t.slice(s,l),i);r.push(h),s=l}return r}getLength(){let t=this.ends_,e=0,i=0;for(let r=0,s=t.length;r<s;++r)i+=br(this.flatCoordinates,e,t[r],this.stride),e=t[r];return i}getFlatMidpoints(){let t=[],e=this.flatCoordinates,i=0,r=this.ends_,s=this.stride;for(let o=0,a=r.length;o<a;++o){let l=r[o],h=jn(e,i,l,s,.5);kt(t,h),i=l}return t}getSimplifiedGeometryInternal(t){let e=[],i=[];return e.length=Zo(this.flatCoordinates,0,this.ends_,this.stride,t,e,0,i),new n(e,"XY",i)}getType(){return"MultiLineString"}intersectsExtent(t){return eg(this.flatCoordinates,0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);let i=en(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},Bm=eu;ft();H();dt();ps();si();Ai();rn();var iu=class n extends le{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){kt(this.flatCoordinates,t.getFlatCoordinates()),this.changed()}clone(){let t=new n(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,r){if(r<se(this.getExtent(),t,e))return r;let s=this.flatCoordinates,o=this.stride;for(let a=0,l=s.length;a<l;a+=o){let h=Ne(t,e,s[a],s[a+1]);if(h<r){r=h;for(let c=0;c<o;++c)i[c]=s[a+c];i.length=o}}return r}getCoordinates(){return Me(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){let e=this.flatCoordinates.length/this.stride;return t<0||e<=t?null:new Pi(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){let t=this.flatCoordinates,e=this.layout,i=this.stride,r=[];for(let s=0,o=t.length;s<o;s+=i){let a=new Pi(t.slice(s,s+i),e);r.push(a)}return r}getType(){return"MultiPoint"}intersectsExtent(t){let e=this.flatCoordinates,i=this.stride;for(let r=0,s=e.length;r<s;r+=i){let o=e[r],a=e[r+1];if(ss(t,o,a))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=On(this.flatCoordinates,0,t,this.stride),this.changed()}},za=iu;ft();H();Rs();si();Ko();H();function Xa(n,t,e,i){let r=[],s=gt();for(let o=0,a=e.length;o<a;++o){let l=e[o];s=er(n,t,l[0],i),r.push((s[0]+s[2])/2,(s[1]+s[3])/2),t=l[l.length-1]}return r}dr();ys();Ai();rn();qo();gr();Ss();on();var nu=class n extends le{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){let r=t,s=[],o=[];for(let a=0,l=r.length;a<l;++a){let h=r[a],c=s.length,u=h.getEnds();for(let f=0,d=u.length;f<d;++f)u[f]+=c;kt(s,h.getFlatCoordinates()),o.push(u)}e=r.length===0?this.getLayout():r[0].getLayout(),t=s,i=o}e!==void 0&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(!this.flatCoordinates)this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();else{let i=this.flatCoordinates.length;kt(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let r=0,s=e.length;r<s;++r)e[r]+=i}this.endss_.push(e),this.changed()}clone(){let t=this.endss_.length,e=new Array(t);for(let r=0;r<t;++r)e[r]=this.endss_[r].slice();let i=new n(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,r){return r<se(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Zd(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Hd(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,r))}containsXY(t,e){return tg(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return Kd(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),ws(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,gs(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){let t=Xa(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=Ho(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new za(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let t=this.flatCoordinates;Jo(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=ws(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let e=[],i=[];return e.length=$d(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new n(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(t===0)e=0;else{let s=this.endss_[t-1];e=s[s.length-1]}let i=this.endss_[t].slice(),r=i[i.length-1];if(e!==0)for(let s=0,o=i.length;s<o;++s)i[s]-=e;return new Fn(this.flatCoordinates.slice(e,r),this.layout,i)}getPolygons(){let t=this.layout,e=this.flatCoordinates,i=this.endss_,r=[],s=0;for(let o=0,a=i.length;o<a;++o){let l=i[o].slice(),h=l[l.length-1];if(s!==0)for(let u=0,f=l.length;u<f;++u)l[u]-=s;let c=new Fn(e.slice(s,h),t,l);r.push(c),s=h}return r}getType(){return"MultiPolygon"}intersectsExtent(t){return ig(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);let i=Vo(this.flatCoordinates,0,t,this.stride,this.endss_);if(i.length===0)this.flatCoordinates.length=0;else{let r=i[i.length-1];this.flatCoordinates.length=r.length===0?0:r[r.length-1]}this.changed()}},Km=nu;qo();Ss();on();Qi();Xt();Pe();var Vm=bt(),Qs=class n{constructor(t,e,i,r,s,o){this.styleFunction,this.extent_,this.id_=o,this.type_=t,this.flatCoordinates_=e,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i||null,this.properties_=s,this.squaredTolerance_,this.stride_=r,this.simplifiedGeometry_}get(t){return this.properties_[t]}getExtent(){return this.extent_||(this.extent_=this.type_==="Point"?tr(this.flatCoordinates_):er(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){let t=Vt(this.getExtent());this.flatInteriorPoints_=xs(this.flatCoordinates_,0,this.ends_,this.stride_,t,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){let t=sg(this.flatCoordinates_,this.ends_),e=Xa(this.flatCoordinates_,0,t,this.stride_);this.flatInteriorPoints_=Ho(this.flatCoordinates_,0,t,this.stride_,e)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=jn(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];let t=this.flatCoordinates_,e=0,i=this.ends_;for(let r=0,s=i.length;r<s;++r){let o=i[r],a=jn(t,e,o,this.stride_,.5);kt(this.flatMidpoints_,a),e=o}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(t){return this}simplifyTransformed(t,e){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(t){t=ot(t);let e=t.getExtent(),i=t.getWorldExtent();if(e&&i){let r=ut(i)/ut(e);Wt(Vm,i[0],i[3],r,-r,0,0,0),ae(this.flatCoordinates_,0,this.flatCoordinates_.length,this.stride_,Vm,this.flatCoordinates_)}}applyTransform(t){t(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new n(this.type_,this.flatCoordinates_.slice(),this.ends_?.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=yo((t,e)=>{if(t===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),e&&this.simplifiedGeometry_.applyTransform(e);let i=this.simplifiedGeometry_.getFlatCoordinates(),r;switch(this.type_){case"LineString":i.length=bn(i,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,t,i,0),r=[i.length];break;case"MultiLineString":r=[],i.length=Zo(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,t,i,0,r);break;case"Polygon":r=[],i.length=ms(i,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(t),i,0,r);break;default:}return r&&(this.simplifiedGeometry_=new n(this.type_,i,r,this.stride_,this.properties_,this.id_)),this.squaredTolerance_=t,this.simplifiedGeometry_}),this}};Qs.prototype.getFlatCoordinates=Qs.prototype.getOrientedFlatCoordinates;var Ve=Qs;ic();H();Re();ht();var ru=class{constructor(t){this.rbush_=new zn(t),this.items_={}}insert(t,e){let i={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(i),this.items_[Y(e)]=i}load(t,e){let i=new Array(e.length);for(let r=0,s=e.length;r<s;r++){let o=t[r],a=e[r],l={minX:o[0],minY:o[1],maxX:o[2],maxY:o[3],value:a};i[r]=l,this.items_[Y(a)]=l}this.rbush_.load(i)}remove(t){let e=Y(t),i=this.items_[e];return delete this.items_[e],this.rbush_.remove(i)!==null}update(t,e){let i=this.items_[Y(e)],r=[i.minX,i.minY,i.maxX,i.maxY];Ri(r,t)||(this.remove(e),this.insert(t,e))}getAll(){return this.rbush_.all().map(function(e){return e.value})}getInExtent(t){let e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map(function(r){return r.value})}forEach(t){return this.forEach_(this.getAll(),t)}forEachInExtent(t,e){return this.forEach_(this.getInExtent(t),e)}forEach_(t,e){let i;for(let r=0,s=t.length;r<s;r++)if(i=e(t[r]),i)return i;return i}isEmpty(){return ge(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(t){let e=this.rbush_.toJSON();return me(e.minX,e.minY,e.maxX,e.maxY,t)}concat(t){this.rbush_.load(t.rbush_.all());for(let e in t.items_)this.items_[e]=t.items_[e]}},su=ru;ht();au();var Ee={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"};var ui=class extends Ot{constructor(t,e,i){super(t),this.feature=e,this.features=i}},lu=class extends Wa{constructor(t){t=t||{},super({attributions:t.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:t.wrapX!==void 0?t.wrapX:!0}),this.on,this.once,this.un,this.loader_=Ci,this.format_=t.format||null,this.overlaps_=t.overlaps===void 0?!0:t.overlaps,this.url_=t.url,t.loader!==void 0?this.loader_=t.loader:this.url_!==void 0&&(K(this.format_,"`format` must be set when `url` is set"),this.loader_=tu(this.url_,this.format_)),this.strategy_=t.strategy!==void 0?t.strategy:Ym;let e=t.useSpatialIndex!==void 0?t.useSpatialIndex:!0;this.featuresRtree_=e?new su:null,this.loadedExtentsRtree_=new su,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null;let i,r;Array.isArray(t.features)?r=t.features:t.features&&(i=t.features,r=i.getArray()),!e&&i===void 0&&(i=new Nt(r)),r!==void 0&&this.addFeaturesInternal(r),i!==void 0&&this.bindFeaturesCollection_(i)}addFeature(t){this.addFeatureInternal(t),this.changed()}addFeatureInternal(t){let e=Y(t);if(!this.addToIndex_(e,t)){this.featuresCollection_&&this.featuresCollection_.remove(t);return}this.setupChangeEvents_(e,t);let i=t.getGeometry();if(i){let r=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(r,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new ui(Ee.ADDFEATURE,t))}setupChangeEvents_(t,e){e instanceof Ve||(this.featureChangeKeys_[t]=[j(e,k.CHANGE,this.handleFeatureChange_,this),j(e,De.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(t,e){let i=!0;if(e.getId()!==void 0){let r=String(e.getId());if(!(r in this.idIndex_))this.idIndex_[r]=e;else if(e instanceof Ve){let s=this.idIndex_[r];s instanceof Ve?Array.isArray(s)?s.push(e):this.idIndex_[r]=[s,e]:i=!1}else i=!1}return i&&(K(!(t in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[t]=e),i}addFeatures(t){this.addFeaturesInternal(t),this.changed()}addFeaturesInternal(t){let e=[],i=[],r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s],l=Y(a);this.addToIndex_(l,a)&&i.push(a)}for(let s=0,o=i.length;s<o;s++){let a=i[s],l=Y(a);this.setupChangeEvents_(l,a);let h=a.getGeometry();if(h){let c=h.getExtent();e.push(c),r.push(a)}else this.nullGeometryFeatures_[l]=a}if(this.featuresRtree_&&this.featuresRtree_.load(e,r),this.hasListener(Ee.ADDFEATURE))for(let s=0,o=i.length;s<o;s++)this.dispatchEvent(new ui(Ee.ADDFEATURE,i[s]))}bindFeaturesCollection_(t){let e=!1;this.addEventListener(Ee.ADDFEATURE,function(i){e||(e=!0,t.push(i.feature),e=!1)}),this.addEventListener(Ee.REMOVEFEATURE,function(i){e||(e=!0,t.remove(i.feature),e=!1)}),t.addEventListener(Mt.ADD,i=>{e||(e=!0,this.addFeature(i.element),e=!1)}),t.addEventListener(Mt.REMOVE,i=>{e||(e=!0,this.removeFeature(i.element),e=!1)}),this.featuresCollection_=t}clear(t){if(t){for(let i in this.featureChangeKeys_)this.featureChangeKeys_[i].forEach(q);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){this.featuresRtree_.forEach(i=>{this.removeFeatureInternal(i)});for(let i in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[i])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};let e=new ui(Ee.CLEAR);this.dispatchEvent(e),this.changed()}forEachFeature(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureAtCoordinateDirect(t,e){let i=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(i,function(r){let s=r.getGeometry();if(s instanceof Ve||s.intersectsCoordinate(t))return e(r)})}forEachFeatureInExtent(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureIntersectingExtent(t,e){return this.forEachFeatureInExtent(t,function(i){let r=i.getGeometry();if(r instanceof Ve||r.intersectsExtent(t)){let s=e(i);if(s)return s}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let t;return this.featuresCollection_?t=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(t=this.featuresRtree_.getAll(),ge(this.nullGeometryFeatures_)||kt(t,Object.values(this.nullGeometryFeatures_))),t}getFeaturesAtCoordinate(t){let e=[];return this.forEachFeatureAtCoordinateDirect(t,function(i){e.push(i)}),e}getFeaturesInExtent(t,e){if(this.featuresRtree_){if(!(e&&e.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(t);let r=Ao(t,e);return[].concat(...r.map(s=>this.featuresRtree_.getInExtent(s)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(t,e){let i=t[0],r=t[1],s=null,o=[NaN,NaN],a=1/0,l=[-1/0,-1/0,1/0,1/0];return e=e||xi,this.featuresRtree_.forEachInExtent(l,function(h){if(e(h)){let c=h.getGeometry(),u=a;if(a=c instanceof Ve?0:c.closestPointXY(i,r,o,a),a<u){s=h;let f=Math.sqrt(a);l[0]=i-f,l[1]=r-f,l[2]=i+f,l[3]=r+f}}}),s}getExtent(t){return this.featuresRtree_?.getExtent(t)??null}getFeatureById(t){let e=this.idIndex_[t.toString()];return e!==void 0?e:null}getFeatureByUid(t){let e=this.uidIndex_[t];return e!==void 0?e:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(t){let e=t.target,i=Y(e),r=e.getGeometry();if(!r)i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[i]=e);else{let o=r.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}let s=e.getId();if(s!==void 0){let o=s.toString();this.idIndex_[o]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[o]=e)}else this.removeFromIdIndex_(e),this.uidIndex_[i]=e;this.changed(),this.dispatchEvent(new ui(Ee.CHANGEFEATURE,e))}hasFeature(t){let e=t.getId();return e!==void 0?e in this.idIndex_:Y(t)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&ge(this.nullGeometryFeatures_):this.featuresCollection_?this.featuresCollection_.getLength()===0:!0}loadFeatures(t,e,i){let r=this.loadedExtentsRtree_,s=this.strategy_(t,e,i);for(let o=0,a=s.length;o<a;++o){let l=s[o];if(!r.forEachInExtent(l,function(c){return wi(c.extent,l)})){this.loading=Number(this.loading)+1,this.dispatchEvent(new ui(Ee.FEATURESLOADSTART));let c=g=>{this.loading=Number(this.loading)-1,this.dispatchEvent(new ui(Ee.FEATURESLOADEND,void 0,g))},u=()=>{this.changed(),this.loading=Number(this.loading)-1,this.dispatchEvent(new ui(Ee.FEATURESLOADERROR))},f=!1,d=this.loader_.call(this,l,e,i,g=>f||c(g),()=>f||u());d instanceof Promise?(f=!0,d.then(g=>{this.addFeatures(g),c(g)}).catch(u)):this.loader_.length<4&&(this.loading=!1),r.insert(l,{extent:l.slice()})}}}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(t){let e=this.loadedExtentsRtree_,i=e.forEachInExtent(t,function(r){if(Ri(r.extent,t))return r});i&&e.remove(i)}removeFeatures(t){let e=!1;for(let i=0,r=t.length;i<r;++i)e=this.removeFeatureInternal(t[i])||e;e&&this.changed()}removeFeature(t){if(!t)return;this.removeFeatureInternal(t)&&this.changed()}removeFeatureInternal(t){let e=Y(t);if(!(e in this.uidIndex_))return!1;e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.featureChangeKeys_[e]?.forEach(q),delete this.featureChangeKeys_[e];let r=t.getId();if(r!==void 0){let s=r.toString(),o=this.idIndex_[s];o===t?delete this.idIndex_[s]:Array.isArray(o)&&(o.splice(o.indexOf(t),1),o.length===1&&(this.idIndex_[s]=o[0]))}return delete this.uidIndex_[e],this.hasListener(Ee.REMOVEFEATURE)&&this.dispatchEvent(new ui(Ee.REMOVEFEATURE,t)),!0}removeFromIdIndex_(t){for(let e in this.idIndex_)if(this.idIndex_[e]===t){delete this.idIndex_[e];break}}setLoader(t){this.loader_=t}setUrl(t){K(this.format_,"`format` must be set when `url` is set"),this.url_=t,this.setLoader(tu(t,this.format_))}setOverlaps(t){this.overlaps_=t,this.changed()}},to=lu;So();ft();Ti();Ct();H();Xt();Tr();ft();Bs();H();kl();rn();Di();var eo={BEGIN_GEOMETRY:0,BEGIN_PATH:1,CIRCLE:2,CLOSE_PATH:3,CUSTOM:4,DRAW_CHARS:5,DRAW_IMAGE:6,END_GEOMETRY:7,FILL:8,MOVE_TO_LINE_TO:9,SET_FILL_STYLE:10,SET_STROKE_STYLE:11,STROKE:12},io=[eo.FILL],fi=[eo.STROKE],Wi=[eo.BEGIN_PATH],hu=[eo.CLOSE_PATH],U=eo;var cu=class extends Ga{constructor(t,e,i,r){super(),this.tolerance=t,this.maxExtent=e,this.pixelRatio=r,this.maxLineWidth=0,this.resolution=i,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_=null,this.bufferedMaxExtent_=null,this.instructions=[],this.coordinates=[],this.tmpCoordinate_=[],this.hitDetectionInstructions=[],this.state={}}applyPixelRatio(t){let e=this.pixelRatio;return e==1?t:t.map(function(i){return i*e})}appendFlatPointCoordinates(t,e){let i=this.getBufferedMaxExtent(),r=this.tmpCoordinate_,s=this.coordinates,o=s.length;for(let a=0,l=t.length;a<l;a+=e)r[0]=t[a],r[1]=t[a+1],ze(i,r)&&(s[o++]=r[0],s[o++]=r[1]);return o}appendFlatLineCoordinates(t,e,i,r,s,o){let a=this.coordinates,l=a.length,h=this.getBufferedMaxExtent();o&&(e+=r);let c=t[e],u=t[e+1],f=this.tmpCoordinate_,d=!0,g,p,m;for(g=e+r;g<i;g+=r)f[0]=t[g],f[1]=t[g+1],m=Io(h,f),m!==p?(d&&(a[l++]=c,a[l++]=u,d=!1),a[l++]=f[0],a[l++]=f[1]):m===Tt.INTERSECTING?(a[l++]=f[0],a[l++]=f[1],d=!1):d=!0,c=f[0],u=f[1],p=m;return(s&&d||g===e+r)&&(a[l++]=c,a[l++]=u),l}drawCustomCoordinates_(t,e,i,r,s){for(let o=0,a=i.length;o<a;++o){let l=i[o],h=this.appendFlatLineCoordinates(t,e,l,r,!1,!1);s.push(h),e=l}return e}drawCustom(t,e,i,r,s){this.beginGeometry(t,e,s);let o=t.getType(),a=t.getStride(),l=this.coordinates.length,h,c,u,f,d;switch(o){case"MultiPolygon":h=t.getOrientedFlatCoordinates(),f=[];let g=t.getEndss();d=0;for(let p=0,m=g.length;p<m;++p){let y=[];d=this.drawCustomCoordinates_(h,d,g[p],a,y),f.push(y)}this.instructions.push([U.CUSTOM,l,f,t,i,gs,s]),this.hitDetectionInstructions.push([U.CUSTOM,l,f,t,r||i,gs,s]);break;case"Polygon":case"MultiLineString":u=[],h=o=="Polygon"?t.getOrientedFlatCoordinates():t.getFlatCoordinates(),d=this.drawCustomCoordinates_(h,0,t.getEnds(),a,u),this.instructions.push([U.CUSTOM,l,u,t,i,nn,s]),this.hitDetectionInstructions.push([U.CUSTOM,l,u,t,r||i,nn,s]);break;case"LineString":case"Circle":h=t.getFlatCoordinates(),c=this.appendFlatLineCoordinates(h,0,h.length,a,!1,!1),this.instructions.push([U.CUSTOM,l,c,t,i,Me,s]),this.hitDetectionInstructions.push([U.CUSTOM,l,c,t,r||i,Me,s]);break;case"MultiPoint":h=t.getFlatCoordinates(),c=this.appendFlatPointCoordinates(h,a),c>l&&(this.instructions.push([U.CUSTOM,l,c,t,i,Me,s]),this.hitDetectionInstructions.push([U.CUSTOM,l,c,t,r||i,Me,s]));break;case"Point":h=t.getFlatCoordinates(),this.coordinates.push(h[0],h[1]),c=this.coordinates.length,this.instructions.push([U.CUSTOM,l,c,t,i,void 0,s]),this.hitDetectionInstructions.push([U.CUSTOM,l,c,t,r||i,void 0,s]);break;default:}this.endGeometry(e)}beginGeometry(t,e,i){this.beginGeometryInstruction1_=[U.BEGIN_GEOMETRY,e,0,t,i],this.instructions.push(this.beginGeometryInstruction1_),this.beginGeometryInstruction2_=[U.BEGIN_GEOMETRY,e,0,t,i],this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)}finish(){return{instructions:this.instructions,hitDetectionInstructions:this.hitDetectionInstructions,coordinates:this.coordinates}}reverseHitDetectionInstructions(){let t=this.hitDetectionInstructions;t.reverse();let e,i=t.length,r,s,o=-1;for(e=0;e<i;++e)r=t[e],s=r[0],s==U.END_GEOMETRY?o=e:s==U.BEGIN_GEOMETRY&&(r[2]=e,zf(this.hitDetectionInstructions,o,e),o=-1)}fillStyleToState(t,e={}){if(t){let i=t.getColor();e.fillPatternScale=i&&typeof i=="object"&&"src"in i?this.pixelRatio:1,e.fillStyle=he(i||At)??void 0}else e.fillStyle=void 0;return e}strokeStyleToState(t,e={}){if(t){let i=t.getColor();e.strokeStyle=he(i||$t);let r=t.getLineCap();e.lineCap=r!==void 0?r:hi;let s=t.getLineDash();e.lineDash=s?s.slice():ce;let o=t.getLineDashOffset();e.lineDashOffset=o||ue;let a=t.getLineJoin();e.lineJoin=a!==void 0?a:ci;let l=t.getWidth();e.lineWidth=l!==void 0?l:Fi;let h=t.getMiterLimit();e.miterLimit=h!==void 0?h:Oi;let c=t.getOffset();e.strokeOffset=c??gm,e.lineWidth>this.maxLineWidth&&(this.maxLineWidth=e.lineWidth,this.bufferedMaxExtent_=null)}else e.strokeStyle=void 0,e.lineCap=void 0,e.lineDash=null,e.lineDashOffset=void 0,e.lineJoin=void 0,e.lineWidth=void 0,e.miterLimit=void 0,e.strokeOffset=void 0;return e}setFillStrokeStyle(t,e){let i=this.state;this.fillStyleToState(t,i),this.strokeStyleToState(e,i)}createFill(t){let e=t.fillStyle,i=[U.SET_FILL_STYLE,e];return typeof e!="string"&&i.push(t.fillPatternScale),i}applyStroke(t){this.instructions.push(this.createStroke(t))}createStroke(t){return[U.SET_STROKE_STYLE,t.strokeStyle,t.lineWidth*this.pixelRatio,t.lineCap,t.lineJoin,t.miterLimit,t.lineDash?this.applyPixelRatio(t.lineDash):null,t.lineDashOffset*this.pixelRatio]}updateFillStyle(t,e){let i=t.fillStyle;(i!==void 0&&typeof i!="string"||t.currentFillStyle!=i)&&(this.instructions.push(e.call(this,t)),t.currentFillStyle=i)}updateStrokeStyle(t,e){let i=t.strokeStyle,r=t.lineCap,s=t.lineDash,o=t.lineDashOffset,a=t.lineJoin,l=t.lineWidth,h=t.miterLimit,c=t.strokeOffset;(t.currentStrokeStyle!=i||t.currentLineCap!=r||s!=t.currentLineDash&&!Kt(t.currentLineDash,s)||t.currentLineDashOffset!=o||t.currentLineJoin!=a||t.currentLineWidth!=l||t.currentMiterLimit!=h||t.currentStrokeOffset!=c)&&(e.call(this,t),t.currentStrokeStyle=i,t.currentLineCap=r,t.currentLineDash=s,t.currentLineDashOffset=o,t.currentLineJoin=a,t.currentLineWidth=l,t.currentMiterLimit=h,t.currentStrokeOffset=c)}endGeometry(t){this.beginGeometryInstruction1_[2]=this.instructions.length,this.beginGeometryInstruction1_=null,this.beginGeometryInstruction2_[2]=this.hitDetectionInstructions.length,this.beginGeometryInstruction2_=null;let e=[U.END_GEOMETRY,t];this.instructions.push(e),this.hitDetectionInstructions.push(e)}getBufferedMaxExtent(){if(!this.bufferedMaxExtent_&&(this.bufferedMaxExtent_=vo(this.maxExtent),this.maxLineWidth>0)){let t=this.resolution*(this.maxLineWidth+1)/2;Zi(this.bufferedMaxExtent_,t,this.bufferedMaxExtent_)}return this.bufferedMaxExtent_}},di=cu;H();var uu=class extends di{constructor(t,e,i,r){super(t,e,i,r),this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.anchorX_=void 0,this.anchorY_=void 0,this.height_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.scale_=void 0,this.width_=void 0,this.declutterMode_=void 0,this.declutterImageWithText_=void 0}drawPoint(t,e,i){if(!this.image_||this.maxExtent&&!ze(this.maxExtent,t.getFlatCoordinates()))return;this.beginGeometry(t,e,i);let r=t.getFlatCoordinates(),s=t.getStride(),o=this.coordinates.length,a=this.appendFlatPointCoordinates(r,s);this.instructions.push([U.DRAW_IMAGE,o,a,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([U.DRAW_IMAGE,o,a,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}drawMultiPoint(t,e,i){if(!this.image_)return;this.beginGeometry(t,e,i);let r=t.getFlatCoordinates(),s=[];for(let l=0,h=r.length;l<h;l+=t.getStride())(!this.maxExtent||ze(this.maxExtent,r.slice(l,l+2)))&&s.push(r[l],r[l+1]);let o=this.coordinates.length,a=this.appendFlatPointCoordinates(s,2);this.instructions.push([U.DRAW_IMAGE,o,a,this.image_,this.anchorX_*this.imagePixelRatio_,this.anchorY_*this.imagePixelRatio_,Math.ceil(this.height_*this.imagePixelRatio_),this.opacity_,this.originX_*this.imagePixelRatio_,this.originY_*this.imagePixelRatio_,this.rotateWithView_,this.rotation_,[this.scale_[0]*this.pixelRatio/this.imagePixelRatio_,this.scale_[1]*this.pixelRatio/this.imagePixelRatio_],Math.ceil(this.width_*this.imagePixelRatio_),this.declutterMode_,this.declutterImageWithText_]),this.hitDetectionInstructions.push([U.DRAW_IMAGE,o,a,this.hitDetectionImage_,this.anchorX_,this.anchorY_,this.height_,1,this.originX_,this.originY_,this.rotateWithView_,this.rotation_,this.scale_,this.width_,this.declutterMode_,this.declutterImageWithText_]),this.endGeometry(e)}finish(){return this.reverseHitDetectionInstructions(),this.anchorX_=void 0,this.anchorY_=void 0,this.hitDetectionImage_=null,this.image_=null,this.imagePixelRatio_=void 0,this.height_=void 0,this.scale_=void 0,this.opacity_=void 0,this.originX_=void 0,this.originY_=void 0,this.rotateWithView_=void 0,this.rotation_=void 0,this.width_=void 0,super.finish()}setImageStyle(t,e){let i=t.getAnchor(),r=t.getSize(),s=t.getOrigin();this.imagePixelRatio_=t.getPixelRatio(this.pixelRatio),this.anchorX_=i[0],this.anchorY_=i[1],this.hitDetectionImage_=t.getHitDetectionImage(),this.image_=t.getImage(this.pixelRatio),this.height_=r[1],this.opacity_=t.getOpacity(),this.originX_=s[0],this.originY_=s[1],this.rotateWithView_=t.getRotateWithView(),this.rotation_=t.getRotation(),this.scale_=t.getScaleArray(),this.width_=r[0],this.declutterMode_=t.getDeclutterMode(),this.declutterImageWithText_=e}},Hm=uu;Di();var fu=class extends di{constructor(t,e,i,r){super(t,e,i,r)}drawFlatCoordinates_(t,e,i,r,s){let o=this.coordinates.length,a=this.appendFlatLineCoordinates(t,e,i,r,!1,!1);return this.instructions.push([U.MOVE_TO_LINE_TO,o,a,s*this.pixelRatio]),this.hitDetectionInstructions.push([U.MOVE_TO_LINE_TO,o,a,s]),i}drawLineString(t,e,i){let r=this.state,s=r.strokeStyle,o=r.lineWidth,a=r.strokeOffset;if(s===void 0||o===void 0)return;this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(t,e,i),this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,$t,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,ce,ue],Wi);let l=t.getFlatCoordinates(),h=t.getStride();this.drawFlatCoordinates_(l,0,l.length,h,a),this.hitDetectionInstructions.push(fi),this.endGeometry(e)}drawMultiLineString(t,e,i){let r=this.state,s=r.strokeStyle,o=r.lineWidth,a=r.strokeOffset;if(s===void 0||o===void 0)return;this.updateStrokeStyle(r,this.applyStroke),this.beginGeometry(t,e,i),this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,$t,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,ce,ue],Wi);let l=t.getEnds(),h=t.getFlatCoordinates(),c=t.getStride(),u=0;for(let f=0,d=l.length;f<d;++f)u=this.drawFlatCoordinates_(h,u,l[f],c,a);this.hitDetectionInstructions.push(fi),this.endGeometry(e)}finish(){let t=this.state;return t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&this.instructions.push(fi),this.reverseHitDetectionInstructions(),this.state=null,super.finish()}applyStroke(t){t.lastStroke!=null&&t.lastStroke!=this.coordinates.length&&(this.instructions.push(fi),t.lastStroke=this.coordinates.length),t.lastStroke=0,super.applyStroke(t),this.instructions.push(Wi)}},qm=fu;on();Di();var du=class extends di{constructor(t,e,i,r){super(t,e,i,r)}drawFlatCoordinatess_(t,e,i,r,s){let o=this.state,a=o.fillStyle!==void 0,l=o.strokeStyle!==void 0,h=i.length;this.instructions.push(Wi),this.hitDetectionInstructions.push(Wi);for(let c=0;c<h;++c){let u=i[c],f=this.coordinates.length,d=this.appendFlatLineCoordinates(t,e,u,r,!0,!l);this.instructions.push([U.MOVE_TO_LINE_TO,f,d,s*this.pixelRatio,!0]),this.hitDetectionInstructions.push([U.MOVE_TO_LINE_TO,f,d,s,!0]),l&&(this.instructions.push(hu),this.hitDetectionInstructions.push(hu)),e=u}return a&&(this.instructions.push(io),this.hitDetectionInstructions.push(io)),l&&(this.instructions.push(fi),this.hitDetectionInstructions.push(fi)),e}drawCircle(t,e,i){let r=this.state,s=r.fillStyle,o=r.strokeStyle,a=r.strokeOffset;if(s===void 0&&o===void 0||this.handleStrokeOffset_(()=>this.drawCircle(t,e,i)))return;this.setFillStrokeStyles_(),this.beginGeometry(t,e,i),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_FILL_STYLE,At]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,$t,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,ce,ue]);let l=t.getFlatCoordinates(),h=t.getStride(),c=this.coordinates.length;this.appendFlatLineCoordinates(l,0,l.length,h,!1,!1);let u=[U.CIRCLE,c,a];this.instructions.push(Wi,u),this.hitDetectionInstructions.push(Wi,u),r.fillStyle!==void 0&&(this.instructions.push(io),this.hitDetectionInstructions.push(io)),r.strokeStyle!==void 0&&(this.instructions.push(fi),this.hitDetectionInstructions.push(fi)),this.endGeometry(e)}drawPolygon(t,e,i){let r=this.state,s=r.fillStyle,o=r.strokeStyle,a=r.strokeOffset;if(s===void 0&&o===void 0||this.handleStrokeOffset_(()=>this.drawPolygon(t,e,i)))return;this.setFillStrokeStyles_(),this.beginGeometry(t,e,i),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_FILL_STYLE,At]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,$t,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,ce,ue]);let l=t.getEnds(),h=t.getOrientedFlatCoordinates(),c=t.getStride();this.drawFlatCoordinatess_(h,0,l,c,a),this.endGeometry(e)}drawMultiPolygon(t,e,i){let r=this.state,s=r.fillStyle,o=r.strokeStyle,a=r.strokeOffset;if(s===void 0&&o===void 0||this.handleStrokeOffset_(()=>this.drawMultiPolygon(t,e,i)))return;this.setFillStrokeStyles_(),this.beginGeometry(t,e,i),r.fillStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_FILL_STYLE,At]),r.strokeStyle!==void 0&&this.hitDetectionInstructions.push([U.SET_STROKE_STYLE,$t,r.lineWidth,r.lineCap,r.lineJoin,r.miterLimit,ce,ue]);let l=t.getEndss(),h=t.getOrientedFlatCoordinates(),c=t.getStride(),u=0;for(let f=0,d=l.length;f<d;++f)u=this.drawFlatCoordinatess_(h,u,l[f],c,a);this.endGeometry(e)}finish(){this.reverseHitDetectionInstructions(),this.state=null;let t=this.tolerance;if(t!==0){let e=this.coordinates;for(let i=0,r=e.length;i<r;++i)e[i]=sn(e[i],t)}return super.finish()}setFillStrokeStyles_(){let t=this.state;this.updateFillStyle(t,this.createFill),this.updateStrokeStyle(t,this.applyStroke)}handleStrokeOffset_(t){let e=this.state,i=e.fillStyle,r=e.strokeStyle,s=e.strokeOffset;return Math.abs(s)>0&&i!==void 0&&r!==void 0?(e.strokeStyle=void 0,e.strokeOffset=0,t(),e.fillStyle=void 0,e.strokeStyle=r,e.strokeOffset=s,t(),e.fillStyle=i,!0):!1}},gu=du;Bs();H();dt();function $m(n,t,e,i,r){let s=[],o=e,a=0,l=t.slice(e,2);for(;a<n&&o+r<i;){let[h,c]=l.slice(-2),u=t[o+r],f=t[o+r+1],d=Math.sqrt((u-h)*(u-h)+(f-c)*(f-c));if(a+=d,a>=n){let g=(n-a+d)/d,p=zt(h,u,g),m=zt(c,f,g);l.push(p,m),s.push(l),l=[p,m],a==n&&(o+=r),a=0}else if(a<n)l.push(t[o+r],t[o+r+1]),o+=r;else{let g=d-a,p=zt(h,u,g/d),m=zt(c,f,g/d);l.push(p,m),s.push(l),l=[p,m],a=0,o+=r}}return a>0&&s.push(l),s}function Jm(n,t,e,i,r){let s=e,o=e,a=0,l=0,h=e,c,u,f,d,g,p,m,y,x,C;for(u=e;u<i;u+=r){let _=t[u],E=t[u+1];g!==void 0&&(x=_-g,C=E-p,d=Math.sqrt(x*x+C*C),m!==void 0&&(l+=f,c=Math.acos((m*x+y*C)/(f*d)),c>n&&(l>a&&(a=l,s=h,o=u),l=0,h=u-r)),f=d,m=x,y=C),g=_,p=E}return l+=d,l>a?[h,u]:[s,o]}ht();Di();var no={left:0,center:.5,right:1,top:0,middle:.5,hanging:.2,alphabetic:.8,ideographic:.8,bottom:1},mu=class extends di{constructor(t,e,i,r){super(t,e,i,r),this.labels_=null,this.text_="",this.textOffsetX_=0,this.textOffsetY_=0,this.textRotateWithView_=void 0,this.textKeepUpright_=void 0,this.textRotation_=0,this.textFillState_=null,this.fillStates={},this.fillStates[At]={fillStyle:At},this.textStrokeState_=null,this.strokeStates={},this.textState_={},this.textStates={},this.textKey_="",this.fillKey_="",this.strokeKey_="",this.declutterMode_=void 0,this.declutterImageWithText_=void 0}finish(){let t=super.finish();return t.textStates=this.textStates,t.fillStates=this.fillStates,t.strokeStates=this.strokeStates,t}drawText(t,e,i){let r=this.textFillState_,s=this.textStrokeState_,o=this.textState_;if(this.text_===""||!o||!r&&!s)return;let a=this.coordinates,l=a.length,h=t.getType(),c=null,u=t.getStride();if(o.placement==="line"&&(h=="LineString"||h=="MultiLineString"||h=="Polygon"||h=="MultiPolygon")){if(!pt(this.maxExtent,t.getExtent()))return;let f;if(c=t.getFlatCoordinates(),h=="LineString")f=[c.length];else if(h=="MultiLineString")f=t.getEnds();else if(h=="Polygon")f=t.getEnds().slice(0,1);else if(h=="MultiPolygon"){let m=t.getEndss();f=[];for(let y=0,x=m.length;y<x;++y)f.push(m[y][0])}this.beginGeometry(t,e,i);let d=o.repeat,g=d?void 0:o.textAlign,p=0;for(let m=0,y=f.length;m<y;++m){let x;d?x=$m(d*this.resolution,c,p,f[m],u):x=[c.slice(p,f[m])];for(let C=0,_=x.length;C<_;++C){let E=x[C],I=0,A=E.length;if(g==null){let S=Jm(o.maxAngle,E,0,E.length,2);I=S[0],A=S[1]}for(let S=I;S<A;S+=u)a.push(E[S],E[S+1]);let T=a.length;p=f[m],this.drawChars_(l,T),l=T}}this.endGeometry(e)}else{let f=o.overflow?null:[];switch(h){case"Point":case"MultiPoint":c=t.getFlatCoordinates();break;case"LineString":c=t.getFlatMidpoint();break;case"Circle":c=t.getCenter();break;case"MultiLineString":c=t.getFlatMidpoints(),u=2;break;case"Polygon":c=t.getFlatInteriorPoint(),o.overflow||f.push(c[2]/this.resolution),u=3;break;case"MultiPolygon":let _=t.getFlatInteriorPoints();c=[];for(let E=0,I=_.length;E<I;E+=3)o.overflow||f.push(_[E+2]/this.resolution),c.push(_[E],_[E+1]);if(c.length===0)return;u=2;break;default:}let d=this.appendFlatPointCoordinates(c,u);if(d===l)return;if(f&&(d-l)/2!==c.length/u){let _=l/2;f=f.filter((E,I)=>{let A=a[(_+I)*2]===c[I*u]&&a[(_+I)*2+1]===c[I*u+1];return A||--_,A})}this.saveTextStates_();let g=o.backgroundFill?this.createFill(this.fillStyleToState(o.backgroundFill)):null,p=o.backgroundStroke?this.createStroke(this.strokeStyleToState(o.backgroundStroke)):null;this.beginGeometry(t,e,i);let m=o.padding;if(m!=bi&&(o.scale[0]<0||o.scale[1]<0)){let _=o.padding[0],E=o.padding[1],I=o.padding[2],A=o.padding[3];o.scale[0]<0&&(E=-E,A=-A),o.scale[1]<0&&(_=-_,I=-I),m=[_,E,I,A]}let y=this.pixelRatio;this.instructions.push([U.DRAW_IMAGE,l,d,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[1,1],NaN,this.declutterMode_,this.declutterImageWithText_,m==bi?bi:m.map(function(_){return _*y}),g,p,this.text_,this.textKey_,this.strokeKey_,this.fillKey_,this.textOffsetX_,this.textOffsetY_,f]);let x=1/y,C=g?g.slice(0):null;C&&(C[1]=At),this.hitDetectionInstructions.push([U.DRAW_IMAGE,l,d,null,NaN,NaN,NaN,1,0,0,this.textRotateWithView_,this.textRotation_,[x,x],NaN,this.declutterMode_,this.declutterImageWithText_,m,C,p,this.text_,this.textKey_,this.strokeKey_,this.fillKey_?At:this.fillKey_,this.textOffsetX_,this.textOffsetY_,f]),this.endGeometry(e)}}saveTextStates_(){let t=this.textStrokeState_,e=this.textState_,i=this.textFillState_,r=this.strokeKey_;t&&(r in this.strokeStates||(this.strokeStates[r]={strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineDashOffset:t.lineDashOffset,lineWidth:t.lineWidth,lineJoin:t.lineJoin,miterLimit:t.miterLimit,lineDash:t.lineDash}));let s=this.textKey_;s in this.textStates||(this.textStates[s]={font:e.font,textAlign:e.textAlign||pn,justify:e.justify,textBaseline:e.textBaseline||Un,scale:e.scale});let o=this.fillKey_;i&&(o in this.fillStates||(this.fillStates[o]={fillStyle:i.fillStyle}))}drawChars_(t,e){let i=this.textStrokeState_,r=this.textState_,s=this.strokeKey_,o=this.textKey_,a=this.fillKey_;this.saveTextStates_();let l=this.pixelRatio,h=no[r.textBaseline],c=this.textOffsetY_*l,u=this.text_,f=i?i.lineWidth*Math.abs(r.scale[0])/2:0;this.instructions.push([U.DRAW_CHARS,t,e,h,r.overflow,a,r.maxAngle,l,c,s,f*l,u,o,1,this.declutterMode_,this.textKeepUpright_]),this.hitDetectionInstructions.push([U.DRAW_CHARS,t,e,h,r.overflow,a&&At,r.maxAngle,l,c,s,f*l,u,o,1/l,this.declutterMode_,this.textKeepUpright_])}setTextStyle(t,e){let i,r,s;if(!t)this.text_="";else{let o=t.getFill();o?(r=this.textFillState_,r||(r={},this.textFillState_=r),r.fillStyle=he(o.getColor()||At)):(r=null,this.textFillState_=r);let a=t.getStroke();if(!a)s=null,this.textStrokeState_=s;else{s=this.textStrokeState_,s||(s={},this.textStrokeState_=s);let p=a.getLineDash(),m=a.getLineDashOffset(),y=a.getWidth(),x=a.getMiterLimit();s.lineCap=a.getLineCap()||hi,s.lineDash=p?p.slice():ce,s.lineDashOffset=m===void 0?ue:m,s.lineJoin=a.getLineJoin()||ci,s.lineWidth=y===void 0?Fi:y,s.miterLimit=x===void 0?Oi:x,s.strokeStyle=he(a.getColor()||$t)}i=this.textState_;let l=t.getFont()||Ca;mm(l);let h=t.getScaleArray();i.overflow=t.getOverflow(),i.font=l,i.maxAngle=t.getMaxAngle(),i.placement=t.getPlacement(),i.textAlign=t.getTextAlign(),i.repeat=t.getRepeat(),i.justify=t.getJustify(),i.textBaseline=t.getTextBaseline()||Un,i.backgroundFill=t.getBackgroundFill(),i.backgroundStroke=t.getBackgroundStroke(),i.padding=t.getPadding()||bi,i.scale=h===void 0?[1,1]:h;let c=t.getOffsetX(),u=t.getOffsetY(),f=t.getRotateWithView(),d=t.getKeepUpright(),g=t.getRotation();this.text_=t.getText()||"",this.textOffsetX_=c===void 0?0:c,this.textOffsetY_=u===void 0?0:u,this.textRotateWithView_=f===void 0?!1:f,this.textKeepUpright_=d===void 0?!0:d,this.textRotation_=g===void 0?0:g,this.strokeKey_=s?(typeof s.strokeStyle=="string"?s.strokeStyle:Y(s.strokeStyle))+s.lineCap+s.lineDashOffset+"|"+s.lineWidth+s.lineJoin+s.miterLimit+"["+s.lineDash.join()+"]":"",this.textKey_=i.font+i.scale+(i.textAlign||"?")+(i.repeat||"?")+(i.justify||"?")+(i.textBaseline||"?"),this.fillKey_=r&&r.fillStyle?typeof r.fillStyle=="string"?r.fillStyle:"|"+Y(r.fillStyle):""}this.declutterMode_=t.getDeclutterMode(),this.declutterImageWithText_=e}},Qm=mu;var k0={Circle:gu,Default:di,Image:Hm,LineString:qm,Polygon:gu,Text:Qm},pu=class{constructor(t,e,i,r){this.tolerance_=t,this.maxExtent_=e,this.pixelRatio_=r,this.resolution_=i,this.buildersByZIndex_={}}finish(){let t={};for(let e in this.buildersByZIndex_){t[e]=t[e]||{};let i=this.buildersByZIndex_[e];for(let r in i){let s=i[r].finish();t[e][r]=s}}return t}getBuilder(t,e){let i=t!==void 0?t.toString():"0",r=this.buildersByZIndex_[i];r===void 0&&(r={},this.buildersByZIndex_[i]=r);let s=r[e];if(s===void 0){let o=k0[e];s=new o(this.tolerance_,this.maxExtent_,this.resolution_,this.pixelRatio_),r[e]=s}return s}},tp=pu;ft();Ct();H();Qi();Re();Pe();ft();H();dt();Qi();function ep(n,t,e,i,r,s,o,a,l,h,c,u,f=!0){let d=n[t],g=n[t+1],p=0,m=0,y=0,x=0;function C(){p=d,m=g,t+=i,d=n[t],g=n[t+1],x+=y,y=Math.sqrt((d-p)*(d-p)+(g-m)*(g-m))}do C();while(t<e-i&&x+y<s);let _=y===0?0:(s-x)/y,E=zt(p,d,_),I=zt(m,g,_),A=t-i,T=x,S=s+a*l(h,r,c);for(;t<e-i&&x+y<S;)C();_=y===0?0:(S-x)/y;let v=zt(p,d,_),F=zt(m,g,_),P=!1;if(f)if(u){let M=[E,I,v,F];Yo(M,0,4,2,u,M,M),P=M[0]>M[2]}else P=E>v;let O=Math.PI,N=[],Q=A+i===t;t=A,y=0,x=T,d=n[t],g=n[t+1];let D;if(Q){C(),D=Math.atan2(g-m,d-p),P&&(D+=D>0?-O:O);let M=(v+E)/2,b=(F+I)/2;return N[0]=[M,b,(S-s)/2,D,r],N}r=r.replace(/\n/g," ");for(let M=0,b=r.length;M<b;){C();let X=Math.atan2(g-m,d-p);if(P&&(X+=X>0?-O:O),D!==void 0){let Pt=X-D;if(Pt+=Pt>O?-2*O:Pt<-O?2*O:0,Math.abs(Pt)>o)return null}D=X;let z=M,Z=0;for(;M<b;++M){let Pt=P?b-M-1:M,It=a*l(h,r[Pt],c);if(t+i<e&&x+y<s+Z+It/2)break;Z+=It}if(M===z)continue;let et=P?r.substring(b-z,b-M):r.substring(z,M);_=y===0?0:(s+Z/2-x)/y;let at=zt(p,d,_),L=zt(m,g,_);N.push([at,L,Z/2,X,et]),s+=Z}return N}Qi();Pe();Di();yu();var Fr=gt(),_n=[],Ui=[],ji=[],yn=[];function ip(n){return n[3].declutterBox}var np=new RegExp("[\u0591-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFC\u0800-\u0FFF\uE800-\uEFFF]");function xu(n,t){return t==="start"?t=np.test(n)?"right":"left":t==="end"&&(t=np.test(n)?"left":"right"),no[t]}function N0(n,t,e){return e>0&&n.push(`
`,""),n.push(t,""),n}function G0(n,t,e){return e%2===0&&(n+=t),n}var Eu=class{constructor(t,e,i,r,s){this.overlaps=i,this.pixelRatio=e,this.resolution=t,this.alignAndScaleFill_,this.instructions=r.instructions,this.coordinates=r.coordinates,this.coordinateCache_={},this.renderedTransform_=bt(),this.hitDetectionInstructions=r.hitDetectionInstructions,this.pixelCoordinates_=null,this.viewRotation_=0,this.fillStates=r.fillStates||{},this.strokeStates=r.strokeStates||{},this.textStates=r.textStates||{},this.widths_={},this.labels_={},this.zIndexContext_=s?new Ua:null}getZIndexContext(){return this.zIndexContext_}createLabel(t,e,i,r){let s=t+e+i+r;if(this.labels_[s])return this.labels_[s];let o=r?this.strokeStates[r]:null,a=i?this.fillStates[i]:null,l=this.textStates[e],h=this.pixelRatio,c=[l.scale[0]*h,l.scale[1]*h],u=l.justify?no[l.justify]:xu(Array.isArray(t)?t[0]:t,l.textAlign||pn),f=r&&o.lineWidth?o.lineWidth:0,d=Array.isArray(t)?t:String(t).split(`
`).reduce(N0,[]),{width:g,height:p,widths:m,heights:y,lineWidths:x}=ym(l,d),C=g+f,_=[],E=(C+2)*c[0],I=(p+f)*c[1],A={width:E<0?Math.floor(E):Math.ceil(E),height:I<0?Math.floor(I):Math.ceil(I),contextInstructions:_};(c[0]!=1||c[1]!=1)&&_.push("scale",c),r&&(_.push("strokeStyle",o.strokeStyle),_.push("lineWidth",f),_.push("lineCap",o.lineCap),_.push("lineJoin",o.lineJoin),_.push("miterLimit",o.miterLimit),_.push("setLineDash",[o.lineDash]),_.push("lineDashOffset",o.lineDashOffset)),i&&_.push("fillStyle",a.fillStyle),_.push("textBaseline","middle"),_.push("textAlign","center");let T=.5-u,S=u*C+T*f,v=[],F=[],P=0,O=0,N=0,Q=0,D;for(let M=0,b=d.length;M<b;M+=2){let X=d[M];if(X===`
`){O+=P,P=0,S=u*C+T*f,++Q;continue}let z=d[M+1]||l.font;z!==D&&(r&&v.push("font",z),i&&F.push("font",z),D=z),P=Math.max(P,y[N]);let Z=[X,S+T*m[N]+u*(m[N]-x[Q]),.5*(f+P)+O];S+=m[N],r&&v.push("strokeText",Z),i&&F.push("fillText",Z),++N}return Array.prototype.push.apply(_,v),Array.prototype.push.apply(_,F),this.labels_[s]=A,A}replayTextBackground_(t,e,i,r,s,o,a){t.beginPath(),t.moveTo.apply(t,e),t.lineTo.apply(t,i),t.lineTo.apply(t,r),t.lineTo.apply(t,s),t.lineTo.apply(t,e),o&&(this.alignAndScaleFill_=o[2],t.fillStyle=o[1],this.fill_(t)),a&&(this.setStrokeStyle_(t,a),t.stroke())}calculateImageOrLabelDimensions_(t,e,i,r,s,o,a,l,h,c,u,f,d,g,p,m){a*=f[0],l*=f[1];let y=i-a,x=r-l,C=s+h>t?t-h:s,_=o+c>e?e-c:o,E=g[3]+C*f[0]+g[1],I=g[0]+_*f[1]+g[2],A=y-g[3],T=x-g[0];(p||u!==0)&&(_n[0]=A,yn[0]=A,_n[1]=T,Ui[1]=T,Ui[0]=A+E,ji[0]=Ui[0],ji[1]=T+I,yn[1]=ji[1]);let S;return u!==0?(S=Wt(bt(),i,r,1,1,u,-i,-r),_t(S,_n),_t(S,Ui),_t(S,ji),_t(S,yn),me(Math.min(_n[0],Ui[0],ji[0],yn[0]),Math.min(_n[1],Ui[1],ji[1],yn[1]),Math.max(_n[0],Ui[0],ji[0],yn[0]),Math.max(_n[1],Ui[1],ji[1],yn[1]),Fr)):me(Math.min(A,A+E),Math.min(T,T+I),Math.max(A,A+E),Math.max(T,T+I),Fr),d&&(y=Math.round(y),x=Math.round(x)),{drawImageX:y,drawImageY:x,drawImageW:C,drawImageH:_,originX:h,originY:c,declutterBox:{minX:Fr[0],minY:Fr[1],maxX:Fr[2],maxY:Fr[3],value:m},canvasTransform:S,scale:f}}replayImageOrLabel_(t,e,i,r,s,o,a){let l=!!(o||a),h=r.declutterBox,c=a?a[2]*r.scale[0]/2:0;return h.minX-c<=e[0]&&h.maxX+c>=0&&h.minY-c<=e[1]&&h.maxY+c>=0&&(l&&this.replayTextBackground_(t,_n,Ui,ji,yn,o,a),xm(t,r.canvasTransform,s,i,r.originX,r.originY,r.drawImageW,r.drawImageH,r.drawImageX,r.drawImageY,r.scale)),!0}fill_(t){let e=this.alignAndScaleFill_;if(e){let i=_t(this.renderedTransform_,[0,0]),r=512*this.pixelRatio;t.save(),t.translate(i[0]%r,i[1]%r),e!==1&&t.scale(e,e)}t.fill(),e&&t.restore()}setStrokeStyle_(t,e){t.strokeStyle=e[1],e[1]&&(t.lineWidth=e[2],t.lineCap=e[3],t.lineJoin=e[4],t.miterLimit=e[5],t.lineDashOffset=e[7],t.setLineDash(e[6]))}drawLabelWithPointPlacement_(t,e,i,r){let s=this.textStates[e],o=this.createLabel(t,e,r,i),a=this.strokeStates[i],l=this.pixelRatio,h=xu(Array.isArray(t)?t[0]:t,s.textAlign||pn),c=no[s.textBaseline||Un],u=a&&a.lineWidth?a.lineWidth:0,f=o.width/l-2*s.scale[0],d=h*f+2*(.5-h)*u,g=c*o.height/l+2*(.5-c)*u;return{label:o,anchorX:d,anchorY:g}}execute_(t,e,i,r,s,o,a,l){let h=this.zIndexContext_,c;this.pixelCoordinates_&&Kt(i,this.renderedTransform_)?c=this.pixelCoordinates_:(this.pixelCoordinates_||(this.pixelCoordinates_=[]),c=ae(this.coordinates,0,this.coordinates.length,2,i,this.pixelCoordinates_),Gd(this.renderedTransform_,i));let u=0,f=r.length,d=0,g,p=[],m,y,x,C,_,E,I,A,T,S,v,F,P,O=0,N=0,Q=this.coordinateCache_,D=this.viewRotation_,M=Math.round(Math.atan2(-i[1],i[0])*1e12)/1e12,b={context:t,pixelRatio:this.pixelRatio,resolution:this.resolution,rotation:D},X=this.instructions!=r||this.overlaps?0:200,z,Z,et,at;for(;u<f;){let L=r[u];switch(L[0]){case U.BEGIN_GEOMETRY:z=L[1],at=L[3],z.getGeometry()?a!==void 0&&!pt(a,at.getExtent())?u=L[2]+1:++u:u=L[2],h&&(h.zIndex=L[4]);break;case U.BEGIN_PATH:O>X&&(this.fill_(t),O=0),N>X&&(t.stroke(),N=0),!O&&!N&&(t.beginPath(),_=NaN,E=NaN),++u;break;case U.CIRCLE:d=L[1],x=L[2]??0;let It=c[d],Dt=c[d+1],fe=c[d+2]-x,wn=c[d+3]-x,de=fe-It,co=wn-Dt,Yr=Math.sqrt(de*de+co*co);t.moveTo(It+Yr,Dt),t.arc(It,Dt,Yr,0,2*Math.PI,!0),++u;break;case U.CLOSE_PATH:t.closePath(),++u;break;case U.CUSTOM:d=L[1],g=L[2];let fl=L[3],He=L[4],Fe=L[5];b.geometry=fl,b.feature=z,u in Q||(Q[u]=[]);let qe=Q[u];Fe?Fe(c,d,g,2,qe):(qe[0]=c[d],qe[1]=c[d+1],qe.length=2),h&&(h.zIndex=L[6]),He(qe,b),++u;break;case U.DRAW_IMAGE:d=L[1],g=L[2],T=L[3],m=L[4],y=L[5];let Yi=L[6],uo=L[7],Br=L[8],Vn=L[9],fo=L[10],Yt=L[11],E_=L[12],go=L[13];C=L[14]||"declutter";let Kr=L[15];if(!T&&L.length>=20){S=L[19],v=L[20],F=L[21],P=L[22];let St=this.drawLabelWithPointPlacement_(S,v,F,P);T=St.label,L[3]=T;let Rn=L[23];m=(St.anchorX-Rn)*this.pixelRatio,L[4]=m;let we=L[24];y=(St.anchorY-we)*this.pixelRatio,L[5]=y,Yi=T.height,L[6]=Yi,go=T.width,L[13]=go}let dl;L.length>25&&(dl=L[25]);let gl,mo,po;L.length>17?(gl=L[16],mo=L[17],po=L[18]):(gl=bi,mo=null,po=null),fo&&M?Yt+=D:!fo&&!M&&(Yt-=D);let C_=0;for(;d<g;d+=2){if(dl&&dl[C_++]<go/this.pixelRatio)continue;let St=this.calculateImageOrLabelDimensions_(T.width,T.height,c[d],c[d+1],go,Yi,m,y,Br,Vn,Yt,E_,s,gl,!!mo||!!po,z),Rn=[t,e,T,St,uo,mo,po];if(l){let we,$e,Se;if(Kr){let yt=g-d;if(!Kr[yt]){Kr[yt]={args:Rn,declutterMode:C};continue}let Qt=Kr[yt];we=Qt.args,$e=Qt.declutterMode,delete Kr[yt],Se=ip(we)}let pi,_i;if(we&&($e!=="declutter"||!l.collides(Se))&&(pi=!0),(C!=="declutter"||!l.collides(St.declutterBox))&&(_i=!0),$e==="declutter"&&C==="declutter"){let yt=pi&&_i;pi=yt,_i=yt}pi&&($e!=="none"&&l.insert(Se),this.replayImageOrLabel_.apply(this,we)),_i&&(C!=="none"&&l.insert(St.declutterBox),this.replayImageOrLabel_.apply(this,Rn))}else this.replayImageOrLabel_.apply(this,Rn)}++u;break;case U.DRAW_CHARS:let Af=L[1],Pf=L[2],ml=L[3],w_=L[4];P=L[5];let S_=L[6],Mf=L[7],Of=L[8];F=L[9];let pl=L[10];S=L[11],Array.isArray(S)&&(S=S.reduce(G0,"")),v=L[12];let bf=[L[13],L[13]];C=L[14]||"declutter";let R_=L[15],_l=this.textStates[v],Vr=_l.font,Zr=[_l.scale[0]*Mf,_l.scale[1]*Mf],Hr;Vr in this.widths_?Hr=this.widths_[Vr]:(Hr={},this.widths_[Vr]=Hr);let Ff=br(c,Af,Pf,2),Df=Math.abs(Zr[0])*wc(Vr,S,Hr);if(w_||Df<=Ff){let St=this.textStates[v].textAlign,Rn=(Ff-Df)*xu(S,St),we=ep(c,Af,Pf,2,S,Rn,S_,Math.abs(Zr[0]),wc,Vr,Hr,M?0:this.viewRotation_,R_);t:if(we){let $e=[],Se,pi,_i,yt,Qt;if(F)for(Se=0,pi=we.length;Se<pi;++Se){Qt=we[Se],_i=Qt[4],yt=this.createLabel(_i,v,"",F),m=Qt[2]+(Zr[0]<0?-pl:pl),y=ml*yt.height+(.5-ml)*2*pl*Zr[1]/Zr[0]-Of;let yi=this.calculateImageOrLabelDimensions_(yt.width,yt.height,Qt[0],Qt[1],yt.width,yt.height,m,y,0,0,Qt[3],bf,!1,bi,!1,z);if(l&&C==="declutter"&&l.collides(yi.declutterBox))break t;$e.push([t,e,yt,yi,1,null,null])}if(P)for(Se=0,pi=we.length;Se<pi;++Se){Qt=we[Se],_i=Qt[4],yt=this.createLabel(_i,v,P,""),m=Qt[2],y=ml*yt.height-Of;let yi=this.calculateImageOrLabelDimensions_(yt.width,yt.height,Qt[0],Qt[1],yt.width,yt.height,m,y,0,0,Qt[3],bf,!1,bi,!1,z);if(l&&C==="declutter"&&l.collides(yi.declutterBox))break t;$e.push([t,e,yt,yi,1,null,null])}l&&C!=="none"&&l.load($e.map(ip));for(let yi=0,T_=$e.length;yi<T_;++yi)this.replayImageOrLabel_.apply(this,$e[yi])}}++u;break;case U.END_GEOMETRY:if(o!==void 0){z=L[1];let St=o(z,at,C);if(St)return St}++u;break;case U.FILL:X?O++:this.fill_(t),++u;break;case U.MOVE_TO_LINE_TO:d=L[1],g=L[2],x=L[3];let Sn,qr,_o;if(x){let St=L[4]??!1;ka(c,d,g,2,x,St,p),Na(p,2),Sn=p,qr=0,_o=Sn.length}else Sn=c,qr=d,_o=g;Z=Sn[qr],et=Sn[qr+1],t.moveTo(Z,et),_=Z+.5|0,E=et+.5|0;for(let St=qr+2;St<_o;St+=2)Z=Sn[St],et=Sn[St+1],I=Z+.5|0,A=et+.5|0,(St==_o-2||I!==_||A!==E)&&(t.lineTo(Z,et),_=I,E=A);++u;break;case U.SET_FILL_STYLE:this.alignAndScaleFill_=L[2],O?(this.fill_(t),O=0,N&&(t.stroke(),N=0)):N&&L[1]&&(t.stroke(),N=0),t.fillStyle=L[1],++u;break;case U.SET_STROKE_STYLE:O&&L[1]&&(this.fill_(t),O=0),N&&(t.stroke(),N=0),this.setStrokeStyle_(t,L),++u;break;case U.STROKE:X?N++:t.stroke(),++u;break;default:++u;break}}O&&this.fill_(t),N&&t.stroke()}execute(t,e,i,r,s,o){this.viewRotation_=r,this.execute_(t,e,i,this.instructions,s,void 0,void 0,o)}executeHitDetection(t,e,i,r,s){return this.viewRotation_=i,this.execute_(t,[t.canvas.width,t.canvas.height],e,this.hitDetectionInstructions,!0,r,s)}},rp=Eu;var xn=["Polygon","Circle","LineString","Image","Text","Default"],Su=["Image","Text"],sp=xn.filter(n=>!Su.includes(n)),op=!1,ap=!1;function z0(){let n=0,t=i=>{let r=nt(1,1,null,{willReadFrequently:i}),s=0,o=performance.now();for(;performance.now()-o<50;++s)r.fillStyle=`rgba(255,0,${s%256},1)`,r.fillRect(0,0,1,1),r.getImageData(0,0,1,1);return n=s>n?s:n,s};op={[t(!0)]:!0,[t(!1)]:!1,[t(void 0)]:void 0}[n],ap=!0}var wu=class{constructor(t,e,i,r,s,o,a){this.maxExtent_=t,this.overlaps_=r,this.pixelRatio_=i,this.resolution_=e,this.renderBuffer_=o,this.executorsByZIndex_={},this.hitDetectionContext_=null,this.hitDetectionTransform_=bt(),this.renderedContext_=null,this.deferredZIndexContexts_={},this.createExecutors_(s,a)}clip(t,e){let i=this.getClipCoords(e);t.beginPath(),t.moveTo(i[0],i[1]),t.lineTo(i[2],i[3]),t.lineTo(i[4],i[5]),t.lineTo(i[6],i[7]),t.clip()}createExecutors_(t,e){for(let i in t){let r=this.executorsByZIndex_[i];r===void 0&&(r={},this.executorsByZIndex_[i]=r);let s=t[i];for(let o in s){let a=s[o];r[o]=new rp(this.resolution_,this.pixelRatio_,this.overlaps_,a,e)}}}hasExecutors(t){for(let e in this.executorsByZIndex_){let i=this.executorsByZIndex_[e];for(let r=0,s=t.length;r<s;++r)if(t[r]in i)return!0}return!1}forEachFeatureAtCoordinate(t,e,i,r,s,o){ap===!1&&z0(),r=Math.round(r);let a=r*2+1,l=Wt(this.hitDetectionTransform_,r+.5,r+.5,1/e,-1/e,-i,-t[0],-t[1]),h=!this.hitDetectionContext_;h&&(this.hitDetectionContext_=nt(a,a,null,{willReadFrequently:op}));let c=this.hitDetectionContext_;c.canvas.width!==a||c.canvas.height!==a?(c.canvas.width=a,c.canvas.height=a):h||c.clearRect(0,0,a,a);let u;this.renderBuffer_!==void 0&&(u=gt(),vn(u,t),Zi(u,e*(this.renderBuffer_+r),u));let f=X0(r),d;function g(E,I,A){let T=c.getImageData(0,0,a,a).data;for(let S=0,v=f.length;S<v;S++)if(T[f[S]]>0){if(!o||A==="none"||d!=="Image"&&d!=="Text"||o.includes(E)){let F=(f[S]-3)/4,P=r-F%a,O=r-(F/a|0),N=s(E,I,P*P+O*O);if(N)return N}c.clearRect(0,0,a,a);break}}let p=Object.keys(this.executorsByZIndex_).map(Number);p.sort(re);let m,y,x,C,_;for(m=p.length-1;m>=0;--m){let E=p[m].toString();for(x=this.executorsByZIndex_[E],y=xn.length-1;y>=0;--y)if(d=xn[y],C=x[d],C!==void 0&&(_=C.executeHitDetection(c,l,i,g,u),_))return _}}getClipCoords(t){let e=this.maxExtent_;if(!e)return null;let i=e[0],r=e[1],s=e[2],o=e[3],a=[i,r,i,o,s,o,s,r];return ae(a,0,8,2,t,a),a}isEmpty(){return ge(this.executorsByZIndex_)}execute(t,e,i,r,s,o,a){let l=Object.keys(this.executorsByZIndex_).map(Number);l.sort(a?Gf:re),o=o||xn;let h=xn.length;for(let c=0,u=l.length;c<u;++c){let f=l[c].toString(),d=this.executorsByZIndex_[f];for(let g=0,p=o.length;g<p;++g){let m=o[g],y=d[m];if(y!==void 0){let x=a===null?void 0:y.getZIndexContext(),C=x?x.getContext():t,_=this.maxExtent_&&m!=="Image"&&m!=="Text";if(_&&(C.save(),this.clip(C,i)),!x||m==="Text"||m==="Image"?y.execute(C,e,i,r,s,a):x.pushFunction(E=>y.execute(E,e,i,r,s,a)),_&&C.restore(),x){x.offset();let E=l[c]*h+xn.indexOf(m);this.deferredZIndexContexts_[E]||(this.deferredZIndexContexts_[E]=[]),this.deferredZIndexContexts_[E].push(x)}}}}this.renderedContext_=t}getDeferredZIndexContexts(){return this.deferredZIndexContexts_}getRenderedContext(){return this.renderedContext_}renderDeferred(){let t=this.deferredZIndexContexts_,e=Object.keys(t).map(Number).sort(re);for(let i=0,r=e.length;i<r;++i)t[e[i]].forEach(s=>{s.draw(this.renderedContext_),s.clear()}),t[e[i]].length=0}},Cu={};function X0(n){if(Cu[n]!==void 0)return Cu[n];let t=n*2+1,e=n*n,i=new Array(e+1);for(let s=0;s<=n;++s)for(let o=0;o<=n;++o){let a=s*s+o*o;if(a>e)break;let l=i[a];l||(l=[],i[a]=l),l.push(((n+s)*t+(n+o))*4+3),s>0&&l.push(((n-s)*t+(n+o))*4+3),o>0&&(l.push(((n+s)*t+(n-o))*4+3),s>0&&l.push(((n-s)*t+(n-o))*4+3))}let r=[];for(let s=0,o=i.length;s<o;++s)i[s]&&r.push(...i[s]);return Cu[n]=r,r}var lp=wu;ft();Ct();H();dt();Xt();Ta();var Ze=.5;function hp(n,t,e,i,r,s,o,a,l){let h=l?Ji(r,l):r,c=n[0]*Ze,u=n[1]*Ze,f=nt(c,u);f.imageSmoothingEnabled=!1;let d=f.canvas,g=new Xm(f,Ze,r,null,o,a,l?Pn(Mn(),l):null),p=e.length,m=Math.floor((256*256*256-1)/p),y={};for(let C=1;C<=p;++C){let _=e[C-1],E=_.getStyleFunction()||i;if(!E)continue;let I=E(_,s);if(!I)continue;Array.isArray(I)||(I=[I]);let T=(C*m).toString(16).padStart(7,"#00000");for(let S=0,v=I.length;S<v;++S){let F=I[S],P=F.getGeometryFunction()(_);if(!P||!pt(h,P.getExtent()))continue;let O=F.clone(),N=O.getFill();N&&N.setColor(T);let Q=O.getStroke();Q&&(Q.setColor(T),Q.setLineDash(null)),O.setText(void 0);let D=F.getImage();if(D){let z=D.getImageSize();if(!z)continue;let Z=nt(z[0],z[1],void 0,{alpha:!1}),et=Z.canvas;Z.fillStyle=T,Z.fillRect(0,0,et.width,et.height),O.setImage(new Ni({img:et,anchor:D.getAnchor(),anchorXUnits:"pixels",anchorYUnits:"pixels",offset:D.getOrigin(),opacity:1,size:D.getSize(),scale:D.getScale(),rotation:D.getRotation(),rotateWithView:D.getRotateWithView()}))}let M=O.getZIndex()||0,b=y[M];b||(b={},y[M]=b,b.Polygon=[],b.Circle=[],b.LineString=[],b.Point=[]);let X=P.getType();if(X==="GeometryCollection"){let z=P.getGeometriesArrayRecursive();for(let Z=0,et=z.length;Z<et;++Z){let at=z[Z];b[at.getType().replace("Multi","")].push(at,O)}}else b[X.replace("Multi","")].push(P,O)}}let x=Object.keys(y).map(Number).sort(re);for(let C=0,_=x.length;C<_;++C){let E=y[x[C]];for(let I in E){let A=E[I];for(let T=0,S=A.length;T<S;T+=2){g.setStyle(A[T+1]);for(let v=0,F=t.length;v<F;++v)g.setTransform(t[v]),g.drawGeometry(A[T])}}}return f.getImageData(0,0,d.width,d.height)}function cp(n,t,e){let i=[];if(e){let r=Math.floor(Math.round(n[0])*Ze),s=Math.floor(Math.round(n[1])*Ze),o=(it(r,0,e.width-1)+it(s,0,e.height-1)*e.width)*4,a=e.data[o],l=e.data[o+1],c=e.data[o+2]+256*(l+256*a),u=Math.floor((256*256*256-1)/t.length);c&&c%u===0&&i.push(t[c/u-1])}return i}ht();vu();var Lu=class extends ja{constructor(t){super(t),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.clipExtent_=null,this.extendX_=!1,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=gt(),this.wrappedRenderedExtent_=gt(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedPixelRatio_=1,this.renderedRenderOrder_=null,this.renderedFrameDeclutter_,this.replayGroup_=null,this.replayGroupChanged=!0,this.clipping=!0,this.targetContext_=null,this.opacity_=1}renderWorlds(t,e,i){let r=e.extent,s=e.viewState,o=s.center,a=s.resolution,l=s.projection,h=s.rotation,c=l.getExtent(),u=this.getLayer().getSource(),f=this.getLayer().getDeclutter(),d=e.pixelRatio,g=e.viewHints,p=!(g[Lt.ANIMATING]||g[Lt.INTERACTING]),m=this.context,y=Math.round($(r)/a*d),x=Math.round(ut(r)/a*d),C=u.getWrapX()&&l.canWrapX(),_=C?$(c):null,E=C?Math.ceil((r[2]-c[2])/_)+(this.extendX_?2:1):1,I=C?Math.floor((r[0]-c[0])/_)-(this.extendX_?1:0):0;do{let A=this.getRenderTransform(o,a,0,d,y,x,I*_);e.declutter&&(A=A.slice(0)),t.execute(m,[m.canvas.width,m.canvas.height],A,h,p,i===void 0?xn:i?Su:sp,i?f&&e.declutter[f]:void 0)}while(++I<E)}setDrawContext_(){this.opacity_!==1&&(this.targetContext_=this.context,this.context=nt(this.context.canvas.width,this.context.canvas.height,Iu))}resetDrawContext_(){if(this.opacity_!==1&&this.targetContext_){let t=this.targetContext_.globalAlpha;this.targetContext_.globalAlpha=this.opacity_,this.targetContext_.drawImage(this.context.canvas,0,0),this.targetContext_.globalAlpha=t,Dn(this.context),Iu.push(this.context.canvas),this.context=this.targetContext_,this.targetContext_=null}}renderDeclutter(t){!this.replayGroup_||!this.getLayer().getDeclutter()||this.renderWorlds(this.replayGroup_,t,!0)}renderDeferredInternal(t){this.replayGroup_&&(this.clipExtent_&&this.clipUnrotated(this.context,t,this.clipExtent_),this.replayGroup_.renderDeferred(),this.clipExtent_&&(this.context.restore(),this.clipExtent_=null),this.resetDrawContext_())}renderFrame(t,e){let i=t.layerStatesArray[t.layerIndex];this.opacity_=i.opacity;let r=t.viewState;this.prepareContainer(t,e);let s=this.context,o=this.replayGroup_,a=o&&!o.isEmpty();if(!a&&!(this.getLayer().hasListener(Ut.PRERENDER)||this.getLayer().hasListener(Ut.POSTRENDER)))return this.container;this.setDrawContext_(),this.preRender(s,t);let l=r.projection;this.clipExtent_=null;let h=!1;if(a&&i.extent&&this.clipping){let c=_e(i.extent,l);a=pt(c,t.extent),a&&!wi(c,t.extent)&&(t.declutter?this.clipExtent_=c:(this.clipUnrotated(s,t,c),h=!0))}return a&&this.renderWorlds(o,t,this.getLayer().getDeclutter()?!1:void 0),h&&s.restore(),this.postRender(s,t),this.renderedRotation_!==r.rotation&&(this.renderedRotation_=r.rotation,this.hitDetectionImageData_=null),t.declutter||this.resetDrawContext_(),this.container}getFeatures(t){return new Promise(e=>{if(this.frameState&&!this.hitDetectionImageData_&&!this.animatingOrInteracting_){let i=this.frameState.size.slice(),r=this.renderedCenter_,s=this.renderedResolution_,o=this.renderedRotation_,a=this.renderedProjection_,l=this.wrappedRenderedExtent_,h=this.getLayer(),c=[],u=i[0]*Ze,f=i[1]*Ze;c.push(this.getRenderTransform(r,s,o,Ze,u,f,0).slice());let d=h.getSource(),g=a.getExtent();if(d.getWrapX()&&a.canWrapX()&&!wi(g,l)){let m=l[0],y=$(g),x=0,C;for(;m<g[0];)--x,C=y*x,c.push(this.getRenderTransform(r,s,o,Ze,u,f,C).slice()),m+=y;for(x=0,m=l[2];m>g[2];)++x,C=y*x,c.push(this.getRenderTransform(r,s,o,Ze,u,f,C).slice()),m-=y}let p=Mn();this.hitDetectionImageData_=hp(i,c,this.renderedFeatures_,h.getStyleFunction(),l,s,o,$c(s,this.renderedPixelRatio_),p?a:null)}e(cp(t,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(t,e,i,r,s){if(!this.replayGroup_)return;let o=e.viewState.resolution,a=e.viewState.rotation,l=this.getLayer(),h={},c=function(f,d,g){let p=Y(f),m=h[p];if(m){if(m!==!0&&g<m.distanceSq){if(g===0)return h[p]=!0,s.splice(s.lastIndexOf(m),1),r(f,l,d);m.geometry=d,m.distanceSq=g}}else{if(g===0)return h[p]=!0,r(f,l,d);s.push(h[p]={feature:f,layer:l,geometry:d,distanceSq:g,callback:r})}},u=this.getLayer().getDeclutter();return this.replayGroup_.forEachFeatureAtCoordinate(t,o,a,i,c,u?e.declutter?.[u]?.all().map(f=>f.value):null)}handleFontsChanged(){let t=this.getLayer();t.getVisible()&&this.replayGroup_&&t.changed()}handleStyleImageChange_(t){this.renderIfReadyAndVisible()}prepareFrame(t){let e=this.getLayer(),i=e.getSource();if(!i)return!1;let r=t.viewHints[Lt.ANIMATING],s=t.viewHints[Lt.INTERACTING],o=e.getUpdateWhileAnimating(),a=e.getUpdateWhileInteracting();if(this.ready&&!o&&r||!a&&s)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;let l=t.extent,h=t.viewState,c=h.projection,u=h.resolution,f=t.pixelRatio,d=e.getRevision(),g=e.getRenderBuffer(),p=e.getRenderOrder();p===void 0&&(p=Um);let m=h.center.slice(),y=Zi(l,g*u),x=y.slice(),C=[y.slice()],_=c.getExtent(),E=i.getWrapX()&&c.canWrapX();if(this.extendX_=!1,E){let D=i.getExtent();D&&!ri(D)&&(this.extendX_=D[0]<_[0]||D[2]>_[2])}if(E&&(!wi(_,t.extent)||this.extendX_)){let D=$(_),M=Math.max($(y)/2,D),b=_[0],X=_[2];this.extendX_&&(b-=D,X+=D),y[0]=b-M,y[2]=X+M,Oo(m,c);let z=Xl(C[0],c);z[0]<_[0]&&z[2]<_[2]?C.push([z[0]+D,z[1],z[2]+D,z[3]]):z[0]>_[0]&&z[2]>_[2]&&C.push([z[0]-D,z[1],z[2]-D,z[3]])}if(this.ready&&this.renderedResolution_==u&&this.renderedPixelRatio_===f&&this.renderedRevision_==d&&this.renderedRenderOrder_==p&&this.renderedFrameDeclutter_===!!t.declutter&&wi(this.wrappedRenderedExtent_,y))return Kt(this.renderedExtent_,x)||(this.hitDetectionImageData_=null,this.renderedExtent_=x),this.renderedCenter_=m,this.replayGroupChanged=!1,!0;this.replayGroup_=null;let I=new tp(Jc(u,f),y,u,f),A=Mn(),T;if(A){for(let D=0,M=C.length;D<M;++D){let b=C[D],X=Ji(b,c);i.loadFeatures(X,Nd(u,c),A)}T=Pn(A,c)}else for(let D=0,M=C.length;D<M;++D)i.loadFeatures(C[D],u,c);let S=$c(u,f),v=!0,F=(D,M)=>{let b,X=D.getStyleFunction()||e.getStyleFunction();if(X&&(b=X(D,u)),b){let z=this.renderFeature(D,S,b,I,T,this.getLayer().getDeclutter(),M);v=v&&!z}},P=Ji(y,c),O=i.getFeaturesInExtent(P);p&&O.sort(p);for(let D=0,M=O.length;D<M;++D)F(O[D],D);this.renderedFeatures_=O,this.ready=v;let N=I.finish(),Q=new lp(y,u,f,i.getOverlaps(),N,e.getRenderBuffer(),!!t.declutter);return this.renderedResolution_=u,this.renderedRevision_=d,this.renderedRenderOrder_=p,this.renderedFrameDeclutter_=!!t.declutter,this.renderedExtent_=x,this.wrappedRenderedExtent_=y,this.renderedCenter_=m,this.renderedProjection_=c,this.renderedPixelRatio_=f,this.replayGroup_=Q,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(t,e,i,r,s,o,a){if(!i)return!1;let l=!1;if(Array.isArray(i))for(let h=0,c=i.length;h<c;++h)l=Qc(r,t,i[h],e,this.boundHandleStyleImageChange_,s,o,a)||l;else l=Qc(r,t,i,e,this.boundHandleStyleImageChange_,s,o,a);return l}},dp=Lu;Xc();var Au=class extends ba{constructor(t){super(t)}createRenderer(){return new dp(this)}},Ya=Au;Ku();Ts();si();Ai();Re();Xt();Bt();lt();H();rh();var Zu=class n extends Bo{constructor(t){super(),this.geometries_=t,this.changeEventsKeys_=[],this.listenGeometriesChange_()}unlistenGeometriesChange_(){this.changeEventsKeys_.forEach(q),this.changeEventsKeys_.length=0}listenGeometriesChange_(){let t=this.geometries_;for(let e=0,i=t.length;e<i;++e)this.changeEventsKeys_.push(j(t[e],k.CHANGE,this.changed,this))}clone(){let t=new n(Vu(this.geometries_));return t.applyProperties(this),t}closestPointXY(t,e,i,r){if(r<se(this.getExtent(),t,e))return r;let s=this.geometries_;for(let o=0,a=s.length;o<a;++o)r=s[o].closestPointXY(t,e,i,r);return r}containsXY(t,e){let i=this.geometries_;for(let r=0,s=i.length;r<s;++r)if(i[r].containsXY(t,e))return!0;return!1}computeExtent(t){Si(t);let e=this.geometries_;for(let i=0,r=e.length;i<r;++i)ir(t,e[i].getExtent());return t}getGeometries(){return Vu(this.geometries_)}getGeometriesArray(){return this.geometries_}getGeometriesArrayRecursive(){let t=[],e=this.geometries_;for(let i=0,r=e.length;i<r;++i)e[i].getType()===this.getType()?t=t.concat(e[i].getGeometriesArrayRecursive()):t.push(e[i]);return t}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;let e=[],i=this.geometries_,r=!1;for(let s=0,o=i.length;s<o;++s){let a=i[s],l=a.getSimplifiedGeometry(t);e.push(l),l!==a&&(r=!0)}return r?new n(e):(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getType(){return"GeometryCollection"}intersectsExtent(t){let e=this.geometries_;for(let i=0,r=e.length;i<r;++i)if(e[i].intersectsExtent(t))return!0;return!1}isEmpty(){return this.geometries_.length===0}rotate(t,e){let i=this.geometries_;for(let r=0,s=i.length;r<s;++r)i[r].rotate(t,e);this.changed()}scale(t,e,i){i||(i=Vt(this.getExtent()));let r=this.geometries_;for(let s=0,o=r.length;s<o;++s)r[s].scale(t,e,i);this.changed()}setGeometries(t){this.setGeometriesArray(Vu(t))}setGeometriesArray(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()}applyTransform(t){let e=this.geometries_;for(let i=0,r=e.length;i<r;++i)e[i].applyTransform(t);this.changed()}translate(t,e){let i=this.geometries_;for(let r=0,s=i.length;r<s;++r)i[r].translate(t,e);this.changed()}disposeInternal(){this.unlistenGeometriesChange_(),super.disposeInternal()}};function Vu(n){return n.map(t=>t.clone())}var Op=Zu;ps();Rs();Ss();Xt();ht();var Hu=class{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.featureClass=Or,this.supportedMediaTypes=null}getReadOptions(t,e){if(e){let i=e.dataProjection?ot(e.dataProjection):this.readProjection(t);e.extent&&i&&i.getUnits()==="tile-pixels"&&(i=ot(i),i.setWorldExtent(e.extent)),e={dataProjection:i,featureProjection:e.featureProjection}}return this.adaptOptions(e)}adaptOptions(t){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection,featureClass:this.featureClass},t)}getType(){return W()}readFeature(t,e){return W()}readFeatures(t,e){return W()}readGeometry(t,e){return W()}readProjection(t){return W()}writeFeature(t,e){return W()}writeFeatures(t,e){return W()}writeGeometry(t,e){return W()}},bp=Hu;function $a(n,t,e){let i=e?ot(e.featureProjection):null,r=e?ot(e.dataProjection):null,s=n;if(i&&r&&!$i(i,r)){t&&(s=n.clone());let o=t?i:r,a=t?r:i;o.getUnits()==="tile-pixels"?s.transform(o,a):s.applyTransform(Li(o,a))}if(t&&e&&e.decimals!==void 0){let o=Math.pow(10,e.decimals),a=function(l){for(let h=0,c=l.length;h<c;++h)l[h]=Math.round(l[h]*o)/o;return l};s===n&&(s=n.clone()),s.applyTransform(a)}return s}var $0={Point:Pi,LineString:Js,Polygon:Fn,MultiPoint:za,MultiLineString:Bm,MultiPolygon:Km};function J0(n,t,e){return Array.isArray(t[0])?(Jo(n,0,t,e)||(n=n.slice(),ws(n,0,t,e)),n):(Cs(n,0,t,e)||(n=n.slice(),mr(n,0,t,e)),n)}function qu(n,t){let e=n.geometry;if(!e)return[];if(Array.isArray(e))return e.map(s=>qu({...n,geometry:s})).flat();let i=e.type==="MultiPolygon"?"Polygon":e.type;if(i==="GeometryCollection"||i==="Circle")throw new Error("Unsupported geometry type: "+i);let r=e.layout.length;return $a(new Ve(i,i==="Polygon"?J0(e.flatCoordinates,e.ends,r):e.flatCoordinates,e.ends?.flat(),r,n.properties||{},n.id).enableSimplifyTransformed(),!1,t)}function Ja(n,t){if(!n)return null;if(Array.isArray(n)){let i=n.map(r=>Ja(r,t));return new Op(i)}let e=$0[n.type];return $a(new e(n.flatCoordinates,n.layout||"XY",n.ends),!1,t)}ht();var $u=class extends bp{constructor(){super()}getType(){return"json"}readFeature(t,e){return this.readFeatureFromObject(Qa(t),this.getReadOptions(t,e))}readFeatures(t,e){return this.readFeaturesFromObject(Qa(t),this.getReadOptions(t,e))}readFeatureFromObject(t,e){return W()}readFeaturesFromObject(t,e){return W()}readGeometry(t,e){return this.readGeometryFromObject(Qa(t),this.getReadOptions(t,e))}readGeometryFromObject(t,e){return W()}readProjection(t){return this.readProjectionFromObject(Qa(t))}readProjectionFromObject(t){return W()}writeFeature(t,e){return JSON.stringify(this.writeFeatureObject(t,e))}writeFeatureObject(t,e){return W()}writeFeatures(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))}writeFeaturesObject(t,e){return W()}writeGeometry(t,e){return JSON.stringify(this.writeGeometryObject(t,e))}writeGeometryObject(t,e){return W()}};function Qa(n){if(typeof n=="string"){let t=JSON.parse(n);return t||null}return n!==null?n:null}var Fp=$u;var Ju=class extends Fp{constructor(t){t=t||{},super(),this.dataProjection=ot(t.dataProjection?t.dataProjection:"EPSG:4326"),t.featureProjection&&(this.defaultFeatureProjection=ot(t.featureProjection)),t.featureClass&&(this.featureClass=t.featureClass),this.geometryName_=t.geometryName,this.extractGeometryName_=t.extractGeometryName,this.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"]}readFeatureFromObject(t,e){let i=null;t.type==="Feature"?i=t:i={type:"Feature",geometry:t,properties:null};let r=tf(i.geometry,e);if(this.featureClass===Ve)return qu({geometry:r,id:i.id,properties:i.properties},e);let s=new Or;return this.geometryName_?s.setGeometryName(this.geometryName_):this.extractGeometryName_&&i.geometry_name&&s.setGeometryName(i.geometry_name),s.setGeometry(Ja(r,e)),"id"in i&&s.setId(i.id),i.properties&&s.setProperties(i.properties,!0),s}readFeaturesFromObject(t,e){let i=t,r=null;if(i.type==="FeatureCollection"){let s=t;r=[];let o=s.features;for(let a=0,l=o.length;a<l;++a){let h=this.readFeatureFromObject(o[a],e);h&&r.push(h)}}else r=[this.readFeatureFromObject(t,e)];return r.flat()}readGeometryFromObject(t,e){return Q0(t,e)}readProjectionFromObject(t){let e=t.crs,i;if(e)if(e.type=="name")i=ot(e.properties.name);else if(e.type==="EPSG")i=ot("EPSG:"+e.properties.code);else throw new Error("Unknown SRS type");else i=this.dataProjection;return i}writeFeatureObject(t,e){e=this.adaptOptions(e);let i={type:"Feature",geometry:null,properties:null},r=t.getId();if(r!==void 0&&(i.id=r),!t.hasProperties())return i;let s=t.getProperties(),o=t.getGeometry();return o&&(i.geometry=Qu(o,e),delete s[t.getGeometryName()]),ge(s)||(i.properties=s),i}writeFeaturesObject(t,e){e=this.adaptOptions(e);let i=[];for(let r=0,s=t.length;r<s;++r)i.push(this.writeFeatureObject(t[r],e));return{type:"FeatureCollection",features:i}}writeGeometryObject(t,e){return Qu(t,this.adaptOptions(e))}};function tf(n,t){if(!n)return null;let e;switch(n.type){case"Point":{e=ex(n);break}case"LineString":{e=ix(n);break}case"Polygon":{e=ox(n);break}case"MultiPoint":{e=rx(n);break}case"MultiLineString":{e=nx(n);break}case"MultiPolygon":{e=sx(n);break}case"GeometryCollection":{e=tx(n);break}default:throw new Error("Unsupported GeoJSON type: "+n.type)}return e}function Q0(n,t){let e=tf(n,t);return Ja(e,t)}function tx(n,t){return n.geometries.map(function(i){return tf(i,t)})}function ex(n){let t=n.coordinates;return{type:"Point",flatCoordinates:t,layout:tn(t.length)}}function ix(n){let t=n.coordinates,e=t.flat();return{type:"LineString",flatCoordinates:e,ends:[e.length],layout:tn(t[0]?.length||2)}}function nx(n){let t=n.coordinates,e=t[0]?.[0]?.length||2,i=[],r=en(i,0,t,e);return{type:"MultiLineString",flatCoordinates:i,ends:r,layout:tn(e)}}function rx(n){let t=n.coordinates;return{type:"MultiPoint",flatCoordinates:t.flat(),layout:tn(t[0]?.length||2)}}function sx(n){let t=n.coordinates,e=[],i=t[0]?.[0]?.[0].length||2,r=Vo(e,0,t,i);return{type:"MultiPolygon",flatCoordinates:e,ends:r,layout:tn(i)}}function ox(n){let t=n.coordinates,e=[],i=t[0]?.[0]?.length,r=en(e,0,t,i);return{type:"Polygon",flatCoordinates:e,ends:r,layout:tn(i)}}function Qu(n,t){n=$a(n,!0,t);let e=n.getType(),i;switch(e){case"Point":{i=fx(n,t);break}case"LineString":{i=lx(n,t);break}case"Polygon":{i=dx(n,t);break}case"MultiPoint":{i=cx(n,t);break}case"MultiLineString":{i=hx(n,t);break}case"MultiPolygon":{i=ux(n,t);break}case"GeometryCollection":{i=ax(n,t);break}case"Circle":{i={type:"GeometryCollection",geometries:[]};break}default:throw new Error("Unsupported geometry type: "+e)}return i}function ax(n,t){return t=Object.assign({},t),delete t.featureProjection,{type:"GeometryCollection",geometries:n.getGeometriesArray().map(function(i){return Qu(i,t)})}}function lx(n,t){return{type:"LineString",coordinates:n.getCoordinates()}}function hx(n,t){return{type:"MultiLineString",coordinates:n.getCoordinates()}}function cx(n,t){return{type:"MultiPoint",coordinates:n.getCoordinates()}}function ux(n,t){let e;return t&&(e=t.rightHanded),{type:"MultiPolygon",coordinates:n.getCoordinates(e)}}function fx(n,t){return{type:"Point",coordinates:n.getCoordinates()}}function dx(n,t){let e;return t&&(e=t.rightHanded),{type:"Polygon",coordinates:n.getCoordinates(e)}}var Dp=Ju;Np();Lh();nl();hf();var cf=class extends ol{constructor(t){t=t||{};let e=t.projection!==void 0?t.projection:"EPSG:3857",i=t.tileGrid!==void 0?t.tileGrid:Wp({extent:il(e),maxResolution:t.maxResolution,maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});super({attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,interpolate:t.interpolate,projection:e,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:i,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX!==void 0?t.wrapX:!0,transition:t.transition,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.gutter_=t.gutter!==void 0?t.gutter:0}getGutter(){return this.gutter_}},Ur=cf;Gt();Ti();lt();H();ps();ht();var uf=class extends to{constructor(t){t=t||{},super({attributions:t.attributions,wrapX:t.wrapX}),this.resolution=void 0,this.distance=t.distance!==void 0?t.distance:20,this.minDistance=t.minDistance||0,this.interpolationRatio=0,this.features=[],this.geometryFunction=t.geometryFunction||function(e){let i=e.getGeometry();return K(!i||i.getType()==="Point","The default `geometryFunction` can only handle `Point` or null geometries"),i},this.createCustomCluster_=t.createCluster,this.source=null,this.boundRefresh_=this.refresh.bind(this),this.updateDistance(this.distance,this.minDistance),this.setSource(t.source||null)}clear(t){this.features.length=0,super.clear(t)}getDistance(){return this.distance}getSource(){return this.source}loadFeatures(t,e,i){this.source?.loadFeatures(t,e,i),e!==this.resolution&&(this.resolution=e,this.refresh())}setDistance(t){this.updateDistance(t,this.minDistance)}setMinDistance(t){this.updateDistance(this.distance,t)}getMinDistance(){return this.minDistance}setSource(t){this.source&&this.source.removeEventListener(k.CHANGE,this.boundRefresh_),this.source=t,t&&t.addEventListener(k.CHANGE,this.boundRefresh_),this.refresh()}refresh(){this.clear(),this.cluster(),this.addFeatures(this.features)}updateDistance(t,e){let i=t===0?0:Math.min(e,t)/t,r=t!==this.distance||this.interpolationRatio!==i;this.distance=t,this.minDistance=e,this.interpolationRatio=i,r&&this.refresh()}cluster(){if(this.resolution===void 0||!this.source)return;let t=gt(),e=this.distance*this.resolution,i=this.source.getFeatures(),r={};for(let s=0,o=i.length;s<o;s++){let a=i[s];if(!(Y(a)in r)){let l=this.geometryFunction(a);if(l){let h=l.getCoordinates();tr(h,t),Zi(t,e,t);let c=this.source.getFeaturesInExtent(t).filter(function(u){let f=Y(u);return f in r?!1:(r[f]=!0,!0)});this.features.push(this.createCluster(c,t))}}}}createCluster(t,e){let i=[0,0];for(let a=t.length-1;a>=0;--a){let l=this.geometryFunction(t[a]);l?Po(i,l.getCoordinates()):t.splice(a,1)}Mo(i,1/t.length);let r=Vt(e),s=this.interpolationRatio,o=new Pi([i[0]*(1-s)+r[0]*s,i[1]*(1-s)+r[1]*s]);return this.createCustomCluster_?this.createCustomCluster_(o,t):new Or({geometry:o,features:t})}},ff=uf;var Lx='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',yf=class extends Ur{constructor(t){t=t||{};let e;t.attributions!==void 0?e=t.attributions:e=[Lx];let i=t.url!==void 0?t.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:e,attributionsCollapsible:!1,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin!==void 0?t.crossOrigin:"anonymous",referrerPolicy:t.referrerPolicy||"origin-when-cross-origin",interpolate:t.interpolate,maxZoom:t.maxZoom!==void 0?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,transition:t.transition,url:i,wrapX:t.wrapX,zDirection:t.zDirection})}},hl=yf;H();Ef();Ra();Vs();Ta();Ia();La();Fc();var lo={};lo.wiki=new En({source:new Ur({attributions:[hl.ATTRIBUTION,'&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap contributors</a>'],url:"https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png?lang=en"})});lo.osm=new En({source:new hl});function s_(n,t,e,i,r){let s=F=>{var P=F.getGeometry(),O=P.getCoordinates(),N="<h1>"+F.get("name")+"</h1>";N+=F.get("popupContent"),p.innerHTML=N,v.setPosition(O)};var o,a={};if(r!==void 0&&r){try{r=JSON.parse(r)}catch{console.warn(`Can't parse marker ${r}`)}o=new ie({image:new Ni(r)}),a={hitTolerance:10}}function l(F){return r!==void 0&&r?new ie({geometry:F.getGeometry(),image:new Ni(r)}):new ie({geometry:F.getGeometry(),image:C})}function h(F){let P=F.get("features").length;if(P>1)return r!==void 0&&r?[new ie({image:new Ni(r)}),new ie({image:new ki({radius:15,displacement:[-10,25],fill:new xe({color:"rgba(255, 255, 255, 0.7)"})}),text:new Pr({text:P.toString(),fill:E,stroke:I,offsetY:-25,offsetX:-10})})]:[new ie({image:_}),new ie({image:C,text:new Pr({text:P.toString(),fill:E,stroke:I})})];let O=F.get("features")[0];return l(O)}function c(F){var P="",O="";return F.forEach(N=>{P+=N.get("title")+", ",O+=N.get("popupContent")}),F[0].set("title",P),F[0].set("popupContent",O),F[0]}var u="en";document.documentElement.lang!==void 0&&(u=document.documentElement.lang);var f={de:{zoomIn:"Vergr\xF6\xDFern",zoomOut:"Verkleinern",fullscreen:"Vollbildansicht",rotate:"Rotation zur\xFCcksetzen",rotateLeft:"90\xB0 nach links drehen",rotateRight:"90\xB0 nach rechst drehen"},en:{zoomIn:"Zoom in",zoomOut:"Zoom out",fullscreen:"Toggle full-screen",rotate:"Reset rotation",rotateLeft:"Rotate 90\xB0 left",rotateRight:"Rotate 90\xB0 right"}},d=[30,30,30,30],g=document.getElementById(n+"-popup"),p=document.getElementById(n+"-popup-content"),m=document.getElementById(n+"-popup-closer");let y=new xe({color:"rgba(255, 255, 255, 0.7)"}),x=new xe({color:"rgba(255, 255, 255, 0.3)"}),C=new ki({radius:8,fill:x,stroke:new Gi({color:"rgba(51, 153, 204, 0.7)",width:1.25})}),_=new ki({radius:15,fill:y,stroke:new Gi({color:"rgba(51, 153, 204, 0.3)",width:1.25})}),E=new xe({color:"#fff"}),I=new Gi({color:"rgba(0, 0, 0, 0.6)",width:3});var A;e!==void 0&&e!==""?e in lo?A=lo[e]:A=new En({source:new Ur({url:e})}):A=lo.osm;let T=new aa({collapsible:!0});var S=new $s({controls:[new kn({zoomInTipLabel:f[u].zoomIn,zoomOutTipLabel:f[u].zoomOut}),new ao({tipLabel:f[u].fullscreen}),T],layers:[A],target:n}),v=new kp({element:g,autoPan:!0,autoPanAnimation:{duration:250}});return S.addOverlay(v),m.onclick=function(){return v.setPosition(void 0),m.blur(),!1},fetch(t).then(function(F){F.json().then(function(P){var O=new Dp({dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),N=new to({features:O.readFeatures(P)}),Q;if(i!==void 0&&i){let D=new ff({distance:25,source:N});Q=new Ya({source:D,style:h}),S.on("click",M=>{Q.getFeatures(M.pixel).then(b=>{if(b.length>0){let X=b[0].get("features");if(X.length>1){let z=gt();X.forEach(at=>ir(z,at.getGeometry().getExtent()));let Z=S.getView(),et=S.getView().getResolution();Z.getZoom()===Z.getMaxZoom()||$(z)<et&&ut(z)<et?(b[0].get("features").length==1?clickFeature=b[0]:clickFeature=c(b[0].get("features")),s(clickFeature),clickResolution=et):Z.fit(z,{duration:500,padding:[50,50,50,50]})}else X.length==1&&(clickFeature=X[0],s(clickFeature))}})})}else Q=new Ya({source:N}),o!==void 0&&Q.setStyle(o),S.on("click",function(D){var M=S.forEachFeatureAtPixel(D.pixel,function(b,X){return b},a);M&&s(M)});Q.reportError=!0,S.addLayer(Q),S.setView(new Zt({center:[0,0],zoom:2})),S.getView().fit(N.getExtent(),{size:S.getSize(),padding:d})}).catch(function(P){console.log("Could not read GeoJSON. "+P)})}).catch(function(){console.log("Could not read data from URL.")}),S}function cl(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)n[i]=e[i]}return n}var Mx={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Cf(n,t){function e(r,s,o){if(!(typeof document>"u")){o=cl({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in o)o[l]&&(a+="; "+l,o[l]!==!0&&(a+="="+o[l].split(";")[0]));return document.cookie=r+"="+n.write(s,r)+a}}function i(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var s=document.cookie?document.cookie.split("; "):[],o={},a=0;a<s.length;a++){var l=s[a].split("="),h=l.slice(1).join("=");try{var c=decodeURIComponent(l[0]);if(o[c]=n.read(h,c),r===c)break}catch{}}return r?o[r]:o}}return Object.create({set:e,get:i,remove:function(r,s){e(r,"",cl({},s,{expires:-1}))},withAttributes:function(r){return Cf(this.converter,cl({},this.attributes,r))},withConverter:function(r){return Cf(cl({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(n)}})}var ul=Cf(Mx,{path:"/"});function Ox(n){return ul.get(n),n!=null&&n=="1"}function o_(n,t,e){t==!0?ul.set(n,!0,e):ul.set(n,!1,e)}function a_(toggle,overlay,cookie,iframe){var expire={expires:30,path:""};expire=Object.assign(expire,{sameSite:"None",secure:!0}),toggle.addEventListener("change",function(){this.checked?(console.log("Setting conset cookie for "+cookie+" to true, expire: "+expire),o_(cookie,!0,expire),overlay.style.display="none",overlay.parentNode.querySelector(".iframe-content").innerHTML=iframe,Array.from(overlay.parentNode.querySelectorAll(".iframe-content script")).forEach(el=>eval(el.innerHTML))):(console.log("Setting conset cookie for "+cookie+" to false, expire: "+expire),o_(cookie,!1,expire),overlay.style.display="block",Array.from(overlay.parentNode.querySelectorAll(".iframe-content *")).forEach(n=>n.remove()))}),Ox(cookie)&&(toggle.disabled=!1)}x_();window.addConsent=a_;window.initMap=s_;})();
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/

;
(() => {
  // node_modules/tify/dist/tify.js
  var import_meta = {};
  function Nn(t) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const e of t.split(",")) i[e] = 1;
    return (e) => e in i;
  }
  var Te = {};
  var Kt = [];
  var lt = () => {
  };
  var ar = () => false;
  var Zi = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
  var Un = (t) => t.startsWith("onUpdate:");
  var ze = Object.assign;
  var Wn = (t, i) => {
    const e = t.indexOf(i);
    e > -1 && t.splice(e, 1);
  };
  var jo = Object.prototype.hasOwnProperty;
  var _e = (t, i) => jo.call(t, i);
  var de = Array.isArray;
  var Xt = (t) => Ki(t) === "[object Map]";
  var lr = (t) => Ki(t) === "[object Set]";
  var fe = (t) => typeof t == "function";
  var De = (t) => typeof t == "string";
  var wt = (t) => typeof t == "symbol";
  var be = (t) => t !== null && typeof t == "object";
  var ur = (t) => (be(t) || fe(t)) && fe(t.then) && fe(t.catch);
  var cr = Object.prototype.toString;
  var Ki = (t) => cr.call(t);
  var Go = (t) => Ki(t).slice(8, -1);
  var hr = (t) => Ki(t) === "[object Object]";
  var Xi = (t) => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t;
  var ai = Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var Yi = (t) => {
    const i = /* @__PURE__ */ Object.create(null);
    return (e) => i[e] || (i[e] = t(e));
  };
  var qo = /-\w/g;
  var Je = Yi((t) => t.replace(qo, (i) => i.slice(1).toUpperCase()));
  var Zo = /\B([A-Z])/g;
  var Dt = Yi((t) => t.replace(Zo, "-$1").toLowerCase());
  var Ji = Yi((t) => t.charAt(0).toUpperCase() + t.slice(1));
  var dn = Yi((t) => t ? `on${Ji(t)}` : "");
  var Pt = (t, i) => !Object.is(t, i);
  var Pi = (t, ...i) => {
    for (let e = 0; e < t.length; e++) t[e](...i);
  };
  var dr = (t, i, e, n = false) => {
    Object.defineProperty(t, i, { configurable: true, enumerable: false, writable: n, value: e });
  };
  var jn = (t) => {
    const i = parseFloat(t);
    return isNaN(i) ? t : i;
  };
  var gs;
  var Qi = () => gs || (gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Rt(t) {
    if (de(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) {
        const n = t[e], r = De(n) ? Jo(n) : Rt(n);
        if (r) for (const s in r) i[s] = r[s];
      }
      return i;
    } else if (De(t) || be(t)) return t;
  }
  var Ko = /;(?![^(]*\))/g;
  var Xo = /:([^]+)/;
  var Yo = /\/\*[^]*?\*\//g;
  function Jo(t) {
    const i = {};
    return t.replace(Yo, "").split(Ko).forEach((e) => {
      if (e) {
        const n = e.split(Xo);
        n.length > 1 && (i[n[0].trim()] = n[1].trim());
      }
    }), i;
  }
  function Pe(t) {
    let i = "";
    if (De(t)) i = t;
    else if (de(t)) for (let e = 0; e < t.length; e++) {
      const n = Pe(t[e]);
      n && (i += n + " ");
    }
    else if (be(t)) for (const e in t) t[e] && (i += e + " ");
    return i.trim();
  }
  var Qo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var $o = Nn(Qo);
  function fr(t) {
    return !!t || t === "";
  }
  var pr = (t) => !!(t && t.__v_isRef === true);
  var B = (t) => De(t) ? t : t == null ? "" : de(t) || be(t) && (t.toString === cr || !fe(t.toString)) ? pr(t) ? B(t.value) : JSON.stringify(t, gr, 2) : String(t);
  var gr = (t, i) => pr(i) ? gr(t, i.value) : Xt(i) ? { [`Map(${i.size})`]: [...i.entries()].reduce((e, [n, r], s) => (e[fn(n, s) + " =>"] = r, e), {}) } : lr(i) ? { [`Set(${i.size})`]: [...i.values()].map((e) => fn(e)) } : wt(i) ? fn(i) : be(i) && !de(i) && !hr(i) ? String(i) : i;
  var fn = (t, i = "") => {
    var e;
    return wt(t) ? `Symbol(${(e = t.description) != null ? e : i})` : t;
  };
  var Fe;
  var ea = class {
    constructor(i = false) {
      this.detached = i, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Fe, !i && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i, e;
        if (this.scopes) for (i = 0, e = this.scopes.length; i < e; i++) this.scopes[i].pause();
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let i, e;
        if (this.scopes) for (i = 0, e = this.scopes.length; i < e; i++) this.scopes[i].resume();
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].resume();
      }
    }
    run(i) {
      if (this._active) {
        const e = Fe;
        try {
          return Fe = this, i();
        } finally {
          Fe = e;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Fe, Fe = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Fe = this.prevScope, this.prevScope = void 0);
    }
    stop(i) {
      if (this._active) {
        this._active = false;
        let e, n;
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
        for (this.effects.length = 0, e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
        if (this.cleanups.length = 0, this.scopes) {
          for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !i) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  };
  function mr() {
    return Fe;
  }
  function ta(t, i = false) {
    Fe && Fe.cleanups.push(t);
  }
  var xe;
  var pn = /* @__PURE__ */ new WeakSet();
  var vr = class {
    constructor(i) {
      this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fe && Fe.active && Fe.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, pn.has(this) && (pn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wr(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, ms(this), _r(this);
      const i = xe, e = tt;
      xe = this, tt = true;
      try {
        return this.fn();
      } finally {
        Tr(this), xe = i, tt = e, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let i = this.deps; i; i = i.nextDep) Zn(i);
        this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Rn(this) && this.run();
    }
    get dirty() {
      return Rn(this);
    }
  };
  var yr = 0;
  var li;
  var ui;
  function wr(t, i = false) {
    if (t.flags |= 8, i) {
      t.next = ui, ui = t;
      return;
    }
    t.next = li, li = t;
  }
  function Gn() {
    yr++;
  }
  function qn() {
    if (--yr > 0) return;
    if (ui) {
      let i = ui;
      for (ui = void 0; i; ) {
        const e = i.next;
        i.next = void 0, i.flags &= -9, i = e;
      }
    }
    let t;
    for (; li; ) {
      let i = li;
      for (li = void 0; i; ) {
        const e = i.next;
        if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
          i.trigger();
        } catch (n) {
          t || (t = n);
        }
        i = e;
      }
    }
    if (t) throw t;
  }
  function _r(t) {
    for (let i = t.deps; i; i = i.nextDep) i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
  }
  function Tr(t) {
    let i, e = t.depsTail, n = e;
    for (; n; ) {
      const r = n.prevDep;
      n.version === -1 ? (n === e && (e = r), Zn(n), ia(n)) : i = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
    }
    t.deps = i, t.depsTail = e;
  }
  function Rn(t) {
    for (let i = t.deps; i; i = i.nextDep) if (i.dep.version !== i.version || i.dep.computed && (xr(i.dep.computed) || i.dep.version !== i.version)) return true;
    return !!t._dirty;
  }
  function xr(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === fi) || (t.globalVersion = fi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Rn(t)))) return;
    t.flags |= 2;
    const i = t.dep, e = xe, n = tt;
    xe = t, tt = true;
    try {
      _r(t);
      const r = t.fn(t._value);
      (i.version === 0 || Pt(r, t._value)) && (t.flags |= 128, t._value = r, i.version++);
    } catch (r) {
      throw i.version++, r;
    } finally {
      xe = e, tt = n, Tr(t), t.flags &= -3;
    }
  }
  function Zn(t, i = false) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), e.subs === t && (e.subs = n, !n && e.computed)) {
      e.computed.flags &= -5;
      for (let s = e.computed.deps; s; s = s.nextDep) Zn(s, true);
    }
    !i && !--e.sc && e.map && e.map.delete(e.key);
  }
  function ia(t) {
    const { prevDep: i, nextDep: e } = t;
    i && (i.nextDep = e, t.prevDep = void 0), e && (e.prevDep = i, t.nextDep = void 0);
  }
  var tt = true;
  var br = [];
  function gt() {
    br.push(tt), tt = false;
  }
  function mt() {
    const t = br.pop();
    tt = t === void 0 ? true : t;
  }
  function ms(t) {
    const { cleanup: i } = t;
    if (t.cleanup = void 0, i) {
      const e = xe;
      xe = void 0;
      try {
        i();
      } finally {
        xe = e;
      }
    }
  }
  var fi = 0;
  var na = class {
    constructor(i, e) {
      this.sub = i, this.dep = e, this.version = e.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var $i = class {
    constructor(i) {
      this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(i) {
      if (!xe || !tt || xe === this.computed) return;
      let e = this.activeLink;
      if (e === void 0 || e.sub !== xe) e = this.activeLink = new na(xe, this), xe.deps ? (e.prevDep = xe.depsTail, xe.depsTail.nextDep = e, xe.depsTail = e) : xe.deps = xe.depsTail = e, Er(e);
      else if (e.version === -1 && (e.version = this.version, e.nextDep)) {
        const n = e.nextDep;
        n.prevDep = e.prevDep, e.prevDep && (e.prevDep.nextDep = n), e.prevDep = xe.depsTail, e.nextDep = void 0, xe.depsTail.nextDep = e, xe.depsTail = e, xe.deps === e && (xe.deps = n);
      }
      return e;
    }
    trigger(i) {
      this.version++, fi++, this.notify(i);
    }
    notify(i) {
      Gn();
      try {
        for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
      } finally {
        qn();
      }
    }
  };
  function Er(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
      const i = t.dep.computed;
      if (i && !t.dep.subs) {
        i.flags |= 20;
        for (let n = i.deps; n; n = n.nextDep) Er(n);
      }
      const e = t.dep.subs;
      e !== t && (t.prevSub = e, e && (e.nextSub = t)), t.dep.subs = t;
    }
  }
  var Hi = /* @__PURE__ */ new WeakMap();
  var Bt = /* @__PURE__ */ Symbol("");
  var Dn = /* @__PURE__ */ Symbol("");
  var pi = /* @__PURE__ */ Symbol("");
  function Be(t, i, e) {
    if (tt && xe) {
      let n = Hi.get(t);
      n || Hi.set(t, n = /* @__PURE__ */ new Map());
      let r = n.get(e);
      r || (n.set(e, r = new $i()), r.map = n, r.key = e), r.track();
    }
  }
  function ft(t, i, e, n, r, s) {
    const o = Hi.get(t);
    if (!o) {
      fi++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (Gn(), i === "clear") o.forEach(l);
    else {
      const a = de(t), u = a && Xi(e);
      if (a && e === "length") {
        const c = Number(n);
        o.forEach((h, f) => {
          (f === "length" || f === pi || !wt(f) && f >= c) && l(h);
        });
      } else switch ((e !== void 0 || o.has(void 0)) && l(o.get(e)), u && l(o.get(pi)), i) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Bt)), Xt(t) && l(o.get(Dn)));
          break;
        case "delete":
          a || (l(o.get(Bt)), Xt(t) && l(o.get(Dn)));
          break;
        case "set":
          Xt(t) && l(o.get(Bt));
          break;
      }
    }
    qn();
  }
  function sa(t, i) {
    const e = Hi.get(t);
    return e && e.get(i);
  }
  function Gt(t) {
    const i = we(t);
    return i === t ? i : (Be(i, "iterate", pi), Ke(t) ? i : i.map(it));
  }
  function en(t) {
    return Be(t = we(t), "iterate", pi), t;
  }
  function Et(t, i) {
    return vt(t) ? $t(Vt(t) ? it(i) : i) : it(i);
  }
  var ra = { __proto__: null, [Symbol.iterator]() {
    return gn(this, Symbol.iterator, (t) => Et(this, t));
  }, concat(...t) {
    return Gt(this).concat(...t.map((i) => de(i) ? Gt(i) : i));
  }, entries() {
    return gn(this, "entries", (t) => (t[1] = Et(this, t[1]), t));
  }, every(t, i) {
    return ht(this, "every", t, i, void 0, arguments);
  }, filter(t, i) {
    return ht(this, "filter", t, i, (e) => e.map((n) => Et(this, n)), arguments);
  }, find(t, i) {
    return ht(this, "find", t, i, (e) => Et(this, e), arguments);
  }, findIndex(t, i) {
    return ht(this, "findIndex", t, i, void 0, arguments);
  }, findLast(t, i) {
    return ht(this, "findLast", t, i, (e) => Et(this, e), arguments);
  }, findLastIndex(t, i) {
    return ht(this, "findLastIndex", t, i, void 0, arguments);
  }, forEach(t, i) {
    return ht(this, "forEach", t, i, void 0, arguments);
  }, includes(...t) {
    return mn(this, "includes", t);
  }, indexOf(...t) {
    return mn(this, "indexOf", t);
  }, join(t) {
    return Gt(this).join(t);
  }, lastIndexOf(...t) {
    return mn(this, "lastIndexOf", t);
  }, map(t, i) {
    return ht(this, "map", t, i, void 0, arguments);
  }, pop() {
    return ni(this, "pop");
  }, push(...t) {
    return ni(this, "push", t);
  }, reduce(t, ...i) {
    return vs(this, "reduce", t, i);
  }, reduceRight(t, ...i) {
    return vs(this, "reduceRight", t, i);
  }, shift() {
    return ni(this, "shift");
  }, some(t, i) {
    return ht(this, "some", t, i, void 0, arguments);
  }, splice(...t) {
    return ni(this, "splice", t);
  }, toReversed() {
    return Gt(this).toReversed();
  }, toSorted(t) {
    return Gt(this).toSorted(t);
  }, toSpliced(...t) {
    return Gt(this).toSpliced(...t);
  }, unshift(...t) {
    return ni(this, "unshift", t);
  }, values() {
    return gn(this, "values", (t) => Et(this, t));
  } };
  function gn(t, i, e) {
    const n = en(t), r = n[i]();
    return n !== t && !Ke(t) && (r._next = r.next, r.next = () => {
      const s = r._next();
      return s.done || (s.value = e(s.value)), s;
    }), r;
  }
  var oa = Array.prototype;
  function ht(t, i, e, n, r, s) {
    const o = en(t), l = o !== t && !Ke(t), a = o[i];
    if (a !== oa[i]) {
      const h = a.apply(t, s);
      return l ? it(h) : h;
    }
    let u = e;
    o !== t && (l ? u = function(h, f) {
      return e.call(this, Et(t, h), f, t);
    } : e.length > 2 && (u = function(h, f) {
      return e.call(this, h, f, t);
    }));
    const c = a.call(o, u, n);
    return l && r ? r(c) : c;
  }
  function vs(t, i, e, n) {
    const r = en(t);
    let s = e;
    return r !== t && (Ke(t) ? e.length > 3 && (s = function(o, l, a) {
      return e.call(this, o, l, a, t);
    }) : s = function(o, l, a) {
      return e.call(this, o, Et(t, l), a, t);
    }), r[i](s, ...n);
  }
  function mn(t, i, e) {
    const n = we(t);
    Be(n, "iterate", pi);
    const r = n[i](...e);
    return (r === -1 || r === false) && nn(e[0]) ? (e[0] = we(e[0]), n[i](...e)) : r;
  }
  function ni(t, i, e = []) {
    gt(), Gn();
    const n = we(t)[i].apply(t, e);
    return qn(), mt(), n;
  }
  var aa = Nn("__proto__,__v_isRef,__isVue");
  var Cr = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(wt));
  function la(t) {
    wt(t) || (t = String(t));
    const i = we(this);
    return Be(i, "has", t), i.hasOwnProperty(t);
  }
  var Sr = class {
    constructor(i = false, e = false) {
      this._isReadonly = i, this._isShallow = e;
    }
    get(i, e, n) {
      if (e === "__v_skip") return i.__v_skip;
      const r = this._isReadonly, s = this._isShallow;
      if (e === "__v_isReactive") return !r;
      if (e === "__v_isReadonly") return r;
      if (e === "__v_isShallow") return s;
      if (e === "__v_raw") return n === (r ? s ? ya : Ar : s ? Dr : Rr).get(i) || Object.getPrototypeOf(i) === Object.getPrototypeOf(n) ? i : void 0;
      const o = de(i);
      if (!r) {
        let a;
        if (o && (a = ra[e])) return a;
        if (e === "hasOwnProperty") return la;
      }
      const l = Reflect.get(i, e, Le(i) ? i : n);
      if ((wt(e) ? Cr.has(e) : aa(e)) || (r || Be(i, "get", e), s)) return l;
      if (Le(l)) {
        const a = o && Xi(e) ? l : l.value;
        return r && be(a) ? Oi(a) : a;
      }
      return be(l) ? r ? Oi(l) : tn(l) : l;
    }
  };
  var Pr = class extends Sr {
    constructor(i = false) {
      super(false, i);
    }
    set(i, e, n, r) {
      let s = i[e];
      const o = de(i) && Xi(e);
      if (!this._isShallow) {
        const u = vt(s);
        if (!Ke(n) && !vt(n) && (s = we(s), n = we(n)), !o && Le(s) && !Le(n)) return u || (s.value = n), true;
      }
      const l = o ? Number(e) < i.length : _e(i, e), a = Reflect.set(i, e, n, Le(i) ? i : r);
      return i === we(r) && (l ? Pt(n, s) && ft(i, "set", e, n) : ft(i, "add", e, n)), a;
    }
    deleteProperty(i, e) {
      const n = _e(i, e);
      i[e];
      const r = Reflect.deleteProperty(i, e);
      return r && n && ft(i, "delete", e, void 0), r;
    }
    has(i, e) {
      const n = Reflect.has(i, e);
      return (!wt(e) || !Cr.has(e)) && Be(i, "has", e), n;
    }
    ownKeys(i) {
      return Be(i, "iterate", de(i) ? "length" : Bt), Reflect.ownKeys(i);
    }
  };
  var ua = class extends Sr {
    constructor(i = false) {
      super(true, i);
    }
    set(i, e) {
      return true;
    }
    deleteProperty(i, e) {
      return true;
    }
  };
  var ca = new Pr();
  var ha = new ua();
  var da = new Pr(true);
  var An = (t) => t;
  var Ei = (t) => Reflect.getPrototypeOf(t);
  function fa(t, i, e) {
    return function(...n) {
      const r = this.__v_raw, s = we(r), o = Xt(s), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, u = r[t](...n), c = e ? An : i ? $t : it;
      return !i && Be(s, "iterate", a ? Dn : Bt), ze(Object.create(u), { next() {
        const { value: h, done: f } = u.next();
        return f ? { value: h, done: f } : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f };
      } });
    };
  }
  function Ci(t) {
    return function(...i) {
      return t === "delete" ? false : t === "clear" ? void 0 : this;
    };
  }
  function pa(t, i) {
    const e = { get(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      t || (Pt(r, l) && Be(o, "get", r), Be(o, "get", l));
      const { has: a } = Ei(o), u = i ? An : t ? $t : it;
      if (a.call(o, r)) return u(s.get(r));
      if (a.call(o, l)) return u(s.get(l));
      s !== o && s.get(r);
    }, get size() {
      const r = this.__v_raw;
      return !t && Be(we(r), "iterate", Bt), r.size;
    }, has(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      return t || (Pt(r, l) && Be(o, "has", r), Be(o, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    }, forEach(r, s) {
      const o = this, l = o.__v_raw, a = we(l), u = i ? An : t ? $t : it;
      return !t && Be(a, "iterate", Bt), l.forEach((c, h) => r.call(s, u(c), u(h), o));
    } };
    return ze(e, t ? { add: Ci("add"), set: Ci("set"), delete: Ci("delete"), clear: Ci("clear") } : { add(r) {
      !i && !Ke(r) && !vt(r) && (r = we(r));
      const s = we(this);
      return Ei(s).has.call(s, r) || (s.add(r), ft(s, "add", r, r)), this;
    }, set(r, s) {
      !i && !Ke(s) && !vt(s) && (s = we(s));
      const o = we(this), { has: l, get: a } = Ei(o);
      let u = l.call(o, r);
      u || (r = we(r), u = l.call(o, r));
      const c = a.call(o, r);
      return o.set(r, s), u ? Pt(s, c) && ft(o, "set", r, s) : ft(o, "add", r, s), this;
    }, delete(r) {
      const s = we(this), { has: o, get: l } = Ei(s);
      let a = o.call(s, r);
      a || (r = we(r), a = o.call(s, r)), l && l.call(s, r);
      const u = s.delete(r);
      return a && ft(s, "delete", r, void 0), u;
    }, clear() {
      const r = we(this), s = r.size !== 0, o = r.clear();
      return s && ft(r, "clear", void 0, void 0), o;
    } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      e[r] = fa(r, t, i);
    }), e;
  }
  function Kn(t, i) {
    const e = pa(t, i);
    return (n, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(_e(e, r) && r in n ? e : n, r, s);
  }
  var ga = { get: Kn(false, false) };
  var ma = { get: Kn(false, true) };
  var va = { get: Kn(true, false) };
  var Rr = /* @__PURE__ */ new WeakMap();
  var Dr = /* @__PURE__ */ new WeakMap();
  var Ar = /* @__PURE__ */ new WeakMap();
  var ya = /* @__PURE__ */ new WeakMap();
  function wa(t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function _a(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : wa(Go(t));
  }
  function tn(t) {
    return vt(t) ? t : Xn(t, false, ca, ga, Rr);
  }
  function Ta(t) {
    return Xn(t, false, da, ma, Dr);
  }
  function Oi(t) {
    return Xn(t, true, ha, va, Ar);
  }
  function Xn(t, i, e, n, r) {
    if (!be(t) || t.__v_raw && !(i && t.__v_isReactive)) return t;
    const s = _a(t);
    if (s === 0) return t;
    const o = r.get(t);
    if (o) return o;
    const l = new Proxy(t, s === 2 ? n : e);
    return r.set(t, l), l;
  }
  function Vt(t) {
    return vt(t) ? Vt(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function vt(t) {
    return !!(t && t.__v_isReadonly);
  }
  function Ke(t) {
    return !!(t && t.__v_isShallow);
  }
  function nn(t) {
    return t ? !!t.__v_raw : false;
  }
  function we(t) {
    const i = t && t.__v_raw;
    return i ? we(i) : t;
  }
  function xa(t) {
    return !_e(t, "__v_skip") && Object.isExtensible(t) && dr(t, "__v_skip", true), t;
  }
  var it = (t) => be(t) ? tn(t) : t;
  var $t = (t) => be(t) ? Oi(t) : t;
  function Le(t) {
    return t ? t.__v_isRef === true : false;
  }
  function gi(t) {
    return Lr(t, false);
  }
  function Ue(t) {
    return Lr(t, true);
  }
  function Lr(t, i) {
    return Le(t) ? t : new ba(t, i);
  }
  var ba = class {
    constructor(i, e) {
      this.dep = new $i(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = e ? i : we(i), this._value = e ? i : it(i), this.__v_isShallow = e;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(i) {
      const e = this._rawValue, n = this.__v_isShallow || Ke(i) || vt(i);
      i = n ? i : we(i), Pt(i, e) && (this._rawValue = i, this._value = n ? i : it(i), this.dep.trigger());
    }
  };
  function sn(t) {
    return Le(t) ? t.value : t;
  }
  function Se(t) {
    return fe(t) ? t() : sn(t);
  }
  var Ea = { get: (t, i, e) => i === "__v_raw" ? t : sn(Reflect.get(t, i, e)), set: (t, i, e, n) => {
    const r = t[i];
    return Le(r) && !Le(e) ? (r.value = e, true) : Reflect.set(t, i, e, n);
  } };
  function Ir(t) {
    return Vt(t) ? t : new Proxy(t, Ea);
  }
  var Ca = class {
    constructor(i) {
      this.__v_isRef = true, this._value = void 0;
      const e = this.dep = new $i(), { get: n, set: r } = i(e.track.bind(e), e.trigger.bind(e));
      this._get = n, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(i) {
      this._set(i);
    }
  };
  function Sa(t) {
    return new Ca(t);
  }
  var Pa = class {
    constructor(i, e, n) {
      this._object = i, this._key = e, this._defaultValue = n, this.__v_isRef = true, this._value = void 0, this._raw = we(i);
      let r = true, s = i;
      if (!de(i) || !Xi(String(e))) do
        r = !nn(s) || Ke(s);
      while (r && (s = s.__v_raw));
      this._shallow = r;
    }
    get value() {
      let i = this._object[this._key];
      return this._shallow && (i = sn(i)), this._value = i === void 0 ? this._defaultValue : i;
    }
    set value(i) {
      if (this._shallow && Le(this._raw[this._key])) {
        const e = this._object[this._key];
        if (Le(e)) {
          e.value = i;
          return;
        }
      }
      this._object[this._key] = i;
    }
    get dep() {
      return sa(this._raw, this._key);
    }
  };
  var Ra = class {
    constructor(i) {
      this._getter = i, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  };
  function Da(t, i, e) {
    return Le(t) ? t : fe(t) ? new Ra(t) : be(t) && arguments.length > 1 ? Aa(t, i, e) : gi(t);
  }
  function Aa(t, i, e) {
    return new Pa(t, i, e);
  }
  var La = class {
    constructor(i, e, n) {
      this.fn = i, this.setter = e, this._value = void 0, this.dep = new $i(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !e, this.isSSR = n;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && xe !== this) return wr(this, true), true;
    }
    get value() {
      const i = this.dep.track();
      return xr(this), i && (i.version = this.dep.version), this._value;
    }
    set value(i) {
      this.setter && this.setter(i);
    }
  };
  function Ia(t, i, e = false) {
    let n, r;
    return fe(t) ? n = t : (n = t.get, r = t.set), new La(n, r, e);
  }
  var Si = {};
  var Fi = /* @__PURE__ */ new WeakMap();
  var Mt;
  function Ma(t, i = false, e = Mt) {
    if (e) {
      let n = Fi.get(e);
      n || Fi.set(e, n = []), n.push(t);
    }
  }
  function Ha(t, i, e = Te) {
    const { immediate: n, deep: r, once: s, scheduler: o, augmentJob: l, call: a } = e, u = (k) => r ? k : Ke(k) || r === false || r === 0 ? pt(k, 1) : pt(k);
    let c, h, f, m, v = false, y = false;
    if (Le(t) ? (h = () => t.value, v = Ke(t)) : Vt(t) ? (h = () => u(t), v = true) : de(t) ? (y = true, v = t.some((k) => Vt(k) || Ke(k)), h = () => t.map((k) => {
      if (Le(k)) return k.value;
      if (Vt(k)) return u(k);
      if (fe(k)) return a ? a(k, 2) : k();
    })) : fe(t) ? i ? h = a ? () => a(t, 2) : t : h = () => {
      if (f) {
        gt();
        try {
          f();
        } finally {
          mt();
        }
      }
      const k = Mt;
      Mt = c;
      try {
        return a ? a(t, 3, [m]) : t(m);
      } finally {
        Mt = k;
      }
    } : h = lt, i && r) {
      const k = h, N = r === true ? 1 / 0 : r;
      h = () => pt(k(), N);
    }
    const x = mr(), T = () => {
      c.stop(), x && x.active && Wn(x.effects, c);
    };
    if (s && i) {
      const k = i;
      i = (...N) => {
        k(...N), T();
      };
    }
    let C = y ? new Array(t.length).fill(Si) : Si;
    const H = (k) => {
      if (!(!(c.flags & 1) || !c.dirty && !k)) if (i) {
        const N = c.run();
        if (r || v || (y ? N.some((Y, K) => Pt(Y, C[K])) : Pt(N, C))) {
          f && f();
          const Y = Mt;
          Mt = c;
          try {
            const K = [N, C === Si ? void 0 : y && C[0] === Si ? [] : C, m];
            C = N, a ? a(i, 3, K) : i(...K);
          } finally {
            Mt = Y;
          }
        }
      } else c.run();
    };
    return l && l(H), c = new vr(h), c.scheduler = o ? () => o(H, false) : H, m = (k) => Ma(k, false, c), f = c.onStop = () => {
      const k = Fi.get(c);
      if (k) {
        if (a) a(k, 4);
        else for (const N of k) N();
        Fi.delete(c);
      }
    }, i ? n ? H(true) : C = c.run() : o ? o(H.bind(null, true), true) : c.run(), T.pause = c.pause.bind(c), T.resume = c.resume.bind(c), T.stop = T, T;
  }
  function pt(t, i = 1 / 0, e) {
    if (i <= 0 || !be(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Map(), (e.get(t) || 0) >= i)) return t;
    if (e.set(t, i), i--, Le(t)) pt(t.value, i, e);
    else if (de(t)) for (let n = 0; n < t.length; n++) pt(t[n], i, e);
    else if (lr(t) || Xt(t)) t.forEach((n) => {
      pt(n, i, e);
    });
    else if (hr(t)) {
      for (const n in t) pt(t[n], i, e);
      for (const n of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, n) && pt(t[n], i, e);
    }
    return t;
  }
  function Ti(t, i, e, n) {
    try {
      return n ? t(...n) : t();
    } catch (r) {
      rn(r, i, e);
    }
  }
  function ut(t, i, e, n) {
    if (fe(t)) {
      const r = Ti(t, i, e, n);
      return r && ur(r) && r.catch((s) => {
        rn(s, i, e);
      }), r;
    }
    if (de(t)) {
      const r = [];
      for (let s = 0; s < t.length; s++) r.push(ut(t[s], i, e, n));
      return r;
    }
  }
  function rn(t, i, e, n = true) {
    const r = i ? i.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = i && i.appContext.config || Te;
    if (i) {
      let l = i.parent;
      const a = i.proxy, u = `https://vuejs.org/error-reference/#runtime-${e}`;
      for (; l; ) {
        const c = l.ec;
        if (c) {
          for (let h = 0; h < c.length; h++) if (c[h](t, a, u) === false) return;
        }
        l = l.parent;
      }
      if (s) {
        gt(), Ti(s, null, 10, [t, a, u]), mt();
        return;
      }
    }
    Oa(t, e, r, n, o);
  }
  function Oa(t, i, e, n = true, r = false) {
    if (r) throw t;
    console.error(t);
  }
  var We = [];
  var ot = -1;
  var Yt = [];
  var Ct = null;
  var qt = 0;
  var Mr = Promise.resolve();
  var ki = null;
  function Yn(t) {
    const i = ki || Mr;
    return t ? i.then(this ? t.bind(this) : t) : i;
  }
  function Fa(t) {
    let i = ot + 1, e = We.length;
    for (; i < e; ) {
      const n = i + e >>> 1, r = We[n], s = mi(r);
      s < t || s === t && r.flags & 2 ? i = n + 1 : e = n;
    }
    return i;
  }
  function Jn(t) {
    if (!(t.flags & 1)) {
      const i = mi(t), e = We[We.length - 1];
      !e || !(t.flags & 2) && i >= mi(e) ? We.push(t) : We.splice(Fa(i), 0, t), t.flags |= 1, Hr();
    }
  }
  function Hr() {
    ki || (ki = Mr.then(Fr));
  }
  function ka(t) {
    de(t) ? Yt.push(...t) : Ct && t.id === -1 ? Ct.splice(qt + 1, 0, t) : t.flags & 1 || (Yt.push(t), t.flags |= 1), Hr();
  }
  function ys(t, i, e = ot + 1) {
    for (; e < We.length; e++) {
      const n = We[e];
      if (n && n.flags & 2) {
        if (t && n.id !== t.uid) continue;
        We.splice(e, 1), e--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
      }
    }
  }
  function Or(t) {
    if (Yt.length) {
      const i = [...new Set(Yt)].sort((e, n) => mi(e) - mi(n));
      if (Yt.length = 0, Ct) {
        Ct.push(...i);
        return;
      }
      for (Ct = i, qt = 0; qt < Ct.length; qt++) {
        const e = Ct[qt];
        e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
      }
      Ct = null, qt = 0;
    }
  }
  var mi = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
  function Fr(t) {
    try {
      for (ot = 0; ot < We.length; ot++) {
        const i = We[ot];
        i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), Ti(i, i.i, i.i ? 15 : 14), i.flags & 4 || (i.flags &= -2));
      }
    } finally {
      for (; ot < We.length; ot++) {
        const i = We[ot];
        i && (i.flags &= -2);
      }
      ot = -1, We.length = 0, Or(), ki = null, (We.length || Yt.length) && Fr();
    }
  }
  var He = null;
  var kr = null;
  function Bi(t) {
    const i = He;
    return He = t, kr = t && t.type.__scopeId || null, i;
  }
  function Ye(t, i = He, e) {
    if (!i || t._n) return t;
    const n = (...r) => {
      n._d && Ui(-1);
      const s = Bi(i);
      let o;
      try {
        o = t(...r);
      } finally {
        Bi(s), n._d && Ui(1);
      }
      return o;
    };
    return n._n = true, n._c = true, n._d = true, n;
  }
  function ke(t, i) {
    if (He === null) return t;
    const e = un(He), n = t.dirs || (t.dirs = []);
    for (let r = 0; r < i.length; r++) {
      let [s, o, l, a = Te] = i[r];
      s && (fe(s) && (s = { mounted: s, updated: s }), s.deep && pt(o), n.push({ dir: s, instance: e, value: o, oldValue: void 0, arg: l, modifiers: a }));
    }
    return t;
  }
  function Lt(t, i, e, n) {
    const r = t.dirs, s = i && i.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      s && (l.oldValue = s[o].value);
      let a = l.dir[n];
      a && (gt(), ut(a, e, 8, [t.el, l, t, i]), mt());
    }
  }
  function Ba(t, i) {
    if (Ve) {
      let e = Ve.provides;
      const n = Ve.parent && Ve.parent.provides;
      n === e && (e = Ve.provides = Object.create(n)), e[t] = i;
    }
  }
  function Ri(t, i, e = false) {
    const n = xi();
    if (n || Qt) {
      let r = Qt ? Qt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
      if (r && t in r) return r[t];
      if (arguments.length > 1) return e && fe(i) ? i.call(n && n.proxy) : i;
    }
  }
  var Va = /* @__PURE__ */ Symbol.for("v-scx");
  var za = () => Ri(Va);
  function ws(t, i) {
    return Qn(t, null, i);
  }
  function et(t, i, e) {
    return Qn(t, i, e);
  }
  function Qn(t, i, e = Te) {
    const { immediate: n, deep: r, flush: s, once: o } = e, l = ze({}, e), a = i && n || !i && s !== "post";
    let u;
    if (wi) {
      if (s === "sync") {
        const m = za();
        u = m.__watcherHandles || (m.__watcherHandles = []);
      } else if (!a) {
        const m = () => {
        };
        return m.stop = lt, m.resume = lt, m.pause = lt, m;
      }
    }
    const c = Ve;
    l.call = (m, v, y) => ut(m, c, v, y);
    let h = false;
    s === "post" ? l.scheduler = (m) => {
      qe(m, c && c.suspense);
    } : s !== "sync" && (h = true, l.scheduler = (m, v) => {
      v ? m() : Jn(m);
    }), l.augmentJob = (m) => {
      i && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
    };
    const f = Ha(t, i, l);
    return wi && (u ? u.push(f) : a && f()), f;
  }
  function Na(t, i, e) {
    const n = this.proxy, r = De(t) ? t.includes(".") ? Br(n, t) : () => n[t] : t.bind(n, n);
    let s;
    fe(i) ? s = i : (s = i.handler, e = i);
    const o = bi(this), l = Qn(r, s.bind(n), e);
    return o(), l;
  }
  function Br(t, i) {
    const e = i.split(".");
    return () => {
      let n = t;
      for (let r = 0; r < e.length && n; r++) n = n[e[r]];
      return n;
    };
  }
  var Ua = /* @__PURE__ */ Symbol("_vte");
  var Wa = (t) => t.__isTeleport;
  var ja = /* @__PURE__ */ Symbol("_leaveCb");
  function $n(t, i) {
    t.shapeFlag & 6 && t.component ? (t.transition = i, $n(t.component.subTree, i)) : t.shapeFlag & 128 ? (t.ssContent.transition = i.clone(t.ssContent), t.ssFallback.transition = i.clone(t.ssFallback)) : t.transition = i;
  }
  function Vi() {
    const t = xi();
    return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
  }
  function Vr(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function Ga(t) {
    const i = xi(), e = Ue(null);
    if (i) {
      const r = i.refs === Te ? i.refs = {} : i.refs;
      Object.defineProperty(r, t, { enumerable: true, get: () => e.value, set: (s) => e.value = s });
    }
    return e;
  }
  var zi = /* @__PURE__ */ new WeakMap();
  function ci(t, i, e, n, r = false) {
    if (de(t)) {
      t.forEach((v, y) => ci(v, i && (de(i) ? i[y] : i), e, n, r));
      return;
    }
    if (Jt(n) && !r) {
      n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ci(t, i, e, n.component.subTree);
      return;
    }
    const s = n.shapeFlag & 4 ? un(n.component) : n.el, o = r ? null : s, { i: l, r: a } = t, u = i && i.r, c = l.refs === Te ? l.refs = {} : l.refs, h = l.setupState, f = we(h), m = h === Te ? ar : (v) => _e(f, v);
    if (u != null && u !== a) {
      if (_s(i), De(u)) c[u] = null, m(u) && (h[u] = null);
      else if (Le(u)) {
        u.value = null;
        const v = i;
        v.k && (c[v.k] = null);
      }
    }
    if (fe(a)) Ti(a, l, 12, [o, c]);
    else {
      const v = De(a), y = Le(a);
      if (v || y) {
        const x = () => {
          if (t.f) {
            const T = v ? m(a) ? h[a] : c[a] : a.value;
            if (r) de(T) && Wn(T, s);
            else if (de(T)) T.includes(s) || T.push(s);
            else if (v) c[a] = [s], m(a) && (h[a] = c[a]);
            else {
              const C = [s];
              a.value = C, t.k && (c[t.k] = C);
            }
          } else v ? (c[a] = o, m(a) && (h[a] = o)) : y && (a.value = o, t.k && (c[t.k] = o));
        };
        if (o) {
          const T = () => {
            x(), zi.delete(t);
          };
          T.id = -1, zi.set(t, T), qe(T, e);
        } else _s(t), x();
      }
    }
  }
  function _s(t) {
    const i = zi.get(t);
    i && (i.flags |= 8, zi.delete(t));
  }
  Qi().requestIdleCallback;
  Qi().cancelIdleCallback;
  var Jt = (t) => !!t.type.__asyncLoader;
  var zr = (t) => t.type.__isKeepAlive;
  function qa(t, i) {
    Nr(t, "a", i);
  }
  function Za(t, i) {
    Nr(t, "da", i);
  }
  function Nr(t, i, e = Ve) {
    const n = t.__wdc || (t.__wdc = () => {
      let r = e;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
    if (on(i, n, e), e) {
      let r = e.parent;
      for (; r && r.parent; ) zr(r.parent.vnode) && Ka(n, i, e, r), r = r.parent;
    }
  }
  function Ka(t, i, e, n) {
    const r = on(i, t, n, true);
    Ur(() => {
      Wn(n[i], r);
    }, e);
  }
  function on(t, i, e = Ve, n = false) {
    if (e) {
      const r = e[t] || (e[t] = []), s = i.__weh || (i.__weh = (...o) => {
        gt();
        const l = bi(e), a = ut(i, e, t, o);
        return l(), mt(), a;
      });
      return n ? r.unshift(s) : r.push(s), s;
    }
  }
  var _t = (t) => (i, e = Ve) => {
    (!wi || t === "sp") && on(t, (...n) => i(...n), e);
  };
  var Xa = _t("bm");
  var es = _t("m");
  var Ya = _t("bu");
  var Ja = _t("u");
  var Qa = _t("bum");
  var Ur = _t("um");
  var $a = _t("sp");
  var el = _t("rtg");
  var tl = _t("rtc");
  function il(t, i = Ve) {
    on("ec", t, i);
  }
  var Wr = "components";
  function jr(t, i) {
    return qr(Wr, t, true, i) || t;
  }
  var Gr = /* @__PURE__ */ Symbol.for("v-ndc");
  function nl(t) {
    return De(t) ? qr(Wr, t, false) || t : t || Gr;
  }
  function qr(t, i, e = true, n = false) {
    const r = He || Ve;
    if (r) {
      const s = r.type;
      {
        const l = Nl(s, false);
        if (l && (l === i || l === Je(i) || l === Ji(Je(i)))) return s;
      }
      const o = Ts(r[t] || s[t], i) || Ts(r.appContext[t], i);
      return !o && n ? s : o;
    }
  }
  function Ts(t, i) {
    return t && (t[i] || t[Je(i)] || t[Ji(Je(i))]);
  }
  function Ce(t, i, e, n) {
    let r;
    const s = e, o = de(t);
    if (o || De(t)) {
      const l = o && Vt(t);
      let a = false, u = false;
      l && (a = !Ke(t), u = vt(t), t = en(t)), r = new Array(t.length);
      for (let c = 0, h = t.length; c < h; c++) r[c] = i(a ? u ? $t(it(t[c])) : it(t[c]) : t[c], c, void 0, s);
    } else if (typeof t == "number") {
      r = new Array(t);
      for (let l = 0; l < t; l++) r[l] = i(l + 1, l, void 0, s);
    } else if (be(t)) if (t[Symbol.iterator]) r = Array.from(t, (l, a) => i(l, a, void 0, s));
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = i(t[c], c, a, s);
      }
    }
    else r = [];
    return r;
  }
  function xs(t, i, e = {}, n, r) {
    if (He.ce || He.parent && Jt(He.parent) && He.parent.ce) {
      const u = Object.keys(e).length > 0;
      return i !== "default" && (e.name = i), E(), le(ue, null, [ie("slot", e, n)], u ? -2 : 64);
    }
    let s = t[i];
    s && s._c && (s._d = false), E();
    const o = s && Zr(s(e)), l = e.key || o && o.key, a = le(ue, { key: (l && !wt(l) ? l : `_${i}`) + (!o && n ? "_fb" : "") }, o || [], o && t._ === 1 ? 64 : -2);
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = true), a;
  }
  function Zr(t) {
    return t.some((i) => yi(i) ? !(i.type === yt || i.type === ue && !Zr(i.children)) : true) ? t : null;
  }
  var Ln = (t) => t ? fo(t) ? un(t) : Ln(t.parent) : null;
  var hi = ze(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Ln(t.parent), $root: (t) => Ln(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => Xr(t), $forceUpdate: (t) => t.f || (t.f = () => {
    Jn(t.update);
  }), $nextTick: (t) => t.n || (t.n = Yn.bind(t.proxy)), $watch: (t) => Na.bind(t) });
  var vn = (t, i) => t !== Te && !t.__isScriptSetup && _e(t, i);
  var sl = { get({ _: t }, i) {
    if (i === "__v_skip") return true;
    const { ctx: e, setupState: n, data: r, props: s, accessCache: o, type: l, appContext: a } = t;
    if (i[0] !== "$") {
      const f = o[i];
      if (f !== void 0) switch (f) {
        case 1:
          return n[i];
        case 2:
          return r[i];
        case 4:
          return e[i];
        case 3:
          return s[i];
      }
      else {
        if (vn(n, i)) return o[i] = 1, n[i];
        if (r !== Te && _e(r, i)) return o[i] = 2, r[i];
        if (_e(s, i)) return o[i] = 3, s[i];
        if (e !== Te && _e(e, i)) return o[i] = 4, e[i];
        In && (o[i] = 0);
      }
    }
    const u = hi[i];
    let c, h;
    if (u) return i === "$attrs" && Be(t.attrs, "get", ""), u(t);
    if ((c = l.__cssModules) && (c = c[i])) return c;
    if (e !== Te && _e(e, i)) return o[i] = 4, e[i];
    if (h = a.config.globalProperties, _e(h, i)) return h[i];
  }, set({ _: t }, i, e) {
    const { data: n, setupState: r, ctx: s } = t;
    return vn(r, i) ? (r[i] = e, true) : n !== Te && _e(n, i) ? (n[i] = e, true) : _e(t.props, i) || i[0] === "$" && i.slice(1) in t ? false : (s[i] = e, true);
  }, has({ _: { data: t, setupState: i, accessCache: e, ctx: n, appContext: r, props: s, type: o } }, l) {
    let a;
    return !!(e[l] || t !== Te && l[0] !== "$" && _e(t, l) || vn(i, l) || _e(s, l) || _e(n, l) || _e(hi, l) || _e(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  }, defineProperty(t, i, e) {
    return e.get != null ? t._.accessCache[i] = 0 : _e(e, "value") && this.set(t, i, e.value, null), Reflect.defineProperty(t, i, e);
  } };
  function bs(t) {
    return de(t) ? t.reduce((i, e) => (i[e] = null, i), {}) : t;
  }
  var In = true;
  function rl(t) {
    const i = Xr(t), e = t.proxy, n = t.ctx;
    In = false, i.beforeCreate && Es(i.beforeCreate, t, "bc");
    const { data: r, computed: s, methods: o, watch: l, provide: a, inject: u, created: c, beforeMount: h, mounted: f, beforeUpdate: m, updated: v, activated: y, deactivated: x, beforeDestroy: T, beforeUnmount: C, destroyed: H, unmounted: k, render: N, renderTracked: Y, renderTriggered: K, errorCaptured: q, serverPrefetch: ee, expose: ce, inheritAttrs: te, components: j, directives: ne, filters: he } = i;
    if (u && ol(u, n, null), o) for (const pe in o) {
      const ae = o[pe];
      fe(ae) && (n[pe] = ae.bind(e));
    }
    if (r) {
      const pe = r.call(e, e);
      be(pe) && (t.data = tn(pe));
    }
    if (In = true, s) for (const pe in s) {
      const ae = s[pe], Ae = fe(ae) ? ae.bind(e, e) : fe(ae.get) ? ae.get.bind(e, e) : lt, Re = !fe(ae) && fe(ae.set) ? ae.set.bind(e) : lt, Qe = Me({ get: Ae, set: Re });
      Object.defineProperty(n, pe, { enumerable: true, configurable: true, get: () => Qe.value, set: (je) => Qe.value = je });
    }
    if (l) for (const pe in l) Kr(l[pe], n, e, pe);
    if (a) {
      const pe = fe(a) ? a.call(e) : a;
      Reflect.ownKeys(pe).forEach((ae) => {
        Ba(ae, pe[ae]);
      });
    }
    c && Es(c, t, "c");
    function me(pe, ae) {
      de(ae) ? ae.forEach((Ae) => pe(Ae.bind(e))) : ae && pe(ae.bind(e));
    }
    if (me(Xa, h), me(es, f), me(Ya, m), me(Ja, v), me(qa, y), me(Za, x), me(il, q), me(tl, Y), me(el, K), me(Qa, C), me(Ur, k), me($a, ee), de(ce)) if (ce.length) {
      const pe = t.exposed || (t.exposed = {});
      ce.forEach((ae) => {
        Object.defineProperty(pe, ae, { get: () => e[ae], set: (Ae) => e[ae] = Ae, enumerable: true });
      });
    } else t.exposed || (t.exposed = {});
    N && t.render === lt && (t.render = N), te != null && (t.inheritAttrs = te), j && (t.components = j), ne && (t.directives = ne), ee && Vr(t);
  }
  function ol(t, i, e = lt) {
    de(t) && (t = Mn(t));
    for (const n in t) {
      const r = t[n];
      let s;
      be(r) ? "default" in r ? s = Ri(r.from || n, r.default, true) : s = Ri(r.from || n) : s = Ri(r), Le(s) ? Object.defineProperty(i, n, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : i[n] = s;
    }
  }
  function Es(t, i, e) {
    ut(de(t) ? t.map((n) => n.bind(i.proxy)) : t.bind(i.proxy), i, e);
  }
  function Kr(t, i, e, n) {
    let r = n.includes(".") ? Br(e, n) : () => e[n];
    if (De(t)) {
      const s = i[t];
      fe(s) && et(r, s);
    } else if (fe(t)) et(r, t.bind(e));
    else if (be(t)) if (de(t)) t.forEach((s) => Kr(s, i, e, n));
    else {
      const s = fe(t.handler) ? t.handler.bind(e) : i[t.handler];
      fe(s) && et(r, s, t);
    }
  }
  function Xr(t) {
    const i = t.type, { mixins: e, extends: n } = i, { mixins: r, optionsCache: s, config: { optionMergeStrategies: o } } = t.appContext, l = s.get(i);
    let a;
    return l ? a = l : !r.length && !e && !n ? a = i : (a = {}, r.length && r.forEach((u) => Ni(a, u, o, true)), Ni(a, i, o)), be(i) && s.set(i, a), a;
  }
  function Ni(t, i, e, n = false) {
    const { mixins: r, extends: s } = i;
    s && Ni(t, s, e, true), r && r.forEach((o) => Ni(t, o, e, true));
    for (const o in i) if (!(n && o === "expose")) {
      const l = al[o] || e && e[o];
      t[o] = l ? l(t[o], i[o]) : i[o];
    }
    return t;
  }
  var al = { data: Cs, props: Ss, emits: Ss, methods: oi, computed: oi, beforeCreate: Ne, created: Ne, beforeMount: Ne, mounted: Ne, beforeUpdate: Ne, updated: Ne, beforeDestroy: Ne, beforeUnmount: Ne, destroyed: Ne, unmounted: Ne, activated: Ne, deactivated: Ne, errorCaptured: Ne, serverPrefetch: Ne, components: oi, directives: oi, watch: ul, provide: Cs, inject: ll };
  function Cs(t, i) {
    return i ? t ? function() {
      return ze(fe(t) ? t.call(this, this) : t, fe(i) ? i.call(this, this) : i);
    } : i : t;
  }
  function ll(t, i) {
    return oi(Mn(t), Mn(i));
  }
  function Mn(t) {
    if (de(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) i[t[e]] = t[e];
      return i;
    }
    return t;
  }
  function Ne(t, i) {
    return t ? [...new Set([].concat(t, i))] : i;
  }
  function oi(t, i) {
    return t ? ze(/* @__PURE__ */ Object.create(null), t, i) : i;
  }
  function Ss(t, i) {
    return t ? de(t) && de(i) ? [.../* @__PURE__ */ new Set([...t, ...i])] : ze(/* @__PURE__ */ Object.create(null), bs(t), bs(i ?? {})) : i;
  }
  function ul(t, i) {
    if (!t) return i;
    if (!i) return t;
    const e = ze(/* @__PURE__ */ Object.create(null), t);
    for (const n in i) e[n] = Ne(t[n], i[n]);
    return e;
  }
  function Yr() {
    return { app: null, config: { isNativeTag: ar, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  var cl = 0;
  function hl(t, i) {
    return function(n, r = null) {
      fe(n) || (n = ze({}, n)), r != null && !be(r) && (r = null);
      const s = Yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const u = s.app = { _uid: cl++, _component: n, _props: r, _container: null, _context: s, _instance: null, version: jl, get config() {
        return s.config;
      }, set config(c) {
      }, use(c, ...h) {
        return o.has(c) || (c && fe(c.install) ? (o.add(c), c.install(u, ...h)) : fe(c) && (o.add(c), c(u, ...h))), u;
      }, mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      }, component(c, h) {
        return h ? (s.components[c] = h, u) : s.components[c];
      }, directive(c, h) {
        return h ? (s.directives[c] = h, u) : s.directives[c];
      }, mount(c, h, f) {
        if (!a) {
          const m = u._ceVNode || ie(n, r);
          return m.appContext = s, f === true ? f = "svg" : f === false && (f = void 0), t(m, c, f), a = true, u._container = c, c.__vue_app__ = u, un(m.component);
        }
      }, onUnmount(c) {
        l.push(c);
      }, unmount() {
        a && (ut(l, u._instance, 16), t(null, u._container), delete u._container.__vue_app__);
      }, provide(c, h) {
        return s.provides[c] = h, u;
      }, runWithContext(c) {
        const h = Qt;
        Qt = u;
        try {
          return c();
        } finally {
          Qt = h;
        }
      } };
      return u;
    };
  }
  var Qt = null;
  var dl = (t, i) => i === "modelValue" || i === "model-value" ? t.modelModifiers : t[`${i}Modifiers`] || t[`${Je(i)}Modifiers`] || t[`${Dt(i)}Modifiers`];
  function fl(t, i, ...e) {
    if (t.isUnmounted) return;
    const n = t.vnode.props || Te;
    let r = e;
    const s = i.startsWith("update:"), o = s && dl(n, i.slice(7));
    o && (o.trim && (r = e.map((c) => De(c) ? c.trim() : c)), o.number && (r = e.map(jn)));
    let l, a = n[l = dn(i)] || n[l = dn(Je(i))];
    !a && s && (a = n[l = dn(Dt(i))]), a && ut(a, t, 6, r);
    const u = n[l + "Once"];
    if (u) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[l]) return;
      t.emitted[l] = true, ut(u, t, 6, r);
    }
  }
  var pl = /* @__PURE__ */ new WeakMap();
  function Jr(t, i, e = false) {
    const n = e ? pl : i.emitsCache, r = n.get(t);
    if (r !== void 0) return r;
    const s = t.emits;
    let o = {}, l = false;
    if (!fe(t)) {
      const a = (u) => {
        const c = Jr(u, i, true);
        c && (l = true, ze(o, c));
      };
      !e && i.mixins.length && i.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
    }
    return !s && !l ? (be(t) && n.set(t, null), null) : (de(s) ? s.forEach((a) => o[a] = null) : ze(o, s), be(t) && n.set(t, o), o);
  }
  function an(t, i) {
    return !t || !Zi(i) ? false : (i = i.slice(2).replace(/Once$/, ""), _e(t, i[0].toLowerCase() + i.slice(1)) || _e(t, Dt(i)) || _e(t, i));
  }
  function Ps(t) {
    const { type: i, vnode: e, proxy: n, withProxy: r, propsOptions: [s], slots: o, attrs: l, emit: a, render: u, renderCache: c, props: h, data: f, setupState: m, ctx: v, inheritAttrs: y } = t, x = Bi(t);
    let T, C;
    try {
      if (e.shapeFlag & 4) {
        const k = r || n, N = k;
        T = at(u.call(N, k, c, h, m, f, v)), C = l;
      } else {
        const k = i;
        T = at(k.length > 1 ? k(h, { attrs: l, slots: o, emit: a }) : k(h, null)), C = i.props ? l : gl(l);
      }
    } catch (k) {
      di.length = 0, rn(k, t, 1), T = ie(yt);
    }
    let H = T;
    if (C && y !== false) {
      const k = Object.keys(C), { shapeFlag: N } = H;
      k.length && N & 7 && (s && k.some(Un) && (C = ml(C, s)), H = ei(H, C, false, true));
    }
    return e.dirs && (H = ei(H, null, false, true), H.dirs = H.dirs ? H.dirs.concat(e.dirs) : e.dirs), e.transition && $n(H, e.transition), T = H, Bi(x), T;
  }
  var gl = (t) => {
    let i;
    for (const e in t) (e === "class" || e === "style" || Zi(e)) && ((i || (i = {}))[e] = t[e]);
    return i;
  };
  var ml = (t, i) => {
    const e = {};
    for (const n in t) (!Un(n) || !(n.slice(9) in i)) && (e[n] = t[n]);
    return e;
  };
  function vl(t, i, e) {
    const { props: n, children: r, component: s } = t, { props: o, children: l, patchFlag: a } = i, u = s.emitsOptions;
    if (i.dirs || i.transition) return true;
    if (e && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return n ? Rs(n, o, u) : !!o;
      if (a & 8) {
        const c = i.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          const f = c[h];
          if (o[f] !== n[f] && !an(u, f)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : n === o ? false : n ? o ? Rs(n, o, u) : true : !!o;
    return false;
  }
  function Rs(t, i, e) {
    const n = Object.keys(i);
    if (n.length !== Object.keys(t).length) return true;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (i[s] !== t[s] && !an(e, s)) return true;
    }
    return false;
  }
  function yl({ vnode: t, parent: i }, e) {
    for (; i; ) {
      const n = i.subTree;
      if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t) (t = i.vnode).el = e, i = i.parent;
      else break;
    }
  }
  var Qr = {};
  var $r = () => Object.create(Qr);
  var eo = (t) => Object.getPrototypeOf(t) === Qr;
  function wl(t, i, e, n = false) {
    const r = {}, s = $r();
    t.propsDefaults = /* @__PURE__ */ Object.create(null), to(t, i, r, s);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    e ? t.props = n ? r : Ta(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
  }
  function _l(t, i, e, n) {
    const { props: r, attrs: s, vnode: { patchFlag: o } } = t, l = we(r), [a] = t.propsOptions;
    let u = false;
    if ((n || o > 0) && !(o & 16)) {
      if (o & 8) {
        const c = t.vnode.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          let f = c[h];
          if (an(t.emitsOptions, f)) continue;
          const m = i[f];
          if (a) if (_e(s, f)) m !== s[f] && (s[f] = m, u = true);
          else {
            const v = Je(f);
            r[v] = Hn(a, l, v, m, t, false);
          }
          else m !== s[f] && (s[f] = m, u = true);
        }
      }
    } else {
      to(t, i, r, s) && (u = true);
      let c;
      for (const h in l) (!i || !_e(i, h) && ((c = Dt(h)) === h || !_e(i, c))) && (a ? e && (e[h] !== void 0 || e[c] !== void 0) && (r[h] = Hn(a, l, h, void 0, t, true)) : delete r[h]);
      if (s !== l) for (const h in s) (!i || !_e(i, h)) && (delete s[h], u = true);
    }
    u && ft(t.attrs, "set", "");
  }
  function to(t, i, e, n) {
    const [r, s] = t.propsOptions;
    let o = false, l;
    if (i) for (let a in i) {
      if (ai(a)) continue;
      const u = i[a];
      let c;
      r && _e(r, c = Je(a)) ? !s || !s.includes(c) ? e[c] = u : (l || (l = {}))[c] = u : an(t.emitsOptions, a) || (!(a in n) || u !== n[a]) && (n[a] = u, o = true);
    }
    if (s) {
      const a = we(e), u = l || Te;
      for (let c = 0; c < s.length; c++) {
        const h = s[c];
        e[h] = Hn(r, a, h, u[h], t, !_e(u, h));
      }
    }
    return o;
  }
  function Hn(t, i, e, n, r, s) {
    const o = t[e];
    if (o != null) {
      const l = _e(o, "default");
      if (l && n === void 0) {
        const a = o.default;
        if (o.type !== Function && !o.skipFactory && fe(a)) {
          const { propsDefaults: u } = r;
          if (e in u) n = u[e];
          else {
            const c = bi(r);
            n = u[e] = a.call(null, i), c();
          }
        } else n = a;
        r.ce && r.ce._setProp(e, n);
      }
      o[0] && (s && !l ? n = false : o[1] && (n === "" || n === Dt(e)) && (n = true));
    }
    return n;
  }
  var Tl = /* @__PURE__ */ new WeakMap();
  function io(t, i, e = false) {
    const n = e ? Tl : i.propsCache, r = n.get(t);
    if (r) return r;
    const s = t.props, o = {}, l = [];
    let a = false;
    if (!fe(t)) {
      const c = (h) => {
        a = true;
        const [f, m] = io(h, i, true);
        ze(o, f), m && l.push(...m);
      };
      !e && i.mixins.length && i.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
    }
    if (!s && !a) return be(t) && n.set(t, Kt), Kt;
    if (de(s)) for (let c = 0; c < s.length; c++) {
      const h = Je(s[c]);
      Ds(h) && (o[h] = Te);
    }
    else if (s) for (const c in s) {
      const h = Je(c);
      if (Ds(h)) {
        const f = s[c], m = o[h] = de(f) || fe(f) ? { type: f } : ze({}, f), v = m.type;
        let y = false, x = true;
        if (de(v)) for (let T = 0; T < v.length; ++T) {
          const C = v[T], H = fe(C) && C.name;
          if (H === "Boolean") {
            y = true;
            break;
          } else H === "String" && (x = false);
        }
        else y = fe(v) && v.name === "Boolean";
        m[0] = y, m[1] = x, (y || _e(m, "default")) && l.push(h);
      }
    }
    const u = [o, l];
    return be(t) && n.set(t, u), u;
  }
  function Ds(t) {
    return t[0] !== "$" && !ai(t);
  }
  var ts = (t) => t === "_" || t === "_ctx" || t === "$stable";
  var is = (t) => de(t) ? t.map(at) : [at(t)];
  var xl = (t, i, e) => {
    if (i._n) return i;
    const n = Ye((...r) => is(i(...r)), e);
    return n._c = false, n;
  };
  var no = (t, i, e) => {
    const n = t._ctx;
    for (const r in t) {
      if (ts(r)) continue;
      const s = t[r];
      if (fe(s)) i[r] = xl(r, s, n);
      else if (s != null) {
        const o = is(s);
        i[r] = () => o;
      }
    }
  };
  var so = (t, i) => {
    const e = is(i);
    t.slots.default = () => e;
  };
  var ro = (t, i, e) => {
    for (const n in i) (e || !ts(n)) && (t[n] = i[n]);
  };
  var bl = (t, i, e) => {
    const n = t.slots = $r();
    if (t.vnode.shapeFlag & 32) {
      const r = i._;
      r ? (ro(n, i, e), e && dr(n, "_", r, true)) : no(i, n);
    } else i && so(t, i);
  };
  var El = (t, i, e) => {
    const { vnode: n, slots: r } = t;
    let s = true, o = Te;
    if (n.shapeFlag & 32) {
      const l = i._;
      l ? e && l === 1 ? s = false : ro(r, i, e) : (s = !i.$stable, no(i, r)), o = i;
    } else i && (so(t, i), o = { default: 1 });
    if (s) for (const l in r) !ts(l) && o[l] == null && delete r[l];
  };
  var qe = Dl;
  function Cl(t) {
    return Sl(t);
  }
  function Sl(t, i) {
    const e = Qi();
    e.__VUE__ = true;
    const { insert: n, remove: r, patchProp: s, createElement: o, createText: l, createComment: a, setText: u, setElementText: c, parentNode: h, nextSibling: f, setScopeId: m = lt, insertStaticContent: v } = t, y = (P, D, F, U = null, z = null, d = null, w = void 0, S = null, L = !!D.dynamicChildren) => {
      if (P === D) return;
      P && !si(P, D) && (U = $e(P), je(P, z, d, true), P = null), D.patchFlag === -2 && (L = false, D.dynamicChildren = null);
      const { type: I, ref: V, shapeFlag: M } = D;
      switch (I) {
        case ln:
          x(P, D, F, U);
          break;
        case yt:
          T(P, D, F, U);
          break;
        case Di:
          P == null && C(D, F, U, w);
          break;
        case ue:
          j(P, D, F, U, z, d, w, S, L);
          break;
        default:
          M & 1 ? N(P, D, F, U, z, d, w, S, L) : M & 6 ? ne(P, D, F, U, z, d, w, S, L) : (M & 64 || M & 128) && I.process(P, D, F, U, z, d, w, S, L, st);
      }
      V != null && z ? ci(V, P && P.ref, d, D || P, !D) : V == null && P && P.ref != null && ci(P.ref, null, d, P, true);
    }, x = (P, D, F, U) => {
      if (P == null) n(D.el = l(D.children), F, U);
      else {
        const z = D.el = P.el;
        D.children !== P.children && u(z, D.children);
      }
    }, T = (P, D, F, U) => {
      P == null ? n(D.el = a(D.children || ""), F, U) : D.el = P.el;
    }, C = (P, D, F, U) => {
      [P.el, P.anchor] = v(P.children, D, F, U, P.el, P.anchor);
    }, H = ({ el: P, anchor: D }, F, U) => {
      let z;
      for (; P && P !== D; ) z = f(P), n(P, F, U), P = z;
      n(D, F, U);
    }, k = ({ el: P, anchor: D }) => {
      let F;
      for (; P && P !== D; ) F = f(P), r(P), P = F;
      r(D);
    }, N = (P, D, F, U, z, d, w, S, L) => {
      if (D.type === "svg" ? w = "svg" : D.type === "math" && (w = "mathml"), P == null) Y(D, F, U, z, d, w, S, L);
      else {
        const I = P.el && P.el._isVueCE ? P.el : null;
        try {
          I && I._beginPatch(), ee(P, D, z, d, w, S, L);
        } finally {
          I && I._endPatch();
        }
      }
    }, Y = (P, D, F, U, z, d, w, S) => {
      let L, I;
      const { props: V, shapeFlag: M, transition: W, dirs: Z } = P;
      if (L = P.el = o(P.type, d, V && V.is, V), M & 8 ? c(L, P.children) : M & 16 && q(P.children, L, null, U, z, yn(P, d), w, S), Z && Lt(P, null, U, "created"), K(L, P, P.scopeId, w, U), V) {
        for (const X in V) X !== "value" && !ai(X) && s(L, X, null, V[X], d, U);
        "value" in V && s(L, "value", null, V.value, d), (I = V.onVnodeBeforeMount) && rt(I, U, P);
      }
      Z && Lt(P, null, U, "beforeMount");
      const se = Pl(z, W);
      se && W.beforeEnter(L), n(L, D, F), ((I = V && V.onVnodeMounted) || se || Z) && qe(() => {
        I && rt(I, U, P), se && W.enter(L), Z && Lt(P, null, U, "mounted");
      }, z);
    }, K = (P, D, F, U, z) => {
      if (F && m(P, F), U) for (let d = 0; d < U.length; d++) m(P, U[d]);
      if (z) {
        let d = z.subTree;
        if (D === d || uo(d.type) && (d.ssContent === D || d.ssFallback === D)) {
          const w = z.vnode;
          K(P, w, w.scopeId, w.slotScopeIds, z.parent);
        }
      }
    }, q = (P, D, F, U, z, d, w, S, L = 0) => {
      for (let I = L; I < P.length; I++) {
        const V = P[I] = S ? St(P[I]) : at(P[I]);
        y(null, V, D, F, U, z, d, w, S);
      }
    }, ee = (P, D, F, U, z, d, w) => {
      const S = D.el = P.el;
      let { patchFlag: L, dynamicChildren: I, dirs: V } = D;
      L |= P.patchFlag & 16;
      const M = P.props || Te, W = D.props || Te;
      let Z;
      if (F && It(F, false), (Z = W.onVnodeBeforeUpdate) && rt(Z, F, D, P), V && Lt(D, P, F, "beforeUpdate"), F && It(F, true), (M.innerHTML && W.innerHTML == null || M.textContent && W.textContent == null) && c(S, ""), I ? ce(P.dynamicChildren, I, S, F, U, yn(D, z), d) : w || ae(P, D, S, null, F, U, yn(D, z), d, false), L > 0) {
        if (L & 16) te(S, M, W, F, z);
        else if (L & 2 && M.class !== W.class && s(S, "class", null, W.class, z), L & 4 && s(S, "style", M.style, W.style, z), L & 8) {
          const se = D.dynamicProps;
          for (let X = 0; X < se.length; X++) {
            const oe = se[X], g = M[oe], p = W[oe];
            (p !== g || oe === "value") && s(S, oe, g, p, z, F);
          }
        }
        L & 1 && P.children !== D.children && c(S, D.children);
      } else !w && I == null && te(S, M, W, F, z);
      ((Z = W.onVnodeUpdated) || V) && qe(() => {
        Z && rt(Z, F, D, P), V && Lt(D, P, F, "updated");
      }, U);
    }, ce = (P, D, F, U, z, d, w) => {
      for (let S = 0; S < D.length; S++) {
        const L = P[S], I = D[S], V = L.el && (L.type === ue || !si(L, I) || L.shapeFlag & 198) ? h(L.el) : F;
        y(L, I, V, null, U, z, d, w, true);
      }
    }, te = (P, D, F, U, z) => {
      if (D !== F) {
        if (D !== Te) for (const d in D) !ai(d) && !(d in F) && s(P, d, D[d], null, z, U);
        for (const d in F) {
          if (ai(d)) continue;
          const w = F[d], S = D[d];
          w !== S && d !== "value" && s(P, d, S, w, z, U);
        }
        "value" in F && s(P, "value", D.value, F.value, z);
      }
    }, j = (P, D, F, U, z, d, w, S, L) => {
      const I = D.el = P ? P.el : l(""), V = D.anchor = P ? P.anchor : l("");
      let { patchFlag: M, dynamicChildren: W, slotScopeIds: Z } = D;
      Z && (S = S ? S.concat(Z) : Z), P == null ? (n(I, F, U), n(V, F, U), q(D.children || [], F, V, z, d, w, S, L)) : M > 0 && M & 64 && W && P.dynamicChildren && P.dynamicChildren.length === W.length ? (ce(P.dynamicChildren, W, F, z, d, w, S), (D.key != null || z && D === z.subTree) && oo(P, D, true)) : ae(P, D, F, V, z, d, w, S, L);
    }, ne = (P, D, F, U, z, d, w, S, L) => {
      D.slotScopeIds = S, P == null ? D.shapeFlag & 512 ? z.ctx.activate(D, F, U, w, L) : he(D, F, U, z, d, w, L) : ye(P, D, L);
    }, he = (P, D, F, U, z, d, w) => {
      const S = P.component = Fl(P, U, z);
      if (zr(P) && (S.ctx.renderer = st), kl(S, false, w), S.asyncDep) {
        if (z && z.registerDep(S, me, w), !P.el) {
          const L = S.subTree = ie(yt);
          T(null, L, D, F), P.placeholder = L.el;
        }
      } else me(S, P, D, F, z, d, w);
    }, ye = (P, D, F) => {
      const U = D.component = P.component;
      if (vl(P, D, F)) if (U.asyncDep && !U.asyncResolved) {
        pe(U, D, F);
        return;
      } else U.next = D, U.update();
      else D.el = P.el, U.vnode = D;
    }, me = (P, D, F, U, z, d, w) => {
      const S = () => {
        if (P.isMounted) {
          let { next: M, bu: W, u: Z, parent: se, vnode: X } = P;
          {
            const b = ao(P);
            if (b) {
              M && (M.el = X.el, pe(P, M, w)), b.asyncDep.then(() => {
                P.isUnmounted || S();
              });
              return;
            }
          }
          let oe = M, g;
          It(P, false), M ? (M.el = X.el, pe(P, M, w)) : M = X, W && Pi(W), (g = M.props && M.props.onVnodeBeforeUpdate) && rt(g, se, M, X), It(P, true);
          const p = Ps(P), _ = P.subTree;
          P.subTree = p, y(_, p, h(_.el), $e(_), P, z, d), M.el = p.el, oe === null && yl(P, p.el), Z && qe(Z, z), (g = M.props && M.props.onVnodeUpdated) && qe(() => rt(g, se, M, X), z);
        } else {
          let M;
          const { el: W, props: Z } = D, { bm: se, m: X, parent: oe, root: g, type: p } = P, _ = Jt(D);
          It(P, false), se && Pi(se), !_ && (M = Z && Z.onVnodeBeforeMount) && rt(M, oe, D), It(P, true);
          {
            g.ce && g.ce._def.shadowRoot !== false && g.ce._injectChildStyle(p);
            const b = P.subTree = Ps(P);
            y(null, b, F, U, P, z, d), D.el = b.el;
          }
          if (X && qe(X, z), !_ && (M = Z && Z.onVnodeMounted)) {
            const b = D;
            qe(() => rt(M, oe, b), z);
          }
          (D.shapeFlag & 256 || oe && Jt(oe.vnode) && oe.vnode.shapeFlag & 256) && P.a && qe(P.a, z), P.isMounted = true, D = F = U = null;
        }
      };
      P.scope.on();
      const L = P.effect = new vr(S);
      P.scope.off();
      const I = P.update = L.run.bind(L), V = P.job = L.runIfDirty.bind(L);
      V.i = P, V.id = P.uid, L.scheduler = () => Jn(V), It(P, true), I();
    }, pe = (P, D, F) => {
      D.component = P;
      const U = P.vnode.props;
      P.vnode = D, P.next = null, _l(P, D.props, U, F), El(P, D.children, F), gt(), ys(P), mt();
    }, ae = (P, D, F, U, z, d, w, S, L = false) => {
      const I = P && P.children, V = P ? P.shapeFlag : 0, M = D.children, { patchFlag: W, shapeFlag: Z } = D;
      if (W > 0) {
        if (W & 128) {
          Re(I, M, F, U, z, d, w, S, L);
          return;
        } else if (W & 256) {
          Ae(I, M, F, U, z, d, w, S, L);
          return;
        }
      }
      Z & 8 ? (V & 16 && nt(I, z, d), M !== I && c(F, M)) : V & 16 ? Z & 16 ? Re(I, M, F, U, z, d, w, S, L) : nt(I, z, d, true) : (V & 8 && c(F, ""), Z & 16 && q(M, F, U, z, d, w, S, L));
    }, Ae = (P, D, F, U, z, d, w, S, L) => {
      P = P || Kt, D = D || Kt;
      const I = P.length, V = D.length, M = Math.min(I, V);
      let W;
      for (W = 0; W < M; W++) {
        const Z = D[W] = L ? St(D[W]) : at(D[W]);
        y(P[W], Z, F, null, z, d, w, S, L);
      }
      I > V ? nt(P, z, d, true, false, M) : q(D, F, U, z, d, w, S, L, M);
    }, Re = (P, D, F, U, z, d, w, S, L) => {
      let I = 0;
      const V = D.length;
      let M = P.length - 1, W = V - 1;
      for (; I <= M && I <= W; ) {
        const Z = P[I], se = D[I] = L ? St(D[I]) : at(D[I]);
        if (si(Z, se)) y(Z, se, F, null, z, d, w, S, L);
        else break;
        I++;
      }
      for (; I <= M && I <= W; ) {
        const Z = P[M], se = D[W] = L ? St(D[W]) : at(D[W]);
        if (si(Z, se)) y(Z, se, F, null, z, d, w, S, L);
        else break;
        M--, W--;
      }
      if (I > M) {
        if (I <= W) {
          const Z = W + 1, se = Z < V ? D[Z].el : U;
          for (; I <= W; ) y(null, D[I] = L ? St(D[I]) : at(D[I]), F, se, z, d, w, S, L), I++;
        }
      } else if (I > W) for (; I <= M; ) je(P[I], z, d, true), I++;
      else {
        const Z = I, se = I, X = /* @__PURE__ */ new Map();
        for (I = se; I <= W; I++) {
          const Q = D[I] = L ? St(D[I]) : at(D[I]);
          Q.key != null && X.set(Q.key, I);
        }
        let oe, g = 0;
        const p = W - se + 1;
        let _ = false, b = 0;
        const O = new Array(p);
        for (I = 0; I < p; I++) O[I] = 0;
        for (I = Z; I <= M; I++) {
          const Q = P[I];
          if (g >= p) {
            je(Q, z, d, true);
            continue;
          }
          let ve;
          if (Q.key != null) ve = X.get(Q.key);
          else for (oe = se; oe <= W; oe++) if (O[oe - se] === 0 && si(Q, D[oe])) {
            ve = oe;
            break;
          }
          ve === void 0 ? je(Q, z, d, true) : (O[ve - se] = I + 1, ve >= b ? b = ve : _ = true, y(Q, D[ve], F, null, z, d, w, S, L), g++);
        }
        const G = _ ? Rl(O) : Kt;
        for (oe = G.length - 1, I = p - 1; I >= 0; I--) {
          const Q = se + I, ve = D[Q], re = D[Q + 1], Oe = Q + 1 < V ? re.el || lo(re) : U;
          O[I] === 0 ? y(null, ve, F, Oe, z, d, w, S, L) : _ && (oe < 0 || I !== G[oe] ? Qe(ve, F, Oe, 2) : oe--);
        }
      }
    }, Qe = (P, D, F, U, z = null) => {
      const { el: d, type: w, transition: S, children: L, shapeFlag: I } = P;
      if (I & 6) {
        Qe(P.component.subTree, D, F, U);
        return;
      }
      if (I & 128) {
        P.suspense.move(D, F, U);
        return;
      }
      if (I & 64) {
        w.move(P, D, F, st);
        return;
      }
      if (w === ue) {
        n(d, D, F);
        for (let M = 0; M < L.length; M++) Qe(L[M], D, F, U);
        n(P.anchor, D, F);
        return;
      }
      if (w === Di) {
        H(P, D, F);
        return;
      }
      if (U !== 2 && I & 1 && S) if (U === 0) S.beforeEnter(d), n(d, D, F), qe(() => S.enter(d), z);
      else {
        const { leave: M, delayLeave: W, afterLeave: Z } = S, se = () => {
          P.ctx.isUnmounted ? r(d) : n(d, D, F);
        }, X = () => {
          d._isLeaving && d[ja](true), M(d, () => {
            se(), Z && Z();
          });
        };
        W ? W(d, se, X) : X();
      }
      else n(d, D, F);
    }, je = (P, D, F, U = false, z = false) => {
      const { type: d, props: w, ref: S, children: L, dynamicChildren: I, shapeFlag: V, patchFlag: M, dirs: W, cacheIndex: Z } = P;
      if (M === -2 && (z = false), S != null && (gt(), ci(S, null, F, P, true), mt()), Z != null && (D.renderCache[Z] = void 0), V & 256) {
        D.ctx.deactivate(P);
        return;
      }
      const se = V & 1 && W, X = !Jt(P);
      let oe;
      if (X && (oe = w && w.onVnodeBeforeUnmount) && rt(oe, D, P), V & 6) Ut(P.component, F, U);
      else {
        if (V & 128) {
          P.suspense.unmount(F, U);
          return;
        }
        se && Lt(P, null, D, "beforeUnmount"), V & 64 ? P.type.remove(P, D, F, st, U) : I && !I.hasOnce && (d !== ue || M > 0 && M & 64) ? nt(I, D, F, false, true) : (d === ue && M & 384 || !z && V & 16) && nt(L, D, F), U && ge(P);
      }
      (X && (oe = w && w.onVnodeUnmounted) || se) && qe(() => {
        oe && rt(oe, D, P), se && Lt(P, null, D, "unmounted");
      }, F);
    }, ge = (P) => {
      const { type: D, el: F, anchor: U, transition: z } = P;
      if (D === ue) {
        Nt(F, U);
        return;
      }
      if (D === Di) {
        k(P);
        return;
      }
      const d = () => {
        r(F), z && !z.persisted && z.afterLeave && z.afterLeave();
      };
      if (P.shapeFlag & 1 && z && !z.persisted) {
        const { leave: w, delayLeave: S } = z, L = () => w(F, d);
        S ? S(P.el, d, L) : L();
      } else d();
    }, Nt = (P, D) => {
      let F;
      for (; P !== D; ) F = f(P), r(P), P = F;
      r(D);
    }, Ut = (P, D, F) => {
      const { bum: U, scope: z, job: d, subTree: w, um: S, m: L, a: I } = P;
      As(L), As(I), U && Pi(U), z.stop(), d && (d.flags |= 8, je(w, P, D, F)), S && qe(S, D), qe(() => {
        P.isUnmounted = true;
      }, D);
    }, nt = (P, D, F, U = false, z = false, d = 0) => {
      for (let w = d; w < P.length; w++) je(P[w], D, F, U, z);
    }, $e = (P) => {
      if (P.shapeFlag & 6) return $e(P.component.subTree);
      if (P.shapeFlag & 128) return P.suspense.next();
      const D = f(P.anchor || P.el), F = D && D[Ua];
      return F ? f(F) : D;
    };
    let bt = false;
    const Wt = (P, D, F) => {
      let U;
      P == null ? D._vnode && (je(D._vnode, null, null, true), U = D._vnode.component) : y(D._vnode || null, P, D, null, null, null, F), D._vnode = P, bt || (bt = true, ys(U), Or(), bt = false);
    }, st = { p: y, um: je, m: Qe, r: ge, mt: he, mc: q, pc: ae, pbc: ce, n: $e, o: t };
    return { render: Wt, hydrate: void 0, createApp: hl(Wt) };
  }
  function yn({ type: t, props: i }, e) {
    return e === "svg" && t === "foreignObject" || e === "mathml" && t === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : e;
  }
  function It({ effect: t, job: i }, e) {
    e ? (t.flags |= 32, i.flags |= 4) : (t.flags &= -33, i.flags &= -5);
  }
  function Pl(t, i) {
    return (!t || t && !t.pendingBranch) && i && !i.persisted;
  }
  function oo(t, i, e = false) {
    const n = t.children, r = i.children;
    if (de(n) && de(r)) for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = St(r[s]), l.el = o.el), !e && l.patchFlag !== -2 && oo(o, l)), l.type === ln && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = s + (t.type === ue ? 1 : 0)), l.type === yt && !l.el && (l.el = o.el);
    }
  }
  function Rl(t) {
    const i = t.slice(), e = [0];
    let n, r, s, o, l;
    const a = t.length;
    for (n = 0; n < a; n++) {
      const u = t[n];
      if (u !== 0) {
        if (r = e[e.length - 1], t[r] < u) {
          i[n] = r, e.push(n);
          continue;
        }
        for (s = 0, o = e.length - 1; s < o; ) l = s + o >> 1, t[e[l]] < u ? s = l + 1 : o = l;
        u < t[e[s]] && (s > 0 && (i[n] = e[s - 1]), e[s] = n);
      }
    }
    for (s = e.length, o = e[s - 1]; s-- > 0; ) e[s] = o, o = i[o];
    return e;
  }
  function ao(t) {
    const i = t.subTree.component;
    if (i) return i.asyncDep && !i.asyncResolved ? i : ao(i);
  }
  function As(t) {
    if (t) for (let i = 0; i < t.length; i++) t[i].flags |= 8;
  }
  function lo(t) {
    if (t.placeholder) return t.placeholder;
    const i = t.component;
    return i ? lo(i.subTree) : null;
  }
  var uo = (t) => t.__isSuspense;
  function Dl(t, i) {
    i && i.pendingBranch ? de(t) ? i.effects.push(...t) : i.effects.push(t) : ka(t);
  }
  var ue = /* @__PURE__ */ Symbol.for("v-fgt");
  var ln = /* @__PURE__ */ Symbol.for("v-txt");
  var yt = /* @__PURE__ */ Symbol.for("v-cmt");
  var Di = /* @__PURE__ */ Symbol.for("v-stc");
  var di = [];
  var Ze = null;
  function E(t = false) {
    di.push(Ze = t ? null : []);
  }
  function Al() {
    di.pop(), Ze = di[di.length - 1] || null;
  }
  var vi = 1;
  function Ui(t, i = false) {
    vi += t, t < 0 && Ze && i && (Ze.hasOnce = true);
  }
  function co(t) {
    return t.dynamicChildren = vi > 0 ? Ze || Kt : null, Al(), vi > 0 && Ze && Ze.push(t), t;
  }
  function A(t, i, e, n, r, s) {
    return co(R(t, i, e, n, r, s, true));
  }
  function le(t, i, e, n, r) {
    return co(ie(t, i, e, n, r, true));
  }
  function yi(t) {
    return t ? t.__v_isVNode === true : false;
  }
  function si(t, i) {
    return t.type === i.type && t.key === i.key;
  }
  var ho = ({ key: t }) => t ?? null;
  var Ai = ({ ref: t, ref_key: i, ref_for: e }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || Le(t) || fe(t) ? { i: He, r: t, k: i, f: !!e } : t : null);
  function R(t, i = null, e = null, n = 0, r = null, s = t === ue ? 0 : 1, o = false, l = false) {
    const a = { __v_isVNode: true, __v_skip: true, type: t, props: i, key: i && ho(i), ref: i && Ai(i), scopeId: kr, slotScopeIds: null, children: e, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: n, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: He };
    return l ? (ns(a, e), s & 128 && t.normalize(a)) : e && (a.shapeFlag |= De(e) ? 8 : 16), vi > 0 && !o && Ze && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Ze.push(a), a;
  }
  var ie = Ll;
  function Ll(t, i = null, e = null, n = 0, r = null, s = false) {
    if ((!t || t === Gr) && (t = yt), yi(t)) {
      const l = ei(t, i, true);
      return e && ns(l, e), vi > 0 && !s && Ze && (l.shapeFlag & 6 ? Ze[Ze.indexOf(t)] = l : Ze.push(l)), l.patchFlag = -2, l;
    }
    if (Ul(t) && (t = t.__vccOpts), i) {
      i = Il(i);
      let { class: l, style: a } = i;
      l && !De(l) && (i.class = Pe(l)), be(a) && (nn(a) && !de(a) && (a = ze({}, a)), i.style = Rt(a));
    }
    const o = De(t) ? 1 : uo(t) ? 128 : Wa(t) ? 64 : be(t) ? 4 : fe(t) ? 2 : 0;
    return R(t, i, e, n, r, o, s, true);
  }
  function Il(t) {
    return t ? nn(t) || eo(t) ? ze({}, t) : t : null;
  }
  function ei(t, i, e = false, n = false) {
    const { props: r, ref: s, patchFlag: o, children: l, transition: a } = t, u = i ? Ml(r || {}, i) : r, c = { __v_isVNode: true, __v_skip: true, type: t.type, props: u, key: u && ho(u), ref: i && i.ref ? e && s ? de(s) ? s.concat(Ai(i)) : [s, Ai(i)] : Ai(i) : s, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: i && t.type !== ue ? o === -1 ? 16 : o | 16 : o, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: a, component: t.component, suspense: t.suspense, ssContent: t.ssContent && ei(t.ssContent), ssFallback: t.ssFallback && ei(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
    return a && n && $n(c, a.clone(c)), c;
  }
  function Ge(t = " ", i = 0) {
    return ie(ln, null, t, i);
  }
  function J(t = "", i = false) {
    return i ? (E(), le(yt, null, t)) : ie(yt, null, t);
  }
  function at(t) {
    return t == null || typeof t == "boolean" ? ie(yt) : de(t) ? ie(ue, null, t.slice()) : yi(t) ? St(t) : ie(ln, null, String(t));
  }
  function St(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : ei(t);
  }
  function ns(t, i) {
    let e = 0;
    const { shapeFlag: n } = t;
    if (i == null) i = null;
    else if (de(i)) e = 16;
    else if (typeof i == "object") if (n & 65) {
      const r = i.default;
      r && (r._c && (r._d = false), ns(t, r()), r._c && (r._d = true));
      return;
    } else {
      e = 32;
      const r = i._;
      !r && !eo(i) ? i._ctx = He : r === 3 && He && (He.slots._ === 1 ? i._ = 1 : (i._ = 2, t.patchFlag |= 1024));
    }
    else fe(i) ? (i = { default: i, _ctx: He }, e = 32) : (i = String(i), n & 64 ? (e = 16, i = [Ge(i)]) : e = 8);
    t.children = i, t.shapeFlag |= e;
  }
  function Ml(...t) {
    const i = {};
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      for (const r in n) if (r === "class") i.class !== n.class && (i.class = Pe([i.class, n.class]));
      else if (r === "style") i.style = Rt([i.style, n.style]);
      else if (Zi(r)) {
        const s = i[r], o = n[r];
        o && s !== o && !(de(s) && s.includes(o)) && (i[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (i[r] = n[r]);
    }
    return i;
  }
  function rt(t, i, e, n = null) {
    ut(t, i, 7, [e, n]);
  }
  var Hl = Yr();
  var Ol = 0;
  function Fl(t, i, e) {
    const n = t.type, r = (i ? i.appContext : t.appContext) || Hl, s = { uid: Ol++, vnode: t, type: n, parent: i, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new ea(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: i ? i.provides : Object.create(r.provides), ids: i ? i.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: io(n, r), emitsOptions: Jr(n, r), emit: null, emitted: null, propsDefaults: Te, inheritAttrs: n.inheritAttrs, ctx: Te, data: Te, props: Te, attrs: Te, slots: Te, refs: Te, setupState: Te, setupContext: null, suspense: e, suspenseId: e ? e.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return s.ctx = { _: s }, s.root = i ? i.root : s, s.emit = fl.bind(null, s), t.ce && t.ce(s), s;
  }
  var Ve = null;
  var xi = () => Ve || He;
  var Wi;
  var On;
  {
    const t = Qi(), i = (e, n) => {
      let r;
      return (r = t[e]) || (r = t[e] = []), r.push(n), (s) => {
        r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
      };
    };
    Wi = i("__VUE_INSTANCE_SETTERS__", (e) => Ve = e), On = i("__VUE_SSR_SETTERS__", (e) => wi = e);
  }
  var bi = (t) => {
    const i = Ve;
    return Wi(t), t.scope.on(), () => {
      t.scope.off(), Wi(i);
    };
  };
  var Ls = () => {
    Ve && Ve.scope.off(), Wi(null);
  };
  function fo(t) {
    return t.vnode.shapeFlag & 4;
  }
  var wi = false;
  function kl(t, i = false, e = false) {
    i && On(i);
    const { props: n, children: r } = t.vnode, s = fo(t);
    wl(t, n, s, i), bl(t, r, e || i);
    const o = s ? Bl(t, i) : void 0;
    return i && On(false), o;
  }
  function Bl(t, i) {
    const e = t.type;
    t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, sl);
    const { setup: n } = e;
    if (n) {
      gt();
      const r = t.setupContext = n.length > 1 ? zl(t) : null, s = bi(t), o = Ti(n, t, 0, [t.props, r]), l = ur(o);
      if (mt(), s(), (l || t.sp) && !Jt(t) && Vr(t), l) {
        if (o.then(Ls, Ls), i) return o.then((a) => {
          Is(t, a);
        }).catch((a) => {
          rn(a, t, 0);
        });
        t.asyncDep = o;
      } else Is(t, o);
    } else po(t);
  }
  function Is(t, i, e) {
    fe(i) ? t.type.__ssrInlineRender ? t.ssrRender = i : t.render = i : be(i) && (t.setupState = Ir(i)), po(t);
  }
  function po(t, i, e) {
    const n = t.type;
    t.render || (t.render = n.render || lt);
    {
      const r = bi(t);
      gt();
      try {
        rl(t);
      } finally {
        mt(), r();
      }
    }
  }
  var Vl = { get(t, i) {
    return Be(t, "get", ""), t[i];
  } };
  function zl(t) {
    const i = (e) => {
      t.exposed = e || {};
    };
    return { attrs: new Proxy(t.attrs, Vl), slots: t.slots, emit: t.emit, expose: i };
  }
  function un(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Ir(xa(t.exposed)), { get(i, e) {
      if (e in i) return i[e];
      if (e in hi) return hi[e](t);
    }, has(i, e) {
      return e in i || e in hi;
    } })) : t.proxy;
  }
  function Nl(t, i = true) {
    return fe(t) ? t.displayName || t.name : t.name || i && t.__name;
  }
  function Ul(t) {
    return fe(t) && "__vccOpts" in t;
  }
  var Me = (t, i) => Ia(t, i, wi);
  function Wl(t, i, e) {
    try {
      Ui(-1);
      const n = arguments.length;
      return n === 2 ? be(i) && !de(i) ? yi(i) ? ie(t, null, [i]) : ie(t, i) : ie(t, null, i) : (n > 3 ? e = Array.prototype.slice.call(arguments, 2) : n === 3 && yi(e) && (e = [e]), ie(t, i, e));
    } finally {
      Ui(1);
    }
  }
  var jl = "3.5.27";
  var Fn;
  var Ms = typeof window < "u" && window.trustedTypes;
  if (Ms) try {
    Fn = Ms.createPolicy("vue", { createHTML: (t) => t });
  } catch {
  }
  var go = Fn ? (t) => Fn.createHTML(t) : (t) => t;
  var Gl = "http://www.w3.org/2000/svg";
  var ql = "http://www.w3.org/1998/Math/MathML";
  var dt = typeof document < "u" ? document : null;
  var Hs = dt && dt.createElement("template");
  var Zl = { insert: (t, i, e) => {
    i.insertBefore(t, e || null);
  }, remove: (t) => {
    const i = t.parentNode;
    i && i.removeChild(t);
  }, createElement: (t, i, e, n) => {
    const r = i === "svg" ? dt.createElementNS(Gl, t) : i === "mathml" ? dt.createElementNS(ql, t) : e ? dt.createElement(t, { is: e }) : dt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  }, createText: (t) => dt.createTextNode(t), createComment: (t) => dt.createComment(t), setText: (t, i) => {
    t.nodeValue = i;
  }, setElementText: (t, i) => {
    t.textContent = i;
  }, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => dt.querySelector(t), setScopeId(t, i) {
    t.setAttribute(i, "");
  }, insertStaticContent(t, i, e, n, r, s) {
    const o = e ? e.previousSibling : i.lastChild;
    if (r && (r === s || r.nextSibling)) for (; i.insertBefore(r.cloneNode(true), e), !(r === s || !(r = r.nextSibling)); ) ;
    else {
      Hs.innerHTML = go(n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t);
      const l = Hs.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; ) l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      i.insertBefore(l, e);
    }
    return [o ? o.nextSibling : i.firstChild, e ? e.previousSibling : i.lastChild];
  } };
  var Kl = /* @__PURE__ */ Symbol("_vtc");
  function Xl(t, i, e) {
    const n = t[Kl];
    n && (i = (i ? [i, ...n] : [...n]).join(" ")), i == null ? t.removeAttribute("class") : e ? t.setAttribute("class", i) : t.className = i;
  }
  var ji = /* @__PURE__ */ Symbol("_vod");
  var mo = /* @__PURE__ */ Symbol("_vsh");
  var Xe = { name: "show", beforeMount(t, { value: i }, { transition: e }) {
    t[ji] = t.style.display === "none" ? "" : t.style.display, e && i ? e.beforeEnter(t) : ri(t, i);
  }, mounted(t, { value: i }, { transition: e }) {
    e && i && e.enter(t);
  }, updated(t, { value: i, oldValue: e }, { transition: n }) {
    !i != !e && (n ? i ? (n.beforeEnter(t), ri(t, true), n.enter(t)) : n.leave(t, () => {
      ri(t, false);
    }) : ri(t, i));
  }, beforeUnmount(t, { value: i }) {
    ri(t, i);
  } };
  function ri(t, i) {
    t.style.display = i ? t[ji] : "none", t[mo] = !i;
  }
  var Yl = /* @__PURE__ */ Symbol("");
  var Jl = /(?:^|;)\s*display\s*:/;
  function Ql(t, i, e) {
    const n = t.style, r = De(e);
    let s = false;
    if (e && !r) {
      if (i) if (De(i)) for (const o of i.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        e[l] == null && Li(n, l, "");
      }
      else for (const o in i) e[o] == null && Li(n, o, "");
      for (const o in e) o === "display" && (s = true), Li(n, o, e[o]);
    } else if (r) {
      if (i !== e) {
        const o = n[Yl];
        o && (e += ";" + o), n.cssText = e, s = Jl.test(e);
      }
    } else i && t.removeAttribute("style");
    ji in t && (t[ji] = s ? n.display : "", t[mo] && (n.display = "none"));
  }
  var Os = /\s*!important$/;
  function Li(t, i, e) {
    if (de(e)) e.forEach((n) => Li(t, i, n));
    else if (e == null && (e = ""), i.startsWith("--")) t.setProperty(i, e);
    else {
      const n = $l(t, i);
      Os.test(e) ? t.setProperty(Dt(n), e.replace(Os, ""), "important") : t[n] = e;
    }
  }
  var Fs = ["Webkit", "Moz", "ms"];
  var wn = {};
  function $l(t, i) {
    const e = wn[i];
    if (e) return e;
    let n = Je(i);
    if (n !== "filter" && n in t) return wn[i] = n;
    n = Ji(n);
    for (let r = 0; r < Fs.length; r++) {
      const s = Fs[r] + n;
      if (s in t) return wn[i] = s;
    }
    return i;
  }
  var ks = "http://www.w3.org/1999/xlink";
  function Bs(t, i, e, n, r, s = $o(i)) {
    n && i.startsWith("xlink:") ? e == null ? t.removeAttributeNS(ks, i.slice(6, i.length)) : t.setAttributeNS(ks, i, e) : e == null || s && !fr(e) ? t.removeAttribute(i) : t.setAttribute(i, s ? "" : wt(e) ? String(e) : e);
  }
  function Vs(t, i, e, n, r) {
    if (i === "innerHTML" || i === "textContent") {
      e != null && (t[i] = i === "innerHTML" ? go(e) : e);
      return;
    }
    const s = t.tagName;
    if (i === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const l = s === "OPTION" ? t.getAttribute("value") || "" : t.value, a = e == null ? t.type === "checkbox" ? "on" : "" : String(e);
      (l !== a || !("_value" in t)) && (t.value = a), e == null && t.removeAttribute(i), t._value = e;
      return;
    }
    let o = false;
    if (e === "" || e == null) {
      const l = typeof t[i];
      l === "boolean" ? e = fr(e) : e == null && l === "string" ? (e = "", o = true) : l === "number" && (e = 0, o = true);
    }
    try {
      t[i] = e;
    } catch {
    }
    o && t.removeAttribute(r || i);
  }
  function Zt(t, i, e, n) {
    t.addEventListener(i, e, n);
  }
  function eu(t, i, e, n) {
    t.removeEventListener(i, e, n);
  }
  var zs = /* @__PURE__ */ Symbol("_vei");
  function tu(t, i, e, n, r = null) {
    const s = t[zs] || (t[zs] = {}), o = s[i];
    if (n && o) o.value = n;
    else {
      const [l, a] = iu(i);
      if (n) {
        const u = s[i] = ru(n, r);
        Zt(t, l, u, a);
      } else o && (eu(t, l, o, a), s[i] = void 0);
    }
  }
  var Ns = /(?:Once|Passive|Capture)$/;
  function iu(t) {
    let i;
    if (Ns.test(t)) {
      i = {};
      let n;
      for (; n = t.match(Ns); ) t = t.slice(0, t.length - n[0].length), i[n[0].toLowerCase()] = true;
    }
    return [t[2] === ":" ? t.slice(3) : Dt(t.slice(2)), i];
  }
  var _n = 0;
  var nu = Promise.resolve();
  var su = () => _n || (nu.then(() => _n = 0), _n = Date.now());
  function ru(t, i) {
    const e = (n) => {
      if (!n._vts) n._vts = Date.now();
      else if (n._vts <= e.attached) return;
      ut(ou(n, e.value), i, 5, [n]);
    };
    return e.value = t, e.attached = su(), e;
  }
  function ou(t, i) {
    if (de(i)) {
      const e = t.stopImmediatePropagation;
      return t.stopImmediatePropagation = () => {
        e.call(t), t._stopped = true;
      }, i.map((n) => (r) => !r._stopped && n && n(r));
    } else return i;
  }
  var Us = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123;
  var au = (t, i, e, n, r, s) => {
    const o = r === "svg";
    i === "class" ? Xl(t, n, o) : i === "style" ? Ql(t, e, n) : Zi(i) ? Un(i) || tu(t, i, e, n, s) : (i[0] === "." ? (i = i.slice(1), true) : i[0] === "^" ? (i = i.slice(1), false) : lu(t, i, n, o)) ? (Vs(t, i, n), !t.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && Bs(t, i, n, o, s, i !== "value")) : t._isVueCE && (/[A-Z]/.test(i) || !De(n)) ? Vs(t, Je(i), n, s, i) : (i === "true-value" ? t._trueValue = n : i === "false-value" && (t._falseValue = n), Bs(t, i, n, o));
  };
  function lu(t, i, e, n) {
    if (n) return !!(i === "innerHTML" || i === "textContent" || i in t && Us(i) && fe(e));
    if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "sandbox" && t.tagName === "IFRAME" || i === "form" || i === "list" && t.tagName === "INPUT" || i === "type" && t.tagName === "TEXTAREA") return false;
    if (i === "width" || i === "height") {
      const r = t.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Us(i) && De(e) ? false : i in t;
  }
  var Ws = (t) => {
    const i = t.props["onUpdate:modelValue"] || false;
    return de(i) ? (e) => Pi(i, e) : i;
  };
  function uu(t) {
    t.target.composing = true;
  }
  function js(t) {
    const i = t.target;
    i.composing && (i.composing = false, i.dispatchEvent(new Event("input")));
  }
  var Tn = /* @__PURE__ */ Symbol("_assign");
  function Gs(t, i, e) {
    return i && (t = t.trim()), e && (t = jn(t)), t;
  }
  var Gi = { created(t, { modifiers: { lazy: i, trim: e, number: n } }, r) {
    t[Tn] = Ws(r);
    const s = n || r.props && r.props.type === "number";
    Zt(t, i ? "change" : "input", (o) => {
      o.target.composing || t[Tn](Gs(t.value, e, s));
    }), (e || s) && Zt(t, "change", () => {
      t.value = Gs(t.value, e, s);
    }), i || (Zt(t, "compositionstart", uu), Zt(t, "compositionend", js), Zt(t, "change", js));
  }, mounted(t, { value: i }) {
    t.value = i ?? "";
  }, beforeUpdate(t, { value: i, oldValue: e, modifiers: { lazy: n, trim: r, number: s } }, o) {
    if (t[Tn] = Ws(o), t.composing) return;
    const l = (s || t.type === "number") && !/^0\d/.test(t.value) ? jn(t.value) : t.value, a = i ?? "";
    l !== a && (document.activeElement === t && t.type !== "range" && (n && i === e || r && t.value.trim() === a) || (t.value = a));
  } };
  var cu = ["ctrl", "shift", "alt", "meta"];
  var hu = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, i) => cu.some((e) => t[`${e}Key`] && !i.includes(e)) };
  var zt = (t, i) => {
    const e = t._withMods || (t._withMods = {}), n = i.join(".");
    return e[n] || (e[n] = (r, ...s) => {
      for (let o = 0; o < i.length; o++) {
        const l = hu[i[o]];
        if (l && l(r, i)) return;
      }
      return t(r, ...s);
    });
  };
  var du = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
  var Ot = (t, i) => {
    const e = t._withKeys || (t._withKeys = {}), n = i.join(".");
    return e[n] || (e[n] = (r) => {
      if (!("key" in r)) return;
      const s = Dt(r.key);
      if (i.some((o) => o === s || du[o] === s)) return t(r);
    });
  };
  var fu = ze({ patchProp: au }, Zl);
  var qs;
  function pu() {
    return qs || (qs = Cl(fu));
  }
  var gu = (...t) => {
    const i = pu().createApp(...t), { mount: e } = i;
    return i.mount = (n) => {
      const r = vu(n);
      if (!r) return;
      const s = i._component;
      !fe(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = e(r, false, mu(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, i;
  };
  function mu(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function vu(t) {
    return De(t) ? document.querySelector(t) : t;
  }
  var $ = (t, i) => {
    const e = t.__vccOpts || t;
    for (const [n, r] of i) e[n] = r;
    return e;
  };
  var yu = {};
  var wu = { class: "tify-icon -close", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function _u(t, i) {
    return E(), A("svg", wu, [...i[0] || (i[0] = [R("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)])]);
  }
  var vo = $(yu, [["render", _u]]);
  var Tu = { blobBaseUrl: "https://github.com/tify-iiif-viewer/tify/blob/v0.35.0", bugsUrl: "https://github.com/tify-iiif-viewer/tify/issues", license: "AGPL-3.0", repositoryUrl: "https://github.com/tify-iiif-viewer/tify", version: "0.35.0" };
  var xu = { computed: { env: () => Tu } };
  var bu = { class: "tify-help", tabindex: "0" };
  var Eu = { class: "tify-sr-only" };
  var Cu = ["innerHTML"];
  var Su = { class: "tify-list" };
  var Pu = ["href"];
  var Ru = ["href"];
  var Du = ["href"];
  var Au = ["href"];
  var Lu = { class: "tify-help-footer" };
  var Iu = ["innerHTML"];
  function Mu(t, i, e, n, r, s) {
    return E(), A("section", bu, [R("h2", Eu, B(t.$translate("Help")), 1), R("h3", null, B(t.$translate("About TIFY")), 1), R("p", { innerHTML: t.$translate("$info") }, null, 8, Cu), R("ul", Su, [R("li", null, [R("a", { href: s.env.repositoryUrl }, B(t.$translate("Source code")), 9, Pu)]), R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/doc` }, B(t.$translate("Documentation")), 9, Ru)]), R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/CONTRIBUTORS.md` }, B(t.$translate("Contributors")), 9, Du)]), R("li", null, [R("a", { href: s.env.bugsUrl }, B(t.$translate("Report a bug")), 9, Au)])]), R("footer", Lu, [R("p", { innerHTML: t.$translate("$copyright") }, null, 8, Iu), R("p", null, [Ge(B(t.$translate("Version")) + " ", 1), R("b", null, B(s.env.version), 1)])])]);
  }
  var Hu = $(xu, [["render", Mu]]);
  var Ou = {};
  var Fu = { class: "tify-icon -plus", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function ku(t, i) {
    return E(), A("svg", Fu, [...i[0] || (i[0] = [R("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)])]);
  }
  var ss = $(Ou, [["render", ku]]);
  var Bu = {};
  var Vu = { class: "tify-icon -minus", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function zu(t, i) {
    return E(), A("svg", Vu, [...i[0] || (i[0] = [R("path", { d: "M19,13H5V11H19V13Z" }, null, -1)])]);
  }
  var rs = $(Bu, [["render", zu]]);
  var Nu = { name: "CollectionNode", props: { item: { type: Object, default: () => {
  } } }, data() {
    return { children: null, expanded: false };
  }, computed: { id() {
    return this.$getId(Vi());
  } }, methods: { toggleChildren() {
    if (this.expanded) {
      this.expanded = false;
      return;
    }
    if (this.children) {
      this.expanded = true;
      return;
    }
    if (this.item.children) {
      this.children = this.item.children, this.expanded = true;
      return;
    }
    this.$store.fetchJson(this.item["@id"] || this.item.id).then((t) => {
      this.children = t.collections || t.items || t.manifests || [], this.expanded = true;
    }, (t) => {
      const i = t.response && (t.response.statusText || t.response.data) || t.message;
      this.$store.addError(`Error loading IIIF manifest: ${i}`), this.children = false;
    });
  } } };
  var Uu = ["aria-controls", "aria-expanded", "aria-label"];
  var Wu = ["id"];
  var ju = ["id"];
  function Gu(t, i, e, n, r, s) {
    const o = rs, l = ss, a = jr("CollectionNode", true);
    return E(), A("li", { class: Pe(["tify-collection-item", { "-current": t.$store.manifest && t.$store.manifest.id === (e.item["@id"] || e.item.id) }]) }, [e.item.type === "Collection" ? (E(), A("button", { key: 0, type: "button", class: "tify-collection-link -has-children", "aria-controls": s.id, "aria-expanded": r.expanded, "aria-label": t.$translate(r.expanded ? "Collapse" : "Expand"), onClick: i[0] || (i[0] = (u) => s.toggleChildren()) }, [r.expanded ? (E(), le(o, { key: 0 })) : (E(), le(l, { key: 1 })), Ge(" " + B(t.$store.localize(e.item.label)), 1)], 8, Uu)) : (E(), A("a", { key: 1, href: "javascript:;", class: "tify-collection-link", onClick: i[1] || (i[1] = (u) => t.$store.loadManifest(e.item["@id"] || e.item.id, { expectedType: e.item.type, reset: true })) }, B(t.$store.localize(e.item.label)), 1)), r.children !== false ? ke((E(), A("ol", { key: 2, id: s.id, class: "tify-collection-list" }, [(E(true), A(ue, null, Ce(r.children, (u) => (E(), le(a, { key: u.id, item: u }, null, 8, ["item"]))), 128))], 8, Wu)), [[Xe, r.expanded]]) : ke((E(), A("p", { key: 3, id: s.id, class: "tify-collection-error" }, B(t.$translate("Could not load child manifest")), 9, ju)), [[Xe, r.expanded]])], 2);
  }
  var qu = $(Nu, [["render", Gu]]);
  var Zu = { data() {
    return { filter: "" };
  }, computed: { filteredItems() {
    const t = this.filter.trim().toLowerCase().split(/\s+/);
    return this.$store.collection.items.filter((i) => {
      const e = this.$store.localize(i.label).toLowerCase();
      return t.every((n) => e.includes(n));
    });
  } } };
  var Ku = { class: "tify-collection", tabindex: "0" };
  var Xu = { class: "tify-collection-header" };
  var Yu = { class: "tify-sr-only" };
  var Ju = { key: 0, class: "tify-collection-controls" };
  var Qu = ["aria-label", "placeholder"];
  var $u = ["disabled"];
  var ec = { key: 0, class: "tify-collection-list" };
  var tc = { key: 1, class: "tify-collection-no-results" };
  function ic(t, i, e, n, r, s) {
    const o = qu;
    return E(), A("section", Ku, [R("header", Xu, [R("h2", Yu, B(t.$translate("Collection")), 1), t.$store.collection.items.length > 5 ? (E(), A("div", Ju, [ke(R("input", { "onUpdate:modelValue": i[0] || (i[0] = (l) => r.filter = l), "aria-label": t.$translate("Filter collection"), class: "tify-collection-filter", placeholder: t.$translate("Filter collection"), type: "text", onKeydown: [i[1] || (i[1] = Ot(zt((l) => r.filter ? r.filter = "" : l.target.blur(), ["prevent"]), ["esc"])), i[2] || (i[2] = zt(() => {
    }, ["stop"]))] }, null, 40, Qu), [[Gi, r.filter]]), R("button", { type: "button", class: "tify-collection-reset", disabled: !r.filter, onClick: i[3] || (i[3] = (l) => r.filter = "") }, B(t.$translate("Reset")), 9, $u)])) : J("", true)]), s.filteredItems.length ? (E(), A("ol", ec, [(E(true), A(ue, null, Ce(s.filteredItems, (l) => (E(), le(o, { key: l.id, item: l }, null, 8, ["item"]))), 128))])) : (E(), A("p", tc, B(t.$translate("No results")), 1))]);
  }
  var nc = $(Zu, [["render", ic]]);
  function yo(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Ii = { exports: {} };
  var sc = Ii.exports;
  var Zs;
  function rc() {
    return Zs || (Zs = 1, (function(t) {
      (function(i) {
        if (typeof e != "function") {
          var e = function(v) {
            return v;
          };
          e.nonNative = true;
        }
        const n = e("plaintext"), r = e("html"), s = e("comment"), o = /<(\w*)>/g, l = /<\/?([^\s\/>]+)/;
        function a(v, y, x) {
          v = v || "", y = y || [], x = x || "";
          let T = c(y, x);
          return h(v, T);
        }
        function u(v, y) {
          v = v || [], y = y || "";
          let x = c(v, y);
          return function(C) {
            return h(C || "", x);
          };
        }
        a.init_streaming_mode = u;
        function c(v, y) {
          return v = f(v), { allowable_tags: v, tag_replacement: y, state: n, tag_buffer: "", depth: 0, in_quote_char: "" };
        }
        function h(v, y) {
          if (typeof v != "string") throw new TypeError("'html' parameter must be a string");
          let x = y.allowable_tags, T = y.tag_replacement, C = y.state, H = y.tag_buffer, k = y.depth, N = y.in_quote_char, Y = "";
          for (let K = 0, q = v.length; K < q; K++) {
            let ee = v[K];
            if (C === n) switch (ee) {
              case "<":
                C = r, H += ee;
                break;
              default:
                Y += ee;
                break;
            }
            else if (C === r) switch (ee) {
              case "<":
                if (N) break;
                k++;
                break;
              case ">":
                if (N) break;
                if (k) {
                  k--;
                  break;
                }
                N = "", C = n, H += ">", x.has(m(H)) ? Y += H : Y += T, H = "";
                break;
              case '"':
              case "'":
                ee === N ? N = "" : N = N || ee, H += ee;
                break;
              case "-":
                H === "<!-" && (C = s), H += ee;
                break;
              case " ":
              case `
`:
                if (H === "<") {
                  C = n, Y += "< ", H = "";
                  break;
                }
                H += ee;
                break;
              default:
                H += ee;
                break;
            }
            else if (C === s) switch (ee) {
              case ">":
                H.slice(-2) == "--" && (C = n), H = "";
                break;
              default:
                H += ee;
                break;
            }
          }
          return y.state = C, y.tag_buffer = H, y.depth = k, y.in_quote_char = N, Y;
        }
        function f(v) {
          let y = /* @__PURE__ */ new Set();
          if (typeof v == "string") {
            let x;
            for (; x = o.exec(v); ) y.add(x[1]);
          } else !e.nonNative && typeof v[e.iterator] == "function" ? y = new Set(v) : typeof v.forEach == "function" && v.forEach(y.add, y);
          return y;
        }
        function m(v) {
          let y = l.exec(v);
          return y ? y[1].toLowerCase() : null;
        }
        t.exports ? t.exports = a : i.striptags = a;
      })(sc);
    })(Ii)), Ii.exports;
  }
  var oc = rc();
  var wo = yo(oc);
  var ac = { props: { number: { type: Number, required: true }, wrap: { type: Boolean, default: false } }, computed: { classes() {
    return { L: "tify-page-name-label", P: "tify-page-name-number" };
  }, label() {
    return wo(this.$store.localize(this.$store.manifest.items[this.number - 1].label)) || this.$translate("$n/a");
  }, html() {
    return `<span>${this.$store.options.pageLabelFormat}</span>`.replace("P", `${this.number}`).replace("L", `</span>${this.label}<span>`).replace("<span></span>", "");
  } } };
  var lc = ["innerHTML"];
  function uc(t, i, e, n, r, s) {
    return E(), A("span", { class: Pe(["tify-page-name", { "-wrap": e.wrap }]), innerHTML: s.html }, null, 10, lc);
  }
  var ti = $(ac, [["render", uc]]);
  var cc = {};
  var hc = { class: "tify-icon -chevron-up", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function dc(t, i) {
    return E(), A("svg", hc, [...i[0] || (i[0] = [R("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, null, -1)])]);
  }
  var _o = $(cc, [["render", dc]]);
  var fc = {};
  var pc = { class: "tify-icon -chevron-down", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gc(t, i) {
    return E(), A("svg", pc, [...i[0] || (i[0] = [R("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, null, -1)])]);
  }
  var To = $(fc, [["render", gc]]);
  function cn(t) {
    const i = ["a", "b", "br", "i", "img", "p", "span"], e = { a: ["href"], img: ["alt", "src"] };
    let n = wo(t, i);
    const r = /<(\w+)((\s+.+?(\s*=\s*(?:".*?"|'.*?'|.*?|[\^'">\s]+))?)+\s*|\s*)>/g;
    return n = n.replace(r, (s, o, l) => {
      if (!l) return `<${o}>`;
      const a = /(?:([^\s"'=]+)(?:=(?:"(.*?)"|'(.*?)'|([^\s>]+)))?)/g, u = [];
      return l.replace(a, (c, h) => {
        var f;
        (f = e[o]) != null && f.includes(h) && u.push(c);
      }), u.length > 0 ? `<${o} ${u.join(" ")}>` : `<${o}>`;
    }), n;
  }
  function Ks(t, i) {
    if (!(t instanceof Array) || !i || new Set(t).size !== t.length) return false;
    for (let e = 0, n = t.length; e < n; e += 1) if (!Number.isInteger(t[e]) || e > 0 && t[e] > 0 && t[e] <= t[e - 1] || t[e] < -1 || t[e] > i) return false;
    return true;
  }
  function os(t, i = ["https:", "http:"]) {
    let e;
    try {
      e = new URL(t);
    } catch {
      return false;
    }
    return i.includes(e.protocol);
  }
  var mc = { props: { metadata: { type: Array, default: () => [] } }, data() {
    return { infoItems: [] };
  }, watch: { metadata() {
    this.init();
  }, "$store.options.view": { handler(t) {
    t === "info" && this.init();
  }, immediate: true } }, methods: { init() {
    this.$nextTick(() => {
      var t;
      (t = this.$refs.contents) == null || t.forEach((i, e) => {
        const n = i.offsetHeight;
        this.infoItems[e] = { collapsed: true, exceedsHeight: true }, this.$nextTick(() => {
          const r = i.offsetHeight, s = n >= r;
          this.infoItems[e] = { collapsed: s, exceedsHeight: s };
        });
      });
    });
  }, filterHtml: cn, isValidUrl: os } };
  var vc = { class: "tify-info-metadata" };
  var yc = { key: 0 };
  var wc = { class: "tify-info-value" };
  var _c = ["href"];
  var Tc = ["innerHTML"];
  var xc = ["onClick"];
  function bc(t, i, e, n, r, s) {
    const o = To, l = _o;
    return E(), A("div", vc, [(E(true), A(ue, null, Ce(e.metadata, (a, u) => (E(), A("div", { key: u }, [a.label ? (E(), A("h4", yc, B(t.$store.localize(a.label)), 1)) : J("", true), R("div", { ref_for: true, ref: "contents", class: Pe(["tify-info-content", { "-collapsed": r.infoItems[u] && r.infoItems[u].collapsed }]) }, [R("div", wc, [s.isValidUrl(a.value) ? (E(), A("p", { key: `url-${u}` }, [R("a", { href: a.value }, B(a.value), 9, _c)])) : (E(), A("div", { key: `html-${u}`, innerHTML: s.filterHtml(t.$store.localize(a.value)) || t.$translate("$n/a") }, null, 8, Tc))]), r.infoItems[u] && r.infoItems[u].exceedsHeight ? (E(), A("button", { key: 0, type: "button", class: "tify-info-toggle", onClick: (c) => r.infoItems[u].collapsed = !r.infoItems[u].collapsed }, [r.infoItems[u].collapsed ? (E(), A(ue, { key: 0 }, [ie(o), Ge(" " + B(t.$translate("Expand")), 1)], 64)) : (E(), A(ue, { key: 1 }, [ie(l), Ge(" " + B(t.$translate("Collapse")), 1)], 64))], 8, xc)) : J("", true)], 2)]))), 128))]);
  }
  var Ec = $(mc, [["render", bc]]);
  function Cc(t, i) {
    try {
      return new Date(t).toLocaleDateString(i, { month: "long", day: "numeric", year: "numeric" });
    } catch {
      return t;
    }
  }
  var Sc = { data() {
    return { collectionDataShown: false };
  }, computed: { hasProvider() {
    var t;
    return (t = this.manifestOrCollection.provider) == null ? void 0 : t.some((i) => {
      var e;
      return this.$store.localize(i.label) || ((e = i.homepage) == null ? void 0 : e.length);
    });
  }, homepages() {
    return [].concat(this.manifestOrCollection.homepage || []);
  }, logos() {
    var i;
    let t = [].concat(this.manifestOrCollection.logo || []);
    return (i = this.manifestOrCollection.provider) == null || i.forEach((e) => {
      e.logo && (t = t.concat(e.logo));
    }), t = [...new Map(t.map((e) => [e.id, e])).values()], t = t.map((e) => {
      var n, r, s, o;
      return { id: e.id, link: ((r = (n = e.service) == null ? void 0 : n[0]) == null ? void 0 : r.id) || ((o = (s = e.service) == null ? void 0 : s[0]) == null ? void 0 : o["@id"]) };
    }), t;
  }, manifestOrCollection() {
    return this.collectionDataShown ? this.$store.collection : this.$store.manifest || this.$store.collection || {};
  }, metadataItems() {
    return this.$store.manifest.items.map((t, i) => ({ metadata: t.metadata, number: i + 1 })).filter(({ metadata: t, number: i }) => (t == null ? void 0 : t.length) && this.$store.options.pages.includes(i));
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0).map((t) => {
      var n, r;
      const i = { page: t, media: [] }, e = (r = (n = this.$store.manifest.items[t - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      return e == null || e.forEach((s) => {
        var l;
        const o = ((l = s.body) == null ? void 0 : l.items) || [s.body];
        i.media.push(...o.filter((a) => a.label).map((a) => ({ label: a.label })));
      }), i;
    });
  } }, methods: { filterHtml: cn, formatDate: Cc, isValidUrl: os } };
  var Pc = { class: "tify-info", tabindex: "0" };
  var Rc = { class: "tify-sr-only" };
  var Dc = { key: 0, class: "tify-info-header" };
  var Ac = ["aria-pressed"];
  var Lc = ["aria-pressed"];
  var Ic = { key: 1, class: "tify-info-section -title" };
  var Mc = { key: 2, class: "tify-info-section -time" };
  var Hc = { key: 3, class: "tify-info-section -place" };
  var Oc = { key: 4, class: "tify-info-section -metadata" };
  var Fc = { key: 5, class: "tify-info-section -description" };
  var kc = { key: 6, class: "tify-info-section -metadata -structure" };
  var Bc = { key: 0, class: "tify-info-structure" };
  var Vc = { key: 7, class: "tify-info-section -pages" };
  var zc = { class: "tify-list -unstyled" };
  var Nc = { key: 0, class: "tify-info-image-labels" };
  var Uc = { key: 8, class: "tify-info-section -related" };
  var Wc = { class: "tify-list" };
  var jc = ["href"];
  var Gc = ["href"];
  var qc = { key: 9, class: "tify-info-section -attribution" };
  var Zc = ["innerHTML"];
  var Kc = { key: 10, class: "tify-info-section -license" };
  var Xc = ["href"];
  var Yc = { key: 11, class: "tify-info-section -provider" };
  var Jc = { key: 0 };
  var Qc = { key: 1, class: "tify-list" };
  var $c = ["href"];
  var eh = { key: 12, class: "tify-info-section -logo" };
  var th = ["href"];
  var ih = ["src", "alt"];
  var nh = ["src", "alt"];
  function sh(t, i, e, n, r, s) {
    var a, u, c, h;
    const o = Ec, l = ti;
    return E(), A("section", Pc, [R("h2", Rc, B(t.$translate("Info")), 1), t.$store.collection && t.$store.manifest ? (E(), A("div", Dc, [R("button", { type: "button", class: "tify-info-button", "aria-pressed": !r.collectionDataShown, onClick: i[0] || (i[0] = (f) => r.collectionDataShown = false) }, B(t.$translate("Document")), 9, Ac), R("button", { type: "button", class: "tify-info-button", "aria-pressed": r.collectionDataShown, onClick: i[1] || (i[1] = (f) => r.collectionDataShown = true) }, B(t.$translate("Collection")), 9, Lc)])) : J("", true), s.manifestOrCollection.label ? (E(), A("div", Ic, [R("h3", null, B(t.$translate("Title")), 1), R("p", null, B(t.$store.localize(s.manifestOrCollection.label)), 1)])) : J("", true), s.manifestOrCollection.navDate ? (E(), A("div", Mc, [R("h3", null, B(t.$translate("Date")), 1), R("p", null, B(s.formatDate(s.manifestOrCollection.navDate, t.$store.options.language)), 1)])) : J("", true), s.manifestOrCollection.navPlace ? (E(), A("div", Hc, [R("h3", null, B(t.$translate("Place")), 1), (E(true), A(ue, null, Ce(s.manifestOrCollection.navPlace.features, (f) => (E(), A("p", { key: f.id }, B(t.$store.localize(f.properties.label)), 1))), 128))])) : J("", true), s.manifestOrCollection.metadata && s.manifestOrCollection.metadata.length ? (E(), A("div", Oc, [R("h3", null, B(t.$translate("Metadata")), 1), t.$store.options.view === "info" ? (E(), le(o, { key: 0, metadata: s.manifestOrCollection.metadata }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.summary ? (E(), A("div", Fc, [R("h3", null, B(t.$translate("Description")), 1), t.$store.options.view === "info" ? (E(), le(o, { key: 0, metadata: [{ value: s.manifestOrCollection.summary }] }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.structures && ((a = t.$store.currentStructure) != null && a.label || (u = t.$store.currentStructure) != null && u.metadata) ? (E(), A("div", kc, [R("h3", null, B(t.$translate("Current Section")), 1), (c = t.$store.currentStructure) != null && c.label ? (E(), A("p", Bc, B(t.$store.localize(t.$store.currentStructure.label)), 1)) : J("", true), t.$store.options.view === "info" && ((h = t.$store.currentStructure) != null && h.metadata) ? (E(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.currentStructure.metadata }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.type === "Manifest" ? (E(), A("div", Vc, [R("h3", null, B(t.$translate(s.pages.length > 1 ? "Current Pages" : "Current Page")), 1), R("ol", zc, [(E(true), A(ue, null, Ce(s.pages, (f) => (E(), A("li", { key: f }, [ie(l, { number: f.page, wrap: "" }, null, 8, ["number"]), f.media.length ? (E(), A("ul", Nc, [(E(true), A(ue, null, Ce(f.media, (m, v) => (E(), A("li", { key: v }, B(t.$store.localize(m.label)), 1))), 128))])) : J("", true), t.$store.manifest.items[f.page - 1].metadata ? (E(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.manifest.items[f.page - 1].metadata }, null, 8, ["metadata"])) : J("", true)]))), 128))])])) : J("", true), s.homepages.length ? (E(), A("div", Uc, [R("h3", null, B(t.$translate("Related Resources")), 1), R("ul", Wc, [(E(true), A(ue, null, Ce(s.homepages, (f, m) => (E(), A("li", { key: m }, [typeof f == "string" ? (E(), A("a", { key: 0, href: f }, B(f), 9, jc)) : (E(), A("a", { key: 1, href: f.id }, B(f.label ? t.$store.localize(f.label) : f.id), 9, Gc))]))), 128))])])) : J("", true), s.manifestOrCollection.requiredStatement ? (E(), A("div", qc, [R("h3", null, B(t.$store.localize(s.manifestOrCollection.requiredStatement.label)), 1), R("div", { innerHTML: s.filterHtml(t.$store.localize(s.manifestOrCollection.requiredStatement.value)) }, null, 8, Zc)])) : J("", true), s.manifestOrCollection.rights ? (E(), A("div", Kc, [R("h3", null, B(t.$translate("License")), 1), R("p", null, [R("a", { href: s.manifestOrCollection.rights }, B(s.manifestOrCollection.rights), 9, Xc)])])) : J("", true), s.hasProvider ? (E(), A("div", Yc, [R("h3", null, B(t.$translate("Provided by")), 1), (E(true), A(ue, null, Ce(s.manifestOrCollection.provider, (f) => {
      var m, v;
      return E(), A("div", { key: f.id }, [f.label ? (E(), A("p", Jc, B(t.$store.localize(f.label)), 1)) : J("", true), (m = f.homepage) != null && m.length || (v = f.seeAlso) != null && v.length ? (E(), A("ul", Qc, [(E(true), A(ue, null, Ce([...f.homepage || [], ...f.seeAlso || []], (y) => (E(), A("li", { key: y.id }, [R("a", { href: y.id }, B(y.label ? t.$store.localize(y.label) : y.id), 9, $c)]))), 128))])) : J("", true)]);
    }), 128))])) : J("", true), s.logos.length ? (E(), A("div", eh, [(E(true), A(ue, null, Ce(s.logos, (f, m) => (E(), A("p", { key: m }, [f.link ? (E(), A("a", { key: 0, href: f.link }, [R("img", { class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, ih)], 8, th)) : (E(), A("img", { key: 1, class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, nh))]))), 128))])) : J("", true)]);
  }
  var rh = $(Sc, [["render", sh]]);
  var oh = { name: "TocList", props: { level: { type: Number, default: 0 }, structures: { type: Array, default: () => [] }, purpose: { type: String, default: "" } }, data() {
    var t;
    return { expandedStructures: this.level === 0 && this.structures.length === 1 && ((t = this.structures[0].items) != null && t.some((i) => i.items)) ? [true] : [] };
  }, computed: { id() {
    return this.$getId(Vi());
  } }, methods: { getFirstPage(t) {
    if (t.items) return this.getFirstPage(t.items[0]);
    const i = this.$store.manifest.items.findIndex((e) => e.id === t.id);
    return i < 0 ? 1 : i + 1;
  }, getFirstPageLabel(t) {
    var e;
    const i = this.getFirstPage(t);
    return this.$store.localize((e = this.$store.manifest.items[i - 1]) == null ? void 0 : e.label);
  }, getLastPage(t) {
    if (t.items) return this.getLastPage(t.items.at(-1));
    const i = this.$store.manifest.items.findLastIndex((e) => e.id === t.id);
    return i < 0 ? this.$store.manifest.items.length : i + 1;
  }, isCurrentPageInStructure(t) {
    if (this.$store.manifest.items.filter((r, s) => this.$store.options.pages.includes(s + 1)).map((r) => r.id).some((r) => {
      var s;
      return (s = t.items) == null ? void 0 : s.some((o) => o.id === r);
    })) return true;
    const e = t.firstPage || this.getFirstPage(t), n = t.lastPage || this.getLastPage(t);
    return this.$store.options.pages.some((r) => r >= e && r <= n);
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, toggleAllChildren(t = null) {
    if (this.$refs.children) {
      for (let i = this.structures.length - 1; i >= 0; i -= 1) this.toggleChildren(i, t);
      this.$refs.children.forEach((i) => {
        i.toggleAllChildren(t);
      });
    }
  }, toggleChildren(t, i = null) {
    var n;
    (n = this.structures[t].items) != null && n.some((r) => r.items) && (this.expandedStructures[t] = i !== null ? i : !this.expandedStructures[t]);
  } } };
  var ah = { class: "tify-toc-list" };
  var lh = ["aria-controls", "aria-expanded", "aria-label", "title", "onClick"];
  var uh = ["href"];
  var ch = ["onClick"];
  var hh = { class: "tify-toc-label" };
  var dh = { class: "tify-toc-page" };
  var fh = ["onClick"];
  var ph = { class: "tify-toc-label" };
  function gh(t, i, e, n, r, s) {
    const o = rs, l = ss, a = jr("TocList", true);
    return E(), A("ul", ah, [(E(true), A(ue, null, Ce(e.structures, (u, c) => {
      var h, f;
      return E(), A("li", { key: c, class: Pe(["tify-toc-structure", { "-current": s.isCurrentPageInStructure(u), "-expanded": r.expandedStructures[c] }]) }, [(h = u.items) != null && h.some((m) => m.items) ? (E(), A("button", { key: 0, type: "button", class: "tify-toc-toggle", "aria-controls": `${s.id}-${c}`, "aria-expanded": !!r.expandedStructures[c], "aria-label": t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), title: t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), onClick: (m) => s.toggleChildren(c) }, [r.expandedStructures[c] ? (E(), le(o, { key: 0 })) : (E(), le(l, { key: 1 }))], 8, lh)) : J("", true), e.purpose === "pdf" ? (E(), A("a", { key: 1, class: "tify-toc-link", href: u.rendering[0].id, download: "" }, B(t.$store.localize(u.label)) + " (" + B(u.items.length) + "\xA0" + B(t.$translate(u.items.length === 1 ? "page" : "pages")) + ") ", 9, uh)) : u.label && t.$store.localize(u.label) !== s.getFirstPageLabel(u) ? (E(), A("a", { key: 2, class: "tify-toc-link -dots", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", hh, B(t.$store.localize(u.label)), 1), R("span", dh, B(s.getFirstPageLabel(u) || "\u2014"), 1)], 8, ch)) : (E(), A("a", { key: 3, class: "tify-toc-link", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", ph, B(t.$store.localize(u.label, "string") || s.getFirstPageLabel(u) || t.$translate("$n/a")), 1)], 8, fh)), (f = u.items) != null && f.some((m) => m.items) ? ke((E(), le(a, { key: 4, id: `${s.id}-${c}`, ref_for: true, ref: "children", level: e.level + 1, purpose: e.purpose, structures: u.items }, null, 8, ["id", "level", "purpose", "structures"])), [[Xe, r.expandedStructures[c]]]) : J("", true)], 2);
    }), 128))]);
  }
  var xo = $(oh, [["render", gh]]);
  var mh = {};
  var vh = { class: "tify-icon -filmstrip", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function yh(t, i) {
    return E(), A("svg", vh, [...i[0] || (i[0] = [R("path", { d: "M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" }, null, -1)])]);
  }
  var wh = $(mh, [["render", yh]]);
  var _h = {};
  var Th = { class: "tify-icon -waveform", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function xh(t, i) {
    return E(), A("svg", Th, [...i[0] || (i[0] = [R("path", { d: "M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z" }, null, -1)])]);
  }
  var bh = $(_h, [["render", xh]]);
  var Eh = { data() {
    return { otherItems: [], perElementPdfLinksVisible: false };
  }, computed: { hasElementPdfLinks() {
    var i, e;
    return (e = (i = this.$store.manifest.structures) == null ? void 0 : i[0]) != null && e.rendering ? this.$store.manifest.structures[0].rendering.some((n) => n.format && n.format === "application/pdf") : false;
  }, media() {
    const t = [];
    return this.$store.options.pages.filter((i) => i > 0).forEach((i) => {
      var n, r;
      const e = (r = (n = this.$store.manifest.items[i - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      e == null || e.forEach((s, o) => {
        var a;
        (((a = s.body) == null ? void 0 : a.items) || [s.body]).forEach((u, c) => {
          var m;
          const h = (m = u.format) == null ? void 0 : m.split("/")[1], f = { fileName: u.id.split("/").at(-1), format: h == null ? void 0 : h.toUpperCase(), label: u.label, type: u.type, url: u.id, page: i, itemIndex: o, layerIndex: c };
          if (u.service) {
            const v = [].concat(u.service)[0], y = ["ImageService2", "ImageService3"].includes(v.type || v["@type"]) ? "default" : "native", x = v.type === "ImageService3" ? "max" : "full", T = v.id || v["@id"], C = T.at(-1) === "/" ? "" : "/";
            f.url = `${T}${C}full/${x}/0/${y}.${h === "jpeg" ? "jpg" : h}`;
          }
          t.push(f);
        });
      });
    }), t;
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  }, renderings() {
    return [].concat(this.$store.manifest.rendering || []);
  } } };
  var Ch = { class: "tify-export", tabindex: "0" };
  var Sh = { class: "tify-sr-only" };
  var Ph = { key: 0, class: "tify-export-section -links" };
  var Rh = { class: "tify-export-list" };
  var Dh = ["href"];
  var Ah = { class: "tify-export-link-media" };
  var Lh = ["src"];
  var Ih = { class: "tify-export-link-text" };
  var Mh = { key: 0, class: "tify-export-link-hint" };
  var Hh = { class: "tify-export-link-format" };
  var Oh = { key: 1, class: "tify-export-section -renderings" };
  var Fh = { class: "tify-list" };
  var kh = ["href"];
  var Bh = { key: 0, class: "tify-export-container" };
  var Vh = ["aria-controls", "aria-expanded", "aria-label"];
  var zh = ["id"];
  var Nh = { class: "tify-export-section -iiif" };
  var Uh = { class: "tify-list" };
  var Wh = { key: 0 };
  var jh = ["href"];
  var Gh = ["href"];
  var qh = { key: 2, class: "tify-export-section -other" };
  var Zh = { class: "tify-list" };
  var Kh = ["href"];
  function Xh(t, i, e, n, r, s) {
    var h, f, m;
    const o = bh, l = wh, a = ti, u = vo, c = xo;
    return E(), A("section", Ch, [R("h2", Sh, B(t.$translate("Export [noun]")), 1), t.$store.manifest ? (E(), A("div", Ph, [R("h3", null, B(t.$translate("Media Files")), 1), R("ul", Rh, [(E(true), A(ue, null, Ce(s.media, (v) => (E(), A("li", { key: v.url }, [R("a", { href: v.url, class: "tify-export-link", download: "", rel: "noopener noreferrer", target: "_blank" }, [R("span", Ah, [t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex) ? (E(), A("img", { key: 0, src: t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex), alt: "" }, null, 8, Lh)) : v.type === "Sound" ? (E(), le(o, { key: 1 })) : v.type === "Video" ? (E(), le(l, { key: 2 })) : J("", true)]), R("span", Ih, [ie(a, { number: v.page, wrap: true }, null, 8, ["number"]), v.label ? (E(), A("span", Mh, B(t.$store.localize(v.label)), 1)) : J("", true), R("span", Hh, [v.type === "Sound" ? (E(), A(ue, { key: 0 }, [Ge(B(t.$translate("Audio")) + " \xB7 ", 1)], 64)) : v.type === "Video" ? (E(), A(ue, { key: 1 }, [Ge(B(t.$translate("Video")) + " \xB7 ", 1)], 64)) : v.type === "Image" ? (E(), A(ue, { key: 2 }, [Ge(B(t.$translate("Image")) + " \xB7 ", 1)], 64)) : J("", true), Ge(" " + B(v.format), 1)])])], 8, Dh)]))), 128))])])) : J("", true), (h = t.$store.manifest) != null && h.rendering ? (E(), A("div", Oh, [R("h3", null, B(t.$translate("Renderings")), 1), R("ul", Fh, [(E(true), A(ue, null, Ce(s.renderings, (v) => (E(), A("li", { key: v.id }, [R("a", { href: v.id }, B(t.$store.localize(v.label)), 9, kh)]))), 128))]), s.hasElementPdfLinks ? (E(), A("div", Bh, [R("button", { type: "button", class: Pe(["tify-export-toggle", { "-close": r.perElementPdfLinksVisible }]), "aria-controls": t.$getId("export-pdf-list"), "aria-expanded": r.perElementPdfLinksVisible, "aria-label": r.perElementPdfLinksVisible ? t.$translate("Close PDF list") : null, onClick: i[0] || (i[0] = (v) => r.perElementPdfLinksVisible = !r.perElementPdfLinksVisible) }, [r.perElementPdfLinksVisible ? (E(), le(u, { key: 1 })) : (E(), A(ue, { key: 0 }, [Ge(B(t.$translate("PDFs for each element")), 1)], 64))], 10, Vh), ke(R("div", { id: t.$getId("export-pdf-list"), class: "tify-export-toc" }, [R("h4", null, B(t.$translate("PDFs for each element")), 1), ie(c, { ref: "children", purpose: "pdf", level: 0, structures: t.$store.structures }, null, 8, ["structures"])], 8, zh), [[Xe, r.perElementPdfLinksVisible]])])) : J("", true)])) : J("", true), R("div", Nh, [i[1] || (i[1] = R("h3", null, "IIIF", -1)), R("ul", Uh, [t.$store.options.childManifestUrl ? (E(), A("li", Wh, [R("a", { href: t.$store.options.childManifestUrl, download: "manifest.json" }, B(t.$translate("IIIF manifest (current document)")), 9, jh)])) : J("", true), R("li", null, [R("a", { href: t.$store.options.manifestUrl, download: "manifest.json" }, B(t.$translate(t.$store.collection ? "IIIF manifest (collection)" : "IIIF manifest")), 9, Gh)])])]), (m = (f = t.$store.manifest) == null ? void 0 : f.seeAlso) != null && m.length ? (E(), A("div", qh, [R("h3", null, B(t.$translate("Other Formats")), 1), R("ul", Zh, [(E(true), A(ue, null, Ce(t.$store.manifest.seeAlso, (v) => (E(), A("li", { key: v.id }, [R("a", { href: v.id, download: "" }, B(v.label ? t.$store.localize(v.label) : v.id), 9, Kh)]))), 128))])])) : J("", true)]);
  }
  var Yh = $(Eh, [["render", Xh]]);
  function qi(t, i, e = 120) {
    const n = t, r = e === true ? 120 : e;
    if (!r || r < 0) {
      n.scrollTop = i;
      return;
    }
    const o = (i - t.scrollTop) / r / 0.1;
    setTimeout(() => {
      n.scrollTop += o, n.scrollTop !== i && qi(n, i, r - 10);
    }, 10);
  }
  function kn(t, i, e = true) {
    const n = i.querySelectorAll(t);
    if (!n.length) return;
    let r = n[0];
    const s = n[n.length - 1];
    Array.prototype.forEach.call(n, (u) => {
      u.dataset.level >= r.dataset.level && (r = u);
    });
    const o = i.getBoundingClientRect(), l = r.getBoundingClientRect(), a = s.getBoundingClientRect();
    if (l.top < o.top) {
      const u = l.top - o.top + i.scrollTop;
      qi(i, u - 50, e);
    } else if (a.bottom > o.bottom) {
      const u = a.bottom - o.bottom + i.scrollTop;
      qi(i, u + 50, e);
    }
  }
  var Xs = ".tify-toc-structure.-current";
  var Jh = { data() {
    return { isInited: false };
  }, computed: { isNested() {
    return this.$store.structures.filter((t) => {
      var i;
      return (i = t.items) == null ? void 0 : i.some((e) => e.items);
    }).length;
  } }, watch: { "$store.options.pages": function() {
    this.$nextTick(() => kn(Xs, this.$el));
  }, "$store.options.view": { handler(t) {
    t === "toc" && this.$nextTick(this.init);
  }, immediate: true } }, methods: { init() {
    this.isInited = true, this.$nextTick(() => kn(Xs, this.$el, false));
  } } };
  var Qh = { class: "tify-toc", tabindex: "0" };
  var $h = { class: "tify-sr-only" };
  var ed = { key: 0, class: "tify-toc-header" };
  function td(t, i, e, n, r, s) {
    const o = xo;
    return E(), A("section", Qh, [R("h2", $h, B(t.$translate("Table of Contents")), 1), s.isNested ? (E(), A("div", ed, [R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[0] || (i[0] = (l) => t.$refs.children.toggleAllChildren(true)) }, B(t.$translate("Expand all")), 1), R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[1] || (i[1] = (l) => t.$refs.children.toggleAllChildren(false)) }, B(t.$translate("Collapse all")), 1)])) : J("", true), r.isInited ? (E(), le(o, { key: 1, ref: "children", level: 0, structures: t.$store.structures }, null, 8, ["structures"])) : J("", true)]);
  }
  var id = $(Jh, [["render", td]]);
  var nd = {};
  var sd = { class: "tify-icon -image-broken-variant", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function rd(t, i) {
    return E(), A("svg", sd, [...i[0] || (i[0] = [R("path", { d: "M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M18,11.42L21,14.43V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V12.42L6,15.41L10,11.41L14,15.41" }, null, -1)])]);
  }
  var od = $(nd, [["render", rd]]);
  var ad = 750;
  var ld = { data() {
    return { itemHeight: 0, itemVMargin: 0, items: [{}], itemsPerRow: 0, lastScrollTop: 0, resizeObserver: null, resizeTimeout: null, style: {}, thumbnailWidth: 0, touchTimeout: null };
  }, watch: { "$store.options.pages": function(t) {
    this.$nextTick(() => {
      const i = ".tify-thumbnails-item.-current";
      t.length > 2 || t.length > 1 && t[1] !== t[0] + 1 || (this.$refs.container.querySelector(i) ? kn(i, this.$el) : this.scrollToCurrentPage());
    });
  }, "$store.options.view": { handler(t) {
    t === "thumbnails" && this.$nextTick(this.init);
  }, immediate: true } }, mounted() {
    this.style.flex = this.$el.style.flex;
  }, unmounted() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), clearTimeout(this.resizeTimeout);
  }, methods: { init() {
    this.updateDimensions(), this.scrollToCurrentPage(false), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.$el);
  }, onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
      this.$store.options.view === "thumbnails" && this.updateDimensions();
    }, 200);
  }, updateDimensions() {
    if (!this.$refs.container) return;
    const t = this.$refs.container.querySelector(".tify-thumbnails-item"), i = t.currentStyle || window.getComputedStyle(t), e = parseInt(i.marginTop, 10) + parseFloat(i.marginBottom, 10);
    this.itemHeight = t.offsetHeight + e, this.itemVerticalMargin = e;
    const n = parseInt(i.marginLeft, 10) + parseFloat(i.marginRight, 10), r = t.offsetWidth + n;
    this.thumbnailWidth = t.offsetWidth, this.itemsPerRow = Math.floor(this.$refs.container.clientWidth / r);
    const o = Math.ceil(this.$store.manifest.items.length / this.itemsPerRow) * this.itemHeight;
    this.$refs.container.style.height = `${o}px`, this.redrawThumbnails(), this.scrollToCurrentPage(false);
  }, redrawThumbnails() {
    const t = this.$el.scrollTop, i = Math.floor(t / this.itemHeight) * this.itemsPerRow + 1, n = Math.ceil(this.$el.offsetHeight / this.itemHeight) * this.itemsPerRow, r = i + this.itemsPerRow + n, s = Math.min(this.$store.manifest.items.length, r), o = [];
    for (let l = i; l <= s; l += 1) o.push({ thumbnailUrl: this.$store.getThumbnailUrl(l, this.thumbnailWidth), page: l });
    this.items = o, this.$nextTick(() => {
      const l = Math.floor(i / this.itemsPerRow);
      this.$refs.container.style.paddingTop = `${l * this.itemHeight}px`;
    });
  }, scrollToCurrentPage(t = true) {
    const e = Math.floor((this.$store.options.pages[0] - 1) / this.itemsPerRow) * this.itemHeight + (this.itemVMargin - 50);
    t ? qi(this.$el, e) : this.$el.scrollTop = e;
  }, setPageAndSwitchView(t, i = false) {
    if (i) {
      const e = this.$store.options.pages.slice(0), n = e.indexOf(t);
      n < 0 ? (e.push(t), e.sort((r, s) => r - s), e[0] === 0 && e.shift()) : e.length > 1 && e.splice(n, 1), this.$store.updateOptions({ pages: e });
      return;
    }
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, touchStartTogglePage(t) {
    this.lastScrollTop = this.$el.scrollTop, this.touchTimeout = setTimeout(() => {
      this.$el.scrollTop === this.lastScrollTop && this.setPageAndSwitchView(t, true);
    }, ad);
  }, touchEnd() {
    clearTimeout(this.touchTimeout);
  } } };
  var ud = { class: "tify-sr-only" };
  var cd = { ref: "container", class: "tify-thumbnails-list" };
  var hd = ["onClick", "onTouchstart"];
  var dd = ["src"];
  var fd = { key: 1, class: "tify-thumbnails-image" };
  var pd = { class: "tify-sr-only" };
  function gd(t, i, e, n, r, s) {
    const o = od, l = ti;
    return E(), A("section", { class: "tify-thumbnails", tabindex: "0", onScroll: i[1] || (i[1] = (...a) => s.redrawThumbnails && s.redrawThumbnails(...a)) }, [R("h2", ud, B(t.$translate("Pages")), 1), R("ol", cd, [(E(true), A(ue, null, Ce(r.items, (a) => (E(), A("li", { key: a.page, class: Pe(["tify-thumbnails-item", { "-current": t.$store.options.pages.includes(a.page) }]) }, [R("button", { type: "button", class: "tify-thumbnails-button", onClick: zt((u) => s.setPageAndSwitchView(a.page, u.ctrlKey), ["prevent"]), onTouchstart: (u) => s.touchStartTogglePage(a.page), onTouchend: i[0] || (i[0] = (...u) => s.touchEnd && s.touchEnd(...u)) }, [a.thumbnailUrl ? (E(), A("img", { key: 0, class: "tify-thumbnails-image", alt: "", src: a.thumbnailUrl }, null, 8, dd)) : (E(), A("span", fd, [ie(o), R("span", pd, B(t.$translate("Image missing")), 1)])), ie(l, { number: a.page || 1 }, null, 8, ["number"])], 40, hd)], 2))), 128))], 512)], 32);
  }
  var md = $(ld, [["render", gd]]);
  var vd = { computed: { pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  } }, watch: { "$store.options.annotationId": function() {
    this.scrollToCurrentAnnotation();
  }, "$store.annotationsAvailable": function() {
    this.$store.options.annotationId && this.scrollToCurrentAnnotation();
  } }, mounted() {
    this.$store.options.annotationId && this.$store.annotationsAvailable && this.scrollToCurrentAnnotation();
  }, methods: { filterHtml: cn, scrollToCurrentAnnotation() {
    this.$nextTick(() => {
      var i;
      const t = (i = this.$refs.currentItem) == null ? void 0 : i[0];
      t && t.scrollIntoView({ behavior: "smooth", block: t.offsetHeight < this.$refs.panel.offsetHeight / 2 ? "center" : "start" });
    });
  } } };
  var yd = { ref: "panel", class: "tify-text", tabindex: "0" };
  var wd = { class: "tify-sr-only" };
  var _d = { key: 0, class: "tify-text-pages" };
  var Td = { key: 0 };
  var xd = { class: "tify-text-list" };
  var bd = ["onClick", "onKeydown", "innerHTML"];
  var Ed = { key: 1, class: "tify-text-none" };
  function Cd(t, i, e, n, r, s) {
    const o = ti;
    return E(), A("section", yd, [R("h2", wd, B(t.$translate("Text")), 1), t.$store.annotationsAvailable !== false ? (E(), A("div", _d, [(E(true), A(ue, null, Ce(s.pages, (l) => (E(), A("div", { key: l, class: "tify-text-page" }, [t.$store.pageCount > 1 ? (E(), A("h3", Td, [ie(o, { number: l }, null, 8, ["number"])])) : J("", true), R("ul", xd, [(E(true), A(ue, null, Ce(t.$store.annotations[l], (a, u) => (E(), A("li", { key: `${l}-${u}`, ref_for: true, ref: t.$store.options.annotationId === a.id ? "currentItem" : "", class: Pe(["tify-text-item", { "-current": t.$store.options.annotationId === a.id }]) }, [R("div", { role: "button", tabindex: "0", class: "tify-text-toggle", onClick: (c) => t.$store.toggleAnnotationId(a.id), onKeydown: Ot((c) => t.$store.toggleAnnotationId(a.id), ["enter", "space"]), innerHTML: s.filterHtml(a.html) }, null, 40, bd)], 2))), 128))])]))), 128))])) : (E(), A("p", Ed, B(t.$translate("Text not available for this page")), 1))], 512);
  }
  var Sd = $(vd, [["render", Cd]]);
  var Pd = {};
  var Rd = { class: "tify-icon -volume-high", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Dd(t, i) {
    return E(), A("svg", Rd, [...i[0] || (i[0] = [R("path", { d: "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" }, null, -1)])]);
  }
  var Ad = $(Pd, [["render", Dd]]);
  var Ld = {};
  var Id = { class: "tify-icon -volume-medium", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Md(t, i) {
    return E(), A("svg", Id, [...i[0] || (i[0] = [R("path", { d: "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" }, null, -1)])]);
  }
  var Hd = $(Ld, [["render", Md]]);
  var Od = {};
  var Fd = { class: "tify-icon -volume-low", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function kd(t, i) {
    return E(), A("svg", Fd, [...i[0] || (i[0] = [R("path", { d: "M7,9V15H11L16,20V4L11,9H7Z" }, null, -1)])]);
  }
  var Bd = $(Od, [["render", kd]]);
  var Vd = {};
  var zd = { class: "tify-icon -volume-variant-off", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Nd(t, i) {
    return E(), A("svg", zd, [...i[0] || (i[0] = [R("path", { d: "M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z" }, null, -1)])]);
  }
  var Ud = $(Vd, [["render", Nd]]);
  var Wd = {};
  var jd = { class: "tify-icon -closed-caption-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gd(t, i) {
    return E(), A("svg", jd, [...i[0] || (i[0] = [R("path", { d: "M5,4C4.45,4 4,4.18 3.59,4.57C3.2,4.96 3,5.44 3,6V18C3,18.56 3.2,19.04 3.59,19.43C4,19.82 4.45,20 5,20H19C19.5,20 20,19.81 20.39,19.41C20.8,19 21,18.53 21,18V6C21,5.47 20.8,5 20.39,4.59C20,4.19 19.5,4 19,4H5M4.5,5.5H19.5V18.5H4.5V5.5M7,9C6.7,9 6.47,9.09 6.28,9.28C6.09,9.47 6,9.7 6,10V14C6,14.3 6.09,14.53 6.28,14.72C6.47,14.91 6.7,15 7,15H10C10.27,15 10.5,14.91 10.71,14.72C10.91,14.53 11,14.3 11,14V13H9.5V13.5H7.5V10.5H9.5V11H11V10C11,9.7 10.91,9.47 10.71,9.28C10.5,9.09 10.27,9 10,9H7M14,9C13.73,9 13.5,9.09 13.29,9.28C13.09,9.47 13,9.7 13,10V14C13,14.3 13.09,14.53 13.29,14.72C13.5,14.91 13.73,15 14,15H17C17.3,15 17.53,14.91 17.72,14.72C17.91,14.53 18,14.3 18,14V13H16.5V13.5H14.5V10.5H16.5V11H18V10C18,9.7 17.91,9.47 17.72,9.28C17.53,9.09 17.3,9 17,9H14Z" }, null, -1)])]);
  }
  var qd = $(Wd, [["render", Gd]]);
  var Zd = {};
  var Kd = { class: "tify-icon -closed-caption", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xd(t, i) {
    return E(), A("svg", Kd, [...i[0] || (i[0] = [R("path", { d: "M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" }, null, -1)])]);
  }
  var Yd = $(Zd, [["render", Xd]]);
  function hn(t) {
    return mr() ? (ta(t), true) : false;
  }
  function Ys() {
    const t = /* @__PURE__ */ new Set(), i = (s) => {
      t.delete(s);
    };
    return { on: (s) => {
      t.add(s);
      const o = () => i(s);
      return hn(o), { off: o };
    }, off: i, trigger: (...s) => Promise.all(Array.from(t).map((o) => o(...s))), clear: () => {
      t.clear();
    } };
  }
  var as = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  var Jd = Object.prototype.toString;
  var bo = (t) => Jd.call(t) === "[object Object]";
  var Ht = () => {
  };
  var Qd = $d();
  function $d() {
    var t, i;
    return as && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((i = window == null ? void 0 : window.navigator) == null ? void 0 : i.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function ef(...t) {
    if (t.length !== 1) return Da(...t);
    const i = t[0];
    return typeof i == "function" ? Oi(Sa(() => ({ get: i, set: Ht }))) : gi(i);
  }
  function tf(t, i) {
    function e(...n) {
      return new Promise((r, s) => {
        Promise.resolve(t(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(r).catch(s);
      });
    }
    return e;
  }
  var nf = (t) => t();
  function xn(t) {
    return Array.isArray(t) ? t : [t];
  }
  function sf(t) {
    return xi();
  }
  function rf(t, i = true, e) {
    sf() ? es(t, e) : i ? t() : Yn(t);
  }
  function Js(t, i, e = {}) {
    const { eventFilter: n = nf, ...r } = e, s = tf(n, i);
    let o, l, a;
    if (r.flush === "sync") {
      let u = false;
      l = () => {
      }, o = (c) => {
        u = true, c(), u = false;
      }, a = et(t, (...c) => {
        u || s(...c);
      }, r);
    } else {
      const u = [];
      let c = 0, h = 0;
      l = () => {
        c = h;
      }, u.push(et(t, () => {
        h++;
      }, { ...r, flush: "sync" })), o = (f) => {
        const m = h;
        f(), c += h - m;
      }, u.push(et(t, (...f) => {
        const m = c > 0 && c === h;
        c = 0, h = 0, !m && s(...f);
      }, r)), a = () => {
        u.forEach((f) => f());
      };
    }
    return { stop: a, ignoreUpdates: o, ignorePrevAsyncUpdates: l };
  }
  function of(t, i, e) {
    return et(t, i, { ...e, immediate: true });
  }
  var Eo = as ? window : void 0;
  var Co = as ? window.document : void 0;
  function Ft(t) {
    var i;
    const e = Se(t);
    return (i = e == null ? void 0 : e.$el) != null ? i : e;
  }
  function Ee(...t) {
    const i = [], e = () => {
      i.forEach((l) => l()), i.length = 0;
    }, n = (l, a, u, c) => (l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)), r = Me(() => {
      const l = xn(Se(t[0])).filter((a) => a != null);
      return l.every((a) => typeof a != "string") ? l : void 0;
    }), s = of(() => {
      var l, a;
      return [(a = (l = r.value) == null ? void 0 : l.map((u) => Ft(u))) != null ? a : [Eo].filter((u) => u != null), xn(Se(r.value ? t[1] : t[0])), xn(sn(r.value ? t[2] : t[1])), Se(r.value ? t[3] : t[2])];
    }, ([l, a, u, c]) => {
      if (e(), !(l != null && l.length) || !(a != null && a.length) || !(u != null && u.length)) return;
      const h = bo(c) ? { ...c } : c;
      i.push(...l.flatMap((f) => a.flatMap((m) => u.map((v) => n(f, m, v, h)))));
    }, { flush: "post" }), o = () => {
      s(), e();
    };
    return hn(e), o;
  }
  var Qs = false;
  function So(t, i, e = {}) {
    const { window: n = Eo, ignore: r = [], capture: s = true, detectIframe: o = false, controls: l = false } = e;
    if (!n) return l ? { stop: Ht, cancel: Ht, trigger: Ht } : Ht;
    if (Qd && !Qs) {
      Qs = true;
      const x = { passive: true };
      Array.from(n.document.body.children).forEach((T) => T.addEventListener("click", Ht, x)), n.document.documentElement.addEventListener("click", Ht, x);
    }
    let a = true;
    const u = (x) => Se(r).some((T) => {
      if (typeof T == "string") return Array.from(n.document.querySelectorAll(T)).some((C) => C === x.target || x.composedPath().includes(C));
      {
        const C = Ft(T);
        return C && (x.target === C || x.composedPath().includes(C));
      }
    });
    function c(x) {
      const T = Se(x);
      return T && T.$.subTree.shapeFlag === 16;
    }
    function h(x, T) {
      const C = Se(x), H = C.$.subTree && C.$.subTree.children;
      return H == null || !Array.isArray(H) ? false : H.some((k) => k.el === T.target || T.composedPath().includes(k.el));
    }
    const f = (x) => {
      const T = Ft(t);
      if (x.target != null && !(!(T instanceof Element) && c(t) && h(t, x)) && !(!T || T === x.target || x.composedPath().includes(T))) {
        if ("detail" in x && x.detail === 0 && (a = !u(x)), !a) {
          a = true;
          return;
        }
        i(x);
      }
    };
    let m = false;
    const v = [Ee(n, "click", (x) => {
      m || (m = true, setTimeout(() => {
        m = false;
      }, 0), f(x));
    }, { passive: true, capture: s }), Ee(n, "pointerdown", (x) => {
      const T = Ft(t);
      a = !u(x) && !!(T && !x.composedPath().includes(T));
    }, { passive: true }), o && Ee(n, "blur", (x) => {
      setTimeout(() => {
        var T;
        const C = Ft(t);
        ((T = n.document.activeElement) == null ? void 0 : T.tagName) === "IFRAME" && !(C != null && C.contains(n.document.activeElement)) && i(x);
      }, 0);
    }, { passive: true })].filter(Boolean), y = () => v.forEach((x) => x());
    return l ? { stop: y, cancel: () => {
      a = false;
    }, trigger: (x) => {
      a = true, f(x), a = false;
    } } : y;
  }
  function af() {
    const t = Ue(false), i = xi();
    return i && es(() => {
      t.value = true;
    }, i), t;
  }
  function lf(t) {
    const i = af();
    return Me(() => (i.value, !!t()));
  }
  var $s = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
  function uf(t, i = {}) {
    const { document: e = Co, autoExit: n = false } = i, r = Me(() => {
      var C;
      return (C = Ft(t)) != null ? C : e == null ? void 0 : e.documentElement;
    }), s = Ue(false), o = Me(() => ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find((C) => e && C in e || r.value && C in r.value)), l = Me(() => ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find((C) => e && C in e || r.value && C in r.value)), a = Me(() => ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find((C) => e && C in e || r.value && C in r.value)), u = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find((C) => e && C in e), c = lf(() => r.value && e && o.value !== void 0 && l.value !== void 0 && a.value !== void 0), h = () => u ? (e == null ? void 0 : e[u]) === r.value : false, f = () => {
      if (a.value) {
        if (e && e[a.value] != null) return e[a.value];
        {
          const C = r.value;
          if ((C == null ? void 0 : C[a.value]) != null) return !!C[a.value];
        }
      }
      return false;
    };
    async function m() {
      if (!(!c.value || !s.value)) {
        if (l.value) if ((e == null ? void 0 : e[l.value]) != null) await e[l.value]();
        else {
          const C = r.value;
          (C == null ? void 0 : C[l.value]) != null && await C[l.value]();
        }
        s.value = false;
      }
    }
    async function v() {
      if (!c.value || s.value) return;
      f() && await m();
      const C = r.value;
      o.value && (C == null ? void 0 : C[o.value]) != null && (await C[o.value](), s.value = true);
    }
    async function y() {
      await (s.value ? m() : v());
    }
    const x = () => {
      const C = f();
      (!C || C && h()) && (s.value = C);
    }, T = { capture: false, passive: true };
    return Ee(e, $s, x, T), Ee(() => Ft(r), $s, x, T), rf(x, false), n && hn(m), { isSupported: c, isFullscreen: s, enter: v, exit: m, toggle: y };
  }
  function bn(t, i) {
    Se(t) && i(Se(t));
  }
  function cf(t) {
    let i = [];
    for (let e = 0; e < t.length; ++e) i = [...i, [t.start(e), t.end(e)]];
    return i;
  }
  function En(t) {
    return Array.from(t).map(({ label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }, a) => ({ id: a, label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }));
  }
  var hf = { src: "", tracks: [] };
  function df(t, i = {}) {
    t = ef(t), i = { ...hf, ...i };
    const { document: e = Co } = i, n = { passive: true }, r = Ue(0), s = Ue(0), o = Ue(false), l = Ue(1), a = Ue(false), u = Ue(false), c = Ue(false), h = Ue(1), f = Ue(false), m = gi([]), v = gi([]), y = Ue(-1), x = Ue(false), T = Ue(false), C = e && "pictureInPictureEnabled" in e, H = Ys(), k = Ys(), N = (j) => {
      bn(t, (ne) => {
        if (j) {
          const he = typeof j == "number" ? j : j.id;
          ne.textTracks[he].mode = "disabled";
        } else for (let he = 0; he < ne.textTracks.length; ++he) ne.textTracks[he].mode = "disabled";
        y.value = -1;
      });
    }, Y = (j, ne = true) => {
      bn(t, (he) => {
        const ye = typeof j == "number" ? j : j.id;
        ne && N(), he.textTracks[ye].mode = "showing", y.value = ye;
      });
    }, K = () => new Promise((j, ne) => {
      bn(t, async (he) => {
        C && (x.value ? e.exitPictureInPicture().then(j).catch(ne) : he.requestPictureInPicture().then(j).catch(ne));
      });
    });
    ws(() => {
      if (!e) return;
      const j = Se(t);
      if (!j) return;
      const ne = Se(i.src);
      let he = [];
      ne && (typeof ne == "string" ? he = [{ src: ne }] : Array.isArray(ne) ? he = ne : bo(ne) && (he = [ne]), j.querySelectorAll("source").forEach((ye) => {
        ye.remove();
      }), he.forEach(({ src: ye, type: me, media: pe }) => {
        const ae = e.createElement("source");
        ae.setAttribute("src", ye), ae.setAttribute("type", me || ""), ae.setAttribute("media", pe || ""), Ee(ae, "error", H.trigger, n), j.appendChild(ae);
      }), j.load());
    }), et([t, l], () => {
      const j = Se(t);
      j && (j.volume = l.value);
    }), et([t, T], () => {
      const j = Se(t);
      j && (j.muted = T.value);
    }), et([t, h], () => {
      const j = Se(t);
      j && (j.playbackRate = h.value);
    }), ws(() => {
      if (!e) return;
      const j = Se(i.tracks), ne = Se(t);
      !j || !j.length || !ne || (ne.querySelectorAll("track").forEach((he) => he.remove()), j.forEach(({ default: he, kind: ye, label: me, src: pe, srcLang: ae }, Ae) => {
        const Re = e.createElement("track");
        Re.default = he || false, Re.kind = ye, Re.label = me, Re.src = pe, Re.srclang = ae, Re.default && (y.value = Ae), ne.appendChild(Re);
      }));
    });
    const { ignoreUpdates: q } = Js(r, (j) => {
      const ne = Se(t);
      ne && (ne.currentTime = j);
    }), { ignoreUpdates: ee } = Js(c, (j) => {
      const ne = Se(t);
      ne && (j ? ne.play().catch((he) => {
        throw k.trigger(he), he;
      }) : ne.pause());
    });
    Ee(t, "timeupdate", () => q(() => r.value = Se(t).currentTime), n), Ee(t, "durationchange", () => s.value = Se(t).duration, n), Ee(t, "progress", () => m.value = cf(Se(t).buffered), n), Ee(t, "seeking", () => o.value = true, n), Ee(t, "seeked", () => o.value = false, n), Ee(t, ["waiting", "loadstart"], () => {
      a.value = true, ee(() => c.value = false);
    }, n), Ee(t, "loadeddata", () => a.value = false, n), Ee(t, "playing", () => {
      a.value = false, u.value = false, ee(() => c.value = true);
    }, n), Ee(t, "ratechange", () => h.value = Se(t).playbackRate, n), Ee(t, "stalled", () => f.value = true, n), Ee(t, "ended", () => u.value = true, n), Ee(t, "pause", () => ee(() => c.value = false), n), Ee(t, "play", () => ee(() => c.value = true), n), Ee(t, "enterpictureinpicture", () => x.value = true, n), Ee(t, "leavepictureinpicture", () => x.value = false, n), Ee(t, "volumechange", () => {
      const j = Se(t);
      j && (l.value = j.volume, T.value = j.muted);
    }, n);
    const ce = [], te = et([t], () => {
      const j = Se(t);
      j && (te(), ce[0] = Ee(j.textTracks, "addtrack", () => v.value = En(j.textTracks), n), ce[1] = Ee(j.textTracks, "removetrack", () => v.value = En(j.textTracks), n), ce[2] = Ee(j.textTracks, "change", () => v.value = En(j.textTracks), n));
    });
    return hn(() => ce.forEach((j) => j())), { currentTime: r, duration: s, waiting: a, seeking: o, ended: u, stalled: f, buffered: m, playing: c, rate: h, volume: l, muted: T, tracks: v, selectedTrack: y, enableTrack: Y, disableTrack: N, supportsPictureInPicture: C, togglePictureInPicture: K, isPictureInPicture: x, onSourceError: H.on, onPlaybackError: k.on };
  }
  function ls(t) {
    return !!(t.altKey || t.ctrlKey || t.metaKey || ["INPUT", "SELECT", "TEXTAREA"].includes(t.target.nodeName) && t.target.type !== "range");
  }
  var ff = { props: { label: { default: null, type: String }, position: { default: "bottom", type: String }, shortcut: { default: null, type: String } }, emits: ["open"], data() {
    return { open: false };
  }, computed: { id() {
    return this.$.appContext.config.globalProperties.$getId ? this.$getId(Vi()) : Vi();
  } }, mounted() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).addEventListener("keydown", this.onKeydown), So(this.$el, () => {
      this.open = false;
    });
  }, beforeUnmount() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).removeEventListener("keydown", this.onKeydown);
  }, methods: { onKeydown(t) {
    if (!ls(t)) {
      if (t.key === "Escape") {
        this.open = false;
        return;
      }
      t.key === this.shortcut && (this.open = !this.open, this.open && this.$emit("open"), t.preventDefault());
    }
  } } };
  var pf = { class: "tify-dropdown" };
  var gf = ["aria-controls", "aria-expanded", "aria-label", "title"];
  var mf = ["id"];
  function vf(t, i, e, n, r, s) {
    return E(), A("div", pf, [R("button", { type: "button", class: "tify-dropdown-button", "aria-controls": s.id, "aria-expanded": r.open, "aria-label": e.label, title: e.label, onClick: i[0] || (i[0] = (o) => {
      r.open = !r.open, r.open && t.$emit("open");
    }) }, [xs(t.$slots, "button")], 8, gf), ke(R("div", { id: s.id, class: Pe(`tify-dropdown-content -${e.position}`), onClick: i[1] || (i[1] = (o) => o.target.closest("a, button") && (r.open = false)) }, [xs(t.$slots, "default")], 10, mf), [[Xe, r.open]])]);
  }
  var us = $(ff, [["render", vf]]);
  var yf = {};
  var wf = { class: "tify-icon -play-speed", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function _f(t, i) {
    return E(), A("svg", wf, [...i[0] || (i[0] = [R("path", { d: "M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z" }, null, -1)])]);
  }
  var Tf = $(yf, [["render", _f]]);
  var xf = {};
  var bf = { class: "tify-icon -pause", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Ef(t, i) {
    return E(), A("svg", bf, [...i[0] || (i[0] = [R("path", { d: "M14,19H18V5H14M6,19H10V5H6V19Z" }, null, -1)])]);
  }
  var Cf = $(xf, [["render", Ef]]);
  var Sf = {};
  var Pf = { class: "tify-icon -play", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Rf(t, i) {
    return E(), A("svg", Pf, [...i[0] || (i[0] = [R("path", { d: "M8,5.14V19.14L19,12.14L8,5.14Z" }, null, -1)])]);
  }
  var Df = $(Sf, [["render", Rf]]);
  var Af = {};
  var Lf = { class: "tify-icon -loading", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function If(t, i) {
    return E(), A("svg", Lf, [...i[0] || (i[0] = [R("path", { d: "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" }, null, -1)])]);
  }
  var Mf = $(Af, [["render", If]]);
  var Hf = { props: { src: { required: true, type: String }, format: { required: true, type: String }, hasImage: { type: Boolean, default: false } }, data() {
    return { currentSubtitle: null, media: df(Ga("av")), mouseInterval: null, mouseMoving: true, rates: [0.5, 0.75, 1, 1.25, 1.5, 2] };
  }, computed: { type() {
    var t;
    return (t = this.format) == null ? void 0 : t.split("/")[0];
  }, subtitles() {
    var i, e;
    const t = (e = (i = this.$store.manifest.items[this.$store.options.pages[0] - 1].annotations) == null ? void 0 : i[0].items) == null ? void 0 : e[0].body;
    return t ? t.items || [t] : [];
  } }, watch: { currentSubtitle(t) {
    Object.values(this.$refs.av.textTracks).forEach((i) => {
      i.mode = i.language === (t == null ? void 0 : t.language) ? "showing" : "disabled";
    });
  } }, beforeUnmount() {
    clearInterval(this.mouseInterval);
  }, mounted() {
    window.addEventListener("mousemove", this.onMouseMove);
  }, unmounted() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }, methods: { formatTime(t) {
    const i = Math.floor(t / 3600), e = Math.floor(t % 3600 / 60), n = Math.floor(t % 60);
    return [...this.media.duration > 3600 ? [i.toString().padStart(2, "0")] : [], e.toString().padStart(2, "0"), n.toString().padStart(2, "0")].join(":");
  }, onMouseMove() {
    clearTimeout(this.mouseInterval), this.mouseMoving = true, this.mouseInterval = setInterval(() => {
      this.mouseMoving = this.$store.options.view || this.media.paused;
    }, 2e3);
  } } };
  var Of = ["src", "type"];
  var Ff = ["srclang", "src"];
  var kf = { class: "tify-player-controls" };
  var Bf = ["aria-label"];
  var Vf = ["max", "aria-label"];
  var zf = { class: "tify-player-time" };
  var Nf = { class: "tify-player-elapsed" };
  var Uf = { class: "tify-player-duration" };
  var Wf = { class: "tify-sr-only" };
  var jf = { key: 0, class: "tify-player-select-badge" };
  var Gf = { class: "tify-player-select-title" };
  var qf = { class: "tify-button-list" };
  var Zf = ["aria-pressed", "onClick"];
  var Kf = { class: "tify-sr-only" };
  var Xf = { class: "tify-player-select-title" };
  var Yf = { class: "tify-button-list" };
  var Jf = ["aria-pressed", "onClick"];
  var Qf = ["aria-pressed"];
  var $f = ["aria-label", "disabled"];
  var ep = ["aria-label"];
  function tp(t, i, e, n, r, s) {
    const o = Mf, l = Df, a = Cf, u = Tf, c = us, h = Yd, f = qd, m = Ud, v = Bd, y = Hd, x = Ad;
    return E(), A("div", { class: Pe(["tify-player", `
			-${s.type}
			${r.mouseMoving || r.media.paused ? "-mousing" : ""}
			${r.media.playing || r.media.waiting ? "-playing" : ""}
			${e.hasImage && (s.type === "audio" || !r.media.currentTime) ? "-bottom" : ""}
		`]), onKeydown: i[7] || (i[7] = Ot(zt((T) => r.media.playing = !r.media.playing, ["prevent"]), ["space"])) }, [(E(), le(nl(s.type), { ref: "av", class: "tify-player-av", poster: t.$store.getThumbnailUrl(t.$store.options.pages[0], 0), preload: "metadata", crossorigin: "anonymous", onClick: i[0] || (i[0] = (T) => {
      r.media.playing = !r.media.playing, s.onMouseMove();
    }) }, { default: Ye(() => [R("source", { src: e.src, type: e.format }, null, 8, Of), (E(true), A(ue, null, Ce(s.subtitles, (T) => (E(), A("track", { key: T.id, kind: "captions", srclang: T.language, src: T.id }, null, 8, Ff))), 128))]), _: 1 }, 8, ["poster"])), s.type === "video" ? (E(), A("div", { key: 0, class: Pe(["tify-player-overlay", { "-hidden": r.media.playing || e.hasImage && !r.media.currentTime }]) }, [r.media.waiting ? (E(), le(o, { key: 0, class: "-spin" })) : r.media.currentTime ? J("", true) : (E(), le(l, { key: 1 }))], 2)) : J("", true), R("div", kf, [R("div", null, [R("button", { type: "button", class: "tify-player-play-pause", "aria-label": t.$translate(r.media.paused ? "Play [verb]" : "Pause [verb]"), onClick: i[1] || (i[1] = (T) => r.media.playing = !r.media.playing) }, [r.media.playing || r.media.seeking && r.media.waiting ? (E(), le(a, { key: 0 })) : (E(), le(l, { key: 1 }))], 8, Bf), ke(R("input", { "onUpdate:modelValue": i[2] || (i[2] = (T) => r.media.currentTime = T), type: "range", class: "tify-player-seekbar", min: "0", max: r.media.duration, step: "any", "aria-label": t.$translate("Current time"), style: Rt(`--value: ${r.media.currentTime / r.media.duration * 100}%`) }, null, 12, Vf), [[Gi, r.media.currentTime, void 0, { number: true }]]), R("span", zf, [R("span", Nf, B(s.formatTime(r.media.currentTime)), 1), R("span", Uf, " / " + B(s.formatTime(r.media.duration)), 1)]), ie(c, { class: "tify-player-select -rate", alignment: "center", position: "top", shortcut: "r" }, { button: Ye(() => [R("span", Wf, B(t.$translate("Playback rate")), 1), ie(u), r.media.rate !== 1 ? (E(), A("span", jf, B(r.media.rate.toLocaleString(t.$store.options.language)) + "x ", 1)) : J("", true)]), default: Ye(() => [R("h3", Gf, B(t.$translate("Playback rate")), 1), R("ol", qf, [(E(true), A(ue, null, Ce(r.rates, (T) => (E(), A("li", { key: T }, [R("button", { type: "button", "aria-pressed": T === r.media.rate, onClick: (C) => r.media.rate = T }, B(T === 1 ? t.$translate("Normal") : `${T.toLocaleString(t.$store.options.language)}x`), 9, Zf)]))), 128))])]), _: 1 }), s.subtitles.length ? (E(), le(c, { key: 0, class: "tify-player-select -captions", alignment: "center", position: "top", shortcut: "c" }, { button: Ye(() => [R("span", Kf, B(t.$translate("Closed Captions")), 1), r.currentSubtitle ? (E(), le(h, { key: 0 })) : (E(), le(f, { key: 1 }))]), default: Ye(() => [R("h3", Xf, B(t.$translate("Closed Captions")), 1), R("ol", Yf, [(E(true), A(ue, null, Ce(s.subtitles, (T) => (E(), A("li", { key: T.id }, [R("button", { type: "button", "aria-pressed": T === r.currentSubtitle, onClick: (C) => r.currentSubtitle = T }, B(t.$store.localize(T.label) || T.language), 9, Jf)]))), 128)), R("li", null, [R("button", { type: "button", "aria-pressed": !r.currentSubtitle, onClick: i[3] || (i[3] = (T) => r.currentSubtitle = null) }, B(t.$translate("None")), 9, Qf)])])]), _: 1 })) : J("", true)]), R("div", null, [R("button", { type: "button", class: "tify-player-mute", "aria-label": t.$translate("Toggle mute"), disabled: r.media.volume === 0, onClick: i[4] || (i[4] = (T) => r.media.muted = !r.media.muted) }, [r.media.muted ? (E(), le(m, { key: 0 })) : r.media.volume < 0.34 ? (E(), le(v, { key: 1 })) : r.media.volume < 0.67 ? (E(), le(y, { key: 2 })) : (E(), le(x, { key: 3 }))], 8, $f), ke(R("input", { "onUpdate:modelValue": i[5] || (i[5] = (T) => r.media.volume = T), type: "range", class: "tify-player-volume", min: "0", max: "1", step: "0.01", "aria-label": t.$translate("Volume"), style: Rt(`--value: ${r.media.volume * 100}%`), onInput: i[6] || (i[6] = (T) => r.media.muted = r.media.volume === 0) }, null, 44, ep), [[Gi, r.media.volume, void 0, { number: true }]])])])], 34);
  }
  var ip = $(Hf, [["render", tp]]);
  var np = {};
  var sp = { class: "tify-icon -chevron-right", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function rp(t, i) {
    return E(), A("svg", sp, [...i[0] || (i[0] = [R("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, null, -1)])]);
  }
  var Po = $(np, [["render", rp]]);
  var op = {};
  var ap = { class: "tify-icon -chevron-left", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function lp(t, i) {
    return E(), A("svg", ap, [...i[0] || (i[0] = [R("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }, null, -1)])]);
  }
  var Ro = $(op, [["render", lp]]);
  var up = {};
  var cp = { class: "tify-icon -layers-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function hp(t, i) {
    return E(), A("svg", cp, [...i[0] || (i[0] = [R("path", { d: "M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z" }, null, -1)])]);
  }
  var dp = $(up, [["render", hp]]);
  var fp = {};
  var pp = { class: "tify-icon -comment-off-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gp(t, i) {
    return E(), A("svg", pp, [...i[0] || (i[0] = [R("path", { d: "M7.2 4L5.2 2H20C21.11 2 22 2.9 22 4V16C22 16.76 21.57 17.41 20.95 17.75L19.2 16H20V4H7.2M22.11 21.46L20.84 22.73L16.11 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 3.97 2 3.93 2 3.9L1.11 3L2.39 1.73L22.11 21.46M14.11 16L4 5.89V16H10V19.08L13.08 16H14.11Z" }, null, -1)])]);
  }
  var mp = $(fp, [["render", gp]]);
  var vp = {};
  var yp = { class: "tify-icon -comment-text-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function wp(t, i) {
    return E(), A("svg", yp, [...i[0] || (i[0] = [R("path", { d: "M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z" }, null, -1)])]);
  }
  var _p = $(vp, [["render", wp]]);
  var Tp = {};
  var xp = { class: "tify-icon -backup-restore", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function bp(t, i) {
    return E(), A("svg", xp, [...i[0] || (i[0] = [R("path", { d: "M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" }, null, -1)])]);
  }
  var Ep = $(Tp, [["render", bp]]);
  var Cp = {};
  var Sp = { class: "tify-icon -palette-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Pp(t, i) {
    return E(), A("svg", Sp, [...i[0] || (i[0] = [R("path", { d: "M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z" }, null, -1)])]);
  }
  var Rp = $(Cp, [["render", Pp]]);
  var Dp = {};
  var Ap = { class: "tify-icon -circle-half-full", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Lp(t, i) {
    return E(), A("svg", Ap, [...i[0] || (i[0] = [R("path", { d: "M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z" }, null, -1)])]);
  }
  var Ip = $(Dp, [["render", Lp]]);
  var Mp = {};
  var Hp = { class: "tify-icon -lightbulb-on-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Op(t, i) {
    return E(), A("svg", Hp, [...i[0] || (i[0] = [R("path", { d: "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z" }, null, -1)])]);
  }
  var Fp = $(Mp, [["render", Op]]);
  var kp = { emits: ["update"], computed: { saturation() {
    const t = this.$store.options.filters.saturate;
    return typeof t == "number" ? t : 1;
  } } };
  var Bp = ["value"];
  var Vp = ["value"];
  var zp = ["value"];
  function Np(t, i, e, n, r, s) {
    const o = Fp, l = Ip, a = Rp;
    return E(), A(ue, null, [R("p", null, [R("label", null, [ie(o), Ge(" " + B(t.$translate("Brightness")) + " ", 1), R("b", null, B(Math.round((t.$store.options.filters.brightness || 1) * 100)) + "\xA0%", 1), R("input", { ref: "firstSlider", max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.brightness || 1, style: Rt(`--value: ${((t.$store.options.filters.brightness || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[0] || (i[0] = (u) => t.$emit("update", "brightness", u)) }, null, 44, Bp)])]), R("p", null, [R("label", null, [ie(l), Ge(" " + B(t.$translate("Contrast")) + " ", 1), R("b", null, B(Math.round((t.$store.options.filters.contrast || 1) * 100)) + "\xA0%", 1), R("input", { max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.contrast || 1, style: Rt(`--value: ${((t.$store.options.filters.contrast || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[1] || (i[1] = (u) => t.$emit("update", "contrast", u)) }, null, 44, Vp)])]), R("p", null, [R("label", null, [ie(a), Ge(" " + B(t.$translate("Saturation")) + " ", 1), R("b", null, B(Math.round(s.saturation * 100)) + "\xA0%", 1), R("input", { max: "3", min: "0", step: ".01", type: "range", value: s.saturation, style: Rt(`--value: ${s.saturation / 3 * 100}%`), onInput: i[2] || (i[2] = (u) => t.$emit("update", "saturate", u)) }, null, 44, zp)])])], 64);
  }
  var Up = $(kp, [["render", Np]]);
  var Wp = {};
  var jp = { class: "tify-icon -tune", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gp(t, i) {
    return E(), A("svg", jp, [...i[0] || (i[0] = [R("path", { d: "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" }, null, -1)])]);
  }
  var qp = $(Wp, [["render", Gp]]);
  var Zp = {};
  var Kp = { class: "tify-icon -rotate-right", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xp(t, i) {
    return E(), A("svg", Kp, [...i[0] || (i[0] = [R("path", { d: "M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z" }, null, -1)])]);
  }
  var Yp = $(Zp, [["render", Xp]]);
  var Jp = {};
  var Qp = { class: "tify-icon -aspect-ratio", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function $p(t, i) {
    return E(), A("svg", Qp, [...i[0] || (i[0] = [R("path", { d: "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z" }, null, -1)])]);
  }
  var eg = $(Jp, [["render", $p]]);
  var Mi = { exports: {} };
  var tg = Mi.exports;
  var er;
  function ig() {
    return er || (er = 1, (function(t) {
      function i(e) {
        return new i.Viewer(e);
      }
      (function(e) {
        e.version = { versionStr: "5.0.1", major: parseInt("5", 10), minor: parseInt("0", 10), revision: parseInt("1", 10) };
        var n = { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object AsyncFunction]": "function", "[object Promise]": "promise", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regexp", "[object Object]": "object" }, r = Object.prototype.toString, s = Object.prototype.hasOwnProperty;
        e.isFunction = function(o) {
          return e.type(o) === "function";
        }, e.isArray = Array.isArray || function(o) {
          return e.type(o) === "array";
        }, e.isWindow = function(o) {
          return o && typeof o == "object" && "setInterval" in o;
        }, e.type = function(o) {
          return o == null ? String(o) : n[r.call(o)] || "object";
        }, e.isPlainObject = function(o) {
          if (!o || i.type(o) !== "object" || o.nodeType || e.isWindow(o) || o.constructor && !s.call(o, "constructor") && !s.call(o.constructor.prototype, "isPrototypeOf")) return false;
          var l;
          for (var a in o) l = a;
          return l === void 0 || s.call(o, l);
        }, e.isEmptyObject = function(o) {
          for (var l in o) return false;
          return true;
        }, e.freezeObject = function(o) {
          return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(l) {
            return l;
          }, e.freezeObject(o);
        }, e.supportsCanvas = (function() {
          var o = document.createElement("canvas");
          return !!(e.isFunction(o.getContext) && o.getContext("2d"));
        })(), e.isCanvasTainted = function(o) {
          var l = false;
          try {
            o.getContext("2d").getImageData(0, 0, 1, 1);
          } catch {
            l = true;
          }
          return l;
        }, e.supportsAddEventListener = (function() {
          return !!(document.documentElement.addEventListener && document.addEventListener);
        })(), e.supportsRemoveEventListener = (function() {
          return !!(document.documentElement.removeEventListener && document.removeEventListener);
        })(), e.supportsEventListenerOptions = (function() {
          var o = 0;
          if (e.supportsAddEventListener) try {
            var l = { get capture() {
              return o++, false;
            }, get once() {
              return o++, false;
            }, get passive() {
              return o++, false;
            } };
            window.addEventListener("test", null, l), window.removeEventListener("test", null, l);
          } catch {
            o = 0;
          }
          return o >= 3;
        })(), e.getCurrentPixelDensityRatio = function() {
          if (e.supportsCanvas) {
            var o = document.createElement("canvas").getContext("2d"), l = window.devicePixelRatio || 1, a = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
            return Math.max(l, 1) / a;
          } else return 1;
        }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
      })(i), (function(e) {
        e.extend = function() {
          var a, u, c, h, f, m, v = arguments[0] || {}, y = arguments.length, x = false, T = 1;
          for (typeof v == "boolean" && (x = v, v = arguments[1] || {}, T = 2), typeof v != "object" && !i.isFunction(v) && (v = {}), y === T && (v = this, --T); T < y; T++) if (a = arguments[T], a !== null || a !== void 0) for (u in a) {
            var C = Object.getOwnPropertyDescriptor(a, u);
            if (C !== void 0) {
              if (C.get || C.set) {
                Object.defineProperty(v, u, C);
                continue;
              }
              h = C.value;
            } else {
              e.console.warn('Could not copy inherited property "' + u + '".');
              continue;
            }
            v !== h && (x && h && (i.isPlainObject(h) || (f = i.isArray(h))) ? (c = v[u], f ? (f = false, m = c && i.isArray(c) ? c : []) : m = c && i.isPlainObject(c) ? c : {}, v[u] = i.extend(x, m, h)) : h !== void 0 && (v[u] = h));
          }
          return v;
        };
        var n = function() {
          if (typeof navigator != "object") return false;
          var a = navigator.userAgent;
          return typeof a != "string" ? false : a.indexOf("iPhone") !== -1 || a.indexOf("iPad") !== -1 || a.indexOf("iPod") !== -1;
        };
        e.extend(e, { DEFAULT_SETTINGS: { xmlPath: null, tileSources: null, tileHost: null, initialPage: 0, crossOriginPolicy: false, ajaxWithCredentials: false, loadTilesWithAjax: false, ajaxHeaders: {}, splitHashDataForPost: false, panHorizontal: true, panVertical: true, constrainDuringPan: false, wrapHorizontal: false, wrapVertical: false, visibilityRatio: 0.5, minPixelRatio: 0.5, defaultZoomLevel: 0, minZoomLevel: null, maxZoomLevel: null, homeFillsViewer: false, clickTimeThreshold: 300, clickDistThreshold: 5, dblClickTimeThreshold: 300, dblClickDistThreshold: 20, springStiffness: 6.5, animationTime: 1.2, gestureSettingsMouse: { dragToPan: true, scrollToZoom: true, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsTouch: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: true, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsPen: { dragToPan: true, scrollToZoom: false, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsUnknown: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: false, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, zoomPerClick: 2, zoomPerScroll: 1.2, zoomPerDblClickDrag: 1.2, zoomPerSecond: 1, blendTime: 0, alwaysBlend: false, autoHideControls: true, immediateRender: false, minZoomImageRatio: 0.9, maxZoomPixelRatio: 1.1, smoothTileEdgesMinZoom: 1.1, iOSDevice: n(), pixelsPerWheelLine: 40, pixelsPerArrowPress: 40, autoResize: true, preserveImageSizeOnResize: false, minScrollDeltaTime: 50, rotationIncrement: 90, maxTilesPerFrame: 1, showSequenceControl: true, sequenceControlAnchor: null, preserveViewport: false, preserveOverlays: false, navPrevNextWrap: false, showNavigationControl: true, navigationControlAnchor: null, showZoomControl: true, showHomeControl: true, showFullPageControl: true, showRotationControl: false, showFlipControl: false, controlsFadeDelay: 2e3, controlsFadeLength: 1500, mouseNavEnabled: true, showNavigator: false, navigatorElement: null, navigatorId: null, navigatorPosition: null, navigatorSizeRatio: 0.2, navigatorMaintainSizeRatio: false, navigatorTop: null, navigatorLeft: null, navigatorHeight: null, navigatorWidth: null, navigatorAutoResize: true, navigatorAutoFade: true, navigatorRotate: true, navigatorBackground: "#000", navigatorOpacity: 0.8, navigatorBorderColor: "#555", navigatorDisplayRegionColor: "#900", degrees: 0, flipped: false, overlayPreserveContentDirection: true, opacity: 1, compositeOperation: null, drawer: ["webgl", "canvas", "html"], drawerOptions: { webgl: {}, canvas: {}, html: {}, custom: {} }, preload: false, imageSmoothingEnabled: true, placeholderFillStyle: null, subPixelRoundingForTransparency: null, showReferenceStrip: false, referenceStripScroll: "horizontal", referenceStripElement: null, referenceStripHeight: null, referenceStripWidth: null, referenceStripPosition: "BOTTOM_LEFT", referenceStripSizeRatio: 0.2, collectionRows: 3, collectionColumns: 0, collectionLayout: "horizontal", collectionMode: false, collectionTileSize: 800, collectionTileMargin: 80, imageLoaderLimit: 0, maxImageCacheCount: 200, timeout: 3e4, tileRetryMax: 0, tileRetryDelay: 2500, prefixUrl: "/images/", navImages: { zoomIn: { REST: "zoomin_rest.png", GROUP: "zoomin_grouphover.png", HOVER: "zoomin_hover.png", DOWN: "zoomin_pressed.png" }, zoomOut: { REST: "zoomout_rest.png", GROUP: "zoomout_grouphover.png", HOVER: "zoomout_hover.png", DOWN: "zoomout_pressed.png" }, home: { REST: "home_rest.png", GROUP: "home_grouphover.png", HOVER: "home_hover.png", DOWN: "home_pressed.png" }, fullpage: { REST: "fullpage_rest.png", GROUP: "fullpage_grouphover.png", HOVER: "fullpage_hover.png", DOWN: "fullpage_pressed.png" }, rotateleft: { REST: "rotateleft_rest.png", GROUP: "rotateleft_grouphover.png", HOVER: "rotateleft_hover.png", DOWN: "rotateleft_pressed.png" }, rotateright: { REST: "rotateright_rest.png", GROUP: "rotateright_grouphover.png", HOVER: "rotateright_hover.png", DOWN: "rotateright_pressed.png" }, flip: { REST: "flip_rest.png", GROUP: "flip_grouphover.png", HOVER: "flip_hover.png", DOWN: "flip_pressed.png" }, previous: { REST: "previous_rest.png", GROUP: "previous_grouphover.png", HOVER: "previous_hover.png", DOWN: "previous_pressed.png" }, next: { REST: "next_rest.png", GROUP: "next_grouphover.png", HOVER: "next_hover.png", DOWN: "next_pressed.png" } }, debugMode: false, debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"], silenceMultiImageWarnings: false }, delegate: function(a, u) {
          return function() {
            var c = arguments;
            return c === void 0 && (c = []), u.apply(a, c);
          };
        }, BROWSERS: { UNKNOWN: 0, IE: 1, FIREFOX: 2, SAFARI: 3, CHROME: 4, OPERA: 5, EDGE: 6, CHROMEEDGE: 7 }, SUBPIXEL_ROUNDING_OCCURRENCES: { NEVER: 0, ONLY_AT_REST: 1, ALWAYS: 2 }, _viewers: /* @__PURE__ */ new Map(), getViewer: function(a) {
          return e._viewers.get(this.getElement(a));
        }, getElement: function(a) {
          return typeof a == "string" && (a = document.getElementById(a)), a;
        }, getElementPosition: function(a) {
          var u = new e.Point(), c, h;
          for (a = e.getElement(a), c = e.getElementStyle(a).position === "fixed", h = l(a, c); h; ) u.x += a.offsetLeft, u.y += a.offsetTop, c && (u = u.plus(e.getPageScroll())), a = h, c = e.getElementStyle(a).position === "fixed", h = l(a, c);
          return u;
        }, getElementOffset: function(a) {
          a = e.getElement(a);
          var u = a && a.ownerDocument, c, h, f = { top: 0, left: 0 };
          return u ? (c = u.documentElement, typeof a.getBoundingClientRect < "u" && (f = a.getBoundingClientRect()), h = u === u.window ? u : u.nodeType === 9 ? u.defaultView || u.parentWindow : false, new e.Point(f.left + (h.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), f.top + (h.pageYOffset || c.scrollTop) - (c.clientTop || 0))) : new e.Point();
        }, getElementSize: function(a) {
          return a = e.getElement(a), new e.Point(a.clientWidth, a.clientHeight);
        }, getElementStyle: document.documentElement.currentStyle ? function(a) {
          return a = e.getElement(a), a.currentStyle;
        } : function(a) {
          return a = e.getElement(a), window.getComputedStyle(a, "");
        }, getCssPropertyWithVendorPrefix: function(a) {
          var u = {};
          return e.getCssPropertyWithVendorPrefix = function(c) {
            if (u[c] !== void 0) return u[c];
            var h = document.createElement("div").style, f = null;
            if (h[c] !== void 0) f = c;
            else for (var m = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], v = e.capitalizeFirstLetter(c), y = 0; y < m.length; y++) {
              var x = m[y] + v;
              if (h[x] !== void 0) {
                f = x;
                break;
              }
            }
            return u[c] = f, f;
          }, e.getCssPropertyWithVendorPrefix(a);
        }, capitalizeFirstLetter: function(a) {
          return a.charAt(0).toUpperCase() + a.slice(1);
        }, positiveModulo: function(a, u) {
          var c = a % u;
          return c < 0 && (c += u), c;
        }, pointInElement: function(a, u) {
          a = e.getElement(a);
          var c = e.getElementOffset(a), h = e.getElementSize(a);
          return u.x >= c.x && u.x < c.x + h.x && u.y < c.y + h.y && u.y >= c.y;
        }, getMousePosition: function(a) {
          if (typeof a.pageX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.pageX, c.y = u.pageY, c;
          };
          else if (typeof a.clientX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c.y = u.clientY + document.body.scrollTop + document.documentElement.scrollTop, c;
          };
          else throw new Error("Unknown event mouse position, no known technique.");
          return e.getMousePosition(a);
        }, getPageScroll: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.pageXOffset == "number") e.getPageScroll = function() {
            return new e.Point(window.pageXOffset, window.pageYOffset);
          };
          else if (u.scrollLeft || u.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.body.scrollLeft, document.body.scrollTop);
          };
          else if (a.scrollLeft || a.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop);
          };
          else return new e.Point(0, 0);
          return e.getPageScroll();
        }, setPageScroll: function(a) {
          if (typeof window.scrollTo < "u") e.setPageScroll = function(h) {
            window.scrollTo(h.x, h.y);
          };
          else {
            var u = e.getPageScroll();
            if (u.x === a.x && u.y === a.y) return;
            document.body.scrollLeft = a.x, document.body.scrollTop = a.y;
            var c = e.getPageScroll();
            if (c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.body.scrollLeft = h.x, document.body.scrollTop = h.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = a.x, document.documentElement.scrollTop = a.y, c = e.getPageScroll(), c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.documentElement.scrollLeft = h.x, document.documentElement.scrollTop = h.y;
              };
              return;
            }
            e.setPageScroll = function(h) {
            };
          }
          e.setPageScroll(a);
        }, getWindowSize: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.innerWidth == "number") e.getWindowSize = function() {
            return new e.Point(window.innerWidth, window.innerHeight);
          };
          else if (a.clientWidth || a.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.documentElement.clientWidth, document.documentElement.clientHeight);
          };
          else if (u.clientWidth || u.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.body.clientWidth, document.body.clientHeight);
          };
          else throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        }, makeCenteredNode: function(a) {
          a = e.getElement(a);
          var u = [e.makeNeutralElement("div"), e.makeNeutralElement("div"), e.makeNeutralElement("div")];
          return e.extend(u[0].style, { display: "table", height: "100%", width: "100%" }), e.extend(u[1].style, { display: "table-row" }), e.extend(u[2].style, { display: "table-cell", verticalAlign: "middle", textAlign: "center" }), u[0].appendChild(u[1]), u[1].appendChild(u[2]), u[2].appendChild(a), u[0];
        }, makeNeutralElement: function(a) {
          var u = document.createElement(a), c = u.style;
          return c.background = "transparent none", c.border = "none", c.margin = "0px", c.padding = "0px", c.position = "static", u;
        }, now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        }, makeTransparentImage: function(a) {
          var u = e.makeNeutralElement("img");
          return u.src = a, u;
        }, setElementOpacity: function(a, u, c) {
          var h, f;
          a = e.getElement(a), c && !e.Browser.alpha && (u = Math.round(u)), e.Browser.opacity ? a.style.opacity = u < 1 ? u : "" : u < 1 ? (h = Math.round(100 * u), f = "alpha(opacity=" + h + ")", a.style.filter = f) : a.style.filter = "";
        }, setElementTouchActionNone: function(a) {
          a = e.getElement(a), typeof a.style.touchAction < "u" ? a.style.touchAction = "none" : typeof a.style.msTouchAction < "u" && (a.style.msTouchAction = "none");
        }, setElementPointerEvents: function(a, u) {
          a = e.getElement(a), typeof a.style < "u" && typeof a.style.pointerEvents < "u" && (a.style.pointerEvents = u);
        }, setElementPointerEventsNone: function(a) {
          e.setElementPointerEvents(a, "none");
        }, addClass: function(a, u) {
          a = e.getElement(a), a.className ? (" " + a.className + " ").indexOf(" " + u + " ") === -1 && (a.className += " " + u) : a.className = u;
        }, indexOf: function(a, u, c) {
          return Array.prototype.indexOf ? this.indexOf = function(h, f, m) {
            return h.indexOf(f, m);
          } : this.indexOf = function(h, f, m) {
            var v, y = m || 0, x;
            if (!h) throw new TypeError();
            if (x = h.length, x === 0 || y >= x) return -1;
            for (y < 0 && (y = x - Math.abs(y)), v = y; v < x; v++) if (h[v] === f) return v;
            return -1;
          }, this.indexOf(a, u, c);
        }, removeClass: function(a, u) {
          var c, h = [], f;
          for (a = e.getElement(a), c = a.className.split(/\s+/), f = 0; f < c.length; f++) c[f] && c[f] !== u && h.push(c[f]);
          a.className = h.join(" ");
        }, normalizeEventListenerOptions: function(a) {
          var u;
          return typeof a < "u" ? typeof a == "boolean" ? u = e.supportsEventListenerOptions ? { capture: a } : a : u = e.supportsEventListenerOptions ? a : typeof a.capture < "u" ? a.capture : false : u = e.supportsEventListenerOptions ? { capture: false } : false, u;
        }, addEvent: (function() {
          if (e.supportsAddEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.addEventListener(u, c, h);
          };
          if (document.documentElement.attachEvent && document.attachEvent) return function(a, u, c) {
            a = e.getElement(a), a.attachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), removeEvent: (function() {
          if (e.supportsRemoveEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.removeEventListener(u, c, h);
          };
          if (document.documentElement.detachEvent && document.detachEvent) return function(a, u, c) {
            a = e.getElement(a), a.detachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), cancelEvent: function(a) {
          a.preventDefault();
        }, eventIsCanceled: function(a) {
          return a.defaultPrevented;
        }, stopEvent: function(a) {
          a.stopPropagation();
        }, createCallback: function(a, u) {
          console.error("The createCallback function is deprecated and will be removed in future versions. Please use alternativeFunction instead.");
          var c = [], h;
          for (h = 2; h < arguments.length; h++) c.push(arguments[h]);
          return function() {
            var f = c.concat([]), m;
            for (m = 0; m < arguments.length; m++) f.push(arguments[m]);
            return u.apply(a, f);
          };
        }, getUrlParameter: function(a) {
          var u = o[a];
          return u || null;
        }, getUrlProtocol: function(a) {
          var u = a.match(/^([a-z]+:)\/\//i);
          return u === null ? window.location.protocol : u[1].toLowerCase();
        }, createAjaxRequest: function() {
          if (window.XMLHttpRequest) return e.createAjaxRequest = function() {
            return new XMLHttpRequest();
          }, new XMLHttpRequest();
          throw new Error("Browser doesn't support XMLHttpRequest.");
        }, makeAjaxRequest: function(a, u, c) {
          var h, f, m, v;
          e.isPlainObject(a) && (u = a.success, c = a.error, h = a.withCredentials, f = a.headers, m = a.responseType || null, v = a.postData || null, a = a.url);
          var y = e.getUrlProtocol(a), x = e.createAjaxRequest();
          if (!e.isFunction(u)) throw new Error("makeAjaxRequest requires a success callback");
          x.onreadystatechange = function() {
            x.readyState === 4 && (x.onreadystatechange = function() {
            }, x.status >= 200 && x.status < 300 || x.status === 0 && y !== "http:" && y !== "https:" ? u(x) : e.isFunction(c) ? c(x) : e.console.error("AJAX request returned %d: %s", x.status, a));
          };
          var T = v ? "POST" : "GET";
          try {
            if (x.open(T, a, true), m && (x.responseType = m), f) for (var C in f) Object.prototype.hasOwnProperty.call(f, C) && f[C] && x.setRequestHeader(C, f[C]);
            h && (x.withCredentials = true), x.send(v);
          } catch (H) {
            e.console.error("%s while making AJAX request: %s", H.name, H.message), x.onreadystatechange = function() {
            }, e.isFunction(c) && c(x, H);
          }
          return x;
        }, jsonp: function(a) {
          var u, c = a.url, h = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = a.callbackName || "openseadragon" + e.now(), m = window[f], v = "$1" + f + "$2", y = a.param || "callback", x = a.callback;
          c = c.replace(/(=)\?(&|$)|\?\?/i, v), c += (/\?/.test(c) ? "&" : "?") + y + "=" + f, window[f] = function(T) {
            if (m) window[f] = m;
            else try {
              delete window[f];
            } catch {
            }
            x && e.isFunction(x) && x(T);
          }, u = document.createElement("script"), (a.async !== void 0 || a.async !== false) && (u.async = "async"), a.scriptCharset && (u.charset = a.scriptCharset), u.src = c, u.onload = u.onreadystatechange = function(T, C) {
            (C || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, h && u.parentNode && h.removeChild(u), u = void 0);
          }, h.insertBefore(u, h.firstChild);
        }, createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        }, parseXml: function(a) {
          if (window.DOMParser) e.parseXml = function(u) {
            var c = null, h;
            return h = new DOMParser(), c = h.parseFromString(u, "text/xml"), c;
          };
          else throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(a);
        }, parseJSON: function(a) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(a);
        }, imageFormatSupported: function(a) {
          return a = a || "", !!s[a.toLowerCase()];
        }, setImageFormatsSupported: function(a) {
          e.extend(s, a);
        } });
        var r = function(a) {
        };
        e.console = window.console || { log: r, debug: r, info: r, warn: r, error: r, assert: r }, e.Browser = { vendor: e.BROWSERS.UNKNOWN, version: 0, alpha: true };
        var s = { avif: true, bmp: false, jpeg: true, jpg: true, png: true, tif: false, wdp: false, webp: true }, o = {};
        (function() {
          var a = navigator.appVersion, u = navigator.userAgent, c;
          switch (navigator.appName) {
            case "Microsoft Internet Explorer":
              window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(u.substring(u.indexOf("MSIE") + 5, u.indexOf(";", u.indexOf("MSIE")))));
              break;
            case "Netscape":
              window.addEventListener && (u.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edge") + 5))) : u.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edg") + 4))) : u.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(u.substring(u.indexOf("Firefox") + 8))) : u.indexOf("Safari") >= 0 ? (e.Browser.vendor = u.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(u.substring(u.substring(0, u.indexOf("Safari")).lastIndexOf("/") + 1, u.indexOf("Safari")))) : (c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), c.exec(u) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
              break;
            case "Opera":
              e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(a);
              break;
          }
          var h = window.location.search.substring(1), f = h.split("&"), m, v, y;
          for (y = 0; y < f.length; y++) if (m = f[y], v = m.indexOf("="), v > 0) {
            var x = m.substring(0, v), T = m.substring(v + 1);
            try {
              o[x] = decodeURIComponent(T);
            } catch {
              e.console.error("Ignoring malformed URL parameter: %s=%s", x, T);
            }
          }
          e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = true, e.Browser.vendor === e.BROWSERS.IE && e.console.error("Internet Explorer is not supported by OpenSeadragon");
        })(), (function(a) {
          var u = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame, c = a.cancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelAnimationFrame || a.msCancelAnimationFrame;
          if (u && c) e.requestAnimationFrame = function() {
            return u.apply(a, arguments);
          }, e.cancelAnimationFrame = function() {
            return c.apply(a, arguments);
          };
          else {
            var h = [], f = [], m = 0, v;
            e.requestAnimationFrame = function(y) {
              return h.push([++m, y]), v || (v = setInterval(function() {
                if (h.length) {
                  var x = e.now(), T = f;
                  for (f = h, h = T; f.length; ) f.shift()[1](x);
                } else clearInterval(v), v = void 0;
              }, 1e3 / 50)), m;
            }, e.cancelAnimationFrame = function(y) {
              var x, T;
              for (x = 0, T = h.length; x < T; x += 1) if (h[x][0] === y) {
                h.splice(x, 1);
                return;
              }
              for (x = 0, T = f.length; x < T; x += 1) if (f[x][0] === y) {
                f.splice(x, 1);
                return;
              }
            };
          }
        })(window);
        function l(a, u) {
          return u && a !== document.body ? document.body : a.offsetParent;
        }
      })(i), (function(e, n) {
        t.exports ? t.exports = n() : e.OpenSeadragon = n();
      })(tg, function() {
        return i;
      }), (function(e) {
        class n {
          constructor(s) {
            s || (s = [0, 0, 0, 0, 0, 0, 0, 0, 0]), this.values = s;
          }
          static makeIdentity() {
            return new n([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          }
          static makeTranslation(s, o) {
            return new n([1, 0, 0, 0, 1, 0, s, o, 1]);
          }
          static makeRotation(s) {
            var o = Math.cos(s), l = Math.sin(s);
            return new n([o, -l, 0, l, o, 0, 0, 0, 1]);
          }
          static makeScaling(s, o) {
            return new n([s, 0, 0, 0, o, 0, 0, 0, 1]);
          }
          multiply(s) {
            let o = this.values, l = s.values;
            var a = o[0], u = o[1], c = o[2], h = o[3], f = o[4], m = o[5], v = o[6], y = o[7], x = o[8], T = l[0], C = l[1], H = l[2], k = l[3], N = l[4], Y = l[5], K = l[6], q = l[7], ee = l[8];
            return new n([T * a + C * h + H * v, T * u + C * f + H * y, T * c + C * m + H * x, k * a + N * h + Y * v, k * u + N * f + Y * y, k * c + N * m + Y * x, K * a + q * h + ee * v, K * u + q * f + ee * y, K * c + q * m + ee * x]);
          }
        }
        e.Mat3 = n;
      })(i), (function(e) {
        var n = { supportsFullScreen: false, isFullScreen: function() {
          return false;
        }, getFullScreenElement: function() {
          return null;
        }, requestFullScreen: function() {
        }, exitFullScreen: function() {
        }, cancelFullScreen: function() {
        }, fullScreenEventName: "", fullScreenErrorEventName: "" };
        document.exitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.fullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.requestFullscreen().catch(function(s) {
            e.console.error("Fullscreen request failed: ", s);
          });
        }, n.exitFullScreen = function() {
          document.exitFullscreen().catch(function(r) {
            e.console.error("Error while exiting fullscreen: ", r);
          });
        }, n.fullScreenEventName = "fullscreenchange", n.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.msFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.msRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.msExitFullscreen();
        }, n.fullScreenEventName = "MSFullscreenChange", n.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.webkitExitFullscreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitCurrentFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.webkitCancelFullScreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.mozFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.mozRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.mozCancelFullScreen();
        }, n.fullScreenEventName = "mozfullscreenchange", n.fullScreenErrorEventName = "mozfullscreenerror"), n.isFullScreen = function() {
          return n.getFullScreenElement() !== null;
        }, n.cancelFullScreen = function() {
          e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), n.exitFullScreen();
        }, e.extend(e, n);
      })(i), (function(e) {
        e.EventSource = function() {
          this.events = {}, this._rejectedEventList = {};
        }, e.EventSource.prototype = { addOnceHandler: function(n, r, s, o, l) {
          var a = this;
          o = o || 1;
          var u = 0, c = function(h) {
            return u++, u === o && a.removeHandler(n, c), r(h);
          };
          return this.addHandler(n, c, s, l);
        }, addHandler: function(n, r, s, o) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var l = this.events[n];
          if (l || (this.events[n] = l = []), r && e.isFunction(r)) {
            var a = l.length, u = { handler: r, userData: s || null, priority: o || 0 };
            for (l[a] = u; a > 0 && l[a - 1].priority < l[a].priority; ) l[a] = l[a - 1], l[a - 1] = u, a--;
          }
          return true;
        }, removeHandler: function(n, r) {
          var s = this.events[n], o = [], l;
          if (s && e.isArray(s)) {
            for (l = 0; l < s.length; l++) s[l].handler !== r && o.push(s[l]);
            this.events[n] = o;
          }
        }, numberOfHandlers: function(n) {
          var r = this.events[n];
          return r ? r.length : 0;
        }, removeAllHandlers: function(n) {
          if (n) this.events[n] = [];
          else for (var r in this.events) this.events[r] = [];
        }, getHandler: function(n) {
          var r = this.events[n];
          return !r || !r.length ? null : (r = r.length === 1 ? [r[0]] : Array.apply(null, r), function(s, o) {
            var l, a = r.length;
            for (l = 0; l < a; l++) r[l] && (o.eventSource = s, o.userData = r[l].userData, r[l].handler(o));
          });
        }, raiseEvent: function(n, r) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var s = this.getHandler(n);
          return s && s(this, r || {}), true;
        }, rejectEventHandler(n, r = "") {
          this._rejectedEventList[n] = r;
        }, allowEventHandler(n) {
          delete this._rejectedEventList[n];
        } };
      })(i), (function(e) {
        var n = {};
        e.MouseTracker = function(g) {
          var p = arguments;
          e.isPlainObject(g) || (g = { element: p[0], clickTimeThreshold: p[1], clickDistThreshold: p[2] }), this.hash = Math.random(), this.element = e.getElement(g.element), this.clickTimeThreshold = g.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = g.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = g.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = g.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = g.userData || null, this.stopDelay = g.stopDelay || 50, this.preProcessEventHandler = g.preProcessEventHandler || null, this.contextMenuHandler = g.contextMenuHandler || null, this.enterHandler = g.enterHandler || null, this.leaveHandler = g.leaveHandler || null, this.exitHandler = g.exitHandler || null, this.overHandler = g.overHandler || null, this.outHandler = g.outHandler || null, this.pressHandler = g.pressHandler || null, this.nonPrimaryPressHandler = g.nonPrimaryPressHandler || null, this.releaseHandler = g.releaseHandler || null, this.nonPrimaryReleaseHandler = g.nonPrimaryReleaseHandler || null, this.moveHandler = g.moveHandler || null, this.scrollHandler = g.scrollHandler || null, this.clickHandler = g.clickHandler || null, this.dblClickHandler = g.dblClickHandler || null, this.dragHandler = g.dragHandler || null, this.dragEndHandler = g.dragEndHandler || null, this.pinchHandler = g.pinchHandler || null, this.stopHandler = g.stopHandler || null, this.keyDownHandler = g.keyDownHandler || null, this.keyUpHandler = g.keyUpHandler || null, this.keyHandler = g.keyHandler || null, this.focusHandler = g.focusHandler || null, this.blurHandler = g.blurHandler || null;
          var _ = this;
          n[this.hash] = { click: function(b) {
            H(_, b);
          }, dblclick: function(b) {
            k(_, b);
          }, keydown: function(b) {
            N(_, b);
          }, keyup: function(b) {
            Y(_, b);
          }, keypress: function(b) {
            K(_, b);
          }, focus: function(b) {
            q(_, b);
          }, blur: function(b) {
            ee(_, b);
          }, contextmenu: function(b) {
            ce(_, b);
          }, wheel: function(b) {
            te(_, b);
          }, mousewheel: function(b) {
            j(_, b);
          }, DOMMouseScroll: function(b) {
            j(_, b);
          }, MozMousePixelScroll: function(b) {
            j(_, b);
          }, losecapture: function(b) {
            he(_, b);
          }, mouseenter: function(b) {
            ge(_, b);
          }, mouseleave: function(b) {
            Nt(_, b);
          }, mouseover: function(b) {
            Ut(_, b);
          }, mouseout: function(b) {
            nt(_, b);
          }, mousedown: function(b) {
            $e(_, b);
          }, mouseup: function(b) {
            bt(_, b);
          }, mousemove: function(b) {
            ii(_, b);
          }, touchstart: function(b) {
            ye(_, b);
          }, touchend: function(b) {
            me(_, b);
          }, touchmove: function(b) {
            pe(_, b);
          }, touchcancel: function(b) {
            ae(_, b);
          }, gesturestart: function(b) {
            Ae(_, b);
          }, gesturechange: function(b) {
            Re(_, b);
          }, gotpointercapture: function(b) {
            Qe(_, b);
          }, lostpointercapture: function(b) {
            je(_, b);
          }, pointerenter: function(b) {
            ge(_, b);
          }, pointerleave: function(b) {
            Nt(_, b);
          }, pointerover: function(b) {
            Ut(_, b);
          }, pointerout: function(b) {
            nt(_, b);
          }, pointerdown: function(b) {
            $e(_, b);
          }, pointerup: function(b) {
            bt(_, b);
          }, pointermove: function(b) {
            ii(_, b);
          }, pointercancel: function(b) {
            F(_, b);
          }, pointerupcaptured: function(b) {
            Wt(_, b);
          }, pointermovecaptured: function(b) {
            P(_, b);
          }, tracking: false, activePointersLists: [], lastClickPos: null, dblClickTimeOut: null, pinchGPoints: [], lastPinchDist: 0, currentPinchDist: 0, lastPinchCenter: null, currentPinchCenter: null, sentDragEvent: false }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), g.startDisabled || this.setTracking(true);
        }, e.MouseTracker.prototype = { destroy: function() {
          a(this), this.element = null, n[this.hash] = null, delete n[this.hash];
        }, isTracking: function() {
          return n[this.hash].tracking;
        }, setTracking: function(g) {
          return g ? l(this) : a(this), this;
        }, getActivePointersListByType: function(g) {
          var p = n[this.hash], _, b = p ? p.activePointersLists.length : 0, O;
          for (_ = 0; _ < b; _++) if (p.activePointersLists[_].type === g) return p.activePointersLists[_];
          return O = new e.MouseTracker.GesturePointList(g), p && p.activePointersLists.push(O), O;
        }, getActivePointerCount: function() {
          var g = n[this.hash], p, _ = g.activePointersLists.length, b = 0;
          for (p = 0; p < _; p++) b += g.activePointersLists[p].getLength();
          return b;
        }, preProcessEventHandler: function() {
        }, contextMenuHandler: function() {
        }, enterHandler: function() {
        }, leaveHandler: function() {
        }, exitHandler: function() {
        }, overHandler: function() {
        }, outHandler: function() {
        }, pressHandler: function() {
        }, nonPrimaryPressHandler: function() {
        }, releaseHandler: function() {
        }, nonPrimaryReleaseHandler: function() {
        }, moveHandler: function() {
        }, scrollHandler: function() {
        }, clickHandler: function() {
        }, dblClickHandler: function() {
        }, dragHandler: function() {
        }, dragEndHandler: function() {
        }, pinchHandler: function() {
        }, stopHandler: function() {
        }, keyDownHandler: function() {
        }, keyUpHandler: function() {
        }, keyHandler: function() {
        }, focusHandler: function() {
        }, blurHandler: function() {
        } };
        var r = (function() {
          try {
            return window.self !== window.top;
          } catch {
            return true;
          }
        })();
        function s(g) {
          try {
            return g.addEventListener && g.removeEventListener;
          } catch {
            return false;
          }
        }
        e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ (function() {
          var g = [], p = 0, _ = 0, b = function(ve, re) {
            return ve.hash.toString() + re.type + re.id.toString();
          }, O = function() {
            var ve, re = g.length, Oe, Ie, jt = e.now(), ds, fs, ps;
            for (ds = jt - _, _ = jt, ve = 0; ve < re; ve++) Oe = g[ve], Ie = Oe.gPoint, Ie.direction = Math.atan2(Ie.currentPos.y - Oe.lastPos.y, Ie.currentPos.x - Oe.lastPos.x), fs = Oe.lastPos.distanceTo(Ie.currentPos), Oe.lastPos = Ie.currentPos, ps = 1e3 * fs / (ds + 1), Ie.speed = 0.75 * ps + 0.25 * Ie.speed;
          }, G = function(ve, re) {
            var Oe = b(ve, re);
            g.push({ guid: Oe, gPoint: re, lastPos: re.currentPos }), g.length === 1 && (_ = e.now(), p = window.setInterval(O, 50));
          }, Q = function(ve, re) {
            var Oe = b(ve, re), Ie, jt = g.length;
            for (Ie = 0; Ie < jt; Ie++) if (g[Ie].guid === Oe) {
              g.splice(Ie, 1), jt--, jt === 0 && window.clearInterval(p);
              break;
            }
          };
          return { addPoint: G, removePoint: Q };
        })(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = true, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setPointerCapture) && e.isFunction(g.releasePointerCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = false, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setCapture) && e.isFunction(g.releaseCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(g) {
          this._gPoints = [], this.type = g, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
        }, e.MouseTracker.GesturePointList.prototype = { getLength: function() {
          return this._gPoints.length;
        }, asArray: function() {
          return this._gPoints;
        }, add: function(g) {
          return this._gPoints.push(g);
        }, removeById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) {
            this._gPoints.splice(p, 1);
            break;
          }
          return this._gPoints.length;
        }, getByIndex: function(g) {
          return g < this._gPoints.length ? this._gPoints[g] : null;
        }, getById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) return this._gPoints[p];
          return null;
        }, getPrimary: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].isPrimary) return this._gPoints[p];
          return null;
        }, addContact: function() {
          ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
        }, removeContact: function() {
          --this.contacts, this.contacts < 0 && (this.contacts = 0);
        } };
        function o(g) {
          var p = n[g.hash], _, b, O, G, Q, ve = p.activePointersLists.length;
          for (_ = 0; _ < ve; _++) if (O = p.activePointersLists[_], O.getLength() > 0) {
            for (Q = [], G = O.asArray(), b = 0; b < G.length; b++) Q.push(G[b]);
            for (b = 0; b < Q.length; b++) z(g, O, Q[b]);
          }
          for (_ = 0; _ < ve; _++) p.activePointersLists.pop();
          p.sentDragEvent = false;
        }
        function l(g) {
          var p = n[g.hash], _, b;
          if (!p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.addEvent(g.element, _, p[_], _ === e.MouseTracker.wheelEventName ? { passive: false, capture: false } : false);
            o(g), p.tracking = true;
          }
        }
        function a(g) {
          var p = n[g.hash], _, b;
          if (p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.removeEvent(g.element, _, p[_], false);
            o(g), p.tracking = false;
          }
        }
        function u(g, p) {
          var _ = n[g.hash];
          if (p === "pointerevent") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "mouse") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "touch") return { upName: "touchend", upHandler: _.touchendcaptured, moveName: "touchmove", moveHandler: _.touchmovecaptured };
          throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
        }
        function c(g, p) {
          var _;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) try {
            g.element.setPointerCapture(p.id);
          } catch {
            e.console.warn("setPointerCapture() called on invalid pointer ID");
            return;
          }
          else g.element.setCapture(true);
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.addEvent(window.top, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true);
          S(g, p, true);
        }
        function h(g, p) {
          var _, b, O;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) {
            if (b = g.getActivePointersListByType(p.type), O = b.getById(p.id), !O || !O.captured) return;
            try {
              g.element.releasePointerCapture(p.id);
            } catch {
            }
          } else g.element.releaseCapture();
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.removeEvent(window.top, _.upName, _.upHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true);
          S(g, p, false);
        }
        function f(g) {
          return e.MouseTracker.havePointerEvents ? g.pointerId : e.MouseTracker.mousePointerId;
        }
        function m(g) {
          return e.MouseTracker.havePointerEvents && g.pointerType ? g.pointerType : "mouse";
        }
        function v(g) {
          return e.MouseTracker.havePointerEvents ? g.isPrimary : true;
        }
        function y(g) {
          return e.getMousePosition(g);
        }
        function x(g, p) {
          return T(y(g), p);
        }
        function T(g, p) {
          var _ = e.getElementOffset(p);
          return g.minus(_);
        }
        function C(g, p) {
          return new e.Point((g.x + p.x) / 2, (g.y + p.y) / 2);
        }
        function H(g, p) {
          var _ = { originalEvent: p, eventType: "click", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function k(g, p) {
          var _ = { originalEvent: p, eventType: "dblclick", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function N(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keydown", pointerType: "", isEmulated: false };
          w(g, b), g.keyDownHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyDownHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function Y(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keyup", pointerType: "", isEmulated: false };
          w(g, b), g.keyUpHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyUpHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function K(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keypress", pointerType: "", isEmulated: false };
          w(g, b), g.keyHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function q(g, p) {
          var _ = { originalEvent: p, eventType: "focus", pointerType: "", isEmulated: false };
          w(g, _), g.focusHandler && !_.preventGesture && g.focusHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function ee(g, p) {
          var _ = { originalEvent: p, eventType: "blur", pointerType: "", isEmulated: false };
          w(g, _), g.blurHandler && !_.preventGesture && g.blurHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function ce(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "contextmenu", pointerType: "mouse", isEmulated: false };
          w(g, b), g.contextMenuHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, position: T(y(p), g.element), originalEvent: b.originalEvent, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.contextMenuHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function te(g, p) {
          ne(g, p, p);
        }
        function j(g, p) {
          var _ = { target: p.target || p.srcElement, type: "wheel", shiftKey: p.shiftKey || false, clientX: p.clientX, clientY: p.clientY, pageX: p.pageX ? p.pageX : p.clientX, pageY: p.pageY ? p.pageY : p.clientY, deltaMode: p.type === "MozMousePixelScroll" ? 0 : 1, deltaX: 0, deltaZ: 0 };
          e.MouseTracker.wheelEventName === "mousewheel" ? _.deltaY = -p.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : _.deltaY = p.detail, ne(g, _, p);
        }
        function ne(g, p, _) {
          var b = 0, O, G = null;
          b = p.deltaY ? p.deltaY < 0 ? 1 : -1 : 0, O = { originalEvent: p, eventType: "wheel", pointerType: "mouse", isEmulated: p !== _ }, w(g, O), g.scrollHandler && !O.preventGesture && !O.defaultPrevented && (G = { eventSource: g, pointerType: "mouse", position: x(p, g.element), scroll: b, shift: p.shiftKey, isTouchEvent: false, originalEvent: _, preventDefault: O.preventDefault || O.defaultPrevented, userData: g.userData }, g.scrollHandler(G)), O.stopPropagation && e.stopEvent(_), (G && G.preventDefault || O.preventDefault && !O.defaultPrevented) && e.cancelEvent(_);
        }
        function he(g, p) {
          var _ = { id: e.MouseTracker.mousePointerId, type: "mouse" }, b = { originalEvent: p, eventType: "lostpointercapture", pointerType: "mouse", isEmulated: false };
          w(g, b), p.target === g.element && S(g, _, false), b.stopPropagation && e.stopEvent(p);
        }
        function ye(g, p) {
          var _, b, O = p.changedTouches.length, G, Q = g.getActivePointersListByType("touch");
          _ = e.now(), Q.getLength() > p.touches.length - O && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
          var ve = { originalEvent: p, eventType: "pointerdown", pointerType: "touch", isEmulated: false };
          for (w(g, ve), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", isPrimary: Q.getLength() === 0, currentPos: y(p.changedTouches[b]), currentTime: _ }, L(g, ve, G), W(g, ve, G, 0), S(g, G, true);
          ve.preventDefault && !ve.defaultPrevented && e.cancelEvent(p), ve.stopPropagation && e.stopEvent(p);
        }
        function me(g, p) {
          var _, b, O = p.changedTouches.length, G;
          _ = e.now();
          var Q = { originalEvent: p, eventType: "pointerup", pointerType: "touch", isEmulated: false };
          for (w(g, Q), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, Z(g, Q, G, 0), S(g, G, false), I(g, Q, G);
          Q.preventDefault && !Q.defaultPrevented && e.cancelEvent(p), Q.stopPropagation && e.stopEvent(p);
        }
        function pe(g, p) {
          var _, b, O = p.changedTouches.length, G;
          _ = e.now();
          var Q = { originalEvent: p, eventType: "pointermove", pointerType: "touch", isEmulated: false };
          for (w(g, Q), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, se(g, Q, G);
          Q.preventDefault && !Q.defaultPrevented && e.cancelEvent(p), Q.stopPropagation && e.stopEvent(p);
        }
        function ae(g, p) {
          var _ = p.changedTouches.length, b, O, G = { originalEvent: p, eventType: "pointercancel", pointerType: "touch", isEmulated: false };
          for (w(g, G), b = 0; b < _; b++) O = { id: p.changedTouches[b].identifier, type: "touch" }, X(g, G, O);
          G.stopPropagation && e.stopEvent(p);
        }
        function Ae(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function Re(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function Qe(g, p) {
          var _ = { originalEvent: p, eventType: "gotpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && S(g, { id: p.pointerId, type: m(p) }, true), _.stopPropagation && e.stopEvent(p);
        }
        function je(g, p) {
          var _ = { originalEvent: p, eventType: "lostpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && S(g, { id: p.pointerId, type: m(p) }, false), _.stopPropagation && e.stopEvent(p);
        }
        function ge(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerenter", pointerType: _.type, isEmulated: false };
          w(g, b), L(g, b, _);
        }
        function Nt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerleave", pointerType: _.type, isEmulated: false };
          w(g, b), I(g, b, _);
        }
        function Ut(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerover", pointerType: _.type, isEmulated: false };
          w(g, b), V(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function nt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerout", pointerType: _.type, isEmulated: false };
          w(g, b), M(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function $e(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = e.MouseTracker.havePointerEvents && _.type === "touch", O = { originalEvent: p, eventType: "pointerdown", pointerType: _.type, isEmulated: false };
          w(g, O), W(g, O, _, p.button), O.preventDefault && !O.defaultPrevented && e.cancelEvent(p), O.stopPropagation && e.stopEvent(p), O.shouldCapture && (b ? S(g, _, true) : c(g, _));
        }
        function bt(g, p) {
          st(g, p);
        }
        function Wt(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && st(g, p), e.stopEvent(p);
        }
        function st(g, p) {
          var _;
          _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() };
          var b = { originalEvent: p, eventType: "pointerup", pointerType: _.type, isEmulated: false };
          w(g, b), Z(g, b, _, p.button), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p), b.shouldReleaseCapture && (p.target === g.element ? h(g, _) : S(g, _, false));
        }
        function ii(g, p) {
          D(g, p);
        }
        function P(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && D(g, p), e.stopEvent(p);
        }
        function D(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointermove", pointerType: _.type, isEmulated: false };
          w(g, b), se(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function F(g, p) {
          var _ = { id: p.pointerId, type: m(p) }, b = { originalEvent: p, eventType: "pointercancel", pointerType: _.type, isEmulated: false };
          w(g, b), X(g, b, _), b.stopPropagation && e.stopEvent(p);
        }
        function U(g, p) {
          return p.speed = 0, p.direction = 0, p.contactPos = p.currentPos, p.contactTime = p.currentTime, p.lastPos = p.currentPos, p.lastTime = p.currentTime, g.add(p);
        }
        function z(g, p, _) {
          var b, O = p.getById(_.id);
          return O ? (O.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), h(g, O)), p.removeContact(), b = p.removeById(_.id)) : b = p.getLength(), b;
        }
        function d(g, p) {
          switch (p.eventType) {
            case "pointermove":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerover":
            case "pointerout":
            case "contextmenu":
            case "keydown":
            case "keyup":
            case "keypress":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "pointerdown":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerup":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "wheel":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasScrollHandler, p.stopPropagation = false;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
              p.isStoppable = true, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "click":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.clickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "dblclick":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.dblClickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "focus":
            case "blur":
            case "pointerenter":
            case "pointerleave":
            default:
              p.isStoppable = false, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
          }
        }
        function w(g, p) {
          p.eventSource = g, p.eventPhase = p.originalEvent && typeof p.originalEvent.eventPhase < "u" ? p.originalEvent.eventPhase : 0, p.defaultPrevented = e.eventIsCanceled(p.originalEvent), p.shouldCapture = false, p.shouldReleaseCapture = false, p.userData = g.userData, d(g, p), g.preProcessEventHandler && g.preProcessEventHandler(p);
        }
        function S(g, p, _) {
          var b = g.getActivePointersListByType(p.type), O = b.getById(p.id);
          O ? _ && !O.captured ? (O.captured = true, b.captureCount++) : !_ && O.captured && (O.captured = false, b.captureCount--, b.captureCount < 0 && (b.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
        }
        function L(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O;
          O = b.getById(_.id), O ? (O.insideElement = true, O.lastPos = O.currentPos, O.lastTime = O.currentTime, O.currentPos = _.currentPos, O.currentTime = _.currentTime, _ = O) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, U(b, _)), g.enterHandler && g.enterHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function I(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O, G;
          O = b.getById(_.id), O ? (O.captured ? (O.insideElement = false, O.lastPos = O.currentPos, O.lastTime = O.currentTime, O.currentPos = _.currentPos, O.currentTime = _.currentTime) : z(g, b, O), _ = O) : (_.captured = false, _.insideElementPressed = false), (g.leaveHandler || g.exitHandler) && (G = { eventSource: g, pointerType: _.type, position: _.currentPos && T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }, g.leaveHandler && g.leaveHandler(G), g.exitHandler && g.exitHandler(G));
        }
        function V(g, p, _) {
          var b, O;
          b = g.getActivePointersListByType(_.type), O = b.getById(_.id), O ? _ = O : (_.captured = false, _.insideElementPressed = false), g.overHandler && g.overHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function M(g, p, _) {
          var b, O;
          b = g.getActivePointersListByType(_.type), O = b.getById(_.id), O ? _ = O : (_.captured = false, _.insideElementPressed = false), g.outHandler && g.outHandler({ eventSource: g, pointerType: _.type, position: _.currentPos && T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function W(g, p, _, b) {
          var O = n[g.hash], G = g.getActivePointersListByType(_.type), Q;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons |= 1 : b === 1 ? G.buttons |= 4 : b === 2 ? G.buttons |= 2 : b === 3 ? G.buttons |= 8 : b === 4 ? G.buttons |= 16 : b === 5 && (G.buttons |= 32), b !== 0) {
            p.shouldCapture = false, p.shouldReleaseCapture = false, g.nonPrimaryPressHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryPressHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          Q = G.getById(_.id), Q ? (Q.insideElementPressed = true, Q.insideElement = true, Q.originalTarget = p.originalEvent.target, Q.contactPos = _.currentPos, Q.contactTime = _.currentTime, Q.lastPos = Q.currentPos, Q.lastTime = Q.currentTime, Q.currentPos = _.currentPos, Q.currentTime = _.currentTime, _ = Q) : (_.captured = false, _.insideElementPressed = true, _.insideElement = true, _.originalTarget = p.originalEvent.target, U(G, _)), G.addContact(), !p.preventGesture && !p.defaultPrevented ? (p.shouldCapture = true, p.shouldReleaseCapture = false, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(g, _), G.contacts === 1 ? g.pressHandler && !p.preventGesture && g.pressHandler({ eventSource: g, pointerType: _.type, position: T(_.contactPos, g.element), buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : G.contacts === 2 && g.pinchHandler && _.type === "touch" && (O.pinchGPoints = G.asArray(), O.lastPinchDist = O.currentPinchDist = O.pinchGPoints[0].currentPos.distanceTo(O.pinchGPoints[1].currentPos), O.lastPinchCenter = O.currentPinchCenter = C(O.pinchGPoints[0].currentPos, O.pinchGPoints[1].currentPos))) : (p.shouldCapture = false, p.shouldReleaseCapture = false);
        }
        function Z(g, p, _, b) {
          var O = n[g.hash], G = g.getActivePointersListByType(_.type), Q, ve, re, Oe = false, Ie;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons ^= -2 : b === 1 ? G.buttons ^= -5 : b === 2 ? G.buttons ^= -3 : b === 3 ? G.buttons ^= -9 : b === 4 ? G.buttons ^= -17 : b === 5 && (G.buttons ^= -33), p.shouldCapture = false, b !== 0) {
            p.shouldReleaseCapture = false, g.nonPrimaryReleaseHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryReleaseHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          re = G.getById(_.id), re ? (G.removeContact(), re.captured && (Oe = true), re.lastPos = re.currentPos, re.lastTime = re.currentTime, re.currentPos = _.currentPos, re.currentTime = _.currentTime, re.insideElement || z(g, G, re), Q = re.currentPos, ve = re.currentTime) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, U(G, _), re = _), !p.preventGesture && !p.defaultPrevented && (Oe ? (p.shouldReleaseCapture = true, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(g, re), G.contacts === 0 ? (g.releaseHandler && Q && g.releaseHandler({ eventSource: g, pointerType: re.type, position: T(Q, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), g.dragEndHandler && O.sentDragEvent && g.dragEndHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), speed: re.speed, direction: re.direction, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), O.sentDragEvent = false, (g.clickHandler || g.dblClickHandler) && re.insideElement && (Ie = ve - re.contactTime <= g.clickTimeThreshold && re.contactPos.distanceTo(Q) <= g.clickDistThreshold, g.clickHandler && g.clickHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), quick: Ie, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, originalTarget: re.originalTarget, userData: g.userData }), g.dblClickHandler && Ie && (G.clicks++, G.clicks === 1 ? (O.lastClickPos = Q, O.dblClickTimeOut = setTimeout(function() {
            G.clicks = 0;
          }, g.dblClickTimeThreshold)) : G.clicks === 2 && (clearTimeout(O.dblClickTimeOut), G.clicks = 0, O.lastClickPos.distanceTo(Q) <= g.dblClickDistThreshold && g.dblClickHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), O.lastClickPos = null)))) : G.contacts === 2 && g.pinchHandler && re.type === "touch" && (O.pinchGPoints = G.asArray(), O.lastPinchDist = O.currentPinchDist = O.pinchGPoints[0].currentPos.distanceTo(O.pinchGPoints[1].currentPos), O.lastPinchCenter = O.currentPinchCenter = C(O.pinchGPoints[0].currentPos, O.pinchGPoints[1].currentPos))) : (p.shouldReleaseCapture = false, g.releaseHandler && Q && (g.releaseHandler({ eventSource: g, pointerType: re.type, position: T(Q, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function se(g, p, _) {
          var b = n[g.hash], O = g.getActivePointersListByType(_.type), G, Q, ve;
          if (typeof p.originalEvent.buttons < "u" && (O.buttons = p.originalEvent.buttons), G = O.getById(_.id), G) G.lastPos = G.currentPos, G.lastTime = G.currentTime, G.currentPos = _.currentPos, G.currentTime = _.currentTime;
          else return;
          p.shouldCapture = false, p.shouldReleaseCapture = false, g.stopHandler && _.type === "mouse" && (clearTimeout(g.stopTimeOut), g.stopTimeOut = setTimeout(function() {
            oe(g, p.originalEvent, _.type);
          }, g.stopDelay)), O.contacts === 0 ? g.moveHandler && g.moveHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: O.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : O.contacts === 1 ? (g.moveHandler && (G = O.asArray()[0], g.moveHandler({ eventSource: g, pointerType: G.type, position: T(G.currentPos, g.element), buttons: O.buttons, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.dragHandler && !p.preventGesture && !p.defaultPrevented && (G = O.asArray()[0], ve = G.currentPos.minus(G.lastPos), g.dragHandler({ eventSource: g, pointerType: G.type, position: T(G.currentPos, g.element), buttons: O.buttons, delta: ve, speed: G.speed, direction: G.direction, shift: p.originalEvent.shiftKey, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true, b.sentDragEvent = true)) : O.contacts === 2 && (g.moveHandler && (Q = O.asArray(), g.moveHandler({ eventSource: g, pointerType: Q[0].type, position: T(C(Q[0].currentPos, Q[1].currentPos), g.element), buttons: O.buttons, isTouchEvent: Q[0].type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.pinchHandler && _.type === "touch" && !p.preventGesture && !p.defaultPrevented && (ve = b.pinchGPoints[0].currentPos.distanceTo(b.pinchGPoints[1].currentPos), ve !== b.currentPinchDist && (b.lastPinchDist = b.currentPinchDist, b.currentPinchDist = ve, b.lastPinchCenter = b.currentPinchCenter, b.currentPinchCenter = C(b.pinchGPoints[0].currentPos, b.pinchGPoints[1].currentPos), g.pinchHandler({ eventSource: g, pointerType: "touch", gesturePoints: b.pinchGPoints, lastCenter: T(b.lastPinchCenter, g.element), center: T(b.currentPinchCenter, g.element), lastDistance: b.lastPinchDist, distance: b.currentPinchDist, shift: p.originalEvent.shiftKey, originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function X(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O;
          O = b.getById(_.id), O && z(g, b, O);
        }
        function oe(g, p, _) {
          g.stopHandler && g.stopHandler({ eventSource: g, pointerType: _, position: x(p, g.element), buttons: g.getActivePointersListByType(_).buttons, isTouchEvent: _ === "touch", originalEvent: p, userData: g.userData });
        }
      })(i), (function(e) {
        e.ControlAnchor = { NONE: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, ABSOLUTE: 5 }, e.Control = function(n, r, s) {
          var o = n.parentNode;
          typeof r == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), r = { anchor: r }), r.attachToViewer = typeof r.attachToViewer > "u" ? true : r.attachToViewer, this.autoFade = typeof r.autoFade > "u" ? true : r.autoFade, this.element = n, this.anchor = r.anchor, this.container = s, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof r.top == "number" ? r.top + "px" : r.top, this.wrapper.style.left = typeof r.left == "number" ? r.left + "px" : r.left, this.wrapper.style.height = typeof r.height == "number" ? r.height + "px" : r.height, this.wrapper.style.width = typeof r.width == "number" ? r.width + "px" : r.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), r.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : o.appendChild(this.wrapper);
        }, e.Control.prototype = { destroy: function() {
          this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
        }, isVisible: function() {
          return this.wrapper.style.display !== "none";
        }, setVisible: function(n) {
          this.wrapper.style.display = n ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
        }, setOpacity: function(n) {
          e.setElementOpacity(this.wrapper, n, true);
        } };
      })(i), (function(e) {
        e.ControlDock = function(r) {
          var s = ["topleft", "topright", "bottomright", "bottomleft"], o, l;
          for (e.extend(true, this, { id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6), container: e.makeNeutralElement("div"), controls: [] }, r), this.container.onsubmit = function() {
            return false;
          }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), e.getElementStyle(this.element).position === "static" && (this.element.style.position = "relative"), this.container.style.width = "100%", this.container.style.height = "100%"), l = 0; l < s.length; l++) o = s[l], this.controls[o] = e.makeNeutralElement("div"), this.controls[o].style.position = "absolute", o.match("left") && (this.controls[o].style.left = "0px"), o.match("right") && (this.controls[o].style.right = "0px"), o.match("top") && (this.controls[o].style.top = "0px"), o.match("bottom") && (this.controls[o].style.bottom = "0px");
          this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
        }, e.ControlDock.prototype = { addControl: function(r, s) {
          r = e.getElement(r);
          var o = null;
          if (!(n(this, r) >= 0)) {
            switch (s.anchor) {
              case e.ControlAnchor.TOP_RIGHT:
                o = this.controls.topright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.BOTTOM_RIGHT:
                o = this.controls.bottomright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.BOTTOM_LEFT:
                o = this.controls.bottomleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.TOP_LEFT:
                o = this.controls.topleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.ABSOLUTE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
              default:
              case e.ControlAnchor.NONE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
            }
            this.controls.push(new e.Control(r, s, o)), r.style.display = "inline-block";
          }
        }, removeControl: function(r) {
          r = e.getElement(r);
          var s = n(this, r);
          return s >= 0 && (this.controls[s].destroy(), this.controls.splice(s, 1)), this;
        }, clearControls: function() {
          for (; this.controls.length > 0; ) this.controls.pop().destroy();
          return this;
        }, areControlsEnabled: function() {
          var r;
          for (r = this.controls.length - 1; r >= 0; r--) if (this.controls[r].isVisible()) return true;
          return false;
        }, setControlsEnabled: function(r) {
          var s;
          for (s = this.controls.length - 1; s >= 0; s--) this.controls[s].setVisible(r);
          return this;
        } };
        function n(r, s) {
          var o = r.controls, l;
          for (l = o.length - 1; l >= 0; l--) if (o[l].element === s) return l;
          return -1;
        }
      })(i), (function(e) {
        e.Placement = e.freezeObject({ CENTER: 0, TOP_LEFT: 1, TOP: 2, TOP_RIGHT: 3, RIGHT: 4, BOTTOM_RIGHT: 5, BOTTOM: 6, BOTTOM_LEFT: 7, LEFT: 8, properties: { 0: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false }, 1: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 2: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 3: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: true, isVerticallyCentered: false, isBottom: false }, 4: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: true, isBottom: false }, 5: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: false, isBottom: true }, 6: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 7: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 8: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false } } });
      })(i), (function(e) {
        var n = {}, r = 1;
        e.Viewer = function(d) {
          var w = arguments, S = this, L;
          e.isPlainObject(d) || (d = { id: w[0], xmlPath: w.length > 1 ? w[1] : void 0, prefixUrl: w.length > 2 ? w[2] : void 0, controls: w.length > 3 ? w[3] : void 0, overlays: w.length > 4 ? w[4] : void 0 }), d.config && (e.extend(true, d, d.config), delete d.config);
          let I = ["useCanvas"];
          if (d.drawerOptions = Object.assign({}, I.reduce((M, W) => (M[W] = d[W], delete d[W], M), {}), d.drawerOptions), e.extend(true, this, { id: d.id, hash: d.hash || r++, initialPage: 0, element: null, container: null, canvas: null, overlays: [], overlaysContainer: null, previousBody: [], customControls: [], source: null, drawer: null, world: null, viewport: null, navigator: null, collectionViewport: null, collectionDrawer: null, navImages: null, buttonGroup: null, profiler: null }, e.DEFAULT_SETTINGS, d), typeof this.hash > "u") throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
          typeof n[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), n[this.hash] = { fsBoundsDelta: new e.Point(1, 1), prevContainerSize: null, animating: false, forceRedraw: false, needsResize: false, forceResize: false, mouseInside: false, group: null, zooming: false, zoomFactor: null, lastZoomTime: null, fullPage: false, onfullscreenchange: null, lastClickTime: null, draggingToZoom: false }, this._sequenceIndex = 0, this._firstOpen = true, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(M) {
            var W = e.getString("Errors.OpenFailed", M.eventSource, M.message);
            S._showMessage(W);
          }), e.ControlDock.call(this, d), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", (function(M) {
            M.width = "100%", M.height = "100%", M.overflow = "hidden", M.position = "absolute", M.top = "0px", M.left = "0px";
          })(this.canvas.style), e.setElementTouchActionNone(this.canvas), d.tabIndex !== "" && (this.canvas.tabIndex = d.tabIndex === void 0 ? 0 : d.tabIndex), this.container.className = "openseadragon-container", (function(M) {
            M.width = "100%", M.height = "100%", M.position = "relative", M.overflow = "hidden", M.left = "0px", M.top = "0px", M.textAlign = "left";
          })(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({ userData: "Viewer.innerTracker", element: this.canvas, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, contextMenuHandler: e.delegate(this, x), keyDownHandler: e.delegate(this, T), keyHandler: e.delegate(this, C), clickHandler: e.delegate(this, H), dblClickHandler: e.delegate(this, k), dragHandler: e.delegate(this, N), dragEndHandler: e.delegate(this, Y), enterHandler: e.delegate(this, K), leaveHandler: e.delegate(this, q), pressHandler: e.delegate(this, ee), releaseHandler: e.delegate(this, ce), nonPrimaryPressHandler: e.delegate(this, te), nonPrimaryReleaseHandler: e.delegate(this, j), scrollHandler: e.delegate(this, me), pinchHandler: e.delegate(this, ne), focusHandler: e.delegate(this, he), blurHandler: e.delegate(this, ye) }), this.outerTracker = new e.MouseTracker({ userData: "Viewer.outerTracker", element: this.container, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, enterHandler: e.delegate(this, pe), leaveHandler: e.delegate(this, ae) }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), n[this.hash].prevContainerSize = s(this.container), window.ResizeObserver ? (this._autoResizePolling = false, this._resizeObserver = new ResizeObserver(function() {
            n[S.hash].needsResize = true;
          }), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = true, this.world = new e.World({ viewer: this }), this.world.addHandler("add-item", function(M) {
            S.source = S.world.getItemAt(0).source, n[S.hash].forceRedraw = true, S._updateRequestId || (S._updateRequestId = u(S, Ae));
          }), this.world.addHandler("remove-item", function(M) {
            S.world.getItemCount() ? S.source = S.world.getItemAt(0).source : S.source = null, n[S.hash].forceRedraw = true;
          }), this.world.addHandler("metrics-change", function(M) {
            S.viewport && S.viewport._setContentBounds(S.world.getHomeBounds(), S.world.getContentFactor());
          }), this.world.addHandler("item-index-change", function(M) {
            S.source = S.world.getItemAt(0).source;
          }), this.viewport = new e.Viewport({ containerSize: n[this.hash].prevContainerSize, springStiffness: this.springStiffness, animationTime: this.animationTime, minZoomImageRatio: this.minZoomImageRatio, maxZoomPixelRatio: this.maxZoomPixelRatio, visibilityRatio: this.visibilityRatio, wrapHorizontal: this.wrapHorizontal, wrapVertical: this.wrapVertical, defaultZoomLevel: this.defaultZoomLevel, minZoomLevel: this.minZoomLevel, maxZoomLevel: this.maxZoomLevel, viewer: this, degrees: this.degrees, flipped: this.flipped, overlayPreserveContentDirection: this.overlayPreserveContentDirection, navigatorRotate: this.navigatorRotate, homeFillsViewer: this.homeFillsViewer, margins: this.viewportMargins, silenceMultiImageWarnings: this.silenceMultiImageWarnings }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({ jobLimit: this.imageLoaderLimit, timeout: d.timeout, tileRetryMax: this.tileRetryMax, tileRetryDelay: this.tileRetryDelay }), this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }), Object.prototype.hasOwnProperty.call(this.drawerOptions, "useCanvas") && (e.console.error('useCanvas is deprecated, use the "drawer" option to indicate preferred drawer(s)'), this.drawerOptions.useCanvas || (this.drawer = e.HTMLDrawer), delete this.drawerOptions.useCanvas);
          let V = Array.isArray(this.drawer) ? this.drawer : [this.drawer];
          V.length === 0 && (V = [e.DEFAULT_SETTINGS.drawer].flat(), e.console.warn("No valid drawers were selected. Using the default value.")), this.drawer = null;
          for (const M of V) if (this.requestDrawer(M, { mainDrawer: true, redrawImmediately: false })) break;
          if (!this.drawer) throw e.console.error("No drawer could be created!"), "Error with creating the selected drawer(s)";
          for (this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (L = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (L = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({ element: this.navigatorElement, id: this.navigatorId, position: this.navigatorPosition, sizeRatio: this.navigatorSizeRatio, maintainSizeRatio: this.navigatorMaintainSizeRatio, top: this.navigatorTop, left: this.navigatorLeft, width: this.navigatorWidth, height: this.navigatorHeight, autoResize: this.navigatorAutoResize, autoFade: this.navigatorAutoFade, prefixUrl: this.prefixUrl, viewer: this, navigatorRotate: this.navigatorRotate, background: this.navigatorBackground, opacity: this.navigatorOpacity, borderColor: this.navigatorBorderColor, displayRegionColor: this.navigatorDisplayRegionColor, crossOriginPolicy: this.crossOriginPolicy, animationTime: this.animationTime, drawer: this.drawer.getType(), loadTilesWithAjax: this.loadTilesWithAjax, ajaxHeaders: this.ajaxHeaders, ajaxWithCredentials: this.ajaxWithCredentials })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), L = 0; L < this.customControls.length; L++) this.addControl(this.customControls[L].id, { anchor: this.customControls[L].anchor });
          e.requestAnimationFrame(function() {
            h(S);
          }), e._viewers.set(this.element, this);
        }, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, { isOpen: function() {
          return !!this.world.getItemCount();
        }, openDzi: function(d) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, openTileSource: function(d) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, get buttons() {
          return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
        }, open: function(d, w) {
          var S = this;
          if (this.close(), !d) return this;
          if (this.sequenceMode && e.isArray(d)) return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof w < "u" && !isNaN(w) && (this.initialPage = w), this.tileSources = d, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(d) || (d = [d]), !d.length) return this;
          this._opening = true;
          for (var L = d.length, I = 0, V = 0, M, W = function() {
            if (I + V === L) if (I) {
              (S._firstOpen || !S.preserveViewport) && (S.viewport.goHome(true), S.viewport.update()), S._firstOpen = false;
              var X = d[0];
              if (X.tileSource && (X = X.tileSource), S.overlays && !S.preserveOverlays) for (var oe = 0; oe < S.overlays.length; oe++) S.currentOverlays[oe] = l(S, S.overlays[oe]);
              S._drawOverlays(), S._opening = false, S.raiseEvent("open", { source: X });
            } else S._opening = false, S.raiseEvent("open-failed", M);
          }, Z = function(X) {
            (!e.isPlainObject(X) || !X.tileSource) && (X = { tileSource: X }), X.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete X.index), X.collectionImmediately === void 0 && (X.collectionImmediately = true);
            var oe = X.success;
            X.success = function(p) {
              if (I++, X.tileSource.overlays) for (var _ = 0; _ < X.tileSource.overlays.length; _++) S.addOverlay(X.tileSource.overlays[_]);
              oe && oe(p), W();
            };
            var g = X.error;
            X.error = function(p) {
              V++, M || (M = p), g && g(p), W();
            }, S.addTiledImage(X);
          }, se = 0; se < d.length; se++) Z(d[se]);
          return this;
        }, close: function() {
          return n[this.hash] ? (this._opening = false, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), n[this.hash].animating = false, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        }, destroy: function() {
          if (n[this.hash]) {
            if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), n[this.navigator.hash] = null, delete n[this.navigator.hash], this.navigator = null), this.buttonGroup) this.buttonGroup.destroy();
            else if (this.customButtons) for (; this.customButtons.length; ) this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element) for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), n[this.hash] = null, delete n[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
          }
        }, requestDrawer(d, w) {
          const S = { mainDrawer: true, redrawImmediately: true, drawerOptions: null };
          w = e.extend(true, S, w);
          const L = w.mainDrawer, I = w.redrawImmediately, V = w.drawerOptions, M = this.drawer;
          let W = null;
          if (d && d.prototype instanceof e.DrawerBase ? (W = d, d = "custom") : typeof d == "string" && (W = e.determineDrawer(d)), W || e.console.warn("Unsupported drawer! Drawer must be an existing string type, or a class that extends OpenSeadragon.DrawerBase."), W && W.isSupported()) {
            M && L && M.destroy();
            const Z = new W({ viewer: this, viewport: this.viewport, element: this.canvas, debugGridColor: this.debugGridColor, options: V || this.drawerOptions[d] });
            return L && (this.drawer = Z, I && this.forceRedraw()), Z;
          }
          return false;
        }, isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        }, setMouseNavEnabled: function(d) {
          return this.innerTracker.setTracking(d), this.outerTracker.setTracking(d), this.raiseEvent("mouse-enabled", { enabled: d }), this;
        }, areControlsEnabled: function() {
          var d = this.controls.length, w;
          for (w = 0; w < this.controls.length; w++) d = d && this.controls[w].isVisible();
          return d;
        }, setControlsEnabled: function(d) {
          return d ? m(this) : h(this), this.raiseEvent("controls-enabled", { enabled: d }), this;
        }, setDebugMode: function(d) {
          for (var w = 0; w < this.world.getItemCount(); w++) this.world.getItemAt(w).debugMode = d;
          this.debugMode = d, this.forceRedraw();
        }, setAjaxHeaders: function(d, w) {
          if (d === null && (d = {}), !e.isPlainObject(d)) {
            console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          if (w === void 0 && (w = true), this.ajaxHeaders = d, w) {
            for (var S = 0; S < this.world.getItemCount(); S++) this.world.getItemAt(S)._updateAjaxHeaders(true);
            if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, true), this.referenceStrip && this.referenceStrip.miniViewers) for (var L in this.referenceStrip.miniViewers) this.referenceStrip.miniViewers[L].setAjaxHeaders(this.ajaxHeaders, true);
          }
        }, addButton: function(d) {
          this.buttonGroup.addButton(d);
        }, isFullPage: function() {
          return n[this.hash] && n[this.hash].fullPage;
        }, setFullPage: function(d) {
          var w = document.body, S = w.style, L = document.documentElement.style, I = this, V, M;
          if (d === this.isFullPage()) return this;
          var W = { fullPage: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-page", W), W.preventDefaultAction) return this;
          if (d && this.element) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = S.margin, this.docMargin = L.margin, S.margin = "0", L.margin = "0", this.bodyPadding = S.padding, this.docPadding = L.padding, S.padding = "0", L.padding = "0", this.bodyWidth = S.width, this.docWidth = L.width, S.width = "100%", L.width = "100%", this.bodyHeight = S.height, this.docHeight = L.height, S.height = "100%", L.height = "100%", this.bodyDisplay = S.display, S.display = "block", this.previousBody = [], n[this.hash].prevElementParent = this.element.parentNode, n[this.hash].prevNextSibling = this.element.nextSibling, n[this.hash].prevElementWidth = this.element.style.width, n[this.hash].prevElementHeight = this.element.style.height, V = w.childNodes.length, M = 0; M < V; M++) this.previousBody.push(w.childNodes[0]), w.removeChild(w.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, w.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), w.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), n[this.hash].fullPage = true, e.delegate(this, pe)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, S.margin = this.bodyMargin, L.margin = this.docMargin, S.padding = this.bodyPadding, L.padding = this.docPadding, S.width = this.bodyWidth, L.width = this.docWidth, S.height = this.bodyHeight, L.height = this.docHeight, S.display = this.bodyDisplay, w.removeChild(this.element), V = this.previousBody.length, M = 0; M < V; M++) w.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), n[this.hash].prevElementParent.insertBefore(this.element, n[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (w.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = n[this.hash].prevElementWidth, this.element.style.height = n[this.hash].prevElementHeight;
            var Z = 0, se = function() {
              e.setPageScroll(I.pageScroll);
              var X = e.getPageScroll();
              Z++, Z < 10 && (X.x !== I.pageScroll.x || X.y !== I.pageScroll.y) && e.requestAnimationFrame(se);
            };
            e.requestAnimationFrame(se), n[this.hash].fullPage = false, e.delegate(this, ae)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: d }), this;
        }, setFullScreen: function(d) {
          var w = this;
          if (!e.supportsFullScreen) return this.setFullPage(d);
          if (e.isFullScreen() === d) return this;
          var S = { fullScreen: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-screen", S), S.preventDefaultAction) return this;
          if (d) {
            if (this.setFullPage(true), !this.isFullPage()) return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var L = function() {
              var I = e.isFullScreen();
              I || (e.removeEvent(document, e.fullScreenEventName, L), e.removeEvent(document, e.fullScreenErrorEventName, L), w.setFullPage(false), w.isFullPage() && (w.element.style.width = w.fullPageStyleWidth, w.element.style.height = w.fullPageStyleHeight)), w.navigator && w.viewport && setTimeout(function() {
                w.navigator.update(w.viewport);
              }), w.raiseEvent("full-screen", { fullScreen: I });
            };
            e.addEvent(document, e.fullScreenEventName, L), e.addEvent(document, e.fullScreenErrorEventName, L), e.requestFullScreen(document.body);
          } else e.exitFullScreen();
          return this;
        }, isVisible: function() {
          return this.container.style.visibility !== "hidden";
        }, isFullScreen: function() {
          return e.isFullScreen() && this.isFullPage();
        }, setVisible: function(d) {
          return this.container.style.visibility = d ? "" : "hidden", this.raiseEvent("visible", { visible: d }), this;
        }, addTiledImage: function(d) {
          e.console.assert(d, "[Viewer.addTiledImage] options is required"), e.console.assert(d.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!d.replace || d.index > -1 && d.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
          var w = this;
          d.replace && (d.replaceItem = w.world.getItemAt(d.index)), this._hideMessage(), d.placeholderFillStyle === void 0 && (d.placeholderFillStyle = this.placeholderFillStyle), d.opacity === void 0 && (d.opacity = this.opacity), d.preload === void 0 && (d.preload = this.preload), d.compositeOperation === void 0 && (d.compositeOperation = this.compositeOperation), d.crossOriginPolicy === void 0 && (d.crossOriginPolicy = d.tileSource.crossOriginPolicy !== void 0 ? d.tileSource.crossOriginPolicy : this.crossOriginPolicy), d.ajaxWithCredentials === void 0 && (d.ajaxWithCredentials = this.ajaxWithCredentials), d.loadTilesWithAjax === void 0 && (d.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(d.ajaxHeaders) || (d.ajaxHeaders = {});
          var S = { options: d };
          function L(M) {
            for (var W = 0; W < w._loadQueue.length; W++) if (w._loadQueue[W] === S) {
              w._loadQueue.splice(W, 1);
              break;
            }
            w._loadQueue.length === 0 && I(S), w.raiseEvent("add-item-failed", M), d.error && d.error(M);
          }
          function I(M) {
            w.collectionMode && (w.world.arrange({ immediately: M.options.collectionImmediately, rows: w.collectionRows, columns: w.collectionColumns, layout: w.collectionLayout, tileSize: w.collectionTileSize, tileMargin: w.collectionTileMargin }), w.world.setAutoRefigureSizes(true));
          }
          if (e.isArray(d.tileSource)) {
            setTimeout(function() {
              L({ message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.", source: d.tileSource, options: d });
            });
            return;
          }
          this._loadQueue.push(S);
          function V() {
            for (var M, W, Z; w._loadQueue.length && (M = w._loadQueue[0], !!M.tileSource); ) {
              if (w._loadQueue.splice(0, 1), M.options.replace) {
                var se = w.world.getIndexOfItem(M.options.replaceItem);
                se !== -1 && (M.options.index = se), w.world.removeItem(M.options.replaceItem);
              }
              W = new e.TiledImage({ viewer: w, source: M.tileSource, viewport: w.viewport, drawer: w.drawer, tileCache: w.tileCache, imageLoader: w.imageLoader, x: M.options.x, y: M.options.y, width: M.options.width, height: M.options.height, fitBounds: M.options.fitBounds, fitBoundsPlacement: M.options.fitBoundsPlacement, clip: M.options.clip, placeholderFillStyle: M.options.placeholderFillStyle, opacity: M.options.opacity, preload: M.options.preload, degrees: M.options.degrees, flipped: M.options.flipped, compositeOperation: M.options.compositeOperation, springStiffness: w.springStiffness, animationTime: w.animationTime, minZoomImageRatio: w.minZoomImageRatio, wrapHorizontal: w.wrapHorizontal, wrapVertical: w.wrapVertical, maxTilesPerFrame: w.maxTilesPerFrame, immediateRender: w.immediateRender, blendTime: w.blendTime, alwaysBlend: w.alwaysBlend, minPixelRatio: w.minPixelRatio, smoothTileEdgesMinZoom: w.smoothTileEdgesMinZoom, iOSDevice: w.iOSDevice, crossOriginPolicy: M.options.crossOriginPolicy, ajaxWithCredentials: M.options.ajaxWithCredentials, loadTilesWithAjax: M.options.loadTilesWithAjax, ajaxHeaders: M.options.ajaxHeaders, debugMode: w.debugMode, subPixelRoundingForTransparency: w.subPixelRoundingForTransparency }), w.collectionMode && w.world.setAutoRefigureSizes(false), w.navigator && (Z = e.extend({}, M.options, { replace: false, originalTiledImage: W, tileSource: M.tileSource }), w.navigator.addTiledImage(Z)), w.world.addItem(W, { index: M.options.index }), w._loadQueue.length === 0 && I(M), w.world.getItemCount() === 1 && !w.preserveViewport && w.viewport.goHome(true), M.options.success && M.options.success({ item: W });
            }
          }
          o(this, d.tileSource, d, function(M) {
            S.tileSource = M, V();
          }, function(M) {
            M.options = d, L(M), V();
          });
        }, addSimpleImage: function(d) {
          e.console.assert(d, "[Viewer.addSimpleImage] options is required"), e.console.assert(d.url, "[Viewer.addSimpleImage] options.url is required");
          var w = e.extend({}, d, { tileSource: { type: "image", url: d.url } });
          delete w.url, this.addTiledImage(w);
        }, addLayer: function(d) {
          var w = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var S = e.extend({}, d, { success: function(L) {
            w.raiseEvent("add-layer", { options: d, drawer: L.item });
          }, error: function(L) {
            w.raiseEvent("add-layer-failed", L);
          } });
          return this.addTiledImage(S), this;
        }, getLayerAtLevel: function(d) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(d);
        }, getLevelOfLayer: function(d) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(d);
        }, getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        }, setLayerLevel: function(d, w) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(d, w);
        }, removeLayer: function(d) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(d);
        }, forceRedraw: function() {
          return n[this.hash].forceRedraw = true, this;
        }, forceResize: function() {
          n[this.hash].needsResize = true, n[this.hash].forceResize = true;
        }, bindSequenceControls: function() {
          var d = e.delegate(this, v), w = e.delegate(this, y), S = e.delegate(this, this.goToNextPage), L = e.delegate(this, this.goToPreviousPage), I = this.navImages, V = true;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (V = false), this.previousButton = new e.Button({ element: this.previousButton ? e.getElement(this.previousButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.PreviousPage"), srcRest: ge(this.prefixUrl, I.previous.REST), srcGroup: ge(this.prefixUrl, I.previous.GROUP), srcHover: ge(this.prefixUrl, I.previous.HOVER), srcDown: ge(this.prefixUrl, I.previous.DOWN), onRelease: L, onFocus: d, onBlur: w }), this.nextButton = new e.Button({ element: this.nextButton ? e.getElement(this.nextButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.NextPage"), srcRest: ge(this.prefixUrl, I.next.REST), srcGroup: ge(this.prefixUrl, I.next.GROUP), srcHover: ge(this.prefixUrl, I.next.HOVER), srcDown: ge(this.prefixUrl, I.next.DOWN), onRelease: S, onFocus: d, onBlur: w }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), V && (this.paging = new e.ButtonGroup({ buttons: [this.previousButton, this.nextButton], clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, { anchor: e.ControlAnchor.BOTTOM_RIGHT }) : this.addControl(this.pagingControl, { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }))), this;
        }, bindStandardControls: function() {
          var d = e.delegate(this, Nt), w = e.delegate(this, nt), S = e.delegate(this, Wt), L = e.delegate(this, Ut), I = e.delegate(this, st), V = e.delegate(this, P), M = e.delegate(this, D), W = e.delegate(this, F), Z = e.delegate(this, U), se = e.delegate(this, z), X = e.delegate(this, v), oe = e.delegate(this, y), g = this.navImages, p = [], _ = true;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (_ = false), this.showZoomControl && (p.push(this.zoomInButton = new e.Button({ element: this.zoomInButton ? e.getElement(this.zoomInButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomIn"), srcRest: ge(this.prefixUrl, g.zoomIn.REST), srcGroup: ge(this.prefixUrl, g.zoomIn.GROUP), srcHover: ge(this.prefixUrl, g.zoomIn.HOVER), srcDown: ge(this.prefixUrl, g.zoomIn.DOWN), onPress: d, onRelease: w, onClick: S, onEnter: d, onExit: w, onFocus: X, onBlur: oe })), p.push(this.zoomOutButton = new e.Button({ element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomOut"), srcRest: ge(this.prefixUrl, g.zoomOut.REST), srcGroup: ge(this.prefixUrl, g.zoomOut.GROUP), srcHover: ge(this.prefixUrl, g.zoomOut.HOVER), srcDown: ge(this.prefixUrl, g.zoomOut.DOWN), onPress: L, onRelease: w, onClick: I, onEnter: L, onExit: w, onFocus: X, onBlur: oe }))), this.showHomeControl && p.push(this.homeButton = new e.Button({ element: this.homeButton ? e.getElement(this.homeButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Home"), srcRest: ge(this.prefixUrl, g.home.REST), srcGroup: ge(this.prefixUrl, g.home.GROUP), srcHover: ge(this.prefixUrl, g.home.HOVER), srcDown: ge(this.prefixUrl, g.home.DOWN), onRelease: V, onFocus: X, onBlur: oe })), this.showFullPageControl && p.push(this.fullPageButton = new e.Button({ element: this.fullPageButton ? e.getElement(this.fullPageButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.FullPage"), srcRest: ge(this.prefixUrl, g.fullpage.REST), srcGroup: ge(this.prefixUrl, g.fullpage.GROUP), srcHover: ge(this.prefixUrl, g.fullpage.HOVER), srcDown: ge(this.prefixUrl, g.fullpage.DOWN), onRelease: M, onFocus: X, onBlur: oe })), this.showRotationControl && (p.push(this.rotateLeftButton = new e.Button({ element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateLeft"), srcRest: ge(this.prefixUrl, g.rotateleft.REST), srcGroup: ge(this.prefixUrl, g.rotateleft.GROUP), srcHover: ge(this.prefixUrl, g.rotateleft.HOVER), srcDown: ge(this.prefixUrl, g.rotateleft.DOWN), onRelease: W, onFocus: X, onBlur: oe })), p.push(this.rotateRightButton = new e.Button({ element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateRight"), srcRest: ge(this.prefixUrl, g.rotateright.REST), srcGroup: ge(this.prefixUrl, g.rotateright.GROUP), srcHover: ge(this.prefixUrl, g.rotateright.HOVER), srcDown: ge(this.prefixUrl, g.rotateright.DOWN), onRelease: Z, onFocus: X, onBlur: oe }))), this.showFlipControl && p.push(this.flipButton = new e.Button({ element: this.flipButton ? e.getElement(this.flipButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Flip"), srcRest: ge(this.prefixUrl, g.flip.REST), srcGroup: ge(this.prefixUrl, g.flip.GROUP), srcHover: ge(this.prefixUrl, g.flip.HOVER), srcDown: ge(this.prefixUrl, g.flip.DOWN), onRelease: se, onFocus: X, onBlur: oe })), _ ? (this.buttonGroup = new e.ButtonGroup({ buttons: p, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, ii)), this.toolbar ? this.toolbar.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }) : this.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT })) : this.customButtons = p), this;
        }, currentPage: function() {
          return this._sequenceIndex;
        }, goToPage: function(d) {
          return this.tileSources && d >= 0 && d < this.tileSources.length && (this._sequenceIndex = d, this._updateSequenceButtons(d), this.open(this.tileSources[d]), this.referenceStrip && this.referenceStrip.setFocus(d), this.raiseEvent("page", { page: d })), this;
        }, addOverlay: function(d, w, S, L) {
          var I;
          if (e.isPlainObject(d) ? I = d : I = { element: d, location: w, placement: S, onDraw: L }, d = e.getElement(I.element), a(this.currentOverlays, d) >= 0) return this;
          var V = l(this, I);
          return this.currentOverlays.push(V), V.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", { element: d, location: I.location, placement: I.placement }), this;
        }, updateOverlay: function(d, w, S) {
          var L;
          return d = e.getElement(d), L = a(this.currentOverlays, d), L >= 0 && (this.currentOverlays[L].update(w, S), n[this.hash].forceRedraw = true, this.raiseEvent("update-overlay", { element: d, location: w, placement: S })), this;
        }, removeOverlay: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 && (this.currentOverlays[w].destroy(), this.currentOverlays.splice(w, 1), n[this.hash].forceRedraw = true, this.raiseEvent("remove-overlay", { element: d })), this;
        }, clearOverlays: function() {
          for (; this.currentOverlays.length > 0; ) this.currentOverlays.pop().destroy();
          return n[this.hash].forceRedraw = true, this.raiseEvent("clear-overlay", {}), this;
        }, getOverlayById: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 ? this.currentOverlays[w] : null;
        }, _updateSequenceButtons: function(d) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === d ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (d > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        }, _showMessage: function(d) {
          this._hideMessage();
          var w = e.makeNeutralElement("div");
          w.appendChild(document.createTextNode(d)), this.messageDiv = e.makeCenteredNode(w), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        }, _hideMessage: function() {
          var d = this.messageDiv;
          d && (d.parentNode.removeChild(d), delete this.messageDiv);
        }, gestureSettingsByDeviceType: function(d) {
          switch (d) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        }, _drawOverlays: function() {
          var d, w = this.currentOverlays.length;
          for (d = 0; d < w; d++) this.currentOverlays[d].drawHTML(this.overlaysContainer, this.viewport);
        }, _cancelPendingImages: function() {
          this._loadQueue = [];
        }, removeReferenceStrip: function() {
          this.showReferenceStrip = false, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        }, addReferenceStrip: function() {
          if (this.showReferenceStrip = true, this.sequenceMode) {
            if (this.referenceStrip) return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({ id: this.referenceStripElement, position: this.referenceStripPosition, sizeRatio: this.referenceStripSizeRatio, scroll: this.referenceStripScroll, height: this.referenceStripHeight, width: this.referenceStripWidth, tileSources: this.tileSources, prefixUrl: this.prefixUrl, viewer: this }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        }, _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _updatePixelDensityRatio: function() {
          var d = e.pixelDensityRatio, w = e.getCurrentPixelDensityRatio();
          d !== w && (e.pixelDensityRatio = w, this.forceResize());
        }, goToPreviousPage: function() {
          var d = this._sequenceIndex - 1;
          this.navPrevNextWrap && d < 0 && (d += this.tileSources.length), this.goToPage(d);
        }, goToNextPage: function() {
          var d = this._sequenceIndex + 1;
          this.navPrevNextWrap && d >= this.tileSources.length && (d = 0), this.goToPage(d);
        }, isAnimating: function() {
          return n[this.hash].animating;
        } });
        function s(d) {
          return d = e.getElement(d), new e.Point(d.clientWidth === 0 ? 1 : d.clientWidth, d.clientHeight === 0 ? 1 : d.clientHeight);
        }
        function o(d, w, S, L, I) {
          var V = d;
          if (e.type(w) === "string") {
            if (w.match(/^\s*<.*>\s*$/)) w = e.parseXml(w);
            else if (w.match(/^\s*[{[].*[}\]]\s*$/)) try {
              var M = e.parseJSON(w);
              w = M;
            } catch {
            }
          }
          function W(Z, se) {
            Z.ready ? L(Z) : (Z.addHandler("ready", function() {
              L(Z);
            }), Z.addHandler("open-failed", function(X) {
              I({ message: X.message, source: se });
            }));
          }
          setTimeout(function() {
            if (e.type(w) === "string") w = new e.TileSource({ url: w, crossOriginPolicy: S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : d.crossOriginPolicy, ajaxWithCredentials: d.ajaxWithCredentials, ajaxHeaders: S.ajaxHeaders ? S.ajaxHeaders : d.ajaxHeaders, splitHashDataForPost: d.splitHashDataForPost, success: function(oe) {
              L(oe.tileSource);
            } }), w.addHandler("open-failed", function(oe) {
              I(oe);
            });
            else if (e.isPlainObject(w) || w.nodeType) if (w.crossOriginPolicy === void 0 && (S.crossOriginPolicy !== void 0 || d.crossOriginPolicy !== void 0) && (w.crossOriginPolicy = S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : d.crossOriginPolicy), w.ajaxWithCredentials === void 0 && (w.ajaxWithCredentials = d.ajaxWithCredentials), e.isFunction(w.getTileUrl)) {
              var Z = new e.TileSource(w);
              Z.getTileUrl = w.getTileUrl, L(Z);
            } else {
              var se = e.TileSource.determineType(V, w);
              if (!se) {
                I({ message: "Unable to load TileSource", source: w });
                return;
              }
              var X = se.prototype.configure.apply(V, [w]);
              W(new se(X), w);
            }
            else W(w, w);
          });
        }
        function l(d, w) {
          if (w instanceof e.Overlay) return w;
          var S = null;
          if (w.element) S = e.getElement(w.element);
          else {
            var L = w.id ? w.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
            S = e.getElement(w.id), S || (S = document.createElement("a"), S.href = "#/overlay/" + L), S.id = L, e.addClass(S, w.className ? w.className : "openseadragon-overlay");
          }
          var I = w.location, V = w.width, M = w.height;
          if (!I) {
            var W = w.x, Z = w.y;
            if (w.px !== void 0) {
              var se = d.viewport.imageToViewportRectangle(new e.Rect(w.px, w.py, V || 0, M || 0));
              W = se.x, Z = se.y, V = V !== void 0 ? se.width : void 0, M = M !== void 0 ? se.height : void 0;
            }
            I = new e.Point(W, Z);
          }
          var X = w.placement;
          return X && e.type(X) === "string" && (X = e.Placement[w.placement.toUpperCase()]), new e.Overlay({ element: S, location: I, placement: X, onDraw: w.onDraw, checkResize: w.checkResize, width: V, height: M, rotationMode: w.rotationMode });
        }
        function a(d, w) {
          var S;
          for (S = d.length - 1; S >= 0; S--) if (d[S].element === w) return S;
          return -1;
        }
        function u(d, w) {
          return e.requestAnimationFrame(function() {
            w(d);
          });
        }
        function c(d) {
          e.requestAnimationFrame(function() {
            f(d);
          });
        }
        function h(d) {
          d.autoHideControls && (d.controlsShouldFade = true, d.controlsFadeBeginTime = e.now() + d.controlsFadeDelay, window.setTimeout(function() {
            c(d);
          }, d.controlsFadeDelay));
        }
        function f(d) {
          var w, S, L, I;
          if (d.controlsShouldFade) {
            for (w = e.now(), S = w - d.controlsFadeBeginTime, L = 1 - S / d.controlsFadeLength, L = Math.min(1, L), L = Math.max(0, L), I = d.controls.length - 1; I >= 0; I--) d.controls[I].autoFade && d.controls[I].setOpacity(L);
            L > 0 && c(d);
          }
        }
        function m(d) {
          var w;
          for (d.controlsShouldFade = false, w = d.controls.length - 1; w >= 0; w--) d.controls[w].setOpacity(1);
        }
        function v() {
          m(this);
        }
        function y() {
          h(this);
        }
        function x(d) {
          var w = { tracker: d.eventSource, position: d.position, originalEvent: d.originalEvent, preventDefault: d.preventDefault };
          this.raiseEvent("canvas-contextmenu", w), d.preventDefault = w.preventDefault;
        }
        function T(d) {
          var w = { originalEvent: d.originalEvent, preventDefaultAction: false, preventVerticalPan: d.preventVerticalPan || !this.panVertical, preventHorizontalPan: d.preventHorizontalPan || !this.panHorizontal };
          if (this.raiseEvent("canvas-key", w), !w.preventDefaultAction && !d.ctrl && !d.alt && !d.meta) switch (d.keyCode) {
            case 38:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 40:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 37:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 39:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 187:
              this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 189:
              this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 48:
              this.viewport.goHome(), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 87:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 83:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 65:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 68:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 82:
              d.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 70:
              this.viewport.toggleFlip(), d.preventDefault = true;
              break;
            case 74:
              this.goToPreviousPage();
              break;
            case 75:
              this.goToNextPage();
              break;
            default:
              d.preventDefault = false;
              break;
          }
          else d.preventDefault = false;
        }
        function C(d) {
          var w = { originalEvent: d.originalEvent };
          this.raiseEvent("canvas-key-press", w);
        }
        function H(d) {
          var w, S = document.activeElement === this.canvas;
          S || this.canvas.focus(), this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x);
          var L = { tracker: d.eventSource, position: d.position, quick: d.quick, shift: d.shift, originalEvent: d.originalEvent, originalTarget: d.originalTarget, preventDefaultAction: false };
          this.raiseEvent("canvas-click", L), !L.preventDefaultAction && this.viewport && d.quick && (w = this.gestureSettingsByDeviceType(d.pointerType), w.clickToZoom === true && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()), w.dblClickDragToZoom && (n[this.hash].draggingToZoom === true ? (n[this.hash].lastClickTime = null, n[this.hash].draggingToZoom = false) : n[this.hash].lastClickTime = e.now()));
        }
        function k(d) {
          var w, S = { tracker: d.eventSource, position: d.position, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          this.raiseEvent("canvas-double-click", S), !S.preventDefaultAction && this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickToZoom && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()));
        }
        function N(d) {
          var w, S = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, delta: d.delta, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag", S), w = this.gestureSettingsByDeviceType(d.pointerType), !S.preventDefaultAction && this.viewport) {
            if (w.dblClickDragToZoom && n[this.hash].draggingToZoom) {
              var L = Math.pow(this.zoomPerDblClickDrag, d.delta.y / 50);
              this.viewport.zoomBy(L);
            } else if (w.dragToPan && !n[this.hash].draggingToZoom) {
              if (this.panHorizontal || (d.delta.x = 0), this.panVertical || (d.delta.y = 0), this.viewport.flipped && (d.delta.x = -d.delta.x), this.constrainDuringPan) {
                var I = this.viewport.deltaPointsFromPixels(d.delta.negate());
                this.viewport.centerSpringX.target.value += I.x, this.viewport.centerSpringY.target.value += I.y;
                var V = this.viewport.getConstrainedBounds();
                this.viewport.centerSpringX.target.value -= I.x, this.viewport.centerSpringY.target.value -= I.y, V.xConstrained && (d.delta.x = 0), V.yConstrained && (d.delta.y = 0);
              }
              this.viewport.panBy(this.viewport.deltaPointsFromPixels(d.delta.negate()), w.flickEnabled && !this.constrainDuringPan);
            }
          }
        }
        function Y(d) {
          var w, S = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag-end", S), w = this.gestureSettingsByDeviceType(d.pointerType), !S.preventDefaultAction && this.viewport) {
            if (!n[this.hash].draggingToZoom && w.dragToPan && w.flickEnabled && d.speed >= w.flickMinSpeed) {
              var L = 0;
              this.panHorizontal && (L = w.flickMomentum * d.speed * Math.cos(d.direction));
              var I = 0;
              this.panVertical && (I = w.flickMomentum * d.speed * Math.sin(d.direction));
              var V = this.viewport.pixelFromPoint(this.viewport.getCenter(true)), M = this.viewport.pointFromPixel(new e.Point(V.x - L, V.y - I));
              this.viewport.panTo(M, false);
            }
            this.viewport.applyConstraints();
          }
          w.dblClickDragToZoom && n[this.hash].draggingToZoom === true && (n[this.hash].draggingToZoom = false);
        }
        function K(d) {
          this.raiseEvent("canvas-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function q(d) {
          this.raiseEvent("canvas-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function ee(d) {
          var w;
          if (this.raiseEvent("canvas-press", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent }), w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickDragToZoom) {
            var S = n[this.hash].lastClickTime, L = e.now();
            if (S === null) return;
            L - S < this.dblClickTimeThreshold && (n[this.hash].draggingToZoom = true), n[this.hash].lastClickTime = null;
          }
        }
        function ce(d) {
          this.raiseEvent("canvas-release", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent });
        }
        function te(d) {
          this.raiseEvent("canvas-nonprimary-press", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function j(d) {
          this.raiseEvent("canvas-nonprimary-release", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function ne(d) {
          var w, S, L, I, V = { tracker: d.eventSource, pointerType: d.pointerType, gesturePoints: d.gesturePoints, lastCenter: d.lastCenter, center: d.center, lastDistance: d.lastDistance, distance: d.distance, shift: d.shift, originalEvent: d.originalEvent, preventDefaultPanAction: false, preventDefaultZoomAction: false, preventDefaultRotateAction: false };
          if (this.raiseEvent("canvas-pinch", V), this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.pinchToZoom && (!V.preventDefaultPanAction || !V.preventDefaultZoomAction) && (S = this.viewport.pointFromPixel(d.center, true), w.zoomToRefPoint && !V.preventDefaultPanAction && (L = this.viewport.pointFromPixel(d.lastCenter, true), I = L.minus(S), this.panHorizontal || (I.x = 0), this.panVertical || (I.y = 0), this.viewport.panBy(I, true)), V.preventDefaultZoomAction || this.viewport.zoomBy(d.distance / d.lastDistance, S, true), this.viewport.applyConstraints()), w.pinchRotate && !V.preventDefaultRotateAction)) {
            var M = Math.atan2(d.gesturePoints[0].currentPos.y - d.gesturePoints[1].currentPos.y, d.gesturePoints[0].currentPos.x - d.gesturePoints[1].currentPos.x), W = Math.atan2(d.gesturePoints[0].lastPos.y - d.gesturePoints[1].lastPos.y, d.gesturePoints[0].lastPos.x - d.gesturePoints[1].lastPos.x);
            S = this.viewport.pointFromPixel(d.center, true), this.viewport.rotateTo(this.viewport.getRotation(true) + (M - W) * (180 / Math.PI), S, true);
          }
        }
        function he(d) {
          this.raiseEvent("canvas-focus", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function ye(d) {
          this.raiseEvent("canvas-blur", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function me(d) {
          var w, S, L, I, V;
          I = e.now(), V = I - this._lastScrollTime, V > this.minScrollDeltaTime ? (this._lastScrollTime = I, w = { tracker: d.eventSource, position: d.position, scroll: d.scroll, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false, preventDefault: true }, this.raiseEvent("canvas-scroll", w), !w.preventDefaultAction && this.viewport && (this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x), S = this.gestureSettingsByDeviceType(d.pointerType), S.scrollToZoom && (L = Math.pow(this.zoomPerScroll, d.scroll), this.viewport.zoomBy(L, S.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints())), d.preventDefault = w.preventDefault) : d.preventDefault = true;
        }
        function pe(d) {
          n[this.hash].mouseInside = true, m(this), this.raiseEvent("container-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function ae(d) {
          d.pointers < 1 && (n[this.hash].mouseInside = false, n[this.hash].animating || h(this)), this.raiseEvent("container-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function Ae(d) {
          Qe(d), d.isOpen() ? d._updateRequestId = u(d, Ae) : d._updateRequestId = false;
        }
        function Re(d, w) {
          var S = d.viewport, L = S.getZoom(), I = S.getCenter();
          S.resize(w, d.preserveImageSizeOnResize), S.panTo(I, true);
          var V;
          if (d.preserveImageSizeOnResize) V = n[d.hash].prevContainerSize.x / w.x;
          else {
            var M = new e.Point(0, 0), W = new e.Point(n[d.hash].prevContainerSize.x, n[d.hash].prevContainerSize.y).distanceTo(M), Z = new e.Point(w.x, w.y).distanceTo(M);
            V = Z / W * n[d.hash].prevContainerSize.x / w.x;
          }
          S.zoomTo(L * V, null, true), n[d.hash].prevContainerSize = w, n[d.hash].forceRedraw = true, n[d.hash].needsResize = false, n[d.hash].forceResize = false;
        }
        function Qe(d) {
          if (!(d._opening || !n[d.hash])) {
            if (d.autoResize || n[d.hash].forceResize) {
              var w;
              if (d._autoResizePolling) {
                w = s(d.container);
                var S = n[d.hash].prevContainerSize;
                w.equals(S) || (n[d.hash].needsResize = true);
              }
              n[d.hash].needsResize && Re(d, w || s(d.container));
            }
            var L = d.viewport.update(), I = d.world.update(L) || L;
            L && d.raiseEvent("viewport-change"), d.referenceStrip && (I = d.referenceStrip.update(d.viewport) || I);
            var V = n[d.hash].animating;
            !V && I && (d.raiseEvent("animation-start"), m(d));
            var M = V && !I;
            M && (n[d.hash].animating = false), (I || M || n[d.hash].forceRedraw || d.world.needsDraw()) && (je(d), d._drawOverlays(), d.navigator && d.navigator.update(d.viewport), n[d.hash].forceRedraw = false, I && d.raiseEvent("animation")), M && (d.raiseEvent("animation-finish"), n[d.hash].mouseInside || h(d)), n[d.hash].animating = I;
          }
        }
        function je(d) {
          d.imageLoader.clear(), d.world.draw(), d.raiseEvent("update-viewport", {});
        }
        function ge(d, w) {
          return d ? d + w : w;
        }
        function Nt() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = this.zoomPerSecond, n[this.hash].zooming = true, $e(this);
        }
        function Ut() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = 1 / this.zoomPerSecond, n[this.hash].zooming = true, $e(this);
        }
        function nt() {
          n[this.hash].zooming = false;
        }
        function $e(d) {
          e.requestAnimationFrame(e.delegate(d, bt));
        }
        function bt() {
          var d, w, S;
          n[this.hash].zooming && this.viewport && (d = e.now(), w = d - n[this.hash].lastZoomTime, S = Math.pow(n[this.hash].zoomFactor, w / 1e3), this.viewport.zoomBy(S), this.viewport.applyConstraints(), n[this.hash].lastZoomTime = d, $e(this));
        }
        function Wt() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints());
        }
        function st() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints());
        }
        function ii() {
          this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
        }
        function P() {
          this.viewport && this.viewport.goHome();
        }
        function D() {
          this.isFullPage() && !e.isFullScreen() ? this.setFullPage(false) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
        }
        function F() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d += this.rotationIncrement : d -= this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function U() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d -= this.rotationIncrement : d += this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function z() {
          this.viewport.toggleFlip();
        }
        e.determineDrawer = function(d) {
          for (let w in i) {
            const S = i[w], L = S.prototype;
            if (L && L instanceof i.DrawerBase && e.isFunction(L.getType) && L.getType.call(S) === d) return S;
          }
          return null;
        };
      })(i), (function(e) {
        e.Navigator = function(u) {
          var c = u.viewer, h = this, f, m;
          u.element || u.id ? (u.element ? (u.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), u.element.id ? u.id = u.element.id : u.id = "navigator-" + e.now(), this.element = u.element) : this.element = document.getElementById(u.id), u.controlOptions = { anchor: e.ControlAnchor.NONE, attachToViewer: false, autoFade: false }) : (u.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), u.controlOptions = { anchor: e.ControlAnchor.TOP_RIGHT, attachToViewer: true, autoFade: u.autoFade }, u.position && (u.position === "BOTTOM_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : u.position === "BOTTOM_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : u.position === "TOP_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : u.position === "TOP_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : u.position === "ABSOLUTE" && (u.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, u.controlOptions.top = u.top, u.controlOptions.left = u.left, u.controlOptions.height = u.height, u.controlOptions.width = u.width))), this.element.id = u.id, this.element.className += " navigator", u = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, u, { element: this.element, tabIndex: -1, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: u.animationTime, autoResize: false, minZoomImageRatio: 1, background: u.background, opacity: u.opacity, borderColor: u.borderColor, displayRegionColor: u.displayRegionColor }), u.minPixelRatio = this.minPixelRatio = c.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), u.controlOptions.anchor !== e.ControlAnchor.NONE && (function(x, T) {
            x.margin = "0px", x.border = T + "px solid " + u.borderColor, x.padding = "0px", x.background = u.background, x.opacity = u.opacity, x.overflow = "hidden";
          })(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", (function(x, T) {
            x.position = "relative", x.top = "0px", x.left = "0px", x.fontSize = "0px", x.overflow = "hidden", x.border = T + "px solid " + u.displayRegionColor, x.margin = "0px", x.padding = "0px", x.background = "transparent", x.float = "left", x.cssFloat = "left", x.zIndex = 999999999, x.cursor = "default", x.boxSizing = "content-box";
          })(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), c.addControl(this.element, u.controlOptions), this._resizeWithViewer = u.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && u.controlOptions.anchor !== e.ControlAnchor.NONE, u.width && u.height ? (this.setWidth(u.width), this.setHeight(u.height)) : this._resizeWithViewer && (f = e.getElementSize(c.element), this.element.style.height = Math.round(f.y * u.sizeRatio) + "px", this.element.style.width = Math.round(f.x * u.sizeRatio) + "px", this.oldViewerSize = f, m = e.getElementSize(this.element), this.elementArea = m.x * m.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [u]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
          function v(x, T) {
            l(h.displayRegionContainer, x), l(h.displayRegion, -x), h.viewport.setRotation(x, T);
          }
          if (u.navigatorRotate) {
            var y = u.viewer.viewport ? u.viewer.viewport.getRotation() : u.viewer.degrees || 0;
            v(y, true), u.viewer.addHandler("rotate", function(x) {
              v(x.degrees, x.immediately);
            });
          }
          this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({ userData: "Navigator.innerTracker", element: this.element, dragHandler: e.delegate(this, r), clickHandler: e.delegate(this, n), releaseHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), preProcessEventHandler: function(x) {
            x.eventType === "wheel" && (x.preventDefault = true);
          } }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
            h.viewport && h.viewport.goHome(true);
          }), c.world.addHandler("item-index-change", function(x) {
            window.setTimeout(function() {
              var T = h.world.getItemAt(x.previousIndex);
              h.world.setItemIndex(T, x.newIndex);
            }, 1);
          }), c.world.addHandler("remove-item", function(x) {
            var T = x.item, C = h._getMatchingItem(T);
            C && h.world.removeItem(C);
          }), this.update(c.viewport);
        }, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, { updateSize: function() {
          if (this.viewport) {
            var u = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth, this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
            u.equals(this.oldContainerSize) || (this.viewport.resize(u, true), this.viewport.goHome(true), this.oldContainerSize = u, this.world.update(), this.world.draw(), this.update(this.viewer.viewport));
          }
        }, setWidth: function(u) {
          this.width = u, this.element.style.width = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setHeight: function(u) {
          this.height = u, this.element.style.height = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setFlip: function(u) {
          return this.viewport.setFlip(u), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        }, setDisplayTransform: function(u) {
          a(this.canvas, u), a(this.element, u);
        }, update: function(u) {
          var c, h, f, m, v, y;
          if (u || (u = this.viewer.viewport), c = e.getElementSize(this.viewer.element), this._resizeWithViewer && c.x && c.y && !c.equals(this.oldViewerSize) && (this.oldViewerSize = c, this.maintainSizeRatio || !this.elementArea ? (h = c.x * this.sizeRatio, f = c.y * this.sizeRatio) : (h = Math.sqrt(this.elementArea * (c.x / c.y)), f = this.elementArea / h), this.element.style.width = Math.round(h) + "px", this.element.style.height = Math.round(f) + "px", this.elementArea || (this.elementArea = h * f), this.updateSize()), u && this.viewport) {
            if (m = u.getBoundsNoRotate(true), v = this.viewport.pixelFromPointNoRotate(m.getTopLeft(), false), y = this.viewport.pixelFromPointNoRotate(m.getBottomRight(), false).minus(this.totalBorderWidths), !this.navigatorRotate) {
              var x = u.getRotation(true);
              l(this.displayRegion, -x);
            }
            var T = this.displayRegion.style;
            T.display = this.world.getItemCount() ? "block" : "none", T.top = v.y.toFixed(2) + "px", T.left = v.x.toFixed(2) + "px";
            var C = y.x - v.x, H = y.y - v.y;
            T.width = Math.round(Math.max(C, 0)) + "px", T.height = Math.round(Math.max(H, 0)) + "px";
          }
        }, addTiledImage: function(u) {
          var c = this, h = u.originalTiledImage;
          delete u.original;
          var f = e.extend({}, u, { success: function(m) {
            var v = m.item;
            v._originalForNavigator = h, c._matchBounds(v, h, true), c._matchOpacity(v, h), c._matchCompositeOperation(v, h);
            function y() {
              c._matchBounds(v, h);
            }
            function x() {
              c._matchOpacity(v, h);
            }
            function T() {
              c._matchCompositeOperation(v, h);
            }
            h.addHandler("bounds-change", y), h.addHandler("clip-change", y), h.addHandler("opacity-change", x), h.addHandler("composite-operation-change", T);
          } });
          return e.Viewer.prototype.addTiledImage.apply(this, [f]);
        }, destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        }, _getMatchingItem: function(u) {
          for (var c = this.world.getItemCount(), h, f = 0; f < c; f++) if (h = this.world.getItemAt(f), h._originalForNavigator === u) return h;
          return null;
        }, _matchBounds: function(u, c, h) {
          var f = c.getBoundsNoRotate();
          u.setPosition(f.getTopLeft(), h), u.setWidth(f.width, h), u.setRotation(c.getRotation(), h), u.setClip(c.getClip()), u.setFlip(c.getFlip());
        }, _matchOpacity: function(u, c) {
          u.setOpacity(c.opacity);
        }, _matchCompositeOperation: function(u, c) {
          u.setCompositeOperation(c.compositeOperation);
        } });
        function n(u) {
          var c = { tracker: u.eventSource, position: u.position, quick: u.quick, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          if (this.viewer.raiseEvent("navigator-click", c), !c.preventDefaultAction && u.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
            this.viewer.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
            var h = this.viewport.pointFromPixel(u.position);
            this.panVertical ? this.panHorizontal || (h.x = this.viewer.viewport.getCenter(true).x) : h.y = this.viewer.viewport.getCenter(true).y, this.viewer.viewport.panTo(h), this.viewer.viewport.applyConstraints();
          }
        }
        function r(u) {
          var c = { tracker: u.eventSource, position: u.position, delta: u.delta, speed: u.speed, direction: u.direction, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          this.viewer.raiseEvent("navigator-drag", c), !c.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewer.viewport.flipped && (u.delta.x = -u.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
        }
        function s(u) {
          u.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
        }
        function o(u) {
          var c = { tracker: u.eventSource, position: u.position, scroll: u.scroll, shift: u.shift, originalEvent: u.originalEvent, preventDefault: u.preventDefault };
          this.viewer.raiseEvent("navigator-scroll", c), u.preventDefault = c.preventDefault;
        }
        function l(u, c) {
          a(u, "rotate(" + c + "deg)");
        }
        function a(u, c) {
          u.style.webkitTransform = c, u.style.mozTransform = c, u.style.msTransform = c, u.style.oTransform = c, u.style.transform = c;
        }
      })(i), (function(e) {
        var n = { Errors: { Dzc: "Sorry, we don't support Deep Zoom Collections!", Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.", Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.", Status: "This space unintentionally left blank ({0} {1}).", OpenFailed: "Unable to open {0}: {1}" }, Tooltips: { FullPage: "Toggle full page", Home: "Go home", ZoomIn: "Zoom in", ZoomOut: "Zoom out", NextPage: "Next page", PreviousPage: "Previous page", RotateLeft: "Rotate left", RotateRight: "Rotate right", Flip: "Flip Horizontally" } };
        e.extend(e, { getString: function(r) {
          var s = r.split("."), o = null, l = arguments, a = n, u;
          for (u = 0; u < s.length - 1; u++) a = a[s[u]] || {};
          return o = a[s[u]], typeof o != "string" && (e.console.error("Untranslated source string:", r), o = ""), o.replace(/\{\d+\}/g, function(c) {
            var h = parseInt(c.match(/\d+/), 10) + 1;
            return h < l.length ? l[h] : "";
          });
        }, setString: function(r, s) {
          var o = r.split("."), l = n, a;
          for (a = 0; a < o.length - 1; a++) l[o[a]] || (l[o[a]] = {}), l = l[o[a]];
          l[o[a]] = s;
        } });
      })(i), (function(e) {
        e.Point = function(n, r) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0;
        }, e.Point.prototype = { clone: function() {
          return new e.Point(this.x, this.y);
        }, plus: function(n) {
          return new e.Point(this.x + n.x, this.y + n.y);
        }, minus: function(n) {
          return new e.Point(this.x - n.x, this.y - n.y);
        }, times: function(n) {
          return new e.Point(this.x * n, this.y * n);
        }, divide: function(n) {
          return new e.Point(this.x / n, this.y / n);
        }, negate: function() {
          return new e.Point(-this.x, -this.y);
        }, distanceTo: function(n) {
          return Math.sqrt(Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2));
        }, squaredDistanceTo: function(n) {
          return Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2);
        }, apply: function(n) {
          return new e.Point(n(this.x), n(this.y));
        }, equals: function(n) {
          return n instanceof e.Point && this.x === n.x && this.y === n.y;
        }, rotate: function(n, r) {
          r = r || new e.Point(0, 0);
          var s, o;
          if (n % 90 === 0) {
            var l = e.positiveModulo(n, 360);
            switch (l) {
              case 0:
                s = 1, o = 0;
                break;
              case 90:
                s = 0, o = 1;
                break;
              case 180:
                s = -1, o = 0;
                break;
              case 270:
                s = 0, o = -1;
                break;
            }
          } else {
            var a = n * Math.PI / 180;
            s = Math.cos(a), o = Math.sin(a);
          }
          var u = s * (this.x - r.x) - o * (this.y - r.y) + r.x, c = o * (this.x - r.x) + s * (this.y - r.y) + r.y;
          return new e.Point(u, c);
        }, toString: function() {
          return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
        } };
      })(i), (function(e) {
        e.TileSource = function(r, s, o, l, a, u) {
          var c = this, h = arguments, f, m;
          if (e.isPlainObject(r) ? f = r : f = { width: h[0], height: h[1], tileSize: h[2], tileOverlap: h[3], minLevel: h[4], maxLevel: h[5] }, e.EventSource.call(this), e.extend(true, this, f), !this.success) {
            for (m = 0; m < arguments.length; m++) if (e.isFunction(arguments[m])) {
              this.success = arguments[m];
              break;
            }
          }
          this.success && this.addHandler("ready", function(v) {
            c.success(v);
          }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = false, this.getImageInfo(this.url)) : (this.ready = true, this.aspectRatio = f.width && f.height ? f.width / f.height : 1, this.dimensions = new e.Point(f.width, f.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0, this.minLevel = f.minLevel ? f.minLevel : 0, this.maxLevel = f.maxLevel !== void 0 && f.maxLevel !== null ? f.maxLevel : f.width && f.height ? Math.ceil(Math.log(Math.max(f.width, f.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this));
        }, e.TileSource.prototype = { getTileSize: function(r) {
          return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth;
        }, getTileWidth: function(r) {
          return this._tileWidth ? this._tileWidth : this.getTileSize(r);
        }, getTileHeight: function(r) {
          return this._tileHeight ? this._tileHeight : this.getTileSize(r);
        }, setMaxLevel: function(r) {
          this.maxLevel = r, this._memoizeLevelScale();
        }, getLevelScale: function(r) {
          return this._memoizeLevelScale(), this.getLevelScale(r);
        }, _memoizeLevelScale: function() {
          var r = {}, s;
          for (s = 0; s <= this.maxLevel; s++) r[s] = 1 / Math.pow(2, this.maxLevel - s);
          this.getLevelScale = function(o) {
            return r[o];
          };
        }, getNumTiles: function(r) {
          var s = this.getLevelScale(r), o = Math.ceil(s * this.dimensions.x / this.getTileWidth(r)), l = Math.ceil(s * this.dimensions.y / this.getTileHeight(r));
          return new e.Point(o, l);
        }, getPixelRatio: function(r) {
          var s = this.dimensions.times(this.getLevelScale(r)), o = 1 / s.x * e.pixelDensityRatio, l = 1 / s.y * e.pixelDensityRatio;
          return new e.Point(o, l);
        }, getClosestLevel: function() {
          var r, s;
          for (r = this.minLevel + 1; r <= this.maxLevel && (s = this.getNumTiles(r), !(s.x > 1 || s.y > 1)); r++) ;
          return r - 1;
        }, getTileAtPoint: function(r, s) {
          var o = s.x >= 0 && s.x <= 1 && s.y >= 0 && s.y <= 1 / this.aspectRatio;
          e.console.assert(o, "[TileSource.getTileAtPoint] must be called with a valid point.");
          var l = this.dimensions.x * this.getLevelScale(r), a = s.x * l, u = s.y * l, c = Math.floor(a / this.getTileWidth(r)), h = Math.floor(u / this.getTileHeight(r));
          s.x >= 1 && (c = this.getNumTiles(r).x - 1);
          var f = 1e-15;
          return s.y >= 1 / this.aspectRatio - f && (h = this.getNumTiles(r).y - 1), new e.Point(c, h);
        }, getTileBounds: function(r, s, o, l) {
          var a = this.dimensions.times(this.getLevelScale(r)), u = this.getTileWidth(r), c = this.getTileHeight(r), h = s === 0 ? 0 : u * s - this.tileOverlap, f = o === 0 ? 0 : c * o - this.tileOverlap, m = u + (s === 0 ? 1 : 2) * this.tileOverlap, v = c + (o === 0 ? 1 : 2) * this.tileOverlap, y = 1 / a.x;
          return m = Math.min(m, a.x - h), v = Math.min(v, a.y - f), l ? new e.Rect(0, 0, m, v) : new e.Rect(h * y, f * y, m * y, v * y);
        }, getImageInfo: function(r) {
          var s = this, o, l, a, u, c, h, f;
          r && (c = r.split("/"), h = c[c.length - 1], f = h.lastIndexOf("."), f > -1 && (c[c.length - 1] = h.slice(0, f)));
          var m = null;
          if (this.splitHashDataForPost) {
            var v = r.indexOf("#");
            v !== -1 && (m = r.substring(v + 1), r = r.substr(0, v));
          }
          l = function(y) {
            typeof y == "string" && (y = e.parseXml(y));
            var x = e.TileSource.determineType(s, y, r);
            if (!x) {
              s.raiseEvent("open-failed", { message: "Unable to load TileSource", source: r });
              return;
            }
            u = x.prototype.configure.apply(s, [y, r, m]), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = s.ajaxWithCredentials), a = new x(u), s.ready = true, s.raiseEvent("ready", { tileSource: a });
          }, r.match(/\.js$/) ? (o = r.split("/").pop().replace(".js", ""), e.jsonp({ url: r, async: false, callbackName: o, callback: l })) : e.makeAjaxRequest({ url: r, postData: m, withCredentials: this.ajaxWithCredentials, headers: this.ajaxHeaders, success: function(y) {
            var x = n(y);
            l(x);
          }, error: function(y, x) {
            var T;
            try {
              T = "HTTP " + y.status + " attempting to load TileSource: " + r;
            } catch {
              var C;
              typeof x > "u" || !x.toString ? C = "Unknown error" : C = x.toString(), T = C + " attempting to load TileSource: " + r;
            }
            e.console.error(T), s.raiseEvent("open-failed", { message: T, source: r, postData: m });
          } });
        }, supports: function(r, s) {
          return false;
        }, configure: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTileUrl: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTilePostData: function(r, s, o) {
          return null;
        }, getTileAjaxHeaders: function(r, s, o) {
          return {};
        }, getTileHashKey: function(r, s, o, l, a, u) {
          function c(h) {
            return a ? h + "+" + JSON.stringify(a) : h;
          }
          return c(typeof l != "string" ? r + "/" + s + "_" + o : l);
        }, tileExists: function(r, s, o) {
          var l = this.getNumTiles(r);
          return r >= this.minLevel && r <= this.maxLevel && s >= 0 && o >= 0 && s < l.x && o < l.y;
        }, hasTransparency: function(r, s, o, l) {
          return !!r || s.match(".png");
        }, downloadTileStart: function(r) {
          var s = r.userData, o = new Image();
          s.image = o, s.request = null;
          var l = function(a) {
            if (!o) {
              r.finish(null, s.request, "Image load failed: undefined Image instance.");
              return;
            }
            o.onload = o.onerror = o.onabort = null, r.finish(a ? null : o, s.request, a);
          };
          o.onload = function() {
            l();
          }, o.onabort = o.onerror = function() {
            l("Image load aborted.");
          }, r.loadWithAjax ? s.request = e.makeAjaxRequest({ url: r.src, withCredentials: r.ajaxWithCredentials, headers: r.ajaxHeaders, responseType: "arraybuffer", postData: r.postData, success: function(a) {
            var u;
            try {
              u = new window.Blob([a.response]);
            } catch (f) {
              var c = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (f.name === "TypeError" && c) {
                var h = new c();
                h.append(a.response), u = h.getBlob();
              }
            }
            u.size === 0 ? l("Empty image response.") : o.src = (window.URL || window.webkitURL).createObjectURL(u);
          }, error: function(a) {
            l("Image load aborted - XHR error");
          } }) : (r.crossOriginPolicy !== false && (o.crossOrigin = r.crossOriginPolicy), o.src = r.src);
        }, downloadTileAbort: function(r) {
          r.userData.request && r.userData.request.abort();
          var s = r.userData.image;
          r.userData.image && (s.onload = s.onerror = s.onabort = null);
        }, createTileCache: function(r, s, o) {
          r._data = s;
        }, destroyTileCache: function(r) {
          r._data = null, r._renderedContext = null;
        }, getTileCacheData: function(r) {
          return r._data;
        }, getTileCacheDataAsImage: function(r) {
          return r._data;
        }, getTileCacheDataAsContext2D: function(r) {
          if (!r._renderedContext) {
            var s = document.createElement("canvas");
            s.width = r._data.width, s.height = r._data.height, r._renderedContext = s.getContext("2d"), r._renderedContext.drawImage(r._data, 0, 0), r._data = null;
          }
          return r._renderedContext;
        } }, e.extend(true, e.TileSource.prototype, e.EventSource.prototype);
        function n(r) {
          var s = r.responseText, o = r.status, l, a;
          if (r) {
            if (r.status !== 200 && r.status !== 0) throw o = r.status, l = o === 404 ? "Not Found" : r.statusText, new Error(e.getString("Errors.Status", o, l));
          } else throw new Error(e.getString("Errors.Security"));
          if (s.match(/^\s*<.*/)) try {
            a = r.responseXML && r.responseXML.documentElement ? r.responseXML : e.parseXml(s);
          } catch {
            a = r.responseText;
          }
          else if (s.match(/\s*[{[].*/)) try {
            a = e.parseJSON(s);
          } catch {
            a = s;
          }
          else a = s;
          return a;
        }
        e.TileSource.determineType = function(r, s, o) {
          var l;
          for (l in i) if (l.match(/.+TileSource$/) && e.isFunction(i[l]) && e.isFunction(i[l].prototype.supports) && i[l].prototype.supports.call(r, s, o)) return i[l];
          return e.console.error("No TileSource was able to open %s %s", o, s), null;
        };
      })(i), (function(e) {
        e.DziTileSource = function(s, o, l, a, u, c, h, f, m) {
          var v, y, x, T;
          if (e.isPlainObject(s) ? T = s : T = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4], fileFormat: arguments[5], displayRects: arguments[6], minLevel: arguments[7], maxLevel: arguments[8] }, this._levelRects = {}, this.tilesUrl = T.tilesUrl, this.fileFormat = T.fileFormat, this.displayRects = T.displayRects, this.displayRects) for (v = this.displayRects.length - 1; v >= 0; v--) for (y = this.displayRects[v], x = y.minLevel; x <= y.maxLevel; x++) this._levelRects[x] || (this._levelRects[x] = []), this._levelRects[x].push(y);
          e.TileSource.apply(this, [T]);
        }, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, { supports: function(s, o) {
          var l;
          return s.Image ? l = s.Image.xmlns : s.documentElement && (s.documentElement.localName === "Image" || s.documentElement.tagName === "Image") && (l = s.documentElement.namespaceURI), l = (l || "").toLowerCase(), l.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || l.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        }, configure: function(s, o, l) {
          var a;
          return e.isPlainObject(s) ? a = r(this, s) : a = n(this, s), o && !a.tilesUrl && (a.tilesUrl = o.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"), o.search(/\.(dzi|xml|js)\?/) !== -1 ? a.queryParams = o.match(/\?.*/) : a.queryParams = ""), a;
        }, getTileUrl: function(s, o, l) {
          return [this.tilesUrl, s, "/", o, "_", l, ".", this.fileFormat, this.queryParams].join("");
        }, tileExists: function(s, o, l) {
          var a = this._levelRects[s], u, c, h, f, m, v, y;
          if (this.minLevel && s < this.minLevel || this.maxLevel && s > this.maxLevel) return false;
          if (!a || !a.length) return true;
          for (y = a.length - 1; y >= 0; y--) if (u = a[y], !(s < u.minLevel || s > u.maxLevel) && (c = this.getLevelScale(s), h = u.x * c, f = u.y * c, m = h + u.width * c, v = f + u.height * c, h = Math.floor(h / this._tileWidth), f = Math.floor(f / this._tileWidth), m = Math.ceil(m / this._tileWidth), v = Math.ceil(v / this._tileWidth), h <= o && o < m && f <= l && l < v)) return true;
          return false;
        } });
        function n(s, o) {
          if (!o || !o.documentElement) throw new Error(e.getString("Errors.Xml"));
          var l = o.documentElement, a = l.localName || l.tagName, u = o.documentElement.namespaceURI, c = null, h = [], f, m, v, y, x;
          if (a === "Image") try {
            if (y = l.getElementsByTagName("Size")[0], y === void 0 && (y = l.getElementsByTagNameNS(u, "Size")[0]), c = { Image: { xmlns: "http://schemas.microsoft.com/deepzoom/2008", Url: l.getAttribute("Url"), Format: l.getAttribute("Format"), DisplayRect: null, Overlap: parseInt(l.getAttribute("Overlap"), 10), TileSize: parseInt(l.getAttribute("TileSize"), 10), Size: { Height: parseInt(y.getAttribute("Height"), 10), Width: parseInt(y.getAttribute("Width"), 10) } } }, !e.imageFormatSupported(c.Image.Format)) throw new Error(e.getString("Errors.ImageFormat", c.Image.Format.toUpperCase()));
            for (f = l.getElementsByTagName("DisplayRect"), f === void 0 && (f = l.getElementsByTagNameNS(u, "DisplayRect")[0]), x = 0; x < f.length; x++) m = f[x], v = m.getElementsByTagName("Rect")[0], v === void 0 && (v = m.getElementsByTagNameNS(u, "Rect")[0]), h.push({ Rect: { X: parseInt(v.getAttribute("X"), 10), Y: parseInt(v.getAttribute("Y"), 10), Width: parseInt(v.getAttribute("Width"), 10), Height: parseInt(v.getAttribute("Height"), 10), MinLevel: parseInt(m.getAttribute("MinLevel"), 10), MaxLevel: parseInt(m.getAttribute("MaxLevel"), 10) } });
            return h.length && (c.Image.DisplayRect = h), r(s, c);
          } catch (H) {
            throw H instanceof Error ? H : new Error(e.getString("Errors.Dzi"));
          }
          else {
            if (a === "Collection") throw new Error(e.getString("Errors.Dzc"));
            if (a === "Error") {
              var T = l.getElementsByTagName("Message")[0], C = T.firstChild.nodeValue;
              throw new Error(C);
            }
          }
          throw new Error(e.getString("Errors.Dzi"));
        }
        function r(s, o) {
          var l = o.Image, a = l.Url, u = l.Format, c = l.Size, h = l.DisplayRect || [], f = parseInt(c.Width, 10), m = parseInt(c.Height, 10), v = parseInt(l.TileSize, 10), y = parseInt(l.Overlap, 10), x = [], T, C;
          for (C = 0; C < h.length; C++) T = h[C].Rect, x.push(new e.DisplayRect(parseInt(T.X, 10), parseInt(T.Y, 10), parseInt(T.Width, 10), parseInt(T.Height, 10), parseInt(T.MinLevel, 10), parseInt(T.MaxLevel, 10)));
          return e.extend(true, { width: f, height: m, tileSize: v, tileOverlap: y, minLevel: null, maxLevel: null, tilesUrl: a, fileFormat: u, displayRects: x }, o);
        }
      })(i), (function(e) {
        e.IIIFTileSource = function(l) {
          if (e.extend(true, this, l), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id)) throw new Error("IIIF required parameters (width, height, or id) not provided.");
          if (l.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = l.version, this.tile_width && this.tile_height) l.tileWidth = this.tile_width, l.tileHeight = this.tile_height;
          else if (this.tile_width) l.tileSize = this.tile_width;
          else if (this.tile_height) l.tileSize = this.tile_height;
          else if (this.tiles) if (this.tiles.length === 1) l.tileWidth = this.tiles[0].width, l.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
          else {
            this.scale_factors = [];
            for (var a = 0; a < this.tiles.length; a++) for (var u = 0; u < this.tiles[a].scaleFactors.length; u++) {
              var c = this.tiles[a].scaleFactors[u];
              this.scale_factors.push(c), l.tileSizePerScaleFactor[c] = { width: this.tiles[a].width, height: this.tiles[a].height || this.tiles[a].width };
            }
          }
          else if (n(l)) {
            for (var h = Math.min(this.height, this.width), f = [256, 512, 1024], m = [], v = 0; v < f.length; v++) f[v] <= h && m.push(f[v]);
            m.length > 0 ? l.tileSize = Math.max.apply(null, m) : l.tileSize = h;
          } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = true, l.levels = r(this), e.extend(true, l, { width: l.levels[l.levels.length - 1].width, height: l.levels[l.levels.length - 1].height, tileSize: Math.max(l.height, l.width), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length - 1 }), this.levels = l.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
          if (!l.maxLevel && !this.emulateLegacyImagePyramid) if (!this.scale_factors) l.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
          else {
            var y = Math.max.apply(null, this.scale_factors);
            l.maxLevel = Math.round(Math.log(y) * Math.LOG2E);
          }
          if (this.sizes) {
            var x = this.sizes.length;
            (x === l.maxLevel || x === l.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort((T, C) => T.width - C.width), x === l.maxLevel && this.levelSizes.push({ width: this.width, height: this.height }));
          }
          e.TileSource.apply(this, [l]);
        }, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, { supports: function(l, a) {
          return l.protocol && l.protocol === "http://iiif.io/api/image" || l["@context"] && (l["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || l["@context"] === "http://iiif.io/api/image/1/context.json") || l.profile && l.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || l.identifier && l.width && l.height ? true : !!(l.documentElement && l.documentElement.tagName === "info" && l.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        }, configure: function(l, a, u) {
          if (e.isPlainObject(l)) {
            if (!l["@context"]) l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = a.replace("/info.json", ""), l.version = 1;
            else {
              var h = l["@context"];
              if (Array.isArray(h)) {
                for (var f = 0; f < h.length; f++) if (typeof h[f] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(h[f]) || h[f] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                  h = h[f];
                  break;
                }
              }
              switch (h) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  l.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  l.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  l.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (l.preferredFormats) {
              for (var m = 0; m < l.preferredFormats.length; m++) if (i.imageFormatSupported(l.preferredFormats[m])) {
                l.tileFormat = l.preferredFormats[m];
                break;
              }
            }
            return l;
          } else {
            var c = s(l);
            return c["@context"] = "http://iiif.io/api/image/1.0/context.json", c["@id"] = a.replace("/info.xml", ""), c.version = 1, c;
          }
        }, getTileWidth: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileWidth.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].width : this._tileWidth;
        }, getTileHeight: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileHeight.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].height : this._tileHeight;
        }, getLevelScale: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = NaN;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (a = this.levels[l].width / this.levels[this.maxLevel].width), a;
          }
          return e.TileSource.prototype.getLevelScale.call(this, l);
        }, getNumTiles: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = this.getLevelScale(l);
            return a ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          if (this.levelSizes) {
            var u = this.levelSizes[l], c = Math.ceil(u.width / this.getTileWidth(l)), h = Math.ceil(u.height / this.getTileHeight(l));
            return new e.Point(c, h);
          } else return e.TileSource.prototype.getNumTiles.call(this, l);
        }, getTileAtPoint: function(l, a) {
          if (this.emulateLegacyImagePyramid) return new e.Point(0, 0);
          if (this.levelSizes) {
            var u = a.x >= 0 && a.x <= 1 && a.y >= 0 && a.y <= 1 / this.aspectRatio;
            e.console.assert(u, "[TileSource.getTileAtPoint] must be called with a valid point.");
            var c = this.levelSizes[l].width, h = a.x * c, f = a.y * c, m = Math.floor(h / this.getTileWidth(l)), v = Math.floor(f / this.getTileHeight(l));
            a.x >= 1 && (m = this.getNumTiles(l).x - 1);
            var y = 1e-15;
            return a.y >= 1 / this.aspectRatio - y && (v = this.getNumTiles(l).y - 1), new e.Point(m, v);
          }
          return e.TileSource.prototype.getTileAtPoint.call(this, l, a);
        }, getTileUrl: function(l, a, u) {
          if (this.emulateLegacyImagePyramid) {
            var c = null;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (c = this.levels[l].url), c;
          }
          var h = "0", f = Math.pow(0.5, this.maxLevel - l), m, v, y, x, T, C, H, k, N, Y, K, q, ee, ce, te, j;
          return this.levelSizes ? (m = this.levelSizes[l].width, v = this.levelSizes[l].height) : (m = Math.ceil(this.width * f), v = Math.ceil(this.height * f)), y = this.getTileWidth(l), x = this.getTileHeight(l), T = Math.round(y / f), C = Math.round(x / f), this.version === 1 ? te = "native." + this.tileFormat : te = "default." + this.tileFormat, m < y && v < x ? (this.version === 2 && m === this.width ? q = "full" : this.version === 3 && m === this.width && v === this.height ? q = "max" : this.version === 3 ? q = m + "," + v : q = m + ",", H = "full") : (k = a * T, N = u * C, Y = Math.min(T, this.width - k), K = Math.min(C, this.height - N), a === 0 && u === 0 && Y === this.width && K === this.height ? H = "full" : H = [k, N, Y, K].join(","), ee = Math.min(y, m - a * y), ce = Math.min(x, v - u * x), this.version === 2 && ee === this.width ? q = "full" : this.version === 3 && ee === this.width && ce === this.height ? q = "max" : this.version === 3 ? q = ee + "," + ce : q = ee + ","), j = [this._id, H, q, h, te].join("/"), j;
        }, __testonly__: { canBeTiled: n, constructLevels: r } });
        function n(l) {
          var a = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"], u = Array.isArray(l.profile) ? l.profile[0] : l.profile, c = a.indexOf(u) !== -1, h = false;
          return l.version === 2 && l.profile.length > 1 && l.profile[1].supports && (h = l.profile[1].supports.indexOf("sizeByW") !== -1), l.version === 3 && l.extraFeatures && (h = l.extraFeatures.indexOf("sizeByWh") !== -1), !c || h;
        }
        function r(l) {
          for (var a = [], u = 0; u < l.sizes.length; u++) a.push({ url: l._id + "/full/" + l.sizes[u].width + "," + (l.version === 3 ? l.sizes[u].height : "") + "/0/default." + l.tileFormat, width: l.sizes[u].width, height: l.sizes[u].height });
          return a.sort(function(c, h) {
            return c.width - h.width;
          });
        }
        function s(l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null;
          if (u === "info") try {
            return c = {}, o(a, c), c;
          } catch (h) {
            throw h instanceof Error ? h : new Error(e.getString("Errors.IIIF"));
          }
          throw new Error(e.getString("Errors.IIIF"));
        }
        function o(l, a, u) {
          var c, h;
          if (l.nodeType === 3 && u) h = l.nodeValue.trim(), h.match(/^\d*$/) && (h = Number(h)), a[u] ? (e.isArray(a[u]) || (a[u] = [a[u]]), a[u].push(h)) : a[u] = h;
          else if (l.nodeType === 1) for (c = 0; c < l.childNodes.length; c++) o(l.childNodes[c], a, l.nodeName);
        }
      })(i), (function(e) {
        e.OsmTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] }, (!a.width || !a.height) && (a.width = 65572864, a.height = 65572864), a.tileSize || (a.tileSize = 256, a.tileOverlap = 0), a.tilesUrl || (a.tilesUrl = "http://tile.openstreetmap.org/"), a.minLevel = 8, e.TileSource.apply(this, [a]);
        }, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "openstreetmaps";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          return this.tilesUrl + (n - 8) + "/" + r + "/" + s + ".png";
        } });
      })(i), (function(e) {
        e.TmsTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] };
          var u = Math.ceil(a.width / 256) * 256, c = Math.ceil(a.height / 256) * 256, h;
          u > c ? h = u / 256 : h = c / 256, a.maxLevel = Math.ceil(Math.log(h) / Math.log(2)) - 1, a.tileSize = 256, a.width = u, a.height = c, e.TileSource.apply(this, [a]);
        }, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "tiledmapservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = this.getNumTiles(n).y - 1;
          return this.tilesUrl + n + "/" + r + "/" + (o - s) + ".png";
        } });
      })(i), (function(e) {
        e.ZoomifyTileSource = function(n) {
          typeof n.tileSize > "u" && (n.tileSize = 256), typeof n.fileFormat > "u" && (n.fileFormat = "jpg", this.fileFormat = n.fileFormat);
          var r = { x: n.width, y: n.height };
          for (n.imageSizes = [{ x: n.width, y: n.height }], n.gridSize = [this._getGridSize(n.width, n.height, n.tileSize)]; parseInt(r.x, 10) > n.tileSize || parseInt(r.y, 10) > n.tileSize; ) r.x = Math.floor(r.x / 2), r.y = Math.floor(r.y / 2), n.imageSizes.push({ x: r.x, y: r.y }), n.gridSize.push(this._getGridSize(r.x, r.y, n.tileSize));
          n.imageSizes.reverse(), n.gridSize.reverse(), n.minLevel = 0, n.maxLevel = n.gridSize.length - 1, i.TileSource.apply(this, [n]);
        }, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, { _getGridSize: function(n, r, s) {
          return { x: Math.ceil(n / s), y: Math.ceil(r / s) };
        }, _calculateAbsoluteTileNumber: function(n, r, s) {
          for (var o = 0, l = {}, a = 0; a < n; a++) l = this.gridSize[a], o += l.x * l.y;
          return l = this.gridSize[n], o += l.x * s + r, o;
        }, supports: function(n, r) {
          return n.type && n.type === "zoomifytileservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = 0, l = this._calculateAbsoluteTileNumber(n, r, s);
          return o = Math.floor(l / 256), this.tilesUrl + "TileGroup" + o + "/" + n + "-" + r + "-" + s + "." + this.fileFormat;
        } });
      })(i), (function(e) {
        e.LegacyTileSource = function(o) {
          var l, a, u;
          e.isArray(o) && (l = { type: "legacy-image-pyramid", levels: o }), l.levels = n(l.levels), l.levels.length > 0 ? (a = l.levels[l.levels.length - 1].width, u = l.levels[l.levels.length - 1].height) : (a = 0, u = 0, e.console.error("No supported image formats found")), e.extend(true, l, { width: a, height: u, tileSize: Math.max(u, a), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length > 0 ? l.levels.length - 1 : 0 }), e.TileSource.apply(this, [l]), this.levels = l.levels;
        }, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, { supports: function(o, l) {
          return o.type && o.type === "legacy-image-pyramid" || o.documentElement && o.documentElement.getAttribute("type") === "legacy-image-pyramid";
        }, configure: function(o, l, a) {
          var u;
          return e.isPlainObject(o) ? u = s(this, o) : u = r(this, o), u;
        }, getLevelScale: function(o) {
          var l = NaN;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (l = this.levels[o].width / this.levels[this.maxLevel].width), l;
        }, getNumTiles: function(o) {
          var l = this.getLevelScale(o);
          return l ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(o, l, a) {
          var u = null;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (u = this.levels[o].url), u;
        } });
        function n(o) {
          var l = [], a, u;
          for (u = 0; u < o.length; u++) a = o[u], a.height && a.width && a.url ? l.push({ url: a.url, width: Number(a.width), height: Number(a.height) }) : e.console.error("Unsupported image format: %s", a.url ? a.url : "<no URL>");
          return l.sort(function(c, h) {
            return c.height - h.height;
          });
        }
        function r(o, l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null, h = [], f, m;
          if (u === "image") try {
            for (c = { type: a.getAttribute("type"), levels: [] }, h = a.getElementsByTagName("level"), m = 0; m < h.length; m++) f = h[m], c.levels.push({ url: f.getAttribute("url"), width: parseInt(f.getAttribute("width"), 10), height: parseInt(f.getAttribute("height"), 10) });
            return s(o, c);
          } catch (v) {
            throw v instanceof Error ? v : new Error("Unknown error parsing Legacy Image Pyramid XML.");
          }
          else {
            if (u === "collection") throw new Error("Legacy Image Pyramid Collections not yet supported.");
            if (u === "error") throw new Error("Error: " + l);
          }
          throw new Error("Unknown element " + u);
        }
        function s(o, l) {
          return l.levels;
        }
      })(i), (function(e) {
        e.ImageTileSource = function(n) {
          n = e.extend({ buildPyramid: true, crossOriginPolicy: false, ajaxWithCredentials: false }, n), e.TileSource.apply(this, [n]);
        }, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "image";
        }, configure: function(n, r, s) {
          return n;
        }, getImageInfo: function(n) {
          var r = this._image = new Image(), s = this;
          this.crossOriginPolicy && (r.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (r.useCredentials = this.ajaxWithCredentials), e.addEvent(r, "load", function() {
            s.width = r.naturalWidth, s.height = r.naturalHeight, s.aspectRatio = s.width / s.height, s.dimensions = new e.Point(s.width, s.height), s._tileWidth = s.width, s._tileHeight = s.height, s.tileOverlap = 0, s.minLevel = 0, s.levels = s._buildLevels(), s.maxLevel = s.levels.length - 1, s.ready = true, s.raiseEvent("ready", { tileSource: s });
          }), e.addEvent(r, "error", function() {
            s.raiseEvent("open-failed", { message: "Error loading image at " + n, source: n });
          }), r.src = n;
        }, getLevelScale: function(n) {
          var r = NaN;
          return n >= this.minLevel && n <= this.maxLevel && (r = this.levels[n].width / this.levels[this.maxLevel].width), r;
        }, getNumTiles: function(n) {
          var r = this.getLevelScale(n);
          return r ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].url), o;
        }, getContext2D: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].context2D), o;
        }, destroy: function(n) {
          this._freeupCanvasMemory(n);
        }, _buildLevels: function() {
          var n = [{ url: this._image.src, width: this._image.naturalWidth, height: this._image.naturalHeight }];
          if (!this.buildPyramid || !e.supportsCanvas) return delete this._image, n;
          var r = this._image.naturalWidth, s = this._image.naturalHeight, o = document.createElement("canvas"), l = o.getContext("2d");
          if (o.width = r, o.height = s, l.drawImage(this._image, 0, 0, r, s), n[0].context2D = l, delete this._image, e.isCanvasTainted(o)) return n;
          for (; r >= 2 && s >= 2; ) {
            r = Math.floor(r / 2), s = Math.floor(s / 2);
            var a = document.createElement("canvas"), u = a.getContext("2d");
            a.width = r, a.height = s, u.drawImage(o, 0, 0, r, s), n.splice(0, 0, { context2D: u, width: r, height: s }), o = a, l = u;
          }
          return n;
        }, _freeupCanvasMemory: function(n) {
          for (var r = 0; r < this.levels.length; r++) this.levels[r].context2D && (this.levels[r].context2D.canvas.height = 0, this.levels[r].context2D.canvas.width = 0, n && n.raiseEvent("image-unloaded", { context2D: this.levels[r].context2D }));
        } });
      })(i), (function(e) {
        e.TileSourceCollection = function(n, r, s, o) {
          e.console.error("TileSourceCollection is deprecated; use World instead");
        };
      })(i), (function(e) {
        e.ButtonState = { REST: 0, GROUP: 1, HOVER: 2, DOWN: 3 }, e.Button = function(u) {
          var c = this;
          e.EventSource.call(this), e.extend(true, this, { tooltip: null, srcRest: null, srcGroup: null, srcHover: null, srcDown: null, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, fadeDelay: 0, fadeLength: 2e3, onPress: null, onRelease: null, onClick: null, onEnter: null, onExit: null, onFocus: null, onBlur: null, userData: null }, u), this.element = u.element || e.makeNeutralElement("div"), u.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = false, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({ userData: "Button.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(h) {
            h.insideElementPressed ? (l(c, e.ButtonState.DOWN), c.raiseEvent("enter", { originalEvent: h.originalEvent })) : h.buttonDownAny || l(c, e.ButtonState.HOVER);
          }, focusHandler: function(h) {
            c.tracker.enterHandler(h), c.raiseEvent("focus", { originalEvent: h.originalEvent });
          }, leaveHandler: function(h) {
            a(c, e.ButtonState.GROUP), h.insideElementPressed && c.raiseEvent("exit", { originalEvent: h.originalEvent });
          }, blurHandler: function(h) {
            c.tracker.leaveHandler(h), c.raiseEvent("blur", { originalEvent: h.originalEvent });
          }, pressHandler: function(h) {
            l(c, e.ButtonState.DOWN), c.raiseEvent("press", { originalEvent: h.originalEvent });
          }, releaseHandler: function(h) {
            h.insideElementPressed && h.insideElementReleased ? (a(c, e.ButtonState.HOVER), c.raiseEvent("release", { originalEvent: h.originalEvent })) : h.insideElementPressed ? a(c, e.ButtonState.GROUP) : l(c, e.ButtonState.HOVER);
          }, clickHandler: function(h) {
            h.quick && c.raiseEvent("click", { originalEvent: h.originalEvent });
          }, keyHandler: function(h) {
            h.keyCode === 13 ? (c.raiseEvent("click", { originalEvent: h.originalEvent }), c.raiseEvent("release", { originalEvent: h.originalEvent }), h.preventDefault = true) : h.preventDefault = false;
          } }), a(this, e.ButtonState.REST);
        }, e.extend(e.Button.prototype, e.EventSource.prototype, { notifyGroupEnter: function() {
          l(this, e.ButtonState.GROUP);
        }, notifyGroupExit: function() {
          a(this, e.ButtonState.REST);
        }, disable: function() {
          this.notifyGroupExit(), this.element.disabled = true, this.tracker.setTracking(false), e.setElementOpacity(this.element, 0.2, true);
        }, enable: function() {
          this.element.disabled = false, this.tracker.setTracking(true), e.setElementOpacity(this.element, 1, true), this.notifyGroupEnter();
        }, destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        } });
        function n(u) {
          e.requestAnimationFrame(function() {
            r(u);
          });
        }
        function r(u) {
          var c, h, f;
          u.shouldFade && (c = e.now(), h = c - u.fadeBeginTime, f = 1 - h / u.fadeLength, f = Math.min(1, f), f = Math.max(0, f), u.imgGroup && e.setElementOpacity(u.imgGroup, f, true), f > 0 && n(u));
        }
        function s(u) {
          u.shouldFade = true, u.fadeBeginTime = e.now() + u.fadeDelay, window.setTimeout(function() {
            n(u);
          }, u.fadeDelay);
        }
        function o(u) {
          u.shouldFade = false, u.imgGroup && e.setElementOpacity(u.imgGroup, 1, true);
        }
        function l(u, c) {
          u.element.disabled || (c >= e.ButtonState.GROUP && u.currentState === e.ButtonState.REST && (o(u), u.currentState = e.ButtonState.GROUP), c >= e.ButtonState.HOVER && u.currentState === e.ButtonState.GROUP && (u.imgHover && (u.imgHover.style.visibility = ""), u.currentState = e.ButtonState.HOVER), c >= e.ButtonState.DOWN && u.currentState === e.ButtonState.HOVER && (u.imgDown && (u.imgDown.style.visibility = ""), u.currentState = e.ButtonState.DOWN));
        }
        function a(u, c) {
          u.element.disabled || (c <= e.ButtonState.HOVER && u.currentState === e.ButtonState.DOWN && (u.imgDown && (u.imgDown.style.visibility = "hidden"), u.currentState = e.ButtonState.HOVER), c <= e.ButtonState.GROUP && u.currentState === e.ButtonState.HOVER && (u.imgHover && (u.imgHover.style.visibility = "hidden"), u.currentState = e.ButtonState.GROUP), c <= e.ButtonState.REST && u.currentState === e.ButtonState.GROUP && (s(u), u.currentState = e.ButtonState.REST));
        }
      })(i), (function(e) {
        e.ButtonGroup = function(n) {
          e.extend(true, this, { buttons: [], clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, labelText: "" }, n);
          var r = this.buttons.concat([]), s = this, o;
          if (this.element = n.element || e.makeNeutralElement("div"), !n.group) for (this.element.style.display = "inline-block", o = 0; o < r.length; o++) this.element.appendChild(r[o].element);
          e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({ userData: "ButtonGroup.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(l) {
            var a;
            for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupEnter();
          }, leaveHandler: function(l) {
            var a;
            if (!l.insideElementPressed) for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupExit();
          } });
        }, e.ButtonGroup.prototype = { addButton: function(n) {
          this.buttons.push(n), this.element.appendChild(n.element);
        }, emulateEnter: function() {
          this.tracker.enterHandler({ eventSource: this.tracker });
        }, emulateLeave: function() {
          this.tracker.leaveHandler({ eventSource: this.tracker });
        }, destroy: function() {
          for (; this.buttons.length; ) {
            var n = this.buttons.pop();
            this.element.removeChild(n.element), n.destroy();
          }
          this.tracker.destroy(), this.element = null;
        } };
      })(i), (function(e) {
        e.Rect = function(n, r, s, o, l) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0, this.width = typeof s == "number" ? s : 0, this.height = typeof o == "number" ? o : 0, this.degrees = typeof l == "number" ? l : 0, this.degrees = e.positiveModulo(this.degrees, 360);
          var a, u;
          this.degrees >= 270 ? (a = this.getTopRight(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 270) : this.degrees >= 180 ? (a = this.getBottomRight(), this.x = a.x, this.y = a.y, this.degrees -= 180) : this.degrees >= 90 && (a = this.getBottomLeft(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 90);
        }, e.Rect.fromSummits = function(n, r, s) {
          var o = n.distanceTo(r), l = n.distanceTo(s), a = r.minus(n), u = Math.atan(a.y / a.x);
          return a.x < 0 ? u += Math.PI : a.y < 0 && (u += 2 * Math.PI), new e.Rect(n.x, n.y, o, l, u / Math.PI * 180);
        }, e.Rect.prototype = { clone: function() {
          return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
        }, getAspectRatio: function() {
          return this.width / this.height;
        }, getTopLeft: function() {
          return new e.Point(this.x, this.y);
        }, getBottomRight: function() {
          return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getTopRight: function() {
          return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
        }, getBottomLeft: function() {
          return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getCenter: function() {
          return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft());
        }, getSize: function() {
          return new e.Point(this.width, this.height);
        }, equals: function(n) {
          return n instanceof e.Rect && this.x === n.x && this.y === n.y && this.width === n.width && this.height === n.height && this.degrees === n.degrees;
        }, times: function(n) {
          return new e.Rect(this.x * n, this.y * n, this.width * n, this.height * n, this.degrees);
        }, translate: function(n) {
          return new e.Rect(this.x + n.x, this.y + n.y, this.width, this.height, this.degrees);
        }, union: function(n) {
          var r = this.getBoundingBox(), s = n.getBoundingBox(), o = Math.min(r.x, s.x), l = Math.min(r.y, s.y), a = Math.max(r.x + r.width, s.x + s.width), u = Math.max(r.y + r.height, s.y + s.height);
          return new e.Rect(o, l, a - o, u - l);
        }, intersection: function(n) {
          var r = 1e-10, s = [], o = this.getTopLeft();
          n.containsPoint(o, r) && s.push(o);
          var l = this.getTopRight();
          n.containsPoint(l, r) && s.push(l);
          var a = this.getBottomLeft();
          n.containsPoint(a, r) && s.push(a);
          var u = this.getBottomRight();
          n.containsPoint(u, r) && s.push(u);
          var c = n.getTopLeft();
          this.containsPoint(c, r) && s.push(c);
          var h = n.getTopRight();
          this.containsPoint(h, r) && s.push(h);
          var f = n.getBottomLeft();
          this.containsPoint(f, r) && s.push(f);
          var m = n.getBottomRight();
          this.containsPoint(m, r) && s.push(m);
          for (var v = this._getSegments(), y = n._getSegments(), x = 0; x < v.length; x++) for (var T = v[x], C = 0; C < y.length; C++) {
            var H = y[C], k = N(T[0], T[1], H[0], H[1]);
            k && s.push(k);
          }
          function N(j, ne, he, ye) {
            var me = ne.minus(j), pe = ye.minus(he), ae = -pe.x * me.y + me.x * pe.y;
            if (ae === 0) return null;
            var Ae = (me.x * (j.y - he.y) - me.y * (j.x - he.x)) / ae, Re = (pe.x * (j.y - he.y) - pe.y * (j.x - he.x)) / ae;
            return -r <= Ae && Ae <= 1 - r && -r <= Re && Re <= 1 - r ? new e.Point(j.x + Re * me.x, j.y + Re * me.y) : null;
          }
          if (s.length === 0) return null;
          for (var Y = s[0].x, K = s[0].x, q = s[0].y, ee = s[0].y, ce = 1; ce < s.length; ce++) {
            var te = s[ce];
            te.x < Y && (Y = te.x), te.x > K && (K = te.x), te.y < q && (q = te.y), te.y > ee && (ee = te.y);
          }
          return new e.Rect(Y, q, K - Y, ee - q);
        }, _getSegments: function() {
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight();
          return [[n, r], [r, o], [o, s], [s, n]];
        }, rotate: function(n, r) {
          if (n = e.positiveModulo(n, 360), n === 0) return this.clone();
          r = r || this.getCenter();
          var s = this.getTopLeft().rotate(n, r), o = this.getTopRight().rotate(n, r), l = o.minus(s);
          l = l.apply(function(u) {
            var c = 1e-15;
            return Math.abs(u) < c ? 0 : u;
          });
          var a = Math.atan(l.y / l.x);
          return l.x < 0 ? a += Math.PI : l.y < 0 && (a += 2 * Math.PI), new e.Rect(s.x, s.y, this.width, this.height, a / Math.PI * 180);
        }, getBoundingBox: function() {
          if (this.degrees === 0) return this.clone();
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight(), l = Math.min(n.x, r.x, s.x, o.x), a = Math.max(n.x, r.x, s.x, o.x), u = Math.min(n.y, r.y, s.y, o.y), c = Math.max(n.y, r.y, s.y, o.y);
          return new e.Rect(l, u, a - l, c - u);
        }, getIntegerBoundingBox: function() {
          var n = this.getBoundingBox(), r = Math.floor(n.x), s = Math.floor(n.y), o = Math.ceil(n.width + n.x - r), l = Math.ceil(n.height + n.y - s);
          return new e.Rect(r, s, o, l);
        }, containsPoint: function(n, r) {
          r = r || 0;
          var s = this.getTopLeft(), o = this.getTopRight(), l = this.getBottomLeft(), a = o.minus(s), u = l.minus(s);
          return (n.x - s.x) * a.x + (n.y - s.y) * a.y >= -r && (n.x - o.x) * a.x + (n.y - o.y) * a.y <= r && (n.x - s.x) * u.x + (n.y - s.y) * u.y >= -r && (n.x - l.x) * u.x + (n.y - l.y) * u.y <= r;
        }, toString: function() {
          return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
        } };
      })(i), (function(e) {
        var n = {};
        e.ReferenceStrip = function(f) {
          var m = this, v = f.viewer, y = e.getElementSize(v.element), x, T, C;
          for (f.id || (f.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = f.id, this.element.className = "referencestrip"), f = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio, position: e.DEFAULT_SETTINGS.referenceStripPosition, scroll: e.DEFAULT_SETTINGS.referenceStripScroll, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold }, f, { element: this.element }), e.extend(this, f), n[this.id] = { animating: false }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, T = this.element.style, T.marginTop = "0px", T.marginRight = "0px", T.marginBottom = "0px", T.marginLeft = "0px", T.left = "0px", T.bottom = "0px", T.border = "0px", T.background = "#000", T.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = v, this.tracker = new e.MouseTracker({ userData: "ReferenceStrip.tracker", element: this.element, clickHandler: e.delegate(this, r), dragHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), enterHandler: e.delegate(this, a), leaveHandler: e.delegate(this, u), keyDownHandler: e.delegate(this, c), keyHandler: e.delegate(this, h), preProcessEventHandler: function(H) {
            H.eventType === "wheel" && (H.preventDefault = true);
          } }), f.width && f.height ? (this.element.style.width = f.width + "px", this.element.style.height = f.height + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : f.scroll === "horizontal" ? (this.element.style.width = y.x * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.height = y.y * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : (this.element.style.height = y.y * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.width = y.x * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })), this.panelWidth = y.x * this.sizeRatio + 8, this.panelHeight = y.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, C = 0; C < v.tileSources.length; C++) x = e.makeNeutralElement("div"), x.id = this.element.id + "-" + C, x.style.width = m.panelWidth + "px", x.style.height = m.panelHeight + "px", x.style.display = "inline", x.style.float = "left", x.style.cssFloat = "left", x.style.padding = "2px", e.setElementTouchActionNone(x), e.setElementPointerEventsNone(x), this.element.appendChild(x), x.activePanel = false, this.panels.push(x);
          l(this, this.scroll === "vertical" ? y.y : y.x, 0), this.setFocus(0);
        }, e.ReferenceStrip.prototype = { setFocus: function(f) {
          var m = this.element.querySelector("#" + this.element.id + "-" + f), v = e.getElementSize(this.viewer.canvas), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = -Number(this.element.style.marginLeft.replace("px", "")), C = -Number(this.element.style.marginTop.replace("px", "")), H;
          this.currentSelected !== m && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = m, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (H = Number(f) * (this.panelWidth + 3), H > T + v.x - this.panelWidth ? (H = Math.min(H, y - v.x), this.element.style.marginLeft = -H + "px", l(this, v.x, -H)) : H < T && (H = Math.max(0, H - v.x / 2), this.element.style.marginLeft = -H + "px", l(this, v.x, -H))) : (H = Number(f) * (this.panelHeight + 3), H > C + v.y - this.panelHeight ? (H = Math.min(H, x - v.y), this.element.style.marginTop = -H + "px", l(this, v.y, -H)) : H < C && (H = Math.max(0, H - v.y / 2), this.element.style.marginTop = -H + "px", l(this, v.y, -H))), this.currentPage = f, a.call(this, { eventSource: this.tracker }));
        }, update: function() {
          return !!n[this.id].animating;
        }, destroy: function() {
          if (this.miniViewers) for (var f in this.miniViewers) this.miniViewers[f].destroy();
          this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
        } };
        function r(f) {
          if (f.quick) {
            var m;
            this.scroll === "horizontal" ? m = Math.floor(f.position.x / (this.panelWidth + 4)) : m = Math.floor(f.position.y / this.panelHeight), this.viewer.goToPage(m);
          }
          this.element.focus();
        }
        function s(f) {
          if (this.dragging = true, this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? -f.delta.x > 0 ? m > -(y - T.x) && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, T.x, m + f.delta.x * 2)) : -f.delta.x < 0 && m < 0 && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, T.x, m + f.delta.x * 2)) : -f.delta.y > 0 ? v > -(x - T.y) && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, T.y, v + f.delta.y * 2)) : -f.delta.y < 0 && v < 0 && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, T.y, v + f.delta.y * 2));
          }
        }
        function o(f) {
          if (this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? f.scroll > 0 ? m > -(y - T.x) && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, T.x, m - f.scroll * 60)) : f.scroll < 0 && m < 0 && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, T.x, m - f.scroll * 60)) : f.scroll < 0 ? v > T.y - x && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, T.y, v + f.scroll * 60)) : f.scroll > 0 && v < 0 && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, T.y, v + f.scroll * 60)), f.preventDefault = true;
          }
        }
        function l(f, m, v) {
          var y, x, T, C, H, k;
          for (f.scroll === "horizontal" ? y = f.panelWidth : y = f.panelHeight, x = Math.ceil(m / y) + 5, T = Math.ceil((Math.abs(v) + m) / y) + 1, x = T - x, x = x < 0 ? 0 : x, H = x; H < T && H < f.panels.length; H++) if (k = f.panels[H], !k.activePanel) {
            var N, Y = f.viewer.tileSources[H];
            Y.referenceStripThumbnailUrl ? N = { type: "image", url: Y.referenceStripThumbnailUrl } : N = Y, C = new e.Viewer({ id: k.id, tileSources: [N], element: k, navigatorSizeRatio: f.sizeRatio, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: 0, loadTilesWithAjax: f.viewer.loadTilesWithAjax, ajaxHeaders: f.viewer.ajaxHeaders, drawer: "canvas" }), e.setElementPointerEventsNone(C.canvas), e.setElementPointerEventsNone(C.container), C.innerTracker.setTracking(false), C.outerTracker.setTracking(false), f.miniViewers[k.id] = C, k.activePanel = true;
          }
        }
        function a(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "0px" : m.style.marginLeft = "0px";
        }
        function u(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "-" + e.getElementSize(m).y / 2 + "px" : m.style.marginLeft = "-" + e.getElementSize(m).x / 2 + "px";
        }
        function c(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 38:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 40:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 37:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 39:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
        function h(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 61:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 45:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 48:
            case 119:
            case 87:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 115:
            case 83:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 97:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 100:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
      })(i), (function(e) {
        e.DisplayRect = function(n, r, s, o, l, a) {
          e.Rect.apply(this, [n, r, s, o]), this.minLevel = l, this.maxLevel = a;
        }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
      })(i), (function(e) {
        e.Spring = function(r) {
          var s = arguments;
          typeof r != "object" && (r = { initial: s.length && typeof s[0] == "number" ? s[0] : void 0, springStiffness: s.length > 1 ? s[1].springStiffness : 5, animationTime: s.length > 1 ? s[1].animationTime : 1.5 }), e.console.assert(typeof r.springStiffness == "number" && r.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert(typeof r.animationTime == "number" && r.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), r.exponential && (this._exponential = true, delete r.exponential), e.extend(true, this, r), this.current = { value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1, time: e.now() }, e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = { value: this.current.value, time: this.current.time }, this.target = { value: this.current.value, time: this.current.time }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, e.Spring.prototype = { resetTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = r, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, springTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = r, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, shiftBy: function(r) {
          this.start.value += r, this.target.value += r, this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, setExponential: function(r) {
          this._exponential = r, this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, update: function() {
          this.current.time = e.now();
          let r, s;
          if (this._exponential ? (r = this.start._logValue, s = this.target._logValue) : (r = this.start.value, s = this.target.value), this.current.time >= this.target.time) this.current.value = this.target.value;
          else {
            let o = r + (s - r) * n(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time));
            this._exponential ? this.current.value = Math.exp(o) : this.current.value = o;
          }
          return this.current.value !== this.target.value;
        }, isAtTargetValue: function() {
          return this.current.value === this.target.value;
        } };
        function n(r, s) {
          return (1 - Math.exp(r * -s)) / (1 - Math.exp(-r));
        }
      })(i), (function(e) {
        e.ImageJob = function(r) {
          e.extend(true, this, { timeout: e.DEFAULT_SETTINGS.timeout, jobId: null, tries: 0 }, r), this.data = null, this.userData = {}, this.errorMsg = null;
        }, e.ImageJob.prototype = { start: function() {
          this.tries++;
          var r = this, s = this.abort;
          this.jobId = window.setTimeout(function() {
            r.finish(null, null, "Image load exceeded timeout (" + r.timeout + " ms)");
          }, this.timeout), this.abort = function() {
            r.source.downloadTileAbort(r), typeof s == "function" && s();
          }, this.source.downloadTileStart(this);
        }, finish: function(r, s, o) {
          this.data = r, this.request = s, this.errorMsg = o, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
        } }, e.ImageLoader = function(r) {
          e.extend(true, this, { jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit, timeout: e.DEFAULT_SETTINGS.timeout, jobQueue: [], failedTiles: [], jobsInProgress: 0 }, r);
        }, e.ImageLoader.prototype = { addJob: function(r) {
          if (!r.source) {
            e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
            var s = e.TileSource.prototype;
            r.source = { downloadTileStart: s.downloadTileStart, downloadTileAbort: s.downloadTileAbort };
          }
          var o = this, l = function(c) {
            n(o, c, r.callback);
          }, a = { src: r.src, tile: r.tile || {}, source: r.source, loadWithAjax: r.loadWithAjax, ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null, crossOriginPolicy: r.crossOriginPolicy, ajaxWithCredentials: r.ajaxWithCredentials, postData: r.postData, callback: l, abort: r.abort, timeout: this.timeout }, u = new e.ImageJob(a);
          !this.jobLimit || this.jobsInProgress < this.jobLimit ? (u.start(), this.jobsInProgress++) : this.jobQueue.push(u);
        }, clear: function() {
          for (var r = 0; r < this.jobQueue.length; r++) {
            var s = this.jobQueue[r];
            typeof s.abort == "function" && s.abort();
          }
          this.jobQueue = [];
        } };
        function n(r, s, o) {
          s.errorMsg !== "" && (s.data === null || s.data === void 0) && s.tries < 1 + r.tileRetryMax && r.failedTiles.push(s);
          var l;
          r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (l = r.jobQueue.shift(), l.start(), r.jobsInProgress++), r.tileRetryMax > 0 && r.jobQueue.length === 0 && (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.failedTiles.length > 0 && (l = r.failedTiles.shift(), setTimeout(function() {
            l.start();
          }, r.tileRetryDelay), r.jobsInProgress++), o(s.data, s.errorMsg, s.request);
        }
      })(i), (function(e) {
        e.Tile = function(n, r, s, o, l, a, u, c, h, f, m, v) {
          this.level = n, this.x = r, this.y = s, this.bounds = o, this.positionedBounds = new i.Rect(o.x, o.y, o.width, o.height), this.sourceBounds = f, this.exists = l, this._url = a, this.postData = m, this.context2D = u, this.loadWithAjax = c, this.ajaxHeaders = h, v === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), v = e.TileSource.prototype.getTileHashKey(n, r, s, a, h, m)), this.cacheKey = v, this.loaded = false, this.loading = false, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = false, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = false, this.beingDrawn = false, this.lastTouchTime = 0, this.isRightMost = false, this.isBottomMost = false;
        }, e.Tile.prototype = { toString: function() {
          return this.level + "/" + this.x + "_" + this.y;
        }, _hasTransparencyChannel: function() {
          return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
        }, get image() {
          return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
        }, get url() {
          return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
        }, getImage: function() {
          return this.cacheImageRecord.getImage();
        }, getUrl: function() {
          return typeof this._url == "function" ? this._url() : this._url;
        }, getCanvasContext: function() {
          return this.context2D || this.cacheImageRecord && this.cacheImageRecord.getRenderedContext();
        }, getScaleForEdgeSmoothing: function() {
          var n;
          if (this.cacheImageRecord) n = this.cacheImageRecord.getRenderedContext();
          else if (this.context2D) n = this.context2D;
          else return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
          return n.canvas.width / (this.size.x * e.pixelDensityRatio);
        }, getTranslationForEdgeSmoothing: function(n, r, s) {
          var o = Math.max(1, Math.ceil((s.x - r.x) / 2)), l = Math.max(1, Math.ceil((s.y - r.y) / 2));
          return new e.Point(o, l).minus(this.position.times(e.pixelDensityRatio).times(n || 1).apply(function(a) {
            return a % 1;
          }));
        }, unload: function() {
          this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = false, this.loading = false;
        } };
      })(i), (function(e) {
        e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({ NO_ROTATION: 1, EXACT: 2, BOUNDING_BOX: 3 }), e.Overlay = function(n, r, s) {
          var o;
          e.isPlainObject(n) ? o = n : o = { element: n, location: r, placement: s }, this.elementWrapper = document.createElement("div"), this.element = o.element, this.elementWrapper.appendChild(this.element), this.element.id ? this.elementWrapper.id = "overlay-wrapper-" + this.element.id : this.elementWrapper.id = "overlay-wrapper", this.style = this.elementWrapper.style, this._init(o);
        }, e.Overlay.prototype = { _init: function(n) {
          this.location = n.location, this.placement = n.placement === void 0 ? e.Placement.TOP_LEFT : n.placement, this.onDraw = n.onDraw, this.checkResize = n.checkResize === void 0 ? true : n.checkResize, this.width = n.width === void 0 ? null : n.width, this.height = n.height === void 0 ? null : n.height, this.rotationMode = n.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location;
        }, adjust: function(n, r) {
          var s = e.Placement.properties[this.placement];
          s && (s.isHorizontallyCentered ? n.x -= r.x / 2 : s.isRight && (n.x -= r.x), s.isVerticallyCentered ? n.y -= r.y / 2 : s.isBottom && (n.y -= r.y));
        }, destroy: function() {
          var n = this.elementWrapper, r = this.style;
          n.parentNode && (n.parentNode.removeChild(n), n.prevElementParent && (r.display = "none", document.body.appendChild(n))), this.onDraw = null, r.top = "", r.left = "", r.position = "", this.width !== null && (r.width = ""), this.height !== null && (r.height = "");
          var s = e.getCssPropertyWithVendorPrefix("transformOrigin"), o = e.getCssPropertyWithVendorPrefix("transform");
          s && o && (r[s] = "", r[o] = "");
        }, drawHTML: function(n, r) {
          var s = this.elementWrapper;
          s.parentNode !== n && (s.prevElementParent = s.parentNode, s.prevNextSibling = s.nextSibling, n.appendChild(s), this.style.position = "absolute", this.size = e.getElementSize(this.elementWrapper));
          var o = this._getOverlayPositionAndSize(r), l = o.position, a = this.size = o.size, u = "";
          r.overlayPreserveContentDirection && (u = r.flipped ? " scaleX(-1)" : " scaleX(1)");
          var c = r.flipped ? -o.rotate : o.rotate, h = r.flipped ? " scaleX(-1)" : "";
          if (this.onDraw) this.onDraw(l, a, this.element);
          else {
            var f = this.style, m = this.element.style;
            m.display = "block", f.left = l.x + "px", f.top = l.y + "px", this.width !== null && (m.width = a.x + "px"), this.height !== null && (m.height = a.y + "px");
            var v = e.getCssPropertyWithVendorPrefix("transformOrigin"), y = e.getCssPropertyWithVendorPrefix("transform");
            v && y && (c && !r.flipped ? (m[y] = "", f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)") : !c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = h) : c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)" + h) : (m[y] = "", f[v] = "", f[y] = "")), f.display = "flex";
          }
        }, _getOverlayPositionAndSize: function(n) {
          var r = n.pixelFromPoint(this.location, true), s = this._getSizeInPixels(n);
          this.adjust(r, s);
          var o = 0;
          if (n.getRotation(true) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION) if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
            var l = new e.Rect(r.x, r.y, s.x, s.y), a = this._getBoundingBox(l, n.getRotation(true));
            r = a.getTopLeft(), s = a.getSize();
          } else o = n.getRotation(true);
          return n.flipped && (r.x = n.getContainerSize().x - r.x), { position: r, size: s, rotate: o };
        }, _getSizeInPixels: function(n) {
          var r = this.size.x, s = this.size.y;
          if (this.width !== null || this.height !== null) {
            var o = n.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), true);
            this.width !== null && (r = o.x), this.height !== null && (s = o.y);
          }
          if (this.checkResize && (this.width === null || this.height === null)) {
            var l = this.size = e.getElementSize(this.elementWrapper);
            this.width === null && (r = l.x), this.height === null && (s = l.y);
          }
          return new e.Point(r, s);
        }, _getBoundingBox: function(n, r) {
          var s = this._getPlacementPoint(n);
          return n.rotate(r, s).getBoundingBox();
        }, _getPlacementPoint: function(n) {
          var r = new e.Point(n.x, n.y), s = e.Placement.properties[this.placement];
          return s && (s.isHorizontallyCentered ? r.x += n.width / 2 : s.isRight && (r.x += n.width), s.isVerticallyCentered ? r.y += n.height / 2 : s.isBottom && (r.y += n.height)), r;
        }, _getTransformOrigin: function() {
          var n = "", r = e.Placement.properties[this.placement];
          return r && (r.isLeft ? n = "left" : r.isRight && (n = "right"), r.isTop ? n += " top" : r.isBottom && (n += " bottom")), n;
        }, update: function(n, r) {
          var s = e.isPlainObject(n) ? n : { location: n, placement: r };
          this._init({ location: s.location || this.location, placement: s.placement !== void 0 ? s.placement : this.placement, onDraw: s.onDraw || this.onDraw, checkResize: s.checkResize || this.checkResize, width: s.width !== void 0 ? s.width : this.width, height: s.height !== void 0 ? s.height : this.height, rotationMode: s.rotationMode || this.rotationMode });
        }, getBounds: function(n) {
          e.console.assert(n, "A viewport must now be passed to Overlay.getBounds.");
          var r = this.width, s = this.height;
          if (r === null || s === null) {
            var o = n.deltaPointsFromPixelsNoRotate(this.size, true);
            r === null && (r = o.x), s === null && (s = o.y);
          }
          var l = this.location.clone();
          return this.adjust(l, new e.Point(r, s)), this._adjustBoundsForRotation(n, new e.Rect(l.x, l.y, r, s));
        }, _adjustBoundsForRotation: function(n, r) {
          if (!n || n.getRotation(true) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT) return r;
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
            if (this.width === null || this.height === null) return r;
            var s = this._getOverlayPositionAndSize(n);
            return n.viewerElementToViewportRectangle(new e.Rect(s.position.x, s.position.y, s.size.x, s.size.y));
          }
          return r.rotate(-n.getRotation(true), this._getPlacementPoint(r));
        } };
      })(i), (function(e) {
        const n = e;
        n.DrawerBase = class {
          constructor(s) {
            e.console.assert(s.viewer, "[Drawer] options.viewer is required"), e.console.assert(s.viewport, "[Drawer] options.viewport is required"), e.console.assert(s.element, "[Drawer] options.element is required"), this.viewer = s.viewer, this.viewport = s.viewport, this.debugGridColor = typeof s.debugGridColor == "string" ? [s.debugGridColor] : s.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, this.options = s.options || {}, this.container = e.getElement(s.element), this._renderingTarget = this._createDrawingElement(), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", this.canvas.style.left = "0", e.setElementOpacity(this.canvas, this.viewer.opacity, true), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._checkForAPIOverrides();
          }
          get canvas() {
            return this._renderingTarget;
          }
          get element() {
            return e.console.error("Drawer.element is deprecated. Use Drawer.container instead."), this.container;
          }
          getType() {
            e.console.error("Drawer.getType must be implemented by child class");
          }
          static isSupported() {
            e.console.error("Drawer.isSupported must be implemented by child class");
          }
          _createDrawingElement() {
            return e.console.error("Drawer._createDrawingElement must be implemented by child class"), null;
          }
          draw(s) {
            e.console.error("Drawer.draw must be implemented by child class");
          }
          canRotate() {
            e.console.error("Drawer.canRotate must be implemented by child class");
          }
          destroy() {
            e.console.error("Drawer.destroy must be implemented by child class");
          }
          minimumOverlapRequired(s) {
            return false;
          }
          setImageSmoothingEnabled(s) {
            e.console.error("Drawer.setImageSmoothingEnabled must be implemented by child class");
          }
          drawDebuggingRect(s) {
            e.console.warn("[drawer].drawDebuggingRect is not implemented by this drawer");
          }
          clear() {
            e.console.warn("[drawer].clear() is deprecated. The drawer is responsible for clearing itself as needed before drawing tiles.");
          }
          _checkForAPIOverrides() {
            if (this._createDrawingElement === e.DrawerBase.prototype._createDrawingElement) throw new Error("[drawer]._createDrawingElement must be implemented by child class");
            if (this.draw === e.DrawerBase.prototype.draw) throw new Error("[drawer].draw must be implemented by child class");
            if (this.canRotate === e.DrawerBase.prototype.canRotate) throw new Error("[drawer].canRotate must be implemented by child class");
            if (this.destroy === e.DrawerBase.prototype.destroy) throw new Error("[drawer].destroy must be implemented by child class");
            if (this.setImageSmoothingEnabled === e.DrawerBase.prototype.setImageSmoothingEnabled) throw new Error("[drawer].setImageSmoothingEnabled must be implemented by child class");
          }
          viewportToDrawerRectangle(s) {
            var o = this.viewport.pixelFromPointNoRotate(s.getTopLeft(), true), l = this.viewport.deltaPixelsFromPointsNoRotate(s.getSize(), true);
            return new e.Rect(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio, l.x * e.pixelDensityRatio, l.y * e.pixelDensityRatio);
          }
          viewportCoordToDrawerCoord(s) {
            var o = this.viewport.pixelFromPointNoRotate(s, true);
            return new e.Point(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio);
          }
          _calculateCanvasSize() {
            var s = e.pixelDensityRatio, o = this.viewport.getContainerSize();
            return new n.Point(Math.round(o.x * s), Math.round(o.y * s));
          }
          _raiseTiledImageDrawnEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("tiled-image-drawn", { tiledImage: s, tiles: o });
          }
          _raiseDrawerErrorEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("drawer-error", { tiledImage: s, drawer: this, error: o });
          }
        };
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(o) {
            super(o), this.viewer.rejectEventHandler("tile-drawing", "The HTMLDrawer does not raise the tile-drawing event"), this.viewer.allowEventHandler("tile-drawn");
          }
          static isSupported() {
            return true;
          }
          getType() {
            return "html";
          }
          minimumOverlapRequired(o) {
            return true;
          }
          _createDrawingElement() {
            return e.makeNeutralElement("div");
          }
          draw(o) {
            var l = this;
            this._prepareNewFrame(), o.forEach(function(a) {
              a.opacity !== 0 && l._drawTiles(a);
            });
          }
          canRotate() {
            return false;
          }
          destroy() {
            this.container.removeChild(this.canvas);
          }
          setImageSmoothingEnabled() {
          }
          _prepareNewFrame() {
            this.canvas.innerHTML = "";
          }
          _drawTiles(o) {
            var l = o.getTilesToDraw().map((c) => c.tile);
            if (!(o.opacity === 0 || l.length === 0 && !o.placeholderFillStyle)) for (var a = l.length - 1; a >= 0; a--) {
              var u = l[a];
              this._drawTile(u), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: o, tile: u });
            }
          }
          _drawTile(o) {
            e.console.assert(o, "[Drawer._drawTile] tile is required");
            let l = this.canvas;
            if (!o.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToHTML] attempting to draw tile %s when it's not cached", o.toString());
              return;
            }
            if (!o.loaded) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", o.toString());
              return;
            }
            if (!o.element) {
              var a = o.getImage();
              if (!a) return;
              o.element = e.makeNeutralElement("div"), o.imgElement = a.cloneNode(), o.imgElement.style.msInterpolationMode = "nearest-neighbor", o.imgElement.style.width = "100%", o.imgElement.style.height = "100%", o.style = o.element.style, o.style.position = "absolute";
            }
            o.element.parentNode !== l && l.appendChild(o.element), o.imgElement.parentNode !== o.element && o.element.appendChild(o.imgElement), o.style.top = o.position.y + "px", o.style.left = o.position.x + "px", o.style.height = o.size.y + "px", o.style.width = o.size.x + "px", o.flipped && (o.style.transform = "scaleX(-1)"), e.setElementOpacity(o.element, o.opacity);
          }
        }
        e.HTMLDrawer = r;
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(c) {
            super(c), this.context = this.canvas.getContext("2d"), this.sketchCanvas = null, this.sketchContext = null, this._imageSmoothingEnabled = true, this.viewer.allowEventHandler("tile-drawn"), this.viewer.allowEventHandler("tile-drawing");
          }
          static isSupported() {
            return e.supportsCanvas;
          }
          getType() {
            return "canvas";
          }
          _createDrawingElement() {
            let c = e.makeNeutralElement("canvas"), h = this._calculateCanvasSize();
            return c.width = h.x, c.height = h.y, c;
          }
          draw(c) {
            this._prepareNewFrame(), this.viewer.viewport.getFlip() !== this._viewportFlipped && this._flip();
            for (const h of c) h.opacity !== 0 && this._drawTiles(h);
          }
          canRotate() {
            return true;
          }
          destroy() {
            this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null, this.container.removeChild(this.canvas);
          }
          minimumOverlapRequired(c) {
            return true;
          }
          setImageSmoothingEnabled(c) {
            this._imageSmoothingEnabled = !!c, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw();
          }
          drawDebuggingRect(c) {
            var h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.strokeStyle = this.debugGridColor[0], h.fillStyle = this.debugGridColor[0], h.strokeRect(c.x * e.pixelDensityRatio, c.y * e.pixelDensityRatio, c.width * e.pixelDensityRatio, c.height * e.pixelDensityRatio), h.restore();
          }
          get _viewportFlipped() {
            return this.context.getTransform().a < 0;
          }
          _raiseTileDrawingEvent(c, h, f, m) {
            this.viewer.raiseEvent("tile-drawing", { tiledImage: c, context: h, tile: f, rendered: m });
          }
          _prepareNewFrame() {
            var c = this._calculateCanvasSize();
            if ((this.canvas.width !== c.x || this.canvas.height !== c.y) && (this.canvas.width = c.x, this.canvas.height = c.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
              var h = this._calculateSketchCanvasSize();
              this.sketchCanvas.width = h.x, this.sketchCanvas.height = h.y, this._updateImageSmoothingEnabled(this.sketchContext);
            }
            this._clear();
          }
          _clear(c, h) {
            var f = this._getContext(c);
            if (h) f.clearRect(h.x, h.y, h.width, h.height);
            else {
              var m = f.canvas;
              f.clearRect(0, 0, m.width, m.height);
            }
          }
          _drawTiles(c) {
            var h = c.getTilesToDraw().map((j) => j.tile);
            if (!(c.opacity === 0 || h.length === 0 && !c.placeholderFillStyle)) {
              var f = h[0], m;
              f && (m = c.opacity < 1 || c.compositeOperation && c.compositeOperation !== "source-over" || !c._isBottomItem() && c.source.hasTransparency(f.context2D, f.getUrl(), f.ajaxHeaders, f.postData));
              var v, y, x = this.viewport.getZoom(true), T = c.viewportToImageZoom(x);
              h.length > 1 && T > c.smoothTileEdgesMinZoom && !c.iOSDevice && c.getRotation(true) % 360 === 0 && (m = true, v = f.getScaleForEdgeSmoothing(), y = f.getTranslationForEdgeSmoothing(v, this._getCanvasSize(false), this._getCanvasSize(true)));
              var C;
              m && (v || (C = this.viewport.viewportToViewerElementRectangle(c.getClippedBounds(true)).getIntegerBoundingBox(), C = C.times(e.pixelDensityRatio)), this._clear(true, C)), v || this._setRotations(c, m);
              var H = false;
              if (c._clip) {
                this._saveContext(m);
                var k = c.imageToViewportRectangle(c._clip, true);
                k = k.rotate(-c.getRotation(true), c._getRotationPoint(true));
                var N = this.viewportToDrawerRectangle(k);
                v && (N = N.times(v)), y && (N = N.translate(y)), this._setClip(N, m), H = true;
              }
              if (c._croppingPolygons) {
                var Y = this;
                H || this._saveContext(m);
                try {
                  var K = c._croppingPolygons.map(function(j) {
                    return j.map(function(ne) {
                      var he = c.imageToViewportCoordinates(ne.x, ne.y, true).rotate(-c.getRotation(true), c._getRotationPoint(true)), ye = Y.viewportCoordToDrawerCoord(he);
                      return v && (ye = ye.times(v)), y && (ye = ye.plus(y)), ye;
                    });
                  });
                  this._clipWithPolygons(K, m);
                } catch (j) {
                  e.console.error(j);
                }
                H = true;
              }
              if (c._hasOpaqueTile = false, c.placeholderFillStyle && c._hasOpaqueTile === false) {
                let j = this.viewportToDrawerRectangle(c.getBoundsNoRotate(true));
                v && (j = j.times(v)), y && (j = j.translate(y));
                let ne = null;
                typeof c.placeholderFillStyle == "function" ? ne = c.placeholderFillStyle(c, this.context) : ne = c.placeholderFillStyle, this._drawRectangle(j, ne, m);
              }
              var q = a(c.subPixelRoundingForTransparency), ee = false;
              if (q === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS) ee = true;
              else if (q === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
                var ce = this.viewer && this.viewer.isAnimating();
                ee = !ce;
              }
              for (var te = 0; te < h.length; te++) f = h[te], this._drawTile(f, c, m, v, y, ee, c.source), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: c, tile: f });
              H && this._restoreContext(m), v || (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m)), m && (v && this._setRotations(c), this.blendSketch({ opacity: c.opacity, scale: v, translate: y, compositeOperation: c.compositeOperation, bounds: C }), v && (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false))), this._drawDebugInfo(c, h), this._raiseTiledImageDrawnEvent(c, h);
            }
          }
          _drawDebugInfo(c, h) {
            if (c.debugMode) for (var f = h.length - 1; f >= 0; f--) {
              var m = h[f];
              try {
                this._drawDebugInfoOnTile(m, h.length, f, c);
              } catch (v) {
                e.console.error(v);
              }
            }
          }
          _clipWithPolygons(c, h) {
            var f = this._getContext(h);
            f.beginPath();
            for (const m of c) for (const [v, y] of m.entries()) f[v === 0 ? "moveTo" : "lineTo"](y.x, y.y);
            f.clip();
          }
          _drawTile(c, h, f, m, v, y, x) {
            e.console.assert(c, "[Drawer._drawTile] tile is required"), e.console.assert(h, "[Drawer._drawTile] drawingHandler is required");
            var T = this._getContext(f);
            m = m || 1, this._drawTileToCanvas(c, T, h, m, v, y, x);
          }
          _drawTileToCanvas(c, h, f, m, v, y, x) {
            var T = c.position.times(e.pixelDensityRatio), C = c.size.times(e.pixelDensityRatio), H;
            if (!c.context2D && !c.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToCanvas] attempting to draw tile %s when it's not cached", c.toString());
              return;
            }
            if (H = c.getCanvasContext(), !c.loaded || !H) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", c.toString());
              return;
            }
            h.save(), typeof m == "number" && m !== 1 && (T = T.times(m), C = C.times(m)), v instanceof e.Point && (T = T.plus(v)), h.globalAlpha === 1 && c.hasTransparency && (y && (T.x = Math.round(T.x), T.y = Math.round(T.y), C.x = Math.round(C.x), C.y = Math.round(C.y)), h.clearRect(T.x, T.y, C.x, C.y)), this._raiseTileDrawingEvent(f, h, c, H);
            var k, N;
            c.sourceBounds ? (k = Math.min(c.sourceBounds.width, H.canvas.width), N = Math.min(c.sourceBounds.height, H.canvas.height)) : (k = H.canvas.width, N = H.canvas.height), h.translate(T.x + C.x / 2, 0), c.flipped && h.scale(-1, 1), h.drawImage(H.canvas, 0, 0, k, N, -C.x / 2, T.y, C.x, C.y), h.restore();
          }
          _getContext(c) {
            var h = this.context;
            if (c) {
              if (this.sketchCanvas === null) {
                this.sketchCanvas = document.createElement("canvas");
                var f = this._calculateSketchCanvasSize();
                if (this.sketchCanvas.width = f.x, this.sketchCanvas.height = f.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
                  var m = this;
                  this.viewer.addHandler("rotate", function v() {
                    if (m.viewport.getRotation() !== 0) {
                      m.viewer.removeHandler("rotate", v);
                      var y = m._calculateSketchCanvasSize();
                      m.sketchCanvas.width = y.x, m.sketchCanvas.height = y.y;
                    }
                  });
                }
                this._updateImageSmoothingEnabled(this.sketchContext);
              }
              h = this.sketchContext;
            }
            return h;
          }
          _saveContext(c) {
            this._getContext(c).save();
          }
          _restoreContext(c) {
            this._getContext(c).restore();
          }
          _setClip(c, h) {
            var f = this._getContext(h);
            f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip();
          }
          _drawRectangle(c, h, f) {
            var m = this._getContext(f);
            m.save(), m.fillStyle = h, m.fillRect(c.x, c.y, c.width, c.height), m.restore();
          }
          blendSketch(c, h, f, m) {
            var v = c;
            e.isPlainObject(v) || (v = { opacity: c, scale: h, translate: f, compositeOperation: m }), c = v.opacity, m = v.compositeOperation;
            var y = v.bounds;
            if (this.context.save(), this.context.globalAlpha = c, m && (this.context.globalCompositeOperation = m), y) y.x < 0 && (y.width += y.x, y.x = 0), y.x + y.width > this.canvas.width && (y.width = this.canvas.width - y.x), y.y < 0 && (y.height += y.y, y.y = 0), y.y + y.height > this.canvas.height && (y.height = this.canvas.height - y.y), this.context.drawImage(this.sketchCanvas, y.x, y.y, y.width, y.height, y.x, y.y, y.width, y.height);
            else {
              h = v.scale || 1, f = v.translate;
              var x = f instanceof e.Point ? f : new e.Point(0, 0), T = 0, C = 0;
              if (f) {
                var H = this.sketchCanvas.width - this.canvas.width, k = this.sketchCanvas.height - this.canvas.height;
                T = Math.round(H / 2), C = Math.round(k / 2);
              }
              this.context.drawImage(this.sketchCanvas, x.x - T * h, x.y - C * h, (this.canvas.width + 2 * T) * h, (this.canvas.height + 2 * C) * h, -T, -C, this.canvas.width + 2 * T, this.canvas.height + 2 * C);
            }
            this.context.restore();
          }
          _drawDebugInfoOnTile(c, h, f, m) {
            var v = this.viewer.world.getIndexOfItem(m) % this.debugGridColor.length, y = this.context;
            y.save(), y.lineWidth = 2 * e.pixelDensityRatio, y.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", y.strokeStyle = this.debugGridColor[v], y.fillStyle = this.debugGridColor[v], this._setRotations(m), this._viewportFlipped && this._flip({ point: c.position.plus(c.size.divide(2)) }), y.strokeRect(c.position.x * e.pixelDensityRatio, c.position.y * e.pixelDensityRatio, c.size.x * e.pixelDensityRatio, c.size.y * e.pixelDensityRatio);
            var x = (c.position.x + c.size.x / 2) * e.pixelDensityRatio, T = (c.position.y + c.size.y / 2) * e.pixelDensityRatio;
            y.translate(x, T);
            const C = this.viewport.getRotation(true);
            y.rotate(Math.PI / 180 * -C), y.translate(-x, -T), c.x === 0 && c.y === 0 && (y.fillText("Zoom: " + this.viewport.getZoom(), c.position.x * e.pixelDensityRatio, (c.position.y - 30) * e.pixelDensityRatio), y.fillText("Pan: " + this.viewport.getBounds().toString(), c.position.x * e.pixelDensityRatio, (c.position.y - 20) * e.pixelDensityRatio)), y.fillText("Level: " + c.level, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 20) * e.pixelDensityRatio), y.fillText("Column: " + c.x, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 30) * e.pixelDensityRatio), y.fillText("Row: " + c.y, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 40) * e.pixelDensityRatio), y.fillText("Order: " + f + " of " + h, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 50) * e.pixelDensityRatio), y.fillText("Size: " + c.size.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 60) * e.pixelDensityRatio), y.fillText("Position: " + c.position.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), m.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), y.restore();
          }
          _updateImageSmoothingEnabled(c) {
            c.msImageSmoothingEnabled = this._imageSmoothingEnabled, c.imageSmoothingEnabled = this._imageSmoothingEnabled;
          }
          _getCanvasSize(c) {
            var h = this._getContext(c).canvas;
            return new e.Point(h.width, h.height);
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _setRotations(c, h = false) {
            var f = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), useSketch: h, saveContext: f }), f = false), c.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: c.getRotation(true), point: this.viewport.pixelFromPointNoRotate(c._getRotationPoint(true), true), useSketch: h, saveContext: f });
          }
          _offsetForRotation(c) {
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.save(), f.translate(h.x, h.y), f.rotate(Math.PI / 180 * c.degrees), f.translate(-h.x, -h.y);
          }
          _flip(c) {
            c = c || {};
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.translate(h.x, 0), f.scale(-1, 1), f.translate(-h.x, 0);
          }
          _restoreRotationChanges(c) {
            var h = this._getContext(c);
            h.restore();
          }
          _calculateCanvasSize() {
            var c = e.pixelDensityRatio, h = this.viewport.getContainerSize();
            return { x: Math.round(h.x * c), y: Math.round(h.y * c) };
          }
          _calculateSketchCanvasSize() {
            var c = this._calculateCanvasSize();
            if (this.viewport.getRotation() === 0) return c;
            var h = Math.ceil(Math.sqrt(c.x * c.x + c.y * c.y));
            return { x: h, y: h };
          }
        }
        e.CanvasDrawer = r;
        var s = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        function o(u) {
          return u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        }
        function l(u) {
          return o(u) ? s : u;
        }
        function a(u) {
          if (typeof u == "number") return l(u);
          if (!u || !e.Browser) return s;
          var c = u[e.Browser.vendor];
          return o(c) && (c = u["*"]), l(c);
        }
      })(i), (function(e) {
        const n = e;
        n.WebGLDrawer = class extends n.DrawerBase {
          constructor(s) {
            super(s), this._destroyed = false, this._TextureMap = /* @__PURE__ */ new Map(), this._TileMap = /* @__PURE__ */ new Map(), this._gl = null, this._firstPass = null, this._secondPass = null, this._glFrameBuffer = null, this._renderToTexture = null, this._glFramebufferToCanvasTransform = null, this._outputCanvas = null, this._outputContext = null, this._clippingCanvas = null, this._clippingContext = null, this._renderingCanvas = null, this._backupCanvasDrawer = null, this._imageSmoothingEnabled = true, this._boundToTileReady = (o) => this._tileReadyHandler(o), this._boundToImageUnloaded = (o) => this._imageUnloadedHandler(o), this.viewer.addHandler("tile-ready", this._boundToTileReady), this.viewer.addHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.rejectEventHandler("tile-drawn", "The WebGLDrawer does not raise the tile-drawn event"), this.viewer.rejectEventHandler("tile-drawing", "The WebGLDrawer does not raise the tile-drawing event"), this._setupCanvases(), this._setupRenderer(), this.context = this._outputContext;
          }
          destroy() {
            if (this._destroyed) return;
            let s = this._gl;
            var o = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS);
            for (let a = 0; a < o; ++a) s.activeTexture(s.TEXTURE0 + a), s.bindTexture(s.TEXTURE_2D, null), s.bindTexture(s.TEXTURE_CUBE_MAP, null);
            s.bindBuffer(s.ARRAY_BUFFER, null), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this._unloadTextures(), s.deleteBuffer(this._secondPass.bufferOutputPosition), s.deleteFramebuffer(this._glFrameBuffer), this._renderingCanvas.width = this._renderingCanvas.height = 1, this._clippingCanvas.width = this._clippingCanvas.height = 1, this._outputCanvas.width = this._outputCanvas.height = 1, this._renderingCanvas = null, this._clippingCanvas = this._clippingContext = null, this._outputCanvas = this._outputContext = null;
            let l = s.getExtension("WEBGL_lose_context");
            l && l.loseContext(), this.viewer.removeHandler("tile-ready", this._boundToTileReady), this.viewer.removeHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.removeHandler("resize", this._resizeHandler), this._gl = null, this._backupCanvasDrawer && (this._backupCanvasDrawer.destroy(), this._backupCanvasDrawer = null), this.container.removeChild(this.canvas), this.viewer.drawer === this && (this.viewer.drawer = null), this._destroyed = true;
          }
          canRotate() {
            return true;
          }
          static isSupported() {
            let s = document.createElement("canvas"), o = e.isFunction(s.getContext) && s.getContext("webgl"), l = o && o.getExtension("WEBGL_lose_context");
            return l && l.loseContext(), !!o;
          }
          getType() {
            return "webgl";
          }
          minimumOverlapRequired(s) {
            return s.isTainted();
          }
          _createDrawingElement() {
            let s = e.makeNeutralElement("canvas"), o = this._calculateCanvasSize();
            return s.width = o.x, s.height = o.y, s;
          }
          _getBackupCanvasDrawer() {
            return this._backupCanvasDrawer || (this._backupCanvasDrawer = this.viewer.requestDrawer("canvas", { mainDrawer: false }), this._backupCanvasDrawer.canvas.style.setProperty("visibility", "hidden")), this._backupCanvasDrawer;
          }
          draw(s) {
            let o = this._gl;
            const l = this.viewport.getBoundsNoRotateWithMargins(true);
            let a = { bounds: l, center: new n.Point(l.x + l.width / 2, l.y + l.height / 2), rotation: this.viewport.getRotation(true) * Math.PI / 180 }, u = this.viewport.flipped ? -1 : 1, c = e.Mat3.makeTranslation(-a.center.x, -a.center.y), h = e.Mat3.makeScaling(2 / a.bounds.width * u, -2 / a.bounds.height), f = e.Mat3.makeRotation(-a.rotation), m = h.multiply(f).multiply(c);
            o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), this._outputContext.clearRect(0, 0, this._outputCanvas.width, this._outputCanvas.height);
            let v = false;
            s.forEach((y, x) => {
              if (y.isTainted()) {
                v && (this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), v = false);
                const T = this._getBackupCanvasDrawer();
                T.draw([y]), this._outputContext.drawImage(T.canvas, 0, 0);
              } else {
                let T = y.getTilesToDraw();
                if (y.placeholderFillStyle && y._hasOpaqueTile === false && this._drawPlaceholder(y), T.length === 0 || y.getOpacity() === 0) return;
                let C = T[0], H = y.compositeOperation || this.viewer.compositeOperation || y._clip || y._croppingPolygons || y.debugMode, k = H || y.opacity < 1 || C.hasTransparency;
                H && (v && this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), o.useProgram(this._firstPass.shaderProgram), k ? (o.bindFramebuffer(o.FRAMEBUFFER, this._glFrameBuffer), o.clear(o.COLOR_BUFFER_BIT)) : o.bindFramebuffer(o.FRAMEBUFFER, null);
                let N = m, Y = y.getRotation(true);
                if (Y % 360 !== 0) {
                  let j = e.Mat3.makeRotation(-Y * Math.PI / 180), ne = y.getBoundsNoRotate(true).getCenter(), he = e.Mat3.makeTranslation(ne.x, ne.y), ye = e.Mat3.makeTranslation(-ne.x, -ne.y), me = he.multiply(j).multiply(ye);
                  N = m.multiply(me);
                }
                let K = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
                if (K <= 0) throw new Error(`WegGL error: bad value for gl parameter MAX_TEXTURE_IMAGE_UNITS (${K}). This could happen
                        if too many contexts have been created and not released, or there is another problem with the graphics card.`);
                let q = new Float32Array(K * 12), ee = new Array(K), ce = new Array(K), te = new Array(K);
                for (let j = 0; j < T.length; j++) {
                  let ne = T[j].tile, he = j % K, ye = he + 1, me = ne.getCanvasContext(), pe = me ? this._TextureMap.get(me.canvas) : null;
                  if (pe || (this._tileReadyHandler({ tile: ne, tiledImage: y }), pe = me ? this._TextureMap.get(me.canvas) : null), pe && this._getTileData(ne, y, pe, N, he, q, ee, ce, te), ye === K || j === T.length - 1) {
                    for (let ae = 0; ae <= ye; ae++) o.activeTexture(o.TEXTURE0 + ae), o.bindTexture(o.TEXTURE_2D, ee[ae]);
                    o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.bufferData(o.ARRAY_BUFFER, q, o.DYNAMIC_DRAW), ce.forEach((ae, Ae) => {
                      o.uniformMatrix3fv(this._firstPass.uTransformMatrices[Ae], false, ae);
                    }), o.uniform1fv(this._firstPass.uOpacities, new Float32Array(te)), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), o.vertexAttribPointer(this._firstPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.vertexAttribPointer(this._firstPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferIndex), o.vertexAttribPointer(this._firstPass.aIndex, 1, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6 * ye);
                  }
                }
                k && (o.useProgram(this._secondPass.shaderProgram), o.bindFramebuffer(o.FRAMEBUFFER, null), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, this._renderToTexture), this._gl.uniform1f(this._secondPass.uOpacityMultiplier, y.opacity), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), o.vertexAttribPointer(this._secondPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), o.vertexAttribPointer(this._secondPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6)), v = true, H && (this._applyContext2dPipeline(y, T, x), v = false, o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), x === 0 && this._raiseTiledImageDrawnEvent(y, T.map((j) => j.tile));
              }
            }), v && this._outputContext.drawImage(this._renderingCanvas, 0, 0);
          }
          setImageSmoothingEnabled(s) {
            this._imageSmoothingEnabled !== s && (this._imageSmoothingEnabled = s, this._unloadTextures(), this.viewer.world.draw());
          }
          drawDebuggingRect(s) {
            let o = this._outputContext;
            o.save(), o.lineWidth = 2 * e.pixelDensityRatio, o.strokeStyle = this.debugGridColor[0], o.fillStyle = this.debugGridColor[0], o.strokeRect(s.x * e.pixelDensityRatio, s.y * e.pixelDensityRatio, s.width * e.pixelDensityRatio, s.height * e.pixelDensityRatio), o.restore();
          }
          _getTextureDataFromTile(s) {
            return s.getCanvasContext().canvas;
          }
          _applyContext2dPipeline(s, o, l) {
            if (this._outputContext.save(), this._outputContext.globalCompositeOperation = l === 0 ? null : s.compositeOperation || this.viewer.compositeOperation, s._croppingPolygons || s._clip ? (this._renderToClippingCanvas(s), this._outputContext.drawImage(this._clippingCanvas, 0, 0)) : this._outputContext.drawImage(this._renderingCanvas, 0, 0), this._outputContext.restore(), s.debugMode) {
              const a = this.viewer.viewport.getFlip();
              a && this._flip(), this._drawDebugInfo(o, s, a), a && this._flip();
            }
          }
          _getTileData(s, o, l, a, u, c, h, f, m) {
            let v = l.texture, y = l.position;
            c.set(y, u * 12);
            let x = this._calculateOverlapFraction(s, o), T = s.positionedBounds.width * x.x, C = s.positionedBounds.height * x.y, H = s.positionedBounds.x + (s.x === 0 ? 0 : T), k = s.positionedBounds.y + (s.y === 0 ? 0 : C), N = s.positionedBounds.x + s.positionedBounds.width - (s.isRightMost ? 0 : T), Y = s.positionedBounds.y + s.positionedBounds.height - (s.isBottomMost ? 0 : C), K = N - H, q = Y - k, ee = new e.Mat3([K, 0, 0, 0, q, 0, H, k, 1]);
            if (s.flipped) {
              let te = e.Mat3.makeTranslation(0.5, 0), j = e.Mat3.makeTranslation(-0.5, 0), ne = te.multiply(e.Mat3.makeScaling(-1, 1)).multiply(j);
              ee = ee.multiply(ne);
            }
            let ce = a.multiply(ee);
            m[u] = s.opacity, h[u] = v, f[u] = ce.values;
          }
          _textureFilter() {
            return this._imageSmoothingEnabled ? this._gl.LINEAR : this._gl.NEAREST;
          }
          _setupRenderer() {
            let s = this._gl;
            s || e.console.error("_setupCanvases must be called before _setupRenderer"), this._unitQuad = this._makeQuadVertexBuffer(0, 1, 0, 1), this._makeFirstPassShaderProgram(), this._makeSecondPassShaderProgram(), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this._renderingCanvas.width, this._renderingCanvas.height, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), this._glFrameBuffer = s.createFramebuffer(), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA);
          }
          _makeFirstPassShaderProgram() {
            let s = this._glNumTextures = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), o = () => [...Array(s).keys()].map((v) => `uniform mat3 u_matrix_${v};`).join(`
`), l = () => [...Array(s).keys()].map((v) => `${v > 0 ? "else " : ""}if(int(a_index) == ${v}) { transform_matrix = u_matrix_${v}; }`).join(`
`);
            const a = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;
            attribute float a_index;

            ${o()} // create a uniform mat3 for each potential tile to draw

            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {

                mat3 transform_matrix; // value will be set by the if/elses in makeConditional()

                ${l()}

                gl_Position = vec4(transform_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
                v_image_index = a_index;
            }
            `, u = `
            precision mediump float;

            // our textures
            uniform sampler2D u_images[${s}];
            // our opacities
            uniform float u_opacities[${s}];

            // the varyings passed in from the vertex shader.
            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {
                // can't index directly with a variable, need to use a loop iterator hack
                for(int i = 0; i < ${s}; ++i){
                    if(i == int(v_image_index)){
                        gl_FragColor = texture2D(u_images[i], v_texture_position) * u_opacities[i];
                    }
                }
            }
            `;
            let c = this._gl, h = this.constructor.initShaderProgram(c, a, u);
            c.useProgram(h), this._firstPass = { shaderProgram: h, aOutputPosition: c.getAttribLocation(h, "a_output_position"), aTexturePosition: c.getAttribLocation(h, "a_texture_position"), aIndex: c.getAttribLocation(h, "a_index"), uTransformMatrices: [...Array(this._glNumTextures).keys()].map((v) => c.getUniformLocation(h, `u_matrix_${v}`)), uImages: c.getUniformLocation(h, "u_images"), uOpacities: c.getUniformLocation(h, "u_opacities"), bufferOutputPosition: c.createBuffer(), bufferTexturePosition: c.createBuffer(), bufferIndex: c.createBuffer() }, c.uniform1iv(this._firstPass.uImages, [...Array(s).keys()]);
            let f = new Float32Array(s * 12);
            for (let v = 0; v < s; ++v) f.set(Float32Array.from(this._unitQuad), v * 12);
            c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), c.bufferData(c.ARRAY_BUFFER, f, c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aOutputPosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), c.enableVertexAttribArray(this._firstPass.aTexturePosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferIndex);
            let m = [...Array(this._glNumTextures).keys()].map((v) => Array(6).fill(v)).flat();
            c.bufferData(c.ARRAY_BUFFER, new Float32Array(m), c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aIndex);
          }
          _makeSecondPassShaderProgram() {
            const s = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;

            uniform mat3 u_matrix;

            varying vec2 v_texture_position;

            void main() {
                gl_Position = vec4(u_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
            }
            `, o = `
            precision mediump float;

            // our texture
            uniform sampler2D u_image;

            // the texCoords passed in from the vertex shader.
            varying vec2 v_texture_position;

            // the opacity multiplier for the image
            uniform float u_opacity_multiplier;

            void main() {
                gl_FragColor = texture2D(u_image, v_texture_position);
                gl_FragColor *= u_opacity_multiplier;
            }
            `;
            let l = this._gl, a = this.constructor.initShaderProgram(l, s, o);
            l.useProgram(a), this._secondPass = { shaderProgram: a, aOutputPosition: l.getAttribLocation(a, "a_output_position"), aTexturePosition: l.getAttribLocation(a, "a_texture_position"), uMatrix: l.getUniformLocation(a, "u_matrix"), uImage: l.getUniformLocation(a, "u_image"), uOpacityMultiplier: l.getUniformLocation(a, "u_opacity_multiplier"), bufferOutputPosition: l.createBuffer(), bufferTexturePosition: l.createBuffer() }, l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.STATIC_DRAW), l.enableVertexAttribArray(this._secondPass.aOutputPosition), l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.DYNAMIC_DRAW), l.enableVertexAttribArray(this._secondPass.aTexturePosition);
            let u = e.Mat3.makeScaling(2, 2).multiply(e.Mat3.makeTranslation(-0.5, -0.5));
            l.uniformMatrix3fv(this._secondPass.uMatrix, false, u.values);
          }
          _resizeRenderer() {
            let s = this._gl, o = this._renderingCanvas.width, l = this._renderingCanvas.height;
            s.viewport(0, 0, o, l), s.deleteTexture(this._renderToTexture), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, o, l, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0);
          }
          _setupCanvases() {
            let s = this;
            this._outputCanvas = this.canvas, this._outputContext = this._outputCanvas.getContext("2d"), this._renderingCanvas = document.createElement("canvas"), this._clippingCanvas = document.createElement("canvas"), this._clippingContext = this._clippingCanvas.getContext("2d"), this._renderingCanvas.width = this._clippingCanvas.width = this._outputCanvas.width, this._renderingCanvas.height = this._clippingCanvas.height = this._outputCanvas.height, this._gl = this._renderingCanvas.getContext("webgl"), this._resizeHandler = function() {
              s._outputCanvas !== s.viewer.drawer.canvas && (s._outputCanvas.style.width = s.viewer.drawer.canvas.clientWidth + "px", s._outputCanvas.style.height = s.viewer.drawer.canvas.clientHeight + "px");
              let o = s._calculateCanvasSize();
              (s._outputCanvas.width !== o.x || s._outputCanvas.height !== o.y) && (s._outputCanvas.width = o.x, s._outputCanvas.height = o.y), s._renderingCanvas.style.width = s._outputCanvas.clientWidth + "px", s._renderingCanvas.style.height = s._outputCanvas.clientHeight + "px", s._renderingCanvas.width = s._clippingCanvas.width = s._outputCanvas.width, s._renderingCanvas.height = s._clippingCanvas.height = s._outputCanvas.height, s._resizeRenderer();
            }, this.viewer.addHandler("resize", this._resizeHandler);
          }
          _makeQuadVertexBuffer(s, o, l, a) {
            return new Float32Array([s, a, o, a, s, l, s, l, o, a, o, l]);
          }
          _tileReadyHandler(s) {
            let o = s.tile, l = s.tiledImage;
            if (l.isTainted()) return;
            let a = o.getCanvasContext(), u = a && a.canvas;
            if (!u || e.isCanvasTainted(u)) {
              l.isTainted() || (l.setTainted(true), e.console.warn("WebGL cannot be used to draw this TiledImage because it has tainted data. Does crossOriginPolicy need to be set?"), this._raiseDrawerErrorEvent(l, "Tainted data cannot be used by the WebGLDrawer. Falling back to CanvasDrawer for this TiledImage."));
              return;
            }
            if (!this._TextureMap.get(u)) {
              let h = this._gl, f = h.createTexture(), m, v = l.source.tileOverlap, y, x;
              if (o.sourceBounds ? (y = Math.min(o.sourceBounds.width, u.width) / u.width, x = Math.min(o.sourceBounds.height, u.height) / u.height) : (y = 1, x = 1), v > 0) {
                let C = this._calculateOverlapFraction(o, l), H = (o.x === 0 ? 0 : C.x) * y, k = (o.y === 0 ? 0 : C.y) * x, N = (o.isRightMost ? 1 : 1 - C.x) * y, Y = (o.isBottomMost ? 1 : 1 - C.y) * x;
                m = this._makeQuadVertexBuffer(H, N, k, Y);
              } else y === 1 && x === 1 ? m = this._unitQuad : m = this._makeQuadVertexBuffer(0, y, 0, x);
              let T = { texture: f, position: m };
              this._TextureMap.set(u, T), h.activeTexture(h.TEXTURE0), h.bindTexture(h.TEXTURE_2D, f), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this._textureFilter()), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this._textureFilter()), this._uploadImageData(a);
            }
          }
          _calculateOverlapFraction(s, o) {
            let l = o.source.tileOverlap, a = s.sourceBounds.width, u = s.sourceBounds.height, c = (s.x === 0 ? 0 : l) + (s.isRightMost ? 0 : l), h = (s.y === 0 ? 0 : l) + (s.isBottomMost ? 0 : l), f = l / (a + c), m = l / (u + h);
            return { x: f, y: m };
          }
          _unloadTextures() {
            Array.from(this._TextureMap.keys()).forEach((o) => {
              this._cleanupImageData(o);
            });
          }
          _uploadImageData(s) {
            let o = this._gl, l = s.canvas;
            try {
              if (!l) throw s;
              o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, l);
            } catch (a) {
              e.console.error("Error uploading image data to WebGL", a);
            }
          }
          _imageUnloadedHandler(s) {
            let o = s.context2D.canvas;
            this._cleanupImageData(o);
          }
          _cleanupImageData(s) {
            let o = this._TextureMap.get(s);
            this._TextureMap.delete(s), o && this._gl.deleteTexture(o.texture);
          }
          _setClip() {
          }
          _renderToClippingCanvas(s) {
            if (this._clippingContext.clearRect(0, 0, this._clippingCanvas.width, this._clippingCanvas.height), this._clippingContext.save(), this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            if (s._clip) {
              let l = [{ x: s._clip.x, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y + s._clip.height }, { x: s._clip.x, y: s._clip.y + s._clip.height }].map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              });
              this._clippingContext.beginPath(), l.forEach((a, u) => {
                this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
              }), this._clippingContext.clip(), this._setClip();
            }
            if (s._croppingPolygons) {
              let o = s._croppingPolygons.map((l) => l.map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              }));
              this._clippingContext.beginPath(), o.forEach((l) => {
                l.forEach((a, u) => {
                  this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
                });
              }), this._clippingContext.clip();
            }
            if (this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            this._clippingContext.drawImage(this._renderingCanvas, 0, 0), this._clippingContext.restore();
          }
          _setRotations(s) {
            var o = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), saveContext: o }), o = false), s.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: s.getRotation(true), point: this.viewport.pixelFromPointNoRotate(s._getRotationPoint(true), true), saveContext: o });
          }
          _offsetForRotation(s) {
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.save(), l.translate(o.x, o.y), l.rotate(Math.PI / 180 * s.degrees), l.translate(-o.x, -o.y);
          }
          _flip(s) {
            s = s || {};
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.translate(o.x, 0), l.scale(-1, 1), l.translate(-o.x, 0);
          }
          _drawDebugInfo(s, o, l) {
            for (var a = s.length - 1; a >= 0; a--) {
              var u = s[a].tile;
              try {
                this._drawDebugInfoOnTile(u, s.length, a, o, l);
              } catch (c) {
                e.console.error(c);
              }
            }
          }
          _drawDebugInfoOnTile(s, o, l, a, u) {
            var c = this.viewer.world.getIndexOfItem(a) % this.debugGridColor.length, h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", h.strokeStyle = this.debugGridColor[c], h.fillStyle = this.debugGridColor[c], this._setRotations(a), u && this._flip({ point: s.position.plus(s.size.divide(2)) }), h.strokeRect(s.position.x * e.pixelDensityRatio, s.position.y * e.pixelDensityRatio, s.size.x * e.pixelDensityRatio, s.size.y * e.pixelDensityRatio);
            var f = (s.position.x + s.size.x / 2) * e.pixelDensityRatio, m = (s.position.y + s.size.y / 2) * e.pixelDensityRatio;
            h.translate(f, m);
            const v = this.viewport.getRotation(true);
            h.rotate(Math.PI / 180 * -v), h.translate(-f, -m), s.x === 0 && s.y === 0 && (h.fillText("Zoom: " + this.viewport.getZoom(), s.position.x * e.pixelDensityRatio, (s.position.y - 30) * e.pixelDensityRatio), h.fillText("Pan: " + this.viewport.getBounds().toString(), s.position.x * e.pixelDensityRatio, (s.position.y - 20) * e.pixelDensityRatio)), h.fillText("Level: " + s.level, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 20) * e.pixelDensityRatio), h.fillText("Column: " + s.x, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 30) * e.pixelDensityRatio), h.fillText("Row: " + s.y, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 40) * e.pixelDensityRatio), h.fillText("Order: " + l + " of " + o, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 50) * e.pixelDensityRatio), h.fillText("Size: " + s.size.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 60) * e.pixelDensityRatio), h.fillText("Position: " + s.position.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), a.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), h.restore();
          }
          _drawPlaceholder(s) {
            const o = s.getBounds(true), l = this.viewportToDrawerRectangle(s.getBounds(true)), a = this._outputContext;
            let u;
            typeof s.placeholderFillStyle == "function" ? u = s.placeholderFillStyle(s, a) : u = s.placeholderFillStyle, this._offsetForRotation({ degrees: this.viewer.viewport.getRotation(true) }), a.fillStyle = u, a.translate(l.x, l.y), a.rotate(Math.PI / 180 * o.degrees), a.translate(-l.x, -l.y), a.fillRect(l.x, l.y, l.width, l.height), this._restoreRotationChanges();
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _restoreRotationChanges() {
            var s = this._outputContext;
            s.restore();
          }
          static initShaderProgram(s, o, l) {
            function a(f, m, v) {
              const y = f.createShader(m);
              return f.shaderSource(y, v), f.compileShader(y), f.getShaderParameter(y, f.COMPILE_STATUS) ? y : (e.console.error(`An error occurred compiling the shaders: ${f.getShaderInfoLog(y)}`), f.deleteShader(y), null);
            }
            const u = a(s, s.VERTEX_SHADER, o), c = a(s, s.FRAGMENT_SHADER, l), h = s.createProgram();
            return s.attachShader(h, u), s.attachShader(h, c), s.linkProgram(h), s.getProgramParameter(h, s.LINK_STATUS) ? h : (e.console.error(`Unable to initialize the shader program: ${s.getProgramInfoLog(h)}`), null);
          }
        };
      })(i), (function(e) {
        e.Viewport = function(n) {
          var r = arguments;
          r.length && r[0] instanceof e.Point && (n = { containerSize: r[0], contentSize: r[1], config: r[2] }), n.config && (e.extend(true, n, n.config), delete n.config), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n.margins || {}), delete n.margins, n.initialDegrees = n.degrees, delete n.degrees, e.extend(true, this, { containerSize: null, contentSize: null, zoomPoint: null, rotationPivot: null, viewer: null, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio, visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel, minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel, maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel, initialDegrees: e.DEFAULT_SETTINGS.degrees, flipped: e.DEFAULT_SETTINGS.flipped, homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer, silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings }, n), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.centerSpringY = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.zoomSpring = new e.Spring({ exponential: true, initial: 1, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.degreesSpring = new e.Spring({ initial: n.initialDegrees, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(true), this.update();
        }, e.Viewport.prototype = { get degrees() {
          return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
        }, set degrees(n) {
          e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(n);
        }, resetContentSize: function(n) {
          return e.console.assert(n, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(n instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(n.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(n.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, n.y / n.x), n.x), this;
        }, setHomeBounds: function(n, r) {
          e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(n, r);
        }, _setContentBounds: function(n, r) {
          e.console.assert(n, "[Viewport._setContentBounds] bounds is required"), e.console.assert(n instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(n.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(n.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = n.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(r), this._contentBounds = n.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(r), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", { contentSize: this._contentSizeNoRotate.clone(), contentFactor: r, homeBounds: this._contentBoundsNoRotate.clone(), contentBounds: this._contentBounds.clone() });
        }, getHomeZoom: function() {
          if (this.defaultZoomLevel) return this.defaultZoomLevel;
          var n = this._contentAspectRatio / this.getAspectRatio(), r;
          return this.homeFillsViewer ? r = n >= 1 ? n : 1 : r = n >= 1 ? 1 : n, r / this._contentBounds.width;
        }, getHomeBounds: function() {
          return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
        }, getHomeBoundsNoRotate: function() {
          var n = this._contentBounds.getCenter(), r = 1 / this.getHomeZoom(), s = r / this.getAspectRatio();
          return new e.Rect(n.x - r / 2, n.y - s / 2, r, s);
        }, goHome: function(n) {
          return this.viewer && this.viewer.raiseEvent("home", { immediately: n }), this.fitBounds(this.getHomeBounds(), n);
        }, getMinZoom: function() {
          var n = this.getHomeZoom(), r = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * n;
          return r;
        }, getMaxZoom: function() {
          var n = this.maxZoomLevel;
          return n || (n = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, n /= this._contentBounds.width), Math.max(n, this.getHomeZoom());
        }, getAspectRatio: function() {
          return this._containerInnerSize.x / this._containerInnerSize.y;
        }, getContainerSize: function() {
          return new e.Point(this.containerSize.x, this.containerSize.y);
        }, getMargins: function() {
          return e.extend({}, this._margins);
        }, setMargins: function(n) {
          e.console.assert(e.type(n) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(-this.getRotation(n));
        }, getBoundsNoRotate: function(n) {
          var r = this.getCenter(n), s = 1 / this.getZoom(n), o = s / this.getAspectRatio();
          return new e.Rect(r.x - s / 2, r.y - o / 2, s, o);
        }, getBoundsWithMargins: function(n) {
          return this.getBoundsNoRotateWithMargins(n).rotate(-this.getRotation(n), this.getCenter(n));
        }, getBoundsNoRotateWithMargins: function(n) {
          var r = this.getBoundsNoRotate(n), s = this._containerInnerSize.x * this.getZoom(n);
          return r.x -= this._margins.left / s, r.y -= this._margins.top / s, r.width += (this._margins.left + this._margins.right) / s, r.height += (this._margins.top + this._margins.bottom) / s, r;
        }, getCenter: function(n) {
          var r = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value), s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value), o, l, a, u, c, h, f, m;
          return n ? r : this.zoomPoint ? (o = this.pixelFromPoint(this.zoomPoint, true), l = this.getZoom(), a = 1 / l, u = a / this.getAspectRatio(), c = new e.Rect(r.x - a / 2, r.y - u / 2, a, u), h = this._pixelFromPoint(this.zoomPoint, c), f = h.minus(o).rotate(-this.getRotation(true)), m = f.divide(this._containerInnerSize.x * l), s.plus(m)) : s;
        }, getZoom: function(n) {
          return n ? this.zoomSpring.current.value : this.zoomSpring.target.value;
        }, _applyZoomConstraints: function(n) {
          return Math.max(Math.min(n, this.getMaxZoom()), this.getMinZoom());
        }, _applyBoundaryConstraints: function(n) {
          var r = this.viewportToViewerElementRectangle(n).getBoundingBox(), s = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), o = false, l = false;
          if (!this.wrapHorizontal) {
            var a = r.x + r.width, u = s.x + s.width, c, h, f;
            r.width > s.width ? c = this.visibilityRatio * s.width : c = this.visibilityRatio * r.width, h = s.x - a + c, f = u - r.x - c, c > s.width ? (r.x += (h + f) / 2, o = true) : f < 0 ? (r.x += f, o = true) : h > 0 && (r.x += h, o = true);
          }
          if (!this.wrapVertical) {
            var m = r.y + r.height, v = s.y + s.height, y, x, T;
            r.height > s.height ? y = this.visibilityRatio * s.height : y = this.visibilityRatio * r.height, x = s.y - m + y, T = v - r.y - y, y > s.height ? (r.y += (x + T) / 2, l = true) : T < 0 ? (r.y += T, l = true) : x > 0 && (r.y += x, l = true);
          }
          var C = o || l, H = C ? this.viewerElementToViewportRectangle(r) : n.clone();
          return H.xConstrained = o, H.yConstrained = l, H.constraintApplied = C, H;
        }, _raiseConstraintsEvent: function(n) {
          this.viewer && this.viewer.raiseEvent("constrain", { immediately: n });
        }, applyConstraints: function(n) {
          var r = this.getZoom(), s = this._applyZoomConstraints(r);
          r !== s && this.zoomTo(s, this.zoomPoint, n);
          var o = this.getConstrainedBounds(false);
          return o.constraintApplied && (this.fitBounds(o, n), this._raiseConstraintsEvent(n)), this;
        }, ensureVisible: function(n) {
          return this.applyConstraints(n);
        }, _fitBounds: function(n, r) {
          r = r || {};
          var s = r.immediately || false, o = r.constraints || false, l = this.getAspectRatio(), a = n.getCenter(), u = new e.Rect(n.x, n.y, n.width, n.height, n.degrees + this.getRotation()).getBoundingBox();
          u.getAspectRatio() >= l ? u.height = u.width / l : u.width = u.height * l, u.x = a.x - u.width / 2, u.y = a.y - u.height / 2;
          var c = 1 / u.width;
          if (s) return this.panTo(a, true), this.zoomTo(c, null, true), o && this.applyConstraints(true), this;
          var h = this.getCenter(true), f = this.getZoom(true);
          this.panTo(h, true), this.zoomTo(f, null, true);
          var m = this.getBounds(), v = this.getZoom();
          if (v === 0 || Math.abs(c / v - 1) < 1e-8) return this.zoomTo(c, null, true), this.panTo(a, s), o && this.applyConstraints(false), this;
          if (o) {
            this.panTo(a, false), c = this._applyZoomConstraints(c), this.zoomTo(c, null, false);
            var y = this.getConstrainedBounds();
            this.panTo(h, true), this.zoomTo(f, null, true), this.fitBounds(y);
          } else {
            var x = u.rotate(-this.getRotation()), T = x.getTopLeft().times(c).minus(m.getTopLeft().times(v)).divide(c - v);
            this.zoomTo(c, T, s);
          }
          return this;
        }, fitBounds: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: false });
        }, fitBoundsWithConstraints: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: true });
        }, fitVertically: function(n) {
          var r = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
          return this.fitBounds(r, n);
        }, fitHorizontally: function(n) {
          var r = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
          return this.fitBounds(r, n);
        }, getConstrainedBounds: function(n) {
          var r, s;
          return r = this.getBounds(n), s = this._applyBoundaryConstraints(r), s;
        }, panBy: function(n, r) {
          var s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
          return this.panTo(s.plus(n), r);
        }, panTo: function(n, r) {
          return r ? (this.centerSpringX.resetTo(n.x), this.centerSpringY.resetTo(n.y)) : (this.centerSpringX.springTo(n.x), this.centerSpringY.springTo(n.y)), this.viewer && this.viewer.raiseEvent("pan", { center: n, immediately: r }), this;
        }, zoomBy: function(n, r, s) {
          return this.zoomTo(this.zoomSpring.target.value * n, r, s);
        }, zoomTo: function(n, r, s) {
          var o = this;
          return this.zoomPoint = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s ? this._adjustCenterSpringsForZoomPoint(function() {
            o.zoomSpring.resetTo(n);
          }) : this.zoomSpring.springTo(n), this.viewer && this.viewer.raiseEvent("zoom", { zoom: n, refPoint: r, immediately: s }), this;
        }, setRotation: function(n, r) {
          return this.rotateTo(n, null, r);
        }, getRotation: function(n) {
          return n ? this.degreesSpring.current.value : this.degreesSpring.target.value;
        }, setRotationWithPivot: function(n, r, s) {
          return this.rotateTo(n, r, s);
        }, rotateTo: function(n, r, s) {
          if (!this.viewer || !this.viewer.drawer.canRotate()) return this;
          if (this.degreesSpring.target.value === n && this.degreesSpring.isAtTargetValue()) return this;
          if (this.rotationPivot = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s) if (this.rotationPivot) {
            var o = n - this._oldDegrees;
            if (!o) return this.rotationPivot = null, this;
            this._rotateAboutPivot(n);
          } else this.degreesSpring.resetTo(n);
          else {
            var l = e.positiveModulo(this.degreesSpring.current.value, 360), a = e.positiveModulo(n, 360), u = a - l;
            u > 180 ? a -= 360 : u < -180 && (a += 360);
            var c = l - a;
            this.degreesSpring.resetTo(n + c), this.degreesSpring.springTo(n);
          }
          return this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: n, immediately: !!s, pivot: this.rotationPivot || this.getCenter() }), this;
        }, rotateBy: function(n, r, s) {
          return this.rotateTo(this.degreesSpring.target.value + n, r, s);
        }, resize: function(n, r) {
          var s = this.getBoundsNoRotate(), o = s, l;
          this.containerSize.x = n.x, this.containerSize.y = n.y, this._updateContainerInnerSize(), r && (l = n.x / this.containerSize.x, o.width = s.width * l, o.height = o.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", { newContainerSize: n, maintain: r });
          var a = this.fitBounds(o, true);
          return this.viewer && this.viewer.raiseEvent("after-resize", { newContainerSize: n, maintain: r }), a;
        }, _updateContainerInnerSize: function() {
          this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)));
        }, update: function() {
          var n = this;
          this._adjustCenterSpringsForZoomPoint(function() {
            n.zoomSpring.update();
          }), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(true) : this.degreesSpring.update();
          var r = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
          this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value;
          var s = r || !this.zoomSpring.isAtTargetValue() || !this.centerSpringX.isAtTargetValue() || !this.centerSpringY.isAtTargetValue() || !this.degreesSpring.isAtTargetValue();
          return s;
        }, _rotateAboutPivot: function(n) {
          var r = n === true, s = this.rotationPivot.minus(this.getCenter());
          this.centerSpringX.shiftBy(s.x), this.centerSpringY.shiftBy(s.y), r ? this.degreesSpring.update() : this.degreesSpring.resetTo(n);
          var o = this.degreesSpring.current.value - this._oldDegrees, l = s.rotate(o * -1).times(-1);
          this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y);
        }, _adjustCenterSpringsForZoomPoint: function(n) {
          if (this.zoomPoint) {
            var r = this.pixelFromPoint(this.zoomPoint, true);
            n();
            var s = this.pixelFromPoint(this.zoomPoint, true), o = s.minus(r), l = this.deltaPointsFromPixels(o, true);
            this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
          } else n();
        }, deltaPixelsFromPointsNoRotate: function(n, r) {
          return n.times(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPixelsFromPoints: function(n, r) {
          return this.deltaPixelsFromPointsNoRotate(n.rotate(this.getRotation(r)), r);
        }, deltaPointsFromPixelsNoRotate: function(n, r) {
          return n.divide(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPointsFromPixels: function(n, r) {
          return this.deltaPointsFromPixelsNoRotate(n, r).rotate(-this.getRotation(r));
        }, pixelFromPointNoRotate: function(n, r) {
          return this._pixelFromPointNoRotate(n, this.getBoundsNoRotate(r));
        }, pixelFromPoint: function(n, r) {
          return this._pixelFromPoint(n, this.getBoundsNoRotate(r));
        }, _pixelFromPointNoRotate: function(n, r) {
          return n.minus(r.getTopLeft()).times(this._containerInnerSize.x / r.width).plus(new e.Point(this._margins.left, this._margins.top));
        }, _pixelFromPoint: function(n, r) {
          return this._pixelFromPointNoRotate(n.rotate(this.getRotation(true), this.getCenter(true)), r);
        }, pointFromPixelNoRotate: function(n, r) {
          var s = this.getBoundsNoRotate(r);
          return n.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / s.width).plus(s.getTopLeft());
        }, pointFromPixel: function(n, r) {
          return this.pointFromPixelNoRotate(n, r).rotate(-this.getRotation(r), this.getCenter(r));
        }, _viewportToImageDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n * this._contentSizeNoRotate.x / s, r * this._contentSizeNoRotate.x / s);
        }, viewportToImageCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.viewportToImageCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.viewportToImageCoordinates(n, r, true);
            }
          }
          return this._viewportToImageDelta(n - this._contentBoundsNoRotate.x, r - this._contentBoundsNoRotate.y);
        }, _imageToViewportDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n / this._contentSizeNoRotate.x * s, r / this._contentSizeNoRotate.x * s);
        }, imageToViewportCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.imageToViewportCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.imageToViewportCoordinates(n, r, true);
            }
          }
          var l = this._imageToViewportDelta(n, r);
          return l.x += this._contentBoundsNoRotate.x, l.y += this._contentBoundsNoRotate.y, l;
        }, imageToViewportRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.imageToViewportRectangle(n, r, s, o, true);
            }
          }
          var c = this.imageToViewportCoordinates(l.x, l.y), h = this._imageToViewportDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewportToImageRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.viewportToImageRectangle(n, r, s, o, true);
            }
          }
          var c = this.viewportToImageCoordinates(l.x, l.y), h = this._viewportToImageDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewerElementToViewportCoordinates: function(n) {
          return this.pointFromPixel(n, true);
        }, viewportToViewerElementCoordinates: function(n) {
          return this.pixelFromPoint(n, true);
        }, viewerElementToViewportRectangle: function(n) {
          return e.Rect.fromSummits(this.pointFromPixel(n.getTopLeft(), true), this.pointFromPixel(n.getTopRight(), true), this.pointFromPixel(n.getBottomLeft(), true));
        }, viewportToViewerElementRectangle: function(n) {
          return e.Rect.fromSummits(this.pixelFromPoint(n.getTopLeft(), true), this.pixelFromPoint(n.getTopRight(), true), this.pixelFromPoint(n.getBottomLeft(), true));
        }, windowToViewportCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToViewportCoordinates(r);
        }, viewportToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");
          var r = this.viewportToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewportToImageZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.viewportToImageZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = l / o * a;
          return n * u;
        }, imageToViewportZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image. Instead, use [TiledImage.imageToViewportZoom] for the specific image of interest");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.imageToViewportZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = o / l / a;
          return n * u;
        }, toggleFlip: function() {
          return this.setFlip(!this.getFlip()), this;
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          return this.flipped === n ? this : (this.flipped = n, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: n }), this);
        }, getMaxZoomPixelRatio: function() {
          return this.maxZoomPixelRatio;
        }, setMaxZoomPixelRatio: function(n, r = true, s = false) {
          e.console.assert(!isNaN(n), "[Viewport.setMaxZoomPixelRatio] ratio must be a number"), !isNaN(n) && (this.maxZoomPixelRatio = n, r && this.getZoom() > this.getMaxZoom() && this.applyConstraints(s));
        } };
      })(i), (function(e) {
        e.TiledImage = function(n) {
          this._initialized = false, e.console.assert(n.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(n.drawer, "[TiledImage] options.drawer is required"), e.console.assert(n.viewer, "[TiledImage] options.viewer is required"), e.console.assert(n.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(n.source, "[TiledImage] options.source is required"), e.console.assert(!n.clip || n.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = n.tileCache, delete n.tileCache, this._drawer = n.drawer, delete n.drawer, this._imageLoader = n.imageLoader, delete n.imageLoader, n.clip instanceof e.Rect && (this._clip = n.clip.clone()), delete n.clip;
          var r = n.x || 0;
          delete n.x;
          var s = n.y || 0;
          delete n.y, this.normHeight = n.source.dimensions.y / n.source.dimensions.x, this.contentAspectX = n.source.dimensions.x / n.source.dimensions.y;
          var o = 1;
          n.width ? (o = n.width, delete n.width, n.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete n.height)) : n.height && (o = n.height / this.normHeight, delete n.height);
          var l = n.fitBounds;
          delete n.fitBounds;
          var a = n.fitBoundsPlacement || i.Placement.CENTER;
          delete n.fitBoundsPlacement;
          var u = n.degrees || 0;
          delete n.degrees;
          var c = n.ajaxHeaders;
          delete n.ajaxHeaders, e.extend(true, this, { viewer: null, tilesMatrix: {}, coverage: {}, loadingCoverage: {}, lastDrawn: [], lastResetTime: 0, _needsDraw: true, _needsUpdate: true, _hasOpaqueTile: false, _tilesLoading: 0, _tilesToDraw: [], _lastDrawn: [], _isBlending: false, _wasBlending: false, _isTainted: false, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, immediateRender: e.DEFAULT_SETTINGS.immediateRender, blendTime: e.DEFAULT_SETTINGS.blendTime, alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend, minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio, smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom, iOSDevice: e.DEFAULT_SETTINGS.iOSDevice, debugMode: e.DEFAULT_SETTINGS.debugMode, crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy, ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials, placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle, opacity: e.DEFAULT_SETTINGS.opacity, preload: e.DEFAULT_SETTINGS.preload, compositeOperation: e.DEFAULT_SETTINGS.compositeOperation, subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency, maxTilesPerFrame: e.DEFAULT_SETTINGS.maxTilesPerFrame }, n), this._preload = this.preload, delete this.preload, this._fullyLoaded = false, this._xSpring = new e.Spring({ initial: r, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._ySpring = new e.Spring({ initial: s, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._scaleSpring = new e.Spring({ initial: o, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._degreesSpring = new e.Spring({ initial: u, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._updateForScale(), l && this.fitBounds(l, a, true), this._ownAjaxHeaders = {}, this.setAjaxHeaders(c, false), this._initialized = true;
        }, e.extend(e.TiledImage.prototype, e.EventSource.prototype, { needsDraw: function() {
          return this._needsDraw;
        }, redraw: function() {
          this._needsDraw = true;
        }, getFullyLoaded: function() {
          return this._fullyLoaded;
        }, _setFullyLoaded: function(n) {
          n !== this._fullyLoaded && (this._fullyLoaded = n, this.raiseEvent("fully-loaded-change", { fullyLoaded: this._fullyLoaded }));
        }, reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = true;
        }, update: function(n) {
          let r = this._xSpring.update(), s = this._ySpring.update(), o = this._scaleSpring.update(), l = this._degreesSpring.update(), a = r || s || o || l || this._needsUpdate;
          if (a || n || !this._fullyLoaded) {
            let u = this._updateLevelsForViewport();
            this._setFullyLoaded(u);
          }
          return this._needsUpdate = false, a ? (this._updateForScale(), this._raiseBoundsChange(), this._needsDraw = true, true) : false;
        }, setDrawn: function() {
          return this._needsDraw = this._isBlending || this._wasBlending, this._needsDraw;
        }, setTainted(n) {
          this._isTainted = n;
        }, isTainted() {
          return this._isTainted;
        }, destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy(this.viewer);
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getBoundsNoRotate: function(n) {
          return n ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget);
        }, getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        }, getClippedBounds: function(n) {
          var r = this.getBoundsNoRotate(n);
          if (this._clip) {
            var s = n ? this._worldWidthCurrent : this._worldWidthTarget, o = s / this.source.dimensions.x, l = this._clip.times(o);
            r = new e.Rect(r.x + l.x, r.y + l.y, l.width, l.height);
          }
          return r.rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getTileBounds: function(n, r, s) {
          var o = this.source.getNumTiles(n), l = (o.x + r % o.x) % o.x, a = (o.y + s % o.y) % o.y, u = this.source.getTileBounds(n, l, a);
          return this.getFlip() && (u.x = Math.max(0, 1 - u.x - u.width)), u.x += (r - l) / o.x, u.y += this._worldHeightCurrent / this._worldWidthCurrent * ((s - a) / o.y), u;
        }, getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        }, getSizeInWindowCoordinates: function() {
          var n = this.imageToWindowCoordinates(new e.Point(0, 0)), r = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(r.x - n.x, r.y - n.y);
        }, _viewportToImageDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n * (this.source.dimensions.x / o), r * (this.source.dimensions.y * this.contentAspectX / o));
        }, viewportToImageCoordinates: function(n, r, s) {
          var o;
          return n instanceof e.Point ? (s = r, o = n) : o = new e.Point(n, r), o = o.rotate(-this.getRotation(s), this._getRotationPoint(s)), s ? this._viewportToImageDelta(o.x - this._xSpring.current.value, o.y - this._ySpring.current.value) : this._viewportToImageDelta(o.x - this._xSpring.target.value, o.y - this._ySpring.target.value);
        }, _imageToViewportDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n / this.source.dimensions.x * o, r / this.source.dimensions.y / this.contentAspectX * o);
        }, imageToViewportCoordinates: function(n, r, s) {
          n instanceof e.Point && (s = r, r = n.y, n = n.x);
          var o = this._imageToViewportDelta(n, r, s);
          return s ? (o.x += this._xSpring.current.value, o.y += this._ySpring.current.value) : (o.x += this._xSpring.target.value, o.y += this._ySpring.target.value), o.rotate(this.getRotation(s), this._getRotationPoint(s));
        }, imageToViewportRectangle: function(n, r, s, o, l) {
          var a = n;
          a instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.imageToViewportCoordinates(a.getTopLeft(), l), c = this._imageToViewportDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees + this.getRotation(l));
        }, viewportToImageRectangle: function(n, r, s, o, l) {
          var a = n;
          n instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.viewportToImageCoordinates(a.getTopLeft(), l), c = this._viewportToImageDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees - this.getRotation(l));
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.viewport.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.viewport.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          var r = n.minus(i.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(i.getElementPosition(this.viewer.element));
        }, _viewportToTiledImageRectangle: function(n) {
          var r = this._scaleSpring.current.value;
          return n = n.rotate(-this.getRotation(true), this._getRotationPoint(true)), new e.Rect((n.x - this._xSpring.current.value) / r, (n.y - this._ySpring.current.value) / r, n.width / r, n.height / r, n.degrees);
        }, viewportToImageZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return r * n;
        }, imageToViewportZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return n / r;
        }, setPosition: function(n, r) {
          var s = this._xSpring.target.value === n.x && this._ySpring.target.value === n.y;
          if (r) {
            if (s && this._xSpring.current.value === n.x && this._ySpring.current.value === n.y) return;
            this._xSpring.resetTo(n.x), this._ySpring.resetTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._xSpring.springTo(n.x), this._ySpring.springTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, setWidth: function(n, r) {
          this._setScale(n, r);
        }, setHeight: function(n, r) {
          this._setScale(n / this.normHeight, r);
        }, setCroppingPolygons: function(n) {
          var r = function(o) {
            return o instanceof e.Point || typeof o.x == "number" && typeof o.y == "number";
          }, s = function(o) {
            return o.map(function(l) {
              try {
                if (r(l)) return { x: l.x, y: l.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(n)) throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = n.map(function(o) {
              return s(o);
            }), this._needsDraw = true;
          } catch (o) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(o), this.resetCroppingPolygons();
          }
        }, resetCroppingPolygons: function() {
          this._croppingPolygons = null, this._needsDraw = true;
        }, fitBounds: function(n, r, s) {
          r = r || e.Placement.CENTER;
          var o = e.Placement.properties[r], l = this.contentAspectX, a = 0, u = 0, c = 1, h = 1;
          if (this._clip && (l = this._clip.getAspectRatio(), c = this._clip.width / this.source.dimensions.x, h = this._clip.height / this.source.dimensions.y, n.getAspectRatio() > l ? (a = this._clip.x / this._clip.height * n.height, u = this._clip.y / this._clip.height * n.height) : (a = this._clip.x / this._clip.width * n.width, u = this._clip.y / this._clip.width * n.width)), n.getAspectRatio() > l) {
            var f = n.height / h, m = 0;
            o.isHorizontallyCentered ? m = (n.width - n.height * l) / 2 : o.isRight && (m = n.width - n.height * l), this.setPosition(new e.Point(n.x - a + m, n.y - u), s), this.setHeight(f, s);
          } else {
            var v = n.width / c, y = 0;
            o.isVerticallyCentered ? y = (n.height - n.width / l) / 2 : o.isBottom && (y = n.height - n.width / l), this.setPosition(new e.Point(n.x - a, n.y - u + y), s), this.setWidth(v, s);
          }
        }, getClip: function() {
          return this._clip ? this._clip.clone() : null;
        }, setClip: function(n) {
          e.console.assert(!n || n instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), n instanceof e.Rect ? this._clip = n.clone() : this._clip = null, this._needsUpdate = true, this._needsDraw = true, this.raiseEvent("clip-change");
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          this.flipped = n;
        }, get flipped() {
          return this._flipped;
        }, set flipped(n) {
          let r = this._flipped !== !!n;
          this._flipped = !!n, r && (this.update(true), this._needsDraw = true, this._raiseBoundsChange());
        }, get wrapHorizontal() {
          return this._wrapHorizontal;
        }, set wrapHorizontal(n) {
          let r = this._wrapHorizontal !== !!n;
          this._wrapHorizontal = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get wrapVertical() {
          return this._wrapVertical;
        }, set wrapVertical(n) {
          let r = this._wrapVertical !== !!n;
          this._wrapVertical = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get debugMode() {
          return this._debugMode;
        }, set debugMode(n) {
          this._debugMode = !!n, this._needsDraw = true;
        }, getOpacity: function() {
          return this.opacity;
        }, setOpacity: function(n) {
          this.opacity = n;
        }, get opacity() {
          return this._opacity;
        }, set opacity(n) {
          n !== this.opacity && (this._opacity = n, this._needsDraw = true, this.raiseEvent("opacity-change", { opacity: this.opacity }));
        }, getPreload: function() {
          return this._preload;
        }, setPreload: function(n) {
          this._preload = !!n, this._needsDraw = true;
        }, getRotation: function(n) {
          return n ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        }, setRotation: function(n, r) {
          this._degreesSpring.target.value === n && this._degreesSpring.isAtTargetValue() || (r ? this._degreesSpring.resetTo(n) : this._degreesSpring.springTo(n), this._needsDraw = true, this._needsUpdate = true, this._raiseBoundsChange());
        }, getDrawArea: function() {
          if (this._opacity === 0 && !this._preload) return false;
          var n = this._viewportToTiledImageRectangle(this.viewport.getBoundsWithMargins(true));
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var r = this._viewportToTiledImageRectangle(this.getClippedBounds(true));
            n = n.intersection(r);
          }
          return n;
        }, getTilesToDraw: function() {
          let n = this._tilesToDraw.flat();
          return this._updateTilesInViewport(n), n = this._tilesToDraw.flat(), n.forEach((r) => {
            r.tile.beingDrawn = true;
          }), this._lastDrawn = n, n;
        }, _getRotationPoint: function(n) {
          return this.getBoundsNoRotate(n).getCenter();
        }, get compositeOperation() {
          return this._compositeOperation;
        }, set compositeOperation(n) {
          n !== this._compositeOperation && (this._compositeOperation = n, this._needsDraw = true, this.raiseEvent("composite-operation-change", { compositeOperation: this._compositeOperation }));
        }, getCompositeOperation: function() {
          return this._compositeOperation;
        }, setCompositeOperation: function(n) {
          this.compositeOperation = n;
        }, setAjaxHeaders: function(n, r) {
          if (n === null && (n = {}), !e.isPlainObject(n)) {
            console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          this._ownAjaxHeaders = n, this._updateAjaxHeaders(r);
        }, _updateAjaxHeaders: function(n) {
          if (n === void 0 && (n = true), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, n) {
            var r, s, o, l;
            for (var a in this.tilesMatrix) {
              r = this.source.getNumTiles(a);
              for (var u in this.tilesMatrix[a]) {
                s = (r.x + u % r.x) % r.x;
                for (var c in this.tilesMatrix[a][u]) if (o = (r.y + c % r.y) % r.y, l = this.tilesMatrix[a][u][c], l.loadWithAjax = this.loadTilesWithAjax, l.loadWithAjax) {
                  var h = this.source.getTileAjaxHeaders(a, s, o);
                  l.ajaxHeaders = e.extend({}, this.ajaxHeaders, h);
                } else l.ajaxHeaders = null;
              }
            }
            for (var f = 0; f < this._imageLoader.jobQueue.length; f++) {
              var m = this._imageLoader.jobQueue[f];
              m.loadWithAjax = m.tile.loadWithAjax, m.ajaxHeaders = m.tile.loadWithAjax ? m.tile.ajaxHeaders : null;
            }
          }
        }, _setScale: function(n, r) {
          var s = this._scaleSpring.target.value === n;
          if (r) {
            if (s && this._scaleSpring.current.value === n) return;
            this._scaleSpring.resetTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._scaleSpring.springTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        }, _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        }, _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        }, _getLevelsInterval: function() {
          var n = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))), r = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), true).x * this._scaleSpring.current.value, s = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(r / this.minPixelRatio) / Math.log(2))));
          return s = Math.max(s, this.source.minLevel || 0), n = Math.min(n, s), { lowestLevel: n, highestLevel: s };
        }, _updateLevelsForViewport: function() {
          var n = this._getLevelsInterval(), r = n.lowestLevel, s = n.highestLevel, o = [], l = this.getDrawArea(), a = e.now();
          if (this._lastDrawn.forEach((N) => {
            N.tile.beingDrawn = false;
          }), this._tilesToDraw = [], this._tilesLoading = 0, this.loadingCoverage = {}, !l) return this._needsDraw = false, this._fullyLoaded;
          var u = new Array(s - r + 1);
          for (let N = 0, Y = s; Y >= r; Y--, N++) u[N] = Y;
          for (let N = s + 1; N <= this.source.maxLevel; N++) {
            var c = this.tilesMatrix[N] && this.tilesMatrix[N][0] && this.tilesMatrix[N][0][0];
            if (c && c.isBottomMost && c.isRightMost && c.loaded) {
              u.push(N);
              break;
            }
          }
          let h = false;
          for (let N = 0; N < u.length; N++) {
            let Y = u[N];
            var f = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Y), true).x * this._scaleSpring.current.value;
            if (N === u.length - 1 || f >= this.minPixelRatio) h = true;
            else if (!h) continue;
            var m = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Y), false).x * this._scaleSpring.current.value, v = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), false).x * this._scaleSpring.current.value, y = this.immediateRender ? 1 : v, x = Math.min(1, (f - 0.5) / 0.5), T = y / Math.abs(y - m), C = this._updateLevel(Y, x, T, l, a, o);
            o = C.bestTiles;
            var H = C.updatedTiles.filter((K) => K.loaded), k = /* @__PURE__ */ (function(K, q, ee) {
              return function(ce) {
                return { tile: ce, level: K, levelOpacity: q, currentTime: ee };
              };
            })(Y, x, a);
            if (this._tilesToDraw[Y] = H.map(k), this._providesCoverage(this.coverage, Y)) break;
          }
          return o && o.length > 0 ? (o.forEach(function(N) {
            N && !N.context2D && this._loadTile(N, a);
          }, this), this._needsDraw = true, false) : this._tilesLoading === 0;
        }, _updateTilesInViewport: function(n) {
          let r = e.now(), s = this;
          this._tilesLoading = 0, this._wasBlending = this._isBlending, this._isBlending = false, this.loadingCoverage = {};
          let o = n.length ? n[0].level : 0;
          if (!this.getDrawArea()) return;
          function a(c) {
            let h = c.tile;
            if (h && h.loaded) {
              let f = s._blendTile(h, h.x, h.y, c.level, c.levelOpacity, r, o);
              s._isBlending = s._isBlending || f, s._needsDraw = s._needsDraw || f || s._wasBlending;
            }
          }
          let u = 0;
          for (let c = 0; c < n.length; c++) {
            let h = n[c];
            a(h), this._providesCoverage(this.coverage, h.level) && (u = Math.max(u, h.level));
          }
          if (u > 0) for (let c in this._tilesToDraw) c < u && delete this._tilesToDraw[c];
        }, _blendTile: function(n, r, s, o, l, a, u) {
          let c = 1e3 * this.blendTime, h, f;
          return n.blendStart || (n.blendStart = a), h = a - n.blendStart, f = c ? Math.min(1, h / c) : 1, o === u && (f = 1, h = c), this.alwaysBlend && (f *= l), n.opacity = f, f === 1 && (this._setCoverage(this.coverage, o, r, s, true), this._hasOpaqueTile = true), h < c;
        }, _updateLevel: function(n, r, s, o, l, a) {
          var u = o.getBoundingBox().getTopLeft(), c = o.getBoundingBox().getBottomRight();
          this.viewer && this.viewer.raiseEvent("update-level", { tiledImage: this, havedrawn: true, level: n, opacity: r, visibility: s, drawArea: o, topleft: u, bottomright: c, currenttime: l, best: a }), this._resetCoverage(this.coverage, n), this._resetCoverage(this.loadingCoverage, n);
          var h = this._getCornerTiles(n, u, c), f = h.topLeft, m = h.bottomRight, v = this.source.getNumTiles(n), y = this.viewport.pixelFromPoint(this.viewport.getCenter());
          this.getFlip() && (m.x += 1, this.wrapHorizontal || (m.x = Math.min(m.x, v.x - 1)));
          for (var x = Math.max(0, (m.x - f.x) * (m.y - f.y)), T = new Array(x), C = 0, H = f.x; H <= m.x; H++) for (var k = f.y; k <= m.y; k++) {
            var N;
            if (this.getFlip()) {
              var Y = (v.x + H % v.x) % v.x;
              N = H + v.x - Y - Y - 1;
            } else N = H;
            if (o.intersection(this.getTileBounds(n, N, k)) !== null) {
              var K = this._updateTile(N, k, n, s, y, v, l, a);
              a = K.bestTiles, T[C] = K.tile, C += 1;
            }
          }
          return { bestTiles: a, updatedTiles: T };
        }, _positionTile: function(n, r, s, o, l) {
          var a = n.bounds.getTopLeft();
          a.x *= this._scaleSpring.current.value, a.y *= this._scaleSpring.current.value, a.x += this._xSpring.current.value, a.y += this._ySpring.current.value;
          var u = n.bounds.getSize();
          u.x *= this._scaleSpring.current.value, u.y *= this._scaleSpring.current.value, n.positionedBounds.x = a.x, n.positionedBounds.y = a.y, n.positionedBounds.width = u.x, n.positionedBounds.height = u.y;
          var c = s.pixelFromPointNoRotate(a, true), h = s.pixelFromPointNoRotate(a, false), f = s.deltaPixelsFromPointsNoRotate(u, true), m = s.deltaPixelsFromPointsNoRotate(u, false), v = h.plus(m.divide(2)), y = o.squaredDistanceTo(v);
          this.viewer.drawer.minimumOverlapRequired(this) && (r || (f = f.plus(new e.Point(1, 1))), n.isRightMost && this.wrapHorizontal && (f.x += 0.75), n.isBottomMost && this.wrapVertical && (f.y += 0.75)), n.position = c, n.size = f, n.squaredDistance = y, n.visibility = l;
        }, _updateTile: function(n, r, s, o, l, a, u, c) {
          var h = this._getTile(n, r, s, u, a);
          this.viewer && this.viewer.raiseEvent("update-tile", { tiledImage: this, tile: h }), this._setCoverage(this.coverage, s, n, r, false);
          var f = h.loaded || h.loading || this._isCovered(this.loadingCoverage, s, n, r);
          if (this._setCoverage(this.loadingCoverage, s, n, r, f), !h.exists) return { bestTiles: c, tile: h };
          if (h.loaded && h.opacity === 1 && this._setCoverage(this.coverage, s, n, r, true), this._positionTile(h, this.source.tileOverlap, this.viewport, l, o), !h.loaded) if (h.context2D) this._setTileLoaded(h);
          else {
            var m = this._tileCache.getImageRecord(h.cacheKey);
            m && this._setTileLoaded(h, m.getData());
          }
          return h.loading ? this._tilesLoading++ : f || (c = this._compareTiles(c, h, this.maxTilesPerFrame)), { bestTiles: c, tile: h };
        }, _getCornerTiles: function(n, r, s) {
          var o, l;
          this.wrapHorizontal ? (o = e.positiveModulo(r.x, 1), l = e.positiveModulo(s.x, 1)) : (o = Math.max(0, r.x), l = Math.min(1, s.x));
          var a, u, c = 1 / this.source.aspectRatio;
          this.wrapVertical ? (a = e.positiveModulo(r.y, c), u = e.positiveModulo(s.y, c)) : (a = Math.max(0, r.y), u = Math.min(c, s.y));
          var h = this.source.getTileAtPoint(n, new e.Point(o, a)), f = this.source.getTileAtPoint(n, new e.Point(l, u)), m = this.source.getNumTiles(n);
          return this.wrapHorizontal && (h.x += m.x * Math.floor(r.x), f.x += m.x * Math.floor(s.x)), this.wrapVertical && (h.y += m.y * Math.floor(r.y / c), f.y += m.y * Math.floor(s.y / c)), { topLeft: h, bottomRight: f };
        }, _getTile: function(n, r, s, o, l) {
          var a, u, c, h, f, m, v, y, x, T, C = this.tilesMatrix, H = this.source;
          return C[s] || (C[s] = {}), C[s][n] || (C[s][n] = {}), (!C[s][n][r] || !C[s][n][r].flipped != !this.flipped) && (a = (l.x + n % l.x) % l.x, u = (l.y + r % l.y) % l.y, c = this.getTileBounds(s, n, r), h = H.getTileBounds(s, a, u, true), f = H.tileExists(s, a, u), m = H.getTileUrl(s, a, u), v = H.getTilePostData(s, a, u), this.loadTilesWithAjax ? (y = H.getTileAjaxHeaders(s, a, u), e.isPlainObject(this.ajaxHeaders) && (y = e.extend({}, this.ajaxHeaders, y))) : y = null, x = H.getContext2D ? H.getContext2D(s, a, u) : void 0, T = new e.Tile(s, n, r, c, f, m, x, this.loadTilesWithAjax, y, h, v, H.getTileHashKey(s, a, u, m, y, v)), this.getFlip() ? a === 0 && (T.isRightMost = true) : a === l.x - 1 && (T.isRightMost = true), u === l.y - 1 && (T.isBottomMost = true), T.flipped = this.flipped, C[s][n][r] = T), T = C[s][n][r], T.lastTouchTime = o, T;
        }, _loadTile: function(n, r) {
          var s = this;
          n.loading = true, this._imageLoader.addJob({ src: n.getUrl(), tile: n, source: this.source, postData: n.postData, loadWithAjax: n.loadWithAjax, ajaxHeaders: n.ajaxHeaders, crossOriginPolicy: this.crossOriginPolicy, ajaxWithCredentials: this.ajaxWithCredentials, callback: function(o, l, a) {
            s._onTileLoad(n, r, o, l, a);
          }, abort: function() {
            n.loading = false;
          } });
        }, _onTileLoad: function(n, r, s, o, l) {
          if (s) n.exists = true;
          else {
            e.console.error("Tile %s failed to load: %s - error: %s", n, n.getUrl(), o), this.viewer.raiseEvent("tile-load-failed", { tile: n, tiledImage: this, time: r, message: o, tileRequest: l }), n.loading = false, n.exists = false;
            return;
          }
          if (r < this.lastResetTime) {
            e.console.warn("Ignoring tile %s loaded before reset: %s", n, n.getUrl()), n.loading = false;
            return;
          }
          var a = this, u = function() {
            var c = a.source, h = c.getClosestLevel();
            a._setTileLoaded(n, s, h, l);
          };
          u();
        }, _setTileLoaded: function(n, r, s, o) {
          var l = 0, a = false, u = this;
          function c() {
            return a && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), l++, h;
          }
          function h() {
            l--, l === 0 && (n.loading = false, n.loaded = true, n.hasTransparency = u.source.hasTransparency(n.context2D, n.getUrl(), n.ajaxHeaders, n.postData), n.context2D || u._tileCache.cacheTile({ data: r, tile: n, cutoff: s, tiledImage: u }), u.viewer.raiseEvent("tile-ready", { tile: n, tiledImage: u, tileRequest: o }), u._needsDraw = true);
          }
          var f = c();
          this.viewer.raiseEvent("tile-loaded", { tile: n, tiledImage: this, tileRequest: o, get image() {
            return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), r;
          }, data: r, getCompletionCallback: c }), a = true, f();
        }, _compareTiles: function(n, r, s) {
          return n ? (n.push(r), this._sortTiles(n), n.length > s && n.pop(), n) : [r];
        }, _sortTiles: function(n) {
          n.sort(function(r, s) {
            return r === null ? 1 : s === null ? -1 : r.visibility === s.visibility ? r.squaredDistance - s.squaredDistance : s.visibility - r.visibility;
          });
        }, _providesCoverage: function(n, r, s, o) {
          var l, a, u, c;
          if (!n[r]) return false;
          if (s === void 0 || o === void 0) {
            l = n[r];
            for (u in l) if (Object.prototype.hasOwnProperty.call(l, u)) {
              a = l[u];
              for (c in a) if (Object.prototype.hasOwnProperty.call(a, c) && !a[c]) return false;
            }
            return true;
          }
          return n[r][s] === void 0 || n[r][s][o] === void 0 || n[r][s][o] === true;
        }, _isCovered: function(n, r, s, o) {
          return s === void 0 || o === void 0 ? this._providesCoverage(n, r + 1) : this._providesCoverage(n, r + 1, 2 * s, 2 * o) && this._providesCoverage(n, r + 1, 2 * s, 2 * o + 1) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o + 1);
        }, _setCoverage: function(n, r, s, o, l) {
          if (!n[r]) {
            e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", r);
            return;
          }
          n[r][s] || (n[r][s] = {}), n[r][s][o] = l;
        }, _resetCoverage: function(n, r) {
          n[r] = {};
        } });
      })(i), (function(e) {
        var n = function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = s.tile, this.tiledImage = s.tiledImage;
        }, r = function(s) {
          e.console.assert(s, "[ImageRecord] options is required"), e.console.assert(s.data, "[ImageRecord] options.data is required"), this._tiles = [], s.create.apply(null, [this, s.data, s.ownerTile]), this._destroyImplementation = s.destroy.bind(null, this), this.getImage = s.getImage.bind(null, this), this.getData = s.getData.bind(null, this), this.getRenderedContext = s.getRenderedContext.bind(null, this);
        };
        r.prototype = { destroy: function() {
          this._destroyImplementation(), this._tiles = null;
        }, addTile: function(s) {
          e.console.assert(s, "[ImageRecord.addTile] tile is required"), this._tiles.push(s);
        }, removeTile: function(s) {
          for (var o = 0; o < this._tiles.length; o++) if (this._tiles[o] === s) {
            this._tiles.splice(o, 1);
            return;
          }
          e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", s);
        }, getTileCount: function() {
          return this._tiles.length;
        } }, e.TileCache = function(s) {
          s = s || {}, this._maxImageCacheCount = s.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
        }, e.TileCache.prototype = { numTilesLoaded: function() {
          return this._tilesLoaded.length;
        }, cacheTile: function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
          var o = s.cutoff || 0, l = this._tilesLoaded.length, a = this._imagesLoaded[s.tile.cacheKey];
          if (a || (s.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), s.data = s.image), e.console.assert(s.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), a = this._imagesLoaded[s.tile.cacheKey] = new r({ data: s.data, ownerTile: s.tile, create: s.tiledImage.source.createTileCache, destroy: s.tiledImage.source.destroyTileCache, getImage: s.tiledImage.source.getTileCacheDataAsImage, getData: s.tiledImage.source.getTileCacheData, getRenderedContext: s.tiledImage.source.getTileCacheDataAsContext2D }), this._imagesLoadedCount++), a.addTile(s.tile), s.tile.cacheImageRecord = a, this._imagesLoadedCount > this._maxImageCacheCount) {
            for (var u = null, c = -1, h = null, f, m, v, y, x, T, C = this._tilesLoaded.length - 1; C >= 0; C--) if (T = this._tilesLoaded[C], f = T.tile, !(f.level <= o || f.beingDrawn)) {
              if (!u) {
                u = f, c = C, h = T;
                continue;
              }
              y = f.lastTouchTime, m = u.lastTouchTime, x = f.level, v = u.level, (y < m || y === m && x > v) && (u = f, c = C, h = T);
            }
            u && c >= 0 && (this._unloadTile(h), l = c);
          }
          this._tilesLoaded[l] = new n({ tile: s.tile, tiledImage: s.tiledImage });
        }, clearTilesFor: function(s) {
          e.console.assert(s, "[TileCache.clearTilesFor] tiledImage is required");
          for (var o, l = 0; l < this._tilesLoaded.length; ++l) o = this._tilesLoaded[l], o.tiledImage === s && (this._unloadTile(o), this._tilesLoaded.splice(l, 1), l--);
        }, getImageRecord: function(s) {
          return e.console.assert(s, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[s];
        }, _unloadTile: function(s) {
          e.console.assert(s, "[TileCache._unloadTile] tileRecord is required");
          var o = s.tile, l = s.tiledImage;
          let a = o.getCanvasContext && o.getCanvasContext();
          o.unload(), o.cacheImageRecord = null;
          var u = this._imagesLoaded[o.cacheKey];
          u && (u.removeTile(o), u.getTileCount() || (u.destroy(), delete this._imagesLoaded[o.cacheKey], this._imagesLoadedCount--, a && (a.canvas.width = 0, a.canvas.height = 0, l.viewer.raiseEvent("image-unloaded", { context2D: a, tile: o }))), l.viewer.raiseEvent("tile-unloaded", { tile: o, tiledImage: l }));
        } };
      })(i), (function(e) {
        e.World = function(n) {
          var r = this;
          e.console.assert(n.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = n.viewer, this._items = [], this._needsDraw = false, this._autoRefigureSizes = true, this._needsSizesFigured = false, this._delegatedFigureSizes = function(s) {
            r._autoRefigureSizes ? r._figureSizes() : r._needsSizesFigured = true;
          }, this._figureSizes();
        }, e.extend(e.World.prototype, e.EventSource.prototype, { addItem: function(n, r) {
          if (e.console.assert(n, "[World.addItem] item is required"), e.console.assert(n instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), r = r || {}, r.index !== void 0) {
            var s = Math.max(0, Math.min(this._items.length, r.index));
            this._items.splice(s, 0, n);
          } else this._items.push(n);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = true, this._needsDraw = true, n.addHandler("bounds-change", this._delegatedFigureSizes), n.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", { item: n });
        }, getItemAt: function(n) {
          return e.console.assert(n !== void 0, "[World.getItemAt] index is required"), this._items[n];
        }, getIndexOfItem: function(n) {
          return e.console.assert(n, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, n);
        }, getItemCount: function() {
          return this._items.length;
        }, setItemIndex: function(n, r) {
          e.console.assert(n, "[World.setItemIndex] item is required"), e.console.assert(r !== void 0, "[World.setItemIndex] index is required");
          var s = this.getIndexOfItem(n);
          if (r >= this._items.length) throw new Error("Index bigger than number of layers.");
          r === s || s === -1 || (this._items.splice(s, 1), this._items.splice(r, 0, n), this._needsDraw = true, this.raiseEvent("item-index-change", { item: n, previousIndex: s, newIndex: r }));
        }, removeItem: function(n) {
          e.console.assert(n, "[World.removeItem] item is required");
          var r = e.indexOf(this._items, n);
          r !== -1 && (n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy(), this._items.splice(r, 1), this._figureSizes(), this._needsDraw = true, this._raiseRemoveItem(n));
        }, removeAll: function() {
          this.viewer._cancelPendingImages();
          var n, r;
          for (r = 0; r < this._items.length; r++) n = this._items[r], n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy();
          var s = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = true, r = 0; r < s.length; r++) n = s[r], this._raiseRemoveItem(n);
        }, resetItems: function() {
          for (var n = 0; n < this._items.length; n++) this._items[n].reset();
        }, update: function(n) {
          for (var r = false, s = 0; s < this._items.length; s++) r = this._items[s].update(n) || r;
          return r;
        }, draw: function() {
          this.viewer.drawer.draw(this._items), this._needsDraw = false, this._items.forEach((n) => {
            this._needsDraw = n.setDrawn() || this._needsDraw;
          });
        }, needsDraw: function() {
          for (var n = 0; n < this._items.length; n++) if (this._items[n].needsDraw()) return true;
          return this._needsDraw;
        }, getHomeBounds: function() {
          return this._homeBounds.clone();
        }, getContentFactor: function() {
          return this._contentFactor;
        }, setAutoRefigureSizes: function(n) {
          this._autoRefigureSizes = n, n & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = false);
        }, arrange: function(n) {
          n = n || {};
          var r = n.immediately || false, s = n.layout || e.DEFAULT_SETTINGS.collectionLayout, o = n.rows || e.DEFAULT_SETTINGS.collectionRows, l = n.columns || e.DEFAULT_SETTINGS.collectionColumns, a = n.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, u = n.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, c = a + u, h;
          !n.rows && l ? h = l : h = Math.ceil(this._items.length / o);
          var f = 0, m = 0, v, y, x, T, C;
          this.setAutoRefigureSizes(false);
          for (var H = 0; H < this._items.length; H++) H && H % h === 0 && (s === "horizontal" ? (m += c, f = 0) : (f += c, m = 0)), v = this._items[H], y = v.getBounds(), y.width > y.height ? x = a : x = a * (y.width / y.height), T = x * (y.height / y.width), C = new e.Point(f + (a - x) / 2, m + (a - T) / 2), v.setPosition(C, r), v.setWidth(x, r), s === "horizontal" ? f += c : m += c;
          this.setAutoRefigureSizes(true);
        }, _figureSizes: function() {
          var n = this._homeBounds ? this._homeBounds.clone() : null, r = this._contentSize ? this._contentSize.clone() : null, s = this._contentFactor || 0;
          if (!this._items.length) this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var o = this._items[0], l = o.getBounds();
            this._contentFactor = o.getContentSize().x / l.width;
            for (var a = o.getClippedBounds().getBoundingBox(), u = a.x, c = a.y, h = a.x + a.width, f = a.y + a.height, m = 1; m < this._items.length; m++) o = this._items[m], l = o.getBounds(), this._contentFactor = Math.max(this._contentFactor, o.getContentSize().x / l.width), a = o.getClippedBounds().getBoundingBox(), u = Math.min(u, a.x), c = Math.min(c, a.y), h = Math.max(h, a.x + a.width), f = Math.max(f, a.y + a.height);
            this._homeBounds = new e.Rect(u, c, h - u, f - c), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor);
          }
          (this._contentFactor !== s || !this._homeBounds.equals(n) || !this._contentSize.equals(r)) && this.raiseEvent("metrics-change", {});
        }, _raiseRemoveItem: function(n) {
          this.raiseEvent("remove-item", { item: n });
        } });
      })(i);
    })(Mi)), Mi.exports;
  }
  var ng = ig();
  var Cn = yo(ng);
  function Do(t) {
    if (typeof t != "string") return null;
    const i = t.match(/xywh=(\d+),(\d+),(\d+),(\d+)$/);
    return i ? i.slice(1).map(Number) : null;
  }
  function cs() {
    let t, i;
    const e = new Promise((n, r) => {
      t = n, i = r;
    });
    return e.resolve = t, e.reject = i, e;
  }
  var Sn = 5e-3;
  var tr = 1.5;
  var sg = { data() {
    return { defaultCanvasCss: "", loadingTimeout: null, avResource: null, overlayElements: [], promise: cs(), tileSources: [], viewer: null, viewerState: { isReset: true } };
  }, computed: { filtersActive() {
    return Object.keys(this.$store.options.filters).length > 0;
  }, paginationButtons() {
    var e;
    const t = ((e = this.$store.manifest.viewingDirection) == null ? void 0 : e.split("-to-")) || ["left", "right"], i = [{ hidden: this.$store.isFirstPage, title: this.$translate("Previous page"), onClick: this.$store.goToPreviousPage, position: t[0] }, { hidden: this.$store.isLastPage, title: this.$translate("Next page"), onClick: this.$store.goToNextPage, position: t[1] }];
    return this.$store.isReversed && i.reverse(), i.filter((n) => !n.hidden);
  }, multiLayerResources() {
    return this.$store.options.pages.filter((t) => t > 0).map((t, i) => {
      var e, n, r, s, o;
      return { pageIndex: i, items: (o = (s = (r = (n = (e = this.$store.manifest.items[t - 1].items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.items };
    }).filter((t) => {
      var i;
      return ((i = t.items) == null ? void 0 : i.length) > 1;
    });
  } }, watch: { "$store.annotations": { handler() {
    this.updateOverlays();
  }, deep: true }, "$store.options.annotationId": function(t) {
    var s;
    if (!this.viewer || ((s = this.overlayElements.find((o) => o.classList.contains("-current"))) == null || s.classList.remove("-current"), !t)) return;
    const i = this.viewer.viewport.getBounds(), e = this.overlayElements.find((o) => o.id === t);
    if (!e) return;
    e.classList.add("-current");
    const r = this.viewer.getOverlayById(e).getBounds(this.viewer.viewport);
    i.intersection(r) || (r.x -= 0.03, r.y -= 0.03, r.width += 0.06, r.height += 0.06, this.viewer.viewport.fitBoundsWithConstraints(r));
  }, "$store.options.pages": function(t, i) {
    const e = t.length !== i.length;
    this.loadInfo(e);
  }, "$store.options.view": function() {
    this.updateOverlays();
  } }, mounted() {
    this.loadInfo(), this.$store.readyPromises.push(this.promise), this.$store.rootElement.addEventListener("keydown", this.onKeydown), this.$store.rootElement.addEventListener("keypress", this.onKeypress);
  }, beforeUnmount() {
    this.viewer && this.viewer.destroy(), this.$store.rootElement.removeEventListener("keydown", this.onKeydown), this.$store.rootElement.removeEventListener("keypress", this.onKeypress);
  }, methods: { initViewer(t) {
    const i = [];
    let e = 0, n = 0;
    const r = this.$store.isReversed ? this.$store.options.pages.toReversed() : this.$store.options.pages;
    if (r.filter((s) => s > 0).forEach((s, o) => {
      this.tileSources.filter((a) => a.$meta.page === s && a.$meta.layerIndex === (this.$store.options.layers[o] || 0)).forEach((a, u) => {
        var v;
        e = e || a[this.$store.isVertical ? "height" : "width"];
        const c = a[this.$store.isVertical ? "height" : "width"] / e;
        this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === 1 || this.$store.isReversed && s === this.$store.pageCount) && (i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: 0, [this.$store.isVertical ? "height" : "width"]: c }), n += 1 + Sn);
        const h = { tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }, { target: f } = ((v = this.$store.manifest.items[s - 1].items[0]) == null ? void 0 : v.items[u]) || {}, m = Do((f == null ? void 0 : f.id) || f);
        m ? [h.x, h.y, h.width] = m.map((y) => y / e) : n += c + Sn, this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === this.$store.pageCount || this.$store.isReversed && s === 1) && i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }), i.push(h);
      });
    }), this.viewer) {
      this.viewer.addOnceHandler("open", () => {
        if (this.viewerState.isReset || t) this.resetImage();
        else {
          if (this.viewer.viewport.applyConstraints(true), !this.$store.options.optionsResetOnPageChange) return;
          this.$store.options.optionsResetOnPageChange.forEach((s) => {
            if (s === "filters") this.resetFilters();
            else if (s === "pan") {
              const o = this.viewer.viewport.getBounds();
              if (o.x <= 0 && o.y <= 0) return;
              const l = r[0] ? 0 : 1;
              this.viewer.viewport.panTo({ x: o.x > 0 ? o.width / 2 + l : this.$store.options.pan.x, y: o.y > 0 ? o.height / 2 : this.$store.options.pan.y }), this.$store.updateOptions({ pan: {} });
            } else s === "rotation" ? (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null })) : s === "zoom" && (this.viewer.viewport.goHome(), this.$store.updateOptions({ zoom: null }));
          });
        }
      }), this.viewer.open(i);
      return;
    }
    this.viewer = Cn({ animationTime: 0.4, drawer: "canvas", element: this.$refs.image, immediateRender: this.$store.isContainerWidthAtLeast("small"), placeholderFillStyle: "grey", preserveImageSizeOnResize: true, preserveViewport: true, showNavigationControl: false, showZoomControl: false, tileSources: i, visibilityRatio: 0.2, ...this.$store.options.viewer }), this.viewer.addHandler("canvas-key", (s) => {
      var o;
      ["f", "F", "r", "R", "S", "W", "+", "=", "-", "_"].includes((o = s.originalEvent) == null ? void 0 : o.key) && (s.preventDefaultAction = true);
    }), this.viewer.gestureSettingsMouse.clickToZoom = false, this.viewer.addHandler("animation-finish", () => {
      if (this.viewerState.isReset) {
        this.removeImageOptions();
        return;
      }
      const s = this.viewer.viewport.getCenter();
      this.$store.updateOptions({ pan: { x: Math.round(s.x * 1e3) / 1e3, y: Math.round(s.y * 1e3) / 1e3 }, zoom: Math.round(this.viewer.viewport.getZoom() * 1e3) / 1e3 });
    }), this.viewer.addHandler("open", () => {
      this.startLoadingWatch(), this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0 || this.$store.options.zoom ? ((this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0) && this.viewer.viewport.panTo({ x: this.$store.options.pan.x, y: this.$store.options.pan.y }, true), this.$store.options.zoom && this.viewer.viewport.zoomTo(this.$store.options.zoom, null, true)) : this.viewer.viewport.goHome(), this.$store.options.rotation !== null && this.viewer.viewport.setRotation(this.$store.options.rotation), this.updateOverlays();
    }), this.viewer.addHandler("pan", this.updateViewerState), this.viewer.addHandler("resize", () => {
      this.viewerState.isReset && this.$nextTick(() => this.viewer.viewport.goHome(true)), this.updateViewerState();
    }), this.viewer.addHandler("rotate", this.updateViewerState), this.viewer.addHandler("zoom", this.updateViewerState), this.viewer.addHandler("tile-load-failed", (s) => {
      this.$store.addError(`Error loading image: ${s.message}`);
    }), this.defaultCanvasCss = this.viewer.drawer.canvas.style.cssText, this.updateFilterStyle(), this.$api.expose(this.resetImage), this.$api.expose(this.viewer, "viewer"), this.promise.resolve();
  }, loadInfo(t = false) {
    this.stopLoadingWatch(), this.avResource = null;
    let i, e;
    const n = [];
    this.$store.options.pages.filter((r) => r > 0).forEach((r, s) => {
      var a, u, c;
      const o = this.$store.manifest.items[r - 1], l = this.$store.options.layers[s] || 0;
      (c = (u = (a = o.items) == null ? void 0 : a[0]) == null ? void 0 : u.items) == null || c.forEach((h, f) => {
        var y, x, T, C, H, k, N, Y;
        const m = ((x = (y = h.body) == null ? void 0 : y.items) == null ? void 0 : x[l]) || h.body;
        if (!m) {
          this.$store.addError(`Resource missing for page ${r}`);
          return;
        }
        if (["Sound", "Video"].includes(m == null ? void 0 : m.type)) {
          if (this.$store.options.pages[1] > -1) {
            this.$store.updateOptions({ pages: [r] });
            return;
          }
          this.avResource = {}, e = { format: m.format, type: m.type, url: m.id }, this.$nextTick(() => {
            this.avResource = e;
          });
          const K = o.accompanyingCanvas || o.placeholderCanvas, q = (k = (H = (C = (T = K == null ? void 0 : K.items) == null ? void 0 : T[0]) == null ? void 0 : C.items) == null ? void 0 : H[0]) == null ? void 0 : k.body;
          i = ((N = q == null ? void 0 : q.items) == null ? void 0 : N[l]) || q;
        } else i = m;
        if (i && this.tileSources.find((K) => K.$meta.page === r && K.$meta.itemIndex === f && K.$meta.layerIndex === l)) return;
        const v = ((Y = i == null ? void 0 : i.source) == null ? void 0 : Y.service) || (i == null ? void 0 : i.service);
        if (v) {
          const K = [].concat(v)[0], q = K.id || K["@id"], ee = `${q}${q.at(-1) === "/" ? "" : "/"}info.json`;
          n.push(this.$store.fetchJson(ee).then((ce) => ({ ...ce, $meta: { page: r, itemIndex: f, layerIndex: l } }), (ce) => {
            let te;
            ce.response && ce.response.statusText ? te = ce.response.statusText : ce.message && (te = ce.message), this.$store.addError(`Error loading info file for page ${r}${te ? `: ${te}` : ""}`);
          }));
        } else i != null && i.id && this.tileSources.push({ $meta: { page: r, itemIndex: f, layerIndex: l }, type: "image", url: i.id, width: i.width, height: i.height });
      }), !i && !e && this.$store.addError(`Image missing for page ${r}`);
    }), n.length ? Promise.all(n).then((r) => {
      r.filter(Boolean).forEach((o) => {
        var l, a;
        if (this.$store.options.preferredImageFormat) {
          const u = o.extraFormats || ((a = (l = o.profile) == null ? void 0 : l[1]) == null ? void 0 : a.formats);
          u != null && u.includes(this.$store.options.preferredImageFormat) && (o.tileFormat = this.$store.options.preferredImageFormat);
        }
        this.tileSources.push(o);
      }), this.$store.options.pages.filter((o) => o > 0).every((o, l) => {
        var a;
        return ((a = r[l]) == null ? void 0 : a.$meta.page) === o;
      }) && this.initViewer(t);
    }) : i && this.initViewer(t);
  }, onKeydown(t) {
    t.key === "Escape" && this.$store.rootElement.focus(), [45, 48, 96].includes(t.keyCode) && (t.shiftKey ? this.resetImage(t) : this.viewer.viewport.goHome());
  }, onKeypress(t) {
    if (!ls(t)) switch (t.key) {
      case "I":
        this.resetFilters();
        break;
      case "r":
      case "R":
        this.rotateRight(t);
        break;
      case "+":
      case "=":
      case "W":
        this.zoomIn();
        break;
      case "-":
      case "_":
      case "S":
        this.zoomOut();
        break;
    }
  }, removeImageOptions() {
    this.$store.updateOptions({ pan: {}, zoom: null });
  }, resetFilters() {
    this.viewer.drawer.canvas.style.cssText = this.defaultCanvasCss, this.$store.updateOptions({ filters: {} });
  }, resetImage(t) {
    t && (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null }), this.filtersActive && this.resetFilters()), this.viewer.viewport.goHome(), this.removeImageOptions();
  }, rotateRight(t) {
    const { viewport: i } = this.viewer, e = t && t.shiftKey ? 0 : (i.getRotation() + 90) % 360;
    i.setRotation(e), this.$store.updateOptions({ rotation: e || null });
  }, setFilter(t, i) {
    const e = i.target.valueAsNumber;
    e === 1 ? delete this.$store.options.filters[t] : this.$store.options.filters[t] = e, this.$store.updateOptions({ filters: this.$store.options.filters }), this.updateFilterStyle();
  }, startLoadingWatch() {
    this.$store.loading = 0;
    for (let t = this.viewer.world.getItemCount() - 1; t >= 0; t -= 1) {
      const i = this.viewer.world.getItemAt(t);
      if (i && i._tilesLoading) {
        this.$store.loading = 1;
        break;
      }
    }
    this.loadingTimeout = setTimeout(this.startLoadingWatch, 200);
  }, stopLoadingWatch() {
    clearTimeout(this.loadingTimeout);
  }, toggleOverlays() {
    this.$store.updateOptions({ annotationsVisible: this.$store.options.annotationsVisible !== false ? false : null });
  }, updateFilterStyle() {
    if (!this.filtersActive) return;
    const t = [];
    Object.keys(this.$store.options.filters).forEach((e) => {
      t.push(`${e}(${this.$store.options.filters[e]})`);
    });
    const i = t.join(" ");
    this.viewer.drawer.canvas.style.cssText = `${this.defaultCanvasCss} filter: ${i}`;
  }, updateOverlays() {
    if (!this.viewer || !this.$store.options.pages.filter((e) => e > 0).every((e) => this.tileSources.some((n) => n.$meta.page === e)) || (this.viewer.clearOverlays(), this.overlayElements = [], !this.$store.annotationsActive)) return;
    let t, i = 0;
    this.$store.options.pages.filter((e) => e > -1).forEach((e, n) => {
      var s, o, l, a;
      const r = this.tileSources.find((u) => u.$meta.page === (e === 0 ? 1 : e) && u.$meta.layerIndex === (this.$store.options.layers[n] || 0));
      if (n === 0) {
        if (t = r[this.$store.isVertical ? "height" : "width"], e === 0) return;
      } else {
        const u = this.$store.options.pages[n - 1], c = ((s = this.$store.manifest.items[u - 1]) == null ? void 0 : s[this.$store.isVertical ? "height" : "width"]) || t;
        i += (Sn + c / t) * (this.$store.isReversed ? -1 : 1);
      }
      (l = (o = this.$store.annotations[e]) == null ? void 0 : o[0]) != null && l.coords && ((a = this.$store.annotations[e]) == null || a.forEach((u, c) => {
        const h = document.createElement("button");
        h.ariaLabel = `${e}/${c}`, h.className = `tify-media-overlay${this.$store.options.annotationId === u.id ? " -current" : ""}`, h.id = u.id, h.type = "button", new Cn.MouseTracker({ element: h, clickHandler: (f) => {
          f.quick && setTimeout(() => this.$store.toggleAnnotationId(u.id), 5);
        }, keyDownHandler: (f) => f.keyCode === 13 && this.$store.toggleAnnotationId(u.id) }), this.viewer.addOverlay({ element: h, location: new Cn.Rect(u.coords[0] / t + (this.$store.isVertical ? 0 : i), u.coords[1] / t + (this.$store.isVertical ? i : 0), u.coords[2] / t, u.coords[3] / t) }), this.overlayElements.push(h);
      }));
    });
  }, updateViewerState() {
    const t = this.viewer.viewport.getZoom();
    this.viewerState.isMaxZoom = t >= this.viewer.viewport.getMaxZoom(), this.viewerState.isMinZoom = t <= this.viewer.viewport.getMinZoom();
    const i = this.viewer.viewport.getHomeBounds(), e = this.viewer.viewport.getBounds();
    this.viewerState.isReset = Math.abs(i.height - e.height) < 1e-9 && Math.abs(i.width - e.width) < 1e-9 && Math.abs(i.x - e.x) < 1e-9 && Math.abs(i.y - e.y) < 1e-9;
  }, zoomIn() {
    this.viewer.viewport.zoomBy(tr), this.viewer.viewport.applyConstraints();
  }, zoomOut() {
    this.viewer.viewport.zoomBy(1 / tr), this.viewer.viewport.applyConstraints();
  } } };
  var rg = { class: "tify-media", "aria-live": "polite" };
  var og = { class: "tify-sr-only" };
  var ag = { key: 0, class: "tify-media-buttons -controls" };
  var lg = ["disabled", "title", "aria-label"];
  var ug = ["disabled", "title", "aria-label"];
  var cg = ["disabled", "title", "aria-label"];
  var hg = ["title", "aria-label"];
  var dg = { class: "tify-sr-only" };
  var fg = ["disabled"];
  var pg = ["title", "aria-label"];
  var gg = { class: "tify-sr-only" };
  var mg = { key: 0 };
  var vg = { class: "tify-button-list" };
  var yg = ["aria-pressed", "onClick"];
  var wg = { class: "tify-media-buttons -pagination" };
  var _g = ["title", "aria-label", "onClick"];
  function Tg(t, i, e, n, r, s) {
    var K;
    const o = ss, l = rs, a = eg, u = Yp, c = qp, h = Up, f = Ep, m = us, v = _p, y = mp, x = dp, T = ti, C = Ro, H = Po, k = _o, N = To, Y = ip;
    return E(), A("section", rg, [R("h2", og, B(t.$translate("Media")), 1), R("div", { ref: "image", class: Pe(["tify-media-image", { "-annotations-hidden": t.$store.options.annotationsVisible === false }]) }, null, 2), r.viewer ? (E(), A("div", ag, [R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMaxZoom, title: t.$translate("Zoom in"), "aria-label": t.$translate("Zoom in"), onClick: i[0] || (i[0] = (q) => s.zoomIn()) }, [ie(o)], 8, lg), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMinZoom, title: t.$translate("Zoom out"), "aria-label": t.$translate("Zoom out"), onClick: i[1] || (i[1] = (q) => s.zoomOut()) }, [ie(l)], 8, ug), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isReset, title: t.$translate("Reset"), "aria-label": t.$translate("Reset"), onClick: i[2] || (i[2] = (q) => s.resetImage(!!q.shiftKey)) }, [ie(a)], 8, cg), R("button", { type: "button", class: Pe(["tify-media-button", { "-active": !!t.$store.options.rotation }]), title: t.$translate("Rotate"), "aria-label": t.$translate("Rotate"), onClick: i[3] || (i[3] = (q) => s.rotateRight(q)) }, [ie(u)], 10, hg), ie(m, { class: Pe(["tify-media-dropdown -filters", { "-active": s.filtersActive }]), alignment: "center", position: "right", label: t.$translate("Toggle image filters"), shortcut: "i" }, { button: Ye(() => [ie(c)]), default: Ye(() => [R("h3", dg, B(t.$translate("Image filters")), 1), ie(h, { onUpdate: i[4] || (i[4] = (q, ee) => s.setFilter(q, ee)) }), R("p", null, [R("button", { type: "button", class: "tify-media-reset", disabled: !s.filtersActive, onClick: i[5] || (i[5] = zt((q) => s.resetFilters(), ["stop"])) }, [ie(f), Ge(" " + B(t.$translate("Reset")), 1)], 8, fg)])]), _: 1 }, 8, ["class", "label"]), t.$store.annotations.length && (t.$store.options.view === "text" || !t.$store.isContainerWidthAtLeast("medium")) ? (E(), A("button", { key: 0, type: "button", class: "tify-media-button", title: t.$translate("Toggle annotations"), "aria-label": t.$translate("Toggle annotations"), onClick: i[6] || (i[6] = (q) => s.toggleOverlays()) }, [t.$store.options.annotationsVisible !== false ? (E(), le(v, { key: 0 })) : (E(), le(y, { key: 1 }))], 8, pg)) : J("", true), s.multiLayerResources.length ? (E(), le(m, { key: 1, class: Pe(["tify-media-dropdown -layers", { "-active": t.$store.options.layers.some(Boolean) }]), alignment: "center", position: "right", label: t.$translate("Toggle image layer select"), shortcut: "c" }, { button: Ye(() => [ie(x)]), default: Ye(() => [R("h3", gg, B(t.$translate("Layer")), 1), (E(true), A(ue, null, Ce(s.multiLayerResources, (q) => (E(), A(ue, { key: q.pageIndex }, [t.$store.options.pages.filter((ee) => ee > 0).length > 1 ? (E(), A("h4", mg, [ie(T, { number: t.$store.options.pages[q.pageIndex], wrap: true }, null, 8, ["number"])])) : J("", true), R("ol", vg, [(E(true), A(ue, null, Ce(q.items, (ee, ce) => (E(), A("li", { key: ee.id }, [R("button", { type: "button", "aria-pressed": ce === (t.$store.options.layers[q.pageIndex] || 0), onClick: (te) => {
      t.$store.options.layers[q.pageIndex] = ce, s.loadInfo();
    } }, B(t.$store.localize(ee.label)), 9, yg)]))), 128))])], 64))), 128))]), _: 1 }, 8, ["class", "label"])) : J("", true)])) : J("", true), R("div", wg, [(E(true), A(ue, null, Ce(s.paginationButtons, (q) => (E(), A("button", { key: q.position, type: "button", class: Pe(["tify-media-button", `-${q.position}`]), title: q.title, "aria-label": q.title, onClick: q.onClick }, [q.position === "left" ? (E(), le(C, { key: 0 })) : q.position === "right" ? (E(), le(H, { key: 1 })) : q.position === "top" ? (E(), le(k, { key: 2 })) : q.position === "bottom" ? (E(), le(N, { key: 3 })) : J("", true)], 10, _g))), 128))]), (K = r.avResource) != null && K.url ? (E(), le(Y, { key: 1, src: r.avResource.url, format: r.avResource.format, hasImage: !!r.viewer }, null, 8, ["src", "format", "hasImage"])) : J("", true)]);
  }
  var xg = $(sg, [["render", Tg]]);
  var bg = {};
  var Eg = { class: "tify-icon -fullscreen-exit", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Cg(t, i) {
    return E(), A("svg", Eg, [...i[0] || (i[0] = [R("path", { d: "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" }, null, -1)])]);
  }
  var Sg = $(bg, [["render", Cg]]);
  var Pg = {};
  var Rg = { class: "tify-icon -fullscreen", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Dg(t, i) {
    return E(), A("svg", Rg, [...i[0] || (i[0] = [R("path", { d: "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" }, null, -1)])]);
  }
  var Ag = $(Pg, [["render", Dg]]);
  var Lg = {};
  var Ig = { class: "tify-icon -help-circle-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Mg(t, i) {
    return E(), A("svg", Ig, [...i[0] || (i[0] = [R("path", { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, null, -1)])]);
  }
  var Hg = $(Lg, [["render", Mg]]);
  var Og = {};
  var Fg = { class: "tify-icon -list-box-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function kg(t, i) {
    return E(), A("svg", Fg, [...i[0] || (i[0] = [R("path", { d: "M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" }, null, -1)])]);
  }
  var Bg = $(Og, [["render", kg]]);
  var Vg = {};
  var zg = { class: "tify-icon -tray-arrow-down", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Ng(t, i) {
    return E(), A("svg", zg, [...i[0] || (i[0] = [R("path", { d: "M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" }, null, -1)])]);
  }
  var Ug = $(Vg, [["render", Ng]]);
  var Wg = {};
  var jg = { class: "tify-icon -information-variant", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gg(t, i) {
    return E(), A("svg", jg, [...i[0] || (i[0] = [R("path", { d: "M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" }, null, -1)])]);
  }
  var qg = $(Wg, [["render", Gg]]);
  var Zg = {};
  var Kg = { class: "tify-icon -table-of-contents", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xg(t, i) {
    return E(), A("svg", Kg, [...i[0] || (i[0] = [R("path", { d: "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" }, null, -1)])]);
  }
  var Yg = $(Zg, [["render", Xg]]);
  var Jg = {};
  var Qg = { class: "tify-icon -text", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function $g(t, i) {
    return E(), A("svg", Qg, [...i[0] || (i[0] = [R("path", { d: "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" }, null, -1)])]);
  }
  var em = $(Jg, [["render", $g]]);
  var tm = {};
  var im = { class: "tify-icon -image-area", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function nm(t, i) {
    return E(), A("svg", im, [...i[0] || (i[0] = [R("path", { d: "M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" }, null, -1)])]);
  }
  var sm = $(tm, [["render", nm]]);
  var rm = {};
  var om = { class: "tify-icon -dots-grid", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function am(t, i) {
    return E(), A("svg", om, [...i[0] || (i[0] = [R("path", { d: "M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z" }, null, -1)])]);
  }
  var lm = $(rm, [["render", am]]);
  var um = {};
  var cm = { class: "tify-icon -page-last", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function hm(t, i) {
    return E(), A("svg", cm, [...i[0] || (i[0] = [R("path", { d: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z" }, null, -1)])]);
  }
  var dm = $(um, [["render", hm]]);
  var fm = {};
  var pm = { class: "tify-icon -skip-next", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gm(t, i) {
    return E(), A("svg", pm, [...i[0] || (i[0] = [R("path", { d: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z" }, null, -1)])]);
  }
  var mm = $(fm, [["render", gm]]);
  var vm = {};
  var ym = { class: "tify-icon -skip-previous", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function wm(t, i) {
    return E(), A("svg", ym, [...i[0] || (i[0] = [R("path", { d: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" }, null, -1)])]);
  }
  var _m = $(vm, [["render", wm]]);
  var Tm = {};
  var xm = { class: "tify-icon -page-first", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function bm(t, i) {
    return E(), A("svg", xm, [...i[0] || (i[0] = [R("path", { d: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z" }, null, -1)])]);
  }
  var Em = $(Tm, [["render", bm]]);
  var Cm = {};
  var Sm = ["disabled", "title", "aria-label"];
  var Pm = ["disabled", "title", "aria-label"];
  var Rm = ["disabled", "title", "aria-label"];
  var Dm = ["disabled", "title", "aria-label"];
  var Am = ["disabled", "title", "aria-label"];
  var Lm = ["disabled", "title", "aria-label"];
  function Im(t, i) {
    const e = Em, n = _m, r = Ro, s = Po, o = mm, l = dm;
    return E(), A("div", { class: Pe(["tify-header-button-group -pagination", { "-reversed": t.$store.isReversed, "-vertical": t.$store.isVertical }]) }, [R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("First page"), "aria-label": t.$translate("First page"), onClick: i[0] || (i[0] = (a) => t.$store.goToFirstPage()) }, [ie(e)], 8, Sm), t.$store.sections.length > 1 ? (E(), A("button", { key: 0, type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous section"), "aria-label": t.$translate("Previous section"), onClick: i[1] || (i[1] = (a) => t.$store.goToPreviousSection()) }, [ie(n)], 8, Pm)) : J("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous page"), "aria-label": t.$translate("Previous page"), onClick: i[2] || (i[2] = (a) => t.$store.goToPreviousPage()) }, [ie(r)], 8, Rm), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Next page"), "aria-label": t.$translate("Next page"), onClick: i[3] || (i[3] = (a) => t.$store.goToNextPage()) }, [ie(s)], 8, Dm), t.$store.sections.length > 1 ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button", disabled: t.$store.isLastSection, title: t.$translate("Next section"), "aria-label": t.$translate("Next section"), onClick: i[4] || (i[4] = (a) => t.$store.goToNextSection()) }, [ie(o)], 8, Am)) : J("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Last page"), "aria-label": t.$translate("Last page"), onClick: i[5] || (i[5] = (a) => t.$store.goToLastPage()) }, [ie(l)], 8, Lm)], 2);
  }
  var Mm = $(Cm, [["render", Im]]);
  var Hm = {};
  var Om = { class: "tify-icon -book-open-blank-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Fm(t, i) {
    return E(), A("svg", Om, [...i[0] || (i[0] = [R("path", { d: "M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19Z" }, null, -1)])]);
  }
  var km = $(Hm, [["render", Fm]]);
  var Bm = {};
  var Vm = { class: "tify-icon -view-module", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function zm(t, i) {
    return E(), A("svg", Vm, [...i[0] || (i[0] = [R("path", { d: "M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z" }, null, -1)])]);
  }
  var Nm = $(Bm, [["render", zm]]);
  var Um = { data() {
    return { filter: "", filteredCanvases: [], highlightIndex: 0 };
  }, watch: { filter() {
    this.updateFilteredCanvases(), this.$nextTick(() => this.updateScroll());
  } }, mounted() {
    this.updateFilteredCanvases();
  }, methods: { onKeyDownArrow() {
    this.highlightIndex < this.filteredCanvases.length - 1 && (this.highlightIndex += 1, this.updateScroll());
  }, onKeyUpArrow() {
    this.highlightIndex > 0 && (this.highlightIndex -= 1, this.updateScroll());
  }, onOpen() {
    this.filter = "", this.highlightIndex = this.$store.options.pages.at(-1) - 1, this.$nextTick(() => {
      window.matchMedia("(pointer: coarse)").matches || this.$refs.search.focus(), this.updateScroll();
    });
  }, resetFilter(t) {
    this.filter && (this.filter = "", t.stopPropagation());
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, updateFilteredCanvases() {
    const t = [], i = this.filter.toLowerCase();
    let e = -1;
    this.$store.manifest.items.forEach((n, r) => {
      const o = this.$store.localize(n.label).toLowerCase().includes(i), l = (r + 1).toFixed().includes(i);
      if (o || l) {
        const a = n;
        a.page = r + 1, a.page === this.$store.options.pages[0] && (e = t.length), t.push(a);
      }
    }), this.highlightIndex = e < 0 ? 0 : e, this.filteredCanvases = t;
  }, updateScroll() {
    const { list: t } = this.$refs, i = t.children[this.highlightIndex];
    t && i && (t.scrollTop = i.offsetTop - t.offsetHeight / 2 + i.offsetHeight / 2);
  } } };
  var Wm = { class: "tify-sr-only" };
  var jm = { class: "tify-sr-only" };
  var Gm = { class: "tify-page-select-filter" };
  var qm = ["aria-label"];
  var Zm = { ref: "list", class: "tify-button-list tify-page-select-list" };
  var Km = ["onClick"];
  function Xm(t, i, e, n, r, s) {
    const o = ti, l = us;
    return E(), le(l, { class: "tify-page-select", shortcut: "x", onOpen: s.onOpen }, { button: Ye(() => [R("span", Wm, B(`${t.$translate("Current Page")} `), 1), ie(o, { number: t.$store.options.pages.find((a) => a > 0) }, null, 8, ["number"]), R("span", jm, " / " + B(t.$translate("Toggle page select")), 1)]), default: Ye(() => [R("div", Gm, [ke(R("input", { ref: "search", "onUpdate:modelValue": i[0] || (i[0] = (a) => r.filter = a), "aria-label": t.$translate("Filter pages"), type: "text", class: "tify-page-select-input", onKeyup: i[1] || (i[1] = Ot((a) => t.$refs.list.querySelectorAll("a")[r.highlightIndex].click(), ["enter"])), onKeydown: [i[2] || (i[2] = Ot((a) => s.resetFilter(), ["esc"])), i[3] || (i[3] = Ot(zt((a) => s.onKeyUpArrow(), ["prevent"]), ["up"])), i[4] || (i[4] = Ot(zt((a) => s.onKeyDownArrow(), ["prevent"]), ["down"]))] }, null, 40, qm), [[Gi, r.filter]])]), R("ol", Zm, [(E(true), A(ue, null, Ce(r.filteredCanvases, (a, u) => (E(), A("li", { key: u }, [R("a", { href: "javascript:;", class: Pe({ "-current": t.$store.options.pages.includes(a.page), "-highlighted": r.highlightIndex === u }), onClick: (c) => s.setPage(a.page) }, [ie(o, { number: a.page, wrap: true }, null, 8, ["number"])], 10, Km)]))), 128))], 512)]), _: 1 }, 8, ["onOpen"]);
  }
  var Ym = $(Um, [["render", Xm]]);
  var Jm = { props: { textEnabled: Boolean, tocEnabled: Boolean }, data() {
    return { controlsVisible: false, fullscreen: uf(this.$store.rootElement.parentNode) };
  }, computed: { doublePageEnabled() {
    var t;
    return (t = this.$store.manifest.behavior) != null && t.some((i) => ["continuous", "individuals"].includes(i)) ? false : this.$store.manifest.items.some((i) => {
      var e, n, r, s, o;
      return ((o = (s = (r = (n = (e = i.items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.type) === "Image";
    });
  }, title() {
    return this.$store.localize((this.$store.manifest || this.$store.collection || {}).label).replace(/(\S{1,10})\s+(\S{1,10})$/, "$1\xA0$2");
  } }, created() {
    this.$api.expose(this.setView), this.$api.expose(this.toggleDoublePage), this.$api.expose(this.fullscreen.toggle, "toggleFullscreen");
  }, mounted() {
    this.$store.rootElement.addEventListener("keydown", this.onKeyDown), So(this.$refs.controls, () => {
      this.closeControlsPopup();
    });
  }, beforeUnmount() {
    this.$store.rootElement.removeEventListener("keydown", this.onKeyDown);
  }, methods: { closeControlsPopup() {
    this.controlsVisible = false;
  }, onKeyDown(t) {
    if (ls(t)) return;
    if (t.key === "Escape") {
      this.controlsVisible = false;
      return;
    }
    switch (t.key) {
      case "Backspace":
        this.$refs.switchViewSmall.offsetParent && this.toggleView(null);
        break;
      case "1":
        this.$store.manifest && this.textEnabled && this.toggleView("text");
        break;
      case "2":
        this.$store.manifest && this.toggleView("thumbnails");
        break;
      case "3":
        this.$store.manifest && this.tocEnabled && this.toggleView("toc");
        break;
      case "4":
        this.toggleView("info");
        break;
      case "5":
        (this.$store.collection || this.$store.manifest) && this.toggleView("export");
        break;
      case "6":
        this.$store.collection && this.toggleView("collection");
        break;
      case "7":
        this.toggleView("help");
        break;
      case "b":
        this.$store.manifest && this.toggleDoublePage();
        break;
      case "f":
        this.fullscreen.toggle();
        break;
    }
    if (!this.$store.manifest) return;
    const { pages: i } = this.$store.options;
    switch (t.key) {
      case "q":
      case ",":
        i[0] > 1 && this.$store.goToPreviousPage();
        break;
      case "e":
      case ".":
        this.isLastPage || this.$store.goToNextPage();
        break;
      case "Q":
        i[0] > 1 && this.$store.goToFirstPage();
        break;
      case "E":
        this.isLastPage || this.$store.goToLastPage();
        break;
    }
  }, setView(t) {
    this.$store.updateOptions({ view: t });
  }, toggleControlsPopup() {
    this.controlsVisible = !this.controlsVisible;
  }, toggleDoublePage(t) {
    const { pages: i } = this.$store.options;
    if (!this.doublePageEnabled) return i[0];
    let e;
    return i.length > 1 && t !== true || t === false ? e = [i[1] > 0 ? i[1] : i[0]] : e = [i[0], this.$store.getFacingPage(i[0])].sort(), this.$store.updateOptions({ pages: e }), e;
  }, toggleView(t) {
    this.closeControlsPopup();
    const i = t === this.$store.options.view && this.$store.manifest && this.$store.isContainerWidthAtLeast("medium") ? null : t;
    return this.$store.updateOptions({ view: i }), i;
  } } };
  var Qm = { class: "tify-header" };
  var $m = { class: "tify-header-column -title" };
  var ev = ["title"];
  var tv = { key: 0, class: "tify-header-column -pagination" };
  var iv = { class: "tify-sr-only" };
  var nv = { class: "tify-header-button-group -page-select" };
  var sv = ["title", "aria-label", "aria-pressed"];
  var rv = { ref: "controls", class: "tify-header-column -controls" };
  var ov = { class: "tify-sr-only" };
  var av = { ref: "switchViewSmall", class: "tify-header-button-group -toggle" };
  var lv = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var uv = ["id"];
  var cv = { class: "tify-header-button-group -view" };
  var hv = ["aria-controls", "aria-expanded"];
  var dv = { class: "tify-header-button-label" };
  var fv = ["aria-controls", "aria-expanded"];
  var pv = { class: "tify-header-button-label" };
  var gv = ["aria-controls", "aria-expanded"];
  var mv = { class: "tify-header-button-label" };
  var vv = ["aria-controls", "aria-expanded"];
  var yv = { class: "tify-header-button-label" };
  var wv = ["aria-controls", "aria-expanded"];
  var _v = { class: "tify-header-button-label" };
  var Tv = ["aria-controls", "aria-expanded"];
  var xv = { class: "tify-header-button-label" };
  var bv = ["aria-controls", "aria-expanded"];
  var Ev = { class: "tify-header-button-label" };
  var Cv = { class: "tify-header-button-group -view" };
  var Sv = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var Pv = { class: "tify-header-button-label" };
  var Rv = ["title", "aria-label"];
  var Dv = { class: "tify-header-button-label" };
  var Av = ["title", "aria-label"];
  var Lv = { class: "tify-header-button-label" };
  function Iv(t, i, e, n, r, s) {
    const o = Ym, l = Nm, a = km, u = Mm, c = lm, h = sm, f = em, m = Yg, v = qg, y = Ug, x = Bg, T = Hg, C = Ag, H = Sg;
    return E(), A("header", Qm, [R("div", $m, [R("h1", { class: "tify-header-title", title: s.title }, B(s.title), 9, ev)]), t.$store.pageCount > 1 ? (E(), A("div", tv, [R("h2", iv, B(t.$translate("Page")), 1), R("div", nv, [ie(o), s.doublePageEnabled ? (E(), A("button", { key: 0, type: "button", class: Pe(["tify-header-button", { "-vertical": t.$store.isVertical }]), title: t.$translate("Toggle double-page"), "aria-label": t.$translate("Toggle double-page"), "aria-pressed": t.$store.options.pages.length > 1, onClick: i[0] || (i[0] = (...k) => s.toggleDoublePage && s.toggleDoublePage(...k)) }, [t.$store.isCustomPageView ? (E(), le(l, { key: 0 })) : (E(), le(a, { key: 1 }))], 10, sv)) : J("", true)]), t.$store.pageCount > 1 ? (E(), le(u, { key: 0 })) : J("", true)])) : J("", true), R("div", rv, [R("h2", ov, B(t.$translate("View [noun]")), 1), R("div", av, [R("button", { type: "button", "aria-controls": t.$getId("controls"), "aria-expanded": r.controlsVisible, class: "tify-header-button", title: t.$translate("View [noun]"), "aria-label": t.$translate("View [noun]"), onClick: i[1] || (i[1] = (...k) => s.toggleControlsPopup && s.toggleControlsPopup(...k)) }, [ie(c)], 8, lv)], 512), R("div", { id: t.$getId("controls"), class: Pe(["tify-dropdown-content -bottom -mobile-only", { "-visible": r.controlsVisible }]) }, [R("div", cv, [t.$store.manifest ? (E(), A("button", { key: 0, type: "button", class: "tify-header-button -media", "aria-controls": t.$getId("media"), "aria-expanded": !t.$store.options.view, onClick: i[2] || (i[2] = (k) => s.toggleView(null)) }, [ie(h), R("span", dv, B(t.$translate("Media")), 1)], 8, hv)) : J("", true), e.textEnabled ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button", "aria-controls": t.$getId("text"), "aria-expanded": t.$store.options.view === "text", onClick: i[3] || (i[3] = (k) => s.toggleView("text")) }, [ie(f), R("span", pv, B(t.$translate("Text")), 1)], 8, fv)) : J("", true), t.$store.manifest ? (E(), A("button", { key: 2, type: "button", class: "tify-header-button", "aria-controls": t.$getId("thumbnails"), "aria-expanded": t.$store.options.view === "thumbnails", onClick: i[4] || (i[4] = (k) => s.toggleView("thumbnails")) }, [ie(l), R("span", mv, B(t.$translate("Pages")), 1)], 8, gv)) : J("", true), e.tocEnabled ? (E(), A("button", { key: 3, type: "button", class: "tify-header-button", "aria-controls": t.$getId("toc"), "aria-expanded": t.$store.options.view === "toc", onClick: i[5] || (i[5] = (k) => s.toggleView("toc")) }, [ie(m), R("span", yv, B(t.$translate("Contents")), 1)], 8, vv)) : J("", true), R("button", { type: "button", class: "tify-header-button", "aria-controls": t.$getId("info"), "aria-expanded": t.$store.options.view === "info", onClick: i[6] || (i[6] = (k) => s.toggleView("info")) }, [ie(v), R("span", _v, B(t.$translate("Info")), 1)], 8, wv), t.$store.collection || t.$store.manifest ? (E(), A("button", { key: 4, type: "button", class: "tify-header-button", "aria-controls": t.$getId("export"), "aria-expanded": t.$store.options.view === "export", onClick: i[7] || (i[7] = (k) => s.toggleView("export")) }, [ie(y), R("span", xv, B(t.$translate("Export [noun]")), 1)], 8, Tv)) : J("", true), t.$store.collection ? (E(), A("button", { key: 5, type: "button", class: "tify-header-button", "aria-controls": t.$getId("collection"), "aria-expanded": t.$store.options.view === "collection", onClick: i[8] || (i[8] = (k) => s.toggleView("collection")) }, [ie(x), R("span", Ev, B(t.$translate("Collection")), 1)], 8, bv)) : J("", true)]), R("div", Cv, [R("button", { type: "button", class: "tify-header-button -icon-only", "aria-controls": t.$getId("help"), "aria-expanded": t.$store.options.view === "help", title: t.$translate("Help"), "aria-label": t.$translate("Help"), onClick: i[9] || (i[9] = (k) => s.toggleView("help")) }, [ie(T), R("span", Pv, B(t.$translate("Help")), 1)], 8, Sv), r.fullscreen.isFullscreen ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Exit fullscreen"), "aria-label": t.$translate("Exit fullscreen"), onClick: i[11] || (i[11] = (k) => r.fullscreen.toggle()) }, [ie(H), R("span", Lv, B(t.$translate("Exit fullscreen")), 1)], 8, Av)) : (E(), A("button", { key: 0, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Fullscreen"), "aria-label": t.$translate("Fullscreen"), onClick: i[10] || (i[10] = (k) => r.fullscreen.toggle()) }, [ie(C), R("span", Dv, B(t.$translate("Fullscreen")), 1)], 8, Rv))]), t.$store.pageCount > 1 ? (E(), le(u, { key: 0 })) : J("", true)], 10, uv)], 512)]);
  }
  var Mv = $(Jm, [["render", Iv]]);
  var Hv = { version: "0.35.0" };
  var Ov = { props: { readyPromise: { type: Object, default: null, required: true } }, data() {
    return { readyToRender: false };
  }, computed: { hasText() {
    var t, i;
    return (i = (t = this.$store.manifest) == null ? void 0 : t.items) == null ? void 0 : i.some((e) => "annotations" in e);
  }, hasToc() {
    return this.$store.structures.length > 0;
  } }, watch: { "$store.options.pages": function(t, i) {
    i && (this.$store.options.layers = []), this.$store.annotationsActive && this.$store.loadAnnotations();
  }, "$store.options.view": function() {
    this.$store.annotationsActive && this.$store.loadAnnotations();
  } }, created() {
    this.$api.expose(this.setLanguage), this.$api.expose(this.$store.setPage), this.$api.expose(this.$store.updateOptions);
  }, mounted() {
    if (this.$store.rootElement = this.$el, !this.$store.options.manifestUrl) {
      if (this.$store.options.contentStateEnabled) {
        const t = new URLSearchParams(window.location.search);
        this.$store.options.manifestUrl = t.get("iiif-content") || "";
      }
      if (!this.$store.options.manifestUrl) {
        this.$store.addError("Missing IIIF manifest URL");
        return;
      }
    }
    Promise.all([this.$store.loadManifest(this.$store.options.manifestUrl), this.setLanguage(this.$store.options.language)]).then(() => {
      this.readyToRender = true, this.$nextTick(() => {
        Promise.all(this.$store.readyPromises).then(() => {
          setTimeout(this.readyPromise.resolve);
        });
      });
    }, (t) => {
      this.readyPromise.reject(t);
    });
  }, beforeUnmount() {
    clearTimeout(this.$store.urlUpdateTimeout), window.removeEventListener("popstate", this.$store.initOptions);
  }, methods: { setLanguage(t) {
    const i = cs();
    if (t === "en") return this.$store.options.language = "en", this.$translate.setTranslation(null), i.resolve(t), i;
    if (this.$store.options.translationsDirUrl === null) return i.reject(new Error("Could not determine translationsDirUrl")), i;
    const e = `${this.$store.options.translationsDirUrl}/${t}.json?${Hv.version}`;
    return this.$store.fetchJson(e).then((n) => {
      this.$store.options.language = t, this.$translate.setTranslation(n), i.resolve(t);
    }, (n) => {
      const r = n.response ? n.response.statusText : n.message;
      this.$store.addError(`Error loading translation \u201C${t}\u201D: ${r}`), i.resolve(this.$store.options.language);
    }), i;
  } } };
  var Fv = { key: 1, class: "tify-main" };
  var kv = { key: 2, class: "tify-loading", role: "status" };
  var Bv = { class: "tify-sr-only" };
  var Vv = { key: 3, class: "tify-error" };
  var zv = ["aria-label"];
  var Nv = { class: "tify-error-messages" };
  function Uv(t, i, e, n, r, s) {
    const o = Mv, l = xg, a = Sd, u = md, c = id, h = Yh, f = rh, m = nc, v = Hu, y = vo;
    return E(), A("article", { class: Pe(["tify", t.$store.options.colorMode === "auto" ? "" : `-${t.$store.options.colorMode}`]), tabindex: "-1" }, [r.readyToRender && (t.$store.collection || t.$store.manifest) ? (E(), le(o, { key: 0, textEnabled: s.hasText, tocEnabled: s.hasToc }, null, 8, ["textEnabled", "tocEnabled"])) : J("", true), r.readyToRender ? (E(), A("div", Fv, [t.$store.manifest ? (E(), A(ue, { key: 0 }, [ie(l, { id: t.$getId("media") }, null, 8, ["id"]), s.hasText ? ke((E(), le(a, { key: 0, id: t.$getId("text") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "text"]]) : J("", true), ke(ie(u, { id: t.$getId("thumbnails") }, null, 8, ["id"]), [[Xe, t.$store.options.view === "thumbnails"]]), s.hasToc ? ke((E(), le(c, { key: 1, id: t.$getId("toc") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "toc"]]) : J("", true)], 64)) : J("", true), t.$store.collection || t.$store.manifest ? ke((E(), le(h, { key: 1, id: t.$getId("export") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "export"]]) : J("", true), t.$store.collection || t.$store.manifest ? ke((E(), le(f, { key: 2, id: t.$getId("info") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "info"]]) : J("", true), t.$store.collection ? ke((E(), le(m, { key: 3, id: t.$getId("collection") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "collection"]]) : J("", true), ke(ie(v, { id: t.$getId("help") }, null, 8, ["id"]), [[Xe, t.$store.options.view === "help"]])])) : J("", true), t.$store.loading ? (E(), A("div", kv, [R("span", Bv, B(t.$translate("Loading")), 1)])) : J("", true), t.$store.errors.size ? (E(), A("section", Vv, [R("button", { type: "button", class: "tify-error-close", "aria-label": t.$translate("Dismiss"), onClick: i[0] || (i[0] = (x) => t.$store.clearErrors()) }, [ie(y)], 8, zv), R("div", Nv, [(E(true), A(ue, null, Ce(t.$store.errors, (x) => (E(), A("p", { key: x }, B(x), 1))), 128))])])) : J("", true)], 2);
  }
  var Wv = $(Ov, [["render", Uv]]);
  var jv = { annotationId: null, annotationsVisible: null, childManifestAutoloaded: true, childManifestUrl: null, colorMode: "auto", container: null, contentStateEnabled: false, fallbackLanguage: "en", filters: {}, language: "en", layers: [], manifestUrl: null, optionsResetOnPageChange: ["pan"], pageLabelFormat: "P&nbsp;\xB7 L", pages: null, pan: {}, preferredImageFormat: null, rotation: null, translationsDirUrl: null, urlQueryKey: null, urlQueryParams: ["annotationId", "annotationsVisible", "childManifestUrl", "layers", "filters", "pages", "pan", "rotation", "view", "zoom"], view: null, viewer: {}, zoom: null };
  function Gv(t) {
    return { expose(i, e) {
      t[e || i.name.replace("bound ", "")] = i;
    } };
  }
  var qv = { install: (t, i) => {
    t.config.globalProperties.$api = new Gv(i.instance);
  } };
  var Zv = "TIFY is a slim and mobile-friendly IIIF document viewer, released under the <a href='https://www.gnu.org/licenses/agpl-3.0.html.en'>GNU Affero General Public License 3.0</a>.";
  var Kv = "Copyright &copy; 2017&ndash;2026 <a href='https://www.uni-goettingen.de/en/'>G\xF6ttingen University</a>&nbsp;/ <a href='https://www.sub.uni-goettingen.de/en/'>G\xF6ttingen State and University Library</a>";
  var Xv = { $info: Zv, $copyright: Kv, "$n/a": "\u2012" };
  var Yv = { install: (t) => {
    const i = gi(null);
    t.config.globalProperties.$translate = (e) => {
      var s, o, l;
      const { language: n } = t.config.globalProperties.$store.options, r = (o = (s = t.config.globalProperties.$store.options.translations) == null ? void 0 : s[n]) == null ? void 0 : o[e];
      return r || ((l = i.value) != null && l[e] ? i.value[e] : Xv[e] || e.replace(/\s*\[.+?\]/g, ""));
    }, t.config.globalProperties.$translate.setTranslation = (e) => {
      i.value = e;
    };
  } };
  var Jv = { install: (t) => {
    const i = crypto != null && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString().slice(2);
    t.config.globalProperties.$getId = (e) => `${i}-${e}`;
  } };
  function _i(t) {
    "@babel/helpers - typeof";
    return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, _i(t);
  }
  function Qv(t, i) {
    if (_i(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var n = e.call(t, i);
      if (_i(n) != "object") return n;
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(t);
  }
  function $v(t) {
    var i = Qv(t, "string");
    return _i(i) == "symbol" ? i : i + "";
  }
  function ir(t, i, e) {
    return (i = $v(i)) in t ? Object.defineProperty(t, i, { value: e, enumerable: true, configurable: true, writable: true }) : t[i] = e, t;
  }
  function ey(t) {
    return Array.isArray(t) ? t : t ? [t] : [];
  }
  function ct(t) {
    for (let i in t) (t[i] === void 0 || t[i] === null) && delete t[i];
    return t;
  }
  var ty = "http://library.stanford.edu/iiif/image-api/compliance.html#level0";
  var iy = "http://library.stanford.edu/iiif/image-api/compliance.html#level1";
  var Ao = "http://library.stanford.edu/iiif/image-api/compliance.html#level2";
  var ny = "http://library.stanford.edu/iiif/image-api/conformance.html#level0";
  var sy = "http://library.stanford.edu/iiif/image-api/conformance.html#level1";
  var Lo = "http://library.stanford.edu/iiif/image-api/conformance.html#level2";
  var ry = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0";
  var oy = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1";
  var Io = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2";
  var ay = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0";
  var ly = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1";
  var Mo = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2";
  var uy = "http://iiif.io/api/image/1/level0.json";
  var cy = "http://iiif.io/api/image/1/profiles/level0.json";
  var hy = "http://iiif.io/api/image/1/level1.json";
  var dy = "http://iiif.io/api/image/1/profiles/level1.json";
  var Ho = "http://iiif.io/api/image/1/level2.json";
  var Oo = "http://iiif.io/api/image/1/profiles/level2.json";
  var fy = "http://iiif.io/api/image/2/level0.json";
  var py = "http://iiif.io/api/image/2/profiles/level0.json";
  var gy = "http://iiif.io/api/image/2/level1.json";
  var my = "http://iiif.io/api/image/2/profiles/level1.json";
  var Fo = "http://iiif.io/api/image/2/level2.json";
  var ko = "http://iiif.io/api/image/2/profiles/level2.json";
  var vy = "level0";
  var yy = "level1";
  var Bo = "level2";
  var wy = "http://iiif.io/api/image/2/level0";
  var _y = "http://iiif.io/api/image/2/level1";
  var Vo = "http://iiif.io/api/image/2/level2";
  var Ty = [Vo, Ao, Lo, Io, Mo, Ho, Oo, Fo, ko, Bo];
  var xy = [wy, _y, Vo, ty, iy, Ao, ny, sy, Lo, ry, oy, Io, ay, ly, Mo, uy, cy, hy, dy, Ho, Oo, fy, py, gy, my, Fo, ko, vy, yy, Bo];
  var by = xy;
  var nr = ["sc:Collection", "sc:Manifest", "sc:Canvas", "sc:AnnotationList", "oa:Annotation", "sc:Range", "sc:Layer", "sc:Sequence", "oa:Choice", "Service", "ContentResource"];
  function Ey(t) {
    if (t == null) throw Error("Null or undefined is not a valid entity.");
    if (Array.isArray(t)) throw Error("Array is not a valid entity");
    if (typeof t != "object") throw Error(`${typeof t} is not a valid entity`);
    if (typeof t["@type"] == "string") {
      let i = nr.indexOf(t["@type"]);
      if (i !== -1) return nr[i];
    }
    if (t.profile) return "Service";
    if (t.format || t["@type"]) return "ContentResource";
    throw Error("Resource type is not known");
  }
  var Cy = class zo {
    constructor(i, e = {}) {
      ir(this, "traversals", void 0), ir(this, "options", void 0), this.traversals = { collection: [], manifest: [], canvas: [], annotationList: [], sequence: [], annotation: [], contentResource: [], choice: [], range: [], service: [], layer: [], ...i }, this.options = { convertPropsToArray: true, mergeMemberProperties: true, allowUndefinedReturn: false, ...e };
    }
    static all(i) {
      return new zo({ collection: [i], manifest: [i], canvas: [i], annotationList: [i], sequence: [i], annotation: [i], contentResource: [i], choice: [i], range: [i], service: [i], layer: [i] });
    }
    traverseCollection(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCollectionItems(i))), this.traversals.collection);
    }
    traverseCollectionItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.manifests || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Manifest" } : s), ...(i.collections || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Collection" } : s), ...i.members || []], n = [], r = e.filter((s) => n.includes(s["@id"]) ? false : (n.push(s["@id"]), true));
        delete i.collections, delete i.manifests, i.members = r;
      }
      return i.manifests && (i.manifests = i.manifests.map((e) => this.traverseManifest(typeof e == "string" ? { "@id": e, "@type": "sc:Manifest" } : e))), i.collections && (i.collections = i.collections.map((e) => this.traverseCollection(typeof e == "string" ? { "@id": e, "@type": "sc:Collection" } : e))), i.members && (i.members = i.members.map((e) => typeof e == "string" ? e : e["@type"] === "sc:Collection" ? this.traverseCollection(e) : e["@type"] === "sc:Manifest" ? this.traverseManifest(e) : this.traverseUnknown(e))), i;
    }
    traverseManifest(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseManifestItems(i))), this.traversals.manifest);
    }
    traverseManifestItems(i) {
      return i.sequences && (i.sequences = i.sequences.map((e) => this.traverseSequence(e))), i.structures && (i.structures = i.structures.map((e) => this.traverseRange(e))), i;
    }
    traverseSequence(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseSequenceItems(i))), this.traversals.sequence);
    }
    traverseSequenceItems(i) {
      return i.canvases && (i.canvases = i.canvases.map((e) => this.traverseCanvas(e))), i;
    }
    traverseCanvas(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCanvasItems(i))), this.traversals.canvas);
    }
    traverseCanvasItems(i) {
      return i.images && (i.images = i.images.map((e) => (e.on && e["@type"] !== "oa:Annotation" && e["@type"] !== "Annotation" && (e["@type"] = "oa:Annotation"), this.traverseAnnotation(e)))), i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseRange(i) {
      return i["@type"] !== "sc:Range" && (i["@type"] = "sc:Range"), this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseRangeItems(i))), this.traversals.range);
    }
    traverseRangeItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.ranges || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Range" } : n), ...(i.canvases || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Canvas" } : n), ...i.members || []];
        delete i.ranges, delete i.canvases, i.members = e.length ? e.map((n) => this.traverseUnknown(n)) : void 0;
      }
      return i;
    }
    traverseAnnotationList(i) {
      let e = typeof i == "string" ? { "@id": i, "@type": "sc:AnnotationList" } : i;
      return this.traverseType(this.traverseDescriptive(this.traverseAnnotationListItems(e)), this.traversals.annotationList);
    }
    traverseAnnotationListItems(i) {
      return i.resources && (i.resources = i.resources.map((e) => this.traverseAnnotation(e))), i;
    }
    traverseAnnotation(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseAnnotationItems(i))), this.traversals.annotation);
    }
    traverseAnnotationItems(i) {
      return i.resource && (Array.isArray(i.resource) ? i.resource = i.resource.map((e) => this.traverseContentResource(e)) : i.resource = this.traverseContentResource(i.resource)), i.on, i;
    }
    traverseLayer(i) {
      return this.traverseType(this.traverseLinking(this.traverseLayerItems(i)), this.traversals.layer);
    }
    traverseLayerItems(i) {
      return i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseChoice(i) {
      return this.traverseType(this.traverseChoiceItems(i), this.traversals.choice);
    }
    traverseChoiceItems(i) {
      return i.default && i.default !== "rdf:nil" && (i.default = this.traverseContentResource(i.default)), i.item && i.item !== "rdf:nil" && (i.item = i.item.map((e) => this.traverseContentResource(e))), i;
    }
    traverseService(i) {
      return this.traverseType(this.traverseLinking(i), this.traversals.service);
    }
    traverseContentResource(i) {
      return i["@type"] === "oa:Choice" ? this.traverseChoice(i) : this.traverseType(this.traverseDescriptive(this.traverseLinking(i)), this.traversals.contentResource);
    }
    traverseUnknown(i) {
      if (!i["@type"] || typeof i == "string") return i;
      switch (Ey(i)) {
        case "sc:Collection":
          return this.traverseCollection(i);
        case "sc:Manifest":
          return this.traverseManifest(i);
        case "sc:Canvas":
          return this.traverseCanvas(i);
        case "sc:Sequence":
          return this.traverseSequence(i);
        case "sc:Range":
          return this.traverseRange(i);
        case "oa:Annotation":
          return this.traverseAnnotation(i);
        case "sc:AnnotationList":
          return this.traverseAnnotationList(i);
        case "sc:Layer":
          return this.traverseLayer(i);
        case "Service":
          return this.traverseService(i);
        case "oa:Choice":
          return this.traverseChoice(i);
        case "ContentResource":
          return this.traverseContentResource(i);
      }
      return i.profile ? this.traverseService(i) : i;
    }
    traverseImageResource(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) typeof s == "string" ? r.push(this.traverseContentResource({ "@id": s, "@type": "dctypes:Image" })) : r.push(this.traverseContentResource(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseDescriptive(i) {
      return i.thumbnail && (i.thumbnail = this.traverseImageResource(i.thumbnail)), i.logo && (i.logo = this.traverseImageResource(i.logo)), i;
    }
    traverseOneOrMoreServices(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) r.push(this.traverseService(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseLinking(i) {
      return i.related && (i.related = this.traverseOneOrManyType(i.related, this.traversals.contentResource)), i.rendering && (i.rendering = this.traverseOneOrManyType(i.rendering, this.traversals.contentResource)), i.service && (i.service = this.traverseOneOrMoreServices(i.service)), i.seeAlso && (i.seeAlso = this.traverseOneOrManyType(i.seeAlso, this.traversals.contentResource)), i.within && (typeof i.within == "string" || (i.within = this.traverseOneOrManyType(i.within, this.traversals.contentResource))), i.startCanvas && (typeof i.startCanvas == "string" ? i.startCanvas = this.traverseType({ "@id": i.startCanvas, "@type": "sc:Canvas" }, this.traversals.canvas) : i.startCanvas && this.traverseType(i.startCanvas, this.traversals.canvas)), i.contentLayer && (typeof i.contentLayer == "string" ? i.contentLayer = this.traverseLayer({ "@id": i.contentLayer, "@type": "sc:Layer" }) : i.contentLayer = this.traverseLayer(i.contentLayer)), i;
    }
    traverseOneOrManyType(i, e) {
      if (!Array.isArray(i)) if (this.options.convertPropsToArray) i = [i];
      else return this.traverseType(i, e);
      return i.map((n) => this.traverseType(n, e));
    }
    traverseType(i, e) {
      return e.reduce((n, r) => {
        let s = r(n);
        return s === void 0 && !this.options.allowUndefinedReturn ? n : s;
      }, i);
    }
  };
  var Sy = ["http://iiif.io/api/image/2/level1", "http://iiif.io/api/image/2/level2", "http://library.stanford.edu/iiif/image-api/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/conformance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2", "http://iiif.io/api/image/1/level1.json", "http://iiif.io/api/image/1/profiles/level1.json", "http://iiif.io/api/image/1/level2.json", "http://iiif.io/api/image/1/profiles/level2.json", "http://iiif.io/api/image/2/level1.json", "http://iiif.io/api/image/2/profiles/level1.json", "http://iiif.io/api/image/2/level2.json", "http://iiif.io/api/image/2/profiles/level2.json", "level1", "level2"];
  var Bn = { attributionLabel: "Attribution", providerId: "http://example.org/provider", providerName: "" };
  function Py(t) {
    if (typeof t == "string") return [t];
    if (!t) return [];
    let i = Array.isArray(t) ? t : [t], e = [];
    for (let n of i) {
      if (typeof n == "string") {
        e.push(n);
        continue;
      }
      e.push({ "@language": n["@language"] || n.language, "@value": n["@value"] || n.value });
    }
    return e;
  }
  function kt(t, i = "none") {
    if (!t) return { none: [""] };
    let e = Py(t), n = {};
    for (let r of e) {
      if (typeof r == "string") {
        n[i] = n[i] ? n[i] : [], n[i].push(r || "");
        continue;
      }
      if (!r["@language"]) {
        n[i] = n[i] ? n[i] : [], n[i].push(r["@value"] || "");
        continue;
      }
      let s = r["@language"];
      n[s] = n[s] ? n[s] : [], n[s].push(r["@value"] || "");
    }
    return Object.keys(n).length === 0 ? { none: [""] } : n;
  }
  function No(t) {
    if (Array.isArray(t)) return No(t.find((i) => typeof i == "string"));
    if (Ty.indexOf(t) !== -1) return "level2";
    if (Sy.indexOf(t) !== -1) return "level1";
    if (by.indexOf(t) !== -1) return "level0";
    if (typeof t == "string") return t;
  }
  function Ry(t) {
    let i = Array.isArray(t) ? t : [t];
    for (let e of i) switch (e) {
      case "http://iiif.io/api/image/2/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2":
        return "ImageService2";
      case "http://iiif.io/api/image/1/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
        return "ImageService1";
      case "http://iiif.io/api/annex/openannotation/context.json":
        return "ImageApiSelector";
    }
  }
  function Dy(t) {
    switch (t) {
      case "http://iiif.io/api/image/2/level0.json":
      case "http://iiif.io/api/image/2/level1.json":
      case "http://iiif.io/api/image/2/level2.json":
        return "ImageService2";
      case "http://iiif.io/api/auth/1/kiosk":
      case "http://iiif.io/api/auth/1/login":
      case "http://iiif.io/api/auth/1/clickthrough":
      case "http://iiif.io/api/auth/1/external":
      case "http://iiif.io/api/auth/0/kiosk":
      case "http://iiif.io/api/auth/0/login":
      case "http://iiif.io/api/auth/0/clickthrough":
      case "http://iiif.io/api/auth/0/external":
        return "AuthCookieService1";
      case "http://iiif.io/api/auth/1/token":
      case "http://iiif.io/api/auth/0/token":
        return "AuthTokenService1";
      case "http://iiif.io/api/auth/1/logout":
      case "http://iiif.io/api/auth/0/logout":
        return "AuthLogoutService1";
      case "http://iiif.io/api/search/1/search":
      case "http://iiif.io/api/search/0/search":
        return "SearchService1";
      case "http://iiif.io/api/search/1/autocomplete":
      case "http://iiif.io/api/search/0/autocomplete":
        return "AutoCompleteService1";
    }
  }
  function sr(t) {
    for (let i of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (t.startsWith(`${i}:`)) return t.slice(i.length + 1);
    return t;
  }
  var Ay = ["Collection", "Manifest", "Annotation", "AnnotationPage", "Range", "Service"];
  function hs(t) {
    let i = t["@id"] || t.id, e = t["@type"] || t.type, n = t.profile || void 0, r = t["@context"] || void 0;
    if (n) {
      let s = Dy(n);
      if (s) return s;
    }
    if (r) {
      let s = Ry(r);
      if (s) return s;
    }
    if (e) {
      if (Array.isArray(e)) {
        if (e.indexOf("oa:CssStylesheet") !== -1) return "CssStylesheet";
        if (e.indexOf("cnt:ContentAsText") !== -1) return "TextualBody";
        e = e[0];
      }
      for (let s of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (e.startsWith(`${s}:`)) {
        e = e.slice(s.length + 1);
        break;
      }
      switch (e) {
        case "Layer":
          return "AnnotationCollection";
        case "AnnotationList":
          return "AnnotationPage";
        case "cnt:ContentAsText":
          return "TextualBody";
      }
    }
    if (e && Ay.indexOf(e) !== -1) return e;
    if (t.format) {
      if (t.format.startsWith("image/")) return "Image";
      if (t.format.startsWith("text/") || t.format === "application/pdf") return "Text";
      if (t.format.startsWith("application/")) return "Dataset";
    }
    return i && (i.endsWith(".jpg") || i.endsWith(".png") || i.endsWith(".jpeg")) ? "Image" : e || "unknown";
  }
  var Ly = /^|["'\\>]http(s)?:\/\/(creativecommons.org|rightsstatements.org)\/[^"'\\<\n]+/gm;
  function Iy(t) {
    let i = t.match(Ly);
    return i ? i[0] : t;
  }
  function My(t, i = "Rights/License", e = "none") {
    let n = null, r = [], s = Array.isArray(t) ? t : [t];
    for (let o of s) {
      let l = o ? Iy(o) : void 0;
      if (l && (l.indexOf("creativecommons.org") !== -1 || l.indexOf("rightsstatements.org") !== -1)) {
        n = l.startsWith("https://") ? `http://${l.slice(8)}` : l;
        continue;
      }
      l && r.push({ label: { [e]: [i] }, value: { [e]: [l] } });
    }
    return [n, r];
  }
  var Hy = ["http://iiif.io/api/presentation/2/context.json", "http://iiif.io/api/image/2/context.json", "http://iiif.io/api/image/1/context.json", "http://library.stanford.edu/iiif/image-api/1.1/context.json", "http://iiif.io/api/search/1/context.json", "http://iiif.io/api/search/0/context.json", "http://iiif.io/api/auth/1/context.json", "http://iiif.io/api/auth/0/context.json", "http://iiif.io/api/annex/openannotation/context.json"];
  function Oy(t) {
    if (t) {
      let i = Array.isArray(t) ? t : [t], e = [];
      for (let n of i) n === "http://iiif.io/api/presentation/2/context.json" && e.push("http://iiif.io/api/presentation/3/context.json"), Hy.indexOf(n) === -1 && e.push(n);
      if (i.length) return e.length === 1 ? e[0] : e;
    }
  }
  function Fy(t) {
    return t ? t.map((i) => ({ label: kt(i.label), value: kt(i.value) })) : [];
  }
  var rr = 0;
  function Uo(t, i) {
    let e = encodeURI(t.id || t["@id"] || "").trim();
    return e && i ? `${e}/${i}` : e || (rr++, `http://example.org/${t["@type"]}${i ? `/${i}` : ""}/${rr}`);
  }
  function Tt(t) {
    let i = [...t.behavior || []];
    t.viewingHint && i.push(t.viewingHint);
    let e;
    return Array.isArray(t.motivation) ? e = t.motivation.map(sr) : t.motivation && (e = sr(t.motivation)), { "@context": t["@context"] ? Oy(t["@context"]) : void 0, id: (t["@id"] || Uo(t)).trim(), type: hs(t), behavior: i.length ? i : void 0, height: t.height ? t.height : void 0, width: t.width ? t.width : void 0, motivation: e, viewingDirection: t.viewingDirection, profile: t.profile, format: t.format ? t.format : void 0, duration: void 0, timeMode: void 0 };
  }
  function xt(t) {
    let [i, e] = My(t.license), n = [...t.metadata ? Fy(t.metadata) : [], ...e];
    return { rights: i, metadata: n.length ? n : void 0, label: t.label ? kt(t.label) : void 0, requiredStatement: t.attribution ? { label: kt(Bn.attributionLabel), value: kt(t.attribution) } : void 0, navDate: t.navDate, summary: t.description ? kt(t.description) : void 0, thumbnail: ky(t.thumbnail) };
  }
  function ky(t) {
    return t && (Array.isArray(t) ? t : [t]).map((e) => typeof e == "string" ? { id: e, type: "Image" } : (e.type === "unknown" && (e.type = "Image"), e));
  }
  function By(t) {
    if (!t.within) return;
    let i = Array.isArray(t.within) ? t.within : [t.within], e = [];
    for (let n of i) if (typeof n == "string") {
      if (n) switch (t["@type"]) {
        case "sc:Manifest":
          e.push({ id: n, type: "Collection" });
          break;
      }
    } else n["@id"] && e.push({ id: n["@id"], type: hs(n) });
    return e.length ? e : void 0;
  }
  function At(t) {
    let i = t.related ? Array.isArray(t.related) ? t.related : [t.related] : [], e = t.contentLayer;
    return { provider: t.logo || i.length ? [{ id: Bn.providerId, type: "Agent", homepage: i.length ? [i[0]] : void 0, logo: t.logo ? Array.isArray(t.logo) ? t.logo : [t.logo] : void 0, label: kt(Bn.providerName) }] : void 0, partOf: By(t), rendering: t.rendering, seeAlso: t.seeAlso, start: t.startCanvas, service: t.service ? ey(t.service) : void 0, supplementary: e ? [e] : void 0 };
  }
  function Vy(t) {
    return { chars: t.chars, format: t.format ? t.format : void 0, language: t.language };
  }
  function Pn(t, i) {
    return t ? typeof t == "string" ? { id: t, type: i } : typeof (t == null ? void 0 : t["@id"]) == "string" ? { id: t["@id"], type: i } : typeof t.id == "string" ? { id: t.id, type: i } : null : null;
  }
  function zy(t) {
    let i = {};
    if (t.first) {
      let e = Pn(t.first, "Collection");
      e && (i.first = e);
    }
    if ((t.total || t.total === 0) && (i.total = t.total), t.prev) {
      let e = Pn(t.prev, "Collection");
      e && (i.prev = e);
    }
    if (t.next) {
      let e = Pn(t.next, "Collection");
      e && (i.next = e);
    }
    return i;
  }
  function Ny(t) {
    let i = [];
    for (let e of t) {
      let n = { ...e };
      n.items && n.items.length === 0 && delete n.items, i.push(n);
    }
    return i;
  }
  function Uy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), ...zy(t), items: Ny(t.members) });
  }
  function Wy(t) {
    let i = [], e = [], n, r;
    for (let o of t.sequences || []) o.canvases.length && i.push(...o.canvases), o.behavior && e.push(...o.behavior), o.viewingDirection && (r = o.viewingDirection), o.startCanvas && (n = o.startCanvas);
    let s = Tt(t);
    return e.length && (s.behavior ? s.behavior.push(...e) : s.behavior = e), ct({ ...s, ...xt(t), ...At(t), viewingDirection: r, start: n, items: i, structures: jy(t.structures) });
  }
  function jy(t) {
    if (!t) return t;
    let i = /* @__PURE__ */ new Map();
    for (let n of t) i.set(n.id, n);
    let e = [];
    for (let n of t) if (n.items) {
      let r = n.items.map((s) => typeof s == "string" ? (e.push(s), i.get(s) || s) : s && s.id ? (e.push(s.id), i.get(s.id) || s) : s);
      n.items = r;
    }
    return t.filter((n) => e.indexOf(n.id) === -1);
  }
  function Gy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), annotations: t.otherContent && t.otherContent.length ? t.otherContent : void 0, items: t.images && t.images.length ? [{ id: Uo(t, "annotation-page"), type: "AnnotationPage", items: t.images }] : void 0 });
  }
  function qy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), items: t.resources && t.resources.length ? t.resources : void 0 });
  }
  function Zy(t) {
    return !t.canvases || t.canvases.length === 0 ? { canvases: [], behavior: [] } : { canvases: t.canvases, behavior: t.viewingHint ? [t.viewingHint] : [], viewingDirection: t.viewingDirection, startCanvas: t.startCanvas };
  }
  function Ky(t) {
    function i(e) {
      if (Array.isArray(e)) {
        if (e.length > 1) return { type: "List", items: e.map(i) };
        e = e[0];
      }
      if (typeof e == "string") return encodeURI(e).trim();
      if ("@type" in e) {
        let n;
        if (typeof e.full == "string") n = e.full;
        else if (e.full["@type"] === "dctypes:Image") n = { id: e.full["@id"], type: "Image" };
        else if (e.full["@type"] === "sc:Canvas") n = { id: e.full["@id"], type: "Canvas" };
        else throw Error(`Unsupported source type on annotation: ${e.full["@type"]}`);
        return { type: "SpecificResource", source: n, selector: Vn(e.selector) };
      } else return encodeURI(e["@id"]).trim();
    }
    return ct({ ...Tt(t), ...xt(t), ...At(t), target: i(t.on), body: Array.isArray(t.resource) ? t.resource.map(or) : or(t.resource) });
  }
  function or(t) {
    return t.type === "Choice" ? t : Wo(t);
  }
  function Wo(t) {
    let i = t;
    return ct({ ...Tt(i), ...xt(i), ...At(i), ...Vy(i) });
  }
  function Xy(t) {
    let i = [];
    return t.default && t.default !== "rdf:nil" && i.push(t.default), t.item && t.item !== "rdf:nil" && i.push(...t.item), ct({ ...Tt(t), ...xt(t), items: i });
  }
  function Yy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), items: t.members });
  }
  function Jy(t) {
    let { "@id": i, "@type": e, "@context": n, profile: r, ...s } = t, o = {};
    return i && (o["@id"] = i), o["@type"] = hs(t), o["@type"] === "unknown" && (n && n.length && (o["@context"] = n), o["@type"] = "Service"), r && (o.profile = No(r)), ct({ ...o, ...s });
  }
  function Qy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t) });
  }
  var $y = new Cy({ collection: [Uy], manifest: [Wy], canvas: [Gy], annotationList: [qy], sequence: [Zy], annotation: [Ky], contentResource: [Wo], choice: [Xy], range: [Yy], service: [Jy], layer: [Qy] });
  function e1(t) {
    return t && t["@context"] && (t["@context"] === "http://iiif.io/api/presentation/2/context.json" || Array.isArray(t["@context"]) && t["@context"].indexOf("http://iiif.io/api/presentation/2/context.json") !== -1 || t["@context"] === "http://www.shared-canvas.org/ns/context.json") || t["@context"] === "http://iiif.io/api/image/2/context.json" || t["@id"] && t["@type"] === "sc:Collection" || t["@id"] && t["@type"] === "sc:Manifest" ? (t["@context"] || (t["@context"] = "http://iiif.io/api/presentation/2/context.json"), $y.traverseUnknown(t)) : t;
  }
  function Vn(t) {
    if ((Array.isArray(t["@type"]) && t["@type"].includes("oa:SvgSelector") || t["@type"] == "oa:SvgSelector") && ("chars" in t || "value" in t)) return { type: "SvgSelector", value: "chars" in t ? t.chars : t.value };
    if (t["@type"] === "oa:FragmentSelector") return { type: "FragmentSelector", value: t.value };
    if (t["@type"] === "oa:Choice") return [Vn(t.default), ...(Array.isArray(t.item) ? t.item : [t.item]).map(Vn)];
    if (t["@type"] == "iiif:ImageApiSelector") return { type: "ImageApiSelector", region: "region" in t ? t.region : void 0, rotation: "rotation" in t ? t.rotation : void 0 };
    throw Error(`Unsupported selector type: ${t["@type"]}`);
  }
  var t1 = e1;
  function zn(t) {
    var s, o, l, a, u;
    const { related: i } = t, { requiredStatement: e } = t, { viewingDirection: n } = t, r = t1(t);
    return t["@context"] === "http://iiif.io/api/presentation/2/context.json" && ([].concat(i || []).forEach((c) => {
      r.homepage = r.homepage || [], r.homepage.push(typeof c == "string" ? c : { id: c["@id"], label: c.label, format: c.format });
    }), (s = r.provider) == null || s.forEach((c, h) => {
      c.homepage && (r.provider[h].homepage = c.homepage.filter((f) => f.id !== "http://example.org/undefined/1" && !r.homepage.find((m) => m.id === f.id)));
    }), ((u = (a = (l = (o = r.provider) == null ? void 0 : o[0]) == null ? void 0 : l.label) == null ? void 0 : a.none) == null ? void 0 : u[0]) === "Unknown" && (delete r.provider[0].label, e && !r.requiredStatement && (r.requiredStatement = e)), r.viewingDirection = n), r;
  }
  function i1(t = {}) {
    const i = tn({ annotations: [], annotationsAvailable: null, collection: null, errors: /* @__PURE__ */ new Set(), loading: 0, manifest: t.manifest ? zn(t.manifest) : null, options: t.options || {}, readyPromises: [], rootElement: t.rootElement || null, urlUpdateTimeout: null, annotationsActive: Me(() => i.options.view === "text" || !i.options.view && !i.isContainerWidthAtLeast("medium")), currentStructure: Me(() => {
      if (!(i.manifest.structures instanceof Array)) return false;
      const e = [];
      i.options.pages.filter((o) => o > 0).forEach((o) => {
        e.push(i.manifest.items[o - 1].id);
      });
      const { length: n } = i.manifest.structures;
      let r, s;
      for (let o = n - 1; o >= 0; o -= 1) {
        const l = i.manifest.structures[o], { items: a } = l;
        if (a != null && a.some((u) => e.includes(u.id))) {
          const u = l.items.length;
          if ((u < s || !s) && (r = o, s = u, s === 0)) break;
        }
      }
      return typeof r == "number" && r >= 0 ? i.manifest.structures[r] : false;
    }), isCustomPageView: Me(() => {
      const { pages: e } = i.options;
      return e.length === 1 ? false : e.length > 2 ? true : e[0] < 1 || e[1] < 1 ? false : e[1] - e[0] !== 1;
    }), isFirstPage: Me(() => i.options.pages[0] === 1 || i.options.pages[1] === 1), isLastPage: Me(() => i.options.pages.at(-1) === i.pageCount), isLastSection: Me(() => {
      var s;
      const { pages: e } = i.options, n = e.length - 1;
      return (e[n] ? e[n] : e[n - 1]) >= ((s = i.sections[i.sections.length - 1]) == null ? void 0 : s.firstPage);
    }), isReversed: Me(() => ["right-to-left", "bottom-to-top"].includes(i.manifest.viewingDirection)), isVertical: Me(() => ["top-to-bottom", "bottom-to-top"].includes(i.manifest.viewingDirection)), pageCount: Me(() => {
      var e, n;
      return (n = (e = i.manifest) == null ? void 0 : e.items) == null ? void 0 : n.length;
    }), sections: Me(() => {
      if (!i.manifest.structures) return [];
      const e = [];
      return i.manifest.structures.forEach((n) => {
        if (!n.items) {
          e.push({ firstPage: 1, lastPage: i.pageCount });
          return;
        }
        const r = n.items[0].id, s = i.manifest.items.findIndex((a) => a.id === r) + 1, o = n.items[n.items.length - 1].id, l = i.manifest.items.findIndex((a) => a.id === o) + 1;
        e.push({ firstPage: s, lastPage: l });
      }), e;
    }), structures: Me(() => {
      var a, u, c;
      if (!((a = i.manifest) != null && a.structures)) return [];
      const e = (c = (u = i.manifest.structures[0]) == null ? void 0 : u.behavior) != null && c.includes("top") ? i.manifest.structures[0].items || [] : i.manifest.structures, n = [], r = i.manifest.items, s = e.length;
      for (let h = 0; h < s; h += 1) {
        const f = { ...e[h] };
        if (f.items) {
          const m = f.items[0].id;
          f.firstPage = r.findIndex((y) => y.id === m) + 1;
          const v = f.items.at(-1).id;
          f.lastPage = r.findIndex((y) => y.id === v) + 1;
        }
        f.level = 0, n.push(f);
      }
      let o = 0;
      for (let h = 0; h < n.length; h += 1) {
        const f = n[h];
        for (let m = h + 1; m < n.length; m += 1) {
          const v = n[m];
          v.firstPage >= f.firstPage && v.lastPage <= f.lastPage && (f.items = (f.items || []).filter((y) => y.label), f.items.push(v), v.level += 1, o = Math.max(o, v.level));
        }
      }
      const l = (h, f = 0) => {
        for (let m = 0; m < h.length; m += 1) {
          const v = h[m];
          v.level > f ? h.splice(m, 1) : v.items && l(v.items, f + 1);
        }
      };
      for (let h = 0; h < o; h += 1) l(n);
      return n;
    }), addError(e) {
      i.errors.add(e), console.warn(e);
    }, clearErrors() {
      i.errors.clear();
    }, async fetchJson(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return i.loading = 0, Promise.reject(new Error(n.status));
      const r = await n.json().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, async fetchText(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return console.warn("Error loading annotation"), "";
      const r = await n.text().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, getFacingPage(e) {
      var s, o, l, a, u;
      if ((s = i.manifest.items[e - 1].behavior) != null && s.includes("non-paged")) return -1;
      if (e === 1) return 0;
      const n = i.manifest.items.slice(0, e - 1).filter((c) => {
        var h;
        return (h = c.behavior) == null ? void 0 : h.includes("non-paged");
      });
      return (e + n.length % 2) % 2 === 1 ? (l = (o = i.manifest.items[e - 1 - 1]) == null ? void 0 : o.behavior) != null && l.includes("non-paged") ? -1 : e - 1 : (u = (a = i.manifest.items[e - 1 + 1]) == null ? void 0 : a.behavior) != null && u.includes("non-paged") ? -1 : e < i.pageCount ? e + 1 : 0;
    }, getPageLabel(e, n) {
      const r = i.localize(n, "");
      return r ? i.options.pageLabelFormat.replace("P", e).replace("L", r) : i.options.pageLabelFormat.includes("P") ? `${e}` : "\u2014";
    }, getStartPages() {
      var n;
      let e = 1;
      if (i.manifest.items && i.manifest.start) {
        const r = i.manifest.items.findIndex((s) => s.id === i.manifest.start.id);
        e = r >= 0 ? r + 1 : 1;
      }
      return i.isContainerWidthAtLeast("medium") && ((n = i.manifest.behavior) != null && n.includes("paged")) ? [e, i.getFacingPage(e)].sort() : [e];
    }, getThumbnailUrl(e, n, r = 0, s = 0) {
      var h, f, m, v, y, x, T;
      const o = i.manifest.items[e - 1], l = (h = o.thumbnail) == null ? void 0 : h[0];
      if (l != null && l.id && (l == null ? void 0 : l.width) >= n) return l.id;
      const a = (y = (v = (m = (f = o.items) == null ? void 0 : f[0]) == null ? void 0 : m.items) == null ? void 0 : v[r]) == null ? void 0 : y.body, u = a != null && a.items ? a.items[s] : a, c = (l == null ? void 0 : l.service) || ((x = u == null ? void 0 : u.source) == null ? void 0 : x.service) || (u == null ? void 0 : u.service);
      if (c) {
        const C = [].concat(c)[0], H = ["ImageService2", "ImageService3"].includes(C.type || C["@type"]) ? "default" : "native", k = C.id || C["@id"];
        let N = n;
        l != null && l.service && ((T = C.sizes) == null || T.forEach((q) => {
          q.width >= N && q.width <= N * 2 && (N = q.width);
        }));
        const Y = "jpg", K = k.at(-1) === "/" ? "" : "/";
        return `${k}${K}full/${N},/0/${H}.${Y}`;
      }
      return (u == null ? void 0 : u.type) === "Image" ? (l == null ? void 0 : l.id) || (u == null ? void 0 : u.id) : "";
    }, goToFirstPage() {
      i.setPage(1);
    }, goToNextPage() {
      const e = i.options.pages.at(-1);
      e < i.pageCount && i.setPage(e + 1);
    }, goToNextSection() {
      const { pages: e } = i.options, n = e.length - 1, r = e[n] ? e[n] : e[n - 1];
      let s = 0;
      for (; r >= i.sections[s].firstPage || r && r >= i.sections[s].firstPage; ) s += 1;
      i.setPage(i.sections[s].firstPage);
    }, goToLastPage() {
      i.setPage(i.pageCount);
    }, goToPreviousPage() {
      const e = i.options.pages.find((n) => n > 0);
      e > 1 && i.setPage(e - 1);
    }, goToPreviousSection() {
      const { pages: e } = i.options, n = e[0] ? e[0] : e[1];
      let r = i.sections.length - 1;
      for (; n <= i.sections[r].firstPage || n && n <= i.sections[r].firstPage; ) r -= 1;
      i.setPage(i.sections[r].firstPage);
    }, isContainerWidthAtLeast(e) {
      return i.rootElement && window.getComputedStyle(i.rootElement, "::after").content.includes(e);
    }, loadAnnotations() {
      var e;
      i.annotationsAvailable = null, (e = i.options.pages) == null || e.filter((n) => n > 0).forEach(async (n) => {
        if (i.annotations[n]) return;
        const r = i.manifest.items[n - 1];
        if (!("annotations" in r)) {
          i.annotationsAvailable = false;
          return;
        }
        i.annotations[n] = [];
        let s = r.annotations[0].items;
        if (!s) {
          const o = r.annotations[0].id;
          try {
            const l = await i.fetchJson(o);
            s = l.resources || l.items;
          } catch (l) {
            const a = l.response ? l.response.statusText : l.message;
            console.warn(`Could not load annotations: ${a}`), i.annotationsAvailable = false;
            return;
          }
        }
        s instanceof Array && s.forEach(async (o, l) => {
          var m, v, y, x, T, C, H, k, N, Y, K, q;
          let a;
          const u = o.id || o["@id"] || ((m = o.resource) == null ? void 0 : m.id) || ((v = o.resource) == null ? void 0 : v["@id"]);
          if ((y = o.resource) != null && y.chars) a = o.resource.chars;
          else if ((T = (x = o.resource) == null ? void 0 : x[0]) != null && T.chars) a = (H = (C = o.resource) == null ? void 0 : C[0]) == null ? void 0 : H.chars;
          else if ((k = o.resource) != null && k.label) a = `<i>${o.resource.label}</i>`;
          else {
            const ee = [].concat(o.body);
            a = (await Promise.all(ee.map(async (te) => {
              var ne, he, ye, me;
              if ((te == null ? void 0 : te.type) === "Image") return `<img src="${te.id}" alt="">`;
              if (te != null && te.value) return te.value;
              if ((ne = te == null ? void 0 : te.body) != null && ne.value) return te.body.value;
              const j = ((he = te == null ? void 0 : te.items) == null ? void 0 : he[0].id) || ((ye = te == null ? void 0 : te.body) == null ? void 0 : ye.id) || ((me = te == null ? void 0 : te.body) == null ? void 0 : me["@id"]) || (te == null ? void 0 : te.id) || u;
              return os(j) ? i.fetchText(j) : "";
            }))).join("<br>");
          }
          if (!a) return;
          (o.format || ((N = o.body) == null ? void 0 : N.format)) === "text/plain" && (a = a.replace(/\n/g, " <br>")), i.annotationsAvailable = true;
          const c = { id: u, html: cn(a) }, h = ((K = (Y = o.on) == null ? void 0 : Y.selector) == null ? void 0 : K.value) || (typeof o.on == "string" ? o.on : null) || ((q = o.target) == null ? void 0 : q.id) || o.target, f = Do(h);
          f && (c.coords = f), i.annotations[n][l] = c;
        });
      });
    }, initOptions(e) {
      let n = {};
      if (i.options.urlQueryKey) try {
        const r = new URLSearchParams(window.location.search);
        n = JSON.parse(r.get(i.options.urlQueryKey)) || {};
      } catch {
      }
      n.view === "fulltext" ? n.view = "text" : ["scan", ""].includes(n.view) && (n.view = null), n.pages && !Ks(n.pages, i.pageCount) && (i.addError("Invalid pages, reset to start page"), n.pages = null), i.options.urlQueryParams.forEach((r) => {
        i.options[r] = n[r] ?? i.options[r];
      }), i.options.pages = e && e.type === "popstate" ? n.pages || i.getStartPages() : n.pages || i.options.pages || i.getStartPages(), i.options.pan = n.panX || n.panY ? { x: n.panX, y: n.panY } : n.pan || i.options.pan, i.options.rotation = parseInt(n.rotation, 10) || i.options.rotation, i.options.view = n.view || n.view === "" ? n.view : i.options.view, i.options.zoom = parseFloat(n.zoom) || i.options.zoom;
    }, loadManifest(e, n = {}) {
      const r = cs();
      return i.fetchJson(e).then(async (s) => {
        const o = zn(s);
        if (n.expectedType && o.type !== n.expectedType) {
          const a = `Expected manifest of type ${n.expectedType}, but got ${o.type}`;
          return i.addError(a), r.reject(a), r;
        }
        if (i.manifest = null, await Yn(), o.type === "Manifest") return i.manifest = o, i.initOptions(), window.addEventListener("popstate", i.initOptions), n.reset && i.updateOptions({ childManifestUrl: e, pages: i.getStartPages(), pan: {}, rotation: null, view: i.isContainerWidthAtLeast("medium") ? "collection" : null, zoom: null }), r.resolve(), r;
        if (o.type === "Collection") {
          i.collection = o;
          const a = new URLSearchParams(window.location.search);
          let u = {};
          try {
            u = JSON.parse(a.get(i.options.urlQueryKey)) || {};
          } catch {
          }
          let c = "";
          if (i.options.urlQueryParams.includes("childManifestUrl") && u.childManifestUrl ? c = u.childManifestUrl : i.collection.manifests && i.options.childManifestAutoloaded && (c = i.collection.manifests[0].id), c) await i.loadManifest(c, { expectedType: "Manifest" }), i.updateOptions({ childManifestUrl: c });
          else {
            const h = u.view || i.options.view;
            i.updateOptions({ view: ["collection", "help", "info"].includes(h) ? h : "collection" });
          }
          return r.resolve(), r;
        }
        const l = "Please provide a valid IIIF Presentation API manifest";
        return i.addError(l), r.reject(l), r;
      }, (s) => {
        const l = `Error loading IIIF manifest: ${s.response && (s.response.statusText || s.response.data) || s.message}`;
        return i.addError(l), r.reject(l), r;
      });
    }, localize(e) {
      if (!i.options.language) throw new Error("language not set");
      if (!e) return "";
      if (typeof e == "string") return e;
      const s = e[i.options.language] || e[i.options.fallbackLanguage] || Object.values(e)[0] || "";
      return ([].concat(s).join("\xA0\xB7 ") || "").trim();
    }, setPage(e) {
      var r;
      let n = [].concat(e);
      if (!Ks(n, i.pageCount)) throw new RangeError("Invalid pages");
      return n.length === 1 && ((r = i.options.pages) == null ? void 0 : r.length) === 2 && !this.isCustomPageView && (n = [n[0], i.getFacingPage(n[0])].sort()), i.updateOptions({ pages: n }), n;
    }, toggleAnnotationId(e) {
      const n = { annotationId: i.options.annotationId === e ? null : e, annotationsVisible: i.options.annotationId ? null : i.annotationsVisible };
      n.annotationId && !i.isContainerWidthAtLeast("medium") && (n.view = i.options.view ? null : "text"), i.updateOptions(n);
    }, updateOptions(e) {
      clearTimeout(i.urlUpdateTimeout), Object.assign(i.options, e), e.pages && i.clearErrors(), i.options.urlQueryKey && (i.urlUpdateTimeout = setTimeout(() => {
        const n = {};
        i.options.urlQueryParams.forEach((s) => {
          const o = i.options[s];
          o === null || s === "layers" && !o.some(Boolean) || s === "pages" && o.toString() === i.getStartPages().toString() || typeof o == "object" && !Object.keys(o).length ? delete n[s] : n[s] = i.options[s];
        });
        const r = new URL(window.location);
        Object.keys(n).length ? r.searchParams.set(i.options.urlQueryKey, JSON.stringify(n)) : r.searchParams.delete(i.options.urlQueryKey), window.history && (e.pages || e.view ? window.history.pushState({}, "", r) : window.history.replaceState({}, "", r));
      }, 100));
    } });
    return i;
  }
  var n1 = { convertManifest: zn, install: (t, i = {}) => {
    t.config.globalProperties.$store = new i1(i);
  } };
  window.Tify = function(i = {}) {
    if (this.options = { ...JSON.parse(JSON.stringify(jv)), ...i }, !this.options.translationsDirUrl) try {
      const { url: s } = import_meta;
      this.options.translationsDirUrl = `${s.slice(0, s.lastIndexOf("/"))}/translations`;
    } catch {
    }
    let e = null;
    this.ready = new Promise((s, o) => {
      e = { resolve: s, reject: o };
    });
    const n = this;
    this.app = gu({ render: () => Wl(Wv, { readyPromise: e }) }).use(qv, { instance: n }).use(Yv).use(Jv).use(n1, { options: this.options });
    let r = false;
    this.mount = (s) => {
      if (r) throw new Error("TIFY is already mounted");
      const o = typeof s == "string" ? document.querySelector(s) : s;
      if (!o) throw new Error("Container element not found");
      this.app.mount(o), r = true;
    }, this.destroy = () => {
      this.app.unmount();
    }, this.options.container && this.mount(this.options.container);
  };
  var a1 = window.Tify;

  // <stdin>
  function addTify(selector, uri, lang = "en") {
    if (document.documentElement.lang !== void 0) {
      lang = document.documentElement.lang;
    }
    const tify = new Tify({
      container: selector,
      manifestUrl: uri,
      language: lang,
      translationsDirUrl: "/tify/translations/"
    });
    return tify;
  }
  window.iiifPresentationViewer = addTify;
})();
/*! Bundled license information:

tify/dist/tify.js:
  (*!
  TIFY v0.35.0
  (c) 2017-2026 Göttingen State and University Library (https://www.sub.uni-goettingen.de/)
  AGPL-3.0
  https://tify.rocks/
  *)
  (**
  * @vue/shared v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/reactivity v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/runtime-core v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

tify/dist/tify.js:
  (**
  * @vue/runtime-dom v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! openseadragon 5.0.1 *)
  (*! Built on 2024-12-09 *)
  (*! Git commit: v5.0.1-0-480de92d *)
  (*! http://openseadragon.github.io *)
  (*! License: http://openseadragon.github.io/license/ *)
*/
