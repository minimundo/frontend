const getters = {
  index: (state) => {
    return state.intro;
  },
  questions: (state) => {
    return state.questions;
  },
  result: (state) => {
    return state.playerResult;
  }
}

export default getters