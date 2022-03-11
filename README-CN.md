## [EN](https://github.com/zqy233/git-quick-push/blob/master/README.md) | 中文

> 需要 node 版本 12.20.0 || 14.13.1 || >=16.0.0

目前有两个命令

- list，显示 git 命令列表，通过列表选择的方式来使 git 提交更方便
- create，提供 vite+vue3+ts+pinia 模板快速开发项目，下载依赖与运行（具体配置可查看模板 README）

## 🎉 安装

```bash
npm i -g git-quick-push
```

## ✨ 使用

注意，命令为 git-push 而非包名 git-quick-push，因为 git-quick-push 略长，所以设计简写为 git-push

### ✨git-push list

显示 git commit ，git pull 和 git push

#### 🚀 如果认为 commit 默认文本不够具体

可以输入自定义的 commit 文本，会拼接上 commit 列表的默认文本

#### 🚀 自动为 commit 文本提供相应 emoji

| emoji | emoji 代码   | commit                                  |
| ----- | ------------ | --------------------------------------- |
| 🎉    | `:tada:`     | first commit :                          |
| ✨    | `:sparkles:` | new feature :                           |
| 🐛    | `:bug:`      | fix bug :                               |
| 💄    | `:lipstick:` | update ui and style files :             |
| 🔥    | `:fire:`     | remove code or file :                   |
| 🎨    | `:art:`      | improve code structure or code format : |
| ⚡    | `:zap:`      | improve performance :                   |
| 📝    | `:memo:`     | document writing :                      |

### ✨git-push create

输入项目名，创建 vite+vue3+ts+pinia 模板到当前目录，下载依赖与运行

对于当前目录中有文件夹跟创建项目名同名的情况，提供覆盖提示
