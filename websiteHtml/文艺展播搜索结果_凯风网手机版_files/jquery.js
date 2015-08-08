/* jQuery v@1.8.1 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};
return p.each(a.split(s),function(a,c){b[c]=!0
}),b
}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();
d=a.getAttribute(e);
if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d
}catch(f){}p.data(a,c,d)
}else{d=b
}}return d
}function K(a){var b;
for(b in a){if(b==="data"&&p.isEmptyObject(a[b])){continue
}if(b!=="toJSON"){return !1
}}return !0
}function ba(){return !1
}function bb(){return !0
}function bh(a){return !a||!a.parentNode||a.parentNode.nodeType===11
}function bi(a,b){do{a=a[b]
}while(a&&a.nodeType!==1);
return a
}function bj(a,b,c){b=b||0;
if(p.isFunction(b)){return p.grep(a,function(a,d){var e=!!b.call(a,d,a);
return e===c
})
}if(b.nodeType){return p.grep(a,function(a,d){return a===b===c
})
}if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1
});
if(be.test(b)){return p.filter(b,d,!c)
}b=p.filter(b,d)
}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c
})
}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))
}function bD(a,b){if(b.nodeType!==1||!p.hasData(a)){return
}var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
d<e;
d++){p.event.add(b,c,h[c][d])
}}}g.data&&(g.data=p.extend({},g.data))
}function bE(a,b){var c;
if(b.nodeType!==1){return
}b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)
}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]
}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)
}function bY(a,b){if(b in a){return b
}var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;
while(e--){b=bW[e]+c;
if(b in a){return b
}}return d
}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)
}function b$(a,b){var c,d,e=[],f=0,g=a.length;
for(;
f<g;
f++){c=a[f];
if(!c.style){continue
}e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))
}for(f=0;
f<g;
f++){c=a[f];
if(!c.style){continue
}if(!b||c.style.display==="none"||c.style.display===""){c.style.display=b?e[f]||"":"none"
}}return a
}function b_(a,b,c){var d=bP.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;
for(;
e<4;
e+=2){c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0))
}return f
}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";
if(d<=0||d==null){d=bH(a,b);
if(d<0||d==null){d=a.style[b]
}if(bQ.test(d)){return d
}e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0
}return d+ca(a,b,c||(f?"border":"content"),e)+"px"
}function cc(a){if(bS[a]){return bS[a]
}var b=p("<"+a+">").appendTo(e.body),c=b.css("display");
b.remove();
if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!bJ||!bI.createElement){bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close()
}b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)
}return bS[a]=c,c
}function ci(a,b,c,d){var e;
if(p.isArray(b)){p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)
})
}else{if(!c&&p.type(b)==="object"){for(e in b){ci(a+"["+e+"]",b[e],c,d)
}}else{d(a,b)
}}}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");
var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;
if(p.isFunction(c)){for(;
h<i;
h++){d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)
}}}
}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;
var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;
for(;
j<k&&(l||!h);
j++){h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)))
}return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h
}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};
for(d in c){c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d])
}e&&p.extend(!0,a,e)
}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;
for(f in k){f in d&&(c[k[f]]=d[f])
}while(j[0]==="*"){j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"))
}if(e){for(f in i){if(i[f]&&i[f].test(e)){j.unshift(f);
break
}}}if(j[0] in d){g=j[0]
}else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;
break
}h||(h=f)
}g=g||h
}if(g){return g!==j[0]&&j.unshift(g),d[g]
}}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;
a.dataFilter&&(b=a.dataFilter(b,a.dataType));
if(g[1]){for(c in a.converters){i[c.toLowerCase()]=a.converters[c]
}}for(;
e=g[++j];
){if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];
if(!c){for(d in i){f=d.split(" ");
if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];
if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));
break
}}}}if(c!==!0){if(c&&a["throws"]){b=c(b)
}else{try{b=c(b)
}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}
}}}}h=e
}}return{state:"success",data:b}
}function cL(){try{return new a.XMLHttpRequest
}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}function cU(){return setTimeout(function(){cN=b
},0),cN=p.now()
}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;
for(;
e<f;
e++){if(d[e].call(a,b,c)){return
}}})
}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem
}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;
for(;
e<f;
e++){j.tweens[e].run(d)
}return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(e),e
},stop:function(b){var c=0,d=b?j.tweens.length:0;
for(;
c<d;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
cX(k,j.opts.specialEasing);
for(;
e<g;
e++){d=cS[e].call(j,a,k,j.opts);
if(d){return d
}}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}function cX(a,b){var c,d,e,f,g;
for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];
if(g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);
c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()
}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()
})
})),a.nodeType===1&&("height" in b||"width" in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]
}));
for(d in b){f=b[d];
if(cP.exec(f)){delete b[d];
if(f===(q?"hide":"show")){continue
}o.push(d)
}}g=o.length;
if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()
}),l.done(function(){var b;
p.removeData(a,"fxshow",!0);
for(b in n){p.style(a,b,n[b])
}});
for(d=0;
d<g;
d++){e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))
}}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)
}function c$(a,b){var c,d={height:a},e=0;
b=b?1:0;
for(;
e<4;
e+=2-b){c=bV[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1
}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)
},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()
},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())
},E={};
p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;
if(!a){return this
}if(a.nodeType){return this.context=this[0]=a,this.length=1,this
}if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);
if(f&&(f[1]||!c)){if(f[1]){return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a)
}g=e.getElementById(f[2]);
if(g&&g.parentNode){if(g.id!==f[2]){return d.find(a)
}this.length=1,this[0]=g
}return this.context=e,this.selector=a,this
}return !c||c.jquery?(c||d).find(a):this.constructor(c).find(a)
}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))
},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length
},toArray:function(){return k.call(this)
},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]
},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);
return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d
},each:function(a,b){return p.each(this,a,b)
},ready:function(a){return p.ready.promise().done(a),this
},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))
},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;
typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);
for(;
i<j;
i++){if((a=arguments[i])!=null){for(c in a){d=h[c],e=a[c];
if(h===e){continue
}k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)
}}}return h
},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p
},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)
},ready:function(a){if(a===!0?--p.readyWait:p.isReady){return
}if(!e.body){return setTimeout(p.ready,1)
}p.isReady=!0;
if(a!==!0&&--p.readyWait>0){return
}d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")
},isFunction:function(a){return p.type(a)==="function"
},isArray:Array.isArray||function(a){return p.type(a)==="array"
},isWindow:function(a){return a!=null&&a==a.window
},isNumeric:function(a){return !isNaN(parseFloat(a))&&isFinite(a)
},type:function(a){return a==null?String(a):E[m.call(a)]||"object"
},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a)){return !1
}try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}var d;
for(d in a){}return d===b||n.call(a,d)
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},error:function(a){throw new Error(a)
},parseHTML:function(a,b,c){var d;
return !a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))
},parseJSON:function(b){if(!b||typeof b!="string"){return null
}b=p.trim(b);
if(a.JSON&&a.JSON.parse){return a.JSON.parse(b)
}if(w.test(b.replace(y,"@").replace(z,"]").replace(x,""))){return(new Function("return "+b))()
}p.error("Invalid JSON: "+b)
},parseXML:function(c){var d,e;
if(!c||typeof c!="string"){return null
}try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))
}catch(f){d=b
}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d
},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);
if(d){if(h){for(e in a){if(c.apply(a[e],d)===!1){break
}}}else{for(;
f<g;
){if(c.apply(a[f++],d)===!1){break
}}}}else{if(h){for(e in a){if(c.call(a[e],e,a[e])===!1){break
}}}else{for(;
f<g;
){if(c.call(a[f],f,a[f++])===!1){break
}}}}return a
},trim:o&&!o.call(" ")?function(a){return a==null?"":o.call(a)
}:function(a){return a==null?"":a.toString().replace(t,"")
},makeArray:function(a,b){var c,d=b||[];
return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d
},inArray:function(a,b,c){var d;
if(b){if(l){return l.call(b,a,c)
}d=b.length,c=c?c<0?Math.max(0,d+c):c:0;
for(;
c<d;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,c){var d=c.length,e=a.length,f=0;
if(typeof d=="number"){for(;
f<d;
f++){a[e++]=c[f]
}}else{while(c[f]!==b){a[e++]=c[f++]
}}return a.length=e,a
},grep:function(a,b,c){var d,e=[],f=0,g=a.length;
c=!!c;
for(;
f<g;
f++){d=!!b(a[f],f),c!==d&&e.push(a[f])
}return e
},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));
if(j){for(;
h<i;
h++){e=c(a[h],h,d),e!=null&&(g[g.length]=e)
}}else{for(f in a){e=c(a[f],f,d),e!=null&&(g[g.length]=e)
}}return g.concat.apply([],g)
},guid:1,proxy:function(a,c){var d,e,f;
return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))
},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b
},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;
if(d&&typeof d=="object"){for(k in d){p.access(a,c,k,d[k],1,g,e)
}f=1
}else{if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)
}):(c.call(a,e),c=null));
if(c){for(;
k<l;
k++){c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h)
}}f=1
}}return f?a:j?c.call(a):l?c(a[0],d):g
},now:function(){return(new Date).getTime()
}}),p.ready.promise=function(b){if(!d){d=p.Deferred();
if(e.readyState==="complete"){setTimeout(p.ready,1)
}else{if(e.addEventListener){e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1)
}else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);
var c=!1;
try{c=a.frameElement==null&&e.documentElement
}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")
}catch(a){return setTimeout(g,50)
}p.ready()
}}()
}}}return d.promise(b)
},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()
}),c=p(e);
var F={};
p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);
var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;
for(;
i&&h<g;
h++){if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;
break
}}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())
},l={add:function(){if(i){var b=i.length;
(function d(b){p.each(b,function(b,c){var e=p.type(c);
e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)
})
})(arguments),e?g=i.length:c&&(f=b,k(c))
}return this
},remove:function(){return i&&p.each(arguments,function(a,b){var c;
while((c=p.inArray(b,i,c))>-1){i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)
}}),this
},has:function(a){return p.inArray(a,i)>-1
},empty:function(){return i=[],this
},disable:function(){return i=j=c=b,this
},disabled:function(){return !i
},lock:function(){return j=b,c||l.disable(),this
},locked:function(){return !j
},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this
},fire:function(){return l.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return l
},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];
e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);
a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])
}:c[f])
}),a=null
}).promise()
},promise:function(a){return typeof a=="object"?p.extend(a,d):d
}},e={};
return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)
}
},h,i,j;
if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);
for(;
b<d;
b++){c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e
}}return e||f.resolveWith(j,c),f.promise()
}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");
n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";
if(!c||!c.length||!d){return{}
}f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;
try{delete n.test
}catch(o){b.deleteExpando=!1
}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1
}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);
if(n.attachEvent){for(k in {submit:!0,change:!0,focusin:!0}){j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l
}}return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];
if(!i){return
}c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null
}),i.removeChild(n),c=d=f=g=h=i=n=null,b
}();
var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;
p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)
},data:function(a,c,d,e){if(!p.acceptData(a)){return
}var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;
if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b){return
}l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));
if(typeof c=="object"||typeof c=="function"){e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c)
}return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g
},removeData:function(a,b,c){if(!p.acceptData(a)){return
}var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;
if(!h[i]){return
}if(b){d=c?h[i]:h[i].data;
if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));
for(e=0,f=b.length;
e<f;
e++){delete d[b[e]]
}if(!(c?K:p.isEmptyObject)(d)){return
}}}if(!c){delete h[i].data;
if(!K(h[i])){return
}}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null
},_data:function(a,b,c){return p.data(a,b,c,!0)
},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];
return !b||b!==!0&&a.getAttribute("classid")===b
}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;
if(a===b){if(this.length){k=p.data(i);
if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;
for(h=f.length;
j<h;
j++){g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]))
}p._data(i,"parsedAttrs",!0)
}}return k
}return typeof a=="object"?this.each(function(){p.data(this,a)
}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b){return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k
}d[1]=c,this.each(function(){var b=p(this);
b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)
})
},null,c,arguments.length>1,null,!1))
},removeData:function(a){return this.each(function(){p.removeData(this,a)
})
}}),p.extend({queue:function(a,b,c){var d;
if(a){return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]
}},dequeue:function(a,b){b=b||"fx";
var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)
};
e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)
})})
}}),p.fn.extend({queue:function(a,c){var d=2;
return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);
p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){p.dequeue(this,a)
})
},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])
};
typeof a!="string"&&(c=a,a=b),a=a||"fx";
while(h--){d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i))
}return i(),f.promise(c)
}});
var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;
p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)
})
},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]
}catch(c){}})
},addClass:function(a){var b,c,d,e,f,g,h;
if(p.isFunction(a)){return this.each(function(b){p(this).addClass(a.call(this,b,this.className))
})
}if(a&&typeof a=="string"){b=a.split(s);
for(c=0,d=this.length;
c<d;
c++){e=this[c];
if(e.nodeType===1){if(!e.className&&b.length===1){e.className=a
}else{f=" "+e.className+" ";
for(g=0,h=b.length;
g<h;
g++){~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ")
}e.className=p.trim(f)
}}}}return this
},removeClass:function(a){var c,d,e,f,g,h,i;
if(p.isFunction(a)){return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))
})
}if(a&&typeof a=="string"||a===b){c=(a||"").split(s);
for(h=0,i=this.length;
h<i;
h++){e=this[h];
if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");
for(f=0,g=c.length;
f<g;
f++){while(d.indexOf(" "+c[f]+" ")>-1){d=d.replace(" "+c[f]+" "," ")
}}e.className=a?p.trim(d):""
}}}return this
},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";
return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)
}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);
while(e=i[f++]){h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)
}}else{if(c==="undefined"||c==="boolean"){this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""
}}})
},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;
for(;
c<d;
c++){if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1){return !0
}}return !1
},val:function(a){var c,d,e,f=this[0];
if(!arguments.length){if(f){return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get" in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d)
}return
}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);
if(this.nodeType!==1){return
}e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""
})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];
if(!c||!("set" in c)||c.set(this,f,"value")===b){this.value=f
}})
}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;
return !b||b.specified?a.value:a.text
}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";
if(f<0){return null
}c=i?f:0,d=i?f+1:h.length;
for(;
c<d;
c++){e=h[c];
if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();
if(i){return b
}g.push(b)
}}return i&&!g.length&&h.length?p(h[f]).val():g
},set:function(a,b){var c=p.makeArray(b);
return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0
}),c.length||(a.selectedIndex=-1),c
}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;
if(!a||i===3||i===8||i===2){return
}if(e&&p.isFunction(p.fn[c])){return p(a)[c](d)
}if(typeof a.getAttribute=="undefined"){return p.prop(a,c,d)
}h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));
if(d!==b){if(d===null){p.removeAttr(a,c);
return
}return g&&"set" in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)
}return g&&"get" in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)
},removeAttr:function(a,b){var c,d,e,f,g=0;
if(b&&a.nodeType===1){d=b.split(s);
for(;
g<d.length;
g++){e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))
}}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode){p.error("type property can't be changed")
}else{if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null
},set:function(a,b,c){if(L&&p.nodeName(a,"button")){return L.set(a,b,c)
}a.value=b
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;
if(!a||h===3||h===8||h===2){return
}return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set" in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get" in f&&(e=f.get(a,c))!==null?e:a[c]
},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");
return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b
}}}}),M={get:function(a,c){var d,e=p.prop(a,c);
return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b
},set:function(a,b,c){var d;
return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c
}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;
return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b
},set:function(a,b,c){var d=a.getAttributeNode(c);
return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""
}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c===""){return a.setAttribute(b,"auto"),c
}}})
}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)
}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);
return d===null?b:d
}})
}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b
},set:function(a,b){return a.style.cssText=""+b
}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value
}}
}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b)){return a.checked=p.inArray(p(a).val(),b)>=0
}}})
});
var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")
};
p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;
if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a))){return
}d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b
},h.elem=a),c=p.trim(_(c)).split(" ");
for(j=0;
j<c.length;
j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];
if(!q){q=i[l]=[],q.delegateCount=0;
if(!r.setup||r.setup.call(a,e,m,h)===!1){a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)
}}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0
}a=null
},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);
if(!r||!(m=r.events)){return
}b=p.trim(_(b||"")).split(" ");
for(f=0;
f<b.length;
f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];
if(!h){for(h in m){p.event.remove(a,h+b[f],c,d,!0)
}continue
}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(l=0;
l<o.length;
l++){q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q))
}o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])
}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))
},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];
if($.test(s+p.event.triggered)){return
}s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());
if((!f||p.event.customEvent[s])&&!p.event.global[s]){return
}c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";
if(!f){h=p.cache;
for(j in h){h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0)
}return
}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};
if(n.trigger&&n.trigger.apply(f,d)===!1){return
}q=[[f,n.bindType||s]];
if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;
for(l=f;
k;
k=k.parentNode){q.push([k,r]),l=k
}l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])
}for(j=0;
j<q.length&&!c.isPropagationStopped();
j++){k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault()
}return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result
}return
},dispatch:function(c){c=p.event.fix(c||a.event);
var d,e,f,g,h,i,j,k,l,m,n=(p._data(this,"events")||{})[c.type]||[],o=n.delegateCount,q=[].slice.call(arguments),r=!c.exclusive&&!c.namespace,s=p.event.special[c.type]||{},t=[];
q[0]=c,c.delegateTarget=this;
if(s.preDispatch&&s.preDispatch.call(this,c)===!1){return
}if(o&&(!c.button||c.type!=="click")){for(f=c.target;
f!=this;
f=f.parentNode||this){if(f.disabled!==!0||c.type!=="click"){h={},j=[];
for(d=0;
d<o;
d++){k=n[d],l=k.selector,h[l]===b&&(h[l]=p(l,this).index(f)>=0),h[l]&&j.push(k)
}j.length&&t.push({elem:f,matches:j})
}}}n.length>o&&t.push({elem:this,matches:n.slice(o)});
for(d=0;
d<t.length&&!c.isPropagationStopped();
d++){i=t[d],c.currentTarget=i.elem;
for(e=0;
e<i.matches.length&&!c.isImmediatePropagationStopped();
e++){k=i.matches[e];
if(r||!c.namespace&&!k.namespace||c.namespace_re&&c.namespace_re.test(k.namespace)){c.data=k.data,c.handleObj=k,g=((p.event.special[k.origType]||{}).handle||k.handler).apply(i.elem,q),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))
}}}return s.postDispatch&&s.postDispatch.call(this,c),c.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;
return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a
}},fix:function(a){if(a[p.expando]){return a
}var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;
a=p.Event(d);
for(b=g.length;
b;
){c=g[--b],a[c]=d[c]
}return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a
},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)
},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)
}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))
},p.Event=function(a,b){if(this instanceof p.Event){a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0
}else{return new p.Event(a,b)
}},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;
var a=this.originalEvent;
if(!a){return
}a.preventDefault?a.preventDefault():a.returnValue=!1
},stopPropagation:function(){this.isPropagationStopped=bb;
var a=this.originalEvent;
if(!a){return
}a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()
},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;
if(!e||e!==d&&!p.contains(d,e)){a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b
}return c
}}
}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form")){return !1
}p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;
d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0
}),p._data(d,"_submit_attached",!0))
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){if(p.nodeName(this,"form")){return !1
}p.event.remove(this,"._submit")
}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)
}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)
})
}return !1
}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;
V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)
}),p._data(b,"_change_attached",!0))
})
},handle:function(a){var b=a.target;
if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox"){return a.handleObj.handler.apply(this,arguments)
}},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)
}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)
};
p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)
},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)
}}
}),p.fn.extend({on:function(a,c,d,e,f){var g,h;
if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);
for(h in a){this.on(h,c,d,a[h],f)
}return this
}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));
if(e===!1){e=ba
}else{if(!e){return this
}}return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)
},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,c,d){var e,f;
if(a&&a.preventDefault&&a.handleObj){return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this
}if(typeof a=="object"){for(f in a){this.off(f,c,a[f])
}return this
}if(c===!1||typeof c=="function"){d=c,c=b
}return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)
})
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this
},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)
},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){if(this[0]){return p.event.trigger(a,b,this[0],!0)
}},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;
return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1
};
e.guid=c;
while(d<b.length){b[d++].guid=c
}return this.click(e)
},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)
},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)
}),function(a,b){function $(a,b,c,d){c=c||[],b=b||q;
var e,f,g,j,k=b.nodeType;
if(k!==1&&k!==9){return[]
}if(!a||typeof a!="string"){return c
}g=h(b);
if(!g&&!d){if(e=L.exec(a)){if(j=e[1]){if(k===9){f=b.getElementById(j);
if(!f||!f.parentNode){return c
}if(f.id===j){return c.push(f),c
}}else{if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&i(b,f)&&f.id===j){return c.push(f),c
}}}else{if(e[2]){return u.apply(c,t.call(b.getElementsByTagName(a),0)),c
}if((j=e[3])&&X&&b.getElementsByClassName){return u.apply(c,t.call(b.getElementsByClassName(j),0)),c
}}}}return bk(a,b,c,d,g)
}function _(a){return function(b){var c=b.nodeName.toLowerCase();
return c==="input"&&b.type===a
}
}function ba(a){return function(b){var c=b.nodeName.toLowerCase();
return(c==="input"||c==="button")&&b.type===a
}
}function bb(a,b,c){if(a===b){return c
}var d=a.nextSibling;
while(d){if(d===b){return -1
}d=d.nextSibling
}return 1
}function bc(a,b,c,d){var e,g,h,i,j,k,l,m,n,p,r=!c&&b!==q,s=(r?"<s>":"")+a.replace(H,"$1<s>"),u=y[o][s];
if(u){return d?0:t.call(u,0)
}j=a,k=[],m=0,n=f.preFilter,p=f.filter;
while(j){if(!e||(g=I.exec(j))){g&&(j=j.slice(g[0].length),h.selector=l),k.push(h=[]),l="",r&&(j=" "+j)
}e=!1;
if(g=J.exec(j)){l+=g[0],j=j.slice(g[0].length),e=h.push({part:g.pop().replace(H," "),string:g[0],captures:g})
}for(i in p){(g=S[i].exec(j))&&(!n[i]||(g=n[i](g,b,c)))&&(l+=g[0],j=j.slice(g[0].length),e=h.push({part:i,string:g.shift(),captures:g}))
}if(!e){break
}}return l&&(h.selector=l),d?j.length:j?$.error(a):t.call(y(s,k),0)
}function bd(a,b,e,f){var g=b.dir,h=s++;
return a||(a=function(a){return a===e
}),b.first?function(b){while(b=b[g]){if(b.nodeType===1){return a(b)&&b
}}}:f?function(b){while(b=b[g]){if(b.nodeType===1&&a(b)){return b
}}}:function(b){var e,f=h+"."+c,i=f+"."+d;
while(b=b[g]){if(b.nodeType===1){if((e=b[o])===i){return b.sizset
}if(typeof e=="string"&&e.indexOf(f)===0){if(b.sizset){return b
}}else{b[o]=i;
if(a(b)){return b.sizset=!0,b
}b.sizset=!1
}}}}
}function be(a,b){return a?function(c){var d=b(c);
return d&&a(d===!0?c:d)
}:b
}function bf(a,b,c){var d,e,g=0;
for(;
d=a[g];
g++){f.relative[d.part]?e=bd(e,f.relative[d.part],b,c):e=be(e,f.filter[d.part].apply(null,d.captures.concat(b,c)))
}return e
}function bg(a){return function(b){var c,d=0;
for(;
c=a[d];
d++){if(c(b)){return !0
}}return !1
}
}function bh(a,b,c,d){var e=0,f=b.length;
for(;
e<f;
e++){$(a,b[e],c,d)
}}function bi(a,b,c,d,e,g){var h,i=f.setFilters[b.toLowerCase()];
return i||$.error(b),(a||!(h=e))&&bh(a||"*",d,h=[],e),h.length>0?i(h,c,g):[]
}function bj(a,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s=0,t=a.length,v=S.POS,w=new RegExp("^"+v.source+"(?!"+A+")","i"),x=function(){var a=1,c=arguments.length-2;
for(;
a<c;
a++){arguments[a]===b&&(n[a]=b)
}};
for(;
s<t;
s++){f=a[s],g="",m=e;
for(h=0,i=f.length;
h<i;
h++){j=f[h],k=j.string;
if(j.part==="PSEUDO"){v.exec(""),l=0;
while(n=v.exec(k)){o=!0,p=v.lastIndex=n.index+n[0].length;
if(p>l){g+=k.slice(l,n.index),l=p,q=[c],J.test(g)&&(m&&(q=m),m=e);
if(r=O.test(g)){g=g.slice(0,-5).replace(J,"$&*"),l++
}n.length>1&&n[0].replace(w,x),m=bi(g,n[1],n[2],q,m,r)
}g=""
}}o||(g+=k),o=!1
}g?J.test(g)?bh(g,m||[c],d,e):$(g,c,d,e?e.concat(m):m):u.apply(d,m)
}return t===1?d:$.uniqueSort(d)
}function bk(a,b,e,g,h){a=a.replace(H,"$1");
var i,k,l,m,n,o,p,q,r,s,v=bc(a,b,h),w=b.nodeType;
if(S.POS.test(a)){return bj(v,b,e,g)
}if(g){i=t.call(g,0)
}else{if(v.length===1){if((o=t.call(v[0],0)).length>2&&(p=o[0]).part==="ID"&&w===9&&!h&&f.relative[o[1].part]){b=f.find.ID(p.captures[0].replace(R,""),b,h)[0];
if(!b){return e
}a=a.slice(o.shift().string.length)
}r=(v=N.exec(o[0].string))&&!v.index&&b.parentNode||b,q="";
for(n=o.length-1;
n>=0;
n--){p=o[n],s=p.part,q=p.string+q;
if(f.relative[s]){break
}if(f.order.test(s)){i=f.find[s](p.captures[0].replace(R,""),r,h);
if(i==null){continue
}a=a.slice(0,a.length-q.length)+q.replace(S[s],""),a||u.apply(e,t.call(i,0));
break
}}}}if(a){k=j(a,b,h),c=k.dirruns++,i==null&&(i=f.find.TAG("*",N.test(a)&&b.parentNode||b));
for(n=0;
m=i[n];
n++){d=k.runs++,k(m)&&e.push(m)
}}return e
}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=a.document,r=q.documentElement,s=0,t=[].slice,u=[].push,v=function(a,b){return a[o]=b||!0,a
},w=function(){var a={},b=[];
return v(function(c,d){return b.push(c)>f.cacheLength&&delete a[b.shift()],a[c]=d
},a)
},x=w(),y=w(),z=w(),A="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",C=B.replace("w","w#"),D="([*^$|!~]?=)",E="\\["+A+"*("+B+")"+A+"*(?:"+D+A+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+C+")|)|)"+A+"*\\]",F=":("+B+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+E+")|[^:]|\\\\.)*|.*))\\)|)",G=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",H=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g"),I=new RegExp("^"+A+"*,"+A+"*"),J=new RegExp("^"+A+"*([\\x20\\t\\r\\n\\f>+~])"+A+"*"),K=new RegExp(F),L=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,M=/^:not/,N=/[\x20\t\r\n\f]*[+~]/,O=/:not\($/,P=/h\d/i,Q=/input|select|textarea|button/i,R=/\\(?!\\)/g,S={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),NAME:new RegExp("^\\[name=['\"]?("+B+")['\"]?\\]"),TAG:new RegExp("^("+B.replace("w","w*")+")"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),POS:new RegExp(G,"ig"),needsContext:new RegExp("^"+A+"*[>+~]|"+G,"i")},T=function(a){var b=q.createElement("div");
try{return a(b)
}catch(c){return !1
}finally{b=null
}},U=T(function(a){return a.appendChild(q.createComment("")),!a.getElementsByTagName("*").length
}),V=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"
}),W=T(function(a){a.innerHTML="<select></select>";
var b=typeof a.lastChild.getAttribute("multiple");
return b!=="boolean"&&b!=="string"
}),X=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)
}),Y=T(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",r.insertBefore(a,r.firstChild);
var b=q.getElementsByName&&q.getElementsByName(o).length===2+q.getElementsByName(o+0).length;
return e=!q.getElementById(o),r.removeChild(a),b
});
try{t.call(r.childNodes,0)[0].nodeType
}catch(Z){t=function(a){var b,c=[];
for(;
b=this[a];
a++){c.push(b)
}return c
}
}$.matches=function(a,b){return $(a,null,null,b)
},$.matchesSelector=function(a,b){return $(b,null,null,[a]).length>0
},g=$.getText=function(a){var b,c="",d=0,e=a.nodeType;
if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string"){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=g(a)
}}else{if(e===3||e===4){return a.nodeValue
}}}else{for(;
b=a[d];
d++){c+=g(b)
}}return c
},h=$.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?b.nodeName!=="HTML":!1
},i=$.contains=r.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;
return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))
}:r.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)
}:function(a,b){while(b=b.parentNode){if(b===a){return !0
}}return !1
},$.attr=function(a,b){var c,d=h(a);
return d||(b=b.toLowerCase()),f.attrHandle[b]?f.attrHandle[b](a):W||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)
},f=$.selectors={cacheLength:50,createPseudo:v,match:S,order:new RegExp("ID|TAG"+(Y?"|NAME":"")+(X?"|CLASS":"")),attrHandle:V?{}:{href:function(a){return a.getAttribute("href",2)
},type:function(a){return a.getAttribute("type")
}},find:{ID:e?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);
return d&&d.parentNode?[d]:[]
}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);
return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]
}},TAG:U?function(a,b){if(typeof b.getElementsByTagName!==n){return b.getElementsByTagName(a)
}}:function(a,b){var c=b.getElementsByTagName(a);
if(a==="*"){var d,e=[],f=0;
for(;
d=c[f];
f++){d.nodeType===1&&e.push(d)
}return e
}return c
},NAME:function(a,b){if(typeof b.getElementsByName!==n){return b.getElementsByName(name)
}},CLASS:function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c){return b.getElementsByClassName(a)
}}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(R,""),a[3]=(a[4]||a[5]||"").replace(R,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||$.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&$.error(a[0]),a
},PSEUDO:function(a,b,c){var d,e;
if(S.CHILD.test(a[0])){return null
}if(a[3]){a[2]=a[3]
}else{if(d=a[4]){K.test(d)&&(e=bc(d,b,c,!0))&&(e=d.indexOf(")",d.length-e)-d.length)&&(d=d.slice(0,e),a[0]=a[0].slice(0,e)),a[2]=d
}}return a.slice(0,3)
}},filter:{ID:e?function(a){return a=a.replace(R,""),function(b){return b.getAttribute("id")===a
}
}:function(a){return a=a.replace(R,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");
return c&&c.value===a
}
},TAG:function(a){return a==="*"?function(){return !0
}:(a=a.replace(R,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a
})
},CLASS:function(a){var b=x[o][a];
return b||(b=x(a,new RegExp("(^|"+A+")"+a+"("+A+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")
}
},ATTR:function(a,b,c){return b?function(d){var e=$.attr(d,a),f=e+"";
if(e==null){return b==="!="
}switch(b){case"=":return f===c;
case"!=":return f!==c;
case"^=":return c&&f.indexOf(c)===0;
case"*=":return c&&f.indexOf(c)>-1;
case"$=":return c&&f.substr(f.length-c.length)===c;
case"~=":return(" "+f+" ").indexOf(c)>-1;
case"|=":return f===c||f.substr(0,c.length+1)===c+"-"
}}:function(b){return $.attr(b,a)!=null
}
},CHILD:function(a,b,c,d){if(a==="nth"){var e=s++;
return function(a){var b,f,g=0,h=a;
if(c===1&&d===0){return !0
}b=a.parentNode;
if(b&&(b[o]!==e||!a.sizset)){for(h=b.firstChild;
h;
h=h.nextSibling){if(h.nodeType===1){h.sizset=++g;
if(h===a){break
}}}b[o]=e
}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0
}
}return function(b){var c=b;
switch(a){case"only":case"first":while(c=c.previousSibling){if(c.nodeType===1){return !1
}}if(a==="first"){return !0
}c=b;
case"last":while(c=c.nextSibling){if(c.nodeType===1){return !1
}}return !0
}}
},PSEUDO:function(a,b,c,d){var e,g=f.pseudos[a]||f.pseudos[a.toLowerCase()];
return g||$.error("unsupported pseudo: "+a),g[o]?g(b,c,d):g.length>1?(e=[a,a,"",b],function(a){return g(a,0,e)
}):g
}},pseudos:{not:v(function(a,b,c){var d=j(a.replace(H,"$1"),b,c);
return function(a){return !d(a)
}
}),enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return b==="input"&&!!a.checked||b==="option"&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},parent:function(a){return !f.pseudos.empty(a)
},empty:function(a){var b;
a=a.firstChild;
while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4){return !1
}a=a.nextSibling
}return !0
},contains:v(function(a){return function(b){return(b.textContent||b.innerText||g(b)).indexOf(a)>-1
}
}),has:v(function(a){return function(b){return $(a,b).length>0
}
}),header:function(a){return P.test(a.nodeName)
},text:function(a){var b,c;
return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)
},radio:_("radio"),checkbox:_("checkbox"),file:_("file"),password:_("password"),image:_("image"),submit:ba("submit"),reset:ba("reset"),button:function(a){var b=a.nodeName.toLowerCase();
return b==="input"&&a.type==="button"||b==="button"
},input:function(a){return Q.test(a.nodeName)
},focus:function(a){var b=a.ownerDocument;
return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)
},active:function(a){return a===a.ownerDocument.activeElement
}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]
},last:function(a,b,c){var d=a.pop();
return c?a:[d]
},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;
for(;
e<f;
e=e+2){d.push(a[e])
}return d
},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;
for(;
e<f;
e=e+2){d.push(a[e])
}return d
},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)
},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)
},eq:function(a,b,c){var d=a.splice(+b,1);
return c?a:d
}}},k=r.compareDocumentPosition?function(a,b){return a===b?(l=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1
}:function(a,b){if(a===b){return l=!0,0
}if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex
}var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;
if(g===h){return bb(a,b)
}if(!g){return -1
}if(!h){return 1
}while(i){e.unshift(i),i=i.parentNode
}i=h;
while(i){f.unshift(i),i=i.parentNode
}c=e.length,d=f.length;
for(var j=0;
j<c&&j<d;
j++){if(e[j]!==f[j]){return bb(e[j],f[j])
}}return j===c?bb(a,f[j],-1):bb(e[j],b,1)
},[0,0].sort(k),m=!l,$.uniqueSort=function(a){var b,c=1;
l=m,a.sort(k);
if(l){for(;
b=a[c];
c++){b===a[c-1]&&a.splice(c--,1)
}}return a
},$.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},j=$.compile=function(a,b,c){var d,e,f,g=z[o][a];
if(g&&g.context===b){return g
}d=bc(a,b,c);
for(e=0,f=d.length;
e<f;
e++){d[e]=bf(d[e],b,c)
}return g=z(a,bg(d)),g.context=b,g.runs=g.dirruns=0,g
},q.querySelectorAll&&function(){var a,b=bk,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;
T(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+A+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")
}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+A+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")
}),e=e.length&&new RegExp(e.join("|")),bk=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){if(d.nodeType===9){try{return u.apply(f,t.call(d.querySelectorAll(a),0)),f
}catch(i){}}else{if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j,k,l,m=d.getAttribute("id"),n=m||o,p=N.test(a)&&d.parentNode||d;
m?n=n.replace(c,"\\$&"):d.setAttribute("id",n),j=bc(a,d,h),n="[id='"+n+"']";
for(k=0,l=j.length;
k<l;
k++){j[k]=n+j[k].selector
}try{return u.apply(f,t.call(p.querySelectorAll(j.join(",")),0)),f
}catch(i){}finally{m||d.removeAttribute("id")
}}}}return b(a,d,f,g,h)
},g&&(T(function(b){a=g.call(b,"div");
try{g.call(b,"[test!='']:sizzle"),f.push(S.PSEUDO.source,S.POS.source,"!=")
}catch(c){}}),f=new RegExp(f.join("|")),$.matchesSelector=function(b,c){c=c.replace(d,"='$1']");
if(!h(b)&&!f.test(c)&&(!e||!e.test(c))){try{var i=g.call(b,c);
if(i||a||b.document&&b.document.nodeType!==11){return i
}}catch(j){}}return $(c,null,null,[b]).length>0
})
}(),f.setFilters.nth=f.setFilters.eq,f.filters=f.pseudos,$.attr=p.attr,p.find=$,p.expr=$.selectors,p.expr[":"]=p.expr.pseudos,p.unique=$.uniqueSort,p.text=$.getText,p.isXMLDoc=$.isXML,p.contains=$.contains
}(a);
var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};
p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;
if(typeof a!="string"){return p(a).filter(function(){for(b=0,c=h.length;
b<c;
b++){if(p.contains(h[b],this)){return !0
}}})
}g=this.pushStack("","find",a);
for(b=0,c=this.length;
b<c;
b++){d=g.length,p.find(a,this[b],g);
if(b>0){for(e=d;
e<g.length;
e++){for(f=0;
f<d;
f++){if(g[f]===g[e]){g.splice(e--,1);
break
}}}}}return g
},has:function(a){var b,c=p(a,this),d=c.length;
return this.filter(function(){for(b=0;
b<d;
b++){if(p.contains(this,c[b])){return !0
}}})
},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)
},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)
},is:function(a){return !!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)
},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;
for(;
d<e;
d++){c=this[d];
while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);
break
}c=c.parentNode
}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)
},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1
},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);
return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))
},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;
return b&&b.nodeType!==11?b:null
},parents:function(a){return p.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)
},next:function(a){return bi(a,"nextSibling")
},prev:function(a){return bi(a,"previousSibling")
},nextAll:function(a){return p.dir(a,"nextSibling")
},prevAll:function(a){return p.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)
},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return p.sibling(a.firstChild)
},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)
}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);
return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))
}
}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)
},dir:function(a,c,d){var e=[],f=a[c];
while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d))){f.nodeType===1&&e.push(f),f=f[c]
}return e
},sibling:function(a,b){var c=[];
for(;
a;
a=a.nextSibling){a.nodeType===1&&a!==b&&c.push(a)
}return c
}});
var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));
bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))
},null,a,arguments.length)
},wrapAll:function(a){if(p.isFunction(a)){return this.each(function(b){p(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&a.firstChild.nodeType===1){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))
}):this.each(function(){var b=p(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=p.isFunction(a);
return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)
})
},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)
})
},before:function(){if(!bh(this[0])){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)
})
}if(arguments.length){var a=p.clean(arguments);
return this.pushStack(p.merge(a,this),"before",this.selector)
}},after:function(){if(!bh(this[0])){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)
})
}if(arguments.length){var a=p.clean(arguments);
return this.pushStack(p.merge(this,a),"after",this.selector)
}},remove:function(a,b){var c,d=0;
for(;
(c=this[d])!=null;
d++){if(!a||p.filter(a,[c]).length){!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c)
}}return this
},empty:function(){var a,b=0;
for(;
(a=this[b])!=null;
b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));
while(a.firstChild){a.removeChild(a.firstChild)
}}return this
},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)
})
},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;
if(a===b){return c.nodeType===1?c.innerHTML.replace(bm,""):b
}if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");
try{for(;
d<e;
d++){c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a)
}c=0
}catch(f){}}c&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();
c.replaceWith(a.call(this,b,d))
}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;
p(this).remove(),b?p(b).before(a):p(c).append(a)
}))
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,c,d){a=[].concat.apply([],a);
var e,f,g,h,i=0,j=a[0],k=[],l=this.length;
if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j)){return this.each(function(){p(this).domManip(a,c,d)
})
}if(p.isFunction(j)){return this.each(function(e){var f=p(this);
a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)
})
}if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);
if(f){c=c&&p.nodeName(f,"tr");
for(h=e.cacheable||l-1;
i<l;
i++){d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))
}}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)
})
}return this
}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];
return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}
},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;
if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1){return g[b](this[0]),this
}for(;
e<h;
e++){d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d)
}return this.pushStack(f,a,g.selector)
}
}),p.extend({clone:function(a,b,c){var d,e,f,g;
p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));
if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);
for(f=0;
d[f];
++f){e[f]&&bE(d[f],e[f])
}}if(b){bD(a,g);
if(c){d=bF(a),e=bF(g);
for(f=0;
d[f];
++f){bD(d[f],e[f])
}}}return d=e=null,g
},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];
if(!b||typeof b.createDocumentFragment=="undefined"){b=e
}for(f=0;
(h=a[f])!=null;
f++){typeof h=="number"&&(h+="");
if(!h){continue
}if(typeof h=="string"){if(!br.test(h)){h=b.createTextNode(h)
}else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];
while(k--){l=l.lastChild
}if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];
for(g=n.length-1;
g>=0;
--g){p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])
}}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)
}}h.nodeType?t.push(h):p.merge(t,h)
}l&&(h=l=s=null);
if(!p.support.appendChecked){for(f=0;
(h=t[f])!=null;
f++){p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG)
}}if(c){q=function(a){if(!a.type||bx.test(a.type)){return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)
}};
for(f=0;
(h=t[f])!=null;
f++){if(!p.nodeName(h,"script")||!q(h)){c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)
}}}return t
},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;
for(;
(e=a[g])!=null;
g++){if(b||p.acceptData(e)){d=e[h],c=d&&i[d];
if(c){if(c.events){for(f in c.events){k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle)
}}i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))
}}}}}),function(){var a,b;
p.uaMatch=function(a){a=a.toLowerCase();
var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];
return{browser:b[1]||"",version:b[2]||"0"}
},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)
}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)
},a.fn.init.prototype=a.fn;
var b=a(e);
return a
}
}();
var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;
p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)
},a,c,arguments.length>1)
},show:function(){return b$(this,!0)
},hide:function(){return b$(this)
},toggle:function(a,b){var c=typeof a=="boolean";
return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()
})
}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");
return c===""?"1":c
}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style){return
}var f,g,h,i=p.camelCase(c),j=a.style;
c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];
if(d===b){return h&&"get" in h&&(f=h.get(a,!1,e))!==b?f:j[c]
}g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");
if(d==null||g==="number"&&isNaN(d)){return
}g==="number"&&!p.cssNumber[i]&&(d+="px");
if(!h||!("set" in h)||(d=h.set(a,d,e))!==b){try{j[c]=d
}catch(k){}}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);
return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get" in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f
},swap:function(a,b,c){var d,e,f={};
for(e in b){f[e]=a.style[e],a.style[e]=b[e]
}d=c.call(a);
for(e in b){a.style[e]=f[e]
}return d
}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;
return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d
}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;
return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e
}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c){return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)
}):cb(a,b,d)
}},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)
}}
}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1;
if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");
if(d&&!d.filter){return
}}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e
}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b){return bH(a,"marginRight")
}})
}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);
return bQ.test(d)?p(a).position()[b]+"px":d
}}}
})
}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"
},p.expr.filters.visible=function(a){return !p.expr.filters.hidden(a)
}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};
for(d=0;
d<4;
d++){f[a+bV[d]+b]=e[d]||e[d-2]||e[0]
}return f
}},bO.test(a)||(p.cssHooks[a+b].set=b_)
});
var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;
p.fn.extend({serialize:function(){return p.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))
}).map(function(a,b){var c=p(this).val();
return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}
}):{name:b.name,value:c.replace(cf,"\r\n")}
}).get()
}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);
if(p.isArray(a)||a.jquery&&!p.isPlainObject(a)){p.each(a,function(){f(this.name,this.value)
})
}else{for(d in a){ci(d,a[d],c,f)
}}return e.join("&").replace(cd,"+")
};
var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];
try{cj=f.href
}catch(cy){cj=e.createElement("a"),cj.href="",cj=cj.href
}ck=ct.exec(cj.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu){return cu.apply(this,arguments)
}if(!this.length){return this
}var e,f,g,h=this,i=a.indexOf(" ");
return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])
}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)
}),this
},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)
}
}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})
}
}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")
},getJSON:function(a,b,c){return p.get(a,b,c,"json")
},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a
},ajaxSettings:{url:cj,isLocal:cn.test(ck[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;
if(v===2){return
}v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));
if(a>=200&&a<300||a===304){l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t)
}else{t=y;
if(!y||a){y="error",a<0&&(a=0)
}}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))
}typeof a=="object"&&(c=a,a=b),c=c||{};
var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();
a=u[c]=u[c]||a,t[a]=b
}return this
},getAllResponseHeaders:function(){return v===2?e:null
},getResponseHeader:function(a){var c;
if(v===2){if(!f){f={};
while(c=cm.exec(e)){f[c[1].toLowerCase()]=c[2]
}}c=f[a.toLowerCase()]
}return c===b?null:c
},overrideMimeType:function(a){return v||(l.mimeType=a),this
},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this
}};
o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;
if(v<2){for(b in a){r[b]=[r[b],a[b]]
}}else{b=a[x.status],x.always(b)
}}return this
},l.url=((a||l.url)+"").replace(cl,"").replace(cp,ck[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==ck[1]&&i[2]==ck[2]&&(i[3]||(i[1]==="http:"?80:443))==(ck[3]||(ck[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);
if(v===2){return x
}j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");
if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;
if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);
l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")
}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);
for(k in l.headers){x.setRequestHeader(k,l.headers[k])
}if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";
for(k in {success:1,error:1,complete:1}){x[k](l[k])
}g=cA(cw,l,c,x);
if(!g){y(-1,"No Transport")
}else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")
},l.timeout));
try{v=1,g.send(t,y)
}catch(B){if(v<2){y(-1,B)
}else{throw B
}}}return x
}return x.abort()
},active:0,lastModified:{},etag:{}});
var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();
p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;
return this[a]=!0,a
}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);
if(c.dataTypes[0]==="jsonp"||l||m){return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]
},c.dataTypes[0]="json",a[f]=function(){h=arguments
},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b
}),"script"
}}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a
}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;
return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState)){c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")
}},d.insertBefore(c,d.firstChild)
},abort:function(){c&&c.onload(0,1)
}}
}});
var cI,cJ=a.ActiveXObject?function(){for(var a in cI){cI[a](0,1)
}}:!1,cK=0;
p.ajaxSettings.xhr=a.ActiveXObject?function(){return !this.isLocal&&cL()||cM()
}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials" in a})
}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;
return{send:function(e,f){var g,h,i=c.xhr();
c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);
if(c.xhrFields){for(h in c.xhrFields){i[h]=c.xhrFields[h]
}}c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");
try{for(h in e){i.setRequestHeader(h,e[h])
}}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;
try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);
if(e){i.readyState!==4&&i.abort()
}else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);
try{l.text=i.responseText
}catch(a){}try{j=i.statusText
}catch(n){j=""
}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)
}}}catch(o){e||f(-1,o)
}l&&f(h,j,l,k)
},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()
},abort:function(){d&&d(0,1)
}}
}});
var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cQ.exec(b),h=f.cur(),i=+h||0,j=1;
if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");
if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;
do{e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h
}while(j!==1&&j!==e)
}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c
}return f
}]};
p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
var c,d=0,e=a.length;
for(;
d<e;
d++){c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)
}},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)
}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")
},cur:function(){var a=cZ.propHooks[this.prop];
return a&&a.get?a.get(this):cZ.propHooks._default.get(this)
},run:function(a){var b,c=cZ.propHooks[this.prop];
return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this
}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;
return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]
},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];
p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)
}
}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);
e&&b.stop(!0)
};
return e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,c,d){var e=function(a){var b=a.stop;
delete a.stop,b(d)
};
return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);
if(c){g[c]&&g[c].stop&&e(g[c])
}else{for(c in g){g[c]&&g[c].stop&&cR.test(c)&&e(g[c])
}}for(c=f.length;
c--;
){f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1))
}(b||!d)&&p.dequeue(this,a)
})
}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};
d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;
if(d.queue==null||d.queue===!0){d.queue="fx"
}return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)
},d
},p.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;
for(;
c<b.length;
c++){a=b[c],!a()&&b[c]===a&&b.splice(c--,1)
}b.length||p.fx.stop()
},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))
},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null
},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem
}).length
});
var c_=/^(?:body|html)$/i;
p.fn.offset=function(a){if(arguments.length){return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)
})
}var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;
if(!n){return
}return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=da(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})
},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;
return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}
},setOffset:function(a,b,c){var d=p.css(a,"position");
d==="static"&&(a.style.position="relative");
var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;
i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using" in b?b.using.call(a,j):e.css(j)
}},p.fn.extend({position:function(){if(!this[0]){return
}var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();
return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;
while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static"){a=a.offsetParent
}return a||e.body
})
}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);
p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);
if(f===b){return g?c in g?g[c]:g.document.documentElement[e]:a[e]
}g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f
},a,e,arguments.length,null)
}
}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");
return p.access(this,function(c,d,e){var f;
return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)
},c,g?e:b,g,null)
}
})
}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p
})
})(window);
jQuery.cookie=function(h,m,j){if(typeof m!="undefined"){j=j||{};
if(m===null){m="";
j.expires=-1
}var f="";
if(j.expires&&(typeof j.expires=="number"||j.expires.toUTCString)){var d;
if(typeof j.expires=="number"){d=new Date();
d.setTime(d.getTime()+(j.expires*24*60*60*1000))
}else{d=j.expires
}f="; expires="+d.toUTCString()
}var k=j.path?"; path="+(j.path):"";
var e=j.domain?"; domain="+(j.domain):"";
var l=j.secure?"; secure":"";
document.cookie=[h,"=",encodeURIComponent(m),f,k,e,l].join("")
}else{var c=null;
if(document.cookie&&document.cookie!=""){var b=document.cookie.split(";");
for(var g=0;
g<b.length;
g++){var a=jQuery.trim(b[g]);
if(a.substring(0,h.length+1)==(h+"=")){c=decodeURIComponent(a.substring(h.length+1));
break
}}}return c
}};
jQuery.autocomplete=function(r,B){var y=this;
var a=$(r).attr("autocomplete","off");
if(B.inputClass){a.addClass(B.inputClass)
}var G=document.createElement("div");
var b=$(G);
b.hide().addClass(B.resultsClass).css("position","absolute");
if(B.width>0){b.css("width",B.width)
}$("body").append(G);
r.autocompleter=y;
var N=null;
var D="";
var c=-1;
var f={};
var t=false;
var n=false;
var u=null;
function m(){f={};
f.data={};
f.length=0
}m();
if(B.data!=null){var K="",M={},H=[];
if(typeof B.url!="string"){B.cacheLength=1
}for(var q=0;
q<B.data.length;
q++){H=((typeof B.data[q]=="string")?[B.data[q]]:B.data[q]);
if(H[0].length>0){K=H[0].substring(0,1).toLowerCase();
if(!M[K]){M[K]=[]
}M[K].push(H)
}}for(var s in M){B.cacheLength++;
d(s,M[s])
}}a.keydown(function(i){u=i.keyCode;
switch(i.keyCode){case 38:i.preventDefault();
z(-1);
break;
case 40:i.preventDefault();
z(1);
break;
case 9:case 13:if(I()){a.get(0).blur();
i.preventDefault()
}break;
default:c=-1;
if(N){clearTimeout(N)
}N=setTimeout(function(){A()
},B.delay);
break
}}).focus(function(){n=true
}).blur(function(){n=false;
o()
});
p();
function A(){if(u==46||(u>8&&u<32)){return b.hide()
}var i=a.val();
if(i==D){return
}D=i;
if(i.length>=B.minChars){a.addClass(B.loadingClass);
F(i)
}else{a.removeClass(B.loadingClass);
b.hide()
}}function z(k){var i=$("li",G);
if(!i){return
}c+=k;
if(c<0){c=0
}else{if(c>=i.size()){c=i.size()-1
}}i.removeClass("ac_over");
$(i[c]).addClass("ac_over")
}function I(){var k=$("li.ac_over",G)[0];
if(!k){var i=$("li",G);
if(B.selectOnly){if(i.length==1){k=i[0]
}}else{if(B.selectFirst){k=i[0]
}}}if(k){J(k);
return true
}else{return false
}}function J(i){if(!i){i=document.createElement("li");
i.extra=[];
i.selectValue=""
}var k=$.trim(i.selectValue?i.selectValue:i.innerHTML);
r.lastSelected=k;
D=k;
b.html("");
a.val(k);
p();
if(B.onItemSelect){setTimeout(function(){B.onItemSelect(i)
},1)
}}function g(P,i){var k=a.get(0);
if(k.createTextRange){var O=k.createTextRange();
O.collapse(true);
O.moveStart("character",P);
O.moveEnd("character",i);
O.select()
}else{if(k.setSelectionRange){k.setSelectionRange(P,i)
}else{if(k.selectionStart){k.selectionStart=P;
k.selectionEnd=i
}}}k.focus()
}function e(i){if(u!=8){a.val(a.val()+i.substring(D.length));
g(D.length,i.length)
}}function L(){var k=j(r);
var i=(B.width>0)?B.width:a.width();
b.css({width:parseInt(i)+"px",top:(k.y+r.offsetHeight)+"px",left:k.x+"px"}).show()
}function o(){if(N){clearTimeout(N)
}N=setTimeout(p,200)
}function p(){if(N){clearTimeout(N)
}a.removeClass(B.loadingClass);
if(b.is(":visible")){b.hide()
}if(B.mustMatch){var i=a.val();
if(i!=r.lastSelected){J(null)
}}}function E(k,i){if(i){a.removeClass(B.loadingClass);
G.innerHTML="";
if(!n||i.length==0){return p()
}if($.browser.msie){}G.appendChild(h(i));
if(B.autoFill&&(a.val().toLowerCase()==k.toLowerCase())){e(i[0][0])
}L()
}else{p()
}}function C(k){if(!k){return null
}if(typeof k!=="string"){return null
}var P=[];
var R=k.split(B.lineSeparator);
for(var O=0;
O<R.length;
O++){var Q=$.trim(R[O]);
if(Q){P[P.length]=Q.split(B.cellSeparator)
}}return P
}function h(k){var U=document.createElement("ul");
var S=k.length;
if((B.maxItemsToShow>0)&&(B.maxItemsToShow<S)){S=B.maxItemsToShow
}for(var P=0;
P<S;
P++){var T=k[P];
if(!T){continue
}var R=document.createElement("li");
if(B.formatItem){R.innerHTML=B.formatItem(T,P,S);
R.selectValue=T[0]
}else{R.innerHTML=T[0];
R.selectValue=T[0]
}var O=null;
if(T.length>1){O=[];
for(var Q=1;
Q<T.length;
Q++){O[O.length]=T[Q]
}}R.extra=O;
U.appendChild(R);
$(R).hover(function(){$("li",U).removeClass("ac_over");
$(this).addClass("ac_over");
c=$("li",U).indexOf($(this).get(0))
},function(){$(this).removeClass("ac_over")
}).click(function(i){i.preventDefault();
i.stopPropagation();
J(this)
})
}return U
}function F(k){if(!B.matchCase){k=k.toLowerCase()
}var i=B.cacheLength?v(k):null;
if(i){E(k,i)
}else{if((typeof B.url=="string")&&(B.url.length>0)){$.get(w(k),function(O){O=C(O);
d(k,O);
E(k,O)
})
}else{a.removeClass(B.loadingClass)
}}}function w(O){var P=B.url+"?q="+encodeURI(O);
for(var k in B.extraParams){P+="&"+k+"="+encodeURI(B.extraParams[k])
}return P
}function v(R){if(!R){return null
}if(f.data[R]){return f.data[R]
}if(B.matchSubset){for(var P=R.length-1;
P>=B.minChars;
P--){var S=R.substr(0,P);
var k=f.data[S];
if(k){var O=[];
for(var Q=0;
Q<k.length;
Q++){var T=k[Q];
var U=T[0];
if(x(U,R)){O[O.length]=T
}}return O
}}}return null
}function x(O,P){if(!B.matchCase){O=O.toLowerCase()
}var k=O.indexOf(P);
if(k==-1){return false
}return k==0||B.matchContains
}this.flushCache=function(){m()
};
this.setExtraParams=function(i){B.extraParams=i
};
this.findValue=function(){var k=a.val();
if(!B.matchCase){k=k.toLowerCase()
}var i=B.cacheLength?v(k):null;
if(i){l(k,i)
}else{if((typeof B.url=="string")&&(B.url.length>0)){$.get(w(k),function(O){O=C(O);
d(k,O);
l(k,O)
})
}else{l(k,null)
}}};
function l(T,k){if(k){a.removeClass(B.loadingClass)
}var S=(k)?k.length:0;
var R=null;
for(var P=0;
P<S;
P++){var U=k[P];
if(U[0].toLowerCase()==T.toLowerCase()){R=document.createElement("li");
if(B.formatItem){R.innerHTML=B.formatItem(U,P,S);
R.selectValue=U[0]
}else{R.innerHTML=U[0];
R.selectValue=U[0]
}var O=null;
if(U.length>1){O=[];
for(var Q=1;
Q<U.length;
Q++){O[O.length]=U[Q]
}}R.extra=O
}}if(B.onFindValue){setTimeout(function(){B.onFindValue(R)
},1)
}}function d(k,i){if(!i||!k||!B.cacheLength){return
}if(!f.length||f.length>B.cacheLength){m();
f.length++
}else{if(!f[k]){f.length++
}}f.data[k]=i
}function j(O){var i=O.offsetLeft||0;
var k=O.offsetTop||0;
while(O=O.offsetParent){i+=O.offsetLeft;
k+=O.offsetTop
}return{x:i,y:k}
}};
jQuery.fn.autocomplete=function(c,b,a){b=b||{};
b.url=c;
b.data=((typeof a=="object")&&(a.constructor==Array))?a:null;
b.inputClass=b.inputClass||"ac_input";
b.resultsClass=b.resultsClass||"ac_results";
b.lineSeparator=b.lineSeparator||",";
b.cellSeparator=b.cellSeparator||"|";
b.minChars=b.minChars||1;
b.delay=b.delay||400;
b.matchCase=b.matchCase||0;
b.matchSubset=b.matchSubset||1;
b.matchContains=b.matchContains||0;
b.cacheLength=b.cacheLength||1;
b.mustMatch=b.mustMatch||0;
b.extraParams=b.extraParams||{};
b.loadingClass=b.loadingClass||"ac_loading";
b.selectFirst=b.selectFirst||false;
b.selectOnly=b.selectOnly||false;
b.maxItemsToShow=b.maxItemsToShow||-1;
b.autoFill=b.autoFill||false;
b.width=parseInt(b.width,10)||0;
this.each(function(){var d=this;
new jQuery.autocomplete(d,b)
});
return this
};
jQuery.fn.autocompleteArray=function(a,b){return this.autocomplete(null,b,a)
};
jQuery.fn.indexOf=function(a){for(var b=0;
b<this.length;
b++){if(this[b]==a){return b
}}return -1
};
(function(){var doT={version:"0.2.0",templateSettings:{evaluate:/\{\{([\s\S]+?)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:true,append:true,selfcontained:false},template:undefined,compile:undefined};
var global=(function(){return this||(0,eval)("this")
}());
if(typeof module!=="undefined"&&module.exports){module.exports=doT
}else{if(typeof define==="function"&&define.amd){define(function(){return doT
})
}else{global.doT=doT
}}function encodeHTMLSource(){var encodeHTMLRules={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},matchHTML=/&(?!#?\w+;)|<|>|"|'|\//g;
return function(code){return code?code.toString().replace(matchHTML,function(m){return encodeHTMLRules[m]||m
}):code
}
}global.encodeHTML=encodeHTMLSource();
var startend={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},skip=/$^/;
function resolveDefs(c,block,def){return((typeof block==="string")?block:block.toString()).replace(c.define||skip,function(m,code,assign,value){if(code.indexOf("def.")===0){code=code.substring(4)
}if(!(code in def)){if(assign===":"){def[code]=value
}else{eval("def['"+code+"']="+value)
}}return""
}).replace(c.use||skip,function(m,code){var v=eval(code);
return v?resolveDefs(c,v,def):v
})
}function unescape(code){return code.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")
}doT.template=function(tmpl,c,def){c=c||doT.templateSettings;
var cse=c.append?startend.append:startend.split,str,needhtmlencode,sid=0,indv;
if(c.use||c.define){var olddef=global.def;
global.def=def||{};
str=resolveDefs(c,tmpl,global.def);
global.def=olddef
}else{str=tmpl
}str=("var out='"+(c.strip?str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):str).replace(/'|\\/g,"\\$&").replace(c.interpolate||skip,function(m,code){return cse.start+unescape(code)+cse.end
}).replace(c.encode||skip,function(m,code){needhtmlencode=true;
return cse.startencode+unescape(code)+cse.end
}).replace(c.conditional||skip,function(m,elsecase,code){return elsecase?(code?"';}else if("+unescape(code)+"){out+='":"';}else{out+='"):(code?"';if("+unescape(code)+"){out+='":"';}out+='")
}).replace(c.iterate||skip,function(m,iterate,vname,iname){if(!iterate){return"';} } out+='"
}sid+=1;
indv=iname||"i"+sid;
iterate=unescape(iterate);
return"';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"+vname+"=arr"+sid+"["+indv+"+=1];out+='"
}).replace(c.evaluate||skip,function(m,code){return"';"+unescape(code)+"out+='"
})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|}|^|{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|}|^|{)out\+=''\+/g,"$1out+=");
if(needhtmlencode&&c.selfcontained){str="var encodeHTML=("+encodeHTMLSource.toString()+"());"+str
}try{return new Function(c.varname,str)
}catch(e){if(typeof console!=="undefined"){console.log("Could not create a template function: "+str)
}throw e
}};
doT.compile=function(tmpl,def){return doT.template(tmpl,null,def)
}
}());
if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
(function(a){a.fn.hoverIntent=function(i,j){var b={sensitivity:7,interval:100,timeout:0};
b=a.extend(b,j?{over:i,out:j}:i);
var d,e,l,m;
var n=function(f){d=f.pageX;
e=f.pageY
};
var c=function(f,g){g.hoverIntent_t=clearTimeout(g.hoverIntent_t);
if((Math.abs(l-d)+Math.abs(m-e))<b.sensitivity){a(g).unbind("mousemove",n);
g.hoverIntent_s=1;
return b.over.apply(g,[f])
}else{l=d;
m=e;
g.hoverIntent_t=setTimeout(function(){c(f,g)
},b.interval)
}};
var h=function(f,g){g.hoverIntent_t=clearTimeout(g.hoverIntent_t);
g.hoverIntent_s=0;
return b.out.apply(g,[f])
};
var k=function(f){var g=jQuery.extend({},f);
var o=this;
if(o.hoverIntent_t){o.hoverIntent_t=clearTimeout(o.hoverIntent_t)
}if(f.type=="mouseenter"){l=g.pageX;
m=g.pageY;
a(o).bind("mousemove",n);
if(o.hoverIntent_s!=1){o.hoverIntent_t=setTimeout(function(){c(g,o)
},b.interval)
}}else{a(o).unbind("mousemove",n);
if(o.hoverIntent_s==1){o.hoverIntent_t=setTimeout(function(){h(g,o)
},b.timeout)
}}};
return this.bind("mouseenter",k).bind("mouseleave",k)
}
})(jQuery);
var shoppingCart=function(){this.mode=0;
this.container="userCart";
this.callback=null;
this.hasGift=false;
this.hasfreegift=false,this.hasLimit29Gift=false;
this.colorSelectTmpl='{{~ it["颜色"] :val:idx}}    <p><label><input type="radio" name="colorspec_{{=it.goodsId}}" class="j_colorspec_rb" data-index="{{=idx}}"/>{{=val.attr}}</label></p>{{~}}{{? !it.hasSize }}<p><a class="btnQr" title="确认" href="javascript:;">确认</a></p>{{?}}';
this.sizeSelectTmpl=' {{~ it :val:idx}}    <p><label><input type="radio" name="sizespec_{{=it.goodsId}}" class="j_sizespec_rb" data-index="{{=idx}}" data-goodsid="{{=val.goodsid}}" />{{=val.attr}}</label></p>{{~}}<p><a class="btnQr" title="确认" href="javascript:;">确认</a></p>';
var c=this;
c.initialize=function(){c.$container=$("#"+c.container);
var g=c.$container.find(".Shopping_xy");
if(c.mode===3&&g.length>0){c.shoppingxy=g;
c.offsetTop=g.offset().top;
c.offsetBottom=g.offset().top+g.height()
}$(".goods_row",c.$container).each(function(){var h=$(this),i=h.find("#hdItemId"),j=h.find("#buyQty");
j.focus(function(){$(this).select()
});
j.blur(function(){var m=i.val(),o=/^[1-9][0-9]*$/,n=0,l=parseInt($(this).attr("defVal"));
if(o.test($(this).val())){n=$(this).val()
}else{n=l;
$(this).val(l)
}if(n!=l){k(m,n)
}});
h.find(".add").click(function(){var l=i.val(),m=parseInt(j.val())+1;
if(m>999){alert("已经是最大购买数量啦!");
return false
}k(l,m)
});
h.find(".dec").click(function(){var p=i.val(),r=parseInt(j.val())-1;
if(r<1){alert("已经是最小购买数量啦!");
return false
}var q=0,m=false,o=false,n=false;
if(c.mode==3){q=parseInt($(this).closest("ul").find("li").eq(6).text().replace("元",""))/parseInt(j.val())
}else{q=parseInt($(this).closest("tr").find("td").eq(6).text().replace("元",""))/parseInt(j.val())
}if(c.hasGift){var l=0;
$(".goods_row",c.$container).each(function(){if(c.mode==3){l+=parseInt($("li",this).eq(6).text().replace("元",""))
}else{l+=parseInt($("td",this).eq(6).text().replace("元",""))
}});
if((l-q)<9){m=true
}}if(c.hasfreegift){var l=0;
$(".goods_row",c.$container).each(function(){if(c.mode==3){l+=parseInt($("li",this).eq(6).text().replace("元",""))
}else{l+=parseInt($("td",this).eq(6).text().replace("元",""))
}});
if((l-q)<=0){o=true
}}if(c.hasLimit29Gift){var l=0;
$(".goods_row",c.$container).each(function(){if(c.mode==3){l+=parseInt($("li",this).eq(6).text().replace("元",""))
}else{l+=parseInt($("td",this).eq(6).text().replace("元",""))
}});
if((l-q)<29){n=true
}}if(m){if(confirm("确认要修改吗?\r\nLifeVC免费礼，订单满9元，才可免费领取。")){k(p,r)
}}else{if(o){if(confirm("确认要修改吗?\r\nLifeVC免费体验礼，任意消费，才可免费领取。")){k(p,r);
if(c.mode==1){$("#btnCheckout",c.$container).attr("src","http://images.lifevc.com/images/suborderbuttondisabled.gif")
}}}else{if(n){if(confirm("确认要修改吗?\r\nLifeVC免费体验礼，任意消费满29元，才可免费领取。")){k(p,r);
if(c.mode==1){$("#btnCheckout",c.$container).attr("src","http://images.lifevc.com/images/suborderbuttondisabled.gif")
}}}else{k(p,r)
}}}});
function k(l,n){var m={};
m.itemId=l;
m.quantity=n;
m.mode=c.mode;
m.container=c.container;
m.useDeduction=false;
if($("#useCoupon").is(":checked")&&$("#CouponCode").val()!=""){m.code=$("#CouponCode").val()
}if($("#useDeduction").is(":checked")&&$("#IntegralPwd").attr("validated")=="1"){m.useDeduction=true
}$.ajax({type:"POST",url:"/shoppingcart/updatequantity?t="+new Date().getTime(),data:m,success:function(o){if(o.code==0){alert(o.msg)
}else{if(o.code==1){c.$container.replaceWith($(o.content));
shoppingCart.viewNum(o.num,o.cprice)
}else{if(o.code==2){c.reload();
shoppingCart.viewNum(0,0)
}else{if(o.code==3){alert(o.msg);
j.val(parseInt(j.attr("defVal")))
}}}}if(c.callback!=null){c.callback(o)
}}})
}h.find(".ddlsno").change(function(){f(i.val(),$(this).val())
});
h.find(".Delete").click(function(){var o=i.val(),q="确认要删除吗?",n=false,m=false,p=0;
if(c.mode==3){p=parseInt($(this).closest("ul").find("li").eq(6).text().replace("元",""))
}else{p=parseInt($(this).closest("tr").find("td").eq(6).text().replace("元",""))
}if(c.hasGift){var l=0;
$(".goods_row",c.$container).each(function(){if(c.mode==3){l+=parseInt($("li",this).eq(6).text().replace("元",""))
}else{l+=parseInt($("td",this).eq(6).text().replace("元",""))
}});
if((l-p)<9){q+="\r\nLifeVC免费礼，订单满9元，才可免费领取。";
n=true
}}if(c.hasfreegift){var l=0;
$(".goods_row",c.$container).each(function(){if(c.mode==3){l+=parseInt($("li",this).eq(6).text().replace("元",""))
}else{l+=parseInt($("td",this).eq(6).text().replace("元",""))
}});
if((l-p)<=0){q+="?\r\nLifeVC免费体验礼，任意消费，才可免费领取。";
n=true
}}if(c.hasLimit29Gift){var l=0;
$(".goods_row",c.$container).each(function(){if(c.mode==3){l+=parseInt($("li",this).eq(6).text().replace("元",""))
}else{l+=parseInt($("td",this).eq(6).text().replace("元",""))
}});
if((l-p)<29){q+="?\r\nLifeVC免费体验礼，任意消费满29元，才可免费领取。"
}}if(confirm(q)){$.ajax({type:"POST",url:"/shoppingcart/deleteitem?t="+new Date().getTime(),data:{itemId:o,mode:c.mode,container:c.container},success:function(r){if(r.code==0){alert(r.msg)
}else{if(r.code==1){c.reload();
c.$container.replaceWith($(r.content));
shoppingCart.viewNum(r.num,r.cprice)
}else{if(r.code==2){c.reload();
shoppingCart.viewNum(0,0)
}}}if(c.callback!=null){c.callback(r)
}}})
}});
h.find(".DeleteGift").click(function(){var n=i.val(),p="确认要删除吗?\r删除后，还可在活动页面重新领取。",m=false,l=false,o=0;
if($(".j_OrderPriceTotal").length>0){if($(".j_OrderPriceTotal").find("em").text()=="0"){p="确认要删除吗?\rLifeVC免费礼，任意消费，才可免费领取。"
}}else{if($("#OrderPriceTotal").length>0){if($("#OrderPriceTotal").text()=="0"){p="确认要删除吗?\rLifeVC免费礼，任意消费，才可免费领取。"
}}}if(c.mode==3){o=parseInt($(this).closest("ul").find("li").eq(6).text().replace("元",""))
}else{o=parseInt($(this).closest("tr").find("td").eq(6).text().replace("元",""))
}if(confirm(p)){$.ajax({type:"POST",url:"/shoppingcart/deletegiftitem?t="+new Date().getTime(),data:{itemId:n,mode:c.mode,container:c.container},success:function(q){if(q.code==0){alert(q.msg)
}else{if(q.code==1){c.reload();
c.$container.replaceWith($(q.content));
shoppingCart.viewNum(q.num,q.cprice)
}else{if(q.code==2){c.reload();
shoppingCart.viewNum(0,0)
}}}if(c.callback!=null){c.callback(q)
}}})
}});
h.find(".j_attrSelector").on("click",function(){var n=$(this),u=parseInt(n.attr("goodsid")),l=n.find(".attrPop"),m=l.find(".j_colorSpec"),v=l.find(".j_sizeSpec"),r=c.groupData[u],p=c.groupGoodsData[u];
if(!u||!r||!p){return
}if(n.attr("binded")==="1"){d(l,n,h)
}else{var s=r["颜色"]!==undefined,t=r["规格"]!==undefined,q=[];
r.hasColor=s;
r.hasSize=t;
r.goodsId=u;
if(s){e(r["颜色"],u);
m.html(UI.Template.applyTemplate(c.colorSelectTmpl,r)).show().find("input:radio:first").attr("checked","checked");
d(l,n,h);
q=r["颜色"][0].goods
}if(t){e(r["规格"],u);
if(q.length>1){$.each(q,function(w){if(q[w]==u){q.splice(w,1);
return false
}});
q.unshift(u)
}var o=a(r,u,q);
if(o){v.html(UI.Template.applyTemplate(c.sizeSelectTmpl,o)).show().find("input:radio:first").attr("checked","checked");
d(l,n,h)
}}}}).delegate("input","change",function(n){var w=n.target,o=$(w),l=o.closest(".j_attrSelector"),u=l.attr("goodsid"),v=l.find(".j_sizeSpec"),r=c.groupData[u],s=r["颜色"]!==undefined,t=r["规格"]!==undefined,q=[];
r.hasColor=s;
r.hasSize=t;
if(o.hasClass("j_colorspec_rb")){q=r["颜色"][o.data().index].goods;
if(t){var m=a(r,u,q);
if(m){var p=v.html(UI.Template.applyTemplate(c.sizeSelectTmpl,m)).find("input:radio:first").attr("checked","checked");
l.attr("selectedGoodsId",p.data().goodsid)
}}else{l.attr("selectedGoodsId",q[0])
}}else{if(o.hasClass("j_sizespec_rb")){l.attr("selectedGoodsId",o.data().goodsid)
}}}).delegate("a","click",function(n){var t=n.target,o=$(t),m=o.closest(".j_attrSelector"),l=o.closest(".attrPop"),r=m.attr("goodsid"),s=m.attr("selectedGoodsId"),q=o.closest(".goods_row");
if(!o.hasClass("btnQr")||m.length===0||l.length===0){return
}if(o.hasClass("btnQr")){n.stopPropagation()
}if(s){if(r!==s){f(i.val(),s)
}}else{if(q.hasClass("j_outofstock")){try{s=c.groupData[r]["颜色"][0].goods[0]+"";
if(r!==s){f(i.val(),s)
}}catch(p){}}}l.hide()
});
if(c.mode==0){$(".btnAddHg").click(function(){var m=$(this).attr("rid"),n=$("#changeList_"+m).find(".selected");
if(n.length==0){alert("该商品没有符合条件的折扣项,无法购买!");
return false
}else{var l=n.eq(0).attr("did");
$.ajax({url:"/shoppingcart/addHgItem",data:{goodsId:m,discountId:l},type:"POST",success:function(o){if(o.code==1){c.$container.replaceWith($(o.content))
}else{alert(o.msg)
}if(c.callback!=null){c.callback(o)
}}})
}})
}});
c.$container.off("mouseup",b).on("mouseup",b);
if(typeof Common!="undefined"&&typeof Common.PubSub!="undefined"){Common.PubSub.remove("shoppingCart/reload");
Common.PubSub.subscribe("shoppingCart/reload",function(h){if(h&&h.container===c.container){c.reload()
}})
}};
c.reload=function(){var g={};
g.mode=c.mode;
g.container=c.container;
g.useDeduction=false;
if($("#useCoupon").is(":checked")&&$("#CouponCode").val()!=""){g.code=$("#CouponCode").val()
}if($("#useDeduction").is(":checked")){g.useDeduction=false;
if($("#lbUserIntegralDiscountPrice").text()!=0){if($("#IsIntegralPwd").val()=="1"){if($("#IntegralPwd").val()!=""){g.useDeduction=true
}g.code=""
}else{g.useDeduction=true
}}}$.ajax({type:"POST",url:"/shoppingcart/reload?t="+new Date().getTime(),data:g,success:function(k){if(k.code==0){alert(k.msg)
}else{if(k.code==1){c.$container.replaceWith($(k.content));
shoppingCart.viewNum(k.num,k.cprice)
}else{if(k.code==2){shoppingCart.viewNum(0,0)
}}}if(c.callback!=null){c.callback(k)
}var j=$("#GoodsPriceTotal").text()-$("#lbActGoodsPriceTotal").text()-$("#UserCouponDiscountPrice").text();
var l=$("#lbUserSendIntegral").val();
var h=$("#UserIntegralDiscountPrice").text()-$("#lbUserAmountIntegral").val();
if(h>0){if(l>=h){j=j-h
}else{j=j-l
}}$("#invoice").text(j)
}})
};
c.addHgItem=function(g){$.ajax({url:"/shoppingcart/additem",data:{goodsId:gid,buyNum:qty},type:"POST",success:function(h){if(h.code==1){alert("1")
}else{if(h.code==3){alert("超出每日限购数量!")
}else{alert(h.msg)
}}}})
};
function f(g,i){var h={};
h.itemId=g;
h.specId=i;
h.mode=c.mode;
h.container=c.container;
h.useDeduction=false;
if($("#useCoupon").is(":checked")&&$("#CouponCode").val()!=""){h.code=$("#CouponCode").val()
}if($("#useDeduction").is(":checked")&&$("#IntegralPwd").attr("validated")=="1"){h.useDeduction=true
}$.ajax({type:"POST",url:"/shoppingcart/updatespec?t="+new Date().getTime(),data:h,success:function(j){if(j.code==0){if(j.msg!=""){alert(j.msg)
}}else{if(j.code==1){c.$container.replaceWith($(j.content));
shoppingCart.viewNum(j.num,j.cprice)
}else{if(j.code==2){c.reload();
shoppingCart.viewNum(0,0)
}else{if(j.code==3){if(j.msg!=""){alert(j.msg)
}c.reload()
}}}}if(c.callback!=null){c.callback(j)
}}})
}function d(g,h,i){g.show();
h.attr("binded","1");
if(c.mode===3){c.offsetBottom=c.shoppingxy.offset().top+c.shoppingxy.height();
var j=i.offset().top+i.outerHeight(true)+g.outerHeight(true)-c.offsetBottom;
if(j>0){c.shoppingxy.animate({scrollTop:"+="+j+"px"},100)
}}}function b(h){var g=c.$container.find(".attrPop:visible");
g.each(function(j,i){if($(i).has(h.target).length===0){$(i).hide()
}})
}function e(g,h){if(!g){return
}var n=false;
$.each(g,function(o){if($.inArray(h,g[o].goods)>-1){n=g[o];
g.splice(o,1);
return false
}});
if(n){g.unshift(n)
}for(var j=0;
j<g.length;
j++){var k=true,l=true,m=false;
$.each(g[j].goods,function(o,i){if(!c.groupGoodsData[h][i]){m=true;
return false
}if(!c.groupGoodsData[h][i].IsOutOfStock){k=false
}if(!c.groupGoodsData[h][i].IsSoldOut){l=false
}});
if(k||l||m){g.splice(j,1);
j--
}}}function a(i,j,h){if(!i.hasSize){return false
}var g=[];
if(i.hasColor){if(h&&h.length>0){$.each(h,function(l,k){$.each(i["规格"],function(m,n){if($.inArray(k,n.goods)>-1){g.push({attr:n.attr,goodsid:k,goodsInfo:c.groupGoodsData[k]})
}})
})
}else{return false
}}else{$.each(i["规格"],function(k,l){if(l.goods&&l.goods.length>0){g.push({attr:l.attr,goodsid:l.goods[0],goodsInfo:c.groupGoodsData[l.goods[0]]})
}})
}return g
}};
shoppingCart.viewNum=function(b,a){var c=b;
if(b>9){c="9+"
}if(typeof Common!="undefined"&&typeof Common.PubSub!="undefined"){Common.PubSub.publish("shoppingCart/ItemNumUpdate",{cartItemNum:b,cartItemNumStr:c})
}$(".GoodsDetailCartPrice").show().html("¥"+a).attr("price",a)
};
(function(j){var k="unobtrusiveAjaxClick",p="unobtrusiveValidation";
function l(h,f){var e=window,g=(h||"").split(".");
while(e&&g.length){e=e[g.shift()]
}if(typeof e==="function"){return e
}f.push(h);
return Function.constructor.apply(null,f)
}function m(b){return b==="GET"||b==="POST"
}function o(d,c){!m(c)&&d.setRequestHeader("X-HTTP-Method-Override",c)
}function q(f,a,h){var g;
if(h.indexOf("application/x-javascript")!==-1){return
}g=(f.getAttribute("data-ajax-mode")||"").toUpperCase();
j(f.getAttribute("data-ajax-update")).each(function(i,b){var d;
switch(g){case"BEFORE":d=b.firstChild;
j("<div />").html(a).contents().each(function(){b.insertBefore(this,d)
});
break;
case"AFTER":j("<div />").html(a).contents().each(function(){b.appendChild(this)
});
break;
default:j(b).html(a)
}})
}function n(a,c){var h,s,d,f;
h=a.getAttribute("data-ajax-confirm");
if(h&&!window.confirm(h)){return
}s=j(a.getAttribute("data-ajax-loading"));
f=a.getAttribute("data-ajax-loading-duration")||0;
j.extend(c,{type:a.getAttribute("data-ajax-method")||undefined,url:a.getAttribute("data-ajax-url")||undefined,beforeSend:function(e){var b;
o(e,d);
b=l(a.getAttribute("data-ajax-begin"),["xhr"]).apply(this,arguments);
b!==false&&s.show(f);
return b
},complete:function(){s.hide(f);
l(a.getAttribute("data-ajax-complete"),["xhr","status"]).apply(this,arguments)
},success:function(b,i,g){q(a,b,g.getResponseHeader("Content-Type")||"text/html");
l(a.getAttribute("data-ajax-success"),["data","status","xhr"]).apply(this,arguments)
},error:l(a.getAttribute("data-ajax-failure"),["xhr","status","error"])});
c.data.push({name:"X-Requested-With",value:"XMLHttpRequest"});
d=c.type.toUpperCase();
if(!m(d)){c.type="POST";
c.data.push({name:"X-HTTP-Method-Override",value:d})
}j.ajax(c)
}function r(d){var a=j(d).data(p);
return !a||!a.validate||a.validate()
}j("a[data-ajax=true]").live("click",function(b){b.preventDefault();
n(this,{url:this.href,type:"GET",data:[]})
});
j("form[data-ajax=true] input[type=image]").live("click",function(a){var s=a.target.name,b=j(a.target),i=b.parents("form")[0],h=b.offset();
j(i).data(k,[{name:s+".x",value:Math.round(a.pageX-h.left)},{name:s+".y",value:Math.round(a.pageY-h.top)}]);
setTimeout(function(){j(i).removeData(k)
},0)
});
j("form[data-ajax=true] :submit").live("click",function(a){var f=a.target.name,b=j(a.target).parents("form")[0];
j(b).data(k,f?[{name:f,value:a.target.value}]:[]);
setTimeout(function(){j(b).removeData(k)
},0)
});
j("form[data-ajax=true]").live("submit",function(b){var a=j(this).data(k)||[];
b.preventDefault();
if(!r(this)){return
}n(this,{url:this.action,type:this.method||"GET",data:a.concat(j(this).serializeArray())})
})
})(jQuery);