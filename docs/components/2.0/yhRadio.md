<baseComponent-codeBox title="基本用法"
  description="表示两种相互对立的状态间的切换，多用于触发「开/关」。"
  onlineLink="https://codepen.io/1011yh/pen/KjEOWO">
  <demo-yhRadio-yhRadio></demo-yhRadio-yhRadio>
  <!-- 这里直接设置 引入的展示代码 ；注意引入代码一定不能缩进！！！否则不能生效！-->
  
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/yhRadio/yhRadio.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-apiTable title="Radio Attributes" :tableBody="tableBody" :tableHead="tableHead">
</baseComponent-apiTable>

<baseComponent-apiTable title="Radio-group Attributes" :tableBody="tableBody2" :tableHead="tableHead2">
</baseComponent-apiTable>

<baseComponent-apiTable title="Radio Events" :tableBody="tableBody3" :tableHead="tableHead3">
</baseComponent-apiTable>

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `v-model | 绑定值 |string / number / boolean |- | -`,
          `label | Radio 的 value | string / number / boolean | - | -`,
          `name | 原生 name 属性 | string | - |-`,
        ],

        tableHead2: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody2: [
          `v-model | 绑定值 |string / number / boolean |- | -`,
        ],

        tableHead3: `事件名称 | 说明 | 回调参数`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody3: [
          `change | 绑定值变化时触发的事件 |选中的 Radio label 值`,
        ],
      }
    },

  }
</script>