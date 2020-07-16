!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("Handsontable")):"function"==typeof define&&define.amd?define(["Handsontable"],e):(t=t||self)["describe/hot"]=e(t.HOT)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n};var r=function(t){if(Array.isArray(t))return e(t)};var n=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var o=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}};var a=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var s=function(t){return r(t)||n(t)||o(t)||a()};var i=function(t){if(Array.isArray(t))return t};var u=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}};var c=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var l=function(t,e){return i(t)||u(t,e)||o(t,e)||c()};var d=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e}));function h(){}function f(t,e){for(var r in e)t[r]=e[r];return t}function m(t,e){for(var r in e)t[r]=1;return t}function v(){return Object.create(null)}function p(t){t._lock=!0,g(t._beforecreate),g(t._oncreate),g(t._aftercreate),t._lock=!1}function g(t){for(;t&&t.length;)t.shift()()}var y={destroy:function(t){this.destroy=h,this.fire("destroy"),this.set=h,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var r=t in this._handlers&&this._handlers[t].slice();if(r)for(var n=0;n<r.length;n+=1){var o=r[n];if(!o.__calling)try{o.__calling=!0,o.call(this,e)}finally{o.__calling=!1}}},on:function(t,e){var r=this._handlers[t]||(this._handlers[t]=[]);return r.push(e),{cancel:function(){var t=r.indexOf(e);~t&&r.splice(t,1)}}},set:function(t){this._set(f({},t)),this.root._lock||p(this.root)},_recompute:h,_set:function(t){var e=this._state,r={},n=!1;for(var o in t=f(this._staged,t),this._staged={},t)this._differs(t[o],e[o])&&(r[o]=n=!0);n&&(this._state=f(f({},e),t),this._recompute(r,this._state),this._bind&&this._bind(r,this._state),this._fragment&&(this.fire("state",{changed:r,current:this._state,previous:e}),this._fragment.p(r,this._state),this.fire("update",{changed:r,current:this._state,previous:e})))},_stage:function(t){f(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"===d(t)||"function"==typeof t}},_=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,w=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;function b(t,e){if(null===t)return null;if(void 0!==t){if((t=String(t)).indexOf("<")<0||t.indexOf(">")<0)return t;if(t=function(t,e){e=(((void 0!==e?e||"":"<a><span><b><br><br/><i><strong><sup><sub><strike><u><em><tt>")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var r=t,n=t;for(;;)if(n=(r=n).replace(w,"").replace(_,(function(t,r){return e.indexOf("<"+r.toLowerCase()+">")>-1?t:""})),r===n)return n}(t,e),"undefined"==typeof document)return t;var r=document.createElement("div");r.innerHTML=t;for(var n=r.querySelectorAll("*"),o=0;o<n.length;o++){"a"===n[o].nodeName.toLowerCase()&&("_self"!==n[o].getAttribute("target")&&n[o].setAttribute("target","_blank"),n[o].setAttribute("rel","nofollow noopener noreferrer"),n[o].getAttribute("href")&&n[o].getAttribute("href").trim().startsWith("javascript:")&&n[o].setAttribute("href",""));for(var a=0;a<n[o].attributes.length;a++){var s=n[o].attributes[a];s.specified&&"on"===s.name.substr(0,2)&&n[o].removeAttribute(s.name)}}return r.innerHTML}}function C(t,e,r,n){var o={date:"fa fa-clock-o"};return function(a,s,i,u,c,l,d){if(!(r.numColumns()<=u)&&r.hasColumn(u)){var h=r.column(u),f=t.get(),m=f.searchResults,v=f.currentResult,p=f.activeColumn,g=t.getColumnFormat(h.name());if((i=a.toPhysicalRow(i))>0){var y=e.columnFormatter(h);l=null===h.val(i-1)?"":y(h.val(i-1),!0)}parseInt(l)<0&&s.classList.add("negative"),s.classList.add(h.type()+"Type"),s.dataset.column=u,"text"===h.type()&&l&&l.length>70&&(l=l.substr(0,60)+"…"),0===i?(s.classList.add("firstRow"),o[h.type()]&&(l='<i class="'+o[h.type()]+'"></i> '+l)):s.classList.add(i%2?"oddRow":"evenRow"),g.ignore&&s.classList.add("ignored"),p&&p.name()===h.name()&&s.classList.add("active");var _=n.hooks.run(a,"modifyRow",i);m.forEach((function(t){t.row===_&&t.col===u&&s.classList.add("htSearchResult")})),v&&v.row===_&&v.col===u&&s.classList.add("htCurrentSearchResult"),i>0&&!h.type(!0).isValid(h.val(i-1))&&null!==h.val(i-1)&&s.classList.add("parsingError"),h.isComputed&&h.errors.length&&h.errors.find((function(t){return"all"===t.row||t.row===i-1}))&&s.classList.add("parsingError"),d.readOnly&&s.classList.add("readOnly"),e.dataCellChanged(u,i)&&s.classList.add("changed"),function(t,e,r,o,a,s,i){var u=b(n.helper.stringify(s));e.innerHTML=u}(0,s,0,0,0,l)}}}function R(t){if(!t||"object"!==d(t))return t;try{return JSON.parse(JSON.stringify(t))}catch(e){return t}}var S=null,L=null;var I={render:function(){this.get().hot.render()},doSearch:function(){var t=this,e=this.get(),r=e.hot,n=e.search;clearTimeout(L),L=setTimeout((function(){if(r&&n){var e=r.getPlugin("search").query(n);t.set({searchResults:e})}else t.set({searchResults:[]})}),300)},update:function(){var e=this,r=this.get(),n=r.data,o=r.transpose,a=r.firstRowIsHeader,s=r.skipRows,i=r.hot;if(n){var u=this.store.get().dw_chart,c=u.dataset(dw.datasource.delimited({csv:n,transpose:o,firstRowIsHeader:a,skipRows:s}).parse()).dataset();this.set({columnOrder:c.columnOrder()});var l=[[]];c.eachColumn((function(t){return l[0].push(t.title())})),c.eachRow((function(t){var e=[];c.eachColumn((function(r){return e.push(r.raw(t))})),l.push(e)})),i.loadData(l);var d=C(this,u,c,t);i.updateSettings({cells:function(t,r){return{readOnly:e.get().readonly||c.hasColumn(r)&&c.column(r).isComputed&&0===t,renderer:d}},manualColumnMove:[]}),this.set({ds:c}),this.set({has_changes:R(chart.get("metadata.data.changes",[])).length>0}),t.hooks.once("afterRender",(function(){return e.initCustomEvents()})),t.hooks.once("afterRender",(function(){return e.fire("afterRender")})),i.render()}},dataChanged:function(t){var e=this,r=this.get().hot,n=!1;t.forEach((function(t){var o=l(t,4),a=o[0],s=o[1],i=o[2],u=o[3];if(i!==u){var c=e.store.get().dw_chart,d=e.get().transpose,h=R(c.get("metadata.data.changes",[]));if(a=r.toPhysicalRow(a),s=c.dataset().columnOrder()[s],d){var f=a;a=s,s=f}h.push({column:s,row:a,value:u,previous:i,time:(new Date).getTime()}),c.set("metadata.data.changes",h),n=!0}})),n&&setTimeout((function(){e.update(),chart.save()}),100)},columnMoved:function(e,r){var n=this,o=this.get().hot;if(e.length){var a=this.get().columnOrder,i=a.slice(0),u=a[r],c=i.splice(e[0],e.length),l=void 0===u?i.length:u?i.indexOf(u):0;i.splice.apply(i,[l,0].concat(s(c))),this.store.get().dw_chart.set("metadata.data.column-order",i.slice(0)),this.set({columnOrder:i}),t.hooks.once("afterRender",(function(){setTimeout((function(){n.fire("resetSort"),o.selectCell(0,l,o.countRows()-1,l+c.length-1)}),10)})),this.update()}},updateHeight:function(){var t=document.querySelector(".ht_master.handsontable .wtHolder .wtHider").getBoundingClientRect().height;this.refs.hot.style.height=Math.min(500,t+10)+"px"},checkRange:function(t,e,r,n){var o=this.get().hot,a=this.get().ds;if(e!==n||0!==t||r!==o.countRows()-1)if(e===n||0!==t||r!==o.countRows()-1)this.set({activeColumn:null,multiSelection:!1});else{for(var s=[],i=Math.min(e,n);i<=Math.max(e,n);i++)s.push(+document.querySelector("#data-preview .htCore tbody tr:first-child td:nth-child(".concat(i+2,")")).dataset.column);this.set({multiSelection:s.map((function(t){return a.column(t)})),activeColumn:null})}},initCustomEvents:function(){var t=this;setTimeout((function(){t.refs.hot.querySelectorAll(".htCore thead th:first-child").forEach((function(t){t.removeEventListener("click",T),t.addEventListener("click",T)})),t.refs.hot.querySelectorAll(".htCore thead th+th").forEach((function(t){t.removeEventListener("click",N),t.addEventListener("click",N)}))}),500)},getColumnFormat:function(t){return this.store.get().dw_chart.get("metadata.data.column-format",{})[t]||{type:"auto",ignore:!1}}};function x(){var e=this;S=this,t.hooks.once("afterRender",(function(){return e.initCustomEvents()})),window.addEventListener("keyup",(function(t){var r=e.get(),n=r.activeColumn,o=r.ds;if(n&&"input"!==t.target.tagName.toLowerCase()&&"textarea"!==t.target.tagName.toLowerCase()&&("ArrowRight"===t.key||"ArrowLeft"===t.key)){t.preventDefault(),t.stopPropagation();var a=o.indexOf(n.name());"ArrowRight"===t.key?e.set({activeColumn:o.column((a+1)%o.numColumns())}):e.set({activeColumn:o.column((a-1+o.numColumns())%o.numColumns())})}}));var r=this.store.get().dw_chart,n=new t(this.refs.hot,{data:[],rowHeaders:function(e){return t.hooks.run(n,"modifyRow",e)+1},colHeaders:!0,fixedRowsTop:1,fixedColumnsLeft:this.get().fixedColumnsLeft,filters:!0,startRows:13,startCols:8,fillHandle:!1,stretchH:"all",height:500,manualColumnMove:!0,selectionMode:"range",autoColumnSize:{useHeaders:!0,syncLimit:5},sortIndicator:!0,columnSorting:!0,sortFunction:function(t,e){if(e.col>-1){var n=r.dataset().column(e.col),o=n.type();return function(e,r){return 0===e[0]?-1:(e[1]=n.val(e[0]-1),r[1]=n.val(r[0]-1),"number"===o&&(isNaN(e[1])&&(e[1]=t?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY),isNaN(r[1])&&(r[1]=t?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY)),"date"===o&&("string"==typeof e[1]&&(e[1]=new Date(110,0,1)),"string"==typeof r[1]&&(r[1]=new Date(110,0,1))),("desc"===t?-1:1)*(e[1]>r[1]?1:e[1]<r[1]?-1:0))}}return function(t,e){return t[0]-e[0]}},afterGetColHeader:function(t,r){var n=e.get(),o=n.activeColumn,a=n.ds;a&&a.hasColumn(t)&&((0===t||t)&&o&&a.column(t).name()===o.name()&&r.classList.add("selected"),(0===t||t)&&(e.getColumnFormat(a.column(t).name()).ignore?r.classList.add("ignored"):r.classList.remove("ignored")))},search:"search"});window.HT=n,this.set({hot:n}),t.hooks.add("afterSetDataAtCell",(function(t){return e.dataChanged(t)})),t.hooks.add("afterColumnMove",(function(t,r){return e.columnMoved(t,r)})),t.hooks.add("afterRender",(function(){return e.updateHeight()})),t.hooks.add("afterSelection",(function(t,r,n,o){return e.checkRange(t,r,n,o)}))}function k(t){var e=t.changed,r=t.current,n=t.previous,o=r.hot;if(o){if(e.data&&this.update(),e.firstRowIsHeader&&n&&void 0!==n.firstRowIsHeader&&this.update(),e.hot&&this.update(),e.search&&n&&(this.doSearch(),this.set({searchIndex:0})),e.searchResults&&o.render(),e.currentResult&&r.currentResult){o.render();var a=r.currentResult;o.scrollViewportTo(a.row,a.col),setTimeout((function(){o.scrollViewportTo(a.row,a.col)}),100)}e.activeColumn&&setTimeout((function(){return o.render()}),10),e.fixedColumnsLeft&&o.updateSettings({fixedColumnsLeft:r.fixedColumnsLeft}),e.sorting&&o.getPlugin("columnSorting").sort(chart.dataset().indexOf(r.sorting.sortBy),r.sorting.sortDir?"asc":"desc")}}function N(t){for(var e=this.parentNode.children.length,r=-1,n=0;n<e;n++)if(this.parentNode.children.item(n)===this){r=n;break}var o=+S.refs.hot.querySelector(".htCore tbody tr:first-child td:nth-child(".concat(r+1,")")).dataset.column,a=S.store.get().dw_chart,s=S.get(),i=s.activeColumn,u=s.hot;if(a.dataset().hasColumn(o)){var c=a.dataset().column(+o);i&&i.name()===c.name()?(t.target.parentNode.classList.remove("selected"),S.set({activeColumn:!1}),u.deselectCell()):(t.target.parentNode.classList.add("selected"),S.set({activeColumn:c}))}}function T(t){t.preventDefault();var e=S.get().transpose;S.set({transpose:!e}),S.update()}function O(t,e){var r;return{c:function(){var t;t="div",(r=document.createElement(t)).id="data-preview"},m:function(e,n){!function(t,e,r){t.insertBefore(e,r)}(e,r,n),t.refs.hot=r},p:h,d:function(e){var n;e&&(n=r).parentNode.removeChild(n),t.refs.hot===r&&(t.refs.hot=null)}}}function A(t){var e=this;!function(t,e){t._handlers=v(),t._slots=v(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}(this,t),this.refs={},this._state=f({hot:null,data:"",readonly:!1,skipRows:0,firstRowIsHeader:!0,fixedColumnsLeft:0,searchIndex:0,sortBy:"-",transpose:!1,activeColumn:null,search:"",searchResults:[]},t.data),this._recompute({searchResults:1,searchIndex:1},this._state),this._intro=!0,this._handlers.state=[k],k.call(this,{changed:m({},this._state),current:this._state}),this._fragment=O(this,this._state),this.root._oncreate.push((function(){x.call(e),e.fire("update",{changed:m({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),p(this))}return f(A.prototype,y),f(A.prototype,I),A.prototype._recompute=function(t,e){(t.searchResults||t.searchIndex)&&this._differs(e.currentResult,e.currentResult=function(t){var e=t.searchResults,r=t.searchIndex;if(!e||!e.length)return null;var n=e.length;if(r<0||r>=n){for(;r<0;)r+=n;r>n&&(r%=n)}return e[r]}(e))&&(t.currentResult=!0)},{Handsontable:A}}));
