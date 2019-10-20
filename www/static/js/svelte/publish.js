!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).publish=e()}(this,function(){"use strict";function t(){}function e(t,e){for(var n in e)t[n]=e[n];return t}function n(t,e){for(var n in e)t[n]=1;return t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n)}function r(t){t.parentNode.removeChild(t)}function a(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function o(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function c(){return document.createDocumentFragment()}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return document.createComment("")}function h(t,e,n,i){t.addEventListener(e,n,i)}function p(t,e,n,i){t.removeEventListener(e,n,i)}function f(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){t.data=""+e}function m(t,e,n){t.style.setProperty(e,n)}function _(){return Object.create(null)}function v(t){t._lock=!0,y(t._beforecreate),y(t._oncreate),y(t._aftercreate),t._lock=!1}function g(t,e){t._handlers=_(),t._slots=_(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function y(t){for(;t&&t.length;)t.shift()()}function w(){this.store._remove(this)}var N={destroy:function(e){this.destroy=t,this.fire("destroy"),this.set=t,this._fragment.d(!1!==e),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1){var s=n[i];if(!s.__calling)try{s.__calling=!0,s.call(this,e)}finally{s.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(e({},t)),this.root._lock||v(this.root)},_recompute:t,_set:function(t){var n=this._state,i={},s=!1;for(var r in t=e(this._staged,t),this._staged={},t)this._differs(t[r],n[r])&&(i[r]=s=!0);s&&(this._state=e(e({},n),t),this._recompute(i,this._state),this._bind&&this._bind(i,this._state),this._fragment&&(this.fire("state",{changed:i,current:this._state,previous:n}),this._fragment.p(i,this._state),this.fire("update",{changed:i,current:this._state,previous:n})))},_stage:function(t){e(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}};var j={show:function(){var t=this,e=setTimeout(function(){t.set({visible:!0})},400);this.set({t:e})},hide:function(){var t=this.get().t;clearTimeout(t),this.set({visible:!1})}};function x(t,e){var n;return{c:function(){n=u("?")},m:function(t,e){s(t,n,e)},d:function(t){t&&r(n)}}}function T(t,e){var n;return{c:function(){(n=l("i")).className="im im-graduation-hat svelte-1mkn8ur"},m:function(t,e){s(t,n,e)},d:function(t){t&&r(n)}}}function H(t,e){var n,a=t._slotted.default;return{c:function(){(n=l("div")).className="content svelte-1mkn8ur"},m:function(t,e){s(t,n,e),a&&i(n,a)},d:function(t){t&&r(n),a&&function(t,e){for(;t.firstChild;)e.appendChild(t.firstChild)}(n,a)}}}function A(t){g(this,t),this._state=e({visible:!1},t.data),this._intro=!0,this._slotted=t.slots||{},this._fragment=function(t,e){var n,a,o;function c(t){return t.visible?T:x}var d=c(e),f=d(t,e),b=e.visible&&H(t);function m(e){t.show()}function _(e){t.hide()}return{c:function(){n=l("div"),a=l("span"),f.c(),o=u("\n    "),b&&b.c(),a.className="svelte-1mkn8ur",h(n,"mouseenter",m),h(n,"mouseleave",_),n.className="help svelte-1mkn8ur"},m:function(t,e){s(t,n,e),i(n,a),f.m(a,null),i(n,o),b&&b.m(n,null)},p:function(e,i){d!==(d=c(i))&&(f.d(1),(f=d(t,i)).c(),f.m(a,null)),i.visible?b||((b=H(t)).c(),b.m(n,null)):b&&(b.d(1),b=null)},d:function(t){t&&r(n),f.d(),b&&b.d(),p(n,"mouseenter",m),p(n,"mouseleave",_)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}function C(t,e){var n;return{c:function(){(n=l("p")).innerHTML='<i class="fa fa-spinner fa-pulse fa-fw"></i> loading...',n.className="mini-help"},m:function(t,e){s(t,n,e)},d:function(t){t&&r(n)}}}function k(t){var n,i,a;g(this,t),this._state=e({loading:!1},t.data),this._intro=!0,this._fragment=(n=this._state,a=n.loading&&C(),{c:function(){a&&a.c(),i=d()},m:function(t,e){a&&a.m(t,e),s(t,i,e)},p:function(t,e){e.loading?a||((a=C()).c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},d:function(t){a&&a.d(t),t&&r(i)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}e(A.prototype,N),e(A.prototype,j),e(k.prototype,N);var L=window.dw;function M(t,e){var n=arguments;if(void 0===e&&(e="core"),t=t.trim(),!L.backend.__messages[e])return"MISSING:"+t;var i=L.backend.__messages[e][t]||L.backend.__messages.core[t]||t;if(arguments.length>2)for(var s=2;s<arguments.length;s++){var r=s-1;i=i.replace("$"+r,n[s])}return i}function E(t,e,n,i){window._paq&&window._paq.push(["trackEvent",t,e,n,i])}function U(t,e,n,i,s){var r={method:e,body:i,mode:"cors",credentials:n},a=window.fetch(t,r).then(function(t){return 200!==t.status?new Error(t.statusText):t.text()}).then(function(t){try{return JSON.parse(t)}catch(e){return console.warn("malformed json input",t),t}}).catch(function(t){console.error(t)});return s?a.then(s):a}function I(t,e,n){return U(t,"POST","include",e,n)}var S=[100,200,300,400,500,700,800,900,1e3];var O=0,D=!0;var G={publish:function(){var t=this;this.set({publishing:!0,progress:0,publish_error:!1});var e,n,i,s,r,a=this.store;a.setMetadata("publish.embed-heights",(this.get().embed_templates,e={},n=window.$,i=n(n("#iframe-vis")[0].contentDocument),s=n("h1",i).height()+n(".chart-intro",i).height()+n(".dw-chart-notes",i).height(),r=n("#iframe-vis").height(),S.forEach(function(t){i.find("h1,.chart-intro,.dw-chart-notes").css("width",t+"px");var a=n("h1",i).height()+n(".chart-intro",i).height()+n(".dw-chart-notes",i).height();e[t]=r+(a-s)}),i.find("h1,.chart-intro,.dw-chart-notes").css("width","auto"),e)),E("Chart Editor","publish"),a.store(function(){I("/api/charts/"+a.get().id+"/publish",null,function(e){"ok"===e.status?(t.publishFinished(e.data),E("Chart Editor","publish-success")):(E("Chart Editor","publish-error",e.message),t.set({publish_error:e.message}))}),O=0,t.updateStatus()})},updateProgressBar:function(t){this.refs.bar&&(this.refs.bar.style.width=(100*t).toFixed()+"%")},updateStatus:function(){var t=this,e=this.store;O+=.05,function(t,e,n){2===arguments.length&&(n=e,e="include"),U(t,"GET",e,null,n)}("/api/charts/"+e.get().id+"/publish/status",function(e){e&&(e=+e/100+O,t.set({progress:Math.min(1,e)})),t.get().publishing&&setTimeout(function(){t.updateStatus()},400)})},publishFinished:function(t){var e=this;this.set({progress:1,published:!0,needs_republish:!1}),this.store.set({lastEditStep:5}),setTimeout(function(){return e.set({publishing:!1})},500),this.store.set(t)},setEmbedCode:function(){var t=this.store,e=this.get();if(e){var n=e.embed_type?"embed-method-"+e.embed_type:null,i=t.get().publicUrl,s=t.getMetadata("publish.embed-codes"),r=t.getMetadata("publish.embed-height");this.set({embedCode:s&&s[n]?s[n]:'<iframe src="'+i+'" width="100%" height="'+r+'" scrolling="no" frameborder="0" allowtransparency="true"></iframe>'})}},copy:function(){var t=this;t.refs.embedInput.select();try{document.execCommand("copy")&&(E("Chart Editor","embedcode-copy"),t.set({copy_success:!0}),setTimeout(function(){return t.set({copy_success:!1})},300))}catch(t){}},select:function(t,e){var n=this;e.preventDefault(),window.location.hash=t.id;var i,s,r,a=this.get().active_action;if(t.id===a)return this.set({active_action:"",Action:k});this.set({active_action:t.id}),t.mod?t.mod.App?(this.set({Action:t.mod.App}),t.mod.data&&this.refs.action.set(t.mod.data)):(this.set({Action:k}),this.refs.action.set({loading:!0}),t.mod.css&&(i=t.mod.css,(r=document.createElement("link")).rel="stylesheet",r.href=i,r.onload=function(){s&&s()},document.head.appendChild(r)),function(t,e){var n=document.createElement("script");n.src=t,n.onload=function(){e&&e()},document.body.appendChild(n)}(t.mod.src,function(){setTimeout(function(){require([t.mod.id],function(e){Object.assign(t.mod,e),n.set({Action:t.mod.App}),e.init&&e.init(n.refs.action),t.mod.data&&n.refs.action.set(t.mod.data)})},200)})):t.action&&this[t.action]?(this.set({Action:k}),this[t.action]()):"function"==typeof t.action&&(this.set({Action:k}),t.action())},duplicate:function(){var t=this.store.get().id;E("Chart Editor","duplicate"),I("/api/charts/"+t+"/copy",null,function(t){"ok"===t.status?window.location.href="/edit/"+t.data.id+"/visualize":console.warn(t)})}};function $(t){var e=t.changed,n=t.current,i=window.dw&&window.dw.backend&&window.dw.backend.setUserData;if(e.publishing&&n.publishing&&this.updateProgressBar(n.progress),e.progress&&this.updateProgressBar(n.progress),e.embed_type&&i){var s=window.dw.backend.__userData;if(!n.embed_type||!s)return;s.embed_type=n.embed_type,window.dw.backend.setUserData(s)}if(e.embed_type&&this.setEmbedCode(),e.shareurl_type&&i){var r=window.dw.backend.__userData;if(!n.shareurl_type||!r)return;r.shareurl_type=n.shareurl_type,window.dw.backend.setUserData(r)}if(e.published){var a=window.document.querySelector(".dw-create-publish .publish-step");a&&a.classList[n.published?"add":"remove"]("is-published")}e.auto_publish&&n.auto_publish&&D&&(this.publish(),D=!1,window.history.replaceState("","",window.location.pathname))}function F(t){var e=this._svelte,n=e.component,i=e.ctx;n.select(i.action,t)}function P(t,e,n){var i=Object.create(t);return i.action=e[n],i}function q(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function B(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function z(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function J(t,e){var n;return{c:function(){(n=l("h2")).className="pad-top"},m:function(t,i){s(t,n,i),n.innerHTML=e.publishHed},p:function(t,e){t.publishHed&&(n.innerHTML=e.publishHed)},d:function(t){t&&r(n)}}}function K(e,n){var i,a=M("publish / publish-intro");return{c:function(){m(i=l("p"),"margin-bottom","20px")},m:function(t,e){s(t,i,e),i.innerHTML=a},p:t,d:function(t){t&&r(i)}}}function Q(e,n){var i,a=M("publish / republish-intro");return{c:function(){i=l("p")},m:function(t,e){s(t,i,e),i.innerHTML=a},p:t,d:function(t){t&&r(i)}}}function R(t,e){var n;return{c:function(){n=l("p")},m:function(t,i){s(t,n,i),n.innerHTML=e.publishIntro},p:function(t,e){t.publishIntro&&(n.innerHTML=e.publishIntro)},d:function(t){t&&r(n)}}}function V(t,e){var n,a,o,c,d,h,p=M("publish / publish-btn");return{c:function(){n=l("span"),a=l("i"),c=u("\n            "),d=l("span"),h=u(p),a.className=o="fa fa-fw "+(e.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-1njbtly",d.className="title svelte-1njbtly",n.className="publish"},m:function(t,e){s(t,n,e),i(n,a),i(n,c),i(n,d),i(d,h)},p:function(t,e){t.publishing&&o!==(o="fa fa-fw "+(e.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-1njbtly")&&(a.className=o)},d:function(t){t&&r(n)}}}function W(t,e){var n,a,o,c,d,h,p=M("publish / republish-btn");return{c:function(){n=l("span"),a=l("i"),c=u(" "),d=l("span"),h=u(p),a.className=o="fa fa-fw fa-refresh "+(e.publishing?"fa-spin":"")+" svelte-1njbtly",d.className="title svelte-1njbtly",n.className="re-publish"},m:function(t,e){s(t,n,e),i(n,a),i(n,c),i(n,d),i(d,h)},p:function(t,e){t.publishing&&o!==(o="fa fa-fw fa-refresh "+(e.publishing?"fa-spin":"")+" svelte-1njbtly")&&(a.className=o)},d:function(t){t&&r(n)}}}function X(t,e){var n,a,o,c,d=M("publish / publish-btn-intro");return{c:function(){n=l("div"),(a=l("div")).innerHTML='<i class="fa fa-chevron-left"></i>',o=u("\n        "),c=l("div"),a.className="arrow svelte-1njbtly",c.className="text svelte-1njbtly",n.className="publish-intro svelte-1njbtly"},m:function(t,e){s(t,n,e),i(n,a),i(n,o),i(n,c),c.innerHTML=d},d:function(t){t&&r(n)}}}function Y(t,e){var n,i=M("publish / republish-alert");return{c:function(){(n=l("div")).className="btn-aside alert svelte-1njbtly"},m:function(t,e){s(t,n,e),n.innerHTML=i},d:function(t){t&&r(n)}}}function Z(t,e){var n,i=M("publish / publish-success");return{c:function(){(n=l("div")).className="alert alert-success svelte-1njbtly"},m:function(t,e){s(t,n,e),n.innerHTML=i},d:function(t){t&&r(n)}}}function tt(t,e){var n;return{c:function(){(n=l("div")).className="alert alert-error svelte-1njbtly"},m:function(t,i){s(t,n,i),n.innerHTML=e.publish_error},p:function(t,e){t.publish_error&&(n.innerHTML=e.publish_error)},d:function(t){t&&r(n)}}}function et(t,e){var n,a,o,c,d,h,p,f=M("publish / progress / please-wait");return{c:function(){n=l("div"),a=u(f),o=u("\n        "),c=l("div"),(d=l("div")).className=h="bar "+(e.progress<1?"":"bar-success")+" svelte-1njbtly",c.className="progress progress-striped active svelte-1njbtly",n.className=p="alert "+(e.progress<1?"alert-info":"alert-success")+" publishing svelte-1njbtly"},m:function(e,r){s(e,n,r),i(n,a),i(n,o),i(n,c),i(c,d),t.refs.bar=d},p:function(t,e){t.progress&&h!==(h="bar "+(e.progress<1?"":"bar-success")+" svelte-1njbtly")&&(d.className=h),t.progress&&p!==(p="alert "+(e.progress<1?"alert-info":"alert-success")+" publishing svelte-1njbtly")&&(n.className=p)},d:function(e){e&&r(n),t.refs.bar===d&&(t.refs.bar=null)}}}function nt(t,e){var n,o,c,d,b,m=e.tpl.name;function _(){t.set({shareurl_type:o.__value})}return{c:function(){n=l("label"),o=l("input"),d=u(" "),b=l("noscript"),t._bindingGroups[0].push(o),h(o,"change",_),o.__value=c=e.tpl.id,o.value=o.__value,f(o,"type","radio"),o.name="url-type",o.className="svelte-1njbtly",n.className="radio"},m:function(t,r){s(t,n,r),i(n,o),o.checked=o.__value===e.shareurl_type,i(n,d),i(n,b),b.insertAdjacentHTML("afterend",m)},p:function(t,e){t.shareurl_type&&(o.checked=o.__value===e.shareurl_type),t.plugin_shareurls&&c!==(c=e.tpl.id)&&(o.__value=c),o.value=o.__value,t.plugin_shareurls&&m!==(m=e.tpl.name)&&(a(b),b.insertAdjacentHTML("afterend",m))},d:function(e){e&&r(n),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf(o),1),p(o,"change",_)}}}function it(t,e){var n,o,c,d,b,m=e.tpl.title;function _(){t.set({embed_type:o.__value})}return{c:function(){n=l("label"),o=l("input"),d=u(" "),b=l("noscript"),t._bindingGroups[1].push(o),h(o,"change",_),f(o,"type","radio"),o.__value=c=e.tpl.id,o.value=o.__value,o.className="svelte-1njbtly",n.className="radio"},m:function(t,r){s(t,n,r),i(n,o),o.checked=o.__value===e.embed_type,i(n,d),i(n,b),b.insertAdjacentHTML("afterend",m)},p:function(t,e){t.embed_type&&(o.checked=o.__value===e.embed_type),t.embed_templates&&c!==(c=e.tpl.id)&&(o.__value=c),o.value=o.__value,t.embed_templates&&m!==(m=e.tpl.title)&&(a(b),b.insertAdjacentHTML("afterend",m))},d:function(e){e&&r(n),t._bindingGroups[1].splice(t._bindingGroups[1].indexOf(o),1),p(o,"change",_)}}}function st(t,e){var n,o,c,d,h,p,f=e.tpl.title,m=e.tpl.text;return{c:function(){n=l("div"),o=l("b"),c=u(f),d=u(":"),h=u(" "),p=l("noscript")},m:function(t,e){s(t,n,e),i(n,o),i(o,c),i(o,d),i(n,h),i(n,p),p.insertAdjacentHTML("afterend",m)},p:function(t,e){t.embed_templates&&f!==(f=e.tpl.title)&&b(c,f),t.embed_templates&&m!==(m=e.tpl.text)&&(a(p),p.insertAdjacentHTML("afterend",m))},d:function(t){t&&r(n)}}}function rt(t,e){var n;return{c:function(){n=l("p")},m:function(t,i){s(t,n,i),n.innerHTML=e.exportIntro},p:function(t,e){t.exportIntro&&(n.innerHTML=e.exportIntro)},d:function(t){t&&r(n)}}}function at(t,e){var n,a,o,c,d,b,m,_,v=e.action.title,g=e.action.banner&&"FALSE"!=e.action.banner.text&&"-"!=e.action.banner.text&&ot(t,e);return{c:function(){n=l("li"),a=l("a"),o=l("i"),d=l("span"),m=u("\n                "),g&&g.c(),o.className=c="fa fa-"+e.action.icon+" svelte-1njbtly",d.className="title svelte-1njbtly",a._svelte={component:t,ctx:e},h(a,"click",F),f(a,"role","button"),a.href=b=e.action.url?e.action.url:"#"+e.action.id,n.className=_="action action-"+e.action.id+" "+(e.action.class||"")+" "+(e.action.id==e.active_action?"active":"")+" svelte-1njbtly"},m:function(t,e){s(t,n,e),i(n,a),i(a,o),i(a,d),d.innerHTML=v,i(n,m),g&&g.m(n,null)},p:function(i,s){e=s,i.sortedChartActions&&c!==(c="fa fa-"+e.action.icon+" svelte-1njbtly")&&(o.className=c),i.sortedChartActions&&v!==(v=e.action.title)&&(d.innerHTML=v),a._svelte.ctx=e,i.sortedChartActions&&b!==(b=e.action.url?e.action.url:"#"+e.action.id)&&(a.href=b),e.action.banner&&"FALSE"!=e.action.banner.text&&"-"!=e.action.banner.text?g?g.p(i,e):((g=ot(t,e)).c(),g.m(n,null)):g&&(g.d(1),g=null),(i.sortedChartActions||i.active_action)&&_!==(_="action action-"+e.action.id+" "+(e.action.class||"")+" "+(e.action.id==e.active_action?"active":"")+" svelte-1njbtly")&&(n.className=_)},d:function(t){t&&r(n),p(a,"click",F),g&&g.d()}}}function ot(t,e){var n,a,o,c=e.action.banner.text;return{c:function(){n=l("div"),a=u(c),n.className="banner",n.style.cssText=o=e.action.banner.style},m:function(t,e){s(t,n,e),i(n,a)},p:function(t,e){t.sortedChartActions&&c!==(c=e.action.banner.text)&&b(a,c),t.sortedChartActions&&o!==(o=e.action.banner.style)&&(n.style.cssText=o)},d:function(t){t&&r(n)}}}function ct(t,e){var n,i=e.action&&at(t,e);return{c:function(){i&&i.c(),n=d()},m:function(t,e){i&&i.m(t,e),s(t,n,e)},p:function(e,s){s.action?i?i.p(e,s):((i=at(t,s)).c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d:function(t){i&&i.d(t),t&&r(n)}}}function lt(t){var a=this;g(this,t),this.refs={},this._state=e(e(this.store._init(["id","publicUrl","actions"]),{active_action:"",embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:0,shareurl_type:"default",embed_type:"responsive",copy_success:!1,Action:k,chartActions:[{id:"duplicate",icon:"code-fork",title:M("Duplicate"),order:500,action:"duplicate"}],publishHed:"",publishIntro:"",beforeExport:null,exportHed:M("publish / export-duplicate"),exportIntro:M("publish / export-duplicate / intro"),embedCode:""}),t.data),this.store._add(this,["id","publicUrl","actions"]),this._recompute({shareurl_type:1,$id:1,$publicUrl:1,plugin_shareurls:1,published:1,chartActions:1,$actions:1},this._state),this._bindingGroups=[[],[]],this._intro=!0,this._handlers.state=[$],this._handlers.destroy=[w],$.call(this,{changed:n({},this._state),current:this._state}),this._fragment=function(t,e){var n,a,d,_,v,g,y,w,N,j,x,T,H,C,k,L,E,U,I,S,O,D,G,$,F,at,ot,lt,ut,dt,ht,pt,ft,bt,mt,_t,vt,gt,yt,wt,Nt,jt,xt,Tt,Ht,At,Ct,kt,Lt,Mt,Et,Ut,It,St,Ot,Dt,Gt,$t,Ft,Pt,qt,Bt,zt,Jt,Kt,Qt,Rt,Vt,Wt=M("publish / share-embed"),Xt=M("publish / share-url"),Yt=M("publish / share-url / fullscreen"),Zt=M("publish / help / share-url"),te=M("publish / embed"),ee=M("publish / copy"),ne=M("publish / copy-success"),ie=M("publish / embed / help"),se=e.publishHed&&J(0,e);function re(t){return t.publishIntro?R:t.published?Q:K}var ae=re(e),oe=ae(t,e);function ce(t){return t.published?W:V}var le=ce(e),ue=le(t,e);function de(e){t.publish()}var he=!e.published&&X(),pe=e.needs_republish&&!e.publishing&&Y(),fe=e.published&&!e.needs_republish&&1===e.progress&&!e.publishing&&Z(),be=e.publish_error&&tt(0,e),me=e.publishing&&et(t,e);function _e(){t.set({shareurl_type:$.__value})}for(var ve=e.plugin_shareurls,ge=[],ye=0;ye<ve.length;ye+=1)ge[ye]=nt(t,z(e,ve,ye));var we=new A({root:t.root,store:t.store,slots:{default:c()}}),Ne=e.embed_templates,je=[];for(ye=0;ye<Ne.length;ye+=1)je[ye]=it(t,B(e,Ne,ye));function xe(n){t.copy(e.embedCode)}var Te=e.embed_templates.slice(2),He=[];for(ye=0;ye<Te.length;ye+=1)He[ye]=st(0,q(e,Te,ye));var Ae=new A({root:t.root,store:t.store,slots:{default:c()}}),Ce=e.beforeExport;function ke(e){return{root:t.root,store:t.store}}if(Ce)var Le=new Ce(ke());var Me=e.exportIntro&&rt(0,e),Ee=e.sortedChartActions,Ue=[];for(ye=0;ye<Ee.length;ye+=1)Ue[ye]=ct(t,P(e,Ee,ye));var Ie=e.Action;function Se(e){return{root:t.root,store:t.store,data:{visible:!0,show:!0}}}if(Ie)var Oe=new Ie(Se());return{c:function(){n=l("div"),se&&se.c(),a=u(" "),oe.c(),d=u("\n\n    "),_=l("button"),ue.c(),g=u("\n\n    "),he&&he.c(),y=u(" "),pe&&pe.c(),w=u(" "),fe&&fe.c(),N=u(" "),be&&be.c(),j=u(" "),me&&me.c(),x=u("\n\n    "),T=l("div"),H=l("h2"),C=u("\n        "),k=l("div"),L=l("i"),E=u("\n            "),U=l("div"),I=l("div"),S=l("b"),O=u("\n                    "),D=l("div"),G=l("label"),$=l("input"),F=u("\n                            "),at=l("noscript"),ot=u("\n                        ");for(var i=0;i<ge.length;i+=1)ge[i].c();for(lt=u("\n                "),ut=l("div"),dt=l("a"),ht=u(e.shareUrl),pt=u("\n            "),ft=l("div"),we._fragment.c(),bt=u("\n\n        "),mt=l("div"),_t=l("i"),vt=u("\n            "),gt=l("div"),yt=l("div"),wt=l("b"),Nt=u("\n                    "),jt=l("div"),i=0;i<je.length;i+=1)je[i].c();for(xt=u("\n                "),Tt=l("div"),Ht=l("input"),At=u("\n                    "),Ct=l("button"),kt=l("i"),Lt=u(" "),Mt=u(ee),Et=u("\n                    "),Ut=l("div"),It=u(ne),Ot=u("\n            "),Dt=l("div"),Gt=l("noscript"),$t=u(" "),i=0;i<He.length;i+=1)He[i].c();for(Ae._fragment.c(),Pt=u("\n\n    \n    "),Le&&Le._fragment.c(),qt=u("\n\n    \n    "),Bt=l("div"),zt=l("div"),Jt=l("h2"),Kt=u("\n            "),Me&&Me.c(),Qt=u("\n\n        "),Rt=l("ul"),i=0;i<Ue.length;i+=1)Ue[i].c();Vt=u("\n\n        "),Oe&&Oe._fragment.c(),h(_,"click",de),_.disabled=e.publishing,_.className=v="btn-publish btn btn-primary btn-large "+(e.published?"":"btn-first-publish")+" svelte-1njbtly",L.className="icon fa fa-link fa-fw",t._bindingGroups[0].push($),h($,"change",_e),$.__value="default",$.value=$.__value,f($,"type","radio"),$.name="url-type",$.className="svelte-1njbtly",G.className="radio",D.className="embed-options svelte-1njbtly",I.className="h",dt.target="_blank",dt.className="share-url svelte-1njbtly",dt.href=e.shareUrl,ut.className="inpt",U.className="ctrls",k.className="block",_t.className="icon fa fa-code fa-fw",jt.className="embed-options svelte-1njbtly",yt.className="h",f(Ht,"type","text"),Ht.className="input embed-code",Ht.readOnly=!0,Ht.value=e.embedCode,kt.className="fa fa-copy",h(Ct,"click",xe),Ct.className="btn btn-copy",Ct.title="copy",Ut.className=St="copy-success "+(e.copy_success?"show":"")+" svelte-1njbtly",Tt.className="inpt",gt.className="ctrls",mt.className="block",m(T,"margin-top","30px"),T.className=Ft=e.published?"":"inactive",Jt.className="pad-top",Rt.className="chart-actions",Bt.className="export-and-duplicate"},m:function(r,o){s(r,n,o),se&&se.m(n,null),i(n,a),oe.m(n,null),i(n,d),i(n,_),ue.m(_,null),i(n,g),he&&he.m(n,null),i(n,y),pe&&pe.m(n,null),i(n,w),fe&&fe.m(n,null),i(n,N),be&&be.m(n,null),i(n,j),me&&me.m(n,null),i(n,x),i(n,T),i(T,H),H.innerHTML=Wt,i(T,C),i(T,k),i(k,L),i(k,E),i(k,U),i(U,I),i(I,S),S.innerHTML=Xt,i(I,O),i(I,D),i(D,G),i(G,$),$.checked=$.__value===e.shareurl_type,i(G,F),i(G,at),at.insertAdjacentHTML("afterend",Yt),i(D,ot);for(var c=0;c<ge.length;c+=1)ge[c].m(D,null);for(i(U,lt),i(U,ut),i(ut,dt),i(dt,ht),i(k,pt),i(we._slotted.default,ft),ft.innerHTML=Zt,we._mount(k,null),i(T,bt),i(T,mt),i(mt,_t),i(mt,vt),i(mt,gt),i(gt,yt),i(yt,wt),wt.innerHTML=te,i(yt,Nt),i(yt,jt),c=0;c<je.length;c+=1)je[c].m(jt,null);for(i(gt,xt),i(gt,Tt),i(Tt,Ht),t.refs.embedInput=Ht,i(Tt,At),i(Tt,Ct),i(Ct,kt),i(Ct,Lt),i(Ct,Mt),i(Tt,Et),i(Tt,Ut),i(Ut,It),i(mt,Ot),i(Ae._slotted.default,Dt),i(Dt,Gt),Gt.insertAdjacentHTML("beforebegin",ie),i(Dt,$t),c=0;c<He.length;c+=1)He[c].m(Dt,null);for(Ae._mount(mt,null),i(n,Pt),Le&&Le._mount(n,null),i(n,qt),i(n,Bt),i(Bt,zt),i(zt,Jt),Jt.innerHTML=e.exportHed,i(zt,Kt),Me&&Me.m(zt,null),i(Bt,Qt),i(Bt,Rt),c=0;c<Ue.length;c+=1)Ue[c].m(Rt,null);i(Bt,Vt),Oe&&(Oe._mount(Bt,null),t.refs.action=Oe)},p:function(i,s){if((e=s).publishHed?se?se.p(i,e):((se=J(0,e)).c(),se.m(n,a)):se&&(se.d(1),se=null),ae===(ae=re(e))&&oe?oe.p(i,e):(oe.d(1),(oe=ae(t,e)).c(),oe.m(n,d)),le===(le=ce(e))&&ue?ue.p(i,e):(ue.d(1),(ue=le(t,e)).c(),ue.m(_,null)),i.publishing&&(_.disabled=e.publishing),i.published&&v!==(v="btn-publish btn btn-primary btn-large "+(e.published?"":"btn-first-publish")+" svelte-1njbtly")&&(_.className=v),e.published?he&&(he.d(1),he=null):he||((he=X()).c(),he.m(n,y)),e.needs_republish&&!e.publishing?pe||((pe=Y()).c(),pe.m(n,w)):pe&&(pe.d(1),pe=null),!e.published||e.needs_republish||1!==e.progress||e.publishing?fe&&(fe.d(1),fe=null):fe||((fe=Z()).c(),fe.m(n,N)),e.publish_error?be?be.p(i,e):((be=tt(0,e)).c(),be.m(n,j)):be&&(be.d(1),be=null),e.publishing?me?me.p(i,e):((me=et(t,e)).c(),me.m(n,x)):me&&(me.d(1),me=null),i.shareurl_type&&($.checked=$.__value===e.shareurl_type),i.plugin_shareurls||i.shareurl_type){ve=e.plugin_shareurls;for(var r=0;r<ve.length;r+=1){var o=z(e,ve,r);ge[r]?ge[r].p(i,o):(ge[r]=nt(t,o),ge[r].c(),ge[r].m(D,null))}for(;r<ge.length;r+=1)ge[r].d(1);ge.length=ve.length}if(i.shareUrl&&(b(ht,e.shareUrl),dt.href=e.shareUrl),i.embed_templates||i.embed_type){for(Ne=e.embed_templates,r=0;r<Ne.length;r+=1){var c=B(e,Ne,r);je[r]?je[r].p(i,c):(je[r]=it(t,c),je[r].c(),je[r].m(jt,null))}for(;r<je.length;r+=1)je[r].d(1);je.length=Ne.length}if(i.embedCode&&(Ht.value=e.embedCode),i.copy_success&&St!==(St="copy-success "+(e.copy_success?"show":"")+" svelte-1njbtly")&&(Ut.className=St),i.embed_templates){for(Te=e.embed_templates.slice(2),r=0;r<Te.length;r+=1){var l=q(e,Te,r);He[r]?He[r].p(i,l):(He[r]=st(0,l),He[r].c(),He[r].m(Dt,null))}for(;r<He.length;r+=1)He[r].d(1);He.length=Te.length}if(i.published&&Ft!==(Ft=e.published?"":"inactive")&&(T.className=Ft),Ce!==(Ce=e.beforeExport)&&(Le&&Le.destroy(),Ce?((Le=new Ce(ke()))._fragment.c(),Le._mount(n,qt)):Le=null),i.exportHed&&(Jt.innerHTML=e.exportHed),e.exportIntro?Me?Me.p(i,e):((Me=rt(0,e)).c(),Me.m(zt,null)):Me&&(Me.d(1),Me=null),i.sortedChartActions||i.active_action){for(Ee=e.sortedChartActions,r=0;r<Ee.length;r+=1){var u=P(e,Ee,r);Ue[r]?Ue[r].p(i,u):(Ue[r]=ct(t,u),Ue[r].c(),Ue[r].m(Rt,null))}for(;r<Ue.length;r+=1)Ue[r].d(1);Ue.length=Ee.length}Ie!==(Ie=e.Action)&&(Oe&&Oe.destroy(),Ie?((Oe=new Ie(Se()))._fragment.c(),Oe._mount(Bt,null),t.refs.action=Oe):(Oe=null,t.refs.action===Oe&&(t.refs.action=null)))},d:function(e){e&&r(n),se&&se.d(),oe.d(),ue.d(),p(_,"click",de),he&&he.d(),pe&&pe.d(),fe&&fe.d(),be&&be.d(),me&&me.d(),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf($),1),p($,"change",_e),o(ge,e),we.destroy(),o(je,e),t.refs.embedInput===Ht&&(t.refs.embedInput=null),p(Ct,"click",xe),o(He,e),Ae.destroy(),Le&&Le.destroy(),Me&&Me.d(),o(Ue,e),Oe&&Oe.destroy()}}}(this,this._state),this.root._oncreate.push(function(){(function(){var t=this,e=this.store.get().lastEditStep;this.set({published:e>4}),window.dw.backend.fire("edit.publish.oncreate",this),this.setEmbedCode();var n=this.store;n.observeDeep("metadata.publish.embed-codes",function(){return t.setEmbedCode()}),n.observeDeep("metadata.publish.embed-height",function(){return t.setEmbedCode()}),n.observeDeep("publicUrl",function(){return t.setEmbedCode()})}).call(a),a.fire("update",{changed:n({},a._state),current:a._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),v(this))}return e(lt.prototype,N),e(lt.prototype,G),lt.prototype._recompute=function(t,e){var n,i,s;(t.shareurl_type||t.$id||t.$publicUrl||t.plugin_shareurls||t.published)&&this._differs(e.shareUrl,e.shareUrl=function(t){var e=t.shareurl_type,n=t.$id,i=t.$publicUrl,s=t.plugin_shareurls;if(!t.published)return"https://www.datawrapper.de/...";if("default"===e)return i;var r="";return s.forEach(function(t){t.id===e&&(r=t.url.replace(/%chart_id%/g,n))}),r}(e))&&(t.shareUrl=!0),(t.chartActions||t.$actions)&&this._differs(e.sortedChartActions,e.sortedChartActions=(i=(n=e).chartActions,s=n.$actions,i.concat(s).filter(function(t){return"publish-s3"!==t.id}).sort(function(t,e){return t.order-e.order})))&&(t.sortedChartActions=!0)},{Publish:lt}});
