<template>
  <div v-if="!userStore.loadingSession">
    
    <nav class="d-flex justify-content-start" style="background-color: #e3f2fd;">
      
      <RouterLink to="/" v-if="userStore.userData" class="nav-link">Home</RouterLink>
      <RouterLink to="/login" v-if="!userStore.userData" class="nav-link">Login </RouterLink>
      <RouterLink to="/register" v-if="!userStore.userData" class="nav-link">Registro</RouterLink>
      <button @click="userStore.logOut" :disabled="userStore.loadingUser" v-if="userStore.userData"
        class="btn btn-outline-secondary m-1">Cerrar Sesion</button>
  
    </nav>
  </div>
  <div v-else>
    Cargando..
  </div>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user.js'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

</script>