<template>
    <h1>Gestion Central</h1>
    <form @submit.prevent="handleSubmit" class="container w-50 m-1">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="url">
            <label for="floatingInput">URL</label>
        </div>
        <button type="submit" class="btn btn-outline-success btn-sm mt-1">Agregar</button>
    </form>
    <hr>
    <div v-if="!databaseStore.loadingData" class="container">
        <div v-for="item of databaseStore.documents" :key="item.id" class="container mb-2">
            <ul class="list-group mt-1 w-50">
                <li class="list-group-item">ID: <strong>{{ item.id }}</strong></li>
                <li class="list-group-item">Shot: <strong>{{ item.short }}</strong></li>
                <li class="list-group-item">URL: <strong>{{ item.name }}</strong></li>
            </ul>    
            <button @click="databaseStore.deleteUrl(item.id)" class="btn btn-outline-danger btn-sm m-1">borrar</button>
            <button type="button" class="btn btn-outline-primary btn-sm m-1" data-bs-toggle="modal" data-bs-target="#editarModal">Editar</button>
            <EditarRegistro :item="item"></EditarRegistro>
        </div>
    </div>
    <div v-else>
        Cargando Data..
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user.js'
import { useDatabaseStore } from '../stores/database.js'
import { ref } from 'vue';

import EditarRegistro from '../components/EditarRegistro.vue'

const userStore = useUserStore()
const databaseStore = useDatabaseStore()

const url = ref()

const handleSubmit = () => {
    databaseStore.addUrl(url.value)
}

databaseStore.getUrls()







</script>