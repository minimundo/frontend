import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
    ...required,
    message: 'Este campo é obrigatório!'
})

extend('email', {
    ...email,
    message: 'O email inserido deve ser válido!'
})