<template>
  <div>
    后台首页
    {{count}}
    <el-button @click="addCount">{{ count }}</el-button>
    <el-button @click="addCount2">{{ count }}</el-button>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script setup>
import { ref,reactive } from "vue";

import HelloWorld from '~/components/HelloWorld.vue'

let count = ref(1);
let form = reactive({
    count:2
})
const addCount = () => {
  console.log("addCount");

  count++;
  console.log("count=>",count);
};
const addCount2 = () =>{
    count.value++
    console.log(count.value);

    form.count++
    console.log("form.count=>",form.count);
}
</script>