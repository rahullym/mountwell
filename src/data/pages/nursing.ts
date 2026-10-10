import type { Page } from './types';

const nurseFaq = (country: string) => `Hi Mountbell, I am a nurse and would like to know about working in ${country}.`;

export const nursing: Page[] = [
  {
    path: '/nursing-careers/', crumb: 'Nursing careers', wide: true, accent: 'var(--coral)',
    title: 'Nurse Recruitment Agency in Kerala | Nursing Careers | Mountbell',
    description: 'Mountbell is an MEA-licensed nurse recruitment agency in Kerala. Compare nursing careers in Australia, Germany, Malta, the Maldives and Denmark.',
    label: 'Nursing Careers',
    h1: 'Nurse Recruitment Agency in Kerala for Careers Abroad',
    lede: 'Five countries, five different registration systems. We help GNM and BSc nurses from Kerala choose the one that fits their experience and language level, then manage registration, exams and placement.',
    photo: { src: '/img/dest/australia-wide.webp', alt: 'Sydney Opera House and Harbour Bridge at dusk, Australia', w: 1400, h: 820 },
    wa: 'Hi Mountbell, I am a nurse and would like to know which country suits my profile.',
    blocks: [
      { type: 'links', h2: 'Choose your country', items: [
        { title: 'Nurses in Australia', meta: 'English · PR route', text: 'Registration with the Nursing and Midwifery Board of Australia, a skills assessment and a skilled visa that can lead to permanent residence.', href: '/nursing-careers/australia/' },
        { title: 'Nurses in Germany', meta: 'German · Recognition', text: 'Recognition of your Indian nursing qualification, German language training and a skilled worker visa.', href: '/nursing-careers/germany/' },
        { title: 'Nurses in Malta', meta: 'English · EU', text: 'Council registration and the bridging programme for nurses trained outside the EU, in an English-speaking EU country.', href: '/nursing-careers/malta/' },
        { title: 'Nurses in the Maldives', meta: 'English · Contract', text: 'Hospital and clinic contracts a short flight from Kerala, on an employer-sponsored work visa.', href: '/nursing-careers/maldives/' },
        { title: 'Nurses in Denmark', id: 'denmark', meta: 'Danish · Authorisation', text: 'Authorisation from the Danish Patient Safety Authority and Danish language training before employment. Ask a consultant about current intakes.' },
      ] },
      { type: 'table', h2: 'How the five routes compare', head: ['Country', 'Who registers you', 'Language', 'Type of move'], rows: [
        ['Australia', 'Nursing and Midwifery Board of Australia, through AHPRA. ANMAC assesses skills for migration.', 'English test: IELTS, OET or PTE', 'Skilled migration or employer sponsorship. PR possible.'],
        ['Germany', 'The recognition authority of the federal state where you will work', 'German, usually to B2 for full recognition', 'Recognition, then a skilled worker visa. Long-term residence possible.'],
        ['Malta', 'Council for Nurses and Midwives', 'English', 'Bridging programme and registration, then a work and residence permit.'],
        ['Maldives', 'Maldives Nursing and Midwifery Council', 'English', 'Fixed-term employment contract with a work visa.'],
        ['Denmark', 'Danish Patient Safety Authority', 'Danish', 'Authorisation, then employment and a work permit.'],
      ], note: 'Each body sets and changes its own requirements. We confirm the current rules for your qualification during your assessment.' },
      { type: 'prose', h2: 'Which country is right for you', body: [
        'If permanent residence for your family is the goal and your English is strong, Australia is the usual first choice. If you are willing to learn a language, Germany and Denmark offer secure public-sector style employment in systems that are short of nurses. Malta suits nurses who want to work in the EU in English. The Maldives is the quickest way to gain international experience close to home.',
        'Your years of experience, your speciality and your current exam scores matter as much as your preference. A consultant will go through them with you and rule options in or out.',
      ] },
      { type: 'checks', h2: 'What Mountbell does for nurses', items: [
        { title: 'Eligibility check against the regulator’s rules', text: 'Before you pay for any exam or application.' },
        { title: 'Registration and recognition paperwork', text: 'Transcripts, verification from your nursing council and experience evidence, prepared in the format each body accepts.' },
        { title: 'Language coaching', text: 'OET, IELTS and PTE for English-speaking countries, and German for Germany.' },
        { title: 'Employer matching and interviews', text: 'Under our licence as a recruiting agent, with the contract shown to you in writing.' },
        { title: 'Visa filing and departure', text: 'The visa application, a pre-departure briefing and support in your first weeks.' },
      ] },
      { type: 'faq', h2: 'Questions nurses ask us', items: [
        { q: 'Can GNM nurses work abroad, or only BSc nurses?', a: 'Both can, but the options differ. Some regulators accept a GNM diploma with experience, while others expect a degree or ask for additional assessment. We check your qualification against each country’s current rule before recommending a route.' },
        { q: 'How much experience do I need?', a: 'It depends on the country and the employer. Requirements range from newly registered nurses for some training-linked routes to several years of hospital experience for others. Tell us your experience and speciality and we will show you where you fit.' },
        { q: 'How do I know a nursing job offer is genuine?', a: 'Check that the agent holds an MEA Recruiting Agent licence on the eMigrate portal, and insist on seeing the employer’s name and the contract before paying. Our guide on <a href="/resources/avoid-visa-fraud/">how to identify fake immigration agents</a> has the full list of checks.' },
      ] },
    ],
    related: ['/tools/immigration-eligibility-checker/', '/about/licences/', '/success-stories/'],
  },
  {
    path: '/nursing-careers/australia/', crumb: 'Nurses in Australia', img: 'australia', accent: 'var(--coral)',
    title: 'Australia Nurse Migration from Kerala | Mountbell',
    description: 'Australia nurse migration from Kerala: NMBA and AHPRA registration, ANMAC skills assessment, English tests and the visa options that lead to PR for nurses.',
    label: 'Nursing Careers · Australia',
    h1: 'Australia Nurse Migration from Kerala',
    lede: 'To work as a nurse in Australia you need two things from two different bodies: registration to practise, and a visa to live there. We manage both, in the right order.',
    wa: nurseFaq('Australia'),
    blocks: [
      { type: 'facts', h2: 'At a glance', rows: [
        ['Registration', 'Nursing and Midwifery Board of Australia (NMBA), administered by AHPRA'],
        ['Skills assessment', 'ANMAC, for skilled migration visas'],
        ['Language', 'An English test accepted by the NMBA: IELTS, OET or PTE Academic'],
        ['Visa options', 'Points-tested skilled visas (189, 190, 491) or employer sponsorship'],
        ['Permanent residence', 'Yes, directly or after a provisional visa'],
      ] },
      { type: 'steps', h2: 'The route, step by step', items: [
        { title: 'Self-check with AHPRA', text: 'Internationally qualified nurses start with the NMBA’s online self-check, which places your qualification in an assessment stream.' },
        { title: 'English test', text: 'Meet the NMBA’s English language standard. We set your target score and arrange OET, IELTS or PTE coaching.' },
        { title: 'Assessment for registration', text: 'Depending on your stream, you may need to pass an outcomes-based assessment: a knowledge exam followed by a clinical exam held in Australia.' },
        { title: 'ANMAC skills assessment', text: 'Required for the skilled migration visas. ANMAC assesses your qualification and experience against Australian standards.' },
        { title: 'Expression of interest', text: 'We lodge your profile in SkillSelect and apply for state nomination where it helps.' },
        { title: 'Visa and arrival', text: 'After an invitation or a sponsored job offer, we prepare the visa application and brief you for the move.' },
      ] },
      { type: 'prose', h2: 'Visa options for nurses', body: [
        'Registered nurses are on Australia’s skilled occupation lists, which opens the points-tested visas: the Skilled Independent visa (subclass 189), the Skilled Nominated visa (190) and the Skilled Work Regional visa (491). You need at least 65 points and must be under 45 when invited. Check your score with the <a href="/tools/australia-pr-points-calculator/">Australia PR points calculator</a>.',
        'The other route is employer sponsorship, where a hospital or aged-care provider sponsors you on the Skills in Demand visa. The <a href="/countries/australia/">Australia page</a> explains each visa.',
      ] },
      { type: 'prose', h2: 'What to budget for', body: [
        'The main costs are paid to third parties: the English test, AHPRA and ANMAC fees, the registration exams and travel for the clinical exam, and the visa application charge. They change from year to year, so we give you current figures in a written schedule with your eligibility report. See <a href="/fees/">how our fees work</a>.',
      ] },
      { type: 'faq', h2: 'Questions about nursing in Australia', items: [
        { q: 'Do I need AHPRA registration before I apply for a visa?', a: 'For employer-sponsored visas, yes, because you cannot be employed as a nurse without it. For points-tested visas you need a positive ANMAC assessment to lodge your expression of interest, and registration before you can work. Most nurses run both in parallel.' },
        { q: 'Can I apply after the age of 45?', a: 'Points-tested skilled visas require you to be under 45 when invited. Some employer-sponsored options have different rules. Ask a consultant to look at your case.' },
        { q: 'Can my spouse work in Australia?', a: 'Yes. A spouse included in your visa generally has full work rights.' },
      ] },
    ],
    related: ['/nursing-careers/', '/countries/australia/', '/tools/australia-pr-points-calculator/'],
  },
  {
    path: '/nursing-careers/germany/', crumb: 'Nurses in Germany', img: 'germany', accent: 'var(--amber-deep)',
    title: 'Germany Nurse Recruitment from Kerala | Mountbell',
    description: 'Germany nurse recruitment from Kerala: recognition of your nursing qualification, German language training to B2, employer placement and the nurse visa.',
    label: 'Nursing Careers · Germany',
    h1: 'Germany Nurse Recruitment from Kerala',
    lede: 'Germany hires qualified nurses from India as Pflegefachkraft, on one condition: your qualification must be recognised and you must speak German. We take you through both.',
    wa: nurseFaq('Germany'),
    blocks: [
      { type: 'facts', h2: 'At a glance', rows: [
        ['Recognition', 'Anerkennung, granted by the authority of the federal state where you will work'],
        ['Language', 'German, usually B2 for full recognition as a nurse'],
        ['Employment', 'A contract with a hospital, clinic or care home before you travel'],
        ['Visa', 'A visa for recognition measures, or a skilled worker visa once recognised'],
        ['Long-term stay', 'A settlement permit is possible after a qualifying period of work and residence'],
      ] },
      { type: 'steps', h2: 'The route, step by step', items: [
        { title: 'German from A1', text: 'Language training starts first, because it takes the longest. Classes run alongside your paperwork.' },
        { title: 'Document preparation', text: 'Nursing certificates, transcripts, council registration and experience letters, with certified German translations.' },
        { title: 'Employer interview', text: 'We introduce you to employers. Interviews are usually online, in simple German or with support.' },
        { title: 'Recognition application', text: 'The state authority compares your training with the German nursing qualification and issues a notice.' },
        { title: 'Visa and travel', text: 'With the contract and the notice, you apply for your visa at the German mission.' },
        { title: 'Closing the gap in Germany', text: 'If the notice lists differences, you complete an adaptation period or a knowledge test while working as a nursing assistant, then receive full recognition.' },
      ] },
      { type: 'prose', h2: 'Why recognition usually comes in two stages', body: [
        'Indian nursing training and the German qualification do not match exactly, so most applicants first receive partial recognition. That is normal and it is not a refusal. You make up the difference after arrival, through supervised work on the ward or a knowledge test, and your employer normally supports you through it.',
        'Until full recognition you work and are paid as an assistant. Afterwards you are registered and paid as a qualified nurse.',
      ] },
      { type: 'faq', h2: 'Questions about nursing in Germany', items: [
        { q: 'Can I go to Germany with English only?', a: 'Not as a nurse. Patients, colleagues and the documentation are in German, and the authorities require proof of German before they grant full recognition. If you want to work in English, look at <a href="/nursing-careers/malta/">Malta</a> or <a href="/nursing-careers/australia/">Australia</a>.' },
        { q: 'How long does it take to reach B2 German?', a: 'It depends on how many hours a week you can study. Starting from nothing, most learners need the better part of a year of steady classes. We plan your file around a realistic exam date.' },
        { q: 'Can my family join me?', a: 'Yes. Spouses and children of skilled workers can apply for family reunion visas once you hold your residence permit and meet the housing and income conditions.' },
      ] },
    ],
    related: ['/nursing-careers/', '/countries/germany/', '/countries/germany/ausbildung/'],
  },
  {
    path: '/nursing-careers/malta/', crumb: 'Nurses in Malta', img: 'malta', accent: 'var(--teal)',
    title: 'Malta Nurse Jobs for Indians | Bridging Programme | Mountbell',
    description: 'Malta nurse jobs for Indians: the bridging programme for nurses trained outside the EU, Council for Nurses and Midwives registration and the work permit.',
    label: 'Nursing Careers · Malta',
    h1: 'Malta Nurse Jobs for Indians',
    lede: 'Malta is an EU member state where healthcare runs in English. For nurses from Kerala, the way in is the bridging programme, followed by registration and a work permit.',
    wa: nurseFaq('Malta'),
    blocks: [
      { type: 'facts', h2: 'At a glance', rows: [
        ['Registration', 'Council for Nurses and Midwives, Malta'],
        ['Language', 'English'],
        ['Entry route', 'Bridging programme for nurses trained outside the EU'],
        ['Permit', 'Single permit for work and residence, issued by Identità'],
        ['Region', 'European Union, Schengen area'],
      ] },
      { type: 'prose', h2: 'What the bridging programme is', body: [
        'Nursing qualifications from outside the EU are not recognised automatically in Malta. The bridging programme is the adaptation route: a period of study and supervised practice that brings your training in line with the EU standard, so that you can apply for registration with the Council for Nurses and Midwives.',
        'Course providers, intake dates, duration and fees are set by the institutions and change between intakes. We give you the details of the current intake in writing before you commit.',
      ] },
      { type: 'steps', h2: 'The route, step by step', intro: 'This is the usual order of work. Your consultant confirms the specifics for the current intake.', items: [
        { title: 'Eligibility check', text: 'Your nursing qualification, council registration and experience are checked against the programme’s entry requirements.' },
        { title: 'Admission', text: 'We prepare your application for the bridging programme and your English evidence.' },
        { title: 'Visa and travel', text: 'With your admission confirmed, we prepare the visa file and brief you before departure.' },
        { title: 'Programme and registration', text: 'You complete the programme in Malta and apply for registration with the Council.' },
        { title: 'Employment', text: 'Once registered, you take up a nursing post with a hospital or care provider.' },
        { title: 'Work and residence permit', text: 'Your employer supports the single permit application to Identità.' },
      ] },
      { type: 'prose', h2: 'Other healthcare roles in Malta', body: [
        'Physiotherapists, occupational and assistant therapists and radiographers have their own registration routes. They are covered on the <a href="/countries/malta/">Malta work visa page</a>.',
      ] },
      { type: 'faq', h2: 'Questions about nursing in Malta', items: [
        { q: 'Do I need IELTS or OET for Malta?', a: 'You need to show that you can work in English. Which evidence is accepted, and at what score, is set by the programme and the Council. We confirm the current requirement for your intake.' },
        { q: 'Can I move to another EU country after registering in Malta?', a: 'Registration in Malta does not transfer automatically. Each EU country decides how it treats a non-EU qualification, even one registered in another member state. Plan for Malta as your destination, not a stepping stone.' },
        { q: 'Can I work while I am on the bridging programme?', a: 'That depends on the conditions of your visa and of the programme for that intake. We tell you the current position before you apply, so your budget does not rely on income that may not be allowed.' },
      ] },
    ],
    related: ['/nursing-careers/', '/countries/malta/', '/services/work-visa/'],
  },
  {
    path: '/nursing-careers/maldives/', crumb: 'Nurses in the Maldives', img: 'maldives', accent: 'var(--green-deep)',
    title: 'Registered Nurse Jobs in Maldives for Indian Nurses | Mountbell',
    description: 'Registered nurse jobs in Maldives for nurses from Kerala: hospital and clinic contracts, Maldives nursing council registration and the work visa.',
    label: 'Nursing Careers · Maldives',
    h1: 'Registered Nurse Jobs in the Maldives',
    lede: 'The Maldives is the closest overseas posting to Kerala, and it works in English. It suits nurses who want international experience and a contract that starts soon, without a long language course first.',
    wa: nurseFaq('the Maldives'),
    blocks: [
      { type: 'facts', h2: 'At a glance', rows: [
        ['Registration', 'Maldives Nursing and Midwifery Council'],
        ['Language', 'English'],
        ['Employers', 'Hospitals and clinics in Malé and on the atolls'],
        ['Visa', 'Employer-sponsored work visa'],
        ['Type of move', 'Fixed-term contract, renewable. Not a permanent residence route.'],
      ] },
      { type: 'steps', h2: 'The route, step by step', items: [
        { title: 'Profile check', text: 'Qualification, council registration, speciality and years of experience, matched against open vacancies.' },
        { title: 'Employer interview', text: 'Usually by video call with the hospital or clinic.' },
        { title: 'Offer and contract', text: 'You receive the contract in writing: salary, duty hours, accommodation, leave and flights.' },
        { title: 'Registration and work permit', text: 'The employer applies for your work approval, and your documents go to the nursing council for registration.' },
        { title: 'Travel', text: 'We brief you on arrival formalities and what to expect at your posting.' },
      ] },
      { type: 'prose', h2: 'What to check in a Maldives contract', body: [
        'Terms vary a good deal between employers and between Malé and the outer islands. Read these points before you sign, and ask us to explain anything unclear.',
      ], list: [
        'Basic salary and allowances, and the currency they are paid in',
        'Whether accommodation and food are provided or paid as an allowance',
        'Duty hours, overtime and weekly days off',
        'Annual leave and who pays for the flight home',
        'Contract length, notice period and renewal terms',
      ] },
      { type: 'faq', h2: 'Questions about nursing in the Maldives', items: [
        { q: 'Does experience in the Maldives help me move to other countries later?', a: 'It counts as international clinical experience on your CV, and it lets you save while you prepare for the exams that Australia or Europe require. It does not replace the registration requirements of those countries.' },
        { q: 'Do I need IELTS or OET?', a: 'Employers work in English and assess it at interview. A formal test score is not usually the deciding factor, though individual employers may ask for one.' },
        { q: 'Can my family come with me?', a: 'That depends on the employer and the terms of your contract. Ask before you accept the offer if this matters to you.' },
      ] },
    ],
    related: ['/nursing-careers/', '/services/work-visa/', '/resources/avoid-visa-fraud/'],
  },
];
