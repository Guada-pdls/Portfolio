import { createContext, useEffect } from 'react'

const LanguageContext = createContext([])

const LanguageProvider = ({ children }) => {

	console.log(Boolean(localStorage.getItem('language')))
	// let [language, setLanguage] = useState((!localStorage.getItem("language")) && 'english');


	useEffect(() => localStorage.setItem('language', JSON.stringify(language)), [language])

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }