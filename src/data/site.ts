// Single source of truth for business facts and homepage content.
// Anything set to null is hidden on the live page until a verified value is supplied.

export const site = {
  name: 'Mount Bell',
  legalName: 'Mount Bell Global Studies',
  url: 'https://mountbell.com',
  email: 'edu@mountbell.com',
  // Shows labelled slots for content the client still has to supply (team, videos).
  // Set to false before launch; empty slots are then left out of the page.
  draft: false,

  licence: {
    authority: 'Ministry of External Affairs, Government of India',
    type: 'Recruiting Agent licence',
    number: 'B-1921/KER/PART/100/5/10348/2023',
    verifyUrl: 'https://emigrate.gov.in/',
  },

  phone: { display: '+91 92070 14777', tel: '+919207014777' },
  whatsapp: '919207014777',
  // Leave empty to hand the lead to WhatsApp. Set to a form endpoint (CRM, Formspree,
  // a serverless function) to POST the lead as JSON as well.
  formEndpoint: '',

  // Verified figures only. null = not shown.
  foundedYear: 2017 as number | null,
  founder: null as { name: string; role: string } | null,
  peoplePlaced: null as string | null,
  googleRating: null as { score: string; count: string; url: string } | null,
  heroVideoId: null as string | null, // YouTube ID of the 60–90 second founder video

  social: {
    facebook: 'https://www.facebook.com/share/1Fhm8Y4NeM/',
    instagram: 'https://www.instagram.com/mountbellglobalstudies',
    linkedin: 'https://www.linkedin.com/company/mountbell/',
    youtube: 'https://www.youtube.com/@MountBellGlobalStudies',
  },

  // Countries the company operates in, as the client wants it presented.
  presence: 'India and the UAE',

  // Kochi is listed first and is always the main branch: the MEA licence authorises the Kochi office.
  // The UAE office is added here once the client sends its address.
  offices: [
    {
      city: 'Kochi',
      label: 'Main branch',
      lines: ['Mathewsons Centre Point, 5th Floor', 'Metro Pillar No. 485, Edapally Road', 'Palarivattom P.O., Mamangalam', 'Kochi, Kerala 682025'],
      street: 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Edapally Road, Mamangalam',
      postalCode: '682025',
      phones: [
        { display: '+91 92070 14777', tel: '+919207014777' },
        { display: '+91 97785 72690', tel: '+919778572690' },
      ],
      hours: null as string | null,
      mapQuery: 'Mathewsons Centre Point, Metro Pillar No. 485, Edapally Road, Mamangalam, Kochi, Kerala 682025',
    },
    {
      city: 'Thrissur',
      label: 'Branch office',
      lines: ['Fair Trade Center, TUDA Road', 'Ashwini Junction', 'Thrissur, Kerala 680022'],
      street: 'Fair Trade Center, TUDA Road, Ashwini Junction',
      postalCode: '680022',
      phones: [{ display: '+91 487 222 1317', tel: '+914872221317' }],
      hours: null as string | null,
      mapQuery: 'Fair Trade Center, TUDA Road, Ashwini Junction, Thrissur, Kerala 680022',
    },
  ],

  areasServed: ['Thrissur', 'Ernakulam', 'Kozhikode', 'Kannur', 'Kollam', 'Kottayam', 'Malappuram', 'Palakkad', 'Thiruvananthapuram', 'Idukki', 'Alappuzha', 'Wayanad', 'Kasaragod', 'Pathanamthitta'],

  // name, role, years, credentials, languages, photo (path in /public)
  team: [] as { name: string; role: string; years: string; credentials: string; languages: string; photo: string }[],
};

export type Goal = 'pr' | 'work' | 'train' | 'seeker';

export const goals: { id: Goal; label: string; text: string; href: string }[] = [
  { id: 'pr', label: 'Migrate / PR', text: 'Permanent residence through points-tested skilled migration, planned for you and your family.', href: '/services/pr-visa/' },
  { id: 'work', label: 'Work Visa', text: 'An employer-sponsored job and work permit in healthcare, skilled trades or general category roles.', href: '/services/work-visa/' },
  { id: 'train', label: 'Study and Train', text: 'Training that leads to work: Ausbildung in Germany, or the bridging programme for nurses in Malta.', href: '/countries/germany/ausbildung/' },
  { id: 'seeker', label: 'Job Seeker Route', text: 'Travel first and look for work on the ground with Germany’s Opportunity Card.', href: '/countries/germany/opportunity-card/' },
];

// A country without its own page yet links to its row on the countries hub (/countries/#slug).
// A programme without `href` has no page yet and is shown as plain text.
// Nurse pages live under /nursing-careers/ only.
export const countries: {
  name: string; code: string; airport: string; href: string; goals: Goal[]; text: string;
  programmes: { label: string; href?: string }[];
}[] = [
  {
    name: 'Australia', code: 'AU', airport: 'SYD', href: '/countries/australia/', goals: ['pr', 'work'],
    text: 'Points-tested skilled visas and employer-sponsored routes for healthcare, trade, IT and teaching professionals. We manage your skills assessment, registration, expression of interest and visa application from Kerala.',
    programmes: [
      { label: 'PR and skilled migration', href: '/countries/australia/' },
      { label: 'Nurses', href: '/nursing-careers/australia/' },
      { label: 'Welders' },
      { label: 'Mechanics' },
      { label: 'CNC machinists' },
      { label: 'IT professionals' },
      { label: 'Teachers' },
    ],
  },
  {
    name: 'Canada', code: 'CA', airport: 'YYZ', href: '/countries/#canada', goals: ['pr'],
    text: 'Permanent residence pathways for skilled workers through federal and provincial programmes. We check your profile against current draw scores before you spend on tests or credential evaluation.',
    programmes: [{ label: 'Migration and PR' }],
  },
  {
    name: 'Germany', code: 'DE', airport: 'FRA', href: '/countries/germany/', goals: ['work', 'train', 'seeker'],
    text: 'The Opportunity Card for job seekers, Ausbildung paid training, and recognised jobs for physiotherapists, vehicle mechanics and drivers. German coaching is arranged alongside your file, so the exam and the paperwork move together.',
    programmes: [
      { label: 'Opportunity Card', href: '/countries/germany/opportunity-card/' },
      { label: 'Ausbildung', href: '/countries/germany/ausbildung/' },
      { label: 'Nurses', href: '/nursing-careers/germany/' },
      { label: 'Physiotherapists' },
      { label: 'Vehicle mechanics' },
      { label: 'Drivers' },
    ],
  },
  {
    name: 'Denmark', code: 'DK', airport: 'CPH', href: '/countries/#denmark', goals: ['work'],
    text: 'Programmes for dentists, covering Danish authorisation, the language requirement and employer matching. We explain how long authorisation takes and what to expect while you complete it.',
    programmes: [
      { label: 'Dentists' },
      { label: 'Nurses', href: '/nursing-careers/denmark/' },
    ],
  },
  {
    name: 'Malta', code: 'MT', airport: 'MLA', href: '/countries/malta/', goals: ['work', 'train'],
    text: 'An English-speaking EU country with work routes for care workers, physiotherapists, AT and OT staff, allied health and radiology professionals, including the bridging programme that leads to council registration.',
    programmes: [
      { label: 'Nurses and bridging programme', href: '/nursing-careers/malta/' },
      { label: 'Physiotherapists' },
      { label: 'AT and OT' },
      { label: 'Allied health' },
      { label: 'Radiology' },
    ],
  },
  {
    name: 'Maldives', code: 'MV', airport: 'MLE', href: '/countries/#maldives', goals: ['work'],
    text: 'Employer-sponsored work visas for speech therapists, occupational therapists and lab technicians in hospitals and clinics, a short flight from Kerala.',
    programmes: [
      { label: 'Registered nurses', href: '/nursing-careers/maldives/' },
      { label: 'Speech therapists' },
      { label: 'Occupational therapists' },
      { label: 'Lab technicians' },
    ],
  },
  {
    name: 'Netherlands', code: 'NL', airport: 'AMS', href: '/countries/#netherlands', goals: ['work'],
    text: 'General category jobs with a Dutch work permit. We explain the contract, accommodation and real cost of living before you commit.',
    programmes: [{ label: 'General category' }],
  },
  {
    name: 'Europe', code: 'EU', airport: 'RIX', href: '/countries/#europe', goals: ['work'],
    text: 'Skilled trade and general jobs in Latvia, Poland, Lithuania and Bulgaria for welders, CNC machinists, drivers, electricians, HVAC technicians, fitters, spray painters and delivery staff, with every employer and contract verified first.',
    programmes: [
      { label: 'CNC machinists' }, { label: 'Welders' }, { label: 'Drivers' }, { label: 'Electricians' },
      { label: 'HVAC' }, { label: 'Fitters' }, { label: 'Spray painters' }, { label: 'Delivery' },
    ],
  },
];

// Profession pages are not built yet; each group links to its section on the overseas jobs hub.
export const professionGroups: { id: string; name: string; text: string; links: { label: string; href?: string }[] }[] = [
  {
    id: 'healthcare', name: 'Healthcare and Allied Health',
    text: 'For physiotherapists, dentists, occupational and speech therapists, radiographers and lab technicians. Each country has its own registration body and language test, so we match you to a registration route you can realistically clear, then plan the exam, documents and job together.',
    links: [
      { label: 'Nurses', href: '/nursing-careers/' },
      { label: 'Physiotherapists' }, { label: 'Dentists' }, { label: 'Occupational therapists' },
      { label: 'Speech therapists' }, { label: 'Lab technicians' }, { label: 'Radiographers' },
    ],
  },
  {
    id: 'trades', name: 'Skilled Trades and Technical',
    text: 'For welders, CNC machinists, mechanics, electricians, HVAC technicians, fitters and spray painters. Australia assesses trade skills formally, while Germany and several European countries hire experienced tradespeople directly. We tell you which route fits your certificates and experience before you apply.',
    links: [
      { label: 'Welders' }, { label: 'CNC machinists' }, { label: 'Mechanics' }, { label: 'Electricians' },
      { label: 'HVAC technicians' }, { label: 'Fitters' }, { label: 'Spray painters' },
    ],
  },
  {
    id: 'drivers', name: 'Drivers, Delivery and General Category',
    text: 'For licensed drivers, delivery staff and general category workers. Openings are mainly in Germany, the Netherlands and Eastern Europe. We explain licence conversion, the language you need and the real cost of living before you commit to anything.',
    links: [{ label: 'Drivers' }, { label: 'Delivery jobs' }, { label: 'General category' }],
  },
  {
    id: 'it-teachers', name: 'IT Professionals and Teachers',
    text: 'For software, network and data professionals, and for qualified school teachers. Australia is the main destination, through points-tested skilled migration. We estimate your points honestly and tell you whether an invitation is realistic before you spend on assessments.',
    links: [
      { label: 'IT professionals' }, { label: 'Teachers' },
      { label: 'Australia PR and skilled migration', href: '/countries/australia/' },
    ],
  },
];

export const services = [
  { name: 'PR Visa and Skilled Migration', href: '/services/pr-visa/', text: 'Points-based permanent residence handled by PR visa consultants in Kerala: skills assessment, expression of interest and state nomination.' },
  { name: 'Skills Assessment', href: '/services/skills-assessment/', text: 'Preparing and lodging your application with assessing authorities (VETASSESS, ACS, TRA, AITSL, Engineers Australia) and credential recognition.' },
  { name: 'Work Visa', href: '/services/work-visa/', text: 'Employer-sponsored visas and work permits. We verify the job offer and the contract before your file is prepared.' },
  { name: 'Dependent Visa', href: '/services/dependent-visa/', text: 'Spouse and child visas, family reunification and relationship evidence support.' },
  { name: 'Visitor Visa', href: '/services/visitor-visa/', text: 'Tourist, business and family visit visas for Europe, Schengen, the UK, US, Canada and Australia.' },
  { name: 'Visa Documentation', href: '/services/visa-documentation/', text: 'Checklists, forms, medicals, appointments and interview preparation, checked before anything goes to an authority.' },
  { name: 'Nursing Careers', href: '/nursing-careers/', text: 'Registration, language exams and placement for nurses in Australia, Germany, Malta, the Maldives and Denmark.' },
  { name: 'Overseas Jobs', href: '/overseas-jobs/', text: 'Recruitment for verified employers under our government licence. You see the employer, salary and contract in writing first.' },
  { name: 'Language & Test Preparation', href: '/services/language-test-preparation/', text: 'OET, IELTS, PTE coaching and German classes A1 to B2 in Thrissur and online.' },
  { name: 'Free Immigration Consultation', href: '/free-immigration-assessment/', text: 'A one-to-one review of your profile against current rules: where you qualify, the route, the cost and the timeline.' },
];

// Service cards on the homepage, in the order of the homepage content brief. A card without `href` has no page yet.
export const homeServices: { name: string; text: string; href?: string }[] = [
  { name: 'PR Visa and Skilled Migration', href: '/services/pr-visa/', text: 'Points-based permanent residence for you and your family, from skills assessment and expression of interest to state nomination and the final visa, with a skilled migration consultant in Kerala managing each stage.' },
  { name: 'Work Visa', href: '/services/work-visa/', text: 'Employer-sponsored visas and work permits. We verify the job offer, the employer and the contract in writing before your file is prepared, so you never pay for a job that does not exist.' },
  { name: 'Skills Assessment', href: '/services/skills-assessment/', text: 'Credential recognition with the right body, such as VETASSESS, ACS, Engineers Australia, TRA or AITSL, so your qualification and experience count abroad.' },
  { name: 'Visa Documentation', href: '/services/visa-documentation/', text: 'Checklists, forms, medicals, appointments and embassy interview preparation from visa consultants in Kerala who file these applications every week.' },
  { name: 'Dependent and Family Visa', href: '/services/dependent-visa/', text: 'Spouse and children visas planned with your main application, so your family can join you without avoidable delays or a second round of paperwork.' },
  { name: 'Visitor Visa', href: '/services/visitor-visa/', text: 'Tourist and business visit visas with a full document check before you apply, to reduce the risk of a refusal on your record.' },
  { name: 'Language and Test Preparation', href: '/services/language-test-preparation/', text: 'OET, IELTS, PTE coaching and German classes A1 to B2 from our Thrissur centre and online, planned so that your exam date and your application move together.' },
  { name: 'Study Abroad', href: '/study-abroad/', text: 'One focused service for students who want a course that leads to work rights and a realistic route to a job after graduation.' },
];

// Nursing routes shown in the Nursing Careers section. `img` is a file slug in /public/img/dest.
export const nursing = [
  { img: 'australia', place: 'Australia', text: 'AHPRA registration, skills assessment and a skilled visa.', href: '/nursing-careers/australia/' },
  { img: 'germany', place: 'Germany', text: 'Recognition of your qualification, with German language training.', href: '/nursing-careers/germany/' },
  { img: 'denmark', place: 'Denmark', text: 'Danish authorisation, the language requirement and employer matching.', href: '/nursing-careers/denmark/' },
  { img: 'malta', place: 'Malta', text: 'Council registration and the bridging programme, in an English-speaking EU country.', href: '/nursing-careers/malta/' },
  { img: 'maldives', place: 'Maldives', text: 'Hospital and clinic jobs a short flight from Kerala.', href: '/nursing-careers/maldives/' },
  { img: 'europe', place: 'United Kingdom', text: 'NMC registration, CBT, OSCE and the Health and Care Worker visa.', href: '/nursing-careers/uk/' },
];

// Online language training, run as Mount Bell's own educational service. German and Danish lead
// because they feed the overseas employment programmes. `native` is the language's own name.
export const training: { id: string; name: string; native?: string; text: string; links?: { label: string; href: string }[] }[] = [
  { id: 'german', name: 'German', native: 'Deutsch', text: 'For nurses, Ausbildung trainees and Opportunity Card applicants preparing for work in Germany.', links: [
    { label: 'Nurses in Germany', href: '/nursing-careers/germany/' },
    { label: 'Ausbildung', href: '/countries/germany/ausbildung/' },
    { label: 'Opportunity Card', href: '/countries/germany/opportunity-card/' },
  ] },
  { id: 'danish', name: 'Danish', native: 'Dansk', text: 'For nurses and dentists working towards Danish authorisation and a job in Denmark.', links: [
    { label: 'Nurses in Denmark', href: '/nursing-careers/denmark/' },
  ] },
  { id: 'ielts', name: 'IELTS preparation', text: 'An English test accepted for skilled migration and professional registration.' },
  { id: 'oet', name: 'OET preparation', text: 'The English test built for nurses and other healthcare professionals.' },
  { id: 'english', name: 'English language and crash courses', text: 'General English, and short intensive courses when you need to prepare quickly.' },
];

export const supportChips = [
  'Skills assessment', 'Credential recognition (AHPRA, Anerkennung, Malta registration)',
  'IELTS, OET, PTE and German training', 'Documentation', 'Pre-departure and post-landing support',
];

export const steps = [
  { title: 'Free profile and eligibility assessment', text: 'We review your age, education, experience and language level, and tell you plainly where you qualify.' },
  { title: 'Country and programme matching', text: 'You get a shortlist of realistic options with costs and requirements side by side.' },
  { title: 'Documents, skills assessment and credential recognition', text: 'Every paper is prepared and checked before it reaches an authority.' },
  { title: 'Language and exam preparation', text: 'OET, IELTS, PTE or German coaching runs alongside your file.' },
  { title: 'Visa filing or employer matching', text: 'We lodge the application or introduce you to verified employers, depending on the route.' },
  { title: 'Pre-departure and post-landing support', text: 'Travel, accommodation and first-week guidance, so you are not alone on arrival.' },
];

export const reasons = [
  { title: 'Licensed and registered', text: 'We hold a Recruiting Agent licence from the Ministry of External Affairs and print the number on every page, so you can check it yourself.' },
  { title: 'Honest eligibility advice', text: 'If you do not qualify, we say so at the first meeting. We never promise a job or a visa to win a client.' },
  { title: 'Healthcare and skilled-trade specialists', text: 'Our programmes are built around nurses, therapists, technicians and tradespeople, not general student admissions.' },
  { title: 'In-house language support', text: 'OET, IELTS, PTE and German preparation is arranged by the same team that handles your file.' },
  { title: 'Face-to-face offices', text: 'Unlike an online-only overseas consultancy in Kerala, we let you meet your consultant in Kochi or Thrissur and bring your family along.' },
  { title: 'Transparent Fees', text: 'Our immigration services in Kerala are priced per programme. Before you pay anything, you get a written fee schedule showing our service fee, what it includes, the government and exam charges paid separately, and the refund terms. No hidden charges.' },
];

// Client reviews carried over from the current mountbell.com site.
export const reviews = [
  { name: 'Feby Siby', text: 'They were very supportive from the beginning. They are very transparent from the start till the end. They helped me to achieve my dream by making the process so easy and simple.' },
  { name: 'Jincy Thomas', text: 'Got my visa cleared very smoothly. Very caring staff who are very much accessible and who were spontaneous in responding to my queries.' },
  { name: 'Neenu Abraham', text: 'I chose Mount Bell after doing so much study on all agencies. The amount of patience and dedication they put into helping us is commendable.' },
];

export const updates = [
  { tag: 'Guide', img: 'kerala', title: 'How to Identify Fake Immigration Agents', excerpt: 'Eight checks to run before you pay any recruiter.', href: '/resources/avoid-visa-fraud/' },
  { tag: 'Germany', img: 'germany', title: 'Opportunity Card: Who Qualifies and How the Points Work', excerpt: 'The six-point rule, with worked examples from Kerala.', href: '/countries/germany/opportunity-card/' },
  { tag: 'Malta', img: 'malta', title: 'The Bridging Programme for Nurses, Step by Step', excerpt: 'What the course covers and how registration follows.', href: '/nursing-careers/malta/' },
];

// `href` is left out where the brief gives no link or the target page is not built yet.
export const faqs: { q: string; a: string; href?: string; link?: string }[] = [
  {
    q: 'Who are the best immigration consultants in Kerala?',
    a: 'The right immigration consultants in Kerala are the ones you can verify: a government licence number, written fees and honest advice about your chances. Mount Bell is MEA licensed and focuses on skilled migration for healthcare, trade, IT and teaching professionals.',
  },
  {
    q: 'How to choose an immigration consultant in Kerala?',
    a: 'Check the MEA licence number on the eMigrate portal, ask for fees in writing, and insist on receipts, a contract and the employer’s details before you pay. A genuine immigration agency in Kerala answers all of this at the first meeting. No real overseas job consultant in Kerala guarantees a visa.',
    href: '/resources/avoid-visa-fraud/', link: 'How to identify fake agents',
  },
  {
    q: 'How much does it cost to work with Mount Bell?',
    a: 'The cost depends on the country and the programme. Your first consultation is free. Before you pay, you receive a written fee schedule showing our service fee, what it includes, and the government, exam and assessment charges paid separately.',
    href: '/fees/', link: 'How our fees work',
  },
  {
    q: 'Which country is best to migrate to from Kerala?',
    a: 'It depends on your profession, age, language level and whether you want permanent residence or a work contract. Tradespeople often look at Australia and Europe, while families wanting PR choose Australia or Canada. A free assessment at our immigration consultancy in Kerala gives you a shortlist that fits.',
    href: '/countries/', link: 'Compare countries',
  },
  {
    q: 'Which countries can nurses from Kerala migrate to?',
    a: 'Through Mount Bell, nurses from Kerala can move to Australia, Germany, Denmark, Malta and the Maldives. Each has its own registration body and language requirement, so the right choice depends on your experience, exam scores and start date.',
    href: '/nursing-careers/', link: 'Nursing careers abroad',
  },
  {
    q: 'Do I need IELTS, OET or German to work abroad?',
    a: 'It depends on the country and the role. Australia asks for an English test such as IELTS, OET or PTE. Germany generally expects German for healthcare roles, while the Opportunity Card accepts basic German or good English. We confirm the exact requirement during your assessment.',
  },
  {
    q: 'Is the first consultation free, and can I attend online?',
    a: 'Yes. As an immigration consultancy in Kerala with offices in Kochi and Thrissur, we offer a free first consultation in person, by phone or by video call, including for people in other states or already working abroad.',
    href: '/free-immigration-assessment/', link: 'Book a free consultation',
  },
  {
    q: 'Can I get an immigration consultation in Malayalam?',
    a: 'Yes. We are Malayalam-speaking immigration consultants, and you can choose Malayalam or English for your meeting. Parents and spouses are welcome to join, so the whole family understands the process, costs and timeline before deciding.',
    href: '/contact-us/', link: 'Office addresses',
  },
];

export const professions = [
  'Nurse', 'Physiotherapist', 'Dentist', 'Occupational therapist', 'Speech therapist', 'Lab technician',
  'Radiographer / allied health', 'Welder', 'CNC machinist', 'Mechanic', 'Electrician', 'HVAC technician',
  'Fitter', 'Spray painter', 'Driver', 'Delivery / general category', 'IT professional', 'Teacher', 'Other',
];

// Main menu, in the order set by the site blueprint. The first item of each list is the hub.
export const menu: { label: string; href: string; id: string; items?: { label: string; href: string }[] }[] = [
  { label: 'Services', id: 'services', href: '/services/', items: [
    { label: 'All services', href: '/services/' },
    { label: 'PR visa and skilled migration', href: '/services/pr-visa/' },
    { label: 'Skills assessment', href: '/services/skills-assessment/' },
    { label: 'Work visa', href: '/services/work-visa/' },
    { label: 'Dependent visa', href: '/services/dependent-visa/' },
    { label: 'Visitor visa', href: '/services/visitor-visa/' },
    { label: 'Visa documentation', href: '/services/visa-documentation/' },
    { label: 'Language & test preparation', href: '/services/language-test-preparation/' },
    { label: 'Free immigration consultation', href: '/free-immigration-assessment/' },
  ] },
  { label: 'Nursing Careers', id: 'nursing', href: '/nursing-careers/', items: [
    { label: 'Nursing careers abroad', href: '/nursing-careers/' },
    { label: 'Nurses in Australia', href: '/nursing-careers/australia/' },
    { label: 'Nurses in Germany', href: '/nursing-careers/germany/' },
    { label: 'Nurses in Malta', href: '/nursing-careers/malta/' },
    { label: 'Nurses in the Maldives', href: '/nursing-careers/maldives/' },
    { label: 'Nurses in Denmark', href: '/nursing-careers/denmark/' },
  ] },
  { label: 'Countries', id: 'countries', href: '/countries/' },
  { label: 'Overseas Jobs', id: 'jobs', href: '/overseas-jobs/', items: [
    { label: 'All overseas jobs', href: '/overseas-jobs/' },
    ...professionGroups.map((g) => ({ label: g.name, href: `/overseas-jobs/#${g.id}` })),
  ] },
  { label: 'Training', id: 'training', href: '/training/' },
  { label: 'Tools', id: 'tools', href: '/tools/', items: [
    { label: 'All free calculators', href: '/tools/' },
    { label: 'Immigration eligibility calculator', href: '/tools/immigration-eligibility-checker/' },
    { label: 'Australia PR points calculator', href: '/tools/australia-pr-points-calculator/' },
    { label: 'Opportunity Card points calculator', href: '/tools/opportunity-card-points-calculator/' },
  ] },
  { label: 'Resources', id: 'resources', href: '/resources/', items: [
    { label: 'Immigration guides', href: '/resources/' },
    { label: 'FAQs', href: '/resources/faqs/' },
    { label: 'Avoid visa fraud', href: '/resources/avoid-visa-fraud/' },
    { label: 'Success stories', href: '/success-stories/' },
  ] },
  { label: 'About', id: 'about', href: '/about-us/', items: [
    { label: 'About Mount Bell', href: '/about-us/' },
    { label: 'Our team', href: '/about-us/team/' },
    { label: 'Licences and accreditations', href: '/about-us/licences/' },
    { label: 'How it works', href: '/how-it-works/' },
    { label: 'Fees', href: '/fees/' },
  ] },
  { label: 'Contact', id: 'contact', href: '/contact-us/' },
];

// City pages. Only cities with an office or local proof are listed.
export const locations = [
  { city: 'Thrissur', href: '/immigration-consultants-thrissur/' },
  { city: 'Kochi', href: '/immigration-consultants-kochi/' },
  { city: 'Calicut', href: '/immigration-consultants-calicut/' },
  { city: 'Kannur', href: '/immigration-consultants-kannur/' },
  { city: 'Kollam', href: '/immigration-consultants-kollam/' },
  { city: 'Kottayam', href: '/immigration-consultants-kottayam/' },
  { city: 'Malappuram', href: '/immigration-consultants-malappuram/' },
  { city: 'Palakkad', href: '/immigration-consultants-palakkad/' },
  { city: 'Trivandrum', href: '/immigration-consultants-trivandrum/' },
];

// Photo alt text, keyed by the file slug in /public/img/dest.
export const photoAlt: Record<string, string> = {
  kerala: 'Boatman on the Kerala backwaters',
  maldives: 'Aerial view of Malé, capital of the Maldives',
  malta: 'Valletta skyline with the Carmelite church dome, Malta',
  europe: 'House of the Blackheads in Riga, Latvia',
  germany: 'Frankfurt old town and skyline, Germany',
  netherlands: 'Canal bridge at dusk in Amsterdam, Netherlands',
  denmark: 'Nyhavn harbour at sunset in Copenhagen, Denmark',
  canada: 'Toronto skyline at dusk, Canada',
  australia: 'Sydney Opera House and Harbour Bridge at dusk, Australia',
};

// Mount Bell's own photos, built by scripts/images.mjs from assets-src/photos.
export const teamPhotos = [
  { src: '/img/photos/team-kerala-dress.webp', w: 800, h: 800, alt: 'Mount Bell team in matching blue and white Kerala dress at the office' },
  { src: '/img/photos/office-briefing.webp', w: 600, h: 600, alt: 'Group briefing in progress at the Mount Bell office' },
  { src: '/img/photos/office-reception.webp', w: 420, h: 496, alt: 'Reception desk under the Mount Bell Global Studies sign' },
  { src: '/img/photos/team-celebration.webp', w: 800, h: 600, alt: 'Mount Bell team at an office celebration with blue and green balloons' },
];
export const processPhoto = { src: '/img/photos/office-consultation.webp', w: 1000, h: 1120, alt: 'Two women going through details on a laptop in the Mount Bell office lounge' };
// Photo of nurses for the Nursing Careers section (stock, credited on /image-credits/).
// null = the section shows without a photo.
export const nursingPhoto = { src: '/img/photos/nurse-portrait.webp', w: 1000, h: 1250, alt: 'Smiling nurse in blue scrubs holding a stethoscope in a hospital corridor' } as { src: string; w: number; h: number; alt: string } | null;
// Success-story photos for the scrolling columns in the homepage banner (built into /img/stories).
// Every column shows all of them in its own order (see Hero.astro). `h` is the tile height at a width of 320.
export const storyReel: { slug: string; h: number; alt: string }[] = [
  { slug: 'departure-gate', h: 240, alt: 'Group of women with luggage at an airport departure gate' },
  { slug: 'london', h: 400, alt: 'Mount Bell candidate by Tower Bridge in London' },
  { slug: 'arrivals', h: 320, alt: 'Four women smiling under an arrivals sign' },
  { slug: 'seafront', h: 400, alt: 'Five people taking a selfie on a pebble beach by a harbour' },
  { slug: 'night', h: 240, alt: 'Four women with suitcases outside an airport at night' },
  { slug: 'monument', h: 400, alt: 'Two women in front of a monument abroad' },
  { slug: 'luggage-group', h: 320, alt: 'Four women with suitcases ready to travel' },
  { slug: 'trolleys', h: 400, alt: 'Four travellers with loaded luggage trolleys at an airport' },
  { slug: 'terminal', h: 400, alt: 'Five travellers in winter jackets inside an airport terminal' },
  { slug: 'travel-group', h: 320, alt: 'Five travellers with bags and luggage outdoors' },
];
export const galleryPhotos = [
  { src: '/img/photos/candidates-departure-gate.webp', alt: 'Group of women with luggage at an airport departure gate' },
  { src: '/img/photos/candidates-trolleys.webp', alt: 'Four travellers with loaded luggage trolleys at an airport' },
  { src: '/img/photos/candidates-seafront.webp', alt: 'Five people taking a selfie on a pebble beach by a harbour' },
  { src: '/img/photos/candidates-terminal.webp', alt: 'Five travellers in winter jackets inside an airport terminal' },
  { src: '/img/photos/candidates-night.webp', alt: 'Four women with suitcases outside an airport at night' },
];

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
