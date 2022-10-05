<template>
  <div class="container">
    <slot />
  </div>
</template>
  <script>
export default {
  name: 'Container',
}
</script>
  <style scoped>
.container {
  margin: 0 auto;
  max-width: 1070px;
}
</style>