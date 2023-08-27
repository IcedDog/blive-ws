/**
 * id: ywxt
 * path: ./modal
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@bilibili-live/web-player-common");require("./modal.less");var e=function(){function e(t,i){this.container=t,this._snippet=['<div class="blp-plugin-modal-header"></div>','<div class="blp-plugin-modal-body"></div>','<div class="blp-plugin-modal-footer clearfix"></div>','<div class="blp-plugin-modal-close"><i class="live-icon-close"></i></div>'],this._opts=Object.assign({},e._DEFAULT_OPTIONS,i),this._initialize()}return e.prototype.show=function(){var t=this._opts,e=this._template;this._freshPos(),e._container.classList.add("active"),"function"==typeof t.onShow&&t.onShow()},e.prototype.hide=function(){var t=this._opts;this._template._container.classList.remove("active"),"function"==typeof t.onHide&&t.onHide(),t.autoRemove&&this.destroy()},e.prototype.destroy=function(){this._template._container.remove()},e.prototype._initialize=function(){this._create()._bindEvents(),this._opts.autoShow&&this.show()},e.prototype._create=function(){var e=t.createElement("div",{classname:"blp-plugin-modal"});e.innerHTML=this._snippet.join(""),this._template={_container:e,_header:e.querySelector(".blp-plugin-modal-header"),_body:e.querySelector(".blp-plugin-modal-body"),_footer:e.querySelector(".blp-plugin-modal-footer"),_close:e.querySelector(".blp-plugin-modal-close")};var i=this._template,n=this._opts;return i._header.innerText=n.title,i._body.innerHTML=""!==n.html?n.html:n.text,this._createBtn(i._footer,n.btns,n),n.hideBtn&&i._close.classList.add("active"),this.container.appendChild(e),null!=n.width&&0!==n.width&&(e.style.width=n.width+"px"),this},e.prototype._createBtn=function(e,i,n){var o=this;if(i instanceof Array)i.forEach(function(t){o._createBtn(e,t,n)});else{var l=null;switch(i.type){case"submit":(l=t.createElement("button",{classname:"blp-plugin-modal-btn submit-btn"})).innerHTML=i.text,"function"==typeof i.click&&l.addEventListener("click",function(t){i.click(t),o.hide()});break;case"cancel":(l=t.createElement("button",{classname:"blp-plugin-modal-btn cancel-btn"})).innerHTML=i.text,"flex-report"===n.btnPostion&&l.classList.add("live-bilibili-player-report-cancel"),l.addEventListener("click",function(){var t;null===(t=i.click)||void 0===t||t.call(i),o.hide()})}null!=l&&e.append(l)}},e.prototype._bindEvents=function(){var t=this;return this._opts.hideBtn&&this._template._close.addEventListener("click",function(){t.hide()}),this},e.prototype._freshPos=function(){var t=this._opts,e=this._template._container,i=this._template._footer,n="",o="",l=0,s=0,a=e.style;switch(t.btnPostion){case"flex-report":i.style.cssText="\n          display: flex;\n          justify-content: space-around;\n          margin-top: 69px;\n        ",a.height="190px",a.padding="20px"}switch(t.position){case"center-center":n="50%",o="50%",l=-1*parseInt(a.width)/2,s=-1*parseInt(a.height)/2}a.left=n,a.top=o,a.marginLeft=l+"px",a.marginTop=s+"px"},e._DEFAULT_OPTIONS={title:"Bilibili HTML5 Live Player Modal",theme:"white",text:"Are you confirm the operation?",html:"",btns:[{type:"submit",text:"Confirm",click:function(){}},{type:"cancel",text:"Cancel",click:function(){}}],mask:!0,position:"center-center",hideBtn:!0,autoShow:!1,autoRemove:!1},e}();exports.default=e;
})()