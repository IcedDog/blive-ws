/**
 * id: E90K
 * path: ./ui-components/error-panel
 */

(function(require,module,exports) {
"use strict";function e(e,n,r){var t=null!=r?r:"直播时空次元异常，正在努力恢复中",l=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div");l.className="web-player-error-panel",a.className="web-player-error-code",o.className="web-player-error-image",s.className="web-player-error-tip";i.style.cssText="\n    display: block;\n    max-width: 80%;\n    display: inline-block;\n    font-size: 16px;\n    color: #eee;\n    line-height: 24px;\n    padding: 10px;\n    cursor: default;\n  ",o.style.cssText="\n    display: block;\n    width: 30%;\n    height: 30%;\n    background: url(//s1.hdslb.com/bfs/static/player/live/html5/images/error.png) no-repeat 50% 0;\n    background-size: contain;\n  ",l.style.cssText="\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    z-index: 18;\n    background: #000;\n    cursor: default;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  ";var c="\n    font-size: 24px;\n    margin-top: 12px;\n    color: #999999;\n    height: 33px;\n    line-height: 33px;\n    text-align: center;\n  ";return a.style.cssText=c,s.style.cssText=c,i.innerHTML='直播已断开\n    <div style="\n    display: block;\n    font-size: 13px;\n    color: #fff;\n  " class="web-player-error-operation">\n      ( 请尝试\n        <a style="\n    color: #fd9ccc;\n    display: inline-block;\n    position: relative;\n    margin: 0 3px;\n  " class="web-player-error-reload" href="javascript:void(0);">刷新</a>\n      )\n    </div>\n  ',l.appendChild(i),l.appendChild(o),s.innerHTML=t,a.innerText="status: "+n,i.style.display="none",l.appendChild(a),l.appendChild(s),e.appendChild(l),function(){l.remove()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createErrorPanel=void 0,exports.createErrorPanel=e;
})()