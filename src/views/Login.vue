<template>
    <div class="container w-50 text-center mt-5">
        <h1>Iniciar Sesion</h1>
        <form @submit.prevent="handleSubmit" class="container w-50 text-center">
            <input type="email" name="" id="" placeholder="Email" v-model.trim="email" class="form-control mt-1">
            <input type="password" name="" id="" placeholder="Password" v-model.trim="password" class="form-control mt-1">
            <button type="submit" :disabled="userStore.loadingUser" class="btn btn-outline-primary btn-sm mt-1">Login</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
import { useRouter } from 'vue-router'
const Router = useRouter()
const userStore = useUserStore()


const email = ref('')
const password = ref('')
const handleSubmit = async () => {
    if (!email.value || password.value.length < 6) {
        return alert("Llena los campos")
    }
    await userStore.loginUser(email.value, password.value)
    Router.push('/')
}

</script>