### 说明

提供四个基本的git命令选项，提供常用的commit文本选项（具体查看底部文档），通过列表选择的方式来使git提交更方便



### 全局安装

```bash
npm i -g git-quick-push
```

### 使用

目前只有一个命令，list，用于显示四个常用的git命令列表

```
git-push list
```

注意，命令为git-push而非包名git-quick-push，因为git-quick-push略长，所以设计简写为git-push

![image-20211216171152611](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216171152611.png)



#### git commit 提供下提供了一些常用文本



![image-20211216160338591](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216160338591.png)





#### 如果你对commit默认文本不满意

可以输入自定义的commit文本，替换commit列表的默认文本

![image-20211216161054671](https://gitee.com/zqylzcwcxy/drawing-bed/raw/master/img/image-20211216161054671.png)



### 自动为commit文本提供相应emoji

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

