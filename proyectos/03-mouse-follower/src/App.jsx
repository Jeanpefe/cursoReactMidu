import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log("hola")
  })
  return (
    <>
      <h1>Proyecto 3</h1>
      <button onClick={() => (!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} Seguir el puntero
        </button>
    </>
  )
}

export default App
