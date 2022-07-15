<template>
    <section>
        <header>
            <ul id="nav-bar">
                <nuxt-link id="start" to="/">
                    <li>Início</li>
                </nuxt-link>
                <nuxt-link id="about" to="/">
                    <li>Sobre</li>
                </nuxt-link>
                <nuxt-link id="contact" to="/">
                    <li>Contato</li>
                </nuxt-link>
                <nuxt-link v-if="userAccount.type == 'teacher'" id="student" to="/student">
                    <li>Sou Aluno</li>
                </nuxt-link>
            </ul>
        </header>
        <main>
            <aside id="signIn">
                <h2 id="welcome">
                    <span>Seja Bem Vindo,</span>
                </h2>
                <h2 v-if="userAccount.type == null" id="minimundo">
                    <span>Ao</span> Mini Mundo!
                </h2>
                <h2 v-else-if="userAccount.type == 'teacher'" id="minimundo">
                    Professor(a)!
                </h2>
                <div v-if="userAccount.type == null" id="choose-account">
                    <div class="choice-options" @click="teacher()">Sou Professor</div>
                    <nuxt-link class="choice-options" to="/student">
                        <div>Sou Aluno</div>
                    </nuxt-link>
                </div>
                <form v-if="userAccount.type == 'teacher'">
                    <p>Faça login com as suas credenciais para ter acesso a plataforma.</p>
                    <input id="email" v-model="credentials.email" name="email" type="email" placeholder="E-mail">
                    <input id="password" v-model="credentials.password" name="password" type="password" placeholder="Senha">
                    <div id="form-submit" @click="login()">Entrar</div>
                </form>
            </aside>
            <article>
                <img id="teacher-image" src="../static/teacher-2.png" alt="Teacher Image">
            </article>
        </main>
    </section>
</template>
<script>
export default {
    name: 'LoginPage',
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
        login() {
            this.$auth
                .loginWith('local', { data: this.credentials })
                .then(() => {
                    console.log('Success!')
                })
                .catch((err) => {
                    console.error('Err!')
                    console.error(err)
                })
        },

        teacher() {
            this.userAccount.type = 'teacher'
        },
    },

}
</script>
<style>
body {
    background-color: rgb(34, 34, 34) !important;
    color: white;
    font-family: poppinsregular !important;
    max-width: 1400px;
    margin: 0 auto;
    padding: 15px;
}

section {
    padding: 15px;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

li {
    display: inline-block;
    margin: 20px;
}

.nuxt-link-active {
    color: white;
}

.nuxt-link-active:hover {
    color: rgb(132, 14, 201);
    transition: 0.3s all;
}

#student {
    border: 2px solid rgb(132, 14, 201);
    color: white;
    padding: 10px;
    border-radius: 15px;
}

#student:hover {
    background-color: rgb(132, 14, 201);
    color: white;
}

h1 {
    font-weight: 200;
}

main {
    color: white !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
}

h2 {
    margin: 50px;
    font-size: 56px;
    line-height: 10px;
    font-family: poppinsmedium !important;
    margin-left: 0;
}

span {
    color: rgb(132, 14, 201);
}

p {
    line-height: 20px;
    max-width: 500px;
    font-family: poppinslight !important;
}

img {
    width: 515px;
}

#choose-account {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 85%;
}

.choice-options {
    text-align: center;
    margin: 10px;
    height: 20px;
    padding: 15px;
    border-radius: 20px;
    border: none;
    box-sizing: content-box;
    font-size: 15px;
    width: 50%;
    background-color: rgb(132, 14, 201);
    color: white;
    font-weight: bold;
}

.choice-options:hover {
    cursor: pointer;
}

form {
    display: flex;
    flex-direction: column;
    width: 80%;
}

#form-submit {
    text-align: center;
    margin-top: 20px;
    height: 20px;
    padding: 15px;
    border-radius: 20px;
    border: none;
    box-sizing: content-box;
    font-size: 15px;
    width: 50%;
    background-color: rgb(132, 14, 201);
    color: white;
    font-weight: bold;
}

#form-submit:hover {
    cursor: pointer;
}

input {
    margin-top: 20px;
    height: 20px;
    padding: 15px;
    border-radius: 20px;
    border: none;
    box-sizing: content-box;
    font-size: 15px;
}
</style>