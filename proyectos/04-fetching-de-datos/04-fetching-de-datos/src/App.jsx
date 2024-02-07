import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState('cat state')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>Gatos</h1>
      <p>{fact}</p>
    </main>
  )
}

export default App