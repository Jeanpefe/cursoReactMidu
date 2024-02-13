import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'
import { useCatImage } from './services/hooks/useCatImage'

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true` 

const useCatFact = () => {
  const [fact, setFact] = useState()
  const getFactAndUpdateState = () => {
    getRandomFact().then(newFact => setFact(newFact)) //Esto es lo mismo que getRandomFact().then(setFact)
  }
  useEffect(getFactAndUpdateState, [])
  return {fact, getFactAndUpdateState}
}

export function App() {
  const {fact, getFactAndUpdateState} = useCatFact()
  const { catId } = useCatImage({ fact })
  const handleClick = async () => {
    getFactAndUpdateState()
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
