import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import App from './App.js'

import './index.css'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['yz', 'uz', 'ru'],
    fallbackLng: 'uz',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
  })

const loadingMarkup = (
  <div className='loading'>
    <h2>Loading ...</h2>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
