# cursoReactMidu

# Proyectos

1. X follow cards
2. Tres en raya
3. Mouse follower

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
