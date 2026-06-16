import { useState, useEffect } from 'react'
import { awards, achievements } from '../data/data'
import { useLang, t, tField } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'

const galleryPhotos = [
  { src: '/gallery/photo11.jpeg', caption: { english: 'A.R. Kalai Mamandram — Tamil New Year achievers award ceremony', tamil: 'A.R. கலை மாமன்றம் — தமிழ் புத்தாண்டு சாதனையாளர் விருது விழா' } },
  { src: '/gallery/photo7.jpeg', caption: { english: 'A.R. Kalai Mamandram — receiving award for outstanding achievement', tamil: 'A.R. கலை மாமன்றம் — சாதனைக்காக விருது பெறுகிறார்' } },
  { src: '/gallery/photo8.jpeg', caption: { english: 'Kalai Mamandram felicitation — group award ceremony on stage', tamil: 'கலை மாமன்றம் பாராட்டு — மேடையில் குழு விருது விழா' } },
  { src: '/gallery/photo1.jpeg', caption: { english: 'Community felicitation — receiving flowers from supporters', tamil: 'சமூக பாராட்டு — ஆதரவாளர்களிடம் இருந்து பூ வரவேற்பு' } },
  { src: '/gallery/photo2.jpeg', caption: { english: 'Award ceremony — Maram Varam Arakkattalai, 2024', tamil: 'விருது விழா — மரம் வரம் அரக்கட்டளை, 2024' } },
  { src: '/gallery/photo3.jpeg', caption: { english: 'Maram Varam Arakkattalai recognition event', tamil: 'மரம் வரம் அரக்கட்டளை அங்கீகார விழா' } },
  { src: '/gallery/photo4.jpeg', caption: { english: 'Receiving the International Tamil University USA certificate', tamil: 'சர்வதேச தமிழ் பல்கலைக்கழகம் USA சான்றிதழ் பெறுகிறார்' } },
  { src: '/gallery/photo5.jpeg', caption: { english: 'Meeting with distinguished dignitaries', tamil: 'சிறப்பு விருந்தினர்களுடன் சந்திப்பு' } },
  { src: '/gallery/photo6.jpeg', caption: { english: 'Social service felicitation — honoured at community gathering', tamil: 'சமூக சேவைக்காக பாராட்டு' } },
  { src: '/gallery/photo10.jpeg', caption: { english: 'Draping a silk shawl — a mark of respect', tamil: 'பட்டு சால்வை அணிவித்தல் — மரியாதையின் குறி' } },
  // { src: '/gallery/photo9.jpeg', caption: { english: 'Holding the International Tamil University USA certificate', tamil: 'சர்வதேச தமிழ் பல்கலைக்கழகம் USA சான்றிதழுடன்' } },
  { src: '/social/about2.jpeg', caption: { english: 'Holding the International Tamil University USA certificate', tamil: 'சர்வதேச தமிழ் பல்கலைக்கழகம் USA சான்றிதழுடன்' } },
  { src: '/social/about4.jpeg', caption: { english: 'Holding the International Tamil University USA certificate', tamil: 'சர்வதேச தமிழ் பல்கலைக்கழகம் USA சான்றிதழுடன்' } },
  {
    src: '/gallery/photo12.jpeg',
    caption: {
      english: 'Honouring community leader with a token of appreciation at a public event',
      tamil: 'சமூக தலைவருக்கு பொதுக்கூட்டத்தில் பாராட்டு வழங்கும் நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo13.jpeg',
    caption: {
      english: 'Felicitation ceremony — presenting a shawl as a mark of respect',
      tamil: 'மரியாதையின் குறியாக சால்வை அணிவிக்கும் பாராட்டு விழா'
    }
  },
  {
    src: '/gallery/photo14.jpeg',
    caption: {
      english: 'Award presentation — recognition for service and contribution',
      tamil: 'சேவை மற்றும் பங்களிப்புக்கான விருது வழங்கும் நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo15.jpeg',
    caption: {
      english: 'Meeting with community representatives and supporters',
      tamil: 'சமூக பிரதிநிதிகள் மற்றும் ஆதரவாளர்களுடன் சந்திப்பு'
    }
  },
  {
    src: '/gallery/photo16.jpeg',
    caption: {
      english: 'Young achiever honoured with certificate at public function',
      tamil: 'பொதுநிகழ்வில் இளம் சாதனையாளருக்கு சான்றிதழ் வழங்கி பாராட்டு'
    }
  },
  {
    src: '/gallery/photo17.jpeg',
    caption: {
      english: 'Recognition ceremony — receiving award from dignitaries',
      tamil: 'முக்கிய விருந்தினர்களிடமிருந்து விருது பெறும் பாராட்டு விழா'
    }
  },
  {
    src: '/gallery/photo18.jpeg',
    caption: {
      english: 'Achievement recognition with shawl and award presentation',
      tamil: 'சால்வை அணிவித்து விருது வழங்கி சாதனைக்கு அங்கீகாரம்'
    }
  },
  {
    src: '/gallery/photo20.jpeg',
    caption: {
      english: 'Celebration moment with supporters during public gathering',
      tamil: 'பொதுக்கூட்டத்தில் ஆதரவாளர்களுடன் கொண்டாடும் தருணம்'
    }
  },
  {
    src: '/gallery/photo21.jpeg',
    caption: {
      english: 'Interaction with public and local leaders on community issues',
      tamil: 'சமூக பிரச்சினைகள் குறித்து பொதுமக்கள் மற்றும் தலைவர்களுடன் கலந்துரையாடல்'
    }
  },
  {
    src: '/gallery/photo22.jpeg',
    caption: {
      english: 'Public meeting addressing local concerns and development',
      tamil: 'உள்ளூர் வளர்ச்சி மற்றும் பிரச்சினைகள் குறித்து பொதுக்கூட்டம்'
    }
  },
  {
    src: '/gallery/photo23.jpeg',
    caption: {
      english: 'Warm welcome with garland by supporters',
      tamil: 'ஆதரவாளர்களால் மாலை அணிவித்து வரவேற்பு'
    }
  },
  {
    src: '/gallery/photo25.jpeg',
    caption: {
      english: 'Formal meeting and recognition with dignitaries',
      tamil: 'முக்கிய நபர்களுடன் சந்தித்து பாராட்டு பெறும் நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo27.jpeg',
    caption: {
      english: 'Award ceremony celebrating achievements and contributions',
      tamil: 'சாதனைகள் மற்றும் பங்களிப்புகளை கொண்டாடும் விருது விழா'
    }
  },
  {
    src: '/gallery/photo28.jpeg',
    caption: {
      english: 'Recognition event with distinguished guests and community leaders',
      tamil: 'முக்கிய விருந்தினர்கள் மற்றும் சமூக தலைவர்களுடன் அங்கீகார நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo29.jpeg',
    caption: {
      english: 'Honouring distinguished guest with award and shawl at a public function',
      tamil: 'பொதுநிகழ்வில் சிறப்பு விருந்தினருக்கு விருது மற்றும் சால்வை அணிவித்து மரியாதை செலுத்துதல்'
    }
  },
  {
    src: '/gallery/photo30.jpeg',
    caption: {
      english: 'Formal meeting — presenting recognition from an international institution',
      tamil: 'சர்வதேச நிறுவனத்தின் சார்பில் அங்கீகாரம் வழங்கும் நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo31.jpeg',
    caption: {
      english: 'Temple festival celebration with devotees and vibrant chariot procession',
      tamil: 'பக்தர்களுடன் கூடிய கோவில் திருவிழா மற்றும் தேரோட்டம்'
    }
  },
  {
    src: '/gallery/photo33.jpeg',
    caption: {
      english: 'Interaction with leaders — exchanging greetings and building connections',
      tamil: 'தலைவர்களுடன் சந்தித்து வாழ்த்து பரிமாறும் மற்றும் உறவுகளை வளர்த்தல்'
    }
  },

  {
    src: '/gallery/photo35.jpeg',
    caption: {
      english: 'Felicitation ceremony — draping shawl as a symbol of respect',
      tamil: 'மரியாதையின் அடையாளமாக சால்வை அணிவிக்கும் பாராட்டு நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo37.jpeg',
    caption: {
      english: 'Award recognition event celebrating achievements and service',
      tamil: 'சாதனைகள் மற்றும் சேவையை பாராட்டும் விருது வழங்கும் நிகழ்வு'
    }
  },
  {
    src: '/gallery/photo19.jpeg',
    caption: {
      english: 'Community announcement highlighting leadership and service',
      tamil: 'தலைமைத்துவம் மற்றும் சேவையை வெளிப்படுத்தும் சமூக அறிவிப்பு'
    }
  },
  {
    src: '/gallery/photo24.jpeg',
    caption: {
      english: 'Team gathering and interaction during an event',
      tamil: 'நிகழ்வில் குழுவுடன் கலந்துரையாடும் தருணம்'
    }
  },
  {
    src: '/gallery/photo26.jpeg',
    caption: {
      english: 'Community visit highlighting public engagement',
      tamil: 'பொதுமக்களுடன் தொடர்பு கொள்ளும் சமூகப் பயணம்'
    }
  },
  {
    src: '/gallery/photo38.jpeg',
    caption: {
      english: 'Supporting children through welfare initiatives and financial aid',
      tamil: 'குழந்தைகளுக்கு நலத்திட்ட உதவி மற்றும் பொருளாதார ஆதரவு வழங்குதல்'
    }
  },
  {
    src: '/gallery/photo32.jpeg',
    caption: {
      english: 'Public announcement highlighting leadership and social service initiatives',
      tamil: 'தலைமைத்துவம் மற்றும் சமூக சேவையை வெளிப்படுத்தும் பொதுமக்கள் அறிவிப்பு'
    }
  },
  {
    src: '/gallery/photo34.jpeg',
    caption: {
      english: 'Community bonding moment with supporters and well-wishers',
      tamil: 'ஆதரவாளர்கள் மற்றும் நண்பர்களுடன் இணையும் சமூக தருணம்'
    }
  },
  // {
  //   src: '/gallery/photo36.jpeg',
  //   caption: {
  //     english: 'Warm welcome and honouring ceremony with community members',
  //     tamil: 'சமூக உறுப்பினர்களுடன் வரவேற்பு மற்றும் பாராட்டு நிகழ்வு'
  //   }
  // },
]

function Gallerys({ lang }) {
  const [lightbox, setLightbox] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentPhotos = galleryPhotos.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(galleryPhotos.length / itemsPerPage);

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [])
  const prev = () => setLightbox(i => (i - 1 + galleryPhotos.length) % galleryPhotos.length)
  const next = () => setLightbox(i => (i + 1) % galleryPhotos.length)
  return (
    <>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {currentPhotos.map((photo, i) => {
            // const isWide = i === 0 || i === 3 || i === 6
            // aspectRatio: isWide ? '16/10' : '4/3', gridColumn: isWide ? 'span 2' : 'span 1'
            return (
              <div key={photo.src} onClick={() => setLightbox(indexOfFirst + i)} style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--navy)', aspectRatio: '4/3' }}>
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
        <div className="arrow-pagination">
          <button
            className="arrow-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            ‹
          </button>

          <span className="page-info">
            {currentPage} / {totalPages}
          </span>

          <button
            className="arrow-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            ›
          </button>
        </div>
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

export default function Gallery() {
  const { lang } = useLang()

  const ui = {
    english: {
      eyebrow: 'Visual Chronicle',
      title: <>Photo <span style={{ color: 'var(--gold-light)' }}>Gallery</span></>,
      subtitle: 'Moments of recognition, service, and community leadership',
      galleryEyebrow: 'Visual Chronicle', galleryTitle: <>Photo <span>Gallery</span></>,
      gallerySubtitle: 'Moments of recognition, service, and community leadership',
    },
    tamil: {
      eyebrow: 'காட்சியகம்',
      title: <>புகைப்பட <span style={{ color: 'var(--gold-light)' }}>தொகுப்பு</span></>,
      subtitle: 'அங்கீகாரம், சேவை மற்றும் சமூக தலைமையின் தருணங்கள்',
      galleryEyebrow: 'காட்சி குறிப்பேடு', galleryTitle: <>புகைப்பட <span>தொகுப்பு</span></>,
      gallerySubtitle: 'அங்கீகாரம், சேவை மற்றும் சமூக தலைமையின் தருணங்கள்',
    },
  }
  const u = ui[lang]

  return (
    <div className="page">
      <section className="cert-hero">
        <span className="section-eyebrow" style={{ color: 'rgba(247,244,239,0.55)' }}>{u.eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', marginBottom: '1rem' }}>{u.title}</h1>
        <p style={{ color: 'rgba(247,244,239,0.7)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>{u.subtitle}</p>
      </section>

      {/* GALLERY */}
      <section style={{ background: 'var(--bg-alt)', padding: '3rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* <div className="section-header">
            <RevealOnScroll direction="up">
              <span className="section-eyebrow">{u.galleryEyebrow}</span>
              <h2 className="section-title">{u.galleryTitle}</h2>
              <div className="section-line" />
              <p style={{ color: 'var(--text-muted)', marginTop: '1.2rem', fontSize: '0.95rem', maxWidth: '580px', margin: '1.2rem auto 0' }}>{u.gallerySubtitle}</p>
            </RevealOnScroll>
          </div> */}
          {/* <RevealOnScroll> */}
          <div className='gallery-main'>
            <Gallerys lang={lang} />
            {/* {
                currentPhotos.map((photo, i) => {
                  return (
                    <>
                      <div className='gallery-img' key={i}>
                        <img src={photo.src} alt={photo.caption.english} />
                        <div className="gallery-caption">
                          {lang === 'english' ? photo.caption.english : photo.caption.tamil}
                        </div>
                      </div>
                    </>
                  );
                })
              } */}
          </div>
          {/* </RevealOnScroll> */}
        </div>
      </section>

    </div>
  )
}
