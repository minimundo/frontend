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
            :invalid="!$v.wording.required && submitted"
            description="Apresenta os detalhes e trás a pergunta a ser respondida."
          />
          <span style="color : red" class="form-item col-sm-6 col-12" v-if="submitted && !$v.wording.required">O enunciado é um campo obrigatorio</span>
          <FormQuestionItem
            id="answer1"
            v-model="answer1"
            type="textarea"
            title="Alternativa 1"
            :invalid="!$v.answer1.required && submitted"
            description="Opção de resposta do aluno."
          />
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.answer1.required">A alternativa 1 é um campo obrigatorio</span>
          <FormQuestionItem
            id="answer2"
            v-model="answer2"
            type="textarea"
            title="Alternativa 2"
            :invalid="!$v.answer2.required && submitted"
            description="Opção de resposta do aluno."
          />
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.answer2.required">A alternativa 2 é um campo obrigatorio</span>
          <FormQuestionItem
            id="answer3"
            v-model="answer3"
            type="textarea"
            title="Alternativa 3"
            :invalid="!$v.answer3.required && submitted"
            description="Opção de resposta do aluno."
          />
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.answer3.required">A alternativa 3 é um campo obrigatorio</span>
          <FormQuestionItem
            id="answer4"
            v-model="answer4"
            type="textarea"
            title="Alternativa 4"
            :invalid="!$v.answer4.required && submitted"
            description="Opção de resposta do aluno."
          />
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.answer4.required">A alternativa 4 é um campo obrigatorio</span>
          <FormQuestionItem
            id="select-correct-answer"
            v-model="correctAnswer"
            type="select-correct"
            title="Selecione a alternativa correta"
            :invalid="!$v.correctAnswer.required && submitted"
            description="Cada questão deve possuir somente 1 alternativa correta."
          />
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.correctAnswer.required">A alternativa correta é um campo obrigatorio</span>
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.correctAnswer.integer">A alternativa correta precisa ser um inteiro</span>
          <FormQuestionItem
            id="select-country"
            v-model="country_id"
            type="select-country"
            :countries="$countriesPayload"
            title="País"
            :invalid="!$v.country_id.required && submitted"
            description="Informe sobre qual país a questão se refere."
          />
          <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.country_id.required">O país é um campo obrigatorio</span>
          <FormQuestionItem
            id="select-grade"
            v-model="grade"
            type="select-grade"
            title="Série"
            :invalid="!$v.grade.required && submitted"
            description="Informar qual a série escolar que a questão deve ser aplicada."
          />
           <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.grade.required">A série escolar é um campo obrigatorio</span>
           <span style="color : red"  class="form-item col-sm-6 col-12" v-if="submitted && !$v.grade.integer">A série escolar precisa ser um inteiro</span>
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
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required,integer } from "vuelidate/lib/validators"

import ToastMixin from '~/mixins/toastMixin'

Vue.use(Vuelidate)

export default {
  name: 'FormQuestion',
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
      submitted : false,
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
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }


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
  validations: {
      answer1:{required},
      answer2:{required},
      answer3:{required},
      answer4:{required},
      wording:{required},
      country_id:{required},
      grade:{required,integer},
      correctAnswer:{required,integer}

    }
}
</script>
