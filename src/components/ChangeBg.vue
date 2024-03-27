<template>
  <button @click="change" class="text-green-500">大屏背景</button>
</template>
<script setup>
import {inject} from "vue";
import bg1 from '@/assets/imgs/bg-1.png'
import bg2 from '@/assets/imgs/bg-2.png'
import bg3 from '@/assets/imgs/bg-3.png'

let currentBg = inject('changeBackground')

let bgImages = [bg1,bg2,bg3]
const change = ()=> {
  let {length} = bgImages
  if(currentBg.value !== bgImages[length-1]){
    let index = bgImages.indexOf(currentBg.value) + 1
    currentBg.value = bgImages[index]
  }else{
    currentBg.value = bg1
  }
}

</script>
<style scoped lang="scss">
</style>