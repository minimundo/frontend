<template>
  <Container>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Detalhes" active>
          <div class="card-body">
            <div class="row justify-content-center mb-4">
              <h1 class="card-title text-dark">Teste suas habilidades</h1>
            </div>
            <form>
              <div class="row align-items-center">
                <div class="col-sm-3"></div>
                <div
                  class="
                    flex-row
                    col-sm-6
                    justify-content-between
                    nav
                    card-header-undefined
                  "
                >
                  <div class="nav-item transition-3d-hover">
                    <a href="#" class="nav-link active"
                      ><i class="fa-solid fa-book icon-header"></i
                    ></a>
                  </div>
                  <div class="nav-item transition-3d-hover">
                    <a href="#" class="nav-link"
                      ><i class="fa-solid fa-map-location-dot icon-header"></i
                    ></a>
                  </div>
                  <div class="nav-item transition-3d-hover">
                    <a href="#" class="nav-link"
                      ><i class="fa-solid fa-earth-americas icon-header"></i
                    ></a>
                  </div>
                </div>
                <div class="col-sm-3"></div>
              </div>
            </form>
          </div>
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
                      Série:
                      <span class="text-danger"> * </span> </label
                    ><FilterSelectGrade v-model="grade" />
                    <small class="form-text text-muted"
                      >Informe a série (ex: 7º ano)</small
                    >
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6 col-12">
                    <label class="form-label text-dark" for="title">
                      Continente:
                      <span class="text-danger"> * </span>
                    </label>
                    <QuizSelectContinent v-model="continent" />
                    <small class="form-text text-muted"
                      >Informe o continente (ex: América)</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
        </b-tab>
        <TabIntroCountries />
        <div class="mt-5 row">
          <div class="text-right col mb-2 mr-2">
            <button
              v-if="tabIndex == 1"
              class="transition-3d-hover btn btn-soft-primary btn-sm"
              @click="tabIndex--"
            >
              Voltar
            </button>
            <button
              v-if="tabIndex == 0"
              class="transition-3d-hover btn btn-soft-primary btn-sm disabled"
              @click="tabIndex--"
            >
              Voltar
            </button>
            <button
              v-if="tabIndex == 0"
              type="submit"
              class="transition-3d-hover btn btn-primary btn-sm"
              @click="saveIntroQuiz()"
            >
              Próximo
            </button>
            <button
              v-if="tabIndex == 1"
              type="submit"
              class="transition-3d-hover btn btn-primary btn-sm"
            >
              Iniciar
            </button>
          </div>
        </div>
      </b-tabs>
    </b-card>
  </Container>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 1,
      grade: '',
      country: '',
      continent: '',
    }
  },
  computed: {
    $dataPayload() {
      return {
        grade: this.grade,
        country: this.country,
        continent: this.continent,
      }
    },
  },
  methods: {
    saveIntroQuiz() {
      this.$store.dispatch('quiz/index', this.$dataPayload)
      this.tabIndex++
    },
  },
}
</script>
<style scoped>
.icon-header {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.icon-header:hover {
  transform: translateY(-6px);
}

i {
  font-size: 1.8em;
}
</style>