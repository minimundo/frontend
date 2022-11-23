export default {
    async index(context) {
        return await this.$axios.$get('/questions').then((response) => {
            context.commit('INDEX', response)
        })
    },

    async search(context, payload) {
        return await this.$axios.$get('/questions', { params: payload }).then((response) => {
            context.commit('INDEX', response)
            return response
        })
    },

    async create(context, payload) {
        await this.$axios.post('/questions', {
            wording: payload.wording,
            answer1: payload.answer1,
            answer2: payload.answer2,
            answer3: payload.answer3,
            answer4: payload.answer4,
            correct_answer: payload.correct_answer,
            grade: payload.grade,
            country_id: payload.country_id
        }).then((response) => {
            context.commit('STORE', response);
        })
    },

    async show(context, id) {
        await this.$axios.$get(`/questions/${id}`).then((response) => {
            context.commit('SHOW', response)
        })
    },

    async update(context, payload) {
        return await this.$axios.$put(`/questions/${payload.id}`, {
            wording: payload.wording,
            answer1: payload.answer1,
            answer2: payload.answer2,
            answer3: payload.answer3,
            answer4: payload.answer4,
            correct_answer: payload.correct_answer,
            grade: payload.grade,
            country_id: payload.country_id
        }).then(() => {
            context.dispatch('index');
        })
    },

    async destroy(context, id) {
        return await this.$axios.delete(`/questions/${id}`).then(() => {
            context.dispatch('index');
        })
    }
}