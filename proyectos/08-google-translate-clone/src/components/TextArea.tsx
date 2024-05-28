import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

type Props = 
	{
	type: SectionType,
	placeholder: string,
	loading?: boolean, 
	value: string,
	onChange: (value: string) => void
	}
	

export default function TextArea ({type, loading, placeholder, value, onChange}: Props) {
	return (
		<Form.Control 
			as='textarea'
			placeholder={placeholder}
			autoFocus={type === SectionType.From}
			style={{height: '180px'}}
		/>
	)
}