APIS:

- Facts Random: https://catfact.ninja/fact
- Imagen Random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera api
Recupera la primera palabra del hecho
Muestra una imagen de un gato con la primera palabra

- endpoint para obtener la imagen: `https://cataas.com/cat/says/${word}?size=50&color=red&json=true`

### Inicializar Proyecto con Vite Vanilla

1. `npm create vite@latest`
2. Vanilla
3. `npm install @vitejs/plugin-react -E`
4. `npm install react react-dom -E` Biblioteca de react y bindings con el navegador
5. Comprobamos que están en el `package.json`
6. Creamos el fichero `vite.config.js` y ponemos:

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
   });
   ```

7. Creamos el punto de entrada en el `main.js`, el primer script que se ejecuta cuando se renderiza el `index.html`.
8. Ponemos

```js
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));
root.render(<h1>Hola</h1>);
```

9. Para que funcione el root.render, cambiamos la extensión de `.js` a `.jsx`, y lo mismo en el script del `main.html`
10. Instalamos linter `npm install standard -D`
