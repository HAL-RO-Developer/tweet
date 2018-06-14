<template>
  <ul class="tweets">
    <li v-for="(tweet, key, index) in tweets" :key="index">
      <div class="image"><img src="https://pbs.twimg.com/profile_images/778387920440823808/kw35Gu4T_400x400.jpg" 
      alt="ユーザ画像"></div>
      <div class="tweet">
      <p class="name">{{tweet.name}}</p>
      <p class="id">{{tweet.id}}</p>
      <p class="body">{{tweet.body}}</p>
      <p class="favo">{{tweet.favorite}}</p>
      </div>
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
.tweets {
  background: #FFF;
  padding: 10px;
  overflow: hidden;
}
.image {
  width: 10%;
  height: 10%;
  float: left;
  margin-right: 10px;
  padding-bottom: 10px;
  clear : both;
}
.tweet {
  overflow: hidden;
}
.name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.id, .body, .favo{
  margin-bottom: 10px;
  padding-bottom: 10px;
}
</style>

