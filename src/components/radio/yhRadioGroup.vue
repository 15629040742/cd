<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"yh-radio-group",
    props:{
        value:null
    },
    provide(){
        return {
            radioGroup:this
        }
    }
}
</script>
<style>

</style>