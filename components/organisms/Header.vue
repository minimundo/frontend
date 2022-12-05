<template>
    <header class="header">
      <Container class="flex-wrap justify-content-between container-fluid">
        <NavBar />
      </Container>
      <hr v-if="!$auth.loggedIn" class="dropdown-divider divider-header">
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
  }

  .divider-header {
    opacity: 10%;
  }
  </style>