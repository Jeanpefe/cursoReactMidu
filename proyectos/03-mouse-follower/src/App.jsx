import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0}) // Como buena practica, inicializar el estado con el tipo de dato que vamos a usar o en su defecto con null
  useEffect(() => {
    console.log("hola")
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove) //Cuando nos suscribimos a un evento, tenemos que limpiarlo si queremos dejar de estar suscritos
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    } // Se ejecuta siempre que se desmonte el componente (desaparezca) y cada vez que cambie la dependencia
    //
  }, [enabled])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'lightcyan',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} Seguir el puntero
        </button>
    </main>
  )

}

export default App
