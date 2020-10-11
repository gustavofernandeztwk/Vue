<template>
    <div id='base'>
        <Header></Header>
        <img alt="Vue logo" class="logo" src="../assets/erro_404.png">
        <button @click="logout()">Volver</button>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: "Base",
    components: {
        Header
    },
    methods: {
        logout() {
            this.$router.push({name: 'login', params: {id: 'Error'}});
        }
    }
}
</script>