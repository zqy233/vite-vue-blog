import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.25082e8c.js";
const __pageData = '{"title":"dom \u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6 dom","slug":"\u83B7\u53D6-dom"},{"level":2,"title":"\u662F\u5426\u5305\u542B\u7C7B\u540D","slug":"\u662F\u5426\u5305\u542B\u7C7B\u540D"},{"level":2,"title":"\u6DFB\u52A0\u548C\u79FB\u9664\u7C7B\u540D","slug":"\u6DFB\u52A0\u548C\u79FB\u9664\u7C7B\u540D"},{"level":2,"title":"\u521B\u5EFAdom","slug":"\u521B\u5EFAdom"},{"level":2,"title":"e.target \u4E0D\u4F1A\u5192\u6CE1","slug":"e-target-\u4E0D\u4F1A\u5192\u6CE1"},{"level":2,"title":"element.getBoundingClientRect()","slug":"element-getboundingclientrect"},{"level":2,"title":"document.documentElement","slug":"document-documentelement"},{"level":2,"title":"\u83B7\u53D6 event","slug":"\u83B7\u53D6-event"},{"level":2,"title":"\u9F20\u6807\u6EDA\u52A8","slug":"\u9F20\u6807\u6EDA\u52A8"}],"relativePath":"notes/1.basic/3.javaScript/5.dom\u64CD\u4F5C.md","lastUpdated":1649321200106}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="dom-\u64CD\u4F5C" tabindex="-1">dom \u64CD\u4F5C <a class="header-anchor" href="#dom-\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="\u83B7\u53D6-dom" tabindex="-1">\u83B7\u53D6 dom <a class="header-anchor" href="#\u83B7\u53D6-dom" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">querySelector </span><span style="color:#676E95;font-style:italic;">// css\u9009\u62E9\u5668\uFF0C\u83B7\u53D6\u5355\u4E2Adom</span></span>\n<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">querySelectorAll </span><span style="color:#676E95;font-style:italic;">// css\u9009\u62E9\u5668\uFF0C\u83B7\u53D6\u5168\u90E8dom</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u662F\u5426\u5305\u542B\u7C7B\u540D" tabindex="-1">\u662F\u5426\u5305\u542B\u7C7B\u540D <a class="header-anchor" href="#\u662F\u5426\u5305\u542B\u7C7B\u540D" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">\u83B7\u53D6\u7684dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">contains</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7C7B\u540D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u6DFB\u52A0\u548C\u79FB\u9664\u7C7B\u540D" tabindex="-1">\u6DFB\u52A0\u548C\u79FB\u9664\u7C7B\u540D <a class="header-anchor" href="#\u6DFB\u52A0\u548C\u79FB\u9664\u7C7B\u540D" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">\u83B7\u53D6\u7684dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7C7B\u540D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">\u83B7\u53D6\u7684dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7C7B\u540D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFAdom" tabindex="-1">\u521B\u5EFAdom <a class="header-anchor" href="#\u521B\u5EFAdom" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="e-target-\u4E0D\u4F1A\u5192\u6CE1" tabindex="-1">e.target \u4E0D\u4F1A\u5192\u6CE1 <a class="header-anchor" href="#e-target-\u4E0D\u4F1A\u5192\u6CE1" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">imgBox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">big(event)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">function big(e) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        const img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target  </span><span style="color:#676E95;font-style:italic;">// a\u662F\u56FE\u7247\uFF0Ce.target\u4E0D\u4F1A\u5192\u6CE1</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="element-getboundingclientrect" tabindex="-1">element.getBoundingClientRect() <a class="header-anchor" href="#element-getboundingclientrect" aria-hidden="true">#</a></h2><p>element.getBoundingClientRect().top \u662F\u5143\u7D20\u76F8\u5BF9\u4E8E\u9875\u9762\u53EF\u89C6\u9876\u90E8</p><p>offsetParent\uFF1A\u8BE5\u5C5E\u6027\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u662F\u8DDD\u79BB\u8C03\u7528 offsetParent \u7684\u5143\u7D20\u6700\u8FD1\u7684\uFF08\u5728\u5305\u542B\u5C42\u6B21\u4E2D\u6700\u9760\u8FD1\u7684\uFF09\uFF0C\u5DF2\u8FDB\u884C\u8FC7 CSS \u5B9A\u4F4D\u7684\u5BB9\u5668\u5143\u7D20\u3002 \u5982\u679C\u8FD9\u4E2A\u5BB9\u5668\u5143\u7D20\u672A\u8FDB\u884C CSS \u5B9A\u4F4D, \u5219 offsetParent \u5C5E\u6027\u7684\u53D6\u503C\u4E3A body \u5143\u7D20\u7684\u5F15\u7528\u3002 \u5F53\u5BB9\u5668\u5143\u7D20\u7684 style.display \u88AB\u8BBE\u7F6E\u4E3A &quot;none&quot;\u65F6\uFF08\u8BD1\u6CE8\uFF1AIE \u548C Opera \u9664\u5916\uFF09\uFF0CoffsetParent \u5C5E\u6027 \u8FD4\u56DE null</p><p>clientTop\uFF1A\u5143\u7D20\u4E0A\u8FB9\u6846\u7684\u539A\u5EA6\uFF0C\u5F53\u6CA1\u6709\u6307\u5B9A\u8FB9\u6846\u539A\u5E95\u65F6\uFF0C\u4E00\u822C\u4E3A 0</p><p>scrollTop\uFF1A\u4F4D\u4E8E\u5BF9\u8C61\u6700\u9876\u7AEF\u548C\u7A97\u53E3\u4E2D\u53EF\u89C1\u5185\u5BB9\u7684\u6700\u9876\u7AEF\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u7B80\u5355\u5730\u8BF4\u5C31\u662F\u6EDA\u52A8\u540E\u88AB\u9690\u85CF\u7684\u9AD8\u5EA6\u3002</p><p>offsetTop\uFF1A\u83B7\u53D6\u5BF9\u8C61\u76F8\u5BF9\u4E8E\u7531 offsetParent \u5C5E\u6027\u6307\u5B9A\u7684\u7236\u5750\u6807(css \u5B9A\u4F4D\u7684\u5143\u7D20\u6216 body \u5143\u7D20)\u8DDD\u79BB\u9876\u7AEF\u7684\u9AD8\u5EA6\u3002</p><p>clientHeight\uFF1A\u5185\u5BB9\u53EF\u89C6\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9875\u9762\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u770B\u5230\u5185\u5BB9\u7684\u8FD9\u4E2A\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u4E00\u822C\u662F\u6700\u540E\u4E00\u4E2A\u5DE5\u5177\u6761\u4EE5\u4E0B\u5230\u72B6\u6001\u680F\u4EE5\u4E0A\u7684\u8FD9\u4E2A\u533A\u57DF\uFF0C\u4E0E\u9875\u9762\u5185\u5BB9\u65E0\u5173\u3002</p><p>scrollHeight\uFF1AIE\u3001Opera \u8BA4\u4E3A scrollHeight \u662F\u7F51\u9875\u5185\u5BB9\u5B9E\u9645\u9AD8\u5EA6\uFF0C\u53EF\u4EE5\u5C0F\u4E8E clientHeight\u3002FF \u8BA4\u4E3A scrollHeight \u662F\u7F51\u9875\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u4E0D\u8FC7\u6700\u5C0F\u503C\u662F clientHeight\u3002</p><p>offsetHeight\uFF1A\u83B7\u53D6\u5BF9\u8C61\u76F8\u5BF9\u4E8E\u7531 offsetParent \u5C5E\u6027\u6307\u5B9A\u7684\u7236\u5750\u6807(css \u5B9A\u4F4D\u7684\u5143\u7D20\u6216 body \u5143\u7D20)\u7684\u9AD8\u5EA6\u3002IE\u3001Opera \u8BA4\u4E3A offsetHeight = clientHeight + \u6EDA\u52A8\u6761 + \u8FB9\u6846\u3002FF \u8BA4\u4E3A offsetHeight \u662F\u7F51\u9875\u5185\u5BB9\u5B9E\u9645\u9AD8\u5EA6\uFF0C\u53EF\u4EE5\u5C0F\u4E8E clientHeight\u3002offsetHeight \u5728\u65B0\u7248\u672C\u7684 FF \u548C IE \u4E2D\u662F\u4E00\u6837\u7684\uFF0C\u8868\u793A\u7F51\u9875\u7684\u9AD8\u5EA6\uFF0C\u4E0E\u6EDA\u52A8\u6761\u65E0\u5173\uFF0Cchrome \u4E2D\u4E0D\u5305\u62EC\u6EDA\u52A8\u6761\u3002</p><h2 id="document-documentelement" tabindex="-1">document.documentElement <a class="header-anchor" href="#document-documentelement" aria-hidden="true">#</a></h2><p>document.documentElement.scrollHeight \u603B\u9AD8\u5EA6\uFF0C\u8DDD\u79BB\u9876\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB+\u53EF\u89C6\u8303\u56F4\u7684\u9AD8\u5EA6</p><p>document.documentElement.scrollTop \u8DDD\u79BB\u9876\u90E8\u7684\u6EDA\u52A8\u8DDD\u79BB</p><p>document.documentElement.clientHeight \u53EF\u89C6\u8303\u56F4\u7684\u9AD8\u5EA6</p><h2 id="\u83B7\u53D6-event" tabindex="-1">\u83B7\u53D6 event <a class="header-anchor" href="#\u83B7\u53D6-event" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">click</span><span style="color:#C3E88D;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u70B9\u51FB</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onkeypress</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">keypress</span><span style="color:#C3E88D;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">keypress</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u9F20\u6807\u6EDA\u52A8" tabindex="-1">\u9F20\u6807\u6EDA\u52A8 <a class="header-anchor" href="#\u9F20\u6807\u6EDA\u52A8" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onwheel</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> e </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wheelDelta</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5411\u4E0A\u6EDA\u52A8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5411\u4E0B\u6EDA\u52A8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 28);
const _hoisted_29 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_29);
}
var _5_dom__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _5_dom__ as default };
