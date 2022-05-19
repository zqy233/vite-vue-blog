import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b24e24a6.js";
const __pageData = '{"title":"vite-electron","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite\u9879\u76EE\u4E2D\u5F15\u5165electron","slug":"vite\u9879\u76EE\u4E2D\u5F15\u5165electron"},{"level":2,"title":"\u6839\u76EE\u5F55\u65B0\u5EFAelectron.ts","slug":"\u6839\u76EE\u5F55\u65B0\u5EFAelectron-ts"},{"level":2,"title":"package.json\u8BBE\u7F6Emain","slug":"package-json\u8BBE\u7F6Emain"},{"level":2,"title":"electron\u70ED\u66F4\u65B0","slug":"electron\u70ED\u66F4\u65B0"}],"relativePath":"notes/2.framework/5.electron/2.vite-electron.md","lastUpdated":1648704098558}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vite-electron" tabindex="-1">vite-electron <a class="header-anchor" href="#vite-electron" aria-hidden="true">#</a></h1><h2 id="vite\u9879\u76EE\u4E2D\u5F15\u5165electron" tabindex="-1">vite\u9879\u76EE\u4E2D\u5F15\u5165electron <a class="header-anchor" href="#vite\u9879\u76EE\u4E2D\u5F15\u5165electron" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add --dev electron</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u6839\u76EE\u5F55\u65B0\u5EFAelectron-ts" tabindex="-1">\u6839\u76EE\u5F55\u65B0\u5EFAelectron.ts <a class="header-anchor" href="#\u6839\u76EE\u5F55\u65B0\u5EFAelectron-ts" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u63A7\u5236\u5E94\u7528\u751F\u547D\u5468\u671F\u548C\u521B\u5EFA\u539F\u751F\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u6A21\u7EC4</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> BrowserWindow </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWindow</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u521B\u5EFA\u6D4F\u89C8\u5668\u7A97\u53E3</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mainWindow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">BrowserWindow</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">600</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u52A0\u8F7Dvite\u5F00\u53D1\u670D\u52A1\u5668</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">mainWindow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3000/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u6253\u5F00\u5F00\u53D1\u5DE5\u5177</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// mainWindow.webContents.openDevTools()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u8FD9\u6BB5\u7A0B\u5E8F\u5C06\u4F1A\u5728 Electron \u7ED3\u675F\u521D\u59CB\u5316</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u548C\u521B\u5EFA\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u65F6\u5019\u8C03\u7528</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u90E8\u5206 API \u5728 ready \u4E8B\u4EF6\u89E6\u53D1\u540E\u624D\u80FD\u4F7F\u7528\u3002</span></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">whenReady</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">createWindow</span><span style="color:#F07178;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">activate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5982\u679C\u6CA1\u6709\u6253\u5F00\u7684\u7A97\u53E3\uFF0C\u90A3\u4E48\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7A97\u53E3</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">BrowserWindow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAllWindows</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">createWindow</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u9664\u4E86 macOS \u5916\uFF0C\u5F53\u6240\u6709\u7A97\u53E3\u90FD\u88AB\u5173\u95ED\u7684\u65F6\u5019\u9000\u51FA\u7A0B\u5E8F\u3002 \u56E0\u6B64\uFF0C\u901A\u5E38\u5BF9\u7A0B\u5E8F\u548C\u5B83\u4EEC\u5728</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u4EFB\u52A1\u680F\u4E0A\u7684\u56FE\u6807\u6765\u8BF4\uFF0C\u5E94\u5F53\u4FDD\u6301\u6D3B\u8DC3\u72B6\u6001\uFF0C\u76F4\u5230\u7528\u6237\u4F7F\u7528 Cmd + Q \u9000\u51FA\u3002</span></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">window-all-closed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">platform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">darwin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">quit</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="package-json\u8BBE\u7F6Emain" tabindex="-1">package.json\u8BBE\u7F6Emain <a class="header-anchor" href="#package-json\u8BBE\u7F6Emain" aria-hidden="true">#</a></h2><div class="language-json"><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"></span></code></pre></div><h2 id="electron\u70ED\u66F4\u65B0" tabindex="-1">electron\u70ED\u66F4\u65B0 <a class="header-anchor" href="#electron\u70ED\u66F4\u65B0" aria-hidden="true">#</a></h2><p>vite\u5F00\u53D1\u670D\u52A1\u5668\u5177\u5907\u70ED\u66F4\u65B0\u529F\u80FD\uFF0Celectron\u5F00\u53D1\u65F6\u76F4\u63A5\u52A0\u8F7Dvite\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5373\u53EF\u5B9E\u73B0electron\u5F00\u53D1\u70ED\u66F4\u65B0\uFF0C\u5373\u4E0B\u65B9\u8FD9\u53E5\u4EE3\u7801\uFF08\u4EE3\u7801\u5DF2\u5B58\u5728\u4E8E\u4E0A\u65B9\u7684electron.ts\u4E2D\uFF09</p><div class="language-ts"><pre><code><span class="line"><span style="color:#A6ACCD;"> mainWindow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadURL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:3000/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>\u56E0\u4E3Aelectron\u5F00\u53D1\u9700\u8981\u7B49\u5F85vite\u5148\u884C\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u52A0\u8F7D\u5176url, \u6240\u4EE5\u9700\u8981\u5B89\u88C5\u4E24\u4E2A\u5E93\uFF1A</p><ul><li><strong>concurrently</strong>\uFF1A\u963B\u585E\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4\uFF0C<code>-k</code>\u53C2\u6570\u7528\u6765\u6E05\u9664\u5176\u5B83\u5DF2\u7ECF\u5B58\u5728\u6216\u8005\u6302\u6389\u7684\u8FDB\u7A0B</li><li><strong>wait-on</strong>\uFF1A\u7B49\u5F85\u8D44\u6E90\uFF0C\u6B64\u5904\u7528\u6765\u7B49\u5F85url\u53EF\u8BBF\u95EE</li></ul><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add -D concurrently wait-on</span></span>\n<span class="line"></span></code></pre></div><p>\u66F4\u65B0<code>package.json</code>\uFF0C<code>scripts</code>\u4FEE\u6539\u5982\u4E0B\uFF1A</p><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">vite:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">electron</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wait-on tcp:3000 &amp;&amp; electron .</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concurrently -k </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">yarn vite:dev</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">yarn electron</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-tsc --noEmit &amp;&amp; vite build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite preview</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"></span></code></pre></div><ul><li><code>yarn electron</code>\u7B49\u5F85tcp\u534F\u8BAE3000\u7AEF\u53E3\u53EF\u8BBF\u95EE\uFF0C\u7136\u540E\u6267\u884Celectron</li><li><code>yarn dev</code>\u963B\u585E\u6267\u884C\u5F00\u53D1\u670D\u52A1\u5668\u8FD0\u884C\u548C<code>yarn electron</code>\u547D\u4EE4</li></ul><p>\u8FD0\u884C\u9879\u76EE\u53EA\u8981\u6267\u884C\u547D\u4EE4<code>yarn dev</code>\u5373\u53EF\uFF0C\u5F53\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\u65F6\uFF0C\u684C\u9762\u5E94\u7528\u4E5F\u5C06\u81EA\u52A8\u66F4\u65B0</p>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
var _2_viteElectron = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _2_viteElectron as default };
