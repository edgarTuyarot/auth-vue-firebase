<template>
  <h1>App</h1>
  <nav v-if="!userStore.loadingSession">
    <RouterLink to="/" v-if="userStore.userData">Home || </RouterLink>
    <RouterLink to="/login" v-if="!userStore.userData">Login || </RouterLink>
    <RouterLink to="/register" v-if="!userStore.userData">Registro</RouterLink>
    <button @click="userStore.logOut" :disabled="userStore.loadingUser" v-if="userStore.userData">Cerrar Sesion</button>
  </nav>
  <div v-else>
    Cargando..
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { useUserStore } from './stores/user.js'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

</script>