<template>
  <div>
  </div>
</template>
<script>
export default {
  layout: 'Dashboard',
  created() {
      this.$store.dispatch("user/getUser");
  },
}
</script>