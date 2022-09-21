export default {
    getQuestion(context) {
        return this.$axios.$get('/questions').then((response) => {
            context.commit('STORE', response)
        })
    },

    removeQuestion(context, id) {
        const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
        return this.$axios({
            url: `/questions/${id}`,
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}`}
        }).then(() => {
            this.$router.go(0)
        })
    }
}