"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { contactPhones, directions, mapPreview, primaryPhone, whatsappPhone } from './site-config';

const wa = (message) => `https://wa.me/91${whatsappPhone}?text=${encodeURIComponent(message)}`;
const drillingPhotos = ['/assets/borewell-drilling-water.jpeg'];
const productPhotos = [
  ['/assets/products/submersible-pump.jpeg', '/assets/products/ssp-submersible-poster.jpeg'],
  ['/assets/products/openwell-pump.jpeg'],
  ['/assets/products/pump-guard-panel.jpeg', '/assets/products/pump-guard.jpeg'],
  ['/assets/products/fittings.jpeg'],
  ['/assets/products/submersible-cable.jpeg', '/assets/products/sensor-cable.jpeg'],
  ['/assets/products/hdpe-pipe.jpeg'],
  ['/assets/products/nylon-rope.jpeg'],
  ['/assets/products/sensor-cable.jpeg', '/assets/products/submersible-cable.jpeg'],
];

const photoLabels = {
  en: { viewPhoto: 'View full photo', closePhoto: 'Close photo', photoOf: 'photo', fullPhoto: 'Full photo', skip: 'Skip to content', navLabel: 'Main navigation', quickActions: 'Quick actions', languageLabel: 'Choose language' },
  mr: { viewPhoto: 'पूर्ण फोटो पहा', closePhoto: 'फोटो बंद करा', photoOf: 'फोटो', fullPhoto: 'पूर्ण फोटो', skip: 'मुख्य मजकुराकडे जा', navLabel: 'मुख्य नेव्हिगेशन', quickActions: 'जलद पर्याय', languageLabel: 'भाषा निवडा' },
  hi: { viewPhoto: 'पूरा फोटो देखें', closePhoto: 'फोटो बंद करें', photoOf: 'फोटो', fullPhoto: 'पूरा फोटो', skip: 'मुख्य सामग्री पर जाएं', navLabel: 'मुख्य नेविगेशन', quickActions: 'त्वरित विकल्प', languageLabel: 'भाषा चुनें' },
};

const content = {
  en: {
    name: 'English', nav: ['Services', 'Products', 'Why us', 'Location'], directions: 'Directions', enquire: 'Enquire', call: 'Call now', whatsapp: 'WhatsApp', explore: 'Explore', exploreTitle: 'Go to a section', serviceCta: 'Ask about this service',
    heroKicker: '25 years of borewell solutions · Kolhapur', heroBefore: 'Water Starts With The', heroAccent: 'Right Borewell.',
    heroLead: 'Borewell drilling, pumps, pipe, cable and essential parts—chosen for homes, farms, commercial sites and industries.',
    stats: [['25 years', 'practical experience'], ['Products + service', 'one local team'], ['On enquiry', 'right-size guidance']],
    audiences: ['Agricultural', 'Residential', 'Commercial', 'Drilling · pumps · supplies'], rangeLabel: 'Complete product range', brandsLabel: 'Brands and product families we supply',
    introKicker: 'A complete water-system partner', introHeading: <>From underground water to a working <em>water line.</em></>,
    introBody: 'Every borewell needs the right pump, cable, pipe and protection. We help you decide what fits the depth, requirement and site—not just what is on the shelf.',
    servicesKicker: 'Services', servicesHeading: 'One team. Every step.', servicesBody: 'Practical support for a new borewell, a repair need or the complete pump installation.',
    services: [['Borewell drilling', "Professional 6.5' and 4.75' borewell drilling for farms, homes, commercial buildings and industrial sites.", 'Discuss your site'], ['Cleaning & flushing', 'Support for existing borewells when water flow, cleanliness or performance needs attention.', 'Site-based guidance'], ['SSP pump installation & supply', 'Authorised SSP pump distributor for installation, product selection, accessories and practical support for a complete water-system setup.', 'Pumps & materials']],
    catalogueKicker: 'Product Catalogue', catalogueHeading: <>Products For The<br /><em>Complete Setup.</em></>, catalogueBody: 'Ask For Availability And A Quotation On WhatsApp. We Do Not Publish Fixed Prices Because The Right Size And Configuration Depend On Your Requirement.',
    products: [['SSP Submersible Pump Set', 'SSP Submersible Pump Set And SwarajLaxmi Pump. Sizes: 0.5 HP, 0.75 HP, 1 HP, 1.5 HP, 2 HP, 3 HP And 5 HP On Requirement.'], ['SSP Openwell Pump', 'Used For Deep Wells, Residential And Apartment Water Tanks.'], ['Unique Pump Guard', 'Analog Panel, Digital Panel And Water Sensor Panel Options.'], ['Borewell Fittings & Install Accessories', 'Borewell Fittings And Install Accessories For A Complete Pump Connection.'], ['Submersible Flat Cable', 'Size: 2.5 Sq. Mm, 4 Sq. Mm.'], ['Jain HDPE Pipe', 'All Types Of HDPE Pipes And All Sizes. Size: 20 Mm To 160 Mm (1/2 Inch To 6 Inches) In Outer Diameter, Depending On Pump Size And Water Discharge Needs.'], ['Nylon Rope', 'Tuf Rope. Sizes: 10, 12, 14, 16 Mm And Other Sizes. Safety Rope For Suspending Submersible Pump Sets.'], ['Sensor Cable', 'Size: 0.5 Sq. Mm, 0.75 Sq. Mm And 1.00 Sq. Mm.']],
    availability: 'Available on enquiry', price: 'Get price on WhatsApp', carouselHint: 'Swipe to see more', previousSlide: 'Previous', nextSlide: 'Next', photosLabel: 'photos', whyKicker: "Why Pawar Borewell's", whyHeading: <>Local knowledge.<br /><em>Practical recommendations.</em></>,
    whyBody: 'We work across Maharashtra with a focus on dependable equipment, transparent guidance and the needs of the actual site.',
    reasons: ['Local Knowledge And Practical Guidance', 'Pumps From SSP, SwarajLaxmi', 'Pump Guard, Panel And Controller Options'], guide: 'Product Guidance Before You Buy.',
    areaKicker: 'Service area', areaHeading: <>Based In Kolhapur.<br /><em>Serving All Of Maharashtra.</em></>, areaBody: 'From Gad-Mudshingi, Kolhapur, we serve customers across Maharashtra for borewell drilling, pumps and related materials. Contact us to confirm service at your location.', getDirections: 'Get directions', mapPreviewLabel: 'Our base area', mapPreviewTitle: 'Map of Gad-Mudshingi, Kolhapur',
    faqKicker: 'Common questions', faqHeading: 'Before you enquire.', faqs: [['Can you recommend the right pump for my borewell?', 'Yes. Share your borewell depth, water requirement and the use—farm, home or commercial—on WhatsApp. We will guide you to a suitable option.'], ['Do you show product prices on the website?', 'No. Product availability, horsepower, cable size, pipe type and fittings differ by requirement. Use “Get price on WhatsApp” for a current quotation.'], ['Do you provide drilling and materials together?', 'Yes. We can discuss drilling, pump selection and the materials needed for a complete water setup.']],
    footerSummary: 'Borewell drilling, pumps and materials for a complete water setup.', backToTop: 'Back to top',
  },
  mr: {
    name: 'मराठी', nav: ['सेवा', 'उत्पादने', 'आमच्याबद्दल', 'ठिकाण'], directions: 'दिशा', enquire: 'चौकशी', call: 'कॉल करा', whatsapp: 'व्हॉट्सअॅप', explore: 'पाहा', exploreTitle: 'विभाग निवडा', serviceCta: 'या सेवेबद्दल विचारा',
    heroKicker: 'बोअरवेल सोल्यूशन्सचा २५ वर्षांचा अनुभव · कोल्हापूर', heroBefore: 'पाण्याची सुरुवात योग्य', heroAccent: 'बोअरवेलने होते.',
    heroLead: 'बोअरवेल ड्रिलिंग, पंप, पाईप, केबल आणि आवश्यक साहित्य—घर, शेती, व्यवसाय व उद्योगांसाठी योग्य निवड.',
    stats: [['२५ वर्षे', 'प्रत्यक्ष अनुभव'], ['उत्पादने + सेवा', 'एक स्थानिक टीम'], ['चौकशीनुसार', 'योग्य मार्गदर्शन']],
    audiences: ['शेतीसाठी', 'घरासाठी', 'व्यावसायिक', 'ड्रिलिंग · पंप · साहित्य'], rangeLabel: 'संपूर्ण उत्पादन श्रेणी', brandsLabel: 'आम्ही पुरवठा करत असलेले ब्रँड आणि उत्पादन प्रकार',
    introKicker: 'संपूर्ण वॉटर-सिस्टम भागीदार', introHeading: <>भूजलापासून कार्यरत <em>पाण्याच्या लाईनपर्यंत.</em></>,
    introBody: 'प्रत्येक बोअरवेलला योग्य पंप, केबल, पाईप आणि संरक्षणाची गरज असते. फक्त उपलब्ध माल नव्हे, तर खोली, गरज आणि साइटनुसार योग्य पर्याय सुचवतो.',
    servicesKicker: 'सेवा', servicesHeading: 'एक टीम. प्रत्येक टप्प्यावर.', servicesBody: 'नवीन बोअरवेल, दुरुस्तीची गरज किंवा संपूर्ण पंप इन्स्टॉलेशनसाठी व्यावहारिक मदत.',
    services: [['बोअरवेल ड्रिलिंग', "शेती, घरे, व्यावसायिक इमारती आणि औद्योगिक ठिकाणांसाठी ६.५' आणि ४.७५' बोअरवेल ड्रिलिंग.", 'तुमच्या साइटबद्दल सांगा'], ['क्लिनिंग आणि फ्लशिंग', 'पाण्याचा प्रवाह, स्वच्छता किंवा कामगिरीसाठी विद्यमान बोअरवेलची मदत.', 'साइटनुसार मार्गदर्शन'], ['SSP पंप इन्स्टॉलेशन आणि पुरवठा', 'संपूर्ण वॉटर-सिस्टम सेटअपसाठी SSP पंपाचे अधिकृत वितरक—इन्स्टॉलेशन, उत्पादन निवड, ॲक्सेसरीज आणि व्यावहारिक मदत.', 'पंप आणि साहित्य']],
    catalogueKicker: 'उत्पादन कॅटलॉग', catalogueHeading: <>संपूर्ण सेटअपसाठी<br /><em>योग्य उत्पादने.</em></>, catalogueBody: 'उपलब्धता आणि कोटेशनसाठी व्हॉट्सअॅपवर विचारा. एचपी, केबल, पाईप आणि फिटिंग्ज गरजेनुसार बदलत असल्याने निश्चित किंमत दिलेली नाही.',
    products: [['SSP सबमर्सिबल पंप सेट', 'SSP सबमर्सिबल पंप सेट आणि SwarajLaxmi पंप. साइज: ०.५ एचपी, ०.७५ एचपी, १ एचपी, १.५ एचपी, २ एचपी, ३ एचपी आणि गरजेनुसार ५ एचपी.'], ['SSP ओपनवेल पंप', 'डीप वेल, निवासी आणि अपार्टमेंटच्या पाण्याच्या टाकीसाठी.'], ['Unique पंप गार्ड', 'ॲनालॉग पॅनेल, डिजिटल पॅनेल आणि वॉटर सेन्सर पॅनेल पर्याय.'], ['बोअरवेल फिटिंग्ज आणि इन्स्टॉल ॲक्सेसरीज', 'संपूर्ण पंप कनेक्शनसाठी बोअरवेल फिटिंग्ज आणि इन्स्टॉल ॲक्सेसरीज.'], ['सबमर्सिबल फ्लॅट केबल', 'साइज: २.५ स्क्वेअर मिमी, ४ स्क्वेअर मिमी.'], ['Jain एचडीपीई पाईप', 'सर्व प्रकारचे एचडीपीई पाईप आणि सर्व साइज. पंप साइज व पाणी डिस्चार्जच्या गरजेनुसार २० मिमी ते १६० मिमी (१/२ इंच ते ६ इंच) बाह्य व्यास.'], ['नायलॉन रोप', 'Tuf रोप. साइज: १०, १२, १४, १६ मिमी आणि इतर साइज. सबमर्सिबल पंप सेट लटकवण्यासाठी सेफ्टी रोप.'], ['सेन्सर केबल', 'साइज: ०.५ स्क्वेअर मिमी, ०.७५ स्क्वेअर मिमी आणि १.०० स्क्वेअर मिमी.']],
    availability: 'चौकशीनुसार उपलब्ध', price: 'व्हॉट्सअॅपवर किंमत विचारा', carouselHint: 'स्वाइप करा', previousSlide: 'मागील', nextSlide: 'पुढील', photosLabel: 'फोटो', whyKicker: 'पवार बोअरवेल का?', whyHeading: <>स्थानिक अनुभव.<br /><em>व्यावहारिक शिफारसी.</em></>,
    whyBody: 'आम्ही संपूर्ण महाराष्ट्रात काम करतो. विश्वासार्ह साहित्य, स्पष्ट मार्गदर्शन आणि प्रत्यक्ष साइटची गरज यावर आमचा भर असतो.',
    reasons: ['स्थानिक माहिती आणि व्यावहारिक मार्गदर्शन', 'SSP, SwarajLaxmi पंप', 'पंप गार्ड, पॅनेल आणि कंट्रोलर पर्याय'], guide: 'खरेदीपूर्वी उत्पादन मार्गदर्शन.',
    areaKicker: 'सेवा क्षेत्र', areaHeading: <>कोल्हापूर येथे स्थित.<br /><em>संपूर्ण महाराष्ट्रात सेवा.</em></>, areaBody: 'गड-मुदशिंगी, कोल्हापूर येथून आम्ही महाराष्ट्रभर बोअरवेल ड्रिलिंग, पंप आणि संबंधित साहित्याबाबत सेवा देतो. तुमच्या ठिकाणी सेवेसाठी आमच्याशी संपर्क करा.', getDirections: 'दिशा मिळवा', mapPreviewLabel: 'आमचे ठिकाण', mapPreviewTitle: 'गड-मुदशिंगी, कोल्हापूरचा नकाशा',
    faqKicker: 'सामान्य प्रश्न', faqHeading: 'चौकशीपूर्वी जाणून घ्या.', faqs: [['माझ्या बोअरवेलसाठी योग्य पंप सुचवाल का?', 'होय. बोअरवेलची खोली, पाण्याची गरज आणि वापर—शेती, घर किंवा व्यवसाय—व्हॉट्सअॅपवर पाठवा. आम्ही योग्य पर्याय सुचवू.'], ['वेबसाइटवर उत्पादनांच्या किंमती दाखवता का?', 'नाही. उपलब्धता, एचपी, केबल साइज, पाईप प्रकार आणि फिटिंग्ज गरजेनुसार बदलतात. सध्याच्या कोटेशनसाठी व्हॉट्सअॅपवर विचारा.'], ['ड्रिलिंग आणि साहित्य दोन्ही मिळते का?', 'होय. संपूर्ण वॉटर सेटअपसाठी ड्रिलिंग, पंप निवड आणि आवश्यक साहित्याबद्दल चर्चा करू शकतो.']],
    footerSummary: 'संपूर्ण पाणी व्यवस्थेसाठी बोअरवेल ड्रिलिंग, पंप आणि आवश्यक साहित्य.', backToTop: 'वर जा',
  },
  hi: {
    name: 'हिन्दी', nav: ['सेवाएं', 'उत्पाद', 'हमारे बारे में', 'स्थान'], directions: 'दिशा', enquire: 'पूछताछ', call: 'कॉल करें', whatsapp: 'व्हाट्सऐप', explore: 'देखें', exploreTitle: 'विभाग चुनें', serviceCta: 'इस सेवा के बारे में पूछें',
    heroKicker: 'बोरवेल समाधान का 25 वर्षों का अनुभव · कोल्हापुर', heroBefore: 'पानी की शुरुआत सही', heroAccent: 'बोरवेल से होती है।',
    heroLead: 'बोरवेल ड्रिलिंग, पंप, पाइप, केबल और जरूरी सामान—घर, खेत, व्यवसाय और उद्योगों के लिए सही चयन।',
    stats: [['25 वर्ष', 'व्यावहारिक अनुभव'], ['उत्पाद + सेवा', 'एक स्थानीय टीम'], ['पूछताछ पर', 'सही मार्गदर्शन']],
    audiences: ['कृषि', 'आवासीय', 'व्यावसायिक', 'ड्रिलिंग · पंप · सामग्री'], rangeLabel: 'संपूर्ण उत्पाद रेंज', brandsLabel: 'हमारे सप्लाई किए जाने वाले ब्रांड और उत्पाद परिवार',
    introKicker: 'संपूर्ण वॉटर-सिस्टम पार्टनर', introHeading: <>भूमिगत जल से चालू <em>वॉटर लाइन तक।</em></>,
    introBody: 'हर बोरवेल को सही पंप, केबल, पाइप और सुरक्षा की जरूरत होती है। हम केवल उपलब्ध सामान नहीं, बल्कि गहराई, जरूरत और साइट के अनुसार सही विकल्प सुझाते हैं।',
    servicesKicker: 'सेवाएं', servicesHeading: 'एक टीम। हर चरण।', servicesBody: 'नए बोरवेल, मरम्मत की जरूरत या पूरे पंप इंस्टॉलेशन के लिए व्यावहारिक सहायता।',
    services: [['बोरवेल ड्रिलिंग', "खेतों, घरों, व्यावसायिक इमारतों और औद्योगिक स्थलों के लिए 6.5' और 4.75' बोरवेल ड्रिलिंग।", 'अपनी साइट पर बात करें'], ['क्लीनिंग और फ्लशिंग', 'पानी का प्रवाह, सफाई या प्रदर्शन सुधारने के लिए मौजूदा बोरवेल की सहायता।', 'साइट के अनुसार मार्गदर्शन'], ['SSP पंप इंस्टॉलेशन और सप्लाई', 'पूरे वॉटर-सिस्टम सेटअप के लिए SSP पंप के अधिकृत वितरक—इंस्टॉलेशन, उत्पाद चयन, एक्सेसरीज और व्यावहारिक सहायता।', 'पंप और सामग्री']],
    catalogueKicker: 'उत्पाद कैटलॉग', catalogueHeading: <>पूरे सेटअप के लिए<br /><em>सही उत्पाद।</em></>, catalogueBody: 'उपलब्धता और कोटेशन के लिए व्हाट्सऐप पर पूछें। एचपी, केबल, पाइप और फिटिंग जरूरत के अनुसार बदलते हैं, इसलिए निश्चित मूल्य प्रकाशित नहीं हैं।',
    products: [['SSP सबमर्सिबल पंप सेट', 'SSP सबमर्सिबल पंप सेट और SwarajLaxmi पंप। साइज: 0.5 एचपी, 0.75 एचपी, 1 एचपी, 1.5 एचपी, 2 एचपी, 3 एचपी और आवश्यकता पर 5 एचपी।'], ['SSP ओपनवेल पंप', 'डीप वेल, आवासीय और अपार्टमेंट के पानी के टैंक के लिए।'], ['Unique पंप गार्ड', 'एनालॉग पैनल, डिजिटल पैनल और वॉटर सेंसर पैनल विकल्प।'], ['बोरवेल फिटिंग और इंस्टॉल एक्सेसरीज', 'पूरे पंप कनेक्शन के लिए बोरवेल फिटिंग और इंस्टॉल एक्सेसरीज।'], ['सबमर्सिबल फ्लैट केबल', 'साइज: 2.5 वर्ग मिमी, 4 वर्ग मिमी।'], ['Jain एचडीपीई पाइप', 'सभी प्रकार के एचडीपीई पाइप और सभी साइज। पंप साइज और पानी डिस्चार्ज की जरूरत के अनुसार 20 मिमी से 160 मिमी (1/2 इंच से 6 इंच) बाहरी व्यास।'], ['नायलॉन रोप', 'Tuf रोप। साइज: 10, 12, 14, 16 मिमी और अन्य साइज। सबमर्सिबल पंप सेट लटकाने के लिए सेफ्टी रोप।'], ['सेंसर केबल', 'साइज: 0.5 वर्ग मिमी, 0.75 वर्ग मिमी और 1.00 वर्ग मिमी।']],
    availability: 'पूछताछ पर उपलब्ध', price: 'व्हाट्सऐप पर कीमत पूछें', carouselHint: 'स्वाइप करें', previousSlide: 'पिछला', nextSlide: 'अगला', photosLabel: 'फ़ोटो', whyKicker: 'पवार बोरवेल क्यों?', whyHeading: <>स्थानीय अनुभव।<br /><em>व्यावहारिक सलाह।</em></>,
    whyBody: 'हम पूरे महाराष्ट्र में काम करते हैं। हमारा ध्यान भरोसेमंद उपकरण, स्पष्ट मार्गदर्शन और वास्तविक साइट की जरूरत पर रहता है।',
    reasons: ['स्थानीय जानकारी और व्यावहारिक मार्गदर्शन', 'SSP, SwarajLaxmi पंप', 'पंप गार्ड, पैनल और कंट्रोलर विकल्प'], guide: 'खरीदने से पहले उत्पाद मार्गदर्शन।',
    areaKicker: 'सेवा क्षेत्र', areaHeading: <>कोल्हापुर में स्थित।<br /><em>पूरे महाराष्ट्र में सेवा।</em></>, areaBody: 'गड-मुदशिंगी, कोल्हापुर से हम पूरे महाराष्ट्र में बोरवेल ड्रिलिंग, पंप और संबंधित सामग्री की सेवा देते हैं। अपने स्थान पर सेवा की जानकारी के लिए हमसे संपर्क करें।', getDirections: 'दिशा प्राप्त करें', mapPreviewLabel: 'हमारा स्थान', mapPreviewTitle: 'गड-मुदशिंगी, कोल्हापुर का नक्शा',
    faqKicker: 'सामान्य प्रश्न', faqHeading: 'पूछताछ से पहले।', faqs: [['क्या आप मेरी बोरवेल के लिए सही पंप सुझा सकते हैं?', 'हाँ। बोरवेल की गहराई, पानी की जरूरत और उपयोग—खेत, घर या व्यवसाय—व्हाट्सऐप पर भेजें। हम सही विकल्प सुझाएंगे।'], ['क्या आप वेबसाइट पर उत्पाद की कीमतें दिखाते हैं?', 'नहीं। उपलब्धता, एचपी, केबल आकार, पाइप प्रकार और फिटिंग जरूरत के अनुसार बदलते हैं। वर्तमान कोटेशन के लिए व्हाट्सऐप पर पूछें।'], ['क्या आप ड्रिलिंग और सामग्री दोनों देते हैं?', 'हाँ। पूरे वॉटर सेटअप के लिए ड्रिलिंग, पंप चयन और आवश्यक सामग्री पर चर्चा कर सकते हैं।']],
    footerSummary: 'पूरे वॉटर सेटअप के लिए बोरवेल ड्रिलिंग, पंप और जरूरी सामान।', backToTop: 'ऊपर जाएं',
  },
};

function Arrow() { return null; }
function Brand() { return <a className="brand" href="#top" aria-label="Pawar Borewell's and Trader's home"><Image className="brand-logo brand-logo-official" src="/assets/pawar-borewell-official-emblem.jpeg" width={46} height={46} alt="Pawar Borewells and Traders logo" priority /><span><b>Pawar Borewell&apos;s</b><small>&amp; Trader&apos;s · Kolhapur</small></span></a>; }
function SwipeCarousel({ className, children, count, labels, name }) {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const updateActive = () => {
    const container = track.current;
    if (!container) return;
    const items = Array.from(container.children);
    const containerLeft = container.getBoundingClientRect().left;
    const nearest = items.reduce((best, item, index) => {
      const distance = Math.abs(item.getBoundingClientRect().left - containerLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    setActive(nearest.index);
  };
  const goTo = (index) => {
    const container = track.current;
    const item = container?.children[index];
    if (!item || container.scrollWidth <= container.clientWidth + 2) return;
    const left = item.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft;
    container.scrollTo({ left, behavior: 'smooth' });
    setActive(index);
  };

  return <div className="swipe-carousel">
    <div className="swipe-carousel-nav" aria-label={`${name} navigation`}>
      <span className="swipe-hint"><span aria-hidden="true">↔</span> {labels.carouselHint}</span>
      <div className="swipe-carousel-actions"><span className="swipe-count" aria-live="polite">{active + 1} / {count}</span><button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={`${labels.previousSlide} ${name}`}><span aria-hidden="true">‹</span></button><button type="button" onClick={() => goTo(active + 1)} disabled={active === count - 1} aria-label={`${labels.nextSlide} ${name}`}><span aria-hidden="true">›</span></button></div>
    </div>
    <div className={className} ref={track} onScroll={updateActive} tabIndex={0} role="region" aria-roledescription="carousel" aria-label={name} onKeyDown={(event) => {
      if (event.target !== event.currentTarget) return;
      const next = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: count - 1 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      goTo(Math.max(0, Math.min(count - 1, next)));
    }}>{children}</div>
  </div>;
}
function ProductImage({ photos, alt, labels }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const closeButton = useRef(null);
  const openButton = useRef(null);
  const viewer = useRef(null);
  const touchStartX = useRef(null);
  const activePhoto = photos[activeImage];
  const hasMultipleImages = photos.length > 1;

  useEffect(() => {
    if (!isExpanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsExpanded(false);
      if (event.key === 'ArrowRight' && hasMultipleImages) { event.preventDefault(); setActiveImage((current) => (current + 1) % photos.length); }
      if (event.key === 'ArrowLeft' && hasMultipleImages) { event.preventDefault(); setActiveImage((current) => (current - 1 + photos.length) % photos.length); }
      if (event.key === 'Tab') {
        const buttons = viewer.current?.querySelectorAll('button');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      openButton.current?.focus();
    };
  }, [isExpanded, photos, hasMultipleImages]);

  return <>
    <div className="catalogue-image">
      <button className="catalogue-image-open" type="button" ref={openButton} onClick={() => setIsExpanded(true)} aria-label={`${labels.viewPhoto}: ${alt}`}>
        <Image src={activePhoto} fill sizes="(max-width: 700px) 84vw, (max-width: 1050px) 33vw, 25vw" alt="" />
        <span className="photo-action">{labels.viewPhoto}</span>
      </button>
      {hasMultipleImages && <div className="image-pagination" aria-label={`${alt} image selector`}><button type="button" onClick={() => setActiveImage((current) => (current - 1 + photos.length) % photos.length)} aria-label={`${labels.previousSlide} ${alt} ${labels.photosLabel}`}><span aria-hidden="true">‹</span></button><span aria-live="polite">{activeImage + 1} / {photos.length} {labels.photosLabel}</span><button type="button" onClick={() => setActiveImage((current) => (current + 1) % photos.length)} aria-label={`${labels.nextSlide} ${alt} ${labels.photosLabel}`}><span aria-hidden="true">›</span></button></div>}
    </div>
    {isExpanded && createPortal(<div className="photo-viewer-backdrop" onClick={() => setIsExpanded(false)}><div className="photo-viewer" ref={viewer} role="dialog" aria-modal="true" aria-label={`${alt} ${labels.fullPhoto}`} onClick={(event) => event.stopPropagation()}>
      <div className="photo-viewer-header"><div><strong>{alt}</strong><span aria-live="polite">{activeImage + 1} / {photos.length}</span></div><button type="button" ref={closeButton} onClick={() => setIsExpanded(false)} aria-label={labels.closePhoto}>{labels.closePhoto} ×</button></div>
      <div className="photo-viewer-image" onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.clientX; }} onTouchEnd={(event) => {
        if (!hasMultipleImages || touchStartX.current == null) return;
        const distance = event.changedTouches[0]?.clientX - touchStartX.current;
        if (Math.abs(distance) > 45) setActiveImage((current) => (current + (distance < 0 ? 1 : photos.length - 1)) % photos.length);
        touchStartX.current = null;
      }}><Image src={activePhoto} fill sizes="(max-width: 700px) 94vw, 80vw" alt={`${alt}, ${labels.photoOf} ${activeImage + 1}`} />{hasMultipleImages && <><button type="button" className="photo-viewer-prev" onClick={() => setActiveImage((current) => (current - 1 + photos.length) % photos.length)} aria-label={`${labels.previousSlide} ${alt}`}>‹</button><button type="button" className="photo-viewer-next" onClick={() => setActiveImage((current) => (current + 1) % photos.length)} aria-label={`${labels.nextSlide} ${alt}`}>›</button></>}</div>
      {hasMultipleImages && <div className="photo-viewer-pagination" aria-label={`${alt} ${labels.photosLabel}`}>{photos.map((photo, index) => <button type="button" className={index === activeImage ? 'is-active' : ''} onClick={() => setActiveImage(index)} aria-label={`${labels.viewPhoto} ${index + 1}: ${alt}`} aria-pressed={index === activeImage} key={photo}>{index + 1}</button>)}</div>}
    </div></div>, document.body)}
  </>;
}

function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [invalidField, setInvalidField] = useState('');
  const [preparedUrl, setPreparedUrl] = useState('');
  const [handoffState, setHandoffState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get('name') || '').trim();
    const mobile = String(form.get('mobile') || '').trim();
    const location = String(form.get('location') || '').trim();
    const service = String(form.get('service') || '').trim();
    const invalid = !name ? ['name', 'Please Enter Your Name / कृपया पूर्ण नाव टाका.']
      : !/^\d{10}$/.test(mobile) ? ['mobile', 'Please Enter A Valid 10-Digit Mobile Number / कृपया वैध १० अंकी मोबाईल नंबर टाका.']
      : !location ? ['location', 'Please Enter Your Village Or City / कृपया गाव किंवा शहर टाका.']
      : !service ? ['service', 'Please Select A Service / कृपया सेवा निवडा.'] : null;
    if (invalid) { setInvalidField(invalid[0]); setFormError(invalid[1]); formElement.elements.namedItem(invalid[0])?.focus(); return; }

    setInvalidField('');
    setFormError('');
    setIsSubmitting(true);
    setHandoffState('');
    const message = [
      'New Website Enquiry',
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Village/City: ${location}`,
      `Service Needed: ${service}`,
      `Message: ${String(form.get('message') || '').trim() || 'Not Provided'}`,
    ].join('\n');
    const url = wa(message);
    setPreparedUrl(url);
    let opened = null;
    try { opened = window.open(url, '_blank'); if (opened) opened.opener = null; } catch {}
    setHandoffState(opened ? 'opened' : 'blocked');
    setIsSubmitting(false);
  };

  return <form className="enquiry-form" onSubmit={handleSubmit} onInput={() => { if (formError) { setFormError(''); setInvalidField(''); } }} onChange={() => { if (formError) { setFormError(''); setInvalidField(''); } }} aria-describedby="enquiry-help" aria-busy={isSubmitting} noValidate>
    <div className="form-heading"><span>चौकशी फॉर्म</span><h3>Enquiry Form</h3><p>Share Your Requirement And Our Team Will Contact You.</p><small id="enquiry-help">This Prepares A WhatsApp Message. Please Review And Send It There. / संदेश तपासून व्हॉट्सअॅपवर पाठवा.</small></div>
    <div className="form-grid">
      <label>Full Name <span>/ पूर्ण नाव</span><input name="name" type="text" autoComplete="name" required aria-invalid={invalidField === 'name'} aria-describedby={invalidField === 'name' ? 'enquiry-error' : undefined} placeholder="Your Full Name" /></label>
      <label>Mobile Number <span>/ मोबाईल नंबर</span><input name="mobile" type="tel" inputMode="numeric" autoComplete="tel" required pattern="[0-9]{10}" maxLength="10" aria-invalid={invalidField === 'mobile'} aria-describedby={invalidField === 'mobile' ? 'enquiry-error' : undefined} onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '').slice(0, 10); }} placeholder="10-Digit Mobile Number" /></label>
    </div>
    <label>Village/City <span>/ गाव किंवा शहर</span><input name="location" type="text" autoComplete="address-level2" required aria-invalid={invalidField === 'location'} aria-describedby={invalidField === 'location' ? 'enquiry-error' : undefined} placeholder="Your Village Or City" /></label>
    <label>Service Needed <span>/ कोणती सेवा हवी आहे?</span><select name="service" required defaultValue="" aria-invalid={invalidField === 'service'} aria-describedby={invalidField === 'service' ? 'enquiry-error' : undefined}><option value="" disabled>-- Select Service / पर्याय निवडा --</option><option>Borewell Drilling / नवीन बोअरवेल पाडणे</option><option>SSP Pump & Motor Installation / पंप आणि मोटर बसवणे</option><option>Borewell Cleaning & Flushing / बोअरवेल साफ करणे</option><option>Pipes, Cables & Accessories / इतर साहित्य खरेदी</option></select></label>
    <label>Message <span>/ विशेष संदेश</span><textarea name="message" rows="3" placeholder="e.g., How much for a 500ft borewell? / ५०० फूट बोअरवेलचा खर्च किती येईल?" /></label>
    {formError && <p className="form-error" id="enquiry-error" role="alert">{formError}</p>}
    <button className="enquiry-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending Enquiry… / माहिती पाठवत आहे…' : 'Send Enquiry / माहिती पाठवा'}</button>
    {preparedUrl && <p className="handoff-status" role="status">{handoffState === 'opened' ? 'WhatsApp Opened. Review Your Message And Tap Send. / व्हॉट्सअॅपवर संदेश तपासून पाठवा.' : 'If WhatsApp Did Not Open, Use This Link. / व्हॉट्सअॅप न उघडल्यास ही लिंक वापरा.'} <a href={preparedUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp / व्हॉट्सअॅप उघडा</a></p>}
  </form>;
}

function EnquiryModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('input[name="name"]')?.focus();
  }, []);

  return createPortal(<dialog className="enquiry-dialog" ref={dialogRef} onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} aria-label="Enquiry form / चौकशी फॉर्म">
    <div className="enquiry-dialog-toolbar"><button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close enquiry form">Close <span aria-hidden="true">×</span></button></div>
    <EnquiryForm />
  </dialog>, document.body);
}

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [languageReady, setLanguageReady] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const enquiryTrigger = useRef(null);
  const mobileExplore = useRef(null);
  useEffect(() => {
    try { const saved = window.localStorage.getItem('pawar-language'); if (saved && content[saved]) setLanguage(saved); } catch {}
    setLanguageReady(true);
  }, []);
  useEffect(() => {
    document.documentElement.lang = `${language}-IN`;
    if (languageReady) { try { window.localStorage.setItem('pawar-language', language); } catch {} }
  }, [language, languageReady]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-90px 0px -62% 0px' });
    ['services', 'products', 'why-us', 'location'].forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => { if (window.location.hash === '#enquiry') setIsEnquiryOpen(true); }, []);
  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (mobileExplore.current && !mobileExplore.current.contains(event.target)) mobileExplore.current.open = false;
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, []);
  const openEnquiry = (event) => { enquiryTrigger.current = event.currentTarget; setIsEnquiryOpen(true); };
  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    if (window.location.hash === '#enquiry') window.history.replaceState(null, '', window.location.pathname + window.location.search);
    window.requestAnimationFrame(() => enquiryTrigger.current?.focus());
  };
  const t = content[language];
  const ui = { ...t, ...photoLabels[language] };
  const productEnquiry = (product) => wa(`Hello, I need a price and availability for ${product}.`);
  return <>
    <a className="skip-link" href="#main-content">{ui.skip}</a>
    <header className="header"><Brand /><nav className="desktop-nav" aria-label={ui.navLabel}>{['services', 'products', 'why-us', 'location'].map((id, index) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'true' : undefined}>{t.nav[index]}</a>)}</nav><div className="header-actions"><select className="language-picker" value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={ui.languageLabel}>{Object.entries(content).map(([code, item]) => <option value={code} key={code}>{item.name}</option>)}</select><button className="header-enquiry" type="button" onClick={openEnquiry}>{t.enquire}</button><a className="directions-link" href={directions} target="_blank" rel="noopener noreferrer">{t.directions}</a><a className="top-whatsapp" href={wa('Hello, I want to enquire about borewell service in Kolhapur.')} target="_blank" rel="noopener noreferrer">◔ {t.whatsapp}</a><a className="top-call" href={`tel:+91${primaryPhone}`}>☎ {t.call}</a></div></header>
    <main id="main-content" tabIndex={-1}>
      <span id="top" aria-hidden="true" />
      <section className={`hero hero-${language}`}><Image className="hero-image" src="/assets/drilling-site.jpeg" fill priority sizes="(max-width: 700px) 100vw, 45vw" alt="Pawar Borewell drilling rig at a Kolhapur site" /><div className="hero-shade" /><div className="shell hero-content hero-centered"><p className="kicker light">{t.heroKicker}</p><h1>{t.heroBefore} <em>{t.heroAccent}</em></h1><p className="lead">{t.heroLead}</p><div className="actions hero-contact-actions"><a className="button white" href={`tel:+91${primaryPhone}`}>{t.call} <Arrow /></a><a className="button hero-whatsapp" href={wa('Hello, I want to enquire about borewell service in Kolhapur.')} target="_blank" rel="noopener">◔ {t.whatsapp}</a></div><div className="actions hero-browse-actions"><a className="button white" href="#services">{t.nav[0]}</a><a className="button hero-whatsapp" href="#products">{t.nav[1]}</a></div><div className="stats">{t.stats.map(([title, detail]) => <div key={title}><b>{title}</b><span>{detail}</span></div>)}</div></div></section>
      <section className="trust-strip"><div className="shell">{t.audiences.map((audience) => <span key={audience}>{audience}</span>)}</div></section>
      <section className="services" id="services" aria-labelledby="services-heading"><div className="shell"><div className="section-head"><div><p className="kicker">{t.servicesKicker}</p><h2 id="services-heading">{t.servicesHeading}</h2></div><p>{t.servicesBody}</p></div><SwipeCarousel className="cards" count={t.services.length} labels={ui} name={t.servicesKicker}>{t.services.map(([title, body], index) => <article className={`card ${index === 0 ? 'featured card-with-photo' : ''}`} key={title}>
        {index === 0 && <div className="service-photo"><ProductImage photos={drillingPhotos} alt={title} labels={ui} /><i aria-hidden="true">01</i></div>}
        <div className={index === 0 ? 'service-card-copy' : 'service-card-copy service-card-copy-plain'}>
          {index !== 0 && <i aria-hidden="true">0{index + 1}</i>}
          <h3>{title}</h3><p>{body}</p><a href={wa(`Hello, I want to enquire about ${title}.`)} target="_blank" rel="noopener">{t.serviceCta}</a>
        </div>
       </article>)}</SwipeCarousel></div></section>
      <section className="catalogue" id="products" aria-labelledby="products-heading"><div className="shell"><div className="catalogue-head"><div><p className="kicker">{t.catalogueKicker}</p><h2 id="products-heading">{t.catalogueHeading}</h2></div><p>{t.catalogueBody}</p></div><SwipeCarousel className="product-grid" count={t.products.length} labels={ui} name={t.catalogueKicker}>{t.products.map(([title, detail], index) => <article className="catalogue-card" key={title}><ProductImage photos={productPhotos[index]} alt={title} labels={ui} /><div className="catalogue-copy"><h3>{title}</h3><p>{detail}</p><a href={productEnquiry(title)} target="_blank" rel="noopener noreferrer">{t.price} <Arrow /></a></div></article>)}</SwipeCarousel></div></section>
      <section className="showcase" id="why-us" aria-labelledby="why-heading"><div className="shell showcase-grid"><div><p className="kicker">{t.whyKicker}</p><h2 id="why-heading">{t.whyHeading}</h2><p>{t.whyBody}</p><div className="reason-list">{t.reasons.map((reason) => <span key={reason}>✓ {reason}</span>)}</div></div><figure><Image src="/assets/products/pump-range.jpeg" fill sizes="(max-width: 700px) 100vw, 58vw" alt="Pawar Borewell product selection" /><figcaption>{t.guide}</figcaption></figure></div></section>
      <section className="shell coverage" id="location" aria-labelledby="location-heading"><div className="location-info"><p className="kicker">{t.areaKicker}</p><h2 id="location-heading">{t.areaHeading}</h2><p className="location-copy">{t.areaBody}</p></div><div className="location-map"><iframe src={mapPreview} title={t.mapPreviewTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} /><a className="location-map-link" href={directions} target="_blank" rel="noopener noreferrer" aria-label={`${t.getDirections}: Gad-Mudshingi, Kolhapur`}><span className="map-details"><span className="map-top-label"><span aria-hidden="true">●</span>{t.mapPreviewLabel}</span><strong>Gad-Mudshingi, Kolhapur</strong><small>Maharashtra</small></span><span className="map-link-cta">{t.getDirections}</span></a></div></section>
      <section className="shell faq" aria-labelledby="faq-heading"><p className="kicker">{t.faqKicker}</p><h2 id="faq-heading">{t.faqHeading}</h2>{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    </main>
    <footer className="site-footer"><div className="shell footer-main"><div className="footer-brand"><Brand /><p>{t.footerSummary}</p></div><div className="footer-location"><span className="footer-title">{t.areaKicker}</span><strong>Gad-Mudshingi, Kolhapur</strong><a href={directions} target="_blank" rel="noopener noreferrer">{t.getDirections}</a></div><div className="footer-contact"><span className="footer-title">{t.call}</span>{contactPhones.map((phone) => <a key={phone} href={`tel:+91${phone}`}>+91 {phone.slice(0, 5)} {phone.slice(5)}</a>)}<button type="button" onClick={openEnquiry}>{t.enquire}</button></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Pawar Borewell&apos;s &amp; Trader&apos;s</span><a href="#top">{t.backToTop}</a></div></footer>
    <nav className="mobile-nav" aria-label={ui.quickActions}><a href={`tel:+91${primaryPhone}`}><span aria-hidden="true">☎</span>{t.call}</a><details className="mobile-explore" ref={mobileExplore} onKeyDown={(event) => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }}><summary aria-label={t.explore}><span aria-hidden="true">☷</span>{t.explore}</summary><div className="mobile-explore-panel"><strong>{t.exploreTitle}</strong>{['services', 'products', 'why-us', 'location'].map((id, index) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'true' : undefined} onClick={() => { mobileExplore.current.open = false; }}>{t.nav[index]}</a>)}</div></details><a href={wa('Hello, I want to enquire about Pawar Borewell services.')} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◔</span>{t.whatsapp}</a></nav>
    {isEnquiryOpen && <EnquiryModal onClose={closeEnquiry} />}
  </>;
}
