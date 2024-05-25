import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES } from "../constants"

interface Props {
	onChange: (language: string) => void
}

export const LanguageSelector = ({ onChange }: Props) => {
    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={onChange}>
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => ( //Se usa el Object.entries para obtener las llaves y los valores de un objeto. Si fuese un array en vez de un objeto se podría hacer el map directamente
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}