import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.cf8f4a5b.js";
const __pageData = '{"title":"vscode\u5E38\u7528\u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Chinese","slug":"chinese"},{"level":2,"title":"ES7 React/Redux/GraphQL/React-Native snippets","slug":"es7-react-redux-graphql-react-native-snippets"},{"level":2,"title":"Bracket Pair Colorizer","slug":"bracket-pair-colorizer"},{"level":2,"title":"Indent Rainbow","slug":"indent-rainbow"},{"level":2,"title":"Auto Close Tag\u548CAuto Rename Tag","slug":"auto-close-tag\u548Cauto-rename-tag"},{"level":2,"title":"vetur","slug":"vetur"},{"level":2,"title":"live server","slug":"live-server"},{"level":2,"title":"eslint","slug":"eslint"},{"level":2,"title":"prettier","slug":"prettier"}],"relativePath":"notes/4.vscode/1.\u4F7F\u7528/2.vscode\u5E38\u7528\u63D2\u4EF6.md","lastUpdated":1651718339574}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vscode\u5E38\u7528\u63D2\u4EF6" tabindex="-1">vscode\u5E38\u7528\u63D2\u4EF6 <a class="header-anchor" href="#vscode\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a></h1><h2 id="chinese" tabindex="-1">Chinese <a class="header-anchor" href="#chinese" aria-hidden="true">#</a></h2><blockquote><p>\u9002\u7528\u4E8E VS Code \u7684\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09\u8BED\u8A00\u5305</p></blockquote><h2 id="es7-react-redux-graphql-react-native-snippets" tabindex="-1">ES7 React/Redux/GraphQL/React-Native snippets <a class="header-anchor" href="#es7-react-redux-graphql-react-native-snippets" aria-hidden="true">#</a></h2><blockquote><p>\u63D0\u4F9B\u5F88\u591Areact\u4EE3\u7801\u7684\u5FEB\u6377\u952E\uFF0C\u7070\u5E38\u7684\u597D\u7528</p></blockquote><h2 id="bracket-pair-colorizer" tabindex="-1">Bracket Pair Colorizer <a class="header-anchor" href="#bracket-pair-colorizer" aria-hidden="true">#</a></h2><blockquote><p>\u5F69\u8679\u8272\u62EC\u53F7\u5339\u914D\uFF0C\u4F53\u9A8C\u6548\u679C\u975E\u5E38\u597D</p></blockquote><h2 id="indent-rainbow" tabindex="-1">Indent Rainbow <a class="header-anchor" href="#indent-rainbow" aria-hidden="true">#</a></h2><blockquote><p>\u5F69\u8679\u8272\u7F29\u8FDB\uFF0C\u642D\u914DBracket Pair Colorizer\uFF0C\u9879\u76EE\u53D8\u6210\u5F69\u8679\u8272</p></blockquote><h2 id="auto-close-tag\u548Cauto-rename-tag" tabindex="-1">Auto Close Tag\u548CAuto Rename Tag <a class="header-anchor" href="#auto-close-tag\u548Cauto-rename-tag" aria-hidden="true">#</a></h2><blockquote><p>\u524D\u8005\u81EA\u52A8\u95ED\u5408\u6807\u7B7E\uFF0C\u540E\u8005\u4FEE\u6539\u6807\u7B7E\u4F1A\u540C\u6B65\u5BF9\u5E94\u95ED\u5408\u6807\u7B7E</p></blockquote><h2 id="vetur" tabindex="-1">vetur <a class="header-anchor" href="#vetur" aria-hidden="true">#</a></h2><blockquote><p>\u63D0\u4F9Bvue\u4EE3\u7801\u9AD8\u4EAE\u548C\u683C\u5F0F\u5316</p></blockquote><p>vetur\u5BF9prettier\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u683C\u5F0F\u5316vue\u4EE3\u7801</p><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vetur.format.defaultFormatterOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">prettier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">singleQuote</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5982\u679C\u4E3A true\uFF0C\u5C06\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">semi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u5728\u6BCF\u884C\u672B\u5C3E\u6DFB\u52A0\u5206\u53F7</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">printWidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//  \u6BCF\u884C\u8D85\u8FC7\u591A\u5C11\u5B57\u7B26\u81EA\u52A8\u6362\u884C</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">wrapAttributes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// html\u6807\u7B7E\u5C5E\u6027\u6362\u884C</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">trailingComma</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// \u5C3D\u53EF\u80FD\u63A7\u5236\u5C3E\u968F\u9017\u53F7\u7684\u8F93\u51FA</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="live-server" tabindex="-1">live server <a class="header-anchor" href="#live-server" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u4E8E\u70ED\u52A0\u8F7Dhtml</p></blockquote><p>\u53EF\u4EE5\u5728settings.json\u4E2D\u6DFB\u52A0\u6D4F\u89C8\u5668\u8DEF\u5F84\uFF0C\u8BBE\u7F6Elive server\u6240\u6253\u5F00\u7684\u6D4F\u89C8\u5668</p><div class="language-json"><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">liveServer.settings.AdvanceCustomBrowserCmdLine</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Program Files</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Internet Explorer</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">iexplore.exe</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span></code></pre></div><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-hidden="true">#</a></h2><p>\u5982\u679C\u662F\u96C6\u6210\u81F3package.json\uFF0C\u5219\u5982\u4E0B\u65B9\u5F0F\u8BBE\u7F6E</p><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">no-undef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">no-prototype-builtins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">no-unused-vars</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-hidden="true">#</a></h2><p>\u5E38\u7528\u7684\u914D\u7F6E\uFF0C\u5728<code>settings.json</code>\u4E2D\u8BBE\u7F6E</p><div class="language-json"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5982\u679C\u4E3A true\uFF0C\u5C06\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.singleQuote</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u6BCF\u4E2A\u5236\u8868\u7B26\u5360\u7528\u7684\u7A7A\u683C\u6570</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.tabWidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">5</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u5F53\u7BAD\u5934\u51FD\u6570\u4EC5\u6709\u4E00\u4E2A\u53C2\u6570\u65F6\u52A0\u4E0A\u62EC\u53F7</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.arrowParens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">avoid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u63A7\u5236\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u7A7A\u683C\u8F93\u51FA</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.bracketSpacing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u5728\u6BCF\u884C\u672B\u5C3E\u6DFB\u52A0\u5206\u53F7</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.semi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u6307\u5B9A\u6BCF\u884C\u4EE3\u7801\u7684\u6700\u4F73\u957F\u5EA6\uFF0C \u5982\u679C\u8D85\u51FA\u957F\u5EA6\u5219\u6362\u884C</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.printWidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u5C3D\u53EF\u80FD\u63A7\u5236\u5C3E\u968F\u9017\u53F7\u7684\u8F93\u51FA\u3002 \u6709\u6548\u9009\u9879\uFF1A &#39;\u65E0&#39; - \u65E0\u5C3E\u968F\u9017\u53F7 &#39; es5&#39; - \u5728ES5\u4E2D\u6709\u6548\u7684\u5C3E\u968F\u9017\u53F7\uFF08\u5BF9\u8C61\uFF0C\u6570\u7EC4\u7B49\uFF09 &#39;all&#39; - \u5C3E\u968F\u9017\u53F7 \u5C3D\u53EF\u80FD\uFF08\u51FD\u6570\u53C2\u6570\uFF09</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier.trailingComma</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"></span></code></pre></div>', 25);
const _hoisted_26 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_26);
}
var _2_vscode____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _2_vscode____ as default };
