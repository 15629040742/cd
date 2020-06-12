<template>
    <button 
        :class="[type,{
            'disabled':disabled,
            'round':round,
            'circle':circle
        }]"
        @click="BtnClick" 
        class="yhButton" 
        :disabled="disabled"
    >
        <slot>
            按钮
        </slot>
        <i v-show="icon" :class="icon"></i>
    </button>
</template>
<script>
export default {
    name:'yh-button',
    props:{
        type:{
            type:String,
            default:'default',
        },
        disabled:{
            type:Boolean,
            default:false
        },
        round:{
            type:Boolean,
            default:false
        },
        circle:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:''
        }
    },
    methods:{
        BtnClick(){
            this.$emit('click')
        }
    }
}
</script>
<style scoped lang="less">
    .yhButton{
        border: 0px solid black;
        min-width: 64px;
        height: 36px;
        padding: 0 16px;
        border-radius: 4px;
        // font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.09em;
        outline: none;
        cursor: pointer;
        user-select: none;
        text-align: center;
    }
    .round{
        border-radius: 20px;
    }
    .circle{
        height: 65px;
        width: 65px;
        border-radius: 50%;
    }
    .default{
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        &:hover,
        &:focus{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }


    .default.disabled{
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }

    .primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus{
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }

    .primary.disabled{
        cursor: not-allowed;
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
    }
   
    .success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus{
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }

    .success.disabled{
        cursor: not-allowed;
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
    }

    .danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus{
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
    }

    .danger.disabled{
        cursor: not-allowed;
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
    }

    .warning{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,
        &:focus{
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
    }
   .warning.disabled{
        cursor: not-allowed;
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
    }
    .icon[class*=icon-]+span{
        margin-left: 5px;
    }

    
</style>