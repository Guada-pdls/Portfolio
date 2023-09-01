import { useContext } from 'react'
import { LanguageContext } from '../../Context/LanguageContext'

const ChangeLanguageWidget = () => {
	const { language, setLanguage } = useContext(LanguageContext)
	console.log(language)

  return (
    <button onClick={setLanguage(!language)}>{language.toUpperCase}</button>
  )
}

export default ChangeLanguageWidget