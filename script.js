// ==========================================
// ELEMENTOS
// ==========================================

const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const btnComenzar = document.getElementById("btnComenzar");

const carta = document.getElementById("carta");
const btnCarta = document.getElementById("btnCarta");
const mensajeCarta = document.getElementById("mensajeCarta");

const visor = document.getElementById("visor");
const fotoGrande = document.getElementById("fotoGrande");

const cerrarVisor = document.getElementById("cerrarVisor");
const fotoAnterior = document.getElementById("fotoAnterior");
const fotoSiguiente = document.getElementById("fotoSiguiente");

const contador = document.getElementById("contador");

const volverInicio = document.getElementById("volverInicio");


// ==========================================
// FOTOS
// ==========================================

const fotos = [
    "img/foto1.jpeg",
    "img/foto2.jpeg",
    "img/foto3.jpeg",
    "img/foto4.jpeg",
    "img/foto5.jpeg",
    "img/foto6.jpeg"
];

let fotoActual = 0;


// ==========================================
// ABRIR LA EXPERIENCIA
// ==========================================

btnComenzar.addEventListener("click", () => {

    inicio.style.display = "none";

    contenido.classList.add("mostrar");

    crearParticulas();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// PARTÍCULAS / FLORES
// ==========================================

function crearParticulas() {

    const contenedor =
        document.getElementById("particulas");

    const simbolos = [
        "🌻",
        "🌼",
        "💛",
        "✨",
        "🌿"
    ];

    setInterval(() => {

        const particula =
            document.createElement("div");

        particula.classList.add("particula");

        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];

        particula.style.left =
            Math.random() * 100 + "vw";

        particula.style.fontSize =
            (15 + Math.random() * 20) + "px";

        particula.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        contenedor.appendChild(particula);

        setTimeout(() => {

            particula.remove();

        }, 10000);

    }, 650);

}


// ==========================================
// ABRIR CARTA
// ==========================================

btnCarta.addEventListener("click", () => {

    carta.style.display = "none";

    mensajeCarta.classList.add("mostrar");

    crearParticulasEspeciales();

    mensajeCarta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// ==========================================
// PARTICULAS ESPECIALES
// ==========================================

function crearParticulasEspeciales() {

    const contenedor =
        document.getElementById("particulas");

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const particula =
                document.createElement("div");

            particula.classList.add("particula");

            particula.textContent = "💛";

            particula.style.left =
                Math.random() * 100 + "vw";

            particula.style.fontSize =
                (15 + Math.random() * 25) + "px";

            particula.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            contenedor.appendChild(particula);

            setTimeout(() => {
                particula.remove();
            }, 9000);

        }, i * 100);

    }

}


// ==========================================
// GALERÍA
// ==========================================

document.querySelectorAll(".foto").forEach(
    (foto, indice) => {

        foto.addEventListener("click", () => {

            abrirFoto(indice);

        });

    }
);


// ==========================================
// ABRIR FOTO
// ==========================================

function abrirFoto(indice) {

    fotoActual = indice;

    fotoGrande.src = fotos[fotoActual];

    contador.textContent =
        `${fotoActual + 1} / ${fotos.length}`;

    visor.classList.add("mostrar");

    document.body.style.overflow = "hidden";
}


// ==========================================
// CERRAR FOTO
// ==========================================

function cerrarFoto() {

    visor.classList.remove("mostrar");

    document.body.style.overflow = "";

}


// ==========================================
// FOTO ANTERIOR
// ==========================================

function anterior() {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }

    actualizarFoto();

}


// ==========================================
// FOTO SIGUIENTE
// ==========================================

function siguiente() {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    actualizarFoto();

}


// ==========================================
// ACTUALIZAR FOTO
// ==========================================

function actualizarFoto() {

    fotoGrande.style.opacity = "0";

    setTimeout(() => {

        fotoGrande.src =
            fotos[fotoActual];

        contador.textContent =
            `${fotoActual + 1} / ${fotos.length}`;

        fotoGrande.style.opacity = "1";

    }, 150);

}


// ==========================================
// BOTONES GALERÍA
// ==========================================

cerrarVisor.addEventListener(
    "click",
    cerrarFoto
);

fotoAnterior.addEventListener(
    "click",
    anterior
);

fotoSiguiente.addEventListener(
    "click",
    siguiente
);


// ==========================================
// CERRAR AL TOCAR FONDO
// ==========================================

visor.addEventListener("click", (event) => {

    if (event.target === visor) {

        cerrarFoto();

    }

});


// ==========================================
// TECLADO
// ==========================================

document.addEventListener("keydown", (event) => {

    if (!visor.classList.contains("mostrar")) {
        return;
    }

    if (event.key === "Escape") {
        cerrarFoto();
    }

    if (event.key === "ArrowLeft") {
        anterior();
    }

    if (event.key === "ArrowRight") {
        siguiente();
    }

});


// ==========================================
// RAZONES INTERACTIVAS
// ==========================================

document.querySelectorAll(".razon").forEach(
    (razon) => {

        razon.addEventListener("click", () => {

            razon.classList.toggle("abierta");

        });

    }
);


// ==========================================
// VOLVER A EMPEZAR
// ==========================================

volverInicio.addEventListener("click", () => {

    mensajeCarta.classList.remove("mostrar");

    carta.style.display = "block";

    document.querySelectorAll(".razon").forEach(
        razon => {
            razon.classList.remove("abierta");
        }
    );

    contenido.classList.remove("mostrar");

    inicio.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});