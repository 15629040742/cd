<template>
  <div class="yh-form">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'yh-form',
    props:{
        model:{
            type:Object,
            required:true
        }
    }
}
</script>

<style>

</style>