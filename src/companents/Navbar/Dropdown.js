import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { AiFillCaretDown } from 'react-icons/ai'

const Dropdown = ({ items }) => {
  const [text, setText] = useState('')
  const [dropDown, setDropDown] = useState(false)
  useEffect(() => {
    return setText('Ўз')
  }, [setText])

  return (
    <ul onMouseEnter={() => setDropDown(true)}
      onMouseLeave={()=>setDropDown(false)} className='dropdown-list'>
      { dropDown?'': text}
      {items.map((item, index) => (
        <li key={index} className={dropDown ? 'show' : 'dropdown'}>
          <Link
            onClick={() => {
              i18next.changeLanguage(item.code)
              setText(item.title)
            }}
            to={item.url}
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
