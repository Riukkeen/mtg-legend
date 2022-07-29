import React from 'react'
import useRandomBackground from '../hooks/useRandomBackground'
import '../index.css'
import Menu from './Menu'
import Seacher from './Seacher'

const Home = () => {
  const image: string = useRandomBackground()

  return (
    <div className='wrapper-home' style={{ backgroundImage: image }}>
      <Menu />
      <Seacher />
    </div>
  )
}

export default Home
