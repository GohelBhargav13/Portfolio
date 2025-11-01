import './App.css'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <main className='h-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      <Footer />
      </main>
    </>
  )
}

export default App
