import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface RecortePrensa {
  id: number;
  titulo: string;
  fuente: string;
  fecha?: string;
  imagen: string;
  textoTranscrito: string;
}

@Component({
  selector: 'app-textos-prensa',
  standalone: true,
  imports: [],
  templateUrl: './textos-prensa.component.html',
  styleUrl: './textos-prensa.component.css'
})
export class TextosPrensaComponent implements AfterViewInit {

  recortes: RecortePrensa[] = [
    {
      id: 30,
      titulo: 'Rafael Lucena presenta en la galería José Pedraza su nueva colección de pinturas',
      fuente: 'La crónica de Montilla',
      fecha: 'Diciembre de 2018',
      imagen: 'assets/images/prensa/030.jpg',
      textoTranscrito: 'La Galería de Arte José Pedraza acogió hasta el pasado 13 de diciembre una nueva exposición de pintura, en este caso del artista rambleño Rafael Lucena, quien apostó por la sala decana de la provincia para mostrar "El ansia de vivir", una veintena de pinturas de técnica mixta y en pequeño o mediano formato.'
    },
    {
      id: 0,
      titulo: 'Rafael Lucena cautiva con las miradas de sus perros en "Emperrado"',
      fuente: 'Lucena Hoy, edición digital',
      fecha: '17 de noviembre de 2012',
      imagen: 'assets/images/prensa/000.jpg',
      textoTranscrito: 'Se destaca la técnica depurada de Rafael Lucena, su trabajo pulcro y ordenado, el academicismo de su dibujo, el estudio de las anatomías de las figuras "humanas o animales" que representa en sus cuadros o la creación de una atmósfera mágica en sus obras, que esta vez buscan la verdad en la mirada de sus perros.'
    },
    {
      id: 1,
      titulo: 'Emperrado',
      fuente: 'Manuel Lara Cantizani',
      fecha: '2012',
      imagen: 'assets/images/prensa/001.jpg',
      textoTranscrito: 'Emperrado en una curiosa nueva melancolía. Es de ojos, principalmente, de miradas como espejos con alma. Emperrado en seguir siendo Rafael Lucena, un pintor contemplativo, exacto y sereno que modula la fuerza de sus trazos para que estos perros hablen desde la piel. Él sabrá, el arte. Rafael Lucena está emperrado en ser él, Rafael Lucena.'
    },
    {
      id: 2,
      titulo: 'El pintor y su misterio',
      fuente: 'Rafael del Campo Vázquez',
      fecha: '2010',
      imagen: 'assets/images/prensa/002.jpg',
      textoTranscrito: 'Cuando me acerco a la pintura de Rafael Lucena, y contemplo sus toros, magistralmente creados con brevísimas líneas, con admirable economía de colores, con buscada escasez de personajes y de adjetivos, ayuno de tramoyas y de tipismos, columbro el misterio que el pintor quiere acercarnos. Nada, según me creo, es lo que parece en la pintura de Lucena y sus toros, ya sean furiosos o martirizados, perplejos o agonizantes, esperanzados o vencidos, operan como metáfora o símbolo del hombre, del ser humano, de su dignidad y su grandeza ante la vida y, sobre todo, de su valor ante esa línea trémula a partir de la cual todos los misterios son desvelados: la muerte.'
    },
    {
      id: 3,
      titulo: 'La anatomía de los dioses',
      fuente: 'Fernando González Viñas',
      fecha: '2010',
      imagen: 'assets/images/prensa/003.jpg',
      textoTranscrito: 'Los toros que vemos en esta exposición no están vivos ni están muertos, o quizá sería mejor decir que están vivos y están muertos. De una u otra forma están majestuosamente alejados del tiempo. Son como esos 300 espartanos que valían tanto, vivos, como muertos; vivos esperando entrar en la Historia; muertos, con sus carnes extrañamente palpitantes, proclamando su inmortalidad. Algún capote, alguna muleta, alguna banderilla que aparecen en la obra del artista no son sino manchas de color que sus toros quieren devorar con su musculatura, revolviéndose, embistiendo, saliéndose del cuadro si fuese necesario. Como si los espartanos luchasen con sus manos vacías frente al poderoso y bien acorazado ejército persa.'
    },
    {
      id: 4,
      titulo: 'La elegancia de un carácter',
      fuente: 'Ángel María Jiménez Lucena',
      fecha: '2010',
      imagen: 'assets/images/prensa/004.jpg',
      textoTranscrito: 'Rafael Lucena es una persona de criterio recto, claro y limpio. Te mira de frente y no te miente nunca. Es sincero de pies a cabeza, en sus manos los pinceles se sienten a gusto, se recrean, la pintura fluye rítmicamente a golpe de corazón a través de unos dedos que parecen tocados por un don divino.'
    },
    {
      id: 5,
      titulo: '"El juego de la vida", tauromaquia de Rafael Lucena en la Galería Carmen del Campo',
      fuente: 'InfoENPUNTO, edición digital',
      fecha: 'Mayo de 2010',
      imagen: 'assets/images/prensa/005.jpg',
      textoTranscrito: 'En la serie "Juego de la vida" de Rafael Lucena, el único protagonista es el toro bravo. Son dibujos pintados con óleo, grafito, carbón, tintas, acrílico, sanguina, lápiz de color o pastel sobre tabla o tela en los que retrata al toro, a su figura, nervios, poses y movimiento, con la maestría de quién conoce no sólo las técnicas empeñadas en el oficio, sino el mundo del toro desde la piara en el campo a las faenas que colman su andadura vital, cargada de ritos y de mitos.'
    },
    {
      id: 6,
      titulo: 'Carmen del Campo exhibe cuadros taurinos de Rafael Lucena',
      fuente: 'Diario Córdoba',
      fecha: '7 de Mayo de 2010',
      imagen: 'assets/images/prensa/006.jpg',
      textoTranscrito: 'La Galería Carmen del Campo inauguró el pasado miércoles la muestra individual de Rafael Lucena, compuesta por una treintena de obras englobadas bajo el título El juego de la vida, que tiene un único e indiscutible protagonista: el toro bravo. A través de él, el artista pretende mostrar las emociones y vivencias que este bello animal experimenta a lo largo de su vida, desde los cuidados más esmerados durante su crianza hasta su trágico final en la plaza. En todas estas situaciones su carácter y su anatomía rebosan belleza y elegancia, cualidades apreciables en las obras de Rafael Lucena.'
    },
    {
      id: 7,
      titulo: '"El juego de la vida", en la Galería Carmen del Campo',
      fuente: 'Día de Córdoba',
      fecha: '2010',
      imagen: 'assets/images/prensa/007.jpg',
      textoTranscrito:'Recorte del periódico Día de Córdoba en el que se presenta la exposición "El juego de la vida".'
    },
    {
      id: 8,
      titulo: 'Rafael Lucena expone en la Galería José Pedraza',
      fuente: 'Diario Córdoba',
      fecha: '2009',
      imagen: 'assets/images/prensa/008.jpg',
      textoTranscrito:'Debido al grafismo dominante en casi todas las obras, la gama cromática queda reducida a los tonos grisessobre fondos mayoritarimente ocres con leves toquesde rojos intensos y suaves azules, verdes, amarillos y marrones. Con ello,consigue un resultado final de "gran exquisitez, sobriedad, fuerza y un alto sentido poético".'
    },
    {
      id: 9,
      titulo: 'Taurus II',
      fuente: 'Yaiza Martínez',
      fecha: 'Febrero de 2009',
      imagen: 'assets/images/prensa/009.jpg',
      textoTranscrito: 'En la observación de cualquier obra de arte subyace la necesidad de encontrarse con uno mismo. Los cuadros de Lucena logran, con gran maestría, recomponer la intensidad simbólica del animal, y expresar la lucha contra su enemigo. En sus obras, Rafael Lucena es capaz de reflejar el significado simbólico del toro. El arte de Lucena cumple y rellena nuestra necesidad.'
    },
    {
      id: 10,
      titulo: 'Taurus II, nueva muestra de Rafael Lucena',
      fuente: 'Montilla Digital/Diario Córdoba',
      fecha: '2009',
      imagen: 'assets/images/prensa/010.jpg',
      textoTranscrito:'El toro, mezcla de nobleza y dureza, sin entrar en el juego de la tauromaquia, aunque visto desde esa óptica y de los contrastes que existen sobre el ruedo: la convivencia de vida y muerte. Pinturas y dibujos con una fuerte carga simbólica, "una suerte de alegoría sobre las cuestiones que, mediante la representación de lo taurino, más atañen al ser humano: la vida y la muerte, la libertad y el destino, la conciencia, la soledad y el amor".'
    },
    {
      id: 11,
      titulo: 'Pinturas de Rafael Lucena',
      fuente: 'El punto de las artes',
      fecha: '2006',
      imagen: 'assets/images/prensa/011.jpg',
      textoTranscrito:'El método sobre el que experimenta y logra establecer un discurso, se concreta en una pintura que recala en la cercanía de la realidad y, a su vez, en la complejidad intrínseca de su estructura visual. La convergencia de todas las constantes descritas se concretan en un modo plástico que nos seduce por la belleza de su resolución plástica y el silencio inherente a su peculiar desarrollo narrativo.'
    },
     {
      id: 32,
      titulo: 'Con aire metafísico',
      fuente: 'Montilla Semanal',
      fecha: 'Febrero de 2006',
      imagen: 'assets/images/prensa/032.jpg',
      textoTranscrito:'Rafael Lucena nos demuestra, una vez más, su gran habilidad técnica, con absoluto dominio del dibujo y el color, y su singular quehacer creativo. En lo que al color se refiere, nada estridente y sí pleno de sobriedad, esta serie de pinturas se puede dividir en dos grupos: uno, el formado por las obras de tonos cálidos, donde el rojo sobresale de los verdes y ocres; y el otro, de tonos fríos, donde los azules y verdes toman el protagonismo, combinados con los ocres y grises.'
    },
    {
      id: 12,
      titulo: 'José Pedraza muestra la obra de Rafael Lucena',
      fuente: 'Diario Córdoba',
      fecha: '15 de febrero de 2006',
      imagen: 'assets/images/prensa/012.jpg',
      textoTranscrito:'La composición de todas las pinturas es minimalista, emplea pocos elementos para conseguir una máxima expresión lo que acentúa con la creación de una atmósfera que envuelve a los personajes a la panorámica que los rodea. De esta forma, se produce una sensación de misterio que transmite al espectador serenidad y equilibrio. Las obras presentadas consiguen un efecto final de lirismo dentro de la sobriedad y de la escasa presencia de elementos que utiliza.'
    },
    {
      id: 13,
      titulo: 'Rafael Lucena muestra en Montilla su pintura marcada por los tonos neutros',
      fuente: 'ABC',
      fecha: '7 de febrero de 2006',
      imagen: 'assets/images/prensa/013.jpg',
      textoTranscrito:'Lucena ha elaborado sus obras a base de tintas sobre papel previamente envejecido y preparado. En ocasiones ha añadido óleo también, pero no es lo frecuente. Dominan la muestra unos paisajes que el autor toma de su memoria. Son lugares que ha visto o visitado y que después reconstruye a partir del recuerdo. Nunca, como sí hacen otros pintores, mediante fotografías.'
    },
    {
      id: 14,
      titulo: 'Rafael Lucena lleva a Montilla sus paisajes "en equilibrio"',
      fuente: 'El Día de Córdoba',
      fecha: '4 de febrero de 2006',
      imagen: 'assets/images/prensa/014.jpg',
      textoTranscrito:'Se trata de una colección "muy sobria, con paisajes muy serenos sin temas que alteren o cosas que choquen; sin colores fuertes. Quería una exposición marcada por la elegancia", explicó el pintor, que ha incluido entre sus paisajes rurales varias marinas imaginadas en la misma línea que las demás piezas.'
    },
    {
      id: 15,
      titulo: 'Lucena eterniza la dualidad del toro en su nueva exposición',
      fuente: 'El Semanario — La Calle de Córdoba',
      fecha: 'Mayo de 2004',
      imagen: 'assets/images/prensa/015.jpg',
      textoTranscrito:'"Pocas veces profundizo en la fiesta nacional, no me explayo demasiado en los lances taurinos aunque reconozco que hay algunos por los que siento predilección, como es la suerte de varas, porque es donde veo contrastes que me interesan, el toro puede ser al mismo tiempo fiero y dulce". En este punto, Rafael Lucena insiste en que quiere transmitir sensaciones plásticas y quizá metafóricas que el animal plantea a lo largo de su vida, la sensación de ver al toro en libertad en el campo es algo positivo, sin dejar de lado otros elementos menos bucólicos como pueden ser la humillación, la soledad, el aislamiento o el sometimiento de la res cuando se convierte en centro de atención en el ruedo.'
    },
    {
      id: 16,
      titulo: 'Pintor del alma humana a través de los ojos del toro',
      fuente: 'M.L.',
      fecha: '2004',
      imagen: 'assets/images/prensa/016.jpg',
      textoTranscrito:'Rafael Lucena (La Rambla, 1965) es un pintor algo atípico; adora la fisonomía y la fuerza que desprenden esas grandes moles de bravura (los toros) pero no participa de la fiesta taurina, sin la cual "estos animales tampoco serían nada". Esto no impide que sus imágenes —que hasta el 12 de junio se pueden contemplar en la galería Carmen del Campo— desprendan una poética de los sentimientos muy especial en la que no faltan: la libertad, soledad, envidia, humildad o humillación, entre otros.'
    },
    {
      id: 17,
      titulo: 'Pinturas recientes de Rafael Lucena',
      fuente: 'Ángel Luis Pérez Villén',
      fecha: '2004',
      imagen: 'assets/images/prensa/017.jpg',
      textoTranscrito:'Equilibrio que se traslada a otros ámbitos, en los que se aprecia el ayuntamiento normativo entre el albero y la sangre, el gesto y la geometría, la pintura y el dibujo. Equilibrio que se rompe para horadar el ojo perenne que nos brinda la visión panorámica de la escena, que nos hace oscilar hasta adoptar la distancia correcta para advertir el escorzo o, después de un primer vistazo, deleitarnos en la sutura que el grafito dibuja sobre la piel de la pintura, para transmitir el pulso natural entre dos fuerzas contrapuestas.'
    },
    {
      id: 18,
      titulo: 'Silencio ocre del minotauro',
      fuente: 'Manuel Lara Cantizani',
      fecha: 'Mayo de 2004',
      imagen: 'assets/images/prensa/018.jpg',
      textoTranscrito:'Un toque de vanguardia para trazos clásicos que rebosan texturas y ternura. Arte puro que el corazón inflama con la llama de una fuerza animal. Mitad hombre, mitad toro; el Minotauro que pinta.'
    },
    {
      id: 19,
      titulo: 'Rafael Lucena exhibe sus obras taurinas en Carmen del Campo',
      fuente: 'M.L.',
      fecha: '2004',
      imagen: 'assets/images/prensa/019.jpg',
      textoTranscrito:'El artista cordobés Rafael Lucena inaugura hoy en la galería Carmen del Campo Taurus, una exposición donde exhibe su visión del toro, animal que utiliza para "establecer un paralelismo con las sensaciones del ser humano". La muestra congrega un total de 23 obras de diversas técnicas y soportes que estarán expuestas en la galería cordobesa hasta el 12 junio, coincidiendo con el mayo festivo cordobés.'
    },
    {
      id: 20,
      titulo: '«La esencia del toro puede establecer paralelismos con el ser humano»',
      fuente: 'ABC',
      fecha: '13 de mayo de 2004',
      imagen: 'assets/images/prensa/020.jpg',
      textoTranscrito:'Entrevista para ABC. Vida y muerte, lucha y nobleza se funden en la propuesta de Rafael Lucena, el pintor cordobés que hoy presenta una treintena de lienzos en la galería Carmen del Campo basados en la figura del toro, animal que establece, salvando distancias, paralelismo con la propia singularidad humana.'
    },
    {
      id: 21,
      titulo: 'Accésit en el Premio CECO de pintura',
      fuente: 'El Día de Córdoba',
      fecha: '21 de febrero de 2003',
      imagen: 'assets/images/prensa/021.jpg',
      textoTranscrito:'El jurado, que dio a conocer el fallo anoche durante un acto celebrado en la Fundación Antonio Gala, decidió asimismo otorgar tres accésits, de 1.500 euros cada uno, a Rui Manuel Gomes Pereira (Portugal, 1973), por Antiguos atlantes; a José Ramón Gallardo Santos (Madrid, 1956), por Hagiografía del santo niño de la suerte y al artista cordobés Rafael Lucena Jiménez (Lucena, 1965), por el cuadro de temática taurina Encierro II. El jurado del galardón estuvo formado, entre otros, por el pintor Antonio Povedano y la poeta y directora de la Fundación Gala Elsa López.'
    },
    {
      id: 22,
      titulo: 'Lucena, en la José Pedraza',
      fuente: 'Ángel Luis Pérez Villén',
      fecha: '2001',
      imagen: 'assets/images/prensa/022.jpg',
      textoTranscrito:'Bodegones, paisajes y figuras constituyen el amplio abanico de intereses de género de la pintura de Rafael Lucena. Una pintura que sabe alternar los formatos sin sobresaltar al público, que se adentra en la composición equilibrando las intervenciones, moderando el acento matérico, dibujando mediante trazos indelebles, haciendo gala de la delicadeza de la factura y de los leves toques de color, del tratamiento superficial de la pintura y de las sugerencias de la representación'
    },
    {
      id: 31,
      titulo: 'Reapertura con la obra de Lucena',
      fuente: 'Montilla Semanal',
      fecha: 'Octubre de 2001',
      imagen: 'assets/images/prensa/031.jpg',
      textoTranscrito:'José Pedraza, tras 20 meses de paréntesis, reabre las puertas de esta galería con la exposición del artista Rafael Lucena.'
    },
    {
      id: 23,
      titulo: 'El mundo del arte vuelve a Montilla',
      fuente: 'Concha Lara',
      fecha: '2001',
      imagen: 'assets/images/prensa/023.jpg',
      textoTranscrito:'El próximo sábado, 6 de octubre, abrirá sus puertas con una muestra pictórica del artista rambleño, Rafael Lucena, ganador del I Premio Nacional de Pintura Antonio del Castillo, de Córdoba. La exposición se mantendrá abierta a los visitantes hasta el próximo día 26 de octubre, en horario de 18 a 21,30 horas de lunes a viernes, y de 12 a 14, los sábados.'
    },
    {
      id: 24,
      titulo: 'La Fundación Rafael Botí adquiere catorce obras de artistas cordobeses',
      fuente: 'ABC',
      fecha: '18 de noviembre del 2000',
      imagen: 'assets/images/prensa/024.jpg',
      textoTranscrito:'Las obras seleccionadas son «El pecado», de Concha Adan; «Sol de mediodía», de Inmaculada Caro; «La constelación de tu piel», de Juan José Caro; «Cuaderno de viaje», de Francisco Javier Flores; «Ausente 2», de Nieves Galiot; «Hacer números», de José María García; «Batalla», de Manuel Garcés y «Roma», de Marcial Gómez. Además, fueron adquiridas «Habitáculo», de Jacinto Lara; «Metamorfosis», de Rafael Lucena; «Encuentro», de Cristóbal Olmedo; «Refugio», de María Parejo; «Claveta en línea naranja», de Cristóbal Povedano y «Nostalgia», de Francisco Rubio.'
    },
    {
      id: 25,
      titulo: 'Muestra de pinturas de Rafael Lucena',
      fuente: 'J.M.García, Diario Córdoba',
      fecha: '5 de septiembre del 2000',
      imagen: 'assets/images/prensa/025.jpg',
      textoTranscrito:'La muestra está compuesta por más de 40 obras, pertenecientes a distintas etapas creativas del autor. La sala principal acoge una serie de cuadros en los que Lucena utiliza técnicas muy distintas, que van de la sanguina al óleo, pasando por el gouaché, acuarela o carboncillo, mostrándose como un artista muy versátil y con un dibujo muy fluido. Flores, figuras humanas y paisajes forman el grueso de esta parte de la exposición. La segunda sala está monográficamente dedicada al mundo de la tauromaquia.'
    },
    {
      id: 26,
      titulo: 'La Diputación adquiere obras plásticas de 17 artistas cordobeses',
      fuente: 'Diario Córdoba',
      fecha: '27 de diciembre de 1998',
      imagen: 'assets/images/prensa/026.jpg',
      textoTranscrito:'Un total de 17 artistas cordobeses han resultado beneficiados por la bolsa de compra llevada a cabo por la Diputación como alternativa a la Bienal convocada por la institución provincial cada año. La bolsa invierte 4,8 millones de pesetas en las obras artísticas, cifra en que autores y especialistas han tasado la colección, sobre un presupuesto total que ascendía a cinco millones de pesetas.'
    },
    {
      id: 27,
      titulo: 'La veracidad y fuerza expresiva de la tauromaquia de Rafael Lucena',
      fuente: 'Diario Córdoba',
      fecha: '1998',
      imagen: 'assets/images/prensa/027.jpg',
      textoTranscrito:'La nota que creo más destacada en estas hermosas obras es su expresividad, que nos habla a través de un profundo sentimiento, resoluciones rápidas y de gran fuerza vital. La expresión ha jugado siempre un importantísimo papel en el mundo del arte.'
    },
    {
      id: 28,
      titulo: 'Rafael Lucena, primer premio de Artes Plásticas Ciudad de Córdoba',
      fuente: 'El mundo',
      fecha: '15 de octubre de 1997',
      imagen: 'assets/images/prensa/028.jpg',
      textoTranscrito:'El primer premio de Artes Plásticas Ciudad de Córdoba Antonio del Castillo, que otorga el Ayuntamiento de Córdoba, ha recaído en Rafael Lucena, profesor de dibujo y pintura, por Taurus III. Al certamen concurrieron 67 artistas, 29 de los cuales han sido seleccionados para conformar la exposición. Las obras tienen en común la temática de la lidia, como homenaje a Manolete.'
    },
    {
      id: 29,
      titulo: 'Rafael Lucena, ganador del I Premio de Pintura "Antonio del Castillo"',
      fuente: 'Diario Córdoba',
      fecha: '15 de octubre de 1997',
      imagen: 'assets/images/prensa/029.jpg',
      textoTranscrito:'La obra ganadora ha sido definida por su autor como un cuadro "espontáneo, quería que tuviera mucha fuerza. Tiene mucha textura, y he hecho muchos bocetos con la idea que quería plasmar, sin nada concreto". En Taurus III puede verse un toro de lidia abatido en primer plano, con un fondo en el que se representan algunos motivos taurinos. En este sentido, Lucena explica que "lo que más me gusta de los toros es el toro en sí mismo. Cualquier obra mía gira en torno al animal, pocas veces aparece la plaza o la pose torera, aunque en la obra ganadora, en la parte superior hay algunas alusiones al arte del toreo".'
    },
  ];

  imagenLightbox: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      this.scrollToFragment(fragment);
    }

    this.route.fragment.subscribe((id) => {
      if (id) {
        this.scrollToFragment(id);
      }
    });
  }

  private scrollToFragment(id: string): void {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  abrirLightbox(url: string): void {
    this.imagenLightbox = url;
  }

  cerrarLightbox(): void {
    this.imagenLightbox = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cerrarLightbox();
  }

}