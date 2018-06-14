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
                <p>{{name}}</p>
                <!--
                <b-field label="Password">
                    <b-input
                            type="password"
                            v-model="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                    </b-input>
                </b-field>
                -->
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
        created:function(){
          if (localStorage.getItem('name') == null) {
            location.href = '/login';
          } else {
            location.href = '/tweet/' + localStorage.getItem('name')
          }
        },
        methods:{
            
        }
    }
</script>