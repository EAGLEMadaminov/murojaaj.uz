import React, { useContext, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { AppBar, Typography } from '@material-ui/core'
import { useNavigate , useLocation} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ColorSite from './ColorSite.js'
import { HashLink as Link } from 'react-router-hash-link'
import './styles.css'
import { ToggleContext } from '../../App.js'
import Dropdown from './Dropdown.js'

const menuItems = [
  {
    title: 'Ўз',
    url: '',
    code: 'yz',
  },
  {
    title: "O'z",
    url: 'oz',
    code: 'oz',
  },
  {
    title: 'Ry',
    url: 'ru',
    code: 'ru',
  },
]




function Navbar() {

  const location=useLocation()
  const naviagte = useNavigate()
  const { isOpen, firstColor, secondColor, thirdColor, openHendlerBtn } =
    useContext(ToggleContext)
  const { t } = useTranslation()
  const [langItem, setLangItem] = useState('Ўз')

  const AppBarColorChange = (d, e, f) => {
    if (e) {
      return ' color-easy AppBar'
    } else if (d) {
      return 'AppBar'
    } else if (f) {
      return 'color-black AppBar'
    }
    return 'AppBar'
  }

  const checkLang=()=>{
    if (location.pathname === '/') {
      return '/news'
    } else if (location.pathname === '/oz') {
      return '/oz/news'
    } else if (location.pathname === '/ru') {
      return '/ru/news'
    }
  }

  return (
    <AppBar
      className={AppBarColorChange(firstColor, secondColor, thirdColor)}
      position=''
      color='inherit'
    >
      <div className='head-container'>
        <div className='change-btn-box'>
          {isOpen && <ColorSite />}
          <button
            className='color-change-btn'
            onClick={(e) => {
              openHendlerBtn()
              e.stopPropagation()
            }}
          >
            <HiOutlineMenu />
          </button>
        </div>
        <div className='navbar-item nav-image'>
          <img
            className='site-img-icon'
            src='https://murojaat.gov.uz/_next/image?url=%2Flogo.svg&w=256&q=75'
            alt=''
          />
        </div>
        <h1 className='head-info'>
          <strong>{t('welcome_message')}</strong> <br />
          {t('unique')}
        </h1>
        <div className='navbar-item nav-image'>
          <button className='head-enter-btn'>
            <a href='https://id.egov.uz/?client_id=pm.gov.uz&token_id=9f0d66b8-bf88-45ee-84b6-de29bf965c70&method=IDPW'>
              {t('head-id-btn')}
            </a>
          </button>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2Femblem.svg&w=96&q=75'
            alt='filter applied'
            className='image-gerb'
          />
        </div>
        <div className='navbar-item'>
          <Dropdown items={menuItems}></Dropdown>
        </div>
      </div>
      <div className='header-site-link'>
        <Link
          className='head-link'
          variant='contained'
          to='/'
        >
          {t('head-link')}
        </Link>
        <Typography
          className='head-link'
          variant='contained'
          component={Link}
          to={checkLang()}
        >
          {t('head-news')}
        </Typography>
        <Link
          className='head-link'
          variant='contained'
          to='/#statistika'
          smooth
        >
          {t('head-st')}
        </Link>
      </div>
    </AppBar>
  )
}

export default Navbar
