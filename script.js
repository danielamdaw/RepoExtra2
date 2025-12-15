// Cambiar imagen del coche al hacer clic
const imagenes = [
    "https://cdn.motor1.com/images/mgl/0ANVo/s3/2016-ford-focus-rs.jpg",
    "https://cdn.motor1.com/images/mgl/yOo6o/s3/ford-focus-rs-2018.jpg",
    "https://cdn.motor1.com/images/mgl/gJJkW/s3/ford-focus-rs-heritage-edition.jpg"
];

let indice = 0;

function cambiarImagen() {
    indice = (indice + 1) % imagenes.length;
    document.getElementById("car-image").src = imagenes[indice];
}
