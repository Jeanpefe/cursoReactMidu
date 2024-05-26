import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import {type FC } from 'react' //function component significa
import { type Language, type FromLanguage, SectionType } from "../types.d"


type Props = 
	| {type: SectionType.From, value: FromLanguage, onChange: (language: Language) => void}
	| {type: SectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => { //le indicamos a TS que es un componente funcional cuyas props son las que vienen en la interfaz
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value as Language)
	}
	return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
			{type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => ( //Se usa el Object.entries para obtener las llaves y los valores de un objeto. Si fuese un array en vez de un objeto se podría hacer el map directamente
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}