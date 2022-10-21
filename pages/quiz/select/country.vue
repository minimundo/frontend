<template>
  <Container>
    <div class="quiz-select-country">
      {{ $testApi }}
      <h1>Escolha o Continente:</h1>
      <div v-for="country in countries" :key="country" class="m-4">
        <QuizCountryCard to="/login" :text="country.name" :src="country.href" />
      </div>
    </div>
  </Container>
</template>
<script>
export default {
  name: 'QuizSelectCountry',
  data() {
    return {
      countries: [
        { name: 'América', href: 'america' },
        { name: 'Europa', href: 'europa' },
        { name: 'África', href: 'africa' },
        { name: 'Ásia', href: 'asia' },
        { name: 'Oceania', href: 'oceania' },
      ],
    }
  },
  created() {
    const testApi = this.$axios.$get('http://jifs.freetzi.com/api/student/index.php')
    console.log(testApi)
  },
}
</script>
<style scoped>
</style>