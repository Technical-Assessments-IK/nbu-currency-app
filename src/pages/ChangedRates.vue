<template lang="pug">
  div
    h1 Changed Rates
    CurrencyList(:currencies="editedCurrencies")
</template>

<script setup>
  import { computed } from 'vue';
  import CurrencyList from '../components/CurrencyList.vue';
  import { useCurrencyStore } from '../store/currencyStore';

  const store = useCurrencyStore();
  const editedCurrencies = computed(() => store.editedCurrencies);
</script>
