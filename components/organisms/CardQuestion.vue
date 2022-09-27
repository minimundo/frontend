<template>
  <div class="card-question">
    <Container v-if="$dataQuestions">
      <div
        v-for="question in $dataQuestions"
        :key="question.id"
        class="card my-2 px-3 py-3"
      >
        <div class="d-flex justify-content-between">
          <CardItem
            icon="user"
            title="Criador:"
            content="Nome do Criador da Pergunta"
          />
          <div class="d-flex justify-content-end col-2">
            <CardButton
              icon="pen-to-square"
              action="question/update"
              :params="question.id"
            />
            <CardButton
              icon="trash"
              @propagateClick="$bvModal.show('deleteQuestionModal')"
            />
            <b-modal
              id="deleteQuestionModal"
              hide-backdrop
              hide-footer
              hide-header-close
            >
              <template #modal-title>
                <p class="text-body font-weight-bold m-0">
                  Deseja excluir a questão ?
                </p>
              </template>
              <div class="d-block">
                <p class="text-body">
                  Todos os dados da questão serão apagados. Essa ação não pode
                  ser desfeita!
                </p>
              </div>
              <div class="d-flex justify-content-end">
                <div
                  class="btn btn-light m-1"
                  @click="$bvModal.hide('deleteQuestionModal')"
                >
                  Cancelar
                </div>
                <div
                  class="btn btn-danger m-1"
                  @click="deleteQuestion(question.id)"
                >
                  Excluir
                </div>
              </div>
            </b-modal>
          </div>
        </div>
        <CardItem icon="flag" title="País:" :content="$dataCountryName(question.country_id)" />
        <button
          class="btn btn-primary"
          @click="dataNameCountry(question.country_id)"
        ></button>
        <ul class="items">
          <CardItem
            icon="newspaper"
            title="Enunciado:"
            :content="question.wording"
          />
          <li>
            <CardItem icon="square-check" title="Alternativas:" content="" />
          </li>
          <li class="item">
            <CardItem title="1 -" :content="question.answer1" />
          </li>
          <li class="item">
            <CardItem title="2 -" :content="question.answer2" />
          </li>
          <li class="item">
            <CardItem title="3 -" :content="question.answer3" />
          </li>
          <li class="item">
            <CardItem title="4 -" :content="question.answer4" />
          </li>
        </ul>
        <CardItem
          v-if="typeof question.correct_answer != 'undefined' || ''"
          icon="check"
          title="Correta:"
          :content="question.correct_answer.replace('answer', '')"
        />
      </div>
    </Container>
  </div>
</template>
<script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  mixins: [ToastMixin],
  middleware: 'auth',
  async asyncData({ store }) {
    await store.dispatch('question/index')
  },
  computed: {
    $dataQuestions() {
      return this.$store.getters['question/index']
    },
    $dataCountries() {
      return this.$store.getters['country/index']
    },
    $dataCountryName(id) {
      return this.dataNameCountry(id)
    }
  },
  created() {
    this.$store.dispatch('country/index')
  },
  methods: {
    deleteQuestion(id) {
      this.$store
        .dispatch('question/destroy', id)
        .then(() => {
          this.showToastMixin(
            'A questão foi excluída!',
            'Tudo Certo!',
            'success'
          )
          this.$bvModal.hide('deleteQuestionModal')
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
    dataNameCountry(countryId) {
      const countries = this.$dataCountries
      countries.forEach(country => {
        if (country.id === countryId) {
          return country.name
        }
      })
    },
  },
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