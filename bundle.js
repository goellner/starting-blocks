module.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.BootstrapMedia=e.debounce=e.gaTrackErrors=e.polyfills=e.Scroll=e.Utils=e.AbstractBlock=e.AbstractNav=e.AbstractPage=e.GraphicLoader=e.CacheProvider=e.State=e.Router=void 0;var o=n(1),a=i(o),s=n(26),r=i(s),l=n(27),u=i(l),d=n(28),c=i(d),h=n(29),f=i(h),p=n(33),v=i(p),y=n(34),g=i(y),b=n(25),m=i(b),w=n(35),k=i(w),_=n(36),x=i(_),L=n(37),T=i(L),P=n(32),E=i(P),A=n(40),S=i(A);e.Router=a.default,e.State=r.default,e.CacheProvider=u.default,e.GraphicLoader=c.default,e.AbstractPage=f.default,e.AbstractNav=v.default,e.AbstractBlock=g.default,e.Utils=m.default,e.Scroll=k.default,e.polyfills=x.default,e.gaTrackErrors=T.default,e.debounce=E.default,e.BootstrapMedia=S.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(22),u=i(l),d=n(23),c=i(d),h=n(24),f=i(h),p=n(25),v=i(p),y=n(26),g=i(y),b=n(27),m=i(b),w=function(){function t(e,n,i,o,s){if((0,a.default)(this,t),!i)throw"Router needs baseUrl to be defined.";if(!o)throw"Router needs a GraphicLoader instance to be defined.";if(!n)throw"Router needs a ClassFactory instance to be defined.";if(!s)throw"Router needs a Nav instance to be defined.";this.classFactory=n,this.baseUrl=i,this.loader=o,this.nav=s,this.nav.router=this,this.state=null,this.formerPages=[],this.page=null,this.stateBlock=!0,this.transition=!1,this.loading=!1,this.$window=(0,u.default)(window),this.$body=(0,u.default)("body"),this.deviceType=c.default.any===!1?"desktop":"mobile",v.default.addClass(this.$body[0],"is-"+this.deviceType),this.window=this.$window,this.currentRequest=null,this.cacheProvider=new m.default,this.options={homeHasClass:!1,ajaxEnabled:!0,pageClass:"page-content",objectTypeAttr:"data-node-type",ajaxLinkTypeAttr:"data-node-type",noAjaxLinkClass:"no-ajax-link",navLinkClass:"nav-link",activeClass:"active",pageBlockClass:".page-block",lazyloadEnabled:!1,lazyloadSrcAttr:"data-src",lazyloadClass:"lazyload",lazyloadSrcSetAttr:"data-srcset",lazyloadThreshold:300,lazyloadThrottle:150,$ajaxContainer:(0,u.default)("#ajax-container"),minLoadDuration:0,preLoadPageDelay:0,useCache:!0,postLoad:function(t,e){},preLoad:function(t){},prePushState:function(t){},onDestroy:function(){},preBoot:function(t,e,n){}},null!==e&&(this.options=u.default.extend(this.options,e))}return(0,r.default)(t,[{key:"destroy",value:function(){this.options.ajaxEnabled&&window.removeEventListener("popstate",this.onPopState.bind(this),!1);var t=this.options.onDestroy.bind(this);t()}},{key:"initEvents",value:function(){this.options.ajaxEnabled&&window.addEventListener("popstate",this.onPopState.bind(this),!1),this.nav.initEvents(this)}},{key:"onPopState",value:function(t){"undefined"!=typeof t.state&&null!==t.state&&(this.transition=!0,this.loadPage(t,t.state))}},{key:"boot",value:function(t,e,n){"static"===e&&(this.loadBeginDate=new Date);var i=this.options.preBoot.bind(this);i(t,e,n),null===this.state&&(this.state=new g.default(this,null),window.history.replaceState(this.state,null,null));var o=t.attr(this.options.objectTypeAttr);this.page=this.classFactory.getPageInstance(o,this,t,e,o,n),"ajax"===e&&this.state.update(this.page)}},{key:"onLinkClick",value:function(t){var e=t.currentTarget.className,n=t.currentTarget.href;if(n.indexOf("mailto:")===-1&&e.indexOf(this.options.noAjaxLinkClass)===-1)if(t.preventDefault(),this.isNotCurrentPageLink(t.currentTarget)){this.transition=!0,this.state=new g.default(this,t.currentTarget,{previousType:this.page.type,previousName:this.page.name,navLinkClass:this.options.navLinkClass,previousHref:window.location.href});var i=this.options.prePushState.bind(this);i(this.state),window.history.pushState&&window.history.pushState(this.state,this.state.title,this.state.href),this.loadPage(t,this.state)}else f.default.debug("⛔️ Same page requested… do nothing.")}},{key:"isNotCurrentPageLink",value:function(t){var e=t.className;return e.indexOf(this.options.activeClass)===-1&&!this.transition}},{key:"loadPage",value:function(t,e){this.currentRequest&&4!==this.currentRequest.readyState&&this.currentRequest.abort(),this.loader.show(),this.loadBeginDate=new Date;var n=this.options.preLoad.bind(this);n(e),setTimeout(this.doPageLoad.bind(this,e),this.options.preLoadPageDelay)}},{key:"doPageLoad",value:function(t){var e=this;this.options.useCache&&this.cacheProvider.exists(t.href)?(f.default.debug("📎 Use cache-provider for: "+t.href),this._onDataLoaded(this.cacheProvider.fetch(t.href),t)):this.currentRequest=u.default.ajax({url:t.href,dataType:"html",headers:{"X-Allow-Partial":1},cache:!1,type:"get",success:function(n){e.options.useCache&&e.cacheProvider.save(t.href,n),e._onDataLoaded(n,t)}})}},{key:"_onDataLoaded",value:function(t,e){var n=null,i=(0,u.default)(u.default.parseHTML(t.trim()));n=i.hasClass(this.options.pageClass)?i:i.find("."+this.options.pageClass),this.options.$ajaxContainer.append(n),this.formerPages.push(this.page),this.updatePageTitle(n),this.boot(n,"ajax",e.isHome);var o=this.options.postLoad.bind(this);o(e,n),"undefined"!=typeof ga&&(f.default.debug("🚩 Push Analytics for: "+window.location.pathname),ga("send","pageview",{page:window.location.pathname,title:document.title}))}},{key:"updatePageTitle",value:function(t){if(t.length&&""!==t.attr("data-meta-title")){var e=t.attr("data-meta-title");null!==e&&""!==e&&(document.title=e)}}}]),t}();e.default=w},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(4),a=i(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={default:n(5),__esModule:!0}},function(t,e,n){n(6);var i=n(9).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(7);i(i.S+i.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var i=n(8),o=n(9),a=n(10),s=n(12),r="prototype",l=function(t,e,n){var u,d,c,h=t&l.F,f=t&l.G,p=t&l.S,v=t&l.P,y=t&l.B,g=t&l.W,b=f?o:o[e]||(o[e]={}),m=b[r],w=f?i:p?i[e]:(i[e]||{})[r];f&&(n=e);for(u in n)d=!h&&w&&void 0!==w[u],d&&u in b||(c=d?w[u]:n[u],b[u]=f&&"function"!=typeof w[u]?n[u]:y&&d?a(c,i):g&&w[u]==c?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[r]=t[r],e}(c):v&&"function"==typeof c?a(Function.call,c):c,v&&((b.virtual||(b.virtual={}))[u]=c,t&l.R&&m&&!m[u]&&s(m,u,c)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(11);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(14),o=n(16),a=n(20),s=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(15);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(15),o=n(8).document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var i=n(15);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=require("jquery")},function(t,e){t.exports=require("ismobilejs")},function(t,e){t.exports=require("loglevel")},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(22),u=i(l),d=function(){function t(){(0,a.default)(this,t)}return(0,r.default)(t,null,[{key:"stripTrailingSlash",value:function(t){return"/"==t.substr(-1)?t.substr(0,t.length-1):t}},{key:"logCredits",value:function(t,e,n,i,o){var a="#fff";if("undefined"!=typeof o&&(a=o),console.log("%c   ","font-size:3px;"),console.log("%c"+t,"background:"+e+"; color: "+a+"; font-size:14px; padding:5px 10px;"),console.log("%c   ","font-size:3px;"),null!==n){var s=n.length;if(s)for(var r=0;r<s;r++)console.log(n[r].name+" - "+n[r].website)}if(null!==i){var l=i.length;if(l){console.log("-"),console.log("Thanks to");for(var u=0;u<l;u++)console.log(i[u].name+" ("+i[u].website+")")}}console.log("-"),console.log(" ")}},{key:"getStyleVal",value:function(t,e){var n=t.css(e);return Math.round(Number(n.substr(0,n.length-2)))}},{key:"addClass",value:function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}},{key:"removeClass",value:function(t,e){if(t.classList)t.classList.remove(e);else{t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi"),"");var n=t.className.length-1;" "==t.className[n]&&(t.className=t.className.substring(0,n))}}},{key:"getRandomNumber",value:function(t,e,n){var i=Math.random()*(e-t)+t;return"undefined"!=typeof n?Number(i.toFixed(n)):i}},{key:"getRandomInt",value:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},{key:"replacePlaceholder",value:function(){"undefined"!=typeof Modernizr&&(Modernizr.input.placeholder||((0,u.default)("[placeholder]").focus(function(){var t=(0,u.default)(this);t.val()==t.attr("placeholder")&&(t.val(""),t.removeClass("placeholder"))}).blur(function(){var t=(0,u.default)(this);""!==t.val()&&t.val()!=t.attr("placeholder")||(t.addClass("placeholder"),t.val(t.attr("placeholder")))}).blur(),(0,u.default)("[placeholder]").parents("form").submit(function(){(0,u.default)(this).find("[placeholder]").each(function(){var t=(0,u.default)(this);t.val()==t.attr("placeholder")&&t.val("")})})))}},{key:"getViewportSize",value:function(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}}},{key:"prefixProperty",value:function(t){for(var e=["","ms","Webkit","Moz","O"],n=e.length,i=document.createElement("div"),o=0;o<n;o++){var a=e[o];t=""===a?t:t.charAt(0).toUpperCase()+t.substring(1).toLowerCase();var s=a+t;if("undefined"!=typeof i.style[s])return s}}},{key:"getNormRatio",value:function(t,e,n){return t<e?0:t>n?1:t===n?1:(t-e)/(n-e)}}]),t}();e.default=d},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(22),u=i(l),d=function(){function t(e,n,i){if((0,a.default)(this,t),this.options={previousType:"page",previousName:"home",navLinkClass:"nav-link",previousHref:window.location.href},null!==i&&(this.options=u.default.extend(this.options,i)),this.title=window.document.title,this.href=window.location.href,this.nodeName="",this.index=0,this.nodeType="page",this.context="history",this.isHome=!1,null!==n){this.context=n.className.indexOf(this.options.navLinkClass)>=0?"nav":"link";var o=n.getAttribute("data-is-home");if(this.isHome="1"==o,this.title=n.getAttribute("data-title"),""===this.title&&(this.title=n.innerHTML),this.nodeType=n.getAttribute(e.options.ajaxLinkTypeAttr),null===this.nodeType||""===this.nodeType){var s=n.getAttribute(e.options.objectTypeAttr);null!==s&&""!==s&&(this.nodeType=s)}this.nodeName=n.getAttribute("data-node-name"),this.index=Number(n.getAttribute("data-index")),this.href=n.href}this.transition=this.options.previousType+"_to_"+this.nodeType}return(0,r.default)(t,[{key:"update",value:function(t){this.transition=this.options.previousType+"_to_"+t.type,this.nodeName=t.name,this.isHome=t.isHome,this.nodeType=t.type}}]),t}();e.default=d},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=function(){function t(){(0,a.default)(this,t),this.hash={}}return(0,r.default)(t,[{key:"exists",value:function(t){return t in this.hash}},{key:"fetch",value:function(t){return this.hash[t]}},{key:"save",value:function(t,e){return this.hash[t]=e,this}}]),t}();e.default=l},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(24),u=i(l),d=function(){function t(){(0,a.default)(this,t)}return(0,r.default)(t,[{key:"show",value:function(){u.default.debug("🌀 Show loader")}},{key:"hide",value:function(){u.default.debug("🌀 Hide loader")}}]),t}();e.default=d},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(24),u=i(l),d=n(30),c=(i(d),n(22)),h=i(c),f=n(31),p=i(f),v=n(32),y=i(v),g=function(){function t(e,n,i,o,s){if((0,a.default)(this,t),o=o||"page",!n)throw"AbstractPage need a $cont (JQuery) to be defined.";if(!e)throw"AbstractPage need a Router instance to be defined.";this.router=e,this.$cont=n,this.id=n[0].id,this.context=i,this.type=o,this.isHome=s,this.lazyload=null,"1"==this.$cont[0].getAttribute("data-is-home")&&(this.isHome=!0),this.ready=!1,this.blocks=[],this.name=this.$cont.length?this.$cont[0].getAttribute("data-node-name"):"",this.onResizeDebounce=(0,y.default)(this.onResize.bind(this),50,!1),u.default.debug("✳️ #"+this.id+" %c["+o+"] ["+this.context+"]","color:grey"),this.init(),this.initEvents()}return(0,r.default)(t,[{key:"init",value:function(){this.$link=this.$cont.find("a").not('[target="_blank"]').not('[href="#"]'),this.bindedLinkClick=this.router.onLinkClick.bind(this.router),this.bindedUpdateBlocks=this.updateBlocks.bind(this),this.$link.length&&(this.externalLinkTarget(this.$link,this.router.baseUrl),this.$link=this.$cont.find("a").not('[target="_blank"]').not('[href="#"]')),this.$blocks=this.$cont.find(this.router.options.pageBlockClass),this.blockLength=this.$blocks.length,this.blockLength&&this.initBlocks(),this.router.options.ajaxEnabled&&"ajax"===this.context&&this.initAjax(),this.router.options.lazyloadEnabled&&(this.beforeLazyload(),this.lazyload=new p.default({threshold:this.router.options.lazyloadThreshold,throttle:this.router.options.lazyloadThrottle,elements_selector:"."+this.router.options.lazyloadClass,data_src:this.router.options.lazyloadSrcAttr.replace("data-",""),data_srcset:this.router.options.lazyloadSrcSetAttr.replace("data-",""),callback_set:this.onLazyImageSet.bind(this),callback_load:this.onLazyImageLoad.bind(this),callback_processed:this.onLazyImageProcessed.bind(this)}))}},{key:"destroy",value:function(){if(u.default.debug("🗑 #"+this.id),this.$cont.remove(),this.destroyEvents(),null!==this.router.page&&this.router.page.name!==this.name&&this.router.$body.removeClass(this.name),null!==this.router.page&&this.router.page.type!==this.type&&this.router.$body.removeClass(this.type),null!==this.blocks)for(var t in this.blocks)this.blocks[t].destroy();null!==this.lazyload&&this.lazyload.destroy()}},{key:"initEvents",value:function(){this.$cont.find("img").length?this.$cont.waitForImages({finished:this.onLoad.bind(this),waitForAll:!0}):this.onLoad(),this.$link.length&&this.router.options.ajaxEnabled&&this.$link.on("click",this.bindedLinkClick),this.router.$window.on("resize",this.onResizeDebounce),this.domObserver=new MutationObserver(this.bindedUpdateBlocks),this.domObserver.observe(this.$cont.get(0),{childList:!0,attributes:!1,characterData:!1,subtree:!0})}},{key:"destroyEvents",value:function(){this.$link.off("click",this.bindedLinkClick),this.router.$window.off("resize",this.onResizeDebounce),this.domObserver.disconnect()}},{key:"onLoad",value:function(t){var e=this;this.loadDate=new Date,this.loadDuration=this.loadDate-this.router.loadBeginDate,this.router.nav.update(this);var n=this.loadDuration>this.router.options.minLoadDuration?0:this.router.options.minLoadDuration-this.loadDuration;setTimeout(function(){var t=e.onShowEnded.bind(e);if(e.ready=!0,e.router.loader.hide(),"static"===e.context)e.show(t);else if("ajax"===e.context){if(null!==e.name&&""!==e.name&&(document.body.id=e.name,e.router.$body.addClass(e.name)),e.router.$body.addClass(e.type),e.router.formerPages.length>0){var n=e.router.formerPages[e.router.formerPages.length-1],i=n.destroy.bind(n);e.router.formerPages.length>1?i():n.hide(i),e.router.formerPages.pop()}e.show(t)}},n)}},{key:"show",value:function(t){u.default.debug("▶️ #"+this.id),this.$cont[0].style.opacity="1","undefined"!=typeof t&&t()}},{key:"showEnded",value:function(){this.onShowEnded()}},{key:"onShowEnded",value:function(){this.router.transition=!1,this.$cont.removeClass(this.router.options.pageClass+"-ajax"),this.$cont.removeClass(this.router.options.pageClass+"-transitioning")}},{key:"hide",value:function(t){u.default.debug("◀️ #"+this.id),this.$cont[0].style.opacity="0","undefined"!=typeof t&&t()}},{key:"initAjax",value:function(){this.$cont.addClass(this.router.options.pageClass+"-transitioning")}},{key:"initBlocks",value:function(){for(var t=0;t<this.blockLength;t++){var e=this.initSingleBlock(this.$blocks.eq(t));e&&this.blocks.push(e)}for(var n=this.blocks.length-1;n>=0;n--)"function"==typeof this.blocks[n].onPageReady&&this.blocks[n].onPageReady()}},{key:"updateBlocks",value:function(){var t=this;u.default.debug("\t📯 Page DOM changed…"),this.lazyload&&this.lazyload.update(),this.$blocks=this.$cont.find(this.router.options.pageBlockClass),this.blockLength=this.$blocks.length,this.$blocks.each(function(e,n){var i=t.getBlockById((0,h.default)(n).attr("id"));if(null===i){var o=t.initSingleBlock(t.$blocks.eq(e));o&&(t.blocks.push(o),o.onPageReady())}})}},{key:"initSingleBlock",value:function(t){var e=t[0].getAttribute(this.router.options.objectTypeAttr);t[0].id;return this.router.classFactory.getBlockInstance(e,this,t)}},{key:"getBlockById",value:function(t){for(var e in this.blocks)if(this.blocks[e]&&this.blocks[e].id&&this.blocks[e].id==t)return this.blocks[e];return null}},{key:"getBlockIndexById",value:function(t){for(var e in this.blocks)if(this.blocks[e]&&this.blocks[e].id&&this.blocks[e].id==t)return e;return null}},{key:"getFirstBlockByType",value:function(t){for(var e in this.blocks)if(this.blocks[e]&&this.blocks[e].type&&this.blocks[e].type==t)return this.blocks[e];return null}},{key:"getFirstBlockIndexByType",value:function(t){for(var e in this.blocks)if(this.blocks[e]&&this.blocks[e].type&&this.blocks[e].type==t)return e;return null}},{key:"onResize",value:function(){}},{key:"beforeLazyload",value:function(){}},{key:"onLazyImageSet",value:function(t){u.default.debug("\t🖼 «"+t.id+"» set")}},{key:"onLazyImageLoad",value:function(t){u.default.debug("\t🖼 «"+t.id+"» load")}},{key:"onLazyImageProcessed",value:function(t){u.default.debug("\t🖼 Lazy load processed")}},{key:"externalLinkTarget",value:function(t,e){var n=t.length,i=e.split("://");i=i[1];for(var o=0;o<n;o++){var a=t[o],s=a.getAttribute("href");s.indexOf(i)===-1&&s.indexOf("javascript")===-1&&s.indexOf("mailto:")===-1&&"/"!=s.charAt(0)&&"#"!=s.charAt(0)&&(t[o].target="_blank")}}}]),t}();e.default=g},function(t,e){t.exports=require("jquery.waitforimages")},function(t,e,n){var i,o,a;!function(n,s){o=[],i=s,a="function"==typeof i?i.apply(e,o):i,!(void 0!==a&&(t.exports=a))}(this,function(){function t(){g||(f={elements_selector:"img",container:window,threshold:300,throttle:50,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null},p=!!window.addEventListener,v=!!window.attachEvent,y=!!document.body.classList,g=!0)}function e(t,e,n){return p?void t.addEventListener(e,n):void(v&&(t.attachEvent("on"+e,function(t){return function(){n.call(t,window.event)}}(t)),t=null))}function n(t,e,n){return p?void t.removeEventListener(e,n):void(v&&t.detachEvent("on"+e,n))}function i(t,e,n){function i(){return window.innerWidth||c.documentElement.clientWidth||document.body.clientWidth}function o(){return window.innerHeight||c.documentElement.clientHeight||document.body.clientHeight}function a(t){return t.getBoundingClientRect().top+h-c.documentElement.clientTop}function s(t){return t.getBoundingClientRect().left+f-c.documentElement.clientLeft}function r(){var i;return i=e===window?o()+h:a(e)+e.offsetHeight,i<=a(t)-n}function l(){var o;return o=e===window?i()+window.pageXOffset:s(e)+i(),o<=s(t)-n}function u(){var i;return i=e===window?h:a(e),i>=a(t)+n+t.offsetHeight}function d(){var i;return i=e===window?f:s(e),i>=s(t)+n+t.offsetWidth}var c,h,f;return c=t.ownerDocument,h=window.pageYOffset||c.body.scrollTop,f=window.pageXOffset||c.body.scrollLeft,!(r()||u()||l()||d())}function o(){var t=new Date;return t.getTime()}function a(t,e){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i}function s(t){try{return Array.prototype.slice.call(t)}catch(o){var e,n=[],i=t.length;for(e=0;i>e;e++)n.push(t[e]);return n}}function r(t,e){return y?void t.classList.add(e):void(t.className+=(t.className?" ":"")+e)}function l(t,e){return y?void t.classList.remove(e):void(t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""))}function u(t,e){var n=t.parentElement;if("PICTURE"===n.tagName)for(var i=0;i<n.children.length;i++){var o=n.children[i];if("SOURCE"===o.tagName){var a=o.getAttribute("data-"+e);a&&o.setAttribute("srcset",a)}}}function d(t,e,n){var i=t.tagName,o=t.getAttribute("data-"+n);if("IMG"===i){u(t,e);var a=t.getAttribute("data-"+e);return a&&t.setAttribute("srcset",a),void(o&&t.setAttribute("src",o))}return"IFRAME"===i?void(o&&t.setAttribute("src",o)):void(t.style.backgroundImage="url("+o+")")}function c(t,e){return function(){return t.apply(e,arguments)}}function h(n){t(),this._settings=a(f,n),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=c(this.handleScroll,this),e(window,"resize",this._handleScrollFn),this.update()}var f,p,v,y,g=!1;return h.prototype._showOnAppear=function(t){function i(){null!==o&&(o.callback_load&&o.callback_load(t),l(t,o.class_loading),r(t,o.class_loaded),n(t,"load",i))}var o=this._settings;("IMG"===t.tagName||"IFRAME"===t.tagName)&&(e(t,"load",i),e(t,"error",function(){n(t,"load",i),l(t,o.class_loading),o.callback_error&&o.callback_error(t)}),r(t,o.class_loading)),d(t,o.data_srcset,o.data_src),o.callback_set&&o.callback_set(t)},h.prototype._loopThroughElements=function(){var t,e,n=this._settings,o=this._elements,a=o?o.length:0,s=[];for(t=0;a>t;t++)e=o[t],n.skip_invisible&&null===e.offsetParent||i(e,n.container,n.threshold)&&(this._showOnAppear(e),s.push(t),e.wasProcessed=!0);for(;s.length>0;)o.splice(s.pop(),1),n.callback_processed&&n.callback_processed(o.length);0===a&&this._stopScrollHandler()},h.prototype._purgeElements=function(){var t,e,n=this._elements,i=n.length,o=[];for(t=0;i>t;t++)e=n[t],e.wasProcessed&&o.push(t);for(;o.length>0;)n.splice(o.pop(),1)},h.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,e(this._settings.container,"scroll",this._handleScrollFn))},h.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,n(this._settings.container,"scroll",this._handleScrollFn))},h.prototype.handleScroll=function(){var t,e,n;this._settings&&(e=o(),n=this._settings.throttle,0!==n?(t=n-(e-this._previousLoopTime),0>=t||t>n?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(c(function(){this._previousLoopTime=o(),this._loopTimeout=null,this._loopThroughElements()},this),t))):this._loopThroughElements())},h.prototype.update=function(){this._elements=s(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},h.prototype.destroy=function(){n(window,"resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},h})},function(t,e){"use strict";function n(t,e,n){var i=void 0;return function(){var o=this,a=arguments,s=function(){i=null,n||t.apply(o,a)},r=n&&!i;clearTimeout(i),i=setTimeout(s,e),r&&t.apply(o,a)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=function(){function t(){(0,a.default)(this,t),this.$cont=null,this.router=null,this.page=null}return(0,r.default)(t,[{key:"update",value:function(t){if(!t)throw"Nav update method needs a Page object.";this.page=t}},{key:"initEvents",value:function(t){if(!t)throw"Nav initEvents method needs a Router object."}}]),t}();e.default=l},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(24),u=i(l),d=n(30),c=(i(d),n(22)),h=(i(c),n(32)),f=i(h),p=function(){function t(e,n,i){(0,a.default)(this,t),i=i||"block",this.page=e,this.$cont=n,this.id=n[0].id,this.type=i,this.name=this.$cont.length?this.$cont[0].getAttribute("data-node-name"):"",this.onResizeDebounce=(0,f.default)(this.onResize.bind(this),50,!1),u.default.debug("\t✳️ #"+this.id+" %c["+i+"]","color:grey"),this.init(),this.initEvents()}return(0,r.default)(t,[{key:"init",value:function(){}},{key:"initEvents",value:function(){this.$cont.find("img").length?this.$cont.waitForImages({finished:this.onLoad.bind(this),waitForAll:!0}):this.onLoad(),this.page.router.$window.on("resize",this.onResizeDebounce)}},{key:"destroy",value:function(){u.default.debug("\t🗑 #"+this.id),this.destroyEvents()}},{key:"destroyEvents",value:function(){this.page.router.$window.off("resize",this.onResizeDebounce)}},{key:"onResize",value:function(){}},{key:"onLoad",value:function(){}},{key:"onPageReady",value:function(){}}]),t}();e.default=p},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=function(){function t(){(0,a.default)(this,t)}return(0,r.default)(t,null,[{key:"_preventDefault",value:function(t){t=t||window.event,t.preventDefault&&t.preventDefault(),t.returnValue=!1}},{key:"_keydown",value:function(e){for(var n=[37,38,39,40,33,34,35],i=n.length;i--;)if(e.keyCode===n[i])return void t._preventDefault(e)}},{key:"_wheel",value:function(e){t._preventDefault(e)}},{key:"disable",value:function(){window.addEventListener&&window.addEventListener("DOMMouseScroll",t._wheel,!1),window.onmousewheel=document.onmousewheel=t._wheel,document.onkeydown=t._keydown}},{key:"enable",value:function(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",t._wheel,!1),window.onmousewheel=document.onmousewheel=document.onkeydown=null}}]),t}();e.default=l},function(t,e){"use strict";function n(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){window.clearTimeout(t)}}();for(var t=void 0,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,o=window.console=window.console||{};i--;)t=n[i],o[t]||(o[t]=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(){"undefined"!=typeof ga&&(window.addEventListener("error",function(t){var e=t.colno?" line:"+t.lineno+", column:"+t.colno:" line:"+t.lineno;ga("send","event","JavaScript Error",t.message,t.filename+e+" -> "+navigator.userAgent,0,!0)}),l.default.error=function(t){ga("send","event","jQuery Error",t,navigator.userAgent,0,!0)},(0,l.default)(document).ajaxError(function(t,e,n){ga("send","event","jQuery Ajax Error",n.url,(0,s.default)({result:t.result,status:e.status,statusText:e.statusText,crossDomain:n.crossDomain,dataType:n.dataType}),0,!0)}))}Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),s=i(a);e.default=o;var r=n(22),l=i(r)},function(t,e,n){t.exports={default:n(39),__esModule:!0}},function(t,e,n){var i=n(9),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=i(o),s=n(3),r=i(s),l=n(25),u=i(l),d=function(){function t(){(0,a.default)(this,t)}return(0,r.default)(t,null,[{key:"isMinXS",value:function(){var t=u.default.getViewportSize();return t.width>=480}},{key:"isMinSM",value:function(){var t=u.default.getViewportSize();return t.width>=768}},{key:"isMinMD",value:function(){var t=u.default.getViewportSize();return t.width>=992}},{key:"isMinLG",value:function(){var t=u.default.getViewportSize();return t.width>=1200}},{key:"isMinXL",value:function(){var t=u.default.getViewportSize();return t.width>=1920}}]),t}();e.default=d}]);