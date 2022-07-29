import React from 'react'
import useRandomBackground from '../hooks/useRandomBackground'
import Seacher from './Seacher'

const Home = () => {
  const image: string = useRandomBackground()

  return (
    <div className='wrapper-home' style={{ backgroundImage: image }}>
      <Seacher />
    </div>
  )
}

export default Home
