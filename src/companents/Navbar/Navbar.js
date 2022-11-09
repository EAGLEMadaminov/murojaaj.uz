import React, { useContext, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { AppBar, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ColorSite from './ColorSite.js'
import { HashLink as Link } from 'react-router-hash-link'
import './styles.css'

import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { ToggleContext } from '../../App.js'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Dropdown from './Dropdown.js'

const menuItems = [
  {
    title: 'Ўз',
    url: '',
    code: 'yz',
  },
  {
    title: "O'z",
    url: 'uz',
    code: 'uz',
  },
  {
    title: 'RU',
    url: 'ru',
    code: 'ru',
  },
]


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: ['"Segoe UI"'].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

function Navbar() {
  const classes = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }))

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
  const handleChange = (e) => {
    localStorage.setItem('lang', e.target.value)
  }
  const chooseLangLink = () => {}
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
          to='/news'
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
