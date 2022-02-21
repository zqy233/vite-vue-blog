### 📝 说明

> 使用 es next的 node 脚本，所以需要较高的 node 版本

目前有两个命令

- list，用于显示 git 命令列表，通过列表选择的方式来使 git 提交更方便
- create，提供 vite+vue3+ts+pinia 模板快速开发项目（具体配置可查看模板README）

### 🎉 全局安装

```bash
npm i -g git-quick-push
```

### ✨ 使用

### ✨git-push list

注意，命令为 git-push 而非包名 git-quick-push，因为 git-quick-push 略长，所以设计简写为 git-push

![image-20211216180718649](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211216180718649.png)

#### 🚀git commit 提供下提供了一些常用文本

![image-20211216160338591](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211216160338591.png)

#### 🚀 如果你对 commit 默认文本不满意

可以输入自定义的 commit 文本，替换 commit 列表的默认文本

![image-20211216161054671](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211216161054671.png)

#### 🚀 自动为 commit 文本提供相应 emoji

| emoji         | emoji 代码   | commit 说明             |
| ------------- | ------------ | ----------------------- |
| 🎉 （庆祝）   | `:tada:`     | 初次提交                |
| ✨ （火花）   | `:sparkles:` | 引入新功能              |
| 🐛 (bug)      | `:bug:`      | 修复 bug                |
| 💄 （口红）   | `:lipstick:` | 更新 UI 和样式文件      |
| 🔥 （火焰）   | `:fire:`     | 移除代码或文件          |
| 🎨 （调色板） | `:art:`      | 改进代码结构 / 代码格式 |
| ⚡ （闪电）   | `:zap:`      | 提升性能                |
| 📝 （备忘录） | `:memo:`     | 撰写文档                |

### ✨git-push create

输入项目名，创建 vite+vue3+ts+pinia 模板到当前目录

![image-20220221125502607](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220221125502607.png)

对于当前目录中有文件夹跟创建项目名同名的情况，提供覆盖提示，最终确定后进行覆盖

![image-20220221125604340](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220221125604340.png)
