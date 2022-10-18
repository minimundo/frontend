<template>
    <div>
        <filter-question/>
        <CardQuestion />
    </div>
</template>
<script>
import FilterQuestion from '~/components/molecules/FilterQuestion.vue';
export default {
  components: { FilterQuestion },
    layout: 'Dashboard',
    middleware: 'auth', 
    created() {
        this.$store.dispatch("question/index");
    },


    

}
</script>