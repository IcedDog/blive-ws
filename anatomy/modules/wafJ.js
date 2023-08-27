/**
 * id: wafJ
 * path: @bilibili-live/web-player-danmaku-report
 */

(function(require,module,exports) {
"use strict";var e,t,r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{a(n.next(e))}catch(t){o(t)}}function l(e){try{a(n.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,l)}a((n=n.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(l){o=[6,l],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},i=this&&this.__classPrivateFieldSet||function(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},s=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var a=l(require("./modal")),u=require("@bilibili-live/web-player-common");require("./index.less");var c={reportReason:"/xlive/web-ucenter/v1/dMReport/ForReason",reportDanmaku:"/xlive/web-ucenter/v1/dMReport/Report"},d=function(){function l(r){e.set(this,null),t.set(this,void 0),i(this,t,r)}return l._createModalHtml=function(e,t){var r=t.reduce(function(e,t){return e+"<li>"+t.reason+"</li>"},'<li class="web-player-report-item-default" style="display: none">请选择举报理由喔~</li>');return'\n      <div class="web-player-report-wrap">\n        <div class="web-player-report-uname">'+e.uname+'</div>\n        <div class="web-player-report-msg">'+e.msg+'</div>\n        <div class="web-player-report-select-wrap">\n          <div class="web-player-report-select-input">\n            <div class="web-player-report-curt">请选择举报理由喔~</div>\n            <div class="web-player-report-icon"></div>\n          </div>\n          <ul class="web-player-report-ul">'+r+"</ul>\n        </div>\n      </div>\n    "},l.prototype.show=function(e){return r(this,void 0,Promise,function(){var t,r;return n(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,u.ajax(c.reportReason)];case 1:return r=n.sent(),t=null!=r?r.data:[{id:1,reason:"违法违规"},{id:2,reason:"低俗色情"},{id:3,reason:"垃圾广告"},{id:4,reason:"辱骂引战"},{id:5,reason:"政治敏感"},{id:6,reason:"青少年不良信息"},{id:7,reason:"其他"}],[3,3];case 2:return n.sent(),t=[{id:1,reason:"违法违规"},{id:2,reason:"低俗色情"},{id:3,reason:"垃圾广告"},{id:4,reason:"辱骂引战"},{id:5,reason:"政治敏感"},{id:6,reason:"青少年不良信息"},{id:7,reason:"其他"}],[3,3];case 3:return this.handleReport(e,t),[2]}})})},l.prototype.resetReasonVisible=function(e){s([],e.children).forEach(function(e){e instanceof HTMLElement&&(e.style.display="block")})},l.prototype.checkReportState=function(){var e=document.querySelector(".live-bilibili-player-report-cancel");null==e||e.click()},l.prototype.handleReport=function(s,u){var c=this;this.checkReportState();var d=l._createModalHtml(s,u);null==o(this,e)&&i(this,e,new a.default(o(this,t),{title:"举报弹幕",html:d,btns:[{type:"submit",text:"警察叔叔就是他",click:function(){return r(c,void 0,void 0,function(){return n(this,function(e){switch(e.label){case 0:return[4,this._submitFunction(s,u)];case 1:return e.sent(),x(),[2]}})})}},{type:"cancel",text:"饶他一命",click:function(){x()}}],width:360,btnPostion:"flex-report"}));var p=document.querySelector(".web-player-report-uname"),f=document.querySelector(".web-player-report-msg");p.innerText=s.uname,s.img_url?f.innerHTML="<img src="+s.img_url+">":f.innerText=s.msg,o(this,e).show();var h=document.querySelector(".web-player-report-ul"),y=document.querySelector(".web-player-report-curt"),v=document.querySelector(".web-player-report-select-wrap"),b=document.querySelector(".blp-plugin-modal-btn"),m=document.querySelector(".web-player-report-item-default"),w=function(e){c.resetReasonVisible(h);var t=e.target.innerText;b.disabled="请选择举报理由喔~"===t&&"获取不到举报理由，请尝试刷新后举报喔~"===t,y.innerText=t,h.style.display="none",m.style.display="block",e.target.style.display="none"}.bind(this),_=function(){h.style.display="none"}.bind(this),g=function(){h.style.display="block"}.bind(this),x=function(){var t;y.innerText="请选择举报理由喔~",m.style.display="none",c.resetReasonVisible(h),h.removeEventListener("click",w),null==v||v.removeEventListener("mouseover",g),null==v||v.removeEventListener("mouseout",_),null===(t=o(c,e))||void 0===t||t.destroy(),i(c,e,null)};b.disabled=!0,h.addEventListener("click",w),null==v||v.addEventListener("mouseover",g),null==v||v.addEventListener("mouseout",_)},l.prototype._submitFunction=function(i,s){var l;return r(this,void 0,Promise,function(){var r,a,d,p,f,h;return n(this,function(n){switch(n.label){case 0:if(r=o(this,t).querySelector(".web-player-report-curt"),a=r.innerText,d=i.checkInfo,p=0,null!=(f=s.filter(function(e){return e.reason===a}))&&0!==f.length&&(p=f[0].id),""===a)return[2];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,u.ajax(c.reportDanmaku,{method:"POST",data:{reason:a,roomid:i.roomid,msg:i.msg,tuid:i.uid,ts:d.ts,sign:d.ct,reason_id:p,dm_type:i.type,file_id:i.file_id,img_url:i.img_url,id_str:i.id_str}})];case 2:return n.sent(),null===(l=o(this,e))||void 0===l||l.hide(),[3,4];case 3:return h=n.sent(),u.logger.error(h),[3,4];case 4:return[2]}})})},l}();e=new WeakMap,t=new WeakMap,exports.default=d;
})()