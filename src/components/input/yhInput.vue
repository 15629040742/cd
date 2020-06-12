<template>
    <div>
        <input type="text" 
            :class="['yh-input',{'disabled':disabled,}]" 
            :placeholder="placeholder"  
            :disabled="disabled"
            :value="value"
            @input="handleIpt"
            ref="input"
        >
        <button v-show="value&&clearable" @click="clear">123</button>
    </div>
</template>
<script>
export default {
    name:'yh-input',
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        clearable:{
            type:Boolean,
            default:false
        },
        placeholder:{
            type:String,
            default:'请输入类容'
        },
        value:{
            type:String,
            default:''
        }
    },
    mounted(){
        console.log(this.$refs)
    },
    data(){
        return{
            
        }
    },
    methods:{
        clear(){
            // this.value = ''
            this.$emit('input','')
        },
        handleIpt(e){
            console.log(this.$refs.input.value)
            this.$emit('input',e.target.value)
        }
    }
}
</script>
<style lang="less">
    .yh-input{
        background-color: #FFF;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        &:focus{
            border-color: #409eff;
        }
    }
    .yh-input::placeholder{
        color: #DCDFE6
    }
    .disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
    }
</style>