<template>
  <div class="filter-select-grade">
    <select
      id="filter-grade"
      class="form-select btn btn-outline-light custom-select"
      @input="propagateInput"
    >
      <option value="" selected disabled>Continente</option>
      <option
        v-for="continent in continents"
        :key="continent.value"
        :value="continent.value"
      >
        {{ continent.text }}
      </option>
    </select>
  </div>
</template>
    <script>
export default {
  name: 'QuizSelectContinent',
  props: {
    continents: {
      type: Array,
      default() {
        return [
          { value: "america", text: 'América' },
          { value: 'asia', text: 'Ásia' },
          { value: 'europa', text: 'Europa' },
          { value: 'oceania', text: 'Oceania' },
          { value: 'africa', text: 'Africa' }
        ]
      },
    },
  },
  methods: {
    propagateInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
    <style scoped>
</style>