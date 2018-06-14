<template>
  <div>
    <div v-if="Image">
    <img src="https://pbs.twimg.com/profile_images/778387920440823808/kw35Gu4T_400x400.jpg" 
    alt="ユーザ画像" height="15%" width="15%" ></div>
    <div v-if="Name">{{Name}}</div>
    <div v-if="ID">{{ID}}</div>
    <div v-if="Body">{{Body}}</div>
    <div v-if="Favorite">{{Favorite}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ID:"ユーザID",
      Name:"ユーザ名",
      Body:"ツイート",
      Image:"ユーザ画像",
      Favorite:"☆"
    }
  },
  methods:{
    ID(){

    },
    Name(){

    },
    Body(){

    },
    Image(){

    },
    Favorite(){

    }
  }
}
</script>
<style>

</style>

