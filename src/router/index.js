import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import WelcomePage from '@/views/WelcomePage.vue'
import GalleryDetailPage from '@/components/GalleryDetailPage.vue';
import FavoritePage from '@/views/Favorite.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
      path:'/register',
      name:'register',
      component:RegisterView
    },

    {
      path:'/favorites',
      name:'favorites',
      component:FavoritePage
    },
    {
      path:'/WelcomePage',
      name:'WelcomePage',
      component:WelcomePage
    },

    { path: '/gallery/:id', component: GalleryDetailPage },

    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
