<template>
    <h1>Iniciar Sesion</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" name="" id="" placeholder="Email" v-model.trim="email">
        <input type="password" name="" id="" placeholder="Password" v-model.trim="password">
        <button type="submit" :disabled="userStore.loadingUser">Login</button>
    </form>
</template>
<script setup>
import {ref} from 'vue'
import {useUserStore} from '../stores/user.js'
import {useRouter} from 'vue-router'
const Router = useRouter()
const userStore = useUserStore()


const email = ref('')
const password = ref('')
const  handleSubmit = async () => {
    if(!email.value || password.value.length < 6){
        return alert("Llena los campos")
    }
    await userStore.loginUser(email.value,password.value)
    Router.push('/')
}

</script>