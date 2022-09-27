export default {
    async index(context) {
        return await this.$axios.$get('/countries').then((response) => {
            context.commit('INDEX', response)
        })
    },
}