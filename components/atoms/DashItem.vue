<template>
  <div class="nav-item">
    <nuxt-link :to="to" class="nav-link">
      {{ text }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'DashItem',
  props: {
    text: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>
<style scoped>
a.nuxt-link-exact-active {
  color: white !important;
  border-bottom: solid 2px white !important;
}
</style>