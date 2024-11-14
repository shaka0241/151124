<template>
  <div>
    <h2>Registro</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Registrar</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, auth } from '../auth'
export default {
  name: 'RegistroView',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredential.user
        console.log('Usuario registrado', user)
      } catch (error) {
        console.log('Error', error)
      }
    },
  },
}
</script>

<style scoped></style>
