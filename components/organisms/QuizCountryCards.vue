<template>
  <div class="dash-cards space-1 container">
    <div class="d-block d-lg-flex card-lg-gutters-3 mb-6 card-deck">
      <div v-for="country in countries" :key="country" class="m-4">
        <QuizCountryCard to="#" :text="country.name" :src="country.src" />
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: 'QuizCountryCards',
  data() {
    return {
      countries: [
        { name: 'América', src: 'america', href: '#' },
        { name: 'Europa', src: 'europa', href: '#' },
        { name: 'África', src: 'africa', href: '#' },
        { name: 'Ásia', src: 'asia', href: '#' },
        { name: 'Oceania', src: 'oceania', href: '#' },
      ],
    }
  },
}
</script>
  