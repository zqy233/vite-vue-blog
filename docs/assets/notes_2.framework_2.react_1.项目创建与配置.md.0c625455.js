import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.b98f0c2c.js";
const __pageData = '{"title":"\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528create-react-app","slug":"\u4F7F\u7528create-react-app"},{"level":2,"title":"\u4F7F\u7528 create-vite","slug":"\u4F7F\u7528-create-vite"},{"level":2,"title":"react-dom","slug":"react-dom"}],"relativePath":"notes/2.framework/2.react/1.\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E.md","lastUpdated":1654831076433}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E" tabindex="-1">\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E <a class="header-anchor" href="#\u9879\u76EE\u521B\u5EFA\u4E0E\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528create-react-app" tabindex="-1">\u4F7F\u7528create-react-app <a class="header-anchor" href="#\u4F7F\u7528create-react-app" aria-hidden="true">#</a></h2><p><code>create-react-app</code>\u662Freact\u5B98\u65B9\u7684\u811A\u624B\u67B6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5176\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2Areact\u9879\u76EE\u7684\u6A21\u677F</p><p>\u4E0B\u8F7D\u5168\u5C40\u811A\u624B\u67B6\u547D\u4EE4\u521B\u5EFA\u9879\u76EE</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g create-react-app</span></span>\n<span class="line"><span style="color:#A6ACCD;">create-react-app react-project-name</span></span>\n<span class="line"></span></code></pre></div><p>\u4F7F\u7528npm init</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm init react-app react-project-name</span></span>\n<span class="line"></span></code></pre></div><p>\u4F7F\u7528npx</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npx create-react-app react-project-name</span></span>\n<span class="line"></span></code></pre></div><p>\u521B\u5EFA\u652F\u6301 typescript \u7684\u9879\u76EE</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npx create-react-app ts-app --template typescript</span></span>\n<span class="line"></span></code></pre></div><p>npm init &lt;initializer&gt; \u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6216\u8005\u5DF2\u7ECF\u5B58\u5728\u7684 npm \u5305\uFF0Cinitializer \u8868\u793A\u540D\u4E3A create-&lt;initializer&gt; \u7684 npm \u5305\uFF0C\u5C06\u4F7F\u7528 npx \u5B89\u88C5\uFF0C\u7136\u540E\u6267\u884C\u5176 package.json \u4E2D bin \u5C5E\u6027\u5BF9\u5E94\u7684\u811A\u672C\uFF0C\u6240\u4EE5\u8BE5\u547D\u4EE4\u5B9E\u9645\u4E0A\u662F\u4F7F\u7528 npx \u8FD0\u884C<code>create-react-app</code>\u8FD9\u4E2A npm \u5305\uFF0C\u4ECE\u800C\u4E0B\u8F7D\u6A21\u677F</p><p>\u5B98\u65B9\u8BF4\u660E\u4E5F\u7ED9\u51FA\u4E86\u547D\u4EE4\u76F8\u5BF9\u5E94\u7684\u4E00\u4E9B\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B49\u540C</th></tr></thead><tbody><tr><td>npm init foo</td><td>npx create-foo</td></tr><tr><td>npm init @usr</td><td>npx @usr/create</td></tr><tr><td>npm init @usr/foo</td><td>npx @usr/create-foo</td></tr></tbody></table><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> react-project-name</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528vscode\u6253\u5F00\u5F53\u524D\u76EE\u5F55\u7684\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">code ./</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u542F\u52A8\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn start</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528-create-vite" tabindex="-1">\u4F7F\u7528 create-vite <a class="header-anchor" href="#\u4F7F\u7528-create-vite" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm init vite</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn create vite</span></span>\n<span class="line"></span></code></pre></div><p>\u76F4\u63A5\u521B\u5EFA\u6A21\u677F</p><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 6.x</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite react-project-name --template react</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># npm 7+, extra double-dash is needed:</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite react-project-name -- --template react</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn create vite react-project-name --template react</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>\n<span class="line"><span style="color:#A6ACCD;">pnpm create vite react-project-name -- --template react</span></span>\n<span class="line"></span></code></pre></div><p>\u521B\u5EFA ts \u6A21\u677F</p><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 6.x</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite react-project-name --template react-ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># npm 7+, extra double-dash is needed:</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite react-project-name -- --template react-ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn create vite react-project-name --template react-ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>\n<span class="line"><span style="color:#A6ACCD;">pnpm create vite react-project-name -- --template react-ts</span></span>\n<span class="line"></span></code></pre></div><p>\u5E76\u4E14\u8DDF create-react-app\u4E0D\u540C\u7684\uFF0C\u9700\u8981\u8FDB\u5165\u76EE\u5F55\u540E\u81EA\u884C\u4E0B\u8F7D\u4F9D\u8D56</p><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> react-project-name</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528vscode\u6253\u5F00\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">code ./</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FD0\u884C\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>\n<span class="line"></span></code></pre></div><h2 id="react-dom" tabindex="-1">react-dom <a class="header-anchor" href="#react-dom" aria-hidden="true">#</a></h2>', 24);
const _hoisted_25 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_25);
}
var _1________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1________ as default };
