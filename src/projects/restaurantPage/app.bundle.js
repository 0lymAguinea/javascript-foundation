(()=>{"use strict";var e={756:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(537),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: sans-serif;\n  background-color: #2b2a4c;\n  color: #eee2de;\n}\n#content {\n  margin: 0 20rem;\n  border: 1px solid black;\n}\nheader {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\nh1 {\n  font-size: 3.5rem;\n  display: flex;\n  justify-content: center;\n  color: #b31312;\n}\n#logo {\n  min-height: 5rem;\n  max-width: 6rem;\n}\nnav {\n  display: flex;\n  justify-content: space-evenly;\n}\nh2 {\n  font-size: 1.6rem;\n}\n#culinaryMarvels,\n#dedicatedTeam,\n#reviews,\n#specialOffer,\n#endingMessage {\n  font-weight: bold;\n  color: #b31312;\n  font-size: 1.2rem;\n}\n#highlights {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1rem;\n}\n#contactDetailsLabel {\n  display: flex;\n  justify-content: center;\n}\n.container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n}\n#restaurantEmail {\n  color: #eee2de;\n}\n.bottomDetail {\n  display: flex;\n  justify-content: center;\n}\n#menuContainer {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n}\n#extraRare,\n#rare,\n#mediumRare,\n#medium,\n#mediumWell,\n#wellDone {\n  display: grid;\n  grid-template-columns: 0.7fr 1fr;\n}\n#extraRare img,\n#rare img,\n#mediumRare img,\n#medium img,\n#mediumWell img,\n#wellDone img {\n  max-width: 9rem;\n}\n#extraRare p:nth-child(2)::before,\n#rare p:nth-child(2)::before,\n#mediumRare p:nth-child(2)::before,\n#medium p:nth-child(2)::before,\n#mediumWell p:nth-child(2)::before,\n#wellDone p:nth-child(2)::before,\np:nth-child(3)::before,\np:nth-child(4)::before {\n  content: "✓";\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,iBAAiB;AACnB;AACA;;;;;EAKE,iBAAiB;EACjB,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;AACA;;;;;;EAME,aAAa;EACb,gCAAgC;AAClC;AACA;;;;;;EAME,eAAe;AACjB;AACA;;;;;;;;EAQE,YAAY;AACd",sourcesContent:['* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: sans-serif;\n  background-color: #2b2a4c;\n  color: #eee2de;\n}\n#content {\n  margin: 0 20rem;\n  border: 1px solid black;\n}\nheader {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\nh1 {\n  font-size: 3.5rem;\n  display: flex;\n  justify-content: center;\n  color: #b31312;\n}\n#logo {\n  min-height: 5rem;\n  max-width: 6rem;\n}\nnav {\n  display: flex;\n  justify-content: space-evenly;\n}\nh2 {\n  font-size: 1.6rem;\n}\n#culinaryMarvels,\n#dedicatedTeam,\n#reviews,\n#specialOffer,\n#endingMessage {\n  font-weight: bold;\n  color: #b31312;\n  font-size: 1.2rem;\n}\n#highlights {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1rem;\n}\n#contactDetailsLabel {\n  display: flex;\n  justify-content: center;\n}\n.container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n}\n#restaurantEmail {\n  color: #eee2de;\n}\n.bottomDetail {\n  display: flex;\n  justify-content: center;\n}\n#menuContainer {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n}\n#extraRare,\n#rare,\n#mediumRare,\n#medium,\n#mediumWell,\n#wellDone {\n  display: grid;\n  grid-template-columns: 0.7fr 1fr;\n}\n#extraRare img,\n#rare img,\n#mediumRare img,\n#medium img,\n#mediumWell img,\n#wellDone img {\n  max-width: 9rem;\n}\n#extraRare p:nth-child(2)::before,\n#rare p:nth-child(2)::before,\n#mediumRare p:nth-child(2)::before,\n#medium p:nth-child(2)::before,\n#mediumWell p:nth-child(2)::before,\n#wellDone p:nth-child(2)::before,\np:nth-child(3)::before,\np:nth-child(4)::before {\n  content: "✓";\n}\n'],sourceRoot:""}]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var m=[].concat(e[s]);r&&c[m[0]]||(void 0!==a&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=a),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),n.push(m))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],m=a[s]||0,p="".concat(s," ").concat(m);a[s]=m+1;var l=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)n[l].references++,n[l].updater(u);else{var A=o(u,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:A,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var m=t(a[s]);0===n[m].references&&(n[m].updater(),n.splice(m,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),d=t.n(i),s=t(216),m=t.n(s),p=t(589),l=t.n(p),u=t(756),A={};A.styleTagTransform=l(),A.setAttributes=d(),A.insert=c().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=m(),n()(u.Z,A),u.Z&&u.Z.locals&&u.Z.locals;const f=t.p+"52610cec0dba1c8d59b1.png";function h(){const e=document.getElementById("content"),n=function(){const e=document.createElement("article"),n=document.createElement("h2"),t=document.createElement("div");t.id="highlights",n.textContent="We are thrilled to share the excitement as we celebrate the\n  awesomeness that defines our beloved restaurant! 🎉✨";const r=document.createElement("h3");r.textContent="At OlymFans', we take pride in crafting extraordinary culinary\n  experiences that captivate your taste buds and leave you with\n  unforgettable memories. Our commitment to excellence, innovation, and\n  a passion for delicious food is what sets us apart.";const o=document.createElement("p");o.innerHTML='<span id="culinaryMarvels">🌮 Culinary Marvels: </span>Prepare your\n  taste buds for a journey of flavors! Our talented chefs work\n  tirelessly to create mouthwatering dishes that showcase a fusion of\n  creativity and tradition. From sizzling appetizers to decadent\n  desserts, each dish tells a story of culinary artistry.';const a=document.createElement("p");a.innerHTML='<span id="dedicatedTeam">👨‍🍳 Dedicated Team: </span>Behind every\n  exceptional dining experience is a team of dedicated individuals\n  committed to making your time with us extraordinary. Our staff is\n  passionate about hospitality, ensuring that every visit is not just a\n  meal but a delightful journey.';const c=document.createElement("p");c.innerHTML='<span id="reviews"\n  >🌟 Rave Reviews: </span\n> We are humbled by the overwhelming positive\n  feedback from our valued patrons. Your words inspire us to\n  continually raise the bar and deliver nothing but the best. Thank\n  you for being an integral part of our OlymFans\' family!';const i=document.createElement("p");i.innerHTML='<span id="specialOffer">🎁 Special Offer: </span>To express our\n  gratitude, we are delighted to offer an exclusive [Special Offer] for\n  a limited time. It\'s our way of saying thank you for your continued\n  support and loyalty.';const d=document.createElement("p");d.innerHTML='<span id="endingMessage"></span>\n  Come, join us at OlymFans Restaurant, where every meal is an adventure,\n  and every moment is a celebration. Experience the awesomeness that is\n  uniquely OlymFans.';const s=document.createElement("p");s.textContent="Cheers to great food, great company, and an even greater dining\n  experience!";const m=document.createElement("p");return m.innerHTML="<br><h3>Sincerely,</h3>\n  <p>Olym</p>\n  <p>Owner/Manager, OlymFans</p>",e.append(n),e.append(r),t.append(o),t.append(a),t.append(c),t.append(i),e.append(t),e.append(d),e.append(s),e.append(m),e}();return e.append(n),e}const E=t.p+"30a841c49d974ebdf8b8.jpg",g=t.p+"4ed299fa1980bea7f509.jpg",C=t.p+"02238e27285ad19d6dc6.jpg",y=t.p+"b73734445926d56261c3.jpg",b=t.p+"390e3ffea27c0b6c9176.jpg",v=t.p+"f8c45ef16caf8aee092e.jpg";class x{constructor(e,n,t,r,o){this.doneness=e,this.cooking=n,this.inside=t,this.tenderness=r,this.temperature=o}}function B(){const e=document.getElementById("content");let n=e.childNodes[2];for(;n;){let t=n.nextSibling;e.removeChild(n),n=t}}!function(){const e=document.getElementById("content"),n=document.createElement("header"),t=document.createElement("h1"),r=document.createElement("img");r.id="logo",r.src=f,t.textContent="OlymFans Restaurant",n.append(r),n.append(t),e.append(n);const o=function(){const e=document.createElement("nav"),n=document.createElement("button"),t=document.createElement("button"),r=document.createElement("button");return n.textContent="Home",n.id="homeButton",t.textContent="Contact",t.id="contactButton",r.textContent="Menu",r.id="menuButton",e.append(n),e.append(t),e.append(r),e}();e.append(o)}(),document.body.append(function(){let e=h();const n=document.getElementById("homeButton"),t=document.getElementById("contactButton"),r=document.getElementById("menuButton");return n.addEventListener("click",(()=>{B(),e=h()})),t.addEventListener("click",(()=>{B(),e=function(){const e=document.getElementById("content"),n=function(){const e=document.createElement("div");return e.className="container",e}(),t=function(){const e=document.createElement("h2");return e.textContent="OlymFans' Restaurant Contact Details",e.id="contactDetailsLabel",e}(),r=function(){const e=document.createElement("label"),n=document.createElement("h3");return e.textContent="Contact number",n.innerHTML="<span class='bottomDetail'>0912-345-6789</span>",e.append(n),e}(),o=function(){const e=document.createElement("label"),n=document.createElement("a");return e.textContent="Email address",n.href="trysomething@yahoo.com",n.innerHTML="<span class='bottomDetail'>pogiko@yahoo.com</span>",n.id="restaurantEmail",e.append(n),e}();return e.append(t),n.append(r),n.append(o),e.append(n),e}()})),r.addEventListener("click",(()=>{B(),e=function(){const e=document.getElementById("content"),n=function(){const e=document.createElement("div");e.id="menuContainer";const n=document.createElement("div");n.id="extraRare";const t=document.createElement("div");t.id="rare";const r=document.createElement("div");r.id="mediumRare";const o=document.createElement("div");o.id="medium";const a=document.createElement("div");a.id="mediumWell";const c=document.createElement("div");return c.id="wellDone",e.append(n),e.append(t),e.append(r),e.append(o),e.append(a),e.append(c),e}();e.append(n);const t=function(){const e=document.getElementById("menuContainer"),n=document.getElementById("extraRare"),t=document.createElement("img");t.src=E,n.append(t);const r=new x('Extra Rare or "Blue" Steak',"Seared outside","Completely red interior","Cold and soft interior","115-120"),o=document.createElement("div");o.id="extraRareInfo";const a=document.createElement("h4");a.textContent=r.doneness;const c=document.createElement("p");c.textContent=r.cooking;const i=document.createElement("p");i.textContent=r.inside;const d=document.createElement("p");d.textContent=r.tenderness;const s=document.createElement("h5");s.textContent="Extra Rare Steak Internal Temperature";const m=document.createElement("p");return m.textContent=`${r.temperature} degrees Fahrenheit`,o.append(a),o.append(c),o.append(i),o.append(d),o.append(s),o.append(m),n.append(o),e}();e.append(t);const r=function(){const e=document.getElementById("menuContainer"),n=document.getElementById("rare"),t=document.createElement("img");t.src=g,n.append(t);const r=document.createElement("div");r.id="rareInfo";const o=new x("Rare","Seared outside","75% red interior","Slight cool center","125-130"),a=document.createElement("h4");a.textContent=o.doneness;const c=document.createElement("p");c.textContent=o.cooking;const i=document.createElement("p");i.textContent=o.inside;const d=document.createElement("p");d.textContent=o.tenderness;const s=document.createElement("h5");s.textContent="Rare Steak Internal Temperature";const m=document.createElement("p");return m.textContent=`${o.temperature} degrees Fahrenheit`,r.append(a),r.append(c),r.append(i),r.append(d),r.append(s),r.append(m),n.append(r),e}();e.append(r);const o=function(){const e=document.getElementById("menuContainer"),n=document.getElementById("mediumRare"),t=document.createElement("img");t.src=C,n.append(t);const r=document.createElement("div");r.id="mediumRareInfo";const o=new x("Medium-Rare Steak","Seared outside","50% red interior","Slightly firm","130-140"),a=document.createElement("h4");a.textContent=o.doneness;const c=document.createElement("p");c.textContent=o.cooking;const i=document.createElement("p");i.textContent=o.inside;const d=document.createElement("p");d.textContent=o.tenderness;const s=document.createElement("h5");s.textContent="Medium Rare Steak Internal Temperature";const m=document.createElement("p");return m.textContent=`${o.temperature} degrees Fahrenheit`,r.append(a),r.append(c),r.append(i),r.append(d),r.append(s),r.append(m),n.append(r),e}();e.append(o);const a=function(){const e=document.getElementById("menuContainer"),n=document.getElementById("medium"),t=document.createElement("img");t.src=y,n.append(t);const r=document.createElement("div");r.id="mediumInfo";const o=new x("Medium Steak","Seared outside","Pink center with slight red","Firm and springy","140-150"),a=document.createElement("h4");a.textContent=o.doneness;const c=document.createElement("p");c.textContent=o.cooking;const i=document.createElement("p");i.textContent=o.inside;const d=document.createElement("p");d.textContent=o.tenderness;const s=document.createElement("h5");s.textContent="Medium Rare Steak Internal Temperature";const m=document.createElement("p");return m.textContent=`${o.temperature} degrees Fahrenheit`,r.append(a),r.append(c),r.append(i),r.append(d),r.append(s),r.append(m),n.append(r),e}();e.append(a);const c=function(){const e=document.getElementById("menuContainer"),n=document.getElementById("mediumWell"),t=document.createElement("img");t.src=b,n.append(t);const r=document.createElement("div");r.id="mediumInfo";const o=new x("Medium Steak","Seared outside","Slightest bit of pink in center","Mostly cooked throughout","150-155"),a=document.createElement("h4");a.textContent=o.doneness;const c=document.createElement("p");c.textContent=o.cooking;const i=document.createElement("p");i.textContent=o.inside;const d=document.createElement("p");d.textContent=o.tenderness;const s=document.createElement("h5");s.textContent="Medium Rare Steak Internal Temperature";const m=document.createElement("p");return m.textContent=`${o.temperature} degrees Fahrenheit`,r.append(a),r.append(c),r.append(i),r.append(d),r.append(s),r.append(m),n.append(r),e}();e.append(c);const i=function(){const e=document.getElementById("menuContainer"),n=document.getElementById("wellDone"),t=document.createElement("img");t.src=v,n.append(t);const r=document.createElement("div");r.id="wellDoneInfo";const o=new x("Well-Done Steak","Seared outside","Fully brown center","Firm and cooked throughout","160+"),a=document.createElement("h4");a.textContent=o.doneness;const c=document.createElement("p");c.textContent=o.cooking;const i=document.createElement("p");i.textContent=o.inside;const d=document.createElement("p");d.textContent=o.tenderness;const s=document.createElement("h5");s.textContent="Medium Rare Steak Internal Temperature";const m=document.createElement("p");return m.textContent=`${o.temperature} degrees Fahrenheit`,r.append(a),r.append(c),r.append(i),r.append(d),r.append(s),r.append(m),n.append(r),e}();return e.append(i),e}()})),e}())})()})();
//# sourceMappingURL=app.bundle.js.map