<template>
  <div>
    <Container>
      <div class="quiz-select-country">
        {{ $testApi }}
        <h1>Prepare-se para o teste!</h1>
        <div class="space-bottom-1 p-5 card">
          <div class="card-body">
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
                      ><i class="fa-solid fa-lightbulb icon-header"></i
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
            <button type="submit"></button>
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
                  <div class="mb-3">
                    <h2 class="text-dark h5 mb-0">Detalhes do quiz</h2>
                    <p class="text-secondary">Informe os detalhes do quiz.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-sm-6 col-12">
                    <label class="form-label text-dark" for="title">
                      Série:
                      <span class="text-danger"> * </span> </label
                    ><FilterSelectGrade v-model="grade" /><small
                      class="form-text text-muted"
                      >Informe a série (ex: 7º ano)</small
                    >
                  </div>
                </div>
                <div class="mt-5 row">
                  <div class="text-right col">
                    <button
                      class="
                        transition-3d-hover
                        btn btn-soft-primary btn-sm
                        disabled
                      "
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      class="transition-3d-hover btn btn-primary btn-sm"
                    >
                      Próximo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div v-for="country in countries" :key="country" class="m-4">
          <QuizCountryCard to="/login" :text="country.name" :src="country.href" />
        </div>
      </div>
    </Container>
  </div>
</template>
  <script>
export default {
  name: 'QuizSelectCountry',
  layout: 'Header',
  data() {
    return {
      grade: '',
      countries: [
        { name: 'América', href: 'america' },
        { name: 'Europa', href: 'europa' },
        { name: 'África', href: 'africa' },
        { name: 'Ásia', href: 'asia' },
        { name: 'Oceania', href: 'oceania' },
      ],
    }
  },
}
</script>

<style scoped>
* {
  text-decoration: none;
}

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