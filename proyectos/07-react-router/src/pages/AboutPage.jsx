import {navigate} from '../Link.jsx'

export default function AboutPage() {
	return (
		<>
		<h1>About</h1>
		<button onClick={() => navigate('/')}>Ir a la home</button>
		</>
	)
}
