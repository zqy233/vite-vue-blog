### 说明

提供四个基本的 git 命令选项，提供常用的 commit 文本选项（具体查看底部文档），通过列表选择的方式来使 git 提交更方便

### 全局安装

```bash
npm i -g git-quick-push
```

### 使用

目前只有一个命令，list，用于显示四个常用的 git 命令列表

```
git-push list
```

注意，命令为 git-push 而非包名 git-quick-push，因为 git-quick-push 略长，所以设计简写为 git-push

![image-20211216171152611](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216171152611.png)

#### git commit 提供下提供了一些常用文本

![image-20211216160338591](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216160338591.png)

#### 如果你对 commit 默认文本不满意

可以输入自定义的 commit 文本，替换 commit 列表的默认文本

![image-20211216161054671](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216161054671.png)

### 自动为 commit 文本提供相应 emoji

| emoji      | emoji 代码    | commit 说明           |
| ---------- | ------------ | --------------------- |
| 🎉 （庆祝）   | `:tada:`     | 初次提交              |
| ✨ （火花）   | `:sparkles:` | 引入新功能            |
| 🐛 (bug)    | `:bug:`      | 修复 bug              |
| 💄 （口红）   | `:lipstick:` | 更新 UI 和样式文件    |
| 🔥 （火焰）   | `:fire:`     | 移除代码或文件        |
| 🎨 （调色板） | `:art:`      | 改进代码结构 / 代码格式 |
| ⚡ （闪电）   | `:zap:`      | 提升性能              |
| 📝 （备忘录） | `:memo:`     | 撰写文档              |
