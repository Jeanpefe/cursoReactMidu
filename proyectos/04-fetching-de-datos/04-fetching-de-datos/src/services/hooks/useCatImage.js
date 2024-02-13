import { useEffect, useState } from "react"
//La diferencia entre un custom hook y una funcion es que en una funcion no puedes llamar a hooks
export function useCatImage({ fact }) { // custom hook necesita empezar por la palabra reservada use
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
  