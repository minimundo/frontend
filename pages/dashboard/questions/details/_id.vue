<template>
  <FormQuestionEdit v-if="question != ''" :question="question" />
</template>
<script>
export default {
  layout: 'Dashboard',
  middleware: 'auth',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      question: '',
    }
  },
  created() {
    this.$store.dispatch('question/index')
    this.$store.dispatch('question/show', this.$route.params.id).then(() => {
      this.question = this.$store.getters['question/show']
    })
  },
}
</script>