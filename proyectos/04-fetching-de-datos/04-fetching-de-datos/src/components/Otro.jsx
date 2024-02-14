import { useCatImage } from "../services/hooks/useCatImage"

export function Otro() {
    const fact = 'Random Fact'
    const { catId } = useCatImage({ fact: fact })

    return (
        <>
            {catId && <img src={`https://cataas.com/cat/${catId}/says/${fact.split(' ')[0]}?fontSize=50&fontColor=red`} />}
        </>
    )
}