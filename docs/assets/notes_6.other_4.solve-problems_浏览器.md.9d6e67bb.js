import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b24e24a6.js";
const __pageData = '{"title":"\u6D4F\u89C8\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B0\u7248\u672C\u53D1\u5E03\u4E86,\u6570\u636E\u5374\u662F\u65E7\u7248\u672C\u7684","slug":"\u65B0\u7248\u672C\u53D1\u5E03\u4E86-\u6570\u636E\u5374\u662F\u65E7\u7248\u672C\u7684"},{"level":2,"title":"bing\u65E0\u6CD5\u8BBF\u95EE","slug":"bing\u65E0\u6CD5\u8BBF\u95EE"},{"level":2,"title":"chrome\u6D4F\u89C8\u5668warning, Added non-passive event listener to a scroll-blocking \u2018mousewheel\u2018 eventBug","slug":"chrome\u6D4F\u89C8\u5668warning-added-non-passive-event-listener-to-a-scroll-blocking-\u2018mousewheel\u2018-eventbug"},{"level":2,"title":"chrome\u6D4F\u89C8\u5668input\u8F93\u5165\u6846\u51FA\u73B0\u592A\u591A\u667A\u80FD\u63D0\u793A","slug":"chrome\u6D4F\u89C8\u5668input\u8F93\u5165\u6846\u51FA\u73B0\u592A\u591A\u667A\u80FD\u63D0\u793A"},{"level":2,"title":"\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u65F6\u53BB\u6389\u4E00\u4E9B\u7F51\u7AD9","slug":"\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u65F6\u53BB\u6389\u4E00\u4E9B\u7F51\u7AD9"},{"level":2,"title":"vimium","slug":"vimium"}],"relativePath":"notes/6.other/4.solve-problems/\u6D4F\u89C8\u5668.md","lastUpdated":1650017937187}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u6D4F\u89C8\u5668" tabindex="-1">\u6D4F\u89C8\u5668 <a class="header-anchor" href="#\u6D4F\u89C8\u5668" aria-hidden="true">#</a></h1><h2 id="\u65B0\u7248\u672C\u53D1\u5E03\u4E86-\u6570\u636E\u5374\u662F\u65E7\u7248\u672C\u7684" tabindex="-1">\u65B0\u7248\u672C\u53D1\u5E03\u4E86,\u6570\u636E\u5374\u662F\u65E7\u7248\u672C\u7684 <a class="header-anchor" href="#\u65B0\u7248\u672C\u53D1\u5E03\u4E86-\u6570\u636E\u5374\u662F\u65E7\u7248\u672C\u7684" aria-hidden="true">#</a></h2><p>\u95EE\u9898\uFF1A\u7F51\u9875\u5185\u5BB9\u66F4\u65B0\uFF0C\u90E8\u5206\u6570\u636E\u5374\u6CA1\u6709\u53D1\u751F\u66F4\u65B0</p><p>\u539F\u56E0\uFF1A\u5B58\u5728\u7F13\u5B58</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u957F\u6309\u6D4F\u89C8\u5668\u5DE6\u4FA7\u5237\u65B0\u56FE\u6807\uFF0C\u4F1A\u51FA\u73B0\u6E05\u7A7A\u7F13\u5B58\u9009\u9879\uFF0C\u70B9\u51FB\u5373\u53EF</p><h2 id="bing\u65E0\u6CD5\u8BBF\u95EE" tabindex="-1">bing\u65E0\u6CD5\u8BBF\u95EE <a class="header-anchor" href="#bing\u65E0\u6CD5\u8BBF\u95EE" aria-hidden="true">#</a></h2><p>\u4FEE\u6539host(C:\\Windows\\System32\\drivers\\etc)</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">202.89.233.102 cn.bing.com</span></span>\n<span class="line"><span style="color:#A6ACCD;">202.89.233.102 www.bing.com</span></span>\n<span class="line"><span style="color:#A6ACCD;">202.89.233.102 bing.com</span></span>\n<span class="line"><span style="color:#A6ACCD;">202.89.233.102 bing.com.cn</span></span>\n<span class="line"><span style="color:#A6ACCD;">202.89.233.102 bing.cn</span></span>\n<span class="line"></span></code></pre></div><h2 id="chrome\u6D4F\u89C8\u5668warning-added-non-passive-event-listener-to-a-scroll-blocking-\u2018mousewheel\u2018-eventbug" tabindex="-1">chrome\u6D4F\u89C8\u5668warning, Added non-passive event listener to a scroll-blocking \u2018mousewheel\u2018 eventBug <a class="header-anchor" href="#chrome\u6D4F\u89C8\u5668warning-added-non-passive-event-listener-to-a-scroll-blocking-\u2018mousewheel\u2018-eventbug" aria-hidden="true">#</a></h2><p>chrome\u76D1\u542Ctouchstart\u65F6\uFF0C\u9700\u8981\u4F20\u9012\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C { passive: true }\uFF0Ctrue\u4EE3\u8868\u5192\u6CE1\u65F6\u89E6\u53D1\uFF0Cfalse\u4EE3\u8868\u6355\u83B7\u65F6\u89E6\u53D1</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">touchstart</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">passive</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="chrome\u6D4F\u89C8\u5668input\u8F93\u5165\u6846\u51FA\u73B0\u592A\u591A\u667A\u80FD\u63D0\u793A" tabindex="-1">chrome\u6D4F\u89C8\u5668input\u8F93\u5165\u6846\u51FA\u73B0\u592A\u591A\u667A\u80FD\u63D0\u793A <a class="header-anchor" href="#chrome\u6D4F\u89C8\u5668input\u8F93\u5165\u6846\u51FA\u73B0\u592A\u591A\u667A\u80FD\u63D0\u793A" aria-hidden="true">#</a></h2><p>\u60AC\u6D6E\u667A\u80FD\u63D0\u793A\u4E0A\uFF0Cctrl+delete\u5220\u9664</p><h2 id="\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u65F6\u53BB\u6389\u4E00\u4E9B\u7F51\u7AD9" tabindex="-1">\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u65F6\u53BB\u6389\u4E00\u4E9B\u7F51\u7AD9 <a class="header-anchor" href="#\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u65F6\u53BB\u6389\u4E00\u4E9B\u7F51\u7AD9" aria-hidden="true">#</a></h2><p>\u4F7F\u7528-\u53F7\u6765\u53BB\u6389\u8BE5\u7F51\u7AD9\u7684\u641C\u7D22\u7ED3\u679C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">\u5B9E\u73B0\u81EA\u5DF1\u7684\u811A\u624B\u67B6 -csdn-\u7B80\u4E66-\u77E5\u4E4E-\u817E\u8BAF\u4E91-\u6398\u91D1-\u535A\u5BA2\u56ED-\u601D\u5426</span></span>\n<span class="line"></span></code></pre></div><h2 id="vimium" tabindex="-1">vimium <a class="header-anchor" href="#vimium" aria-hidden="true">#</a></h2><p>chrome\u63D2\u4EF6\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u5168\u952E\u76D8\u64CD\u4F5C\u7F51\u9875</p><ul><li><p>f\uFF1A \u5C06\u5F53\u524D\u7F51\u9875\u4E0A\u7684\u6240\u6709\u53EF\u89C1\u94FE\u63A5/\u8F93\u5165\u6846\u5206\u914D\u4E00\u4E2A\u5FEB\u6377\u952E i\u6216exc\uFF1A\u9000\u51FAf\u6A21\u5F0F</p></li><li><p>o\uFF1A\u76F8\u5F53\u4E8EChrome\u4E2D\u7684\u5730\u5740\u680F\uFF0C\u53EF\u4EE5\u5339\u914D\u5386\u53F2\u8BB0\u5F55\u3001\u6536\u85CF\u5939\u5E76\u5728\u5F53\u524D\u7A97\u53E3\u6253\u5F00\uFF0C\u6216\u8005\u76F4\u63A5\u6253\u5F00\u4E00\u4E2A\u7F51\u5740\u6216\u8005\u641C\u7D22\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u5982\u679C\u6309\u7684\u662FO\uFF0C\u5219\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00</p></li><li><p>b\uFF1A\u4EC5\u4ECE\u4E66\u7B7E\u641C\u7D22\u5730\u5740\uFF0C\u56DE\u8F66\u6253\u5F00 B \uFF1A\u4EC5\u4ECE\u4E66\u7B7E\u641C\u7D22\u5730\u5740\uFF0C\u56DE\u8F66\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00 T \u641C\u7D22\u5F53\u524D\u6D4F\u89C8\u5668\u7684\u6240\u6709\u6807\u7B7E</p></li><li><p>J\uFF1A \u4E0B\u4E00\u4E2A\u6807\u7B7E\u9875 K\uFF1A\u4E0A\u4E00\u4E2A\u6807\u7B7E\u9875</p></li><li><p>G\uFF1A\u5230\u8FBE\u9875\u9762\u5E95\u90E8 g+g\uFF08\u8FDE\u7EED\u6309\u4E24\u4E0Bg\uFF09\uFF1A\u56DE\u5230\u9876\u90E8</p></li><li><p>d\uFF1A\u5411\u4E0B\u6EDA\u52A8\u534A\u4E2A\u5C4F\u5E55 u\uFF1A\u5411\u4E0A\u79FB\u52A8\u534A\u4E2A\u5C4F\u5E55</p></li><li><p>j\uFF1A \u5411\u4E0B\u7EC6\u5FAE\u6EDA\u52A8\u7A97\u53E3 k\uFF1A\u5411\u4E0A\u7EC6\u5FAE\u6EDA\u52A8\u7A97\u53E3\uFF0C\u6BD4\u4E0A\u4E0B\u952E\u66F4\u987A\u6ED1</p></li><li><p>x\uFF1A \u5173\u95ED\u5F53\u524D\u9875\u9762 X\uFF1A\u6062\u590D\u521A\u521A\u5173\u95ED\u7684\u9875\u9762</p></li><li><p>r\uFF1A \u91CD\u65B0\u8F7D\u5165\u5F53\u524D\u7F51\u9875</p></li><li><p>H\uFF1A\u540E\u9000 L\uFF1A \u524D\u8FDB</p></li><li><p>g+s\uFF1A\u67E5\u770B\u7F51\u9875\u7684\u6E90\u4EE3\u7801</p></li><li><p>yy \uFF1A\u5C06\u5F53\u524D\u7F51\u5740\u590D\u5236\u5230\u526A\u8D34\u677F</p></li><li><p>yf\uFF1A \u5C06\u94FE\u63A5URL\u590D\u5236\u5230\u526A\u8D34\u677F</p></li><li><p>yt\uFF1A\u590D\u5236\u5F53\u524D\u9875\u9762\uFF0C\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00</p></li><li><p>gf \uFF1A\u5FAA\u73AF\u5230\u4E0B\u4E00\u5E27(\u5C24\u5176\u5728\u9009\u62E9\u7F51\u9875\u5185\u7F6E\u89C6\u9891\u7684\u65F6\u5019\u5F88\u7BA1\u7528)</p></li><li><p>gF\uFF1A \u805A\u7126\u4E3B/\u9876\u6846\u67B6</p></li><li><p>?: \u6253\u5F00\u8BBE\u7F6E</p></li></ul>', 20);
const _hoisted_21 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_21);
}
var ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, ___ as default };
