/* =========================
   BOTÓN SIP
========================= */

function respuestaSip() {

    const mensaje =
        document.getElementById("mensaje");

    mensaje.textContent =
        "Mejor te pongo a prueba... 😏❤️";

}


/* =========================
   IR A LAS PREGUNTAS
========================= */

function irAPrueba() {

    window.location.href =
        "preguntas.html";

}


/* =========================
   PREGUNTAS
========================= */

const preguntas = [

    {
        pregunta: "¿Cuál fue uno de nuestros primeros recuerdos juntos?",
        opciones: [
            "Alternar en la hack ❤️",
            "Una llamada",
            "Una conversación"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es algo que me encanta de ti?",
        opciones: [
            "Tu sonrisa",
            "Tu forma de ser",
            "Todo de ti ❤️"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué me hace más feliz?",
        opciones: [
            "Verte sonreír ❤️",
            "Dormir",
            "Jugar videojuegos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué quiero seguir construyendo contigo?",
        opciones: [
            "Una colección",
            "Un futuro juntos ❤️",
            "Una casa de muñecas"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué siento cuando estoy contigo?",
        opciones: [
            "Aburrimiento",
            "Felicidad ❤️",
            "Sueño"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cuántas veces te elegiría?",
        opciones: [
            "Una vez",
            "Dos veces",
            "Todas las veces ❤️"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué quiero conservar de nosotros?",
        opciones: [
            "Nuestros recuerdos ❤️",
            "Nada",
            "Solo las fotos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué lugar ocupas en mi corazón?",
        opciones: [
            "Un pequeño lugar",
            "Un lugar especial",
            "Todo mi corazón ❤️"
        ],
        correcta: 2
    },

    {
        pregunta: "Si pudiera volver al principio, ¿qué haría?",
        opciones: [
            "Elegirte otra vez ❤️",
            "Cambiar de camino",
            "Esperar"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Eres el amor de mi vida?",
        opciones: [
            "Sí ❤️",
            "Obviamente ❤️",
            "Para siempre ❤️"
        ],
        correcta: 1
    }

];


let preguntaActual = 0;

let respuestasCorrectas = 0;

let respuestaSeleccionada = null;


/* =========================
   MOSTRAR PREGUNTA
========================= */

function mostrarPregunta() {

    const pregunta =
        preguntas[preguntaActual];

    const quiz =
        document.getElementById("quiz");

    quiz.innerHTML = `

        <h1 class="pregunta-titulo">
            ${pregunta.pregunta}
        </h1>

        <div class="opciones">

            ${pregunta.opciones.map(
                (opcion, index) => `

                <button
                    class="opcion"
                    onclick="seleccionarRespuesta(${index})">

                    ${opcion}

                </button>

            `).join("")}

        </div>
    `;


    document.getElementById("contador")
        .textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;


    document.getElementById("progreso")
        .style.width =
        `${((preguntaActual + 1) / preguntas.length) * 100}%`;


    respuestaSeleccionada = null;

}


/* =========================
   SELECCIONAR RESPUESTA
========================= */

function seleccionarRespuesta(index) {

    respuestaSeleccionada = index;

    const botones =
        document.querySelectorAll(".opcion");

    botones.forEach((boton, i) => {

        boton.classList.remove("seleccionada");

        if (i === index) {

            boton.classList.add("seleccionada");

        }

    });

}


/* =========================
   SIGUIENTE PREGUNTA
========================= */

function siguientePregunta() {

    if (respuestaSeleccionada === null) {

        alert("Primero tienes que responder ❤️");

        return;

    }


    if (
        respuestaSeleccionada ===
        preguntas[preguntaActual].correcta
    ) {

        respuestasCorrectas++;

    }


    preguntaActual++;


    if (preguntaActual < preguntas.length) {

        mostrarPregunta();

    } else {

        terminarQuiz();

    }

}


/* =========================
   TERMINAR
========================= */

function terminarQuiz() {

    document.getElementById("quiz")
        .innerHTML = "";

    document.getElementById("siguiente")
        .style.display = "none";


    document.getElementById("contador")
        .textContent = "Prueba terminada ❤️";


    document.getElementById("progreso")
        .style.width = "100%";


    document.getElementById("resultado")
        .innerHTML = `

            <h2>
                ¡Terminaste! ❤️
            </h2>

            <p>
                Obtuviste
                <strong>
                    ${respuestasCorrectas}
                </strong>
                de
                <strong>
                    ${preguntas.length}
                </strong>
                respuestas correctas.
            </p>

            <p>
                Pero hay algo que ya sabía desde
                antes de empezar...
            </p>

            <button
                class="btn-romantico"
                onclick="irAFinal()">

                Por último pícame ❤️

            </button>

        `;

}


/* =========================
   PÁGINA FINAL
========================= */

function irAFinal() {

    window.location.href =
        "final.html";

}


/* =========================
   CORAZONES
========================= */

function crearCorazon() {

    const contenedor =
        document.querySelector(".corazones");

    if (!contenedor) return;


    const corazon =
        document.createElement("div");


    corazon.classList.add("corazon");


    corazon.innerHTML =
        Math.random() > 0.5
        ? "♥"
        : "♡";


    corazon.style.left =
        Math.random() * 100 + "%";


    corazon.style.fontSize =
        (15 + Math.random() * 30) + "px";


    corazon.style.animationDuration =
        (5 + Math.random() * 7) + "s";


    contenedor.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 12000);

}


setInterval(crearCorazon, 500);


/* =========================
   INICIAR QUIZ
========================= */

if (
    document.getElementById("quiz")
) {

    mostrarPregunta();

}