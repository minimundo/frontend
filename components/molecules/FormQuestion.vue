<template>
  <div class="form-dash">
    <Container>
      <FormQuestionItem
        id="wording"
        type="textarea"
        title="Enunciado"
        description="Apresenta os detalhes e trás a pergunta a ser respondida."
      />
      <FormQuestionItem
        id="answer1"
        type="textarea"
        title="Alternativa 1"
        description="Opção de resposta do aluno."
      />
      <FormQuestionItem
        id="answer2"
        type="textarea"
        title="Alternativa 2"
        description="Opção de resposta do aluno."
      />
      <FormQuestionItem
        id="answer3"
        type="textarea"
        title="Alternativa 3"
        description="Opção de resposta do aluno."
      />
      <FormQuestionItem
        id="answer4"
        type="textarea"
        title="Alternativa 4"
        description="Opção de resposta do aluno."
      />
      <FormQuestionItem
        id="select-correct-answer"
        type="select-correct"
        title="Selecione a alternativa correta"
        description="Informar qual das 4 alternativas é a resposta correta da questão."
      />
      <FormQuestionItem
        id="select-grade"
        type="select-grade"
        title="Selecione a série em que a questão deve ser aplicada"
        description="Informar qual a série escolar que a questão deve ser aplicada."
      />
    </Container>
  </div>
</template>
<script>
</script>
<style scoped>
</style>