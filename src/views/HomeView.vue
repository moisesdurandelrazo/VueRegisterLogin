<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>foto</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Registro</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="7">
                <h3>Cargando...</h3>
              </td>
            </tr>
            <tr v-else v-for="est, i in this.estudiantes" :key="est.id">
              <td v-text="(i + 1)"></td>
              <td v-text="est.id"></td>
              <td>
                <img v-if="est.foto" style="width: 150px !important;" :src="est.foto" class="img-thumbnail" alt="">
                <img v-else style="width: 50px !important;"
                  src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/face-grin-beam-256.png"
                  class="img-thumbnail" alt="">
              </td>
              <td v-text="est.nombre"></td>
              <td v-text="est.apellido"></td>
              <td v-text="new Date(est.created_at).toLocaleString('en-US')"></td>
              <td>
                <router-link :to="{ path: 'view/' + est.id }" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>

                &nbsp;

                <router-link :to="{ path: 'edit/' + est.id }" class="btn btn-warning">
                  <i class="fa-solid fa-exclamation"></i>
                </router-link>

                &nbsp;

                <button class="btn btn-darger" v-on:click="$event => eliminar(est.id, est.nombre)">
                  <i class="fa-solid fa-trash"></i>
                </button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { confirmar } from '../functions.js'
import store from '../store/index.js';

export default {
  data() {
    return {
      estudiantes: null,
      cargando: false,
    }
  },
  mounted() {
    this.getEstudiantes();
  },
  methods: {
    getEstudiantes() {
      this.cargando = true
      axios.get('http://localhost:8000/v1/estudiantes').then(
        res => {
          this.estudiantes = res.data;
          this.cargando = false;
        }
      );
    },
    eliminar(id, nombre) {
      confirmar('http://localhost:8000/v1/estudiantes/', id, 'Eliminar registro', 'Realmente desea eliminar a ' + nombre + '?')
      this.cargando = false;
    }
  },
}
</script>
