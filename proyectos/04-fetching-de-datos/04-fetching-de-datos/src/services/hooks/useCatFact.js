import { useState, useEffect } from "react"
import { getRandomFact } from "../facts"

export function useCatFact() {
    const [fact, setFact] = useState()
    const getFactAndUpdateState = () => {
      getRandomFact().then(newFact => setFact(newFact)) //Esto es lo mismo que getRandomFact().then(setFact)
    }
    useEffect(getFactAndUpdateState, [])
    return {fact, getFactAndUpdateState}
  }
  