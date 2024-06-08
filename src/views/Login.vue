<template>
    <div>
        <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>

            <v-text-field v-model="email" density="compact" placeholder="Email address"
                prepend-inner-icon="mdi-email-outline" variant="outlined">
            </v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
            </div>

            <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible">
            </v-text-field>

            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block :loading="loading" @click="handleLogin">
                Log In
            </v-btn>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="/register" rel="noopener noreferrer" target="_blank">
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            visible: false,
            email: '',
            password: '',
            loading: false
        };
    },
    methods: {
        ...mapActions(['login']),
        async handleLogin() {
            this.loading = true;
            try {
                await this.login({ email: this.email, password: this.password });
                alert('User logged in successfully!');
                this.$router.push('/');
            } catch (error) {
                console.error(error);
                alert('Login failed!');
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
