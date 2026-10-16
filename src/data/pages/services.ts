import type { Block, Page } from './types';
import { site, waLink } from '../site';

const note = /\s*\[[^\]]*\]/g;
function publish<T>(v: T): T {
  if (typeof v === 'string') return v.replace(note, '') as T;
  if (Array.isArray(v)) return v.filter((x) => typeof x !== 'string' || (x !== '' && !/(:|^)\s*\[[^\]]*\]$/.test(x))).map(publish) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, publish(x)])) as T;
  return v;
}

const contactBlock = (h2: string, text: string, waMsg: string, assessmentText = 'Book a free assessment', assessmentUrl = '/free-immigration-assessment/'): Block => ({
  type: 'prose',
  h2,
  body: [text],
  list: [
    'Call: <a href="tel:+919207014777">+91 9207014777</a>',
    `WhatsApp: <a href="${waLink(waMsg)}" target="_blank" rel="noopener">+91 9207014777</a>`,
    'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
    `Email: <a href="mailto:${site.email}">${site.email}</a>`,
    `<a href="${assessmentUrl}">${assessmentText} →</a>`,
  ],
  after: [
    '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
    '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
  ],
});

const pagesRaw: Page[] = [
  // 1. Services Hub
  {
    path: '/services/',
    crumb: 'Services',
    wide: true,
    title: 'Mountbell Immigration Services – PR, Work Visa & More',
    description: 'Mountbell immigration services in one place: PR, skilled migration, work visas, nursing careers, visa documentation, family and visitor visas. Free assessment.',
    h1: 'Mountbell Immigration Services — Find the Right Service for Your Move Abroad',
    tagline: 'Every service, one team, offices in Thrissur and Kochi.',
    lede: 'Mountbell immigration services help Indian applicants settle, work or reunite with family abroad. We handle permanent residence, work visas, nurse recruitment, skills assessments, visa documents, family and visitor visas, and language coaching, from offices in Thrissur and Kochi and online across India. Start with your goal below, or book a free assessment.',
    acts: { check: 'Book a free assessment', wa: 'WhatsApp an adviser' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why You Can Trust Mountbell',
        items: [
          { title: 'MEA Recruiting Agent Licence', text: `Licence ${site.licence.number} (<a href="${site.licence.verifyUrl}" target="_blank" rel="noopener">verify on eMigrate</a>)` },
          { title: 'Two Kerala Branch Offices', text: 'Offices in Thrissur and Kochi, plus online consultations for overseas migration support across India' },
          { title: 'Complete Verification Before Payment', text: 'Every job offer, document, fee and timeline verified and written down before you start' },
          { title: 'One Dedicated Adviser', text: 'One named consultant stays with your file from assessment to departure across all services' },
        ],
      },
      {
        type: 'links',
        h2: 'What Is Your Goal?',
        intro: 'Most people arrive with a goal, not a visa name. Pick yours, and the right one of our immigration and visa services follows.',
        items: [
          { title: 'Settle abroad permanently', meta: 'PR Visa & Skilled Migration', text: 'Points check, country comparison, expression of interest planning and application support, often with a Skills Assessment first.', href: '/services/pr-visa/' },
          { title: 'I have a job offer abroad', meta: 'Work Visa', text: 'Offer checks, sponsor verification, work permit and visa applications as part of our visa services for Indians moving for work.', href: '/services/work-visa/' },
          { title: 'I am a nurse and want to work overseas', meta: 'Nursing Careers', text: 'Eligibility, registration, language coaching, interviews and visa, country by country, with end-to-end visa support.', href: '/nursing-careers/' },
          { title: 'I want an overseas job in my trade or profession', meta: 'Overseas Jobs', text: 'Match to employers we have verified under our MEA licence, with full overseas migration support.', href: '/overseas-jobs/' },
          { title: 'My spouse or children need to join me', meta: 'Dependent Visa', text: 'Relationship evidence, financial proof and dependant applications for spouses, partners and children.', href: '/services/dependent-visa/' },
          { title: 'I am visiting family or travelling on business', meta: 'Visitor Visa', text: 'Travel plan, funds evidence, invitation letters and appointment booking for tourism, family visits and business trips.', href: '/services/visitor-visa/' },
          { title: 'I am not sure', meta: 'Free Consultation', text: 'Book a free assessment, and an adviser will match you to one or two Mountbell services that fit your profile.', href: '/free-immigration-assessment/' },
        ],
      },
      {
        type: 'links',
        h2: 'Our Immigration and Visa Services, Grouped by Goal',
        intro: 'Every card below links to a full page with eligibility, documents, timelines and fees. All Mountbell immigration services follow the same pattern: who it is for, what we do and how long it usually takes.',
        items: [
          { title: 'PR Visa & Skilled Migration', meta: 'Settle Abroad · 8 to 18 months', text: 'For skilled professionals who want permanent residence abroad. Points check, country comparison, expression of interest planning and application support.', href: '/services/pr-visa/' },
          { title: 'Skills Assessment', meta: 'Settle Abroad · 1 to 4 months', text: 'For applicants whose occupation must be assessed before a PR or work visa. Choose the right assessing body, map duties and prepare reference letters.', href: '/services/skills-assessment/' },
          { title: 'Work Visa', meta: 'Work Abroad · 2 to 6 months', text: 'For people with a job offer, or close to one, who need an employer-sponsored permit. Offer checks, sponsor verification and visa filing.', href: '/services/work-visa/' },
          { title: 'Nursing Careers', meta: 'Work Abroad · 3 to 18 months', text: 'For GNM, BSc and MSc nurses who want to work in Australia, Germany, Malta, the Maldives or the UK. Council registration, language, interviews and visa.', href: '/nursing-careers/' },
          { title: 'Overseas Jobs', meta: 'Work Abroad · 2 to 6 months', text: 'For trades, technicians and other professionals looking for verified roles abroad under our MEA licence.', href: '/overseas-jobs/' },
          { title: 'Dependent Visa', meta: 'Family & Travel · 1 to 6 months', text: 'For spouses, partners and children joining a family member abroad. Relationship evidence, financial proof and dependant applications.', href: '/services/dependent-visa/' },
          { title: 'Visitor Visa', meta: 'Family & Travel · 2 to 8 weeks', text: 'For family visits, business trips and short holidays. Travel plan, funds evidence, invitation letters and appointment booking.', href: '/services/visitor-visa/' },
          { title: 'Visa Documentation', meta: 'Support Services · 2 to 6 weeks', text: 'For anyone who wants their file checked before it reaches an embassy. Document checklists, attestation guidance, form review, medicals and interview prep.', href: '/services/visa-documentation/' },
          { title: 'Language & Test Preparation', meta: 'Support Services · 4 to 12 weeks', text: 'For applicants who need IELTS, OET, PTE or German for a visa, registration or job. Classes at our Thrissur centre, mock tests and score planning.', href: '/services/language-test-preparation/' },
        ],
      },
      {
        type: 'steps',
        h2: 'How Mountbell Immigration Services Work',
        intro: 'Whichever of our immigration and visa services you choose, the same five stages apply, so you always know what comes next.',
        items: [
          { title: 'Free assessment (about 30 minutes)', text: 'An adviser reviews your education, work history, age, language level and goals.' },
          { title: 'Written plan (within 2 working days)', text: 'Your route, documents list, timeline and fees, in writing.' },
          { title: 'Preparation (2 weeks to several months)', text: 'Tests, skills assessment, documents and translations.' },
          { title: 'Application (1 to 4 weeks to lodge)', text: 'We check every form and document before submission.' },
          { title: 'Decision and departure', text: 'Visa result, pre-departure briefing and a named contact after you arrive.' },
        ],
        after: [
          'At every stage, our end-to-end visa support includes a named adviser on WhatsApp and phone, a full document check and an update whenever your case moves. Many applicants use two or three Mountbell services together, and one adviser coordinates all of them.',
          '<a href="/how-it-works/">Read our full step-by-step process guide →</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Who We Can and Cannot Help',
        body: [
          'Mountbell immigration services start with honest advice, not a quick sale. Before you pay, we tell you plainly whether a route fits your profile.',
        ],
        list: [
          'We help: applicants with a realistic route under current rules, and families planning a move together',
          'We say no: when your age, experience, language score or funds do not fit a route, we explain why and suggest what to change first',
          'We never offer: guaranteed visas, visit-visa job offers or cash-only payments',
          'We refer: routes outside our expertise go to a registered specialist, so your overseas migration support is never guesswork',
        ],
        after: [
          'Our end-to-end visa support covers preparation and checks, but the final decision always rests with the government or employer.',
          '<a href="/resources/avoid-visa-fraud/">How to spot fake agents and visa fraud →</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Countries We Cover',
        body: [
          'Our overseas migration support focuses on countries with clear, legal routes for Indian applicants:',
        ],
        list: [
          'Permanent residence: Australia and Canada',
          'Work routes in Europe: Germany, Malta and Denmark, plus selected Eastern European routes',
          'Healthcare roles: Australia, Germany, Malta, the Maldives and the UK',
        ],
        after: [
          'Rules change often, especially for nurses and skilled workers, so we review each route before advising and flag any change that affects your plan.',
          '<a href="/countries/">Compare all eight countries side by side →</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Fees in Plain Terms',
        body: [
          'We believe in total transparency with no hidden surprises:',
        ],
        list: [
          'Fees are charged in stages, and every stage is written down before you start',
          'Third-party costs, such as test, assessment and visa fees, are listed separately',
          'There is no fee for the first assessment on any of our overseas migration support routes',
          'A receipt is issued for every payment',
        ],
        after: [
          'Prices vary by service and country, so each of the Mountbell immigration services above shows its own fee structure on its page.',
          '<a href="/fees/">View fee structure and refund policy →</a>',
        ],
      },
      {
        type: 'links',
        h2: 'Free Tools Before You Book',
        intro: 'Free tools give you a quick first answer before you use any of our visa services for Indians.',
        items: [
          { title: 'Australia PR points calculator', text: 'Estimate your Australia points score in two minutes against the 65-point pass mark.', href: '/tools/australia-pr-points-calculator/' },
          { title: 'Opportunity Card points calculator', text: 'Check the basic requirements and count your Germany Chancenkarte points.', href: '/tools/opportunity-card-points-calculator/' },
          { title: 'Immigration eligibility checker', text: 'A quick first check across our main routes to see where you qualify.', href: '/tools/immigration-eligibility-checker/' },
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What immigration services does Mountbell offer?', a: 'Mountbell immigration services include PR and skilled migration, work visas, skills assessments, visa documentation, dependant visas, visitor visas and language test preparation, plus specialist programmes for nursing careers, overseas jobs and study abroad.' },
          { q: 'Which service should I start with?', a: 'Start with your goal. If you want permanent residence, begin with a PR assessment; if you have a job offer, start with the work visa. If you are unsure, a free 30-minute assessment points you to the right first step.' },
          { q: 'How do I know which service is right for me?', a: 'Our immigration and visa services are grouped by goal on this page. A free assessment then confirms the route and gives you a written plan within 2 working days.' },
          { q: 'Do you offer visa services for Indians outside Kerala?', a: 'Yes. Our visa services for Indians are not limited to Kerala. Most consultations happen online, and our Thrissur and Kochi offices are open for in-person meetings and document hand-over.' },
          { q: 'Can I use more than one service?', a: 'Yes. Many applicants combine Mountbell services, such as test preparation, a skills assessment and a PR application. One adviser coordinates them so nothing is duplicated or missed.' },
          { q: 'How long does each service take?', a: 'It depends on the route and on which Mountbell services you combine. Visitor visas and document checks usually take weeks, work visas two to six months after an offer, and PR eight to eighteen months. Mountbell immigration services always start with a written timeline, so you can plan your job, finances and family around real dates.' },
          { q: 'Does Mountbell guarantee a visa?', a: 'No. Visa decisions are made by governments and employers. We give end-to-end visa support, check every document and explain your chances honestly, but no genuine consultant can guarantee a visa.' },
          { q: 'How do I check that Mountbell is licensed?', a: `Search our recruiting agent licence number, ${site.licence.number}, on the Ministry of External Affairs eMigrate portal and confirm the name and address match.` },
        ],
      },
      contactBlock(
        'Talk to a Mountbell Adviser',
        'Tell us your goal, and we will recommend the right Mountbell immigration services for your profile in a free assessment. Applicants across India can book online or visit our Kerala offices.',
        'Hi Mountbell, I would like to book a free assessment to discuss my immigration options.',
      ),
    ],
    related: ['/countries/', '/how-it-works/', '/fees/'],
  },

  // 2. PR Visa & Skilled Migration
  {
    path: '/services/pr-visa/',
    crumb: 'PR visa and skilled migration',
    label: 'Service',
    img: 'australia',
    accent: 'var(--coral)',
    title: 'PR Visa Consultants in Kerala | Mountbell',
    description: 'PR visa consultants in Kerala: compare Australia and Canada PR routes, check points eligibility, timelines and documents. Thrissur and Kochi. Free assessment.',
    h1: 'PR Visa Consultants in Kerala — Compare PR Routes, Check Eligibility and Apply',
    lede: 'PR visa consultants in Kerala help skilled professionals choose the right country, check their points and prepare an application that holds up. Permanent residency abroad is a long decision, so the first choice matters. Mountbell compares Australia and Canada side by side, plans your skills assessment and English test, and checks every document, from offices in Thrissur and Kochi. Most points-based PR routes take 8 to 18 months from assessment to grant.',
    acts: { check: 'Check my PR eligibility', wa: 'WhatsApp a PR adviser' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Choose Mountbell for PR',
        items: [
          { title: 'Kerala Branch Offices & Online', text: 'Offices in Thrissur and Kochi, plus online consultations across India' },
          { title: 'Transparent Points Estimates', text: 'Honest points estimates for permanent residency abroad before you pay anything' },
          { title: 'One Dedicated Adviser', text: 'One adviser across your English test, skills assessment and PR application' },
          { title: 'Written Staged Fees', text: 'Written fees and timelines at every stage with clear government and service costs' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These facts shape every PR visa for Indians applying from Kerala today:'],
        list: [
          'Australia: 185,000 permanent Migration Program places for 2026–27, with 132,240 in the Skill stream (BDO, May 2026)',
          'Canada: a target of 380,000 new permanent residents in 2026, about 239,800 of them in the economic class (Government of Canada levels plan)',
          'How selection works: points-based PR, where age, education, experience and English decide your score',
          'Before you apply: most routes need a skills assessment for PR and an English test for PR',
          'Typical permanent residence timeline: 8 to 18 months from first assessment to grant',
          'Family: most routes let a PR visa for Indians include your spouse and dependent children in one application',
        ],
      },
      {
        type: 'prose',
        h2: 'What Is Points-Based PR?',
        body: [
          'Points-based PR is a selection system. You earn points for your age, qualification, work experience, English score and other factors, and the government invites the highest-scoring applicants to apply. A strong PR points test score matters more than anything else, because invitations go to the top of the pool, not to everyone who passes the minimum.',
        ],
        list: [
          'Age points: the highest points usually go to applicants aged 25 to 32 or 33, depending on the country',
          'Work experience points: skilled work in your chosen occupation, inside or outside India',
          'English points: a higher IELTS, PTE or CELPIP score can add more points than any other single factor',
        ],
        after: [
          'Among the skilled migration consultants Kerala applicants can choose from, Mountbell starts every case with an honest points estimate, not a sales pitch.',
          'Try our free tools: <a href="/tools/australia-pr-points-calculator/">Australia PR points calculator</a> &nbsp;·&nbsp; <a href="/tools/immigration-eligibility-checker/">Immigration eligibility checker</a>',
        ],
      },
      {
        type: 'table',
        h2: 'Compare PR Pathways: Australia, Canada and Germany',
        intro: 'To compare PR pathways properly, look at four things: points, language, time and what happens after you land. Country pages hold the full process; this section helps you choose. As PR visa consultants in Kerala working across three countries, we have no reason to push you towards one.',
        head: ['Country', 'Route & Selection', 'Language Requirements', 'Typical Time', 'Best For'],
        rows: [
          [
            '<a href="/countries/australia/">Australia</a>',
            'Points-tested skilled migration visa, with independent, regional and state nomination options',
            'IELTS or PTE; higher scores add points',
            '8 to 14 months after invitation',
            'Professionals and tradespeople with a strong points score and a skills assessment in hand',
          ],
          [
            '<a href="/countries/#canada">Canada</a>',
            'Points-ranked federal system (Express Entry) plus provincial programmes',
            'IELTS, CELPIP or PTE Core for English; French adds points',
            'About 6 to 12 months after invitation',
            'Younger, highly educated applicants and those with strong English or French',
          ],
          [
            '<a href="/countries/germany/">Germany</a>',
            'Work first, with a settlement permit after a period of skilled work',
            'German required for most roles (A2–B2)',
            '2 to 6 months to work permit',
            'Applicants who prefer a job-led move in Europe rather than a points-based PR',
          ],
        ],
        note: 'Rules, quotas and invitation rounds are set by each government and change. We confirm current draw thresholds during your assessment.',
      },
      {
        type: 'checks',
        h2: 'PR Eligibility Check: What We Assess',
        intro: 'A free PR eligibility check with Mountbell looks at the same six factors every points-based PR system uses:',
        items: [
          { title: 'Age on Invitation Date', text: 'Points are scored based on your exact age bracket at the time you are invited to apply.' },
          { title: 'Highest Qualification', text: 'Whether your degree or diploma is assessed as equal to a local degree in the target country.' },
          { title: 'Years of Skilled Experience', text: 'Documented, paid employment in your chosen occupation matching official task lists.' },
          { title: 'English Test Score', text: 'IELTS, PTE or CELPIP scores, or setting a realistic target score to maximize points.' },
          { title: 'Occupation Demand', text: 'National and state/provincial shortage lists to determine visa stream eligibility.' },
          { title: 'Proof of Funds', text: 'Demonstrating the required settlement funds where specified by the country.' },
        ],
      },
      {
        type: 'steps',
        h2: 'The PR Visa Process: 8 Steps and Timeline',
        intro: 'This is how the PR visa process usually runs with Mountbell:',
        items: [
          { title: 'Free assessment (week 1)', text: 'Points estimate, occupation verification and country choice.' },
          { title: 'Written plan (within 2 working days)', text: 'Your route, document requirements, expected timeline and staged fees.' },
          { title: 'English test (1 to 3 months)', text: 'IELTS, PTE or CELPIP coaching aiming for the score that gives you the points you need.' },
          { title: 'Skills assessment for PR (1 to 4 months)', text: 'Your qualification and work experience assessed by the right assessing authority.' },
          { title: 'Profile or expression of interest (1 to 2 weeks)', text: 'Submitted in SkillSelect or Express Entry with your points claimed accurately.' },
          { title: 'Invitation to apply (weeks to months)', text: 'Depends on your score and the country\'s periodic invitation rounds.' },
          { title: 'Full application (4 to 8 weeks to prepare)', text: 'PR visa documents, police clearance certificates and panel medical exam.' },
          { title: 'Decision and landing (months, varies by country)', text: 'Visa grant, pre-departure briefing and first-month settlement checklist.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Documents You Will Need',
        body: [
          'Good PR visa consultants in Kerala check each item on your PR application checklist before submission. It usually includes:',
        ],
        list: [
          'Passport and birth certificate',
          'Degree certificates and full transcripts',
          'Skills assessment positive outcome letter',
          'English test result (IELTS, PTE or CELPIP)',
          'Employment letters with detailed duties, salary slips and tax records',
          'Police clearance certificate for every country you have lived in for 12 months or more',
          'Medical examination for PR, booked with an approved panel doctor',
          'Proof of funds for PR, where required by the destination country',
        ],
        after: ['<a href="/services/visa-documentation/">Explore our Visa Documentation service →</a>'],
      },
      {
        type: 'prose',
        h2: 'Cost and Timeline',
        body: [
          'PR visa cost has three parts: government fees, third-party costs and our service fee. Any PR visa consultants in Kerala you consider should show all three in writing.',
        ],
        list: [
          'Government fees: visa application charges for you and each family member',
          'Third-party costs: English test, skills assessment, medicals, police certificates and translations',
          'Mountbell fee: charged in stages and written down before you start',
          'Timeline: plan for 8 to 18 months in total, and budget for each stage separately',
        ],
        after: ['<a href="/fees/">See our full fee structure and refund terms →</a>'],
      },
      {
        type: 'prose',
        h2: 'Including Your Family',
        body: [
          'PR for families is one of the strongest reasons Kerala applicants choose permanent residency abroad. In most points-based PR systems, your spouse and dependent children apply with you in a single application.',
        ],
        list: [
          'PR with spouse: your partner\'s skills or English score can add points in some countries',
          'Children: dependent children are included, and usually access public schooling after landing',
        ],
        after: [
          'Each PR visa for Indians lists every family member at the application stage, so declare everyone from day one.',
          '<a href="/services/dependent-visa/">Learn more about Spouse and Dependent Visas →</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Why Applications Get Refused',
        body: [
          'Most PR rejection reasons are avoidable with careful preparation:',
        ],
        list: [
          'Points claimed that the evidence cannot support, especially work experience',
          'Employment letters without duties, dates or salary details',
          'Missing police certificates or expired medicals',
          'Information that does not match between the profile and the full application',
          'Undeclared previous visa refusals',
        ],
        after: [
          'A PR application review by experienced PR visa consultants in Kerala catches these issues before submission. We check every claim against your evidence before anything is lodged.',
        ],
      },
      {
        type: 'prose',
        h2: 'Who Lodges Your Application',
        body: [
          'Honest advice matters as much as a good points score. As PR visa consultants in Kerala, we explain who does what before you pay. Ask the same of any skilled migration consultants Kerala friends recommend to you.',
          'Australian immigration assistance must come from a registered migration agent (MARA), and Canadian representation from a licensed consultant (CICC) or lawyer. Mountbell assists with file compilation and coordinates with licensed representatives where required by destination regulations.',
          'We never promise a guaranteed invitation, sell job offers for points, or ask for cash-only payments. PR visa scams often promise fast grants or fake employer letters—always check the credentials before paying.',
          '<a href="/resources/avoid-visa-fraud/">Read our guide on how to spot PR visa scams →</a>',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What do PR visa consultants in Kerala do?', a: 'They assess your points, compare countries, plan your English test and skills assessment, and check every document before you apply. A good consultant tells you honestly if your score is too low and what to improve first.' },
          { q: 'Which country is easiest for permanent residency from India?', a: 'There is no single easiest country. Every PR visa for Indians follows the same points logic, but the pass marks and invitation scores differ. Australia suits strong points scorers with an assessed occupation, Canada suits younger applicants with high English scores, and Germany suits those who prefer a job-first route. A free assessment shows which fits you.' },
          { q: 'How long does a PR visa take from Kerala?', a: 'The full PR visa process takes most applicants 8 to 18 months from first assessment to grant. English tests and skills assessments take 2 to 7 months; the rest depends on invitation rounds and government processing.' },
          { q: 'What is the minimum score for points-based PR?', a: 'Each country sets its own pass mark (for example, 65 points for Australia), but meeting the minimum rarely leads to an invitation. Invitations usually go to applicants well above the pass mark, so we plan for a competitive score, not just the bare minimum.' },
          { q: 'Can I include my family in my PR application?', a: 'Yes. Your spouse and dependent children are usually included in the same application. Each family member needs medicals, police certificates where applicable, and identity documents.' },
          { q: 'How much does a PR visa cost from India?', a: 'The cost of a PR visa for Indians depends on the country and family size. Budget for government fees, English tests, skills assessment, medicals and translations, plus our staged service fee. We give you a written estimate after your free assessment.' },
        ],
      },
      contactBlock(
        'Book Your PR Assessment',
        'Speak to Mountbell\'s PR visa consultants in Kerala about your points, your best country and your timeline. We will tell you honestly whether permanent residency abroad is realistic for you now. The first assessment is free.',
        'Hi Mountbell, I would like to book a free PR assessment to check my points eligibility.',
      ),
    ],
    related: ['/countries/australia/', '/services/skills-assessment/', '/services/work-visa/'],
  },

  // 3. Work Visa
  {
    path: '/services/work-visa/',
    crumb: 'Work visa',
    label: 'Service',
    img: 'germany',
    accent: 'var(--amber-deep)',
    title: 'Work Visa Consultants in Kerala | Mountbell',
    description: 'Work visa consultants in Kerala: job offer checks, employer-sponsored work permits, documents and emigration clearance. Thrissur and Kochi. Free assessment.',
    h1: 'Work Visa Consultants in Kerala — Job Offer Checks, Permits and Visa Applications',
    lede: 'Work visa consultants in Kerala help you turn a job offer abroad into a legal, approved right to work. Mountbell checks that the employer and offer are genuine, prepares your documents, guides emigration clearance where it applies and files your application, from offices in Thrissur and Kochi. Most employer-sponsored visa cases take 2 to 6 months from offer to departure.',
    acts: { check: 'Check my work visa eligibility', wa: 'WhatsApp a consultant' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Work With Mountbell for Your Work Visa',
        items: [
          { title: 'Licensed Recruiting Agent', text: `Licensed by the Ministry of External Affairs (${site.licence.number}) on eMigrate` },
          { title: 'Offices in Thrissur & Kochi', text: 'Face-to-face consultations in Kerala plus remote consultations across India' },
          { title: 'Job Offer Verified First', text: 'Every employer and contract verified before you pay any visa processing fee' },
          { title: 'Written Fees and Timelines', text: 'Complete cost breakdown and expected timelines provided in writing before you start' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These facts apply to almost every work visa for Indians, whichever country you choose. Experienced work visa consultants in Kerala should explain each one before you pay:'],
        list: [
          'What you need first: in most countries, a written job offer from an employer licensed to sponsor foreign workers',
          'Typical work visa timeline: 2 to 6 months from offer to departure, depending on country',
          'Language requirement for work visa: English for most roles; German, Polish or another language for some European jobs',
          'India-specific step: clearance on eMigrate if you hold an ECR passport and are going to an ECR country',
        ],
      },
      {
        type: 'prose',
        h2: 'What Is a Work Visa?',
        body: [
          'A work visa, or work permit, lets you live and work in another country for a set employer or role, usually for one to four years at a time. It is different from permanent residence: you are admitted because a job is waiting for you, not because of a points score. Many countries call their main route a skilled worker visa, and almost all of them depend on a sponsoring employer.',
        ],
        list: [
          'Employer-sponsored visa: the employer applies for, or supports, your permit',
          'Fixed terms: a work permit usually lasts for the length of your contract and can be renewed',
          'Change of employer: usually needs a new permit or approval, so read your contract before you sign',
        ],
        after: ['<a href="/services/pr-visa/">Compare work visa with PR visa →</a>'],
      },
      {
        type: 'prose',
        h2: 'The Job-Offer Visa Process: Do You Need an Offer First?',
        body: [
          'For most routes, yes. The job-offer visa process starts with a real offer, then moves to the permit and visa. A few countries have job-search routes that let you travel first and look for work, but they still end in an employer-sponsored visa once you are hired.',
          '• With an offer: we verify the employer and contract, then file your work permit and visa.<br />• Without an offer: we help you prepare a strong profile and point you to our Overseas Jobs team or a country\'s job-search route.<br />• Never: pay for a "guaranteed job" or a visit visa that promises to become a job later.',
          'As work visa consultants in Kerala, we handle the visa side. Finding vacancies sits with our Overseas Jobs team, so each stage has a specialist.',
          '<a href="/overseas-jobs/">Explore Overseas Jobs opportunities →</a>',
        ],
      },
      {
        type: 'table',
        h2: 'Countries We Handle',
        intro: 'Here is where Mountbell files permits and what each suits best, as work visa consultants in Kerala covering ten countries:',
        head: ['Country', 'Focus Roles', 'Key Details'],
        rows: [
          ['<a href="/countries/germany/">Germany</a>', 'Skilled trades, engineering, IT and healthcare', 'German language required for most regulated roles; settlement permit pathway'],
          ['<a href="/countries/malta/">Malta</a>', 'Hospitality, care, construction and trades', 'English-speaking EU country; single work and residence permit'],
          ['<a href="/countries/#netherlands">Netherlands</a>', 'Highly skilled roles', 'Requires a recognised sponsor; English-speaking workplace environment'],
          ['<a href="/countries/#denmark">Denmark</a>', 'Skilled shortage occupations', 'Shortage lists; healthcare routes currently restricted for Indian nurses'],
          ['<a href="/countries/#europe">Poland, Latvia, Lithuania, Bulgaria</a>', 'Welding, construction, logistics, factory roles', 'Employer-led work permit, followed by national employment visa'],
          ['<a href="/countries/#maldives">Maldives</a>', 'Healthcare, hospitality and technical roles', 'Fixed contracts; fast processing; no income tax on local earnings'],
          ['<a href="/nursing-careers/">UK</a>', 'Registered nurses only', 'Health and Care Worker visa through our Nursing Careers team'],
        ],
        note: 'For Australia and Canada, most applicants are better served by a PR route, which our PR team compares for you.',
      },
      {
        type: 'checks',
        h2: 'Check Your Job Offer Before You Pay',
        intro: 'Fake job offers are the biggest risk in overseas hiring. Before any permit is filed, Mountbell runs a job offer verification that every applicant can understand:',
        items: [
          { title: 'Sponsor verification', text: 'We check the employer\'s registration and its legal right to hire foreign workers.' },
          { title: 'Employment contract check', text: 'Salary, hours, duties, accommodation, notice period and who pays for flights.' },
          { title: 'Salary threshold check', text: 'We confirm the pay meets the destination country\'s statutory minimum for that permit.' },
          { title: 'Red flag identification', text: 'Offers that arrive without an interview, requests for cash, or a visit visa in place of a permit.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Work Visa Process: 7 Steps and Timeline',
        intro: 'This is how a typical case moves, with times for each step. Reliable work visa consultants in Kerala give you this plan in writing:',
        items: [
          { title: 'Free assessment (week 1)', text: 'Work visa eligibility, your offer or job plans, and the best country.' },
          { title: 'Offer and employer check (3 to 7 days)', text: 'Sponsor verification and employment contract review.' },
          { title: 'Documents (2 to 4 weeks)', text: 'Certificates, experience letters, attestation for work visa and translations.' },
          { title: 'Work permit filing (2 to 12 weeks)', text: 'The employer or authority approves your work permit.' },
          { title: 'Visa application (2 to 6 weeks)', text: 'Visa application and work visa interview where required.' },
          { title: 'Clearance (1 to 2 weeks, if applicable)', text: 'eMigrate registration and clearance for ECR passport holders.' },
          { title: 'Pre-departure orientation (week of travel)', text: 'Contract, arrival, accommodation and first-week checklist.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Work Visa Documents',
        body: [
          'Good work visa consultants in Kerala check every item before filing. Your work visa documents usually include:',
        ],
        list: [
          'Passport valid for your full contract period plus a margin; each country sets its own minimum',
          'Signed job offer and employment contract',
          'Work permit approval letter, once issued',
          'Educational certificates and trade certificates, with attestation where required',
          'Experience letters with duties and dates',
          'Police clearance for work visa, from the Passport Seva portal',
          'Medical test for work visa, at an approved clinic where the country requires one',
        ],
        after: ['<a href="/services/visa-documentation/">See full Visa Documentation requirements →</a>'],
      },
      {
        type: 'prose',
        h2: 'Emigration Clearance and eMigrate',
        body: [
          'Indian citizens with an ECR passport need emigration clearance before travelling to work in one of the 18 ECR countries, which include the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and Malaysia. The current list is published on eMigrate. Employers and licensed recruiting agents register the job on eMigrate, and you complete eMigrate registration before departure.',
          '• ECR passport: check the stamp or note on your passport\'s address page.<br />• Licensed agent: only licensed recruiting agents can process recruitment for ECR countries; check our licence on eMigrate.',
        ],
      },
      {
        type: 'prose',
        h2: 'Bringing Your Family & Transition to PR',
        body: [
          'A work visa with family is possible in most of our countries, though rules differ for each work visa for Indians. Some permits let your spouse and children join from the start; others ask for a minimum salary, housing or a waiting period first. Learn more on our <a href="/services/dependent-visa/">Dependent Visa page</a>.',
          'For many professionals, work visa to PR is the most reliable route to settling abroad. After a period of skilled work, several countries let you apply for permanent residence or a long-term permit. We plan your skilled worker visa with that next step in mind, tracking permit expiry and guiding renewals before they lapse.',
        ],
      },
      {
        type: 'prose',
        h2: 'Who We Help',
        body: ['We process work visa applications across multiple high-demand categories:'],
        list: [
          'Skilled trades work visa applicants: welders, fitters, electricians, plumbers and drivers',
          'Healthcare work visa applicants: nurses, care workers and allied health staff (with our Nursing Careers team)',
          'IT work visa applicants: developers, engineers and analysts on employer-sponsored visas',
          'Work visa for freshers: limited, but possible in specific trades and countries',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Case Runs',
        body: [
          '<em>This is an illustrative example, not a client record:</em>',
          '• Profile: a welder from Thrissur with five years\' experience and a written offer from a fabrication company in Poland<br />• Week 1: free assessment and employer check; contract reviewed for salary, hours and housing<br />• Weeks 2 to 4: certificates attested, experience letters and police clearance collected<br />• Weeks 5 to 12: permit approved in Poland<br />• Weeks 13 to 16: visa appointment, medical, orientation and travel<br />• Total: about four months from offer to first shift',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What do work visa consultants in Kerala do?', a: 'They verify your job offer and employer, prepare and check your documents, file the work permit and visa, and guide emigration clearance where needed.' },
          { q: 'Can I get a work visa without a job offer?', a: 'For most countries, no. The job-offer visa process needs an employer. A few countries offer job-search routes, but you still need an employer and a work permit to start working. Be wary of anyone selling a job offer for a fee.' },
          { q: 'How long does a work visa take from Kerala?', a: 'Most employer-sponsored visa cases take 2 to 6 months from offer to departure. The work permit and visa decision take the longest, and they are set by the destination country.' },
          { q: 'Do I need emigration clearance?', a: 'Only if you hold an ECR passport and are going to work in an ECR country. We check your passport and destination during the free assessment.' },
          { q: 'How do I know a job offer is genuine?', a: 'Check that the employer is registered and allowed to sponsor foreign workers, that you had a real interview, and that the contract states salary, duties and hours.' },
        ],
      },
      contactBlock(
        'Book Your Work Visa Assessment',
        'Speak to Mountbell\'s work visa consultants in Kerala about your offer, your country and your timeline. We also explain whether a work visa for Indians in your trade leads to PR later. The first assessment is free.',
        'Hi Mountbell, I have a job offer or work visa enquiry and would like to verify it.',
      ),
    ],
    related: ['/overseas-jobs/', '/nursing-careers/', '/services/visa-documentation/'],
  },

  // 4. Visa Documentation
  {
    path: '/services/visa-documentation/',
    crumb: 'Visa documentation',
    label: 'Service',
    title: 'Visa Documentation Services Kerala | Mountbell',
    description: 'Visa documentation services Kerala applicants trust: checklists, file review, translations, medicals and interview preparation. Thrissur and Kochi. Free check.',
    h1: 'Visa Documentation Services Kerala — Checklists, File Review, Medicals and Interview Preparation',
    lede: 'Visa documentation services Kerala applicants use should catch problems before an embassy does. Mountbell builds your visa document checklist, checks every certificate, translation and form, books your medicals and appointments, and prepares you for the embassy interview, from offices in Thrissur and Kochi. Most files are ready to submit in 2 to 6 weeks.',
    acts: { check: 'Get my free checklist', wa: 'WhatsApp an adviser' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Mountbell Documentation Services',
        items: [
          { title: 'Licensed Recruiting Agent', text: `Licensed by the Ministry of External Affairs (${site.licence.number}) on eMigrate` },
          { title: 'Thrissur & Kochi Offices', text: 'Offices in Thrissur and Kochi, plus online file reviews across India' },
          { title: 'Checked Against Current Rules', text: 'Every document checked against the embassy\'s current list before submission' },
          { title: 'Clear Fees in Writing', text: 'Written fees and timelines before you start, with receipts for every stage' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These facts apply to most visa applications made from Kerala, and they shape the visa documentation services Kerala applicants receive from us:'],
        list: [
          'Typical preparation time: 2 to 6 weeks, longer if certificates need attestation or correction',
          'Attestation: Kerala-issued certificates are usually authenticated by the state, often through NORKA Roots centres, before Ministry of External Affairs apostille or embassy attestation',
          'Translations: Malayalam documents usually need a certified English translation',
          'Appointments: most embassies use an appointment centre for biometrics, and availability changes week to week',
          'Medicals: many work, PR and long-stay visas need a check-up at an approved panel clinic',
          'The decision: always made by the embassy or immigration authority, never by an agent',
        ],
      },
      {
        type: 'checks',
        h2: 'What Our Visa Documentation Service Covers',
        intro: 'Visa documentation services Kerala families book with Mountbell cover the whole file, not just the form:',
        items: [
          { title: 'Visa document checklist', text: 'Built for your visa type and country, not copied from a generic list.' },
          { title: 'Document verification', text: 'Names, dates and numbers matched across your passport, certificates and forms.' },
          { title: 'Visa application form review', text: 'Every answer checked against your supporting evidence.' },
          { title: 'Certified translations and notarisation', text: 'Arranged where the embassy requires certified English copies.' },
          { title: 'Financial evidence guidance', text: 'Bank statement formatting for visa purposes and proof of funds documents.' },
          { title: 'Sponsorship and invitation letters', text: 'Clear letters from employers, family hosts or sponsors.' },
          { title: 'Visa medicals booking', text: 'Appointments at panel clinics approved by the destination government.' },
          { title: 'Biometrics and appointment booking', text: 'Securing slots at VFS or embassy appointment centres.' },
          { title: 'Embassy interview preparation', text: 'Likely interview questions and a mock session beforehand.' },
          { title: 'Final file review', text: 'Two-stage check before submission with a written list of any missing items.' },
        ],
      },
      {
        type: 'prose',
        h2: 'What to Bring to Your First Meeting & Avoiding Delays',
        body: [
          'To get the most from our visa documentation services in Thrissur or Kochi, bring: your passport and any old passports, your highest qualification certificate, any job offer, invitation or admission letter, and details of any previous visa refusal. With these, we can issue your visa document checklist within 2 working days.',
          'Most delays come from small, avoidable gaps: a name mismatch between certificates, unexplained sudden deposits in bank statements, missing certified translations, or form answers that contradict supporting documents. A visa file review catches these before you pay the visa fee.',
        ],
        after: ['<a href="/resources/avoid-visa-fraud/">Read our guide to avoiding visa refusal reasons →</a>'],
      },
      {
        type: 'steps',
        h2: 'The Visa Filing Process: 7 Steps and Timeline',
        intro: 'This is how a typical case runs with visa documentation services Kerala clients use through Mountbell:',
        items: [
          { title: 'Free file check (day 1)', text: 'We confirm your visa type and what the embassy will ask for.' },
          { title: 'Personal visa document checklist (within 2 working days)', text: 'Every item, its source and its deadline.' },
          { title: 'Collection (1 to 3 weeks)', text: 'Certificates, letters, bank statements and photos.' },
          { title: 'Attestation and translations (1 to 3 weeks, if needed)', text: 'Certified translations, notarisation and attestation.' },
          { title: 'Form and visa file review (2 to 4 days)', text: 'Every page checked against your evidence.' },
          { title: 'Appointments and medicals (1 to 3 weeks)', text: 'Biometrics at a VFS appointment, plus a panel clinic check-up where required.' },
          { title: 'Submission and interview (on appointment date)', text: 'Embassy interview preparation the week before.' },
        ],
        after: ['Total time is usually 2 to 6 weeks. After submission, processing time is set by the embassy.'],
      },
      {
        type: 'prose',
        h2: 'Documents Most Embassies Ask For',
        body: ['Every visa document checklist is different, but most include:'],
        list: [
          'Passport with enough validity and blank pages, plus old passports',
          'Photos that meet the visa photo requirements of that country',
          'Completed application form and fee receipt',
          'Educational certificates and transcripts',
          'Employment letters, payslips and tax records',
          'Bank statements and proof of funds',
          'Police certificate and medical report, where required',
          'Travel insurance for visa purposes, mainly for visitor and Schengen-area short stays',
          'Marriage or birth certificates for family members',
        ],
        after: [
          '<a href="/services/visitor-visa/">Visitor Visa requirements →</a> &nbsp;·&nbsp; <a href="/services/dependent-visa/">Dependent Visa requirements →</a>',
        ],
      },
      {
        type: 'checks',
        h2: 'Attestation, Translations and Name Mismatches',
        intro: 'These three issues cause the most rework for applicants from Kerala:',
        items: [
          { title: 'Document attestation guidance', text: 'Which documents need state authentication (NORKA Roots), MEA apostille or embassy attestation.' },
          { title: 'Educational verification', text: 'University transcript verification and direct council confirmation.' },
          { title: 'Translations from Malayalam', text: 'Certified English translations with the registered translator\'s stamp on each page.' },
          { title: 'Birth certificate corrections', text: 'Guidance on resolving missing names on older Kerala birth records at local registrar offices.' },
          { title: 'Affidavits for name change', text: 'Sworn affidavits and gazette notices linking two spellings or initials across documents.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Visa Medicals & Embassy Interview Preparation',
        body: [
          'Many work, PR and long-stay visas need visa medicals at an approved panel clinic. Appointments are typically booked 1 to 2 weeks ahead, covering physical check, chest X-ray and blood tests. Results are sent directly to immigration authorities.',
          'Where visas require an embassy interview, preparation makes a critical difference. We conduct a mock session 2 to 3 days before your appointment, review your job, employer, funds and travel plans, and organise your documents into an ordered folder. Answers must match your file exactly; we never coach false answers.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cost and Timeline',
        body: [
          'Visa documentation services Kerala agencies charge in different ways, so we show every cost in writing:',
        ],
        list: [
          'Embassy and appointment-centre fees: paid directly to them',
          'Third-party costs: translations, attestation, medicals and photos',
          'Mountbell fee: charged in stages, written down before you start and listed on our Fees page',
          'Timeline: 2 to 6 weeks to a submission-ready file',
        ],
        after: ['<a href="/fees/">View our full fee schedule →</a>'],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical File Comes Together',
        body: [
          '<em>This is an illustrative example, not a client record:</em>',
          '• Profile: a staff nurse from Thrissur joining a hospital in Malta<br />• Week 1: free file check; checklist issued with 14 items<br />• Weeks 2 to 3: certified translations, attestation and council verification<br />• Week 4: visa file review; one name mismatch fixed with an affidavit<br />• Week 5: biometrics and visa medicals<br />• Total: about 5 weeks to a submission-ready file',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What do visa documentation services Kerala applicants use include?', a: 'They cover a personal checklist, document verification, translations and attestation guidance, form review, appointment and medical booking, interview preparation and a final file review before submission.' },
          { q: 'How long does it take to prepare a visa file?', a: 'Usually 2 to 6 weeks of preparation before visa filing. Files that need attestation, corrections or translations take longer, so start as soon as you decide to apply.' },
          { q: 'Can you guarantee my visa?', a: 'No. The embassy decides every case. A complete, honest and consistent file gives you the best chance, and we tell you if anything looks weak.' },
          { q: 'Do I need my Malayalam documents translated?', a: 'Usually yes. Most embassies ask for a certified English translation of any document not in English, with the translator\'s details.' },
          { q: 'What if my name is spelled differently on my documents?', a: 'Fix it before you apply. An affidavit, and sometimes a gazette notice, can link the two spellings; your adviser tells you which your embassy accepts.' },
          { q: 'Can you help if my visa was refused before?', a: 'Yes. We read the refusal letter, fix the reasons it gives and rebuild the file with a full visa file review before you reapply.' },
        ],
      },
      contactBlock(
        'Book Your Free File Check',
        'Speak to Mountbell about visa documentation services Kerala applicants rely on for work, PR, family and visitor visas. Your first file check is free.',
        'Hi Mountbell, I need documentation and file review support for my visa application.',
        'Get my free checklist',
      ),
    ],
    related: ['/services/work-visa/', '/services/pr-visa/', '/services/skills-assessment/'],
  },

  // 5. Skills Assessment
  {
    path: '/services/skills-assessment/',
    crumb: 'Skills assessment',
    label: 'Service',
    title: 'Skills Assessment Assistance Kerala | Mountbell',
    description: 'Skills assessment assistance Kerala applicants trust: VETASSESS, ACS, TRA, AITSL, Engineers Australia and WES. Documents, timelines and fees. Free check.',
    h1: 'Skills Assessment Assistance Kerala — VETASSESS, ACS, TRA, AITSL and Engineers Australia',
    lede: 'Skills assessment assistance Kerala professionals can rely on starts with one question: which authority must assess your occupation, and what evidence will it accept? Mountbell identifies the right body, maps your duties to your nominated occupation, checks every reference letter and prepares a complete file, from offices in Thrissur and Kochi. Most assessments take 4 to 15 weeks once the file is complete.',
    acts: { check: 'Check my occupation', wa: 'WhatsApp an adviser' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Choose Mountbell for Skills Assessment',
        items: [
          { title: 'Licensed Recruiting Agent', text: `Licensed by the Ministry of External Affairs (${site.licence.number}) on eMigrate` },
          { title: 'Offices in Thrissur & Kochi', text: 'In-person consultations across central Kerala, plus online support across India' },
          { title: 'Line-by-Line Document Checks', text: 'Every employment reference letter checked against the assessing authority\'s guidelines' },
          { title: 'Honest Occupation Advice', text: 'Clear advice on nominated occupation suitability before you pay any authority fees' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These figures come from published fee schedules (August 2026) and WES. Fees are in Australian dollars unless stated. Skills assessment assistance Kerala applicants receive from Mountbell is planned around these timelines:'],
        list: [
          'VETASSESS skills assessment (professional occupations): about 7 weeks; A$1,096 offshore, with priority processing in 10 business days for an extra fee',
          'ACS skills assessment (ICT occupations): 4 to 6 weeks if no further information is requested; A$1,498 plus GST',
          'Engineers Australia CDR: about 15 weeks to reach an assessor, or 20 business days with fast-track assessment',
          'TRA (trades): typically within 120 days; the Offshore Skills Assessment Program typically within 15 weeks',
          'AITSL assessment (teachers): most ready applications within 4 weeks',
          'WES ECA (Canada credential recognition): about 2 weeks to verify documents, then about 1 week to evaluate',
          'Skills assessment validity: usually two to three years, depending on the authority',
        ],
      },
      {
        type: 'prose',
        h2: 'What Is a Skills Assessment?',
        body: [
          'A skills assessment is an official check, by an authority the government appoints, that your qualification and work experience match the occupation you are applying under. Most skilled migration routes to Australia need one before you can apply, and Canada needs an educational credential assessment for foreign degrees. It is a form of credential recognition, not a visa. A positive skills assessment lets you move to the next step; a negative skills assessment means the authority did not accept your evidence for that occupation.',
        ],
        list: [
          'Qualification assessment: is your degree or diploma comparable to the local standard?',
          'Work experience assessment: is your experience skilled, relevant and paid, and how many years count?',
        ],
        after: ['<a href="/services/pr-visa/">How skills assessments fit into PR →</a>'],
      },
      {
        type: 'links',
        h2: 'Which Assessing Authority Do You Need?',
        intro: 'The authority depends on your nominated occupation, not on your preference. Choosing the wrong nominated occupation is the most common and most expensive mistake.',
        items: [
          { title: 'VETASSESS', meta: 'Professional occupations', text: 'For more than 300 professional and general occupations, such as accountants, managers, marketing specialists and scientists. Checks qualification level and highly relevant employment.' },
          { title: 'ACS (Australian Computer Society)', meta: 'ICT occupations', text: 'For software engineers, developers, systems analysts and network engineers. If your degree is not ICT-major, an RPL report showing your knowledge may be needed.' },
          { title: 'Engineers Australia', meta: 'Engineers', text: 'For professional engineers, engineering technologists and associates. Most Indian degrees go through the competency demonstration report (CDR) pathway, written in your own words.' },
          { title: 'TRA (Trades Recognition Australia)', meta: 'Trades', text: 'For welders, fitters, electricians, mechanics, chefs and other trades needing a TRA skills assessment. Includes technical interview and practical assessment on some pathways.' },
          { title: 'AITSL', meta: 'Teachers', text: 'For early childhood, primary and secondary teachers. Requires a four-year teaching qualification or equivalent, plus supervised teaching practice.' },
          { title: 'ANMAC', meta: 'Nurses & Midwives', text: 'For registered nurses and midwives on skilled visas.', href: '/nursing-careers/australia/' },
          { title: 'WES ECA', meta: 'Canada', text: 'For credential recognition of foreign degrees in Canadian immigration. Transcripts are sent directly by your university.' },
          { title: 'Germany Credential Recognition', meta: 'Anerkennung', text: 'Degree comparability and vocational credential recognition for jobs in Germany.', href: '/countries/germany/' },
        ],
      },
      {
        type: 'checks',
        h2: 'How Our Skills Assessment Assistance Works',
        intro: 'Skills assessment assistance Kerala professionals receive from Mountbell covers six key areas:',
        items: [
          { title: 'Occupation choice', text: 'We compare your duties with each possible nominated occupation and its occupation code before you pay any fee.' },
          { title: 'Duty mapping', text: 'We match your real responsibilities to the assessing authority\'s official task list.' },
          { title: 'Employment reference letter review', text: 'Dates, hours, salary and a detailed duties statement, signed on official company letterhead.' },
          { title: 'Report guidance', text: 'For a CDR or RPL report, we explain the format and review your draft; content must be your own work.' },
          { title: 'Document verification', text: 'Certified copies, translations and identity documents matched to each authority\'s strict checklist.' },
          { title: 'Follow-up and submission', text: 'We track your application and prepare prompt responses to any request for further information.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Skills Assessment Process: 7 Steps and Timeline',
        intro: 'This is how a typical case moves with skills assessment assistance Kerala engineers, teachers and IT staff book through Mountbell:',
        items: [
          { title: 'Free occupation check (week 1)', text: 'We confirm the authority and the best occupation code for your profile.' },
          { title: 'Written plan (within 2 working days)', text: 'Documents list, authority fees and expected timeline.' },
          { title: 'Skills assessment documents (2 to 4 weeks)', text: 'Degree certificates, transcripts and employment reference letters.' },
          { title: 'Report preparation (2 to 6 weeks, if needed)', text: 'Your CDR or RPL report, written by you and reviewed by us.' },
          { title: 'Submission (week of filing)', text: 'Fees paid directly to the assessing authority.' },
          { title: 'Assessment (4 to 15 weeks)', text: 'Processing time depends on the authority and whether priority processing is chosen.' },
          { title: 'Outcome (on decision)', text: 'We explain the positive result and proceed immediately to your EOI or visa filing.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Skills Assessment Documents & Why Assessments Fail',
        body: [
          'Skills assessment assistance Kerala applicants receive from us starts with the right paperwork: passport bio page, degree or diploma certificates and full transcripts, employment reference letters on company letterhead (with start/end dates, hours per week, salary and detailed duties), and payslips, bank statements or tax records as proof of paid employment.',
          'Most negative outcomes come from evidence gaps, not lack of ability: the nominated occupation does not match duties described, reference letters list only vague titles, unpaid work was counted, or documents were uncertified. After a negative outcome, most authorities offer a skills assessment review or appeal within a set period. We review the reasons with you and fix the evidence before choosing a review or a fresh application.',
        ],
        after: ['<a href="/services/visa-documentation/">See full document verification services →</a>'],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical ACS Case Runs',
        body: [
          '<em>This illustrative example shows a typical ACS skills assessment for Indians in IT:</em>',
          '• Profile: a software developer from Kochi with a B.Tech in computer science and six years of experience<br />• Week 1: occupation check and duty mapping against the ACS guidelines<br />• Weeks 2 to 3: reference letters reissued with full duties; payslips collected<br />• Week 4: file submitted to the ACS<br />• Weeks 5 to 10: assessment, with no further information requested<br />• Total: about 10 weeks from first meeting to a positive outcome',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What does skills assessment assistance Kerala applicants use actually include?', a: 'It covers choosing the right occupation and authority, mapping your duties, checking reference letters and skills assessment documents, reviewing any written report, submitting the application and handling requests for more information.' },
          { q: 'How long does a skills assessment for Indians take?', a: 'Most take 4 to 15 weeks after a complete submission: about 4 to 6 weeks for the ACS, about 7 weeks for a VETASSESS skills assessment of a professional occupation and about 15 weeks for Engineers Australia without fast-track. Collecting evidence usually adds 2 to 6 weeks before that.' },
          { q: 'Can Mountbell write my CDR or RPL report?', a: 'No. Authorities require the report to be your own work and check for copied content. We explain the format, show you what assessors look for and review your draft.' },
          { q: 'What happens if my assessment is negative?', a: 'Most authorities offer a review or appeal within a set period, and sometimes a fresh application under a better-matched occupation is the stronger choice.' },
          { q: 'How long is a skills assessment valid?', a: 'Usually two to three years from the outcome date, depending on the authority.' },
          { q: 'Do I need a skills assessment for Canada?', a: 'For most economic programmes, you need an educational credential assessment for any foreign degree you claim; it is Canada\'s credential recognition step. WES is one of the designated organisations.' },
        ],
      },
      contactBlock(
        'Book Your Free Occupation Check',
        'Speak to Mountbell about skills assessment assistance Kerala applicants use for Australia and Canada. We confirm your authority, occupation and timeline in a free call.',
        'Hi Mountbell, I would like to check which skills assessment authority assesses my occupation.',
        'Check my occupation',
      ),
    ],
    related: ['/services/pr-visa/', '/services/work-visa/', '/countries/australia/'],
  },

  // 6. Spouse & Dependent Visa
  {
    path: '/services/dependent-visa/',
    crumb: 'Dependent visa',
    label: 'Service',
    title: 'Spouse and Dependent Visa Consultants Kerala | Mountbell',
    description: 'Spouse and dependent visa consultants Kerala families trust: partner visas, family reunification, children\'s visas, documents and timelines. Free family check.',
    h1: 'Spouse and Dependent Visa Consultants Kerala — Bring Your Spouse and Children Abroad',
    lede: 'Spouse and dependent visa consultants Kerala families work with should answer one question first: can your family travel with you, or must they join later? Mountbell checks the rules for your country and visa, builds the relationship and financial evidence, and files each family member\'s application, from offices in Thrissur and Kochi. Most spouse and child applications take 1 to 6 months, depending on the country.',
    acts: { check: 'Check my family\'s options', wa: 'WhatsApp an adviser' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Choose Mountbell for Dependent Visas',
        items: [
          { title: 'Licensed Recruiting Agent', text: `Licensed by the Ministry of External Affairs (${site.licence.number}) on eMigrate` },
          { title: 'Offices in Thrissur & Kochi', text: 'Offices in Thrissur and Kochi, plus online consultations across India' },
          { title: 'Complete Evidence Verification', text: 'Every relationship, accommodation and income document checked before filing' },
          { title: 'Written Fees and Timelines', text: 'Written fees and timelines before you start, so there are no surprises' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These rules shape most family applications from Kerala today:'],
        list: [
          'UK: most partner applications under the family rules need a sponsor income of at least £29,000 a year, a level in place since April 2024 (Davidson Morris, February 2026)',
          'Canada: since January 2025, a spouse\'s open work permit usually depends on the worker holding a high-skilled (TEER 0 or 1) or selected job, and dependent children no longer get their own',
          'Germany: spouses of skilled workers do not usually need to prove German before joining',
          'Australia: a spouse and dependent children can usually be included as secondary applicants on skilled and employer-backed visas',
          'Typical spouse visa processing time: 1 to 6 months after a complete application',
        ],
        after: ['Rules change often, so we check yours before you apply.'],
      },
      {
        type: 'checks',
        h2: 'Which Family Route Fits You?',
        intro: 'There are four common routes, and the right one depends on your own visa:',
        items: [
          { title: 'Travelling together', text: 'Your spouse and children are added to your work or PR application as secondary applicants from the beginning.' },
          { title: 'Joining later', text: 'A family reunification application lodged after you have started work and secured suitable housing.' },
          { title: 'Partner of a citizen or PR', text: 'A partner visa based directly on your relationship, with the sponsor meeting statutory income rules.' },
          { title: 'Children only', text: 'A dependent visa for children, supported by custody consent letters from the other parent where applicable.' },
        ],
        after: [
          'Spouse and dependent visa consultants Kerala families trust should explain which route is faster for you, not just which form to fill in.',
          '<a href="/services/work-visa/">Work Visa options →</a> &nbsp;·&nbsp; <a href="/services/pr-visa/">PR Visa options →</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Partner Visa or Dependant Visa: What Is the Difference?',
        body: [
          'Choosing the wrong route is a common reason for wasted fees and long delays:',
        ],
        list: [
          'A partner visa is for the husband or wife of a citizen or permanent resident; the relationship itself is the basis of the application',
          'A dependant visa is for the family of someone who holds a work, study or skilled visa, and it usually ends when the main visa ends',
          'Family sponsorship means the sponsor signs to support you, and some countries hold the sponsor to that promise for years',
          'A family visa linked to a job is often quicker to get, while the partner route usually leads to settlement sooner',
        ],
      },
      {
        type: 'table',
        h2: 'Country Rules for Spouses and Children',
        intro: 'Each country handles family sponsorship differently. Here is the short version; each country page has the full detail:',
        head: ['Country', 'Spouse Route', 'Work Rights & Conditions'],
        rows: [
          ['<a href="/countries/australia/">Australia</a>', 'Secondary applicant or Partner Visa', 'Family members usually apply together as secondary applicants; work rights included on most skilled visas'],
          ['<a href="/countries/#canada">Canada</a>', 'Open work permit or dependant', 'Spouse work rights depend on main applicant holding TEER 0 or 1 high-skilled job'],
          ['<a href="/nursing-careers/">UK</a>', 'Dependant or Family Route', 'Dependants of skilled workers/nurses; partner visa with £29k minimum income for settled sponsors'],
          ['<a href="/countries/germany/">Germany</a>', 'Family reunification', 'For spouses and children of skilled workers, usually after residence permit and housing are secured; no German required initially'],
          ['<a href="/countries/malta/">Malta & Europe</a>', 'Family reunification', 'Possible after a period of stable residence and regular income proof'],
          ['<a href="/countries/#maldives">Maldives</a>', 'Employer family contract', 'Family visas depend directly on the employer sponsorship contract'],
        ],
      },
      {
        type: 'prose',
        h2: 'Relationship Evidence and Documents',
        body: [
          'A genuine relationship has to be shown on paper. These spouse visa documents are the core of most files:',
        ],
        list: [
          'Marriage certificate for visa use, registered with the local body; marriage registration in Kerala can be done at the panchayat or municipality office',
          'Wedding photos with family, invitation card and proof of the ceremony',
          'Joint bank account statements, insurance or property in both names',
          'Call logs, messages and travel records if you have lived apart',
          'Birth certificate for children, showing both parents\' names',
          'Passports for every family member',
        ],
        after: [
          'Each embassy has its own list, so we turn your situation into a personal family visa checklist.',
          '<a href="/services/visa-documentation/">Explore our Visa Documentation services →</a>',
        ],
      },
      {
        type: 'checks',
        h2: 'Financial and Accommodation Requirements',
        intro: 'Under family sponsorship, most countries want proof that the sponsor can support the family without public funds:',
        items: [
          { title: 'Sponsor income requirement', text: 'A minimum salary threshold or savings level set by the destination government.' },
          { title: 'Financial proof', text: 'Payslips, employment contracts, tax returns and bank statements covering the required period.' },
          { title: 'Accommodation proof', text: 'A registered rental contract or housing letter showing adequate space and bedrooms for the family.' },
          { title: 'Health insurance', text: 'Mandatory private health cover required from day one in several European jurisdictions.' },
        ],
      },
      {
        type: 'steps',
        h2: 'The Family Visa Process: 7 Steps and Timeline',
        intro: 'This is how a typical case runs with Mountbell\'s spouse and dependent visa consultants Kerala families book:',
        items: [
          { title: 'Free family check (week 1)', text: 'Your visa status, your family members and the best route.' },
          { title: 'Written plan (within 2 working days)', text: 'Required documents, official fees and expected dates.' },
          { title: 'Evidence (2 to 4 weeks)', text: 'Marriage, birth and relationship documents, plus income and housing proof.' },
          { title: 'Translations and attestation (1 to 3 weeks, if needed)', text: 'Certified translations and apostille/attestation of certificates.' },
          { title: 'Application and biometrics (1 to 3 weeks)', text: 'Each family member applies or is added to the main file.' },
          { title: 'Spouse visa interview (if requested)', text: 'Embassy interview practice session beforehand where required.' },
          { title: 'Decision and travel (1 to 6 months after filing)', text: 'Travel briefing for the whole family upon visa issuance.' },
        ],
        after: ['The dependent visa timeline is usually shortest when the family applies together with the main applicant.'],
      },
      {
        type: 'prose',
        h2: 'Children: Visas, Consent and School',
        body: [
          'Children\'s files need as much care as the spouse\'s, and spouse and dependent visa consultants Kerala parents choose should plan both together:',
        ],
        list: [
          'Dependent visa for children: usually included with a parent, with each child\'s own passport and birth certificate',
          'Custody consent letter: needed if one parent is not travelling or not applying',
          'Newborn child visa: a baby born after you move abroad, or just before, needs its own passport and visa',
          'Children\'s school admission: most countries give dependent children access to public schools; we help you plan the documents',
          'Dependent parents: rarely included in work or skilled visas; separate parent routes have strict rules',
        ],
      },
      {
        type: 'prose',
        h2: 'Cost, Timeline & Why Family Visas Are Refused',
        body: [
          'Government fees are charged per family member, so a family of four pays four sets of fees. Third-party costs include translations, attestation, medicals and photos. Our Mountbell service fee is charged in stages and written down before you start.',
          'Most dependent visa refusal decisions come from evidence gaps: little or no proof of a genuine relationship (especially for recent marriages), sponsor income below the required level, housing that is too small under local rules, missing consent from the other parent for a child, or name/date discrepancies across marriage and birth records. We read any earlier refusal letter with you and fix each reason before reapplying.',
        ],
        after: ['<a href="/fees/">View our transparent fee structure →</a>'],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Family File Runs',
        body: [
          '<em>This is an illustrative example, not a client record:</em>',
          '• Profile: a nurse from Kochi working in Germany, joined by her husband and one child<br />• Weeks 1 to 2: free family check; marriage and birth certificates attested and translated<br />• Weeks 3 to 4: income, housing and insurance proof from Germany collected<br />• Week 5: family reunification applications filed at the embassy appointment<br />• Weeks 6 to 14: decision and travel<br />• Total: about three months from first meeting to arrival',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What do spouse and dependent visa consultants Kerala families use actually do?', a: 'They identify the right family route, build relationship, income and housing evidence, check every document, and file applications for each family member.' },
          { q: 'Can my spouse travel with me on a work visa?', a: 'In many countries, yes, as a secondary applicant or dependant. Some routes ask you to start work first and apply for family reunification later. We check your country and visa before you accept an offer.' },
          { q: 'How long does a spouse visa take?', a: 'Usually 1 to 6 months after a complete application, depending on the country and season. Collecting evidence takes another 2 to 6 weeks before that.' },
          { q: 'Can I add my spouse later?', a: 'Yes, in most countries. Adding a spouse later usually means a separate application with fresh relationship, income and housing evidence. Partners of citizens use a partner visa instead.' },
          { q: 'Can my parents join me?', a: 'Rarely on a work or skilled visa. Parents usually need a separate parent or long-stay visitor route with strict conditions, or a short visit visa.' },
          { q: 'Do I need to register my marriage?', a: 'Yes. Most embassies ask for a registered marriage certificate, not only religious or community records. Marriage registration in Kerala is done at the local panchayat or municipality office.' },
        ],
      },
      contactBlock(
        'Book Your Free Family Check',
        'Speak to Mountbell\'s spouse and dependent visa consultants Kerala families rely on about your spouse, children and timeline. The first check is free.',
        'Hi Mountbell, I would like to check dependent and family visa options for my spouse and children.',
        'Check my family\'s options',
      ),
    ],
    related: ['/services/work-visa/', '/services/pr-visa/', '/services/visa-documentation/'],
  },

  // 7. Visitor Visa
  {
    path: '/services/visitor-visa/',
    crumb: 'Visitor visa',
    label: 'Service',
    title: 'Visitor Visa Consultants in Kerala | Mountbell',
    description: 'Visitor visa consultants in Kerala for tourist, business and Schengen visit visas, plus UK, US and Canada trips. Clear fees and timelines. Free check.',
    h1: 'Visitor Visa Consultants in Kerala — Tourist, Business and Family Visit Visas',
    lede: 'Visitor visa consultants in Kerala should do more than fill in a form. They should tell you which visa fits your trip, what the embassy will look for and how early to apply. Mountbell plans tourist, business and family trips to Europe, the UK, North America, Australia and the Gulf, from offices in Thrissur and Kochi. Most short-stay applications are decided within 2 to 6 weeks of the appointment, though queues can add months.',
    acts: { check: 'Plan my trip visa', wa: 'WhatsApp an adviser' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Choose Mountbell for Visitor Visas',
        items: [
          { title: 'Licensed Recruiting Agent', text: `Licensed by the Ministry of External Affairs (${site.licence.number}) on eMigrate` },
          { title: 'Offices in Thrissur & Kochi', text: 'Offices in Thrissur and Kochi, plus online consultations across India' },
          { title: 'Honest Eligibility Evaluation', text: 'Honest advice on your chances before you pay any embassy or biometric fees' },
          { title: 'Zero Fake Bookings Policy', text: 'No fake bookings, no borrowed funds and no shortcuts that put future visas at risk' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These figures guide the advice visitor visa consultants in Kerala give today:'],
        list: [
          'Schengen visit visa: €90 for adults and €45 for children aged 6 to 12; stays of up to 90 days in any 180-day period (Schengen Traveler, July 2026)',
          'Schengen visa decision: officially within 15 calendar days, often 30 to 45 days in the April to October peak',
          'UK visitor visa: £127 for up to 6 months, with 2, 5 and 10-year options at £475, £848 and £1,059; decisions in about 3 weeks after biometrics (Davidson Morris, January 2026)',
          'US B1/B2 visa: an interview is needed for most first-time applicants, and waits in India can run to months',
          'Canada visitor visa: applied for online, with biometrics at a visa centre',
        ],
      },
      {
        type: 'prose',
        h2: 'What a Visitor Visa Allows, and What It Does Not',
        body: [
          'A visitor visa, often called a tourist visa, is a short-stay visa for tourism, family visits, business meetings or events. It lets you enter, stay for a set period and leave.',
          '• You can: travel, visit family and attend meetings or conferences.<br />• You cannot: take paid work, join a local employer or study on a long course.<br />• Working on a visitor visa can lead to removal and a ban, so we never plan a trip that mixes the two.',
          'If your goal is a job abroad, start with our Work Visa team.',
          '<a href="/services/work-visa/">Explore Work Visa options →</a>',
        ],
      },
      {
        type: 'checks',
        h2: 'Which Visit Visa Do You Need?',
        intro: 'Your purpose decides the visa, and your documents must match it:',
        items: [
          { title: 'Tourist visa', text: 'Holidays, sightseeing and short breaks, backed by a clear travel itinerary for visa purposes.' },
          { title: 'Business visit visa', text: 'Meetings, trade fairs, site visits or training, with letters from your employer and host.' },
          { title: 'Parents visit visa', text: 'For parents visiting children who live and work abroad, often for a birth, wedding or graduation.' },
          { title: 'Visiting family abroad', text: 'For siblings, relatives and friends, with proof of the host\'s legal status and address.' },
          { title: 'Conference visit', text: 'For professionals attending an event, with official registration and invitation confirmation.' },
        ],
      },
      {
        type: 'table',
        h2: 'Country Guide: Visitor Visas by Destination',
        intro: 'Each country runs its own system. These are the details visitor visa consultants in Kerala share most:',
        head: ['Destination', 'Visa Type & Scope', 'Key Rules & Timings'],
        rows: [
          ['Schengen (Europe)', 'Schengen visit visa (29 countries)', '90/180 rule; apply up to 6 months before travel (min 15 days before); EU Entry/Exit System biometrics'],
          ['United Kingdom', 'Standard Visitor Visa', 'Allows stays up to 6 months per visit; multiple-entry options available for 2, 5 or 10 years'],
          ['United States', 'B1/B2 Visa', 'Covers business (B1) and tourism (B2); requires in-person embassy interview for most first-time applicants'],
          ['Canada & Australia', 'Visitor Visa (e-visitor/subclass 600)', 'Applied for online; biometric submission at visa centre'],
          ['UAE & Gulf', 'Tourist/Visit Visa', 'Usually arranged through airline, hotel or UAE sponsor; 30 to 60 day stays'],
        ],
        note: 'Visa rules and embassy appointment wait times change frequently. We confirm current availability before applying.',
      },
      {
        type: 'checks',
        h2: 'How Embassies Judge Your Application',
        intro: 'Every visa officer asks the same three questions, whether you apply for a tourist visa or a business trip:',
        items: [
          { title: 'Will you return to India?', text: 'Strong ties to India, such as a stable job, property, business or immediate family, show you will return.' },
          { title: 'Can you comfortably pay for the trip?', text: 'Legitimate savings, income tax returns for visa purposes and steady bank history prove sufficiency.' },
          { title: 'Is the trip genuine and credible?', text: 'A realistic travel plan, hotel reservation and return flight itinerary demonstrate genuine intent.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Your Visitor Visa Checklist',
        body: ['We build a visitor visa checklist for your exact trip. Most include:'],
        list: [
          'Passport with at least 6 months\' validity and blank pages, plus old passports',
          'Completed application form and fee receipt',
          'Bank statements for the last 3 to 6 months showing consistent balance',
          'Income tax returns for visa use, usually for the last 2 to 3 years',
          'Employer leave sanction letter, or business registration if you are self-employed',
          'Travel itinerary, hotel booking and flight reservation',
          'For family visits: the host\'s passport, visa or residence card, and proof of address',
          'For a business visit visa: letters from your employer and the host inviting company',
        ],
        after: ['<a href="/services/visa-documentation/">Explore full documentation checks →</a>'],
      },
      {
        type: 'steps',
        h2: 'Visitor Visa Process: 7 Steps and Timeline',
        intro: 'This is how a typical trip is planned with Mountbell\'s visitor visa consultants in Kerala:',
        items: [
          { title: 'Free trip check (day 1)', text: 'Your purpose, dates, destination and the right visa type.' },
          { title: 'Written plan (within 2 working days)', text: 'Checklist, fees and latest date to apply.' },
          { title: 'Documents (1 to 2 weeks)', text: 'Financial papers, leave letters and travel bookings.' },
          { title: 'Form and appointment (1 to 3 weeks)', text: 'Online form, fee payment and visa centre slot booking.' },
          { title: 'Biometrics (on appointment date)', text: 'Fingerprints and photo taken at the visa application centre.' },
          { title: 'Interview (US and selected destinations)', text: 'A practice interview session with your adviser beforehand.' },
          { title: 'Decision (1 to 6 weeks after biometrics)', text: 'Passport returned with your visa sticker or decision letter.' },
        ],
      },
      {
        type: 'prose',
        h2: 'When to Apply & Why Visitor Visas Are Refused',
        body: [
          'Apply early, but not so early that bookings and statements go out of date: Schengen (2 to 3 months ahead; earlier for April–October peak), UK (6 to 8 weeks), US (as soon as dates are known due to appointment wait times), Canada/Australia (6 to 10 weeks), UAE (1 to 2 weeks).',
          'Most visitor visa refusal letters cite weak ties to India (especially for young or unemployed applicants), unexplained recent bulk deposits, vague itineraries, or doubts about business purpose. As visitor visa consultants in Kerala, we read any earlier refusal letter with you and fix each reason before reapplying.',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Trip Is Planned',
        body: [
          '<em>This is an illustrative example, not a client record:</em>',
          '• Profile: retired parents from Thrissur applying for a parents visit visa to see their daughter in Germany for the birth of a grandchild<br />• Week 1: free trip check; the trip planned as a Schengen visit visa through Germany<br />• Weeks 2 to 3: pension statements, the daughter\'s residence permit and invitation, and bookings collected<br />• Week 5: biometrics at the visa centre in Kochi<br />• Weeks 6 to 8: visa granted<br />• Total: about two months from first meeting to travel',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What do visitor visa consultants in Kerala actually do?', a: 'They choose the right visa for your trip, build your checklist, check every document, book your appointment and prepare you for any interview.' },
          { q: 'How early should I apply for a Schengen visit visa?', a: 'Up to 6 months before travel and at least 15 days before. For summer trips, apply 2 to 3 months ahead, because appointments fill quickly.' },
          { q: 'Can I work on a visitor visa?', a: 'No. A visitor visa allows tourism, family visits and business meetings, but not paid work. Anyone who offers a job on a tourist visa is putting you at risk.' },
          { q: 'How much money should I show?', a: 'There is no single figure. For a tourist visa, officers look for steady income and savings that comfortably cover your trip, rather than one large deposit.' },
          { q: 'Can my parents visit me abroad?', a: 'Yes. Most countries offer a family or parents visit visa. The host usually provides an invitation, a copy of their visa or residence card and proof of address.' },
          { q: 'What if my visa was refused before?', a: 'You can usually apply again. Read the refusal reasons, fix them with new evidence and declare the earlier refusal on the new form.' },
        ],
      },
      contactBlock(
        'Book Your Free Trip Check',
        'Speak to Mountbell\'s visitor visa consultants in Kerala about your trip, your dates and the right visa. The first check is free.',
        'Hi Mountbell, I would like to plan a tourist or visitor visa application.',
        'Plan my trip visa',
      ),
    ],
    related: ['/services/dependent-visa/', '/services/visa-documentation/', '/countries/'],
  },

  // 8. Language & Test Preparation
  {
    path: '/services/language-test-preparation/',
    crumb: 'Language & test preparation',
    label: 'Service',
    title: 'OET and IELTS Coaching in Thrissur | Mountbell',
    description: 'OET and IELTS coaching in Thrissur with mock tests, speaking practice and study plans, plus PTE coaching and German classes A1 to B2. Book a free level check.',
    h1: 'OET and IELTS Coaching in Thrissur — OET, IELTS, PTE and German Classes',
    lede: 'OET and IELTS coaching in Thrissur works best when it is tied to a clear goal: the score your nursing board, university or visa needs, and the date you need it by. Mountbell coaches nurses, students and skilled workers for OET, IELTS, PTE and German exams at our Thrissur centre and online. Most learners reach their target score in 6 to 12 weeks of regular classes, depending on their starting level.',
    acts: { check: 'Book a free level check', wa: 'WhatsApp a trainer' },
    blocks: [
      {
        type: 'checks',
        h2: 'Why Mountbell Language Coaching',
        items: [
          { title: 'Licensed Recruiting Agent', text: `Licensed by the Ministry of External Affairs (${site.licence.number}) on eMigrate` },
          { title: 'Classroom & Online Options', text: 'Coaching at our Thrissur centre, plus interactive online classes across Kerala' },
          { title: 'Integrated With Your Visa Plan', text: 'Exam dates and preparation schedules coordinated directly with your migration paperwork' },
          { title: 'Written Fees and Timelines', text: 'Transparent course fees and timelines provided in writing before you join' },
        ],
      },
      {
        type: 'prose',
        h2: 'Key Facts at a Glance',
        body: ['These figures shape the English test preparation we plan with you. Test fees change, so we confirm them when you book:'],
        list: [
          'IELTS: about ₹17,000 for the Academic or General Training test, and ₹17,250 for IELTS for UKVI (May 2026)',
          'Computer-delivered IELTS: results usually available in 3 to 5 days',
          'PTE Academic: ₹18,900 including GST, with results in about 48 hours',
          'OET: four sub-tests scored from 0 to 500; OET grade B starts at 350, and results usually arrive within about 16 business days',
          'Test score validity: usually 2 years for immigration and professional registration purposes',
        ],
      },
      {
        type: 'checks',
        h2: 'Which Test Should You Take?',
        intro: 'Good OET and IELTS coaching in Thrissur starts with the right test, and that depends on where you are going and why. We check the required score for your goal before you pay any exam fee:',
        items: [
          { title: 'Nurses and doctors', text: 'OET is built around healthcare English and is accepted by nursing boards in the UK, Australia, Ireland and New Zealand.' },
          { title: 'Students', text: 'IELTS Academic is accepted by most universities; PTE Academic is widely accepted in Australia and the UK.' },
          { title: 'Skilled migration and work visas', text: 'IELTS General Training or PTE Core, depending on the country points rules.' },
          { title: 'Germany', text: 'German at the CEFR level your job or recognition process needs, usually B1 or B2.' },
        ],
        after: [
          '<a href="/nursing-careers/">Nursing careers abroad →</a> &nbsp;·&nbsp; <a href="/nursing-careers/australia/">Australia nurses →</a> &nbsp;·&nbsp; <a href="/nursing-careers/germany/">Germany nurses →</a>',
        ],
      },
      {
        type: 'checks',
        h2: 'OET Classes for Healthcare Professionals',
        intro: 'Our OET classes are built for nurses and doctors who use English every day at work but need to prove it in an exam setting:',
        items: [
          { title: 'Listening and Reading', text: 'Consultation extracts, workplace notices and health articles with timed practice.' },
          { title: 'Writing (the OET referral letter)', text: 'Written from complex patient case notes, with detailed feedback on every draft.' },
          { title: 'Speaking role-play scenarios', text: 'Two full role-play scenarios with an expert trainer playing the patient or relative.' },
          { title: 'OET mock tests', text: 'Full timed tests under real exam conditions, with grades for each sub-test.' },
          { title: 'OET@Home guidance', text: 'Specialist advice for healthcare professionals who prefer to sit the test from home.' },
        ],
        after: ['Most OET classes run for 6 to 8 weeks. Nurses who miss one grade can plan an OET sub-test retake rather than sitting all four again.'],
      },
      {
        type: 'checks',
        h2: 'IELTS & PTE Coaching',
        intro: 'Comprehensive preparation covering Academic, General Training and computer-based test formats:',
        items: [
          { title: 'IELTS Academic & General', text: 'All four skills (listening, reading, writing and speaking), marked essays, recorded speaking answers, and full timed mock tests every two weeks.' },
          { title: 'IELTS Band Score Target Plans', text: 'Structured roadmaps to move from your current level to Band 7 or higher in each sub-skill.' },
          { title: 'PTE Academic & PTE Core', text: 'Fast-paced computer-based coaching for read aloud, repeat sentence, essay writing and dictation, with automated scoring analytics.' },
        ],
        after: ['Most IELTS classes run for 6 to 10 weeks; PTE coaching typically runs 4 to 6 weeks for students and skilled workers.'],
      },
      {
        type: 'checks',
        h2: 'German Language Classes Thrissur',
        intro: 'Our German language classes Thrissur learners attend take you from the alphabet to exam level, step by step:',
        items: [
          { title: 'A1 to B2 German', text: 'One CEFR level at a time, with regular assessments at the end of each module.' },
          { title: 'Goethe Exam Preparation', text: 'Targeted preparation for the Goethe-Zertifikat at A1, A2, B1 and B2 levels.' },
          { title: 'telc German Exam Practice', text: 'Practice for telc exams where your employer or recognition authority prefers telc.' },
          { title: 'Everyday and Clinical German', text: 'Speaking and listening practice tailored to hospital and workplace environments.' },
        ],
        after: [
          'Each level usually takes 8 to 12 weeks of regular classes, so going from A1 to B2 takes about 8 to 12 months. Our German language classes Thrissur nurses join are planned alongside their recognition file, so both finish together.',
          '<a href="/countries/germany/">Explore Germany migration pathways →</a>',
        ],
      },
      {
        type: 'steps',
        h2: 'How Our Coaching Works: 6 Steps',
        intro: 'OET and IELTS coaching in Thrissur at Mountbell follows a structured pathway for every learner:',
        items: [
          { title: 'Free level check (day 1)', text: 'A short test of your four skills to determine your starting level and score gap.' },
          { title: 'Personal study plan (within 2 working days)', text: 'Your target score, test date, and weekly timetable built around your shifts.' },
          { title: 'Core classes (weeks 1 to 6)', text: 'Intensive skills training, exam strategies and marked practice assignments.' },
          { title: 'Mock tests (weeks 4 to 8)', text: 'A full timed exam simulation every two weeks with individual score feedback.' },
          { title: 'Final review (the week before the test)', text: 'Targeting weak areas, intensive speaking practice and test-day strategies.' },
          { title: 'Test and results (2 days to 3 weeks)', text: 'Test sitting and results; if you miss your score, we plan a focused retake.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Classes for Working Nurses & Fees',
        body: [
          'We understand healthcare shifts. Classes are planned around duty rosters where possible, with catch-up assignments if you miss a session. Focus is placed on referral letters and role-plays, the two areas where most grades are lost.',
          'Course fees depend on the exam and course length, written down before you join. Exam fees are paid directly to the test provider. Quality preparation costs far less than a failed attempt, saving repeated test fees.',
        ],
        after: [
          '<a href="/fees/">View fee schedule →</a> &nbsp;·&nbsp; <a href="/free-immigration-assessment/">Book a free level check →</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Course Runs',
        body: [
          '<em>This is an illustrative example, not a client record:</em>',
          '• Profile: a staff nurse from Thrissur with a grade C+ in OET Writing, aiming for the UK<br />• Week 1: free level check; personal study plan built around her shifts<br />• Weeks 2 to 5: OET classes focused on referral letters, with two drafts marked each week<br />• Weeks 6 to 7: two mock tests and speaking practice<br />• Week 8: test sat; grade B achieved in Writing<br />• Total: about 8 weeks from first meeting to the required score',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'What does OET and IELTS coaching in Thrissur at Mountbell include?', a: 'It includes a free level check, a study plan for your target, classes in every skill, marked writing, speaking practice, mock tests and help booking your test.' },
          { q: 'Which is better for nurses, OET or IELTS?', a: 'Many nurses find OET easier because its tasks use healthcare situations. IELTS is accepted more widely outside healthcare. Check the score your board accepts first; our advisers can explain the differences.' },
          { q: 'How long does it take to prepare?', a: 'Most learners need 6 to 12 weeks of OET classes. If you are close to your target, 4 to 6 weeks may be enough.' },
          { q: 'Do you offer online classes?', a: 'Yes. Online IELTS classes and OET sessions follow the same plan, with live sessions, marked homework and mock tests.' },
          { q: 'What score do I need?', a: 'It depends on your goal. Nursing boards, universities and visa routes each set their own required score, and we confirm yours at the level check.' },
          { q: 'How long are test results valid?', a: 'Most authorities accept results for 2 years from the test date, so time your test to match your application.' },
        ],
      },
      contactBlock(
        'Book Your Free Level Check',
        'Speak to Mountbell about OET and IELTS coaching in Thrissur, or about PTE and German classes. Your first level check is free.',
        'Hi Mountbell, I would like to book a free language level check.',
        'Book a free level check',
      ),
    ],
    related: ['/services/', '/nursing-careers/', '/services/visa-documentation/'],
  },

  // 9. Free Immigration Consultation (Complete 1,779-word specification)
  {
    path: '/free-immigration-assessment/',
    parent: '/services/',
    crumb: 'Free immigration consultation',
    title: 'Book a Free Immigration Consultation | Mountbell Kerala',
    description: 'Book a free immigration consultation with Mountbell: a free profile evaluation, country advice and a written next-step plan. Thrissur, Kochi or online.',
    label: 'Free Immigration Assessment',
    h1: 'Book a Free Immigration Consultation — Speak to an Adviser About Your Next Move',
    lede: 'Book a free immigration consultation with Mountbell and get a straight answer to the question that matters most: which country and visa route fits your profile, and what will it take? In 30 to 45 minutes, an adviser reviews your education, experience and goals, explains your realistic options and tells you what to do first. You get a written summary within 2 working days. There is no charge and no obligation.',
    acts: { check: 'Book my free consultation', wa: 'Request a call-back' },
    blocks: [
      {
        type: 'note',
        text: 'Licensed by the Ministry of External Affairs as a recruiting agent: B-1921/KER/PART/100/5/10348/2023 (<a href="https://emigrate.gov.in" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Offices in Thrissur and Kochi, plus online consultations across India &nbsp;·&nbsp; Written fees and timelines before you pay for anything',
      },
      {
        type: 'facts',
        h2: 'Key Facts at a Glance',
        rows: [
          ['Cost', 'The free consultation has no charge and no obligation'],
          ['Length', '30 to 45 minutes for a career guidance call'],
          ['Format', 'Phone, video, or face-to-face at our Thrissur or Kochi office'],
          ['Booking', 'A consultation slot is usually offered within 2 to 3 working days of your request'],
          ['After the call', 'A written assessment within 2 working days'],
          ['Who it suits', 'Nurses, tradespeople and engineers, families, students and graduates, and anyone planning PR'],
        ],
      },
      {
        type: 'prose',
        h2: 'What Is a Free Profile Evaluation?',
        body: [
          'A free profile evaluation is a structured review of your background against the rules of the countries you are considering. It replaces guesswork with facts.',
        ],
        list: [
          'Education: your highest qualification and how it is likely to be assessed abroad',
          'Experience: years in your field, and whether they count as skilled work',
          'Language: your English or German level, or a target score if you have not taken a test',
          'Age, family and budget: the factors that decide which routes are practical for you',
        ],
        after: [
          'At the end, your adviser gives you an honest view of your strongest options, including when the honest answer is to wait and improve your profile first.',
        ],
      },
      {
        type: 'prose',
        h2: 'What We Cover in Your Consultation',
        body: [
          'Every free consultation follows the same agenda, so nothing important is missed.',
        ],
        list: [
          'Your goal: work, PR, nursing registration, study or joining family',
          'Best-fit visa routes: the two or three that suit your profile best',
          'Country recommendation: where your occupation is in demand and your profile is competitive',
          'Early points check: for Australia and Canada, an early estimate of your likely score',
          'English test advice: which test to take and the score to aim for',
          'Cost and timeline estimate: what each route usually costs and how long it takes',
          'Questions: anything you want to ask about the process, fees or risks',
        ],
        after: [
          'The aim is a clear migration roadmap, not a sales pitch.',
        ],
      },
      {
        type: 'prose',
        h2: 'Who Should Book',
        body: [
          'Anyone can book a free immigration consultation, but it helps most for these groups:',
        ],
      },
      {
        type: 'prose',
        h3: 'Nurses',
        body: [],
        list: [
          'A nurse profile check covering registration, language and the best-fit country for GNM and BSc nurses',
        ],
        after: ['<a href="/nursing-careers/">Nursing Careers &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Trades and professions',
        body: [],
        list: [
          'Tradespeople and engineers, plus IT and healthcare staff, who want to compare work visa and PR routes',
        ],
        after: ['<a href="/services/work-visa/">Work Visa &rarr;</a> &nbsp;·&nbsp; <a href="/services/pr-visa/">PR Visa &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Families',
        body: [],
        list: [
          'A consultation for families planning to move together, or for a spouse and children joining someone already abroad',
        ],
        after: ['<a href="/services/dependent-visa/">Dependent Visa &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Students and graduates',
        body: [],
        list: [
          'Students and graduates weighing study abroad against a direct work or skilled route, often after a short career guidance call',
        ],
        after: ['<a href="/study-abroad/">Study Abroad &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Career changers',
        body: [],
        list: [
          'Professionals exploring overseas career options and job prospects abroad before committing to a route',
        ],
      },
      {
        type: 'steps',
        h2: 'How to Book: 5 Steps and Timeline',
        intro: 'This is how it works when you book a free immigration consultation with Mountbell.',
        items: [
          { title: '1. Request (2 minutes)', text: 'Fill in the consultation booking form, call us or request a call-back.' },
          { title: '2. Confirmation (within 1 working day)', text: 'We confirm your consultation slot and the format you chose.' },
          { title: '3. Preparation (before the call)', text: 'We send a short list of documents to bring.' },
          { title: '4. Consultation (30 to 45 minutes)', text: 'Your free profile evaluation and options discussion.' },
          { title: '5. Written assessment (within 2 working days)', text: 'A summary of your options, next steps and costs.' },
        ],
        after: [
          'If you decide to go ahead, the next steps after your consultation are set out in writing, with fees shown before you pay anything.',
        ],
      },
      {
        type: 'prose',
        h2: 'Choose How to Meet',
        body: [
          'Pick the format that suits your schedule when you book a free immigration consultation. Each one covers the same agenda.',
        ],
        list: [
          'Video consultation: on your phone or laptop, from anywhere in India or abroad',
          'Phone call: the quickest option if you just want to talk to an adviser',
          'Thrissur office consultation: face-to-face at our head office near Ashwini Junction',
          'Kochi office consultation: face-to-face at Palarivattom, Edappally Road',
        ],
        after: [
          'An online immigration consultation is just as detailed as a face-to-face consultation, and many clients outside Thrissur and Kochi prefer it.',
        ],
      },
      {
        type: 'prose',
        h2: 'Online or In Person?',
        body: [
          'Both formats give you the same adviser and agenda.',
        ],
        list: [
          'An online immigration consultation saves travel and suits people working shifts, living in other districts or already abroad',
          'A face-to-face meeting suits families who want everyone in the room',
          'Either way, you can talk to an adviser again before deciding, at no cost',
        ],
        after: [
          'Most first-time clients choose an online immigration consultation, then visit an office later when documents need checking.',
        ],
      },
      {
        type: 'prose',
        h2: 'Documents to Bring',
        body: [
          'You do not need every certificate yet, but these documents to bring help your adviser:',
        ],
        list: [
          'Passport, or at least your date of birth and passport status',
          'Your highest qualification certificate and mark sheets',
          'A CV, or a list of jobs with dates',
          'Any English or German test result',
          'Details of any earlier visa refusal',
          'For nurses: your registration and experience letters',
        ],
        after: [
          'Our guide on how to prepare for your consultation lists a few more questions.',
        ],
      },
      {
        type: 'prose',
        h2: 'What You Get Afterwards',
        body: [
          'Every consultation outcome is written down, so you can think it over at home or share it with your family.',
        ],
        list: [
          'Written assessment: your profile summary and your strongest routes',
          'Migration roadmap: each step in order, from English test to visa decision, with typical timings',
          'Cost and timeline estimate: government fees, third-party costs and our service fee, shown separately',
          'Honest eligibility advice: what could weaken your application, and how to fix it',
        ],
        after: [
          'Many people book a free immigration consultation, follow our advice on English or experience, and come back a year later when their profile is stronger.',
        ],
      },
      {
        type: 'prose',
        h2: 'Why Book Before You Pay Anyone',
        body: [
          'Many migration problems start with a payment made too early, often for a job or route that never existed.',
        ],
        list: [
          'A free profile evaluation shows whether a route is realistic before money changes hands',
          'A career guidance call helps you compare routes on cost, time and long-term settlement',
          'A free consultation with a licensed firm costs you nothing but an hour',
        ],
        after: [
          'That is why we ask everyone to book a free immigration consultation before paying any agent, including us.',
        ],
      },
      {
        type: 'prose',
        h2: 'Questions to Ask Any Consultant',
        body: [
          'Whether you choose Mountbell or another firm, these questions protect you from bad advice:',
        ],
        list: [
          'Are you licensed, and can I check the licence myself?',
          'Who will lodge my visa application, and what are their credentials?',
          'What are the fees, when are they paid, and what happens if my case does not go ahead?',
          'Can you guarantee a job or a visa? (The only honest answer is no.)',
        ],
        after: [
          'Any firm worth trusting should answer every one of these in writing, and you can run a licence check on eMigrate before you pay.',
          '<a href="/fees/">Fee structure &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Consultation Runs',
        intro: 'This is an illustrative example, not a client record.',
        body: [],
        list: [
          'Profile: a 29-year-old mechanical engineer from Kochi with six years of experience',
          'Day 1: free consultation booked online; consultation slot confirmed the next morning',
          'Day 3: free profile evaluation by video; Australia and Germany compared, with an early points check for Australia',
          'Day 5: written assessment received, recommending an English test and a skills assessment first',
          'Outcome: a 12-month migration roadmap with costs for each stage',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Choose Mountbell',
        intro: 'Many people talk to several firms before they book a free immigration consultation. Here is what Mountbell does differently:',
        items: [
          { title: 'Direct expert access', text: 'You talk to an adviser who explains the rules, not a salesperson.' },
          { title: 'Comprehensive coverage', text: 'Advice across work, PR, nursing, family and visitor routes in one meeting.' },
          { title: 'No-obligation consultation', text: 'No-obligation consultation, with nothing to sign on the day.' },
          { title: 'Government licensed', text: 'Licensed by the Ministry of External Affairs, which you can check on eMigrate.' },
          { title: 'Career counselling', text: 'Career counselling that looks at your long-term goals, not just the next visa.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Your Information Is Private',
        body: [
          'We take data privacy seriously. The details you share are used only to assess your profile and contact you about it. We never sell your information, and you can ask us to delete it at any time.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          {
            q: 'Is the consultation really free?',
            a: 'Yes. The free consultation and your written assessment cost nothing. You only pay if you choose to go ahead with a service, and every fee is shown in writing first.',
          },
          {
            q: 'How long does a career guidance call take?',
            a: 'A career guidance call usually takes 30 to 45 minutes. Families and complex cases sometimes need a second session, also free.',
          },
          {
            q: 'Can I book a free immigration consultation if I live outside Kerala?',
            a: 'Yes. Most clients outside Thrissur and Kochi choose an online immigration consultation by video or phone, with the same written assessment afterwards.',
          },
          {
            q: 'Do I need my documents ready before I talk to an adviser?',
            a: 'No. Basic details are enough for the first call. Your adviser will tell you which documents to collect next.',
          },
          {
            q: 'Will you tell me if I am not eligible?',
            a: 'Yes. If your profile does not meet a route’s rules today, we say so and explain what would change that, such as a higher English score or more experience.',
          },
          {
            q: 'What happens after the consultation?',
            a: 'You receive a written assessment within 2 working days. If you want to proceed, we send a written plan with fees and timelines; if not, there is no follow-up pressure.',
          },
        ],
      },
      {
        type: 'form',
        h2: 'Book Your Free Consultation',
      },
      {
        type: 'prose',
        h2: 'Contact & Office Locations',
        body: [
          'Book a free immigration consultation today by phone, email or the booking form.',
          'Prefer to talk to an adviser first? Call us and we can book your slot on the same call.',
        ],
        list: [
          'Call: <a href="tel:+919207014777">+91 9207014777</a>',
          'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
          'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
        ],
        after: [
          '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
          '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
          '<a href="/services/">All services &rarr;</a> &nbsp;·&nbsp; <a href="/fees/">Fees &rarr;</a>',
        ],
      },
    ],
    related: ['/services/', '/tools/', '/fees/'],
  },
];

export const services: Page[] = publish(pagesRaw);

