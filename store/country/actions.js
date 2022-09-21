export default {
    getCountry(context) {
        return this.$axios.$get('/countries').then((response) => {
            context.commit('STORE', response)
        })
    },

    removeCountry(context, id) {
        const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
        return this.$axios({
            url: `/countries/${id}`,
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}`}
        }).then(() => {
            this.$router.go(0)
        })
    }
}