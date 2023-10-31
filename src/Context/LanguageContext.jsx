import { createContext, useState } from 'react'

const LanguageContext = createContext([])

const translations = {
	en: {
		languageLabel: 'Language',
		projectsButton: 'Projects',
		aboutMeButton: 'About me',
		contactButton: 'Contact',
		webDevText: 'Web Developer',
		downloadCvButton: 'Download CV',
		skillsTitle: 'Skills',
		learningTitle: 'Learning',
		projectsTitle: 'Projects',
		visitProjButton: 'Visit',
		aboutMeTitle: 'About me',
		aboutMeText: `Full stack web developer with strong knowledge in JavaScript, Node JS, Express and MongoDB, besides technologies such as React JS, Sass and version control using GIT. /n I enjoy teamwork, I consider it an opportunity to reach significant goals and better results. I have initiative and I always strive for excellence in my work, which leads me to dedicate time and effort to the continuous review and improvement of my projects. /n	My experience extends to developing a variety of projects, including e-commerce websites, landing pages, and various web applications, some of which I have worked on collaboratively.`,
		contactMeTitle: 'Contact me',
		firstNameInput: 'First name',
		lastNameInput: 'Last name',
		emailInput: 'Email',
		messageInput: 'Message',
		sendButton: 'Send',
		successMsg: 'Mensaje enviado correctamente'
	},
	es: {
		languageLabel: 'Idioma',
		projectsButton: 'Proyectos',
		aboutMeButton: 'Sobre mí',
		contactButton: 'Contacto',
		webDevText: 'Desarrolladora Web',
		downloadCvButton: 'Descargar CV',
		skillsTitle: 'Habilidades',
		learningTitle: 'Capacitandome en',
		projectsTitle: 'Proyectos',
		visitProjButton: 'Visitar',
		aboutMeTitle: 'Sobre mí',
		aboutMeText: `Desarrolladora web con sólidos conocimientos en JavaScript, Node JS, Express y MongoDB, además de tecnologías tales como React JS, Sass y control de versiones con GIT. /n Disfruto del trabajo en equipo. Lo considero una oportunidad para alcanzar objetivos significantes y mejores resultados. Tengo iniciativa y siempre busco la excelencia en mi trabajo, lo que me lleva a dedicar tiempo y esfuerzo en la revisión y mejora continua de mis proyectos. /n Mi experiencia se extiende en una variedad de proyectos, incluyendo sitios web de e-commerces, landing pages y varias aplicaciones web, algunas de ellas desarrolladas de forma colaborativa.`,
		contactMeTitle: 'Contacto',
		firstNameInput: 'Nombre',
		lastNameInput: 'Apellido',
		emailInput: 'Correo electrónico',
		messageInput: 'Mensaje',
		sendButton: 'Enviar',
		successMsg: 'Message sent successfully'
	}
}

const LanguageProvider = ({ children }) => {

	const savedLanguage = (JSON.stringify(localStorage.getItem('language'))).replaceAll('"', '')

	const [language, setLanguage] = useState(savedLanguage !== 'null' ? savedLanguage : 'en');
	const [texts, setTexts] = useState(translations[language])

	const changeHandler = e => {
		if (e.target.value === 'en') {
			setLanguage('en')
			setTexts(translations.en)
		} else if (e.target.value === 'es') {
			setLanguage('es')
			setTexts(translations.es)
		}
	}

	return (
		<LanguageContext.Provider value={{ language, texts, changeHandler }}>{children}</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }