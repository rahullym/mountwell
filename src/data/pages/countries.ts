import type { Page } from './types';
import { countries as list } from '../site';

const tags = (name: string) => list.find((c) => c.name === name)!.programmes.map((p) => p.label);

export const countries: Page[] = [
  {
    path: '/countries/',
    crumb: 'Countries',
    wide: true,
    title: 'Best Countries to Migrate from India (Compared) | Mountbell',
    description: 'Compare the best countries to migrate from India: PR vs work routes, language, cost and timelines for Australia, Canada, Germany, Malta and more. Free check.',
    label: 'Countries',
    h1: 'Best Countries to Migrate from India — PR, Work, Language and Cost Compared',
    lede: 'Best countries to migrate from India in 2026 include Australia and Canada for permanent residence, Germany for skilled jobs in Europe, and Malta, Poland and the Netherlands for job-based work. The right one for you depends on your occupation, age, English or German level, budget and how soon you want to move. Use this hub to compare countries side by side and shortlist two or three before you speak to an adviser.',
    acts: { check: 'Find my best country', wa: 'Book a free call' },
    img: 'kerala',
    blocks: [
      {
        type: 'note',
        text: 'Licensed by the Ministry of External Affairs as a recruiting agent: B-1921/KER/PART/100/5/10348/2023 (<a href="https://emigrate.gov.in" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Offices in Thrissur and Kochi, plus online consultations across India',
      },
      {
        type: 'facts',
        h2: 'Key Facts at a Glance',
        intro: 'These figures explain why these are the best countries to migrate from India in 2026.',
        rows: [
          ['Australia', '185,000 permanent Migration Program places for 2026–27, with 132,240 in the Skill stream (BDO, May 2026)'],
          ['Canada', 'A target of 380,000 new permanent residents in 2026, about 239,800 of them in the economic class (Government of Canada levels plan)'],
          ['Germany', 'Skilled jobs in healthcare, engineering, IT and the trades, with the EU Blue Card for graduates on higher salaries'],
          ['UK', 'Skilled Worker applicants need B2 English from January 2026 (The PIE News)'],
          ['Typical migration timeline', '2 to 6 months for a job-based permit, or 8 to 18 months for PR by points'],
        ],
      },
      {
        type: 'prose',
        h2: 'How to Choose Between Immigration Options for Indians',
        body: [
          'Before you compare countries, answer these questions about yourself. They narrow the list quickly for anyone planning to migrate abroad from Kerala.',
        ],
        list: [
          'Do you want to settle permanently, or work abroad for a few years first?',
          'Is your job among the occupations in demand in the country you like?',
          'What is your English or German level, and how long would it take to improve it?',
          'How old are you? Age limits for migration and points for age matter in Australia and Canada',
          'What can you spend before your first salary arrives?',
          'Will your spouse and children move with you, or join later?',
        ],
        after: [
          'Your answers decide which of the best countries to migrate from India is realistic for you, not just attractive.',
        ],
      },
      {
        type: 'prose',
        h2: 'PR vs Work Routes',
        body: [
          'Every country fits one of three models, and PR vs work routes is the first choice to make.',
        ],
        list: [
          '<strong>Points-tested countries (Australia, Canada):</strong> countries with a path to PR from day one, based on age, education, experience and English; many routes need no job offer, but preparation takes longer',
          '<strong>Work-first countries (Germany, Malta, Poland, the Netherlands, Denmark):</strong> you move with a job offer and an employer’s permit, then apply to settle after some years',
          '<strong>Contract countries (Maldives, the Gulf):</strong> fixed-term jobs, usually without a route to permanent residence',
        ],
        after: [
          'When weighing PR vs work routes, remember that points-tested routes cost more upfront but give security from day one. Employer-led routes are faster and cheaper, but tie you to a job at first.',
          '<a href="/services/pr-visa/">PR Visa &rarr;</a> &nbsp;·&nbsp; <a href="/services/work-visa/">Work Visa &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Country Comparison',
        body: [
          'This country comparison covers every destination we work with. Each of our country guides has the full process, documents and costs.',
        ],
      },
      {
        type: 'prose',
        h3: 'Australia',
        body: [],
        list: [
          'Route: points-tested PR, state-sponsored options or employer sponsorship',
          'Language: IELTS or PTE; higher scores add points',
          'Best for: professionals and tradespeople under 45 with a strong points score',
        ],
        after: ['<a href="/countries/australia/">Australia country guide &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Canada',
        body: [],
        list: [
          'Route: points-ranked federal system and provincial programmes',
          'Language: English or French; French adds points',
          'Best for: younger, highly educated applicants with strong English',
        ],
        after: ['<a href="/countries/#canada">Canada overview &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Germany',
        body: [],
        list: [
          'Route: job offer and skilled worker permit, the EU Blue Card, or a job-search route',
          'Language: German B1 to B2 for most jobs; some IT roles work in English',
          'Best for: nurses, engineers, IT staff and tradespeople ready to learn German',
        ],
        after: ['<a href="/countries/germany/">Germany country guide &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Malta',
        body: [],
        list: [
          'Route: single permit, applied for by the employer',
          'Language: English',
          'Best for: hospitality, care, construction and healthcare workers',
        ],
        after: ['<a href="/countries/malta/">Malta country guide &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Netherlands',
        body: [],
        list: [
          'Route: highly skilled migrant permit through a recognised sponsor',
          'Language: English in most professional jobs',
          'Best for: IT, engineering and technical professionals with a salary offer',
        ],
        after: ['<a href="/countries/#netherlands">Netherlands overview &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Poland and Eastern Europe',
        body: [],
        list: [
          'Route: job-based permit in Poland, Latvia, Lithuania or Bulgaria',
          'Best for: welders, fitters, drivers and factory workers',
        ],
        after: ['<a href="/countries/#europe">Eastern Europe overview &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Denmark',
        body: [],
        list: [
          'Route: shortage-list and salary schemes; nurse recruitment from outside the EU is paused until 31 December 2026',
        ],
        after: ['<a href="/countries/#denmark">Denmark overview &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'United Kingdom',
        body: [],
        list: [
          'Route: Health and Care Worker visa for registered nurses only, through our Nursing Careers team',
        ],
        after: ['<a href="/nursing-careers/uk/">UK nursing guide &rarr;</a>'],
      },
      {
        type: 'prose',
        h3: 'Maldives',
        body: [],
        list: [
          'Route: fixed-term contracts in healthcare, hospitality and technical roles, close to Kerala',
        ],
        after: [
          '<a href="/countries/#maldives">Maldives overview &rarr;</a> &nbsp;·&nbsp; <a href="/nursing-careers/">Nursing Careers &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Best Country by Profile',
        intro: 'No list of the best countries to migrate from India fits everyone. Still, clear patterns emerge after years of advising families who migrate abroad from Kerala.',
        body: [],
        list: [
          '<strong>Countries for IT professionals:</strong> Australia, Canada, Germany and the Netherlands',
          '<strong>Countries for tradespeople:</strong> Australia for PR; Germany, Malta and Poland for faster employer-led moves',
          '<strong>Allied health professionals:</strong> Australia, Germany and Malta, each with its own registration process',
          '<strong>Family-friendly countries:</strong> Australia and Canada, where spouses and children usually get full rights from the start',
          '<strong>Cheapest country to migrate:</strong> Poland or Malta, where the employer often covers the permit',
          '<strong>Fastest migration route:</strong> a job-based permit in Malta or Poland, often 3 to 5 months',
          '<strong>Australia vs Canada:</strong> Australia suits strong points scorers with an assessed occupation; Canada suits younger applicants with high English scores',
        ],
        after: [
          '<a href="/services/dependent-visa/">Dependent Visa &rarr;</a> &nbsp;·&nbsp; <a href="/tools/">Free tools &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Timelines by Country',
        intro: 'Processing times by country vary widely across immigration options for Indians, and they change with demand.',
        body: [],
        list: [
          'Malta, Poland and the Maldives: 2 to 5 months from offer to travel',
          'Germany: 4 to 12 months, mostly waiting for recognition and the visa appointment',
          'Canada: 6 to 12 months after an invitation, plus 3 to 6 months of preparation',
          'Australia: 8 to 18 months, including skills assessment and English test',
        ],
        after: [
          'For most people who migrate abroad from Kerala, the language test is the longest step they control, so start it early.',
        ],
      },
      {
        type: 'prose',
        h2: 'What Each Country Costs',
        intro: 'Migration cost by country follows a simple pattern across the best countries to migrate from India. Your written country comparison after the assessment includes a budget for each option.',
        body: [],
        list: [
          'Highest: Australia and Canada, because of skills assessments, English tests and government fees for each family member',
          'Middle: Germany, mainly because of language classes and recognition fees',
          'Lowest: Malta, Poland and other employer-led routes, where the employer often pays the permit',
          'Also plan for: flights, the first months’ rent, and the cost of living abroad until your first salary',
        ],
        after: ['<a href="/fees/">Fee structure &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Language Needs by Country',
        intro: 'Language requirements by country are often the deciding factor when you compare countries.',
        body: [],
        list: [
          'English-speaking countries: Australia, Canada, the UK, Malta and Ireland',
          'German: needed for most jobs in Germany, usually at B1 or B2',
          'English at work, local language for life: the Netherlands, Denmark and Poland',
        ],
        after: [
          'Our language classes in Thrissur are built around these targets.',
          '<a href="/services/language-test-preparation/">Language classes &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Gulf or Europe?',
        intro: 'Many families who migrate abroad from Kerala have worked in the Gulf first. The Gulf vs Europe choice now comes down to settlement.',
        body: [],
        list: [
          'Gulf: tax-free salaries and short flights home, but no route to citizenship for most workers',
          'Europe: lower take-home pay at first, but settlement rights after several years of work, plus family rights',
        ],
      },
      {
        type: 'prose',
        h2: 'Life After You Arrive',
        intro: 'Among the best countries to migrate from India, quality of life matters as much as the visa.',
        body: [],
        list: [
          'Salary expectations: higher gross pay in Australia, Canada and the Netherlands; higher take-home pay in the Gulf',
          'Malayali communities abroad: large in Australia, Canada, the UK and the Gulf, and growing in Germany and Malta',
          'Route to citizenship: possible in Australia, Canada and most of Europe after several years of residence, whichever of the PR vs work routes you take',
          'OCI card: India does not allow dual citizenship, but an OCI card keeps your right to live and work in India',
        ],
        after: ['<a href="/countries/">Country guides &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Shortlist Is Made',
        intro: 'This is an illustrative example, not a client record.',
        body: [],
        list: [
          'Profile: a 32-year-old civil engineer from Kottayam with eight years of experience and IELTS 6.5',
          'Day 1: free assessment to compare countries: Australia, Canada and Germany',
          'Day 3: written country comparison: Australia first, with a higher English score needed; Germany as the backup',
          'Months 1 to 3: English retest and skills assessment',
          'Total: a clear 12-month plan, with costs, for two countries',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Choose Mountbell',
        intro: 'Many people discuss the best countries to migrate from India with several consultants before choosing. Here is what Mountbell does differently:',
        items: [
          { title: 'Honest country comparison', text: 'An honest country comparison across many destinations, with no reason to push one.' },
          { title: 'Licensed recruiting agent', text: 'Licensed by the Ministry of External Affairs, which you can check on eMigrate.' },
          { title: 'Specialised expert teams', text: 'Separate teams covering the main immigration options for Indians: nurses, PR, work and study.' },
          { title: 'Transparent fees and timelines', text: 'Written timelines and fees before you pay anything.' },
        ],
        after: [
          '<a href="/free-immigration-assessment/">Free assessment &rarr;</a> &nbsp;·&nbsp; <a href="/success-stories/">Success stories &rarr;</a>',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          {
            q: 'Which are the best countries to migrate from India?',
            a: 'For permanent residence, Australia and Canada. For skilled jobs in Europe, Germany. For faster employer-led moves, Malta, Poland and the Netherlands. The best of the immigration options for Indians depends on your occupation, age, language and budget.',
          },
          {
            q: 'Which country is easiest to move to?',
            a: 'Among immigration options for Indians, Malta and Poland usually have the simplest job-based permits. For permanent residence, Australia and Canada are clearer, but they need a strong points score. Your choice between PR vs work routes decides which is easier for you.',
          },
          {
            q: 'Which country is best for me?',
            a: 'A free assessment lets you compare countries for your occupation, age and language level, with timelines and costs.',
          },
          {
            q: 'Can I migrate without IELTS?',
            a: 'Some routes accept other tests, such as PTE or OET. Germany uses German instead of English for most jobs. Most countries need some proof of language.',
          },
          {
            q: 'How long does migration take?',
            a: 'From 2 to 5 months for employer-led permits to 8 to 18 months for points-tested PR, depending on the country and how prepared you are.',
          },
          {
            q: 'What are the migration rules in 2026?',
            a: 'Migration rules for 2026 include higher English levels in the UK and continued large skilled intakes in Australia and Canada. We check the current rules before every assessment.',
          },
        ],
      },
      {
        type: 'prose',
        h2: 'Compare Countries With an Adviser',
        body: [
          'Speak to Mountbell about the best countries to migrate from India for your profile. The first assessment is free.',
        ],
        list: [
          'Call: <a href="tel:+919207014777">+91 9207014777</a>',
          'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
          'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
          '<a href="/free-immigration-assessment/">Book a free assessment &rarr;</a>',
        ],
        after: [
          '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
          '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
        ],
      },
    ],
    related: ['/services/', '/nursing-careers/', '/study-abroad/'],
  },
  {
    path: '/countries/australia/', crumb: 'Australia', img: 'australia', accent: 'var(--coral)',
    title: 'Australia Immigration Consultants in Kerala | PR | Mountbell',
    description: 'Australia immigration consultants in Kerala for PR and skilled migration: subclass 189, 190 and 491 visas, skills assessment, SkillSelect EOI and sponsorship.',
    label: 'Australia',
    h1: 'Australia Immigration Consultants in Kerala',
    lede: 'Australia selects skilled migrants on points. Our Australia PR consultants work out your score, manage the skills assessment and expression of interest, and tell you honestly whether an invitation is within reach.',
    wa: 'Hi Mountbell, I would like to know about migrating to Australia.',
    blocks: [
      { type: 'table', h2: 'Australian visas we work with', head: ['Visa', 'What it is', 'Key condition'], rows: [
        ['Skilled Independent (subclass 189)', 'Permanent residence with no sponsor. You can live anywhere in Australia.', 'Invitation based on points alone. The most competitive.'],
        ['Skilled Nominated (subclass 190)', 'Permanent residence with nomination by a state or territory. Adds 5 points.', 'Your occupation must be on that state’s list, and you commit to living there initially.'],
        ['Skilled Work Regional (subclass 491)', 'A five-year provisional visa for regional Australia. Adds 15 points.', 'Live and work in a regional area. A pathway to PR follows after meeting the conditions.'],
        ['Skills in Demand (subclass 482)', 'Temporary employer-sponsored visa, which replaced the Temporary Skill Shortage visa.', 'An approved employer must sponsor you for a skilled role.'],
      ] },
      { type: 'checks', h2: 'What you need for a points-tested visa', items: [
        { title: 'An eligible occupation', text: 'Your occupation must be on the skilled occupation list for the visa you want.' },
        { title: 'A positive skills assessment', text: 'From the authority for your occupation, for example ANMAC for nurses, TRA for trades, ACS for IT and AITSL for teachers.' },
        { title: 'English', text: 'At least Competent English. Higher scores earn 10 or 20 points.' },
        { title: 'Age under 45', text: 'On the day you are invited to apply.' },
        { title: 'At least 65 points', text: 'Enough to lodge an expression of interest. Invitations usually go to higher scores. Use the <a href="/tools/australia-pr-points-calculator/">Australia PR points calculator</a>.' },
        { title: 'Health and character', text: 'Medical examinations and police clearance for every applicant.' },
      ] },
      { type: 'steps', h2: 'How we take you from Kerala to Australia', items: [
        { title: 'Occupation and points', text: 'We identify your occupation code and estimate your points on evidence you can produce.' },
        { title: 'Skills assessment', text: 'We prepare the application and employment evidence for the assessing authority.' },
        { title: 'English test', text: 'A target score, coaching and a test date that fits the rest of the file.' },
        { title: 'Expression of interest', text: 'Lodged in SkillSelect, with state nomination applications where they improve your position.' },
        { title: 'Invitation and visa', text: 'A complete application lodged within the invitation deadline.' },
        { title: 'Pre-departure', text: 'Briefing on arrival, registration to work in your profession and your first weeks.' },
      ] },
      { type: 'links', h2: 'Australia by profession', items: [
        { title: 'Nurses', text: 'NMBA and AHPRA registration, ANMAC assessment and the visa options for registered nurses.', href: '/nursing-careers/australia/' },
        { title: 'Trades: welders, mechanics, CNC machinists', text: 'Trade occupations are assessed by Trades Recognition Australia, usually through a documentary check and a practical or technical assessment.' },
        { title: 'IT professionals', text: 'ICT occupations are assessed by the Australian Computer Society on your qualification and relevant work experience.' },
        { title: 'Teachers', text: 'School teachers are assessed by AITSL, which looks at your teaching qualification, supervised practice and English.' },
      ] },
      { type: 'faq', h2: 'Australia PR questions', items: [
        { q: 'How many points do I need for Australia PR?', a: 'The pass mark is 65 points, which lets you lodge an expression of interest. Invitations are issued to the highest-ranked candidates in each occupation, so the score needed in practice is often higher and varies between rounds.' },
        { q: 'Which is better, 189, 190 or 491?', a: 'The 189 gives the most freedom but needs the highest score. The 190 and 491 add 5 and 15 points in exchange for a commitment to a state or a regional area. Most applicants lodge for more than one.' },
        { q: 'Do I need a job offer?', a: 'Not for the 189, 190 or 491. You need one only for employer-sponsored visas such as the Skills in Demand visa.' },
      ] },
    ],
    related: ['/tools/australia-pr-points-calculator/', '/services/pr-visa/', '/nursing-careers/australia/'],
  },
  {
    path: '/countries/germany/', crumb: 'Germany', img: 'germany', accent: 'var(--amber-deep)',
    title: 'Germany Immigration Consultants in Kerala | Mountbell',
    description: 'Germany immigration consultants in Kerala: the Opportunity Card, Ausbildung vocational training and skilled worker visas, with German language training.',
    label: 'Germany',
    h1: 'Germany Immigration Consultants in Kerala',
    lede: 'Germany has opened several doors for workers from outside the EU. Which one you use depends on whether your qualification is recognised, how much German you speak and whether you already have an employer.',
    wa: 'Hi Mountbell, I would like to know about working or training in Germany.',
    blocks: [
      { type: 'links', h2: 'Three ways to move to Germany', items: [
        { title: 'Opportunity Card', meta: 'Job seeker route', text: 'Travel to Germany for up to a year to look for work, on a points system. No job offer needed first.', href: '/countries/germany/opportunity-card/' },
        { title: 'Ausbildung', meta: 'Train and earn', text: 'Paid vocational training with a German company, for school leavers and young adults who learn German first.', href: '/countries/germany/ausbildung/' },
        { title: 'Skilled worker visa', meta: 'Job offer route', text: 'For people with a recognised qualification and a contract from a German employer. This is the route for nurses, physiotherapists, vehicle mechanics and professional drivers.' },
      ] },
      { type: 'prose', h2: 'Recognition comes first', body: [
        'Germany compares your foreign qualification with its own. For regulated professions such as nursing and physiotherapy, you cannot practise without this recognition, called Anerkennung. For non-regulated occupations it is what allows the visa to be issued as a skilled worker.',
        'The outcome is often partial recognition, with a list of differences to make up through an adaptation period or an exam in Germany. We prepare the recognition application and plan the rest of your file around its result.',
      ] },
      { type: 'prose', h2: 'How much German you need', body: ['Language is the biggest factor in how soon you can go and what you can earn.'], list: [
        'Opportunity Card: German at A1 or English at B2 to qualify. More German earns more points.',
        'Ausbildung: usually B1 before you start, because the vocational school teaches in German.',
        'Healthcare professions: usually B2 for full recognition.',
        'Technical trades and drivers: set by the employer, with basic German expected for the workplace.',
      ] },
      { type: 'links', h2: 'Germany by profession', items: [
        { title: 'Nurses', text: 'Recognition as a Pflegefachkraft, German to B2 and placement with a hospital or care home.', href: '/nursing-careers/germany/' },
        { title: 'Physiotherapists', text: 'A regulated profession: state recognition and German are required before you can treat patients.' },
        { title: 'Vehicle mechanics and drivers', text: 'Mechanics need recognition of their training against the German Kfz-Mechatroniker standard. Drivers need their licence and professional driver qualification accepted for the EU.' },
      ] },
      { type: 'faq', h2: 'Germany questions', items: [
        { q: 'Can I get permanent residence in Germany?', a: 'Yes. Skilled workers can apply for a settlement permit after a qualifying period of employment and pension contributions, with German language ability. The period depends on the permit you hold.' },
        { q: 'Do I need a blocked account?', a: 'For routes without an employment contract that covers your living costs, such as the Opportunity Card, you must show funds, usually through a blocked account. The amount is set by the German authorities and revised each year.' },
        { q: 'Is there an age limit?', a: 'There is no general upper age limit, but age affects points for the Opportunity Card, and workers over 45 entering on a skilled worker visa must meet a minimum salary or show pension provision.' },
      ] },
    ],
    related: ['/tools/opportunity-card-points-calculator/', '/nursing-careers/germany/', '/services/work-visa/'],
  },
  {
    path: '/countries/germany/opportunity-card/', crumb: 'Opportunity Card', img: 'germany', accent: 'var(--amber-deep)',
    title: 'Germany Opportunity Card Consultants in Kerala | Mountbell',
    description: 'Germany Opportunity Card consultants in Kerala. Check your Chancenkarte points, prepare the qualification and funds evidence, and apply for the job seeker visa.',
    label: 'Germany · Chancenkarte',
    h1: 'Germany Opportunity Card Consultants in Kerala',
    lede: 'The Opportunity Card (Chancenkarte) lets you enter Germany without a job offer and look for work there for up to a year. You qualify either with a fully recognised qualification or by scoring six points.',
    wa: 'Hi Mountbell, I would like to know about the Germany Opportunity Card.',
    blocks: [
      { type: 'checks', h2: 'Basic requirements', intro: 'All three are needed before any points are counted.', items: [
        { title: 'A recognised qualification', text: 'A university degree, or a vocational qualification of at least two years, that is state-recognised in the country where you earned it.' },
        { title: 'Language', text: 'German at A1 level or English at B2 level.' },
        { title: 'Proof of funds', text: 'Money to support yourself for the stay, usually in a blocked account, or a part-time job contract.' },
      ] },
      { type: 'table', h2: 'How the six points are scored', head: ['Criterion', 'Points'], rows: [
        ['Qualification partially recognised in Germany', '4'],
        ['Qualification in a shortage occupation', '1'],
        ['Work experience in your profession: 2 years in the last 5', '2'],
        ['Work experience in your profession: 5 years in the last 7', '3'],
        ['German at A2 / B1 / B2 or higher', '1 / 2 / 3'],
        ['English at C1 or native speaker', '1'],
        ['Age under 35 / 35 to 40', '2 / 1'],
        ['Legal stay in Germany of 6 months or more in the last 5 years', '1'],
        ['Spouse or partner also qualifies and applies with you', '1'],
      ], note: 'Check your own total with the Opportunity Card points calculator.' },
      { type: 'prose', h2: 'What the card allows', body: [
        'The card is issued for up to one year. During that time you may work part-time for up to 20 hours a week, and take trial jobs of up to two weeks with employers you are applying to. When you find a qualified job, you switch to a residence permit for employment without leaving Germany.',
        'It is a job-search visa, not a job. You need a realistic plan for where you will apply and enough German to be hired. For regulated professions such as nursing, recognition is still required before you can practise, so the <a href="/nursing-careers/germany/">nurse recruitment route</a> is usually the better choice.',
      ] },
      { type: 'steps', h2: 'How we prepare your application', items: [
        { title: 'Points check', text: 'Use the <a href="/tools/opportunity-card-points-calculator/">Opportunity Card points calculator</a>, then have a consultant confirm it against your documents.' },
        { title: 'Qualification evidence', text: 'A statement of comparability for your degree, or the recognition notice for a vocational qualification.' },
        { title: 'Language certificate', text: 'A recognised German or English test at the level you are claiming.' },
        { title: 'Funds', text: 'Opening the blocked account and obtaining the confirmation the mission requires.' },
        { title: 'Visa application', text: 'Forms, motivation and job-search plan, and the appointment at the German mission.' },
        { title: 'Job-search preparation', text: 'A German-format CV and guidance on where employers in your field advertise.' },
      ] },
      { type: 'faq', h2: 'Opportunity Card questions', items: [
        { q: 'Do I need to speak German?', a: 'Not necessarily. English at B2 meets the basic language requirement. In practice most employers hire in German, and each level of German adds points, so we advise starting classes before you apply.' },
        { q: 'Can the Opportunity Card be extended?', a: 'If you have found a qualified job but not yet the right permit for it, an extension of up to two years is possible. It cannot be extended simply to keep searching.' },
        { q: 'Can I bring my family?', a: 'The card is for the job seeker. Family members normally join once you hold a residence permit for employment.' },
      ] },
    ],
    related: ['/tools/opportunity-card-points-calculator/', '/countries/germany/', '/countries/germany/ausbildung/'],
  },
  {
    path: '/countries/germany/ausbildung/', crumb: 'Ausbildung', img: 'germany', accent: 'var(--amber-deep)',
    title: 'Ausbildung in Germany from Kerala | Mountbell',
    description: 'Ausbildung in Germany from Kerala: paid vocational training with a German employer, the German level you need, the training contract and the Ausbildung visa.',
    label: 'Germany · Vocational training',
    h1: 'Ausbildung in Germany from Kerala',
    lede: 'Ausbildung is Germany’s dual vocational training: you are employed by a company, paid a monthly training allowance, and attend vocational school part of the time. It ends with a qualification German employers recognise.',
    wa: 'Hi Mountbell, I would like to know about Ausbildung in Germany.',
    blocks: [
      { type: 'facts', h2: 'At a glance', rows: [
        ['Duration', 'Usually two to three and a half years, depending on the occupation'],
        ['Pay', 'A monthly training allowance from the employer, set by the training contract and rising each year'],
        ['Tuition', 'No tuition fee for the vocational school'],
        ['Language', 'German, usually B1 or higher before you start'],
        ['Entry', 'A school-leaving certificate and a training contract with a German company'],
        ['Afterwards', 'A recognised qualification and the right to stay and work as a skilled worker'],
      ] },
      { type: 'prose', h2: 'Who it suits', body: [
        'Ausbildung is designed for school leavers and young adults at the start of a career. It suits Plus Two graduates who would rather train on the job than pay for a degree abroad, and people ready to spend several months learning German before they travel.',
        'It is not a shortcut. Lessons, exams and the workplace are entirely in German, and the allowance covers a modest standard of living. If you already hold a nursing or technical qualification, a recognition route is usually faster. See <a href="/countries/germany/">all Germany routes</a>.',
      ] },
      { type: 'steps', h2: 'From Kerala to your training place', items: [
        { title: 'German to B1', text: 'The first and longest step. Your application is only competitive once you can interview in German.' },
        { title: 'Choose an occupation', text: 'Common fields include nursing care, hospitality, mechatronics, electrical trades, logistics and retail.' },
        { title: 'Applications and interviews', text: 'A German-format CV and cover letter, then online interviews with training companies.' },
        { title: 'Training contract', text: 'The company issues a contract stating the occupation, duration and allowance.' },
        { title: 'Visa', text: 'We prepare the visa file, including school certificates, the contract and proof that your living costs are covered.' },
        { title: 'Arrival', text: 'Registration, health insurance and the start of training.' },
      ] },
      { type: 'faq', h2: 'Ausbildung questions', items: [
        { q: 'Is Ausbildung free?', a: 'There is no tuition fee and you are paid a training allowance. You still need to budget for German classes and exams, the visa, travel and your initial living costs. If the allowance does not cover the living-cost threshold set for the visa, the difference must be shown as funds.' },
        { q: 'Is there an age limit?', a: 'There is no legal upper age limit for Ausbildung itself. Companies choose their trainees, and most places go to younger applicants.' },
        { q: 'Can I stay in Germany afterwards?', a: 'Yes. With the completed qualification you can take a job as a skilled worker and move to a residence permit for employment, which in time leads to a settlement permit.' },
      ] },
    ],
    related: ['/countries/germany/', '/countries/germany/opportunity-card/', '/nursing-careers/germany/'],
  },
  {
    path: '/countries/malta/', crumb: 'Malta', img: 'malta', accent: 'var(--teal)',
    title: 'Malta Work Visa Consultants in Kerala | Mountbell',
    description: 'Malta work visa consultants in Kerala: healthcare jobs for Indians, registration with Malta’s health councils and the Identità single work permit.',
    label: 'Malta',
    h1: 'Malta Work Visa Consultants in Kerala',
    lede: 'Malta is a small EU and Schengen country where English is an official language. For healthcare professionals from Kerala it offers European employment without learning a new language first.',
    wa: 'Hi Mountbell, I would like to know about working in Malta.',
    blocks: [
      { type: 'prose', h2: 'How the Malta work permit works', body: [
        'Non-EU nationals work in Malta on a single permit, which combines the right to work and the right to reside. The application is made to Identità, Malta’s identity and residence agency, and it is tied to a specific employer and role. You therefore need a job offer first, and for healthcare roles you need registration with the relevant professional council.',
      ] },
      { type: 'links', h2: 'Roles we recruit for in Malta', items: [
        { title: 'Nurses and the bridging programme', text: 'The adaptation route for nurses trained outside the EU, followed by registration with the Council for Nurses and Midwives.', href: '/nursing-careers/malta/' },
        { title: 'Physiotherapists', text: 'Registration with the Council for the Professions Complementary to Medicine, then employment with a hospital, clinic or care provider.' },
        { title: 'Occupational therapists and assistant therapists', text: 'Occupational therapy is a registered profession under the same council. Assistant therapist posts support the therapy team under supervision.' },
        { title: 'Radiographers', text: 'Diagnostic radiography is also registered with the Council for the Professions Complementary to Medicine.' },
      ] },
      { type: 'steps', h2: 'The route, step by step', items: [
        { title: 'Profile check', text: 'Your qualification and experience are compared with what the council and employers require.' },
        { title: 'Registration', text: 'We prepare your application to the relevant council, with verified certificates and transcripts.' },
        { title: 'Employer interview and offer', text: 'A written contract stating the role, salary and conditions.' },
        { title: 'Single permit', text: 'The employer-backed application to Identità for work and residence.' },
        { title: 'Visa and travel', text: 'Entry visa, flights and a pre-departure briefing.' },
      ] },
      { type: 'faq', h2: 'Malta questions', items: [
        { q: 'Is Malta in the Schengen area?', a: 'Yes. Malta is an EU member state and part of the Schengen area. A Maltese residence permit allows short visits to other Schengen countries, but it does not give the right to work in them.' },
        { q: 'Do I need to speak Maltese?', a: 'No. English is an official language and is used in healthcare. You need to show that you can work in English.' },
        { q: 'Can I get long-term residence in Malta?', a: 'Non-EU nationals can apply for long-term resident status after five years of continuous legal residence, subject to conditions set by the Maltese authorities.' },
      ] },
    ],
    related: ['/nursing-careers/malta/', '/services/work-visa/', '/countries/'],
  },
  // 10. CNC Machinist Jobs in Australia
  {
    path: '/countries/australia/cnc-machinists/',
    parent: '/countries/australia/',
    crumb: 'CNC machinists',
    img: 'australia',
    accent: 'var(--coral)',
    title: 'CNC Machinist Jobs in Australia | Mountbell',
    description: 'CNC machinist jobs in Australia : visa routes, trade assessment, pay and timelines for Kerala machinists. Free profile check with Mountbell.',
    label: 'Australia › Skilled Trades',
    h1: 'CNC Machinist Jobs in Australia : Visa, Assessment and Pay for Indians',
    lede: 'CNC machinist jobs in Australia suit skilled machinists who can set up, program and run computer-controlled machines to tight tolerances. Machinists can reach Australia through an employer’s offer, a state place or a points score, and a machinist visa Australia pathway exists for each, while precision manufacturers still cannot fill their machine shops. Mountbell sets out CNC machinist visa requirements, realistic pay, waiting times and costs, so your plan is clear before any money goes on tests.',
    acts: { check: 'Check my eligibility', wa: 'Book a free call' },
    blocks: [
      {
        type: 'note',
        text: 'Licensed by the Ministry of External Affairs as a recruiting agent: B-1921/KER/PART/100/5/10348/2023 (<a href="https://emigrate.gov.in" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Visa advice from a registered agent &nbsp;·&nbsp; Offices in Thrissur and Kochi &nbsp;·&nbsp; Written timelines and fees before you pay anything',
      },
      {
        type: 'facts',
        h2: 'CNC Machinist Jobs in Australia : Key Facts (2026-27)',
        rows: [
          ['Occupations', 'Metal Machinist (First Class), plus fitter and turner Australia roles for broader fitting work'],
          ['CNC machinist skills assessment', 'Usually 1 to 4 months'],
          ['CNC machinist salary in Australia', 'Commonly AUD 70,000 to over AUD 100,000 a year, with programmers and shift workers near the top'],
          ['Machinist visa Australia (employer route)', 'Allow 2 to 5 months of processing after a firm nominates you'],
          ['CNC machinist visa requirements', 'Trade assessment, English, proven machining experience and good character'],
          ['Points route timeline', 'Expect 12 to 24 months overall'],
          ['Government fee (points main applicant)', 'AUD 6,135 from 1 July 2026'],
        ],
      },
      {
        type: 'prose',
        h2: 'What a CNC Machinist Does',
        body: [
          'A CNC machinist reads engineering drawings, sets up lathes and milling machines, loads or edits programs, and checks finished parts with gauges and micrometres. Australian employers expect safe work, steady quality and clear records. Good machinists often grow into setter, programmer or supervisor roles.',
        ],
      },
      {
        type: 'prose',
        h2: 'Why CNC Machinist Jobs in Australia Stay in Demand',
        body: [
          'The machinist shortage Australia faces comes from ageing tradespeople, growth in defence and mining supply chains, and a push for local advanced manufacturing. Many employers also hire for fitter and turner Australia roles that overlap with machining. Competition for the best positions is still firm, so a strong portfolio of past work helps.',
        ],
      },
      {
        type: 'prose',
        h2: 'Machinist Visa Australia: Choose Your Route',
        body: [
          'Machinists have two realistic doors into Australia. Which one suits you comes down to age, budget and how much shop-floor time you can prove.',
        ],
        list: [
          '<strong>Employer door:</strong> a manufacturer nominates you and you begin on a temporary work visa. Everything starts with a CNC machinist job offer Australia firms put in writing, and CNC machinist sponsorship Australia law requires the firm to hold sponsor approval',
          '<strong>Points door:</strong> no employer is needed, because you earn your place through age, English, experience and a state or territory place. Your CNC machinist visa points must reach at least 65',
          '<strong>Later settlement:</strong> with time in the role, employer-backed machinists may move to a permanent visa once the rules are met',
        ],
        after: [
          'Pick the machinist visa Australia door that fits your own record, not the one a colleague used.',
          '<a href="/countries/australia/">Australia skilled migration &rarr;</a> &nbsp;·&nbsp; <a href="/services/work-visa/">Work Visa &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'CNC Machinist Visa Requirements: The Basics',
        body: [
          'Exact CNC machinist visa requirements vary with the visa, yet applicants are usually tested on six points.',
        ],
        list: [
          'Assessment: a positive outcome from the trade assessing authority',
          'Training: an ITI diploma or trade certificate helps, although proven shop-floor years can bridge a gap',
          'Experience: the CNC machinist work experience requirements ask for recent, documented machining work',
          'English: the CNC machinist English requirement changes with the visa, and stronger scores earn points',
          'Age: points routes generally cap eligibility at 45',
          'Character: medicals and police certificates for every adult on the file',
        ],
      },
      {
        type: 'prose',
        h2: 'CNC Machinist Skills Assessment: Your First Step',
        body: [
          'A CNC machinist skills assessment tests your skills against the Australian trade standard. From India, you normally apply through an approved training organisation. It reviews your papers, questions you on technical points and sets a practical machining test. Budget 1 to 4 months, and begin early, since this stage is the one you can control best.',
          'Recognition of prior learning for machinists helps if you learned on the shop floor rather than in a course. Gather payslips, employer letters, drawings you have worked from and photos of finished parts, and keep every claim honest.',
        ],
        after: [
          '<a href="/services/skills-assessment/">Skills Assessment &rarr;</a> &nbsp;·&nbsp; <a href="/services/visa-documentation/">Visa Documentation &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Skills and Roles Employers Want',
        body: [],
        list: [
          'CNC operator jobs in Australia: loading parts, running cycles and checking quality',
          'CNC setter jobs Australia: preparing tooling, offsets and fixtures',
          'CNC programmer jobs Australia: writing and proving programs from drawings or CAD models',
          'CNC turning jobs Australia: shafts, bushes and threaded parts',
          'CNC milling jobs Australia: housings, plates and complex profiles',
          '5-axis CNC jobs Australia: aerospace, defence and medical parts',
          'Metal machinist first class Australia: the full trade level that assessors compare you against',
          'Toolmaker jobs Australia: dies, moulds and jigs for production lines',
          'Fitter and turner Australia roles: fitting and machining work in maintenance shops',
        ],
      },
      {
        type: 'prose',
        h2: 'Industries That Hire Machinists',
        body: [],
        list: [
          'Precision engineering jobs Australia: contract machining and component makers',
          'Defence manufacturing jobs Australia: naval, land and aerospace supply chains',
          'Mining machinist jobs Australia: spare parts and equipment repair near resource regions',
        ],
      },
      {
        type: 'prose',
        h2: 'Where CNC Machinist Jobs in Australia Are Found',
        body: ['Demand shifts by state and with project cycles, so read these notes as a guide only.'],
        list: [
          'Victoria CNC machinist jobs: manufacturing and component suppliers around Melbourne',
          'New South Wales CNC machinist jobs: general engineering, defence and tooling',
          'Queensland CNC machinist jobs: mining supply and agricultural equipment',
          'South Australia CNC machinist jobs: defence shipbuilding and advanced manufacturing',
          'Western Australia CNC machinist jobs: resource services and heavy engineering',
        ],
      },
      {
        type: 'prose',
        h2: 'CNC Machinist Salary in Australia',
        body: [
          'The CNC machinist salary in Australia depends on your skills, state, shifts and allowances. Base rates come from awards and company agreements, and programmers and 5-axis specialists usually out-earn general operators. Night shifts and overtime can lift annual pay noticeably. Set the CNC machinist salary in Australia against rent in your target city before saying yes to an offer.',
        ],
      },
      {
        type: 'prose',
        h2: 'CNC Machinist Visa Timeline: What to Expect',
        body: [
          'This plan shows the likely CNC machinist visa processing time at each stage. These times suit a well-prepared applicant, and our team rechecks them at every assessment.',
        ],
        list: [
          'Week 1: free assessment and occupation check',
          'Months 1 to 2: papers collected, drawings and job records sorted, English test booked',
          'Months 2 to 4: CNC machinist skills assessment and technical interview',
          'Months 3 to 8: employer outreach and interviews, or a wait for a state place on the points route',
          '2 to 5 months: visa processing once a firm nominates you',
          '6 to 15 months: typical total on the employer route',
          '12 to 24 months: typical total on a well-prepared points route',
        ],
        after: ['<a href="/how-it-works/">How It Works &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'CNC Machinist Visa Cost',
        body: [
          'The CNC machinist visa cost has several parts. Budget for tests, medicals, police certificates, flights and the first month’s rent, along with the assessment fee. The government charge for a main applicant on the points route is AUD 6,135 from 1 July 2026, and it goes up each 1 July. Certain firms cover sponsorship costs, so get the split in writing. Our cost guide and calculator itemise everything.',
        ],
        after: ['<a href="/fees/">Fees &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'CNC Machinist Visa for Family',
        body: [
          'Your partner and children can normally be included on the same application. For a CNC machinist visa for family, each person needs a health check, a character check and proof of the relationship. The dependent visa page covers the family steps in full.',
        ],
        after: ['<a href="/services/dependent-visa/">Dependent Visa &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Avoiding CNC Job Offer Scams',
        body: [
          'CNC job offer scams often copy real company names, so verify every message. Real employers do not sell jobs. Check the company’s registration and sponsor approval before you send a rupee for a machinist visa Australia application. Walk away from anyone who guarantees a visa.',
        ],
        after: ['<a href="/resources/avoid-visa-fraud/">Avoid Visa Fraud &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Indian CNC Machinists in Australia: Support from Kerala',
        body: [
          'Indian CNC machinists in Australia usually begin as operators or setters, then move into programming or supervision. From Thrissur and Kochi, Mountbell guides CNC machinist jobs for Kerala applicants and builds each file to the machinist and fitter and turner Australia standards. Our team reviews your certificates and drawings, picks a route and gets your papers ready before you spend on tests.',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Plan Is Made',
        intro: 'This is an illustrative example, not a client record.',
        body: [],
        list: [
          'Profile: a 28-year-old CNC setter from Thrissur with seven years in a precision shop, an ITI diploma and IELTS 6.0',
          'Week 1: a free assessment confirms the trade and the likely route',
          'Months 1 to 4: paperwork, technical interview and skills check',
          'Months 5 to 9: employer outreach and interviews',
          'Result: a costed 12 to 15 month plan for a machinist visa Australia employer route',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Mountbell',
        intro: 'Our About pages show how the team works, who reviews each page and which licences we hold. When you are ready, book a free profile check. Our Australia hub compares every route, including CNC machinist jobs in Australia.',
        items: [
          { title: 'Registered partner advice', text: 'Visa advice from a registered agent partner with official MARN verification.' },
          { title: 'Trade assessment specialists', text: 'Direct guidance on drawings, technical interviews, and trade testing.' },
          { title: 'Zero visa fraud', text: 'We never sell jobs or make deceptive visa guarantees.' },
          { title: 'Local Kerala presence', text: 'Offices in Thrissur and Kochi with dedicated Australian immigration specialists.' },
        ],
        after: ['<a href="/about/">About Mountbell &rarr;</a> &nbsp;·&nbsp; <a href="/countries/australia/">Australia hub &rarr;</a>'],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          {
            q: 'Are CNC machinist jobs in Australia open without a degree?',
            a: 'Yes. Machining is a trade, so a passed assessment, proven experience and suitable English count for more than a degree.',
          },
          {
            q: 'Do I need a job offer first?',
            a: 'Not always. An employer-led move needs a nominating firm, but a points route does not. Read the CNC machinist visa requirements for each before you decide.',
          },
          {
            q: 'How long does a machinist visa Australia application take?',
            a: 'Expect 6 to 15 months overall on the employer route and 12 to 24 months on the points route.',
          },
          {
            q: 'What is the CNC machinist salary in Australia?',
            a: 'Many machinists take home from AUD 70,000 to over AUD 100,000 a year, and programming skills and shifts push it higher.',
          },
          {
            q: 'What are the main CNC machinist visa requirements?',
            a: 'A passed CNC machinist skills assessment comes first. After that come documented experience, English, health and character checks, and, on points routes, a competitive score.',
          },
          {
            q: 'Can my family come with me?',
            a: 'In most cases, yes. Your partner and children can join the file, with relationship proof and character checks.',
          },
          {
            q: 'Do I need an agent?',
            a: 'Not by law. For Australian visa advice, choose a registered agent and confirm the number on the official agents register.',
          },
        ],
      },
      {
        type: 'prose',
        h2: 'Speak to an Adviser',
        body: ['Talk to Mountbell about CNC machinist jobs in Australia. The first assessment is free.'],
        list: [
          'Call: <a href="tel:+919207014777">+91 9207014777</a>',
          'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
          'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
          '<a href="/free-immigration-assessment/">Book a free assessment &rarr;</a>',
        ],
        after: [
          '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
          '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
        ],
      },
    ],
    related: ['/countries/australia/', '/overseas-jobs/', '/services/', '/study-abroad/'],
  },

  // 11. Welder Jobs in Australia for Indians
  {
    path: '/countries/australia/welders/',
    parent: '/countries/australia/',
    crumb: 'Welders',
    img: 'australia',
    accent: 'var(--coral)',
    title: 'Welder Jobs in Australia for Indians | Mountbell',
    description: 'Welder jobs in Australia for Indians : visa routes, skills assessment, pay and timelines for Kerala welders. Free profile check with Mountbell.',
    label: 'Australia › Skilled Trades',
    h1: 'Welder Jobs in Australia for Indians : Visa, Skills Assessment and Pay',
    lede: 'Welder jobs in Australia for Indians are open to qualified tradespeople who pass a trade skills assessment and secure a visa through an employer, a state or a points score. Welding is a trade Australia keeps short, and a welder visa Australia route exists for people with proven experience, a recognised qualification and workable English. Mountbell explains welder visa requirements, realistic times, pay and costs below, so you can plan before you spend money on tests.',
    acts: { check: 'Check my eligibility', wa: 'Book a free call' },
    blocks: [
      {
        type: 'note',
        text: 'Licensed by the Ministry of External Affairs as a recruiting agent: B-1921/KER/PART/100/5/10348/2023 (<a href="https://emigrate.gov.in" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Visa advice from a registered agent &nbsp;·&nbsp; Offices in Thrissur and Kochi &nbsp;·&nbsp; Written timelines and fees before you pay anything',
      },
      {
        type: 'facts',
        h2: 'Welder Jobs in Australia for Indians : Key Facts (2026-27)',
        rows: [
          ['Occupation', 'Welder (First Class), a trade that appears on Australia’s federal skills lists'],
          ['Welder skills assessment', 'Usually 1 to 4 months'],
          ['Welder salary in Australia', 'Roughly AUD 70,000 to over AUD 100,000 a year, depending on industry, overtime and state'],
          ['Welder visa Australia (sponsored route)', 'About 2 to 5 months of processing once an employer nominates you'],
          ['Welder visa requirements', 'A trade assessment, suitable English, documented experience and a clean record'],
          ['Points-tested route timeline', 'Usually 12 to 24 months from first assessment to decision'],
          ['Government charge (points main applicant)', 'AUD 6,135 for a points-tested main applicant from 1 July 2026'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Welder Jobs in Australia for Indians Stay in Demand',
        body: [
          'The welder shortage Australia faces comes from steady building work in mining, construction, defence shipbuilding, rail, manufacturing and energy projects. Employers value welders who read drawings, pass weld tests and work safely to Australian standards. That demand is why trade migration Australia offers real openings, although competition for the best jobs is firm and lists change each year.',
        ],
      },
      {
        type: 'prose',
        h2: 'Welder Visa Australia: Your Main Routes',
        body: [
          'There are two practical ways to move under trade migration Australia rules, and the right one depends on whether you can find an employer or prefer to qualify on points.',
        ],
        list: [
          '<strong>Sponsored work route:</strong> an Australian employer nominates you for a job, and you hold a temporary work visa first. A welder job offer Australia employers make is the starting point, and welder sponsorship Australia rules require the employer to be approved',
          '<strong>Points-tested or state route:</strong> you qualify through age, English, experience and a state or territory nomination, with no employer needed. Your welder visa points must reach at least 65',
          '<strong>Later settlement:</strong> sponsored welders can move on to a permanent visa after time with their employer, if the conditions are met',
        ],
        after: [
          'Whichever welder visa Australia route you pick, it should match your age, savings and experience, not simply the route a friend used.',
          '<a href="/countries/australia/">Australia skilled migration &rarr;</a> &nbsp;·&nbsp; <a href="/services/work-visa/">Work Visa &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Welder Visa Requirements: The Basics',
        body: [
          'Welder visa requirements vary by route, but most applicants must show the following.',
        ],
        list: [
          'Skills assessment: a positive result from the trade assessing authority',
          'Qualification or evidence: a welding trade qualification helps, and strong experience can fill gaps',
          'Work history: the welder work experience requirements ask for recent, documented hands-on welding',
          'Language: the welder English requirement depends on the visa, and higher scores add points',
          'Age: most points-tested routes need you to be under 45',
          'Health and character: medicals and police certificates for every adult',
        ],
      },
      {
        type: 'prose',
        h2: 'Welder Skills Assessment: The First Gate',
        body: [
          'The welder skills assessment proves that your skills match the first class welder Australia standard. Offshore applicants usually go through an approved training organisation, which checks documents, holds a technical interview and sets a practical welding test. Start early, because this is the longest step you control. Allow 1 to 4 months, and collect certificates, payslips, employer letters and photos of your work first.',
          'Recognition of prior learning for welders can help if your skills come from years on site rather than a certificate. Assessors expect honest, detailed evidence, so never inflate your experience.',
        ],
        after: [
          '<a href="/services/skills-assessment/">Skills Assessment &rarr;</a> &nbsp;·&nbsp; <a href="/services/visa-documentation/">Visa Documentation &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Welding Certificates and the White Card',
        body: [
          'Employers look for welding certificates Australia sites accept, tested in the processes you use daily. Many sites also require a white card for welders, which is the construction safety induction. You normally complete it after you arrive, so budget a day and a small fee. Keep every Indian trade certificate and apprenticeship record, because they support your assessment.',
        ],
      },
      {
        type: 'prose',
        h2: 'Welding Skills Employers Want',
        body: [],
        list: [
          'MIG welding jobs Australia: common in fabrication shops and manufacturing',
          'TIG welding jobs Australia: precision work on stainless steel and pressure parts',
          'Stick welding jobs Australia: structural, repair and site work',
          'Pipe welder jobs Australia: pipelines, plants and power projects',
          'Structural welder jobs Australia: steel frames, bridges and buildings',
          'Mining welder jobs Australia: equipment repair and shutdown maintenance',
          'Shipyard welder jobs Australia: naval and commercial vessel building',
        ],
      },
      {
        type: 'prose',
        h2: 'Where Welder Jobs in Australia for Indians Are Found',
        body: ['Demand differs by state and moves with project cycles, so use these notes as a starting point.'],
        list: [
          'Western Australia welder jobs: mining, oil, gas and shutdown work',
          'South Australia welder jobs: defence shipbuilding and manufacturing',
          'Queensland welder jobs: mining, rail and resource projects',
          'Victoria welder jobs: manufacturing, transport and infrastructure',
          'New South Wales welder jobs: construction, infrastructure and heavy fabrication',
        ],
      },
      {
        type: 'prose',
        h2: 'Welder Salary in Australia',
        body: [
          'The welder salary in Australia depends on your industry, state, overtime and allowances. Pay is set by awards and company agreements, and many welders earn from AUD 70,000 to over AUD 100,000 a year with overtime. Mining and shutdown roles often pay more, but they come with long shifts and remote sites. Compare the welder salary in Australia with rent in the city before you accept an offer.',
        ],
      },
      {
        type: 'prose',
        h2: 'Welder Visa Timeline: What to Expect',
        body: [
          'This plan shows the likely welder visa processing time at each stage. The times assume a ready applicant, and we recheck them before every assessment.',
        ],
        list: [
          'Week 1: free assessment and trade check',
          'Months 1 to 2: documents gathered and an English test booked',
          'Months 2 to 4: welder skills assessment and practical welding test',
          'Months 3 to 8: employer search and interviews, or a state place for the points route',
          '2 to 5 months: processing of a sponsored work visa after nomination',
          '6 to 15 months: usual total for a sponsored route',
          '12 to 24 months: total for a well-prepared points-tested route',
        ],
        after: ['<a href="/how-it-works/">How It Works &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Welder Visa Cost',
        body: [
          'The welder visa cost has several parts. Budget for the skills assessment, English test, medicals, police certificates, flights and first rent. The government charge for a points-tested main applicant is AUD 6,135 from 1 July 2026, and it rises every 1 July. For sponsored routes, ask in writing which charges the employer pays and which you pay. Trade migration Australia can cost less when an employer pays the sponsorship charges. Our cost guide and calculator give a full breakdown.',
        ],
        after: ['<a href="/fees/">Fees &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Welder Visa for Family',
        body: [
          'Most routes let your partner and children join you. A welder visa for family needs proof of the relationship and health and character checks for each person. Our dependent visa page explains the full process.',
        ],
        after: ['<a href="/services/dependent-visa/">Dependent Visa &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'How to Spot Welder Job Offer Scams',
        body: [
          'Welder job offer scams target hopeful tradespeople, so check every offer. A genuine employer does not ask you to pay for a job. Ask for the company’s registration details and confirm that it is an approved sponsor before you send money or documents for any welder visa Australia application. Never trust anyone who promises a guaranteed visa.',
        ],
        after: ['<a href="/resources/avoid-visa-fraud/">Avoid Visa Fraud &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Indian Welders in Australia: Support from Kerala',
        body: [
          'Indian welders in Australia often start in fabrication, mining support or shipyards and then grow into supervisor or inspection roles. Mountbell advises welder jobs for Kerala applicants from our offices in Thrissur and Kochi. We review your certificates, match your experience to the right route and prepare your trade migration Australia file before you pay for tests.',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Plan Is Made',
        intro: 'This is an illustrative example, not a client record.',
        body: [],
        list: [
          'Profile: a 29-year-old welder from Thrissur with eight years in fabrication, a trade certificate and IELTS 6.0',
          'Week 1: free assessment confirms the trade and a realistic route',
          'Months 1 to 3: documents collected, skills assessment and practical test',
          'Months 4 to 8: employer search and interviews',
          'Result: a clear 11 to 14 month plan, with costs, for a welder visa Australia sponsored route',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Mountbell',
        intro: 'Read how our team works, who reviews each page and which licences we hold on the About pages, then book a free profile check. You can also return to our Australia hub to see every route to welder jobs in Australia for Indians side by side.',
        items: [
          { title: 'Registered trade migration', text: 'Trade assessment and visa planning with registered migration agents.' },
          { title: 'Hands-on practical guidance', text: 'Preparation for weld tests, technical interviews, and White Card compliance.' },
          { title: 'Ethical recruitment licence', text: 'MEA-licensed agency with no hidden fees or bogus job charges.' },
          { title: 'Full family visa support', text: 'Partner and dependent children included seamlessly on your file.' },
        ],
        after: ['<a href="/about/">About Mountbell &rarr;</a> &nbsp;·&nbsp; <a href="/countries/australia/">Australia hub &rarr;</a>'],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          {
            q: 'Are welder jobs in Australia for Indians possible without a degree?',
            a: 'Yes. Welding is a trade, so experience, a trade qualification and a positive skills assessment matter more than a degree.',
          },
          {
            q: 'Do I need a job offer first?',
            a: 'Not always. A sponsored route needs an employer, but a points-tested route does not. Compare the welder visa requirements for both, then choose the route that fits your age, score and savings.',
          },
          {
            q: 'How long does a welder visa Australia application take?',
            a: 'A sponsored move usually takes 6 to 15 months in total. A points-tested move usually takes 12 to 24 months.',
          },
          {
            q: 'What is the welder salary in Australia?',
            a: 'Many welders earn from AUD 70,000 to over AUD 100,000 a year with overtime, depending on industry and state.',
          },
          {
            q: 'What are the main welder visa requirements?',
            a: 'You need a positive welder skills assessment, enough documented experience, suitable English, good health and a clean record. Points routes also need a high enough score.',
          },
          {
            q: 'Can my family come with me?',
            a: 'Usually yes. Your partner and children can be included, with relationship proof and health and character checks.',
          },
          {
            q: 'Do I need an agent?',
            a: 'No agent is compulsory. If you use one for Australian visa advice, choose a registered agent and verify the number on the official agents register.',
          },
        ],
      },
      {
        type: 'prose',
        h2: 'Speak to an Adviser',
        body: ['Talk to Mountbell about welder jobs in Australia for Indians. The first assessment is free.'],
        list: [
          'Call: <a href="tel:+919207014777">+91 9207014777</a>',
          'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
          'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
          '<a href="/free-immigration-assessment/">Book a free assessment &rarr;</a>',
        ],
        after: [
          '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
          '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
        ],
      },
    ],
    related: ['/countries/australia/', '/overseas-jobs/', '/services/', '/study-abroad/'],
  },

  // 12. Mechanic Jobs in Australia for Indians
  {
    path: '/countries/australia/mechanics/',
    parent: '/countries/australia/',
    crumb: 'Mechanics',
    img: 'australia',
    accent: 'var(--coral)',
    title: 'Mechanic Jobs in Australia for Indians | Mountbell',
    description: 'Mechanic jobs in Australia for Indians : visa routes, trade assessment, pay and timelines for Kerala mechanics. Free profile check with Mountbell.',
    label: 'Australia › Skilled Trades',
    h1: 'Mechanic Jobs in Australia for Indians : Visa, Assessment and Pay',
    lede: 'Mechanic jobs in Australia for Indians suit skilled technicians who hold a trade assessment, steady workshop experience and workable English. A motor mechanic visa Australia route can run through an employer, a state place or a points score, and automotive trades Australia employers keep struggling to fill workshop roles. Below, Mountbell sets out mechanic visa requirements, expected pay, waiting times and costs, so your plan is settled before any money goes on tests.',
    acts: { check: 'Check my eligibility', wa: 'Book a free call' },
    blocks: [
      {
        type: 'note',
        text: 'Licensed by the Ministry of External Affairs as a recruiting agent: B-1921/KER/PART/100/5/10348/2023 (<a href="https://emigrate.gov.in" target="_blank" rel="noopener">verify on eMigrate</a>) &nbsp;·&nbsp; Visa advice from a registered agent &nbsp;·&nbsp; Offices in Thrissur and Kochi &nbsp;·&nbsp; Written timelines and fees before you pay anything',
      },
      {
        type: 'facts',
        h2: 'Mechanic Jobs in Australia for Indians : Key Facts (2026-27)',
        rows: [
          ['Occupations', 'Motor Mechanic (General), Diesel Motor Mechanic and related trades'],
          ['Mechanic skills assessment', 'Usually 1 to 4 months'],
          ['Mechanic salary in Australia', 'Commonly AUD 65,000 to over AUD 100,000 a year, with diesel, mining and overtime work at the top'],
          ['Motor mechanic visa Australia (employer route)', 'Allow 2 to 5 months of processing after a workshop nominates you'],
          ['Mechanic visa requirements', 'Trade assessment, English, proven repair experience and good character'],
          ['Points route timeline', 'About 12 to 24 months end to end'],
          ['Visa charge (points main applicant)', 'AUD 6,135 from 1 July 2026'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Mechanic Jobs in Australia for Indians Stay in Demand',
        body: [
          'The mechanic shortage Australia reports is driven by a growing vehicle fleet, long freight distances, busy mines and farms, and the arrival of electric vehicles. Workshops struggle to replace retiring tradespeople, which is why automotive trades Australia wide appear on skills lists. Competition for the best roles is still firm, and employers prefer technicians who diagnose faults, explain repairs clearly and keep tidy records of past work.',
        ],
      },
      {
        type: 'prose',
        h2: 'Motor Mechanic Visa Australia: Choose Your Route',
        body: [
          'There are two ways in: an employer nominates you, or you qualify on points. Age, savings and workshop experience decide which fits.',
        ],
        list: [
          '<strong>Employer route:</strong> a workshop nominates you and you start on a temporary work visa. A mechanic job offer Australia employers make is the first step, and mechanic sponsorship Australia law requires the business to be an approved sponsor',
          '<strong>Points route:</strong> you earn your place through age, English, experience and a state or territory place, without any employer. Your mechanic visa points must reach 65 at least',
          '<strong>Regional hiring:</strong> regional Australia mechanic jobs often move faster, because country towns find it harder to recruit',
          '<strong>Settlement later:</strong> after time in the job, employer-backed mechanics may apply for a permanent visa if the rules are met',
        ],
        after: [
          'Whichever motor mechanic visa Australia route you pick, match it to your own profile rather than a friend’s story.',
          '<a href="/countries/australia/">Australia skilled migration &rarr;</a> &nbsp;·&nbsp; <a href="/services/work-visa/">Work Visa &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Mechanic Visa Requirements: The Basics',
        body: [
          'Mechanic visa requirements differ by route, but most applicants need the following.',
        ],
        list: [
          'Assessment: a passed review by the trade assessing authority',
          'Qualification: a trade certificate or ITI diploma helps, and strong workshop experience can fill gaps',
          'Experience: the mechanic work experience requirements look for recent, documented repair work',
          'English: the mechanic English requirement varies by visa, and stronger scores bring extra points',
          'Age: points routes generally expect you to be under 45',
          'Character: medicals and police clearance for every adult on the file',
        ],
      },
      {
        type: 'prose',
        h2: 'Mechanic Skills Assessment: Your First Step',
        body: [
          'The mechanic skills assessment checks that your skills match the Australian trade standard. From India you normally apply through an approved training organisation, which reviews your papers, interviews you and may set a practical trade assessment for mechanics. Plan on 1 to 4 months and start early, since you control this step more than any other.',
          'Recognition of prior learning for mechanics helps if you learned on the job rather than in a course. Gather payslips, workshop letters, job cards and photos of repairs, and keep every claim honest.',
        ],
        after: [
          '<a href="/services/skills-assessment/">Skills Assessment &rarr;</a> &nbsp;·&nbsp; <a href="/services/visa-documentation/">Visa Documentation &rarr;</a>',
        ],
      },
      {
        type: 'prose',
        h2: 'Licences You May Need on the Job',
        body: [
          'Rules differ by state and task. Air-conditioning work, for example, needs a refrigerant handling licence, and roadworthy inspections need separate approval. Mining sites add their own inductions, and most employers explain these in your first weeks. Ask any employer which licences it expects before you accept an offer, so nothing surprises you after you land.',
        ],
      },
      {
        type: 'prose',
        h2: 'Mechanic Specialties in Demand',
        body: [],
        list: [
          'General motor mechanic jobs Australia: servicing and repairs in independent and franchise workshops',
          'Diesel mechanic jobs Australia: utes, buses, farm and light commercial vehicles',
          'Truck mechanic jobs Australia: prime movers, trailers and freight fleets',
          'Motorcycle mechanic jobs Australia: dealer and specialist workshops',
          'Small engine mechanic jobs Australia: mowers, generators and outdoor equipment',
          'Mining equipment mechanic jobs Australia: heavy plant repair and shutdown work',
          'Electric vehicle mechanic jobs Australia: a growing field that rewards retraining',
          'Car dealership mechanic jobs Australia: brand-trained technicians on structured pay',
          'Fleet mechanic jobs Australia: council, bus and delivery vehicle maintenance',
        ],
      },
      {
        type: 'prose',
        h2: 'Where Mechanic Jobs in Australia for Indians Are Found',
        body: ['Demand differs by state and shifts with project cycles, so treat these notes as a starting point.'],
        list: [
          'Western Australia mechanic jobs: mining fleets and heavy equipment',
          'Queensland mechanic jobs: mining, agriculture and a fast-growing population',
          'New South Wales mechanic jobs: dealerships, transport and construction fleets',
          'Victoria mechanic jobs: manufacturing, logistics and large service networks',
          'South Australia mechanic jobs: regional workshops and defence supply chains',
        ],
      },
      {
        type: 'prose',
        h2: 'Mechanic Salary in Australia',
        body: [
          'The mechanic salary in Australia depends on your specialty, state, overtime and allowances. Awards and company agreements set the base rate, and diesel, mining and heavy vehicle roles often pay above general workshops. Remote work adds allowances but also long rosters, and overtime and penalty rates can lift annual pay noticeably. Weekend and public holiday penalty rates also add to take-home pay in many workshops. Compare the mechanic salary in Australia with rent in your chosen city before you accept an offer.',
        ],
      },
      {
        type: 'prose',
        h2: 'Mechanic Visa Timeline: What to Expect',
        body: [
          'This plan shows the likely mechanic visa processing time at each stage. These times suit a prepared applicant, and our advisers recheck them at each assessment.',
        ],
        list: [
          'Week 1: free assessment and occupation check',
          'Months 1 to 2: papers collected, job records sorted and an English test booked',
          'Months 2 to 4: mechanic skills assessment and technical interview',
          'Months 3 to 8: approaching workshops and interviewing, or waiting for a state place on the points route',
          '2 to 5 months: processing after an employer nominates you',
          '6 to 15 months: usual total for the employer route',
          '12 to 24 months: usual total for a well-prepared points route',
        ],
        after: ['<a href="/how-it-works/">How It Works &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Mechanic Visa Cost',
        body: [
          'The mechanic visa cost has several parts. Plan for assessment fees, an English test, medicals, police certificates, flights and the first month’s rent. A points-route main applicant pays a government charge of AUD 6,135 from 1 July 2026, rising each 1 July. Automotive trades Australia employers sometimes pay sponsorship charges, so ask in writing who pays what. Our cost guide and calculator list every item.',
        ],
        after: ['<a href="/fees/">Fees &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Mechanic Visa for Family',
        body: [
          'Partners and children can usually be added to the application. A mechanic visa for family requires proof of the relationship plus health and character checks for each member. Our dependent visa page explains the whole process.',
        ],
        after: ['<a href="/services/dependent-visa/">Dependent Visa &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Avoiding Mechanic Job Offer Scams',
        body: [
          'Mechanic job offer scams often copy real workshop names, so verify every message. A genuine employer never charges you for a job. Ask for the workshop’s registration details and confirm its sponsor approval before paying anything towards a motor mechanic visa Australia application. Never trust a promise of a guaranteed visa.',
        ],
        after: ['<a href="/resources/avoid-visa-fraud/">Avoid Visa Fraud &rarr;</a>'],
      },
      {
        type: 'prose',
        h2: 'Indian Mechanics in Australia: Support from Kerala',
        body: [
          'Indian mechanics in Australia usually begin in general workshops, then move into diesel, fleet or supervisor roles. Mountbell guides mechanic jobs for Kerala applicants from Thrissur and Kochi, and we shape every file around automotive trades Australia standards. Our advisers check your certificates, choose a route and prepare your papers before you spend on tests.',
        ],
      },
      {
        type: 'prose',
        h2: 'Example: How a Typical Plan Is Made',
        intro: 'This is an illustrative example, not a client record.',
        body: [],
        list: [
          'Profile: a 31-year-old diesel mechanic from Kochi with nine years in heavy vehicle workshops, an ITI diploma and IELTS 6.0',
          'Week 1: our free assessment confirms the trade and the best fit',
          'Months 1 to 4: documents, technical interview and assessment',
          'Months 5 to 9: employer search and interviews',
          'Result: a clear 12 to 15 month plan, with costs, for a motor mechanic visa Australia employer route',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Mountbell',
        intro: 'See how our team works, who reviews each page and which licences we hold on the About pages, then book your free profile check. The Australia hub lays out every route side by side, including mechanic jobs in Australia for Indians.',
        items: [
          { title: 'Trade assessment expertise', text: 'Proven experience matching workshop records to Australian trade units.' },
          { title: 'Licensed immigration partner', text: 'Registered agent partner advice with verifiable MARN credentials.' },
          { title: 'Employer & points pathways', text: 'Objective comparison between Skills in Demand employer sponsorship and points PR.' },
          { title: 'Clear fee stages', text: 'All government fees, skills assessment charges, and agency costs quoted upfront.' },
        ],
        after: ['<a href="/about/">About Mountbell &rarr;</a> &nbsp;·&nbsp; <a href="/countries/australia/">Australia hub &rarr;</a>'],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          {
            q: 'Are mechanic jobs in Australia for Indians open without a degree?',
            a: 'Yes. Mechanics is a trade, so a passed assessment, proven experience and suitable English outweigh a degree.',
          },
          {
            q: 'Do I need a job offer first?',
            a: 'Not always. Employer-led moves need a nominating workshop, while points routes do not. Review the mechanic visa requirements for each before deciding.',
          },
          {
            q: 'How long does a motor mechanic visa Australia application take?',
            a: 'Employer-led moves typically take 6 to 15 months overall, while points routes take 12 to 24 months.',
          },
          {
            q: 'What is the mechanic salary in Australia?',
            a: 'Pay commonly runs from AUD 65,000 to over AUD 100,000 a year, rising with diesel, mining and overtime work.',
          },
          {
            q: 'What are the main mechanic visa requirements?',
            a: 'Expect a passed mechanic skills assessment, documented experience, suitable English, good health and a clean record, plus a competitive score on points routes.',
          },
          {
            q: 'Can my family come with me?',
            a: 'Usually, yes. Partners and children can be included, with proof of the relationship and their own checks.',
          },
          {
            q: 'Do I need an agent?',
            a: 'No law requires one. For Australian visa advice, use a registered agent and verify the number on the official agents register.',
          },
        ],
      },
      {
        type: 'prose',
        h2: 'Speak to an Adviser',
        body: ['Talk to Mountbell about mechanic jobs in Australia for Indians. The first assessment is free.'],
        list: [
          'Call: <a href="tel:+919207014777">+91 9207014777</a>',
          'Thrissur landline: <a href="tel:+914872221317">+91 487 2221317</a>',
          'Email: <a href="mailto:edu@mountbell.com">edu@mountbell.com</a>',
          '<a href="/free-immigration-assessment/">Book a free assessment &rarr;</a>',
        ],
        after: [
          '<strong>Thrissur Office (HQ)</strong><br />Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022',
          '<strong>Kochi Office</strong><br />Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025',
        ],
      },
    ],
    related: ['/countries/australia/', '/overseas-jobs/', '/services/', '/study-abroad/'],
  },
];