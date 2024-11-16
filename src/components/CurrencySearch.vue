<template lang="pug">
  div.search-date-container
    input(type="search" v-model="searchTerm" placeholder="Search currency..." @input="filterCurrencies")
</template>
  
<script setup>
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['search']);
  
  const searchTerm = ref('');

  const filterCurrencies = () => {
    emit('search', searchTerm.value);
  };
</script>
  