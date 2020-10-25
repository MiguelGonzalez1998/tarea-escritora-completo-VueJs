<template>
<div class="nav">
    <b-navbar toggleable="md" type="dark" class="nav-bar" fixed="top">
        <b-navbar-brand href="/"><i class="fas fa-home"></i></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="/Escritoras">Escritoras</b-nav-item>
                <b-nav-item href="/Premios">Premios</b-nav-item>
                <b-nav-item href="/Edicion">Ediciones</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Nav',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.nav {
    padding-bottom: 56px;
}

.nav-bar {
    background-color: black;
}
</style>
