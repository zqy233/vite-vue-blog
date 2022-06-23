import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b98f0c2c.js";
const __pageData = '{"title":"Node\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728Webpack\u914D\u7F6E\u6587\u4EF6\u76F4\u63A5\u8D4B\u503C\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"\u5728webpack\u914D\u7F6E\u6587\u4EF6\u76F4\u63A5\u8D4B\u503C\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":2,"title":"\u547D\u4EE4\u884C\uFF08CLI\uFF09\u8BBE\u7F6E\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"\u547D\u4EE4\u884C\uFF08cli\uFF09\u8BBE\u7F6E\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":3,"title":"Windows \u7CFB\u7EDF","slug":"windows-\u7CFB\u7EDF"},{"level":2,"title":"\u914D\u7F6E package.json\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"\u914D\u7F6E-package-json\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":3,"title":"windows \u7CFB\u7EDF","slug":"windows-\u7CFB\u7EDF-1"},{"level":2,"title":"cross-env\u8DE8\u5E73\u53F0\uFF08\u63A8\u8350\uFF09","slug":"cross-env\u8DE8\u5E73\u53F0\uFF08\u63A8\u8350\uFF09"}],"relativePath":"notes/1.basic/5.node/4.\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E.md","lastUpdated":1655707104637}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="node\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E" tabindex="-1">Node\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E <a class="header-anchor" href="#node\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E" aria-hidden="true">#</a></h1><blockquote><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u9488\u5BF9\u4E0D\u540C\u73AF\u5883\uFF08\u5F00\u53D1\u73AF\u5883\u3001\u751F\u4EA7\u73AF\u5883\u7B49\uFF09\uFF0C\u8FDB\u884C\u76F8\u5E94\u7B56\u7565\u7684\u6253\u5305\uFF08\u6BD4\u5982\u66F4\u6539\u63A5\u53E3\u5730\u5740\uFF0C\u4EE3\u7801\u662F\u5426\u538B\u7F29\u7B49\uFF09</p><p>\u7531\u4E8E\u6253\u5305\u5DE5\u5177\u5982<code>webpack</code>\u8FD0\u884C\u5728Nodejs \u73AF\u5883\u4E2D\uFF0C\u8981\u8BC6\u522B\u4E0D\u540C\u73AF\u5883\uFF0C\u5C31\u5F97\u914D\u7F6ENodejs\u73AF\u5883\u53D8\u91CF\uFF0C\u5E76\u4E14\u628A\u5B83\u5F53\u6210\u5224\u65AD\u4E0D\u540C\u73AF\u5883\u7684\u4F9D\u636E</p><p>Nodejs \u63D0\u4F9B\u4E86 <code>process.<wbr>env</code> API\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u7528\u6237\u73AF\u5883\u4FE1\u606F\u7684\u5BF9\u8C61\u3002\u5F53\u6211\u4EEC\u7ED9 Nodejs \u8BBE\u7F6E\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u5E76\u4E14\u628A\u5B83\u6302\u8F7D\u5728 <code>process.<wbr>env</code> \u5BF9\u8C61\u4E0A\uFF0C\u4FBF\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u8FDB\u884C\u76F8\u5E94\u7684\u73AF\u5883\u5224\u65AD</p></blockquote><p>\u4E8E\u662F\uFF0C\u7ECF\u5E38\u4F1A\u770B\u5230\u7C7B\u4F3C\u4E0B\u65B9\u7684\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>\u8981\u8BF4\u660E\u7684\u662F\uFF0C<code>NODE_ENV</code> \u8FD9\u4E2A\u540D\u79F0\u53EA\u662F\u5F00\u53D1\u793E\u533A\u7684\u4E00\u79CD\u5171\u8BC6\uFF0C\u540D\u79F0\u5185\u5BB9\u4E0D\u662F\u56FA\u5B9A\u7684\u3002\u5982\u679C\u9700\u8981\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u628A\u5B83\u5B9A\u4E49\u4E3A <code>NODE_XXX</code></p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u4F55\u8BBE\u7F6E\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u5462\uFF1F\u603B\u7ED3\u4E0B\u6765\uFF0C\u53EF\u901A\u8FC7\u4EE5\u4E0B\u51E0\u79CD\u65B9\u5F0F</p><h2 id="\u5728webpack\u914D\u7F6E\u6587\u4EF6\u76F4\u63A5\u8D4B\u503C\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">\u5728Webpack\u914D\u7F6E\u6587\u4EF6\u76F4\u63A5\u8D4B\u503C\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u5728webpack\u914D\u7F6E\u6587\u4EF6\u76F4\u63A5\u8D4B\u503C\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><p>\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u8F83\u7B80\u5355\u7C97\u66B4\u3002\u53EA\u9700\u8981\u5728Webpack\u6253\u5305\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u76F4\u63A5\u7ED9 <code>process.<wbr>env.NODE_ENV</code> \u8D4B\u503C\u5373\u53EF</p><p>\u7F3A\u70B9\uFF1A\u6BCF\u6B21\u5728\u4E0D\u540C\u73AF\u5883\u4E0B\u6253\u5305\u65F6\uFF0C\u90FD\u8981\u624B\u52A8\u53CD\u590D\u4FEE\u6539\u5B83\u7684\u503C\uFF0C\u6240\u4EE5\u4E0D\u63A8\u8350</p><p>webpack.config.js</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u547D\u4EE4\u884C\uFF08cli\uFF09\u8BBE\u7F6E\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">\u547D\u4EE4\u884C\uFF08CLI\uFF09\u8BBE\u7F6E\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u547D\u4EE4\u884C\uFF08cli\uFF09\u8BBE\u7F6E\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><h3 id="windows-\u7CFB\u7EDF" tabindex="-1">Windows \u7CFB\u7EDF <a class="header-anchor" href="#windows-\u7CFB\u7EDF" aria-hidden="true">#</a></h3><p>Windows \u7CFB\u7EDF\u4E0B\uFF0C\u6700\u5E38\u7528\u7684\u547D\u4EE4\u884C\u9762\u677F\u5C31\u662F <code>CMD</code>\uFF08Command\u7684\u7B80\u5199\uFF09 \u548C <code>Powershell</code>\u3002\u5B83\u4EEC\u7684\u64CD\u4F5C\u5206\u522B\u5982\u4E0B\uFF1A</p><h4 id="cmd-command-\u6216-\u547D\u4EE4\u63D0\u793A\u7B26" tabindex="-1">CMD (Command \u6216 \u547D\u4EE4\u63D0\u793A\u7B26) <a class="header-anchor" href="#cmd-command-\u6216-\u547D\u4EE4\u63D0\u793A\u7B26" aria-hidden="true">#</a></h4><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6240\u6709\u73AF\u5883\u53D8\u91CF</span></span>\n<span class="line"><span style="color:#82AAFF;">set</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5355\u4E2A\u73AF\u5883\u53D8\u91CF\uFF08\u4EE5 NODE_ENV \u4E3A\u4F8B\uFF09</span></span>\n<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> NODE_ENV</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6E\u5355\u4E2A\u73AF\u5883\u53D8\u91CF\uFF08\u4EE5 NODE_ENV \u4E3A\u4F8B\uFF09</span></span>\n<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> NODE_ENV=production</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u5355\u4E2A\u73AF\u5883\u53D8\u91CF\uFF08\u4EE5 NODE_ENV \u4E3A\u4F8B\uFF09</span></span>\n<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> NODE_ENV=</span></span>\n<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u884C\u4EE5 <code>NODE_ENV</code> \u53D8\u91CF\u4E3A\u4F8B\uFF0C\u5728 CMD \u547D\u4EE4\u9762\u677F\u7684\u64CD\u4F5C\u4E2D\uFF0C\u5982\u679C <code>NODE_ENV</code> \u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u901A\u8FC7 <code>set NODE_ENV</code> \u547D\u4EE4\u67E5\u770B\u65F6\uFF0C\u4F1A\u63D0\u793A <code>\u73AF\u5883\u53D8\u91CF NODE_ENV \u6CA1\u6709\u5B9A\u4E49</code></p><p>\u5F53\u8BBE\u7F6E\u5B8C <code>NODE_ENV</code>\uFF08\u5047\u8BBE\u8BBE\u7F6E\u503C\u4E3A <code>production</code>\uFF09\uFF0C\u518D\u901A\u8FC7 <code>set NODE_ENV</code> \u547D\u4EE4\u67E5\u770B\u65F6\uFF0C\u4F1A\u8FD4\u56DE <code>NODE_ENV=production</code></p><p>\u4E0A\u9762\u7684\u73AF\u5883\u8BBE\u7F6E\u53EA\u662F\u4E34\u65F6\u7684\uFF0C\u5373\u53EA\u9488\u5BF9\u5F53\u524D\u8FD0\u884C\u7A97\u53E3\u7684\u73AF\u5883\u6709\u6548\u3002\u5F53CLI\u8FD0\u884C\u7A97\u53E3\u5173\u95ED\u4EE5\u540E\uFF0C\u76F8\u5173\u8BBE\u7F6E\u90FD\u4F1A\u4E22\u5931</p><p>\u5982\u679C\u4F60\u5E0C\u671B\u8BBE\u7F6E\u4E00\u76F4\u751F\u6548\uFF08\u5373\u672C\u5730\u8BBE\u7F6E\uFF09\uFF0C\u53EF\u901A\u8FC7 <code>\u63A7\u5236\u9762\u677F -&gt; \u7CFB\u7EDF\u548C\u5B89\u5168 -&gt; \u7CFB\u7EDF -&gt; \u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E -&gt; \u9AD8\u7EA7 -&gt; \u73AF\u5883\u53D8\u91CF</code> \u8FD9\u6837\u8FDB\u884C\u8BBE\u7F6E\uFF08windows10\u53EF\u80FD\u9700\u8981\u91CD\u542F\uFF09</p><p>\u7F3A\u70B9\uFF1A\u53EA\u80FD\u5BF9\u672C\u673A\u751F\u6548\uFF0C\u4E0D\u9002\u5408\u56E2\u961F\u5F00\u53D1\uFF0C\u4E14\u5F00\u53D1\u548C\u6253\u5305\u90FD\u9700\u8981\u624B\u52A8\u914D\u7F6E</p><h2 id="\u914D\u7F6E-package-json\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">\u914D\u7F6E package.json\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u914D\u7F6E-package-json\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><p>\u5728\u9879\u76EE\u914D\u7F6E\u6587\u4EF6 package.json \u4E2D\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u6253\u5305\u547D\u4EE4\u53BB\u8BBE\u7F6E\u76F8\u5E94\u7684 Nodejs \u73AF\u5883\u53D8\u91CF\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u4E3B\u6D41\u7684\u505A\u6CD5\u3002\u5176\u5B9E\u672C\u8D28\u4E0A\u6765\u8BF4\uFF0C\u53EA\u662F\u5C06\u5728\u547D\u4EE4\u884C\u9762\u677F\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u547D\u4EE4\u8BED\u53E5\u653E\u5230\u4E86 <code>package.json</code> \u6587\u4EF6\u4E2D\uFF0C\u628A \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u548C\u6253\u5305\u4E24\u4E2A\u547D\u4EE4\u5408\u5E76\u8FD0\u884C\u800C\u5DF2</p><h3 id="windows-\u7CFB\u7EDF-1" tabindex="-1">windows \u7CFB\u7EDF <a class="header-anchor" href="#windows-\u7CFB\u7EDF-1" aria-hidden="true">#</a></h3><p>\u65E0\u8BBA\u662F\u4F7F\u7528 CMD (\u547D\u4EE4\u63D0\u793A\u7B26) \u8FD8\u662F Powershell \u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u90FD\u53EF\u4EE5\u5728 <code>package.json</code> \u914D\u7F6E<code>NODE_ENV</code></p><p>\u6CE8\u610F\uFF0C<code>NODE_ENV=production&amp;&amp;</code>\u8981\u53BB\u6389\u7A7A\u683C\uFF0C\u4E0D\u7136\u8BBE\u7F6E\u5B8C<code>NODE_ENV</code> \u4F1A\u591A\u4E2A\u7A7A\u683C\uFF0C\u53D8\u6210<code>&quot;production &quot;</code></p><div class="language-json"><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">set NODE_ENV=production&amp;&amp; npm run clean &amp;&amp; webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">clean</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rimraf ./build &amp;&amp; mkdirp build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p><code>mkdirp</code> \u662F\u4E00\u4E2A\u751F\u6210\u6587\u4EF6\u5939\u7684\u7B2C\u4E09\u65B9\u5305\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u547D\u4EE4\u884C\u9762\u677F\u8FD0\u884C <code>npm run build</code> \u5373\u53EF\u5B8C\u6210\u6253\u5305</p><p>\u7F3A\u70B9\uFF1A\u4E0D\u80FD\u8DE8\u5E73\u53F0</p><h2 id="cross-env\u8DE8\u5E73\u53F0\uFF08\u63A8\u8350\uFF09" tabindex="-1">cross-env\u8DE8\u5E73\u53F0\uFF08\u63A8\u8350\uFF09 <a class="header-anchor" href="#cross-env\u8DE8\u5E73\u53F0\uFF08\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><p><a href="https://www.npmjs.com/package/cross-env" target="_blank" rel="noopener noreferrer">cross-env</a> \u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u7B2C\u4E09\u65B9\u5305\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u4F60\u53EA\u914D\u7F6E\u4E00\u884C\u547D\u4EE4\uFF0C\u5C31\u80FD\u8F7B\u677E\u5730\u5728\u591A\u4E2A\u5E73\u53F0\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u9996\u5148\uFF0C\u53EA\u9700\u8981\u5728\u9879\u76EE\u4E2D\u5B89\u88C5</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -D cross-env</span></span>\n<span class="line"></span></code></pre></div><p>\u7136\u540E\uFF0C\u5728 <code>package.json</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF1A</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">// package.json</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm run clean &amp;&amp; cross-env NODE_ENV=production webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clean</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rimraf ./build &amp;&amp; mkdirp build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>\u8FD9\u6837\uFF0C\u4E0D\u7BA1\u662Fwindows\u8FD8\u662Fmac\uFF0C\u90FD\u53EF\u4EE5\u6B63\u5E38\u8BBE\u7F6E<code>NODE_ENV</code></p>', 36);
const _hoisted_37 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_37);
}
var _4_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _4_______ as default };
