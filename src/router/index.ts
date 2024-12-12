import { createRouter, createWebHistory } from 'vue-router';
import CurrencyEdit from '../components/CurrencyEdit.vue';
import ChangedRates from '../pages/ChangedRates.vue';
import Home from '../pages/Home.vue';
import SearchRates from '../pages/SearchRates.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/changed-rates', component: ChangedRates },
  { path: '/search-rates', component: SearchRates },
  { path: '/currency-edit/:id', component: CurrencyEdit, props: true },
];

const router = createRouter({
  history: createWebHistory('/nbu-currency-app/'),
  routes,
});

export default router;
