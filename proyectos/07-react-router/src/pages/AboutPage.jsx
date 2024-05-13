import {Link} from '../Link.jsx'

const i18n = {
	es: {
		title: 'Sobre nosotros',
		description: 'Descripción en español',
		button: 'Ir a la home'
	},
	en: {
		title: 'About us',
		description: 'English description',
		button: 'Ir a la home'
	}
}

const useI18n = (lang) => {
	return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}) {
	const i18n = useI18n(routeParams.lang ?? 'es')
	return (
		<>
		<h1>{i18n.title}</h1>
		<p>{i18n.description}</p>
		<Link to='/'>{i18n.button}</Link>
		</>
	)
}
