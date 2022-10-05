<template>
  <Container>
    <div class="form-card space-bottom-1 p-5 card">
      <div
        class="
          title-form-question
          d-flex
          align-items-center
          justify-content-center
          text-center
        "
      >
        <FormQuestionItem
          id="title-form-question"
          type="title"
          title="Adicionar Questão"
          description="Preencha os campos com os dados da nova questão."
        />
      </div>
      <FormQuestion />
      <div
        class="
          title-form-question
          d-flex
          align-items-center
          justify-content-center
          text-center
        "
      >
        <div class="button-cancel m-1">
          <FormQuestionItem
            id="button-cancel"
            type="button-cancel"
            title="Cancelar"
          />
        </div>
        <div class="button-save m-1">
          <FormQuestionItem
            id="button-save"
            type="button-save"
            title="Salvar"
          />
        </div>
      </div>
    </div>
  </Container>
</template>
  <script>
export default {
  name: 'Form',
}
</script>
<style scoped>
.button-cancel {
  color: black !important;
}
</style>