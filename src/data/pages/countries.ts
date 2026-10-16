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
];
