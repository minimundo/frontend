<template>
  <div>
    <main>
      <button class="btn btn-primary" @click="getUser()">Button</button>
      <div class="container">
        <div v-for="user in users" :key="user.id"  class="row testcolor mx-2 my-3">
          <div class="test">
            <div class="card card-margin">
              <div class="card-header no-border">
                <i class="fa-solid fa-address-card"></i>
              </div>
              <div class="card-body pt-0">
                <div class="">
                  <ul class="">
                    <li class="">
                      <span>Nome Completo: {{ user.name }}</span>
                    </li>
                    <li class="">
                      <span>Email: {{ user.email }}</span>
                    </li>
                    <li class="">
                      <span>Nível de Acesso: {{ user.role }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  <script>
export default {
  name: 'DashboardUsersPage',
  layout: 'DashboardDefault',
  middleware: 'auth',
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async getUser() {
      this.users = await this.$axios.$get('/users')
    },
  },
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

.test {
  width: 100%;
  justify-content: center;
}

.testcolor {
    color: black;
}
</style>