<template>
    <div>
        <h1>{{name}}</h1>
        <textarea v-model="body" placeholder="new tweet"></textarea>
        <button class="button" type="button" @click="tweet">TWEET</button>
        <button class="button" type="button" @click="signout">ログアウト</button>
    </div>
</template>
<script>
    import axios from 'axios'
    import http from '../../service/service'
    export default {
        data(){
            return{
                name: this.$route.params.name,
                body: "",
                image: ""
            }
        },
        methods:{
            tweet(){
                http.tweet(this.name, this.body, this.image)
                    .then( (response) => {
                        console.log(response.data)
                    }) 
                    .catch( (error)=> {
                        console.log(error.response.data.error)
                        this.msg = error.response.data.error     
                    });
            },
            signout(){
                localStorage.removeItem('name')
                location.href = '/'
            }
        }
    }
</script>
