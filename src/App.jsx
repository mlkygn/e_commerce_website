import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

import Header from './common/header/Header'
import Pages from './pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Pages/>
    </>
  )
}

export default App
