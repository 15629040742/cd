<baseComponent-codeBox title="基本用法"
  description="Dialog 弹出一个对话框，适合需要定制性更大的场景。"
  onlineLink="https://codepen.io/1011yh/pen/KjEOWO">
  <demo-yhCalendar-yhCalendar></demo-yhCalendar-yhCalendar>
  <!-- 这里直接设置 引入的展示代码 ；注意引入代码一定不能缩进！！！否则不能生效！-->
  
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/yhCalendar/yhCalendar.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-apiTable title="Attributes" :tableBody="tableBody" :tableHead="tableHead">
</baseComponent-apiTable>

<baseComponent-apiTable title="Slot" :tableBody="tableBody2" :tableHead="tableHead2">
</baseComponent-apiTable>

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean |- | false`,
          `top | Dialog CSS 中的 margin-top 值 | string | - | 15vh`,
          `width | Dialog 的宽度 | string | - |50%`,
          `title | Dialog 的标题 | string | - | -`,
          `fullscreen | 是否为全屏 Dialog | boolean | - |false`,
        ],

        tableHead2: `name | 说明 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody2: [
          `content | dialog的content区域内容`,
          `footer |	dialog的footer区域内容`
        ],
      }
    },

  }
</script>