import type { Page } from './types';
import { site } from '../site';
import { toolPages } from './tools';

export const resources: Page[] = [
  {
    path: '/tools/', crumb: 'Tools', wide: true,
    title: 'Free Immigration Calculators | Mountbell',
    description: 'Free immigration calculators from Mountbell: an eligibility calculator, the Australia PR points calculator and the Germany Opportunity Card points calculator.',
    h1: 'Free Immigration Calculators',
    lede: 'Three tools you can use without giving a name or a phone number. Each takes about two minutes and follows the published rules.',
    blocks: [
      { type: 'links', items: [
        { title: 'Immigration eligibility calculator', meta: 'All countries', text: 'Answer five questions about your profession, age, qualification and languages, and see which routes are worth discussing.', href: '/tools/immigration-eligibility-checker/' },
        { title: 'Australia PR points calculator', meta: 'Pass mark 65', text: 'Score yourself on the Australian points test for the 189, 190 and 491 visas.', href: '/tools/australia-pr-points-calculator/' },
        { title: 'Germany Opportunity Card points calculator', meta: '6 points needed', text: 'Check the basic requirements and count your Chancenkarte points.', href: '/tools/opportunity-card-points-calculator/' },
      ] },
      { type: 'note', text: 'These tools give an indication only. They are not legal advice, and the decision always rests with the government concerned. Have your result checked in a <a href="/free-immigration-assessment/">free consultation</a> before you spend on exams or assessments.' },
    ],
    related: ['/countries/', '/services/pr-visa/'],
  },
  {
    path: '/resources/', crumb: 'Resources', wide: true,
    title: 'Immigration Guides for Indians | Mountbell Resources',
    description: 'Immigration guides for Indians planning to work or settle abroad: how to avoid visa fraud, answers to common questions, and guides to each route.',
    h1: 'Immigration Guides for Indians',
    lede: 'Plain-language guides to read before you choose a country, an agent or a visa.',
    blocks: [
      { type: 'links', h2: 'Start with these', items: [
        { title: 'How to identify fake immigration agents', meta: 'Guide', text: 'Eight checks to run before you pay anyone, starting with the eMigrate licence search.', href: '/resources/avoid-visa-fraud/' },
        { title: 'Immigration FAQs', meta: 'Index', text: 'Common questions, each linked to the page that answers it in full.', href: '/resources/faqs/' },
      ] },
      { type: 'links', h2: 'Guides by route', items: [
        { title: 'Australia PR and skilled migration', meta: 'PR', text: 'The 189, 190 and 491 visas, the points test and the skills assessment.', href: '/countries/australia/' },
        { title: 'Germany Opportunity Card', meta: 'Germany', text: 'Who qualifies, how the six points are scored and what the card allows.', href: '/countries/germany/opportunity-card/' },
        { title: 'Ausbildung in Germany', meta: 'Germany', text: 'Paid vocational training: language, contract and visa.', href: '/countries/germany/ausbildung/' },
        { title: 'Nursing careers abroad', meta: 'Healthcare', text: 'Five countries and their registration systems compared.', href: '/nursing-careers/' },
        { title: 'The Malta bridging programme', meta: 'Healthcare', text: 'The route to registration for nurses trained outside the EU.', href: '/nursing-careers/malta/' },
        { title: 'The immigration process, step by step', meta: 'Process', text: 'Six stages from assessment to departure.', href: '/how-it-works/' },
      ] },
      { type: 'links', h2: 'Free calculators', items: toolPages.map((t) => ({ title: t.crumb, text: t.description, href: t.path })) },
    ],
  },
  {
    path: '/resources/faqs/', crumb: 'FAQs',
    title: 'Immigration FAQs | Questions on PR, Work Visas and Fees',
    description: 'Immigration FAQs from Kerala applicants on PR, work visas, nursing abroad, fees and fraud. Each question links to the page that answers it in full.',
    h1: 'Immigration FAQs',
    lede: 'An index of the questions we are asked most. Each one links to the page where it is answered properly, so nothing here is out of date.',
    blocks: [
      { type: 'links', h2: 'Choosing a country and a route', items: [
        { title: 'Which country is best for me to migrate to?', text: 'Eight destinations compared by route, language and who they suit.', href: '/countries/' },
        { title: 'Should I apply for PR or a work visa?', text: 'How points-tested PR differs from an employer-sponsored move.', href: '/services/pr-visa/' },
        { title: 'Which routes am I eligible for?', text: 'A two-minute calculator that lists the routes matching your profile.', href: '/tools/immigration-eligibility-checker/' },
      ] },
      { type: 'links', h2: 'Australia and Germany', items: [
        { title: 'How many points do I need for Australia PR?', text: 'The 65-point pass mark and why invitations often need more.', href: '/countries/australia/' },
        { title: 'What is the difference between the 189, 190 and 491 visas?', text: 'The three points-tested visas side by side.', href: '/countries/australia/' },
        { title: 'Can I go to Germany without a job offer?', text: 'The Opportunity Card and its six-point test.', href: '/countries/germany/opportunity-card/' },
        { title: 'How much German do I need?', text: 'The level expected for each German route.', href: '/countries/germany/' },
        { title: 'Is Ausbildung in Germany free?', text: 'What the training allowance covers and what you still pay for.', href: '/countries/germany/ausbildung/' },
      ] },
      { type: 'links', h2: 'Nurses', items: [
        { title: 'Which countries can nurses from Kerala work in?', text: 'Australia, Germany, Malta, the Maldives and Denmark compared.', href: '/nursing-careers/' },
        { title: 'Can GNM nurses work abroad?', text: 'How regulators treat diploma and degree nurses.', href: '/nursing-careers/' },
        { title: 'What is the Malta bridging programme?', text: 'The adaptation route for nurses trained outside the EU.', href: '/nursing-careers/malta/' },
        { title: 'Can I work as a nurse in Germany with English only?', text: 'Why German is required, and the English-speaking alternatives.', href: '/nursing-careers/germany/' },
      ] },
      { type: 'links', h2: 'Fees, documents and safety', items: [
        { title: 'How much does immigration consulting cost?', text: 'How our fee is built, what is paid to others and when.', href: '/fees/' },
        { title: 'What documents do I need for a visa?', text: 'The documents most applicants need and how we check them.', href: '/services/visa-documentation/' },
        { title: 'How long does the process take?', text: 'The six stages and why timelines differ by route.', href: '/how-it-works/' },
        { title: 'How do I know an agent is genuine and licensed?', text: 'Eight checks, starting with eMigrate.', href: '/resources/avoid-visa-fraud/' },
        { title: 'Is Mountbell licensed?', text: 'Our MEA licence number and how to verify it.', href: '/about/licences/' },
        { title: 'Is the first consultation free?', text: 'Yes. Book it here, in Thrissur, Kochi or online.', href: '/free-immigration-assessment/' },
      ] },
    ],
  },
  {
    path: '/resources/avoid-visa-fraud/', crumb: 'Avoid visa fraud', img: 'kerala',
    title: 'How to Identify Fake Immigration Agents | Mountbell',
    description: 'How to identify fake immigration agents and overseas job scams: eight checks to run before you pay, including the eMigrate recruiting agent licence search.',
    label: 'Guide',
    h1: 'How to Identify Fake Immigration Agents',
    lede: 'Every year people in Kerala lose savings to agents who promise jobs and visas that do not exist. These eight checks cost nothing and take less than an hour. Run them on every agent, including us.',
    wa: 'Hi Mountbell, I would like to verify a job offer or an agent.',
    blocks: [
      { type: 'steps', h2: 'Eight checks before you pay', items: [
        { title: 'Search the licence on eMigrate', text: `Recruiting for overseas jobs requires a Recruiting Agent licence from the Ministry of External Affairs. Ask for the number and look it up on <a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">emigrate.gov.in</a>. No licence, or a licence in someone else’s name, means stop.` },
        { title: 'Visit the office', text: 'A genuine agent has a registered office matching the address on the licence. Be wary of agents who only meet in hotels or work entirely over WhatsApp.' },
        { title: 'Ask for the employer’s name', text: 'You should be told who the employer is and be able to look them up independently. “A reputed company in Europe” is not an answer.' },
        { title: 'Read the contract first', text: 'Insist on a written offer stating role, salary, hours, contract length and who pays for flights and accommodation, before you pay a fee.' },
        { title: 'Check the visa type', text: 'A job requires a work visa or work permit. Anyone who suggests travelling on a visit or tourist visa and “converting it later” is putting you at risk of deportation.' },
        { title: 'Pay the company, get a receipt', text: 'Pay by bank transfer to the company’s account and get a receipt. Requests for cash, or for transfers to a personal account, are a warning sign.' },
        { title: 'Keep your passport', text: 'Hand over your original passport only when a visa office needs it, and get an acknowledgement. An agent has no reason to hold it for months.' },
        { title: 'Distrust guarantees', text: 'Visas are decided by foreign governments. An agent who guarantees a visa, a job or PR is promising something that is not theirs to give.' },
      ] },
      { type: 'checks', h2: 'Warning signs in nurse recruitment', items: [
        { title: 'No registration, no exam, no language test', text: 'Every country registers its nurses. An offer that skips the nursing council, the exam and the language requirement is not a nursing job.' },
        { title: 'A “carer” job sold as a route to nursing', text: 'Care assistant work can be legitimate, but it is a different job with different pay and does not convert into nurse registration by itself.' },
        { title: 'Large fees for an interview slot', text: 'Charges to “book” an interview or a seat, before any employer has seen your CV, are a common scam.' },
        { title: 'Pressure to decide today', text: '“Only two seats left” is a sales tactic. A real vacancy survives you taking a day to check the licence.' },
      ] },
      { type: 'prose', h2: 'If something has already gone wrong', body: ['Act quickly, keep every receipt and message, and report it.'], list: [
        'Complain to the Protector of Emigrants. Kerala has offices in Kochi and Thiruvananthapuram.',
        'Call the Pravasi Bharatiya Sahayata Kendra helpline of the Ministry of External Affairs on 1800 11 3090 (toll free in India).',
        'File a complaint at your local police station, with copies of payments and chats.',
        'If you are already abroad, contact the nearest Indian embassy or consulate.',
      ] },
      { type: 'cert', h2: 'Check Mountbell the same way' },
      { type: 'faq', h2: 'Questions about fraud', items: [
        { q: 'Is it legal for an agent without an MEA licence to recruit for jobs abroad?', a: 'No. Under the Emigration Act, 1983, only a registered Recruiting Agent may recruit Indian citizens for overseas employment. Sub-agents working for a licensed agent have no licence of their own, so check whose licence is being used.' },
        { q: 'I received a job offer letter by email. How can I check it?', a: 'Look up the employer independently and contact them through the details on their own website, not those in the email. Check that the role and salary are realistic, and that the visa described is a work visa. Bring the letter to us and we will tell you what we see.' },
        { q: 'Does a licence guarantee I will get the job or the visa?', a: 'No. A licence means the agent is registered and accountable. The employer still decides whom to hire, and the foreign government decides on the visa.' },
      ] },
    ],
    related: ['/about/licences/', '/services/work-visa/', '/fees/'],
  },
];
