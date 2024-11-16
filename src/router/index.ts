import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ChangedRates from '../pages/ChangedRates.vue';
import SearchRates from '../pages/SearchRates.vue';
import CurrencyEdit from '../components/CurrencyEdit.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/changed-rates', component: ChangedRates },
  { path: '/search-rates', component: SearchRates },
  { path: '/currency-edit/:id', component: CurrencyEdit, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
