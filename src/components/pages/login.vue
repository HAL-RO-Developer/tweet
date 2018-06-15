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
    import auth from '../../service/auth'
    export default {
        data() {
            return {
                name: "",
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
                localStorage.setItem('name', this.name)
                this.$router.push({ path: '/tweet/' + localStorage.getItem('name') })
            }
        }
    }
</script>