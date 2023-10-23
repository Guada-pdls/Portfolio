import { useContext } from 'react'
import { LanguageContext } from '../../Context/LanguageContext'

const ChangeLanguageWidget = () => {
  const { changeHandler, texts } = useContext(LanguageContext)
  return (
    <>
      <label htmlFor="language-switcher-select">{texts.languageLabel}</label>
      <select onChange={changeHandler} name="language" id="language-switcher-select"
      className='language-switcher'>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </>
  )
}

export default ChangeLanguageWidget