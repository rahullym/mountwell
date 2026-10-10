// Single source of truth for business facts and homepage content.
// Anything set to null is hidden on the live page until a verified value is supplied.

export const site = {
  name: 'Mountbell',
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
  { id: 'pr', label: 'Migrate / PR', text: 'Permanent residence through points-tested skilled migration, planned for you and your family.', href: '/services/pr-visa/' },
  { id: 'work', label: 'Work visa', text: 'An employer-sponsored job and work permit in healthcare, skilled trades or general category roles.', href: '/services/work-visa/' },
  { id: 'train', label: 'Study and train', text: 'Training that leads to work: Ausbildung in Germany, or the bridging programme for nurses in Malta.', href: '/countries/germany/ausbildung/' },
  { id: 'seeker', label: 'Job seeker route', text: 'Travel first and look for work on the ground with Germany’s Opportunity Card.', href: '/countries/germany/opportunity-card/' },
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
    text: 'Points-tested skilled visas and employer-sponsored routes for healthcare, trade, IT and teaching professionals. We manage your skills assessment, professional registration, expression of interest and visa application from Kerala, start to finish.',
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
    text: 'Migration and immigration pathways to permanent residence for skilled workers and their families. We check your score, plan your language tests and credential assessment, and prepare a complete, accurate application.',
    programmes: [{ label: 'PR and immigration' }],
  },
  {
    name: 'Germany', code: 'DE', airport: 'FRA', href: '/countries/germany/', goals: ['work', 'train', 'seeker'],
    text: 'The Opportunity Card for job seekers, Ausbildung vocational training, and recognition routes for healthcare and technical staff. German language training runs alongside your paperwork, so no time is lost.',
    programmes: [
      { label: 'Opportunity Card', href: '/countries/germany/opportunity-card/' },
      { label: 'Ausbildung', href: '/countries/germany/ausbildung/' },
      { label: 'Nurses', href: '/nursing-careers/germany/' },
      { label: 'Physiotherapists' },
      { label: 'Vehicle mechanics and drivers' },
    ],
  },
  {
    name: 'Denmark', code: 'DK', airport: 'CPH', href: '/countries/#denmark', goals: ['work'],
    text: 'Authorisation and employment routes for dentists and nurses. We guide you through Danish authorisation, the language requirement and employer matching, with a realistic view of how long each stage takes.',
    programmes: [
      { label: 'Dentists' },
      { label: 'Nurses', href: '/nursing-careers/#denmark' },
    ],
  },
  {
    name: 'Malta', code: 'MT', airport: 'MLA', href: '/countries/malta/', goals: ['work', 'train'],
    text: 'Healthcare roles in an English-speaking EU country, including the bridging programme for nurses trained outside the EU. We handle council registration, employer placement and the work permit.',
    programmes: [
      { label: 'Nurses and bridging programme', href: '/nursing-careers/malta/' },
      { label: 'Physiotherapists' },
      { label: 'AT and OT' },
      { label: 'Radiology' },
    ],
  },
  {
    name: 'Maldives', code: 'MV', airport: 'MLE', href: '/countries/#maldives', goals: ['work'],
    text: 'Hospital and clinic jobs a short flight from Kerala, with employer-sponsored work visas. A practical first overseas posting for healthcare professionals who want international experience close to home.',
    programmes: [
      { label: 'Registered nurses', href: '/nursing-careers/maldives/' },
      { label: 'Speech therapists' },
      { label: 'Occupational therapists' },
      { label: 'Lab technicians' },
    ],
  },
  {
    name: 'Netherlands', code: 'NL', airport: 'AMS', href: '/countries/#netherlands', goals: ['work'],
    text: 'General category work opportunities with Dutch employers. We compare your profile with current openings, explain the permit conditions in plain language and prepare your documents for the employer and the visa.',
    programmes: [{ label: 'General category' }],
  },
  {
    name: 'Europe', code: 'EU', airport: 'RIX', href: '/countries/#europe', goals: ['work'],
    text: 'Skilled trade and general category jobs in Latvia, Poland, Lithuania and Bulgaria. Good entry routes into Europe for technicians and tradespeople with hands-on experience and a clean record.',
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
    text: 'For nurses, physiotherapists, dentists, radiographers, occupational and speech therapists and lab technicians. We match your qualification and experience to Australia, Germany, Denmark, Malta or the Maldives, then manage registration, language exams and the employer or visa process.',
    links: [
      { label: 'Nurses', href: '/nursing-careers/' },
      { label: 'Physiotherapists' }, { label: 'Dentists' }, { label: 'Occupational therapists' },
      { label: 'Speech therapists' }, { label: 'Lab technicians' }, { label: 'Radiographers' },
    ],
  },
  {
    id: 'trades', name: 'Skilled Trades and Technical',
    text: 'For welders, CNC machinists, mechanics, electricians, HVAC technicians, fitters and spray painters. Australia assesses trade skills formally, while Germany and several European countries hire experienced tradespeople directly. We tell you which route fits your certificates and experience.',
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
  { name: 'Work Visa', href: '/services/work-visa/', text: 'Employer-sponsored visas and work permits. We verify the job offer and the contract before your file is prepared.' },
  { name: 'Visa Documentation', href: '/services/visa-documentation/', text: 'Checklists, forms, medicals, appointments and interview preparation, checked before anything goes to an authority.' },
  { name: 'Nursing Careers', href: '/nursing-careers/', text: 'Registration, language exams and placement for nurses in Australia, Germany, Malta, the Maldives and Denmark.' },
  { name: 'Overseas Jobs', href: '/overseas-jobs/', text: 'Recruitment for verified employers under our government licence. You see the employer, salary and contract in writing first.' },
  { name: 'Free Immigration Consultation', href: '/free-immigration-assessment/', text: 'A one-to-one review of your profile against current rules: where you qualify, the route, the cost and the timeline.' },
];

// Programmes shown as photo cards on the homepage. `img` is a file slug in /public/img/dest.
export const featured = [
  { img: 'australia', place: 'Australia', title: 'Nursing in Australia', text: 'Skills assessment, AHPRA registration and the visa application, managed from Kerala.', href: '/nursing-careers/australia/' },
  { img: 'germany', place: 'Germany', title: 'Opportunity Card', text: 'Six points to job-hunt in Germany.', href: '/countries/germany/opportunity-card/' },
  { img: 'malta', place: 'Malta', title: 'Bridging programme', text: 'For nurses trained outside the EU.', href: '/nursing-careers/malta/' },
  { img: 'denmark', place: 'Denmark', title: 'Dentists and nurses', text: 'Danish authorisation, language and employer matching.', href: '/countries/#denmark' },
  { img: 'maldives', place: 'Maldives', title: 'Hospital and clinic jobs', text: 'Employer-sponsored work visas, a short flight from Kerala.', href: '/countries/#maldives' },
  { img: 'europe', place: 'Europe', title: 'Skilled trades in Europe', text: 'Welders, CNC machinists, electricians, drivers and more, in Latvia, Poland, Lithuania and Bulgaria.', href: '/countries/#europe' },
];

// Nursing routes shown in the Nursing Careers section. `img` is a file slug in /public/img/dest.
export const nursing = [
  { img: 'australia', place: 'Australia', text: 'AHPRA registration, skills assessment and a skilled visa.', href: '/nursing-careers/australia/' },
  { img: 'germany', place: 'Germany', text: 'Recognition of your qualification, with German language training.', href: '/nursing-careers/germany/' },
  { img: 'denmark', place: 'Denmark', text: 'Danish authorisation, the language requirement and employer matching.', href: '/nursing-careers/#denmark' },
  { img: 'malta', place: 'Malta', text: 'Council registration and the bridging programme, in an English-speaking EU country.', href: '/nursing-careers/malta/' },
  { img: 'maldives', place: 'Maldives', text: 'Hospital and clinic jobs a short flight from Kerala.', href: '/nursing-careers/maldives/' },
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
  { name: 'Neenu Abraham', text: 'I chose Mountbell after doing so much study on all agencies. The amount of patience and dedication they put into helping us is commendable.' },
];

export const updates = [
  { tag: 'Guide', img: 'kerala', title: 'How to identify fake immigration agents', excerpt: 'Eight checks to run before you pay any recruiter, starting with the eMigrate licence search.', href: '/resources/avoid-visa-fraud/' },
  { tag: 'Germany', img: 'germany', title: 'Opportunity Card: who qualifies and how the points work', excerpt: 'The six-point rule explained with worked examples for nurses and technicians from Kerala.', href: '/countries/germany/opportunity-card/' },
  { tag: 'Malta', img: 'malta', title: 'The bridging programme for nurses, step by step', excerpt: 'What the course covers, how registration follows, and what to arrange before you travel.', href: '/nursing-careers/malta/' },
];

export const faqs = [
  {
    q: 'Who are the best immigration consultants in Kerala for skilled migration?',
    a: 'The best consultants are the ones you can verify. Look for a government licence number, written fees and honest advice about your chances. Mountbell is licensed by the Ministry of External Affairs and focuses on skilled migration for healthcare, trade, IT and teaching professionals.',
    href: '/services/pr-visa/', link: 'PR visa and skilled migration',
  },
  {
    q: 'How do I know if an overseas job consultant in Kerala is genuine and licensed?',
    a: 'A genuine overseas job consultant in Kerala holds a Recruiting Agent licence from the Ministry of External Affairs. Ask for the licence number and search for it on the eMigrate portal. Insist on receipts, a written contract and employer details before you pay anything.',
    href: '/resources/avoid-visa-fraud/', link: 'How to identify fake agents',
  },
  {
    q: 'How much does immigration consulting cost at Mountbell?',
    a: 'The cost depends on the country and the programme. Your first eligibility assessment is free. Before you pay anything, you receive a written fee schedule showing our service fee, what it includes, and the government, exam and assessment charges that are paid separately.',
    href: '/fees/', link: 'How our fees work',
  },
  {
    q: 'Which country is best for me to migrate to from Kerala?',
    a: 'The best country depends on your profession, age, language level and whether you want permanent residence or a work contract. Nurses often choose Australia, Germany or Malta. Tradespeople look at Australia and Europe. A free assessment gives you a shortlist that fits your profile.',
    href: '/countries/', link: 'Compare countries',
  },
  {
    q: 'Which countries can nurses from Kerala migrate to?',
    a: 'Nurses from Kerala can move to Australia, Germany, Denmark, Malta and the Maldives through Mountbell programmes. Each country has its own registration body and language requirement, so the right choice depends on your experience, your exam scores and how soon you want to start work.',
    href: '/nursing-careers/', link: 'Nursing careers abroad',
  },
  {
    q: 'Do I need IELTS, OET or German to work abroad?',
    a: 'It depends on the country and the role. Australia asks for an English test such as IELTS, OET or PTE. Germany generally expects German for healthcare roles, and the Opportunity Card accepts basic German or good English. We confirm the exact requirement during your assessment.',
    href: '#coaching', link: 'Language coaching',
  },
  {
    q: 'Do you offer free consultation in Thrissur, Kochi and online?',
    a: 'Yes. The first consultation is free at our Thrissur and Kochi offices, and by phone or video call for people elsewhere in Kerala, in other states or already working abroad. Book a time through the form on this page or on WhatsApp.',
    href: '/contact/', link: 'Office addresses',
  },
  {
    q: 'Can I get consultation in Malayalam?',
    a: 'Yes. Our consultants speak Malayalam and English, and you can choose either for your consultation. Parents and spouses are welcome to join the meeting, so the whole family understands the process, the costs and the timeline before a decision is made.',
    href: '/free-immigration-assessment/', link: 'Book a free consultation',
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
    { label: 'Work visa', href: '/services/work-visa/' },
    { label: 'Visa documentation', href: '/services/visa-documentation/' },
    { label: 'Free immigration consultation', href: '/free-immigration-assessment/' },
  ] },
  { label: 'Nursing Careers', id: 'nursing', href: '/nursing-careers/', items: [
    { label: 'Nursing careers abroad', href: '/nursing-careers/' },
    { label: 'Nurses in Australia', href: '/nursing-careers/australia/' },
    { label: 'Nurses in Germany', href: '/nursing-careers/germany/' },
    { label: 'Nurses in Malta', href: '/nursing-careers/malta/' },
    { label: 'Nurses in the Maldives', href: '/nursing-careers/maldives/' },
  ] },
  { label: 'Countries', id: 'countries', href: '/countries/' },
  { label: 'Overseas Jobs', id: 'jobs', href: '/overseas-jobs/', items: [
    { label: 'All overseas jobs', href: '/overseas-jobs/' },
    ...professionGroups.map((g) => ({ label: g.name, href: `/overseas-jobs/#${g.id}` })),
  ] },
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
  { label: 'About', id: 'about', href: '/about/', items: [
    { label: 'About Mountbell', href: '/about/' },
    { label: 'Our team', href: '/about/team/' },
    { label: 'Licences and accreditations', href: '/about/licences/' },
    { label: 'How it works', href: '/how-it-works/' },
    { label: 'Fees', href: '/fees/' },
  ] },
  { label: 'Contact', id: 'contact', href: '/contact/' },
];

// City pages. Only cities with an office or local proof are listed.
export const locations = [
  { city: 'Thrissur', href: '/immigration-consultants-thrissur/' },
  { city: 'Kochi', href: '/immigration-consultants-kochi/' },
  { city: 'Kottayam', href: '/immigration-consultants-kottayam/' },
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

// Mountbell's own photos, built by scripts/images.mjs from assets-src/photos.
export const teamPhotos = [
  { src: '/img/photos/team-kerala-dress.webp', w: 800, h: 800, alt: 'Mountbell team in matching blue and white Kerala dress at the office' },
  { src: '/img/photos/office-briefing.webp', w: 600, h: 600, alt: 'Group briefing in progress at the Mountbell office' },
  { src: '/img/photos/office-reception.webp', w: 420, h: 496, alt: 'Reception desk under the Mountbell Global Studies sign' },
  { src: '/img/photos/team-celebration.webp', w: 800, h: 600, alt: 'Mountbell team at an office celebration with blue and green balloons' },
];
export const processPhoto = { src: '/img/photos/office-consultation.webp', w: 1000, h: 1120, alt: 'Two women going through details on a laptop in the Mountbell office lounge' };
// Photo of nurses for the Nursing Careers section (stock, credited on /image-credits/).
// null = the section shows without a photo.
export const nursingPhoto = { src: '/img/photos/nurse-portrait.webp', w: 1000, h: 1250, alt: 'Smiling nurse in blue scrubs holding a stethoscope in a hospital corridor' } as { src: string; w: number; h: number; alt: string } | null;
export const galleryPhotos = [
  { src: '/img/photos/candidates-departure-gate.webp', alt: 'Group of women with luggage at an airport departure gate' },
  { src: '/img/photos/candidates-trolleys.webp', alt: 'Four travellers with loaded luggage trolleys at an airport' },
  { src: '/img/photos/candidates-seafront.webp', alt: 'Five people taking a selfie on a pebble beach by a harbour' },
  { src: '/img/photos/candidates-terminal.webp', alt: 'Five travellers in winter jackets inside an airport terminal' },
  { src: '/img/photos/candidates-night.webp', alt: 'Four women with suitcases outside an airport at night' },
];

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
