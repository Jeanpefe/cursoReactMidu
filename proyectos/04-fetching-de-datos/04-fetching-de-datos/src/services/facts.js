const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => { // TIP: Convertir a async await: Click en los ... de la g, Ctrl + . y convert to async function
    const res = await fetch(CAT_ENDPOINT_FACT)
    const data = await res.json()
    const { fact } = data
    return fact // No tiene sentido poner aqui setFact(fact) y recibir por params el setFact porque no sería reutilizable, que el setFact se quede en un componente   
}