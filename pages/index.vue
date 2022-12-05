<template>
  <div class="index-page">
    <Header />
    <h1>Descubra o que você sabe sobre cada país do mundo!</h1>
    <nuxt-link to="/login">
      <img src="~/assets/images/maps/undraw_connected_world_wuay.svg" />
    </nuxt-link>
    <div class="main center">
      <div class="btn-test center">
        <p>Hover Me!</p>
        <div class="d1"></div>
        <div class="d2"></div>
        <div class="d3"></div>
        <div class="d4"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  middleware: 'auth', 
  auth : 'guest',
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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  height: 100vh;
}

.btn-test {
  width: 150px;
  height: 45px;
  position: relative;
  cursor: pointer;
  transition: all .3s;
}

.btn-test:hover {
  background: #7b21d6;
  transition-delay: .5s;
  color: white;
  font-size: 1.2rem;
}

.d1, .d2 {
  position: absolute;
  width: 100%;
  height: 4px;
  background: #7b21d6;
  transform: scaleX(0);
  transition: all .3s;
  transition-delay: .3s;
}

.d1 {
  top: 0;
  transform-origin: left;
}

.d2 {
  bottom: 0;
  transform-origin: right;
}

.btn-test:hover .d1, .btn-test:hover .d2 {
  transform: scaleX(1);
  transition-delay: 0s;
}

.d3, .d4 {
  width: 4px;
  height: 100%;
  position: absolute;
  background: #7b21d6;
  transform: scaleY(0);
  transition: all .3s;
}

.d3 {
  left: 0;
  transform-origin: bottom;
}

.d4 {
  right: 0;
  transform-origin: top;
}

.btn-test:hover .d3, .btn-test:hover .d4 {
  transform: scaleY(1);
  transition-delay: .3s;
}
</style>