import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const logNumbers = numbers.map(num => <Card num = {num}/>)
  console.log(logNumbers)

  return (
    <>
      <h1 className='h1'>Welcome To My First REACT App</h1>
      {logNumbers}
    </>
  )
}

export default App
