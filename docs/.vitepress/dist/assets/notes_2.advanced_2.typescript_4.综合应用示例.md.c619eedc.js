import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.50b69de1.js";
const __pageData = '{"title":"\u7EFC\u5408\u5E94\u7528\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CDB\u578B+\u8054\u5408\u7C7B\u578B+\u6570\u7EC4","slug":"\u6CDB\u578B-\u8054\u5408\u7C7B\u578B-\u6570\u7EC4"},{"level":2,"title":"vue\u4E2D\u5B9A\u4E49dom\u5143\u7D20","slug":"vue\u4E2D\u5B9A\u4E49dom\u5143\u7D20"},{"level":2,"title":"react\u7C7B\u578B","slug":"react\u7C7B\u578B"}],"relativePath":"notes/2.advanced/2.typescript/4.\u7EFC\u5408\u5E94\u7528\u793A\u4F8B.md","lastUpdated":1646712877772}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u7EFC\u5408\u5E94\u7528\u793A\u4F8B" tabindex="-1">\u7EFC\u5408\u5E94\u7528\u793A\u4F8B <a class="header-anchor" href="#\u7EFC\u5408\u5E94\u7528\u793A\u4F8B" aria-hidden="true">#</a></h1><h2 id="\u6CDB\u578B-\u8054\u5408\u7C7B\u578B-\u6570\u7EC4" tabindex="-1">\u6CDB\u578B+\u8054\u5408\u7C7B\u578B+\u6570\u7EC4 <a class="header-anchor" href="#\u6CDB\u578B-\u8054\u5408\u7C7B\u578B-\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span></span>\n<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u7C7B\u578B\u6B63\u786E</span></span>\n<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">] </span><span style="color:#676E95;font-style:italic;">//\u7C7B\u578B\u6B63\u786E</span></span>\n<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#676E95;font-style:italic;">//ts\u63D0\u793A\u4E0D\u80FD\u5C06\u7C7B\u578B\u201Cstring\u201D\u5206\u914D\u7ED9\u7C7B\u578B\u201Cnumber\u201D</span></span>\n<span class="line"></span></code></pre></div><h2 id="vue\u4E2D\u5B9A\u4E49dom\u5143\u7D20" tabindex="-1">vue\u4E2D\u5B9A\u4E49dom\u5143\u7D20 <a class="header-anchor" href="#vue\u4E2D\u5B9A\u4E49dom\u5143\u7D20" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> echart </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="react\u7C7B\u578B" tabindex="-1">react\u7C7B\u578B <a class="header-anchor" href="#react\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u7EC4\u4EF6\u7C7B\u578B</p><p>FunctionComponent&lt;P={}&gt;\u3001\u7B80\u5199FC&lt;P={}&gt;</p><p>\u4E00\u4E2A\u6CDB\u578B\u63A5\u53E3\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u53EF\u4EE5\u4E0D\u4F20,\u7528\u6765\u5B9A\u4E49props\u7684\u7C7B\u578B</p><div class="language-typescript"><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorsProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">detail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">//const Editors: React.FunctionComponent&lt;props: EditorsProps&gt; = () =&gt; {</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Editors</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">FC</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EditorsProps</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">detail</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (&lt;&gt;&lt;/&gt;)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
var _4_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _4_______ as default };
