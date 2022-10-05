<template>
  <div class="form-dash">
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
            title="Detalhes da Questão"
            description="Você pode atualizar os dados da questão, inserindo novas informações nos campos."
          />
        </div>
        <form v-if="question" ref="formQuestionRegister">
          <FormQuestionItem
            id="wording"
            v-model="wording"
            :value="wording"
            type="textarea"
            title="Enunciado"
            description="Apresenta os detalhes e trás a pergunta a ser respondida."
          />
          <FormQuestionItem
            id="answer1"
            v-model="answer1"
            type="textarea"
            title="Alternativa 1"
            description="Opção de resposta do aluno."
          />
          <FormQuestionItem
            id="answer2"
            v-model="answer2"
            type="textarea"
            title="Alternativa 2"
            description="Opção de resposta do aluno."
          />
          <FormQuestionItem
            id="answer3"
            v-model="answer3"
            type="textarea"
            title="Alternativa 3"
            description="Opção de resposta do aluno."
          />
          <FormQuestionItem
            id="answer4"
            v-model="answer4"
            type="textarea"
            title="Alternativa 4"
            description="Opção de resposta do aluno."
          />
          <FormQuestionItem
            id="select-correct-answer"
            v-model="correctAnswer"
            type="select-correct"
            title="Selecione a alternativa correta"
            description="Cada questão deve possuir somente 1 alternativa correta."
          />
          <FormQuestionItem
            id="select-country"
            v-model="country_id"
            type="select-country"
            :countries="$countriesPayload"
            title="País"
            description="Informe sobre qual país a questão se refere."
          />
          <FormQuestionItem
            id="select-grade"
            v-model="grade"
            type="select-grade"
            title="Série"
            description="Informar qual a série escolar que a questão deve ser aplicada."
          />
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
            <div class="button-save m-1" @click="updateQuestion">
              <FormQuestionItem
                id="button-save"
                type="button-save"
                title="Salvar"
              />
            </div>
          </div>
        </form>
      </div>
    </Container>
    <Container> </Container>
  </div>
</template>
  <script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  name: 'FormQuestionEdit',
  mixins: [ToastMixin],
  props: {
    question: { type: Object, required: true },
  },
  data() {
    return {
      wording: this.question.wording,
      answer1: this.question.answer1,
      answer2: this.question.answer2,
      answer3: this.question.answer3,
      answer4: this.question.answer4,
      correctAnswer: this.question.correct_answer,
      grade: this.question.grade,
      country_id: this.question.country.id,
    }
  },
  computed: {
    $dataPayload() {
      return {
        id: this.question.id,
        grade: this.grade,
        wording: this.wording,
        answer1: this.answer1,
        answer2: this.answer2,
        answer3: this.answer3,
        answer4: this.answer4,
        correct_answer: this.correctAnswer,
        country_id: this.country_id,
      }
    },
    $countriesPayload() {
      return this.$store.getters['country/index']
    },
  },
  created() {
    this.$store.dispatch('country/index')
  },
  methods: {
    updateQuestion() {
      this.$store
        .dispatch('question/update', this.$dataPayload)
        .then(() => {
          this.showToastMixin(
            'A questão foi atualizada!',
            'Tudo Certo!',
            'success'
          )
        })
        .catch((err) => {
          if (err.response.data) {
            this.showToastMixin(
              'Algo não ocorreu conforme o esperado.',
              'Erro ao Atualizar!',
              'danger'
            )
          }
        })
    },
  },
}
</script>
  