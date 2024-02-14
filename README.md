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