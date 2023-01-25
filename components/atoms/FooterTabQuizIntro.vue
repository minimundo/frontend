<template>
  <div class="mt-5 row">
    <div class="text-right col mb-2 mr-2">
      <button
        class="transition-3d-hover btn btn-soft-primary btn-sm"
        @click="$router.push('/login')"
      >
        Voltar
      </button>
      <nuxt-link 
        to="/quiz/game"
        class="transition-3d-hover btn btn-primary btn-sm"
      >
        Iniciar
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterTabsQuizIntro',
}
</script>
<style scoped>
</style>