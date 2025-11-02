import './App.css'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import FourOFour from './pages/FourOFour'
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
    <main className='h-screen'>
      <NavBar />
       <Toaster position="bottom-left" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path='/project' element={ <ProjectPage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='*' element={ <FourOFour /> } />
      </Routes>
      <Footer />
      </main>
    </>
  )
}

export default App
