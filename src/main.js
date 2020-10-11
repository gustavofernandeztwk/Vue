import Vue from 'vue'
import App from './App.vue'
//npm install --save vue-router
import VueRouter from 'vue-router'; //Importamos librería para rutas
import Login from './components/Login.vue'; //importamos nuestros componentes Login y Home
import Home from './components/Home.vue';
import Widget from './components/Widget.vue';
import ErrorComponent from './components/ErrorComponent.vue';

Vue.config.productionTip = false

Vue.use(VueRouter); //Decimos a vue que vamos a utilizar el vuerouter instalado

const routes = [  //Definimos los path y donde nos llevará cada uno
  { path: '/login/:id?', name: 'login', component: Login },  //parámetro opcional (?), para que sea obligatorio se debe quitar el simbolo de pregunta
  { path: '/home', component: Home },
  { path: '/', component: Home }, 
  { path: '/widget/:id?', name: 'widget', component: Widget}, 
  { path: '*', component: ErrorComponent }  //aquí entra con cualquier ruta no establecida
]

//Creamos el objeto vuerouter
const router = new VueRouter({
  routes, //le pasamos el array de rutas
  mode: 'history' //para que no recargue la pagina al cambiar la ruta
})

new Vue({
  router, //agremos el objeto router a la instancia de Vue para que sea global
  render: h => h(App),
}).$mount('#app')

