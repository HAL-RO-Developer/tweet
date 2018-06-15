<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">ログイン</p>
            </header>
            <div v-if="msg">{{msg}}</div>
            <section class="modal-card-body">
                <b-field label="Name">
                    <b-input
                            type="text"
                            v-model="name"
                            placeholder="Your name"
                            required>
                    </b-input>
                </b-field>
                <input type="file" v-on:change="onFileChange"><br>
                <img class="contain" v-show="image" :src="image" /><br>
                <!-- <b-checkbox>Remember me</b-checkbox> -->
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="signup">新規登録</button>
                <button class="button" type="button" @click="signin">ログイン</button>
            </footer>
        </div>
    </form>
</template>

<script>
    import axios from 'axios'
    import http from '../../service/service'
    import session from '../../service/session'
    import auth from '../../service/auth'
    export default {
        data() {
            return {
                name: "",
                image:"",
                msg:""
            }
        },
        methods:{
            signup(){
                http.signup(this.name, this.password)
                .then( (response) => {
                    console.log(response.data.success);
                    signin()
                }) 
                .catch( (error)=> {
                    console.log(error.response.data.error);
                    this.msg = error.response.data.error
                    
                });
            },
            signin(){
               session.signin(this, this.name, this.image)
            },
            onFileChange(e){
            let files = e.target.files || e.dataTransfer.files;
            http.imageUpload(files[0])
                .then((response) => {
                    console.log(response.data.image_url)
                    this.image = response.data.image_url
                }) 
                .catch( (error)=> {
                    //console.log(error.response.data.err)    
                });                
            },
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
</style>
