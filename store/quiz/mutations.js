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
    },
    SET_PLAYER_RESULT(state) {
        const result = {
            correct: 0,
            wrong: 0
        }

        console.log('fora DO FOR')
        console.log(state.playerAnswer)

        state.playerAnswer.forEach(item => {
            item.answer === item.correctAnswer ? result.correct ++ : result.wrong =+ 1
            item.answer === item.correctAnswer ? console.log('CERTA') : console.log('errada')
        })

        state.playerResult = result
    }
}