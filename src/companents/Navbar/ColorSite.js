import React, { useContext} from 'react'
import { ToggleContext } from '../../App'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import './color.css'


function ColorSite() {
  const {t}=useTranslation()
  const location=useLocation()
  const { setIsOpen ,  handleColorEasy, handleColorBlue, handleColorBlack} = useContext(ToggleContext)
  const changeSize=()=>{
    if(location.pathname==='/ru'){
      console.log(location.pathname)
      return 'form-length form-box'
    } else {
      return 'form-box'
    }
  }
  return (
      <div
        className={changeSize()}
        onClick={(e) => { 
          setIsOpen(true)
          e.stopPropagation()
        }}
      >
        <h2>{t('color-btn')}</h2>
        <div className='color-box'>
          <div className='color-item'>
            <button onClick={handleColorBlue}>
              <h3>A</h3>
            </button>
          </div>
          <div className='color-item'>
            <button onClick={handleColorEasy}>
              <h3>A</h3>
            </button>
          </div>
          <div className='color-item'>
            <button onClick={handleColorBlack}>
              <h3>A</h3>
            </button>
          </div>
        </div>
      </div>
  )
}

export default ColorSite
