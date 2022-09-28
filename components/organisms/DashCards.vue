<template>
  <div class="dash-cards space-1 container">
    <div class="d-block d-lg-flex card-lg-gutters-3 mb-6 card-deck">
      <DashCard
        icon="quora"
        text="Questões"
        to="/dashboard/questions"
        :length="$dataQuestionCount"
      />
      <DashCard
        icon="flag"
        text="Países"
        to="/dashboard/countries"
        :length="$dataCountryCount"
      />
      <DashCard
        icon="address-card"
        text="Usuários"
        to="/dashboard/users"
        :length="$dataUserCount"
      />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    $dataQuestionCount() {
      return this.$store.getters['question/indexCount']
    },
    $dataCountryCount() {
      return this.$store.getters['country/indexCount']
    },
    $dataUserCount() {
      return this.$store.getters['user/indexCount']
    },
  },
  created() {
    this.$store.dispatch('question/index')
    this.$store.dispatch('country/index')
    this.$store.dispatch('user/index')
  },
}
</script>
