import { useState, useEffect } from 'react'
import { useLang, t } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'
import { GiBattleship } from 'react-icons/gi'
import { LiaShipSolid } from 'react-icons/lia'
import { BsFuelPump } from 'react-icons/bs'

const socialPhotos = [
  { src: '/social/food1.jpeg', caption: { english: 'Free meal distribution to elderly women and children', tamil: 'முதியோர் மற்றும் குழந்தைகளுக்கு இலவச உணவு விநியோகம்' } },
  { src: '/social/food2.jpeg', caption: { english: 'Volunteers serving food to senior citizens', tamil: 'முதியோருக்கு உணவு பரிமாறும் தன்னார்வலர்கள்' } },
  { src: '/social/food3.jpeg', caption: { english: 'Dr. Capt. Rajan overseeing food service at old age home', tamil: 'முதியோர் இல்லத்தில் உணவு சேவையை மேற்பார்வையிடும் டாக்டர் கேப்டன் ராஜன்' } },
  { src: '/social/food4.jpeg', caption: { english: 'Full dining hall — elderly residents being served', tamil: 'உணவு அரங்கம் நிரம்பி — முதியோருக்கு உணவு பரிமாறப்படுகிறது' } },
  { src: '/social/food5.jpeg', caption: { english: 'Row of senior men enjoying a hearty meal', tamil: 'வரிசையில் முதியோர் மனநிறைவாக உண்கின்றனர்' } },
  { src: '/social/food6.jpeg', caption: { english: 'Akshaya Trust — traditional banana leaf feast for destitute elders', tamil: 'அக்ஷயா மரம் — ஆதரவற்ற முதியோருக்கு வாழை இலை விருந்து' } },
  { src: '/social/food7.jpeg', caption: { english: 'Large gathering of elders enjoying a full meal served with care', tamil: 'பெரும் கூட்டத்தில் முதியோருக்கு அன்புடன் பரிமாறப்பட்ட சாப்பாடு' } },
  { src: '/social/food8.jpeg', caption: { english: 'Elderly women served meals at their bedside — compassion in every plate', tamil: 'படுக்கை அருகே முதியோர் பெண்களுக்கு உணவு — ஒவ்வொரு தட்டிலும் அன்பு' } },
]

function SocialCarousel({ lang }) {
  return (
    <div className="horizontal-carousel">
      <div className="carousel-tracks">
        {[...socialPhotos, ...socialPhotos].map((social, i) => (
          <div className="carousel-item" key={i}>
            <img src={social.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

const expansionData = {
  english: [
    { year: '2012', label: 'King Marine Services Founded', icon: <GiBattleship /> },
    { year: '2017', label: 'First Petrol Bunk — Thoothukudi', icon: <BsFuelPump /> },
    { year: '2019', label: 'Chinthamani Fuel Station', icon: <BsFuelPump /> },
    { year: '2020', label: 'Petrol Bunk at Thirumagalam', icon: <BsFuelPump /> },
    { year: '2020', label: 'Thirupuvanam Petrol Bunk', icon: <BsFuelPump /> },
    { year: '2021', label: 'King Marine 1 Ship Services', icon: <LiaShipSolid /> },
  ],
  tamil: [
    { year: '2012', label: 'கிங் மரைன் சர்வீசஸ் நிறுவப்பட்டது', icon: <GiBattleship /> },
    { year: '2017', label: 'முதல் பெட்ரோல் பங்க் — தூத்துக்குடி', icon: <BsFuelPump /> },
    { year: '2019', label: 'சிந்தாமணி எரிபொருள் நிலையம்', icon: <BsFuelPump /> },
    { year: '2020', label: 'பெட்ரோல் பங்க் (திருமங்கலம்)', icon: <BsFuelPump /> },
    { year: '2020', label: 'திருபுவனம் பெட்ரோல் பங்க்', icon: <BsFuelPump /> },
    { year: '2021', label: 'கிங் மரைன் 1 கப்பல் சேவைகள்', icon: <LiaShipSolid /> },
  ]
}

export default function Services() {
  const { lang } = useLang()
  const expansion = expansionData[lang]

  const ui = {
    english: {
      eyebrow: 'What We Do', title: <>Our <span style={{ color: 'var(--gold-light)' }}>Services</span></>, subtitle: 'From the deep ocean to Tamil Nadu\'s roads and communities — King Marine Services delivers on every front.',
      csrEyebrow: 'CSR In Action', csrTitle: <>Community <span>Food Service</span></>, csrSubtitle: 'Serving nutritious meals to the elderly and underprivileged — a continuing act of compassion by King Marine Services',
      expEyebrow: 'Growth', expTitle: <>Business <span>Expansion</span></>
    },
    tamil: {
      eyebrow: 'நாங்கள் என்ன செய்கிறோம்', title: <>எங்கள் <span style={{ color: 'var(--gold-light)' }}>சேவைகள்</span></>, subtitle: 'ஆழமான கடலில் இருந்து தமிழ்நாட்டின் சாலைகள் மற்றும் சமூகங்கள் வரை — கிங் மரைன் சர்வீசஸ் எல்லா முனைகளிலும் சேவை செய்கிறது.',
      csrEyebrow: 'சி.எஸ்.ஆர் நடவடிக்கை', csrTitle: <>சமூக <span>உணவு சேவை</span></>, csrSubtitle: 'முதியோர் மற்றும் ஏழை மக்களுக்கு சத்தான உணவு வழங்குதல் — கிங் மரைன் சர்வீசஸின் தொடர்ச்சியான இரக்க செயல்',
      expEyebrow: 'வளர்ச்சி', expTitle: <>வணிக <span>விரிவாக்கம்</span></>
    }
  }
  const u = ui[lang]

  return (
    <div className="page">
      <section className="services-hero">
        <span className="section-eyebrow" style={{ marginBottom: '1rem', display: 'block', color: 'rgba(247,244,239,0.55)' }}>{u.eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', marginBottom: '1rem' }}>{u.title}</h1>
        <p style={{ color: 'rgba(247,244,239,0.7)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>{u.subtitle}</p>
      </section>

      {/* Business Expansion */}
      <section style={{ background: 'var(--surface)', padding: '3rem  2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-eyebrow">{u.expEyebrow}</span>
            <h2 className="section-title">{u.expTitle}</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {expansion.map((item, i) => (
              <RevealOnScroll direction="up" delay={i * 100} key={i}>
                <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', padding: '1.8rem', display: 'flex', gap: '1.2rem', alignItems: 'center', boxShadow: '0 2px 8px rgba(14,31,61,0.05)' }}>
                  <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--gold-dim)', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{item.year}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600 }}>{item.label}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Community Food Service */}
      <section style={{ background: 'var(--bg-alt)', padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header">
            <RevealOnScroll direction="up">
              <span className="section-eyebrow">{u.csrEyebrow}</span>
              <h2 className="section-title">{u.csrTitle}</h2>
              <div className="section-line" />
              <p style={{ color: 'var(--text-muted)', marginTop: '1.2rem', fontSize: '0.95rem', maxWidth: '580px', margin: '1.2rem auto 0' }}>{u.csrSubtitle}</p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll direction="up" delay={200}>
            <div style={{ marginTop: '3rem', }}><SocialCarousel lang={lang} /></div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  )
}
