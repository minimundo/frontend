<template>
    <body>
        <main>
            <div class="container">
                <div class="row content">
                    <div class="col-md-6 mb-3">
                        <img src="../static/teacher.svg" class="img-fluid" alt="Teacher Image">
                    </div>
                    <div class="col-md-6">
                      <h3 class="signin-text mb-3"> Bem vindo(a), Professor(a)!</h3>
                      <form>
                        <div class="form-group">
                          <label for="email">Endereço de Email</label>
                          <input v-model="credentials.email" type="email" name="email" class="form-control">
                        </div>
                        <div class="form-group">
                          <label for="password">Senha</label>
                          <input v-model="credentials.password" type="password" name="password" class="form-control">
                        </div>
                        <div class="btn btn-class" @click="login()">Entrar</div>
                      </form>
                    </div>
                </div>
            </div>
        </main>
    </body>
    
</template>

<script>
export default {
  name: 'SingInTeacher',
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      }
    }
  },
  
  methods: {
    login() {
      this.$auth.loginWith("local", 
      {data: this.credentials})
      .then(
        ()=>{
          console.log('Success!')
        }
      )
      .catch(
        err=>{
          console.log('Err!') 
          console.log(err)
        }
      )
    },
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  font-family: "Poppins", sans-serif;
  background-color: #FFFFFF;
}
.content {
  margin: 8%;
  background-color: #fff;
  padding: 4rem 1rem 4rem 1rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
}
.signin-text {
  font-style: normal;
  font-weight: 600 !important;
}
.form-control {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-color: #00ac96 !important;
  border-style: solid !important;
  border-width: 0 0 1px 0 !important;
  padding: 0px !important;
  color: #495057;
  height: auto;
  border-radius: 0;
  background-color: #fff;
  background-clip: padding-box;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #fff;
  outline: 0;
  box-shadow: none;
}
.birthday-section {
  padding: 15px;
}
.btn-class {
  border-color: #00ac96;
  color: #00ac96;
}
.btn-class:hover {
  background-color: #00ac96;
  color: #fff;
}

</style>