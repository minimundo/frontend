<template>
    <section id="loginPage" class="p-3">
        <template v-if="userAccount.type == null">
            <General />
        </template>
        <template v-else-if="userAccount.type == 'teacher'">
            <Teacher />
        </template>
        <template v-else-if="userAccount.type == 'student'">
            <Student />
        </template>

        <main class="d-flex flex-row justify-content-center justify-content-md-between mt-2 mt-sm-5">
            <aside id="signIn" class="d-flex d-md-block flex-column align-items-center align-items-md-start">
                <div id="titles" class="d-flex d-lg-block flex-column align-items-center">
                    <h2 id="welcome" class="mr-md-5 mb-0 mt-5">
                        <span>Seja Bem Vindo,</span>
                    </h2>
                    <h2 v-if="userAccount.type == null" id="minimundo" class="mr-md-5 mt-0 mb-5">
                        <span>Ao</span> Mini Mundo!
                    </h2>
                    <h2 v-else-if="userAccount.type == 'teacher'" id="teacher-title" class="mr-md-5 mt-0 mb-5">
                        Professor(a)!
                    </h2>
                    <h2 v-else-if="userAccount.type == 'student'" id="teacher-title" class="mr-md-5 mt-0 mb-5">
                        Aluno(a)!
                    </h2>
                </div>
                <div
v-if="userAccount.type == null" id="choose-account"
                    class="d-flex flex-column flex-sm-row justify-content-around align-items-center">
                    <div class="choice-options" @click="teacher()">Sou Professor</div>
                    <div class="choice-options" @click="student()">Sou Aluno</div>
                </div>
                <form
v-else-if="userAccount.type == 'teacher'" id="form-teacher"
                    class="d-flex flex-column align-items-center align-items-md-start">
                    <p>Faça login com as suas credenciais.</p>
                    <ValidationObserver ref="form" tag="div" class="vee-validation-field">
                        <ValidationProvider v-slot="{ errors }" tag="div" rules="required|email">
                            <input
id="email" v-model="credentials.email" name="email" type="email"
                                placeholder="E-mail">
                            <span class="error-validation mt-2 ml-2">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider v-slot="{ errors }" tag="div" rules="required">
                            <input
id="password" v-model="credentials.password" name="password" type="password"
                                placeholder="Senha">
                            <span class="error-validation mt-2 ml-2">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </ValidationObserver>
                    <div id="form-submit" @click="submit()">Entrar</div>
                </form>
                <form
v-else-if="userAccount.type == 'student'" id="form-teacher"
                    class="d-flex flex-column align-items-center align-items-md-start">
                    <p id="support-text">Escolha a série, o continente e o país para começar a responder as perguntas.
                    </p>
                    <input id="grade" name="grade" type="number" placeholder="Informe sua série">
                    <input id="country" name="country" type="text" placeholder="Escolha o continente">
                    <div id="form-submit">Comece a responder!</div>
                </form>
            </aside>
            <article>
                <img id="teacher-image" class="d-none d-md-flex" src="../assets/images/teacher.png" alt="Teacher Image">
            </article>
        </main>
    </section>
</template>
<script>
import General from '../components/navbar/general.vue'
import Student from '../components/navbar/student.vue'
import Teacher from '../components/navbar/teacher.vue'

export default {
    name: "LoginPage",
    components: { General, Student, Teacher },
    data() {
        return {
            credentials: {
                email: "",
                password: "",
            },
            userAccount: {
                type: null,
            },
        };
    },
    methods: {
        async submit() {
            const isValid = await this.$refs.form.validate();
            if (isValid) {
                this.login()
            }
        },
        
        login() {
            this.$auth
                .loginWith("local", { data: this.credentials })
                .then(() => {
                    console.log("Success!");
                })
                .catch((err) => {
                    console.error("Err!");
                    console.error(err);
                });
        },

        teacher() {
            this.userAccount.type = "teacher";
        },
        student() {
            this.userAccount.type = "student";
        }
    }
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
    border: none;
    box-sizing: content-box;
    font-size: 15px;
}

.error-validation {
    color: #ee4242;
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