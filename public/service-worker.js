"use strict";var precacheConfig=[["0.bundle.js","8e94c332ec61cf12a91cd7412007e774"],["010c1aeee3c6d1cbb1d5761d80353823.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["037d830416495def72b7881024c14b7b.woff2","037d830416495def72b7881024c14b7b"],["1.bundle.js","049ddd4e9e3c2f96e5fc4b21cb24422e"],["10.bundle.js","5915e532b57032319b71faf510252b9e"],["11.bundle.js","e8a204bb7a656a0c20203e764ebc2dba"],["19b7a0adfdd4f808b53af7e2ce2ad4e5.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["210a7c781f5a354a0e4985656ab456d9.woff","210a7c781f5a354a0e4985656ab456d9"],["285467176f7fe6bb6a9c6873b3dad2cc.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["3.bundle.js","b8561937060f2a83a4b38298368f77ab"],["4.bundle.js","7d90d4a6ce4c73eedcc15bce35610b64"],["5.bundle.js","7f28bcec29a2c1c08e7e530ae13a3b0d"],["510dec37fa69fba39593e01a469ee018.woff2","510dec37fa69fba39593e01a469ee018"],["55536c8e9e9a532651e3cf374f290ea3.woff2","55536c8e9e9a532651e3cf374f290ea3"],["5d4aeb4e5f5ef754e307d7ffaef688bd.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["6.bundle.js","a53f96041ba82fc96e0a04827a4931f2"],["6232f43d15b0e7a0bf0fe82e295bdd06.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["7.bundle.js","44bc36b1e67ea45bd50c4108dbdfb4bf"],["7b770d6c53423deb1a8e49d3c9175184.woff2","7b770d6c53423deb1a8e49d3c9175184"],["8.bundle.js","def5598a45ffcaac17b28161d12e9a3b"],["846d1890aee87fde5d8ced8eba360c3a.woff","846d1890aee87fde5d8ced8eba360c3a"],["8c2ade503b34e31430d6c98aa29a52a3.woff","8c2ade503b34e31430d6c98aa29a52a3"],["9.bundle.js","de148b428da837b110f9bff7cc68791b"],["9680d5a0c32d2fd084e07bbc4c8b2923.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["987b84570ea69ee660455b8d5e91f5f1.woff2","987b84570ea69ee660455b8d5e91f5f1"],["a1471d1d6431c893582a5f6a250db3f9.woff","a1471d1d6431c893582a5f6a250db3f9"],["app.bundle.js","228112840fb985433b0601677a8a3a4f"],["bafb105baeb22d965c70fe52ba6b49d9.woff","bafb105baeb22d965c70fe52ba6b49d9"],["bc833e725c137257c2c42a789845d82f.woff","bc833e725c137257c2c42a789845d82f"],["cf2ce1fbc2b8b96b4dcc82229545ac5b.png","cf2ce1fbc2b8b96b4dcc82229545ac5b"],["cf6613d1adf490972c557a8e318e0868.woff","cf6613d1adf490972c557a8e318e0868"],["d69924b98acd849cdeba9fbff3f88ea6.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["d704bb3d579b7d5e40880c75705c8a71.woff","d704bb3d579b7d5e40880c75705c8a71"],["d8bcbe724fd6f4ba44d0ee6a2675890f.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["de8b7431b74642e830af4d4f4b513ec9.woff","de8b7431b74642e830af4d4f4b513ec9"],["e9dbbe8a693dd275c16d32feb101f1c1.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["ee7cd8ed2dcec943251eb2763684fc6f.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["ffcc050b2d92d4b14a4fcb527ee0bcc8.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["index.html","a205514fe0970f5dc47684b70dc29706"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,f){var n=new URL(e);return f&&n.pathname.match(f)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],f=new URL(a,self.location),n=createCacheKey(f,hashParamName,c,/\.\w{8}\./);return[f.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var f=new Request(c,{credentials:"same-origin"});return fetch(f).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("D:gitworkbench-tspublicindex.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});