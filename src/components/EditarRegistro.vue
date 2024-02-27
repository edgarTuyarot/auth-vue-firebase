<template>
<!-- Modal -->
<div class="modal fade" id="editarModal" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editarModalLabel">Editar Registro</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

            <input type="text" class="form-control" id="floatingInput" placeholder=""   v-model="url">
            <label for="floatingInput">URL</label>
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" @click="editar">Guardar</button>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useDatabaseStore } from '../stores/database.js'

const databaseStore = useDatabaseStore()
const props = defineProps(['item'])

const url = ref()
url.value = props.item.name
const editar = () => { 
   databaseStore.editarUrl(props.item.id,url.value)

 }



</script>