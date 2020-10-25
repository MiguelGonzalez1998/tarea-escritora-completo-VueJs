<template>
<div>

    <b-container>
        <b-row>
            <b-col sm="12" md="6" lg="4">
                <a href="/Emily">
                    <b-card title="Emily Jane" img-src="@/assets/img/escritoras/EmilyJane.jpg" img-alt="Image1" img-top tag="article" style="max-width: 20rem;" class="mb-2 nameEscritora">

                    </b-card>
                </a>
            </b-col>

            <b-col sm="12" md="6" lg="4">
                <a href="/Virginia">
                    <b-card title="Virginia Woolf" img-src="@/assets/img/escritoras/VirginiaWoolf.jpg" img-alt="Image2" img-top tag="article" style="max-width: 20rem;" class="mb-2 nameEscritora">

                    </b-card>
                </a>
            </b-col>
            <b-col sm="12" md="6" lg="4">
                <a href="/Marguerite">
                    <b-card title="Marguerite Yourcenar" img-src="@/assets/img/escritoras/MargueriteYourcenar.jpg" img-alt="Image3" img-top tag="article" style="max-width: 20rem;" class="mb-2 nameEscritora">

                    </b-card>
                </a>
            </b-col>

            <b-col sm="12" md="6" lg="4">
                <a href="/Carme">
                    <b-card title="Carme Riera" img-src="@/assets/img/escritoras/carmeriera.jpg" img-alt="Image3" img-top tag="article" style="max-width: 20rem;" class="mb-2 nameEscritora">
                    </b-card>
                </a>
            </b-col>
            <b-col sm="12" md="6" lg="4">
                <a href="/Laura">
                    <b-card title="Laura Freixas" img-src="@/assets/img/escritoras/LauraFreixas.jpg" img-alt="Image3" img-top tag="article" style="max-width: 20rem;" class="mb-2 nameEscritora">

                    </b-card>
                </a>
            </b-col>

            <b-col sm="12" md="6" lg="4">
                <a href="/Maria">
                    <b-card title="María Zambrano" img-src="@/assets/img/escritoras/MaríaZambrano.jpg" img-alt="Image3" img-top tag="article" style="max-width: 20rem;" class="mb-2 nameEscritora">

                    </b-card>
                </a>
            </b-col>

        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    name: 'Escritoras'
}
</script>

<style scoped>
.nameEscritora {
    text-align: center;
    background-color: rgba(243, 162, 177, 0.774);
    margin: 0 auto;
    margin-top: 20px;

}

a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
}
</style>
