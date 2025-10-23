"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerComentariosSimple = obtenerComentariosSimple;
var data_js_1 = require("./data.js");
// 3 se define la funcion  que retorna una Promise<Comentario[]>
function obtenerComentariosSimple() {
    return new Promise(function (resolve, reject) {
        fetch(data_js_1.API_URL)
            .then(function (response) {
            //! Validamos si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error("Error HTTP: ".concat(response.status, " (").concat(response.statusText, ")"));
            }
            //* Parseamos el cuerpo de la respuesta a JSON
            return response.json();
        })
            .then(function (datos) {
            //** Resolvemos la Promise con los datos ya tipados
            resolve(datos);
        })
            .catch(function (error) {
            //! Manejamos cualquier error de red o de conversión
            reject(new Error("Fallo en la petici\u00F3n: ".concat(error.message)));
        });
    });
}
