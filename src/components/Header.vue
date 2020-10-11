<template>
    <div id='header' class="header">
        <div class="topnav">
            <div>
                <router-link to="/home">Home</router-link>  <!-- router-link evita recargar la página -->
            </div>
            <div>
                <router-link :to="{name: 'widget', params: {id: 'Test'}}">Pestaña</router-link> <!-- envío de parámetro por url -->
                <a href="/Login">Cerrar Sesión</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>