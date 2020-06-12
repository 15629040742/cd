<template>
    <div class="checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"yh-checkbox-group",
    props:{
        value:{
            type:Array
        }
    },
    provide(){
        return {
            checkboxGroup:this
        }
    }
}
</script>
<style>

</style>