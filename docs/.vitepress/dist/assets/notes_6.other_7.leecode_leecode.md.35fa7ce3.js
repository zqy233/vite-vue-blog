import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.7b5b753a.js";
const __pageData = '{"title":"7.\u6574\u6570\u53CD\u8F6C","description":"","frontmatter":{},"headers":[{"level":2,"title":"7.\u6574\u6570\u53CD\u8F6C","slug":"_7-\u6574\u6570\u53CD\u8F6C"}],"relativePath":"notes/6.other/7.leecode/leecode.md","lastUpdated":1649686263686}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_7-\u6574\u6570\u53CD\u8F6C" tabindex="-1">7.<a href="https://leetcode-cn.com/problems/reverse-integer/" target="_blank" rel="noopener noreferrer">\u6574\u6570\u53CD\u8F6C</a> <a class="header-anchor" href="#_7-\u6574\u6570\u53CD\u8F6C" aria-hidden="true">#</a></h2><p>\u7ED9\u4F60\u4E00\u4E2A 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570 x \uFF0C\u8FD4\u56DE\u5C06 x \u4E2D\u7684\u6570\u5B57\u90E8\u5206\u53CD\u8F6C\u540E\u7684\u7ED3\u679C</p><p>\u5982\u679C\u53CD\u8F6C\u540E\u6574\u6570\u8D85\u8FC7 32 \u4F4D\u7684\u6709\u7B26\u53F7\u6574\u6570\u7684\u8303\u56F4 [\u22122 31\u6B21\u65B9, 2 31\u6B21\u65B9 \u2212 1] \uFF0C\u5C31\u8FD4\u56DE 0</p><p>\u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\uFF08\u6709\u7B26\u53F7\u6216\u65E0\u7B26\u53F7\uFF09</p><div class="language-ts"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5047\u8BBE\u73AF\u5883\u4E0D\u5141\u8BB8\u5B58\u50A8 64 \u4F4D\u6574\u6570\u7684\u610F\u601D\u662F\u4E0D\u80FD\u4F7F\u7528\u53D8\u91CF\u5B58\u50A8 64 \u4F4D\u6574\u6570</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span></span>\n<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>\n<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">Number</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">))</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">limit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">31</span><span style="color:#F07178;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">limit</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">flag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">limit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">flag</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">num</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span></code></pre></div>', 5);
const _hoisted_6 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_6);
}
var leecode = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, leecode as default };
