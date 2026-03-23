import { Link } from 'react-router-dom'
import { awards } from '../data/data'
import { useLang } from '../context/LanguageContext'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa6'

export default function Footer() {
  const { lang } = useLang()
  const { email, phone } = awards.contact_details

  const nav = {
    english: [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/certifications', 'Certifications'], ['/gallery', 'Gallery'], ['/contact', 'Contact']],
    tamil: [['/', 'முகப்பு'], ['/about', 'எங்களை பற்றி'], ['/services', 'சேவைகள்'], ['/certifications', 'சான்றிதழ்கள்'], ['/gallery', 'காட்சியகம்'], ['/contact', 'தொடர்பு']]
  }

  const ui = {
    english: { ctaBtn: 'Contact Us Today', brand: <><span style={{ fontSize: '0.9rem' }}>Dr. Capt. </span>P.E.J. Rajan</>, desc: 'Led by Dr. Capt. P.E.J. Rajan, M.A., LL.B. — delivering excellence in marine operations, transport, and humanitarian service since 2012.', navTitle: 'Navigation', contactTitle: 'Contact', location: 'Thoothukudi & Chennai, Tamil Nadu, India', copy: `© ${new Date().getFullYear()} King Marine Services. All rights reserved.` },
    tamil: { ctaBtn: 'இன்றே தொடர்பு கொள்ளுங்கள்', brand: <><span style={{ fontSize: '0.9rem' }}>டாக்டர் கேப்டன் </span>பி.இ.ஜெ.ராஜன்</>, desc: 'டாக்டர் கேப்டன் பி.இ.ஜெ. ராஜன் தலைமையில் — 2012 முதல் கடல் நடவடிக்கைகள், போக்குவரத்து மற்றும் மனிதாபிமான சேவையில் சிறப்பை வழங்குகிறது.', navTitle: 'வழிசெலுத்தல்', contactTitle: 'தொடர்பு', location: 'தூத்துக்குடி & சென்னை, தமிழ்நாடு, இந்தியா', copy: `© ${new Date().getFullYear()} கிங் மரைன் சர்வீசஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.` }
  }
  const u = ui[lang]

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-title">{u.brand}</div>
          <p>{u.desc}</p>
          <div style={{ paddingTop: "50px" }}>
            <Link to="/contact" className="btn-primary" style={{ background: 'var(--gold-light)', color: 'var(--navy)' }}>{u.ctaBtn}</Link>
          </div>
        </div>
        <div className="footer-nav">
          <h4>{u.navTitle}</h4>
          <ul>{nav[lang].map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
        </div>
        <div className="footer-contact">
          <h4>{u.contactTitle}</h4>
          <p><AiOutlineMail style={{ fontSize: '1rem', textAlign: 'center' }} /> <a href={`mailto:${email}`}>{email}</a></p>
          {phone.map(p => <p key={p}><FaPhone style={{ fontSize: '1rem', textAlign: 'center' }} /> <a href={`tel:${p}`}>{p}</a></p>)}
          <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'rgba(200,192,176,0.5)' }}>{u.location}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{u.copy}</span>
        <span>Dr. Capt. P.E.J. Rajan — கிங் மரைன் சர்வீசஸ்</span>
      </div>
    </footer>
  )
}
