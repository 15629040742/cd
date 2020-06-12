<template>
    <label class="yh-radio" :class="{'is-checked':label === value}">
        <span class="yh-radio-input">
            <span class="yh-radio-inner"></span>
            <input 
                type="radio" 
                class="yh-radio-original" 
                :value="label"
                :name="name"
                v-model="model"
            >
        </span>
        <span class="yh-radio-label">
            <slot>
                {{label}}
            </slot>
        </span>
    </label>
</template>
<script>
export default {
    name:"yh-radio",
    props:{
        label:{
            type:[String,Number,Boolean],
            default:''
        },
        value:null,
        name:{
            type:String,
            default:''
        }
    },
    computed:{
        model:{
            get(){
                return this.value
            },
            set(value){
                this.$emit('input',value)
            }
        }
    }
}
</script>
<style lang="less">
   .yh-radio{
       color: #606266;
       font-weight: 500;
       line-height: 1;
       position: relative;
       cursor: pointer;
       display: inline-block;
       white-space: nowrap;
       outline: none;
       font-size: 14px;
       margin-right: 30px;
       user-select: none;
       .yh-radio-input{
           white-space: nowrap;
           cursor: pointer;
           outline: none;
           display: inline-block;
           line-height: 1;
           position: relative;
           vertical-align: middle;
           .yh-radio-inner{
               border: 1px solid #dcdfe6;
               border-radius: 100%;
               width: 14px;
               height: 14px;
               background-color: #fff;
               position: relative;
               cursor: pointer;
               display: inline-block;
               box-sizing: border-box;
               &:after{
                   width: 4px;
                   height: 4px;
                   border-radius: 100%;
                   background-color: #fff;
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%) scale(0);
                    transition: transform 0.15s ease-in;
               }
             
           }
           .yh-radio-original{
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: 0;
            }
       }
       
       .yh-radio-label{
           font-size: 14px;
           padding-left: 10px;
       }
   }
   .yh-radio.is-checked{
       .yh-radio-input{
           .yh-radio-inner{
               background-color: #409eff;
               background: #409eff;
               &:after{
                   transform: translate(-50%,-50%) scale(1);
               }
           }
       }
       .yh-radio-label{
           color: #409eff;
       }
   }
</style>