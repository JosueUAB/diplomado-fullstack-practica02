"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services_js_1 = require("./services.js");
// 4 Consumimos la Promise usando .then() y .catch()
(0, services_js_1.obtenerComentariosSimple)()
    .then(function (comentarios) {
    console.log(" Datos recibidos exitosamente.\n");
    console.log(" Mostrando los primeros 5 comentarios:\n");
    // Mostramos los primeros 5 comentarios en formato más legible
    comentarios.slice(0, 5).forEach(function (comentario, index) {
        console.log("Comentario ".concat(index + 1));
        console.log("ID: ".concat(comentario.postId));
        console.log("Nombre : ".concat(comentario.name));
        console.log("Email  : ".concat(comentario.email));
        console.log("Texto  : ".concat(comentario.body.substring(0, 120), "...")); //*limitamos los caracteres
        console.log("--------------------------------------------------");
    });
})
    .catch(function (error) {
    console.error(" Ocurrió un fallo en la Promise:", error.message);
});
