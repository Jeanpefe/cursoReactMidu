import {navigate} from '../Link.jsx'

export default function HomePage() {
	return (
		<>
		<h1>Home</h1>
		<button onClick={() => navigate('/about')}>Sobre nosotros</button>
		</>
	)
}