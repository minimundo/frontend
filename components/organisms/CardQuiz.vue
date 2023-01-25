<template>
  <div class="container mt-5">
    <div v-if="viewCard === true" class="d-flex justify-content-center row">
      <div class="col-md-10 col-lg-10">
        <div class="border">
          <div class="question bg-primary p-3 border-bottom">
            <div
              class="
                d-flex
                flex-row
                justify-content-between
                align-items-center
                text-light
              "
            >
              <div></div>
              <h4>
                {{ $store.state.quiz.intro.grade }}º -
                {{ $store.state.quiz.intro.country.name }}
              </h4>
              <span
                >({{ currentQuestion + 1 }} de {{ $questionsQuizCount }})</span
              >
            </div>
          </div>
          <div
            class="
              d-flex
              flex-row
              align-items-center
              question-title question
              bg-white
              p-3
              border-bottom
            "
          >
            <h5
              v-if="$questionsQuiz[currentQuestion]"
              class="mt-1 ml-2 text-dark"
            >
              {{ $questionsQuiz[currentQuestion].wording }}
            </h5>
          </div>
          <div
            v-if="$questionsQuiz[currentQuestion]"
            class="question d-flex flex-column bg-white p-3 border-bottom"
          >
            <div class="col-sm-10 col-12">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="1" />
                <span>{{ $questionsQuiz[currentQuestion].answer1 }}</span>
              </label>
            </div>
            <div class="col-sm-10 col-12">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="2" />
                <span>{{ $questionsQuiz[currentQuestion].answer2 }}</span>
              </label>
            </div>
            <div class="col-sm-10 col-12">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="3" />
                <span>{{ $questionsQuiz[currentQuestion].answer3 }}</span>
              </label>
            </div>
            <div class="col-sm-10 col-12">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="4" />
                <span>{{ $questionsQuiz[currentQuestion].answer4 }}</span>
              </label>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-end p-3 bg-white">
            <button
              class="btn btn-primary border-success btn-success"
              type="button"
              @click="nextQuestion"
            >
              Próxima<i class="fa fa-angle-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="resultModal" hide-backdrop hide-footer hide-header-close>
      <div class="card">
        <div class="card-body text-center text-dark">
          <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" />
          <h4>PARABÉNS!</h4>
          <p>
            Você acertou {{ $store.state.quiz.playerResult.correct }}/{{
              $questionsQuizCount
            }}
          </p>
          <button class="btn btn-out btn-square continue" @click="$router.push('/quiz/intro')">CONTINUE</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  mixins: [ToastMixin],
  data() {
    return {
      currentQuestion: 0,
      answer: null,
      viewCard: true
    }
  },
  computed: {
    $questionsQuiz() {
      return this.$store.getters['quiz/questions']
    },
    $questionsQuizCount() {
      return this.$questionsQuiz.length
    },
  },
  beforeCreate() {
    const intro = this.$store.getters['quiz/index']
    if (intro.country === '') {
      this.$router.push('/quiz/intro')
    }
  },
  mounted() {
    this.$store.commit('quiz/RESET_PLAYER_ANSWER')

    const intro = this.$store.getters['quiz/index']

    const payload = {
      country: intro.country.id,
      grade: intro.grade,
    }

    this.$store
      .dispatch('question/search', payload)
      .then((response) => {
        this.$store.dispatch('quiz/init', response).then(() => {
          if (response.length === 0) {
            this.$router.push('/quiz/intro')
          }
        })
      })
      .catch(() => {
        this.showToastMixin(
          'As informações não foram salvas!',
          'Erro',
          'danger'
        )
      })
  },
  methods: {
    nextQuestion() {
      const payload = {
        answer: parseInt(this.answer),
        correctAnswer: parseInt(
          this.$questionsQuiz[this.currentQuestion].correct_answer
        ),
      }

      if (this.currentQuestion < this.$questionsQuizCount) {
        this.$store.dispatch('quiz/playerAnswer', payload)
        this.currentQuestion++
      }

      if (this.currentQuestion >= this.$questionsQuizCount) {
        this.$store.commit('quiz/SET_PLAYER_RESULT')
        this.viewCard = false
        this.$bvModal.show('resultModal')
      }
    },
  },
}
</script>
<style scoped>
body {
  background-color: #eee;
}

label.radio {
  cursor: pointer;
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}

label.radio span {
  padding: 4px 2px;
  border: 0.5px solid var(--second-color);
  display: inline-block;
  color: black;
  width: 100%;
  text-align: left;
  border-radius: 3px;
  margin-top: 7px;
}

label.radio input:checked + span {
  border-color: var(--second-color);
  background-color: var(--second-color);
  color: #fff;
}
.btn:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.btn:active {
  outline: 0 !important;
  box-shadow: none !important;
}

@import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);

body {
  background-color: #d32f2f;
  font-family: 'Calibri', sans-serif !important;
}

.mt-100 {
  margin-top: 100px;
}

.container {
  margin-top: 200px;
}

.card {
  position: relative;
  display: flex;
  width: 450px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d2d2dc;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
  -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
  box-shadow: 0px 0px 5px 0px rgb(161, 163, 164);
}

.card .card-body {
  padding: 1rem 1rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

p {
  font-size: 14px;
}

h4 {
  margin-top: 18px;
}

.cross {
  padding: 10px;
  color: #d6312d;
  cursor: pointer;
}

.continue:focus {
  outline: none;
}

.continue {
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 13px;
  padding: 8px 19px;
  cursor: pointer;
  color: #fff;
  background-color: #d50000;
}

.continue:hover {
  background-color: #d32f2f !important;
}
</style>