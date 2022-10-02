<template>
  <div class="dash-button-new">
    <nuxt-link :to="$currentLink">
      <button type="button" class="btn btn-sm px-2 py-2 btn btn-light">
        {{ $currentRoute }} <i class="fa-solid fa-circle-plus"></i>
      </button>
    </nuxt-link>
  </div>
</template>
  <script>
export default {
  name: 'DashButtonNew',
  props: {
    route: { type: String, required: true },
  },
  data() {
    return {}
  },
  computed: {
    $currentRoute() {
      if (this.route === '/dashboard/questions') {
        return 'Nova Questão'
      } else if (this.route === '/dashboard/countries') {
        return 'Novo País'
      } else if (this.route === '/dashboard/users') {
        return 'Novo Usuário'
      } else {
        return ''
      }
    },
    $currentLink() {
      if (this.route === '/dashboard/questions') {
        return '/dashboard/questions/add'
      } else if (this.route === '/dashboard/countries') {
        return '/dashboard/countries/add'
      } else if (this.route === '/dashboard/users') {
        return '/dashboard/users/add'
      } else {
        return ''
      }
    },
  },
}
</script>
<style scoped>
.dash-button-new {
  transition: all 0.3s ease-in-out !important;
}

.dash-button-new:hover {
  transform: translateY(-2px) !important;
}
</style>