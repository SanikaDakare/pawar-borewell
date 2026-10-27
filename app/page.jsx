"use client";

import Image from 'next/image';
import { useState } from 'react';

const primaryPhone = '9421107110';
const secondaryPhone = '7823007802';
const directions = 'https://maps.app.goo.gl/Q7eD3jaKAxFDEyPf8?g_st=aw';
const wa = (message) => `https://wa.me/91${primaryPhone}?text=${encodeURIComponent(message)}`;
const productPhotos = [
  ['/assets/products/submersible-pump.jpeg'],
  ['/assets/products/openwell-pump.jpeg'],
  ['/assets/products/pump-guard-panel.jpeg', '/assets/products/pump-guard.jpeg'],
  ['/assets/products/submersible-cable.jpeg', '/assets/products/sensor-cable.jpeg'],
  ['/assets/products/hdpe-pipe.jpeg'],
  ['/assets/products/fittings.jpeg'],
  ['/assets/products/nylon-rope.jpeg'],
  ['/assets/products/sensor-cable.jpeg', '/assets/products/submersible-cable.jpeg'],
];

const content = {
  en: {
    name: 'English', nav: ['Services', 'Products', 'Why us', 'Location'], directions: 'Directions', call: 'Call now', whatsapp: 'WhatsApp',
    heroKicker: '25 years of borewell solutions · Kolhapur', heroBefore: 'Water Starts With The', heroAccent: 'Right Borewell.',
    heroLead: 'Borewell drilling, pumps, pipe, cable and essential parts—chosen for homes, farms, commercial sites and industries.',
    stats: [['25 years', 'practical experience'], ['Products + service', 'one local team'], ['On enquiry', 'right-size guidance']],
    audiences: ['Agricultural', 'Residential', 'Commercial', 'Drilling · pumps · supplies'], rangeLabel: 'Complete product range', brandsLabel: 'Brands and product families we supply',
    introKicker: 'A complete water-system partner', introHeading: <>From underground water to a working <em>water line.</em></>,
    introBody: 'Every borewell needs the right pump, cable, pipe and protection. We help you decide what fits the depth, requirement and site—not just what is on the shelf.',
    servicesKicker: 'Services', servicesHeading: 'One team. Every step.', servicesBody: 'Practical support for a new borewell, a repair need or the complete pump installation.',
    services: [['Borewell drilling', 'Professional 4 in, 6.5 in and 7.5 in borewell drilling for farms, homes, commercial buildings and industrial sites.', 'Discuss your site'], ['Cleaning & flushing', 'Support for existing borewells when water flow, cleanliness or performance needs attention.', 'Site-based guidance'], ['SSP pump installation & supply', 'Authorised SSP pump distributor for installation, product selection, accessories and practical support for a complete water-system setup.', 'Pumps & materials']],
    catalogueKicker: 'Product Catalogue', catalogueHeading: <>Products For The<br /><em>Complete Setup.</em></>, catalogueBody: 'Ask For Availability And A Quotation On WhatsApp. We Do Not Publish Fixed Prices Because The Right Size And Configuration Depend On Your Requirement.',
    products: [['SSP Submersible Pump Set', 'SSP Submersible Pump Set And SwarajLaxmi Pump. Sizes: 0.5 HP, 0.75 HP, 1 HP, 1.5 HP, 2 HP, 3 HP And 5 HP On Requirement.'], ['SSP Openwell Pump', 'Used For Deep Wells, Residential And Apartment Water Tanks.'], ['Unique Pump Guard', 'Analog Panel, Digital Panel And Water Sensor Panel Options.'], ['Submersible Flat Cable', 'Size: 2.5 Sq. Mm, 4 Sq. Mm.'], ['Jain HDPE Pipe', 'All Types Of HDPE Pipes And All Sizes. Size: 20 Mm To 160 Mm (1/2 Inch To 6 Inches) In Outer Diameter, Depending On Pump Size And Water Discharge Needs.'], ['Borewell Fittings & Install Accessories', 'Borewell Fittings And Install Accessories For A Complete Pump Connection.'], ['Nylon Rope', 'Tuf Rope. Sizes: 12 Mm, 14 Mm And Other Sizes. Safety Rope For Suspending Submersible Pump Sets.'], ['Sensor Cable', 'Size: 0.5 Sq. Mm, 0.75 Sq. Mm And 1.00 Sq. Mm.']],
    availability: 'Available on enquiry', price: 'Get price on WhatsApp', whyKicker: "Why Pawar Borewell's", whyHeading: <>Local knowledge.<br /><em>Practical recommendations.</em></>,
    whyBody: 'We work across Kolhapur and nearby Maharashtra with a focus on dependable equipment, transparent guidance and the needs of the actual site.',
    reasons: ['Local Knowledge And Practical Guidance', 'Pumps From SSP, SwarajLaxmi', 'Pump Guard, Panel And Controller Options'], guide: 'Product Guidance Before You Buy.',
    areaKicker: 'Service area', areaHeading: <>Kolhapur first.<br /><em>Maharashtra beyond.</em></>, areaBody: 'Based in Gad-Mudshingi, Kolhapur. We serve Kolhapur, Sangli, Satara, Konkan and surrounding Maharashtra areas depending on the requirement.', hours: 'Working hours: 9:30 AM – 8:00 PM', getDirections: 'Get directions',
    faqKicker: 'Common questions', faqHeading: 'Before you enquire.', faqs: [['Can you recommend the right pump for my borewell?', 'Yes. Share your borewell depth, water requirement and the use—farm, home or commercial—on WhatsApp. We will guide you to a suitable option.'], ['Do you show product prices on the website?', 'No. Product availability, horsepower, cable size, pipe type and fittings differ by requirement. Use “Get price on WhatsApp” for a current quotation.'], ['Do you provide drilling and materials together?', 'Yes. We can discuss drilling, pump selection and the materials needed for a complete water setup.']],
    contactKicker: "Let's discuss your requirement", contactHeading: 'Need a pump, borewell service or a site visit?', contactBody: 'Call or WhatsApp our local team with your location and requirement. We’ll help with the next practical step.', alsoCall: 'Additional call number',
  },
  mr: {
    name: 'मराठी', nav: ['सेवा', 'उत्पादने', 'आमच्याबद्दल', 'ठिकाण'], directions: 'दिशा', call: 'कॉल करा', whatsapp: 'व्हॉट्सअॅप',
    heroKicker: 'बोअरवेल सोल्यूशन्सचा २५ वर्षांचा अनुभव · कोल्हापूर', heroBefore: 'पाण्याची सुरुवात योग्य', heroAccent: 'बोअरवेलने होते.',
    heroLead: 'बोअरवेल ड्रिलिंग, पंप, पाईप, केबल आणि आवश्यक साहित्य—घर, शेती, व्यवसाय व उद्योगांसाठी योग्य निवड.',
    stats: [['२५ वर्षे', 'प्रत्यक्ष अनुभव'], ['उत्पादने + सेवा', 'एक स्थानिक टीम'], ['चौकशीनुसार', 'योग्य मार्गदर्शन']],
    audiences: ['शेतीसाठी', 'घरासाठी', 'व्यावसायिक', 'ड्रिलिंग · पंप · साहित्य'], rangeLabel: 'संपूर्ण उत्पादन श्रेणी', brandsLabel: 'आम्ही पुरवठा करत असलेले ब्रँड आणि उत्पादन प्रकार',
    introKicker: 'संपूर्ण वॉटर-सिस्टम भागीदार', introHeading: <>भूजलापासून कार्यरत <em>पाण्याच्या लाईनपर्यंत.</em></>,
    introBody: 'प्रत्येक बोअरवेलला योग्य पंप, केबल, पाईप आणि संरक्षणाची गरज असते. फक्त उपलब्ध माल नव्हे, तर खोली, गरज आणि साइटनुसार योग्य पर्याय सुचवतो.',
    servicesKicker: 'सेवा', servicesHeading: 'एक टीम. प्रत्येक टप्प्यावर.', servicesBody: 'नवीन बोअरवेल, दुरुस्तीची गरज किंवा संपूर्ण पंप इन्स्टॉलेशनसाठी व्यावहारिक मदत.',
    services: [['बोअरवेल ड्रिलिंग', 'शेती, घरे, व्यावसायिक इमारती आणि औद्योगिक ठिकाणांसाठी ४ इंच, ६.५ इंच आणि ७.५ इंच बोअरवेल ड्रिलिंग.', 'तुमच्या साइटबद्दल सांगा'], ['क्लिनिंग आणि फ्लशिंग', 'पाण्याचा प्रवाह, स्वच्छता किंवा कामगिरीसाठी विद्यमान बोअरवेलची मदत.', 'साइटनुसार मार्गदर्शन'], ['SSP पंप इन्स्टॉलेशन आणि पुरवठा', 'संपूर्ण वॉटर-सिस्टम सेटअपसाठी SSP पंपाचे अधिकृत वितरक—इन्स्टॉलेशन, उत्पादन निवड, ॲक्सेसरीज आणि व्यावहारिक मदत.', 'पंप आणि साहित्य']],
    catalogueKicker: 'उत्पादन कॅटलॉग', catalogueHeading: <>संपूर्ण सेटअपसाठी<br /><em>योग्य उत्पादने.</em></>, catalogueBody: 'उपलब्धता आणि कोटेशनसाठी व्हॉट्सअॅपवर विचारा. एचपी, केबल, पाईप आणि फिटिंग्ज गरजेनुसार बदलत असल्याने निश्चित किंमत दिलेली नाही.',
    products: [['SSP सबमर्सिबल पंप सेट', 'SSP सबमर्सिबल पंप सेट आणि SwarajLaxmi पंप. साइज: ०.५ एचपी, ०.७५ एचपी, १ एचपी, १.५ एचपी, २ एचपी, ३ एचपी आणि गरजेनुसार ५ एचपी.'], ['SSP ओपनवेल पंप', 'डीप वेल, निवासी आणि अपार्टमेंटच्या पाण्याच्या टाकीसाठी.'], ['Unique पंप गार्ड', 'ॲनालॉग पॅनेल, डिजिटल पॅनेल आणि वॉटर सेन्सर पॅनेल पर्याय.'], ['सबमर्सिबल फ्लॅट केबल', 'साइज: २.५ स्क्वेअर मिमी, ४ स्क्वेअर मिमी.'], ['Jain एचडीपीई पाईप', 'सर्व प्रकारचे एचडीपीई पाईप आणि सर्व साइज. पंप साइज व पाणी डिस्चार्जच्या गरजेनुसार २० मिमी ते १६० मिमी (१/२ इंच ते ६ इंच) बाह्य व्यास.'], ['बोअरवेल फिटिंग्ज आणि इन्स्टॉल ॲक्सेसरीज', 'संपूर्ण पंप कनेक्शनसाठी बोअरवेल फिटिंग्ज आणि इन्स्टॉल ॲक्सेसरीज.'], ['नायलॉन रोप', 'Tuf रोप. साइज: १२ मिमी, १४ मिमी आणि इतर साइज. सबमर्सिबल पंप सेट लटकवण्यासाठी सेफ्टी रोप.'], ['सेन्सर केबल', 'साइज: ०.५ स्क्वेअर मिमी, ०.७५ स्क्वेअर मिमी आणि १.०० स्क्वेअर मिमी.']],
    availability: 'चौकशीनुसार उपलब्ध', price: 'व्हॉट्सअॅपवर किंमत विचारा', whyKicker: 'पवार बोअरवेल का?', whyHeading: <>स्थानिक अनुभव.<br /><em>व्यावहारिक शिफारसी.</em></>,
    whyBody: 'आम्ही कोल्हापूर आणि जवळच्या महाराष्ट्रात काम करतो. विश्वासार्ह साहित्य, स्पष्ट मार्गदर्शन आणि प्रत्यक्ष साइटची गरज यावर आमचा भर असतो.',
    reasons: ['स्थानिक माहिती आणि व्यावहारिक मार्गदर्शन', 'SSP, SwarajLaxmi पंप', 'पंप गार्ड, पॅनेल आणि कंट्रोलर पर्याय'], guide: 'खरेदीपूर्वी उत्पादन मार्गदर्शन.',
    areaKicker: 'सेवा क्षेत्र', areaHeading: <>पहिले कोल्हापूर.<br /><em>नंतर महाराष्ट्र.</em></>, areaBody: 'गड-मुदशिंगी, कोल्हापूर येथे स्थित. गरजेनुसार कोल्हापूर, सांगली, सातारा, कोकण आणि आसपासच्या महाराष्ट्रात सेवा.', hours: 'कामाची वेळ: सकाळी ९:३० ते रात्री ८:००', getDirections: 'दिशा मिळवा',
    faqKicker: 'सामान्य प्रश्न', faqHeading: 'चौकशीपूर्वी जाणून घ्या.', faqs: [['माझ्या बोअरवेलसाठी योग्य पंप सुचवाल का?', 'होय. बोअरवेलची खोली, पाण्याची गरज आणि वापर—शेती, घर किंवा व्यवसाय—व्हॉट्सअॅपवर पाठवा. आम्ही योग्य पर्याय सुचवू.'], ['वेबसाइटवर उत्पादनांच्या किंमती दाखवता का?', 'नाही. उपलब्धता, एचपी, केबल साइज, पाईप प्रकार आणि फिटिंग्ज गरजेनुसार बदलतात. सध्याच्या कोटेशनसाठी व्हॉट्सअॅपवर विचारा.'], ['ड्रिलिंग आणि साहित्य दोन्ही मिळते का?', 'होय. संपूर्ण वॉटर सेटअपसाठी ड्रिलिंग, पंप निवड आणि आवश्यक साहित्याबद्दल चर्चा करू शकतो.']],
    contactKicker: 'तुमच्या गरजेबद्दल बोलूया', contactHeading: 'पंप, बोअरवेल सेवा किंवा साइट व्हिजिट हवी आहे?', contactBody: 'तुमचे ठिकाण आणि गरज सांगून आमच्या स्थानिक टीमला कॉल किंवा व्हॉट्सअॅप करा. आम्ही पुढची योग्य पायरी सांगू.', alsoCall: 'अतिरिक्त कॉल नंबर',
  },
  hi: {
    name: 'हिन्दी', nav: ['सेवाएं', 'उत्पाद', 'हमारे बारे में', 'स्थान'], directions: 'दिशा', call: 'कॉल करें', whatsapp: 'व्हाट्सऐप',
    heroKicker: 'बोरवेल समाधान का 25 वर्षों का अनुभव · कोल्हापुर', heroBefore: 'पानी की शुरुआत सही', heroAccent: 'बोरवेल से होती है।',
    heroLead: 'बोरवेल ड्रिलिंग, पंप, पाइप, केबल और जरूरी सामान—घर, खेत, व्यवसाय और उद्योगों के लिए सही चयन।',
    stats: [['25 वर्ष', 'व्यावहारिक अनुभव'], ['उत्पाद + सेवा', 'एक स्थानीय टीम'], ['पूछताछ पर', 'सही मार्गदर्शन']],
    audiences: ['कृषि', 'आवासीय', 'व्यावसायिक', 'ड्रिलिंग · पंप · सामग्री'], rangeLabel: 'संपूर्ण उत्पाद रेंज', brandsLabel: 'हमारे सप्लाई किए जाने वाले ब्रांड और उत्पाद परिवार',
    introKicker: 'संपूर्ण वॉटर-सिस्टम पार्टनर', introHeading: <>भूमिगत जल से चालू <em>वॉटर लाइन तक।</em></>,
    introBody: 'हर बोरवेल को सही पंप, केबल, पाइप और सुरक्षा की जरूरत होती है। हम केवल उपलब्ध सामान नहीं, बल्कि गहराई, जरूरत और साइट के अनुसार सही विकल्प सुझाते हैं।',
    servicesKicker: 'सेवाएं', servicesHeading: 'एक टीम। हर चरण।', servicesBody: 'नए बोरवेल, मरम्मत की जरूरत या पूरे पंप इंस्टॉलेशन के लिए व्यावहारिक सहायता।',
    services: [['बोरवेल ड्रिलिंग', 'खेतों, घरों, व्यावसायिक इमारतों और औद्योगिक स्थलों के लिए 4 इंच, 6.5 इंच और 7.5 इंच बोरवेल ड्रिलिंग।', 'अपनी साइट पर बात करें'], ['क्लीनिंग और फ्लशिंग', 'पानी का प्रवाह, सफाई या प्रदर्शन सुधारने के लिए मौजूदा बोरवेल की सहायता।', 'साइट के अनुसार मार्गदर्शन'], ['SSP पंप इंस्टॉलेशन और सप्लाई', 'पूरे वॉटर-सिस्टम सेटअप के लिए SSP पंप के अधिकृत वितरक—इंस्टॉलेशन, उत्पाद चयन, एक्सेसरीज और व्यावहारिक सहायता।', 'पंप और सामग्री']],
    catalogueKicker: 'उत्पाद कैटलॉग', catalogueHeading: <>पूरे सेटअप के लिए<br /><em>सही उत्पाद।</em></>, catalogueBody: 'उपलब्धता और कोटेशन के लिए व्हाट्सऐप पर पूछें। एचपी, केबल, पाइप और फिटिंग जरूरत के अनुसार बदलते हैं, इसलिए निश्चित मूल्य प्रकाशित नहीं हैं।',
    products: [['SSP सबमर्सिबल पंप सेट', 'SSP सबमर्सिबल पंप सेट और SwarajLaxmi पंप। साइज: 0.5 एचपी, 0.75 एचपी, 1 एचपी, 1.5 एचपी, 2 एचपी, 3 एचपी और आवश्यकता पर 5 एचपी।'], ['SSP ओपनवेल पंप', 'डीप वेल, आवासीय और अपार्टमेंट के पानी के टैंक के लिए।'], ['Unique पंप गार्ड', 'एनालॉग पैनल, डिजिटल पैनल और वॉटर सेंसर पैनल विकल्प।'], ['सबमर्सिबल फ्लैट केबल', 'साइज: 2.5 वर्ग मिमी, 4 वर्ग मिमी।'], ['Jain एचडीपीई पाइप', 'सभी प्रकार के एचडीपीई पाइप और सभी साइज। पंप साइज और पानी डिस्चार्ज की जरूरत के अनुसार 20 मिमी से 160 मिमी (1/2 इंच से 6 इंच) बाहरी व्यास।'], ['बोरवेल फिटिंग और इंस्टॉल एक्सेसरीज', 'पूरे पंप कनेक्शन के लिए बोरवेल फिटिंग और इंस्टॉल एक्सेसरीज।'], ['नायलॉन रोप', 'Tuf रोप। साइज: 12 मिमी, 14 मिमी और अन्य साइज। सबमर्सिबल पंप सेट लटकाने के लिए सेफ्टी रोप।'], ['सेंसर केबल', 'साइज: 0.5 वर्ग मिमी, 0.75 वर्ग मिमी और 1.00 वर्ग मिमी।']],
    availability: 'पूछताछ पर उपलब्ध', price: 'व्हाट्सऐप पर कीमत पूछें', whyKicker: 'पवार बोरवेल क्यों?', whyHeading: <>स्थानीय अनुभव।<br /><em>व्यावहारिक सलाह।</em></>,
    whyBody: 'हम कोल्हापुर और आसपास के महाराष्ट्र में काम करते हैं। हमारा ध्यान भरोसेमंद उपकरण, स्पष्ट मार्गदर्शन और वास्तविक साइट की जरूरत पर रहता है।',
    reasons: ['स्थानीय जानकारी और व्यावहारिक मार्गदर्शन', 'SSP, SwarajLaxmi पंप', 'पंप गार्ड, पैनल और कंट्रोलर विकल्प'], guide: 'खरीदने से पहले उत्पाद मार्गदर्शन।',
    areaKicker: 'सेवा क्षेत्र', areaHeading: <>पहले कोल्हापुर।<br /><em>फिर महाराष्ट्र।</em></>, areaBody: 'गड-मुदशिंगी, कोल्हापुर में स्थित। जरूरत के अनुसार कोल्हापुर, सांगली, सतारा, कोंकण और आसपास के महाराष्ट्र में सेवा।', hours: 'कार्य समय: सुबह 9:30 बजे – रात 8:00 बजे', getDirections: 'दिशा प्राप्त करें',
    faqKicker: 'सामान्य प्रश्न', faqHeading: 'पूछताछ से पहले।', faqs: [['क्या आप मेरी बोरवेल के लिए सही पंप सुझा सकते हैं?', 'हाँ। बोरवेल की गहराई, पानी की जरूरत और उपयोग—खेत, घर या व्यवसाय—व्हाट्सऐप पर भेजें। हम सही विकल्प सुझाएंगे।'], ['क्या आप वेबसाइट पर उत्पाद की कीमतें दिखाते हैं?', 'नहीं। उपलब्धता, एचपी, केबल आकार, पाइप प्रकार और फिटिंग जरूरत के अनुसार बदलते हैं। वर्तमान कोटेशन के लिए व्हाट्सऐप पर पूछें।'], ['क्या आप ड्रिलिंग और सामग्री दोनों देते हैं?', 'हाँ। पूरे वॉटर सेटअप के लिए ड्रिलिंग, पंप चयन और आवश्यक सामग्री पर चर्चा कर सकते हैं।']],
    contactKicker: 'अपनी जरूरत पर बात करें', contactHeading: 'पंप, बोरवेल सेवा या साइट विजिट चाहिए?', contactBody: 'अपनी लोकेशन और जरूरत के साथ हमारी स्थानीय टीम को कॉल या व्हाट्सऐप करें। हम अगला सही कदम बताएंगे।', alsoCall: 'अतिरिक्त कॉल नंबर',
  },
};

function Arrow() { return null; }
function Brand() { return <a className="brand" href="#top" aria-label="Pawar Borewell's and Trader's home"><Image className="brand-logo brand-logo-official" src="/assets/pawar-borewell-official-emblem.jpeg" width={46} height={46} alt="Pawar Borewells and Traders logo" priority /><span><b>Pawar Borewell&apos;s</b><small>&amp; Trader&apos;s · Kolhapur</small></span></a>; }
function ProductImage({ photos, alt }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = photos.length > 1;
  const previous = () => setActiveImage((index) => (index - 1 + photos.length) % photos.length);
  const next = () => setActiveImage((index) => (index + 1) % photos.length);

  return <div className="catalogue-image"><Image src={photos[activeImage]} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" alt={alt} />{hasMultipleImages && <div className="image-controls"><button type="button" onClick={previous} aria-label={`Previous ${alt} image`}>Prev</button><span aria-live="polite">{activeImage + 1}/{photos.length}</span><button type="button" onClick={next} aria-label={`Next ${alt} image`}>Next</button></div>}</div>;
}

function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const mobile = String(form.get('mobile') || '').replace(/\D/g, '');

    if (mobile.length !== 10) {
      setFormError('Please Enter A Valid 10-Digit Mobile Number / कृपया वैध १० अंकी मोबाईल नंबर टाका.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);
    const message = [
      'New Website Enquiry',
      `Name: ${form.get('name')}`,
      `Mobile: ${mobile}`,
      `Village/City: ${form.get('location')}`,
      `Service Needed: ${form.get('service')}`,
      `Message: ${form.get('message') || 'Not Provided'}`,
    ].join('\n');

    window.setTimeout(() => {
      window.location.href = wa(message);
      setIsSubmitting(false);
    }, 350);
  };

  return <form className="enquiry-form" onSubmit={handleSubmit} aria-describedby="enquiry-help">
    <div className="form-heading"><span>चौकशी फॉर्म</span><h3>Enquiry Form</h3><p>Share Your Requirement And Our Team Will Contact You.</p></div>
    <div className="form-grid">
      <label>Full Name <span>/ पूर्ण नाव</span><input name="name" type="text" autoComplete="name" required placeholder="Your Full Name" /></label>
      <label>Mobile Number <span>/ मोबाईल नंबर</span><input name="mobile" type="tel" inputMode="numeric" autoComplete="tel" required pattern="[0-9]{10}" maxLength="10" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '').slice(0, 10); }} placeholder="10-Digit Mobile Number" /></label>
    </div>
    <label>Village/City <span>/ गाव किंवा शहर</span><input name="location" type="text" autoComplete="address-level2" required placeholder="Your Village Or City" /></label>
    <label>Service Needed <span>/ कोणती सेवा हवी आहे?</span><select name="service" required defaultValue=""><option value="" disabled>-- Select Service / पर्याय निवडा --</option><option>Borewell Drilling / नवीन बोअरवेल पाडणे</option><option>SSP Pump & Motor Installation / पंप आणि मोटर बसवणे</option><option>Borewell Cleaning & Flushing / बोअरवेल साफ करणे</option><option>Pipes, Cables & Accessories / इतर साहित्य खरेदी</option></select></label>
    <label>Message <span>/ विशेष संदेश</span><textarea name="message" rows="3" placeholder="e.g., How much for a 500ft borewell? / ५०० फूट बोअरवेलचा खर्च किती येईल?" /></label>
    {formError && <p className="form-error" role="alert">{formError}</p>}
    <button className="enquiry-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending Enquiry… / माहिती पाठवत आहे…' : 'Send Enquiry / माहिती पाठवा'}</button>
    <small className="form-note" id="enquiry-help">Your Enquiry Will Open In WhatsApp For Sending.</small>
  </form>;
}

export default function Home() {
  const [language, setLanguage] = useState('en');
  const t = content[language];
  const productEnquiry = (product) => wa(`Hello, I need a price and availability for ${product}.`);
  return <>
    <header className="header"><Brand /><nav className="desktop-nav" aria-label="Main navigation"><a href="#services">{t.nav[0]}</a><a href="#products">{t.nav[1]}</a><a href="#why-us">{t.nav[2]}</a><a href="#location">{t.nav[3]}</a></nav><div className="header-actions"><select className="language-picker" value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choose language">{Object.entries(content).map(([code, item]) => <option value={code} key={code}>{item.name}</option>)}</select><a className="directions-link" href={directions} target="_blank" rel="noopener">{t.directions}</a><a className="top-whatsapp" href={wa('Hello, I want to enquire about borewell service in Kolhapur.')} target="_blank" rel="noopener">◔ {t.whatsapp}</a><a className="top-call" href={`tel:+91${primaryPhone}`}>☎ {t.call}</a></div></header>
    <main id="top">
      <section className="hero"><Image className="hero-image" src="/assets/drilling-site.jpeg" fill priority sizes="(max-width: 700px) 65vw, 45vw" alt="Pawar Borewell drilling rig at a Kolhapur site" /><div className="hero-shade" /><div className="shell hero-content hero-centered"><p className="kicker light">{t.heroKicker}</p><h1>{t.heroBefore} <em>{t.heroAccent}</em></h1><p className="lead">{t.heroLead}</p><div className="actions"><a className="button white" href={`tel:+91${primaryPhone}`}>{t.call} <Arrow /></a><a className="button hero-whatsapp" href={wa('Hello, I want to enquire about borewell service in Kolhapur.')} target="_blank" rel="noopener">◔ {t.whatsapp}</a></div><div className="stats">{t.stats.map(([title, detail]) => <div key={title}><b>{title}</b><span>{detail}</span></div>)}</div></div></section>
      <section className="trust-strip"><div className="shell">{t.audiences.map((audience) => <span key={audience}>{audience}</span>)}</div></section>
      <section className="shell intro"><p className="kicker">{t.introKicker}</p><div><h2>{t.introHeading}</h2><p>{t.introBody}</p></div></section>
      <section className="services" id="services"><div className="shell"><div className="section-head"><div><p className="kicker">{t.servicesKicker}</p><h2>{t.servicesHeading}</h2></div><p>{t.servicesBody}</p></div><div className="cards">{t.services.map(([title, body, action], index) => <article className={`card ${index === 0 ? 'featured' : ''}`} key={title}><small>0{index + 1}</small><i aria-hidden="true">{index === 0 ? '⌄' : index === 1 ? '◌' : '⌁'}</i><h3>{title}</h3><p>{body}</p>{index === 0 ? <a href={wa('Hello, I want to discuss a borewell site.')} target="_blank" rel="noopener">{action} <Arrow /></a> : <span className="card-tag">{action}</span>}</article>)}</div></div></section>
      <section className="catalogue" id="products"><div className="shell"><div className="catalogue-head"><div><p className="kicker">{t.catalogueKicker}</p><h2>{t.catalogueHeading}</h2></div><p>{t.catalogueBody}</p></div><div className="product-grid">{t.products.map(([title, detail], index) => <article className="catalogue-card" key={title}><ProductImage photos={productPhotos[index]} alt={title} /><div className="catalogue-copy"><span className="availability">{t.availability}</span><h3>{title}</h3><p>{detail}</p><a href={productEnquiry(title)} target="_blank" rel="noopener">{t.price} <Arrow /></a></div></article>)}</div></div></section>
      <section className="enquiry-section" id="enquiry"><div className="shell enquiry-layout"><div className="enquiry-intro"><p className="kicker">{t.contactKicker}</p><h2>{t.contactHeading}</h2><p>{t.contactBody}</p><div className="enquiry-benefits"><span>✓ Local Service Support</span><span>✓ Product And Installation Guidance</span><span>✓ Quick WhatsApp Response</span></div><div className="enquiry-contact"><a href={`tel:+91${primaryPhone}`}>Call: {primaryPhone.slice(0, 5)} {primaryPhone.slice(5)}</a><a href={wa('Hello, I want to enquire about Pawar Borewell services.')} target="_blank" rel="noopener">WhatsApp Us</a></div></div><EnquiryForm /></div></section>
      <section className="showcase" id="why-us"><div className="shell showcase-grid"><div><p className="kicker">{t.whyKicker}</p><h2>{t.whyHeading}</h2><p>{t.whyBody}</p><div className="reason-list">{t.reasons.map((reason) => <span key={reason}>✓ {reason}</span>)}</div></div><figure><Image src="/assets/products/pump-range.jpeg" fill sizes="(max-width: 700px) 100vw, 58vw" alt="Pawar Borewell product selection" /><figcaption>{t.guide}</figcaption></figure></div></section>
      <section className="shell coverage" id="location"><div><p className="kicker">{t.areaKicker}</p><h2>{t.areaHeading}</h2><p className="location-copy">{t.areaBody}</p><p className="hours">{t.hours}</p><a className="location-button" href={directions} target="_blank" rel="noopener">{t.getDirections}</a></div><a className="map" href={directions} target="_blank" rel="noopener" aria-label="Get directions to Pawar Borewell's and Trader's"><b>● &nbsp;Gad-Mudshingi, Kolhapur</b><span>Pawar Borewell&apos;s &amp; Trader&apos;s</span><small>Open in Google Maps</small></a></section>
      <section className="shell faq"><p className="kicker">{t.faqKicker}</p><h2>{t.faqHeading}</h2>{t.faqs.map(([question, answer], index) => <details open={index === 0} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
      <section className="shell callout contact-callout"><div className="callout-copy"><p className="kicker">{t.contactKicker}</p><h2>{t.contactHeading}</h2><p>{t.contactBody}</p></div><div className="callout-actions"><a className="button dark" href={`tel:+91${primaryPhone}`}>{t.call}: {primaryPhone.slice(0, 5)} {primaryPhone.slice(5)}</a><a className="button outline" href={wa('Hello, I want to enquire about Pawar Borewell services.')} target="_blank" rel="noopener">{t.whatsapp}</a><small>{t.alsoCall}: <a className="secondary-number" href={`tel:+91${secondaryPhone}`}>{secondaryPhone}</a><br />Mudshingi, Kolhapur · 9:30 AM–8:00 PM</small></div></section>
    </main>
    <footer><div className="shell footer"><Brand /><p><a href={directions} target="_blank" rel="noopener">Mudshingi, Kolhapur</a><br />© {new Date().getFullYear()} Pawar Borewell&apos;s &amp; Trader&apos;s</p><p><a href={`tel:+91${primaryPhone}`}>{primaryPhone}</a><br /><a href={`tel:+91${secondaryPhone}`}>{secondaryPhone}</a></p></div></footer>
    <nav className="mobile-nav" aria-label="Quick contact"><a href={`tel:+91${primaryPhone}`}>☎ &nbsp; {t.call}</a><a href={wa('Hello, I want to enquire about Pawar Borewell services.')} target="_blank" rel="noopener">◔ &nbsp; {t.whatsapp}</a></nav>
  </>;
}
