<template lang="pug">
  div
    CurrencySearch(@search="updateSearch")
    ul(v-if="filteredCurrencies.length > 0")
      li(v-for="currency in paginatedCurrencies" :key="currency.r030")
        router-link(:to="`/currency-edit/${currency.r030}`" class="currency-link")
          span {{ currency.txt }} ({{ currency.cc }}): {{ currency.rate }}
    p(v-else) No matching records
    Pagination(
      v-if="filteredCurrencies.length > 0" 
      :totalItems="filteredCurrencies.length" 
      :itemsPerPage="itemsPerPage" 
      @pageChanged="changePage"
    )
</template>

<script setup>
  import { ref, computed, onBeforeUnmount } from 'vue';
  import CurrencySearch from './CurrencySearch.vue';
  import Pagination from './Pagination.vue';
  import { defineProps } from 'vue';
  import { useCurrencyStore } from '../store/currencyStore';
  import { useRoute } from 'vue-router';

  const props = defineProps({
    currencies: {
      type: Array,
      required: true,
    },
  });

  const store = useCurrencyStore();
  const currentPage = ref(1);
  const itemsPerPage = 10;

  const filteredCurrencies = computed(() => {
    if (!store.searchTerm) return props.currencies;

    return props.currencies.filter(currency =>
      currency.txt.toLowerCase().includes(store.searchTerm.toLowerCase()) || 
      currency.cc.toLowerCase().includes(store.searchTerm.toLowerCase())
    );
  });

  const paginatedCurrencies = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredCurrencies.value.slice(start, start + itemsPerPage);
  });

  const changePage = (newPage) => {
    currentPage.value = newPage;
  };

  const updateSearch = (term) => {
    store.searchTerm = term;
    currentPage.value = 1;
  };

  const route = useRoute();
  onBeforeUnmount(() => {
    store.searchTerm = '';
  });
</script>
