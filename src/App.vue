<template>
<div id="app">
    <Nav />
    <div class="content">
        <router-view />
    </div>
    <Footer />
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Nav,
        Footer
    }
}
</script>

<style>
#app {
    background-color: rgba(247, 215, 221, 0.562);

}

.content {
    min-height: calc(100vh - 56px - 300px);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p,
li {
    font-family: 'Roboto Condensed', sans-serif;
}

h1,
h2,
h3 {
    font-family: 'Allan', cursive;
    font-family: 'Roboto Condensed', sans-serif;
}
</style>
