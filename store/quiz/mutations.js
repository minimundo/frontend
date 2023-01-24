export default {
    INDEX(state, payload) {
        payload.country ? state.intro.country = payload.country : state.intro.grade = payload.grade
    },    
}