(function(){"use strict";var o={5545:function(o,t,n){var e=n(3751),r=n(641),s=n(33);const i={class:"container p-3"},a={class:"input-group mb-5"},u={class:"list-group"},c={class:"m-0"},d=["onClick"];function l(o,t,n,l,f,p){return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("div",a,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>f.newTodo=o),onKeyup:t[1]||(t[1]=(0,e.jR)(((...o)=>p.addTodo&&p.addTodo(...o)),["enter"])),placeholder:"新しいTodoを入力",class:"form-control"},null,544),[[e.Jo,f.newTodo]]),(0,r.Lk)("button",{class:"btn btn-outline-secondary",onClick:t[2]||(t[2]=(...o)=>p.addTodo&&p.addTodo(...o))},t[3]||(t[3]=[(0,r.Lk)("i",{class:"bi bi-search"},null,-1)]))]),(0,r.Lk)("ul",u,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(f.todos,((o,t)=>((0,r.uX)(),(0,r.CE)("li",{key:t,class:"list-group-item d-flex align-items-center px-4"},[(0,r.Lk)("p",c,(0,s.v_)(o.name),1),(0,r.Lk)("button",{onClick:o=>p.removeTodo(t),class:"btn btn-sm btn-outline-danger ms-auto"}," 削除 ",8,d)])))),128))])])}n(4114);var f={data(){return{newTodo:"",todos:[]}},created(){const o=localStorage.getItem("todos");o&&(this.todos=JSON.parse(o))},methods:{addTodo(){this.newTodo.trim()&&(this.todos.push({name:this.newTodo}),this.newTodo="",this.saveTodos())},removeTodo(o){this.todos.splice(o,1),this.saveTodos()},saveTodos(){localStorage.setItem("todos",JSON.stringify(this.todos))}}},p=n(6262);const v=(0,p.A)(f,[["render",l]]);var h=v;(0,e.Ef)(h).mount("#app")}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var s=t[e]={exports:{}};return o[e].call(s.exports,s,s.exports,n),s.exports}n.m=o,function(){var o=[];n.O=function(t,e,r,s){if(!e){var i=1/0;for(d=0;d<o.length;d++){e=o[d][0],r=o[d][1],s=o[d][2];for(var a=!0,u=0;u<e.length;u++)(!1&s||i>=s)&&Object.keys(n.O).every((function(o){return n.O[o](e[u])}))?e.splice(u--,1):(a=!1,s<i&&(i=s));if(a){o.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=o.length;d>0&&o[d-1][2]>s;d--)o[d]=o[d-1];o[d]=[e,r,s]}}(),function(){n.d=function(o,t){for(var e in t)n.o(t,e)&&!n.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={524:0};n.O.j=function(t){return 0===o[t]};var t=function(t,e){var r,s,i=e[0],a=e[1],u=e[2],c=0;if(i.some((function(t){return 0!==o[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var d=u(n)}for(t&&t(e);c<i.length;c++)s=i[c],n.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return n.O(d)},e=self["webpackChunktodo3"]=self["webpackChunktodo3"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(5545)}));e=n.O(e)})();
//# sourceMappingURL=app.a9fc974e.js.map