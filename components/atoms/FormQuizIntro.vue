<template>
  <div>
    <form novalidate="" autocomplete="off" class="">
      <div class="tab-content">
        <div class="fade tab-pane active show">
          <div class="text-center align-self-sm-center space-bottom-1">
            <h3 class="d-inline m-0 mr-2 h5 text-dark">
              Características gerais do teste
            </h3>
            <p class="secondary text text-muted h6">
              Defina a série e o país para receber as perguntas.
            </p>
          </div>
          <div>
            <hr id="" class="mt-1 mb-7" />
          </div>
          <div class="row">
            <div class="form-group col-sm-6 col-12">
              <label class="form-label text-dark" for="title">
                <strong>Série:</strong>
                <span class="text-danger"> * </span> </label
              ><FilterSelectGrade
                v-model="grade"
                @input="$store.dispatch('quiz/index', { grade: grade })"
              />
              <small class="form-text text-muted"
                >Selecione a série (ex: 7º ano)</small
              >
            </div>
          </div>
          <div class="row">
            <div class="form-group col-sm-6 col-12">
              <label class="form-label text-dark" for="title">
                <strong>País:</strong>
                <span class="text-danger"> * </span>
              </label>
              <small class="form-text text-muted"
                >Selecione o país alvo das perguntas do quiz (ex: Brasil)</small
              >
            </div>
          </div>
          <div class="row">
            <div
              v-for="countries in $countriesPayload"
              :key="countries.text"
              class="
                form-group
                text-dark
                d-flex
                flex-column
                justify-content-center
                col-sm-12 col-12
              "
            >
              <label class="form-label text-dark text-center" for="title">
                <strong> {{ countries.text }}</strong>
              </label>
              <div class="container">
                <div class="radio-tile-group">
                  <div
                    v-for="country in countries.values"
                    :key="country.name"
                    class="input-container"
                  >
                    <input
                      :id="country.id"
                      type="radio"
                      name="radio"
                      @click="
                        $store.dispatch('quiz/index', { country: country })
                      "
                    />
                    <div class="radio-tile">
                      <b-img
                        v-if="country.flag != null"
                        thumbnail
                        fluid
                        :src="country.flag.url"
                        alt="Image 1"
                      ></b-img>
                      <label>{{ country.name }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      grade: '',
      country: '',
    }
  },
  computed: {
    $countries() {
      return this.$store.getters['country/index']
    },
    $countriesPayload() {
      const countriesList = {}

      countriesList.northAmerica = this.$store.getters['country/northAmerica']
      countriesList.centralAmerica =
        this.$store.getters['country/centralAmerica']
      countriesList.southAmerica = this.$store.getters['country/southAmerica']
      countriesList.europe = this.$store.getters['country/europe']
      countriesList.africa = this.$store.getters['country/africa']
      countriesList.asia = this.$store.getters['country/asia']
      countriesList.oceania = this.$store.getters['country/oceania']

      return countriesList
    },
    $dataPayload() {
      return {
        grade: this.grade,
        country: this.country,
      }
    },
  },
  created() {
    this.$store.dispatch('country/index')
  },
  methods: {
    saveIntroQuiz() {
      this.$store.dispatch('quiz/index', this.$dataPayload)
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
}

.radio-tile-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.input-container {
  position: relative;
  height: 7rem;
  width: 7rem;
  margin: 0.5rem;
}

.input-container input {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
  opacity: 0;
}

.input-container .radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  border: 2px solid var(--second-color);
  border-radius: 8px;
  transition: all 300ms ease;
}

.input-container ion-icon {
  color: var(--second-color);
  font-size: 3rem;
}

.input-container label {
  color: var(--second-color);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input:checked + .radio-tile {
  background-color: var(--second-color);
  box-shadow: 0 0 12px var(--second-color);
  transform: scale(1.1);
}

input:hover + .radio-tile {
  box-shadow: 0 0 12px var(--second-color);
}

input:checked + .radio-tile ion-icon,
input:checked + .radio-tile label {
  color: white;
}
</style>