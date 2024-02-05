# cursoReactMidu

# Cosas útiles
- `getEventListeners(window)` en la consola para ver los eventos a los que se está suscrito. Útil para detectar cuando no se están limpiando bien las suscripciones.
- `<React.StrictMode>` en main.jsx lo que hace es que cada vez que sucede un useEffect, se ejecuta, se ejecuta su cleanup (la función que se retorna) y se vuelve a ejecutar, todo esto para comprobar que ha ido bien. Es una medida para desarrolladores, en producción no se debería poner.
