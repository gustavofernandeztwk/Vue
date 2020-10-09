<template>
    <div id='Home'>
        <Header></Header>
            {{ title }}
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "Home",
    components: {
        Header,
    },
    data() {
        return {
            title: "Home"
        }
    }
}
</script>