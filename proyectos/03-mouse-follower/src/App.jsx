import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log("hola")
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
        height: 40
      }} />
      <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} Seguir el puntero
        </button>
    </main>
  )
}

export default App
