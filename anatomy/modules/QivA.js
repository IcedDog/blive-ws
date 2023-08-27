/**
 * id: QivA
 * path: ./ui-components/not-auto-play
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createMutePlayTip=exports.createNotAutoPlayTip=void 0;var t=require("@bilibili-live/web-player"),a=e(require("./not-auto-play.less"));function i(e,t){var i=document.createElement("div"),n=document.createElement("div"),l=document.createElement("p"),o=document.createElement("img");return i.classList.add(a.default.notAutoPlayTipContainer),n.classList.add(a.default.tipBtn),n.innerHTML="点击播放",l.classList.add(a.default.tipText),l.innerHTML='\n    你的浏览器<a class="'+a.default.textTipEmphasize+'">不支持</a>自动播放\n  ',o.classList.add(a.default.tipImg),o.src="//i0.hdslb.com/bfs/activity-plat/static/20211217/d0411babbbf77c49ca42a3320eb804ae/OqYjEF1uIM.png",n.onclick=function(){i.remove(),t()},i.appendChild(o),i.appendChild(l),i.appendChild(n),e.appendChild(i),function(){i.remove()}}function n(e,i,n){var l=document.createElement("div"),o=document.createElement("img"),d=document.createElement("p");return o.src="//i0.hdslb.com/bfs/activity-plat/static/20211220/d0411babbbf77c49ca42a3320eb804ae/hDsUctDb2f.png",d.innerText="点击取消静音",l.classList.add(a.default.mutePlayTipContainer),d.classList.add(a.default.tipText),o.classList.add(a.default.tipImg),l.appendChild(o),l.appendChild(d),e.appendChild(l),l.onclick=function(){l.remove(),n()},i.on(t.ControllerEventType.BottomDistanceChange,function(e){var t=i.getCtrlUI().show;l.style.bottom=e+(t?50:10)+"px"}),{destroy:function(){l.remove()},change:function(e){l.style.bottom=parseInt(getComputedStyle(i.getCtrlEl()).bottom)+(e?50:10)+"px"}}}exports.createNotAutoPlayTip=i,exports.createMutePlayTip=n;
})()