import type { Block, Page } from './types';
import { site, waLink } from '../site';

const note = /\s*\[[^\]]*\]/g;
function publish<T>(v: T): T {
  if (typeof v === 'string') return v.replace(note, '') as T;
  if (Array.isArray(v)) return v.filter((x) => typeof x !== 'string' || (x !== '' && !/(:|^)\s*\[[^\]]*\]$/.test(x))).map(publish) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, publish(x)])) as T;
  return v;
}

const licence = 'B-1921/KER/PART/100/5/10348/2023';
const studyWa = 'Hi Mountbell, I am interested in studying abroad and would like counselling on courses and universities.';

const contactBlock = (h2: string, text: string, waMsg: string): Block => ({
  type: 'prose',
  h2,
  body: [text],
  list: [
    'Call: <a href="tel:+919207014777">+91 9207014777</a>',
    'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
    'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
    '<a href="/free-immigration-assessment/">Book a free study abroad session &rarr;</a>',
  ],
  after: [
    '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
    '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
  ],
});

const pagesRaw: Page[] = [
  {
    path: '/study-abroad/',
    crumb: 'Study abroad',
    accent: 'var(--blue)',
    title: 'Study Abroad Consultants in Thrissur | Mountbell',
    description: 'Study abroad consultants in Thrissur for courses abroad, university admission, student visas and education loan assistance. UK, Canada, Australia, Germany.',
    label: 'Study Abroad',
    h1: 'Study Abroad Consultants in Thrissur — Courses, Universities, Visas and Loans',
    lede: 'Study abroad consultants in Thrissur should help you answer three questions before you apply: which course, which country, and how will you pay for it? Mountbell has helped students study abroad from Kerala since our start as Mount Bell Global Studies, and we work with partner universities in 15+ countries. We handle course selection and university admission. We also arrange the student visa and help with loans, from offices in Thrissur and Kochi. Most students need 6 to 9 months from first meeting to flight.',
    acts: { check: 'Plan my study abroad', wa: 'Book a free call' },
    photo: { src: '/img/dest/kerala-wide.webp', alt: 'Mountbell study abroad consultants Thrissur', w: 1400, h: 820 },
    wa: studyWa,
    blocks: [
      {
        type: 'note',
        text: `Licensed by the Ministry of External Affairs as a recruiting agent: ${licence} (<a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Partner universities in 15+ countries &nbsp;·&nbsp; Offices in Thrissur and Kochi, plus online counselling across India &nbsp;·&nbsp; Written fees and timelines before you start`,
      },
      {
        type: 'facts',
        h2: 'Key Facts at a Glance',
        intro: 'These 2026 rules shape every plan to study abroad from Kerala. They change often, so we check them again before you apply.',
        rows: [
          ['UK living costs', 'Students need £1,529 a month for living costs in London and £1,171 outside London; the Graduate Route falls from 2 years to 18 months for applications from 1 January 2027 (The PIE News)'],
          ['Canada study permit', 'A single study permit applicant must show CAD 23,448 for one year’s living costs, excluding tuition, for applications from 1 September 2026 (CIC News, August 2026)'],
          ['Australia living costs', 'The living cost requirement is AUD 29,710 a year for a single student, on top of first-year fees and travel (One Planet Migration Law, 2026)'],
          ['Germany blocked account', 'A blocked account of €992 a month, or €11,904 a year (Expatrio, 2026)'],
          ['Typical timeline', '6 to 9 months from shortlisting to arrival'],
        ],
      },
      {
        type: 'prose',
        h2: 'How Mountbell Helps, From Course to Campus',
        body: ['Good study abroad consultants in Thrissur cover the whole journey, not just the application form.'],
        list: [
          '<strong>Course selection:</strong> matching your marks, budget and career plan to the right programme',
          '<strong>University shortlisting:</strong> 5 to 8 options across safe, target and ambitious choices',
          '<strong>Applications:</strong> forms, statement of purpose, references and application deadlines',
          '<strong>Offer letter review:</strong> conditions, fees and deposit terms explained before you accept',
          '<strong>Education loan assistance:</strong> lender options, documents and the loan sanction letter',
          '<strong>Student visa:</strong> financial evidence, forms and interview practice',
          '<strong>Pre-departure:</strong> student accommodation, travel and arrival',
        ],
        after: [
          '<a href="/services/language-test-preparation/">Language test classes &rarr;</a> &nbsp;·&nbsp; <a href="/services/visa-documentation/">Visa Documentation &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Choose a Country',
        body: ['Each destination suits different courses abroad, budgets and plans. Here is the short version.'],
      },
      {
        type: 'prose',
        h3: 'Study in UK',
        body: [],
        list: [
          'One-year master’s abroad programmes save time and money',
          'Intakes: September and January',
          'After graduation: the Graduate Route, 2 years now and 18 months from January 2027',
        ],
      },
      {
        type: 'prose',
        h3: 'Study in Canada',
        body: [],
        list: [
          'Colleges and universities, with a study permit and part-time work rights',
          'Intakes: September, January and some May starts',
          'Officers now check where your funds come from in every case',
        ],
      },
      {
        type: 'prose',
        h3: 'Study in Australia',
        body: [],
        list: [
          'Strong options in nursing, engineering, IT and business',
          'Intakes: February and July',
          'Applicants must meet the genuine student requirement',
        ],
      },
      {
        type: 'prose',
        h3: 'Study in Germany',
        body: [],
        list: [
          'Low or no tuition fees at many public universities, with living costs shown through a blocked account',
          'Many programmes are taught in English; German helps with jobs',
        ],
      },
      {
        type: 'prose',
        h3: 'Study in Ireland',
        body: [],
        list: [
          'One-year master’s courses and a post-study work visa for graduates',
        ],
      },
      {
        type: 'prose',
        h3: 'Study in New Zealand',
        body: [],
        list: [
          'Smaller classes and a practical style, with intakes in February and July',
        ],
        after: [
          '<a href="/countries/">Compare countries &rarr;</a> &nbsp;·&nbsp; <a href="/countries/germany/">Germany &rarr;</a> &nbsp;·&nbsp; <a href="/countries/australia/">Australia &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Courses Abroad',
        body: ['These are the courses abroad that Kerala students ask about most:'],
        list: [
          'Business, management and finance',
          'Computer science, data science and IT',
          'Engineering, from mechanical and civil to renewable energy',
          'Health sciences, public health and allied health',
          'Hospitality, tourism and culinary arts',
        ],
        after: ['We look at course content, accreditation and job outcomes, not just university rankings.'],
      },
      {
        type: 'prose',
        h2: 'Intakes and Application Deadlines',
        body: ['Timing decides how many choices you have. Plan backwards from your intake.'],
        list: [
          'September intake (UK, Canada, Ireland, Germany): start 10 to 12 months ahead; many deadlines fall between January and June',
          'January intake (UK, Canada): start 8 to 10 months ahead',
          'February and July intakes (Australia, New Zealand): start 8 to 10 months ahead',
          'Scholarships: deadlines are often 6 to 9 months before the course starts',
        ],
        after: ['Missing application deadlines by a few weeks can mean waiting a full year, so book a first meeting with study abroad consultants in Thrissur early.'],
      },
      {
        type: 'steps',
        h2: 'Study Abroad Process: 8 Steps and Timeline',
        intro: 'This is how a typical plan runs with Mountbell’s study abroad consultants in Thrissur.',
        items: [
          { title: 'Free counselling (week 1)', text: 'Your marks, goals, budget and English level.' },
          { title: 'Course selection and shortlisting (weeks 2 to 3)', text: 'Selecting 5 to 8 suitable university options across safe, target and ambitious tiers.' },
          { title: 'English test (1 to 3 months, if not done)', text: 'IELTS, PTE or another accepted test.' },
          { title: 'University applications (weeks 4 to 8)', text: 'Statement of purpose, references and transcripts.' },
          { title: 'Offers (2 to 8 weeks after applying)', text: 'Offer letter review and acceptance.' },
          { title: 'Education loan assistance (3 to 6 weeks)', text: 'Lender applications and the loan sanction letter.' },
          { title: 'Student visa (3 to 8 weeks, by country)', text: 'Forms, biometrics and any required interview.' },
          { title: 'Pre-departure (2 to 4 weeks before flying)', text: 'Accommodation, travel and arrival briefing.' },
        ],
        after: ['Total time is usually 6 to 9 months.'],
      },
      {
        type: 'prose',
        h2: 'Documents for University Admission',
        body: ['For university admission, most universities ask for:'],
        list: [
          'Passport',
          'Mark sheets and certificates for 10th, 12th and any degree',
          'English test result',
          'Statement of purpose, written by you and reviewed by us',
          'Two or three references from teachers or employers',
          'A CV for postgraduate and work-experience programmes',
        ],
        after: ['For the visa stage, you also need the offer, proof of tuition payment and financial evidence. In the UK, the university issues a Confirmation of Acceptance for Studies (CAS) before you apply.'],
      },
      {
        type: 'prose',
        h2: 'Costs: What to Budget For',
        body: [],
        list: [
          'Tuition fees: vary widely by country, course and university; Germany’s public universities charge little or none',
          'Living costs: set by each country’s visa rules, as shown in the Key Facts',
          'One-off costs: application fees, English test, visa fee, health cover and flights',
          'Mountbell fee: shown in writing before you start and listed on our Fees page',
        ],
        after: [
          'As study abroad consultants in Thrissur, we give you a full year-one budget before you apply, so there are no surprises at visa stage.',
          '<a href="/fees/">Fee structure &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Education Loan Assistance',
        body: ['Most students who study abroad from Kerala fund at least part of the cost with a loan. Our education loan assistance covers:'],
        list: [
          'Lender options: public sector banks, private banks and specialist lenders',
          'Loan amount and collateral: what each lender asks for, and secured versus unsecured options',
          'Documents: admission letter, fee structure, academic records, and co-applicant income and property papers',
          'Timing: a loan sanction letter usually takes 3 to 6 weeks, and many embassies accept it as evidence of funds',
        ],
        after: ['We do not lend money or charge lenders’ fees; we help you compare and prepare the application.'],
      },
      {
        type: 'prose',
        h2: 'Scholarships for Indian Students',
        body: ['Scholarships for Indian students range from small fee waivers to full awards.'],
        list: [
          'University merit awards: often automatic for strong academic results',
          'Government schemes: such as Chevening in the UK and DAAD in Germany',
          'Country-specific awards for postgraduate and research students',
        ],
        after: ['We list the scholarships you are likely to qualify for as part of your shortlist.'],
      },
      {
        type: 'prose',
        h2: 'Student Visa: What Officers Check',
        body: ['Every student visa decision rests on three things:'],
        list: [
          'A genuine plan: a course that fits your background and career goals',
          'Enough money: tuition plus living costs, from sources you can explain',
          'Your English: the score your university and the visa rules require',
        ],
        after: [
          'Student dependants are now restricted in some countries; in the UK, most taught-course students cannot bring family. Our Dependent Visa page covers family rules in detail.',
          '<a href="/services/dependent-visa/">Dependent Visa &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'After You Graduate',
        body: [
          'A post-study work visa lets you gain experience abroad after your course, and for some graduates it is the first step towards settling. Good study abroad consultants in Thrissur plan your course with that next step in mind.',
        ],
        after: [
          '<a href="/services/pr-visa/">PR Visa &rarr;</a> &nbsp;·&nbsp; <a href="/services/work-visa/">Work Visa &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Who Submits Your Visa Application',
        body: [
          'Some countries require visa applications to be lodged by a licensed representative when an adviser is paid. We tell you who prepares and who submits your file, with their licence details, before you pay any fee.',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Student Plan Runs',
        intro: 'This is an illustrative example, not a client record.',
        body: [],
        list: [
          'Profile: a B.Com graduate from Thrissur aiming for a master’s in the UK',
          'Month 1: free counselling; six universities shortlisted',
          'Months 2 to 3: English test and university admission applications',
          'Month 4: two offers; one accepted, with education loan assistance started',
          'Month 5: loan sanction letter received; CAS issued; student visa filed',
          'Month 6: visa granted; accommodation booked',
          'Total: about 6 months to a September start',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Choose Mountbell',
        intro: 'Many families compare study abroad consultants in Thrissur before choosing. Here is what Mountbell does differently:',
        items: [
          { title: 'Kerala roots', text: 'Years of experience with Kerala students, from our roots as Mount Bell Global Studies.' },
          { title: 'Honest advice', text: 'Honest advice on courses abroad, even when it means a cheaper university or a later intake.' },
          { title: 'Dedicated adviser', text: 'One adviser from shortlist to departure.' },
          { title: 'Accessible offices', text: 'Study abroad counselling in Kochi and Thrissur, or online anywhere in India.' },
          { title: 'Long-term pathways', text: 'Clear advice on work and PR options after your course.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          {
            q: 'What do study abroad consultants in Thrissur actually do?',
            a: 'They help you choose a course and country, shortlist universities, prepare applications, arrange your loan and file your student visa, then prepare you for departure.',
          },
          {
            q: 'When should I start planning?',
            a: 'About 10 to 12 months before your intake; most people who study abroad from Kerala aim for September. For a September intake, start the previous autumn.',
          },
          {
            q: 'Which country is cheapest to study in?',
            a: 'Germany, because many public universities charge little or none tuition. You still need to show living costs through a blocked account.',
          },
          {
            q: 'Can I work while studying?',
            a: 'Usually yes. Most countries give students part-time work rights during term and full-time work in breaks. Rules and hours differ by country.',
          },
          {
            q: 'Can I get an education loan without collateral?',
            a: 'Sometimes. Some lenders offer unsecured loans up to a limit, based on the course, university and co-applicant income. We compare the options with you.',
          },
          {
            q: 'Do you help with scholarships?',
            a: 'Yes. We identify scholarships for Indian students that fit your profile and include them in your application plan.',
          },
        ],
      },
      contactBlock(
        'Book Your Free Study Abroad Counselling',
        'Speak to Mountbell’s study abroad consultants in Thrissur about your course, country and budget. The first session is free.',
        studyWa
      ),
    ],
    related: ['/services/', '/services/language-test-preparation/', '/nursing-careers/'],
  },
];

export const studyAbroad: Page[] = publish(pagesRaw);
