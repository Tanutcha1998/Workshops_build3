import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CampaignView from '../views/CamPaign.vue'
import PricingView from '../views/PricingView.vue'
import TalkToUs from '../views/TalkToUs.vue'
import StartedView from '../views/StartedView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/campaign',
    name: 'campaign',
    component: CampaignView
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/talkwithus',
    name: 'talkwithus',
    component: TalkToUs
  },
  {
    path: '/started',
    name: 'startedview',
    component: StartedView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
