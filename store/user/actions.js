export default {
    index(context) {
        return this.$axios.$get('/users').then((response) => {
            context.commit('INDEX', response)
        })
    },

    logout(context) {
        return this.$axios.$delete('/auth').then(() => {
            this.$auth.logout().then(() => {
                this.$router.push('/login')
            })
        })
    },

    removeUser(context, id) {
        const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
        return this.$axios({
            url: `/users/${id}`,
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}` }
        }).then(() => {
            this.$router.go(0)
        })
    }
}