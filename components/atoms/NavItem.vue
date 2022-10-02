<template>
  <div class="nav-item">
    <nuxt-link :to="to" class="nav-link d-inline-block">
      {{ text }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'NavItem',
  props: {
    text: { type: String, required: true },
    to: { type: String, required: true },
  },
}
</script>
<style scoped>
.nav-link {
  font-weight: 500;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
  border-bottom: solid 4px transparent;
}

.nav-link:hover {
  border-bottom: solid 4px var(--primary-color);
  color: w;
  transition: 0.3s all;
}

.nav-item {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
</style>