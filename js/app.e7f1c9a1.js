(function(){"use strict";var e={937:function(e,t,n){var r=n(3751),s=n(641),o=n(33);const u={id:"app"},i={class:"chat-container"};function a(e,t,n,a,c,p){return(0,s.uX)(),(0,s.CE)("div",u,[t[4]||(t[4]=(0,s.Lk)("h1",null,"Chat with Our Bot",-1)),(0,s.Lk)("div",i,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(c.messages,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:(0,o.C4)(["message",e.sender])},[(0,s.Lk)("p",null,(0,o.v_)(e.text),1)],2)))),128))]),(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>p.sendMessage&&p.sendMessage(...e)),["prevent"]))},[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>c.userInput=e),placeholder:"Type your message...",onKeyup:t[1]||(t[1]=(0,r.jR)(((...e)=>p.sendMessage&&p.sendMessage(...e)),["enter"])),autofocus:""},null,544),[[r.Jo,c.userInput]]),t[3]||(t[3]=(0,s.Lk)("button",{type:"submit"},"Send",-1))],32)])}n(4114),n(1454);var c=n(4335),p={name:"App",data(){return{userInput:"",messages:[]}},methods:{async sendMessage(){if(""===this.userInput.trim())return;this.messages.push({text:this.userInput,sender:"user"});const e=this.messages.slice(-39).map((e=>({role:"user"===e.sender?"user":"assistant",content:e.text})));try{const t=await c.A.post("https://ifea39qb13.execute-api.us-east-1.amazonaws.com/prod/aichat",{messages:JSON.stringify(e)});console.log(t),this.messages.push({text:t.data.body.reply,sender:"bot"})}catch(t){console.error(t),this.messages.push({text:"Sorry, something went wrong.",sender:"bot"})}this.userInput=""}}},f=n(6262);const l=(0,f.A)(p,[["render",a]]);var d=l;(0,r.Ef)(d).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,o){if(!r){var u=1/0;for(p=0;p<e.length;p++){r=e[p][0],s=e[p][1],o=e[p][2];for(var i=!0,a=0;a<r.length;a++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(i=!1,o<u&&(u=o));if(i){e.splice(p--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,s,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,u=r[0],i=r[1],a=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(a)var p=a(n)}for(t&&t(r);c<u.length;c++)o=u[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},r=self["webpackChunkchatbot_ui"]=self["webpackChunkchatbot_ui"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(937)}));r=n.O(r)})();
//# sourceMappingURL=app.e7f1c9a1.js.map