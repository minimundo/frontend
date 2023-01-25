export default {
    INDEX(state, payload) {
        payload.country ? state.intro.country = payload.country : state.intro.grade = payload.grade
    },
    INIT(state, payload) {
        state.questions = payload
    },
    SET_PLAYER_ANSWER(state, payload) {
        state.playerAnswer.push(payload)
    },
    RESET_PLAYER_ANSWER(state) {
        state.playerAnswer = []
    }
}