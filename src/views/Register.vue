<template>
    <v-container>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <v-card-title>Join us</v-card-title>

            <v-form @submit.prevent="register">
                <v-text-field v-model="first_name" label="First Name" required></v-text-field>
                <v-text-field v-model="last_name" label="Last Name" required></v-text-field>
                <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                <v-text-field v-model="password_confirmation" label="Confirm Password" type="password"
                    required></v-text-field>

                <v-btn type="submit" color="primary" class="mt-4" :loading="loading">
                    Save
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store/index.js';

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            loading: false
        };
    },
    methods: {
        async register() {
            this.loading = true;
            try {
                const response = await axios.post('http://localhost:8000/register', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                });
                alert('User registered successfully!');
                console.log(response.data);
            } catch (error) {
                console.error(error);
                alert('Registration failed!');
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>