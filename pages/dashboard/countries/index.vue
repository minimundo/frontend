<template>
    <Container>
      <h2 class="text-center font-weight-bold">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        Página em manutenção
      </h2>
    </Container>
  </template>
  <script>
  export default {
    layout: 'Dashboard',
    middleware: 'auth',
    created() {
      this.$store.dispatch('country/getCountry')
    },
  }
  </script>
  <style scoped>
  i {
    color: orange;
  }
  </style>