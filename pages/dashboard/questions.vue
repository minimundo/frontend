<template>
  <div>
    <main>
      <button class="btn btn-primary" @click="getQuestion()">Button</button>
      <div class="container">
        <div
          v-for="question in questions"
          :key="question.id"
          class="row testcolor mx-2 my-3"
        >
          <div class="test">
            <div class="card card-margin">
              <div class="card-header no-border">
                <i class="fa-solid fa-address-card"></i>
              </div>
              <div class="card-body pt-0">
                <div class="">
                  <div class="">
                    <div class="">
                      <span class="">{{ question.grade }}</span>
                    </div>
                  </div>
                  <ul class="">
                    <li class="">
                      <span>Enunciado: {{ question.wording }}</span>
                    </li>
                    <li class="">
                      <span>Resposta Correta: {{ question.correct_answer }}</span>
                    </li>
                    <li class="">
                      <span>Série: {{ question.grade }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  <script>
export default {
  name: 'DashboardQuestionsPage',
  layout: 'DashboardDefault',
  middleware: 'auth',
  data() {
    return {
      questions: [],
    }
  },
  methods: {
    async getQuestion() {
      this.questions = await this.$axios.$get('/questions')
    },
  },
}
</script>
  <style>
body {
  background-color: var(--primary-background) !important;
  color: white;
  font-family: poppinsregular !important;
  max-width: 1400px;
}

#nav-dashboard {
  background-color: var(--primary-color) !important;
  color: white;
}

.test {
  width: 100%;
  justify-content: center;
}

.testcolor {
    color: black;
}
</style>