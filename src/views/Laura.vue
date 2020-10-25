<template>
<div class="container">
    <b-img src="@/assets/img/escritoras/LauraFreixas2.jpg" fluid center class="mt-4"></b-img>
    <h1>Laura Freixas Revuelta</h1>
    <p>(Barcelona, 16 de julio de 1958) es una escritora española, autora de novelas y ensayos, así como crítica literaria y articulista en diversos medios. Fundadora en 1987 de la colección literaria El espejo de tinta que dirige hasta 1994. Destaca también por su labor investigadora y promotora de la literatura escrita por mujeres, en cuyo contexto funda en el 2009 Clásicas y Modernas, asociación para la igualdad de género, organización de la que desde enero de 2017 es presidenta de honor.</p>
    <p>Estudió en el Liceo Francés de su ciudad natal. Obtuvo una licenciatura en Derecho en 1980, pero siempre se ha dedicado a la escritura.

        En 1987 fundó y dirigió hasta 1994 la colección literaria El espejo de tinta de la Editorial Grijalbo.3​

        Fue conocida, por primera vez, en 1988 por su colección de cuentos El asesino en la muñeca.

        Posteriormente ha publicado otro libro de relatos (Cuentos a los cuarenta, 2001), varias novelas (Último domingo en Londres, 1997, Entre amigas, 1998, Amor o lo que sea, 2005 y Los otros son más felices, 2011), una autobiografía (Adolescencia en Barcelona hacia 1970, 2007), y dos volúmenes de su diario (Una vida subterránea. Diario 1991-1994, 2013 y Todos llevan máscara. Diario 1995-1996, 2018). Su último libro es una autobiografía con perspectiva de género, escrita como una novela y titulada A mí no me iba a pasar (2019).

    </p>
    <p> Dirigió un número monográfico de Revista de Occidente consagrado al diario íntimo en España (julio-agosto de 1996). Es columnista de La Vanguardia; ha sido crítica literaria para El País y colaboradora de revistas literarias como Mercurio, Letras libres, Revista de libros.

        Tradujo los diarios de Virginia Woolf y de André Gide, las cartas de Madame de Sévigné y la novela de Elisabeth Smart «En Grand Central Station me senté y lloré». Formó parte del jurado del Premio Nacional de las Letras y del Premio Nacional de Narrativa.

        Ha sido profesora invitada en varias Universidades de Estados Unidos (Virginia, Dartmouth, Illinois, Syracuse...), Irlanda (Limerick) y Reino Unido (Saint-Andrews), e impartido conferencias en la Biblioteca Nacional, la Fundación March, La Térmica, Caixaforum y otras instituciones.</p>

    <p>Freixas ha desarrollado una intensa labor como investigadora y promotora de la literatura escrita por mujeres.

        En 1996, compiló y escribió el prólogo para una antología de relatos de autoras españoles contemporáneas: Madres e hijas (con nueve ediciones en su primer año de publicación); y en 2000 publicó el ensayo Literatura y mujeres. En 2009 vio la luz Cuentos de amigas, así como la obra La novela femenil y sus lectrices (Premio Leonor de Guzmán).

        Es cofundadora en 2009 de la asociación Clásicas y Modernas,3​ dedicada al apoyo de las políticas de género en la cultura1​ que en 2016 impulsó el Día de las Escritoras.9​ Presidió la organización desde su creación hasta enero de 2017. Desde entonces es presidenta de honor.</p>

    <h2>Obras</h2>
    <ul class="obras">
        <li v-for="obra in obras">{{obra}}</li>
    </ul>
    <h2>Honores</h2>
    <ul class="honores">
        <li>Galardón ‘Leonor de Guzmán’ por La novela femenil y sus lectrices, 2008.</li>
        <li>Es miembro del Parlamento Cultural Europeo.</li>
    </ul>

</div>
</template>

<script>
export default {
    name: 'Laura',
    data() {
        return {
            obras: ['El asesino en la muñeca, cuentos, ed. Anagrama,1988', 'Último domingo en Londres, novela, ed. Plaza y Janés,1997', 'Entre amigas, novela, ed. Destino,1998', 'Literatura y mujeres, ensayo, ed. Destino, 2000', 'Cuentos a los cuarenta, ed. Destino, 2001', 'Amor o lo que sea, novela, ed. Destino, 2005', 'Adolescencia en Barcelona hacia 1970, autobiografía, ed. Destino, 2007', 'Ladrona de rosas, biografía de Clarice Lispector, ed. La Esfera de los Libros, 2010', 'Los otros son más felices, novela, ed. Destino, 2011', 'Una vida subterránea. Diario 1991-1994.', 'El silencio de las madres, ensayo, ed. Aresta, 2014', 'Todos llevan máscara. Diario 1995-1996.', 'A mí no me iba a pasar, ed. B (Penguin Random House), 2019']
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

.obras,
.honores {
    list-style-position: inside;

}
</style>
