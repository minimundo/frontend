<template>
  <div>
    <main>
      <div class="space-1 container">
        <div class="position-relative">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="h6">Estatísticas</span>
            
          </div>
        </div>
        <div class="d-block d-lg-flex card-lg-gutters-3 mb-6 card-deck">
          <div class="mb-3 applies card">
            <a
              class="p-5 transition-3d-hover card-body"
              target=""
              href="/dashboard/questions"
              ><div class="align-items-center media">
                <button
                  type="button"
                  class="
                    btn-icon
                    rounded-circle
                    mr-4
                    btn btn-soft-primary btn-lg
                  "
                >
                  <span class="fas btn-icon__inner fa-brands fa-quora"></span>
                </button>
                <div class="align-self-stretch media-body">
                  <span class="d-block font-size-3 text-primary">0</span>
                  <h2 class="h6 text-secondary font-weight-normal mb-0">
                    Questões
                  </h2>
                </div>
              </div></a
            >
          </div>
          <div class="mb-3 demands card">
            <a
              class="p-5 transition-3d-hover card-body"
              target=""
              href="/dashboard/countries"
              ><div class="align-items-center media">
                <button
                  type="button"
                  class="
                    btn-icon
                    rounded-circle
                    mr-4
                    btn btn-soft-primary btn-lg
                  "
                >
                  <span class="fas btn-icon__inner fa-solid fa-flag"></span>
                </button>
                <div class="align-self-stretch media-body">
                  <span class="d-block font-size-3 text-primary">0</span>
                  <h2 class="h6 text-secondary font-weight-normal mb-0">
                    Países
                  </h2>
                </div>
              </div></a
            >
          </div>
          <div class="mb-3 partners card">
            <a
              class="p-5 transition-3d-hover card-body"
              target=""
              href="/dashboard/users"
              ><div class="align-items-center media">
                <button
                  type="button"
                  class="
                    btn-icon
                    rounded-circle
                    mr-4
                    btn btn-soft-primary btn-lg
                  "
                >
                  <span class="fas btn-icon__inner fa-solid fa-address-card"></span>
                </button>
                <div class="align-self-stretch media-body">
                  <span class="d-block font-size-3 text-primary">0</span>
                  <h2 class="h6 text-secondary font-weight-normal mb-0">
                    Usuários
                  </h2>
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>

export default {
  name: 'DashboardPage',
  layout: 'DashboardDefault',
  middleware: 'auth',
  data() {
    return {
      
    }
  },
  methods: {},
}
</script>
<style>
body {
  background-color: var(--primary-background) !important;
  color: white;
  font-family: poppinsregular !important;
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px;
}

#nav-dashboard {
  background-color: var(--primary-color) !important;
  color: white;
}
</style>