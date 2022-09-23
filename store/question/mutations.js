export default {
    INDEX(state, payload) {
        state.questions = payload
    },

    STORE(state, payload) {
        state.questions.push(payload)
    }
}