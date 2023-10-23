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
        aboutMeText: 'I am a software engineer with a passion for building beautiful and functional websites and applications.',
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
        aboutMeText: 'Soy un desarrollador de software con una pasión por construir páginas web y aplicaciones.',
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

	let [language, setLanguage] = useState(savedLanguage ?? 'en');
	const [texts, setTexts] = useState(translations[language])

	const changeHandler = e =>{
		if (e.target.value === 'en') {
			setLanguage('en')
            setTexts(translations.en)
		} else if (e.target.value === 'es') {
			setLanguage('es')
            setTexts(translations.es)
		}
	}

	return (
		<LanguageContext.Provider value={{ language, texts, changeHandler}}>{children}</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }