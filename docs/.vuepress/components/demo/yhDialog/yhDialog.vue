<template>
  <!-- 注意这里代码必须再包裹一层div，否则会解析报错 -->
  <div>
    <yh-button text="default" @click="visible = true">点击打开dialog</yh-button>
    <yh-dialog :visible.sync="visible">
        <template v-slot:content>
            这是content部分
        </template>
        <template v-slot:footer>
            <yh-button text="default">确认</yh-button>
            <yh-button text="default">取消</yh-button>
        </template>
    </yh-dialog>
  </div>
  
</template>
<script>
export default {
    data(){
        return {
            visible:false
        }
    }
}
</script>