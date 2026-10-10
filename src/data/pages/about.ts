import type { Page } from './types';
import { site, steps, reasons, teamPhotos, processPhoto } from '../site';

const founded = site.foundedYear ? [['Founded', String(site.foundedYear)] as [string, string]] : [];

export const about: Page[] = [
  {
    path: '/about/', crumb: 'About Mountbell', wide: true,
    title: 'About Mountbell | Immigration Consultancy, Thrissur and Kochi',
    description: 'About Mountbell: a licensed immigration and overseas recruitment consultancy with offices in Thrissur and Kochi, registered as Mount Bell Global Studies.',
    h1: 'About Mountbell',
    lede: 'Mountbell is an immigration and overseas recruitment consultancy headquartered in Thrissur, with a branch in Kochi. We help professionals from Kerala move abroad for work, training and permanent residence.',
    photo: teamPhotos[0],
    blocks: [
      { type: 'prose', h2: 'Who we are', body: [
        `Mountbell is the trading name of ${site.legalName}. We hold a ${site.licence.type} from the ${site.licence.authority}, which is the licence the law requires before anyone in India may recruit for jobs overseas.`,
        'Most of the people we work with are nurses, therapists, technicians and tradespeople. Our programmes are built around them: registration with the professional body abroad, the language exam, the employer or visa application, and the journey itself. We also handle points-tested permanent residence for healthcare, trade, IT and teaching professionals.',
      ] },
      { type: 'facts', rows: [
        ['Legal name', site.legalName],
        ['Head office', 'Thrissur, Kerala'],
        ['Branch office', 'Kochi, Kerala'],
        ...founded,
        ['Licence', `${site.licence.type}, ${site.licence.number}`],
        ['Destinations', 'Australia, Canada, Germany, Denmark, Malta, the Maldives, the Netherlands, Latvia, Poland, Lithuania and Bulgaria'],
        ['Languages', 'Malayalam and English'],
      ] },
      { type: 'checks', h2: 'Why choose Mountbell', items: reasons },
      { type: 'links', h2: 'More about us', items: [
        { title: 'Our team', text: 'The consultants you meet in Thrissur and Kochi.', href: '/about/team/' },
        { title: 'Licences and accreditations', text: 'Our MEA licence number and how to verify it yourself on eMigrate.', href: '/about/licences/' },
        { title: 'How it works', text: 'The six stages from your first assessment to your first week abroad.', href: '/how-it-works/' },
        { title: 'Fees', text: 'What we charge for, what is paid to others, and when each payment falls due.', href: '/fees/' },
        { title: 'Success stories', text: 'Clients in their own words, and photos from travel days.', href: '/success-stories/' },
      ] },
    ],
  },
  {
    path: '/about/team/', crumb: 'Our team',
    title: 'Mountbell Immigration Team | Thrissur and Kochi',
    description: 'Meet the Mountbell immigration team in Thrissur and Kochi: the consultants who assess your profile, prepare your file and stay with you until you travel.',
    // Left out of search until named adviser profiles are added to site.team.
    noindex: site.team.length === 0,
    h1: 'The Mountbell Immigration Team',
    lede: 'One consultant is responsible for your file from the first meeting to the day you travel. You know who they are, and you deal with them throughout.',
    blocks: [
      { type: 'team' },
      { type: 'prose', h2: 'How the team works with you', body: [
        'Your first meeting is with a consultant, not a sales desk. They review your qualification, experience, age and language level and tell you which routes are open, including when the honest answer is none yet.',
        'The same consultant then coordinates everything that follows: document checks, the skills assessment or professional registration, language coaching, and the visa filing or employer interviews. Parents and spouses are welcome at any meeting.',
      ] },
      { type: 'facts', rows: [
        ['Where we work', 'Thrissur (head office) and Kochi (branch)'],
        ['Languages', 'Malayalam and English'],
        ['Meetings', 'In person, by phone or by video call'],
      ] },
    ],
    related: ['/about/', '/about/licences/', '/how-it-works/'],
  },
  {
    path: '/about/licences/', crumb: 'Licences and accreditations',
    title: 'Mountbell MEA Licence and Accreditations',
    description: `Mountbell's MEA Recruiting Agent licence number is ${site.licence.number}. See what the licence covers and how to verify it on the eMigrate portal.`,
    h1: 'Mountbell MEA Licence and Accreditations',
    lede: 'Recruiting for overseas jobs from India is legal only with a licence from the Ministry of External Affairs. This is ours, and this is how you check it.',
    blocks: [
      { type: 'cert' },
      { type: 'prose', h2: 'What the licence means', body: [
        'Under the Emigration Act, 1983, only a registered Recruiting Agent may recruit Indian citizens for employment abroad. The licence is issued by the Protector General of Emigrants in the Ministry of External Affairs and is listed publicly on the government’s eMigrate portal.',
        'A licensed agent is answerable to the Ministry for how it recruits. That gives you somewhere to complain if something goes wrong, which you do not have with an unregistered agent or a sub-agent working on commission.',
      ] },
      { type: 'steps', h2: 'How to verify our licence', items: [
        { title: 'Open the eMigrate portal', text: `Go to <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">emigrate.gov.in</a>, the Ministry of External Affairs site for overseas employment.` },
        { title: 'Find the Recruiting Agent list', text: 'Use the Recruiting Agent section to search the list of registered agents.' },
        { title: 'Search for us', text: `Search by our licence number, ${site.licence.number}, or by the name ${site.legalName}.` },
        { title: 'Compare the details', text: 'Check that the name, the address and the licence status match what you see in our office and on our receipts.' },
      ] },
      { type: 'note', text: 'Run the same check on every agent you speak to. Our guide on <a href="/resources/avoid-visa-fraud/">how to identify fake immigration agents</a> lists the other warning signs.' },
    ],
    related: ['/resources/avoid-visa-fraud/', '/about/', '/fees/'],
  },
  {
    path: '/how-it-works/', parent: '/about/', crumb: 'How it works',
    title: 'Immigration Process from Kerala, Step by Step | Mountbell',
    description: 'The immigration process from Kerala in six stages: assessment, country matching, documents and recognition, language exams, visa filing and departure.',
    h1: 'The Immigration Process from Kerala, Step by Step',
    lede: 'Every programme is different in its details, but the order of work is the same. These are the six stages, and what you and Mountbell each do in them.',
    photo: processPhoto,
    blocks: [
      { type: 'steps', h2: 'From assessment to departure', items: steps },
      { type: 'prose', h2: 'What you need to bring to the first meeting', body: ['Nothing is filed at the first meeting, so copies are enough.'], list: [
        'Passport, or a note of its expiry date',
        'Degree, diploma or trade certificates and mark lists',
        'Professional registration, such as your nursing council certificate',
        'Experience letters or a current CV',
        'Any language test result you already hold',
      ] },
      { type: 'prose', h2: 'How long it takes', body: [
        'Timelines depend on the country and the programme, and several stages are decided by outside bodies: assessing authorities, registration councils, employers and visa offices. We do not quote a single number for that reason.',
        'With your eligibility report you receive a written, stage-by-stage estimate for your route, and we tell you when an authority’s processing time changes.',
      ] },
      { type: 'faq', h2: 'Questions about the process', items: [
        { q: 'Is the first assessment really free?', a: 'Yes. The first eligibility assessment is free at our Thrissur and Kochi offices, by phone or by video call. You pay nothing until you have a written fee schedule and decide to go ahead.' },
        { q: 'Can I start while I am still preparing for my language exam?', a: 'Yes. Document checks and skills assessment preparation usually run alongside language coaching, so the exam does not hold up the rest of your file.' },
        { q: 'Do I have to come to the office?', a: 'No. People elsewhere in Kerala, in other states or already working abroad work with us by phone and video call. We tell you in advance if a stage needs original documents or a visit.' },
      ] },
    ],
    related: ['/free-immigration-assessment/', '/fees/', '/services/visa-documentation/'],
  },
  {
    path: '/fees/', parent: '/about/', crumb: 'Fees',
    title: 'Immigration Consultant Fees: How Mountbell Charges',
    description: 'How immigration consultant fees work at Mountbell: a free first assessment, a written fee schedule per programme, staged payments and stated refund terms.',
    h1: 'Immigration Consultant Fees at Mountbell',
    lede: 'Our fees are set per programme, because a points-tested PR file and a hospital placement involve different work. This page explains how the fee is built and when you pay it.',
    blocks: [
      { type: 'checks', h2: 'What you can expect', items: [
        { title: 'A free first assessment', text: 'You pay nothing to find out where you qualify.' },
        { title: 'A written fee schedule before any payment', text: 'It shows our service fee for your programme and what that fee includes.' },
        { title: 'Third-party costs listed separately', text: 'Government visa charges, exam fees, skills assessment and registration fees, medicals and translations are paid to those bodies and are shown as separate lines.' },
        { title: 'Payment in stages', text: 'The service fee is split across the stages of your file, as set out in your agreement, not collected in full on day one.' },
        { title: 'Refund terms in writing', text: 'Your agreement states what is refundable and in which circumstances, before you sign.' },
        { title: 'A receipt for every payment', text: 'Each payment is receipted in the company’s name.' },
      ] },
      { type: 'prose', h2: 'Why there is no price list on this page', body: [
        'The cost of moving abroad is mostly made up of charges we do not set, and they change: visa application charges, assessing authority fees, exam fees and, for some routes, proof of funds. A single figure here would be out of date or misleading for most readers.',
        'Ask for the fee schedule for your programme and you will have it in writing, with our service fee and the third-party costs side by side. You are free to take it away and compare.',
      ] },
      { type: 'faq', h2: 'Questions about fees', items: [
        { q: 'Do you charge for the first consultation?', a: 'No. The first eligibility assessment is free, in person, by phone or by video call.' },
        { q: 'Are there hidden charges?', a: 'No. Anything you will have to pay, to us or to anyone else, is listed in the written fee schedule you receive before your first payment.' },
        { q: 'What happens if my visa is refused?', a: 'Visa decisions are made by the destination country, and no consultant can guarantee one. Your agreement sets out which parts of our fee are refundable in that case. Fees already paid to governments, exam bodies and assessing authorities are generally not returned by those bodies.' },
      ] },
    ],
    related: ['/free-immigration-assessment/', '/how-it-works/', '/about/licences/'],
  },
  {
    path: '/success-stories/', crumb: 'Success stories', wide: true,
    title: 'Immigration Success Stories from Kerala | Mountbell',
    description: 'Immigration success stories from Kerala: Mountbell clients describe their visa process in their own words, with photos from their travel days.',
    h1: 'Immigration Success Stories from Kerala',
    lede: 'What clients say about working with Mountbell, and a few photographs from the days they left.',
    cta: { heading: 'Start Your Own Story', text: 'Tell us your profession and where you want to go. We will tell you plainly what is possible.' },
    blocks: [
      { type: 'reviews', h2: 'In their own words' },
      { type: 'gallery', h2: 'Travel days', caption: 'Mountbell candidates on their way out and after arrival.' },
      { type: 'prose', h2: 'How to read a success story', body: [
        'A story on any consultant’s website shows that a route worked for one person. It does not tell you that it will work for you. Outcomes depend on your own qualification, experience, age and language scores, and the final decision always rests with the destination country.',
        'That is why the first thing we do is an honest eligibility assessment. If you would like to speak to a past client who took the route you are considering, ask your consultant.',
      ] },
    ],
    related: ['/free-immigration-assessment/', '/nursing-careers/', '/about/'],
  },
];
