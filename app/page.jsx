"use client";

import Image from 'next/image';
import { useState } from 'react';

const phone = '9421107110';
const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent('Hello, I want to enquire about borewell service in Kolhapur.')}`;
const directions = 'https://maps.app.goo.gl/Q7eD3jaKAxFDEyPf8?g_st=aw';

const languages = {
  en: { label: 'English', hero: 'Water starts with the', accent: 'right', ending: 'borewell.', call: 'Call now', explore: 'Explore services', wa: 'WhatsApp', location: 'Location', service: 'Serving Kolhapur city & district' },
  hi: { label: 'हिन्दी', hero: 'पानी की शुरुआत सही', accent: 'बोरवेल', ending: 'से होती है।', call: 'अभी कॉल करें', explore: 'सेवाएं देखें', wa: 'व्हाट्सऐप', location: 'स्थान', service: 'कोल्हापुर शहर और जिले में सेवा' },
  mr: { label: 'मराठी', hero: 'पाण्याची सुरुवात योग्य', accent: 'बोअरवेलने', ending: 'होते.', call: 'आत्ताच कॉल करा', explore: 'सेवा पहा', wa: 'व्हॉट्सअॅप', location: 'स्थान', service: 'कोल्हापूर शहर व जिल्ह्यात सेवा' },
  kn: { label: 'ಕನ್ನಡ', hero: 'ನೀರು ಸರಿಯಾದ', accent: 'ಬೋರ್‌ವೆಲ್', ending: 'ನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.', call: 'ಈಗ ಕರೆ ಮಾಡಿ', explore: 'ಸೇವೆಗಳನ್ನು ನೋಡಿ', wa: 'ವಾಟ್ಸ್ಆ್ಯಪ್', location: 'ಸ್ಥಳ', service: 'ಕೊಲ್ಹಾಪುರ ನಗರ ಮತ್ತು ಜಿಲ್ಲೆಯಲ್ಲಿ ಸೇವೆ' },
  ta: { label: 'தமிழ்', hero: 'தண்ணீர் சரியான', accent: 'போர்வெல்', ending: 'மூலம் தொடங்குகிறது.', call: 'இப்போது அழையுங்கள்', explore: 'சேவைகளைப் பாருங்கள்', wa: 'வாட்ஸ்அப்', location: 'இடம்', service: 'கோலாப்பூர் நகரம் மற்றும் மாவட்ட சேவை' },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Brand() {
  return <a className="brand" href="#top" aria-label="Pawar Borewell's and Trader's home">
    <span className="logo-mark" aria-hidden="true"><b>PB</b><i /></span>
    <span><b>Pawar Borewell&apos;s</b><small>&amp; Trader&apos;s · Kolhapur</small></span>
  </a>;
}

export default function Home() {
  const [language, setLanguage] = useState('en');
  const text = languages[language];

  return <>
    <header className="header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">Services</a><a href="#materials">Materials</a><a href="#location">Location</a></nav>
      <div className="header-actions">
        <select className="language-picker" value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language">
          {Object.entries(languages).map(([code, item]) => <option value={code} key={code}>{item.label}</option>)}
        </select>
        <a className="directions-link" href={directions} target="_blank" rel="noopener">{text.location} ↗</a>
        <a className="top-whatsapp" href={whatsapp} target="_blank" rel="noopener">◔ {text.wa}</a>
        <a className="top-call" href={`tel:+91${phone}`}>☎ {text.call}</a>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <Image className="hero-image" src="/assets/drilling-site.jpeg" fill priority sizes="(max-width: 700px) 65vw, 45vw" alt="Pawar Borewell drilling rig at a Kolhapur site" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="kicker light">{text.service}</p>
          <h1>{text.hero} <em>{text.accent}</em> {text.ending}</h1>
          <p className="lead">Drilling, pumps and borewell materials for homes, farms, businesses and industries across Kolhapur.</p>
          <div className="actions"><a className="button white" href={`tel:+91${phone}`}>{text.call} <Arrow /></a><a className="button hero-whatsapp" href={whatsapp} target="_blank" rel="noopener">◔ {text.wa}</a></div>
          <p className="hero-note">Talk directly with our local borewell team.</p>
          <div className="stats"><div><b>Kolhapur</b><span>local expertise</span></div><div><b>Site Visit</b><span>guided support</span></div><div><b>Quality</b><span>workmanship</span></div></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service types"><div className="shell"><span>For homes</span><span>For farms</span><span>For commercial sites</span><span>Pumps, pipes &amp; parts</span></div></section>
      <section className="shell intro"><p className="kicker">Dependable water solutions</p><div><h2>Built for the ground beneath <em>Kolhapur.</em></h2><p>Every site is different. We combine practical local knowledge with careful work, from a first inspection to a working borewell.</p></div></section>

      <section className="services" id="services"><div className="shell"><div className="section-head"><div><p className="kicker">What we do</p><h2>One team. Every step.</h2></div><p>Reliable work planned around your site—at home, on the farm or for commercial work.</p></div><div className="cards"><article className="card featured"><small>01</small><i aria-hidden="true">⌄</i><h3>Borewell drilling</h3><p>Professional drilling for homes, commercial buildings, farms and industrial sites.</p><a href={whatsapp} target="_blank" rel="noopener">Ask on WhatsApp <Arrow /></a></article><article className="card"><small>02</small><i aria-hidden="true">⌂</i><h3>Home &amp; commercial</h3><p>Water solutions for personal homes, apartments, shops and commercial spaces.</p><span className="card-tag">Planned for your site</span></article><article className="card"><small>03</small><i aria-hidden="true">⌇</i><h3>Agricultural borewells</h3><p>Dependable support for farms, irrigation and agricultural water needs.</p><span className="card-tag">Farm water solutions</span></article></div></div></section>

      <section className="shell products" id="materials"><div className="product-photo"><Image src="/assets/submersible-pumps.jpeg" fill sizes="(max-width: 700px) 100vw, 50vw" alt="Submersible pumps and borewell pump equipment" /></div><div><p className="kicker">Pumps, pipes &amp; parts</p><h2>Everything your borewell needs.</h2><p>Along with drilling, we supply essential borewell materials and parts to complete your water system with confidence.</p><ul><li>Submersible pumps and pump accessories</li><li>Borewell pipes and fittings</li><li>Essential borewell parts and materials</li><li>Product guidance for your requirement</li></ul><a className="button dark" href={whatsapp} target="_blank" rel="noopener">Ask about materials <Arrow /></a></div></section>

      <section className="showcase"><div className="shell showcase-grid"><div><p className="kicker">Work in progress</p><h2>Real work.<br /><em>Reliable water solutions.</em></h2><p>Our on-site team brings the right equipment and focused workmanship to every project.</p><a className="text-link" href={directions} target="_blank" rel="noopener">Find our Kolhapur location <Arrow /></a></div><figure><Image src="/assets/night-drilling.jpeg" fill sizes="(max-width: 700px) 100vw, 58vw" alt="Pawar Borewell team working on a drilling project at night" /><figcaption>On-site drilling support across Kolhapur.</figcaption></figure></div></section>

      <section className="shell coverage" id="location"><div><p className="kicker">Our service area</p><h2>Across Kolhapur,<br /><em>wherever you need water.</em></h2><p className="location-copy">Visit Pawar Borewell&apos;s &amp; Trader&apos;s at R.B. Patil Colony, Mudshingi. We serve Kolhapur city and district.</p><a className="location-button" href={directions} target="_blank" rel="noopener">Get directions <Arrow /></a></div><a className="map" href={directions} target="_blank" rel="noopener" aria-label="Get directions to Pawar Borewell's and Trader's"><b>● &nbsp;Kolhapur</b><span>R.B. Patil Colony, Mudshingi</span><small>Open in Google Maps ↗</small></a></section>

      <section className="shell callout"><div><p className="kicker">Let&apos;s talk water</p><h2>Need a borewell service in Kolhapur?</h2><p>Call or WhatsApp for a site discussion. We&apos;ll help you understand the best next step.</p></div><div><a className="button dark" href={`tel:+91${phone}`}>Call {phone.slice(0, 5)} {phone.slice(5)} <Arrow /></a><a className="button outline" href={whatsapp} target="_blank" rel="noopener">WhatsApp us <Arrow /></a><small>R.B. Patil Colony, Mudshingi, Kolhapur</small></div></section>
    </main>

    <footer><div className="shell footer"><Brand /><p><a href={directions} target="_blank" rel="noopener">R.B. Patil Colony, Mudshingi, Kolhapur ↗</a><br />© {new Date().getFullYear()} Pawar Borewell&apos;s &amp; Trader&apos;s</p><a href={`tel:+91${phone}`}>{phone}</a></div></footer>
    <aside className="quick-contact" aria-label="Quick contact"><a href={`tel:+91${phone}`} className="quick-call">☎ <span>{text.call}</span></a><a href={whatsapp} target="_blank" rel="noopener" className="quick-whatsapp">◔ <span>{text.wa}</span></a></aside>
    <nav className="mobile-nav"><a href={`tel:+91${phone}`}>☎ &nbsp; {text.call}</a><a href={whatsapp} target="_blank" rel="noopener">◔ &nbsp; {text.wa}</a></nav>
  </>;
}
