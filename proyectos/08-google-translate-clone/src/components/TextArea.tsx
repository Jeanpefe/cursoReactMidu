import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

type Props = 
	{
	type: SectionType,
	loading?: boolean, 
	value: string,
	onChange: (value: string) => void
	}

const commonStyles = {border: 0, height: '180px', resize: 'none'}

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
	if (type === SectionType.From ) return 'Introducir texto'
	if (loading === true) return 'Cargando...'
	return 'Traducción'
}

export default function TextArea ({type, loading, value, onChange}: Props) {
	
	const styles = type === SectionType.From
	? commonStyles
	: {...commonStyles, backgroundColor: "#f5f5f5"}

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value)
	}
	return (
		<Form.Control 
			onChange={handleChange}
			as='textarea'
			placeholder={getPlaceholder({type, loading})}
			disabled={type === SectionType.To}
			autoFocus={type === SectionType.From}
			style={styles}
			value={value}
		/>
	)
}