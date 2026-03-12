import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header
        titulo="My Daily Habits"
        descricao="Gerencie seus hábitos diários de forma simples e visual."
      />

      <br />
      <Footer />
    </div>
  )
}
export default App