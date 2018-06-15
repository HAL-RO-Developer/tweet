<template>
  
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
            this.$router.push({ path: '/login' })
          } else {
            this.$router.push({ path: '/tweet/' + localStorage.getItem('name') })
          }
        },
        methods:{
            
        }
    }
</script>