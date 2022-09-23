const getters = {
  index: (state) => {
    return state.questions;
  },
  indexCount: (state) => {
    const questions = state.questions
    return questions.length;
  }
}

export default getters