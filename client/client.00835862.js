function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function c(e,t,n,r,o,s,i){const c=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(c){const o=a(t,n,r,i);e.p(o,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function f(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function y(){return $(" ")}function v(){return $("")}function b(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e){return function(t){return t.preventDefault(),e.call(this,t)}}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:w(e,r,t[r])}function S(e){return Array.from(e.childNodes)}function x(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const s=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||s.push(e.name)}for(let e=0;e<s.length;e++)o.removeAttribute(s[e]);return e.splice(r,1)[0]}}return r?g(t):m(t)}function A(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return $(t)}function T(e){return A(e," ")}function P(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}let L,I;function N(){if(void 0===L){L=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){L=!0}}return L}function O(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=N();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=b(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=b(n.contentWindow,"resize",t)}),f(e,n),()=>{(r||o&&n.contentWindow)&&o(),p(n)}}function k(e,t=document.body){return Array.from(t.querySelectorAll(e))}class C{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)d(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}function U(e){I=e}function j(){if(!I)throw new Error("Function called outside component initialization");return I}function M(e){j().$$.on_mount.push(e)}function D(e){j().$$.after_update.push(e)}function H(e){j().$$.on_destroy.push(e)}const q=[],G=[],B=[],J=[],z=Promise.resolve();let K=!1;function V(e){B.push(e)}let F=!1;const W=new Set;function Y(){if(!F){F=!0;do{for(let e=0;e<q.length;e+=1){const t=q[e];U(t),Q(t.$$)}for(U(null),q.length=0;G.length;)G.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];W.has(t)||(W.add(t),t())}B.length=0}while(q.length);for(;J.length;)J.pop()();K=!1,F=!1,W.clear()}}function Q(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const X=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||o(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push((()=>{X.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function oe(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function se(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function ae(e,t){e&&e.l(t)}function ce(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||V((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(V)}function le(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(q.push(e),K||(K=!0,z.then(Y)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(t,n,s,i,a,c,l=[-1]){const u=I;U(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),d&&ue(t,e)),n})):[],f.update(),d=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const e=S(n.target);f.fragment&&f.fragment.l(e),e.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor,n.customElement),Y()}U(u)}class de{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pe=[];function he(t,n=e){let r;const o=[];function s(e){if(i(t,e)&&(t=e,r)){const e=!pe.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),pe.push(n,t)}if(e){for(let e=0;e<pe.length;e+=2)pe[e][0](pe[e+1]);pe.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.push(c),1===o.length&&(r=n(s)||e),i(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const me={};var ge={owner:"odanado",repo:"upptime",sites:[{name:"odan.dev",url:"https://odan.dev"},{name:"blog.odan.dev",url:"https://blog.odan.dev"}],path:"https://odanado.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function $e(t){let n,r,o,s,i;return{c(){n=m("nav"),r=m("div"),o=y(),s=m("ul"),i=y(),this.h()},l(e){n=x(e,"NAV",{class:!0});var t=S(n);r=x(t,"DIV",{class:!0});var a=S(r);o=T(a),s=x(a,"UL",{class:!0});var c=S(s);i=T(c),c.forEach(p),a.forEach(p),t.forEach(p),this.h()},h(){w(s,"class","svelte-a08hsz"),w(r,"class","container svelte-a08hsz"),w(n,"class","svelte-a08hsz")},m(e,t){d(e,n,t),f(n,r),f(r,o),f(r,s),f(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&p(n)}}}function ye(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class ve extends de{constructor(e){super(),fe(this,e,ye,$e,i,{segment:0})}}var be={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function _e(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function we(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ee(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=be[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function p(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(f,o.index),f=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+_e(we(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=Ee(_e(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+we(o[8])+'" alt="'+we(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+we(o[11]||u[r.toLowerCase()])+'">'),n=p()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+Ee(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+we(o[16])+"</code>":(o[17]||o[1])&&(n=d(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+p()).replace(/^\n+|\n+$/g,"")}function Se(t){let n;return{c(){n=m("link"),this.h()},l(e){n=x(e,"LINK",{rel:!0,href:!0}),this.h()},h(){w(n,"rel","stylesheet"),w(n,"href",`${ge.path}/themes/light.css`)},m(e,t){d(e,n,t)},p:e,d(e){e&&p(n)}}}function xe(t){let n,r,o,s,i,l,u,h,g,$,b,_,E,A,P,R,L,I,N=Ee(ge.i18n.footer.replace(/\$REPO/,`https://github.com/${ge.owner}/${ge.repo}`))+"";let O=Se(t),U=ge["status-website"].css&&function(t){let n,r,o=`<style>${ge["status-website"].css}</style>`;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){n=new C(r)},m(e,t){n.m(o,e,t),d(e,r,t)},p:e,d(e){e&&p(r),e&&n.d()}}}(),j=ge["status-website"].js&&function(t){let n,r,o=`<script>${ge["status-website"].js}<\/script>`;return{c(){r=v(),this.h()},l(e){r=v(),this.h()},h(){n=new C(r)},m(e,t){n.m(o,e,t),d(e,r,t)},p:e,d(e){e&&p(r),e&&n.d()}}}();_=new ve({props:{segment:t[0]}});const M=t[2].default,D=function(e,t,n,r){if(e){const o=a(e,t,n,r);return e[0](o)}}(M,t,t[1],null);return{c(){n=v(),O.c(),r=m("link"),o=m("link"),s=m("link"),i=v(),l=v(),u=v(),U&&U.c(),h=v(),j&&j.c(),g=v(),$=y(),b=y(),ie(_.$$.fragment),E=y(),A=m("main"),D&&D.c(),P=y(),R=m("footer"),L=m("p"),this.h()},l(e){const t=k('[data-svelte="svelte-ri9y7q"]',document.head);n=v(),O.l(t),r=x(t,"LINK",{rel:!0,href:!0}),o=x(t,"LINK",{rel:!0,type:!0,href:!0}),s=x(t,"LINK",{rel:!0,type:!0,href:!0}),i=v(),l=v(),u=v(),U&&U.l(t),h=v(),j&&j.l(t),g=v(),t.forEach(p),$=T(e),b=T(e),ae(_.$$.fragment,e),E=T(e),A=x(e,"MAIN",{class:!0});var a=S(A);D&&D.l(a),a.forEach(p),P=T(e),R=x(e,"FOOTER",{class:!0});var c=S(R);L=x(c,"P",{}),S(L).forEach(p),c.forEach(p),this.h()},h(){w(r,"rel","stylesheet"),w(r,"href",`${ge.path}/global.css`),w(o,"rel","icon"),w(o,"type","image/svg"),w(o,"href","https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),w(s,"rel","icon"),w(s,"type","image/png"),w(s,"href","/logo-192.png"),w(A,"class","container"),w(R,"class","svelte-jbr799")},m(e,t){f(document.head,n),O.m(document.head,null),f(document.head,r),f(document.head,o),f(document.head,s),f(document.head,i),f(document.head,l),f(document.head,u),U&&U.m(document.head,null),f(document.head,h),j&&j.m(document.head,null),f(document.head,g),d(e,$,t),d(e,b,t),ce(_,e,t),d(e,E,t),d(e,A,t),D&&D.m(A,null),d(e,P,t),d(e,R,t),f(R,L),L.innerHTML=N,I=!0},p(e,[t]){O.p(e,t),ge["status-website"].css&&U.p(e,t),ge["status-website"].js&&j.p(e,t);const n={};1&t&&(n.segment=e[0]),_.$set(n),D&&D.p&&2&t&&c(D,M,e,e[1],t,null,null)},i(e){I||(ne(_.$$.fragment,e),ne(D,e),I=!0)},o(e){re(_.$$.fragment,e),re(D,e),I=!1},d(e){p(n),O.d(e),p(r),p(o),p(s),p(i),p(l),p(u),U&&U.d(e),p(h),j&&j.d(e),p(g),e&&p($),e&&p(b),le(_,e),e&&p(E),e&&p(A),D&&D.d(e),e&&p(P),e&&p(R)}}}function Ae(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class Te extends de{constructor(e){super(),fe(this,e,Ae,xe,i,{segment:0})}}function Pe(e){let t,n,r=e[1].stack+"";return{c(){t=m("pre"),n=$(r)},l(e){t=x(e,"PRE",{});var o=S(t);n=A(o,r),o.forEach(p)},m(e,r){d(e,t,r),f(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&P(n,r)},d(e){e&&p(t)}}}function Re(t){let n,r,o,s,i,a,c,l,u,h=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&Pe(t);return{c(){r=y(),o=m("h1"),s=$(t[0]),i=y(),a=m("p"),c=$(h),l=y(),g&&g.c(),u=v(),this.h()},l(e){k('[data-svelte="svelte-1moakz"]',document.head).forEach(p),r=T(e),o=x(e,"H1",{class:!0});var n=S(o);s=A(n,t[0]),n.forEach(p),i=T(e),a=x(e,"P",{class:!0});var f=S(a);c=A(f,h),f.forEach(p),l=T(e),g&&g.l(e),u=v(),this.h()},h(){w(o,"class","svelte-17w3omn"),w(a,"class","svelte-17w3omn")},m(e,t){d(e,r,t),d(e,o,t),f(o,s),d(e,i,t),d(e,a,t),f(a,c),d(e,l,t),g&&g.m(e,t),d(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&P(s,e[0]),2&t&&h!==(h=e[1].message+"")&&P(c,h),e[2]&&e[1].stack?g?g.p(e,t):(g=Pe(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&p(r),e&&p(o),e&&p(i),e&&p(a),e&&p(l),g&&g.d(e),e&&p(u)}}}function Le(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Ie extends de{constructor(e){super(),fe(this,e,Le,Re,i,{status:0,error:1})}}function Ne(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ie(n.$$.fragment),r=v()},l(e){n&&ae(n.$$.fragment,e),r=v()},m(e,t){n&&ce(n,e,t),d(e,r,t),o=!0},p(e,t){const o=16&t?oe(s,[se(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ee();const e=n;re(e.$$.fragment,1,0,(()=>{le(e,1)})),te()}i?(n=new i(a()),ie(n.$$.fragment),ne(n.$$.fragment,1),ce(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&ne(n.$$.fragment,e),o=!0)},o(e){n&&re(n.$$.fragment,e),o=!1},d(e){e&&p(r),n&&le(n,e)}}}function Oe(e){let t,n;return t=new Ie({props:{error:e[0],status:e[1]}}),{c(){ie(t.$$.fragment)},l(e){ae(t.$$.fragment,e)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function ke(e){let t,n,r,o;const s=[Oe,Ne],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=v()},l(e){n.l(e),r=v()},m(e,n){i[t].m(e,n),d(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(ee(),re(i[c],1,1,(()=>{i[c]=null})),te(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),ne(n,1),n.m(r.parentNode,r))},i(e){o||(ne(n),o=!0)},o(e){re(n),o=!1},d(e){i[t].d(e),e&&p(r)}}}function Ce(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[ke]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new Te({props:s}),{c(){ie(n.$$.fragment)},l(e){ae(n.$$.fragment,e)},m(e,t){ce(n,e,t),r=!0},p(e,[t]){const r=12&t?oe(o,[4&t&&{segment:e[2][0]},8&t&&se(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ne(n.$$.fragment,e),r=!0)},o(e){re(n.$$.fragment,e),r=!1},d(e){le(n,e)}}}function Ue(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return D(l),u=me,f=r,j().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class je extends de{constructor(e){super(),fe(this,e,Ue,Ce,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Me=[],De=[{js:()=>Promise.all([import("./index.0e6cacdf.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.6adec1d9.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].a49d9cf0.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].0f0a981b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.08f24486.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],He=(qe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:qe(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:qe(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var qe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ge(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function Be(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Je,ze=1;const Ke="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ve={};let Fe,We;function Ye(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function Qe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Fe))return null;let t=e.pathname.slice(Fe.length);if(""===t&&(t="/"),!Me.some((e=>e.test(t))))for(let n=0;n<He.length;n+=1){const r=He[n],o=r.pattern.exec(t);if(o){const n=Ye(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function Xe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Be(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Qe(o);if(s){tt(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),Ke.pushState({id:Je},"",o.href)}}function Ze(){return{x:pageXOffset,y:pageYOffset}}function et(e){if(Ve[Je]=Ze(),e.state){const t=Qe(new URL(location.href));t?tt(t,e.state.id):location.href=location.href}else!function(e){ze=e}(ze+1),function(e){Je=e}(ze),Ke.replaceState({id:Je},"",location.href)}function tt(e,t,n,r){return Ge(this,void 0,void 0,(function*(){const o=!!t;if(o)Je=t;else{const e=Ze();Ve[Je]=e,Je=t=++ze,Ve[Je]=n?e:{x:0,y:0}}if(yield We(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Ve[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Ve[Je]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function nt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let rt,ot=null;function st(e){const t=Be(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=Qe(new URL(e,nt(document)));if(t)ot&&e===ot.href||(ot={href:e,promise:wt(t)}),ot.promise}(t.href)}function it(e){clearTimeout(rt),rt=setTimeout((()=>{st(e)}),20)}function at(e,t={noscroll:!1,replaceState:!1}){const n=Qe(new URL(e,nt(document)));if(n){const r=tt(n,null,t.noscroll);return Ke[t.replaceState?"replaceState":"pushState"]({id:Je},"",e),r}return location.href=e,new Promise((()=>{}))}const ct="undefined"!=typeof __SAPPER__&&__SAPPER__;let lt,ut,ft,dt=!1,pt=[],ht="{}";const mt={page:function(e){const t=he(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:he(null),session:he(ct&&ct.session)};let gt,$t,yt;function vt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function bt(e){return Ge(this,void 0,void 0,(function*(){lt&&mt.preloading.set(!0);const t=function(e){return ot&&ot.href===e.href?ot.promise:wt(e)}(e),n=ut={},r=yield t,{redirect:o}=r;if(n===ut)if(o)yield at(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield _t(n,t,vt(t,e.page))}}))}function _t(e,t,n){return Ge(this,void 0,void 0,(function*(){mt.page.set(n),mt.preloading.set(!1),lt?lt.$set(t):(t.stores={page:{subscribe:mt.page.subscribe},preloading:{subscribe:mt.preloading.subscribe},session:mt.session},t.level0={props:yield ft},t.notify=mt.page.notify,lt=new je({target:yt,props:t,hydrate:!0})),pt=e,ht=JSON.stringify(n.query),dt=!0,$t=!1}))}function wt(e){return Ge(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!ft){const e=()=>({});ft=ct.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},gt)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Ge(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==ht)return!0;const o=pt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let p;if($t||u||!pt[a]||pt[a].part!==t.i){u=!1;const{default:r,preload:o}=yield De[t.i].js();let s;s=dt||!ct.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},gt):{}:ct.preloaded[a+1],p={component:r,props:s,segment:f,match:l,part:t.i}}else p=pt[a];return s[`level${d}`]=p})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var Et,St,xt;mt.session.subscribe((e=>Ge(void 0,void 0,void 0,(function*(){if(gt=e,!dt)return;$t=!0;const t=Qe(new URL(location.href)),n=ut={},{redirect:r,props:o,branch:s}=yield wt(t);n===ut&&(r?yield at(r.location,{replaceState:!0}):yield _t(s,o,vt(o,t.page)))})))),Et={target:document.querySelector("#sapper")},St=Et.target,yt=St,xt=ct.baseUrl,Fe=xt,We=bt,"scrollRestoration"in Ke&&(Ke.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Ke.scrollRestoration="auto"})),addEventListener("load",(()=>{Ke.scrollRestoration="manual"})),addEventListener("click",Xe),addEventListener("popstate",et),addEventListener("touchstart",st),addEventListener("mousemove",it),ct.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=ct;ft||(ft=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:ft},level1:{props:{status:s,error:i},component:Ie},segments:o},c=Ye(n);_t([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Ke.replaceState({id:ze},"",t);const n=Qe(new URL(location.href));if(n)return tt(n,ze,!0,e)}));export{le as A,b as B,o as C,G as D,u as E,k as F,g as G,C as H,at as I,R as J,_ as K,Ee as L,t as M,E as N,oe as O,D as P,H as Q,l as R,de as S,se as T,V as U,O as V,S as a,A as b,x as c,p as d,m as e,w as f,d as g,f as h,fe as i,y as j,T as k,ee as l,re as m,e as n,te as o,ne as p,M as q,ge as r,i as s,$ as t,P as u,v,h as w,ie as x,ae as y,ce as z};

import __inject_styles from './inject_styles.5607aec6.js';