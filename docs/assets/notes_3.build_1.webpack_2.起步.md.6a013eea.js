import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b24e24a6.js";
const __pageData = '{"title":"\u8D77\u6B65","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u57FA\u672C\u5B89\u88C5","slug":"\u57FA\u672C\u5B89\u88C5"},{"level":2,"title":"\u521B\u5EFA\u4E00\u4E2A bundle","slug":"\u521B\u5EFA\u4E00\u4E2A-bundle"},{"level":3,"title":"\u7A0D\u5FAE\u8C03\u6574\u4E0B\u76EE\u5F55\u7ED3\u6784","slug":"\u7A0D\u5FAE\u8C03\u6574\u4E0B\u76EE\u5F55\u7ED3\u6784"},{"level":3,"title":"\u5B89\u88C5lodash","slug":"\u5B89\u88C5lodash"}],"relativePath":"notes/3.build/1.webpack/2.\u8D77\u6B65.md","lastUpdated":1651661884326}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u8D77\u6B65" tabindex="-1">\u8D77\u6B65 <a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a></h1><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55\u6587\u4EF6\u5939</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir webpack-demo</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> webpack-demo</span></span>\n<span class="line"></span></code></pre></div><p>\u65B0\u5EFA<code>src/index.js</code>\uFF0C<code>index.html</code></p><p>index.js</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u8FD9\u91CC\u7684_\u662Flodash\u7684\u8BED\u6CD5</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">())</span></span>\n<span class="line"></span></code></pre></div><p>index.html</p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8D77\u6B65</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/lodash@4.17.20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C<code>&lt;script&gt;</code> \u6807\u7B7E\u4E4B\u95F4\u5B58\u5728<code>\u9690\u5F0F\u4F9D\u8D56\u5173\u7CFB</code>(<code>index.js</code> \u4E2D\u7684\u51FD\u6570\u6B63\u5E38\u8FD0\u884C\u9700\u8981 <code>lodash</code>)</p><p>\u4E4B\u6240\u4EE5\u79F0\u4E3A<code>\u9690\u5F0F\u4F9D\u8D56\u5173\u7CFB</code>\uFF0C\u8FD9\u662F\u56E0\u4E3A <code>index.js</code> \u5E76\u672A<code>\u663E\u5F0F\u58F0\u660E</code>\u5B83\u9700\u8981 <code>lodash</code>\uFF0C\u800C\u662F\u76F4\u63A5\u5C31\u4F7F\u7528<code>lodash</code>\u7684\u8BED\u6CD5<code>_</code></p><p>\u8FD9\u6837\u4F20\u7EDF\u7684<code>script src</code>\u7684\u5F15\u7528\u5199\u6CD5\u662F\u4F1A\u4EA7\u751F\u4E00\u4E9B\u95EE\u9898\u7684\uFF1A</p><ul><li>\u65E0\u6CD5\u76F4\u63A5\u4F53\u73B0<code>index.js</code>\u7684\u6267\u884C\u4F9D\u8D56\u4E8E<code>lodash</code></li><li>\u5982\u679C <code>lodash</code>\u4E0D\u5B58\u5728\uFF0C\u6216\u8005\u5F15\u5165\u987A\u5E8F\u9519\u8BEF\uFF0C<code>index.js</code>\u5C06\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C</li><li>\u5982\u679C<code>lodash</code>\u88AB\u5F15\u5165\u4F46\u662F\u5E76\u6CA1\u6709\u4F7F\u7528\uFF0C\u6D4F\u89C8\u5668\u5C06\u88AB\u8FEB\u4E0B\u8F7D\u65E0\u7528\u4EE3\u7801</li></ul><p>\u4E5F\u5C31\u662F</p><ul><li>\u65E0\u6CD5\u76F4\u63A5\u4F53\u73B0<code>js</code>\u7684\u6267\u884C<code>\u4F9D\u8D56\u4E8E\u5916\u90E8\u5E93</code></li><li>\u5982\u679C<code>\u4F9D\u8D56\u7684\u5916\u90E8\u5E93</code>\u4E0D\u5B58\u5728\uFF0C\u6216\u8005\u5F15\u5165\u987A\u5E8F\u9519\u8BEF\uFF0C<code>js</code>\u5C06\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C</li><li>\u5982\u679C<code>\u4F9D\u8D56\u7684\u5916\u90E8\u5E93</code>\u88AB\u5F15\u5165\u4F46\u662F\u5E76\u6CA1\u6709\u4F7F\u7528\uFF0C\u6D4F\u89C8\u5668\u5C06\u88AB\u8FEB\u4E0B\u8F7D\u65E0\u7528\u4EE3\u7801</li></ul><p>\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4F7F\u7528<code>webpack</code>\u6765\u7BA1\u7406<code>js</code></p><h2 id="\u57FA\u672C\u5B89\u88C5" tabindex="-1">\u57FA\u672C\u5B89\u88C5 <a class="header-anchor" href="#\u57FA\u672C\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u521D\u59CB\u5316 package.json\uFF0C\u5728\u672C\u5730\u5B89\u88C5 <code>webpack</code>\uFF0C\u5B89\u88C5 <a href="https://github.com/webpack/webpack-cli" target="_blank" rel="noopener noreferrer"><code>webpack-cli</code></a>\uFF08\u6B64\u5DE5\u5177\u7528\u4E8E\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884C webpack\uFF09</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm init -y</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm i webpack webpack-cli -D</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u4E00\u4E2A-bundle" tabindex="-1">\u521B\u5EFA\u4E00\u4E2A bundle <a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A-bundle" aria-hidden="true">#</a></h2><h3 id="\u7A0D\u5FAE\u8C03\u6574\u4E0B\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u7A0D\u5FAE\u8C03\u6574\u4E0B\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u7A0D\u5FAE\u8C03\u6574\u4E0B\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><p>\u521B\u5EFA<code>dist</code>\u6587\u4EF6\u5939\u7528\u4E8E\u5B58\u653E<code>\u5206\u53D1\u4EE3\u7801</code>\uFF0C\u5C06<code>index.html</code>\u79FB\u52A8\u5230<code>dist</code>\u6587\u4EF6\u5939\u4E2D\uFF0C<code>src</code>\u6587\u4EF6\u5939\u4ECD\u5B58\u653E<code>\u6E90\u4EE3\u7801</code></p><p><code>\u5206\u53D1\u4EE3\u7801</code>\u662F\u6307\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u7ECF\u8FC7\u6700\u5C0F\u5316\u548C\u4F18\u5316\u540E\u4EA7\u751F\u7684\u8F93\u51FA\u7ED3\u679C\uFF0C\u6700\u7EC8\u5C06\u5728\u6D4F\u89C8\u5668\u4E2D\u52A0\u8F7D\u3002<code>\u6E90\u4EE3\u7801</code>\u662F\u6307\u7528\u4E8E\u4E66\u5199\u548C\u7F16\u8F91\u7684\u4EE3\u7801</p><h3 id="\u5B89\u88C5lodash" tabindex="-1">\u5B89\u88C5lodash <a class="header-anchor" href="#\u5B89\u88C5lodash" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -s lodash</span></span>\n<span class="line"></span></code></pre></div><p>index.js</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">())</span></span>\n<span class="line"></span></code></pre></div>', 27);
const _hoisted_28 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_28);
}
var _2___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _2___ as default };
