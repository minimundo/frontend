<template>
  <div class="filter-input-wording">
    <input
      type="text"
      class="form-control"
      placeholder="Digite um trecho do enunciado da questão..."
      @input="propagateInput"
    />
  </div>
</template>
  <script>
export default {
  name: 'SelectInputWording',
  methods: {
    propagateInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
  <style scoped>
</style>