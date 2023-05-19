var ie=Object.defineProperty;var fe=(n,e,t)=>e in n?ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var R=(n,e,t)=>(fe(n,typeof e!="symbol"?e+"":e,t),t);import{S as z,i as F,s as G,C as Y,R as B,k as A,l as I,m as w,h as _,U as M,b as p,V as N,D as Z,E as y,F as x,M as ee,W as te,g as m,d as $,X as se,O as Q,P as le,T as ne,w as ae,J as W,a as O,y as v,c as V,z as b,n as H,G as re,A as k,B as E,q as C,r as P,H as T,u as oe,e as X,v as de,f as _e,a7 as me}from"../chunks/index.6fe3bec1.js";import{c as U,g as ge}from"../chunks/questionService.f0f48084.js";import{d as S,u as ue,f as ce,B as J,C as L}from"../chunks/Button.f0c1bda7.js";import"../chunks/singletons.828bb3d1.js";class he{constructor(e,t,l){this.id=e,this.title=t,this.answer=l}}class D extends he{constructor(t,l,s,r){super(t,l,s);R(this,"type","multipleChoice");this.id=t,this.title=l,this.answer=s,this.choices=r}validate(t){return t===this.answer}static fromObject(t){return new D(t.id,t.title,t.answer,t.choices)}}function $e(n){let e=n.length,t;for(;e!=0;)t=Math.floor(Math.random()*e),e--,[n[e],n[t]]=[n[t],n[e]];return n}function pe(n){let e,t,l,s,r,a;const c=n[9].default,u=Y(c,n,n[8],null);let d=[{class:t=S({[n[1]]:!0,"mdc-card":!0,"mdc-card--outlined":n[2]==="outlined","smui-card--padded":n[3]})},n[6]],i={};for(let o=0;o<d.length;o+=1)i=B(i,d[o]);return{c(){e=A("div"),u&&u.c(),this.h()},l(o){e=I(o,"DIV",{class:!0});var f=w(e);u&&u.l(f),f.forEach(_),this.h()},h(){M(e,i)},m(o,f){p(o,e,f),u&&u.m(e,null),n[10](e),s=!0,r||(a=[N(l=ue.call(null,e,n[0])),N(n[5].call(null,e))],r=!0)},p(o,[f]){u&&u.p&&(!s||f&256)&&Z(u,c,o,o[8],s?x(c,o[8],f,null):y(o[8]),null),M(e,i=ee(d,[(!s||f&14&&t!==(t=S({[o[1]]:!0,"mdc-card":!0,"mdc-card--outlined":o[2]==="outlined","smui-card--padded":o[3]})))&&{class:t},f&64&&o[6]])),l&&te(l.update)&&f&1&&l.update.call(null,o[0])},i(o){s||(m(u,o),s=!0)},o(o){$(u,o),s=!1},d(o){o&&_(e),u&&u.d(o),n[10](null),r=!1,se(a)}}}function ve(n,e,t){const l=["use","class","variant","padded","getElement"];let s=Q(e,l),{$$slots:r={},$$scope:a}=e;const c=ce(le());let{use:u=[]}=e,{class:d=""}=e,{variant:i="raised"}=e,{padded:o=!1}=e,f;function q(){return f}function g(h){ae[h?"unshift":"push"](()=>{f=h,t(4,f)})}return n.$$set=h=>{e=B(B({},e),ne(h)),t(6,s=Q(e,l)),"use"in h&&t(0,u=h.use),"class"in h&&t(1,d=h.class),"variant"in h&&t(2,i=h.variant),"padded"in h&&t(3,o=h.padded),"$$scope"in h&&t(8,a=h.$$scope)},[u,d,i,o,f,c,s,q,a,r,g]}class be extends z{constructor(e){super(),F(this,e,ve,pe,G,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const ke=U({class:"smui-card__content",tag:"div"});U({class:"mdc-card__media-content",tag:"div"});function Ee(n){let e,t,l,s,r,a;const c=n[8].default,u=Y(c,n,n[7],null);let d=[{class:t=S({[n[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":n[2]})},n[5]],i={};for(let o=0;o<d.length;o+=1)i=B(i,d[o]);return{c(){e=A("div"),u&&u.c(),this.h()},l(o){e=I(o,"DIV",{class:!0});var f=w(e);u&&u.l(f),f.forEach(_),this.h()},h(){M(e,i)},m(o,f){p(o,e,f),u&&u.m(e,null),n[9](e),s=!0,r||(a=[N(l=ue.call(null,e,n[0])),N(n[4].call(null,e))],r=!0)},p(o,[f]){u&&u.p&&(!s||f&128)&&Z(u,c,o,o[7],s?x(c,o[7],f,null):y(o[7]),null),M(e,i=ee(d,[(!s||f&6&&t!==(t=S({[o[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":o[2]})))&&{class:t},f&32&&o[5]])),l&&te(l.update)&&f&1&&l.update.call(null,o[0])},i(o){s||(m(u,o),s=!0)},o(o){$(u,o),s=!1},d(o){o&&_(e),u&&u.d(o),n[9](null),r=!1,se(a)}}}function Be(n,e,t){const l=["use","class","fullBleed","getElement"];let s=Q(e,l),{$$slots:r={},$$scope:a}=e;const c=ce(le());let{use:u=[]}=e,{class:d=""}=e,{fullBleed:i=!1}=e,o;W("SMUI:button:context","card:action"),W("SMUI:icon-button:context","card:action");function f(){return o}function q(g){ae[g?"unshift":"push"](()=>{o=g,t(3,o)})}return n.$$set=g=>{e=B(B({},e),ne(g)),t(5,s=Q(e,l)),"use"in g&&t(0,u=g.use),"class"in g&&t(1,d=g.class),"fullBleed"in g&&t(2,i=g.fullBleed),"$$scope"in g&&t(7,a=g.$$scope)},[u,d,i,o,c,s,f,a,r,q]}class Ae extends z{constructor(e){super(),F(this,e,Be,Ee,G,{use:0,class:1,fullBleed:2,getElement:6})}get getElement(){return this.$$.ctx[6]}}U({class:"mdc-card__action-buttons",tag:"div"});U({class:"mdc-card__action-icons",tag:"div"});function j(n,e,t){const l=n.slice();return l[8]=e[t],l[10]=t,l}function Ie(n){let e,t;return{c(){e=A("div"),t=C("Não existem perguntas. Por favor adicionar."),this.h()},l(l){e=I(l,"DIV",{class:!0});var s=w(e);t=P(s,"Não existem perguntas. Por favor adicionar."),s.forEach(_),this.h()},h(){H(e,"class","svelte-ddw9ke")},m(l,s){p(l,e,s),re(e,t)},p:T,i:T,o:T,d(l){l&&_(e)}}}function we(n){let e,t,l,s,r;return t=new be({props:{$$slots:{default:[Qe]},$$scope:{ctx:n}}}),s=new J({props:{$$slots:{default:[De]},$$scope:{ctx:n}}}),s.$on("click",n[5]),{c(){e=A("div"),v(t.$$.fragment),l=O(),v(s.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var c=w(e);b(t.$$.fragment,c),c.forEach(_),l=V(a),b(s.$$.fragment,a),this.h()},h(){H(e,"class","card-container svelte-ddw9ke")},m(a,c){p(a,e,c),k(t,e,null),p(a,l,c),k(s,a,c),r=!0},p(a,c){const u={};c&2055&&(u.$$scope={dirty:c,ctx:a}),t.$set(u);const d={};c&2048&&(d.$$scope={dirty:c,ctx:a}),s.$set(d)},i(a){r||(m(t.$$.fragment,a),m(s.$$.fragment,a),r=!0)},o(a){$(t.$$.fragment,a),$(s.$$.fragment,a),r=!1},d(a){a&&_(e),E(t),a&&_(l),E(s,a)}}}function Ce(n){let e=n[0].title+"",t;return{c(){t=C(e)},l(l){t=P(l,e)},m(l,s){p(l,t,s)},p(l,s){s&1&&e!==(e=l[0].title+"")&&oe(t,e)},d(l){l&&_(t)}}}function Pe(n){let e=n[8]+"",t;return{c(){t=C(e)},l(l){t=P(l,e)},m(l,s){p(l,t,s)},p(l,s){s&1&&e!==(e=l[8]+"")&&oe(t,e)},d(l){l&&_(t)}}}function Me(n){let e,t,l;return e=new L({props:{$$slots:{default:[Pe]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment),t=O()},l(s){b(e.$$.fragment,s),t=V(s)},m(s,r){k(e,s,r),p(s,t,r),l=!0},p(s,r){const a={};r&2049&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){l||(m(e.$$.fragment,s),l=!0)},o(s){$(e.$$.fragment,s),l=!1},d(s){E(e,s),s&&_(t)}}}function K(n){let e,t;function l(){return n[6](n[10])}return e=new J({props:{variant:n[1]===n[10]?"raised":void 0,class:(n[2]&&n[1]===n[10]&&n[0].validate(n[1])?"right":"")+(n[2]&&n[1]===n[10]&&!n[0].validate(n[1])?"wrong":"")+(n[2]&&n[1]!==n[10]&&n[0].validate(n[10])?"correctAnswer":""),$$slots:{default:[Me]},$$scope:{ctx:n}}}),e.$on("click",l),{c(){v(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,r){k(e,s,r),t=!0},p(s,r){n=s;const a={};r&2&&(a.variant=n[1]===n[10]?"raised":void 0),r&7&&(a.class=(n[2]&&n[1]===n[10]&&n[0].validate(n[1])?"right":"")+(n[2]&&n[1]===n[10]&&!n[0].validate(n[1])?"wrong":"")+(n[2]&&n[1]!==n[10]&&n[0].validate(n[10])?"correctAnswer":"")),r&2049&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function Ne(n){let e,t,l=n[0].choices,s=[];for(let a=0;a<l.length;a+=1)s[a]=K(j(n,l,a));const r=a=>$(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=X()},l(a){for(let c=0;c<s.length;c+=1)s[c].l(a);e=X()},m(a,c){for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(a,c);p(a,e,c),t=!0},p(a,c){if(c&23){l=a[0].choices;let u;for(u=0;u<l.length;u+=1){const d=j(a,l,u);s[u]?(s[u].p(d,c),m(s[u],1)):(s[u]=K(d),s[u].c(),m(s[u],1),s[u].m(e.parentNode,e))}for(de(),u=l.length;u<s.length;u+=1)r(u);_e()}},i(a){if(!t){for(let c=0;c<l.length;c+=1)m(s[c]);t=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);t=!1},d(a){me(s,a),a&&_(e)}}}function Qe(n){let e,t,l,s;return e=new ke({props:{$$slots:{default:[Ce]},$$scope:{ctx:n}}}),l=new Ae({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment),t=O(),v(l.$$.fragment)},l(r){b(e.$$.fragment,r),t=V(r),b(l.$$.fragment,r)},m(r,a){k(e,r,a),p(r,t,a),k(l,r,a),s=!0},p(r,a){const c={};a&2049&&(c.$$scope={dirty:a,ctx:r}),e.$set(c);const u={};a&2055&&(u.$$scope={dirty:a,ctx:r}),l.$set(u)},i(r){s||(m(e.$$.fragment,r),m(l.$$.fragment,r),s=!0)},o(r){$(e.$$.fragment,r),$(l.$$.fragment,r),s=!1},d(r){E(e,r),r&&_(t),E(l,r)}}}function Se(n){let e;return{c(){e=C("Próxima pergunta")},l(t){e=P(t,"Próxima pergunta")},m(t,l){p(t,e,l)},d(t){t&&_(e)}}}function De(n){let e,t;return e=new L({props:{$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,s){k(e,l,s),t=!0},p(l,s){const r={};s&2048&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){$(e.$$.fragment,l),t=!1},d(l){E(e,l)}}}function Oe(n){let e;return{c(){e=C("Back")},l(t){e=P(t,"Back")},m(t,l){p(t,e,l)},d(t){t&&_(e)}}}function Ve(n){let e,t;return e=new L({props:{$$slots:{default:[Oe]},$$scope:{ctx:n}}}),{c(){v(e.$$.fragment)},l(l){b(e.$$.fragment,l)},m(l,s){k(e,l,s),t=!0},p(l,s){const r={};s&2048&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){$(e.$$.fragment,l),t=!1},d(l){E(e,l)}}}function Ue(n){let e,t,l,s,r,a;const c=[we,Ie],u=[];function d(i,o){return i[3].length>0?0:1}return t=d(n),l=u[t]=c[t](n),r=new J({props:{href:"../",variant:"raised",$$slots:{default:[Ve]},$$scope:{ctx:n}}}),{c(){e=A("section"),l.c(),s=O(),v(r.$$.fragment),this.h()},l(i){e=I(i,"SECTION",{class:!0});var o=w(e);l.l(o),s=V(o),b(r.$$.fragment,o),o.forEach(_),this.h()},h(){H(e,"class","svelte-ddw9ke")},m(i,o){p(i,e,o),u[t].m(e,null),re(e,s),k(r,e,null),a=!0},p(i,[o]){l.p(i,o);const f={};o&2048&&(f.$$scope={dirty:o,ctx:i}),r.$set(f)},i(i){a||(m(l),m(r.$$.fragment,i),a=!0)},o(i){$(l),$(r.$$.fragment,i),a=!1},d(i){i&&_(e),u[t].d(),E(r)}}}function qe(n,e,t){const l=$e(ge());let s=0,r;l[s]&&(r=D.fromObject(l[s]));let a=null,c=!1;function u(o){t(1,a=o),t(2,c=!0)}function d(){t(1,a=null),t(2,c=!1),console.log(c),s+1===l.length?s=0:s++,t(0,r=D.fromObject(l[s]))}return[r,a,c,l,u,d,o=>u(o)]}class Je extends z{constructor(e){super(),F(this,e,qe,Ue,G,{})}}export{Je as component};
