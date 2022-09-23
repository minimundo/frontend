<template>
    <div>
        <CardQuestion />
    </div>
</template>
<script>
export default {
    layout: 'Dashboard',
    created() {
        this.$store.dispatch("question/index");
    },
}
</script>