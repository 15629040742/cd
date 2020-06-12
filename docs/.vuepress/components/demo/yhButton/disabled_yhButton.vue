<template>
  <!-- 注意这里代码必须再包裹一层div，否则会解析报错 -->
  <div>
    <yh-button text="default" disabled>默认按钮</yh-button>
    <yh-button text="primary"
                type="primary" disabled>主要按钮</yh-button>
    <yh-button text="success"
                type="success" disabled>成功按钮</yh-button>
    <yh-button text="warning"
                type="warning" disabled>警告按钮</yh-button>
    <yh-button text="danger"
                type="danger" disabled>危险按钮</yh-button>
  </div>
  
</template>
<script>
export default {
}
</script>
