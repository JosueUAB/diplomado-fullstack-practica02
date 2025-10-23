# Práctica 02 - Consumo de API REST con TypeScript (JSONPlaceholder)

## 1. Instrucciones para ejecutar el proyecto

### Requisitos
- Node.js 18 o superior (se recomienda la versión 20 o superior)
- TypeScript (versión 5.9.3 o superior)

**Nota:** A partir de Node.js 18, la función fetch está disponible de forma nativa.

### Verificación de versiones
```bash
node --version
npx tsc --version
```

### Instalación de dependencias

Si el proyecto ya tiene un archivo `package.json`:
```bash
npm install
```

Si no tiene `package.json`, crear uno:
```bash
npm init -y
npm install -g typescript
```

### Configuración de TypeScript

Crear archivo `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "verbatimModuleSyntax": false,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Compilación y ejecución

** Manual**
```bash
# Compilar TypeScript a JavaScript
npx tsc src/main.ts

# Ejecutar el archivo compilado
node src/main.js
```


## 2. Explicación de la salida

Al ejecutar `node src/main.js`, la aplicación:

1. Consume la API pública: `https://jsonplaceholder.typicode.com/comments`
2. Valida que la respuesta sea correcta y convierte los datos a JSON
3. Usa la interfaz `Comentario` para tipar los datos
4. Muestra los primeros 5 comentarios en consola con:
   - ID del post
   - Nombre del autor
   - Email del autor
   - Primeros 120 caracteres del texto

### Ejemplo de salida esperada

```
Datos recibidos exitosamente.

Mostrando los primeros 5 comentarios:

Comentario 1
ID: 1
Nombre : id labore ex et quam laborum
Email  : Eliseo@gardner.biz
Texto  : laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis...
--------------------------------------------------
Comentario 2
ID: 1
Nombre : quo vero reiciendis velit similique earum
Email  : Jayne_Kuhic@sydney.com
Texto  : est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pari...
--------------------------------------------------
Comentario 3
ID: 1
Nombre : odio adipisci rerum aut animi
Email  : Nikita@garfield.biz
Texto  : quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus...
--------------------------------------------------
Comentario 4
ID: 1
Nombre : alias odio sit
Email  : Lew@alysha.tv
Texto  : non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor ...
--------------------------------------------------
Comentario 5
ID: 1
Nombre : vero eaque aliquid doloribus et culpa
Email  : Hayden@althea.biz
Texto  : harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates ...
--------------------------------------------------
```

## 3. Estructura del proyecto

```
practica02/
└── src/
    ├── data.ts        # Define API_URL y interfaz Comentario
    ├── services.ts    # Función obtenerComentariosSimple()
    └── main.ts        # Archivo principal
```

### Archivo: src/data.ts
```typescript
export const API_URL = "https://jsonplaceholder.typicode.com/comments";

export interface Comentario {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
```

### Archivo: src/services.ts
```typescript
import { API_URL, Comentario } from "./data.js";

export function obtenerComentariosSimple(): Promise<Comentario[]> {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} (${response.statusText})`);
        }
        return response.json();
      })
      .then((datos: Comentario[]) => resolve(datos))
      .catch(error => reject(new Error(`Fallo en la petición: ${error.message}`)));
  });
}
```

### Archivo: src/main.ts
```typescript
import { obtenerComentariosSimple } from "./services.js";

obtenerComentariosSimple()
  .then(comentarios => {
    console.log(" Datos recibidos exitosamente.\n");
    console.log(" Mostrando los primeros 5 comentarios:\n");

    comentarios.slice(0, 5).forEach((comentario, index) => {
      console.log(`Comentario ${index + 1}`);
      console.log(`ID: ${comentario.postId}`);
      console.log(`Nombre : ${comentario.name}`);
      console.log(`Email  : ${comentario.email}`);
      console.log(`Texto  : ${comentario.body.substring(0, 120)}...`);
      console.log("--------------------------------------------------");
    });
  })
  .catch(error => {
    console.error(" Ocurrió un fallo en la Promise:", error.message);
  });
```
