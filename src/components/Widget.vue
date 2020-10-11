<template>
    <div id='widget'>
    <Header></Header>
    <h3> {{ url_id }} </h3>
    <button @click="changeId()">Cambiar Id</button> <!-- onclick function -->
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: "Widget",
    components: {
        Header
    },
    created() { //componente creado
        
    },
    mounted() { //componente montado
        this.url_id = this.$route.params.id;    //Se setea la variable url_id con el valor que trae la url
    },
    updated() { //componente actualizado
        console.log("updated");
    },
    destroyed() {   //componente destruido

    },
    data() {
        return  {
            url_id: null
        }
    },
    methods: {
        changeId() {
            this.url_id = "Updated";
        }
    }
}
</script>