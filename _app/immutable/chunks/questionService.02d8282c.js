import{S as F,i as K,s as R,x as O,y as w,e as M,z as T,A as j,b as U,M as y,N as q,d as h,f as G,g as b,h as H,B as N,O as P,Q as L,P as V,J as W,K as X,R as E,T as Y,v as Z,w as x,C as $,D as ss,E as es,F as ts}from"./index.6fe3bec1.js";import{S as B,d as Q,f as ns}from"./navigation.8663ace7.js";function os(t){let s;const n=t[11].default,a=$(n,t,t[13],null);return{c(){a&&a.c()},l(c){a&&a.l(c)},m(c,i){a&&a.m(c,i),s=!0},p(c,i){a&&a.p&&(!s||i&8192)&&ss(a,n,c,c[13],s?ts(n,c[13],i,null):es(c[13]),null)},i(c){s||(b(a,c),s=!0)},o(c){h(a,c),s=!1},d(c){a&&a.d(c)}}}function as(t){let s,n,a;const c=[{tag:t[3]},{use:[t[8],...t[0]]},{class:Q({[t[1]]:!0,[t[6]]:!0,...t[5]})},t[7],t[9]];var i=t[2];function f(e){let r={$$slots:{default:[os]},$$scope:{ctx:e}};for(let u=0;u<c.length;u+=1)r=E(r,c[u]);return{props:r}}return i&&(s=O(i,f(t)),t[12](s)),{c(){s&&w(s.$$.fragment),n=M()},l(e){s&&T(s.$$.fragment,e),n=M()},m(e,r){s&&j(s,e,r),U(e,n,r),a=!0},p(e,[r]){const u=r&1003?y(c,[r&8&&{tag:e[3]},r&257&&{use:[e[8],...e[0]]},r&98&&{class:Q({[e[1]]:!0,[e[6]]:!0,...e[5]})},r&128&&q(e[7]),r&512&&q(e[9])]):{};if(r&8192&&(u.$$scope={dirty:r,ctx:e}),r&4&&i!==(i=e[2])){if(s){Z();const m=s;h(m.$$.fragment,1,0,()=>{N(m,1)}),G()}i?(s=O(i,f(e)),e[12](s),w(s.$$.fragment),b(s.$$.fragment,1),j(s,n.parentNode,n)):s=null}else i&&s.$set(u)},i(e){a||(s&&b(s.$$.fragment,e),a=!0)},o(e){s&&h(s.$$.fragment,e),a=!1},d(e){t[12](null),e&&H(n),s&&N(s,e)}}}const l={component:B,tag:"div",class:"",classMap:{},contexts:{},props:{}};function cs(t,s,n){const a=["use","class","component","tag","getElement"];let c=P(s,a),{$$slots:i={},$$scope:f}=s,{use:e=[]}=s,{class:r=""}=s,u;const m=l.class,g={},S=[],_=l.contexts,D=l.props;let{component:p=l.component}=s,{tag:C=p===B?l.tag:void 0}=s;Object.entries(l.classMap).forEach(([o,v])=>{const d=L(v);d&&"subscribe"in d&&S.push(d.subscribe(z=>{n(5,g[o]=z,g)}))});const I=ns(V());for(let o in _)_.hasOwnProperty(o)&&W(o,_[o]);X(()=>{for(const o of S)o()});function J(){return u.getElement()}function k(o){x[o?"unshift":"push"](()=>{u=o,n(4,u)})}return t.$$set=o=>{s=E(E({},s),Y(o)),n(9,c=P(s,a)),"use"in o&&n(0,e=o.use),"class"in o&&n(1,r=o.class),"component"in o&&n(2,p=o.component),"tag"in o&&n(3,C=o.tag),"$$scope"in o&&n(13,f=o.$$scope)},[e,r,p,C,u,g,m,D,I,c,J,i,k,f]}class rs extends F{constructor(s){super(),K(this,s,cs,as,R,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const A=Object.assign({},l);function ms(t){return new Proxy(rs,{construct:function(s,n){return Object.assign(l,A,t),new s(...n)},get:function(s,n){return Object.assign(l,A,t),s[n]}})}function is(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}function gs(t){const s={...t,id:is()},n=us();return n.push(s),localStorage.setItem("questions",JSON.stringify(n)),s}function us(){const t=localStorage.getItem("questions");return t?JSON.parse(t):[]}export{gs as a,ms as c,us as g};