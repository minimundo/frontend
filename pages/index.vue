<template>
  <body>
    <main>
      <section id="hero">
        <div class="hero-container">
          <h1 data-aos="zoom-in" class="aos-init aos-animate">
            Bem vindo ao minimundo
          </h1>
          <h2 data-aos="fade-up" class="aos-init aos-animate">TCC</h2>
          <NuxtLink
            to="/quiz"
            class="btn-get-student scrollto aos-init aos-animate"
          >
            Sou aluno
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="btn-get-teacher scrollto aos-init aos-animate"
          >
            Sou Professor
          </NuxtLink>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #000000;
  color: #555555;
}

a {
  text-decoration: none;
  color: #7cc576;
}

a:hover {
  color: #9ed49a;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
}

/*--------------------------------------------------------------
# Disable AOS delay on mobile
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  position: relative;
}

#hero .hero-container {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 15px;
}

#hero .hero-logo {
  margin-bottom: 30px;
}

#hero h1 {
  margin: 0 0 30px 0;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  color: #000000;
}

#hero h2 {
  color: #000000;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}

#hero .btn-get-student {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 30px;
  border-radius: 3px;
  margin: 10px;
  color: #fff;
  background: #7cc576;
}

#hero .btn-get-student:hover {
  transition: 0.5s;
  background: #fff;
  color: #7cc576;
}

#hero .btn-get-teacher {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 30px;
  border-radius: 3px;
  margin: 10px;
  color: #fff;
  background: #ff33ff;
}

#hero .btn-get-teacher:hover {
  transition: 0.5s;
  background: #fff;
  color: #ff33ff;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    line-height: 22px;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: whitesmoke;
}

.section-title {
  text-align: center;
  padding-bottom: 40px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  padding-bottom: 0;
  color: #151515;
}

.section-title p {
  margin-bottom: 0;
  color: #aeaeae;
}
</style>
