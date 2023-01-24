<template>
  <section id="loginPage" class="p-3">
    <BaseNavbar v-if="userAccount.type == null" />
    <BaseNavbar
      v-else-if="userAccount.type == 'teacher'"
      variant="teacher"
      @modifyTypeUser="student()"
    />
    <main
      class="
        d-flex
        flex-row
        justify-content-center justify-content-md-between
        mt-2 mt-sm-5
      "
    >
      <aside
        id="signIn"
        class="
          d-flex d-md-block
          flex-column
          align-items-center align-items-md-start
        "
      >
        <div
          id="titles"
          class="d-flex d-lg-block flex-column align-items-center"
        >
          <h2 id="welcome" class="mr-md-5 mb-0 mt-5">
            <span>Seja Bem Vindo,</span>
          </h2>
          <h2
            v-if="userAccount.type == null || userAccount.type == 'student'"
            id="minimundo"
            class="mr-md-5 mt-0 mb-5"
          >
            <span>Ao</span> Mini Mundo!
          </h2>
          <h2
            v-else-if="userAccount.type == 'teacher'"
            id="teacher-title"
            class="mr-md-5 mt-0 mb-5"
          >
            Professor(a)!
          </h2>
        </div>
        <div
          v-if="userAccount.type == null"
          id="choose-account"
          class="
            d-flex
            flex-column flex-sm-row
            justify-content-around
            align-items-center
          "
        >
          <div class="choice-options" @click="teacher()">Sou Professor</div>
          <nuxt-link class="choice-options" to="/quiz/intro">Sou Aluno</nuxt-link>
        </div>
        <form
          v-else-if="userAccount.type == 'teacher'"
          id="form-teacher"
          class="d-flex flex-column align-items-center align-items-md-start"
        >
          <p>Faça login com as suas credenciais.</p>
          <ValidationObserver ref="form" tag="div" class="vee-validation-field">
            <ValidationProvider
              v-slot="{ errors, classes }"
              tag="div"
              rules="required|email"
            >
              <input
                id="email"
                v-model="credentials.email"
                :class="classes"
                name="email"
                type="email"
                placeholder="E-mail"
              />
              <span class="error-validation mt-2 ml-2">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, classes }"
              tag="div"
              rules="required"
            >
              <input
                id="password"
                v-model="credentials.password"
                :class="classes"
                name="password"
                type="password"
                placeholder="Senha"
              />
              <span class="error-validation mt-2 ml-2">{{ errors[0] }}</span>
            </ValidationProvider>
          </ValidationObserver>
          <div id="form-submit" @click="submit()">Entrar</div>
        </form>
      </aside>
      <article>
        <img
          id="teacher-image"
          class="d-none d-md-flex"
          src="../assets/images/teacher.png"
          alt="Teacher Image"
        />
      </article>
    </main>
  </section>
</template>
<script>
import BaseNavbar from '../components/navbar/Base.vue'
import ToastMixin from '~/mixins/toastMixin'

export default {
  name: 'LoginPage',
  components: { BaseNavbar },
  mixins: [ToastMixin],
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      userAccount: {
        type: null,
      },
    }
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.form.validate()
      if (isValid) {
        this.login()
      }
    },
    login() {
      this.$auth
        .loginWith('local', { data: this.credentials })
        .then(() => {
          this.showToastMixin('Seja Bem vindo!', 'Sucesso', 'success')
        })
        .catch((err) => {
          if (
            err.response.data.errors[0].message ===
              'E_INVALID_AUTH_PASSWORD: Password mis-match' ||
            err.response.data.errors[0].message ===
              'E_INVALID_AUTH_UID: User not found'
          ) {
            this.showToastMixin(
              'Verifique suas credenciais!',
              'Erro no Login',
              'warning'
            )
          }
        })
    },
    teacher() {
      this.userAccount.type = 'teacher'
    },
    student() {
      this.userAccount.type = 'student'
    },
  },
}
</script>
<style scoped>
section {
  max-width: 1400px !important;
  margin: 0 auto !important;
}

.nuxt-link-active {
  color: white;
}

.nuxt-link-active:hover {
  color: var(--primary-color);
  transition: 0.3s all;
}

.vee-validation-field {
  width: 100%;
}

#student {
  border: 2px solid var(--primary-color);
  color: white;
  padding: 7px;
  border-radius: 15px;
}

#student:hover {
  background-color: var(--primary-color);
  color: white;
}

h1 {
  font-weight: 200;
}

main {
  color: white !important;
}

h2 {
  font-size: 56px;
  font-family: poppinsmedium !important;
}

span {
  color: var(--primary-color);
}

p {
  max-width: 500px;
  font-family: poppinslight !important;
}

#teacher-image {
  width: 515px;
}

#choose-account {
  width: 85%;
}

.choice-options {
  text-decoration: none;
  text-align: center;
  margin: 10px;
  height: 20px;
  padding: 15px;
  border-radius: 20px;
  border: none;
  box-sizing: content-box;
  font-size: 15px;
  width: 50%;
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
}

.choice-options:hover {
  cursor: pointer;
}

.choice-options a {
  text-decoration: none;
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#form-submit {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  border-radius: 20px;
  border: none;
  box-sizing: content-box;
  font-size: 15px;
  width: 45%;
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
}

#form-submit:hover {
  cursor: pointer;
}

input {
  margin-top: 20px;
  width: 90%;
  padding: 15px;
  border-radius: 20px;
  border: 0.0625rem solid var(--primary-background);
  box-sizing: content-box;
  font-size: 15px;
}

.is-valid {
  border: 2px solid #00c9a7;
}

.is-invalid {
  border: 2px solid #ff0000;
}

.error-validation {
  color: #ff0000;
}

@media screen and (max-width: 1200px) {
  #teacher-image {
    width: 425px;
  }
}

@media screen and (max-width: 992px) {
  #teacher-image {
    width: 345px;
  }
}

@media screen and (max-width: 576px) {
  header {
    border-bottom: solid 3px white;
  }

  h2 {
    font-size: 42px;
  }

  .choice-options {
    font-size: 13px;
  }

  .choose-account {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  p {
    font-size: 13px;
  }

  h2 {
    font-size: 34px;
  }
}
</style>