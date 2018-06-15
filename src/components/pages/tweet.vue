<template>
    <div>
        <h1>{{name}}</h1>
        <textarea v-model="body" placeholder="new tweet" required></textarea><br>
        <input type="file" v-on:change="onFileChange"><br>
        <img class="contain" v-show="image" :src="image" /><br>
        <button class="button" type="button" @click="tweet">TWEET</button><br>
        <button class="button" type="button" @click="signout">ログアウト</button><br>
        <p class="err" v-if="msg">[ERR]{{msg}}</p>
        <p v-if="image">{{image}}</p>
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
                image: "",
                msg: ""
            }
        },
        methods:{
            tweet(){
                http.tweet(this.name, this.body, this.image)
                    .then( (response) => {
                        console.log(response.data)
                        this.body = ""
                        this.image = ""
                        this.msg = ""
                    }) 
                    .catch( (error)=> {
                        console.log(error.response.data.err)
                        this.msg = error.response.data.err     
                    });
            },
            onFileChange(e){
                let files = e.target.files || e.dataTransfer.files;
                //console.log(files[0])
                http.imageUpload(files[0])
                    .then((response) => {
                        console.log(response.data.image_url)
                        this.image = respose.data.image_url
                    }) 
                    .catch( (error)=> {
                        //console.log(error.response.data.err)    
                    });                
            },
            signout(){
                localStorage.removeItem('name')
                this.$router.push({ path: '/' });
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
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background-size: contain;
    }

    .err{
        color: red;
    }
</style>
