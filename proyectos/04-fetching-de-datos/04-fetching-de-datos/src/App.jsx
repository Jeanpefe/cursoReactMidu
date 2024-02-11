import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true` 

function App() {
  const [fact, setFact] = useState()
  const [catId, setCatId] = useState()
  
  // recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact} = data //Desesctructuramos la respuesta y obtenemos la propiedad fact
        setFact(fact)
      })
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

  return (
    <main>
      <h1>Gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {catId && <img src={`https://cataas.com/cat/${catId}/says/${fact.split(' ')[0]}?fontSize=50&fontColor=red`}/>}
      </section>
    </main>
  )
}

export default App