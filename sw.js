if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),d={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-5361f2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7d14da9a.js",revision:null},{url:"assets/index-bc809854.css",revision:null},{url:"index.html",revision:"499de3fd80ed235486875d3f7840e398"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"c95ece33ba43026cf13e21a4839c3d40"},{url:"images/icon/72.png",revision:"cd4394ac89642b668e444aae8830885d"},{url:"images/icon/96.png",revision:"b375135d94e947a3274fce59fdc0172c"},{url:"images/icon/128.png",revision:"32d62f1e2a7279ba67bea90e3ce6ea16"},{url:"images/icon/144.png",revision:"c3b740f5efd7133641d449613f8984e0"},{url:"images/icon/192.png",revision:"16afb4604779d4f9d19f7d54407cef13"},{url:"images/icon/512.png",revision:"d514bc16f8e94f2531fcbb5393e5e831"},{url:"manifest.webmanifest",revision:"f9f5b60411161271a28039b59b649f4d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
