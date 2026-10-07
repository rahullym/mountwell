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
  foundedYear: null as number | null,
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

  offices: [
    {
      city: 'Thrissur',
      label: 'Head office',
      lines: ['Fair Trade Center, TUDA Road', 'Ashwini Junction', 'Thrissur, Kerala 680022'],
      street: 'Fair Trade Center, TUDA Road, Ashwini Junction',
      postalCode: '680022',
      phones: [{ display: '+91 487 222 1317', tel: '+914872221317' }],
      hours: null as string | null,
      mapQuery: 'Fair Trade Center, TUDA Road, Ashwini Junction, Thrissur, Kerala 680022',
    },
    {
      city: 'Kochi',
      label: 'Branch office',
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
  ],

  areasServed: ['Thrissur', 'Ernakulam', 'Palakkad', 'Malappuram', 'Kottayam', 'Idukki', 'Alappuzha'],

  // name, role, years, credentials, languages, photo (path in /public)
  team: [] as { name: string; role: string; years: string; credentials: string; languages: string; photo: string }[],
};

export type Goal = 'pr' | 'work' | 'train' | 'seeker';

export const goals: { id: Goal; label: string; text: string; href: string }[] = [
  { id: 'pr', label: 'Migrate / PR', text: 'Permanent residence through points-tested skilled migration, planned for you and your family.', href: '/services/skilled-migration/' },
  { id: 'work', label: 'Work visa', text: 'An employer-sponsored job and work permit in healthcare, skilled trades or general category roles.', href: '/services/work-visa/' },
  { id: 'train', label: 'Study and train', text: 'Training that leads to work: Ausbildung in Germany, or the bridging programme for nurses in Malta.', href: '/countries/germany/ausbildung/' },
  { id: 'seeker', label: 'Job seeker route', text: 'Travel first and look for work on the ground with Germany’s Opportunity Card.', href: '/countries/germany/opportunity-card/' },
];

export const countries: {
  name: string; code: string; airport: string; href: string; goals: Goal[]; text: string;
  programmes: { label: string; href: string }[];
}[] = [
  {
    name: 'Australia', code: 'AU', airport: 'SYD', href: '/countries/australia/', goals: ['pr', 'work'],
    text: 'Points-tested skilled visas and employer-sponsored routes for healthcare, trade, IT and teaching professionals. We manage your skills assessment, professional registration, expression of interest and visa application from Kerala, start to finish.',
    programmes: [
      { label: 'Skilled migration', href: '/countries/australia/skilled-migration/' },
      { label: 'Nurses', href: '/countries/australia/nurses/' },
      { label: 'Welders', href: '/countries/australia/welders/' },
      { label: 'Mechanics', href: '/countries/australia/mechanics/' },
      { label: 'CNC machinists', href: '/countries/australia/cnc-machinists/' },
      { label: 'IT', href: '/countries/australia/it/' },
      { label: 'Teachers', href: '/countries/australia/teachers/' },
    ],
  },
  {
    name: 'Canada', code: 'CA', airport: 'YYZ', href: '/countries/canada/', goals: ['pr'],
    text: 'Migration and immigration pathways to permanent residence for skilled workers and their families. We check your score, plan your language tests and credential assessment, and prepare a complete, accurate application.',
    programmes: [{ label: 'Migration and immigration', href: '/countries/canada/' }],
  },
  {
    name: 'Germany', code: 'DE', airport: 'FRA', href: '/countries/germany/', goals: ['work', 'train', 'seeker'],
    text: 'The Opportunity Card for job seekers, Ausbildung vocational training, and recognition routes for healthcare and technical staff. German language training runs alongside your paperwork, so no time is lost.',
    programmes: [
      { label: 'Opportunity Card', href: '/countries/germany/opportunity-card/' },
      { label: 'Ausbildung', href: '/countries/germany/ausbildung/' },
      { label: 'Nurses', href: '/countries/germany/nurses/' },
      { label: 'Physiotherapists', href: '/countries/germany/physiotherapist/' },
      { label: 'Vehicle mechanics and drivers', href: '/countries/germany/mechanics-drivers/' },
    ],
  },
  {
    name: 'Denmark', code: 'DK', airport: 'CPH', href: '/countries/denmark/', goals: ['work'],
    text: 'Authorisation and employment routes for dentists and nurses. We guide you through Danish authorisation, the language requirement and employer matching, with a realistic view of how long each stage takes.',
    programmes: [
      { label: 'Dentists', href: '/countries/denmark/dentists/' },
      { label: 'Nurses', href: '/countries/denmark/nurses/' },
    ],
  },
  {
    name: 'Malta', code: 'MT', airport: 'MLA', href: '/countries/malta/', goals: ['work', 'train'],
    text: 'Healthcare roles in an English-speaking EU country, including the bridging programme for nurses trained outside the EU. We handle council registration, employer placement and the work permit.',
    programmes: [
      { label: 'Nurses', href: '/countries/malta/nurses/' },
      { label: 'Physiotherapists', href: '/countries/malta/physiotherapist/' },
      { label: 'Bridging programme', href: '/countries/malta/bridging-programme/' },
      { label: 'AT and OT', href: '/countries/malta/at-ot/' },
      { label: 'Allied health', href: '/countries/malta/allied-health/' },
      { label: 'Radiology', href: '/countries/malta/radiology/' },
    ],
  },
  {
    name: 'Maldives', code: 'MV', airport: 'MLE', href: '/countries/maldives/', goals: ['work'],
    text: 'Hospital and clinic jobs a short flight from Kerala, with employer-sponsored work visas. A practical first overseas posting for healthcare professionals who want international experience close to home.',
    programmes: [
      { label: 'Registered nurses', href: '/countries/maldives/nurses/' },
      { label: 'Speech therapists', href: '/countries/maldives/speech-therapist/' },
      { label: 'Occupational therapists', href: '/countries/maldives/occupational-therapist/' },
      { label: 'Lab technicians', href: '/countries/maldives/lab-technician/' },
    ],
  },
  {
    name: 'Netherlands', code: 'NL', airport: 'AMS', href: '/countries/netherlands/', goals: ['work'],
    text: 'General category work opportunities with Dutch employers. We compare your profile with current openings, explain the permit conditions in plain language and prepare your documents for the employer and the visa.',
    programmes: [{ label: 'General category', href: '/countries/netherlands/' }],
  },
  {
    name: 'Europe', code: 'EU', airport: 'RIX', href: '/countries/europe/', goals: ['work'],
    text: 'Skilled trade and general category jobs in Latvia, Poland, Lithuania and Bulgaria. Good entry routes into Europe for technicians and tradespeople with hands-on experience and a clean record.',
    programmes: [
      { label: 'CNC machinists', href: '/jobs/cnc-machinists/' },
      { label: 'Welders', href: '/jobs/welders/' },
      { label: 'Drivers', href: '/jobs/drivers/' },
      { label: 'Electricians', href: '/jobs/electricians/' },
      { label: 'HVAC', href: '/jobs/hvac/' },
      { label: 'Fitters', href: '/jobs/fitters/' },
      { label: 'Spray painters', href: '/jobs/spray-painters/' },
      { label: 'Delivery', href: '/jobs/delivery-jobs/' },
    ],
  },
];

export const professionGroups = [
  {
    name: 'Healthcare and Allied Health',
    text: 'For nurses, physiotherapists, dentists, radiographers, occupational and speech therapists and lab technicians. We match your qualification and experience to Australia, Germany, Denmark, Malta or the Maldives, then manage registration, language exams and the employer or visa process.',
    links: [
      { label: 'Nurses', href: '/jobs/nurses/' },
      { label: 'Physiotherapists', href: '/jobs/physiotherapists/' },
      { label: 'Dentists', href: '/jobs/dentists/' },
      { label: 'Occupational therapists', href: '/jobs/occupational-therapists/' },
      { label: 'Speech therapists', href: '/jobs/speech-therapists/' },
      { label: 'Lab technicians', href: '/jobs/lab-technicians/' },
    ],
  },
  {
    name: 'Skilled Trades and Technical',
    text: 'For welders, CNC machinists, mechanics, electricians, HVAC technicians, fitters and spray painters. Australia assesses trade skills formally, while Germany and several European countries hire experienced tradespeople directly. We tell you which route fits your certificates and experience.',
    links: [
      { label: 'Welders', href: '/jobs/welders/' },
      { label: 'CNC machinists', href: '/jobs/cnc-machinists/' },
      { label: 'Mechanics', href: '/jobs/mechanics/' },
      { label: 'Electricians', href: '/jobs/electricians/' },
      { label: 'HVAC', href: '/jobs/hvac/' },
      { label: 'Fitters', href: '/jobs/fitters/' },
      { label: 'Spray painters', href: '/jobs/spray-painters/' },
    ],
  },
  {
    name: 'Drivers, Delivery and General Category',
    text: 'For licensed drivers, delivery staff and general category workers. Openings are mainly in Germany, the Netherlands and Eastern Europe. We explain licence conversion, the language you need and the real cost of living before you commit to anything.',
    links: [
      { label: 'Drivers', href: '/jobs/drivers/' },
      { label: 'Delivery jobs', href: '/jobs/delivery-jobs/' },
      { label: 'Netherlands general category', href: '/countries/netherlands/' },
      { label: 'Europe general category', href: '/countries/europe/' },
    ],
  },
  {
    name: 'IT Professionals and Teachers',
    text: 'For software, network and data professionals, and for qualified school teachers. Australia is the main destination, through points-tested skilled migration. We estimate your points honestly and tell you whether an invitation is realistic before you spend on assessments.',
    links: [
      { label: 'IT professionals', href: '/jobs/it/' },
      { label: 'Teachers', href: '/jobs/teachers/' },
      { label: 'Australia skilled migration', href: '/countries/australia/skilled-migration/' },
    ],
  },
];

export const services = [
  { name: 'Immigration Consulting', href: '/services/immigration-consulting/', text: 'A one-to-one review of your profile against current rules, ending in a written plan: where you qualify, the route, the cost and the timeline.' },
  { name: 'Migration Consulting', href: '/services/migration-consulting/', text: 'For families and long-term moves. Our migration consultants in Kerala plan permanent residence, dependant visas and settlement, not just the first visa.' },
  { name: 'Skilled Migration', href: '/services/skilled-migration/', text: 'Points-based routes handled by a skilled migration consultant in Kerala: skills assessment, expression of interest and state nomination.' },
  { name: 'Work Visa and Work Migration', href: '/services/work-visa/', text: 'Employer-sponsored visas and permits. We verify the job offer and the contract before your file is prepared.' },
  { name: 'Overseas Jobs', href: '/services/overseas-jobs/', text: 'Recruitment for verified employers under our government licence. You see the employer, salary and contract in writing first.' },
  { name: 'Visa Guidance', href: '/services/visa-guidance/', text: 'Checklists, forms, appointments and interview preparation from visa consultants in Kerala who file these applications every week.' },
];

// Programmes shown as photo cards on the homepage. `img` is a file slug in /public/img/dest.
export const featured = [
  { img: 'australia', place: 'Australia', title: 'Nursing in Australia', text: 'Skills assessment, AHPRA registration and the visa application, managed from Kerala.', href: '/countries/australia/nurses/' },
  { img: 'germany', place: 'Germany', title: 'Opportunity Card', text: 'Six points to job-hunt in Germany.', href: '/countries/germany/opportunity-card/' },
  { img: 'malta', place: 'Malta', title: 'Bridging programme', text: 'For nurses trained outside the EU.', href: '/countries/malta/bridging-programme/' },
  { img: 'denmark', place: 'Denmark', title: 'Dentists and nurses', text: 'Danish authorisation, language and employer matching.', href: '/countries/denmark/' },
  { img: 'maldives', place: 'Maldives', title: 'Hospital and clinic jobs', text: 'Employer-sponsored work visas, a short flight from Kerala.', href: '/countries/maldives/' },
  { img: 'europe', place: 'Europe', title: 'Skilled trades in Europe', text: 'Welders, CNC machinists, electricians, drivers and more, in Latvia, Poland, Lithuania and Bulgaria.', href: '/countries/europe/' },
];

export const exams = [
  { name: 'IELTS', text: 'English test accepted for Australian skilled visas.' },
  { name: 'OET', text: 'English test built for nurses and other healthcare professionals.' },
  { name: 'PTE', text: 'Computer-based English test, also accepted for Australia.' },
  { name: 'German', text: 'For healthcare roles in Germany. The Opportunity Card accepts basic German or good English.' },
];

export const supportChips = [
  'Skills assessment', 'AHPRA registration', 'Anerkennung (Germany)', 'Malta council registration',
  'IELTS, OET and PTE', 'German language training', 'Documentation', 'Pre-departure briefing', 'Post-landing support',
];

export const steps = [
  { title: 'Free profile and eligibility assessment', text: 'We review your age, education, experience and language level, and tell you plainly where you qualify.' },
  { title: 'Country and programme matching', text: 'You get a shortlist of realistic options with costs and requirements side by side.' },
  { title: 'Documents, skills assessment and credential recognition', text: 'We prepare and check every paper before it goes to an authority.' },
  { title: 'Language and exam preparation', text: 'IELTS, OET, PTE or German coaching runs in parallel with your file.' },
  { title: 'Visa filing or employer matching', text: 'We lodge the application or introduce you to verified employers, depending on the route.' },
  { title: 'Pre-departure and post-landing support', text: 'Travel, accommodation and first-week guidance, so you are not alone on arrival.' },
];

export const reasons = [
  { title: 'Licensed and registered', text: 'We hold a recruiting licence from the Ministry of External Affairs, and we print the number on every page so you can check it.' },
  { title: 'Honest eligibility advice', text: 'If you do not qualify, we say so at the first meeting. We never promise a job or a visa to win a client.' },
  { title: 'Healthcare and skilled-trade specialists', text: 'Our programmes are built around nurses, therapists, technicians and tradespeople, not general student admissions.' },
  { title: 'In-house language support', text: 'IELTS, OET, PTE and German preparation is arranged by the same team that handles your file.' },
  { title: 'Face-to-face offices', text: 'Meet your consultant in person in Thrissur or Kochi, and bring your family along.' },
  { title: 'Transparent Fees', text: 'Our immigration services in Kerala are priced per programme. You get a written fee schedule before you pay, with no hidden charges and the refund terms stated.' },
];

// Client reviews carried over from the current mountbell.com site.
export const reviews = [
  { name: 'Feby Siby', text: 'They were very supportive from the beginning. They are very transparent from the start till the end. They helped me to achieve my dream by making the process so easy and simple.' },
  { name: 'Jincy Thomas', text: 'Got my visa cleared very smoothly. Very caring staff who are very much accessible and who were spontaneous in responding to my queries.' },
  { name: 'Neenu Abraham', text: 'I chose Mount Bell after doing so much study on all agencies. The amount of patience and dedication they put into helping us is commendable.' },
];

export const updates = [
  { tag: 'Guide', img: 'kerala', title: 'How to spot fake overseas job agents', excerpt: 'Seven checks to run before you pay any recruiter, starting with the eMigrate licence search.', href: '/resources/how-to-spot-fake-overseas-job-agents/' },
  { tag: 'Germany', img: 'germany', title: 'Opportunity Card: who qualifies and how the points work', excerpt: 'The six-point rule explained with worked examples for nurses and technicians from Kerala.', href: '/resources/germany-opportunity-card-guide/' },
  { tag: 'Malta', img: 'malta', title: 'The bridging programme for nurses, step by step', excerpt: 'What the course covers, how registration follows, and what to arrange before you travel.', href: '/resources/malta-bridging-programme-guide/' },
];

export const faqs = [
  {
    q: 'Who are the best immigration consultants in Kerala for skilled migration?',
    a: 'The best consultants are the ones you can verify. Look for a government licence number, written fees and honest advice about your chances. Mount Bell is licensed by the Ministry of External Affairs and focuses on skilled migration for healthcare, trade, IT and teaching professionals.',
    href: '/services/skilled-migration/', link: 'Skilled migration service',
  },
  {
    q: 'How do I know if an overseas job consultant in Kerala is genuine and licensed?',
    a: 'A genuine overseas job consultant in Kerala holds a Recruiting Agent licence from the Ministry of External Affairs. Ask for the licence number and search for it on the eMigrate portal. Insist on receipts, a written contract and employer details before you pay anything.',
    href: '/resources/how-to-spot-fake-overseas-job-agents/', link: 'How to spot fake agents',
  },
  {
    q: 'How much does immigration consulting cost at Mount Bell?',
    a: 'The cost depends on the country and the programme. Your first eligibility assessment is free. Before you pay anything, you receive a written fee schedule showing our service fee, what it includes, and the government, exam and assessment charges that are paid separately.',
    href: '/contact/', link: 'Ask for a fee schedule',
  },
  {
    q: 'Which country is best for me to migrate to from Kerala?',
    a: 'The best country depends on your profession, age, language level and whether you want permanent residence or a work contract. Nurses often choose Australia, Germany or Malta. Tradespeople look at Australia and Europe. A free assessment gives you a shortlist that fits your profile.',
    href: '#pathways', link: 'Compare pathways',
  },
  {
    q: 'Which countries can nurses from Kerala migrate to?',
    a: 'Nurses from Kerala can move to Australia, Germany, Denmark, Malta and the Maldives through Mount Bell programmes. Each country has its own registration body and language requirement, so the right choice depends on your experience, your exam scores and how soon you want to start work.',
    href: '/jobs/nurses/', link: 'Nursing jobs abroad',
  },
  {
    q: 'Do I need IELTS, OET or German to work abroad?',
    a: 'It depends on the country and the role. Australia asks for an English test such as IELTS, OET or PTE. Germany generally expects German for healthcare roles, and the Opportunity Card accepts basic German or good English. We confirm the exact requirement during your assessment.',
    href: '/services/visa-guidance/', link: 'Visa guidance',
  },
  {
    q: 'Do you offer free consultation in Thrissur, Kochi and online?',
    a: 'Yes. The first consultation is free at our Thrissur and Kochi offices, and by phone or video call for people elsewhere in Kerala, in other states or already working abroad. Book a time through the form on this page or on WhatsApp.',
    href: '#offices', link: 'Office addresses',
  },
  {
    q: 'Can I get consultation in Malayalam?',
    a: 'Yes. Our consultants speak Malayalam and English, and you can choose either for your consultation. Parents and spouses are welcome to join the meeting, so the whole family understands the process, the costs and the timeline before a decision is made.',
    href: '/contact/', link: 'Book a consultation',
  },
];

export const professions = [
  'Nurse', 'Physiotherapist', 'Dentist', 'Occupational therapist', 'Speech therapist', 'Lab technician',
  'Radiographer / allied health', 'Welder', 'CNC machinist', 'Mechanic', 'Electrician', 'HVAC technician',
  'Fitter', 'Spray painter', 'Driver', 'Delivery / general category', 'IT professional', 'Teacher', 'Other',
];

export const nav = {
  about: [
    { label: 'About us', href: '/about/' },
    { label: 'Why choose Mount Bell', href: '/about/why-choose-mount-bell/' },
    { label: 'Our team', href: '/about/our-team/' },
    { label: 'Success stories', href: '/about/success-stories/' },
  ],
  resources: [
    { label: 'Immigration guides', href: '/resources/immigration-guides/' },
    { label: 'Country guides', href: '/resources/country-guides/' },
    { label: 'Visa updates', href: '/resources/visa-updates/' },
    { label: 'Job and programme updates', href: '/resources/job-updates/' },
    { label: 'FAQs', href: '/resources/faqs/' },
  ],
  tools: [
    { label: 'Australia points calculator', href: '/tools/australia-pr-points-calculator/' },
    { label: 'Germany Opportunity Card checker', href: '/tools/germany-opportunity-card-checker/' },
  ],
};

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

// Photos carried over from the gallery on the current mountbell.com site.
export const teamPhotos = [
  { src: '/img/gallery/mount8.webp', alt: 'Mount Bell team in traditional Kerala dress at an office celebration' },
  { src: '/img/gallery/mount6.webp', alt: 'Mount Bell team gathered at the office' },
  { src: '/img/gallery/mount10.webp', alt: 'Mount Bell team lighting a traditional lamp' },
  { src: '/img/gallery/mount2.webp', alt: 'Mount Bell team seated together at the office' },
];
export const galleryPhotos = [
  { src: '/img/gallery/mount3.webp', alt: 'Four women with luggage on a travel day' },
  { src: '/img/gallery/mount5.webp', alt: 'Four travellers with suitcases outside a building' },
  { src: '/img/gallery/mount9.webp', alt: 'Four women taking a selfie in an arrivals hall' },
  { src: '/img/gallery/mount4.webp', alt: 'Woman standing by the river with Tower Bridge behind her' },
  { src: '/img/gallery/mount7.webp', alt: 'Two women standing in front of a stone monument' },
];

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
