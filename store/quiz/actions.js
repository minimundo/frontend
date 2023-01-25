export default {
    index(context, payload) {
        return context.commit('INDEX', payload)
    },
    init(context, payload) {
        return context.commit('INIT', payload)
    },
    playerAnswer(context, payload) {
        return context.commit('SET_PLAYER_ANSWER', payload)
    }
}