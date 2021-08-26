import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '/',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        {
          name: 'Login',
          path: '/login',
          component: () => import('@/views/dashboard/Login'),
        },
        {
          name: 'Sign Up',
          path: '/sign-up',
          component: () => import('@/views/dashboard/Sign-Up'),
        },
        // Pages
        {
          name: 'Bir Billing',
          path: 'upcoming-treks/bir-billing',
          component: () => import('@/views/dashboard/pages/Upcoming-Treks-Bir-Billing'),
        },
        {
          name: 'Bhrigu Lake',
          path: 'upcoming-treks/bhrigu-lake',
          component: () => import('@/views/dashboard/pages/Color-palettes'),
        },
        {
          name: 'Indrahar Pass',
          path: 'upcoming-treks/indrahar-pass',
          component: () => import('@/views/dashboard/pages/Typography'),
        },
        {
          name: 'Prashar Lake',
          path: 'upcoming-treks/prashar-lake',
          component: () => import('@/views/dashboard/pages/Icons'),
        },
        {
          name: 'Triund',
          path: 'upcoming-treks/triund',
          component: () => import('@/views/dashboard/pages/Feature-icons'),
        },
        {
          name: 'Chamba',
          path: 'upcoming-road-trips/chamba',
          component: () => import('@/views/dashboard/pages/Buttons'),
        },
        {
          name: 'Kangra',
          path: 'upcoming-road-trips/kangra',
          component: () => import('@/views/dashboard/pages/Forms'),
        },
        {
          name: 'Kinnaur',
          path: 'upcoming-road-trips/kinnaur',
          component: () => import('@/views/dashboard/pages/Tables-tabs'),
        },
        {
          name: 'Kullu',
          path: 'upcoming-road-trips/kullu',
          component: () => import('@/views/dashboard/pages/Dropdowns'),
        },
        {
          name: 'Mandi',
          path: 'upcoming-road-trips/mandi',
          component: () => import('@/views/dashboard/pages/Side-drawer'),
        },
        {
          name: 'Plan Your Trip',
          path: 'plan-your-trip',
          component: () => import('@/views/dashboard/pages/Product-design-principles'),
        },
      ],
    },
  ],
})
