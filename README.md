### 说明

提供一些规范选项（具体查看文档底部列表），来快速提交本地仓库代码至远程仓库



### 全局安装

```bash
npm i -g git-quick-push
```

### 使用

目前只有一个命令list，用于显示commit类别列表

注意，命令为git-push而非包名git-quick-push，因为git-quick-push略长，所以设计简写为git-push

```bash
git-push list
```

![image-20211216160338591](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216160338591.png)





如果你对默认文本不满意，可以输入自定义的commit文本，替换列表的默认文本

![image-20211216161054671](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216161054671.png)



### 自动为commit提供相应emoji

| emoji      | emoji代码    | commit 说明           |
| ---------- | ------------ | --------------------- |
| 🎉 (庆祝)   | `:tada:`     | 初次提交              |
| ✨ (火花)   | `:sparkles:` | 引入新功能            |
| 🐛 (bug)    | `:bug:`      | 修复 bug              |
| 💄 (口红)   | `:lipstick:` | 更新 UI 和样式文件    |
| 🔥 (火焰)   | `:fire:`     | 移除代码或文件        |
| 🎨 (调色板) | `:art:`      | 改进代码结构/代码格式 |
| ⚡ (闪电)   | `:zap:`      | 提升性能              |
| 📝 (备忘录) | `:memo:`     | 撰写文档              |

