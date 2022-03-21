import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.26b38f3f.js";
const __pageData = '{"title":"\u5F00\u53D1\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5 vue devtools \u8C37\u6B4C\u63D2\u4EF6","slug":"\u5B89\u88C5-vue-devtools-\u8C37\u6B4C\u63D2\u4EF6"},{"level":2,"title":"scss","slug":"scss"}],"relativePath":"notes/3.vue/1.\u57FA\u7840/3.\u5F00\u53D1\u914D\u7F6E.md","lastUpdated":1647585011314}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5F00\u53D1\u914D\u7F6E" tabindex="-1">\u5F00\u53D1\u914D\u7F6E <a class="header-anchor" href="#\u5F00\u53D1\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5-vue-devtools-\u8C37\u6B4C\u63D2\u4EF6" tabindex="-1">\u5B89\u88C5 vue devtools \u8C37\u6B4C\u63D2\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5-vue-devtools-\u8C37\u6B4C\u63D2\u4EF6" aria-hidden="true">#</a></h2><p><a href="https://chrome.zzzmh.cn/info?token=nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noopener noreferrer">vue devtools</a> \u7528\u4E8E\u5F00\u53D1 vue \u9879\u76EE\u65F6\u8FDB\u884C\u8C03\u8BD5</p><blockquote><p>\u4F7F\u7528\u6781\u901F\u63D2\u4EF6\u7F51(\u4E00\u4E2A\u5FEB\u901F\u5B89\u88C5\u4E0B\u8F7D\u8C37\u6B4C\u6D4F\u89C8\u5668\u63D2\u4EF6\u7684\u7F51\u7AD9)\u8FDB\u884C\u4E0B\u8F7D\u5B89\u88C5</p></blockquote><p>\u4E0B\u8F7D\u5B8C\u6210\u540E\u5982\u4F55\u5B89\u88C5\u63D2\u4EF6\uFF1A</p><ol><li><p>\u6253\u5F00\u8C37\u6B4C\u6D4F\u89C8\u5668</p></li><li><p>\u70B9\u51FB\u53F3\u4E0A\u89D2\u4E09\u4E2A\u70B9</p></li><li><p>\u9009\u62E9\u66F4\u591A\u5DE5\u5177</p></li><li><p>\u9009\u62E9\u62D3\u5C55\u7A0B\u5E8F</p></li><li><p>\u6253\u5F00\u5F00\u53D1\u8005\u6A21\u5F0F</p></li><li><p>\u62D6\u62FD\u89E3\u538B\u540E\u7684\u63D2\u4EF6\u81F3\u6D4F\u89C8\u5668\u4E2D</p></li></ol><h2 id="scss" tabindex="-1">scss <a class="header-anchor" href="#scss" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u56FE\u7247\u7684\u8DEF\u5F84\u522B\u540D</p><p>vue/cli(\u57FA\u4E8Ewebpack)\u9700\u8981\u4F7F\u7528~@assets\u53EF\u4ECEsrc/assets\u76EE\u5F55\u4E0B\u5F15\u5165\u56FE\u7247</p><div class="language-css"><pre><code><span class="line"><span style="color:#A6ACCD;">background: url(&quot;</span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">@assets/imgs/img1.png&quot;)</span></span>\n<span class="line"></span></code></pre></div><p>vue.config.js\u4E2D\u8BBE\u7F6E</p><p>vite\u4E2D\u4F7F\u7528@assets\u53EF\u4ECEsrc/assets\u76EE\u5F55\u4E0B\u5F15\u5165\u56FE\u7247\uFF0C\u5373\u53BB\u6389\u6CE2\u6D6A\u7EBF</p><p>vite.config.js\u4E2D\u56FD\u8BBE\u7F6E</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u8DEF\u5F84\u522B\u540D</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~@assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@views</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/views</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@common</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/common</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@mixins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/mixins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/views/layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">extensions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span></code></pre></div>', 14);
const _hoisted_15 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_15);
}
var _3_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _3_____ as default };
