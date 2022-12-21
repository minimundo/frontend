<template>
  <div class="card-question">
    <Container v-if="$dataQuestions.length > 0">
      <div
        v-for="question in $dataQuestions"
        :key="question.id"
        class="card my-2 px-3 py-3"
      >
        <div class="d-flex justify-content-between">
          <CardItem
            v-if="question.creator"
            icon="user"
            title="Criador:"
            :content="question.creator.firstName"
          />
          <div class="d-flex justify-content-end col-2">
            <CardButton
              id="update-question"
              tooltip="Editar Detalhes da Questão"
              icon="pen-to-square"
              variant="secondary"
              @propagateClick="questionForUpdate(question.id)"
            />
            <CardButton
              id="delete-question"
              tooltip="Excluir Questão"
              icon="trash"
              variant="danger"
              @propagateClick="questionForDestroy(question.id)"
            />
            <b-modal
              id="modalQuestionDestroy"
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
                  @click="$bvModal.hide('modalQuestionDestroy')"
                >
                  Cancelar
                </div>
                <div
                  v-if="questionFor != undefined"
                  class="btn btn-danger m-1"
                  @click="destroyQuestion(questionFor.id)"
                >
                  Excluir
                </div>
              </div>
            </b-modal>
          </div>
        </div>
        <CardItem
          v-if="question.country"
          icon="flag"
          title="País:"
          :content="question.country.name"
        />
        <CardItem
          v-if="question.grade"
          icon="graduation-cap"
          title="Série:"
          :content="question.grade"
        />
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
          title="Resposta Correta:"
          :content="question.correct_answer.replace('answer', '')"
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
          <nuxt-link
            class="btn btn-secondary btn-details"
            :to="`questions/details/${question.id}`"
            >Ver Detalhes</nuxt-link
          >
        </div>
      </div>
    </Container>
    <Container v-else>
      <div class="text-center mt-5 p-5">
        <div><img src="~/assets/images/search-data.svg" width="128" class="d-inline-block" /></div>
        <div class="text-light not-has-question" >Nenhuma questão a ser exibida</div>
      </div>
    </Container>
  </div>
</template>
<script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  name: 'CardQuestion',
  mixins: [ToastMixin],
  middleware: 'auth',
  data() {
    return {
      questionFor: '',
    }
  },
  computed: {
    $dataQuestions() {
      return this.$store.getters['question/index']
    },
    $dataCountries() {
      return this.$store.getters['country/index']
    },
  },
  created() {
    this.$store.dispatch('question/index')
  },
  methods: {
    questionForUpdate(id) {
      this.$store.dispatch('question/show', id).then(() => {
        this.questionFor = this.$store.getters['question/show']
      })
      this.$router.push({ path: `questions/details/${id}` })
    },
    questionForDestroy(id) {
      this.$store.dispatch('question/show', id).then(() => {
        this.questionFor = this.$store.getters['question/show']
      })
      this.$bvModal.show('modalQuestionDestroy')
    },
    destroyQuestion(id) {
      this.$store
        .dispatch('question/destroy', id)
        .then(() => {
          this.showToastMixin(
            'A questão foi excluída!',
            'Tudo Certo!',
            'success'
          )
          this.$bvModal.hide('modalQuestionDestroy')
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
<style scoped>
.card-question {
  color: #77838f;
}

li span {
  color: black;
}

.btn-details {
  background-color: var(--primary-color);
}

.search-data {
  width: 20%;
}

.not-has-question {
  font-size: 1.2rem;
}

.btn-details {
  transition: all 0.3s ease-in-out !important;
}

.btn-details:hover {
  transform: translateY(-2px) !important;
  background-color: var(--primary-color);
}
</style>