import getBase from '../../src/vitepress/config/baseConfig'
import path from 'path'
import fs from 'fs'

let nav = [] // 顶部菜单栏
let sidebar = {} // 左侧菜单栏

// 读取notes文件夹下所有文件夹名与文件名与相应路径
// 动态生成顶部菜单栏和左侧菜单栏以及相应路由信息
const fullPath = path.join(__dirname, '../notes')
// 第一级为顶部菜单栏标题
fs.readdirSync(fullPath).forEach((item, index) => {
  sidebar[`/notes/${item}/`] = []
  nav.push({
    text: item.replace(/\d*\./, ''),
    items: []
  })
  // 第二级为顶部菜单栏列表与左侧菜单栏标题
  fs.readdirSync(path.join(fullPath, item)).forEach((subitem, subindex) => {
    sidebar[`/notes/${item}/`].push({
      text: subitem.replace(/\d*\./, ''),
      items: []
    })
    nav[index].items.push({
      text: subitem.replace(/\d*\./, ''),
      link: `/notes/${item}/${subitem}/${
        fs.readdirSync(path.join(fullPath, item + '/' + subitem))[0]
      }`
    })
    // 第三级为左侧菜单栏列表
    fs.readdirSync(path.join(fullPath, `${item}/${subitem}`)).forEach(
      (lastitem) => {
        sidebar[`/notes/${item}/`][subindex].items.push({
          text: lastitem.replace('.md', '').replace(/\d*\./, ''),
          link: `/notes/${item}/${subitem}/${lastitem}`
        })
      }
    )
  })
})

module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,
    base: '/vite-vue-blog/',
    title: '个人笔记',
    description: '个人笔记',
    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src')
        }
      },
      server: {
        port: 4000
      }
    },
    themeConfig: {
      logo: '/img/logo-vue.svg',
      socialLinks: [
        { icon: 'gitee', link: 'https://gitee.com/zqylzcwcxy/vite-vue-blog' }
      ],
      nav,
      sidebar
    }
  }
})()
