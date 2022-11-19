import React from 'react'
import { useTranslation } from 'react-i18next'
import uzInfocom from '../requirements/UZINFOCOM-logo.png'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div>
      <footer className='footer'>
        <img
          src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fwhite-logo.040a00f36cccb267d495dbeef197f7f7.svg&w=128&q=75'
          alt=''
        />
        <ul className='footer-list'>
          <li className='footer-item'>
            <a href='/' className='footer-link' target='blank'>
              {t('head-link')}
            </a>
          </li>
          <li className='footer-item'>
            <a href='/news' className='footer-link' target='blank'>
              {t('head-news')}
            </a>
          </li>
          <li className='footer-item'>
            <a href='/#statistics' className='footer-link' target='blank'>
              {t('head-st')}
            </a>
          </li>
        </ul>
        <div className='footer-icon'>
          <a href='https://uzinfocom.uz'>
            <img src={uzInfocom} alt='' />
          </a>
          <p>{t('footer-info')}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
