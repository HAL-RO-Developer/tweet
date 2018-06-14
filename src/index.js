import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/pages/list.vue'
import Timeline from './components/pages/timeline.vue'
import Tweet from './components/pages/tweet.vue'
import Index from './components/pages/index.vue'
import Login from './components/pages/login.vue'
import NotFound from './components/pages/notFound.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.component('index', Index)


Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [
    { path: "/timeline", component: Timeline },
    { path: "/tweet/:name", component: Tweet },
    { path: "/", component: Index },
    { path: "/login" , component: Login },
    { path: "*", component: NotFound },
]
const router = new VueRouter({  mode: 'history', routes })

new Vue({
    router
}).$mount("#app")
