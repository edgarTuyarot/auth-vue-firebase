<template>
    <h1>Home</h1>
    <h2>{{ userStore.userData?.email }}</h2>
</template>

<script setup>
import {useUserStore} from '../stores/user.js'

const userStore = useUserStore()






</script>