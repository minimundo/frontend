export default {
    INDEX(state, payload) {
        state.questions = payload
    },

    STORE(state, payload) {
        state.questions.push(payload)
    },

    SHOW(state, payload) {
        state.question = payload
    }
}