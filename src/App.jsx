import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import BemVindo from './components/BemVindo'

function App() {
  return (
    <div>
      <Header
        titulo="My Daily Habits"
        descricao="Gerencie seus hábitos diários de forma simples e visual."
      />

      <BemVindo
        nomeUsuario="Paulo Mesquita"
        totalHabitos={3}
      />

      <br />
      <Footer />
    </div>
  )
}
export default App