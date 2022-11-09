import React, { useRef, useEffect, useState, useContext } from 'react'
import { Button } from '@material-ui/core'
import './styles.css'
import { FiSearch } from 'react-icons/fi'
import Biglogo from '../requirements/big-logo.svg'
import axios from 'axios'
import gov from '../requirements/gov.png'
import interaktiv from '../requirements/epigu.png'
import regulation from '../requirements/regulation.png'
import Mythink from '../requirements/mening-fikrim.png'
import uzInfocom from '../requirements/UZINFOCOM-logo.png'
import { ToggleContext } from '../../App'
import { ReCAPTCHA } from 'react-google-recaptcha'
import { useTranslation } from 'react-i18next'
import Statistika from './Statistika.js'

function Home() {
  const [dat, setDat] = useState([])
  const { t } = useTranslation()
  const [textSearch, setTextSearch] = useState(false)
  const { firstColor, secondColor, thirdColor } = useContext(ToggleContext)

  const changeColorInput = () => {
    changeColorInput.className = 'change-in'
  }
  const getData = async () => {
    const data = await axios.get(
      'https://abbosxon.pm.track.uz:8020/advice/categories'
    )
    setDat(data.data.category)
  }

  useEffect(() => {
    getData()
  }, [getData()])

  const handleSubmitBtn = () => {}
  const searchOrganization = () => {}
  const inputRef = useRef()
  function focus() {
    inputRef.current.focus()
    setTextSearch(!textSearch)
  }

  const AppBarColorChange = (d, e, f) => {
    if (e) {
      return 'color-easy '
    } else if (d) {
      return ''
    } else if (f) {
      return 'color-black essential'
    }
    return ''
  }
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
  const recaptchaRef = useRef()

  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync()
  }
  return (
    <div className={AppBarColorChange(firstColor, secondColor, thirdColor)}>
      <section className='section-one'>
        <div className='one-left-info'>
          <h2>{t('send-request')}</h2>
          <p>{t('allow-request')}</p>
          <Button className='quary-btn' onClick={handleSubmitBtn}>
            {t('request-btn')}
          </Button>
        </div>
        <div className='one-right-image'>
          <img src={Biglogo} alt='site-big-logo' />
        </div>
      </section>

      <section
        className={
          'section-two' +
          sectionsColorChange(firstColor, secondColor, thirdColor)
        }
      >
        <h1>{t('req-organization')}</h1>
        <div className='section-lines'>
          <span className='section-line1'></span>
          <span className='section-line2'></span>
          <span className='section-line3'></span>
        </div>
        <div className='search-organization' onMouseEnter={focus}>
          <input
            placeholder={t('organization-input')}
            type='text'
            name=''
            id=''
            ref={inputRef}
            onChange={searchOrganization}
          />
          <button onClick={focus} className='search-organ-btn'>
            {t('search-organ')} <FiSearch />
          </button>
        </div>
        <div className='organization-home'>
          <div className='organization-item'>
            <div className='organization-icon organ-1'></div>
            <div className='organizarion-info'>Markaziy muassasalar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-2'></div>
            <div className='organizarion-info'>Vazirliklar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-3'></div>
            <div className='organizarion-info'>davlat qo'mitalari</div>
          </div>
          <div className='organization-item '>
            <div className='organization-icon organ-4'></div>
            <div className='organizarion-info'>Qo'mitalar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-5'></div>
            <div className='organizarion-info'>davlat inpeksiyalari</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-6'></div>
            <div className='organizarion-info '>
              mahalli davlat hokimyati organlari
            </div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-7'></div>
            <div className='organization-info'>Agentliklar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-8'></div>
            <div className='organization-info'>Markazlar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-9'></div>
            <div className='organization-info'>Banklar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-10'></div>
            <div className='organization-info'>Jamg'armalar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-11'></div>
            <div className='organization-info'>
              Birlashmalar va aksiyadorlik jamiyatlari
            </div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-12'></div>
            <div className='organization-info'>inspeksiyalar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-13'></div>
            <div className='organization-info'>
              Boshqa muassa va tashkilotlar
            </div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-14'></div>
            <div className='organization-info'>kompaniyalar</div>
          </div>
          <div className='organization-item'>
            <div className='organization-icon organ-15'></div>
            <div className='organization-info'>uyushmava konsernlar</div>
          </div>
        </div>
      </section>
      <section className='section-three'>
        <h1>{t('answer-req')}</h1>
        <div className='section-lines'>
          <span className='section-line1'></span>
          <span className='section-line2'></span>
          <span className='section-line3'></span>
        </div>
        <div className='search-organization' onMouseEnter={focus}>
          <input
            placeholder={t('organization-input')}
            type='text'
            name=''
            id=''
            ref={inputRef}
            onChange={searchOrganization}
          />
          <button onClick={focus} className='search-organ-btn'>
            {t('search-organ')} <FiSearch />
          </button>
        </div>
        <div className='humans-right-rule'>
          {dat.map((item, index) => (
            <div key={index + 1} className='organ-item'>
              <div className='rule-icon'>
                <img src={item.image} alt='queary icon' />
              </div>
              <div className='quary-info'>{item.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section className='section-four'>
        <div className='section-four-body'>
          <h1>{t('check-req')}</h1>
          <div className='section-lines'>
            <span className='section-line1'></span>
            <span className='section-line2'></span>
            <span className='section-line3'></span>
          </div>
          <form className='check-box' onSubmit={onSubmitWithReCAPTCHA}>
            <div className='four-item'>
              <label htmlFor='quary'>{t('number-req')}</label>
              <input id='quary' type='text' />
            </div>
            <span></span>
            <div className='four-item'>
              <label htmlFor='checkState'>{t('check-state')}</label>
              <input id='checkState' type='text' />
            </div>
            <span></span>
            <div className='four-item'>
              <label htmlFor='solve'>{t('enter-math')}</label>
              <div className='solve-box'>
                <img
                  src={'https://pm.gov.uz:8020/api/captcha?v=635784afa646e'}
                  alt='recaptcha'
                />

                <input id='solve' type='text' onChange={changeColorInput} />
              </div>
            </div>
            <span></span>
            <button className='check-btn' type='button'>
              {t('check-btn')}
            </button>
          </form>
        </div>
      </section>
      <Statistika />
      <section
        className={
          'section-six' +
          sectionsColorChange(firstColor, secondColor, thirdColor)
        }
      >
        <h1>{t('benefitial-resurs')}</h1>
        <div className='section-lines'>
          <span className='section-line1'></span>
          <span className='section-line2'></span>
          <span className='section-line3'></span>
        </div>
        <div className='web-sites'>
          <a href='https://president.uz/uz'>
            <div className='site-item'>
              <div className='link-image'>
                <img
                  target='_blank'
                  src='https://murojaat.gov.uz/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpresident-site.37cf956c79f268141f64b6334e9a9fc9.png&w=128&q=75'
                  alt=''
                />
              </div>
              <p>{t('prezident-wsayt')}</p>
            </div>
          </a>
          <a href='https://gov.uz/uz'>
            <div className='site-item'>
              <div className='link-image'>
                <img src={gov} alt='' />
              </div>
              <p>{t('government-sayt')}</p>
            </div>
          </a>
          <a href='https://my.gov.uz/oz'>
            <div className='site-item'>
              <div className='link-image'>
                <img src={interaktiv} alt='' />
              </div>
              <p>{t('portal')}</p>
            </div>
          </a>
          <a href='https://regulation.gov.uz/'>
            <div className='site-item'>
              <div className='link-image'>
                <img src={regulation} alt='' />
              </div>
              <p>{t('documantation')}</p>
            </div>
          </a>
          <a href='https://meningfikrim.uz/uz'>
            <div className='site-item'>
              <div className='link-image'>
                <img src={Mythink} alt='' />
              </div>
              <p>{t('platform')}</p>
            </div>
          </a>
        </div>
      </section>
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

export default Home
