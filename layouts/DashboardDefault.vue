<template>
  <div>
    <BaseNavbar />
    <nav
      id="nav-dashboard"
      class="navbar navbar-expand-sm navbar-dark mb-3"
      aria-label="navbar dashboard"
    >
      <div class="container-fluid">
        <div id="navbarDashboard" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <a href="/dashboard" class="nav-link" aria-current="page">Dashboard</a>
            </li>
            <li class="nav-item">
              <a href="/dashboard/questions" class="nav-link">Questões</a>
            </li>
            <li class="nav-item">
              <a href="/dashboard/countries" class="nav-link">Países</a>
            </li>
            <li class="nav-item">
              <a href="/dashboard/users" class="nav-link">Usuários</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Nuxt />
  </div>
</template>

<script>
import BaseNavbar from '../components/navbar/Base.vue'

export default {
  name: 'DashboardDefault',
  components: { BaseNavbar },
}
</script>

<style>
body {
  background-color: var(--primary-background) !important;
  color: white;
  font-family: poppinsregular !important;
  max-width: 1400px;
}

#nav-dashboard {
  background-color: var(--primary-color) !important;
  color: white;
}
</style>