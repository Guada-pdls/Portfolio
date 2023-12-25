import { useContext } from 'react'
import { LanguageContext } from '../../Context/LanguageContext'

const ChangeLanguageWidget = () => {
  const { changeHandler, texts } = useContext(LanguageContext)
  return (
    <>
      <select onChange={changeHandler} name="language" id="language-switcher-select"
      className='language-switcher'>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </>
  )
}

export default ChangeLanguageWidget