<template>
  <div>
    <main>
      <button class="btn btn-primary" @click="getCountry()">Button</button>
      <div class="container">
        <div
          v-for="country in countries"
          :key="country.id"
          class="row testcolor mx-2 my-3"
        >
          <div class="test">
            <div class="card card-margin">
              <div class="card-header no-border">
                <i class="fa-solid fa-address-card"></i>
              </div>
              <div class="card-body pt-0">
                <div class="">
                  <ul class="">
                    <li class="">
                      <span>Nome do País: {{ country.name }}</span>
                    </li>
                    <li class="">
                      <span
                        >Continente a que pertence:
                        {{ country.continent }}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  <script>
export default {
  name: 'DashboardCountriesPage',
  layout: 'DashboardDefault',
  middleware: 'auth',
  data() {
    return {
      countries: [],
    }
  },
  methods: {
    getCountry() {
      this.countries = this.$axios.$get('/countries')
    },
  },
}
</script>
  <style>
body {
  background-color: var(--primary-background) !important;
  color: white;
  font-family: poppinsregular !important;
  max-width: 1400px;
}

#nav-dashboard {
  background-color: var(--primary-color) !important;
  color: white;
}

.test {
  width: 100%;
  justify-content: center;
}

.testcolor {
  color: black;
}
</style>