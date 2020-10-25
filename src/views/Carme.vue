<template>
<div class="container">
    <b-img src="@/assets/img/escritoras/carmeriera2.jpg" fluid center class="mt-4"></b-img>
    <h1>Carme Riera Guilera</h1>
    <p>(Palma de Mallorca, 12 de enero de 1948) es una escritora española que escribe en catalán y castellano, guionista, ensayista, profesora y ocupa la silla "n" en la Real Academia Española. Ha presidido CEDRO desde junio de 2015 a junio de 2019.</p>
    <p>Carme Riera pasó su infancia y adolescencia en Palma de Mallorca, donde tiene vínculos familiares con el ingeniero mallorquín Eusebio Estada y el general Valeriano Weyler.​ Desde los ocho años escribió narraciones que eran variantes de las historias que le contaba su abuela Caterina en su infancia.2​ Se trasladó en 1965 a estudiar filología hispánica a la Universidad Autónoma de Barcelona (UAB), donde se licenció en Filosofía y Letras y se doctoró en Filología Hispánica con Premio Extraordinario por la UAB. Riera participó en las movilizaciones estudiantiles en contra del franquismo, de la guerra de Vietnam y en el incipiente movimiento feminista.​ Todo ello forjó su mirada sobre la realidad, una mirada que cuestionaba las normas, bajo el influjo de mayo del 68 francés, y que vislumbraba una ventana abierta a un mundo radicalmente diferente.</p>
    <p>En 1995 se convirtió en catedrática de literatura española de su alma máter y desde 2002 ejerce como directora de la Cátedra José Agustín Goytisolo en esta misma universidad. Riera ha estudiado a lo largo de su carrera la literatura española del Siglo de Oro y de la literatura catalana de la Escuela de Barcelona.

        Ha sido catedrática de Lengua y Literatura Españolas de Institutos Nacionales de Enseñanza Media y titular de universidad; profesora visitante en las universidades de Florida (Gainesville) (1987), Darmouth College (2001) y en la University of Chicago (2006). Ha impartido cursos y seminarios, entre otras, en la Universidad Internacional Menéndez Pelayo; Complutense de Madrid; Aarhus; Instituto de Estudios Hispánicos de Amberes; Universidad de Puerto Rico (Mayagüez); la Sorbona; Uppsala; Harvard; Montclair; Cornell; University of Misuri-St. Louis; Columbia; Indiana y The Catholic University of America (Washington), entre otras.</p>
    <p>Publicó su primer libro, la recopilación de cuentos Te deix, amor, la mar com a penyora, en 1975 (el relato que le da título había ganado, en 1974, el premio Recull-Francesc Puig i Llensa de narració), Riera aportó un estilo nuevo y fresco y utilizaba el habla mallorquina coloquial para sugerir y crear una narrativa que ponía sobre la mesa temas que hasta entonces habían sido tabúes, como el amor entre las mujeres, y al mismo tiempo era bastante crítica con la sociedad del momento.2​ Fue seguido, dos años después por otra recopilación titulada Pongo las gaviotas por testigo, un conjunto de narraciones que seguían los mismos principios narrativos de la obra anterior que cierra su primera etapa de la producción literaria de la autora.</p>

    <p> Su primera novela, Una primavera per a Domenico Guarini, con la que recibió el Premio Prudenci Bertrana en 1980, abre la segunda etapa de la obra de Riera, que comprende la producción literaria de la década de los ochenta. Esta primera novela no sólo representa un cambio de género sino también de objetivo, el de formular un modelo de novela culta alternada con elementos coloquiales y el de experimentar con la simbiosis de registros y de géneros -la narrativa policíaca y el ensayo, el lenguaje culto y el periodístico-. Esta voluntad experimentadora e investigadora de la autora, y una actitud de juego, con una mirada a menudo lúdica e irónica, son los ejes de las obras de este periodo, como la recopilación de narraciones Epitelis tendríssims y las novelas Qüestió d'amor propi y Joc de miralls.</p>

    <p>Con las novelas históricas Dins el darrer blau y Cap al cel obert, con buena acogida por la crítica, se inicia la tercera etapa. Ambas novelas construyen la doble identidad de judíos y mallorquines de los protagonistas, a partir de dos historias enlazadas: la primera, ambientada en la Mallorca de finales del siglo XVII, narra la persecución de un grupo de judíos condenados a la quema pública en la hoguera por la Inquisición; la segunda tiene como protagonistas a los descendientes de los judíos del siglo XVII establecidos en la isla de Cuba en pleno conflicto colonial.</p>
    <p>Con estas dos ambiciosas narraciones, Riera reconstruyó con todo detalle y rigor los escenarios históricos de aquel momento. La escritora desplegó historias de ficción y trazó con mucho talento el carácter y perfil de los diferentes personajes. Ambas obras tienen un gran valor literario y testimonian una excelente trayectoria literaria, que se consolida definitivamente en la segunda mitad de la década de los noventa.​

        Riera escribe sus novelas y relatos en catalán, y se encarga de traducirlas al castellano, mientras que los ensayos los escribe en castellano.4​ Gran parte de su producción se ha traducido a una docena de idiomas, como alemán, árabe, francés, inglés e italiano</p>

    <h2>Reconocimientos</h2>
    <p>El 19 de abril de 2012 fue elegida miembro de número de la Real Academia Española, donde pasó a ocupar la silla n tras leer su discurso de ingreso titulado Sobre un lugar parecido a la felicidad el 7 de noviembre de 2013.7​8​9​ También es miembro de número de la Real Academia de Buenas Letras de Barcelona.</p>

    <p>Riera ha recibido numerosos premios por sus obras, entre otros, el Ramon Llull (1989) por Joc de miralls; el Premio Nacional de Narrativa (1995) por Dins el darrer blau o el Premio Sant Jordi (2003) por La meitat de l'ànima. Ha colaborado con diversas publicaciones, como el diario El País o las revistas Quimera y Serra d'Or, entre otras. En noviembre de 2015 recibió el prestigioso Premio Nacional de las Letras Españolas10​

        El 28 de febrero de 2018 el Gobierno de la Comunidad Autónomas de las Islas Baleares le otorgó la Medalla de Oro de la comunidad por su trayectoria como miembro de la Real Academia Española e integrante del movimiento de la literatura catalana escrita por mujeres en una ceremonia en el Palacio de Congresos de Palma.</p>

    <h2>Obras</h2>
    <b-row>
        <b-col sm="12">
            <h3>Novelas</h3>
            <ul class="novelas">
                <li v-for="novela in novelas">{{novela}}
                </li>
            </ul>
        </b-col>

        <b-col sm="12">
            <h3>Crítica literaria y ensayo</h3>
            <ul class="criticas">
                <li v-for="critica in criticas">{{critica}}</li>
            </ul>
        </b-col>

    </b-row>
</div>
</template>

<script>
export default {
    name: 'Carme',

    data() {
        return {
            novelas: ['Una primavera per a Domenico Guarini. Barcelona: Edicions 62, 1980 / Barcelona: Grans Èxits, 1994 - Una primavera para Domenico Guarini (trad.:, Luisa Cotoner), Montesinos, Barcelona, 1981', 'Qüestió d\'amor propi. Barcelona: Laia, 1987 / Barcelona: Planeta, 1994 / Barcelona: Columna, 1998 / Barcelona: Cercle de Lectors, 1999 - Cuestión de amor propio, 1988, Tusquets', 'Joc de miralls. Barcelona: Planeta, 1989 / Barcelona: Cercle de Lectors, 1990 - Por persona interpuesta,', 'Llamaradas de luz. Madrid: Anaya, Biblioteca de El Sol, 1991 / Madrid: Compañía Europea de Comunicación e Información, 1991', 'Dins el darrer blau. Barcelona: Destino, 1994 / Barcelona: Cercle de Lectors, 1996 / Barcelona: Proa, 1999 / Barcelona: Nuevas Ediciones de Bolsillo, 2000 / Barcelona: Booket, 2002 - En el último azul', 'Cap al cel obert. Barcelona: Cercle de Lectors, 2000 / Barcelona: Destino, 2002 - Por el cielo y más allá', 'La meitat de l\'ànima. Barcelona: Proa, 2004 / Barcelona: Cercle de Lectors, 2004 -La mitad del alma', 'L\'estiu de l\'anglès. Barcelona: Proa, 2006 - El verano del inglés, Alfaguara.', 'Amb ulls americans. Barcelona: Proa, 2009 / Barcelona: Labutxaca, 2011 - Con ojos americanos, Bruguera, 2009', 'Natura quasi morta, primera novela en el género negro. Barcelona: Edicions 62, 2011 - Naturaleza casi muerta, Alfaguara, 2012', 'Temps d\'innocència, relato autobiográfico con el que regresa a la Mallorca de su niñez. Barcelona: Edicions 62, 2013. Tiempo de inocencia, Alfaguara, 2013', 'La veu de la sirena. Barcelona: Edicions 62, 2015. La voz de la sirena, Lumen, 2015', 'Les darreres paraules. Barcelona: Edicions 62, 2016. Las últimas palabras, Alfaguara 2017.', 'Venjaré la teva mort. Barcelona: Edicions 62, 2018. Vengaré tu muerte, Alfaguara, 2018'],

            criticas: ['La obra poética de José Agustín Goytisolo. Barcelona: Mall, 1987', 'La Escuela de Barcelona: Barral, Gil de Biedma, Goytisolo: el núcleo poético de la generación de los cincuenta. Barcelona: Anagrama, 1988.', 'Escuela de Barcelona: la obra poética de Jaime Gil de Biedma, Carlos Barral y José Agustín Goytisolo. Bellaterra (Barcelona): Universitat Autònoma de Barcelona, 1988', 'La obra poética de Carlos Barral, edición. Barcelona: Edicions 62, 1990', 'Hay veneno y jazmín en su tinta: aproximación a la poesía de J.A. Goytisolo. Rubí (Barcelona): Anthropos, 1991', 'Poesía de Carlos Barral, edición. Madrid: Cátedra, 1991', 'Escenarios para la felicidad: estampas de Mallorca. Palma de Mallorca: José J. de Olañeta, 1994', 'Poesía completa de Carlos Barral, edición. Barcelona: Lumen, 1998', 'Mallorca, imágenes para la felicidad. Palma de Mallorca: Turisme Cultural Illes Balears, 1999', 'Partidarios de la felicidad, antología poética del grupo catalán de los 50, (selección) Barcelona: Cercle de Lectors, 2000', 'Los poemas sin mi orgullo: antología poética de José Agustín Goytisolo. Barcelona: Lumen, 2003', 'El Quijote desde el nacionalismo catalán. Barcelona: Destino, 2005']
        }
    },
}
</script>

<style scoped>
.container h1,
h2,
h3 {
    text-align: center;
    margin-top: 20px;
    text-decoration: underline;
    text-decoration-color: pink;
}

.novelas {
    list-style-position: inside;

}

.criticas {
    list-style-position: inside;

}

.container h3 {
    text-decoration: none;

}
</style>
