// 1 se define el servicio api rest en jsonL del servicio que se consumira
export const API_URL = "https://jsonplaceholder.typicode.com/comments";

// 2 como ya sabemos la estructura creamos la interface para tipar la data
export interface Comentario {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}