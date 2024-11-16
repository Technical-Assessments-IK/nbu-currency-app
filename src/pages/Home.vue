<template lang="pug">
  div
    h1 Currency Rates
    CurrencyList(:currencies="store.currencies")
</template>


<script setup>
  import { onMounted } from 'vue';
  import CurrencyList from '../components/CurrencyList.vue';
  import { useCurrencyStore } from '../store/currencyStore';

  const store = useCurrencyStore();

  onMounted(() => {
    store.fetchCurrencies();
  });
</script>
