import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '@/views/LandingView.vue';
import PlayView from '@/views/PlayView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/about',
      name: 'about',
      // Lazy load the AboutView component, not really needed but whatevs
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/play',
      name: 'play',
      component: PlayView,
    },
    // {
    //   path: '/event/:id',
    //   name: 'event-details',
    //   props: true,
    //   component: () => import('@/views/EventDetailsView.vue'),
    // },
  ],
});

export default router;
