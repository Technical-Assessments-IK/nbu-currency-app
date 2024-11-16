<template lang="pug">
  div
    h1 Rate editing
    div(v-if='currency')
      h2 {{ currency.txt }} ({{ currency.cc }})
      label(for='rate') Rate:
      input(type='number' v-model='currency.rate')
      button(@click='saveCurrency') Save
      router-link(to='/changed-rates') Back to changed rates
    div(v-else='')
      p Loading...
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useCurrencyStore } from "../store/currencyStore";

  const route = useRoute();
  const router = useRouter();
  const store = useCurrencyStore();
  const currency = ref(null);

  onMounted(() => {
    const currencyId = parseInt(route.params.id);
    const foundCurrency = store.currencies.find((c) => c.r030 === currencyId);
    if (foundCurrency) {
      currency.value = { ...foundCurrency };
    }
  });

  const saveCurrency = () => {
    if (currency.value) {
      store.addEditedCurrency(currency.value);
      router.push("/changed-rates");
    }
  };
</script>

<style lang="stylus" scoped>
  button
    margin 0 10px
  label
    margin-right 10px
</style>