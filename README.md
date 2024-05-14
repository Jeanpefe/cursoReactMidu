# cursoReactMidu

# Proyectos

1. X follow cards
2. Tres en raya
3. Mouse follower
4. Fetching de datos
5. API para buscar peliculas
6. Carrito de compra 

# Cosas útiles

- `getEventListeners(window)` en la consola para ver los eventos a los que se está suscrito. Útil para detectar cuando no se están limpiando bien las suscripciones.
- `<React.StrictMode>` en main.jsx lo que hace es que cada vez que sucede un useEffect, se ejecuta, se ejecuta su cleanup (la función que se retorna) y se vuelve a ejecutar, todo esto para comprobar que ha ido bien. Es una medida para desarrolladores, en producción no se debería poner.
- Dependencias del `useEffect`:
  - `[]`: se ejecuta cuando se monta el componente
  - `[params]`: se ejecuta cuando se monta el componente y cuando cambian los params
  - `undefined`: se ejecuta cada vez que se renderiza el componente
- Cuando usemos un useEffect, poner `useEffect([])` con el array de dependencias lo primero para no olvidarlo
- Cuando hagamos test End to End con playwright, hay que cambiar la extensión de `playwright.config.js` a `playwright.config.cjs` (CommonJS) y cambiar los `require` por `import`
- Cuando inicialicemos un proyecto y querramos tener algo de estilos por defecto (para prueba técnica p.e) podemos usar estilos de css sin clases, como https://watercss.kognise.dev/. Podemos copiar los estilos de https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css
- No mostrar las respuestas de las APIs haciendo `console.log`. Mejor hacer la petición desde el navegador/postman y crear una carpeta con ejemplos de respuestas (p.e respuesta ok y respuesta vacía).
- Intentar sacar el contrato de la API de componentes muy profundos. Por ejemplo, hacer un mapeo de campos de la respuesta de la API para no depender de sus nombres en el renderizado
- `useRef` es un hook que permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente. Sirve también para guardar cualquier valor que podamos mutar como un identificador, un elemento del DOM, un contador, ... _y que cada vez que cambia no vuelve a renderizar el componente_, a diferencia del `useState`. Es decir, aunque se vuelva a renderizar un componente el valor no se reinicia
- `useMemo` es un hook que sirve para memoizar computaciones que no queremos que se hagan salvo que cambien las dependencias que indiquemos. No tiene sentido usarlo salvo que tengamos problemas de rendimiento, como por ejemplo operaciones con arrays muy grandes.
- `useCallback` es un hook que hace lo mismo que el `useMemo` pero aplicado a funciones. Al final usa `useMemo` por debajo
- `debounce`: Sirve para hacer que espere una ejecución. Midu utiliza esta `npm install just-debounce-it -E`. Se suele usar en búsquedas dinámicas a medida que se escribe en formularios. Sirve para establecer tiempo de espera entre peticiones de búsqueda. Hay que tener cuidado, suele ir de la mano de un `useCallback` para no generar la "función debounce que envuelve la función a detener" en cada render y que por tanto no sirva de nada.
- `useId` es un hook reciente de React que nos permite crear identificadores únicos. Nos ahorramos problemas de repetir ids sin querer. Muy útil a la hora de usar `htmlFor` y `id` en labels con inputs, selects,...
- El contexto el algo que está separado del árbol de componentes y que se puede leer de forma separada. Sirve para compartir información sin necesidad de hacer prop drilling entre componentes. Es una forma de inyección de dependencias. NO sirve únicamente para crear un estado global.
- `useContext` como estado global está pensado para estados pequeños o que cambien con poca frecuencia (si el usuario tiene sesión iniciada por ejemplo)
- El `useReducer` es un hook que nos permite manejar el estado de una manera escalable porque se basa en recibir en una función el estado actual y la acción que tiene que hacer. Con estas dos cosas te devuelve el nuevo estado. Va separado del contexto, del provider y custom hook. Vale la pena porque nos permite separar la lógica de actualización del estado en una función separada. Interesante usarlo cuando hay muchos `useState` seguidos (suele indicar que el estado está fragmentado y que queremos actualizar partes de ese estado (por ejemplo cantidad de un producto, si queremos controlar el input de un usuario y además tener un flag que nos diga si ya ha escrito algo, ...))
- Para hacer testing, hay que instalar `npm install vitest -D`, modificar el `package.json` y añadir en scripts `"test": "vitest"`. Otra dependencia útil es `npm install happy-dom @testing-library/react -D`, teniendo que indicar en `vite.config.js` lo siguiente: `test: {environment: 'happy-dom'}`