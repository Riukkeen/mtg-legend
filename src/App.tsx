import React from 'react'
import './index.css'
import Home from './home/Home'
import Menu from './menu/Menu'
import MenuNavigation from './menuNavigation/MenuNavigation'

const App = () => {
  return (
    <div className='container'>
      <Menu />
      <Home />
      <MenuNavigation />
    </div>
  )
}

export default App
