<template>
    <div id='Home'>
        <Header></Header>
        <img alt="Vue logo" class="logo" src="../assets/logo.png">
        <div> {{ title }} </div>
        <h1 v-if="IsTrue"> True </h1>
        <h1 v-else> False </h1>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: "Home",
    components: {
        Header
    },
    data() {
        return {
            title: "Home",
            IsTrue: false
        }
    }
}
</script>