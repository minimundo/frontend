<template>
  <header class="header">
    <Container class="d-flex flex-wrap justify-content-between container-fluid">
      <Logo />
      <NavBar />
    </Container>
  </header>
</template>
  
  <script>
export default {
  name: 'Header',
}
</script>
  
<style scoped>
.header {
  color: white;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
}
</style>