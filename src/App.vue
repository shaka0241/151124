<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
}
</script>

<template>
  <h1>Hola desde App</h1>
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/registro">Registro</RouterLink> |
  <RouterView />
</template>

<style scoped></style>
