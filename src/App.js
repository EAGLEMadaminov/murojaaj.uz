import React, { useState, createContext } from 'react'
import Navbar from './companents/Navbar/Navbar'
import Home from './companents/Home/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './companents/News/News'
import Statistika from './companents/Home/Statistika'

export const ToggleContext = createContext(null)

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [firstColor, setFirstColor] = useState(false)
  const [secondColor, setSecondColor] = useState(false)
  const [thirdColor, setThirdColor] = useState(false)

  const handleColorBlue = () => {
    setFirstColor(true)
    setSecondColor(false)
    setThirdColor(false)
  }
  const handleColorEasy = () => {
    setSecondColor(true)
    setFirstColor(false)
    setThirdColor(false)
  }
  const handleColorBlack = () => {
    setThirdColor(true)
    setFirstColor(false)
    setSecondColor(false)
  }
  const openHendlerBtn = () => {
    setIsOpen(!isOpen)
  } 

  const AppBarColorChange = (d, e, f) => {
    if (e) {
      return 'color-easy '
    } else if (d) {
      return 'full-screen'
    } else if (f) {
      return 'color-black essential'
    }
    return 'full-screen'
  }

  return (
    <BrowserRouter>
      <ToggleContext.Provider
        value={{
          openHendlerBtn,
          firstColor,
          secondColor,
          thirdColor,
          setFirstColor,
          handleColorBlue,
          handleColorEasy,
          handleColorBlack,
          isOpen,
          setIsOpen,
        }}
      >
        <div
          className={AppBarColorChange(firstColor, secondColor, thirdColor)}
          onClick={() => setIsOpen(false)}
        >
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/#statistika' element={<Statistika />} />
          </Routes>
        </div>
      </ToggleContext.Provider>
    </BrowserRouter>
  )
}

export default App
