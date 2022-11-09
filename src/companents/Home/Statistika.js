import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleContext } from '../../App.js'

function Statistika() {
  const { t } = useTranslation()
  const { firstColor, secondColor, thirdColor } = useContext(ToggleContext)

  const sectionsColorChange = (d, e, f) => {
    if (e) {
      return 'color-easy section-two'
    } else if (d) {
      return ''
    } else if (f) {
      return 'color-black section-two'
    }
    return ''
  }
  return (
    <section
      className={
        'section-five ' +
        sectionsColorChange(firstColor, secondColor, thirdColor)
      }
      id='statistika'
    >
      <h1>{t('statistcs')}</h1>
      <div className='section-lines'>
        <span className='section-line1'></span>
        <span className='section-line2'></span>
        <span className='section-line3'></span>
      </div>
      <div className='statistics-box'>
        <div className='statics-item'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdocument-stat.2b2563723ebcc06dde8bef024d2d8e1a.svg&w=48&q=75'
            alt=''
          />
          <h3 className='option'>6 699 681</h3>
          <p>{t('option-req')}</p>
        </div>
        <div className='statics-item'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Freception.9f14e7dc3147f09fd5573917868b0c40.svg&w=64&q=75'
            alt=''
          />
          <h3>1 193 492</h3>
          <p>{t('people')}</p>
        </div>
        <div className='statics-item'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fcallcenter.51b665c95dcfe22e1bd60350cc5763cb.svg&w=64&q=75'
            alt=''
          />
          <h3>3 823 303</h3>
          <p>{t('phone')}</p>
        </div>
        <div className='statics-item'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fweb.e937a19ce602d67e56b93b675882e538.svg&w=64&q=75'
            alt=''
          />
          <h3>1 096 766</h3>
          <p>{t('sayt')}</p>
        </div>
        <div className='statics-item'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fproccesed_doc.8e2f162acfa828047e39cfb1432ce63f.svg&w=64&q=75'
            alt=''
          />
          <h3>187 354</h3>
          <p>{t('sayyor-qabul')}</p>
        </div>
        <div className='statics-item'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Freception.9f14e7dc3147f09fd5573917868b0c40.svg&w=64&q=75'
            alt=''
          />
          <h3>143 363</h3>
          <p>{t('prezident')}</p>
        </div>
        <div className='statics-item last-statics'>
          <img
            src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Femail-stat.04804f16547cc2addd7755a680997dea.svg&w=64&q=75'
            alt=''
          />
          <h3>255 403</h3>
          <p>{t('prezident-email')}</p>
        </div>
      </div>
      <div className='statistics-box'>
        <div className='statics-info first-statics-info'>
          <h3>6 563 944</h3>
          <p>{t('person-e')}</p>
        </div>
        <div className='statics-info'>
          <h3>135 737</h3>
          <p>{t('person-b')}</p>
        </div>
      </div>
    </section>
  )
}

export default Statistika
