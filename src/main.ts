import { obtenerComentariosSimple } from "./services.js";

// 4 Consumimos la Promise usando .then() y .catch()
obtenerComentariosSimple()
    .then(comentarios => {
        console.log(" Datos recibidos exitosamente.\n");

        console.log(" Mostrando los primeros 5 comentarios:\n");

        // Mostramos los primeros 5 comentarios en formato más legible
        comentarios.slice(0, 5).forEach((comentario, index) => {
            console.log(`Comentario ${index + 1}`);
            console.log(`ID: ${comentario.postId}`);
            console.log(`Nombre : ${comentario.name}`);
            console.log(`Email  : ${comentario.email}`);
            console.log(`Texto  : ${comentario.body.substring(0, 120)}...`); //*limitamos los caracteres
            console.log("--------------------------------------------------");
        });
    })
    .catch(error => {
        console.error(" Ocurrió un fallo en la Promise:", error.message);
    });
