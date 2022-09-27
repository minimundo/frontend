<template>
    <div>
        <CardQuestion />
    </div>
</template>
<script>
export default {
    layout: 'Dashboard',
    middleware: 'auth', 
    created() {
        this.$store.dispatch("question/index");
    },
}
</script>