!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="0LD9")}({"0LD9":function(e,t,n){"use strict";n.r(t);n("ZprW");var a=n("GcXQ"),r=n.n(a)()(html);window.addEventListener("message",function(e){var t,n=e.source,a=JSON.parse(e.data),o=a.options;t="rich-text"===o.mode?r.sanitizeRichText(a.content,o):r.sanitizeAllAndKeepParagraphs(a.content);var i={id:a.id,content:t};n.postMessage(JSON.stringify(i),"*")},!1)},GcXQ:function(e,t,n){"use strict";function a(e,t){return t?e.split(",").map(function(e){return e.toLowerCase().trim()}).filter(function(e){return-1!==t.indexOf(e)}).join(","):e}e.exports=function(e){var t=["href","style","align","color","face"],n=["a","p","div","span","ul","ol","li","b","strong","i","em","u","strike","br","font","h1","h2","h3","h4","h5","h6","sub","sup"],r=["text-align","font-size","font-family","font-weight","font-style"];return{sanitizeAllAndKeepParagraphs:function(t){var n="",a=0;for(e.makeSaxParser({pcdata:function(e){n+=e},startTag:function(e){"p"===e?(n+="<p>",a++):"br"===e&&(n+="<br>")},endTag:function(e){"p"===e&&(n+="</p>",a--)}})(t);a>0;)n+="</p>",a--;return n},sanitizeRichText:function(o,i){var l=[];return function(o,i,l){var s=null;(l=l||{}).fontFamilies&&(s=l.fontFamilies.map(function(e){return e.toLowerCase()})),e.makeHtmlSanitizer(function(e,o){var i=[],l=o.length,c={},u=[];if(e=e.toLowerCase(),-1===n.indexOf(e))return null;for(var p=0;p<l;p+=2){var m=o[p];-1!==t.indexOf(m)&&(c[m]=o[p+1])}if("a"===e&&"href"in c){var h=c.href;/^(https?:\/\/|mailto:)/i.test(h)||(h="http://"+h),i.push("href",h,"rel","nofollow noopener noreferrer","target","_blank")}if(delete c.href,"align"in c){var d=c.align,f=d.indexOf(";");-1!==f&&(d=d.substr(0,f)),u.push("text-align:"+d)}if(delete c.align,"face"in c&&s){var g=a(c.face,s);g?c.face=g:delete c.face}for(var E in"style"in c&&c.style.split(";").forEach(function(e){var t,n=e.split(":");if(2===n.length&&(t=n[0].trim(),-1!==r.indexOf(t))){var o=n[1];"font-family"===t&&(o=a(o,s)),o&&u.push(t+":"+o)}}),delete c.style,u.length>0&&i.push("style",u.join(";")),c)i.push(E,c[E]);return{tagName:e,attribs:i}})(o,i)}(o,l,i),l.join("")}}}},ZprW:function(e,t){var n=function(){function e(e){var t=(""+e).match(p);return t?new c(u(t[1]),u(t[2]),u(t[3]),u(t[4]),u(t[5]),u(t[6]),u(t[7])):null}function t(e){return"string"==typeof e?encodeURIComponent(e):null}function n(e,t){return"string"==typeof e?encodeURI(e).replace(t,a):null}function a(e){var t=e.charCodeAt(0);return"%"+"0123456789ABCDEF".charAt(t>>4&15)+"0123456789ABCDEF".charAt(15&t)}var r=new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),o=new RegExp(r),i=/^(?:\.\.\/)*(?:\.\.$)?/;function l(e){if(null===e)return null;for(var t,n=function(e){return e.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/")}(e),a=o;(t=n.replace(a,"$1"))!=n;n=t);return n}function s(e,t){var n=e.clone(),a=t.hasScheme();a?n.setRawScheme(t.getRawScheme()):a=t.hasCredentials(),a?n.setRawCredentials(t.getRawCredentials()):a=t.hasDomain(),a?n.setRawDomain(t.getRawDomain()):a=t.hasPort();var r=t.getRawPath(),o=l(r);if(a)n.setPort(t.getPort()),o=o&&o.replace(i,"");else if(a=!!r){if(47!==o.charCodeAt(0)){var s=l(n.getRawPath()||"").replace(i,""),c=s.lastIndexOf("/")+1;o=l((c?s.substring(0,c):"")+l(r)).replace(i,"")}}else(o=o&&o.replace(i,""))!==r&&n.setRawPath(o);return a?n.setRawPath(o):a=t.hasQuery(),a?n.setRawQuery(t.getRawQuery()):a=t.hasFragment(),a&&n.setRawFragment(t.getRawFragment()),n}function c(e,t,n,a,r,o,i){this.scheme_=e,this.credentials_=t,this.domain_=n,this.port_=a,this.path_=r,this.query_=o,this.fragment_=i,this.paramCache_=null}function u(e){return"string"==typeof e&&e.length>0?e:null}c.prototype.toString=function(){var e=[];return null!==this.scheme_&&e.push(this.scheme_,":"),null!==this.domain_&&(e.push("//"),null!==this.credentials_&&e.push(this.credentials_,"@"),e.push(this.domain_),null!==this.port_&&e.push(":",this.port_.toString())),null!==this.path_&&e.push(this.path_),null!==this.query_&&e.push("?",this.query_),null!==this.fragment_&&e.push("#",this.fragment_),e.join("")},c.prototype.clone=function(){return new c(this.scheme_,this.credentials_,this.domain_,this.port_,this.path_,this.query_,this.fragment_)},c.prototype.getScheme=function(){return this.scheme_&&decodeURIComponent(this.scheme_).toLowerCase()},c.prototype.getRawScheme=function(){return this.scheme_},c.prototype.setScheme=function(e){return this.scheme_=n(e,m),this},c.prototype.setRawScheme=function(e){return this.scheme_=e||null,this},c.prototype.hasScheme=function(){return null!==this.scheme_},c.prototype.getCredentials=function(){return this.credentials_&&decodeURIComponent(this.credentials_)},c.prototype.getRawCredentials=function(){return this.credentials_},c.prototype.setCredentials=function(e){return this.credentials_=n(e,m),this},c.prototype.setRawCredentials=function(e){return this.credentials_=e||null,this},c.prototype.hasCredentials=function(){return null!==this.credentials_},c.prototype.getDomain=function(){return this.domain_&&decodeURIComponent(this.domain_)},c.prototype.getRawDomain=function(){return this.domain_},c.prototype.setDomain=function(e){return this.setRawDomain(e&&encodeURIComponent(e))},c.prototype.setRawDomain=function(e){return this.domain_=e||null,this.setRawPath(this.path_)},c.prototype.hasDomain=function(){return null!==this.domain_},c.prototype.getPort=function(){return this.port_&&decodeURIComponent(this.port_)},c.prototype.setPort=function(e){if(e){if((e=Number(e))!==(65535&e))throw new Error("Bad port number "+e);this.port_=""+e}else this.port_=null;return this},c.prototype.hasPort=function(){return null!==this.port_},c.prototype.getPath=function(){return this.path_&&decodeURIComponent(this.path_)},c.prototype.getRawPath=function(){return this.path_},c.prototype.setPath=function(e){return this.setRawPath(n(e,h))},c.prototype.setRawPath=function(e){return e?(e=String(e),this.path_=!this.domain_||/^\//.test(e)?e:"/"+e):this.path_=null,this},c.prototype.hasPath=function(){return null!==this.path_},c.prototype.getQuery=function(){return this.query_&&decodeURIComponent(this.query_).replace(/\+/g," ")},c.prototype.getRawQuery=function(){return this.query_},c.prototype.setQuery=function(e){return this.paramCache_=null,this.query_=t(e),this},c.prototype.setRawQuery=function(e){return this.paramCache_=null,this.query_=e||null,this},c.prototype.hasQuery=function(){return null!==this.query_},c.prototype.setAllParameters=function(e){if("object"==typeof e&&!(e instanceof Array)&&(e instanceof Object||"[object Array]"!==Object.prototype.toString.call(e))){var t=[],n=-1;for(var a in e){"string"==typeof(l=e[a])&&(t[++n]=a,t[++n]=l)}e=t}this.paramCache_=null;for(var r=[],o="",i=0;i<e.length;){a=e[i++];var l=e[i++];r.push(o,encodeURIComponent(a.toString())),o="&",l&&r.push("=",encodeURIComponent(l.toString()))}return this.query_=r.join(""),this},c.prototype.checkParameterCache_=function(){if(!this.paramCache_){var e=this.query_;if(e){for(var t=e.split(/[&\?]/),n=[],a=-1,r=0;r<t.length;++r){var o=t[r].match(/^([^=]*)(?:=(.*))?$/);n[++a]=decodeURIComponent(o[1]).replace(/\+/g," "),n[++a]=decodeURIComponent(o[2]||"").replace(/\+/g," ")}this.paramCache_=n}else this.paramCache_=[]}},c.prototype.setParameterValues=function(e,t){"string"==typeof t&&(t=[t]),this.checkParameterCache_();for(var n=0,a=this.paramCache_,r=[],o=0;o<a.length;o+=2)e===a[o]?n<t.length&&r.push(e,t[n++]):r.push(a[o],a[o+1]);for(;n<t.length;)r.push(e,t[n++]);return this.setAllParameters(r),this},c.prototype.removeParameter=function(e){return this.setParameterValues(e,[])},c.prototype.getAllParameters=function(){return this.checkParameterCache_(),this.paramCache_.slice(0,this.paramCache_.length)},c.prototype.getParameterValues=function(e){this.checkParameterCache_();for(var t=[],n=0;n<this.paramCache_.length;n+=2)e===this.paramCache_[n]&&t.push(this.paramCache_[n+1]);return t},c.prototype.getParameterMap=function(e){this.checkParameterCache_();for(var t={},n=0;n<this.paramCache_.length;n+=2){var a=this.paramCache_[n++],r=this.paramCache_[n++];a in t?t[a].push(r):t[a]=[r]}return t},c.prototype.getParameterValue=function(e){this.checkParameterCache_();for(var t=0;t<this.paramCache_.length;t+=2)if(e===this.paramCache_[t])return this.paramCache_[t+1];return null},c.prototype.getFragment=function(){return this.fragment_&&decodeURIComponent(this.fragment_)},c.prototype.getRawFragment=function(){return this.fragment_},c.prototype.setFragment=function(e){return this.fragment_=e?encodeURIComponent(e):null,this},c.prototype.setRawFragment=function(e){return this.fragment_=e||null,this},c.prototype.hasFragment=function(){return null!==this.fragment_};var p=new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),m=/[#\/\?@]/g,h=/[\#\?]/g;return c.parse=e,c.create=function(e,r,o,i,l,s,u){var p=new c(n(e,m),n(r,m),t(o),i>0?i.toString():null,n(l,h),null,t(u));return s&&("string"==typeof s?p.setRawQuery(s.replace(/[^?&=0-9A-Za-z_\-~.%]/g,a)):p.setAllParameters(s)),p},c.resolve=s,c.collapse_dots=l,c.utils={mimeTypeOf:function(t){var n=e(t);return/\.html$/.test(n.getPath())?"text/html":"application/javascript"},resolve:function(t,n){return t?s(e(t),e(n)).toString():""+n}},c}();"undefined"!=typeof window&&(window.URI=n);var a={atype:{NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13}};if(a.atype=a.atype,a.ATTRIBS={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onerror":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::ontouchcancel":2,"*::ontouchend":2,"*::ontouchenter":2,"*::ontouchleave":2,"*::ontouchmove":2,"*::ontouchstart":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::tabindex":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::tabindex":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,"audio::muted":0,"audio::preload":0,"audio::src":1,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::tabindex":0,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::tabindex":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"select::tabindex":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,"textarea::rows":0,"textarea::tabindex":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::src":1,"video::width":0},a.ATTRIBS=a.ATTRIBS,a.eflags={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256},a.eflags=a.eflags,a.ELEMENTS={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:4,img:2,input:2,ins:0,isindex:274,kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,var:0,video:0,wbr:2},a.ELEMENTS=a.ELEMENTS,a.ELEMENT_DOM_INTERFACES={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",center:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",footer:"HTMLElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement",var:"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"},a.ELEMENT_DOM_INTERFACES=a.ELEMENT_DOM_INTERFACES,a.ueffects={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2},a.ueffects=a.ueffects,a.URIEFFECTS={"a::href":2,"area::href":2,"audio::src":1,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1,"video::src":1},a.URIEFFECTS=a.URIEFFECTS,a.ltypes={UNSANDBOXED:2,SANDBOXED:1,DATA:0},a.ltypes=a.ltypes,a.LOADERTYPES={"a::href":2,"area::href":2,"audio::src":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1,"video::src":2},a.LOADERTYPES=a.LOADERTYPES,"undefined"!=typeof window&&(window.html4=a),"i"!=="I".toLowerCase())throw"I/i problem";var r=function(e){var t,a;"undefined"!=typeof window&&(t=window.parseCssDeclarations,a=window.sanitizeCssProperty,window.cssSchema);var r={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',apos:"'",nbsp:" "},o=/^#(\d+)$/,i=/^#x([0-9A-Fa-f]+)$/,l=/^[A-Za-z][A-za-z0-9]+$/,s="undefined"!=typeof window&&window.document?window.document.createElement("textarea"):null;function c(e,t){return function(e){if(r.hasOwnProperty(e))return r[e];var t=e.match(o);if(t)return String.fromCharCode(parseInt(t[1],10));if(t=e.match(i))return String.fromCharCode(parseInt(t[1],16));if(s&&l.test(e)){s.innerHTML="&"+e+";";var n=s.textContent;return r[e]=n,n}return"&"+e+";"}(t)}var u=/\0/g;var p=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,m=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/;function h(e){return e.replace(p,c)}var d=/&/g,f=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,g=/[<]/g,E=/>/g,T=/\"/g;function b(e){return(""+e).replace(d,"&amp;").replace(g,"&lt;").replace(E,"&gt;").replace(T,"&#34;")}function L(e){return e.replace(f,"&amp;$1").replace(g,"&lt;").replace(E,"&gt;")}var M=new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?","i"),y=3==="a,b".split(/(,)/).length,v=e.eflags.CDATA|e.eflags.RCDATA;function H(e){var t={cdata:e.cdata||e.cdata,comment:e.comment||e.comment,endDoc:e.endDoc||e.endDoc,endTag:e.endTag||e.endTag,pcdata:e.pcdata||e.pcdata,rcdata:e.rcdata||e.rcdata,startDoc:e.startDoc||e.startDoc,startTag:e.startTag||e.startTag};return function(e,n){return function(e,t,n){var a=function(e){var t=/(<\/|<\!--|<[!?]|[&<>])/g;if(e+="",y)return e.split(t);for(var n,a=[],r=0;null!==(n=t.exec(e));)a.push(e.substring(r,n.index)),a.push(n[0]),r=n.index+n[0].length;return a.push(e.substring(r)),a}(e);C(t,a,0,{noMoreGT:!1,noMoreEndComments:!1},n)}(e,t,n)}}var w={};function _(e,t,n,a,r){return function(){C(e,t,n,a,r)}}function C(t,n,a,r,o){try{var i,l,s;t.startDoc&&0==a&&t.startDoc(o);for(var c=a,u=n.length;c<u;){var p=n[c++],h=n[c];switch(p){case"&":m.test(h)?(t.pcdata&&t.pcdata("&"+h,o,w,_(t,n,c,r,o)),c++):t.pcdata&&t.pcdata("&amp;",o,w,_(t,n,c,r,o));break;case"</":(i=/^([-\w:]+)[^\'\"]*/.exec(h))?i[0].length===h.length&&">"===n[c+1]?(c+=2,s=i[1].toLowerCase(),t.endTag&&t.endTag(s,o,w,_(t,n,c,r,o))):c=A(n,c,t,o,w,r):t.pcdata&&t.pcdata("&lt;/",o,w,_(t,n,c,r,o));break;case"<":if(i=/^([-\w:]+)\s*\/?/.exec(h))if(i[0].length===h.length&&">"===n[c+1]){c+=2,s=i[1].toLowerCase(),t.startTag&&t.startTag(s,[],o,w,_(t,n,c,r,o));var d=e.ELEMENTS[s];if(d&v)c=P(n,{name:s,next:c,eflags:d},t,o,w,r)}else c=S(n,c,t,o,w,r);else t.pcdata&&t.pcdata("&lt;",o,w,_(t,n,c,r,o));break;case"\x3c!--":if(!r.noMoreEndComments){for(l=c+1;l<u&&(">"!==n[l]||!/--$/.test(n[l-1]));l++);if(l<u){if(t.comment){var f=n.slice(c,l).join("");t.comment(f.substr(0,f.length-2),o,w,_(t,n,l+1,r,o))}c=l+1}else r.noMoreEndComments=!0}r.noMoreEndComments&&t.pcdata&&t.pcdata("&lt;!--",o,w,_(t,n,c,r,o));break;case"<!":if(/^\w/.test(h)){if(!r.noMoreGT){for(l=c+1;l<u&&">"!==n[l];l++);l<u?c=l+1:r.noMoreGT=!0}r.noMoreGT&&t.pcdata&&t.pcdata("&lt;!",o,w,_(t,n,c,r,o))}else t.pcdata&&t.pcdata("&lt;!",o,w,_(t,n,c,r,o));break;case"<?":if(!r.noMoreGT){for(l=c+1;l<u&&">"!==n[l];l++);l<u?c=l+1:r.noMoreGT=!0}r.noMoreGT&&t.pcdata&&t.pcdata("&lt;?",o,w,_(t,n,c,r,o));break;case">":t.pcdata&&t.pcdata("&gt;",o,w,_(t,n,c,r,o));break;case"":break;default:t.pcdata&&t.pcdata(p,o,w,_(t,n,c,r,o))}}t.endDoc&&t.endDoc(o)}catch(e){if(e!==w)throw e}}function A(e,t,n,a,r,o){var i=x(e,t);return i?(n.endTag&&n.endTag(i.name,a,r,_(n,e,t,o,a)),i.next):e.length}function S(e,t,n,a,r,o){var i=x(e,t);return i?(n.startTag&&n.startTag(i.name,i.attrs,a,r,_(n,e,i.next,o,a)),i.eflags&v?P(e,i,n,a,r,o):i.next):e.length}var R={};function P(t,n,a,r,o,i){var l=t.length;R.hasOwnProperty(n.name)||(R[n.name]=new RegExp("^"+n.name+"(?:[\\s\\/]|$)","i"));for(var s=R[n.name],c=n.next,u=n.next+1;u<l&&("</"!==t[u-1]||!s.test(t[u]));u++);u<l&&(u-=1);var p=t.slice(c,u).join("");if(n.eflags&e.eflags.CDATA)a.cdata&&a.cdata(p,r,o,_(a,t,u,i,r));else{if(!(n.eflags&e.eflags.RCDATA))throw new Error("bug");a.rcdata&&a.rcdata(L(p),r,o,_(a,t,u,i,r))}return u}function x(t,n){var a=/^([-\w:]+)/.exec(t[n]),r={};r.name=a[1].toLowerCase(),r.eflags=e.ELEMENTS[r.name];for(var o=t[n].substr(a[0].length),i=n+1,l=t.length;i<l&&">"!==t[i];i++)o+=t[i];if(!(l<=i)){for(var s=[];""!==o;)if(a=M.exec(o)){if(a[4]&&!a[5]||a[6]&&!a[7]){for(var c=a[4]||a[6],u=!1,p=[o,t[i++]];i<l;i++){if(u){if(">"===t[i])break}else 0<=t[i].indexOf(c)&&(u=!0);p.push(t[i])}if(l<=i)break;o=p.join("");continue}var m=a[1].toLowerCase(),h=a[2]?D(a[3]):"";s.push(m,h),o=o.substr(a[0].length)}else o=o.replace(/^[\s\S][^a-z\s]*/,"");return r.attrs=s,r.next=i+1,r}}function D(e){var t=e.charCodeAt(0);return 34!==t&&39!==t||(e=e.substr(1,e.length-2)),h(e.replace(u,""))}function k(t){var n,a,r=function(e,t){a||t.push(e)};return H({startDoc:function(e){n=[],a=!1},startTag:function(r,o,i){if(!a&&e.ELEMENTS.hasOwnProperty(r)){var l=e.ELEMENTS[r];if(!(l&e.eflags.FOLDABLE)){var s=t(r,o);if(s){if("object"!=typeof s)throw new Error("tagPolicy did not return object (old API?)");if(!("attribs"in s))throw new Error("tagPolicy gave no attribs");var c,u;if(o=s.attribs,"tagName"in s?(u=s.tagName,c=e.ELEMENTS[u]):(u=r,c=l),l&e.eflags.OPTIONAL_ENDTAG){var p=n[n.length-1];!p||p.orig!==r||p.rep===u&&r===u||i.push("</",p.rep,">")}l&e.eflags.EMPTY||n.push({orig:r,rep:u}),i.push("<",u);for(var m=0,h=o.length;m<h;m+=2){var d=o[m],f=o[m+1];null!=f&&i.push(" ",d,'="',b(f),'"')}i.push(">"),l&e.eflags.EMPTY&&!(c&e.eflags.EMPTY)&&i.push("</",u,">")}else a=!(l&e.eflags.EMPTY)}}},endTag:function(t,r){if(a)a=!1;else if(e.ELEMENTS.hasOwnProperty(t)){var o=e.ELEMENTS[t];if(!(o&(e.eflags.EMPTY|e.eflags.FOLDABLE))){var i;if(o&e.eflags.OPTIONAL_ENDTAG)for(i=n.length;--i>=0;){var l=n[i].orig;if(l===t)break;if(!(e.ELEMENTS[l]&e.eflags.OPTIONAL_ENDTAG))return}else for(i=n.length;--i>=0&&n[i].orig!==t;);if(i<0)return;for(var s=n.length;--s>i;){var c=n[s].rep;e.ELEMENTS[c]&e.eflags.OPTIONAL_ENDTAG||r.push("</",c,">")}i<n.length&&(t=n[i].rep),n.length=i,r.push("</",t,">")}}},pcdata:r,rcdata:r,cdata:r,endDoc:function(e){for(;n.length;n.length--)e.push("</",n[n.length-1].rep,">")}})}var O=/^(?:https?|mailto)$/i;function I(e,t,a,r,o){if(!o)return null;try{var i=n.parse(""+e);if(i&&(!i.hasScheme()||O.test(i.getScheme()))){var l=o(i,t,a,r);return l?l.toString():null}}catch(e){return null}return null}function N(e,t,n,a,r){if(n||e(t+" removed",{change:"removed",tagName:t}),a!==r){var o="changed";a&&!r?o="removed":!a&&r&&(o="added"),e(t+"."+n+" "+o,{change:o,tagName:t,attribName:n,oldValue:a,newValue:r})}}function F(e,t,n){var a;return a=t+"::"+n,e.hasOwnProperty(a)?e[a]:(a="*::"+n,e.hasOwnProperty(a)?e[a]:void 0)}function U(t,n){return F(e.LOADERTYPES,t,n)}function z(t,n){return F(e.URIEFFECTS,t,n)}function j(n,r,o,i,l){for(var s=0;s<r.length;s+=2){var c,u=r[s],p=r[s+1],m=p,h=null;if(c=n+"::"+u,(e.ATTRIBS.hasOwnProperty(c)||(c="*::"+u,e.ATTRIBS.hasOwnProperty(c)))&&(h=e.ATTRIBS[c]),null!==h)switch(h){case e.atype.NONE:break;case e.atype.SCRIPT:p=null,l&&N(l,n,u,m,p);break;case e.atype.STYLE:if(void 0===t){p=null,l&&N(l,n,u,m,p);break}var d=[];t(p,{declaration:function(t,n){var r=t.toLowerCase();a(r,n,o?function(t){return I(t,e.ueffects.SAME_DOCUMENT,e.ltypes.SANDBOXED,{TYPE:"CSS",CSS_PROP:r},o)}:null),n.length&&d.push(r+": "+n.join(" "))}}),p=d.length>0?d.join(" ; "):null,l&&N(l,n,u,m,p);break;case e.atype.ID:case e.atype.IDREF:case e.atype.IDREFS:case e.atype.GLOBAL_NAME:case e.atype.LOCAL_NAME:case e.atype.CLASSES:p=i?i(p):p,l&&N(l,n,u,m,p);break;case e.atype.URI:p=I(p,z(n,u),U(n,u),{TYPE:"MARKUP",XML_ATTR:u,XML_TAG:n},o),l&&N(l,n,u,m,p);break;case e.atype.URI_FRAGMENT:p&&"#"===p.charAt(0)?(p=p.substring(1),null!=(p=i?i(p):p)&&(p="#"+p)):p=null,l&&N(l,n,u,m,p);break;default:p=null,l&&N(l,n,u,m,p)}else p=null,l&&N(l,n,u,m,p);r[s+1]=p}return r}function q(t,n,a){return function(r,o){if(!(e.ELEMENTS[r]&e.eflags.UNSAFE))return{attribs:j(r,o,t,n,a)};a&&N(a,r,void 0,void 0,void 0)}}function B(e,t){var n=[];return k(t)(e,n),n.join("")}var G={};return G.escapeAttrib=G.escapeAttrib=b,G.makeHtmlSanitizer=G.makeHtmlSanitizer=k,G.makeSaxParser=G.makeSaxParser=H,G.makeTagPolicy=G.makeTagPolicy=q,G.normalizeRCData=G.normalizeRCData=L,G.sanitize=G.sanitize=function(e,t,n,a){return B(e,q(t,n,a))},G.sanitizeAttribs=G.sanitizeAttribs=j,G.sanitizeWithPolicy=G.sanitizeWithPolicy=B,G.unescapeEntities=G.unescapeEntities=h,G}(a),o=r.sanitize;"undefined"!=typeof window&&(window.html=r,window.html_sanitize=o)}});