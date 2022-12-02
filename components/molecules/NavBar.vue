<template>
  <div>
    <b-navbar v-if="!$auth.loggedIn" toggleable="lg" type="dark">
      <a
        class="
          d-none d-sm-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-decoration-none
        "
      >
        <img
          id="logo-img"
          src="~/assets/images/logo.png"
          class="logo"
          alt="Logo Mini Mundo"
        />
      </a>
      <b-navbar-brand href="#">Mini Mundo</b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="fw-light" href="#">Sobre</b-nav-item>
          <b-nav-item class="fw-light" href="#">Central de Ajuda</b-nav-item>
          <b-dropdown
            id="dropdown-form"
            ref="dropdown"
            size="sm"
            text="Sou Professor"
            class="m-2"
            variant="primary"
          >
              <b-dropdown-form>
                <ValidationObserver ref="form" tag="div" class="vee-validation-field">
                  <b-form-group
                    label="Email"
                    label-for="dropdown-form-email"
                    @submit.stop.prevent
                  >
                  <ValidationProvider
                    v-slot="{ errors, classes}"
                    tag="div"
                    rules="required|email"
                  >
                    <b-form-input
                      id="dropdown-form-email"
                      v-model="credentials.email"
                      :class="classes"
                      size="sm"
                      placeholder="email@example.com"
                    ></b-form-input>
                    <span class="error-validation mt-2 ml-2">{{ errors[0] }}</span>
                  </ValidationProvider>
                  </b-form-group>

                  <b-form-group label="Senha" label-for="dropdown-form-password">
                    <ValidationProvider v-slot="{ errors, classes }" tag="div" rules="required">
                      <b-form-input
                        id="dropdown-form-password"
                        v-model="credentials.password"
                        :class="classes"
                        type="password"
                        size="sm"
                        placeholder="Password"
                      ></b-form-input>
                      <span class="error-validation mt-2 ml-2">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </b-form-group>
                </ValidationObserver>
                <b-button id="form-submit" variant="primary" size="sm" @click="login()"
                  >Entrar</b-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-text>Faça login com as suas credenciais de Professor</b-dropdown-text>
              </b-dropdown-form>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-navbar v-if="$auth.loggedIn" toggleable="lg" type="dark">
      <a
        class="
          d-none d-sm-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-decoration-none
        "
      >
        <img
          id="logo-img"
          src="~/assets/images/logo.png"
          class="logo"
          alt="Logo Mini Mundo"
        />
      </a>
      <b-navbar-brand href="#">Mini Mundo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="fw-light" href="#">Sobre</b-nav-item>
          <b-nav-item class="fw-light" href="#">Contato</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em class="username">{{ $auth.user.firstName }}</em>
              <i class="text-light fa-regular fa-user"></i>
            </template>
            <b-dropdown-item href="#">Conta</b-dropdown-item>
            <b-dropdown-item href="#">Central de Ajuda</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#" @click="$bvModal.show('logoutModal')"
              >Sair</b-dropdown-item
            >
            <b-modal
              id="logoutModal"
              hide-backdrop
              hide-footer
              hide-header-close
            >
              <template #modal-title>
                <p class="text-body font-weight-bold m-0">
                  Deseja realizar o logout ?
                </p>
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
                <div class="btn btn-danger m-1" @click="logout">Sair</div>
              </div>
            </b-modal>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
  <script>
import ToastMixin from '~/mixins/toastMixin'

export default {
  name: 'NavBar',
  mixins: [ToastMixin],
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    user() {
      return this.$auth.$storage.getUniversal('user');
    }
  },
  methods: {
    login() {
      this.$auth
        .loginWith('local', { data: this.credentials })
        .then(() => {
          this.showToastMixin('Seja Bem vindo!', 'Sucesso', 'success')
        })
        .catch((err) => {
          if (err.response.data.errors[0].message === "E_INVALID_AUTH_PASSWORD: Password mis-match") {
            this.showToastMixin('Verifique suas credenciais!', 'Erro no Login', 'warning')
          }
        })
    },
    logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.showToastMixin(
          'Logout realizado com sucesso.',
          'Até Logo!',
          'success'
        )
      })
    },
  },
}
</script>
  <style scoped>
.logo {
  width: 70%;
}

.username {
  font-family: poppinslight !important;
  color: whitesmoke !important;
}

.vee-validation-field {
  width: 100%;
}

li {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.is-valid {
  border: 1px solid #00c9a7;
}

.is-invalid {
  border: 1px solid #ff0000;
}

.error-validation {
  color: #ff0000;
}
</style>