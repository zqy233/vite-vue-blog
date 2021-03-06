import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b98f0c2c.js";
const __pageData = '{"title":"\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E8C\u5206\u67E5\u627E","slug":"\u4E8C\u5206\u67E5\u627E"}],"relativePath":"notes/1.basic/9.\u7B97\u6CD5/1.\u57FA\u7840.md","lastUpdated":1655092825779}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u57FA\u7840" tabindex="-1">\u57FA\u7840 <a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a></h1><h2 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1">\u4E8C\u5206\u67E5\u627E <a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a></h2><blockquote><p>\u4E8C\u5206\u67E5\u627E\u7684\u57FA\u672C\u601D\u60F3\u662F\u5C06n\u4E2A\u5143\u7D20\u5206\u6210\u5927\u81F4\u76F8\u7B49\u7684\u4E24\u90E8\u5206\uFF0C\u53D6arr[n/2]\u4E2D\u95F4\u503C\u4E0Ex\u505A\u6BD4\u8F83\uFF0C\u5982\u679Cx=arr[n/2]\uFF0C\u5219\u627E\u5230x\uFF0C\u7B97\u6CD5\u7ED3\u675F\uFF1B\u5982\u679Cx&lt;arr[n/2]\uFF0C\u5219\u53EA\u8981\u5728\u6570\u7EC4arr\u7684\u5DE6\u534A\u90E8\u5206\u7EE7\u7EED\u67E5\u627Ex\uFF1B\u5982\u679Cx&gt;arr[n/2]\uFF0C\u5219\u53EA\u8981\u5728\u6570\u7EC4arr\u7684\u53F3\u534A\u90E8\u5206\u67E5\u627Ex</p><p>arr\u662F\u6240\u8981\u67E5\u627E\u7684\u6570\u7EC4\uFF0Cx\u662F\u8981\u67E5\u627E\u7684\u5143\u7D20</p></blockquote><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * \u4E8C\u5206\u67E5\u627E</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#676E95;font-style:italic;"> \u67E5\u627E\u7684\u6570\u7EC4</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#676E95;font-style:italic;"> \u67E5\u627E\u7684\u5143\u7D20</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> \u67E5\u627E\u5230\u8FD4\u56DE\u6570\u7EC4\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE-1</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">binarySearch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">low</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u9996\u4E0B\u6807</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">high</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5C3E\u4E0B\u6807</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u53EA\u8981\u67E5\u627E\u533A\u95F4\u8D77\u59CB\u70B9\u548C\u7ED3\u675F\u70B9\u4E2D\u95F4\u8FD8\u6709\u503C(\u8981\u5305\u62EC\u4E24\u503C\u76F8\u540C\u7684\u60C5\u51B5)\uFF0C\u5C31\u7EE7\u7EED\u8FDB\u884C\u67E5\u627E</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">low</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">high</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">low</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">high</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u786E\u5B9A\u4E2D\u95F4\u503C\u4E0B\u6807</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u67E5\u627E\u503C\u7B49\u4E8E\u4E2D\u95F4\u503C</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5219\u8FD9\u4E2Amid\u503C\uFF0C\u5C31\u662F\u67E5\u627E\u5230\u7684\u6570\u7EC4\u4E0B\u6807</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//\u5982\u679C\u67E5\u627E\u503C\u5C0F\u4E8E\u4E2D\u95F4\u503C</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">high</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5219\u5728\u5DE6\u534A\u90E8\u5206\u67E5\u627E\uFF0C\u9700\u8981\u91CD\u65B0\u786E\u8BA4\u533A\u95F4high\u7684\u4F4D\u7F6E</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5426\u5219\u67E5\u627E\u503C\u5927\u4E8E\u4E2D\u95F4\u503C</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">low</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5219\u5728\u53F3\u534A\u90E8\u5206\u67E5\u627E\uFF0C\u9700\u8981\u91CD\u65B0\u786E\u8BA4\u533A\u95F4low\u7684\u4F4D\u7F6E</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u6CA1\u6709\u67E5\u627E\u5230\uFF0C\u8FD4\u56DE-1</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">binarySearch</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x))</span></span>\n<span class="line"></span></code></pre></div>', 4);
const _hoisted_5 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_5);
}
var _1___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1___ as default };
