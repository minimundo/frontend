<template>
  <nav
    id="dash-bar"
    class="navbar navbar-expand-sm navbar-dark mb-3"
    aria-label="navbar dashboard"
  >
    <Container>
      <div class="container-fluid mx-0 px-0">
        <div class="navbar mx-0 px-0">
          <div class="navbar-nav me-auto mb-2 mb-sm-0">
            <DashItem text="Dashboard" to="/dashboard" />
            <DashItem text="Questões" to="/dashboard/questions" />
            <DashItem text="Países" to="/dashboard/countries" />
            <DashItem text="Users" to="/dashboard/users" />
          </div>
          <div
            v-if="
              $route.path === '/dashboard/questions' ||
              $route.path === '/dashboard/countries' ||
              $route.path === '/dashboard/users'
            "
            class="navbar-nav me-auto mb-2 mb-sm-0"
          >
            <DashButtonNew :route="$route.path" />
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>
<script>
export default {
  name: 'DashBar',
}
</script>
<style scoped>
#dash-bar {
  width: 100%;
  background-color: var(--primary-color);
}
.navbar {
  width: 100%;
}
</style>