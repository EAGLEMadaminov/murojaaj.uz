import React from 'react'
import Footer from '../Home/Footer.js'
import {fetchPokemon} from '../api/index.js'

function News() {
  console.log(fetchPokemon('charmander'))
  return (
    <div>
      <Footer/>
    </div>
  )
}

export default News
