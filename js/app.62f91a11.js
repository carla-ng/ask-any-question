(function(e){function t(t){for(var r,c,u=t[0],s=t[1],a=t[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ask-any-question/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1345:function(e,t,n){},"4eb8":function(e,t,n){"use strict";n("fd3d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,i,c){var u=Object(r["j"])("Indecision");return Object(r["g"])(),Object(r["b"])(u)}var i=function(e){return Object(r["i"])("data-v-75180d0e"),e=e(),Object(r["h"])(),e},c={class:"indecision-container"},u=i((function(){return Object(r["e"])("p",{class:"instructions"},[Object(r["f"])(" Write any question you want the answer to! "),Object(r["e"])("br"),Object(r["f"])(" (Possible answers: yes, no, maybe) "),Object(r["e"])("br"),Object(r["f"])(" Remember to end your question with a question mark (?) ")],-1)})),s={class:"question-answer-container"},a={key:0},l=["src"];function d(e,t,n,o,i,d){return Object(r["g"])(),Object(r["d"])("div",c,[u,Object(r["m"])(Object(r["e"])("input",{type:"text",placeholder:"Ask me a question","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.question=e})},null,512),[[r["l"],i.question]]),Object(r["e"])("div",s,[i.isValidQuestion?(Object(r["g"])(),Object(r["d"])("div",a,[Object(r["e"])("h2",null,Object(r["k"])(i.question),1),Object(r["e"])("h1",null,Object(r["k"])(i.answer),1)])):Object(r["c"])("",!0)]),i.img?(Object(r["g"])(),Object(r["d"])("img",{key:0,src:i.img,alt:"bg"},null,8,l)):Object(r["c"])("",!0)])}var f=n("1da1"),b=(n("96cf"),n("d3b7"),n("caad"),n("2532"),{data:function(){return{question:null,answer:null,img:null,isValidQuestion:!1}},methods:{getAnswer:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.answer="Thinking...",t.next=3,fetch("https://yesno.wtf/api").then((function(e){return e.json()}));case 3:n=t.sent,r=n.answer,o=n.image,e.answer=r,e.img=o;case 8:case"end":return t.stop()}}),t)})))()}},watch:{question:function(e,t){this.isValidQuestion=!1,e.includes("?")&&(this.isValidQuestion=!0,this.getAnswer())}}}),p=(n("d468"),n("6b0d")),j=n.n(p);const O=j()(b,[["render",d],["__scopeId","data-v-75180d0e"]]);var h=O,v={name:"App",components:{Indecision:h}};n("4eb8");const g=j()(v,[["render",o]]);var w=g;n("90c2");Object(r["a"])(w).mount("#app")},"90c2":function(e,t,n){},d468:function(e,t,n){"use strict";n("1345")},fd3d:function(e,t,n){}});
//# sourceMappingURL=app.62f91a11.js.map