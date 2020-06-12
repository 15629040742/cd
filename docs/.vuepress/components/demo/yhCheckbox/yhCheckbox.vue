
<template>
  <div>
    <yh-checkbox-group v-model="hobby">
        <yh-checkbox label="抽烟"></yh-checkbox>
        <yh-checkbox label="喝酒"></yh-checkbox>
        <yh-checkbox label="打豆豆"></yh-checkbox>
    </yh-checkbox-group> 
  </div>
  
</template>
<script>
export default {
    data(){
        return {
           model:{
                 hobby:["抽烟","喝酒","打豆豆"]
            }
        }
    }
}
</script>