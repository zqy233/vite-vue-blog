## EN | [中文][https://github.com/zqy233/git-quick-push/blob/master/README-CN.md]

> required node version 12.20.0 || 14.13.1 || >=16.0.0

two commands now

- list，display a list of git submissions commands, make git submissions more convenient through list selection
- create，provide vite + vue3 + ts + pinia template , download dependency automatically (see template readme.md for specific configuration)

## 🎉 install

```bash
npm i -g git-quick-push
```

## ✨ usage

Note that the command is "git-push" instead of the package name "git-quick-push". Because "git-quick-push" is slightly longer, the design is abbreviated as "git-push"

### ✨git-push list

show "git commit" ，"git pull ", "git push" and "exit"

#### 🚀 If you think the default text of commit is not specific enough

You can input custom commit text, which will splice the default text of the commit list

#### 🚀 Automatically provide corresponding Emoji for commit text

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

Input the project name, create the vite + vue3 + ts + pinia template to the current directory, download the dependency and run

If there is a folder in the current directory with the same name as the created project name, provide an overwrite prompt
