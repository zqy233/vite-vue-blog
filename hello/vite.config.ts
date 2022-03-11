import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import Pages from "vite-plugin-pages"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/css/element-plus.scss" as *;`,
        charset: true
      }
    }
  },
  plugins: [
    Vue(),
    // 自动读取src/views下目录生成路由信息
    Pages({
      dirs: [{ dir: "src/views", baseRoute: "/" }], // 根目录src/views
      importMode: "async", // 异步方式导入组件
      // 实现redirect
      extendRoute(route) {
        if (route.path === "/") return { ...route, redirect: "a" }
      }
    }),
    Components({
      dirs: ["src/components"], // 要搜索组件的目录的相对路径
      deep: true, // 搜索子目录
      dts: "src/components/components.d.ts", // 生成 `components.d.ts` 全局声明
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ]
    }),
    AutoImport({
      imports: ["vue", "vue-router"], // 自动导入vue相关函数
      dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
    })
  ]
})
