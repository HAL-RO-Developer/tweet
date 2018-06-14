<template>
  <ul>
    <li v-for="(tweet, key, index) in tweets" :key="index">
      <img src="https://pbs.twimg.com/profile_images/778387920440823808/kw35Gu4T_400x400.jpg" 
      alt="ユーザ画像">
      <p>{{tweet.name}}</p>
      <p>{{tweet.id}}</p>
      <p>{{tweet.body}}</p>
      <p>{{tweet.favorite}}</p>
    </li>
  </ul>
</template>

<script>
import http from '../../service/service'
export default {
  data(){
    return{
      tweets :new Array()
    }
  },
  created(){
    http.tweets()
    .then((response)=>{
      console.log(response.data.tweets)
      this.tweets = response.data.tweets
    })
  },
  methods:{
  }
}
</script>

<style>
.image {
  width: 5%;
  height: 5%;
}
</style>

