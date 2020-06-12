<template>
    <transition>
        <div class="yh-dialog-wrapper" v-show="visible" @click.self="handleCLose()">
            <div :class="['yh-dialog',{'fullscreen':fullscreen}]" :style="{width:width}">
                <div class="yh-dialog-header">
                    <span class="title">{{title}}</span>
                    <yh-button class="header-btn" @click="handleCLose()">关闭</yh-button>
                </div>
                <div class="yh-dialog-content">
                    <slot name="content">
                    
                    </slot>
                </div>
                <div class="yh-dialog-footer">
                    <slot name="footer">
                    
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>

export default {
    name:'yh-dialog',
    props:{
        title:{
            type:String,
            default:'提示'
        },
        width:{
            type:String,
            default:'50%'
        },
        top:{
            type:String,
            default:'15vh',
        },
        fullscreen:{
            type:Boolean,
            default:false
        },
        visible:{
            type:Boolean,
            default:false
        }
    },

    methods:{
        handleCLose(){
            console.log('123')
            this.$emit('update:visible',false)
        }
    }
}
</script>
<style lang="less">

    .yh-dialog-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        margin: 0;
        z-index: 1000;
        background-color: rgba(0,0,0,0.5);
        .yh-dialog{
            position: relative;
            margin: 15vh auto 50px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            box-sizing: border-box;
            width: 30%;
            .yh-dialog-header{
                padding: 20px 20px 10px;
                .title{
                    line-height: 20px;
                    font-size: 18px;
                    color: #303133;
                }
                .header-btn{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    padding: 0;
                    background: transparent;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 16px;
                }
            }
            .yh-dialog-content{
                padding: 30px 20px;
                color: #606266;
                font-size: 14px;
                word-break: break-all;
            }
            .yh-dialog-footer{
                display: flex;
                padding: 10px 20px 20px;
                text-align: right;
                box-sizing: border-box;

            }
        }
        .fullscreen.yh-dialog{
            height: 100%;
            width: 100% !important;
            margin: 0;
        }
    }
    
    .v-enter-active{
        animation: fade 0.5s;
    }
    .v-leave-active{
        animation: fade 0.5s reverse;
    }
    @keyframes fade {
        0%{
            opacity: 0;
            transform: translateY(-20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>