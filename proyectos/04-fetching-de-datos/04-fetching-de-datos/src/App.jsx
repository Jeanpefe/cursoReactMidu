import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true` 

function App() {
  const [fact, setFact] = useState()
  const [catId, setCatId] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact} = data //Desesctructuramos la respuesta y obtenemos la propiedad fact
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
        .then(res => res.json())
        .then(resJson => {
          const {_id} = resJson
          setCatId(_id)
        })
      })
  }, [])

  return (
    <main>
      <h1>Gatos</h1>
      {fact && <p>{fact}</p>}
      <img>{`https://cataas.com/cat/${setCatId}/says/?fontSize=50&fontColor=red&json=true`}</img>
    </main>
  )
}

export default App