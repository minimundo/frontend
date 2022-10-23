<template>
  <Container>
    <form ref="formFilter" @submit.prevent="addFilter">
      <div class="form-row">
        <div class="col-5">
          <FilterInputWording v-model="wording" value="wording" />
        </div>
        <div class="col-2">
          <FilterSelectGrade v-model="grade" />
        </div>
        <div class="col-3">
          <model-list-select
            v-model="country"
            :list="$countriesPayload"
            option-value="id"
            option-text="name"
            placeholder="País"
          ></model-list-select>
        </div>
        <div class="col">
          <button class="col btn btn-filter">Filtrar</button>
        </div>
        <div class="col">
          <b-tooltip target="clear-filters" variant="light"
            >Limpar Filtros</b-tooltip
          >
          <button
            id="clear-filters"
            type="button"
            class="col btn btn-light"
            title="Limpar Filtros"
            @click="resetFilter"
          >
            <i class="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    </form>
  </Container>
</template>

<script>
import { ModelListSelect } from 'vue-search-select'
import ToastMixin from '~/mixins/toastMixin'
import 'vue-search-select/dist/VueSearchSelect.css'

export default {
  components: {
    ModelListSelect,
  },
  mixins: [ToastMixin],
  data() {
    return {
      wording: '',
      grade: '',
      country: {
        value: '',
        name: '',
      },
    }
  },
  computed: {
    $countriesPayload() {
      return this.$store.getters['country/index']
    },
    $dataPayload() {
      const data = {}
      if (this.wording !== '') {
        data.wording = this.wording
      }
      if (this.grade !== '') {
        data.grade = this.grade
      }
      if (this.country.id !== '') {
        data.country = this.country.id
      }

      return data
    },
  },
  created() {
    this.$store.dispatch('country/index')
  },
  methods: {
    resetFilter() {
      this.wording = ''
      this.grade = ''
      this.country = {
        value: '',
        name: '',
      }
      this.$refs.formFilter.reset()
      this.$store.dispatch('question/index').then(() => {
        this.showToastMixin('Filtros Limpos Com Sucesso!', 'Sucesso', 'success')
      })
    },
    addFilter() {
      this.$store
        .dispatch('question/search', this.$dataPayload)
        .then((response) => {
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
  },
}
</script>

<style scoped>
.btn-filter {
  background-color: var(--primary-color);
  color: white;
}
</style>