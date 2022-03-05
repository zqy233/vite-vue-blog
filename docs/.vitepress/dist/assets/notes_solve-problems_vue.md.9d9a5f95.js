import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.29370b7e.js";
const __pageData = '{"title":"vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Critical dependency: the request of a dependency is an expression","slug":"critical-dependency-the-request-of-a-dependency-is-an-expression"},{"level":2,"title":"for division is deprecated and will be removed in Dart Sass 2.0.0","slug":"for-division-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0"}],"relativePath":"notes/solve-problems/vue.md","lastUpdated":1646397535233}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h1><h2 id="critical-dependency-the-request-of-a-dependency-is-an-expression" tabindex="-1">Critical dependency: the request of a dependency is an expression <a class="header-anchor" href="#critical-dependency-the-request-of-a-dependency-is-an-expression" aria-hidden="true">#</a></h2><p>require\u4E86\u4E00\u4E2A\u8868\u8FBE\u5F0F , \u6539\u4E3A\u5B57\u7B26\u4E32\u5373\u53EF</p><div class="language-js"><pre><code><span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">`${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">}`</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h1 id="is-defined-but-never-used-eslint" tabindex="-1">** is defined but never used eslint <a class="header-anchor" href="#is-defined-but-never-used-eslint" aria-hidden="true">#</a></h1><p>settings.json\u4E2D\u5173\u95ED\u672A\u4F7F\u7528\u53D8\u91CF\u7684\u6821\u9A8C</p><div class="language-json"><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslintConfig</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugin:vue/essential</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint:recommended</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">parserOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">parser</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">babel-eslint</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">no-unused-vars</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">vue/valid-template-root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="for-division-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0" tabindex="-1">for division is deprecated and will be removed in Dart Sass 2.0.0 <a class="header-anchor" href="#for-division-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0" aria-hidden="true">#</a></h2><p>\u7248\u672C\u66F4\u65B0\u4E86,\u5207\u6362\u56DE\u65E7\u7248\u672C,\u5408\u60C5\u5408\u7406,\u65E7\u9879\u76EE\u7528\u65E7\u6280\u672F,\u9664\u975E\u6574\u4F53\u8FC1\u79FB</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -s sass@1.32.6</span></span>\n<span class="line"></span></code></pre></div>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
var vue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, vue as default };