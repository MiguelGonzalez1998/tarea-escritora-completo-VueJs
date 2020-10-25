<template>
<div class="footer">
    <b-container class="mt-4">
        <div class="links"> <a href="https://www.facebook.com/bne"> <i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/explore/tags/d%C3%ADadelasescritoras/?hl=es"> <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/user/bibliotecaBNE"><i class="fab fa-youtube"></i></a>
        </div>

        <p class="text-footer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, delectus aliquid corporis nihil saepe qui dicta laborum fuga veniam possimus, perferendis expedita aut earum hic, labore sunt officia quisquam sequi quibusdam! Alias quidem id sed minus tenetur nam dolores cum quaerat? Odit neque optio eaque ad non eligendi tempore laborum!</p>

    </b-container>
</div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer {
    width: 100%;
    height: 300px;
    background-color: black;
}

.text-footer {
    padding: 20px;
    color: white;
}

.footer {
    text-align: center
}

.footer a {
    padding: 15px;
    color: pink;
    font-size: 30px;
    text-decoration: none;
}

.links {
    margin-top: 20px;
}
</style>
