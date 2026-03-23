import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import { AnimatePresence, motion } from 'framer-motion'
import Gallery from './pages/Gallery'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    // <AnimatePresence mode="wait">
    //   <Routes location={location} key={location.pathname}>
    //     <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
    //     <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
    //     <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
    //     <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
    //     <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
    //     <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
    //   </Routes>
    // </AnimatePresence>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}
