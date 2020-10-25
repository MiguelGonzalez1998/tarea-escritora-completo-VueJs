<template>
<div class="container">
    <b-img src="@/assets/img/escritoras/MargueriteYourcenar2.jpg" fluid center class="mt-4"></b-img>
    <h1>Marguerite Cleenewerck de Crayencour</h1>
    <p>(Bruselas, Bélgica; 8 de junio de 1903-Bar Harbor, Mount Desert Island, Maine, Estados Unidos; 17 de diciembre de 1987), conocida como Marguerite Yourcenar (primero seudónimo, inventado con las letras de "Crayencour" menos la "c", y luego de nacionalizarse, nombre oficial), fue una novelista, ensayista, poeta, dramaturga y traductora belga nacionalizada estadounidense en 1947.1​Sobresale por sus novelas históricas escritas con un tono poético y rasgos de erudición.2​

        Fue una de las escritoras más respetadas en lengua francesa y la primera mujer en entrar en la Academia de este país.3​ Publicó novela, ensayo, poesía y tres volúmenes de memorias familiares que tuvieron una gran acogida por parte de la crítica y los lectores. Su obra más famosa es la novela histórica Memorias de Adriano (1951).</p>

    <p>A partir de 1919 abandona su apellido real y empieza a firmar como Marguerite Yourcenar, siendo este un anagrama de Crayencour (sin la "c") que creó conjuntamente con su padre. Su primera novela, Alexis o el tratado del inútil combate, fue publicada en 1929 poco después del fallecimiento de su padre en Lausana, el cual la leyó poco antes de morir y la calificó de "límpida". Esta breve obra fue bien acogida por la crítica, especialmente por Edmond Jaloux, que señaló las influencias de Gide en su temática y destacó su estilo clásico y austero. Se trata de una larga carta en la cual un hombre, músico acreditado, le confiesa a su esposa su homosexualidad y su decisión de abandonarla en un deseo de verdad. La esposa, Monique, no es otra que Jeanne de Vietinghoff, amiga íntima de su madre y que a la muerte de esta, los invita a su padre y a ella a pasar los veranos en la casa de vacaciones de su familia en la playa de Scheveningen, ya que se habían prometido con su madre ocuparse de los hijos de la otra, si una de ellas moría. </p>
    <p> La situación de su matrimonio con un barón de la antigua familia livonia de los Vietinghoff, Conrad von Vietinghoff, era similar a la descrita en la novela y tenía dos hijos. El mayor Egon, de la misma edad que Marguerite, que después fue pintor y filósofo y el pequeño Alexis, que murió muy pronto. Su padre se enamora de Jeanne, aunque se distancian pronto y esta representa para Marguerite durante toda su vida el modelo de belleza y de inteligencia femenina. Jeanne murió en 1926, a los 50 años, de cáncer de hígado. Le dedicó su siguiente obra La nueva Eurídice publicada en 1931, por la editorial Grasset, gracias al escritor André Fraigneau, lector de la editorial, cuatro años más joven que ella, con el cual establecerá a partir de entonces una intensa relación literaria, que ella habría deseado llevar más allá, a pesar de las inclinaciones homosexuales de los dos.</p>

    <p>En 1939, para que pudiera escapar de los problemas bélicos, su mejor amiga en ese momento, una traductora norteamericana llamada Grace Frick a la que había conocido en París en 1937, la invita a Estados Unidos, donde dará clases de Literatura comparada en la ciudad de Nueva York. Yourcenar era bisexual,5​ ella y Frick se harán amantes y seguirán juntas hasta la muerte de esta en 1979 a consecuencia de un cáncer de mama.6​ Se instalan en Hartford (Connecticut), donde Grace es jefe de estudios de un College de la Universidad. En 1943, debido a que ya ha gastado toda su herencia, y para no depender completamente de Frick, Marguerite comienza a trabajar como profesora de francés e italiano en el College femenino Sarah Lawrence, en Bronxville, al norte de Nueva York, un establecimiento muy elitista, que utiliza pedagogía avanzada y en el que también enseñó por aquellos años Mary McCarthy. Enseña allí hasta 1953, con un paréntesis de un año en 1950, que utilizó para acabar la redacción de las Memorias de Adriano.</p>

    <p>En 1947 obtuvo la nacionalidad norteamericana y comienzan a pasar los veranos en Mount Desert Island en la costa de Maine, donde Grace comprará una casa que llaman Petite Plaisance, en la que se instalan definitivamente a comienzos de los años cincuenta. En 1951 publica en París su muy documentada novela histórica Mémoires d'Hadrien (en español Memorias de Adriano), en la que estuvo trabajando a lo largo de una década. En Memorias de Adriano, Yourcenar recrea la vida y muerte de una de las figuras más importantes del mundo antiguo, el emperador romano Adriano. La obra está escrita a modo de larga carta del emperador a su nieto adoptivo y futuro sucesor, Marco Aurelio. Adriano le explica su pasado, describiendo sus triunfos, su amor por Antínoo y su filosofía. Memorias de Adriano fue una novela pionera que ha servido de influencia en la posterior novelística histórica y se ha convertido en una obra maestra de la literatura moderna.</p>
    <p>La novela Memorias de Adriano obtuvo un éxito inmediato y una gran acogida por parte de la crítica. Su presentación fue el motivo para volver a Francia después de doce años de ausencia. A partir de entonces ella y Grace viajan a Europa casi todos los años en invierno y primavera para dar conferencias, reanudar los viajes a los que era tan aficionada y también para evitar los rigurosos inviernos de Mount Desert. Además de Francia, vuelve a Suiza e Italia y visita también Holanda y Escandinavia. En Leningrado se siente decepcionada al constatar la presencia asfixiante de un estado policial. A principios de 1954 visitan Lisboa, después pasan la Semana Santa en Sevilla y van a Granada, donde visitan el lugar probable del asesinato de Federico García Lorca, dirigiendo una emotiva carta al respecto a la hermana del poeta.</p>
    <p>Ganadora de los premios Femina y Erasmus, en 1980 fue la primera mujer elegida miembro de número de la Academia francesa (cuyos miembros son llamados «los inmortales»), aunque desde 1970 ya pertenecía a la Academia belga. Su elección fue propuesta por Jean d'Ormesson, que tuvo que vencer la oposición de casi todo el resto de miembros, para ocupar el sillón dejado vacante por Roger Caillois, con quien Marguerite había tenido relaciones cordiales antes de la guerra y sobre quien versó su brillante discurso de ingreso, al que asistió el presidente de la República, Valéry Giscard d'Estaing. Luego también conoció y mantuvo muy buena relación con François Mitterrand, que era un lector apasionado de su obra.</p>

    <h2>Obras</h2>
    <ul class="obras">
        <li v-for="obra in obras">{{obra}}</li>
    </ul>

</div>
</template>

<script>
export default {
    name: 'Marguerite',
    data() {
        return {
            obras: ['El jardín de las quimeras (Le jardin des chimères) (1921) (poemas)', 'Los dioses no han muerto (Les dieux ne sont pas morts) (1922) (poemas)', 'Alexis o el tratado del inútil combate (Alexis ou le traité du vain combat) (1929) (novela)', 'La nueva Eurídice (La nouvelle Eurydice) (1931)', 'El denario del sueño (1934) (novela)', 'La muerte conduce la trama (1934) (novela)', 'Fuegos (Feux) (1936) (poemas en prosa)', 'Los sueños y las suertes (Les songes et les sorts) (1938)', 'Cuentos orientales (Nouvelles orientales) (1938)', 'El tiro de gracia (Le coup de grâce) (1939)', 'Memorias de Adriano (Mémoires d\'Hadrien', 'Electra o la caída de las máscaras (Électre ou la chute des masques) (1954)', 'Las caridades de Alcipo (Les charités d\'Alcippe) (1956)', 'A beneficio de inventario (1962) (ensayos)', 'Opus nigrum (L\'Œuvre au noir) (1968) (Prix Femina)', 'Teatro I y Teatro II (1971) (obras teatrales)', 'Recordatorios (Souvenirs pieux) (1973) (primera parte de la trilogía familiar El laberinto del mundo)', 'Archivos del norte (Archives du Nord) (1977) (segunda parte de la trilogía familiar El laberinto del mundo)', 'El cerebro negro de Piranèse (Le cerveau noir de Piranèse) (1979) (ensayo)', 'Mishima o la visión del vacío (Mishima ou la vision du vide) (1980) (ensayo)', 'Como el agua que fluye (Comme l\'eau qui coule: Anna, soror…, Un homme obscur, Une belle matinée) (1982)', 'El tiempo, gran escultor (Le temps, ce grand sculpteur) (1983) (ensayos)', '¿Qué? La eternidad (Quoi? L\'Éternité) (1988) (tercera parte de la trilogía familiar El laberinto del mundo, publicada póstumamente; inacabada)', 'Peregrina y extranjera (En pèlerin et ètranger) (1989) (recopilación póstuma de ensayos).', 'Una vuelta por mi cárcel (Le tour de la prison) (1991) (recopilación realizada por la autora de catorce textos de viajes, la mayor parte sobre Japón y el último inacabado, publicada póstumamente).']
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

.obras li {
    list-style-position: inside;
}
</style>
