<template>
  <div class="card-question">
    <Container v-if="$dataQuestions">
      <div
        v-for="question in $dataQuestions"
        :key="question.id"
        class="card my-2 px-3 py-3"
      >
        <div class="d-flex justify-content-between">
          <CardItem icon="user" title="Criador:" content="Nome do Criador da Pergunta"/>
          <div class="d-flex justify-content-end col-2">
            <CardButton icon="pen-to-square" action="question/update" :params="question.id"/>
            <CardButton icon="trash" action="question/destroy" :params="question.id"/>
          </div>
        </div>
        <CardItem icon="newspaper" title="Enunciado:" :content="question.wording"/>
        <ul class="items">
          <li>
            <CardItem icon="square-check" title="Alternativas:" content=""/>
          </li>
          <li class="item">
            <CardItem title="1 -" :content="question.answer1"/>
          </li>
          <li class="item">
            <CardItem title="2 -" :content="question.answer2"/>
          </li>
          <li class="item">
            <CardItem title="3 -" :content="question.answer3"/>
          </li>
          <li class="item">
            <CardItem title="4 -" :content="question.answer4"/>
          </li>
        </ul>
        <CardItem icon="check" title="Correta:" :content="question.correct_answer.replace('answer', '')"/>
      </div>
    </Container>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  async asyncData({store}) {
    await store.dispatch('question/index')
  },
  computed: { 
    $dataQuestions() {
      return this.$store.getters['question/index']
    }
  },
  created() {
    this.$store.dispatch('question/index')
  }
}
</script>
<style>
.card-question {
  color: #77838f;
}

li span {
  color: black;
}

.test-i {
  color: green;
}
</style>