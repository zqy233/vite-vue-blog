import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.26b38f3f.js";
const __pageData = '{"title":"@vue/cli \u521B\u5EFA\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"vue.config.js","slug":"vue-config-js"}],"relativePath":"notes/3.vue/1.\u57FA\u7840/1.vue-cli\u521B\u5EFA\u9879\u76EE.md","lastUpdated":1647783041165}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue-cli-\u521B\u5EFA\u9879\u76EE" tabindex="-1">@vue/cli \u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#vue-cli-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h1><p>@vue/cli \u662F vue \u5B98\u65B9\u7684\u811A\u624B\u67B6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5176\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A vue \u9879\u76EE\u7684\u6A21\u677F</p><p>\u4F7F\u7528@vue/cli \u53EF\u4EE5\u5B89\u88C5 vue2 \u548C vue3 \u7684\u6A21\u677F\uFF0C\u4E14\u90FD\u57FA\u4E8E webpack \u6253\u5305\u5DE5\u5177</p><div class="warning custom-block"><p class="custom-block-title">vue3 \u4E0D\u652F\u6301 ie11</p><ul><li>\u60F3\u8981\u652F\u6301 ie11 \u8BF7\u4F7F\u7528 vue2</li><li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u8BF4\u660E</a></li></ul></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u5168\u5C40\u811A\u624B\u67B6\u547D\u4EE4</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm i -g @vue/cli</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u9879\u76EE,\u9009\u62E9\u76F8\u5E94\u6A21\u677F</span></span>\n<span class="line"><span style="color:#A6ACCD;">vue create vue-project-name</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> vue-project-name</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528vscode\u6253\u5F00\u5F53\u524D\u76EE\u5F55\u7684\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">code ./</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># npm\u8FD0\u884C\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm run serve</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn\u8FD0\u884C\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn serve</span></span>\n<span class="line"></span></code></pre></div><h2 id="vue-config-js" tabindex="-1">vue.config.js <a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a></h2><p>@vue/cli\u4F7F\u7528node\u8BFB\u53D6\u8BE5\u914D\u7F6E\u6587\u4EF6\uFF0C\u4ECE\u800C\u5BF9webpack\u8FDB\u884C\u8BBE\u7F6E</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> FileManagerPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filemanager-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// \u81EA\u52A8\u538B\u7F29\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//\u57FA\u672C\u8DEF\u5F84</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">outputDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">assetsDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./static</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u9759\u6001\u8D44\u6E90\u8F93\u51FA\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lintOnSave</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">configureWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">[name].1.</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">Timestamp</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">chunkFilename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">[name].1.</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">Timestamp</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// \u538B\u7F29\u751F\u6210zip\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// new FileManagerPlugin({</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//   events: {</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//     onEnd: {</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//       archive: [{ source: &quot;./dist&quot;, destination: &quot;./\u5357\u4EAC\u4E00\u4F53\u673A.zip&quot; }]</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//     }</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//   }</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// })</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ]</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u751F\u4EA7\u73AF\u5883\u662F\u5426\u751F\u6210 sourceMap \u6587\u4EF6</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">productionSourceMap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// css\u76F8\u5173\u914D\u7F6E</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u4F7F\u7528css\u5206\u79BB\u63D2\u4EF6 ExtractTextPlugin</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extract</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5F00\u542F CSS source maps?</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sourceMap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loaderOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">postcss</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postcss-plugin-px2rem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 128.4 63.9</span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// rootValue:128.4,      // \u65B0\u7248\u672C\u7684\u662F\u8FD9\u4E2A\u503C</span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// mediaQuery: false, //\uFF08\u5E03\u5C14\u503C\uFF09\u5141\u8BB8\u5728\u5A92\u4F53\u67E5\u8BE2\u4E2D\u8F6C\u6362px\u3002</span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// minPixelValue: 3 //\u8BBE\u7F6E\u8981\u66FF\u6362\u7684\u6700\u5C0F\u50CF\u7D20\u503C(3px\u4F1A\u88AB\u8F6Crem)\u3002 \u9ED8\u8BA4 0</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        ]</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// webpack-dev-server\u76F8\u5173\u914D\u7F6E</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">devServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5728devServer\u542F\u52A8\u4E14\u7B2C\u4E00\u6B21\u6784\u5EFA\u5B8C\u6210\u65F6\uFF0C\u81EA\u52A8\u7528\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u6D4F\u89C8\u5668\u53BB\u6253\u5F00\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100.100.2.217</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5F00\u53D1\u670D\u52A1\u5668ip</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7F6E\u662F\u5426\u542F\u7528\u6A21\u5757\u7684\u70ED\u66FF\u6362\u529F\u80FD\uFF0CdevServer\u7684\u9ED8\u8BA4\u884C\u4E3A\u662F\u5728\u53D1\u73B0\u6E90\u4EE3\u7801\u88AB\u53D8\u66F4\u540E\uFF0C\u901A\u8FC7\u81EA\u52A8\u5237\u65B0\u6574\u4E2A\u9875\u9762\u6765\u505A\u5230\u4E8B\u5B9E\u9884\u89C8\uFF0C\u5F00\u542Fhot\u540E\uFF0C\u5C06\u5728\u4E0D\u5237\u65B0\u6574\u4E2A\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u901A\u8FC7\u65B0\u6A21\u5757\u66FF\u6362\u8001\u6A21\u5757\u6765\u505A\u5230\u5B9E\u65F6\u9884\u89C8</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">https</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u4F7F\u7528https</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">hotOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// hot \u548C hotOnly \u7684\u533A\u522B\u662F\u5728\u67D0\u4E9B\u6A21\u5757\u4E0D\u652F\u6301\u70ED\u66F4\u65B0\u7684\u60C5\u51B5\u4E0B\uFF0C\u524D\u8005\u4F1A\u81EA\u52A8\u5237\u65B0\u9875\u9762\uFF0C\u540E\u8005\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\uFF0C\u800C\u662F\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u70ED\u66F4\u65B0\u5931\u8D25</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u8BBE\u7F6E\u4EE3\u7406</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">/api</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://100.100.2.153:6969</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">secure</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//false\u4E3Ahttp\u8BBF\u95EE\uFF0Ctrue\u4E3Ahttps\u8BBF\u95EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">changeOrigin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">pathRewrite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">^/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
var _1_vueCli____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1_vueCli____ as default };
