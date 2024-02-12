import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true` 

function App() {
  const [fact, setFact] = useState()
  const [catId, setCatId] = useState()
  
  // recuperar la cita al cargar la pagina
  useEffect(async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }, [])

  // recuperar la imagen cada vez que tenemos una cita
  useEffect(() => {
    if (!fact) return
    fetch(`https://cataas.com/cat?json=true`)
    .then(res => res.json())
    .then(resJson => {
      const {_id} = resJson
      setCatId(_id)
    })
  },[fact])

  const handleClick = async () => {
    getRandomFact().then(newFact => setFact(newFact)) //Esto es lo mismo que getRandomFact().then(setFact)
  }

  return (
    <main>
      <h1>Gatos</h1>
      <section>
        <button onClick={handleClick}>Refrescar</button>
        {fact && <p>{fact}</p>}
        {catId && <img src={`https://cataas.com/cat/${catId}/says/${fact.split(' ')[0]}?fontSize=50&fontColor=red`}/>}
      </section>
    </main>
  )
}

export default App