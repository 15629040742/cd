<template>
  <div>
        <yh-radio label="男" v-model="gender"></yh-radio>
        <yh-radio label="女" v-model="gender"></yh-radio>
  </div>
  
</template>
<script>
export default {
    data(){
        return {
            gender:'女'
        }
    }
}
</script>