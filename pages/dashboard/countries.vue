<template>
    <div>
    </div>
  </template>
  <script>
  export default {
    layout: 'Dashboard',
    created() {
      this.$store.dispatch("country/getCountry");
    },
  }
  </script>