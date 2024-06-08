<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar Vue</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link v-if="isLoggedIn" class="nav-link" to="/">Inicio</router-link>
            <a v-else class="nav-link" href="/login">Iniciar sesión</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudiantes
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Listar</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/create">Registrar Nuevo</router-link>
              </li>
            </ul>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" href="#" @click="handleLogout">Cerrar sesión</a>
          </li>
          </li>
          <ul class="navbar-nav">
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link" href="/register">Registrarse</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid"><router-view /></div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      this.loading = true;
      try {
        await this.logout();
        alert('User logged out successfully!');
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
        alert('Logout failed!');
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>