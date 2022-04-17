import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.80b9bd99.js";
const __pageData = '{"title":"http","description":"","frontmatter":{},"headers":[{"level":2,"title":"cookie","slug":"cookie"},{"level":3,"title":"cookie\u7684\u7279\u70B9","slug":"cookie\u7684\u7279\u70B9"},{"level":3,"title":"cookie\u7684\u7F3A\u70B9","slug":"cookie\u7684\u7F3A\u70B9"},{"level":2,"title":"session","slug":"session"},{"level":2,"title":"token","slug":"token"},{"level":2,"title":"uuid","slug":"uuid"},{"level":2,"title":"jwt","slug":"jwt"},{"level":2,"title":"token\u548Csession\u533A\u522B","slug":"token\u548Csession\u533A\u522B"}],"relativePath":"notes/1.basic/8.http/1.http.md","lastUpdated":1650041184834}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-hidden="true">#</a></h1><blockquote><p>\u4EE5\u4E0B\u6BCF\u884C\u4E13\u4E1A\u540D\u8BCD\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u540C\u4E49\u8BCD</p><p><code>\u6D4F\u89C8\u5668\u7AEF</code>\u3001<code>\u524D\u7AEF</code>\u3001<code>\u5BA2\u6237\u7AEF</code></p><p><code>\u670D\u52A1\u5668\u7AEF</code>\u3001<code>\u540E\u7AEF</code></p></blockquote><p><strong>HTTP\u534F\u8BAE\u662F\u65E0\u72B6\u6001\u7684\u534F\u8BAE</strong>\uFF0C\u6D4F\u89C8\u5668\u7AEF\u591A\u6B21\u8BF7\u6C42\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u5B83\u65E0\u6CD5\u611F\u77E5\u662F\u4E0D\u662F\u540C\u4E00\u7528\u6237\u7684\u8BF7\u6C42\uFF0C\u8FD9\u5C31\u4E0D\u80FD\u5B9E\u73B0\u5E38\u89C1\u7684\u7528\u6237\u81EA\u52A8\u767B\u5F55\u529F\u80FD(\u7528\u6237\u9009\u62E9&quot;\u8BB0\u4F4F\u6211\u540E&quot;\uFF0C\u4E0B\u6B21\u4E0D\u7528\u8F93\u5165\u8D26\u6237\u5BC6\u7801\u5373\u53EF\u767B\u5F55)</p><p>\u6240\u4EE5\u4EA7\u751F\u4E86\u4EE5\u4E0B\u4E24\u79CD\u6280\u672F\uFF1A</p><ul><li>\u901A\u8FC7cookie\u5728\u6D4F\u89C8\u5668\u7AEF\u8BB0\u5F55\u72B6\u6001\uFF0C\u901A\u8FC7session\u5728\u670D\u52A1\u7AEF\u8BB0\u5F55\u72B6\u6001</li><li>\u901A\u8FC7token\u65B9\u5F0F\u7EF4\u6301\u72B6\u6001</li></ul><h2 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h2><p>Cookie\uFF08\u590D\u6570\u5F62\u6001Cookies\uFF09\uFF0C\u4E2D\u6587\u540D\u79F0\u4E3A\u201C\u5C0F\u578B\u6587\u672C\u6587\u4EF6\u201D\u6216\u201C\u5C0F\u751C\u997C\u201D\u3002\u6307\u67D0\u4E9B\u7F51\u7AD9\u4E3A\u4E86\u8FA8\u522B\u7528\u6237\u8EAB\u4EFD\u800C\u50A8\u5B58\u5728\u7528\u6237\u672C\u5730\u7EC8\u7AEF\uFF08Client Side\uFF09\u4E0A\u7684\u6570\u636E\uFF08\u901A\u5E38\u7ECF\u8FC7\u52A0\u5BC6\uFF09</p><h3 id="cookie\u7684\u7279\u70B9" tabindex="-1">cookie\u7684\u7279\u70B9 <a class="header-anchor" href="#cookie\u7684\u7279\u70B9" aria-hidden="true">#</a></h3><ol><li>\u670D\u52A1\u5668\u901A\u8FC7\u8BBE\u7F6E<strong>Set-Cookie \u54CD\u5E94\u5934</strong>\u6765\u8BBE\u7F6E cookie</li><li>\u6D4F\u89C8\u5668\u5F97\u5230 cookie \u540E\uFF0C\u6BCF\u6B21<strong>\u540C\u6E90\u7684\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934</strong>\u90FD\u4F1A\u5E26\u4E0A cookie</li><li>\u670D\u52A1\u5668\u8BFB\u53D6 cookie \u5C31\u77E5\u9053\u4E86\u767B\u5F55\u7528\u6237\u7684\u4FE1\u606F\uFF08\u5982\u8D26\u6237\u540D\u7B49\uFF09</li><li>cookie \u5B9E\u9645\u4E0A\u5B58\u50A8\u5728<strong>\u672C\u5730\u8BA1\u7B97\u673A\u7684\u786C\u76D8\u91CC</strong></li><li>cookie \u7684\u6700\u5927\u50A8\u5B58\u91CF\u4E00\u822C\u53EA\u6709<strong>4K</strong></li><li>cookie\u5B58\u50A8\u6570\u636E\u7684\u683C\u5F0F\uFF1A\u5B57\u7B26\u4E32key=value</li><li>cookie\u6709\u6548\u8303\u56F4\uFF1A\u5F53\u524D\u57DF\u540D\u4E0B\u6709\u6548\u3002\u6240\u4EE5<strong>session\u8FD9\u79CD\u4F1A\u8BDD\u5B58\u50A8\u65B9\u5F0F\u65B9\u5F0F\u53EA\u9002\u7528\u4E8E\u5BA2\u6237\u7AEF\u4EE3\u7801\u548C\u670D\u52A1\u7AEF\u4EE3\u7801\u8FD0\u884C\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A</strong>\uFF08\u524D\u540E\u7AEF\u9879\u76EE\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u53F7\u90FD\u4E00\u81F4\uFF0C\u5373\u5728\u4E00\u4E2A\u9879\u76EE\u4E0B\uFF09</li></ol><h3 id="cookie\u7684\u7F3A\u70B9" tabindex="-1">cookie\u7684\u7F3A\u70B9 <a class="header-anchor" href="#cookie\u7684\u7F3A\u70B9" aria-hidden="true">#</a></h3><ol><li>Cookie<strong>\u5F88\u5BB9\u6613\u88AB\u7528\u6237\u7BE1\u6539</strong>\uFF08 Session \u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9632\u6B62\u7528\u6237\u7BE1\u6539\uFF09</li><li>Cookie \u7684\u9ED8\u8BA4\u6709\u6548\u671F\u7406\u8BBA\u4E0A\u5728<strong>\u7528\u6237\u5173\u95ED\u9875\u9762\u540E\u5C31\u5931\u6548</strong>\uFF0C\u5B9E\u9645\u4E0A\u5728\u572820\u5206\u949F\u5DE6\u53F3\uFF0C\u4E0D\u540C\u6D4F\u89C8\u5668\u7B56\u7565\u4E0D\u540C\u3002\u4F46\u662F\u540E\u7AEF\u53EF\u4EE5\u5F3A\u5236\u8BBE\u7F6E\u6709\u6548\u671F\uFF08\u5982\u4F55\u8BBE\u7F6E\u89C1\u4E0B\u6587\uFF09\u3002</li><li>Cookie \u4E5F\u6709\u4E00\u5B9A\u7684<strong>\u540C\u6E90\u7B56\u7565</strong>\uFF0C\u4E0D\u8FC7\u8DDF AJAX \u7684\u540C\u6E90\u7B56\u7565\u7A0D\u5FAE\u6709\u4E9B\u4E0D\u540C\u3002\u5982\uFF1A <ul><li>\u5F53\u8BF7\u6C42 <a href="http://qq.com" target="_blank" rel="noopener noreferrer">qq.com</a> \u4E0B\u7684\u8D44\u6E90\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9ED8\u8BA4\u5E26\u4E0A <a href="http://qq.com" target="_blank" rel="noopener noreferrer">qq.com</a> \u5BF9\u5E94\u7684 Cookie\uFF0C\u4E0D\u4F1A\u5E26\u4E0A <a href="http://baidu.com" target="_blank" rel="noopener noreferrer">baidu.com</a> \u5BF9\u5E94\u7684 Cookie</li><li>\u5F53\u8BF7\u6C42 <a href="http://v.qq.com" target="_blank" rel="noopener noreferrer">v.qq.com</a> \u4E0B\u7684\u8D44\u6E90\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4EC5\u4F1A\u5E26\u4E0A <a href="http://v.qq.com" target="_blank" rel="noopener noreferrer">v.qq.com</a> \u7684Cookie\uFF0C\u8FD8\u4F1A\u5E26\u4E0A <a href="http://qq.com" target="_blank" rel="noopener noreferrer">qq.com</a> \u7684 Cookie</li><li>\u53E6\u5916 Cookie \u8FD8\u53EF\u4EE5\u6839\u636E\u8DEF\u5F84\u505A\u9650\u5236\uFF0C\u8BF7\u81EA\u884C\u4E86\u89E3\uFF0C\u8FD9\u4E2A\u529F\u80FD\u7528\u5F97\u6BD4\u8F83\u5C11</li></ul></li><li>Cookie\u4E0D\u80FD\u8DE8\u57DF</li></ol><h2 id="session" tabindex="-1">session <a class="header-anchor" href="#session" aria-hidden="true">#</a></h2><p>Session\u662F\u5BF9\u4E8E\u670D\u52A1\u7AEF\u6765\u8BF4\u7684\uFF0C\u5BA2\u6237\u7AEF\u662F\u6CA1\u6709Session\u4E00\u8BF4\u7684</p><p>Session\u4E2D\u6587\u610F\u601D\u4E3A\u201C\u56DE\u8BDD\u201D\uFF0C\u4EE3\u8868\u670D\u52A1\u5668\u4E0E\u6D4F\u89C8\u5668\u7684\u4E00\u6B21\u4F1A\u8BDD\u8FC7\u7A0B\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u8FDE\u7EED\u7684\uFF0C\u4E5F\u53EF\u4EE5\u65F6\u65AD\u65F6\u7EED\u7684\uFF0C\u5B83\u4FDD\u5B58\u4E86\u672C\u6B21\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u901A\u4FE1\u4FE1\u606F</p><p>Session\u57FA\u4E8Ecookie\uFF0C\u5F53\u6D4F\u89C8\u5668\u7B2C\u4E00\u6B21\u8BF7\u6C42\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u4F1A\u4EA7\u751F\u4E00\u4E2A\u4E34\u65F6Cookie(Session)\u5B58\u653E\u5728\u670D\u52A1\u5668\u91CC\uFF0C\u7136\u540E<strong>\u901A\u8FC7\u54CD\u5E94\u5934\u7684\u65B9\u5F0F\u5C06SessionID\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u5199\u5165\u5230Cookie\u4E2D</strong>\uFF0C\u6D4F\u89C8\u5668\u4E0B\u6B21\u8BF7\u6C42\u5C31\u4F1A\u5C06SessiondID\u4EE5Cookie\u5F62\u5F0F\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u7AEF\uFF0C\u670D\u52A1\u5668\u7AEF\u83B7\u53D6SessionID\u540E\u518D\u53BB\u5BFB\u627E\u5BF9\u5E94\u7684Session\u3002\u5982\u679C\u627E\u5230\u4E86\u5219\u4EE3\u8868\u7528\u6237\u4E0D\u662F\u7B2C\u4E00\u6B21\u8BBF\u95EE\uFF0C\u4E5F\u5C31\u8BB0\u4F4F\u4E86\u7528\u6237</p><p>Session\u53EA\u9002\u7528\u4E8E\u524D\u7AEF(\u5BA2\u6237\u7AEF)\u4EE3\u7801\u548C\u540E\u7AEF(\u670D\u52A1\u5668\u7AEF)\u4EE3\u7801\u8FD0\u884C\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\uFF0C\u534F\u8BAE\uFF0C\u57DF\u540D\uFF0C\u7AEF\u53E3\u4E00\u81F4\u7684\u5F00\u53D1\u60C5\u51B5</p><p>\u82E5\u670D\u52A1\u5668\u505A\u4E86\u8D1F\u8F7D\u5747\u8861\uFF0C\u7528\u6237\u7684\u4E0B\u4E00\u6B21\u8BF7\u6C42\u53EF\u80FD\u4F1A\u88AB\u5B9A\u5411\u5230\u5176\u5B83\u670D\u52A1\u5668\u8282\u70B9\uFF0C\u82E5\u90A3\u53F0\u8282\u70B9\u4E0A\u6CA1\u6709\u7528\u6237\u7684Session\u4FE1\u606F\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u4F1A\u8BDD\u9A8C\u8BC1\u5931\u8D25\u3002\u6240\u4EE5Session\u9ED8\u8BA4\u673A\u5236\u4E0B\u662F\u4E0D\u9002\u5408\u5206\u5E03\u5F0F\u90E8\u7F72\u7684</p><p>\u670D\u52A1\u5668\u91CD\u542F\u65F6\uFF0C\u5185\u5B58\u4F1A\u88AB\u9500\u6BC1\uFF0C\u5B58\u50A8\u7684\u7528\u6237\u4FE1\u606F\u4E5F\u5C31\u6D88\u5931\u4E86\uFF0C\u4E3A\u4E86\u89E3\u51B3\u91CD\u542F\u670D\u52A1\u5668\u540Esession\u5C31\u6D88\u5931\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728\u6570\u636E\u5E93\u4E2D\u5B58\u50A8session\uFF0C\u6BD4\u5982express\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7express-mysql-session\u8FD9\u4E2A\u5305\u5B9E\u73B0session\u6301\u4E45\u5316</p><p>\u5F53\u5BA2\u6237\u7AEF\u5B58\u50A8\u7684cookie\u5931\u6548\u540E\uFF0C\u670D\u52A1\u7AEF\u7684session\u4E0D\u4F1A\u7ACB\u5373\u9500\u6BC1\uFF0C\u4F1A\u6709\u4E00\u4E2A\u5EF6\u65F6\uFF0C\u670D\u52A1\u7AEF\u4F1A\u5B9A\u671F\u6E05\u7406\u65E0\u6548session\uFF0C\u4E0D\u4F1A\u9020\u6210\u65E0\u6548\u6570\u636E\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u7684\u95EE\u9898</p><h2 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-hidden="true">#</a></h2><p>Token\u4E00\u822C\u79F0\u4E3A<strong>\u4EE4\u724C\uFF0C\u4E00\u822C\u662F\u901A\u8FC7MD5\u3001SHA\u7B97\u6CD5\u5C06\u5BC6\u94A5\u3001\u516C\u94A5\u3001\u65F6\u95F4\u6233\u7B49\u5143\u7D20\u52A0\u5BC6\u4EA7\u751F\u7684\u52A0\u5BC6\u5B57\u7B26\u4E32</strong></p><p>Token\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u89E3\u51B3Session\u7684\u5F0A\u7AEF\u3002\u5982\u4E0A\u65B9\u6240\u8BB2\uFF0C\u524D\u7AEF\u9879\u76EE\u5B58\u5728\u4E8E\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u540E\u7AEF\u9879\u76EE\u8FD0\u884C\u53E6\u5916\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u534F\u8BAE\uFF0C\u57DF\u540D\uFF0C\u7AEF\u53E3\u53F7\u4F1A\u4E0D\u4E00\u81F4\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0Bsession\u4E0D\u80FD\u7528\u6765\u5B9E\u73B0\u8BB0\u5F55\u72B6\u6001</p><p>Token\u9002\u7528\u4E8E\u524D\u540E\u7AEF\u5206\u79BB\u7684\u9879\u76EE</p><p>\u524D\u7AEF\u53D1\u8D77\u767B\u5F55\u8BF7\u6C42\uFF0C\u540E\u7AEF\u6821\u9A8C\u767B\u5F55\u7684\u8D26\u6237\u4FE1\u606F\u65E0\u8BEF\u540E\uFF0C\u751F\u6210\u52A0\u5BC6\u5B57\u7B26token\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u518D\u6B21\u8BF7\u6C42\u65F6\u5728\u8BF7\u6C42\u5934\u6DFB\u52A0token</p><p>\u5177\u4F53\u6765\u8BF4\u5C31\u662F\u4E3A\u8BF7\u6C42\u5934\u7684\u8BA4\u8BC1\u5B57\u6BB5Authorization\u5B57\u6BB5\u8BBE\u7F6E\u503C\u4E3Atoken\uFF0C\u670D\u52A1\u5668\u7AEF\u5C31\u53EF\u4EE5\u901A\u8FC7token\u4FE1\u606F\u5141\u8BB8\u7528\u6237\u5FEB\u6377\u767B\u5F55</p><h2 id="uuid" tabindex="-1">uuid <a class="header-anchor" href="#uuid" aria-hidden="true">#</a></h2><p>\u751F\u6210token\u7684\u4E00\u79CD\u65B9\u5F0F</p><h2 id="jwt" tabindex="-1">jwt <a class="header-anchor" href="#jwt" aria-hidden="true">#</a></h2><p>\u751F\u6210token\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C \u5168\u79F0\u662F <code>JSON Web Token</code></p><h2 id="token\u548Csession\u533A\u522B" tabindex="-1">token\u548Csession\u533A\u522B <a class="header-anchor" href="#token\u548Csession\u533A\u522B" aria-hidden="true">#</a></h2><p>token\u548Csession\u90FD\u662F<strong>\u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u4E00\u79CD\u8BC6\u522B\u624B\u6BB5</strong>\uFF0C\u90FD\u6709\u8FC7\u671F\u65F6\u95F4\u7684\u9650\u5236\uFF0C\u672C\u8D28\u4E0A\u529F\u80FD\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u5B83\u4EEC\u4E4B\u95F4\u7684\u8FD8\u662F\u6709\u4E00\u4E9B\u533A\u522B\u7684\uFF1A</p><ul><li>token\u662F\u5F00\u53D1\u8005\u91C7\u7528\u7B97\u6CD5\u81EA\u884C\u751F\u6210\u7684\uFF0Csession\u662Fhttp\u534F\u8BAE\u89C4\u5B9A\u7684</li><li><strong>Token\u662F\u653E\u5728\u5BA2\u6237\u7AEF\u5B58\u50A8\u7684</strong>\uFF0C\u91C7\u7528\u4E86\u65F6\u95F4\u6362\u7A7A\u95F4\u7B56\u7565\uFF0C\u5B83<strong>\u4E5F\u662F\u65E0\u72B6\u6001\u7684</strong>\uFF0C\u6240\u4EE5\u5728\u5206\u5E03\u5F0F\u73AF\u5883\u4E2D\u5E94\u7528\u5E7F\u6CDB\uFF0C<strong>Session\u662F\u5B58\u653E\u5728\u670D\u52A1\u5668\u7AEF\u7684</strong>\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u5728\uFF1A\u5185\u5B58\u3001\u6570\u636E\u5E93\u3001NoSQL\u4E2D\u3002\u5B83\u91C7\u7528\u7A7A\u95F4\u6362\u65F6\u95F4\u7684\u7B56\u7565\u6765\u8FDB\u884C\u8EAB\u4EFD\u8BC6\u522B\uFF0C\u82E5Session\u6CA1\u6709\u6301\u4E45\u5316\u843D\u5730\u5B58\u50A8\uFF0C\u4E00\u65E6\u670D\u52A1\u5668\u91CD\u542F\uFF0CSession\u6570\u636E\u4F1A\u4E22\u5931</li><li>token\u53EF\u4EE5\u8DE8\u57DF\uFF0Csession\u4E0D\u53EF\u4EE5\u8DE8\u57DF\uFF0C\u5B83\u662F\u4E0E\u57DF\u540D\u7ED1\u5B9A\u7684</li></ul>', 32);
const _hoisted_33 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_33);
}
var _1_http = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1_http as default };