<template>
  <div class="dash-cards space-1 container">
    <div class="d-block d-lg-flex card-lg-gutters-3 mb-6 card-deck">
      <DashCard
        icon="quora"
        text="Questões"
        to="/dashboard/questions"
        :length="$dataQuestionLength"
      />
      <DashCard
        icon="flag"
        text="Países"
        to="/dashboard/countries"
        :length="$dataCountryLength"
      />
      <DashCard
        icon="address-card"
        text="Usuários"
        to="/dashboard/users"
        :length="$dataUserLength"
      />
    </div>
  </div>
</template>
    <script>
export default {
  computed: {
    $dataQuestionLength() {
      const data = this.$store.state.question.questions
      return data.length
    },
    $dataCountryLength() {
      const data = this.$store.state.country.countries
      return data.length
    },
    $dataUserLength() {
      const data = this.$store.state.user.users
      return data.length
    },
  },
  created() {
    this.$store.dispatch('question/getQuestion')
    this.$store.dispatch('country/getCountry')
    this.$store.dispatch('user/getUser')
  },
}
</script>
