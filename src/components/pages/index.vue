<template>
  <div>
    <h1 @click="hello">{{name}}</h1>
    <input type="text" v-model="name">
  </div>
</template>

<script>

export default {
  name: "index",
  data(){
    return{
      name:"hirotaka"
    }
  },
  methods:{
    hello(){
      console.log("hello")
      this.name = "hello"
    }
  }
  
}
</script>

<style>
  h1{
    color: red;
  }
</style>

