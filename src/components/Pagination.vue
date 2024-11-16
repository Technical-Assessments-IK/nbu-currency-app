<template lang="pug">
  div
    button(@click='prevPage' :disabled='currentPage <= 1') Previous
    span.page-title Page {{ currentPage }} &zcy; {{ totalPages }}
    button(@click='nextPage' :disabled='currentPage >= totalPages') Next
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    totalItems: Number,
    itemsPerPage: Number,
  });

  const emit = defineEmits(['pageChanged']);

  const currentPage = ref(1);
  const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      emit('pageChanged', currentPage.value);
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      emit('pageChanged', currentPage.value);
    }
  };
</script>

<style lang="stylus" scoped>
  .page-title 
    padding 0 10px
</style>