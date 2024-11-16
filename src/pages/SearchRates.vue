<template lang="pug">
  .search-container
    h1 Searching by date
    .search-wrap
      input(type="date" v-model="selectedDate" @change="fetchByDate")
    CurrencyList(:currencies="store.currencies")
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import CurrencyList from '../components/CurrencyList.vue';
  import { useCurrencyStore } from '../store/currencyStore';

  const store = useCurrencyStore();
  const selectedDate = ref(localStorage.getItem('selectedDate') || store.date);

  const fetchByDate = () => {
    store.fetchCurrencies(selectedDate.value);
    localStorage.setItem('selectedDate', selectedDate.value);
  };

  onMounted(() => {
    if (selectedDate.value) {
      store.fetchCurrencies(selectedDate.value);
    }
  });
</script>

<style lang="stylus" scoped>
  .search-wrap
    display flex
    justify-content flex-end
    max-width 500px
  .search-container 
    > div
      position: relative;
</style>
