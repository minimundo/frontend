<template>
  <Container>
    <form ref="anyName" @submit.prevent="submitForm">
    <div class="form-row">
      <div class="col-5">
        <FilterInputWording v-model="wording" value="wording" />
      </div>
      <div class="col-2">
        <FilterSelectGrade v-model="grade" />
      </div>
      <div class="col-3">
        <FilterSelectCountry v-model="country" />
      </div>
      <div class="col">
        <button class="col btn btn-filter" @click="addFilter">Filtrar</button>
      </div>
      <div class="col">
        <b-tooltip target="clear-filters" variant="light"
          >Limpar Filtros</b-tooltip
        >
        <button
          type="submit"
          id="clear-filters"
          class="col btn btn-light"
          title="Limpar Filtros"
          @click="clearFilter"
        >
          <i class="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </div>
    </form>
  </Container>
</template>

<script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  mixins: [ToastMixin],
  data() {
    return {
      wording: '',
      grade: '',
      country: '',
    }
  },
  computed: {
    $dataPayload() {
      const data = {}
      if (this.wording !== '') {
        data.wording = this.wording
      }
      if (this.grade !== '') {
        data.grade = this.grade
      }
      if (this.country !== '') {
        data.country = this.country
      }

      return data
    },
  },
  methods: {
     submitForm(){
         this.$refs.anyName.reset();
      },
    addFilter() {
      this.$store
        .dispatch('question/search', this.$dataPayload)
        .then(() => {
          this.showToastMixin(
            'Filtros Aplicados Com Sucesso!',
            'Sucesso',
            'success'
          )
        })
        .catch(() => {
          this.showToastMixin(
            'Filtros Não Puderam ser Aplicados!',
            'Erro',
            'danger'
          )
        })
    },
    clearFilter() {
      this.wording = ''
      this.grade = ''
      this.country = ''
      this.$store.dispatch('question/index').then(() => {
        this.showToastMixin('Filtros Limpos Com Sucesso!', 'Sucesso', 'success')
      })
    },
  },
}
</script>

<style scoped>
.btn-filter {
  background-color: var(--primary-color);
  color: white;
}
</style>