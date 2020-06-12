
<template>
  <div>
        <yh-form :model="model">
        <yh-form-item label="性别">
            <yh-input v-model="model.username"></yh-input>
        </yh-form-item>
        <yh-form-item label="爱好">
            <yh-checkbox-group v-model="model.hobby">
                <yh-checkbox label="抽烟"></yh-checkbox>
                <yh-checkbox label="喝酒"></yh-checkbox>
                <yh-checkbox label="打豆豆"></yh-checkbox>
            </yh-checkbox-group>
        </yh-form-item>
    </yh-form>
  </div>
  
</template>
<script>
export default {
    data(){
        return {
           model:{
                username:'',
                 hobby:[],
            }
        }
    }
}
</script>