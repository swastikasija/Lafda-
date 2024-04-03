import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewInvitation from './components/NewInvitation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/newinvitation' element={<NewInvitation/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
