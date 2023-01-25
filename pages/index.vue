<template>
  <div class="index-page">
    <Header />
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  middleware: 'auth', 
  auth : 'guest',
  beforeCreate() {
    this.$router.push('/login')
  }
}
</script>
<style scoped>
body {
  background-color: rgb(34, 34, 34);
  color: white;
  margin: 0 auto;
  padding: 15px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>