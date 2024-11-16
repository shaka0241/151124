<template>
    <div>
        <h2>Inicio de Sesion</h2>
        <input v-model="email" type="email" placeholder="Correo electronico" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <button @click="signIn">Iniciar Sesion</button>
    </div> 
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from '@/auth';

export default {
        data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: { 
        async signIn() {
            const { email, password } = this;
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        }
        
    }
    }
</script>

<style scoped>
</style>