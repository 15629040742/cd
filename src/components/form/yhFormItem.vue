<template>
  <div class="yh-form-item">
      <label class="yh-form-item-label" :style="labelStyle">{{label}}</label>
      <div class="yh-form-item-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'yh-form-item',
    props:{
        label:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="less">
    .yh-form-item{
        margin-bottom: 25px;
        .yh-form-item-label{
            text-align: right;
            vertical-align: middle;
            float: left;
            font-size: 14px;
            color: #606266;
            line-height: 40px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }
        .yh-form-item-content{
            line-height: 40px;
            position: relative;
            font-size: 14px;
            overflow: hidden;
        }
    }
</style>