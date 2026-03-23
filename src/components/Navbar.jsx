import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const links = {
  english: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ],
  tamil: [
    { to: '/', label: 'முகப்பு' },
    { to: '/about', label: 'எங்களை பற்றி' },
    { to: '/services', label: 'சேவைகள்' },
    { to: '/certifications', label: 'சான்றிதழ்கள்' },
    { to: '/gallery', label: 'காட்சியகம்' },
    { to: '/contact', label: 'தொடர்பு' },
  ]
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { lang, toggle } = useLang()
  const navLinks = links[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="navbar-brand">
          <div className="navbar-anchor">
            <img className="anchor-svg" src='/logo.png' alt='King Marine Services' />
          </div>
          <div className="navbar-logo-text">
            <span className="bottom">{lang === 'english' ? 'Dr. Capt.' : 'டாக்டர் கேப்டன்'}</span>
            <span className="top">{lang === 'english' ? 'P.E.J. Rajan' : 'பி.இ.ஜெ. ராஜன்'}</span>
          </div>
        </Link>

        <ul className="navbar-links">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <button className="lang-toggle" onClick={toggle} title="Switch Language">
          <span className={lang === 'english' ? 'lang-active' : ''}>EN</span>
          <span className="lang-sep">|</span>
          <span className={lang === 'tamil' ? 'lang-active' : ''}>தமிழ்</span>
        </button>

        <button className="navbar-mobile-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <><line x1="4" y1="4" x2="20" y2="20" stroke="#b8892a" strokeWidth="1.5" /><line x1="20" y1="4" x2="4" y2="20" stroke="#b8892a" strokeWidth="1.5" /></>
              : <><line x1="3" y1="7" x2="21" y2="7" stroke="#b8892a" strokeWidth="1.5" /><line x1="3" y1="13" x2="21" y2="13" stroke="#b8892a" strokeWidth="1.5" /><line x1="3" y1="19" x2="21" y2="19" stroke="#b8892a" strokeWidth="1.5" /></>
            }
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
          ))}
          <button className="lang-toggle-mobile" onClick={toggle}>
            {lang === 'english' ? '🌐 Switch to தமிழ்' : '🌐 Switch to English'}
          </button>
        </div>
      )}

      {/* Scroll to Top */}
      <div
        className="scrollto"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <h2>
          ↑
        </h2>
      </div>
    </>
  )
}
