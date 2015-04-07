var g=Object,l=document,m=Array,n=Error,aa=parseInt,p=String;function ba(a,b){return a.keyCode=b}function q(a,b){return a.currentTarget=b}function r(a,b){return a.disabled=b}
var t="shift",u="replace",ca="preventDefault",v="keyCode",w="toString",da="propertyIsEnumerable",ea="checked",x="split",y="style",z="push",fa="slice",A="value",B="indexOf",ga="defineProperties",C="type",ha="name",D="length",E="prototype",ia="target",F="call",G,H=this,I=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof m)return"array";if(a instanceof g)return b;var c=g[E][w][F](a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a[D]&&"undefined"!=typeof a.splice&&
"undefined"!=typeof a[da]&&!a[da]("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a[F]&&"undefined"!=typeof a[da]&&!a[da]("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a[F])return"object";return b},ja=function(a){var b=I(a);return"array"==b||"object"==b&&"number"==typeof a[D]},J=function(a){return"string"==typeof a},ka=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},la=function(a,b){function c(){}c.prototype=b[E];
a.A=b[E];a.prototype=new c;a.C=function(a,c,f){for(var h=m(arguments[D]-2),k=2;k<arguments[D];k++)h[k-2]=arguments[k];return b[E][c].apply(a,h)}};var K=function(a){if(n.captureStackTrace)n.captureStackTrace(this,K);else{var b=n().stack;b&&(this.stack=b)}a&&(this.message=p(a))};la(K,n);K[E].name="CustomError";var ma=function(a,b){for(var c=a[x]("%s"),d="",e=m[E][fa][F](arguments,1);e[D]&&1<c[D];)d+=c[t]()+e[t]();return d+c.join("%s")},na=p[E].trim?function(a){return a.trim()}:function(a){return a[u](/^[\s\xa0]+|[\s\xa0]+$/g,"")},va=function(a,b){if(b)a=a[u](oa,"&amp;")[u](pa,"&lt;")[u](qa,"&gt;")[u](ra,"&quot;")[u](sa,"&#39;")[u](ta,"&#0;");else{if(!ua.test(a))return a;-1!=a[B]("&")&&(a=a[u](oa,"&amp;"));-1!=a[B]("<")&&(a=a[u](pa,"&lt;"));-1!=a[B](">")&&(a=a[u](qa,"&gt;"));-1!=a[B]('"')&&(a=a[u](ra,"&quot;"));
-1!=a[B]("'")&&(a=a[u](sa,"&#39;"));-1!=a[B]("\x00")&&(a=a[u](ta,"&#0;"))}return a},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,wa=function(a,b){return a<b?-1:a>b?1:0},xa=function(a){return p(a)[u](/\-([a-z])/g,function(a,c){return c.toUpperCase()})},ya=function(a,b){var c=J(b)?p(b)[u](/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")[u](/\x08/g,"\\x08"):"\\s";return a[u](new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};var za=function(a,b){b.unshift(a);K[F](this,ma.apply(null,b));b[t]()};la(za,K);za[E].name="AssertionError";var L=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=m[E][fa][F](arguments,2);throw new za(""+d,e||[]);}return a};var M=m[E],Aa=M[B]?function(a,b,c){L(null!=a[D]);return M[B][F](a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a[D]+c):c;if(J(a))return J(b)&&1==b[D]?a[B](b,c):-1;for(;c<a[D];c++)if(c in a&&a[c]===b)return c;return-1},Ba=M.forEach?function(a,b,c){L(null!=a[D]);M.forEach[F](a,b,c)}:function(a,b,c){for(var d=a[D],e=J(a)?a[x](""):a,f=0;f<d;f++)f in e&&b[F](c,e[f],f,a)},Ca=function(a){var b=a[D];if(0<b){for(var c=m(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Da=function(a,b,c){for(var d in a)b[F](c,a[d],d,a)},Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Fa=function(a,b){for(var c,d,e=1;e<arguments[D];e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ea[D];f++)c=Ea[f],g[E].hasOwnProperty[F](d,c)&&(a[c]=d[c])}};var N;t:{var Ga=H.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){N=Ha;break t}}N=""};var Ia=-1!=N[B]("Opera")||-1!=N[B]("OPR"),O=-1!=N[B]("Trident")||-1!=N[B]("MSIE"),P=-1!=N[B]("Gecko")&&-1==N.toLowerCase()[B]("webkit")&&!(-1!=N[B]("Trident")||-1!=N[B]("MSIE")),Q=-1!=N.toLowerCase()[B]("webkit"),Ja=function(){var a=H.document;return a?a.documentMode:void 0},Ka=function(){var a="",b;if(Ia&&H.opera)return a=H.opera.version,"function"==I(a)?a():a;P?b=/rv\:([^\);]+)(\)|;)/:O?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Q&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(N))?a[1]:"");return O&&(b=Ja(),b>
parseFloat(a))?p(b):a}(),La={},R=function(a){var b;if(!(b=La[a])){b=0;for(var c=na(p(Ka))[x]("."),d=na(p(a))[x]("."),e=Math.max(c[D],d[D]),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"",U=RegExp("(\\d*)(\\D*)","g"),ib=RegExp("(\\d*)(\\D*)","g");do{var V=U.exec(h)||["","",""],W=ib.exec(k)||["","",""];if(0==V[0][D]&&0==W[0][D])break;b=wa(0==V[1][D]?0:aa(V[1],10),0==W[1][D]?0:aa(W[1],10))||wa(0==V[2][D],0==W[2][D])||wa(V[2],W[2])}while(0==b)}b=La[a]=0<=b}return b},Ma=H.document,Na=Ma&&O?Ja()||("CSS1Compat"==
Ma.compatMode?aa(Ka,10):5):void 0;var Oa=!O||O&&9<=Na;!P&&!O||O&&O&&9<=Na||P&&R("1.9.1");O&&R("9");var S=function(a,b){return J(b)?a.getElementById(b):b},Pa=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var f=d=0,h;h=b[f];f++)e==h.nodeName&&(a[d++]=h);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(f=d=0;h=b[f];f++){var e=h.className,k;if(k="function"==typeof e[x])k=0<=Aa(e[x](/\s+/),c);k&&
(a[d++]=h)}a.length=d;return a}return b},Ra=function(a,b){Da(b,function(b,d){"style"==d?a[y].cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Qa?a.setAttribute(Qa[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Qa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Ta=function(a,
b,c){var d=arguments,e=d[0],f=d[1];if(!Oa&&f&&(f[ha]||f[C])){e=["<",e];f[ha]&&e[z](' name="',va(f[ha]),'"');if(f[C]){e[z](' type="',va(f[C]),'"');var h={};Fa(h,f);delete h[C];f=h}e[z](">");e=e.join("")}e=l.createElement(e);f&&(J(f)?e.className=f:"array"==I(f)?e.className=f.join(" "):Ra(e,f));2<d[D]&&Sa(l,e,d,2);return e},Sa=function(a,b,c,d){function e(c){c&&b.appendChild(J(c)?a.createTextNode(c):c)}for(;d<c[D];d++){var f=c[d];if(!ja(f)||ka(f)&&0<f.nodeType)e(f);else{var h;t:{if(f&&"number"==typeof f[D]){if(ka(f)){h=
"function"==typeof f.item||"string"==typeof f.item;break t}if("function"==I(f)){h="function"==typeof f.item;break t}}h=!1}Ba(h?Ca(f):f,e)}}};var Ua=function(a){var b=a[C];if(void 0===b)return null;switch(b.toLowerCase()){case "checkbox":case "radio":return a[ea]?a[A]:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b][A]:null;case "select-multiple":for(var b=[],c,d=0;c=a.options[d];d++)c.selected&&b[z](c[A]);return b[D]?b:null;default:return void 0!==a[A]?a[A]:null}};var Va=function(a){Va[" "](a);return a};Va[" "]=function(){};var Wa=!O||O&&9<=Na,Xa=O&&!R("9");!Q||R("528");P&&R("1.9b")||O&&R("8")||Ia&&R("9.5")||Q&&R("528");P&&!R("8")||O&&R("9");var Ya=function(a,b){this.type=a;this.target=b;q(this,this[ia]);this.defaultPrevented=this.r=!1};Ya[E].preventDefault=function(){this.defaultPrevented=!0};var T=function(a,b){Ya[F](this,a?a[C]:"");this.target=null;q(this,null);this.relatedTarget=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;ba(this,0);this.charCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.a=this.state=null;a&&this.t(a,b)};la(T,Ya);G=T[E];
G.t=function(a,b){this.a=a;var c=this.type=a[C];this.target=a[ia]||a.srcElement;q(this,b);var d=a.relatedTarget;if(d){if(P){var e;t:{try{Va(d.nodeName);e=!0;break t}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;if(g[ga])g[ga](this,{offsetX:{configurable:!0,enumerable:!0,get:this.o,set:this.v},offsetY:{configurable:!0,enumerable:!0,get:this.p,set:this.w}});else this.offsetX=this.o(),this.offsetY=this.p();this.clientX=void 0!==a.clientX?
a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;ba(this,a[v]||0);this.charCode=a.charCode||("keypress"==c?a[v]:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;a.defaultPrevented&&this[ca]()};G.preventDefault=function(){T.A[ca][F](this);var a=this.a;if(a[ca])a[ca]();else if(a.returnValue=!1,Xa)try{(a.ctrlKey||112<=a[v]&&123>=a[v])&&ba(a,-1)}catch(b){}};
G.o=function(){return Q||void 0!==this.a.offsetX?this.a.offsetX:this.a.layerX};G.v=function(a){g[ga](this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};G.p=function(){return Q||void 0!==this.a.offsetY?this.a.offsetY:this.a.layerY};G.w=function(a){g[ga](this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Za="closure_listenable_"+(1E6*Math.random()|0),$a=0;var ab=function(a,b,c,d,e,f){this.d=a;this.i=b;this.src=c;this.type=d;this.l=!!e;this.m=f;this.key=++$a;this.g=this.k=!1};ab[E].q=function(){this.g=!0;this.m=this.src=this.i=this.d=null};var bb=function(a){this.src=a;this.c={};this.n=0};bb[E].add=function(a,b,c,d,e){var f=a[w]();a=this.c[f];a||(a=this.c[f]=[],this.n++);var h;t:{for(h=0;h<a[D];++h){var k=a[h];if(!k.g&&k.d==b&&k.l==!!d&&k.m==e)break t}h=-1}-1<h?(b=a[h],c||(b.k=!1)):(b=new ab(b,null,this.src,f,!!d,e),b.k=c,a[z](b));return b};bb[E].u=function(a){var b=a[C];if(!(b in this.c))return!1;var c=this.c[b],d=Aa(c,a),e;if(e=0<=d)L(null!=c[D]),M.splice[F](c,d,1);e&&(a.q(),0==this.c[b][D]&&(delete this.c[b],this.n--));return e};var cb="closure_lm_"+(1E6*Math.random()|0),db={},eb=0,fb=function(a,b,c,d,e){if("array"==I(b)){for(var f=0;f<b[D];f++)fb(a,b[f],c,d,e);return null}c=gb(c);if(a&&a[Za])a=a.D(b,c,d,e);else{if(!b)throw n("Invalid event type");var f=!!d,h=hb(a);h||(a[cb]=h=new bb(a));c=h.add(b,c,!1,d,e);c.i||(d=jb(),c.i=d,d.src=a,d.d=c,a.addEventListener?a.addEventListener(b[w](),d,f):a.attachEvent(kb(b[w]()),d),eb++);a=c}return a},jb=function(){var a=lb,b=Wa?function(c){return a[F](b.src,b.d,c)}:function(c){c=a[F](b.src,
b.d,c);if(!c)return c};return b},kb=function(a){return a in db?db[a]:db[a]="on"+a},nb=function(a,b,c,d){var e=!0;if(a=hb(a))if(b=a.c[b[w]()])for(b=b.concat(),a=0;a<b[D];a++){var f=b[a];f&&f.l==c&&!f.g&&(f=mb(f,d),e=e&&!1!==f)}return e},mb=function(a,b){var c=a.d,d=a.m||a.src;if(a.k&&"number"!=typeof a&&a&&!a.g){var e=a.src;if(e&&e[Za])e.F(a);else{var f=a[C],h=a.i;e.removeEventListener?e.removeEventListener(f,h,a.l):e.detachEvent&&e.detachEvent(kb(f),h);eb--;(f=hb(e))?(f.u(a),0==f.n&&(f.src=null,e[cb]=
null)):a.q()}}return c[F](d,b)},lb=function(a,b){if(a.g)return!0;if(!Wa){var c;if(!(c=b))t:{c=["window","event"];for(var d=H,e;e=c[t]();)if(null!=d[e])d=d[e];else{c=null;break t}c=d}e=c;c=new T(e,this);d=!0;if(!(0>e[v]||void 0!=e.returnValue)){t:{var f=!1;if(0==e[v])try{ba(e,-1);break t}catch(h){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e[z](f);for(var f=a[C],k=e[D]-1;!c.r&&0<=k;k--){q(c,e[k]);var U=nb(e[k],f,!0,c),d=d&&U}for(k=0;!c.r&&k<e[D];k++)q(c,
e[k]),U=nb(e[k],f,!1,c),d=d&&U}return d}return mb(a,new T(b,this))},hb=function(a){a=a[cb];return a instanceof bb?a:null},ob="__closure_events_fn_"+(1E9*Math.random()>>>0),gb=function(a){L(a,"Listener can not be null.");if("function"==I(a))return a;L(a.handleEvent,"An object listener must have handleEvent method.");a[ob]||(a[ob]=function(b){return a.handleEvent(b)});return a[ob]};var qb=function(a,b,c){var d=pb[c];if(!d){var e=xa(c),d=e;void 0===a[y][e]&&(e=(Q?"Webkit":P?"Moz":O?"ms":Ia?"O":null)+ya(e),void 0!==a[y][e]&&(d=e));pb[c]=d}(c=d)&&(a[y][c]=b)},pb={};var rb=function(a,b){var c=[];1<arguments[D]&&(c=m[E][fa][F](arguments)[fa](1));var d=Pa(l,"th","tct-selectall",a);if(0!=d[D]){var d=d[0],e=0,f=Pa(l,"tbody",null,a);f[D]&&(e=f[0].rows[D]);this.e=Ta("input",{type:"checkbox"});d.appendChild(this.e);e?fb(this.e,"click",this.B,!1,this):r(this.e,!0);this.f=[];this.h=[];this.j=[];d=Pa(l,"input",null,a);for(e=0;f=d[e];e++)"checkbox"==f[C]&&f!=this.e?(this.f[z](f),fb(f,"click",this.s,!1,this)):"action"==f[ha]&&(0<=c[B](f[A])?this.j[z](f):this.h[z](f),r(f,
!0))}};G=rb[E];G.f=null;G.b=0;G.e=null;G.h=null;G.j=null;G.B=function(a){for(var b=a[ia][ea],c=a=0,d;d=this.f[c];c++)d.checked=b,a+=1;this.b=b?this.f[D]:0;for(c=0;b=this.h[c];c++)r(b,!this.b);for(c=0;b=this.j[c];c++)r(b,1!=a?!0:!1)};G.s=function(a){this.b+=a[ia][ea]?1:-1;this.e.checked=this.b==this.f[D];a=0;for(var b;b=this.h[a];a++)r(b,!this.b);for(a=0;b=this.j[a];a++)r(b,1!=this.b?!0:!1)};var sb=function(){var a=S(l,"kinds");a&&new rb(a);(a=S(l,"pending_backups"))&&new rb(a);(a=S(l,"backups"))&&new rb(a,"Restore");var b=S(l,"ae-datastore-admin-filesystem");b&&fb(b,"change",function(){var a="gs"==Ua(b);S(l,"gs_bucket_tr")[y].display=a?"":"none"});if(a=S(l,"confirm_delete_form")){var c=S(l,"confirm_readonly_delete");c&&(a.onsubmit=function(){var a=S(l,"confirm_message");if(J("color"))qb(a,"red","color");else for(var b in"color")qb(a,"color"[b],b);return c[ea]})}},X=["ae","Datastore",
"Admin","init"],Y=H;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X[D]&&(Z=X[t]());)X[D]||void 0===sb?Y=Y[Z]?Y[Z]:Y[Z]={}:Y[Z]=sb;