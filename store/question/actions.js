export default {
    async index(context) {
        return await this.$axios.$get('/questions').then((response) => {
            context.commit('INDEX', response)
        })
    },

    async create(context, payload) {
        const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
        await this.$axios('/questions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}` },
            body: payload
        }).then((response) => {
            context.commit('STORE', response);
        })
    },

    async show(context, id) {
        return await this.$axios.$get(`/questions/${id}`)
    },

    async update(context, payload, id) {
        const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
        return await this.$axios.$put({
            url: `/questions/${id}`,
            headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}` },
            body: payload
        }).then((response) => {
            context.commit('STORE', response)
        })
    },

    async destroy(context, id) {
        const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
        return await this.$axios(`/questions/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}` }
        }).then(() => {
            context.dispatch('index');
        })
    }
}