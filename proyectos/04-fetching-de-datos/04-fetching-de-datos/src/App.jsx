import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true` 

//La diferencia entre un custom hook y una funcion es que en una funcion no puedes llamar a hooks
function useCatImage({ fact }) { // custom hook necesita empezar por la palabra reservada use
  //Pasamos { fact } y no fact porque así fuerzas a pasar el mismo nombre en el param, (no puedes pasar { factTest }, 
    //y porque mejora la escalabilidad, ya que en un futuro podemos recibir varios parametros {fact, limitWords,...} y es más legible el codigo y no importa el orden
  const [catId, setCatId] = useState()
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

  return { catId }
}

export function App() {
  const [fact, setFact] = useState()
  const { catId } = useCatImage({ fact })

  // recuperar la cita al cargar la pagina
  useEffect(async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }, [])

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
