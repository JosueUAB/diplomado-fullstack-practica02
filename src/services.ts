import { API_URL, Comentario } from "./data.js";

// 3 se define la funcion  que retorna una Promise<Comentario[]>
export function obtenerComentariosSimple(): Promise<Comentario[]> {
    return new Promise((resolve, reject) => {
        fetch(API_URL)
            .then(response => {
                //! Validamos si la respuesta fue exitosa
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} (${response.statusText})`);
                }
                //* Parseamos el cuerpo de la respuesta a JSON
                return response.json();
            })
            .then((datos: Comentario[]) => {
                //** Resolvemos la Promise con los datos ya tipados
                resolve(datos);
            })
            .catch(error => {
                //! Manejamos cualquier error de red o de conversión
                reject(new Error(`Fallo en la petición: ${error.message}`));
            });
    });
}
