import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/data'
import { useLang, t } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'

export default function Home() {
  const { lang } = useLang()
  const canvasRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // ── Animated ocean canvas ──────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const waves = [
      { a: 0.18, amp: 18, freq: 0.007, spd: 0.4, yf: 0.50 },
      { a: 0.13, amp: 12, freq: 0.010, spd: 0.6, yf: 0.56 },
      { a: 0.10, amp: 8, freq: 0.014, spd: 0.9, yf: 0.62 },
      { a: 0.07, amp: 5, freq: 0.018, spd: 1.2, yf: 0.68 },
    ]

    function draw() {
      const W = canvas.width
      const H = canvas.height
      if (!W || !H) { animId = requestAnimationFrame(draw); return }

      ctx.clearRect(0, 0, W, H)

      const sky = ctx.createLinearGradient(0, 0, 0, H)
      sky.addColorStop(0, '#4a90c4')
      sky.addColorStop(0.38, '#2272a8')
      sky.addColorStop(0.6, '#1a5e96')
      sky.addColorStop(1, '#0e3a6e')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, W, H)

      const sunGrad = ctx.createRadialGradient(W * 0.5, H * 0.28, 0, W * 0.5, H * 0.28, W * 0.55)
      sunGrad.addColorStop(0, 'rgba(255,230,140,0.22)')
      sunGrad.addColorStop(1, 'transparent')
      ctx.fillStyle = sunGrad
      ctx.fillRect(0, 0, W, H)

      waves.forEach(({ a, amp, freq, spd, yf }) => {
        const yBase = H * yf
        ctx.beginPath()
        ctx.moveTo(0, H)
        for (let x = 0; x <= W; x += 2) {
          const y = yBase
            + Math.sin(x * freq + time * spd) * amp
            + Math.sin(x * freq * 1.6 + time * spd * 0.75) * (amp * 0.35)
          ctx.lineTo(x, y)
        }
        ctx.lineTo(W, H)
        ctx.lineTo(0, H)
        ctx.closePath()
        const wg = ctx.createLinearGradient(0, yBase - amp, 0, H)
        wg.addColorStop(0, `rgba(255,255,255,${a})`)
        wg.addColorStop(1, 'rgba(14,58,110,0)')
        ctx.fillStyle = wg
        ctx.fill()
      })

      ctx.fillStyle = 'rgba(255,240,180,0.85)'
      for (let i = 0; i < 28; i++) {
        const x = ((i * 173.5 * W + time * 30) % W + W) % W
        const wy = H * 0.52 + Math.sin(x * 0.007 + time * 0.4) * 18
        const fl = Math.sin(i * 2.3 + time * 3) * 0.5 + 0.5
        if (fl > 0.6) {
          ctx.beginPath()
          ctx.arc(x, wy - 2, 1.2 * fl, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += 0.012
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])


  // ── UI strings sourced entirely from JSON via t() ──────────────────────
  const ui = {
    english: {
      tagline: 'Est. Dec 12 . 2012 · Thoothukudi, Tamil Nadu',
      heroTitle: (
        <h1 className="hero-name">
          <span className="hero-small">Dr. Capt.</span>
          <span className="hero-main">
            P.E.J. Rajan,
            <span className="hero-degree">M.A., LL.B.</span>
          </span>
        </h1>
      ),

      commandedBy: "Founder & Captain - King Marine Services",
      subTitle: t(profile.full_title, 'tamil'),
      headerLabel: "Life",
      headerTitle: <>A Life of <span>Command & Service</span></>,
      leader: "Our Leader",
      lead_name: "Dr. Capt. P.E.J. Rajan",
      lead_desc1: "Born in Thoothukudi District in 1961, Dr. Capt. P.E.J. Rajan served with distinction in the Indian Navy for 7 years before joining the Merchant Navy, rising to the rank of Captain.",
      lead_desc2: "On December 12, 2012, he founded King Marine Services in Chennai, expanding into shipping (2020) and transport services (2021). His commitment to social welfare led to the establishment of multiple charitable organizations serving communities across Tamil Nadu.",
      lead_btn: 'Read Full Story →',
      stats: [['13+', 'Years at Sea'], ['4500+', 'Lives Touched'], ['64+', 'Students Aided']],
      explore: 'Explore Services', about: 'About the Captain',
      legacyTitle: <>A Legacy of <span>Command</span> &amp; Service</>,
      p1: `Born in ${t(profile.date_of_birth, 'english')}, Dr. Capt. P.E.J. Rajan began his journey in the Indian Navy, serving 7 distinguished years before advancing to the Merchant Navy as a Captain.`,
      p2: `On 12-12-2012, he founded King Marine Services — a testament to his vision of excellence on and beyond the seas.`,
      readMore: 'Read Full Biography →',
      stats2: [['2012', 'Year Founded'], ['7', 'Years Navy Service'], ['4', 'Petrol Bunks'], ['2', 'Doctorates']],
      timelineTitle: <>The <span>King Marine</span> Timeline</>,
      timelineLabel: 'Journey',
      timeline: [
        { id: '1', year: '1961', text: `Born — ${t(profile.date_of_birth, 'english')}`, img: '/gallery/photo1.jpeg' },
        { id: '2', year: '1980', text: 'Joined the Indian Navy — served 7 years', img: '/gallery/photo2.jpeg' },
        { id: '3', year: '1990', text: 'Joined Merchant Navy, rose to Captain', img: '/gallery/photo3.jpeg' },
        { id: '4', year: '2012', text: 'Founded King Marine Services on 12-12-2012', img: '/gallery/photo4.jpeg' },
        { id: '5', year: '2014', text: 'All India Yadava Protection Council was established', img: '/gallery/photo5.jpeg' },
        { id: '6', year: '2017', text: `${t(profile.petrol_bunks[0], 'english')}`, img: '/gallery/photo6.jpeg' },
        { id: '7', year: '2018', text: `${t(profile.petrol_bunks[1], 'english')}`, img: '/gallery/photo7.jpeg' },
        { id: '8', year: '2019', text: `${t(profile.petrol_bunks[2], 'english')}`, img: '/gallery/photo8.jpeg' },
        { id: '9', year: '2020', text: `${t(profile.petrol_bunks[3], 'english')}`, img: '/gallery/photo9.jpeg' },
        { id: '10', year: '2020', text: 'Started King Marine Transport Services', img: '/gallery/photo10.jpeg' },
        { id: '11', year: '2021', text: 'Launched King Marine 1 ship services', img: '/gallery/photo2.jpeg' },
        { id: '12', year: '2022', text: 'Honorary Doctorate — American Global University', img: '/gallery/photo1.jpeg' },
        { id: '13', year: '2023', text: 'Lifetime Achievement Award conferred by Hon. Social Welfare Minister Dr. Kandae', img: '/gallery/photo11.jpeg' },
      ],
      ctaLabel: 'Ready to work together?',
      ctaTitle: 'Get in Touch with King Marine',
      ctaBtn: 'Contact Us Today',
      highlights: [
        { icon: '🚢', title: 'Marine Operations', desc: 'World-class merchant navy with Captain-level expertise. Ship services under King Marine 1 and transport divisions.' },
        { icon: '⛽', title: 'Fuel Distribution', desc: 'Petrol bunk network across Thoothukudi, Chinthamani, Thirupuvanam — serving communities since 2017.' },
        { icon: '🤝', title: 'Social Leadership', desc: 'Over 4500 individuals supported through outreach, education, medical aid, and COVID relief.' },
        { icon: '🎓', title: 'Education Support', desc: 'Free books, uniforms, and scholarships for 64+ underprivileged students.' },
        { icon: '🌍', title: 'Human Rights', desc: 'Active role in World Peace and Human Rights Organization since 2014.' },
        { icon: '💼', title: 'Employment', desc: '100+ employment opportunities created across marine, transport, and energy sectors.' },
      ],
    },
    tamil: {
      tagline: 'நிறுவப்பட்டது டிசம்பர் 12 · 2012 · தூத்துக்குடி, தமிழ்நாடு',
      heroTitle: (
        <h1 className="hero-name-tamil">
          <span className="hero-small">டாக்டர் கேப்டன்</span>
          <span className="hero-main">
            பி.இ.ஜெ. ராஜன்,<span className="hero-degree">M.A., LL.B.</span>
          </span>
        </h1>
      ),

      commandedBy: "நிறுவனர் மற்றும் கேப்டன் - கிங் மரைன் சர்வீசஸ்",
      subTitle: t(profile.full_title, 'english'),
      headerLabel: "தலைமை",
      headerTitle: <>தலைமை<span> மற்றும் சேவையின் வாழ்க்கை</span></>,
      leader: "எங்கள் தலைவர்",
      lead_name: "டாக்டர் கேப்டன் பி.இ.ஜெ. ராஜன்",
      lead_desc1: "1961ல் தூத்துக்குடி மாவட்டத்தில் பிறந்த டாக்டர் கேப்டன் பி.இ.ஜெ. ராஜன், இந்திய கடற்படையில் 7 ஆண்டுகள் சிறப்பாக பணியாற்றிய பின், வணிக கப்பல் படையில் சேர்ந்து கேப்டன் பதவி அடைந்தார்.",
      lead_desc2: "டிசம்பர் 12, 2012 அன்று சென்னையில் கிங் மரைன் சர்வீசஸ் நிறுவி, 2020ல் கப்பல் மற்றும் 2021ல் போக்குவரத்து சேவைகளாக விரிவாக்கம் செய்தார். சமூக நலனுக்கான அவரது அர்ப்பணிப்பு, தமிழ்நாடு முழுவதும் பல தொண்டு நிறுவனங்களை நிறுவ வழிவகுத்தது.",
      lead_btn: 'முழு கதையை படிக்கவும் →',
      stats: [['13+', 'கடல் அனுபவம்'], ['4500+', 'பயனடைந்தோர்'], ['64+', 'மாணவர்கள்']],
      explore: 'சேவைகளை காண்க', about: 'கேப்டனை பற்றி',
      legacyTitle: <><span>தலைமை</span> மற்றும் சேவையின் மரபு</>,
      p1: `${t(profile.date_of_birth, 'tamil')} பிறந்த டாக்டர் கேப்டன் பி.இ.ஜெ. ராஜன், இந்திய கடற்படையில் 7 ஆண்டுகள் சேவை புரிந்தார். பின்னர் மெர்சன்ட் நேவியில் கேப்டனாக உயர்ந்தார்.`,
      p2: `12-12-2012 அன்று கிங் மரைன் சர்வீசஸை நிறுவினார் — கடலிலும் கரையிலும் சேவையின் சான்று.`,
      readMore: 'முழு வாழ்க்கை வரலாறு →',
      stats2: [['2012', 'நிறுவப்பட்ட ஆண்டு'], ['7', 'நேவி சேவை ஆண்டுகள்'], ['4', 'பெட்ரோல் பங்க்கள்'], ['2', 'டாக்டர் பட்டங்கள்']],
      timelineTitle: <><span>கிங் மரைன்</span> காலவரிசை</>,
      timelineLabel: 'பயணம்',
      timeline: [
        { id: '1', year: '1961', text: `பிறந்தார் — ${t(profile.date_of_birth, 'tamil')}`, img: '/gallery/photo1.jpeg' },
        { id: '2', year: '1980', text: 'இந்திய கடற்படையில் சேர்ந்தார் — 7 ஆண்டுகள் சேவை', img: '/gallery/photo2.jpeg' },
        { id: '3', year: '1990', text: 'மெர்சன்ட் நேவியில் கேப்டன் பதவி பெற்றார்', img: '/gallery/photo3.jpeg' },
        { id: '4', year: '2012', text: 'கிங் மரைன் சர்வீசஸ் நிறுவப்பட்டது', img: '/gallery/photo4.jpeg' },
        { id: '5', year: '2014', text: 'அகில இந்திய யாதவர் பாதுகாப்பு பேரவை தொடங்கப்பட்டது', img: '/gallery/photo5.jpeg' },
        { id: '6', year: '2017', text: `${t(profile.petrol_bunks[0], 'tamil')}`, img: '/gallery/photo6.jpeg' },
        { id: '7', year: '2019', text: `${t(profile.petrol_bunks[1], 'tamil')}`, img: '/gallery/photo7.jpeg' },
        { id: '8', year: '2019', text: `${t(profile.petrol_bunks[2], 'tamil')}`, img: '/gallery/photo8.jpeg' },
        { id: '9', year: '2019', text: `${t(profile.petrol_bunks[3], 'tamil')}`, img: '/gallery/photo9.jpeg' },
        { id: '10', year: '2020', text: 'கிங் மரைன் போக்குவரத்து சர்வீசஸ்', img: '/gallery/photo10.jpeg' },
        { id: '11', year: '2021', text: 'கிங் மரைன் 1 கப்பல் சேவைகள் தொடங்கப்பட்டன', img: '/gallery/photo2.jpeg' },
        { id: '12', year: '2022', text: 'அமெரிக்கன் குளோபல் யுனிவர்சிட்டி — கௌரவ டாக்டர் பட்டம்', img: '/gallery/photo1.jpeg' },
        { id: '13', year: '2023', text: 'மாண்புமிகு சமூக நலத்துறை அமைச்சர் டாக்டர் கண்டே வழங்கிய வாழ்நாள் சாதனையாளர் விருது', img: '/gallery/photo11.jpeg' },
      ],
      ctaLabel: 'இணைந்து பணியாற்ற தயாரா?',
      ctaTitle: 'கிங் மரைனை தொடர்பு கொள்ளுங்கள்',
      ctaBtn: 'இன்றே தொடர்பு கொள்ளுங்கள்',
      highlights: [
        { icon: '🚢', title: 'கடல் நடவடிக்கைகள்', desc: 'கேப்டன் அளவிலான நிபுணத்துவம். கிங் மரைன் 1 மூலம் கப்பல் மற்றும் போக்குவரத்து சேவைகள்.' },
        { icon: '⛽', title: 'எரிபொருள் விநியோகம்', desc: 'தூத்துக்குடி, சிந்தாமணி, திருபுவனம் — 2017 முதல் சேவை.' },
        { icon: '🤝', title: 'சமூக தலைமை', desc: '4500க்கும் மேற்பட்டோருக்கு சமூக சேவை, கல்வி, மருத்துவம், கொரோனா நிவாரணம்.' },
        { icon: '🎓', title: 'கல்வி ஆதரவு', desc: '64க்கும் மேற்பட்ட மாணவர்களுக்கு புத்தகங்கள், உடைகள், உதவித்தொகை.' },
        { icon: '🌍', title: 'மனித உரிமைகள்', desc: '2014 முதல் உலக அமைதி மற்றும் மனித உரிமை அமைப்பில் தீவிர பங்கேற்பு.' },
        { icon: '💼', title: 'வேலைவாய்ப்பு', desc: 'கடல், போக்குவரத்து, எரிசக்தி துறைகளில் 100க்கும் மேற்பட்ட வேலைவாய்ப்புகள்.' },
      ],
    },
  }

  const u = ui[lang]

  return (
    <div className="page">
      {/* HERO */}
      <section className="home-hero clean-hero">

        {/* Background canvas */}
        <div className="hero-ocean">
          {/* <canvas ref={canvasRef} /> */}
          <div className="hero-video">
            <video autoPlay muted loop playsInline>
              <source src="/ship.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-container">

          {/* LEFT SIDE */}
          <div className="hero-left">
            <p className="hero-tagline">{u.tagline}</p>

            {u.heroTitle}

            <p className="hero-title">{u.commandedBy}</p>

            <div className="hero-cta">
              <Link to="/services" className="btn-outline">
                {u.explore}
              </Link>
              <Link to="/about" className="btn-outline">
                {u.about}
              </Link>
            </div>
            <div className="hero-stats">
              {u.stats.map(([num, label]) => (
                <div className="hero-stat" key={label}>
                  <span className="num">{num}</span>
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">
            <div className="hero-image">
              <img src="/profile21.png" alt="Captain" />
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">{u.headerLabel}</span>
          <h2 className="section-title">{u.headerTitle}</h2>
          <div className="section-line" />
        </div>
        <div className="about-content">
          <div className="about-image">
            <RevealOnScroll>
              <img src='/1.jpeg' alt="Dr. Capt. P.E.J. Rajan" />
            </RevealOnScroll>
          </div>
          <div className="about-text">
            <RevealOnScroll delay={200}>
              <span className="section-tag">
                {u.leader}
              </span>
              <h2 className="section-title">
                {u.lead_name}
              </h2>
              <p>
                {u.lead_desc1}
              </p>
              <p>
                {u.lead_desc2}
              </p>
              <Link to="/about" className="btn-secondary">
                {u.lead_btn}
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="about-strip">
        <div className="about-strip-inner">
          <RevealOnScroll className="about-strip-text" direction="left">
            <h2>{u.legacyTitle}</h2>
            <p>{u.p1}</p>
            <p>{u.p2}</p>
            <Link to="/about" className="btn-secondary" style={{ marginTop: '1.5rem', display: 'inline-block', color: 'rgba(247,244,239,0.85)', borderColor: 'rgba(247,244,239,0.35)' }}>{u.readMore}</Link>
          </RevealOnScroll>
          <div className="about-strip-stats">
            {u.stats2.map(([big, desc], idx) => (
              <RevealOnScroll key={desc} direction="up" delay={idx * 150}>
                <div className="about-stat-box">
                  <span className="big">{big}</span>
                  <span className="desc">{desc}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      {/* <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">{u.timelineLabel}</span>
          <h2 className="section-title">{u.timelineTitle}</h2>
          <div className="section-line" />
        </div>
        <div className="timeline" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {u.timeline.map((item, index) => (
            <RevealOnScroll key={item.id} direction="left" delay={Math.min(index * 100, 500)}>
              <div className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-text">{item.text}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section> */}

      {/* TIMELINE */}
      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">{u.timelineLabel}</span>
          <h2 className="section-title">{u.timelineTitle}</h2>
          <div className="section-line" />
        </div>
        <div className="timeline-section">
          {/* RIGHT CONTENT */}
          <div className="timeline-scroll">
            {u.timeline.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onScroll={() => setActiveIndex(index)}
              >
                <h4>{item.year}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          {/* LEFT IMAGE */}
          <div className="timeline-image">
            <img src={u.timeline[activeIndex].img} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
