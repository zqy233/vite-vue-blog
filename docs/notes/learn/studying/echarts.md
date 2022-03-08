# echarts

## 安装

```bash
npm i -s echarts
```

## 示例

```js
<script>
import * as echarts from "echarts" // 导入echarts
export default {
  mounted() {
    this.setoneLine()
    this.setLine()
    this.setRound()
    this.setCategory()
  },
  methods: {
    setEcharts(dom, option) {
      const myChart = echarts.init(dom) // echarts初始化dom元素
      myChart.setOption(option) // 生效echarts
    },
    setoneLine() {
      const option = {
        // 标题
        title: {
          text: "来访人数趋势图"
        },
        color: ["#6A99FA"],
        // 鼠标悬浮时的提示框
        tooltip: {
          trigger: "axis", // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#000"
            }
          }
        },
        grid: {
          top: 100,
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "来访人数",
            type: "line",
            data: [500, 132, 101, 134, 90, 230, 210],
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#E0EAFE" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#fff" // 100% 处的颜色
                  }
                ]
              }
            }
          }
        ]
      }
      this.setEcharts(this.$refs.oneline, option)
    },
    setLine() {
      const option = {
        // 标题
        title: {
          text: "来访军人身份分析"
        },
        // 鼠标悬浮时的提示框
        tooltip: {
          trigger: "axis", // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          // formatter: "{b0}: {c0}<br />{b1}: {c1}",
          axisPointer: {
            label: {
              show: true
            }
          }
        },
        // 图例
        legend: {
          top: 35,
          data: ["退役军人", "现役军人", "军人家属", "陪同人员", "其他人员"]
        },
        grid: {
          top: 100,
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "退役军人",
            type: "line",
            data: [500, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "现役军人",
            type: "line",
            data: [0, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "军人家属",
            type: "line",
            data: [0, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "陪同人员",
            type: "line",
            data: [0, 332, 301, 334, 390, 330, 1]
          },
          {
            name: "其他人员",
            type: "line",
            data: [0, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.setEcharts(this.$refs.line, option)
    },
    setRound() {
      const option = {
        color: ["#3AA0FF", "#36CBCB", "#4DCB73", "#FAD337", "#F2637B", "#F2637B"],
        // 标题
        title: {
          text: "退役军人来访类别比例图"
        },
        // 鼠标悬浮时的提示框
        tooltip: {
          trigger: "item" // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
        },
        // 图例
        legend: {
          top: 35
        },
        // 数据来源与配置
        series: [
          {
            name: "退役军人来访类别比例图",
            type: "pie",
            radius: ["60%", "80%"],
            top: 40,
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
              formatter: "{b}\n{d}%"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold"
              }
            },
            data: [
              { value: 1048, name: "退役军人" },
              { value: 735, name: "现役军人" },
              { value: 580, name: "军人家属" },
              { value: 484, name: "陪同人员" },
              { value: 300, name: "其他人员" }
            ]
          }
        ]
      }
      this.setEcharts(this.$refs.round, option)
    },
    setCategory() {
      const option = {
        title: {
          text: "告警次数统计图"
        },
        color: ["#3BA1FF"],
        xAxis: {
          type: "category",
          data: ["12.01", "12.02", "12.03", "12.04", "12.05", "12.06", "12.07", "12.08", "12.09", "12.11", "12.12", "12.13", "12.14", "12.15", "12.166", "12.17", "12.18", "12.19", "12.20", "12.21", "12.22", "12.23", "12.24", "12.25", "12.26", "12.27", "12.28", "12.29", "12.30", "12.31"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 3, 2, 1],
            type: "bar",
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            }
          }
        ]
      }
      this.setEcharts(this.$refs.category, option)
    }
  }
}
</script>
```

## 效果

![image-20211221154451621](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211221154451621.png)

## 配置项

仅记录常用的配置项，详细配置项请看官方文档

### xAxis 直角坐标系的 x 轴

### yAxis 直角坐标系的 y 轴

### series 系统列表，根据 type 决定图表类型

### tooltip

该属性用于自定义鼠标悬浮时的提示框

示例代码：return 一个 html 字符串用于渲染悬浮提示框

```js
        // 鼠标悬浮时的提示框
        tooltip: {
          trigger: "item", // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          formatter: params => {
            console.log(params)
            return `
              <div class="flex">
              <p class="margin">${this.year}-${params.name}</p>
              <p>${whatDay(params.name)}</p>
              <p class="margin">${params.seriesName}</p>
              <p>${params.data}</p>
              </div>
              `
          }
        }
```

设置 tooltip 中 formatter 属性为一个函数，params 是当前悬浮处的属性，打印一下如下：

![image-20211222104658806](https://gitee.com/zqylzcwcxy/picture-bed/raw/master/img/image-20211222104658806.png)

### 折线

```typescript
const option = {
  // 图例颜色
  color: ['#0755BE', '#D4DE30', '#135219', '#606672'],
  // 图例
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  // x轴
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  // y轴
  yAxis: {
    type: 'value'
  },
  // 系统列表
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      smooth: true, // 控制曲线是否平滑
      areaStyle: {} // 区域填充样式。设置后显示成区域面积图
    }
  ]
}
```

### 柱状图

```js
const option = {
  // x轴
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  // y轴
  yAxis: {
    type: 'value'
  },
  // 系统列表
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar', // 柱状图
      showBackground: true, // 是否显示背景
      // 柱状图背景色
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
```