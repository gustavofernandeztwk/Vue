<template>
  <div id="app">
      <router-view></router-view> <!-- Carga el componente segun la url a la que se ingrese -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
//Comentario dentro de js, se comenta de diferentes maneras en html, js y css
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import './assets/css/styles.css';  /* importamos la hoja de estilos creada */
</style>
