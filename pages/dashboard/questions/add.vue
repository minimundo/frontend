<template>
    <div>
        <FormQuestion />
    </div>
</template>
<script>
export default {
    layout: 'Dashboard',
    middleware: 'auth',
    created() {
        this.$store.dispatch("country/index");
    }, 
}
</script>