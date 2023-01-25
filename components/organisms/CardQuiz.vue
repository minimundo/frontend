<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-center row">
      <div class="col-md-10 col-lg-10">
        <div class="border">
          <div class="question bg-white p-3 border-bottom">
            <div
              class="
                d-flex
                flex-row
                justify-content-between
                align-items-center
                mcq
              "
            >
              <h4 class="text-dark">MCQ Quiz</h4>
              <span class="text-dark"
                >({{ currentQuestion + 1 }} de {{ $questionsQuizCount }})</span
              >
            </div>
          </div>
          <div
            v-if="$questionsQuiz[currentQuestion] != undefined"
            class="question bg-white p-3 border-bottom"
          >
            <div class="d-flex flex-row align-items-center question-title">
              <h5 class="mt-1 ml-2 text-dark">
                {{ $questionsQuiz[currentQuestion].wording }}
              </h5>
            </div>
            <div
              class="d-flex flex-row align-items-center question-title"
            ></div>
            <div class="ans ml-2">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="1" />
                <span>{{ $questionsQuiz[currentQuestion].answer1 }}</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="2" />
                <span>{{ $questionsQuiz[currentQuestion].answer2 }}</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="3" />
                <span>{{ $questionsQuiz[currentQuestion].answer3 }}</span>
              </label>
            </div>
            <div class="ans ml-2">
              <label class="radio">
                <input v-model="answer" type="radio" name="answer" value="4" />
                <span>{{ $questionsQuiz[currentQuestion].answer4 }}</span>
              </label>
            </div>
          </div>
          <div
            class="
              d-flex
              flex-row
              justify-content-between
              align-items-center
              p-3
              bg-white
            "
          >
            <button
              class="
                btn btn-primary
                border-success
                align-items-center
                btn-success
              "
              type="button"
              @click="nextQuestion"
            >
              Próxima<i class="fa fa-angle-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
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
        this.$store.dispatch('quiz/init', response)
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
        this.$router.push('/quiz/game/results')
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
  padding: 4px 0px;
  border: 1px solid red;
  display: inline-block;
  color: red;
  width: 100px;
  text-align: center;
  border-radius: 3px;
  margin-top: 7px;
  text-transform: uppercase;
}

label.radio input:checked + span {
  border-color: red;
  background-color: red;
  color: #fff;
}

.ans {
  margin-left: 36px !important;
}

.btn:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.btn:active {
  outline: 0 !important;
  box-shadow: none !important;
}
</style>