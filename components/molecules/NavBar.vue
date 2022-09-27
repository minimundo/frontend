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
            @click="$bvModal.show('logoutModal')"
          >
            <a href="#" class="nav-link d-inline-block">Sair</a>
          </li>
          <b-modal id="logoutModal" hide-backdrop hide-footer hide-header-close>
              <template #modal-title>
                <p class="text-body font-weight-bold m-0">Deseja realizar o logout ?</p>
              </template>
              <div class="d-block">
                <p class="text-body">
                  Todos os dados não salvos, serão desconsiderados.
                </p>
              </div>
              <div class="d-flex justify-content-end">
                <div
                  class="btn btn-light m-1"
                  @click="$bvModal.hide('logoutModal')"
                >
                  Cancelar
                </div>
                <div
                  class="btn btn-danger m-1"
                  @click="logout"
                >
                  Sair
                </div>
              </div>
            </b-modal>
        </ul>
    </div>
</template>
<script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  mixins: [ToastMixin],
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
      this.$axios.delete('/auth').then(() => {
        this.$auth.logout().then(() => {
          this.$router.push('/login')
          this.showToastMixin(
            'Logout realizado com sucesso.',
            'Até Logo!',
            'success'
          )
        })
      })
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