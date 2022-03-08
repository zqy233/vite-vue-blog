# express

## 1.安装express脚手架

```bash
npm i  express-generator express -g
```

## 2.express脚手架创建项目

```bash
express 项目名 //使用脚手架生成模板
```

```bash
npm install //下载依赖包
```

```bash
npm run start //启动项目
```

## 3.使用mysql包创建连接函数

```bash
npm i -s mysql
```

util/dbconfig.js

```js
const mysql = require('mysql')
const config = {                                      // mysql设置
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'api'
}
const sqlConnect = (sql, sqlArr, callback) => {      // mysql连接函数
    const pool = mysql.createPool(config)            // 创建mysql连接池
    pool.getConnection((err, conn) => {              // 连接池开始连接
        if (err) return console.log(`连接mysql数据库失败,${err}`)
        console.log('操作mysql数据库成功')
        conn.query(sql, sqlArr, callback)            // 三个参数分别为sql语句,sql语句查询参数,回调函数
        conn.release()                               // 释放连接
    })
}
module.exports = {
    sqlConnect
}
```

## 4.使用连接函数实现增删改查

```js
const dbconfig = require("../../util/dbconfig")
// 增
const addData = (req, res) => {
  const sql = `insert into test set name=?, phone=?, sex=?`
  console.log(req.body);
  const sqlArr = [req.body.name, req.body.phone, req.body.sex]
  const callBack = (err, data) => {
    if (err) {
      res.send({
        'code': 404,
        'msg': '新增数据失败',
        'err': err
      })
      console.log('新增数据失败')
    } else {
      res.send({
        'code': 200,
        'msg': '新增数据成功'
      })
      console.log('新增数据成功')
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack)
}
// 删
const deleteData = (req, res) => {
  const sql = 'delete from test where id=?'
  const sqlArr = [req.query.id]
  const callBack = (err, data) => {
    if (err) {
      res.send({
        'code': 404,
        'msg': '删除数据失败',
        'err': err
      })
      console.log('删除数据失败');
    } else {
      res.send({
        'code': 200,
        'msg': '删除数据成功'
      })
      console.log('删除数据成功')
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack)
}
// 改
const updatedData = (req, res) => {
  const sql = 'update test set phone=? where id=?'
  const sqlArr = [req.query.phone, req.query.id];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        'code': 404,
        'msg': '更改数据失败',
        'err': err
      })
      console.log('更改数据失败')
    } else {
      res.send({
        'code': 200,
        'msg': '更改数据成功'
      })
      console.log('更改数据成功')
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack)
}
// 查
const selectData = (req, res) => {
  console.log(req.query)
  const sql = 'select * from  test'
  const sqlArr = []
  const callBack = (err, data) => {
    if (err) {
      res.send({
        'code': 404,
        'msg': '查询失败',
        'err': err
      })
      console.log('查询失败')
    } else {
      res.send({
        'code': 200,
        'msg': '查询数据成功',
        data
      })
      console.log('查询成功')
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack)
}
module.exports = {
  addData, deleteData, updatedData, selectData
}
```

## 5.访问不同路由调用响应接口

routes/index.js

```js
const express = require('express')
const router = express.Router()
const api = require('../api/curd-template')
router.post('/add', api.addData)
router.post('/delete', api.deleteData)
router.post('/update', api.updatedData)
router.post('/', api.selectData)
module.exports = router
```

## 6.服务器使用路由

```js
const express = require('express')
const app = express()
app.use(express.json())   //请求格式为json
// 使用路由接口
const indexRouter = require('./routes')
app.use('/', indexRouter)
// 启动服务器
const http = require('http')
const server = http.createServer(app)
server.listen('3000')
console.log('服务器已启动!端口地址为http://localhost:3000')
```

## 7.res.query/res.body

res.query是get请求获取请求传递的参数

res.body是post请求获取请求传递的参数

# koa

## 1.创建项目

```bash
npm init -y  //创建默认package.json
npm i koa @koa/router -s //下载koa框架与路由
```

新建app.js

```js
const koa = require('koa')
const Router = require('@koa/router')
const app = new koa()
const router = new Router()
router.get('/user', async ctx => {
    ctx.body = 'success'
})
app.use(router.routes())
app.listen(3000)
```

启动项目

```bash
npm i -g nodemon //热加载node项目
nodemon app.js
```

## 2.post请求

```bash
npm i -s koa-bodyparser
```
