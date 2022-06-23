import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b98f0c2c.js";
const __pageData = '{"title":"svg","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6svg\u7684viewbox\u5C5E\u6027","slug":"\u83B7\u53D6svg\u7684viewbox\u5C5E\u6027"},{"level":2,"title":"\u6EDA\u52A8\u63A7\u5236svg\u653E\u5927\u7F29\u5C0F","slug":"\u6EDA\u52A8\u63A7\u5236svg\u653E\u5927\u7F29\u5C0F"},{"level":2,"title":"\u8BBE\u7F6Esvg\u7684\u95EA\u70C1\u52A8\u753B","slug":"\u8BBE\u7F6Esvg\u7684\u95EA\u70C1\u52A8\u753B"}],"relativePath":"notes/1.basic/3.javaScript/14.svg.md","lastUpdated":1655954360195}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="svg" tabindex="-1">svg <a class="header-anchor" href="#svg" aria-hidden="true">#</a></h1><h2 id="\u83B7\u53D6svg\u7684viewbox\u5C5E\u6027" tabindex="-1">\u83B7\u53D6svg\u7684viewbox\u5C5E\u6027 <a class="header-anchor" href="#\u83B7\u53D6svg\u7684viewbox\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getGraphSize </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">viewBox</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.line-svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">firstChild</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SVGAElement</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAttribute</span><span style="color:#F07178;">(</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewBox</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#F07178;">  )</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">viewBox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+/</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u6EDA\u52A8\u63A7\u5236svg\u653E\u5927\u7F29\u5C0F" tabindex="-1">\u6EDA\u52A8\u63A7\u5236svg\u653E\u5927\u7F29\u5C0F <a class="header-anchor" href="#\u6EDA\u52A8\u63A7\u5236svg\u653E\u5927\u7F29\u5C0F" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u8BBE\u7F6Eviewbox\u5C5E\u6027</p><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wheel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> e </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// event.wheelDelta\u6B63\u6570\u8868\u793A\u5411\u4E0A\u6EDA\u52A8\uFF0C\u8D1F\u6570\u8868\u793A\u5411\u4E0B\u6EDA\u52A8</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getGraphSize</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wheelDelta</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.9</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.9</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.9</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.9</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">svg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.line-svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">firstChild</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SVGAElement</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">svg</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewBox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arrPoint</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">))</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8BBE\u7F6Esvg\u7684\u95EA\u70C1\u52A8\u753B" tabindex="-1">\u8BBE\u7F6Esvg\u7684\u95EA\u70C1\u52A8\u753B <a class="header-anchor" href="#\u8BBE\u7F6Esvg\u7684\u95EA\u70C1\u52A8\u753B" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> setAnimation </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">device</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">svgNS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElementNS</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">svgNS</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">animate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keyId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">attributeType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">attributeName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visibility</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">to</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hidden</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dur</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">begin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fill</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">freeze</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">repeatCount</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">indefinite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">device</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">animateGraph</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
var _14_svg = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _14_svg as default };
