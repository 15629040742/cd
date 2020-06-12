<baseComponent-codeBox title="基本用法"
  description="表示两种相互对立的状态间的切换，多用于触发「开/关」。"
  onlineLink="https://codepen.io/1011yh/pen/KjEOWO">
  <demo-yhForm-yhForm></demo-yhForm-yhForm>
  <!-- 这里直接设置 引入的展示代码 ；注意引入代码一定不能缩进！！！否则不能生效！-->
  
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/yhForm/yhForm.vue
  </highlight-code>
</baseComponent-codeBox>

<baseComponent-apiTable title="Form Attributes" :tableBody="tableBody" :tableHead="tableHead">
</baseComponent-apiTable>

<!-- <baseComponent-apiTable title="Slot" :tableBody="tableBody2" :tableHead="tableHead2">
</baseComponent-apiTable> -->

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `model | 表单数据对象 | object |- | -`,
        ],

       
      }
    },

  }
</script>