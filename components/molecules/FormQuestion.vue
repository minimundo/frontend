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
            title="Adicionar Questão"
            description="Preencha os campos com os dados da nova questão."
          />
        </div>
        <form ref="formQuestionRegister">
          <FormQuestionItem
            id="wording"
            v-model="wording"
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
            <div class="button-save m-1" @click="addQuestion">
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
  mixins: [ToastMixin],
  data() {
    return {
      wording: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      correctAnswer: '',
      grade: '',
      country_id: '',
    }
  },
  computed: {
    $dataPayload() {
      return {
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
    addQuestion() {
      this.$store
        .dispatch('question/create', this.$dataPayload)
        .then(() => {
          this.showToastMixin(
            'A questão foi cadastrada!',
            'Tudo Certo!',
            'success'
          )
          this.$refs.formQuestionRegister.reset()
        })
        .catch((err) => {
          if (err.response.data) {
            this.showToastMixin(
              'Algo não ocorreu conforme o esperado.',
              'Erro ao Excluir!',
              'danger'
            )
          }
        })
    },
  },
}
</script>
