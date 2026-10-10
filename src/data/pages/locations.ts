import type { Page } from './types';
import { site, locations as cities } from '../site';

const office = (city: string) => site.offices.find((o) => o.city === city)!;
const thrissur = office('Thrissur');
const kochi = office('Kochi');
const phones = (o: typeof thrissur) => o.phones.map((p) => `<a href="tel:${p.tel}">${p.display}</a>`).join(', ');

export const locations: Page[] = [
  {
    path: '/contact/', crumb: 'Contact', wide: true,
    title: 'Contact Mountbell | Thrissur and Kochi Offices',
    description: 'Contact Mountbell by phone, WhatsApp or the enquiry form, or visit our immigration offices in Thrissur and Kochi. Consultations in Malayalam and English.',
    h1: 'Contact Mountbell',
    lede: 'Call, message or visit. A consultant will answer in Malayalam or English.',
    cta: false,
    blocks: [
      { type: 'facts', rows: [
        ['Phone', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
        ['WhatsApp', `<a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener">${site.phone.display}</a>`],
        ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
        ['Thrissur office', phones(thrissur)],
        ['Kochi office', phones(kochi)],
      ] },
      { type: 'offices', h2: 'Our offices' },
      { type: 'links', h2: 'Areas we serve', intro: `We meet clients from ${site.areasServed.join(', ')} and every other district at our two offices, and work with people elsewhere in India and abroad by phone and video call.`, items: cities.map((c) => ({
        title: `Immigration consultants in ${c.city}`,
        text: c.city === 'Thrissur' ? 'Our head office, near Ashwini Junction.' : c.city === 'Kochi' ? 'Our branch office on Edapally Road, Palarivattom.' : `How people in ${c.city} work with us.`,
        href: c.href,
      })) },
      { type: 'form', h2: 'Send an enquiry' },
    ],
  },
  {
    path: '/immigration-consultants-thrissur/', parent: '/contact/', crumb: 'Thrissur',
    title: 'Immigration Consultants in Thrissur | Mountbell Head Office',
    description: 'Immigration consultants in Thrissur: Mountbell’s head office near Ashwini Junction. PR, work visa and overseas job consultations in Malayalam and English.',
    label: 'Head office',
    h1: 'Immigration Consultants in Thrissur',
    lede: 'Mountbell’s head office is at the Fair Trade Center on TUDA Road, by Ashwini Junction. Meet a consultant face to face and bring your family along.',
    wa: 'Hi Mountbell, I would like to visit the Thrissur office.',
    blocks: [
      { type: 'offices', city: 'Thrissur' },
      { type: 'prose', h2: 'What you can do at the Thrissur office', body: [
        'The Thrissur office handles every Mountbell service: eligibility assessments, PR and skilled migration files, nurse registration and placement, overseas recruitment, visa documentation and language coaching enquiries.',
        'As migration and visa consultants in Thrissur, we see people from across the district and from neighbouring Palakkad and Malappuram. Call ahead so that the right consultant is free when you arrive.',
      ] },
      { type: 'links', h2: 'Start here', items: [
        { title: 'Nursing careers abroad', text: 'Australia, Germany, Malta, the Maldives and Denmark compared.', href: '/nursing-careers/' },
        { title: 'PR visa and skilled migration', text: 'Points-tested permanent residence.', href: '/services/pr-visa/' },
        { title: 'Overseas jobs', text: 'Healthcare, trades, drivers, IT and teaching.', href: '/overseas-jobs/' },
      ] },
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
    ],
    related: ['/immigration-consultants-kochi/', '/contact/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-kochi/', parent: '/contact/', crumb: 'Kochi',
    title: 'Immigration Consultants in Kochi | Mountbell Kochi Office',
    description: 'Immigration consultants in Kochi: Mountbell’s branch office on Edapally Road, Palarivattom. PR, work visa and overseas job consultations for Ernakulam.',
    label: 'Branch office',
    h1: 'Immigration Consultants in Kochi',
    lede: 'Mountbell’s Kochi office is on the fifth floor of Mathewsons Centre Point on Edapally Road, at Metro Pillar 485 in Palarivattom. It serves Ernakulam and the districts to the south.',
    wa: 'Hi Mountbell, I would like to visit the Kochi office.',
    blocks: [
      { type: 'offices', city: 'Kochi' },
      { type: 'prose', h2: 'What you can do at the Kochi office', body: [
        'You can book a free eligibility assessment and start a PR, work visa, nursing or overseas job file here, with the same services as our Thrissur head office.',
        'The office is on the metro corridor between Palarivattom and Edapally, which makes it straightforward to reach from most of Ernakulam, and from Alappuzha, Kottayam and Idukki by road or rail.',
      ] },
      { type: 'links', h2: 'Start here', items: [
        { title: 'Nursing careers abroad', text: 'Australia, Germany, Malta, the Maldives and Denmark compared.', href: '/nursing-careers/' },
        { title: 'Countries compared', text: 'Eight destinations side by side.', href: '/countries/' },
        { title: 'Immigration eligibility calculator', text: 'See which routes fit before you visit.', href: '/tools/immigration-eligibility-checker/' },
      ] },
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
    ],
    related: ['/immigration-consultants-thrissur/', '/contact/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-kottayam/', parent: '/contact/', crumb: 'Kottayam',
    title: 'Immigration Consultants in Kottayam | Mountbell',
    description: 'Immigration consultants for Kottayam: Mountbell advises nurses and skilled workers from Kottayam by video call and at its Kochi and Thrissur offices.',
    h1: 'Immigration Consultants in Kottayam',
    lede: 'Mountbell does not have an office in Kottayam. People from the district work with us by phone and video call, and visit our Kochi office when a meeting in person is useful.',
    wa: 'Hi Mountbell, I am from Kottayam and would like a consultation.',
    blocks: [
      { type: 'steps', h2: 'How it works from Kottayam', items: [
        { title: 'Consultation by phone or video', text: 'The free first assessment does not need a visit. Share your certificates as photos or scans beforehand.' },
        { title: 'Documents', text: 'Checklists and document reviews are handled online. We tell you in advance if an original is needed.' },
        { title: 'Visit Kochi when it helps', text: 'Our Kochi office in Palarivattom is the nearest. Many families prefer to come once, together, before a decision is made.' },
        { title: 'Thrissur is open to you too', text: 'If Thrissur suits you better, our head office offers the same services.' },
      ] },
      { type: 'offices', h2: 'Nearest office', city: 'Kochi' },
      { type: 'links', h2: 'What people from Kottayam ask us about', items: [
        { title: 'Nursing careers abroad', text: 'Registration, language exams and placement in five countries.', href: '/nursing-careers/' },
        { title: 'Overseas jobs', text: 'Healthcare, skilled trades, drivers, IT and teaching roles.', href: '/overseas-jobs/' },
        { title: 'PR visa and skilled migration', text: 'Points-tested permanent residence in Australia and Canada.', href: '/services/pr-visa/' },
      ] },
    ],
    related: ['/immigration-consultants-kochi/', '/free-immigration-assessment/', '/contact/'],
  },
];
