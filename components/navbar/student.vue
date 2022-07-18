<template>
    <div id="header">
        <header id="nav-bar" class="d-flex flex-wrap justify-content-between py-3 mb-4">
            <div class="d-none d-sm-flex">
                <a id="logo" class="d-none d-sm-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <img id="logo-img" src="~/assets/images/logo.png" class="logo" alt="logo">
                </a>
            </div>

            <ul id="nav-bar-items" class="mx-auto m-sm-0 flex-column-reverse align-items-center flex-sm-row nav nav-pills align-items-sm-baseline ">
                <li id="home" class="nav-item"><a href="#" class="nav-link px-0 d-inline-block">Início</a></li>
                <li id="about" class="nav-item"><a href="#" class="nav-link px-0 d-inline-block">Sobre</a></li>
                <li id="contact" class="nav-item"><a href="#" class="nav-link px-0 d-inline-block">Contato</a></li>
                <li id="student" class="nav-item" @click="student()"><a href="#" class="nav-link d-inline-block">Sou Professor</a></li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    name: "NavbarStudentComponent",
    data() {
        return {
            userAccount: {
                type: null,
            },
        }
    },
    methods: {
        teacher() {
            this.userAccount.type = "teacher";
        },
        student() {
            this.userAccount.type = "student";
        },
    }
}
</script>
<style>
body {
    background-color: var(--primary-background) !important;
    color: white;
    font-family: poppinsregular !important;
}

#header .nav-link {
  font-weight: 500;
  margin-left: 15px;
  margin-right: 15px;
  color: white;
  border-bottom: solid 4px transparent;
}

#header .nav-link:hover {
  border-bottom: solid 4px var(--primary-color);
  color: w;
  transition: 0.3s all;
}

li {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

#student {
    border: 2px solid var(--primary-color);
    color: white;
    padding: 5px;
    border-radius: 15px;
}

#student:hover {
    background-color: var(--primary-color);
    transition: 0.3s all;
}

#student a:hover {
    border-bottom: solid 4px white !important;
    transition: 0.3s all;
}
</style>