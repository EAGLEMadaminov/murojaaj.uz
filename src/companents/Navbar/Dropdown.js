import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { AiFillCaretDown } from 'react-icons/ai'

const Dropdown = ({ items }) => {
  const location = useLocation()
  const [text, setText] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const [langUrl, setLangUrl] = useState(null)

  useEffect(() => {
    return setText('Ўз')
  }, [setText])
  const checkUrl = (url) => {
    if (
      location.pathname === '/news' &&
      (url === '' || url === 'oz' || url === 'ru')
    ) {
      return `/${url}/news`
    } else if (
      location.pathname === '/oz/news' &&
      (url === '' || url === 'oz' || url === 'ru')
    ) {
      return `/${url}/news`
    } else if (
      location.pathname === '/ru/news' &&
      (url === '' || url === 'oz' || url === 'ru')
    ) {
      return `/${url}/news`
    } else if (
      document.URL === 'http://localhost:3000/#statistika' &&
      (url === '' || url === 'oz' || url === 'ru')
    ) {
      return `/${url}/#statistika`
    } else if (
      document.URL === 'http://localhost:3000/oz/#statistika' &&
      (url === '' || url === 'oz' || url === 'ru')
    ) {
      return `/${url}/#statistika`
    } else if (
      location.pathname === 'http://localhost:3000/ru/#statistika' &&
      (url === '' || url === 'oz' || url === 'ru')
    ) {
      return `/${url}/#statistika`
    } else if (document.URL && (url === '' || url === 'oz' || url === 'ru')) {
      return `/${url}`
    }
  }

  return (
    <ul
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
      className='dropdown-list'
    >
      {dropDown ? '' : text}
      {items.map((item, index, url) => (
        <li key={index} className={dropDown ? 'show' : 'dropdown'}>
          <Link
            onClick={() => {
              i18next.changeLanguage(item.code)
              setText(item.title)
            }}
            to={checkUrl(item.url)}
            className='lang-link'
          >
            {item.title}
          </Link>
        </li>
      ))}
      {dropDown ? '' : <AiFillCaretDown className='down-logo' />}
    </ul>
  )
}
export default Dropdown
