<template>
    <div class="yh-switch" @click="chageStyle" :class="[{'is-checked':isChecked}]">
        <span class="yh-switch-core" :style='{"background": isChecked ? activeColor:inactiveColor}'>
            <span class="yh-switch-button">

            </span>
        </span>
    </div>
</template>
<script>
export default {
    name:'yh-switch',
    props:{
        inactiveColor:{
            type:String,
            default:'#dcdfe6'
        },
        activeColor:{
            type:String,
            default:'#409eff'
        }
    },
    data(){
        return {
            isChecked:false
        }
    },
    methods:{
        chageStyle(){
            this.isChecked = !this.isChecked
        }
    }
}
</script>
<style lang="less">
    .yh-switch{
        display: inline-flex;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
        .yh-switch-core{
            margin: 0;
            display: inline-block;
            position: relative;
            width: 40px;
            height: 20px;
            border: 1px solid #dcdfe6;
            outline: none;
            border-radius: 10px;
            box-sizing: border-box;
            background: #dcdfe6;
            cursor: pointer;
            transition: border-color .0.3s,bacground-color 0.3s;
            vertical-align: middle;
            .yh-switch-button{
                position:absolute;
                top: 1px;
                left: 1px;
                border-radius: 100%;
                transition: all 0.3s;
                width: 16px;
                height: 16px;
                background-color: #fff;
            }
        }
    }
    .yh-switch.is-checked{
        .yh-switch-core{
            background-color: #409eff;
            border-color: #409eff;
            .yh-switch-button{
                transform: translateX(20px);
            }
        }
    }
</style>