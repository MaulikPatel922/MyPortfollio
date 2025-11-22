import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'


function App() {
  return (
    <BrowserRouter basename='/MyPortfollio'>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
