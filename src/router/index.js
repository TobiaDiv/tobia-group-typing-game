import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "../views/HomePage.vue";
import GamePage from "../views/GamePage.vue";
import Level1Page from "../views/Level1Page.vue";
import Level2Page from "../views/Level2Page.vue";
import Level3Page from "../views/Level3Page.vue";
import TestPage from "../views/TestPage.vue";
import ScorePage from "../views/ScorePage.vue";
const routes = [
  {


    path: "/",
    component: HomePage
  },
  {
    path: "/GamePage",
    component: GamePage
  },
  {
    path: "/Level1Page",
    component: Level1Page
  },


  {
    path: "/Level3Page",
    component: Level3Page
  },
  {
    path: "/Level2Page",
    component: Level2Page
  },
  {
    path: "/TestPage",
    component: TestPage
  },
  {
    path: "/ScorePage",
    component: ScorePage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
