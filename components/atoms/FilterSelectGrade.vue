<template>
  <div class="filter-select-grade">
    <select
      id="filter-grade"
      class="form-select btn btn-outline-secondary custom-select"
      @input="propagateInput"
    >
      <option value="" selected disabled>Serie</option>
      <option
        v-for="grade in gradeList"
        :key="grade.value"
        :value="grade.value"
      >
        {{ grade.text }}
      </option>
    </select>
  </div>
</template>
    <script>
export default {
  name: 'FilterSelectGrade',
  props: {
    gradeList: {
      type: Array,
      default() {
        return [
          { value: 4, text: '4º ano' },
          { value: 5, text: '5º ano' },
          { value: 6, text: '6º ano' },
          { value: 7, text: '7º ano' },
          { value: 8, text: '8º ano' },
          { value: 9, text: '9º ano' },
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