import { useState, useEffect } from 'react'
import { profile, business, eventachievements, activity } from '../data/data'
import { useLang, t, tField } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'

const aboutPhotos = [
  { src: '/social/about1.jpeg', caption: { english: 'Draping a silk shawl in honour — a gesture of deep respect', tamil: 'பட்டு சால்வை அணிவித்தல் — மரியாதையின் சின்னம்' } },
  { src: '/social/about2.jpeg', caption: { english: 'Meeting with distinguished leaders and dignitaries', tamil: 'தலைவர்கள் மற்றும் சிறப்பு விருந்தினர்களுடன் சந்திப்பு' } },
  { src: '/social/about3.jpeg', caption: { english: 'Group photo at an official gathering with prominent figures', tamil: 'அதிகாரப்பூர்வ கூட்டத்தில் குழு புகைப்படம்' } },
  { src: '/social/about4.jpeg', caption: { english: 'Receiving an award plaque in recognition of outstanding service', tamil: 'சிறந்த சேவைக்காக விருது பலகை பெறுகிறார்' } },
  { src: '/social/about5.jpeg', caption: { english: 'Felicitation with flowers from supporters and colleagues', tamil: 'ஆதரவாளர்களிடம் இருந்து பூ வரவேற்பு' } },
]

function AboutGallery({ lang }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % aboutPhotos.length)
    }, 4000) // autoplay

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const prev = () => setIndex(i => (i - 1 + aboutPhotos.length) % aboutPhotos.length)
  const next = () => setIndex(i => (i + 1) % aboutPhotos.length)

  return (
    <div className="carousel">

      {/* Slides */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {aboutPhotos.map((photo, i) => (
          <div className="carousel-slide" key={photo.src}>
            <img
              src={photo.src}
              alt={t(photo.caption, lang)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: photo.position || 'center'
              }}
            />

            <div className="carousel-overlay">
              <p>{t(photo.caption, lang)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="carousel-btn left" onClick={prev}>‹</button>
      <button className="carousel-btn right" onClick={next}>›</button>

      {/* Dots */}
      <div className="carousel-dots">
        {aboutPhotos.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  )
}

export default function About() {
  const { lang } = useLang()

  // Maram Varam Trust — from activity.json
  const maramVaram = activity.activities[0].organization

  const ui = {
    english: {
      eyebrow: 'The Man Behind the Mission',
      title: <>About <span style={{ color: 'var(--gold-light)' }}>Dr. Capt. Rajan</span></>,
      subtitle: 'Sailor, captain, entrepreneur, and humanitarian — a life defined by service at sea and service to society.',
      designation: 'Marine Captain · Entrepreneur · Humanitarian',
      edu_title: 'Early Life & Education', career_title: 'Naval Career',
      career_text: `Dr. Capt. Rajan began his career in the Indian Navy. After 7 years of service, he joined the Merchant Navy and rose to the rank of Captain.`,
      found_title: 'Founding King Marine Services',
      found_text: `On 12-12-2012, Dr. Capt. Rajan founded King Marine Services in Chennai, growing it to encompass marine operations, transport logistics, and a petrol bunk network across Tamil Nadu.`,
      bunk_title: 'Petrol Bunk Network',
      social_title: 'Social Service & Community Impact',
      social_text: `Dr. Capt. Rajan's social initiatives have touched over 4500 people through education, medical aid, COVID relief, and community development.`,
      community_title: 'Community Programs',
      maram_title: 'Maram Varam Trust',
      gallery_eyebrow: 'Moments', gallery_title: <>Leadership &amp; <span>Recognition</span></>,
      gallery_subtitle: 'Captured moments of service, honour, and community leadership',
      org_eyebrow: 'Affiliations', org_title: <>Organizations &amp; <span>Roles</span></>,
    },
    tamil: {
      eyebrow: 'பணியின் பின்னணி மனிதர்',
      title: <>டாக்டர் கேப்டன் <span style={{ color: 'var(--gold-light)' }}>ராஜனை பற்றி</span></>,
      subtitle: 'மாலுமி, கேப்டன், தொழிலதிபர், மனிதநேயர் — கடலிலும் சமூகத்திலும் சேவையால் வரையறுக்கப்பட்ட வாழ்க்கை.',
      designation: 'கடல் கேப்டன் · தொழிலதிபர் · மனிதநேயர்',
      edu_title: 'ஆரம்பகால வாழ்க்கை & கல்வி', career_title: 'கடற்படை வாழ்க்கை',
      career_text: `டாக்டர் கேப்டன் ராஜன் இந்திய கடற்படையில் 7 ஆண்டுகள் சேவை புரிந்தார். பின்னர் மெர்சன்ட் நேவியில் கேப்டன் பதவி வரை உயர்ந்தார்.`,
      found_title: 'கிங் மரைன் சர்வீசஸ் நிறுவனம்',
      found_text: `12-12-2012 அன்று கிங் மரைன் சர்வீசஸை நிறுவினார். கப்பல் சேவை, போக்குவரத்து, எரிபொருள் நிலையங்கள் வரை வளர்ந்தது.`,
      bunk_title: 'பெட்ரோல் பங்க் வலையமைப்பு',
      social_title: 'சமூக சேவை & சமூக தாக்கம்',
      social_text: `2014 முதல் 4500க்கும் மேற்பட்டோருக்கு கல்வி, மருத்துவம், நிவாரணம் வழங்கியுள்ளார்.`,
      community_title: 'சமூக நிகழ்ச்சிகள்',
      maram_title: 'மரம் வரம் அறக்கட்டளை',
      gallery_eyebrow: 'தருணங்கள்', gallery_title: <>தலைமை &amp; <span>அங்கீகாரம்</span></>,
      gallery_subtitle: 'சேவை, கவுரவம், சமூக தலைமையின் படமாக்கப்பட்ட தருணங்கள்',
      org_eyebrow: 'இணைப்புகள்', org_title: <>அமைப்புகள் &amp; <span>பதவிகள்</span></>,
    },
  }
  const u = ui[lang]

  return (
    <div className="page">
      <section className="about-hero">
        <span className="section-eyebrow" style={{ color: 'rgba(247,244,239,0.55)' }}>{u.eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', marginBottom: '1rem' }}>{u.title}</h1>
        <p style={{ color: 'rgba(247,244,239,0.7)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>{u.subtitle}</p>
      </section>

      <section className="section">
        <div className="about-profile-section">
          {/* PROFILE CARD */}
          <RevealOnScroll direction="right" delay={100}>
            <div className="profile-card">
              <div className="profile-avatar">
                <img src="/profile.jpeg" alt="Dr. Capt. P.E.J. Rajan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
              <div className="profile-name">{t(profile.full_title, lang)}</div>
              <div className="profile-designation">{u.designation}</div>
              <div className="profile-detail"><span className="dot">▸</span><span>{t(profile.date_of_birth, lang)}</span></div>
              <div className="profile-detail"><span className="dot">▸</span><span>M.A., LL.B.</span></div>
              <div className="profile-detail"><span className="dot">▸</span><span>{lang === 'english' ? 'Honorary Doctorate — American Global University' : 'கௌரவ டாக்டர் பட்டம் — அமெரிக்கன் குளோபல் யுனிவர்சிட்டி'}</span></div>
              <div className="profile-detail"><span className="dot">▸</span><span>{lang === 'english' ? 'King Marine Services, Est. 2012' : 'கிங் மரைன் சர்வீசஸ், நிறுவப்பட்டது 2012'}</span></div>
              <div className="profile-tamil">{t(profile.full_title, lang === 'english' ? 'tamil' : 'english')}<br />{t(profile.name, lang)}</div>
            </div>
          </RevealOnScroll>

          {/* CONTENT */}
          <div className="about-content-section">
            <h3 className="about-heading">{u.edu_title}</h3>

            <div className="education-grid">
              {profile.education.map((e, i) => (
                <RevealOnScroll direction="left" delay={i * 100} key={i}>
                  <div className="edu-card">
                    <div className="edu-dot" />
                    <div className="edu-content">
                      <p>{t(e, lang)}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <h3>{u.career_title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>{u.career_text}</p>
            <div className="tag-cloud">
              {profile.career.map(c => <span className="tag" key={t(c, 'english')}>{t(c, lang)}</span>)}
            </div>

            <h3>{u.found_title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>{u.found_text}</p>

            <h3 className="about-heading">{u.bunk_title}</h3>

            <div className="bunk-timeline">
              {profile.petrol_bunks.map((b, i) => (
                <RevealOnScroll direction="up" delay={i * 100} key={i}>
                  <div className="bunk-card">
                    <div className="bunk-dot" />

                    <div className="bunk-content">
                      <span className="bunk-year">{b.year}</span>
                      <p>{t(b, lang)}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <h3>{u.social_title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>{u.social_text}</p>
            <div className="tag-cloud">
              {business.social_service.map(s => <span className="tag" key={t(s, 'english')}>{t(s, lang)}</span>)}
            </div>

            {/* Maram Varam Trust — from activity.json */}
            <h3>{u.maram_title}</h3>
            <div style={{ background: 'var(--gold-pale)', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                {tField(maramVaram, lang, 'name')}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--gold-dim)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                {tField(maramVaram, lang, 'president')} · {tField(maramVaram, lang, 'location')}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                {tField(maramVaram, lang, 'description')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                <strong>{lang === 'english' ? 'Mission:' : 'நோக்கம்:'}</strong> {tField(maramVaram, lang, 'mission')}
              </p>
            </div>

            <h3>{u.community_title}</h3>
            <div className="timeline">
              {eventachievements.events_and_activities && eventachievements.events_and_activities.map((e, i) => (
                <RevealOnScroll direction="left" delay={Math.min(i * 100, 300)} key={i}>
                  <div className="timeline-item" style={{ marginBottom: "2.5rem" }}>
                    {e.year && <div className="timeline-year">{e.year}</div>}
                    <div className="timeline-text">{t(e, lang)}</div>
                  </div>
                </RevealOnScroll>
              ))}
              {/* New event structure from eventachievements.json */}
              {eventachievements.events_and_support && eventachievements.events_and_support.map((e, i) => (
                <RevealOnScroll direction="left" delay={Math.min(i * 100, 300)} key={`es-${i}`}>
                  <div className="timeline-item" style={{ marginBottom: "2.5rem" }}>
                    <div className="timeline-year">—</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--navy)', marginBottom: '0.25rem' }}>{tField(e.title || e, lang, '') || t(e.title, lang)}</div>
                    <div className="timeline-text">{t(e.description, lang)}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section style={{ background: 'var(--surface)', padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-eyebrow">{u.org_eyebrow}</span>
            <h2 className="section-title">{u.org_title}</h2>
            <div className="section-line" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {business.organizations.map((o, i) => (
              <RevealOnScroll direction="up" delay={i * 100} key={i}>
                <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', padding: '2rem', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--gold-dim)', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>{o.year}</div>
                  {o.trust_details ? (
                    <>
                      <div style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: 600, marginBottom: '0.4rem' }}>{tField(o.trust_details, lang, 'name')}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{tField(o.trust_details, lang, 'founder_thalaivar')}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{tField(o.trust_details, lang, 'advisor')}</div>
                    </>
                  ) : (
                    <div style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: 600 }}>{t(o, lang)}</div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background: 'var(--bg-alt)', padding: '3rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-eyebrow">{u.gallery_eyebrow}</span>
            <h2 className="section-title">{u.gallery_title}</h2>
            <div className="section-line" />
            <p style={{ color: 'var(--text-muted)', marginTop: '1.2rem', fontSize: '0.95rem', maxWidth: '580px', margin: '1.2rem auto 0' }}>{u.gallery_subtitle}</p>
          </div>
          <div style={{ marginTop: '3rem' }}><AboutGallery lang={lang} /></div>
        </div>
      </section>
    </div>
  )
}
