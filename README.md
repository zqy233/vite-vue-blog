### 📝 说明

> 需要node版本 12.20.0 || 14.13.1 || >=16.0.0
>
> required node version 12.20.0 || 14.13.1 || >=16.0.0

目前有两个命令/two commands now

- list，显示 git 命令列表，通过列表选择的方式来使 git 提交更方便
- list，display the list of git commands, so make git  submissions more convenient through list selection
- create，提供 vite+vue3+ts+pinia 模板快速开发项目，下载依赖与运行（具体配置可查看模板 README）
- create , 

### 🎉 全局安装

```bash
npm i -g git-quick-push
```

### ✨ 使用

注意，命令为 git-push 而非包名 git-quick-push，因为 git-quick-push 略长，所以设计简写为 git-push

### ✨git-push list

![image-20211216180718649](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211216180718649.png)

#### 🚀git commit 提供下提供了一些常用文本

![image-20211216160338591](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211216160338591.png)

#### 🚀 如果你对 commit 默认文本不满意

可以输入自定义的 commit 文本，替换 commit 列表的默认文本

![image-20211216161054671](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211216161054671.png)

#### 🚀自动为 commit 文本提供相应 emoji / automatically provide emoji for commit message

| emoji         | emoji 代码   | commit             |
| ------------- | ------------ | ----------------------- |
| 🎉   | `:tada:`     | first commit : |
| ✨   | `:sparkles:` | new feature : |
| 🐛      | `:bug:`      | fix bug : |
| 💄   | `:lipstick:` | update ui and style files : |
| 🔥   | `:fire:`     | remove code or file : |
| 🎨 | `:art:`      | improve code structure or code format : |
| ⚡   | `:zap:`      | improve performance : |
| 📝 | `:memo:`     | document writing : |

### ✨git-push create

输入项目名，创建 vite+vue3+ts+pinia 模板到当前目录，下载依赖与运行

![image-20220221125502607](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220221125502607.png)

对于当前目录中有文件夹跟创建项目名同名的情况，提供覆盖提示，最终确定后进行覆盖

![image-20220221125604340](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20220221125604340.png)
