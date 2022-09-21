<template>
    <div id="nav-bar">
        <ul
          v-if="!$auth.loggedIn"
          id="nav-bar-items"
          class="
            mx-auto
            m-md-0
            flex-column-reverse
            align-items-center
            flex-sm-row
            nav nav-pills
            align-items-sm-baseline
          "
        >
          <NavItem text="Início" to="#" />
          <NavItem text="Sobre" to="#" />
          <NavItem text="Contato" to="#" />
          <li
            v-if="variant === 'student'"
            id="teacher"
            class="nav-item modify-type-user"
            @click="onClick()"
          >
            <a href="#" class="nav-link d-inline-block">Sou Professor</a>
          </li>
          <li
            v-if="variant === 'teacher'"
            id="student"
            class="nav-item modify-type-user"
            @click="onClick()"
          >
            <a href="#" class="nav-link d-inline-block">Sou Aluno</a>
          </li>
        </ul>
        <ul
          v-if="$auth.loggedIn"
          id="nav-bar-items"
          class="
            mx-auto
            m-md-0
            flex-column-reverse
            align-items-center
            flex-sm-row
            nav nav-pills
            align-items-sm-baseline
          "
        >
          <li
            id="logout"
            class="nav-item modify-type-user"
            @click="logout()"
          >
            <a href="#" class="nav-link d-inline-block">Sair</a>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: null,
    },
  },
  methods: {
    onClick() {
      this.$emit('modifyTypeUser')
    },
    logout() {
      const userToken = this.$auth.strategy.$auth.$storage._state["_token.local"]
      this.$auth.logout()
      this.$axios({
        url: '/auth',
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${userToken.replace('Bearer ', '')}`}
      })
      this.$router.push('/login')
    },
  },
}
</script>
<style scoped>
.nav-link {
  font-weight: 500;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
  border-bottom: solid 4px transparent;
}

.nav-link:hover {
  border-bottom: solid 4px var(--primary-color);
  color: w;
  transition: 0.3s all;
}

li {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.modify-type-user {
  border: 2px solid var(--primary-color);
  color: white;
  padding: 5px;
  border-radius: 15px;
}

.modify-type-user:hover {
  background-color: var(--primary-color);
  transition: 0.3s all;
}

.modify-type-user a:hover {
  border-bottom: solid 4px white !important;
  transition: 0.3s all;
}   
</style>