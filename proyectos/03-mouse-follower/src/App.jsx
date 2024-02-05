import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0}) // Como buena practica, inicializar el estado con el tipo de dato que vamos a usar o en su defecto con null
  const [visible, setVisible] = useState(false)

  //Pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove) //Cuando nos suscribimos a un evento, tenemos que limpiarlo si queremos dejar de estar suscritos
      setVisible(true)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      setVisible(false)
    } // Se ejecuta siempre que se desmonte el componente (desaparezca) y cada vez que cambie la dependencia, antes de ejecutar el efecto de nuevo
    //
  }, [enabled])

  //Change body className
  useEffect(() => {
    console.log(enabled)
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  return (
    <main>
      <div style={{
        display: visible ? 'block' : 'none',
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
