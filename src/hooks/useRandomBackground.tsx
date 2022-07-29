// TODO: I will must look up if simplify imports
import background1 from '../assets/background-1.jpg'
import background2 from '../assets/background-2.jpg'
import background3 from '../assets/background-3.jpg'
import background4 from '../assets/background-4.jpg'
import background5 from '../assets/background-5.jpg'
import background6 from '../assets/background-6.jpg'
import background7 from '../assets/background-7.jpg'

const useRandomBackground = () => {
  const allBackground: Array<string> = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
  ]

  return `url(${
    allBackground[Math.floor(Math.random() * allBackground.length)]
  })`
}

export default useRandomBackground
