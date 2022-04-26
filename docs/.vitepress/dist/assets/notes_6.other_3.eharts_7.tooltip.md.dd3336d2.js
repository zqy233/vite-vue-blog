import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.db791414.js";
const __pageData = '{"title":"tooltip","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u60AC\u6D6E\u63D0\u793A\u6846\u6587\u672C","slug":"\u81EA\u5B9A\u4E49\u60AC\u6D6E\u63D0\u793A\u6846\u6587\u672C"},{"level":2,"title":"\u4E0D\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6","slug":"\u4E0D\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6"},{"level":2,"title":"\u8BBE\u7F6E\u60AC\u6D6E\u63D0\u793A\u6846\u4F4D\u7F6E","slug":"\u8BBE\u7F6E\u60AC\u6D6E\u63D0\u793A\u6846\u4F4D\u7F6E"},{"level":2,"title":"\u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u60AC\u6D6E\u63D0\u793A\u6846","slug":"\u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u60AC\u6D6E\u63D0\u793A\u6846"}],"relativePath":"notes/6.other/3.eharts/7.tooltip.md","lastUpdated":1650944062201}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="tooltip" tabindex="-1">tooltip <a class="header-anchor" href="#tooltip" aria-hidden="true">#</a></h1><h2 id="\u81EA\u5B9A\u4E49\u60AC\u6D6E\u63D0\u793A\u6846\u6587\u672C" tabindex="-1">\u81EA\u5B9A\u4E49\u60AC\u6D6E\u63D0\u793A\u6846\u6587\u672C <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u60AC\u6D6E\u63D0\u793A\u6846\u6587\u672C" aria-hidden="true">#</a></h2><p>\u8BBE\u7F6E tooltip \u4E2D formatter \u5C5E\u6027\u4E3A\u51FD\u6570\uFF0Creturn \u4E00\u4E2A html \u5B57\u7B26\u4E32\u7528\u4E8E\u6E32\u67D3\u9F20\u6807\u60AC\u6D6E\u63D0\u793A\u6846\uFF0Cparams \u662F\u5F53\u524D\u60AC\u6D6E\u5904\u7684\u5C5E\u6027</p><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;">   tooltip: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> &#39;item&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">    formatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> params =&gt; </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      return `&lt;div&gt;&lt;span style=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">color:#F2D15C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;${params.value</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">&lt;/span&gt;%&lt;/div&gt;`</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4E0D\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6" tabindex="-1">\u4E0D\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E0D\u54CD\u5E94\u9F20\u6807\u4E8B\u4EF6" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;">  tooltip: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    triggerOn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    formatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> params =&gt; </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      return `&lt;div&gt;&lt;span style=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">color:#F2D15C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;${params.value</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">&lt;/span&gt;%&lt;/div&gt;`</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8BBE\u7F6E\u60AC\u6D6E\u63D0\u793A\u6846\u4F4D\u7F6E" tabindex="-1">\u8BBE\u7F6E\u60AC\u6D6E\u63D0\u793A\u6846\u4F4D\u7F6E <a class="header-anchor" href="#\u8BBE\u7F6E\u60AC\u6D6E\u63D0\u793A\u6846\u4F4D\u7F6E" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;">  tooltip: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">70%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">    formatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> params =&gt; </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      return `&lt;div&gt;&lt;span style=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">color:#F2D15C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;${params.value</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">&lt;/span&gt;%&lt;/div&gt;`</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u60AC\u6D6E\u63D0\u793A\u6846" tabindex="-1">\u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u60AC\u6D6E\u63D0\u793A\u6846 <a class="header-anchor" href="#\u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u60AC\u6D6E\u63D0\u793A\u6846" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;">  tooltip: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    alwaysShowContent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    formatter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> params =&gt; </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      return `&lt;div&gt;&lt;span style=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">color:#F2D15C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;${params.value</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">&lt;/span&gt;%&lt;/div&gt;`</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"></span></code></pre></div>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
var _7_tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _7_tooltip as default };
