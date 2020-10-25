<template>
<div>
    <div class="header">
        <b-img src="@/assets/img/logo.jpg" alt="logo image" class="logo"></b-img>
    </div>

    <b-container>
        <b-row>
            <b-col md="12" lg="9">
                <section>
                    <article class="historia">

                        <p class="p-1">El Día de las Escritoras es una conmemoración iniciada en España en octubre de 2016 para recuperar el legado de las mujeres escritoras, hacer visible el trabajo de las mujeres en la literatura y combatir la discriminación que han sufrido a lo largo de la historia.​ La celebración, de carácter anual, se convoca el lunes más cercano a la fecha del 15 de octubre, festividad de Teresa de Jesús.</p>

                        <h1>Historia</h1>

                        <p> El Día de las Escritoras surgió por iniciativa de la Biblioteca Nacional de España, la Asociación Clásicas y Modernas y la Federación Española de Mujeres Directivas, Ejecutivas, Profesionales y Empresarias (FEDEPE) para compensar la discriminación histórica de las mujeres en la literatura.

                            A pesar de los muchos nombres de escritoras que los especialistas conocen y estudian anteriores al siglo xix,2​ rara vez aparecen mencionadas en los manuales de estudio y ni siquiera en los programas de historia literaria de la universidad en España. En el siglo xix gran parte de las mujeres escritoras tenían que publicar con un seudónimo de hombre para ser tomadas en serio. Emily Brontë y sus hermanas fueron muestra manifiesta de ello. Cumbres Borrascosas fue publicada bajo el seudónimo de Ellis Bell; ningún editor se atrevía a publicar, pues consideraban que ellas solamente escribían novelas de corte romántico.3​</p>

                        <p> El siglo xx se inició con un cambio de tendencia con la pionera Virginia Woolf, que comenzó en 1905 a escribir para el suplemento literario del Times y 10 años después publicó su primera novela, y con Marguerite Yourcenar,3​ pero se produjeron pocos avances significativos.

                            Según Laura Freixas, presidenta de Clásicas y Modernas, «aunque las escritoras cosechen buenas críticas en los lanzamientos de las novelas pero en los rankings con los mejores libros que se hacen a final de cada año las mujeres no están. A pesar de que hay muchas mujeres escritoras con éxito en España el Premio Nacional de Narrativa lo ganó una mujer (Carme Riera) por última vez en 1995. Llevamos 21 años en el que cada año se lo lleva un hombre».1​

                            El premio más importante de literatura en lengua castellana, el Premio Cervantes, solo se ha concedido desde su institución en 1976 a cuatro mujeres: María Zambrano (1988), Dulce María Loynaz (1992) Ana María Matute (2010) y Elena Poniatowska (2013)4​ frente a 37 hombres.5​ El Premio Nobel de Literatura desde su creación en 1901 hasta 2017 ha premiado a 13 mujeres y 100 hombres.</p>
                    </article>

                    <article class="importancia">
                        <h1>Importancia</h1>
                        <h4>Una fecha necesaria para luchar contra el olvido de las mujeres en la literatura</h4>
                        <p>
                            "Me atrevería a aventurar que Anónimo era a menudo una mujer". Esta afirmación la escribió Virginia Wolf, autora de 'Una habitación propia'. Muchas escritoras recurrieron a ese término para firmar sus creaciones literarias. Otras utilizaron un alias masculino. 'Memorias de África' la firmó un tal Isak Dinesen. La baronesa Karen Blixen optó por ocultar su género para publicar su biografía. J. K. Rowling, famosa por la saga de Harry Potter, jugó con la ambigüedad de su sexo al emplear sus iniciales.

                            Ser escritora nunca fue una tarea fácil como demuestran estos trucos que tuvieron que utilizar las autoras de siglos pasados para que sus textos vieran la luz. Ellas estaban relegadas a las tareas del hogar. Pero, a pesar de esas dificultades, sí existían mujeres que se dedicaban a escribir, con pluma, máquinas o ordenador, aunque sus nombres han sido ninguneados y no han trascendido. Para visibilizarlos y darles la importancia que merecen, la Biblioteca Nacional, en colaboración con la Asociación Clásicas y la Federación Española de Mujeres Directivas (FEDEPE), ha organizado el Día de las escritoras el próximo 19 de octubre. Una celebración que comenzó en el año 2016 y que coincide con la fecha más cercana a la festividad de Teresa de Jesús, una de las primeras literatas españolas.
                            Bajo el lema 'El esfuerzo cotidiano de las mujeres', esta edición pretende reivindicar la labor y el legado de las escritoras a lo largo de la historia. </p>

                        <div>
                            <b-button v-b-toggle.collapse-1 variant="dark" size="sm">Leer Mas...</b-button>
                            <b-collapse id="collapse-1" class="mt-2">
                                <p>
                                    Para ello, ese día distintas personalidades de la cultura española leerán los 20 fragmentos de textos seleccionados por la comisaria Elvira Lindo de autoras españolas y iberoamericanas de distintas época. Entre los nombres que se reivindicaran este año destacan Rosalía de Castro, Concha Méndez, Victoria Durán, Gloria Fuertes o Circe Maia, explican fuentes de la Biblioteca Nacional. En este caso, con motivo de la pandemia, el evento tendrá un aforo limitado, pero podrá seguirse en la página web de la institución. Además, el 24 de octubre tendrá lugar una Editatón, una jornada para crear, editar y mejorar artículos en Wikipedia, desde una perspectiva de género.

                                    Aunque el saber no entiende de géneros, los ejemplares no viven ajenos al machismo de la sociedad. Faltan nombres femeninos en casi todos los géneros literarios. Son pocas la autoras que aparecen en los libros de texto, más allá de las conocidas Emilia Pardo Bazán o Rosalía de Castro. Otro ejemplo, de la escasez de autoras es el número de ganadoras del Premio Cervantes, el más importante de la lengua castellana. Tan solo cinco escritoras se han hecho con el galardón: María Zambrano (1988), Dulce María Loynaz (1992), Ana María Matute (2010), Elena Poniatowska (2012) e Ida Vitale (2018). Aunque sucede lo mismo con otros premios. Los Premios Nobel podrían llamarse los Nobel del Machismo.</p>
                            </b-collapse>
                        </div>
                        <h4 class="mt-4">Únete a nuestra comunidad</h4>
                        <b-form class="form" @submit="onSubmit">
                            <b-form-group>
                                <b-form-input class="form-control" type="text" name="nombre" v-model="form.name" required placeholder="Introduzca su Nombre"></b-form-input>
                            </b-form-group>

                            <b-form-group>
                                <b-form-input class="form-control" type="text" name="apelllidos" v-model="form.firstLastName" required placeholder="Introduzca su Apellido"></b-form-input>
                            </b-form-group>
                            <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Introduzca email"></b-form-input>

                            <b-form-group> <label for="">Seleccione sus géneros favoritos</label>
                                <b-form-checkbox-group v-model="form.checked" id="">
                                    <b-form-checkbox value="Poesía">Poesía</b-form-checkbox>
                                    <b-form-checkbox value="Histórica">Histórica</b-form-checkbox>
                                    <b-form-checkbox value="Aventuras">Aventuras</b-form-checkbox>
                                    <b-form-checkbox value="Novelas">Novelas</b-form-checkbox>
                                    <b-form-checkbox value="Policíaca">Policíaca</b-form-checkbox>
                                    <b-form-checkbox value="Ciencia Ficción">Ciencia Ficción</b-form-checkbox>
                                </b-form-checkbox-group>

                            </b-form-group>
                            <b-button type="submit" v-b-modal.modal-1 variant="dark" size="sm">Enviar</b-button>

                        </b-form>

                    </article>
                </section>
            </b-col>
            <b-col md="12" lg="3">
                <aside class="mt-5 ml-3 aside">
                    <h2>Noticias</h2>
                    <b-row>
                        <b-col md="6" lg="12">
                            <h4>Edición 2016</h4>
                            <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/he2VVfjVyLA" allowfullscreen>
                            </b-embed>
                        </b-col>
                        <b-col md="6" lg="12">
                            <h4>Edición 2017</h4>

                            <div>
                                <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/2uaxnA06EVI" allowfullscreen></b-embed>
                            </div>
                        </b-col>

                        <b-col md="6" lg="12">
                            <h4>Edición 2018</h4>

                            <div>
                                <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/cDZuq1okTWE" allowfullscreen></b-embed>
                            </div>
                        </b-col>
                        <b-col md="6" lg="12">
                            <h4>Edición 2019</h4>

                            <div>
                                <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/DKW022gWq44" allowfullscreen></b-embed>
                            </div>
                        </b-col>

                        <b-col md="12" lg="12">
                            <h4>Edición 2020</h4>

                            <div>
                                <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/5XDtA5ZLCg4" allowfullscreen></b-embed>
                            </div>
                        </b-col>

                    </b-row>
                </aside>
            </b-col>

        </b-row>

    </b-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",

    data() {
        return {
            form: {
                name: '',
                firstLastName: '',
                email: '',
                checked: []
            }
        }
    },

    methods: {
        onSubmit(e) {
            e.preventDefault(e);
            if (this.form.checked.length === 0) {
                alert(`Hola ${this.form.name} ${this.form.firstLastName}, Gracias por pertenecer a nuestra Comunidad`)
            } else {
                alert(`Hola ${this.form.name} ${this.form.firstLastName}, Gracias por pertenecer a nuestra Comunidad, te enviaremos literatura de género ${this.form.checked} para su disfrute`)

            }
            this.form.name = '',
                this.form.firstLastName = '',
                this.form.secondLastName = '',
                this.form.email = '',
                this.form.checked = []
        },

    },
};
</script>

<style scoped>
.logo {
    width: 100%;
    height: auto;
}

.historia h1 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: pink;
}

.p-1 {
    font-weight: bold;
    margin-top: 20px;
    border: 1px solid pink;
}

.importancia h1 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: pink;
}

.importancia h4 {
    text-align: center;
    color: rgb(153, 105, 113);
}

.aside h2 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: pink;
}

.form {
    margin-top: 10px;
}
</style>
