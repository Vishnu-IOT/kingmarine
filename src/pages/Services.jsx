import { useState, useEffect } from 'react'
import { useLang, t } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'
import { GiBattleship } from 'react-icons/gi'
import { LiaShipSolid } from 'react-icons/lia'
import { BsFuelPump } from 'react-icons/bs'
import { BiAnchor } from 'react-icons/bi'
import { FaHandshake, FaUserSecret } from 'react-icons/fa6'

const socialPhotos = [
  { src: '/social/food1.jpeg', caption: { english: 'Free meal distribution to elderly women and children', tamil: 'முதியோர் மற்றும் குழந்தைகளுக்கு இலவச உணவு விநியோகம்' } },
  { src: '/social/food2.jpeg', caption: { english: 'Volunteers serving food to senior citizens', tamil: 'முதியோருக்கு உணவு பரிமாறும் தன்னார்வலர்கள்' } },
  { src: '/social/food3.jpeg', caption: { english: 'Dr. Capt. Rajan overseeing food service at old age home', tamil: 'முதியோர் இல்லத்தில் உணவு சேவையை மேற்பார்வையிடும் டாக்டர் கேப்டன் ராஜன்' } },
  { src: '/social/food4.jpeg', caption: { english: 'Full dining hall — elderly residents being served', tamil: 'உணவு அரங்கம் நிரம்பி — முதியோருக்கு உணவு பரிமாறப்படுகிறது' } },
  { src: '/social/food9.jpeg', caption: { english: 'Elderly women served meals at their bedside — compassion in every plate', tamil: 'படுக்கை அருகே முதியோர் பெண்களுக்கு உணவு — ஒவ்வொரு தட்டிலும் அன்பு' } },
  { src: '/social/food5.jpeg', caption: { english: 'Row of senior men enjoying a hearty meal', tamil: 'வரிசையில் முதியோர் மனநிறைவாக உண்கின்றனர்' } },
  { src: '/social/food6.jpeg', caption: { english: 'Akshaya Trust — traditional banana leaf feast for destitute elders', tamil: 'அக்ஷயா மரம் — ஆதரவற்ற முதியோருக்கு வாழை இலை விருந்து' } },
  { src: '/social/food7.jpeg', caption: { english: 'Large gathering of elders enjoying a full meal served with care', tamil: 'பெரும் கூட்டத்தில் முதியோருக்கு அன்புடன் பரிமாறப்பட்ட சாப்பாடு' } },
  { src: '/social/food8.jpeg', caption: { english: 'Elderly women served meals at their bedside — compassion in every plate', tamil: 'படுக்கை அருகே முதியோர் பெண்களுக்கு உணவு — ஒவ்வொரு தட்டிலும் அன்பு' } },
  { src: '/social/food9.jpeg', caption: { english: 'Elderly women served meals at their bedside — compassion in every plate', tamil: 'படுக்கை அருகே முதியோர் பெண்களுக்கு உணவு — ஒவ்வொரு தட்டிலும் அன்பு' } },
  { src: '/social/food10.jpeg', caption: { english: 'Elderly women served meals at their bedside — compassion in every plate', tamil: 'படுக்கை அருகே முதியோர் பெண்களுக்கு உணவு — ஒவ்வொரு தட்டிலும் அன்பு' } },
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
    { year: '2017', label: 'First Petrol Bunk at Thoothukudi', icon: <BsFuelPump /> },
    { year: '2019', label: 'Petrol Bunk at Chinthamani', icon: <BsFuelPump /> },
    { year: '2020', label: 'Petrol Bunk at Thirumagalam', icon: <BsFuelPump /> },
    { year: '2020', label: 'Petrol Bunk at Thirupuvanam', icon: <BsFuelPump /> },
    { year: '2021', label: 'King Marine 1 Ship Services', icon: <LiaShipSolid /> },
  ],
  tamil: [
    { year: '2012', label: 'கிங் மரைன் சர்வீசஸ் நிறுவப்பட்டது', icon: <GiBattleship /> },
    { year: '2017', label: 'முதல் பெட்ரோல் பங்க் — தூத்துக்குடி', icon: <BsFuelPump /> },
    { year: '2019', label: 'பெட்ரோல் பங்க் — சிந்தாமணி', icon: <BsFuelPump /> },
    { year: '2020', label: 'பெட்ரோல் பங்க் — திருமங்கலம்', icon: <BsFuelPump /> },
    { year: '2020', label: 'பெட்ரோல் பங்க் — திருபுவனம்', icon: <BsFuelPump /> },
    { year: '2021', label: 'கிங் மரைன் 1 கப்பல் சேவைகள்', icon: <LiaShipSolid /> },
  ]
}

const marineContent = {
  english: {
    tag: "Maritime Division",
    title: "King Marine Services: Navigating Excellence",
    description:
      "From port logistics to technical vessel support, our maritime operations set the benchmark for efficiency and reliability in regional waters.",
    experience: "Years Excellence",
    features: [
      {
        title: "Vessel Operations",
        desc: "Comprehensive management and support for diverse marine vessels."
      },
      {
        title: "Technical Port Logistics",
        desc: "Advanced infrastructure and technical oversight for smooth port transitions."
      },
      {
        title: "Global Partnerships",
        desc: "Collaborative frameworks with international maritime organizations."
      }
    ]
  },

  tamil: {
    tag: "கடல்சார் பிரிவு",
    title: "கிங் மரைன் சர்வீசஸ்: சிறப்பான பயணத்தை வழிநடத்துதல்",
    description:
      "துறைமுக தளவாடங்கள் முதல் தொழில்நுட்ப கப்பல் ஆதரவு வரை, எங்கள் கடல்சார் சேவைகள் திறன் மற்றும் நம்பகத்தன்மையில் புதிய தரநிலைகளை உருவாக்குகின்றன.",
    experience: "ஆண்டுகள் சிறப்பு சேவை",
    features: [
      {
        title: "கப்பல் செயல்பாடுகள்",
        desc: "பல்வேறு வகையான கப்பல்களுக்கு முழுமையான மேலாண்மை மற்றும் ஆதரவு சேவைகள்."
      },
      {
        title: "தொழில்நுட்ப துறைமுக தளவாடங்கள்",
        desc: "தடையற்ற துறைமுக செயல்பாடுகளுக்கான மேம்பட்ட உள்கட்டமைப்பு மற்றும் தொழில்நுட்ப மேற்பார்வை."
      },
      {
        title: "உலகளாவிய கூட்டாண்மைகள்",
        desc: "சர்வதேச கடல்சார் அமைப்புகளுடன் இணைந்து செயல்படும் வலுவான கூட்டுறவுகள்."
      }
    ]
  }
}

const trustContent = {
  english: {
    tag: "Social Impact",
    title: <>Maram Varam <span>Trust</span></>,
    stats: [
      {
        value: "5000+",
        label: "Meals Served"
      },
      {
        value: "20000+",
        label: "Trees Planted"
      },
      {
        value: "100+",
        label: "Programs"
      }
    ]
  },

  tamil: {
    tag: "சமூக தாக்கம்",
    title: <>மரம் வரம்<span>அறக்கட்டளை</span></>,
    stats: [
      {
        value: "5000+",
        label: "உணவுகள் வழங்கப்பட்டது"
      },
      {
        value: "20000+",
        label: "மரங்கள் நடப்பட்டது"
      },
      {
        value: "100+",
        label: "நிகழ்ச்சிகள்"
      }
    ]
  }
};

const councilContent = {
  english: {
    tag: "Community Leadership",
    title: <>All India Yadav <span>Protection Council</span></>,
    description:
      "Strengthening community bonds through education, welfare initiatives and leadership programs.",

    quote:
      "True leadership is not about position, but about uplifting others.",

    states: "In-Charges",
    members: "Community Members"
  },

  tamil: {
    tag: "சமூக தலைமைத்துவம்",
    title: <>அகில இந்திய யாதவ <span>பாதுகாப்பு பேரவை</span></>,
    description:
      "கல்வி, நலத்திட்டங்கள் மற்றும் தலைமைத்துவ முயற்சிகள் மூலம் சமூக ஒற்றுமையை வலுப்படுத்துதல்.",

    quote:
      "உண்மையான தலைமை என்பது பதவியைப் பற்றியது அல்ல, பிறரை உயர்த்துவதைப் பற்றியது.",

    states: "பொறுப்பாளர்கள்",
    members: "சமூக உறுப்பினர்கள்"
  }
};

const fuelContent = {
  english: {
    tag: "Business Expansion",
    title: <>Fuel Station <span>Network</span></>,
    description:
      "Expanding quality fuel services across Tamil Nadu.",

    stations: [
      "Thoothukudi",
      "Chinthamani",
      "Thirumangalam",
      "Thirupuvanam"
    ]
  },

  tamil: {
    tag: "வணிக விரிவாக்கம்",
    title: <>எரிபொருள் நிலைய <span>வலையமைப்பு</span></>,
    description:
      "தமிழ்நாடு முழுவதும் தரமான எரிபொருள் சேவைகளை விரிவுபடுத்துதல்.",

    stations: [
      "தூத்துக்குடி",
      "சிந்தாமணி",
      "திருமங்கலம்",
      "திருப்புவனம்"
    ]
  }
};

const features = [
  {
    icon: <BiAnchor size={20} />,
    title: "Vessel Operations",
    desc: "Comprehensive management and support for diverse marine vessels.",
  },
  {
    icon: <FaUserSecret size={20} />,
    title: "Technical Port Logistics",
    desc: "Advanced infrastructure and technical oversight for smooth port transitions.",
  },
  {
    icon: <FaHandshake size={20} />,
    title: "Global Partnerships",
    desc: "Collaborative frameworks with international maritime bodies.",
  },
]
export default function Services() {
  const { lang } = useLang();
  const expansion = expansionData[lang];
  const marine = marineContent[lang];
  const trust = trustContent[lang];
  const council = councilContent[lang];
  const fuel = fuelContent[lang];

  const ui = {
    english: {
      eyebrow: 'What We Do', title: <>Our <span style={{ color: 'var(--gold-light)' }}>Services</span></>, subtitle: 'From the deep ocean to Tamil Nadu\'s roads and communities - Maram Varam Trust delivers on every front.',
      csrEyebrow: 'CSR In Action', csrTitle: <>Community <span>Food Service</span></>, csrSubtitle: 'Serving nutritious meals to the elderly and underprivileged - a continuing act of compassion by Maram Varam Trust',
      expEyebrow: 'Growth', expTitle: <>Business <span>Expansion</span></>
    },
    tamil: {
      eyebrow: 'நாங்கள் என்ன செய்கிறோம்', title: <>எங்கள் <span style={{ color: 'var(--gold-light)' }}>சேவைகள்</span></>, subtitle: 'ஆழமான கடலில் இருந்து தமிழ்நாட்டின் சாலைகள் மற்றும் சமூகங்கள் வரை - மரம் வரம் அறக்கட்டளை எல்லா முனைகளிலும் சேவை செய்கிறது.',
      csrEyebrow: 'சி.எஸ்.ஆர் நடவடிக்கை', csrTitle: <>சமூக <span>உணவு சேவை</span></>, csrSubtitle: 'முதியோர் மற்றும் ஏழை மக்களுக்கு சத்தான உணவு வழங்குதல் — மரம் வரம் அறக்கட்டளை தொடர்ச்சியான இரக்க செயல்',
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
                <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', padding: '1.8rem', display: 'flex', gap: '1.2rem', alignItems: 'center', boxShadow: '0 2px 8px rgba(14,31,61,0.05)', height: '100%' }}>
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

      {/* King Marine Service */}
      <section
        style={{
          background: 'var(--navy)',
          padding: '3rem 2rem',
          borderTop: '1px solid var(--border)'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: 20,
            alignItems: 'center'
          }}
        >
          <div className="marine-container">
            <div className="marine-image-wrapper">
              <RevealOnScroll direction="left" delay={200}>
                <img
                  src="/ship2.png"
                  alt="Marine Operations"
                  className="marine-image"
                />

                <div className="experience-card">
                  <h3>14+</h3>
                  <p>{marine.experience}</p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="marine-content">
              <RevealOnScroll direction="up">
                <span className="section-tags">
                  {marine.tag}
                </span>

                <h2>{marine.title}</h2>

                <p className="description">
                  {marine.description}
                </p>

                <div className="feature-list">
                  {marine.features.map((item, index) => (
                    <div key={index} className="feature-item">
                      <div className="icon">
                        {features[index].icon}
                      </div>

                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Maram Varam Trust Service */}
      <section className="ser-editorial-section" style={{ background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <RevealOnScroll direction="up" delay={200}>
            <div className="ser-section-header">
              <span>{trust.tag}</span>
              <h2>{trust.title}</h2>
              <div className="section-line" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200}>
            <div className="ser-stats-row">

              {trust.stats.map((stat, index) => (
                <div className="ser-stat-card" key={index}>
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}

            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200}>
            <div className="ser-image-grid-three">
              <img src="/social/food1.jpeg" alt={trust.title} />
              <img src="/social/tree2.jpeg" alt={trust.title} />
              <img src="/social/food5.jpeg" alt={trust.title} />
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* AIYPC Service */}
      <section className="ser-editorial-section">
        <div className='ser-reverse' style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealOnScroll direction="left" delay={300}>
            <div className="ser-left-content">
              <span>{council.tag}</span>
              <h2>{council.title}</h2>
              <div className="section-line" />
              <p>
                {council.description}
              </p>
              <div className="ser-quote-box">
                "{council.quote}"
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={300}>
            <div className="ser-right-mosaic">
              <div className="ser-small-stat">
                <h3>4500+</h3>
                <span>{council.states}</span>
              </div>
              <img src="/social/aiypc1.jpeg" alt={council.title} />
              <img src="/social/food10.jpeg" alt={council.title} />
              <div className="ser-gold-stat">
                <h3>12L+</h3>
                <span>{council.members}</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Fuel Station Service */}
      <section className="ser-editorial-section" style={{ background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <RevealOnScroll direction="up" delay={200}>
            <div className="ser-fuel-header">
              <span>{fuel.tag}</span>
              <h2>{fuel.title}</h2>
              <div className="section-line" />
              <p>{fuel.description}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={200}>
            <div className="ser-fuel-grid">
              {fuel.stations.map((station, index) => (
                <div className="ser-fuel-card" key={index}>
                  <img src={`/petrol/petrol${index + 1}.jpg`} alt={station} />
                  <h4>{station}</h4>
                </div>
              ))}
            </div>
          </RevealOnScroll>
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
