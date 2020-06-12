<template>
    <label class="yh-checkbox" :class="{'is-checked':isChecked}">
        <span class="yh-checkbox-input">
            <span class="yh-checkbox-inner"></span>
            <input 
                type="checkbox" 
                class="yh-checkbox-original" 
                :name="name"
                v-model="model"
                :value="label"
            >
        </span>
        <span class="yh-checkbox-label">
            <slot>
                {{label}}
            </slot>
        </span>
    </label>
</template>
<script>
export default {
    name:'yh-checkbox',
    props:{
        label:{
            type:[String,Number,Boolean],
            default:''
        },
        value:{
            type:Boolean,
            default:false
        },
        name:{
            type:String,
            default:''
        }
    },
    inject:{
        checkboxGroup:{
            default:''
        }
    },
    computed:{
        isGroup(){
            return !!this.checkboxGroup
        },
        model:{
            get(){
                return this.isGroup?this.checkboxGroup.value : this.value
            },
            set(value){
                this.isGroup?this.checkboxGroup.$emit('input',value):this.$emit('input',value)
            }
        },
        isChecked(){
            return this.isGroup?this.model.includes(this.label):this.model
        }
    }
    
}
</script>
<style lang="less">
.yh-checkbox{
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
       .yh-checkbox-input{
           white-space: nowrap;
           cursor: pointer;
           outline: none;
           display: inline-block;
           line-height: 1;
           position: relative;
           vertical-align: middle;
           .yh-checkbox-inner{
               border: 1px solid #dcdfe6;
               border-radius: 2px;
               width: 14px;
               height: 14px;
               background-color: #fff;
               position: relative;
               cursor: pointer;
               display: inline-block;
               box-sizing: border-box;
               z-index: 1;
               transition: border-color 0.25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s
               cubic-bezier(.71,-.46,.29,1.46);
               &:after{
                   box-sizing: content-box;
                   content: "";
                   border-top: 0;
                   height: 7px;
                   left: 4px;
                   position: absolute;
                   top: 1px;
                   transform: rotate(45deg) scaleY(0);
                   width: 3px;
                   transition: transform .15s ease-in .05s;
                   transform-origin: center;
               }
             
           }
           .yh-checkbox-original{
                opacity: 0;
                outline: none;
                position: absolute;
                z-index: -1;
                left: 10px;
                margin: 0;
                width: 0px;
            }
       }
       
       .yh-checkbox-label{
           display: inline-block;
           font-size: 14px;
           padding-left: 10px;
           line-height: 19px;
       }
   }
   .yh-checkbox.is-checked{
       .yh-checkbox-input{
           .yh-checkbox-inner{
               background-color: #409eff;
               background: #409eff;
               &:after{
                   transform: translate(45deg) scaleY(1);
               }
           }
       }
       .yh-checkbox-label{
           color: #409eff;
       }
   }
</style>