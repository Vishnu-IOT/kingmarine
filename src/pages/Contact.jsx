import { useState } from 'react'
import { awards } from '../data/data'
import { useLang } from '../context/LanguageContext'
import RevealOnScroll from '../components/RevealOnScroll'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { GiBattleship } from 'react-icons/gi'
import { IoLogoYoutube, IoShareSocialSharp } from 'react-icons/io5'
import { RiFacebookCircleLine } from 'react-icons/ri'

export default function Contact() {
  const { lang } = useLang()
  // Contact details sourced from awards_and_titles.json
  const { email, phone } = awards.contact_details
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    sendMail();
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const formatBody = (data) => {
    return Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')
  }

  const sendMail = ({
    email = "kingmarine2011@gmail.com",
    subject = "Enquiry",
    body = formatBody(form)
  } = {}) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const ui = {
    english: {
      eyebrow: 'Reach Out',
      title: <>Contact <span style={{ color: 'var(--gold-light)' }}>King Marine</span></>,
      subtitle: "For marine services, business partnerships, social welfare programs, or any enquiries — we're here.",
      infoTitle: 'Contact Information', emailLabel: 'Email', phoneLabel: 'Phone',
      hqLabel: 'Headquarters', hqVal: 'Thoothukudi & Chennai, Tamil Nadu, India',
      foundedLabel: 'Founded', foundedVal: '12 · 12 · 2012',
      areasTitle: 'Service Areas',
      formTitle: 'Send a Message',
      successMsg: '✓ Message received. We will respond within 24 hours.',
      labels: { name: 'Full Name *', email: 'Email Address *', phone: 'Phone Number', subject: 'Subject *', message: 'Message *' },
      placeholders: { name: 'Your full name', email: 'your@email.com', phone: '+91 00000 00000', message: 'Tell us about your enquiry...' },
      subjects: ['Select a subject', 'Marine Services Enquiry', 'Transport & Logistics', 'Fuel Station Partnership', 'Social Welfare Program', 'Education Support', 'Business Partnership', 'General Enquiry'],
      sendBtn: 'Send Message →',
      commitEyebrow: 'Our Commitment',
      commitTitle: 'Every message is answered. Every need is heard.',
      commitText: "From marine operations to social service — Dr. Capt. Rajan and the King Marine team respond to every enquiry with 13+ years of dedication.",
    },
    tamil: {
      eyebrow: 'தொடர்பு கொள்ளுங்கள்',
      title: <>கிங் மரைனை <span style={{ color: 'var(--gold-light)' }}>தொடர்பு கொள்ளுங்கள்</span></>,
      subtitle: 'கடல் சேவைகள், வணிக கூட்டாண்மை, சமூக நலத் திட்டங்கள் அல்லது எந்த விசாரணைக்கும் — நாங்கள் இங்கே இருக்கிறோம்.',
      infoTitle: 'தொடர்பு தகவல்', emailLabel: 'மின்னஞ்சல்', phoneLabel: 'தொலைபேசி',
      hqLabel: 'தலைமையகம்', hqVal: 'தூத்துக்குடி & சென்னை, தமிழ்நாடு, இந்தியா',
      foundedLabel: 'நிறுவப்பட்டது', foundedVal: '12 · 12 · 2012',
      areasTitle: 'சேவை பகுதிகள்',
      formTitle: 'செய்தி அனுப்புங்கள்',
      successMsg: '✓ செய்தி பெறப்பட்டது. 24 மணி நேரத்தில் பதிலளிப்போம்.',
      labels: { name: 'முழு பெயர் *', email: 'மின்னஞ்சல் முகவரி *', phone: 'தொலைபேசி எண்', subject: 'விஷயம் *', message: 'செய்தி *' },
      placeholders: { name: 'உங்கள் முழு பெயர்', email: 'your@email.com', phone: '+91 00000 00000', message: 'உங்கள் விசாரணையை தெரிவியுங்கள்...' },
      subjects: ['விஷயம் தேர்ந்தெடுக்கவும்', 'கடல் சேவை விசாரணை', 'போக்குவரத்து & தளவாடம்', 'பெட்ரோல் நிலையம்', 'சமூக நல திட்டம்', 'கல்வி ஆதரவு', 'வணிக கூட்டாண்மை', 'பொது விசாரணை'],
      sendBtn: 'செய்தி அனுப்பவும் →',
      commitEyebrow: 'எங்கள் உறுதிமொழி',
      commitTitle: 'ஒவ்வொரு செய்தியும் பதிலளிக்கப்படும்.',
      commitText: 'கடல் நடவடிக்கைகள் முதல் சமூக சேவை வரை — 13+ ஆண்டுகள் சேவையின் அர்ப்பணிப்புடன் பதிலளிக்கிறோம்.',
    },
  }
  const u = ui[lang]

  return (
    <div className="page">
      <section className="contact-hero">
        <span className="section-eyebrow" style={{ color: 'rgba(247,244,239,0.55)' }}>{u.eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', marginBottom: '1rem' }}>{u.title}</h1>
        <p style={{ color: 'rgba(247,244,239,0.7)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>{u.subtitle}</p>
      </section>

      <section className="section">
        <div className="contact-layout">
          <div>
            <RevealOnScroll direction="left">
              <div className="contact-info-block">
                <h3>{u.infoTitle}</h3>
                <div className="contact-item">
                  <div className="contact-icon"><AiOutlineMail style={{ fontSize: '1.5rem', textAlign: 'center' }} /></div>
                  <div className="contact-item-text"><span className="label">{u.emailLabel}</span><span className="value"><a href={`mailto:${email}`}>{email}</a></span></div>
                </div>
                {phone.map((p, i) => (
                  <div className="contact-item" key={p}>
                    <div className="contact-icon"><FaPhone style={{ fontSize: '1.2rem', textAlign: 'center' }} /></div>
                    <div className="contact-item-text"><span className="label">{u.phoneLabel} {i + 1}</span><span className="value"><a href={`tel:${p}`}>{p}</a></span></div>
                  </div>
                ))}
                <div className="contact-item">
                  <div className="contact-icon"><FaLocationDot style={{ fontSize: '1.2rem', textAlign: 'center' }} /></div>
                  <div className="contact-item-text"><span className="label">{u.hqLabel}</span><span className="value">{u.hqVal}</span></div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><GiBattleship style={{ fontSize: '2rem', textAlign: 'center' }} /></div>
                  <div className="contact-item-text"><span className="label">{u.foundedLabel}</span><span className="value">{u.foundedVal}</span></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '30px' }}>
                  <a href='https://www.youtube.com/@mpeoplesofficial' style={{ fontSize: '32px', textDecoration: 'none', color: 'red' }}><IoLogoYoutube /></a>
                  <a href='https://www.facebook.com/king.marine.73/' style={{ fontSize: '33px', textDecoration: 'none', color: 'blue' }}><RiFacebookCircleLine /></a>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={200}>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', padding: '2rem', marginTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>{u.areasTitle}</h3>
                {['Thoothukudi (HQ)', 'Chennai', 'Chinthamani', 'Thirumagalam', 'Thirupuvanam', 'Tamil Nadu'].map(area => (
                  <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>●</span>{area}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--gold-pale)' }}>{u.formTitle}</h3>
              {submitted && <div className="form-success visible" style={{ marginBottom: '1.5rem' }}>{u.successMsg}</div>}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label>{u.labels.name}</label><input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={u.placeholders.name} /></div>
                  <div className="form-group"><label>{u.labels.email}</label><input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={u.placeholders.email} /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>{u.labels.phone}</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={u.placeholders.phone} /></div>
                  <div className="form-group"><label>{u.labels.subject}</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required>
                      {u.subjects.map((s, i) => <option key={s} value={i === 0 ? '' : s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group"><label>{u.labels.message}</label><textarea name="message" value={form.message} onChange={handleChange} required placeholder={u.placeholders.message} /></div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.78rem' }}>{u.sendBtn}</button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll direction="up">
        <div style={{ background: 'var(--navy)', borderTop: '3px solid var(--gold)', padding: '4rem 3rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.3em', color: 'rgba(247,244,239,0.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>{u.commitEyebrow}</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#fff', marginBottom: '1rem', maxWidth: '700px', margin: '0 auto 1rem' }}>{u.commitTitle}</h2>
          <p style={{ color: 'rgba(247,244,239,0.6)', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.8 }}>{u.commitText}</p>
        </div>
      </RevealOnScroll>
    </div>
  )
}
