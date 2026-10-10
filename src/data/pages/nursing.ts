import type { Block, Page } from './types';
import { site, waLink } from '../site';

// Copy on these pages is taken word for word from the client's page documents.
// Square-bracket notes ([VERIFY], [CONFIRM], [INSERT ...]) are the client's open checks: they stay
// here in the source and are removed from the published page by publish() below.

// Blueprint pages that are not built yet. Links to them are left out until the page exists.
const unbuilt = new Set([
  '/tools/nurse-pathway-finder/', '/services/language-test-preparation/', '/services/dependent-visa/',
  '/resources/gnm-vs-bsc-nurses/', '/resources/oet-vs-ielts-for-nurses/', '/resources/ahpra-registration-for-indian-nurses/',
  '/resources/189-vs-190-vs-491/', '/resources/german-level-for-jobs-in-germany/', '/resources/anerkennung-for-nurses/',
  '/resources/malta-single-permit/', '/resources/malta-care-worker-vs-nurse/', '/resources/maldives-nursing-licensing-exam/',
  '/resources/maldives-healthcare-salaries/', '/countries/australia/skills-in-demand-visa/', '/countries/malta/care-workers/',
  '/countries/denmark/', '/countries/maldives/',
]);

// Link inside a sentence: plain text while the target is unbuilt.
const a = (text: string, href: string) => (unbuilt.has(href) ? text : `<a href="${href}">${text}</a>`);
// Line of onward links: unbuilt targets drop out, and an empty line is not rendered.
const go = (...links: [string, string][]) => links.filter(([, href]) => !unbuilt.has(href)).map(([text, href]) => a(text, href)).join(' &nbsp;·&nbsp; ');

const note = /\s*\[[^\]]*\]/g;
function publish<T>(v: T): T {
  if (typeof v === 'string') return v.replace(note, '') as T;
  if (Array.isArray(v)) return v.filter((x) => typeof x !== 'string' || (x !== '' && !/(:|^)\s*\[[^\]]*\]$/.test(x))).map(publish) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, publish(x)])) as T;
  return v;
}

const nurseWa = (country: string) => `Hi Mountbell, I am a nurse and would like to know about working in ${country}.`;
const licence = 'B-1921/KER/PART/100/5/10348/2023';

const contact = (h2: string, text: string, wa: string): Block => ({
  type: 'prose', h2, body: [text],
  list: [
    'Call: <a href="tel:+919207014777">+91 9207014777</a>',
    `WhatsApp: <a href="${waLink(wa)}" target="_blank" rel="noopener">+91 9207014777</a> [CONFIRM WhatsApp number]`,
    'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
    'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
    '<a href="/free-immigration-assessment/">Book a free nurse assessment</a>',
  ],
  after: [
    '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
    '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
  ],
});

const hubWa = 'Hi Mountbell, I am a nurse and would like to know which country suits my profile.';

const pagesRaw: Page[] = [
  {
    path: '/nursing-careers/', crumb: 'Nursing careers', accent: 'var(--coral)',
    title: 'Nurse Recruitment Agency in Kerala | Mountbell',
    description: 'Nursing jobs abroad for Kerala nurses in Australia, Germany, Malta, Maldives and Denmark. MEA-licensed. Thrissur and Kochi offices. Free nurse eligibility check.',
    label: 'Nursing Careers',
    h1: 'Nurse Recruitment Agency in Kerala — Nursing Jobs Abroad',
    tagline: 'Your Nursing Career Starts Here.',
    lede: 'Mountbell is an MEA-licensed nurse recruitment agency in Kerala. We help GNM, BSc, Post-basic and MSc nurses work as a nurse abroad in Australia, Germany, Malta, the Maldives and Denmark, from offices in Thrissur and Kochi.',
    acts: { check: 'Check my nurse eligibility', wa: 'WhatsApp a nurse adviser' },
    photo: { src: '/img/dest/australia-wide.webp', alt: 'Sydney Opera House and Harbour Bridge at dusk, Australia', w: 1400, h: 820 },
    wa: hubWa,
    blocks: [
      { type: 'prose', body: [], list: [
        'We check your eligibility for each country',
        'We plan your language test and nursing registration',
        'We prepare you for employer interviews and build your visa file',
      ] },
      // Trust strip. The Google rating joins this line once site.googleRating is set.
      { type: 'note', text: `MEA Recruiting Agent Licence ${licence} (<a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Offices in Thrissur and Kochi` },

      { type: 'prose', h2: 'Nursing Jobs Abroad for Kerala Nurses: 5 Countries We Place Nurses In', body: [
        'Nursing jobs abroad differ more by country than most nurses expect. As a nurse recruitment agency in Kerala working with five countries, we answer the same five questions for each one. Open the country guide for the full detail.',
      ] },
      { type: 'prose', h3: 'Australia', body: [], list: [
        'Registration: NMBA, through AHPRA',
        'Language: IELTS or OET at the NMBA standard [VERIFY current scores]',
        'GNM nurses: assessed case by case [VERIFY]',
        'Family: partner and children can usually be included on the visa',
        'Route to PR: yes, through skilled or employer-sponsored visas',
      ], after: [go(['Australia nurse migration from Kerala', '/nursing-careers/australia/'])] },
      { type: 'prose', h3: 'Germany', body: [], list: [
        'Registration: state recognition of your qualification (Anerkennung)',
        'Language: German, usually B1 to start and B2 for full recognition [VERIFY]',
        'GNM nurses: often accepted, sometimes with an adaptation course [VERIFY]',
        'Family: spouse and children can join under family reunification rules',
        'Demand: Germany’s Federal Employment Agency expects to need around 500,000 more nurses by 2030',
      ], after: [go(['Germany nurse recruitment from Kerala', '/nursing-careers/germany/'])] },
      { type: 'prose', h3: 'Malta', body: [], list: [
        'Registration: Malta Council for Nursing and Midwifery, with a bridging programme',
        'Language: English [VERIFY test requirement]',
        'Family: possible once the single permit is issued [VERIFY]',
        'Best for: a European hospital job in English',
      ], after: [go(['Malta nurse jobs for Indians', '/nursing-careers/malta/'])] },
      { type: 'prose', h3: 'Maldives', body: [], list: [
        'Registration: Maldives Nursing and Midwifery Council licensing exam',
        'Language: English',
        'Contracts: fixed-term hospital and health-centre roles, no PR route',
        'Best for: the quickest move, close to home',
      ], after: [go(['registered nurse jobs in Maldives', '/nursing-careers/maldives/'])] },
      { type: 'prose', h3: 'Denmark', body: [], list: [
        'Authorisation: Danish Patient Safety Authority',
        'Language: Danish, at the level set for authorisation [VERIFY]',
        'Family: spouse and children can usually join [VERIFY]',
        'Best for: a long European career with family',
      ], after: [go(['nurse jobs in Denmark for Indians', '/nursing-careers/denmark/'])] },

      { type: 'prose', h2: 'Which Is the Best Country for Indian Nurses?', body: [
        'The best country for Indian nurses is the one that fits your language score, clinical experience and family plans. Once those three are clear, the choice usually narrows to one or two countries.',
      ], list: [
        'Strong IELTS or OET score and you want PR: Australia',
        'Ready to learn German and you want the most openings: Germany',
        'A European hospital job in English: Malta',
        'A quick contract move close to home: Maldives',
        'A long European career with family: Denmark',
      ], after: [
        'Our nurse migration consultants review your file before suggesting a country. Working with five countries, we have no reason to push you towards one.',
        go(['Nurse Pathway Finder', '/tools/nurse-pathway-finder/']),
      ] },

      { type: 'prose', h2: 'Who Can Apply: GNM, BSc, Post-basic and MSc Nurses', body: [
        'As a nurse recruitment agency in Kerala, we check every qualification against each country’s rules before we suggest a destination.',
      ], list: [
        'GNM nurses: eligible in several countries, sometimes with extra experience or an adaptation course',
        'BSc and Post-basic BSc nurses: accepted by most regulators',
        'MSc nurses: a strong fit for specialist and senior roles',
      ], after: [
        go(['Which countries accept GNM nurses', '/resources/gnm-vs-bsc-nurses/']),
        'To work as a nurse abroad you also need Kerala Nurses and Midwives Council registration, an Indian Nursing Council-recognised qualification, a valid passport and usually one to two years of hospital experience [VERIFY per country].',
      ] },

      { type: 'steps', h2: 'How Overseas Nurse Recruitment Works at Mountbell', intro: 'Overseas nurse recruitment involves a regulator, an employer, an embassy and sometimes Indian emigration clearance. Our nurse migration consultants coordinate all four in seven written steps.', items: [
        { title: 'Free assessment', text: 'a nurse adviser reviews your file and shortlists one or two countries' },
        { title: 'Documents', text: 'certificates, experience letters, council verification and attestation' },
        { title: 'Language', text: 'OET, IELTS or German classes at our Thrissur centre' },
        { title: 'Registration', text: 'we prepare and track your application to the regulator' },
        { title: 'Interview and offer', text: 'interviews with checked employers, with a mock session first' },
        { title: 'Visa and emigration', text: 'your visa file and eMigrate clearance where it applies' },
        { title: 'Departure', text: 'a pre-departure briefing and a named contact after you land' },
      ], after: [
        go(['Document checklists', '/services/visa-documentation/'], ['OET, IELTS and German classes', '/services/language-test-preparation/']),
        'Most nurses take six to eighteen months from assessment to departure [VERIFY]. Language is usually the longest stage.',
      ] },

      { type: 'prose', h2: 'Language Tests and Registration', body: [], list: [
        'Australia, Malta and the Maldives: English, with OET or IELTS',
        'Germany: German through Goethe-Institut or telc-certified courses',
        'Denmark: Danish at the level set for authorisation',
        'Registration bodies: AHPRA, Anerkennung, Malta Council for Nursing and Midwifery, Maldives Nursing and Midwifery Council, Danish Patient Safety Authority',
      ], after: [
        'A nurse recruitment agency in Kerala should plan language and registration together, so one does not hold up the other. Our nurse migration consultants book your test dates around your registration timeline, and many Kerala nurses find OET more familiar because its tasks are built around clinical situations.',
        go(['OET vs IELTS for nurses', '/resources/oet-vs-ielts-for-nurses/'], ['AHPRA registration', '/resources/ahpra-registration-for-indian-nurses/']),
      ] },

      { type: 'prose', h2: 'What Nurse Recruitment Costs', body: [
        'The cost to work as a nurse abroad comes in two parts, and both are written down before you sign anything.',
      ], list: [
        'Mountbell fee stages: [INSERT real stages and amounts]',
        'Third-party costs, paid directly to exam bodies, regulators and embassies: exams, verification, translation, registration, visa fees and medicals',
        'Costs and timelines vary by country, with Germany and Denmark usually the longest because of language training',
        'Any charge not on your written schedule is not a Mountbell fee',
      ], after: [go(['Full fee breakdown', '/fees/'])] },

      { type: 'prose', h2: 'Is Mountbell a Licensed Nurse Recruitment Agency in Kerala?', body: [
        `Yes. Mountbell holds MEA Recruiting Agent Licence ${licence}. Search it on the <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">eMigrate portal</a> before you pay any agency, including us.`,
      ], list: [
        'We never promise a guaranteed job or visa',
        'We give a receipt for every payment [CONFIRM practice]',
        'We follow the WHO Global Code of Practice on the International Recruitment of Health Personnel',
      ], after: [
        'Overseas nurse recruitment from Kerala has a long record of fraud, including nurses sent on visit visas instead of work visas. A licensed nurse recruitment agency in Kerala should show you, in writing, how it works.',
        go(['Warning signs of fake agents', '/resources/avoid-visa-fraud/']),
      ] },

      { type: 'prose', h2: 'Interview and Pre-Departure Support', body: [
        'Hospital interviews abroad are structured and clinical, and good preparation changes how confidently you answer. Interview practice is one of the places a specialist nurse recruitment agency in Kerala makes the biggest difference.',
      ], list: [
        'Mock interviews on patient safety, escalation and documentation before every employer interview',
        'A briefing on accommodation, banking and registration after arrival',
        'Your adviser stays on WhatsApp for your first weeks abroad',
      ] },

      { type: 'prose', h2: 'Nurse Success Stories and Your Adviser', body: [], list: [
        'Each story shows a nurse who moved into nursing jobs abroad with Mountbell, published with written consent',
        'One named adviser handles your file from first call to departure, so you never repeat your story to someone new',
        'Our nurse migration consultants work only on nursing and healthcare files [CONFIRM], so your adviser knows each regulator’s process',
      ] },

      { type: 'prose', h2: 'Current Nursing Openings', body: [
        'Every opening is checked by our nurse recruitment agency in Kerala before it is listed, and filled roles come down the same week. Get alerts for nursing jobs abroad on WhatsApp or email.',
      ] },

      { type: 'faq', h2: 'Frequently Asked Questions', items: [
        { q: 'Which is the best country for Indian nurses from Kerala?', a: 'It depends on your language score, experience and family plans. Australia suits strong English scorers who want PR, Germany has the most openings for German learners, Malta offers Europe in English, the Maldives is the quickest move and Denmark suits long-term planners.' },
        { q: 'Can GNM nurses work abroad?', a: 'Yes, in several countries, though some regulators ask for extra experience or an adaptation course. BSc nurses are accepted more widely. Our GNM vs BSc guide lists which countries accept each qualification.' },
        { q: 'Do nurses need German for Germany?', a: 'Yes. Most nurses need B1 German to start the process and B2 for full recognition [VERIFY]. Mountbell runs German classes in Thrissur, so you can study while your documents are processed.' },
        { q: 'How do I know a nurse recruitment agency in Kerala is genuine?', a: 'Search its recruiting agent licence number on eMigrate and check the name and address match. Avoid visit-visa job offers, cash-only payments and guaranteed placements.' },
        { q: 'Can I take my family with me?', a: 'In most of our destinations, a spouse and children can join once you hold a work permit, subject to income and housing rules. Our Dependent and Family Visa page explains each country.' },
        { q: 'How long does the process take?', a: 'Most nurses take six to eighteen months from assessment to departure [VERIFY]. Language preparation is usually the longest stage, especially for Germany and Denmark. Your adviser gives you a written timeline after the first assessment.' },
        { q: 'How much experience do I need for nursing jobs abroad?', a: 'Most employers ask for one to two years of recent hospital experience [VERIFY]. Freshers can start language training and collect documents now, so they are ready when they qualify.' },
        { q: 'Do I have to visit a Mountbell office?', a: 'No. You can consult a nurse adviser online from anywhere in Kerala. Many nurses still visit our Thrissur or Kochi office to hand over original documents. Both routes follow the same overseas nurse recruitment process at our nurse recruitment agency in Kerala.' },
      ] },

      contact('Start Your Nursing Career Abroad', 'Talk to an MEA-licensed nurse recruitment agency in Kerala before you pay anyone. A free assessment tells you which countries you qualify for, what it costs and how long it takes.', hubWa),
    ],
    cta: false,
  },

  {
    path: '/nursing-careers/australia/', crumb: 'Nurses in Australia', img: 'australia', accent: 'var(--coral)',
    title: 'Australia Nurse Migration from Kerala | Mountbell',
    description: 'Australia nurse migration from Kerala, step by step: NMBA registration, OET or IELTS scores, nurse visa options and PR for nurses. Free nurse eligibility check.',
    label: 'Nursing Careers › Australia',
    h1: 'Australia Nurse Migration from Kerala — Register, Get a Visa and Build a Career',
    lede: 'Australia nurse migration from Kerala follows three tracks that run side by side: NMBA registration through Ahpra, an English test at the board’s standard, and a nurse visa Australia employers or states will support. Mountbell, an MEA-licensed recruiting agent with offices in Thrissur and Kochi, plans all three for GNM, BSc and Post-basic nurses.',
    acts: { check: 'Check my Australia eligibility', wa: 'WhatsApp a nurse adviser' },
    wa: nurseWa('Australia'),
    blocks: [
      { type: 'facts', h2: 'Australia for Kerala Nurses: Key Facts', intro: 'These are the facts that shape Australia nurse migration from Kerala [VERIFY each line against NMBA and Home Affairs before publishing].', rows: [
        ['Nursing regulator', 'Nursing and Midwifery Board of Australia (NMBA), through Ahpra'],
        ['English test', 'IELTS Academic, OET, PTE Academic or TOEFL iBT at the NMBA standard [VERIFY current scores]'],
        ['Registration route for Indian-trained nurses', 'NMBA outcome-based assessment, with a computer-based exam and a clinical exam (OSCE) in Australia [VERIFY current exam format]'],
        ['Skills assessment for skilled visas', 'Australian Nursing and Midwifery Accreditation Council (ANMAC)'],
        ['Visa options', 'employer-sponsored and skilled visas set by the Department of Home Affairs'],
        ['Family', 'partner and dependent children can usually be included on the visa'],
        ['Route to permanent residence', 'yes, through employer nomination or skilled visas'],
        ['Typical time from first assessment to departure', '12 to 24 months [VERIFY with Mountbell case data]'],
      ] },

      { type: 'prose', h2: 'Can Kerala Nurses Work as a Nurse in Australia?', body: [
        'Yes. Registered nurses trained in Kerala can work as a nurse in Australia once the NMBA grants registration and they hold a valid visa. Your qualification type changes how the NMBA assesses you, not whether you can apply. Many Indian nurses in Australia started from the same GNM or BSc base you have now.',
      ], list: [
        'BSc Nursing and Post-basic BSc nurses: the most common profile for Australia nurse migration from Kerala',
        'GNM diploma nurses: assessed case by case against Australian registered nurse standards [VERIFY]',
        'MSc Nursing holders: strong candidates for specialist and senior roles once registered',
        'Registration at home: current registration with the Kerala Nurses and Midwives Council or your state council',
        'Qualification: a nursing programme recognised by the Indian Nursing Council',
        'Experience: recent clinical practice, usually at least one year [VERIFY NMBA recency of practice rules]',
      ], after: [go(['Quick check', '/tools/nurse-pathway-finder/'])] },

      { type: 'steps', h2: 'Australia Nurse Migration from Kerala: 7 Steps', intro: 'Australia nurse migration from Kerala works best when registration, language and visa planning start together. Mountbell runs it in seven steps, and you get each one in writing.', items: [
        { title: 'Free nurse assessment', text: 'a nurse adviser checks your qualification, experience and English level, then confirms whether Australia fits' },
        { title: 'NMBA self-check', text: 'you complete the board’s online self-check, which tells you which assessment stream applies' },
        { title: 'English test', text: 'you sit OET, IELTS or PTE and reach the NMBA score in every component' },
        { title: 'Ahpra application and assessment', text: 'you submit documents, then complete the outcome-based assessment exams' },
        { title: 'Skills assessment', text: 'for skilled visas, ANMAC assesses your qualifications and experience' },
        { title: 'Nurse visa Australia application', text: 'an employer-sponsored or skilled visa, with health checks and police clearance' },
        { title: 'Pre-departure and arrival', text: 'a briefing on accommodation, banking and your first weeks at work' },
      ], after: [go(['Document checklist for each step', '/services/visa-documentation/'])] },

      { type: 'prose', h2: 'English Test Scores for Nurses in Australia', body: [
        'English is usually the longest stage for Indian nurses in Australia applications. The NMBA accepts four tests, and you need the required score in each section, not only overall.',
      ], list: [
        'IELTS Academic: 7.0 overall and 7.0 in each band [VERIFY]',
        'OET: grade B in every component [VERIFY]',
        'PTE Academic: the NMBA minimum overall and per-skill scores [VERIFY]',
        'TOEFL iBT: the NMBA total and per-section scores [VERIFY]',
        'Validity: results must be recent when you apply, and the NMBA sets rules on combining test sittings [VERIFY]',
      ], after: [
        'Many Kerala nurses choose OET because its tasks are built around clinical situations. Mountbell runs OET and IELTS classes in Thrissur.',
        go(['Compare the two tests', '/resources/oet-vs-ielts-for-nurses/'], ['Coaching', '/services/language-test-preparation/']),
      ] },

      { type: 'prose', h2: 'NMBA Registration and the Outcome-Based Assessment', body: [
        'Nurses trained in India register with the NMBA through Ahpra. Since nursing education differs between the two countries, the board checks your knowledge and clinical skills directly through an outcome-based assessment.',
      ], list: [
        'Self-check: an online questionnaire that places you in the right assessment stream',
        'Orientation and portfolio: you submit identity, qualification, registration and employment documents',
        'Cognitive exam: a computer-based exam you can usually sit in India [VERIFY current exam and test centres]',
        'OSCE: a clinical skills exam held in Australia [VERIFY location and fees]',
        'Registration: granted once you pass both exams and meet the English and recency rules',
      ], after: [
        'Passing both exams is the point where Australia nurse migration from Kerala becomes real: you can work as a nurse in Australia as soon as your visa is granted.',
        `${a('Our step-by-step guide covers each Ahpra form and fee', '/resources/ahpra-registration-for-indian-nurses/')}.`,
      ] },

      { type: 'prose', h2: 'Nurse Visa Australia Options', body: [
        'Registration lets you practise. A visa lets you live and work in Australia. Most Kerala nurses use one of two visa families.',
      ] },
      { type: 'prose', h3: 'Employer-sponsored visas', body: [], list: [
        // "Details" link to /countries/australia/skills-in-demand-visa/ goes here once that page is built.
        'Skills in Demand visa (subclass 482): a hospital or aged care employer sponsors you for a specific role.',
        'Employer Nomination Scheme (subclass 186): a permanent visa your employer can nominate you for, usually after working with them [VERIFY current rules]',
      ] },
      { type: 'prose', h3: 'Skilled visas', body: [], list: [
        'Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) use the points test and an ANMAC skills assessment',
        'Registered nurse occupations often appear on state nomination lists, which can help with 190 and 491 invitations [VERIFY current state lists]',
        go(['Visa comparison', '/resources/189-vs-190-vs-491/'], ['Points estimate', '/tools/australia-pr-points-calculator/']),
      ], after: [
        'Which nurse visa Australia route is best depends on whether you already have a job offer. With an offer, employer sponsorship is usually faster. Without one, a skilled visa lets you arrive with permanent residence. Either way, you need NMBA registration before you can work as a nurse in Australia.',
      ] },

      { type: 'prose', h2: 'PR for Nurses in Australia', body: [
        'PR for nurses in Australia comes through two routes. You can apply for a skilled permanent visa (189 or 190) from India, or you can arrive on an employer-sponsored visa and move to permanent residence through employer nomination.',
      ], list: [
        'From India: ANMAC skills assessment, points test, expression of interest, then invitation',
        'After arrival: work for your sponsoring employer, then apply for employer nomination [VERIFY minimum period]',
        'Regional option: the 491 visa offers a provisional regional pathway to permanent residence',
        'Family: PR for nurses in Australia usually covers your partner and children as secondary applicants',
      ], after: [
        'If staying long term is your goal, plan for PR for nurses in Australia from your first assessment, because your visa choice affects how quickly you get there. Permanent residence also opens Medicare, free public schooling for children and a path to citizenship.',
      ] },

      { type: 'prose', h2: 'Nursing Jobs in Australia for Kerala Nurses', body: [
        'Nursing jobs in Australia sit across public hospitals, private hospitals, aged care and community health. Demand is strongest where Australia is short of registered nurses: aged care, regional hospitals and specialist units.',
      ], list: [
        'Specialties in demand: aged care, ICU, emergency, operating theatre, mental health and medical-surgical wards',
        'Settings: metropolitan hospitals, regional and rural health services, residential aged care',
        'Regional areas often offer more nursing jobs in Australia and extra visa options through the 491 pathway',
        'Your Mountbell adviser shortlists nursing jobs in Australia that match your registration stage and specialty',
      ], after: [
        'Malayali communities are well established across Australia, and Onmanorama reported in 2023 that Malayalam was the second most spoken foreign language in Townsville, Queensland.',
      ] },

      { type: 'prose', h2: 'Costs to Plan For', body: [
        'The cost of Australia nurse migration from Kerala depends on your English score, the exams you need and your visa type. Plan for these categories:',
      ], list: [
        'English test fees and any retakes',
        'NMBA self-check, application and assessment fees, including both exams',
        'Travel and stay in Australia for the OSCE',
        'ANMAC skills assessment fee, for skilled visas',
        'Nurse visa Australia application fees, medicals and police clearance',
        'Mountbell service fee stages: [INSERT real stages and amounts]',
      ], after: [`Every Mountbell fee is written down before you start. ${a('Full breakdown', '/fees/')}.`] },

      { type: 'prose', h2: 'How Mountbell Supports Your Move', body: [
        `Mountbell holds Ministry of External Affairs Recruiting Agent Licence ${licence}. You can check it on the <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">eMigrate portal</a> before you pay anything. [Confirm the licence is current before publishing]`,
        'For Australia nurse migration from Kerala, our support covers every stage:',
      ], list: [
        'One nurse adviser handles your file from assessment to departure',
        'OET, IELTS and PTE preparation at our Thrissur centre',
        'Document checks before every submission to Ahpra, ANMAC and Home Affairs',
        'Mock interviews for employer interviews, based on Australian clinical scenarios',
        'We never promise a guaranteed job or visa; the NMBA, employers and Home Affairs decide',
        'We follow the WHO Global Code of Practice on the International Recruitment of Health Personnel',
      ] },

      { type: 'prose', h2: 'Nurse Story', body: [
        'Real stories from Indian nurses in Australia show you what the timeline looks like in practice.',
      ] },

      { type: 'faq', h2: 'Frequently Asked Questions', items: [
        { q: 'How long does Australia nurse migration from Kerala take?', a: 'Most nurses take 12 to 24 months from first assessment to arrival [VERIFY]. English tests and NMBA exams usually take the longest. Nurses who already hold the required OET or IELTS score move faster. Your adviser gives you a written timeline after the first assessment.' },
        { q: 'Can GNM nurses work as a nurse in Australia?', a: 'GNM nurses can apply, but the NMBA assesses each qualification against Australian registered nurse standards, and some GNM profiles need more evidence or are not eligible [VERIFY]. BSc and Post-basic BSc nurses usually have a smoother path. A free assessment tells you where you stand.' },
        { q: 'Is OET accepted for nurses in Australia?', a: 'Yes. The NMBA accepts OET, IELTS Academic, PTE Academic and TOEFL iBT for registration, as long as you meet the minimum score in every component [VERIFY current scores]. Many Kerala nurses prefer OET because it uses healthcare scenarios.' },
        { q: 'Do I need a job offer before I apply?', a: 'No. You can apply for NMBA registration and a skilled visa without a job offer. A job offer is needed for employer-sponsored visas such as the Skills in Demand visa. Many nurses register first, then apply for nursing jobs in Australia.' },
        { q: 'Can I bring my family to Australia?', a: 'In most cases, yes. Partners and dependent children are usually included as secondary applicants on employer-sponsored and skilled visas. Health and character checks apply to each family member. Our Dependent and Family Visa page explains the details.' },
        { q: 'Where do I take the NMBA OSCE?', a: 'The OSCE is held in Australia, so you travel there for the clinical exam once you pass the computer-based exam [VERIFY location and current process]. Plan the trip into your budget and timeline from the start of your Australia nurse migration from Kerala.' },
      ] },

      contact('Start Your Australia Nursing Career', 'Speak to a Mountbell nurse adviser about Australia nurse migration from Kerala. A free assessment tells you which registration stream applies, which English score you need, which nurse visa Australia route fits and what it will cost.', nurseWa('Australia')),
    ],
    related: ['/nursing-careers/', '/nursing-careers/germany/', '/nursing-careers/malta/', '/countries/australia/'],
    cta: false,
  },

  {
    path: '/nursing-careers/germany/', crumb: 'Nurses in Germany', img: 'germany', accent: 'var(--amber-deep)',
    title: 'Germany Nurse Recruitment from Kerala | Mountbell',
    description: 'Germany nurse recruitment from Kerala: learn German, get recognition, secure a nurse visa Germany and Pflegefachkraft jobs. Free eligibility check.',
    label: 'Nursing Careers › Germany',
    h1: 'Germany Nurse Recruitment from Kerala — Language, Recognition, Visa and Jobs',
    lede: 'Germany nurse recruitment from Kerala follows one clear path: learn German, get your nursing qualification recognised, secure a job offer and apply for the nurse visa Germany issues to skilled workers. Mountbell, an MEA-licensed recruiting agent with offices in Thrissur and Kochi, guides GNM, BSc and Post-basic nurses through every stage, usually in 12 to 18 months [VERIFY].',
    acts: { check: 'Check my Germany eligibility', wa: 'WhatsApp a nurse adviser' },
    wa: nurseWa('Germany'),
    blocks: [
      { type: 'facts', h2: 'Germany for Kerala Nurses: Key Facts', intro: 'These are the facts that shape Germany nurse recruitment from Kerala for most applicants [VERIFY each line before publishing].', rows: [
        ['Job title after recognition', 'Pflegefachkraft (registered nurse)'],
        ['Language', 'German, usually B1 to start and B2 for full recognition [VERIFY]'],
        ['Time to learn German from zero to B2', 'about 9 to 12 months of full-time study [VERIFY]'],
        ['Recognition', 'handled by the nursing authority of the German state where you will work'],
        ['Recognition decision', 'usually within 3 to 4 months of a complete application [VERIFY]'],
        ['English test', 'not required, so these are nurse jobs in Germany without IELTS'],
        ['Demand', 'Germany’s Federal Employment Agency expects the country to need around 500,000 more nurses by 2030'],
        ['Family and residence', 'family reunification and a route to a settlement permit [VERIFY current rules]'],
        ['Total time from first assessment to arrival', '12 to 18 months [VERIFY]'],
      ] },

      { type: 'prose', h2: 'Can Kerala Nurses Work as a Nurse in Germany?', body: [
        'Yes. Registered nurses trained in Kerala can work as a nurse in Germany once a German state authority recognises their qualification and they hold a valid visa. Germany has welcomed Kerala nurses in Germany since the 1960s, and the government-backed Triple Win programme for nurses still recruits through NORKA Roots today. Germany nurse recruitment from Kerala starts with checking your profile against these points:',
      ], list: [
        'BSc nurses in Germany: the most common profile, with the smoothest recognition in most states',
        'GNM nurses in Germany: eligible, though the authority may ask for an adaptation course or a knowledge test [VERIFY]',
        'Post-basic BSc and MSc nurses: assessed in the same way as degree-qualified nurses',
        'Registration: current registration with the Kerala Nurses and Midwives Council or your state council',
        'Qualification: a nursing programme recognised by the Indian Nursing Council',
        'Experience: most employers prefer one to two years, though Germany nursing jobs for freshers exist, especially in elderly care [VERIFY]',
      ], after: [go(['Quick eligibility check', '/tools/nurse-pathway-finder/'])] },

      { type: 'steps', h2: 'Germany Nurse Recruitment from Kerala: 7 Steps and Timeline', intro: 'This is how to become a nurse in Germany from Kerala, with the time each step usually takes [VERIFY with Mountbell case data].', items: [
        { title: 'Free assessment (week 1)', text: 'a nurse adviser checks your qualification, experience and German level' },
        { title: 'German classes (6 to 12 months)', text: 'A1 to B1, then B2, with Goethe, telc or ÖSD exams' },
        { title: 'Documents (4 to 8 weeks, alongside language)', text: 'we give you the full list of documents for nursing recognition in Germany, including syllabus, transcripts, registration and certified translations' },
        { title: 'Recognition application (3 to 4 months)', text: 'the state authority issues full recognition or a deficit notice' },
        { title: 'Job offer and interview (1 to 3 months)', text: 'interviews with German hospitals hiring Indian nurses and care providers' },
        { title: 'Visa (1 to 3 months)', text: 'the skilled worker visa for nurses in Germany, or a recognition visa if you still have gaps to close' },
        { title: 'Arrival and adaptation (3 to 12 months)', text: 'an adaptation course or knowledge test if needed, then full recognition' },
      ], after: [
        'Seen end to end, the Germany nurse job process takes 12 to 18 months. Your adviser gives you a written German nurse registration timeline after step 1.',
        go(['Document checklist', '/services/visa-documentation/']),
      ] },

      { type: 'prose', h2: 'German Language for Nurses: Levels and Time', body: [
        'German language for nurses is the longest stage of Germany nurse recruitment from Kerala, and it decides your start date. Without the required German level, you cannot work as a nurse in Germany, however strong your clinical skills are.',
      ], list: [
        'A1 to A2: about 3 to 4 months',
        'B1: about 2 to 3 more months; Goethe B1 for nurses is often enough to apply for jobs and a visa [VERIFY]',
        'B2: about 3 more months; B2 German for nurses is usually needed for full recognition [VERIFY]',
        'Exams: Goethe-Institut, telc (including the telc nursing exam) or ÖSD',
      ], after: [
        'Mountbell runs German classes at our Thrissur centre, so you can study while your documents are prepared.',
        go(['Language and test preparation', '/services/language-test-preparation/'], ['German level needed for jobs', '/resources/german-level-for-jobs-in-germany/']),
      ] },

      { type: 'prose', h2: 'Nursing Recognition in Germany', body: [
        'Nursing recognition in Germany, called Anerkennung, compares your Kerala training with the German nursing programme. It is the step that makes Germany nurse recruitment from Kerala official. The state authority reaches one of two outcomes:',
      ], list: [
        'Full recognition: you can take Pflegefachkraft jobs straight away',
        'Deficit notice: a deficit notice for nurses lists the gaps and offers two ways to close them',
        'Option one: an adaptation course for nurses in Germany, usually 6 to 12 months of theory and hospital practice [VERIFY]',
        'Option two: a knowledge test for nurses in Germany (Kenntnisprüfung), with oral and practical exams [VERIFY]',
      ], after: [
        'While you close the gaps, you usually work as a nursing assistant, the standard nursing assistant to registered nurse Germany route. A recognition partnership for nurses in Germany also lets you start working and finish recognition with your employer after arrival [VERIFY current rules].',
        go(['Full Anerkennung guide', '/resources/anerkennung-for-nurses/']),
      ] },

      { type: 'prose', h2: 'Nurse Visa Germany Options', body: [
        'Mountbell plans your nurse visa Germany route around where you stand in recognition.',
      ], list: [
        'Skilled worker visa: for nurses whose qualification is fully recognised and who hold a job offer',
        'Recognition visa: for nurses completing an adaptation course or knowledge test in Germany [VERIFY]',
        'Recognition partnership: arrive with a job offer and complete recognition alongside your employer [VERIFY]',
        'Embassy: Indian applicants apply through the German missions in India [VERIFY current appointment times]',
      ], after: [
        'Which nurse visa Germany route fits you depends on your recognition result, and your adviser explains it after step 4.',
      ] },

      { type: 'prose', h2: 'Settlement Permit and Family', body: [], list: [
        'Family reunification for nurses in Germany: your spouse and children can join you, subject to income and housing rules [VERIFY language rules for spouses]',
        'Settlement permit for nurses in Germany: once you work as a nurse in Germany for a few years and pay pension contributions, permanent residence becomes possible [VERIFY minimum period]',
        'Citizenship: possible later under German nationality law [VERIFY]',
      ], after: [go(['Dependent and Family Visa', '/services/dependent-visa/'])] },

      { type: 'prose', h2: 'Nursing Jobs in Germany for Indians', body: [
        'Nursing jobs in Germany for Indians sit in university hospitals, district hospitals, rehabilitation clinics and elderly care homes. The nursing shortage in Germany is sharpest in elderly care and intensive care, which is why Germany nurse recruitment from Kerala keeps growing.',
      ], list: [
        'Pflegefachkraft jobs: hospital wards, ICU, operating theatre and emergency departments',
        'Elderly care nurse jobs Germany: care homes and home-care services, often hiring year-round',
        'Hospital jobs in Germany for nurses: large city hospitals and smaller district hospitals',
        'Accommodation: many employers help with first housing, so nurse jobs in Germany with accommodation support are common [VERIFY per employer]',
        'Pay: ODEPC advertised a Germany nurse salary of 2,400 to 4,000 euros a month in 2024; pay depends on recognition, experience and collective agreements',
      ], after: [
        'Kerala nurses in Germany usually start in roles with built-in training, then move into full Pflegefachkraft jobs after recognition. Your adviser shortlists nursing jobs in Germany for Indians that match your German level.',
      ] },

      { type: 'prose', h2: 'Costs to Plan For', body: [
        'The cost of nurse migration to Germany is mostly language training and paperwork, because there is no English test. Budget early so Germany nurse recruitment from Kerala does not stall halfway.',
      ], list: [
        'German courses and Goethe, telc or ÖSD exam fees',
        'Translation, attestation and recognition fees',
        'Visa fee, health insurance and travel',
        'Mountbell service fee stages: [INSERT real stages and amounts]',
      ], after: [
        'Government programmes such as Triple Win, run by NORKA Roots with the German Federal Employment Agency, are another route, and we will tell you honestly if one suits you better.',
        go(['Full fee breakdown', '/fees/']),
      ] },

      { type: 'prose', h2: 'How Mountbell Supports Your Move', body: [
        `Mountbell holds Ministry of External Affairs Recruiting Agent Licence ${licence}, which you can check on the <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">eMigrate portal</a> before you pay anything. For Germany nurse recruitment from Kerala, our support covers every stage.`,
      ], list: [
        'One nurse adviser handles your file from assessment to arrival',
        'German classes and exam preparation at our Thrissur centre',
        'Document checks before your recognition application goes to the state authority',
        'Interview practice in German, based on real ward scenarios',
        'Ethical nurse recruitment Germany standards: we follow the WHO Global Code of Practice and never promise a guaranteed job or visa',
        'Online consultations for nurse migration to Germany from India, not only from Kerala',
        'Practical briefings on daily life, banking and housing for Kerala nurses in Germany',
      ] },

      { type: 'prose', h2: 'Nurse Story', body: [
        'Real stories from Kerala nurses in Germany show you what each stage feels like and how Germany nurse recruitment from Kerala works in real life.',
      ] },

      { type: 'faq', h2: 'Frequently Asked Questions', items: [
        { q: 'How long does Germany nurse recruitment from Kerala take?', a: 'Most nurses take 12 to 18 months from first assessment to arrival [VERIFY]. German classes take the longest, often 9 to 12 months to reach B2. Nurses who already hold B1 or B2 move faster. Your adviser gives you a written timeline after the first assessment.' },
        { q: 'Can I work as a nurse in Germany without IELTS?', a: 'Yes. Germany asks for German, not English, so you do not need IELTS or OET. You do need a recognised German exam, usually B1 to apply and B2 for full recognition [VERIFY].' },
        { q: 'Can GNM nurses apply?', a: 'Yes. GNM nurses can apply, but the state authority may ask for an adaptation course or a knowledge test to close training gaps [VERIFY]. BSc nurses usually move faster. A free assessment tells you where you stand.' },
        { q: 'How much does a nurse earn in Germany?', a: 'ODEPC advertised 2,400 to 4,000 euros a month for nurses in 2024. Pay rises once you move into Pflegefachkraft jobs after full recognition, and with experience, shift allowances and collective agreements. Nursing jobs in Germany for Indians follow the same pay rules as for German nurses [VERIFY].' },
        { q: 'What is a Pflegefachkraft?', a: 'Pflegefachkraft is the German title for a registered nurse. You can apply for Pflegefachkraft jobs once your qualification is fully recognised; before that, you usually work as a nursing assistant while completing your adaptation course.' },
        { q: 'Can my family join me in Germany?', a: 'Yes, in most cases. Spouses and children can join through family reunification once you meet income and housing rules [VERIFY]. Our Dependent and Family Visa page explains the details.' },
      ] },

      contact('Start Your Germany Nursing Career', 'Speak to a Mountbell nurse adviser about Germany nurse recruitment from Kerala. A free assessment tells you which German level you need, how recognition works for your qualification, which nurse visa Germany route fits and what it will cost.', nurseWa('Germany')),
    ],
    related: ['/nursing-careers/', '/nursing-careers/australia/', '/nursing-careers/malta/', '/countries/germany/'],
    cta: false,
  },

  {
    path: '/nursing-careers/malta/', crumb: 'Nurses in Malta', img: 'malta', accent: 'var(--teal)',
    title: 'Malta Nurse Jobs for Indians | Mountbell',
    description: 'Malta nurse jobs for Indians: registration, bridging programme, nurse salary Malta and work permit for Kerala nurses. MEA-licensed. Free eligibility check.',
    label: 'Nursing Careers › Malta',
    h1: 'Malta Nurse Jobs for Indians — Registration, Bridging Programme, Permit and Pay',
    lede: 'Malta nurse jobs for Indians offer something rare in Europe: hospital and elderly care roles where you work in English from day one. To get there, you register with the Malta Council for Nursing and Midwifery, complete a bridging programme and receive a work and residence permit through your employer. Mountbell, an MEA-licensed recruiting agent with offices in Thrissur and Kochi, guides Kerala nurses through each stage, usually in 6 to 12 months [VERIFY].',
    acts: { check: 'Check my Malta eligibility', wa: 'WhatsApp a nurse adviser' },
    wa: nurseWa('Malta'),
    blocks: [
      { type: 'facts', h2: 'Malta for Kerala Nurses: Key Facts', intro: 'These are the facts that shape Malta nurse jobs for Indians for most applicants [VERIFY each line before publishing].', rows: [
        ['Language at work', 'English, one of Malta’s two official languages alongside Maltese'],
        ['English test', 'IELTS for Malta nurses or OET for Malta nurses, at the level employers and the council set [VERIFY]'],
        ['Regulator', 'Malta Council for Nursing and Midwifery registration is required before you practise'],
        ['Bridging', 'the Malta bridging programme for nurses closes training gaps, usually over a few months [VERIFY duration]'],
        ['Permit', 'a combined work and residence permit, applied for by your employer through Identità [VERIFY]'],
        ['Employers', 'nursing jobs in Malta sit in public hospitals, private hospitals and elderly care homes'],
        ['Pay', 'nurse salary Malta offers vary by employer and by your registration stage [VERIFY]'],
        ['EU status', 'Malta is an EU and Schengen member, though your Malta permit does not by itself let you work in other EU countries'],
        ['Total time from first assessment to arrival', '6 to 12 months [VERIFY]'],
      ] },

      { type: 'prose', h2: 'Can Kerala Nurses Work as a Nurse in Malta?', body: [
        'Yes. Registered nurses trained in Kerala can work as a nurse in Malta once the council accepts them for registration and their permit is issued. The nursing shortage in Malta, driven by an ageing population, keeps demand steady for Kerala nurses in Malta [VERIFY]. Malta nurse jobs for Indians start with checking your profile against these points:',
      ], list: [
        'BSc nurses in Malta: the most common profile, with the smoothest registration',
        'GNM nurses in Malta: may be accepted after assessment, sometimes with extra experience or a longer bridging period [VERIFY]',
        'Post-basic BSc and MSc nurses: assessed in the same way as degree-qualified nurses',
        'Registration at home: current registration with the Kerala Nurses and Midwives Council or your state council',
        'Qualification: a nursing programme recognised by the Indian Nursing Council',
        'Experience: most employers prefer one to two years, though Malta nursing jobs for freshers appear in elderly care [VERIFY]',
      ], after: [go(['Quick eligibility check', '/tools/nurse-pathway-finder/'])] },

      { type: 'steps', h2: 'Malta Nurse Jobs for Indians: 7 Steps and Timeline', intro: 'This is how to become a nurse in Malta from Kerala, with the time each step usually takes [VERIFY with Mountbell case data].', items: [
        { title: 'Free assessment (week 1)', text: 'a nurse adviser checks your qualification, experience and English level' },
        { title: 'English test (1 to 3 months)', text: 'IELTS or OET, if your employer or the council asks for it [VERIFY]' },
        { title: 'Documents (3 to 6 weeks)', text: 'we give you the full list of documents for Malta nursing registration, including transcripts, syllabus, registration proof and experience letters' },
        { title: 'Job offer and interview (1 to 2 months)', text: 'interviews with hospitals and care providers, with Malta nurse interview preparation before each one' },
        { title: 'Work permit (2 to 4 months)', text: 'your employer applies for the Malta work permit for nurses through Identità [VERIFY current processing times]' },
        { title: 'Travel and bridging programme (2 to 6 months)', text: 'you arrive, complete the bridging programme and work in a supervised role [VERIFY]' },
        { title: 'Full registration', text: 'once the council confirms it, you can work as a nurse in Malta at full scope' },
      ], after: [
        'Seen end to end, the Malta nurse job process takes 6 to 12 months. Your adviser gives you a written Malta nurse timeline after step 1.',
        go(['Document checklist', '/services/visa-documentation/']),
      ] },

      { type: 'prose', h2: 'Malta Nursing Registration and the Bridging Programme', body: [
        'Malta nursing registration is handled by the Malta Council for Nursing and Midwifery. Nurses trained outside the EU usually complete an adaptation programme for nurses in Malta, often called the bridging programme, before full registration [VERIFY].',
      ], list: [
        'What it covers: Maltese healthcare law, patient safety, clinical practice standards and supervised ward work',
        'How long it takes: usually a few months, depending on the provider and your background [VERIFY]',
        'When it happens: usually after you arrive, while you work for your sponsoring employer [VERIFY]',
        'What follows: full Malta nursing registration and a registered nurse role',
      ], after: [
        'Finishing the Malta bridging programme for nurses opens registered nursing jobs in Malta at full scope of practice. Your adviser explains which provider your employer uses and what it costs before you accept an offer.',
      ] },

      { type: 'prose', h2: 'English Tests for Malta Nurses', body: [
        'English is the working language in Malta’s hospitals, which is why Malta nurse jobs for Indians suit nurses who already speak English well.',
      ], list: [
        'IELTS for Malta nurses: Academic test at the score your employer or the council sets [VERIFY]',
        'OET for Malta nurses: accepted by many employers as an alternative [VERIFY]',
        'Maltese: not required for registration',
      ], after: [
        'Mountbell runs OET and IELTS preparation at our Thrissur centre.',
        go(['Language and test preparation', '/services/language-test-preparation/'], ['OET vs IELTS for nurses', '/resources/oet-vs-ielts-for-nurses/']),
      ] },

      { type: 'prose', h2: 'Nurse Visa Malta and Work Permit', body: [
        'For a nurse visa Malta employers sponsor, the process runs through your job offer.',
      ], list: [
        'Employer application: your hospital or care home applies for your combined work and residence permit [VERIFY]',
        'Entry visa: you then apply for a national entry visa to travel [VERIFY]',
        'Renewal: permits are usually renewed with your contract [VERIFY]',
      ], after: [go(['How the Malta permit works', '/resources/malta-single-permit/'], ['Malta work visa hub', '/countries/malta/'])] },

      { type: 'prose', h2: 'Family and Long-Term Residence', body: [], list: [
        'Family visa for nurses in Malta: family reunification is usually possible after a period of residence and with a stable income [VERIFY current rules]',
        'Long-term residence for nurses in Malta: EU long-term resident status is generally available after five years of legal stay [VERIFY]',
      ], after: [go(['Dependent and Family Visa', '/services/dependent-visa/'])] },

      { type: 'prose', h2: 'Nursing Jobs in Malta: Settings and Pay', body: [
        'Nursing jobs in Malta sit in public hospitals, private hospitals and elderly care homes. Many Malta nurse jobs for Indians are in elderly care, because Malta’s population is ageing.',
      ], list: [
        'Hospital nurse jobs in Malta: wards, theatres and emergency care, including Mater Dei Hospital nurse jobs in the public system [VERIFY recruitment route]',
        'Private hospital jobs in Malta for nurses: smaller hospitals and clinics, often recruiting overseas',
        'Elderly care nurse jobs Malta: government and private care homes, often hiring year-round',
        'Accommodation: some employers help with first housing, so nurse jobs in Malta with accommodation support do exist [VERIFY per employer]',
        'Pay: nurse salary Malta offers depend on the employer, shift pattern and whether you are still in the bridging stage [VERIFY with current offer letters]',
      ], after: [
        'Ask your adviser for a written nurse salary Malta breakdown before you accept any offer. Pay usually rises once you work as a nurse in Malta with full registration.',
        'Malta also suits nurses looking for English-speaking nursing jobs in Europe, and it can be a strong start to a longer nursing career in Malta.',
        go(['Malta care worker vs nurse', '/resources/malta-care-worker-vs-nurse/']),
      ] },

      { type: 'prose', h2: 'Costs to Plan For', body: [
        'The cost of nurse migration to Malta is lower than for most European countries, because there is no new language to learn.',
      ], list: [
        'English test fees and any retakes',
        'Translation, attestation and registration fees',
        'Fees for the Malta bridging programme for nurses, if your employer does not cover them [VERIFY]',
        'Permit, visa fees, medicals and travel',
        'Mountbell service fee stages: [INSERT real stages and amounts]',
      ], after: [
        'Every Mountbell fee is written down before you start, so Malta nurse jobs for Indians never come with hidden charges from us.',
        go(['Full fee breakdown', '/fees/']),
      ] },

      { type: 'prose', h2: 'How Mountbell Supports Your Move', body: [
        `Mountbell holds Ministry of External Affairs Recruiting Agent Licence ${licence}, which you can check on the <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">eMigrate portal</a> before you pay anything. For Malta nurse jobs for Indians, our support covers every stage.`,
      ], list: [
        'One nurse adviser handles your file from assessment to arrival',
        'A shortlist of Malta nursing jobs for Kerala nurses that matches your experience',
        'OET and IELTS preparation at our Thrissur centre',
        'Document checks before your registration file goes to the council',
        'Interview practice based on real Maltese ward scenarios',
        'Ethical nurse recruitment Malta standards: we follow the WHO Global Code of Practice and never promise a guaranteed job or permit',
        'Online consultations for Malta nurse recruitment from India, not only from Kerala',
        'Practical briefings on housing, banking and life in Malta for Indian nurses',
      ] },

      { type: 'prose', h2: 'Nurse Story', body: [
        'Real stories from Kerala nurses in Malta show how Malta nurse jobs for Indians work in real life, from the bridging stage to the first months.',
      ] },

      { type: 'faq', h2: 'Frequently Asked Questions', items: [
        { q: 'How long does it take to get Malta nurse jobs for Indians?', a: 'Most nurses take 6 to 12 months from first assessment to arrival [VERIFY]. Permit processing and the bridging programme take the longest. Nurses who already hold the required English score move faster. Your adviser gives you a written timeline after the first assessment.' },
        { q: 'Do I need IELTS or OET for Malta?', a: 'Many employers and the council ask for proof of English, usually through IELTS or OET [VERIFY current requirement]. Because Malta works in English, Malta nurse jobs for Indians need no new language, which shortens your preparation time.' },
        { q: 'Can GNM nurses work in Malta?', a: 'GNM nurses may be accepted after the council assesses their training, sometimes with more experience or a longer bridging period [VERIFY]. BSc nurses usually move faster. A free assessment tells you which nursing jobs in Malta fit your profile.' },
        { q: 'What is the Malta bridging programme for nurses?', a: 'It is a short adaptation programme that prepares nurses trained outside the EU for practice in Malta. It covers local law, patient safety and supervised clinical work, and leads to full registration with the Malta Council for Nursing and Midwifery [VERIFY].' },
        { q: 'Can I move from Malta to other EU countries?', a: 'Not automatically. Your Malta permit lets you live in Malta and work as a nurse in Malta only. Working in another EU country needs that country’s own permit and nursing registration [VERIFY].' },
        { q: 'Can my family join me in Malta?', a: 'Usually yes, after a period of residence and with stable income and housing [VERIFY]. Our Dependent and Family Visa page explains the details.' },
      ] },

      contact('Start Your Malta Nursing Career', 'Speak to a Mountbell nurse adviser about Malta nurse jobs for Indians. A free assessment tells you whether you qualify, which English score you need, how the bridging programme works, what nurse salary Malta employers offer and what it will cost.', nurseWa('Malta')),
    ],
    related: ['/nursing-careers/', '/nursing-careers/australia/', '/nursing-careers/germany/'],
    cta: false,
  },

  {
    path: '/nursing-careers/maldives/', crumb: 'Nurses in the Maldives', img: 'maldives', accent: 'var(--green-deep)',
    title: 'Registered Nurse Jobs in Maldives | Mountbell',
    description: 'Registered nurse jobs in Maldives for Kerala nurses: licence exam, nurse visa Maldives, hospital contracts and timelines. MEA-licensed. Free eligibility check.',
    label: 'Nursing Careers › Maldives',
    h1: 'Registered Nurse Jobs in Maldives — Licence, Contract, Visa and Timeline',
    lede: 'Registered nurse jobs in Maldives are the quickest overseas nursing move for many Kerala nurses: an English-speaking health system about an hour’s flight from Kerala, fixed hospital contracts and a short process. You pass the Maldives nursing licence exam, sign a contract with a hospital or health centre and travel on an employer-sponsored permit. Mountbell, an MEA-licensed recruiting agent with offices in Thrissur and Kochi, guides nurses through each stage, usually in 3 to 6 months [VERIFY].',
    acts: { check: 'Check my Maldives eligibility', wa: 'WhatsApp a nurse adviser' },
    wa: nurseWa('the Maldives'),
    blocks: [
      { type: 'facts', h2: 'Maldives for Kerala Nurses: Key Facts', intro: 'These are the facts that shape registered nurse jobs in Maldives for most applicants [VERIFY each line before publishing].', rows: [
        ['Regulator', 'Maldives Nursing and Midwifery Council registration, after a licensing exam [VERIFY exam format]'],
        ['Language at work', 'English, with Dhivehi helpful for patient conversations'],
        ['Employers', 'nursing jobs in Maldives sit in government hospitals, private hospitals in Malé, atoll health centres and resort clinics'],
        ['Contracts', 'Maldives hospital nurse contracts usually run for one to two years and can be renewed [VERIFY]'],
        ['Permit', 'an employer-sponsored work permit and work visa [VERIFY current process]'],
        ['Travel time', 'roughly 1 to 1.5 hours by air from Thiruvananthapuram or Kochi to Malé [VERIFY current routes]'],
        ['Route to permanent residence', 'none; this is contract work'],
        ['Total time from first assessment to joining', '3 to 6 months [VERIFY]'],
      ] },

      { type: 'prose', h2: 'Can Kerala Nurses Work as a Nurse in Maldives?', body: [
        'Yes. Registered nurses trained in Kerala can work as a nurse in Maldives once they pass the licensing exam, register with the council and receive a permit through their employer. Kerala nurses in Maldives are a familiar part of many hospital teams, which makes settling in easier [VERIFY]. Registered nurse jobs in Maldives start with checking your profile against these points:',
      ], list: [
        'BSc nurses in Maldives: the most common profile, accepted by most employers',
        'GNM nurses in Maldives: often accepted, depending on the employer and the council’s rules [VERIFY]',
        'Post-basic BSc and MSc nurses: strong candidates, especially for senior and specialist posts',
        'Registration at home: current registration with the Kerala Nurses and Midwives Council or your state council',
        'Qualification: a nursing programme recognised by the Indian Nursing Council',
        'Maldives nurse experience requirements: most employers ask for one to two years; Maldives nursing jobs for freshers are fewer but do appear [VERIFY]',
      ], after: [go(['Quick eligibility check', '/tools/nurse-pathway-finder/'])] },

      { type: 'steps', h2: 'Registered Nurse Jobs in Maldives: 7 Steps and Timeline', intro: 'This is how to become a nurse in Maldives from Kerala, with the time each step usually takes [VERIFY with Mountbell case data].', items: [
        { title: 'Free assessment (week 1)', text: 'a nurse adviser checks your qualification, experience and specialty' },
        { title: 'Documents (2 to 4 weeks)', text: 'we give you the full list of documents for Maldives nurse licence applications, including transcripts, registration proof and experience letters' },
        { title: 'Licensing exam (4 to 8 weeks)', text: 'you prepare for and sit the council’s exam [VERIFY where the exam is held]' },
        { title: 'Job offer and interview (2 to 6 weeks)', text: 'interviews with hospitals and health centres, with Maldives nurse interview preparation before each one' },
        { title: 'Work permit and visa (3 to 6 weeks)', text: 'your employer applies, then you receive your nurse visa Maldives documents [VERIFY]' },
        { title: 'Travel (about 1 to 1.5 hours by air)', text: 'flights from Kerala to Malé, then onward travel if you are posted to an atoll' },
        { title: 'Joining and orientation (first 2 weeks)', text: 'induction at your hospital or health centre' },
      ], after: [
        'Seen end to end, the Maldives nurse job process takes 3 to 6 months. Your adviser gives you a written Maldives nurse timeline after step 1.',
        go(['Document checklist', '/services/visa-documentation/']),
      ] },

      { type: 'prose', h2: 'The Maldives Nurse Licence', body: [
        'To take up registered nurse jobs in Maldives, foreign nurses need a licence from the Maldives Nursing and Midwifery Council. For most Kerala nurses this means a Maldives nurse licence for Indians issued after document verification and a licensing exam [VERIFY].',
      ], list: [
        'What the exam checks: core nursing knowledge, patient safety and clinical judgement [VERIFY]',
        'How long to prepare: usually 4 to 8 weeks for experienced nurses',
        'What follows: Maldives Nursing and Midwifery Council registration, then permission to practise',
      ], after: [
        'Once licensed, you can work as a nurse in Maldives in any facility that sponsors you [VERIFY]. Our step-by-step exam guide covers the format, syllabus and preparation in detail.',
        go(['Maldives nursing licence exam guide', '/resources/maldives-nursing-licensing-exam/']),
      ] },

      { type: 'prose', h2: 'Nurse Visa Maldives and Contracts', body: [
        'For a nurse visa Maldives employers sponsor, the process runs through your job offer.',
      ], list: [
        'Employer application: your hospital or health centre applies for your work permit, and most registered nurse jobs in Maldives come with this paperwork handled for you [VERIFY]',
        'Work visa: issued on arrival or before travel, depending on the current process [VERIFY]',
        'Tied to your employer: a nurse visa Maldives permit is linked to your sponsor, so changing jobs usually needs a new permit [VERIFY]',
        'Contract length: one to two years, with Maldives nurse contract renewal possible if both sides agree [VERIFY]',
        'What contracts often include: accommodation, return flights and medical cover, depending on the employer [VERIFY per contract]',
      ], after: [
        'Read every Maldives hospital nurse contract with your adviser before you sign, especially the clauses on duty hours, leave and early exit.',
        go(['Maldives work visa hub', '/countries/maldives/']),
      ] },

      { type: 'prose', h2: 'Nursing Jobs in Maldives: Where You Can Work', body: [
        'Nursing jobs in Maldives sit across a small number of large hospitals and many smaller island facilities.',
      ], list: [
        'Malé hospital jobs for nurses: the main government hospital (IGMH) and private hospitals such as ADK Hospital [VERIFY current recruitment]',
        'IGMH nurse jobs: wards, emergency and specialist units at Indira Gandhi Memorial Hospital [VERIFY]',
        'Private hospital nurse jobs Malé: smaller private hospitals and clinics in the capital',
        'Atoll hospital nurse jobs: regional hospitals and island health centres, often with smaller teams and wider responsibilities',
        'Resort nurse jobs in Maldives: clinic roles at island resorts, usually for experienced nurses [VERIFY]',
        'ICU nurse jobs in Maldives and staff nurse jobs in Maldives: the two roles most often advertised [VERIFY]',
      ], after: [
        'The nursing shortage in Maldives, especially outside Malé, keeps demand steady for nurses from India [VERIFY]. Most nurse jobs in Maldives with accommodation are on the atolls, where employers house staff near the facility [VERIFY]. Kerala nurses in Maldives often start on an atoll and move to Malé after a contract or two [VERIFY].',
      ] },

      { type: 'prose', h2: 'Pay, Costs and Family', body: [], list: [
        'Pay: the nurse salary in Maldives depends on the employer, location and specialty; our salary guide covers current ranges [VERIFY]',
        'Costs: the cost of nurse migration to Maldives is low compared with Europe, because there is no new language to learn and no long training period',
        'Costs to plan for: licensing exam and verification fees, medicals, document attestation and Mountbell service fee stages [INSERT real amounts]',
        'Family visa for nurses in Maldives: dependants may be possible on some contracts, but many nurses go alone at first [VERIFY]',
      ], after: [go(['Maldives healthcare salaries and contracts', '/resources/maldives-healthcare-salaries/'], ['Full fee breakdown', '/fees/'])] },

      { type: 'prose', h2: 'Why Kerala Nurses Choose the Maldives', body: [
        'Registered nurse jobs in Maldives suit nurses who want overseas experience without a long wait.',
      ], list: [
        'Speed: nursing jobs in Maldives take 3 to 6 months from assessment to joining, compared with 12 months or more for Europe [VERIFY]',
        'Distance: one of the nurse jobs abroad close to Kerala, so trips home are quick and affordable',
        'Language: English-speaking nurse jobs near India, with no new language to learn',
        'Experience: international hospital experience that strengthens later applications to Australia or Europe',
        'Commitment: Maldives hospital nurse contracts are short and renewable, so you can try overseas work without a long commitment',
      ], after: [
        'Life in Maldives for Indian nurses is quieter than city life, especially on the atolls.',
      ] },

      { type: 'prose', h2: 'How Mountbell Supports Your Move', body: [
        `Mountbell holds Ministry of External Affairs Recruiting Agent Licence ${licence}, which you can check on the <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">eMigrate portal</a> before you pay anything. For registered nurse jobs in Maldives, our support covers every stage.`,
      ], list: [
        'One nurse adviser handles your file from assessment to joining',
        'A shortlist of Maldives nursing jobs for Kerala nurses that matches your specialty',
        'Licensing exam preparation and document checks before you apply',
        'Contract review before you sign',
        'Ethical nurse recruitment Maldives standards: we follow the WHO Global Code of Practice and never promise a guaranteed job',
        'Online consultations for Maldives nurse recruitment from India, not only from Kerala',
        'A pre-departure briefing on island life, banking and housing for Kerala nurses in Maldives',
      ] },

      { type: 'prose', h2: 'Nurse Story', body: [
        'Real stories from Kerala nurses in Maldives show what island postings look like and how registered nurse jobs in Maldives work day to day.',
      ] },

      { type: 'faq', h2: 'Frequently Asked Questions', items: [
        { q: 'How long does it take to get registered nurse jobs in Maldives?', a: 'Most nurses take 3 to 6 months from first assessment to joining [VERIFY]. The licensing exam and permit usually take the longest. Nurses with ready documents and recent experience move faster. Your adviser gives you a written timeline after the first assessment.' },
        { q: 'Do I need IELTS or OET for the Maldives?', a: 'Usually not. Hospitals in the Maldives work in English, and most employers offering registered nurse jobs in Maldives assess your English at interview rather than through IELTS or OET [VERIFY per employer]. You still need to pass the nursing licensing exam.' },
        { q: 'Can GNM nurses work as a nurse in Maldives?', a: 'Many employers accept GNM nurses with good experience, though some posts ask for a BSc [VERIFY]. A free assessment tells you which roles fit your qualification.' },
        { q: 'Is there a route to permanent residence?', a: 'No. Each Maldives hospital nurse contract is fixed-term, usually for one to two years at a time. Many nurses use it to build experience before applying to countries with long-term routes, such as Australia or Germany.' },
        { q: 'Will I work in Malé or on an island?', a: 'It depends on your employer. Large hospitals are in Malé, while atoll hospitals and resort clinics are on other islands. Your offer letter states your posting, and transfers depend on your contract [VERIFY]. Nursing jobs in Maldives outside Malé often include housing.' },
        { q: 'Can my family join me?', a: 'Some contracts allow dependants, but rules and housing vary by employer [VERIFY].' },
      ] },

      contact('Start Your Maldives Nursing Career', 'Speak to a Mountbell nurse adviser about registered nurse jobs in Maldives. A free assessment tells you whether you qualify, how the licence exam works, which hospitals are hiring, which nurse visa Maldives steps apply and how long it will take.', nurseWa('the Maldives')),
    ],
    related: ['/nursing-careers/', '/nursing-careers/australia/', '/nursing-careers/malta/'],
    cta: false,
  },

  {
    path: '/nursing-careers/denmark/', crumb: 'Nurses in Denmark', img: 'denmark', accent: 'var(--blue)',
    title: 'Nurse Jobs in Denmark for Indians: 2026 Rules | Mountbell',
    description: 'Nurse jobs in Denmark for Indians are paused until 31 Dec 2026. See the quota rules, who is exempt, how to prepare and the best alternatives. Free advice.',
    label: 'Nursing Careers › Denmark',
    h1: 'Nurse Jobs in Denmark for Indians — 2026 Status, Rules and What to Do Now',
    lede: 'Nurse jobs in Denmark for Indians are on hold for most applicants right now. Denmark set its quota for non-EU nurse authorisation applications at zero from 7 October 2025 to 31 December 2026, so new applications from Indian-trained nurses are generally not accepted. Mountbell, an MEA-licensed recruiting agent with offices in Thrissur and Kochi, explains what the pause means, who is exempt, how to prepare for a possible reopening and which countries are open today.',
    acts: { check: 'Get free Denmark advice', wa: 'WhatsApp a nurse adviser' },
    wa: nurseWa('Denmark'),
    blocks: [
      { type: 'facts', h2: 'Denmark for Indian Nurses: Status at a Glance', intro: 'These are the facts that shape nurse jobs in Denmark for Indians today, based on the Danish Patient Safety Authority’s published rules.', rows: [
        ['Current Denmark nurse quota', 'zero applications from nurses educated outside the EU/EEA'],
        ['Quota period', '7 October 2025 to 31 December 2026'],
        ['Denmark work permit for nurses', 'no new permits are issued to foreign-trained nurses seeking authorisation under the quota (The Local, October 2025)'],
        ['Next step for nursing jobs in Denmark', 'the authority expects to set a new quota each year and will publish any reopening on its website'],
        ['Exceptions', 'Indian nurses in Denmark who already live there legally, nurses educated in Denmark, EU/EEA nationals and a specially requested healthcare professional with a specific job offer'],
        ['What we recommend', 'start Danish language study now, keep your documents ready and consider an open country in the meantime'],
      ] },

      { type: 'prose', h2: 'Can Indian Nurses Work as a Nurse in Denmark in 2026?', body: [
        'For most Indian nurses, not through a new application in 2026. To work as a nurse in Denmark you need Danish nurse authorisation from the Danish Patient Safety Authority, and that route is closed to new non-EU applicants until the quota period ends. Indian nurses in Denmark who already hold authorisation or legal residence are not affected, and nurses who already hold permits under the authorisation rules can apply for extensions, according to The Local.',
        'The main exception for nurses still in India is a job offer as a specially requested healthcare professional Denmark employers can sponsor [VERIFY the current definition with the Danish Patient Safety Authority]. These cases are rare, and no agency can promise one.',
        'If you were planning nurse jobs in Denmark for Indians this year, the honest advice is simple: prepare for Denmark, but apply somewhere that is open now.',
      ] },

      { type: 'steps', h2: 'Denmark Nurse Quota: Timeline and Key Dates', intro: 'Here is how the Denmark nurse quota came about and what it means for nurse jobs in Denmark for Indians.', items: [
        { title: '2024', text: 'Denmark signed an agreement with India and the Philippines to recruit more health workers (The Local)' },
        { title: '2024 to May 2025', text: 'about 7,310 non-EU nurses applied for Danish authorisation, according to Berlingske, as reported by The Local' },
        { title: 'August 2025', text: 'the government announced plans to stop recruiting nurses from countries such as India, Bangladesh and Nepal' },
        { title: '7 October 2025', text: 'the zero quota started, and pending cases were generally rejected' },
        { title: '31 December 2026', text: 'the current quota period ends' },
        { title: 'Early 2027', text: 'watch for a new quota announcement from the Danish Patient Safety Authority [VERIFY timing]' },
      ], after: [
        'Denmark nurse rules 2026 can change at short notice. We check the official page regularly and update this Denmark nurse timeline when anything changes.',
      ] },

      { type: 'steps', h2: 'How Danish Nurse Authorisation Works When Applications Reopen', intro: 'If nurse jobs in Denmark for Indians reopen, the usual route for nurses educated outside the EU has followed these stages, with typical times [VERIFY each step before relying on it]:', items: [
        { title: 'Application and document check (2 to 4 months)', text: 'you submit your qualification, registration and experience records; we provide the list of documents for Danish nurse authorisation' },
        { title: 'Assessment of your education (2 to 6 months)', text: 'the authority compares your training with Danish nursing standards' },
        { title: 'Danish language test (12 to 18 months of study)', text: 'you pass the Danish test for nurses set by the authority, usually at an advanced level [VERIFY level]' },
        { title: 'Danish health law course for nurses (a few weeks)', text: 'a course on Danish healthcare law and patient rights' },
        { title: 'Adaptation period for nurses in Denmark (around 6 months)', text: 'supervised work in a Danish hospital or care setting [VERIFY]' },
        { title: 'Full authorisation', text: 'you can work as a registered nurse' },
      ], after: [
        'Seen end to end, this Denmark nurse job process has often taken two years or more, mainly because of language study. That is how to become a nurse in Denmark once applications reopen. When applications were open, BSc nurses in Denmark generally had a clearer path than GNM nurses in Denmark, whose training was assessed case by case [VERIFY].',
      ] },

      { type: 'prose', h2: 'Danish Language for Nurses: Start Early', body: [
        'Danish language for nurses is the biggest time investment in any Denmark plan, and you can start it now.',
      ], list: [
        'Time needed: usually 12 to 18 months from beginner level to the level needed for authorisation [VERIFY]',
        'Why start now: language study is the slowest step, so starting during the pause can save a year later',
        'Useful either way: Danish also helps with nurse jobs in Scandinavia for Indians if other Nordic countries open routes',
      ] },

      { type: 'steps', h2: 'What to Do Now: 5 Practical Steps', intro: 'These steps keep nurse jobs in Denmark for Indians within reach for later.', items: [
        { title: 'Check your status', text: 'some nurses fall under an exception; a free review tells you if you do' },
        { title: 'Register your interest', text: 'we keep a Denmark list and contact you if Denmark nursing applications 2027 reopen' },
        { title: 'Prepare documents', text: 'transcripts, Kerala Nurses and Midwives Council registration and experience letters take time to collect' },
        { title: 'Keep your experience current', text: 'recent clinical work helps you work as a nurse in Denmark or any other country later' },
        { title: 'Consider alternatives to Denmark for nurses', text: 'Germany, Malta and Australia are open to Kerala nurses today' },
      ] },

      { type: 'prose', h2: 'Alternatives to Denmark for Nurses', body: [
        'While nurse jobs in Denmark for Indians are paused, Germany is the closest match: it welcomes Kerala nurses, uses German instead of Danish and offers a route to permanent residence. Malta works in English and moves faster. Australia offers permanent residence for strong English scorers.',
        go(['Germany nurse recruitment from Kerala', '/nursing-careers/germany/'], ['Malta nurse jobs for Indians', '/nursing-careers/malta/'], ['Australia nurse migration from Kerala', '/nursing-careers/australia/'], ['Registered nurse jobs in Maldives', '/nursing-careers/maldives/']),
      ] },

      { type: 'prose', h2: 'Nursing Jobs in Denmark: Demand and Pay', body: [
        'Nursing jobs in Denmark sit in public hospitals run by the five regions and in municipal elderly care. In 2024, a University of Southern Denmark health economist estimated a nursing shortage in Denmark of 4,000 to 5,000 hospital nurses (Euronews, February 2024).',
      ], list: [
        'Danish hospital nurse jobs: wards, intensive care and emergency departments in regional hospitals',
        'Elderly care nurse jobs Denmark: municipal care homes and home care',
        'Pay: nurse salary in Denmark follows collective agreements; check current rates when the route reopens [VERIFY]',
      ], after: [
        'Demand can return quickly, so Denmark nurse recruitment from India, and new Kerala nurses in Denmark, may resume in a future quota year.',
      ] },

      { type: 'prose', h2: 'Family and Residence', body: [
        'These rules apply only to Indian nurses in Denmark who already hold, or later receive, permits under the authorisation scheme [VERIFY current rules].',
      ], list: [
        'Family reunification for nurses in Denmark: family members of nurses who received permits before the quota started can still apply; those without a residence permit as of 7 October 2025 will not be granted one (The Local)',
        'Permanent residence for nurses in Denmark: possible after several years of legal residence and work under Danish rules [VERIFY]',
      ], after: [go(['Dependent and Family Visa', '/services/dependent-visa/'], ['Denmark work visa hub', '/countries/denmark/'])] },

      { type: 'prose', h2: 'How Mountbell Supports You', body: [
        `Mountbell holds Ministry of External Affairs Recruiting Agent Licence ${licence}, which you can check on the <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">eMigrate portal</a>. For nurse jobs in Denmark for Indians, our role during the pause is advice, not applications.`,
      ], list: [
        'Free Denmark nurse eligibility for Indians check, including the exceptions',
        'A Denmark nurse application status update whenever the official rules for nursing jobs in Denmark change',
        'Help planning Danish study while you work elsewhere',
        'Ethical nurse recruitment Denmark standards: we do not take fees for Denmark applications while the quota is zero [CONFIRM], and we never promise a job or permit',
        'Denmark nursing jobs for Kerala nurses will be our priority list if the quota reopens',
        'Practical guidance on life in Denmark for Indian nurses, so you know what to expect before you commit',
      ] },

      { type: 'faq', h2: 'Frequently Asked Questions', items: [
        { q: 'Are nurse jobs in Denmark for Indians open in 2026?', a: 'For most Indian nurses, no. The Denmark nurse quota for non-EU nurse authorisation applications is zero from 7 October 2025 to 31 December 2026. Exceptions include nurses already living legally in Denmark and specially requested healthcare professionals with a specific job offer.' },
        { q: 'When will Denmark reopen for Indian nurses?', a: 'No reopening date has been announced. The Danish Patient Safety Authority expects to set a new quota each year and will publish any change on its website. We update this page as soon as nurse jobs in Denmark for Indians reopen.' },
        { q: 'Do I need Danish to work as a nurse in Denmark?', a: 'Yes. Danish nurse authorisation requires a Danish language test, usually at an advanced level [VERIFY]. Most nurses need 12 to 18 months of study, so starting now is the best use of the pause.' },
        { q: 'Can I still apply if I have a job offer?', a: 'Only if you qualify as a specially requested healthcare professional under the authority’s rules [VERIFY]. A normal job offer is not enough while the quota is zero. Indian nurses in Denmark on existing permits can usually apply for extensions instead [VERIFY].' },
        { q: 'What happened to applications submitted before the Denmark nurse quota?', a: 'Unprocessed applications from 7 October 2025 were generally rejected, with fees refunded where the education had not yet been approved. Cases where the education was approved and legal residence was confirmed continued.' },
        { q: 'Which country should I choose instead?', a: 'Until nursing jobs in Denmark reopen, Germany is the closest European alternative and offers permanent residence. Malta works in English, Australia suits strong English scorers, and the Maldives is the fastest move.' },
      ] },

      contact('Talk to a Nurse Adviser About Denmark', 'Speak to a Mountbell nurse adviser about nurse jobs in Denmark for Indians. A free call tells you whether any exception applies to you, how to prepare for a possible reopening and which open country fits your profile today.', nurseWa('Denmark')),
    ],
    related: ['/nursing-careers/', '/nursing-careers/germany/', '/nursing-careers/malta/'],
    cta: false,
  },
];

export const nursing: Page[] = publish(pagesRaw);
