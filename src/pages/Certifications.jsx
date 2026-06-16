import { useState, useEffect } from 'react'
import { awards, achievements } from '../data/data'
import { useLang, t, tField } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'
import { GiBattleship, GiHeartOrgan, GiPlantsAndAnimals, GiStarMedal } from 'react-icons/gi'
import { GoLaw } from 'react-icons/go'
import { FcGraduationCap } from 'react-icons/fc'
import { MdBloodtype } from 'react-icons/md'
import { RiSwordLine } from 'react-icons/ri'
import { GrAchievement } from 'react-icons/gr'

const galleryPhotos = [
  { src: '/gallery/photo7.jpeg', caption: { english: 'A.R. Kalai Mamandram — receiving award for outstanding achievement', tamil: 'A.R. கலை மாமன்றம் — சாதனைக்காக விருது பெறுகிறார்' } },
  { src: '/gallery/photo8.jpeg', caption: { english: 'Kalai Mamandram felicitation — group award ceremony on stage', tamil: 'கலை மாமன்றம் பாராட்டு — மேடையில் குழு விருது விழா' } },
  { src: '/gallery/photo9.jpeg', caption: { english: 'Holding the International Tamil University USA certificate', tamil: 'சர்வதேச தமிழ் பல்கலைக்கழகம் USA சான்றிதழுடன்' } },
  { src: '/gallery/photo1.jpeg', caption: { english: 'Community felicitation — receiving flowers from supporters', tamil: 'சமூக பாராட்டு — ஆதரவாளர்களிடம் இருந்து பூ வரவேற்பு' } },
  { src: '/gallery/photo2.jpeg', caption: { english: 'Award ceremony — Maram Varam Arakkattalai, 2024', tamil: 'விருது விழா — மரம் வரம் அரக்கட்டளை, 2024' } },
  { src: '/gallery/photo3.jpeg', caption: { english: 'Maram Varam Arakkattalai recognition event', tamil: 'மரம் வரம் அரக்கட்டளை அங்கீகார விழா' } },
  { src: '/gallery/photo4.jpeg', caption: { english: 'Receiving the International Tamil University USA certificate', tamil: 'சர்வதேச தமிழ் பல்கலைக்கழகம் USA சான்றிதழ் பெறுகிறார்' } },
  { src: '/gallery/photo5.jpeg', caption: { english: 'Meeting with distinguished dignitaries', tamil: 'சிறப்பு விருந்தினர்களுடன் சந்திப்பு' } },
  { src: '/gallery/photo6.jpeg', caption: { english: 'Social service felicitation — honoured at community gathering', tamil: 'சமூக சேவைக்காக பாராட்டு' } },
  { src: '/gallery/photo10.jpeg', caption: { english: 'Draping a silk shawl — a mark of respect', tamil: 'பட்டு சால்வை அணிவித்தல் — மரியாதையின் குறி' } },
  { src: '/gallery/photo11.jpeg', caption: { english: 'A.R. Kalai Mamandram — Tamil New Year achievers award ceremony', tamil: 'A.R. கலை மாமன்றம் — தமிழ் புத்தாண்டு சாதனையாளர் விருது விழா' } },
]

const iconMap = [
  <MdBloodtype />,
  <GiPlantsAndAnimals />,
  <FcGraduationCap />,
  <GiHeartOrgan />,
]

const iconMap2 = [
  <GrAchievement />,
  <RiSwordLine />
]

function Gallery({ lang }) {
  const [lightbox, setLightbox] = useState(null)
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [])
  const prev = () => setLightbox(i => (i - 1 + galleryPhotos.length) % galleryPhotos.length)
  const next = () => setLightbox(i => (i + 1) % galleryPhotos.length)
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
        {galleryPhotos.map((photo, i) => {
          const isWide = i === 0 || i === 3 || i === 6
          return (
            <div key={photo.src} onClick={() => setLightbox(i)} style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--navy)', aspectRatio: isWide ? '16/10' : '4/3', gridColumn: isWide ? 'span 2' : 'span 1' }}>
              <img src={photo.src} alt={t(photo.caption, lang)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(14,31,61,0.75) 0%,transparent 55%)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: '1.2rem' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#fff', lineHeight: 1.5, margin: 0 }}>{t(photo.caption, lang)}</p>
              </div>
              <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(14,31,61,0.65)', backdropFilter: 'blur(4px)', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'var(--gold-light)', border: '1px solid rgba(184,137,42,0.3)' }}>⊕</div>
            </div>
          )
        })}
      </div>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(6,12,24,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <button onClick={e => { e.stopPropagation(); prev() }} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(184,137,42,0.15)', border: '1px solid rgba(184,137,42,0.4)', color: 'var(--gold-light)', fontSize: '1.5rem', width: '48px', height: '48px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '880px', width: '100%', textAlign: 'center' }}>
            <img src={galleryPhotos[lightbox].src} alt="" style={{ maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block', margin: '0 auto', border: '2px solid rgba(184,137,42,0.3)', boxShadow: '0 24px 80px rgba(0,0,0,0.7)' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'rgba(247,244,239,0.65)', marginTop: '1rem', fontSize: '0.95rem' }}>{t(galleryPhotos[lightbox].caption, lang)}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(247,244,239,0.3)', marginTop: '0.4rem', letterSpacing: '0.15em' }}>{lightbox + 1} / {galleryPhotos.length} · {lang === 'english' ? 'ESC to close' : 'ESC மூட'}</p>
          </div>
          <button onClick={e => { e.stopPropagation(); next() }} style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(184,137,42,0.15)', border: '1px solid rgba(184,137,42,0.4)', color: 'var(--gold-light)', fontSize: '1.5rem', width: '48px', height: '48px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '1.2rem', right: '1.5rem', background: 'none', border: 'none', color: 'rgba(247,244,239,0.5)', fontSize: '1.8rem', cursor: 'pointer' }}>×</button>
        </div>
      )}
    </>
  )
}

export default function Certifications() {
  const { lang } = useLang()

  // Pull awards data from JSON
  const awardsFromJson = awards.achievements_and_recognition || []
  const honorsFromJson = achievements.awards_and_honors || []

  const ui = {
    english: {
      eyebrow: 'Honours & Recognition',
      title: <>Awards &amp; <span style={{ color: 'var(--gold-light)' }}>Certifications</span></>,
      subtitle: 'Decades of excellence at sea and on land — recognised by institutions across India and the United States.',
      awardsEyebrow: 'Achievements', awardsTitle: <>Awards &amp; <span>Honours</span></>,
      bannerTitle: '🎓 Honorary Doctorate — American Global University',
      bannerText: 'Awarded through the Thyagi R.V. Anantha Krishnan Trust in recognition of Dr. Capt. Rajan\'s lifelong commitment to service, education, and leadership.',
      galleryEyebrow: 'Visual Chronicle', galleryTitle: <>Photo <span>Gallery</span></>,
      gallerySubtitle: 'Moments of recognition, service, and community leadership',
      credsEyebrow: 'Qualifications', credsTitle: <>Professional <span>Credentials</span></>,
      futureEyebrow: 'Future Vision', futureTitle: 'Large-Scale Service in Tamil Nadu', futureDate: 'Target',
    },
    tamil: {
      eyebrow: 'கவுரவங்கள் & அங்கீகாரம்',
      title: <>விருதுகள் &amp; <span style={{ color: 'var(--gold-light)' }}>சான்றிதழ்கள்</span></>,
      subtitle: 'கடலிலும் நிலத்திலும் பல தசாப்தகால சிறப்பு — இந்தியா மற்றும் அமெரிக்காவில் அங்கீகரிக்கப்பட்டது.',
      awardsEyebrow: 'சாதனைகள்', awardsTitle: <>விருதுகள் &amp; <span>கவுரவங்கள்</span></>,
      bannerTitle: '🎓 கௌரவ டாக்டர் பட்டம் — அமெரிக்கன் குளோபல் யுனிவர்சிட்டி',
      bannerText: 'தியாகி R.V. அனந்தகிருஷ்ணன் டிரஸ்ட் மூலம் வழங்கப்பட்ட இந்த கௌரவ டாக்டர் பட்டம், சேவை, கல்வி மற்றும் தலைமைக்கான அர்ப்பணிப்பை அங்கீகரிக்கிறது.',
      galleryEyebrow: 'காட்சி குறிப்பேடு', galleryTitle: <>புகைப்பட <span>தொகுப்பு</span></>,
      gallerySubtitle: 'அங்கீகாரம், சேவை மற்றும் சமூக தலைமையின் தருணங்கள்',
      credsEyebrow: 'தகுதிகள்', credsTitle: <>தொழில்முறை <span>சான்றிதழ்கள்</span></>,
      futureEyebrow: 'எதிர்கால தொலைநோக்கு', futureTitle: 'தமிழ்நாட்டில் பெரிய அளவிலான சேவை', futureDate: 'இலக்கு',
    },
  }
  const u = ui[lang]

  const creds = {
    english: [
      { icon: <GiBattleship />, label: "Captain's Certificate", desc: 'Merchant Navy Captain certification with international maritime authority.' },
      { icon: <GiStarMedal />, label: 'Naval Service', desc: '7 years of honorable service in the Indian Navy.' },
      { icon: <GoLaw />, label: 'LL.B. — Law Degree', desc: 'Bachelor of Laws — contributing to human rights advocacy.' },
      { icon: <FcGraduationCap />, label: 'M.A. — Master of Arts', desc: 'Post-graduate qualification supporting leadership and community work.' },
    ],
    tamil: [
      { icon: <GiBattleship />, label: 'கேப்டன் சான்றிதழ்', desc: 'சர்வதேச கடல் அதிகாரத்துடன் மெர்சன்ட் நேவி கேப்டன் சான்றிதழ்.' },
      { icon: <GiStarMedal />, label: 'கடற்படை சேவை', desc: 'இந்திய கடற்படையில் 7 ஆண்டுகள் கவுரவமான சேவை.' },
      { icon: <GoLaw />, label: 'LL.B. — சட்டப் பட்டம்', desc: 'சட்ட இளங்கலை — மனித உரிமை ஆதரவுக்கு பங்களிப்பு.' },
      { icon: <FcGraduationCap />, label: 'M.A. — முதுகலை பட்டம்', desc: 'தலைமை மற்றும் சமூக பணியை ஆதரிக்கும் முதுகலை கல்வித் தகுதி.' },
    ],
  }

  return (
    <div className="page">
      <section className="cert-hero">
        <span className="section-eyebrow" style={{ color: 'rgba(247,244,239,0.55)' }}>{u.eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', marginBottom: '1rem' }}>{u.title}</h1>
        <p style={{ color: 'rgba(247,244,239,0.7)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>{u.subtitle}</p>
      </section>

      {/* CREDENTIALS */}
      <section style={{ background: 'var(--bg)', padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-eyebrow">{u.credsEyebrow}</span>
            <h2 className="section-title">{u.credsTitle}</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {creds[lang].map((c, i) => (
              <RevealOnScroll direction="up" delay={i * 100} key={c.label}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', boxShadow: '0 2px 8px rgba(14,31,61,0.05)', height: '100%' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{c.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{c.label}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{c.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS — sourced from awards_and_titles.json */}
      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">{u.awardsEyebrow}</span>
          <h2 className="section-title">{u.awardsTitle}</h2>
          <div className="section-line" />
        </div>
        <div className="awards-grid">
          {awardsFromJson.map((a, i) => (
            <RevealOnScroll direction="up" delay={i * 100} key={i}>
              <div className="award-card">
                <div className="award-medal">{iconMap[i]}</div>
                <div className="award-info">
                  <h4>{tField(a, lang, 'title')}</h4>
                  <p>{tField(a, lang, 'description')}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
          {honorsFromJson.map((h, i) => (
            <RevealOnScroll direction="up" delay={i * 100} key={`h${i}`}>
              <div className="award-card">
                <div className="award-medal">{iconMap2[i]}</div>
                <div className="award-info">
                  <h4>{t(h.title, lang)}</h4>
                  <p>{t(h.description, lang)}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="left">
          <div className="cert-banner">
            <h3>{u.bannerTitle}</h3>
            <p>{u.bannerText}</p>
            <div className="org-list">
              <span className="org-badge">American Global University</span>
              <span className="org-badge">Thyagi R.V. Anantha Krishnan Trust</span>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* GALLERY */}
      <section style={{ background: 'var(--bg-alt)', padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header">
            <RevealOnScroll direction="up">
              <span className="section-eyebrow">{u.galleryEyebrow}</span>
              <h2 className="section-title">{u.galleryTitle}</h2>
              <div className="section-line" />
              <p style={{ color: 'var(--text-muted)', marginTop: '1.2rem', fontSize: '0.95rem', maxWidth: '580px', margin: '1.2rem auto 0' }}>{u.gallerySubtitle}</p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll direction="up" delay={200}>
            <div style={{ marginTop: '3rem' }}><Gallery lang={lang} /></div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  )
}
