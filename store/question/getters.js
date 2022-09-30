const getters = {
  index: (state) => {
    return state.questions;
  },
  indexCount: (state) => {
    const questions = state.questions
    return questions.length;
  },
  show: (state) => {
    return state.question
  }
}

export default getters