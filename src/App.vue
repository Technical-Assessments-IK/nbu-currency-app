<template lang="pug">
  div.root-container
    nav.navbar
      router-link(to="/", class="nav-link" active-class="active") Currencies List
      router-link(to="/changed-rates", class="nav-link" active-class="active") Changed Rates
      router-link(to="/search-rates", class="nav-link" active-class="active") Searching Rates
    router-view
</template>

<script setup>
  import './style.styl';
</script>

<style lang="stylus" scoped>
  .root-container
    padding 0 20px

  .navbar
    display flex
    justify-content space-around
    align-items center
    background-color #007bff
    padding 10px
    border-radius 5px

  .nav-link
    color white
    text-decoration none
    font-size 18px
    padding 10px
    border-radius 5px
    transition background-color 0.3s

  .nav-link:hover
    background-color rgba(255, 255, 255, 0.2)

  .active
    font-weight bold
    border-bottom 2px solid white
</style>
