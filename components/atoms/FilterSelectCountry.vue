<template>
  <div class="filter-select-country">
    <model-list-select
      v-model="business_activity"
      :list="$countriesPayload"
      option-value="id"
      option-text="name"
      placeholder="País"
      @input="propagateInput"
    ></model-list-select>
  </div>
</template>

<script>
import { ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'

export default {
  name: 'FilterSelectCountry',
  components: {
    ModelListSelect,
  },
  data() {
    return {
      business_activity: {
        value: '',
        name: '',
      },
    }
  },
  computed: {
    $countriesPayload() {
      return this.$store.getters['country/index']
    },
  },
  created() {
    this.$store.dispatch('country/index')
  },
  methods: {
    propagateInput(event) {
      this.$emit('input', event.id)
    },
  },
}
</script>

<style scoped>
</style>
