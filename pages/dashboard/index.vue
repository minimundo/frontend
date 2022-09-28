<template>
    <Container>
        <DashCards />
    </Container>
</template>
<script>
export default {
    layout: 'Dashboard',
    middleware: 'auth', 
}
</script>