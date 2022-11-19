import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { FaCheck } from 'react-icons/fa'
import { ToggleContext } from '../../../App'
import { useTranslation } from 'react-i18next'
import './styles.css'

const SendQuary = () => {
  const { t } = useTranslation()
  const [randomValue, setRandomValue] = useState(0)
  const [randomValue2, setRandomValue2] = useState(0)
  const { firstColor, secondColor, thirdColor, setOpenQuaryBox } =
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

  function generateRandom(random, random2) {
    const min = 1
    const max = 9
    random = min + Math.random() * (max - min)
    random2 = Math.floor(Math.random() * (max - min + 1)) + min
    return random, random2
  }
  useEffect((random2) => {
    const randomValue = generateRandom()
    const randomValue2 = generateRandom()
    setRandomValue(randomValue)
    setRandomValue2(randomValue2)
  }, [])

  return (
    <div className={changeQuaryColor()}>
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
            className='letter-input change-color-input'
            variant='outlined'
            label={t('passport-seria')}
            InputLabelProps={{ className: 'textField_label' }}
          />
          <TextField
            className='number-input change-color-input'
            variant='outlined'
            type='number'
            label={t('passport-number')}
            InputLabelProps={{ className: 'textField_label' }}
          />
          <p>{t('permit-info')}</p>
          <TextField
            className='birthday-input change-color-input'
            variant='outlined'
            onClick={(e) => console.log((e.target.type = 'date'))}
            label={t('bithday-data')}
            InputLabelProps={{ className: 'textField_label' }}
          />
          <div className='check-for-robot'>
            <p>{t('ne-robot-math')}</p>
            <span>
              {randomValue} + {randomValue2} =
            </span>
            <TextField
              className='change-color-input'
              variant='outlined'
              InputLabelProps={{ className: 'textField_label' }}
              inputProps={{ className: 'textField_border' }}
            />
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
