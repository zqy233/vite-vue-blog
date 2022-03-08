# webpack

## 什么是webpack

Webpack是一个模块打包工具(module bundler)，因为平常多用来对前端工程打包，所以也是一个前端自动化构建工具。其最主要的功能就是模块打包。意在帮前端开发者解决除了业务开发外的杂事，比如：打包、语言的转换、热更新、启动本地服务器等等。与本问题相关的webpack配置是它为我们搭建的本地服务器以及热更新功能。

模块打包，通俗地说就是：找出模块之间的依赖关系，按照一定的规则把这些模块组织合并为一个JavaScript文件

Webpack认为一切都是模块，JS文件、CSS文件、jpg/png图片等等都是模块。Webpack会把所有的这些模块都合并为一个JS文件，这是它最本质的工作。当然，我们可能并不想要它把这些合并成一个JS文件，这个时候我们可以通过一些它自己暴露出来的配置或第三方工具来改变它



## webpack/webpack-cli

webpack是运行在node环境中的,需要安装以下两个npm包

```bash
# webpack是webpack核心包，webpack-cli是命令行工具包
npm install --save-dev webpack@4.43.0 webpack-cli@3.3.12   
# 是上方的简写
npm i -D webpack webpack-cli
```

定义一个a.js

```js
import { name } from './b.js'  
console.log(name)
```

定义一个b.js

```js
export const name = 'Jack'
```

如果直接在HTML里引入a.js，浏览器会报错，一方面是浏览器对原始的ES6模块默认引入方式不支持而报错，另一方面即使使用支持的方式引入也会因本地JS引入的安全问题而报错，所以需要使用webpack来进行打包

```js
npx webpack a.js -o bundle.js   // 使用webpack打包a.js为bundle.js(bundle.js为压缩文件)，-o代表输出
```

## webpack.config.js

webpack.config.js是项目根目录下webpack默认的配置文件

```js
  npx webpack  // webpack会自动寻找该文件并使用其配置信息进行打包。
```

```js
 const path = require('path') // webpack是基于node.js执行的，所以可以使用node.js的路径解析模块path
  module.exports = {
    entry: './a.js', // 入口文件
    output: { // 出口文件
      path: path.resolve(__dirname, ''),  // resolve方法，该方法的作用是将方法参数解析成一个绝对路径返回，__dirname是Node.js的一个全局变量，表示当前文件的路径。这样，path.resolve(__dirname, '')表示的其实就是当前文件夹根目录的绝对路径。
      filename: 'bundle.js'
    },
    mode: 'none' // mode是Webpack的打包模式，默认是'production'，表示给生产环境打包的。现在设置成'none'，表示代码不压缩
  }
```

## loade(预处理器)

Webpack在进行打包的时候，对所有引入的资源文件，都当作模块来处理
但是Webpack自身只支持对JS文件处理（新版本还支持JSON文件处理）
所以当Webpack自身无法处理某种类型的文件时，通过配置特定的loader，赋予Webpack来处理该类型文件的能力。

```bash
npm init -y
```

a.js

```js
import './b.css'
```

b.css

```js
.hello {
    margin: 30px;
    color: blue;
}
```

index.html

```html
 <!DOCTYPE html>
  <html lang="en">
  <head>
    <script src="bundle.js"></script>
  </head>
  <body>
    <div class="hello">Hello, Loader</div>
  </body>
  </html>
```

安装两个loader，分别是css-loader与style-loader

其中css-loader是必需的，它的作用是解析CSS文件，包括解析@import等CSS自身的语法。它的作用也仅仅是解析CSS文件，它会把CSS文件解析后，以字符串的形式打包到JS文件中。不过，此时的CSS样式并不会生效，需要把CSS插入到html里才会生效

此时，style-loader就发挥作用了，它可以把JS里的样式代码插入到html文件里。它的原理很简单，就是通过JS动态生成style标签插入到html文件的head标签里。

```bash
  npm install css-loader@3.6.0 style-loader@1.2.1   
```

webpack.config.js里配置loader

```bash
const path = require('path')
  module.exports = {
    entry: './a.js', 
    output: {
      path: path.resolve(__dirname, ''),
      filename: 'bundle.js'
    },
    module: {
      rules: [{ 
        test: /\.css$/, //值是一个正则表达式，表示当文件名后缀是.css的时候，使用use项里的loader
        use: ['style-loader', 'css-loader'] // 值是一个数组，每一项是一个loader。loader的执行顺序是从后向前执行，先执行css-loader，然后把css-loader执行的结果交给style-loader执行
      }]
    },
    mode: 'none'
  }
```

## context

```js
 const path = require('path');  
  module.exports = {
    context: path.resolve(__dirname, './src'), // 表示资源入口entry是从哪个目录为起点的。context的值是一个字符串，表示一个绝对路径
    entry: './js/a.js',  // 表示从工程根目录下src文件夹下的js文件夹里的a.js开始打包
    output: {
      path: path.resolve(__dirname, ''),
      filename: 'bundle.js'
    },
    mode: 'none'
  };
```

## entry

entry代表路径，可以是字符串，数组、对象和函数形式

1. 字符串 表示打包的入口JS文件

   ```js
     entry: './a.js'
   ```

2. 数组数组 表示数组最后一个文件是资源的入口文件，数组其余文件会预先构建到入口文件

   ```js
       entry: ['core-js/stable', 'regenerator-runtime/runtime', './a.js']
   ```
   
   与下同效

   ```js
    import 'core-js/stable'
    import 'regenerator-runtime/runtime';
     module.exports = {
       entry: './a.js'
     }
   ```
   
3. 对象 又称之为多入口配置，打包后生成多个JS文件

   ```js
   var path = require('path'); 
     module.exports = {
       entry: {
         app: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
         vendor: './vendor'
       },
       output: {
         path: path.resolve(__dirname, ''),
         filename: '[name].js'
       },
       mode: 'none'
     };
   ```


## 自动压缩文件

```bash
npm i -D filemanager-webpack-plugin
```

vue.config.js

```js
const FileManagerPlugin = require("filemanager-webpack-plugin") // 自动压缩文件 
module.exports = {
    ...
configureWebpack: {
    plugins: [
      // 压缩生成zip文件
      new FileManagerPlugin({
        events: {
          onEnd: {
            delete: ["./云中驿站"],
            archive: [{ source: "./云中驿站", destination: "./云中驿站.zip" }]
          }
        }
      })
    ]
  }
}
```

## 压缩图片

使用npm下载会出现下载失败的情况，所以选择使用cnpm下载

```bash
npm i -g cnpm
cnpm i -D image-webpack-loader
```

```js
module.exports = {
    ...
chainWebpack: config => {
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false }
      })
  }
}
```

## 安装typescript

```bash
npm i -D typescript ts-loader
```

根目录添加tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  },
  "include": [
    "./src/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

webpack.config.js中使用loader

```js
module.exports = {
 ...
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
}
```

## [HMR] Waiting for update signal from WDS

vue项目运行后控制台出现这个语句，翻译下：来自 WDS 的提示，正在等待更新。

说明：

1、webpack 是什么：



2、[HMR] 是什么：

它是 Hot Module Replacement 的简写。翻译过来：模块热更新。所以HDR开头的信息提示由webpack/hot/dev-server模块产生

3、[WDS] 是什么：

它是 Webpack dev Server 的简写。翻译过来：webpack的开发环境服务器（本地服务器）。所以WDS开头的信息提示由 webpack-dev-server本地服务器产生

4、如何注释：

按照路径node_modules -> webpack -> hot -> log.js注释控制台打印语句

```js
module.exports = function(level, msg){    
    // if (shouldLog(level)) {        
    // if (level === "info") {           
    // console.log(msg);       
    //   } else if (level === "warning") {            
    // console.warn(msg);        
    //   } else if (level === "error") {            
    // console.error(msg);        
    //   }    
    // }}
```

此时控制台完全干净了

##  yarn.lock 

官方对 yarn.lock 文件的说明如下：
为了跨机器安装得到一致的结果，Yarn 需要比你配置在 package.json 中的依赖列表更多的信息。 Yarn 需要准确存储每个安装的依赖是哪个版本。
为了做到这样，Yarn 使用一个你项目根目录里的 yarn.lock 文件。这可以媲美其他像 Bundler 或 Cargo 这样的包管理器的 lockfiles。它类似于 npm 的 npm-shrinkwrap.json，然而他并不是有损的并且它能创建可重现的结果。



- 