"use client";

import Image from 'next/image';
import { useState } from 'react';

const phone = '9421107110';
const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent('Hello, I want to enquire about borewell service in Kolhapur.')}`;
const directions = 'https://maps.app.goo.gl/Q7eD3jaKAxFDEyPf8?g_st=aw';

const languages = {
  en: { label: 'English', pre: 'Water starts with the', accent: 'right borewell.', call: 'Call now', explore: 'Explore products', wa: 'WhatsApp' },
  mr: { label: 'मराठी', pre: 'पाण्याची सुरुवात योग्य', accent: 'बोअरवेलने होते.', call: 'कॉल करा', explore: 'उत्पादने पहा', wa: 'व्हॉट्सअॅप' },
  hi: { label: 'हिन्दी', pre: 'पानी की शुरुआत सही', accent: 'बोरवेल से होती है।', call: 'कॉल करें', explore: 'उत्पाद देखें', wa: 'व्हाट्सऐप' },
};

const products = [
  { title: 'Submersible pumps', detail: 'SSP, Swaraj & Laxmi options for agricultural and domestic water systems.', image: '/assets/products/submersible-pump.jpeg', alt: 'SSP submersible pump and motor' },
  { title: 'Openwell pumps', detail: 'Compact 1 HP openwell pump options for homes, farms and surface-water needs.', image: '/assets/products/openwell-pump.jpeg', alt: 'Blue SSP openwell pump' },
  { title: 'Pump guard & controllers', detail: 'Unique pump protection panels for dry-run, overload and voltage protection.', image: '/assets/products/pump-guard.jpeg', alt: 'Unique pump guard controller' },
  { title: 'Submersible cables', detail: 'UneeL flat submersible cable—available in requirement-based sizes.', image: '/assets/products/submersible-cable.jpeg', alt: 'Blue UneeL submersible cable' },
  { title: 'HDPE pipe', detail: 'Jain HDPE delivery pipe for borewell connections and water lines.', image: '/assets/products/hdpe-pipe.jpeg', alt: 'Coil of black HDPE pipe with blue stripe' },
  { title: 'Ropes, fittings & accessories', detail: 'Nylon safety ropes, adapters, column-pipe fittings and installation accessories.', image: '/assets/products/fittings.jpeg', alt: 'Borewell fittings and installation accessories' },
];

const productLink = (title) => `https://wa.me/91${phone}?text=${encodeURIComponent(`Hello, I need a price and availability for ${title}.`)}`;
function Arrow() { return <span aria-hidden="true">↗</span>; }

function Brand() {
  return <a className="brand" href="#top" aria-label="Pawar Borewell's and Trader's home"><span className="logo-mark" aria-hidden="true"><b>PB</b><i /></span><span><b>Pawar Borewell&apos;s</b><small>&amp; Trader&apos;s · Kolhapur</small></span></a>;
}

export default function Home() {
  const [language, setLanguage] = useState('en');
  const text = languages[language];
  return <>
    <header className="header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">Services</a><a href="#products">Products</a><a href="#why-us">Why us</a><a href="#location">Location</a></nav>
      <div className="header-actions">
        <select className="language-picker" value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language">{Object.entries(languages).map(([code, item]) => <option value={code} key={code}>{item.label}</option>)}</select>
        <a className="directions-link" href={directions} target="_blank" rel="noopener">Directions ↗</a>
        <a className="top-whatsapp" href={whatsapp} target="_blank" rel="noopener">◔ {text.wa}</a>
        <a className="top-call" href={`tel:+91${phone}`}>☎ {text.call}</a>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <Image className="hero-image" src="/assets/drilling-site.jpeg" fill priority sizes="(max-width: 700px) 65vw, 45vw" alt="Pawar Borewell drilling rig at a Kolhapur site" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="kicker light">25 years of borewell solutions · Kolhapur</p>
          <h1>{text.pre} <em>{text.accent}</em></h1>
          <p className="lead">Borewell drilling, pumps, pipe, cable and essential parts—chosen for homes, farms, commercial sites and industries.</p>
          <div className="actions"><a className="button white" href={`tel:+91${phone}`}>{text.call} <Arrow /></a><a className="button hero-whatsapp" href={whatsapp} target="_blank" rel="noopener">◔ {text.wa}</a></div>
          <div className="stats"><div><b>25 years</b><span>practical experience</span></div><div><b>Products + service</b><span>one local team</span></div><div><b>On enquiry</b><span>right-size guidance</span></div></div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell"><span>Agricultural</span><span>Residential</span><span>Commercial</span><span>Drilling · pumps · supplies</span></div></section>

      <section className="shell intro"><p className="kicker">A complete water-system partner</p><div><h2>From underground water to a working <em>water line.</em></h2><p>Every borewell needs the right pump, cable, pipe and protection. We help you decide what fits the depth, requirement and site—not just what is on the shelf.</p></div></section>

      <section className="services" id="services"><div className="shell"><div className="section-head"><div><p className="kicker">Services</p><h2>One team. Every step.</h2></div><p>Practical support for a new borewell, a repair need or the complete pump installation.</p></div><div className="cards"><article className="card featured"><small>01</small><i aria-hidden="true">⌄</i><h3>Borewell drilling</h3><p>Professional drilling for farms, homes, commercial buildings and industrial sites.</p><a href={whatsapp} target="_blank" rel="noopener">Discuss your site <Arrow /></a></article><article className="card"><small>02</small><i aria-hidden="true">◌</i><h3>Cleaning &amp; flushing</h3><p>Support for existing borewells when water flow, cleanliness or performance needs attention.</p><span className="card-tag">Site-based guidance</span></article><article className="card"><small>03</small><i aria-hidden="true">⌁</i><h3>Pump installation</h3><p>Product selection, installation accessories and practical assistance for water-system setup.</p><span className="card-tag">Pumps &amp; materials</span></article></div></div></section>

      <section className="catalogue" id="products"><div className="shell"><div className="catalogue-head"><div><p className="kicker">Product catalogue</p><h2>Products for the<br /><em>complete setup.</em></h2></div><p>Ask for availability and a quotation on WhatsApp. We do not publish fixed prices because the right size and configuration depend on your requirement.</p></div><div className="product-grid">{products.map((product) => <article className="catalogue-card" key={product.title}><div className="catalogue-image"><Image src={product.image} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" alt={product.alt} /></div><div className="catalogue-copy"><span className="availability">Available on enquiry</span><h3>{product.title}</h3><p>{product.detail}</p><a href={productLink(product.title)} target="_blank" rel="noopener">Get price on WhatsApp <Arrow /></a></div></article>)}</div></div></section>

      <section className="showcase" id="why-us"><div className="shell showcase-grid"><div><p className="kicker">Why Pawar Borewell&apos;s</p><h2>Local knowledge.<br /><em>Practical recommendations.</em></h2><p>We work across Kolhapur and nearby Maharashtra with a focus on dependable equipment, transparent guidance and the needs of the actual site.</p><div className="reason-list"><span>✓ Pumps from SSP, Swaraj &amp; Laxmi</span><span>✓ Pump guard &amp; controller options</span><span>✓ Motor and pump replacement support—terms apply</span></div></div><figure><Image src="/assets/products/pump-range.jpeg" fill sizes="(max-width: 700px) 100vw, 58vw" alt="Range of borewell pump products and packaging" /><figcaption>Product guidance before you buy.</figcaption></figure></div></section>

      <section className="shell coverage" id="location"><div><p className="kicker">Service area</p><h2>Kolhapur first.<br /><em>Maharashtra beyond.</em></h2><p className="location-copy">Based in Mudshingi, Kolhapur. We serve Kolhapur, Sangli, Satara, Konkan and surrounding Maharashtra areas depending on the requirement.</p><p className="hours">Working hours: 9:30 AM – 8:00 PM</p><a className="location-button" href={directions} target="_blank" rel="noopener">Get directions <Arrow /></a></div><a className="map" href={directions} target="_blank" rel="noopener" aria-label="Get directions to Pawar Borewell's and Trader's"><b>● &nbsp;Mudshingi, Kolhapur</b><span>Pawar Borewell&apos;s &amp; Trader&apos;s</span><small>Open in Google Maps ↗</small></a></section>

      <section className="shell faq"><p className="kicker">Common questions</p><h2>Before you enquire.</h2><details open><summary>Can you recommend the right pump for my borewell?</summary><p>Yes. Share your borewell depth, water requirement and the use—farm, home or commercial—on WhatsApp. We will guide you to a suitable option.</p></details><details><summary>Do you show product prices on the website?</summary><p>No. Product availability, horsepower, cable size, pipe type and fittings differ by requirement. Use “Get price on WhatsApp” for a current quotation.</p></details><details><summary>Do you provide drilling and materials together?</summary><p>Yes. We can discuss drilling, pump selection and the materials needed for a complete water setup.</p></details></section>

      <section className="shell callout"><div><p className="kicker">Let&apos;s discuss your requirement</p><h2>Need a pump, borewell service or a site visit?</h2><p>Call or WhatsApp our local team with your location and requirement. We&apos;ll help with the next practical step.</p></div><div><a className="button dark" href={`tel:+91${phone}`}>Call {phone.slice(0, 5)} {phone.slice(5)} <Arrow /></a><a className="button outline" href={whatsapp} target="_blank" rel="noopener">WhatsApp us <Arrow /></a><small>Mudshingi, Kolhapur · 9:30 AM–8:00 PM</small></div></section>
    </main>

    <footer><div className="shell footer"><Brand /><p><a href={directions} target="_blank" rel="noopener">Mudshingi, Kolhapur ↗</a><br />© {new Date().getFullYear()} Pawar Borewell&apos;s &amp; Trader&apos;s</p><a href={`tel:+91${phone}`}>{phone}</a></div></footer>
    <nav className="mobile-nav" aria-label="Quick contact"><a href={`tel:+91${phone}`}>☎ &nbsp; {text.call}</a><a href={whatsapp} target="_blank" rel="noopener">◔ &nbsp; {text.wa}</a></nav>
  </>;
}
