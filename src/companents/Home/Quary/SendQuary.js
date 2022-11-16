import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { FaCheck } from 'react-icons/fa'
import { ToggleContext } from '../../../App'
import { useTranslation } from 'react-i18next'
import './styles.css'

const SendQuary = () => {
  const { t } = useTranslation()
  const { firstColor, secondColor, thirdColor, openQuaryBox, setOpenQuaryBox } =
    useContext(ToggleContext)

  const changeQuaryColor = () => {
    if (secondColor) {
      return 'quary-box color-easy'
    } else if (thirdColor) {
      return 'quary-box color-black'
    } else {
      return 'quary-box'
    }
  }

  return (
    <div className={changeQuaryColor}>
      <div className='quary-left-box'>
        <h2>{t('enter-personal-data')}</h2>
        <p>{t('dont-show-info')}</p>
        <h3>{t('profit-info')}</h3>
        <ul className='quary-list'>
          <li className='quary-item'>
            <FaCheck className='check-icon' />
            {t('personal-one')}
          </li>
          <li className='quary-item'>
            <FaCheck className='check-icon' size={36} />
            {t('personal-two')}
          </li>
          <li className='quary-item'>
            <FaCheck className='check-icon' />
            {t('personal-three')}
          </li>
        </ul>
      </div>
      <div className='quary-right-box'>
        <form>
          <TextField
            className='letter-input'
            variant='outlined'
            label={t('passport-seria')}
          />
          <TextField
            className='number-input'
            variant='outlined'
            type='number'
            label={t('passport-number')}
          />
          <p>{t('permit-info')}</p>
          <TextField
            className='birthday-input'
            variant='outlined'
            onClick={(e) => console.log((e.target.type = 'date'))}
            label={t('bithday-data')}
          />
          <div className='check-for-robot'>
            <p>{t('ne-robot-math')}</p>
            <TextField variant='outlined' />
          </div>
          <div className='btn-box'>
            <Button
              className='down-btn'
              variant='contained'
              onClick={() => setOpenQuaryBox(false)}
              style={{ marginLeft: '120px' }}
            >
              {t('back-btn')}
            </Button>
            <Button
              className='down-btn'
              style={{ marginLeft: '120px' }}
              variant='contained'
            >
              {t('submit-personal-data')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendQuary
