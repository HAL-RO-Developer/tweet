<template>
    <div>
        <img class="contain" v-show="image" :src="image" @click="showUserTweet"><br>
        <h1>{{name}}</h1>
        <textarea v-model="body" placeholder="new tweet" required></textarea><br>
        <button class="button" type="button" @click="tweet">TWEET</button>
        <button class="button" type="button" @click="showTimeline">タイムライン閲覧</button><br>
        <button class="button" type="button" @click="signout">ログアウト</button><br>
        <p class="err" v-if="msg">[ERR]{{msg}}</p>
    </div>
</template>
<script>
    import axios from 'axios'
    import http from '../../service/service'
    import session from '../../service/session'
    export default {
        data(){
            return{
                name: this.$route.params.name,
                body: "",
                image: localStorage.getItem('icon'),
                msg: ""
            }
        },
        methods:{
            tweet(){
                http.tweet(this.name, this.body, this.image)
                    .then( (response) => {
                        console.log(response.data)
                        this.body = ""
                        this.msg = ""
                    }) 
                    .catch( (error)=> {
                        console.log(error.response.data.err)
                        this.msg = error.response.data.err     
                    });
            },
            showUserTweet(){
                this.$router.push({path:'/user/' + this.name})
            },
            showTimeline(){
                this.$router.push({path:'/timeline'})
            },
            signout(){
                session.signout(this)
            }           
        }
    }
</script>

<style>
    .contain {
        display: inline-block;
        background-color: #ccc;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 5px;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        background-size: contain;
    }
    .err{
        color: red;
    }
</style>
