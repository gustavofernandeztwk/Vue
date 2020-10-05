<template>
  <div id="app">
    <Header></Header>
    <Login></Login>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Login,
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
  margin-top: 60px;
}
@import './assets/css/styles.css';
</style>
