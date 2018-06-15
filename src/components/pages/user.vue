<template v-if="name">
    <ul class="tweets">
        <li v-for="(tweet, key, index) in tweets" :key="index">
            <div class="image"><img :src='image_src' v-show="image_src"></div>
            <div class="tweet">
            <p class="name">{{tweet.name}}</p>
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
        name: this.$route.params.name,
        image_src: "https://api.patra.store/v1/images"
    }
  },
  created(){
    http.tweets()
    .then((response)=>{
        console.log(response.data.name)
        this.name = response.data.name
        console.log(response.data.tweets)
        this.tweets = response.data.tweets
    })
  },
  methods:{
  }
}
</script>