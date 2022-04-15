import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.cb380004.js";
const __pageData = '{"title":"doc\u6CE8\u91CA\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"function","slug":"function"},{"level":2,"title":"interface","slug":"interface"},{"level":2,"title":"@link","slug":"link"},{"level":2,"title":"enum","slug":"enum"},{"level":2,"title":"\u4EE3\u7801\u63D0\u793A","slug":"\u4EE3\u7801\u63D0\u793A"},{"level":2,"title":"\u5355\u8BCD\u6DFB\u52A0\u80CC\u666F\u8272","slug":"\u5355\u8BCD\u6DFB\u52A0\u80CC\u666F\u8272"},{"level":2,"title":"\u65E0\u5E8F\u5217\u8868","slug":"\u65E0\u5E8F\u5217\u8868"}],"relativePath":"notes/1.basic/4.typescript/7.doc\u6CE8\u91CA\u6CD5.md","lastUpdated":1649990364668}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="doc\u6CE8\u91CA\u6CD5" tabindex="-1">doc\u6CE8\u91CA\u6CD5 <a class="header-anchor" href="#doc\u6CE8\u91CA\u6CD5" aria-hidden="true">#</a></h1><blockquote><p>\u5F00\u53D1\u4EE3\u7801\u8865\u5168\u65F6\u6216\u9F20\u6807\u60AC\u6D6E\u65F6\u63D0\u4F9B\u6CE8\u91CA\u8BF4\u660E</p></blockquote><h2 id="function" tabindex="-1">function <a class="header-anchor" href="#function" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * \u83B7\u53D6\u5E97\u94FA\u7B7E\u7EA6\u5408\u540C\u4FE1\u606F</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">access</span><span style="color:#676E95;font-style:italic;"> http://api.xxx.com/getUserNameByTagIdFromServer</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">tagId</span><span style="color:#676E95;font-style:italic;"> \u6807\u7B7Eid {number}</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> name \u7528\u6237\u540D\u79F0 {string}</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">queryUserNameByTagId</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tagId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">userName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getUserNameByTagIdFromServer</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tagId</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">userName</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="interface" tabindex="-1">interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IUser</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * \u7528\u6237\u59D3\u540D</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   * \u7528\u6237\u5E74\u9F84</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IUser</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8D75\u4E91</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><h2 id="link" tabindex="-1">@link <a class="header-anchor" href="#link" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u8DF3\u8F6C\u81F3\u6307\u5B9A\u7C7B\u578B\u8DEF\u5F84</p><h2 id="enum" tabindex="-1">enum <a class="header-anchor" href="#enum" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * \u6C34\u679C\u679A\u4E3E\u5B9A\u4E49</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">APPLE</span><span style="color:#676E95;font-style:italic;"> apple \u82F9\u679C</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">ORANGE</span><span style="color:#676E95;font-style:italic;"> orange \u6A58\u5B50</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EFruit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** \u82F9\u679C */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  APPLE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">apple</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/** \u82F9\u679C */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ORANGE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">orange</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4EE3\u7801\u63D0\u793A" tabindex="-1">\u4EE3\u7801\u63D0\u793A <a class="header-anchor" href="#\u4EE3\u7801\u63D0\u793A" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     * Callback with latest motion values, fired max once per frame.</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     *</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     * ```jsx</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     * function onUpdate(latest) {</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     *   console.log(latest.x, latest.opacity)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     * }</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     *</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     * &lt;Frame animate={{ x: 100, opacity: 0 }} onUpdate={onUpdate} /&gt;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     * ```</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u5355\u8BCD\u6DFB\u52A0\u80CC\u666F\u8272" tabindex="-1">\u5355\u8BCD\u6DFB\u52A0\u80CC\u666F\u8272 <a class="header-anchor" href="#\u5355\u8BCD\u6DFB\u52A0\u80CC\u666F\u8272" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/** `\u6700\u9AD8\u8D1F\u8377` */</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u65E0\u5E8F\u5217\u8868" tabindex="-1">\u65E0\u5E8F\u5217\u8868 <a class="header-anchor" href="#\u65E0\u5E8F\u5217\u8868" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * Given an input range of `[-200, -100, 100, 200]` and an output range of</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * - When provided a value between `-200` and `-100`, will return a value between `0` and  `1`.</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * - When provided a value between `-100` and `100`, will return `1`.</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * - When provided a value between `100` and `200`, will return a value between `1` and  `0`</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"></span></code></pre></div>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
var _7_doc___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _7_doc___ as default };
