import type { Page } from './types';

export const jobs: Page[] = [
  {
    path: '/overseas-jobs/', crumb: 'Overseas jobs', wide: true,
    title: 'Overseas Jobs from Kerala | Licensed Recruitment | Mount Bell',
    description: 'Overseas jobs from Kerala through an MEA-licensed recruitment agency: healthcare, skilled trades, drivers, IT and teaching roles in Europe, Australia and the Maldives.',
    h1: 'Overseas Jobs from Kerala',
    lede: 'Mount Bell recruits for employers abroad under a licence from the Ministry of External Affairs. This page lists the professions we place, other than nursing, and the countries where each one is hired.',
    img: 'europe',
    wa: 'Hi Mount Bell, I would like to know about overseas jobs for my profession.',
    blocks: [
      { type: 'note', text: 'Are you a nurse? Nursing has its own section, with a page for each country: <a href="/nursing-careers/">Nursing careers abroad</a>.' },
      { type: 'openings', h2: 'Current openings', category: 'jobs', more: true },
      { type: 'links', h2: 'Healthcare and allied health', items: [
        { id: 'healthcare', title: 'Physiotherapists', meta: 'Germany · Malta', text: 'A regulated profession in both countries. Germany requires state recognition and German. Malta requires registration with the Council for the Professions Complementary to Medicine and works in English.' },
        { title: 'Occupational and speech therapists', meta: 'Malta · Maldives', text: 'Occupational therapists and assistant therapists for Malta, and occupational and speech therapists for hospitals and clinics in the Maldives.' },
        { title: 'Lab technicians and radiographers', meta: 'Maldives · Malta', text: 'Medical laboratory technicians for the Maldives on employer-sponsored work visas, and radiographers for Malta.' },
        { title: 'Dentists', meta: 'Denmark', text: 'Dentists trained outside the EU need authorisation from the Danish Patient Safety Authority and Danish language before they can practise.' },
      ] },
      { type: 'links', h2: 'Skilled trades and technical', items: [
        { id: 'trades', title: 'Welders', meta: 'Australia · Europe', text: 'Australia assesses welders formally through Trades Recognition Australia for skilled visas. Employers in Latvia, Poland, Lithuania and Bulgaria hire on certificates and a trade test.' },
        { title: 'CNC machinists', meta: 'Australia · Europe', text: 'Machinists and CNC operators and programmers, through trade assessment for Australia or direct employer hiring in Eastern Europe.' },
        { title: 'Mechanics', meta: 'Australia · Germany', text: 'Motor mechanics for Australia through trade assessment, and vehicle mechanics for Germany through recognition of their training.' },
        { title: 'Electricians, HVAC technicians and fitters', meta: 'Europe', text: 'Hands-on roles with employers in Eastern Europe. Experience letters and trade certificates matter more than degrees.' },
        { title: 'Spray painters', meta: 'Europe', text: 'Industrial and automotive spray painters with documented experience.' },
      ] },
      { type: 'links', h2: 'Drivers, delivery and general category', items: [
        { id: 'drivers', title: 'Drivers', meta: 'Germany · Europe', text: 'Truck and bus drivers. An Indian licence is not valid for professional driving in the EU, so the route includes obtaining an EU licence and the professional driver qualification.' },
        { title: 'Delivery and general category', meta: 'Netherlands · Europe', text: 'Delivery, warehouse and general category roles with employers in the Netherlands and Eastern Europe.' },
      ] },
      { type: 'links', h2: 'IT professionals and teachers', items: [
        { id: 'it-teachers', title: 'IT professionals', meta: 'Australia', text: 'Software, network and data professionals, mainly through points-tested skilled migration after an Australian Computer Society assessment.', href: '/countries/australia/' },
        { title: 'Teachers', meta: 'Australia', text: 'Qualified school teachers, through an AITSL skills assessment and points-tested skilled migration.', href: '/countries/australia/' },
      ] },
      { type: 'steps', h2: 'How recruitment through Mount Bell works', items: [
        { title: 'Register your profile', text: 'Send your CV, certificates and experience letters. The first assessment is free.' },
        { title: 'Match to a vacancy', text: 'We compare your profile with current openings and tell you if nothing suits yet.' },
        { title: 'Interview or trade test', text: 'With the employer, online or in person.' },
        { title: 'Offer in writing', text: 'You see the employer, salary and contract terms before any fee is paid.' },
        { title: 'Permit and visa', text: 'We prepare the work permit and visa file. See <a href="/services/work-visa/">work visa</a>.' },
        { title: 'Departure', text: 'Pre-departure briefing and arrival support.' },
      ] },
      { type: 'prose', h2: 'Vacancies change, the checks do not', body: [
        'Openings depend on what employers need at the time, so we do not publish a standing list of jobs that may already be filled. Ask a consultant what is open for your trade this month.',
        'Whoever you apply through, check that the agent is licensed. Our licence number is on <a href="/about-us/licences/">this page</a>, and <a href="/resources/avoid-visa-fraud/">this guide</a> explains how to spot a fake job offer.',
      ] },
    ],
    related: ['/services/work-visa/', '/countries/', '/tools/immigration-eligibility-checker/'],
  },
  {
    path: '/overseas-jobs/openings/', crumb: 'Current openings', wide: true,
    title: 'Current Overseas Job Openings for Nurses and Skilled Workers | Mount Bell',
    description: 'Current overseas job openings from Mount Bell, an MEA-licensed recruiting agent in Kerala: nursing, healthcare, skilled trades and other roles abroad.',
    h1: 'Current Overseas Job Openings',
    lede: 'Vacancies we are recruiting for right now. Openings are removed as soon as they are filled, so if you see one that fits, contact us the same week.',
    img: 'europe',
    wa: 'Hi Mount Bell, I saw your current openings and would like to apply.',
    blocks: [
      { type: 'openings', empty: 'There are no openings listed at the moment. Employers send new vacancies every month, so send us your CV on WhatsApp and we will contact you when one matches your profile.' },
      { type: 'prose', h2: 'Before you apply', body: [
        'You see the employer, salary and contract terms in writing before any fee is paid. Our recruiting agent licence number is on <a href="/about-us/licences/">this page</a>, and <a href="/resources/avoid-visa-fraud/">this guide</a> explains how to check any job offer you receive.',
      ] },
    ],
    related: ['/overseas-jobs/', '/nursing-careers/', '/services/work-visa/'],
  },
];
