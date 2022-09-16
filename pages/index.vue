<template>
  <main>
    <h1>Página Inicial, onde ficará o Mapa</h1>
    <nuxt-link to="/login">
      <div class="btn btn-primary">Vamos Lá</div>
    </nuxt-link>
  </main>
</template>
<script>
export default {
  name: 'IndexPage',
  middleware: 'auth', 
  auth : 'guest',
}
</script>
<style>
body {
  background-color: rgb(34, 34, 34);
  color: white;
  margin: 0 auto;
  padding: 15px;
}
</style>