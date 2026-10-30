import type { Page } from './types';
import { site, locations as cities } from '../site';

const office = (city: string) => site.offices.find((o) => o.city === city)!;
const thrissur = office('Thrissur');
const kochi = office('Kochi');
const phones = (o: typeof thrissur) => o.phones.map((p) => `<a href="tel:${p.tel}">${p.display}</a>`).join(', ');

export const locations: Page[] = [
  {
    path: '/contact-us/', crumb: 'Contact', wide: true,
    title: 'Contact Mountbell | Thrissur and Kochi Offices',
    description: 'Contact Mountbell by phone, WhatsApp or the enquiry form, or visit our immigration offices in Thrissur and Kochi. Consultations in Malayalam and English.',
    h1: 'Contact Mountbell',
    lede: 'Call, message or visit. A consultant will answer in Malayalam or English.',
    cta: false,
    blocks: [
      { type: 'facts', rows: [
        ['Phone', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
        ['WhatsApp', `<a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener">${site.phone.display}</a>`],
        ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
        ['Thrissur office', phones(thrissur)],
        ['Kochi office', phones(kochi)],
      ] },
      { type: 'offices', h2: 'Our offices' },
      { type: 'links', h2: 'Areas we serve', intro: `We meet clients from ${site.areasServed.join(', ')} and every other district at our two offices, and work with people elsewhere in India and abroad by phone and video call.`, items: cities.map((c) => ({
        title: `Immigration consultants in ${c.city}`,
        text: c.city === 'Thrissur' ? 'Our branch office, near Ashwini Junction.' : c.city === 'Kochi' ? 'Our main branch on Edapally Road, Palarivattom.' : `How people in ${c.city} and surrounding areas work with us.`,
        href: c.href,
      })) },
      { type: 'form', h2: 'Send an enquiry' },
    ],
  },
  {
    path: '/immigration-consultants-thrissur/', parent: '/contact-us/', crumb: 'Thrissur',
    title: 'Immigration Consultants in Thrissur | Mountbell Head Office',
    description: 'Immigration consultants in Thrissur at Ashwini Junction: MEA-licensed advice on PR, work visas, nursing and overseas jobs. Free assessment. Call +91 9207014777.',
    label: 'Head office · Ashwini Junction',
    h1: "Immigration Consultants in Thrissur: Mountbell's Head Office, Ashwini Junction",
    lede: "Immigration consultants in Thrissur should be easy to visit, licensed to recruit and honest about which routes fit you. Mountbell's head office stands at Fair Trade Center, TUDA Road. Families from across the district come here to plan moves for work, permanent residence, nursing careers and study. Your first assessment is free, in Malayalam or English.",
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    wa: 'Hi Mountbell, I would like to visit the Thrissur head office.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Visit us in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Pick a consultation time that suits your family schedule, including Saturday appointments.' },
          { title: '2. Come to Fair Trade Center, TUDA Road', text: 'Visit our head office at Ashwini Junction, Thrissur 680022.' },
          { title: '3. Meet an adviser for a free assessment', text: 'Get an objective evaluation of your overseas visa and job options from senior consultants.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Where Is Mountbell in Thrissur?',
        body: [
          'The Mountbell Thrissur office is our head office, at Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022. Call +91 9207014777 or +91 487 2221317 to book a time.',
          'Our immigration consultants in Thrissur advise on skilled migration, PR, work visas, overseas recruitment, nursing careers and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023).',
        ],
      },
      {
        type: 'offices',
        h2: 'The Office at a Glance',
        city: 'Thrissur',
      },
      {
        type: 'facts',
        h2: 'Thrissur Head Office Details',
        rows: [
          ['Address', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
          ['Central Mobile & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Thrissur Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Languages spoken', 'Malayalam and English'],
          ['Role', 'Head office, where senior advisers and the leadership team work every day'],
          ['Government licence', 'MEA Recruiting Agent Licence B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Families Here Choose Local Advisers',
        body: [
          'Thrissur district sends large numbers of people abroad every year. Nurses trained in local hospitals and colleges look to the UK, Germany, Malta and the Maldives. Many households around Chavakkad and Guruvayur have long ties with the Gulf. Engineers, IT graduates and teachers in the town compare PR routes scored on points with routes led by an employer.',
          'Local migration consultants Thrissur families can visit in person make that choice easier. That is why many people search for immigration consultants in Thrissur rather than firms in other cities. You can sit with an adviser, bring your parents or partner, and come back with new questions without travelling to Kochi.',
        ],
      },
      {
        type: 'checks',
        h2: 'What Makes This Office Different',
        intro: "As Mountbell's head office, this is where our most experienced specialists work every day:",
        items: [
          { title: 'Senior advisers on complex cases', text: 'Senior advisers who handle complex applications, administrative reviews, and second appraisals.' },
          { title: 'Direct leadership access', text: 'The leadership team is on site, available whenever a complicated case needs a final evaluation.' },
          { title: 'Dedicated nursing desk', text: 'Nursing advisers who work exclusively with registered nurses on AHPRA, NMC, Anerkennung and Maltese bridging.' },
          { title: 'Two-tier document vetting', text: 'A dedicated documentation team that checks every legal, financial, and educational file before submission.' },
        ],
        after: ['These are the immigration consultants in Thrissur who also review our guides, so advice in person matches what you read online.'],
      },
      {
        type: 'links',
        h2: 'Services Available Here',
        intro: 'Every Mountbell service is offered at our Thrissur head office:',
        items: [
          { title: 'Skilled migration and PR', text: 'Points-tested permanent residence in Australia and Canada.', href: '/services/pr-visa/' },
          { title: 'Work visas through employers', text: 'Verified employer-sponsored visas across Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Nursing careers abroad', text: 'Nurse registration and placement in the UK, Germany, Malta, Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Overseas recruitment', text: 'Licensed recruitment for tradespeople, mechanics, CNC machinists, drivers, and technical staff.', href: '/overseas-jobs/' },
          { title: 'Skills assessment & language training', text: 'Credential recognition, visa documentation, and in-house IELTS, OET, PTE, and German classes.', href: '/services/skills-assessment/' },
          { title: 'Focused study abroad service', text: 'University programmes with confirmed post-study work rights and PR routes.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Popular Destinations for Local Applicants',
        body: [
          'The routes we handle most frequently at our Ashwini Junction head office include:',
        ],
        list: [
          '<strong>United Kingdom and Malta:</strong> Registered nurses, healthcare support workers, and senior care professionals joining NHS trusts and Maltese healthcare providers.',
          '<strong>Germany:</strong> Nurses, mechanics, and skilled technical workers learning German to B1/B2, alongside Opportunity Card job-seeker pathways.',
          '<strong>Australia and Canada:</strong> Engineers, IT specialists, accountants, and health professionals seeking points-tested permanent residence.',
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Welders, fitters, drivers, and industrial electricians with verified European work permits.',
          '<strong>The Maldives:</strong> Nurses and allied health staff seeking tax-free hospital roles close to home.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Thrissur',
        body: [
          "Thrissur has one of Kerala's largest nursing workforces. Many nurses here trained at prestigious institutions such as Jubilee Mission Medical College, Amala Institute of Medical Sciences, and the Government Medical College Thrissur.",
          'Our nursing advisers explain which countries accept a GNM diploma, which need a BSc, how long registration takes and when to sit OET or IELTS. Keep your Kerala Nurses and Midwives Council (KNMC) registration current before you start, because every country asks for it. Ward experience in local private hospitals counts fully provided your letters detail dates, departments, and clinical duties.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Gulf Workers Planning Their Next Move',
        body: [
          'Many families in Thrissur district already have someone working in the Gulf. That work can count towards skilled routes in Europe, Australia or Canada, provided your letters spell out your duties and dates.',
          'The visa consultants Thrissur clients meet here check whether your job fits a skilled list before you spend money on tests. If an experience letter is missing critical elements, we explain exactly what wording to request from your GCC employer.',
        ],
      },
      {
        type: 'steps',
        h2: 'A Typical First Visit',
        intro: 'Most first visits take about an hour at our Ashwini Junction office. We keep it unhurried, objective, and transparent:',
        items: [
          { title: '1. Welcome and profile intake', text: 'A friendly welcome and structured questions about your employment history, qualifications, and family plans.' },
          { title: '2. Review of documents', text: 'A careful check of any degree certificates, nursing registrations, or trade credentials you bring.' },
          { title: '3. Honest pathway evaluation', text: 'The routes that fit you, and the ones that do not, explained honestly with zero false promises.' },
          { title: '4. Written schedules & costs', text: 'Likely timelines and fee schedules in writing so your family can review them clearly.' },
          { title: '5. Open family Q&A', text: 'Time for every question from you, your spouse, or your parents in Malayalam or English.' },
        ],
        after: ['If your route will need a police certificate, we also explain how to book the Passport Seva Kendra Thrissur appointment at the right time.'],
      },
      {
        type: 'prose',
        h2: 'Local Offices You May Need in Thrissur',
        body: [
          'Some steps in your move happen at government offices, and our advisers tell you exactly when each one is needed:',
        ],
        list: [
          '<strong>Passport Seva Kendra (PSK) Thrissur:</strong> Located on Poothole Road near the Thrissur railway station, handling passports and police clearance certificates.',
          '<strong>NORKA-ROOTS Attestation Centres:</strong> Located in Ernakulam, Thiruvananthapuram and Kozhikode for HRD and educational certificate attestation.',
          '<strong>eMigrate Portal Clearance:</strong> Handles statutory clearance for workers whose passports are marked ECR.',
          '<strong>Protector of Emigrants (PoE) Office Kochi:</strong> Handles recruitment complaints, emigrant clearance queries, and regulatory oversight.',
        ],
        after: ['Booking an early slot saves weeks, because police certificates are needed for most visas. Our immigration consultants in Thrissur tell you the right moment to book.'],
      },
      {
        type: 'prose',
        h2: 'How to Reach Us at Ashwini Junction',
        body: [
          'Our head office is conveniently located at Fair Trade Center on TUDA Road, right by Ashwini Junction in Thrissur:',
        ],
        list: [
          '<strong>From Thrissur Railway Station:</strong> Approximately 2.5 km away; about 8 to 10 minutes by auto.',
          '<strong>From KSRTC or Sakthan Thampuran Bus Stand:</strong> Approximately 2 to 3 km away; quick auto or town bus ride to Ashwini Junction.',
          '<strong>From Guruvayur or Kunnamkulam:</strong> Approximately 25–30 km via Guruvayur–Thrissur Road, taking around 45 to 50 minutes.',
          '<strong>From Chalakudy or Irinjalakuda:</strong> Roughly 25–35 km north along NH 544 / SH 22, taking around 45 to 60 minutes.',
          '<strong>From Cochin International Airport (Nedumbassery):</strong> About 55 km south via NH 544; roughly 1 hour 15 minutes by taxi.',
        ],
      },
      {
        type: 'prose',
        h2: 'Thrissur or Kochi?',
        body: [
          'Our immigration consultants in Thrissur include the senior team, so complex cases, refusals and family moves are often reviewed at this office. If Kochi is closer, start there; your file moves securely between the two.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Thrissur: What to Check',
        intro: 'The town has many agents, and immigration consultants in Thrissur range from licensed firms to people working from a phone. Before you pay anyone, check these points:',
        items: [
          { title: 'MEA licence listed on eMigrate', text: "A recruiting agent licence listed on the government's eMigrate portal under the firm's exact name." },
          { title: 'Signed contracts with official receipts', text: 'Fees written in an agreement you sign, with a receipt for every payment.' },
          { title: 'No false job or visa guarantees', text: 'No promise of a guaranteed visa or job; honest advisers explain true embassy standards.' },
          { title: 'Physical office with named advisers', text: 'A real office you can visit, with named advisers, as migration consultants Thrissur families can check for themselves.' },
        ],
        after: ['Apply the same checks to every firm, including ours. Good visa consultants Thrissur families trust will welcome them.'],
      },
      {
        type: 'reviews',
        h2: 'What Clients Say About Our Thrissur Office',
      },
      {
        type: 'prose',
        h2: 'Towns We Welcome From Across the District',
        body: [
          'Our immigration consultants in Thrissur welcome clients from across the district, including Guruvayur, Chavakkad and Kunnamkulam in the west, Wadakkanchery and Chelakkara in the north, and Chalakudy, Irinjalakuda and Kodungallur in the south.',
          'Families from neighbouring Palakkad and Malappuram districts also frequently find our Thrissur office the most convenient to reach for in-person document verification.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Where is the Mountbell Thrissur office located?', a: 'At Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022. It is our official head office.' },
          { q: 'Are your immigration consultants in Thrissur licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs (Licence No. B-1921/KER/PART/100/5/10348/2023), which you can verify on eMigrate.' },
          { q: 'Do I need an appointment before visiting the office?', a: 'It helps. Calling ahead at +91 9207014777 or +91 487 2221317 ensures the appropriate specialist consultant is reserved for your consultation.' },
          { q: 'Where do I get a police certificate in Thrissur?', a: 'Through Passport Seva. The Passport Seva Kendra Thrissur is on Poothole Road near the railway station, and our advisers tell you when your route needs one.' },
          { q: 'Do you help nurses from Thrissur hospitals?', a: 'Yes. Nursing routes to the UK, Germany, Malta, the Maldives and Denmark are among our most common cases, especially for staff from Jubilee Mission, Amala, and GMC Thrissur.' },
          { q: 'Can migration consultants Thrissur families trust help with Gulf experience?', a: 'Yes. We check whether your Gulf work counts towards a skilled route before you pay for tests.' },
          { q: 'Do visa consultants Thrissur offices charge for the first meeting?', a: 'We do not. Your first assessment at the Mountbell Thrissur office is completely free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Visit Our Head Office in Thrissur',
        rows: [
          ['Mobile & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Thrissur Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Consultation Booking', '<a href="/free-immigration-assessment/">Book a free assessment</a>'],
          ['Head Office Address', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
          ['Kochi Branch', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom, Kochi 682025'],
        ],
      },
    ],
    related: ['/immigration-consultants-kochi/', '/immigration-consultants-palakkad/', '/immigration-consultants-malappuram/', '/contact-us/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-kochi/', parent: '/contact-us/', crumb: 'Kochi',
    title: 'Immigration Consultants in Kochi | Mountbell Palarivattom',
    description: 'Immigration consultants in Kochi at Palarivattom, on the Metro line: MEA-licensed advice on PR, work visas, nursing and overseas jobs. Call +91 9207014777.',
    label: 'Main branch · Palarivattom',
    h1: 'Immigration Consultants in Kochi: Mountbell\'s Office at Palarivattom',
    lede: 'Immigration consultants in Kochi should be easy to reach, licensed to recruit and honest about which routes fit you. Mountbell\'s Kochi office is at Mathewsons Centre Point on Edappally Road, beside the Metro line. Families from across central Kerala come here to plan moves for work, permanent residence, nursing careers and study. Your first assessment is free, in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    wa: 'Hi Mountbell, I would like to visit the Kochi office in Palarivattom.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Visit us in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Book an appointment at a time that works for your schedule, including evening slots.' },
          { title: '2. Come to Mathewsons Centre Point, Palarivattom', text: '5th Floor, Metro Pillar No. 485, Edappally Road, Kochi 682025.' },
          { title: '3. Meet an adviser for a free profile assessment', text: 'Sit with an experienced consultant for an unhurried, transparent evaluation of your overseas options.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Where Is Mountbell in Kochi?',
        body: [
          'The Mountbell Kochi office is at Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025. Call +91 9207014777 to book a time.',
          'Our immigration consultants in Kochi advise on skilled migration, PR, work visas, overseas recruitment, nursing careers and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023).',
        ],
      },
      {
        type: 'offices',
        h2: 'The Office at a Glance',
        city: 'Kochi',
      },
      {
        type: 'facts',
        h2: 'Kochi Office Details',
        rows: [
          ['Address', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025'],
          ['Phone & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Languages spoken', 'Malayalam and English'],
          ['Role', 'Main branch office, working in tandem with the Thrissur head office'],
          ['Government licence', 'MEA Recruiting Agent Licence B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Families Here Choose Local Advisers',
        body: [
          'Ernakulam district is Kerala\'s busiest centre for work, study and travel. Nurses from the city\'s large private hospitals look to the UK, Germany, Malta and the Maldives. IT staff and engineers from Kakkanad weigh PR in Australia and Canada. Tradespeople from the port and shipyard sectors look at Europe and the Gulf.',
          'Local Ernakulam immigration consultants you can visit in person make that choice easier. That is why many people search for immigration consultants in Kochi rather than firms further away. You can sit with an adviser, bring your family, and come back with new questions without a long journey.',
        ],
      },
      {
        type: 'checks',
        h2: 'What Sets This Office Apart',
        intro: 'The office sits right on the Kochi Metro corridor between Palarivattom and Edappally, making it convenient to reach from anywhere in the greater Kochi metropolitan area:',
        items: [
          { title: 'Specialist advisers on site', text: 'Dedicated advisers who handle specific routes for registered nurses, IT professionals, engineers and skilled tradespeople.' },
          { title: 'Direct link to head office', text: 'Direct access to head office advisers in Thrissur for complex legal, refusal and multi-country files.' },
          { title: 'Standardised fair pricing', text: 'The same document checks, milestone-based fees, and transparent contracts as our head office, with no local markups.' },
          { title: 'Flexible evening & online consultations', text: 'Evening and online meetings for working corporate professionals, hospital shift workers, and Gulf-based family members.' },
        ],
      },
      {
        type: 'links',
        h2: 'Services Available Here',
        intro: 'Every Mountbell service is offered at our Kochi office:',
        items: [
          { title: 'Skilled migration and PR', text: 'Permanent residence for Australia (Subclass 189, 190, 491) and Canada (Express Entry & PNPs).', href: '/services/pr-visa/' },
          { title: 'Work visas through employers', text: 'Direct employment contracts with verified employers in Germany, Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Nursing careers abroad', text: 'AHPRA, NMC, Anerkennung and bridging programmes in the UK, Germany, Malta, Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Overseas recruitment', text: 'Verified openings for CNC machinists, welders, mechanics, drivers, and technical staff.', href: '/overseas-jobs/' },
          { title: 'Skills assessment & documentation', text: 'TRA, ACS, VETASSESS, Engineers Australia filings, PCC, and document legalisation.', href: '/services/skills-assessment/' },
          { title: 'Study abroad consultancy', text: 'Higher education programmes with verified post-study work rights and migration pathways.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Top Destinations for Kochi Applicants',
        body: [
          'The pathways handled most frequently at our Palarivattom office include:',
        ],
        list: [
          '<strong>United Kingdom and Malta:</strong> Registered nurses, healthcare support workers, and senior care professionals joining NHS trusts and Maltese healthcare providers.',
          '<strong>Germany:</strong> Nurses, automotive mechanics, and skilled technical workers learning German, plus Opportunity Card job seeker visas.',
          '<strong>Australia and Canada:</strong> IT specialists, software engineers, civil/mechanical engineers, and health professionals seeking points-tested permanent residence.',
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Welders, fitters, heavy vehicle drivers, and industrial electricians taking up European work contracts.',
          '<strong>The Maldives:</strong> Registered nurses, laboratory technicians, and allied health staff seeking tax-free hospital roles close to Kerala.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Ernakulam',
        body: [
          'Kochi is home to some of Kerala\'s most prominent quaternary care hospitals, including Amrita Institute of Medical Sciences, Aster Medcity, VPS Lakeshore, Rajagiri Hospital, and Medical Trust Hospital. Many of our immigration consultants in Kochi work daily with nursing staff from these wards.',
          'Our nursing advisers explain which countries accept a GNM diploma, which require a BSc Nursing degree, how long registration takes, and when to sit OET or IELTS. Keep your Kerala Nurses and Midwives Council (KNMC) registration active throughout the process, because overseas regulators verify good standing directly with the council.',
        ],
      },
      {
        type: 'prose',
        h2: 'For IT Professionals and Engineers',
        body: [
          'Many clients visiting our Palarivattom branch work at Infopark Kakkanad, SmartCity Kochi, or engineering consultancy firms across the city. Permanent residence scored on points in Australia and Canada often suits tech professionals with 3+ years of experience and solid English proficiencies.',
          'The visa consultants Kochi clients meet here check your occupation against the Core Skills Occupation List and calculate your points score before you pay for credential evaluations. We also compare independent skilled migration routes against employer-sponsored work permits to identify your fastest timeline.',
        ],
      },
      {
        type: 'steps',
        h2: 'Your First Visit',
        intro: 'Most first consultations take about an hour. Ernakulam immigration consultants should leave you with a clear written summary, and that is our standard practice:',
        items: [
          { title: '1. Welcome and profile intake', text: 'A friendly greeting and structured questions about your employment history, educational qualifications, language proficiencies, and family migration goals.' },
          { title: '2. Review of documents', text: 'A careful check of any degree certificates, mark sheets, trade licences, and employment experience letters you bring along.' },
          { title: '3. Transparent route evaluation', text: 'An honest explanation of which visa pathways genuinely suit your profile—and which routes you should avoid spending money on.' },
          { title: '4. Written timelines and fee schedules', text: 'Likely processing durations, third-party government/assessment charges, and our milestone payments laid out clearly in writing.' },
          { title: '5. Dedicated Q&A session', text: 'Full time for every question from you, your spouse, or your parents in Malayalam or English.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Government Offices You May Need in Kochi',
        body: [
          'Several official steps in your visa application happen at government departments located right here in Kochi. Our advisers tell you exactly when each visit is required and what paperwork to carry:',
        ],
        list: [
          '<strong>Regional Passport Office (RPO) Kochi:</strong> Located at Panampilly Nagar, handling passport renewals, tatkaal services, and Police Clearance Certificates (PCC).',
          '<strong>NORKA-ROOTS Ernakulam Centre:</strong> Situated near the Collectorate / Kakkanad, handling state HRD and educational certificate attestation.',
          '<strong>Protector of Emigrants (PoE) / Emigration Office:</strong> Located in Kochi, overseeing overseas recruitment compliances and eMigrate clearance for ECR passport holders.',
          '<strong>Passport Seva Kendra (PSK) Aluva:</strong> Additional facility handling biometric appointments and police clearance services for northern parts of the district.',
        ],
      },
      {
        type: 'prose',
        h2: 'How to Reach the Kochi Office',
        body: [
          'Our office is conveniently situated on Edappally Road at Metro Pillar No. 485, Palarivattom.',
        ],
        list: [
          '<strong>By Kochi Metro:</strong> Alight at Palarivattom Metro Station. Walk approximately 350 metres (about 4 minutes) north along Edappally Road to Metro Pillar 485.',
          '<strong>From Vyttila Mobility Hub:</strong> Take the Kochi Metro directly to Palarivattom (approx 12–15 minutes) or drive north along NH 66 bypass (approx 20 minutes).',
          '<strong>From Ernakulam Junction (South) Railway Station:</strong> Approximately 7 km away; reachable in 15 minutes by Metro from South station or 20–25 minutes by taxi/auto.',
          '<strong>From Aluva or Angamaly:</strong> Take the Metro from Aluva directly to Palarivattom (approx 22 minutes), or drive south along NH 544 (approx 35–45 minutes from Angamaly).',
          '<strong>From Cochin International Airport (Nedumbassery):</strong> Approximately 22 km north; reachable in 35 to 45 minutes by airport taxi via NH 544.',
        ],
      },
      {
        type: 'prose',
        h2: 'Kochi or Thrissur?',
        body: [
          'Both offices offer the same services, the same MEA licence standards, and the same free initial assessment. If you live or work in Ernakulam, Kottayam, Idukki, or Alappuzha, our immigration consultants in Kochi are the natural place to start.',
          'Complex cases—such as previous visa refusals, administrative appeals, or complex family custody files—are reviewed collaboratively by our senior legal and immigration team in Thrissur without you needing to travel. Your documentation is safely shared across our internal network.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Kochi: What to Check',
        intro: 'Kochi has hundreds of overseas agencies. Immigration consultants in Kochi range from government-licensed recruitment firms to unverified one-room agents. Before you pay anyone, run these essential checks:',
        items: [
          { title: 'Check MEA recruiting licence', text: 'Verify the agency\'s licence number directly on the Ministry of External Affairs eMigrate portal (emigrate.gov.in).' },
          { title: 'Demand written agreements & receipts', text: 'Ensure every fee component is written in a contract you sign, with a valid tax invoice and receipt for every payment.' },
          { title: 'Beware of visa & job guarantees', text: 'Never trust agents who promise guaranteed visas or pre-approved jobs; only sovereign embassies and immigration departments decide visas.' },
          { title: 'Inspect physical premises & meet advisers', text: 'Work with established offices with permanent staff where you can meet advisers face to face and return with questions.' },
        ],
      },
      {
        type: 'reviews',
        h2: 'What Clients Say About Mountbell',
      },
      {
        type: 'prose',
        h2: 'Areas Around Kochi We Welcome',
        body: [
          'Our Palarivattom team regularly assists clients and families from across Ernakulam district, including Aluva, Angamaly, Perumbavoor, and Kalamassery in the north; Kakkanad, Tripunithura, and Maradu nearby; and Muvattupuzha, Kothamangalam, and Piravom in the east.',
          'In addition, applicants from neighbouring districts—including Alappuzha (Cherthala, Alappuzha town), Idukki (Thodupuzha), and Kottayam—regularly use our Kochi office as their primary physical hub.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Where is the Mountbell Kochi office located?', a: 'We are at Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi 682025.' },
          { q: 'Are your immigration consultants in Kochi licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs, Government of India (Licence No. B-1921/KER/PART/100/5/10348/2023), verifiable on eMigrate.' },
          { q: 'Do I need an appointment before visiting the Kochi office?', a: 'An appointment is recommended so we can ensure the specialist consultant for your country or sector is reserved and free to give you an unhurried consultation. Call or WhatsApp +91 9207014777.' },
          { q: 'Where do I get a police clearance certificate (PCC) in Kochi?', a: 'Police Clearance Certificates are issued through Passport Seva under the Regional Passport Office Kochi at Panampilly Nagar. Our advisers instruct you on the exact timing to apply so it remains valid.' },
          { q: 'Do you help IT professionals and software engineers from Kakkanad?', a: 'Yes. Australia Subclass 189, 190, and 491 visas, along with Canadian Express Entry and employer-sponsored ICT pathways, are among the most frequent files handled at our Kochi office.' },
          { q: 'Do visa consultants Kochi offices charge for the first meeting?', a: 'Mountbell does not charge for your opening eligibility assessment. The first consultation is completely free of charge.' },
          { q: 'Can I schedule an evening or weekend consultation?', a: 'Yes, by prior arrangement. We also offer secure online video consultations for working clients and family members currently living in the Gulf.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Visit Our Office in Kochi',
        rows: [
          ['Branch Phone', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Direct Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Consultation Booking', '<a href="/free-immigration-assessment/">Book a free immigration consultation</a>'],
          ['Physical Address', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom, Edappally Road, Kochi 682025'],
        ],
      },
    ],
    related: ['/immigration-consultants-thrissur/', '/immigration-consultants-kottayam/', '/contact-us/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-calicut/', parent: '/contact-us/', crumb: 'Calicut',
    title: 'Immigration Consultants in Calicut | Mountbell Kozhikode',
    description: 'Immigration consultants in Calicut: MEA-licensed Mountbell advice on PR, work visas, nursing and overseas jobs, online or in Thrissur. Free assessment.',
    label: 'Kozhikode & Malabar',
    h1: 'Immigration Consultants in Calicut: Licensed Advice for Kozhikode, Online and In Person',
    lede: 'Immigration consultants in Calicut should be licensed to recruit, honest about which routes fit you and easy to reach. Mountbell does not have an office in Calicut yet. We serve clients across the district through online meetings, calls, WhatsApp and at our head office in Thrissur. Your first assessment is free, in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Calicut and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Get started in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Reach our advisers to schedule an appointment at a convenient time.' },
          { title: '2. Meet an adviser online, or visit our Thrissur office', text: 'Connect over a secure video meeting from home or visit our head office in Thrissur.' },
          { title: '3. Get a free assessment of the routes that fit you', text: 'Receive an honest, transparent evaluation of the overseas pathways matching your qualifications.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Does Mountbell Have an Office in Calicut?',
        body: [
          'Not yet. Our immigration consultants in Calicut work with clients online and by phone, and in person at our main office at Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur. Call +91 9207014777 to book.',
          'We advise on skilled migration, PR, work visas, overseas recruitment, nursing careers and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023).',
        ],
      },
      {
        type: 'facts',
        h2: 'How We Serve Calicut at a Glance',
        rows: [
          ['Online meetings', 'By video meeting at a time that suits you, including evenings'],
          ['Calls and WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Nearest office', 'Our head office in Thrissur, reachable by direct train from Kozhikode railway station'],
          ['Languages spoken', 'Malayalam and English'],
          ['Licence status', 'MEA licensed recruiting agent B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Malabar Families Look for Licensed Advisers',
        body: [
          'Kozhikode district has some of the deepest links with the Gulf anywhere in Kerala. Many households already have a member working in the UAE, Saudi Arabia, Qatar or Oman. The next generation is looking further: Europe, Australia and Canada. Nurses from the city\'s hospitals look to the UK, Germany, Malta and the Maldives.',
          'With so many agents in the region, choosing Kozhikode immigration consultants who hold a licence matters more than ever. The wrong choice can cost lakhs and years. That is why many people search for immigration consultants in Calicut with a licence they can check on the government\'s eMigrate portal.',
        ],
      },
      {
        type: 'checks',
        h2: 'What Sets Our Calicut Service Apart',
        intro: 'We combine government-certified accountability with flexible remote delivery for families across Kozhikode and Malabar:',
        items: [
          { title: 'Licensed by the Ministry of External Affairs', text: 'Holds MEA recruiting agent licence B-1921/KER/PART/100/5/10348/2023, searchable directly on eMigrate.' },
          { title: 'Same advisers and transparent fees', text: 'The same experienced advisers, fee structures and document checks as our Thrissur and Kochi offices.' },
          { title: 'Evening online meetings', text: 'Video appointments scheduled in the evening for working clients, hospital shift nurses, and families based in the Gulf.' },
          { title: 'One dedicated adviser', text: 'One named specialist stays with your case from first consultation through document checks to departure.' },
        ],
      },
      {
        type: 'links',
        h2: 'Services Available to Calicut Clients',
        intro: 'Every Mountbell service is available online or at our offices:',
        items: [
          { title: 'Skilled migration and PR', text: 'Points-tested permanent residence pathways for Australia and Canada.', href: '/services/pr-visa/' },
          { title: 'Work visas through employers', text: 'Verified employer-sponsored work permits across Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Nursing careers abroad', text: 'Hospital placement and nursing registration in the UK, Germany, Malta, Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Overseas recruitment', text: 'Recruitment for tradespeople, mechanics, CNC machinists, and technical professionals.', href: '/overseas-jobs/' },
          { title: 'Skills assessment & language classes', text: 'Formal trade recognition and online IELTS, PTE, OET, and German language training.', href: '/services/skills-assessment/' },
          { title: 'Study abroad consultancy', text: 'Focused overseas higher education programmes leading to post-graduation work rights.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Top Destinations for Calicut Applicants',
        body: [
          'The routes we handle most often for clients from Kozhikode and Malabar reflect the region\'s strong technical, trade, and healthcare skills:',
        ],
        list: [
          '<strong>Europe (Poland, Latvia, Lithuania, Bulgaria, Malta):</strong> Work permits for skilled trades, heavy vehicle drivers, CNC machinists, and electricians.',
          '<strong>Germany:</strong> Nurses and skilled workers learning German to B1/B2, alongside Opportunity Card job-seeker pathways.',
          '<strong>United Kingdom and Malta:</strong> Registered nurses, healthcare assistants, and care professionals.',
          '<strong>Australia and Canada:</strong> Engineers, IT specialists, accountants, and healthcare professionals seeking PR.',
          '<strong>The Maldives:</strong> Registered nurses and allied health staff seeking tax-free hospital roles close to Kerala.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Kozhikode',
        body: [
          'Kozhikode trains and employs thousands of nurses, at reputable institutions such as the Government Medical College Kozhikode, Baby Memorial Hospital, and Aster MIMS. Our nursing advisers explain which countries accept a GNM diploma, which require a BSc Nursing degree, how long registration takes and when to sit OET or IELTS.',
          'Keep your Kerala Nurses and Midwives Council (KNMC) registration current before you start, because every international regulator asks for it. Experience gained in recognized private hospital wards counts toward registration and points provided your letters detail dates, departments, and clinical duties.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Gulf Workers and Returnees',
        body: [
          'Many clients from Kozhikode district have worked in the Gulf for years in countries like the UAE, Saudi Arabia, Kuwait, Oman, or Qatar. That experience can count towards skilled migration routes in Europe, Australia or Canada, provided your experience certificates spell out your exact duties, tools, and tenure.',
          'The visa consultants Calicut clients speak to at Mountbell check whether your job fits an official skilled occupation list before you spend money on English tests or credential evaluations.',
        ],
      },
      {
        type: 'steps',
        h2: 'The First Call With an Adviser',
        intro: 'Most first meetings take about an hour, online or in Thrissur. Our immigration consultants in Calicut keep it practical, clear, and honest:',
        items: [
          { title: '1. Intake & background review', text: 'A short welcome and structured review of your employment history, education, and family goals.' },
          { title: '2. Document appraisal', text: 'A preliminary review of your educational certificates, trade documents, and Gulf experience letters.' },
          { title: '3. Realistic pathway matching', text: 'The routes that suit you, and the ones that do not, explained honestly with zero false promises.' },
          { title: '4. Written timelines and costs', text: 'Likely processing timelines, government visa charges, and our fees provided in writing.' },
          { title: '5. Open questions for the family', text: 'Dedicated time for questions from you and your family, conducted in Malayalam or English.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Offices You May Need in Kozhikode',
        body: [
          'Some steps in your overseas migration journey require visits to statutory government offices in the city. Our advisers guide you on the exact timing for each:',
        ],
        list: [
          '<strong>Passport Seva Kendra Kozhikode:</strong> Located at West Hill Chungam, handling passport issues, renewals, and Police Clearance Certificates (PCC).',
          '<strong>Regional Passport Office (RPO) Kozhikode:</strong> Located at West Hill, overseeing passport services across Northern Kerala.',
          '<strong>NORKA-ROOTS Kozhikode Centre:</strong> Handles certificate authentication and attestation of educational certificates.',
          '<strong>eMigrate Portal Clearance:</strong> Online clearance for workers whose passports carry the ECR (Emigration Check Required) endorsement.',
        ],
        after: ['Booking police clearance certificates early saves weeks, because PCC processing times can vary.'],
      },
      {
        type: 'prose',
        h2: 'How to Meet Us from Calicut',
        body: [
          'Our immigration consultants in Calicut handle most of your case online, with one or two office visits for checking original documents.',
        ],
        list: [
          '<strong>Online:</strong> Book a video meeting at a time that suits you, including evening hours.',
          '<strong>By train:</strong> Kozhikode to Thrissur takes about 2 to 2.5 hours by express train (Vande Bharat / Intercity), followed by a 10-minute auto ride to our office at Ashwini Junction.',
          '<strong>By road:</strong> 115–125 km along NH 66, taking approximately 3 to 3.5 hours depending on traffic.',
          '<strong>From Calicut International Airport at Karipur:</strong> For clients returning home on annual leave from the Gulf, online meetings before landing make planning seamless.',
        ],
      },
      {
        type: 'prose',
        h2: 'Language Classes for Calicut Clients',
        body: [
          'IELTS, PTE, OET and German preparation can be arranged online, so you do not need to commute to physical classes. Your trainer and your adviser plan one timeline, so your test date fits your route.',
          'Kozhikode immigration consultants who coordinate your language coaching and visa paperwork save you valuable months.',
        ],
      },
      {
        type: 'prose',
        h2: 'Online or in Thrissur?',
        body: [
          'Most Malabar families start online and visit Thrissur once papers are ready. Complex cases, such as past visa refusals or complex family applications, are reviewed by our most experienced advisers in Thrissur either way.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Calicut: What to Check',
        intro: 'The region has many agents, and immigration consultants in Calicut range from licensed firms to unverified intermediaries. Before you pay anyone, check these points:',
        items: [
          { title: 'MEA recruiting agent licence', text: 'Confirm the licence number is active and registered on the Ministry of External Affairs eMigrate portal.' },
          { title: 'Written fee agreements & receipts', text: 'Fees clearly stated in an agreement you sign, with an official receipt for every single payment.' },
          { title: 'No guaranteed visas or jobs', text: 'No honest consultant can guarantee a visa; visa approvals rest solely with destination governments.' },
          { title: 'Real registered offices and named advisers', text: 'A verifiable physical office you can visit, with qualified, named migration advisers.' },
        ],
      },
      {
        type: 'reviews',
        h2: 'What Clients Say About Mountbell',
      },
      {
        type: 'prose',
        h2: 'Areas Around Calicut We Serve',
        body: [
          'Our immigration consultants in Calicut work with clients from across the district, including Vadakara and Koyilandy in the north, Feroke and Ramanattukara in the south, and Thamarassery, Mukkam and Balussery inland.',
          'Malabar families in Malappuram (Manjeri, Perinthalmanna), Wayanad (Kalpetta, Sulthan Bathery) and Kannur also regularly consult our team online.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Does Mountbell have an office in Calicut?', a: 'Not yet. We serve Calicut clients online and at our head office at Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur.' },
          { q: 'Are your immigration consultants in Calicut licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs (Licence No. B-1921/KER/PART/100/5/10348/2023), which you can verify directly on eMigrate.' },
          { q: 'Can I do the whole immigration process online?', a: 'Most of it. Our Kozhikode immigration consultants conduct consultations, document reviews, and mock interviews online. We may ask for one visit to inspect original certificates.' },
          { q: 'Where do I get a police certificate in Kozhikode?', a: 'Through Passport Seva, at the Passport Seva Kendra Kozhikode at West Hill Chungam.' },
          { q: 'Can my Gulf work experience count towards European or Australian visas?', a: 'Often, if your experience letters show your specific duties, dates, and hours. We verify whether your tenure matches the skilled occupation lists before you spend on tests.' },
          { q: 'Can visa consultants Calicut families find online be trusted?', a: 'Only if they hold an active recruiting agent licence you can verify on eMigrate. Always ask for the registration number before transferring any fees.' },
          { q: 'Do Kozhikode immigration consultants charge for the first meeting?', a: 'Mountbell does not charge for your initial assessment. Your first consultation with our team is completely free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Speak to Our Advisers',
        rows: [
          ['Central Phone', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Thrissur Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Assessment Booking', '<a href="/free-immigration-assessment/">Book a free immigration consultation</a>'],
          ['Thrissur Office (HQ)', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
          ['Kochi Branch', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom, Kochi 682025'],
        ],
      },
    ],
    related: ['/immigration-consultants-thrissur/', '/immigration-consultants-kannur/', '/contact-us/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-kannur/', parent: '/contact-us/', crumb: 'Kannur',
    title: 'Immigration Consultants in Kannur | Mountbell',
    description: 'Immigration consultants in Kannur: MEA-licensed Mountbell advice on Europe work visas, nursing, PR and moves from the Gulf, mostly online. Free assessment.',
    label: 'Kannur & North Malabar',
    h1: 'Immigration Consultants in Kannur: Licensed Help for Work, Nursing and PR, Mostly Online',
    lede: 'Immigration consultants in Kannur should do three things: show a licence you can verify, tell you which routes genuinely suit your profile, and stay reachable after you pay. Mountbell has no Kannur office at present. Clients from the district reach us by video, calls and WhatsApp messages, and come to our head office in Thrissur only when a document needs to be seen in person. The opening assessment costs nothing, and you can talk in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Kannur and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Begin in 3 steps',
        items: [
          { title: '1. Send a WhatsApp or call +91 9207014777', text: 'Reach our team to schedule an introductory consultation.' },
          { title: '2. Pick a video slot that suits your day', text: 'Choose an online appointment, including evening slots for shift workers.' },
          { title: '3. Hear which routes fit, free of charge', text: 'Get an objective evaluation of your genuine visa, nursing, or work options.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Can Kannur Clients Use Mountbell?',
        body: [
          'Yes. Most work runs online, and our head office is at Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur. Our immigration consultants in Kannur handle jobs with European employers, overseas recruitment, nursing registration abroad, skilled migration, PR and study plans, all under a recruiting licence issued by the Ministry of External Affairs (B-1921/KER/PART/100/5/10348/2023). Call +91 9207014777 to arrange a slot.',
        ],
      },
      {
        type: 'facts',
        h2: 'Kannur Support Options',
        rows: [
          ['Online sessions', 'Video meetings on screen, with evening slots for people working shifts or living in the Gulf'],
          ['Calls and WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email for documents', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['In-person office', 'Thrissur head office, roughly 3.5 to 4 hours south by express train'],
          ['Languages spoken', 'Malayalam and English'],
          ['Licence status', 'MEA licensed recruiting agent B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Kannur Homes Look for Verified Advice',
        body: [
          'Kannur district has sent workers to the Gulf for generations, and money earned in Dubai, Sharjah and Muscat still supports many households. Younger people in Kannur district want something different: a job in Europe with a path to residence, a UK nursing post, or PR in Australia or Canada.',
          'Kannur families also hear regular stories of agents who collect fees and disappear. A licence number you can look up yourself is the simplest protection, which is why so many people now search for immigration consultants in Kannur by licence rather than by reputation alone.',
        ],
      },
      {
        type: 'checks',
        h2: 'How We Earn Your Trust',
        intro: 'We operate with complete regulatory compliance and transparent processes:',
        items: [
          { title: 'Licence printed on every page', text: 'Our MEA recruiting licence number (B-1921/KER/PART/100/5/10348/2023) is published openly and ready to check on eMigrate.' },
          { title: 'Employer verified before payment', text: 'We contact the employer and verify the work permit before we let you pay for any job route.' },
          { title: 'Signed contracts & receipts', text: 'Every fee is shown in an agreement you sign, and you receive an official receipt each time you make a payment.' },
          { title: 'One dedicated adviser', text: 'A single named adviser handles your file from the first call until you fly, ensuring accountability throughout.' },
        ],
        after: ['The immigration consultants in Kannur you speak to also check our published guides, so the website and the advice say the same thing.'],
      },
      {
        type: 'links',
        h2: 'Services Kannur Clients Can Use',
        intro: 'All core Mountbell programmes are accessible remotely:',
        items: [
          { title: 'Jobs with sponsoring employers', text: 'Direct hiring in Europe and the Gulf for trades, mechanics, and drivers.', href: '/overseas-jobs/' },
          { title: 'Nurse registration & placements', text: 'Nursing jobs in the UK, Germany, Malta, the Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Permanent residence (Australia & Canada)', text: 'PR visas scored on age, English proficiency, qualifications, and work experience.', href: '/services/pr-visa/' },
          { title: 'Skills assessment & exam coaching', text: 'Trade and academic credential assessments, plus online OET, IELTS, PTE, and German classes.', href: '/services/skills-assessment/' },
          { title: 'Study abroad services', text: 'Higher education programmes with strong post-study work rights and migration prospects.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Where Clients From Kannur Are Heading',
        body: [
          'Clients from Kannur commonly target pathways tailored to their vocational and healthcare backgrounds:',
        ],
        list: [
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Heavy-vehicle drivers, welders, electricians and food packers.',
          '<strong>Germany:</strong> Nurses and skilled tradespeople willing to learn German to B1 or B2 level.',
          '<strong>The UK and Malta:</strong> Registered nurses, healthcare support staff and senior carers.',
          '<strong>Australia and Canada:</strong> Engineers, accountants, and allied health staff aiming for PR.',
          '<strong>The Maldives:</strong> Registered nurses who want to stay a short flight away from Kerala.',
        ],
        after: ['We put the required tests, fees and likely waiting times for each route in writing before you commit.'],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Kannur',
        body: [
          'Kannur nurses often train at the Government Medical College at Pariyaram, followed by experience in local multi-speciality hospitals or a few years in the Gulf. That Gulf ward experience usually counts abroad when your letters list the department, the dates and your duties.',
          'A GNM diploma opens some countries (such as Germany and Malta) and a BSc opens more (such as Australia and the UK); we tell you which before you book OET or IELTS. Kannur nurses should renew their Kerala Nurses and Midwives Council (KNMC) registration early, since every regulator asks to see it.',
        ],
      },
      {
        type: 'prose',
        h2: 'From Gulf Jobs to Settled Careers Abroad',
        body: [
          'A driver with a GCC licence, a welder with ten years on Gulf sites, or an accountant from a Muscat firm may all have a stronger case than they think. The visa consultants Kannur workers talk to at Mountbell first look at your experience letters, then at the employer, and only then at fees. If a letter is weak, we explain exactly what to ask your former company for.',
        ],
      },
      {
        type: 'steps',
        h2: 'What We Cover in the First Call',
        intro: 'A first call usually lasts around an hour. Our immigration consultants in Kannur use it to give you a straight picture rather than a sales pitch:',
        items: [
          { title: '1. Background and goals', text: 'Your job history, education, test scores, and family migration plans.' },
          { title: '2. Review of records', text: 'A thorough look at any certificates or experience letters you send ahead.' },
          { title: '3. Pathway options', text: 'Routes that suit you, and the honest reasons others do not.' },
          { title: '4. Written schedules', text: 'Expected costs and waiting times, sent in writing on request.' },
          { title: '5. Dedicated family Q&A', text: 'Open time for questions from you or your parents in Malayalam.' },
        ],
        after: ['If a police certificate will be needed, we explain at which stage to book it at the Passport Seva Kendra Kannur.'],
      },
      {
        type: 'prose',
        h2: 'Paperwork Offices Near Kannur',
        body: [
          'Different stages of your migration file involve official government bodies:',
        ],
        list: [
          '<strong>The Passport Seva Kendra (PSK) Kannur:</strong> Located at Fort Road / South Bazar, handling fresh passports, renewals, and police clearance certificates.',
          '<strong>The Regional Passport Office (RPO) Kozhikode:</strong> Oversees passport administrative services for the entire district.',
          '<strong>The NORKA-ROOTS Centre:</strong> Accessible in Kozhikode, for authenticating and attesting your educational certificates.',
          '<strong>eMigrate Portal:</strong> The online portal for workers whose passports carry the ECR stamp requiring POE clearance.',
        ],
        after: ['Police clearance certificates can take several weeks, so we advise booking at the right stage without delay.'],
      },
      {
        type: 'prose',
        h2: 'Meeting an Adviser From Kannur',
        body: [
          'We make consultations accessible without unnecessary travel:',
        ],
        list: [
          '<strong>Video:</strong> No travel at all, and the usual preferred choice for Kannur clients.',
          '<strong>Train:</strong> Kannur railway station to Thrissur takes about 3.5 to 4 hours by express train (Vande Bharat is faster), followed by a 10-minute auto ride to Ashwini Junction.',
          '<strong>From Thalassery or Payyanur:</strong> Convenient railway connections south toward Thrissur.',
          '<strong>Flying home through Kannur International Airport (CNN) at Mattannur?</strong> We can schedule meetings around your annual leave.',
        ],
        after: ['Most files need only one office visit, usually to check original documents.'],
      },
      {
        type: 'prose',
        h2: 'Test Preparation Online',
        body: [
          'IELTS, PTE, OET and German classes run online, so nobody has to leave a job to prepare. Your trainer knows your visa deadline, and your adviser knows your target score.',
        ],
      },
      {
        type: 'prose',
        h2: 'Remote First, Office Visits When Needed',
        body: [
          'Clients across Kannur district usually finish most steps from home and travel to Thrissur once. Refusals, family applications and other complex files are reviewed at our head office in Thrissur whichever way you start.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Kannur: What to Check',
        intro: 'Immigration consultants in Kannur include licensed firms, part-time agents and people with only a phone number. Run through this list before paying anyone:',
        items: [
          { title: 'Check eMigrate licence', text: 'Is their recruiting licence listed on eMigrate under the exact same company name?' },
          { title: 'Insist on signed fee schedules', text: 'Will they put every single fee in writing that you sign, and provide official receipts?' },
          { title: 'Avoid unrealistic guarantees', text: 'Do they avoid promising a sure visa or a job "already approved" without verification?' },
          { title: 'Visit real registered premises', text: 'Can you visit an established office and meet the adviser by name in person?' },
        ],
        after: ['Kannur families should ask us the same questions. Visa consultants Kannur clients can rely on will answer them without hesitation.'],
      },
      {
        type: 'reviews',
        h2: 'What Clients Say About Mountbell',
      },
      {
        type: 'prose',
        h2: 'Kannur Towns We Reach',
        body: [
          'Our immigration consultants in Kannur advise clients from Thalassery, Payyanur and Taliparamba, from Mattannur and Iritty in the hills, and from Kuthuparamba and Sreekandapuram.',
          'Clients in Kasaragod (Kanhangad, Kasaragod town), and anywhere else across North Malabar, use the same secure online service.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Is there a Mountbell office in Kannur?', a: 'No, not at present. Clients deal with us via video calls and visit our Thrissur head office when required.' },
          { q: 'Can I check that your immigration consultants in Kannur are licensed?', a: 'Yes. Search our recruiting licence number (B-1921/KER/PART/100/5/10348/2023) directly on the Ministry of External Affairs eMigrate portal.' },
          { q: 'Where is the passport centre for Kannur residents?', a: 'The Passport Seva Kendra Kannur at Fort Road / South Bazar handles fresh passports and police clearance certificates.' },
          { q: 'Will my Gulf experience help for European or Australian visas?', a: 'Often, as long as your letters show specific duties, dates, and hours. We check before you spend on tests.' },
          { q: 'Do you place Kannur nurses with a GNM diploma?', a: 'Yes. Countries like Germany and Malta accept GNM diploma holders, and we specify your exact eligibility before you register for tests.' },
          { q: 'How do I know visa consultants Kannur agents recommend are genuine?', a: 'Ask for their MEA licence number and verify it yourself on the government\'s eMigrate portal.' },
          { q: 'Does the first assessment cost anything?', a: 'No. Your initial profile assessment with Mountbell is completely free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Speak With Mountbell',
        rows: [
          ['Call & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Thrissur Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Free Assessment', '<a href="/free-immigration-assessment/">Book a free consultation</a>'],
          ['Thrissur Office (HQ)', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
        ],
      },
    ],
    related: ['/immigration-consultants-calicut/', '/immigration-consultants-thrissur/', '/contact-us/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-kollam/', parent: '/contact-us/', crumb: 'Kollam',
    title: 'Immigration Consultants in Kollam | Mountbell',
    description: 'Immigration consultants in Kollam: MEA-licensed Mountbell guidance on nursing abroad, Europe jobs, PR and Gulf-to-Europe moves, online or in Kochi.',
    label: 'Kollam & South Kerala',
    h1: 'Immigration Consultants in Kollam: Licensed Guidance From Your First Call to Your Flight',
    lede: 'Immigration consultants in Kollam earn trust in a simple way: a licence anyone can verify, honest answers about which countries suit you, and an adviser who still picks up the phone after the fees are paid. Mountbell is not yet based in Kollam. People from the district work with our team over video and WhatsApp, and visit our Kochi branch when originals must be checked. There is no charge for the opening assessment, held in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Kollam and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Three ways to begin',
        items: [
          { title: '1. WhatsApp or ring +91 9207014777', text: 'Reach our advisers to ask initial questions and schedule a session.' },
          { title: '2. Choose an online time, or a slot at our Kochi branch', text: 'Meet over video from home or visit our Kochi branch in Palarivattom.' },
          { title: '3. Receive a no-cost review of your options', text: 'Get an honest assessment of countries, requirements, and true timelines.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: How Does Mountbell Serve Kollam?',
        body: [
          'Mainly online, with in-person meetings at Mathewsons Centre Point, Edappally Road, Kochi. Our immigration consultants in Kollam guide clients on European employment, recruitment abroad, nursing registration, skilled migration, PR and overseas study, under a recruiting licence granted by the Ministry of External Affairs (B-1921/KER/PART/100/5/10348/2023). Ring +91 9207014777 to fix a time.',
        ],
      },
      {
        type: 'facts',
        h2: 'Kollam Client Essentials',
        rows: [
          ['Online appointments', 'Including early mornings and evenings for people on hospital or factory shifts'],
          ['Calls and WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Send documents to', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Branch for in-person visits', 'Kochi branch (Palarivattom), around 2.5 to 3 hours north by train'],
          ['Languages spoken', 'Malayalam and English, as you prefer'],
          ['Licence verification', 'MEA Recruiting Agent Licence B-1921/KER/PART/100/5/10348/2023 on eMigrate'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Kollam Is Planning Moves Abroad',
        body: [
          'Kollam district grew on cashew processing, fishing, coir and trade, and generations of its workers have built careers in Saudi Arabia, the UAE and Kuwait. Those industries still matter, but wages in Kollam district have not kept pace with living costs, and work that rises and falls with the season makes income uncertain. Young nurses, engineers and tradespeople now weigh Germany, the UK, Malta and Poland against another Gulf contract.',
          'Kollam families have seen neighbours lose savings to agents who vanished after collecting fees. That experience is why people now look for immigration consultants in Kollam who can show a licence before they discuss money. A genuine adviser will also tell you when a route is not right for you.',
        ],
      },
      {
        type: 'checks',
        h2: 'Our Promise to Kollam Clients',
        intro: 'We maintain clear, ethical standards for every client from the district:',
        items: [
          { title: 'A government recruiting licence', text: 'Displayed openly on our site and verifiable on the Ministry of External Affairs eMigrate portal.' },
          { title: 'Employer check before payment', text: 'No payment for any job route until we have verified the sponsoring employer and employment contract.' },
          { title: 'Written agreements and receipts', text: 'Every charge written into a formal agreement, with an official receipt for every payment made.' },
          { title: 'One consistent adviser', text: 'One adviser who knows your file from the first exploratory call right through to departure.' },
        ],
        after: ['The immigration consultants in Kollam who advise you also review the guides on our website, so nothing you read contradicts what you are told.'],
      },
      {
        type: 'links',
        h2: 'What Kollam Clients Can Apply For',
        intro: 'Comprehensive migration and job programmes available online or via Kochi:',
        items: [
          { title: 'Jobs with approved employers', text: 'Verified placements in Europe and the Gulf for drivers, mechanics, and factory staff.', href: '/overseas-jobs/' },
          { title: 'Nursing posts abroad', text: 'Hospital placement in the UK, Germany, Malta, the Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Permanent residence (PR)', text: 'Australia and Canada points-tested skilled migration for qualified professionals.', href: '/services/pr-visa/' },
          { title: 'Skills recognition & paperwork', text: 'Credential assessments, visa files, and exam coaching for IELTS, OET, and German.', href: '/services/skills-assessment/' },
          { title: 'Study abroad with work rights', text: 'International courses structured for post-study work permits and long-term settlement.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Destinations Kollam Clients Choose',
        body: [
          'The most frequently chosen pathways by candidates from Kollam district:',
        ],
        list: [
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Drivers, welders, fitters and food-plant workers taking up European work permits.',
          '<strong>Germany:</strong> Nurses and skilled trades prepared to study German to B1 or B2 level.',
          '<strong>United Kingdom and Malta:</strong> Nurses, care workers, and senior healthcare staff.',
          '<strong>Australia and Canada:</strong> Graduates in engineering, IT or healthcare who qualify for permanent residence.',
          '<strong>The Maldives:</strong> Registered nurses and clinical staff wanting a tax-free post a short flight from Kerala.',
        ],
        after: ['Each option comes with a written breakdown of the required tests, third-party charges, and expected waiting times.'],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Kollam',
        body: [
          'Kollam nurses train at the Government Medical College in Parippally and at prominent private hospitals across the town, such as Bishop Benziger Hospital, Meditrina, and Travancore Medical College. Many gain experience in the Gulf before moving on. Overseas regulators accept that experience when your letters give the ward, dates and clinical duties.',
          'We confirm whether your GNM or BSc degree fits a destination country before you register for OET or IELTS. Kollam nurses should also keep their Kerala Nurses and Midwives Council (KNMC) registration valid throughout the process.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cashew, Coast and Gulf: Skills That Travel',
        body: [
          'Supervisors from cashew processing facilities, marine mechanics from the Neendakara harbour, and drivers returning from Kuwait often have experience that European employers actively seek. The visa consultants Kollam workers speak to at Mountbell review your letters and licences, verify the employer, and only then talk about costs.',
          'When a document is missing or ambiguous, we explain exactly what to request from former employers. Workers from Kollam district who returned during recent economic shifts in the Gulf are often surprised how much their Gulf years count toward European trade programmes.',
        ],
      },
      {
        type: 'steps',
        h2: 'How Your First Session Runs',
        intro: 'Expect roughly an hour. Our immigration consultants in Kollam aim to leave you with a clear plan, not sales pressure. Spouses and parents are warmly welcomed:',
        items: [
          { title: '1. Profile evaluation', text: 'We review your career history, qualifications, English or foreign language level, and family plans.' },
          { title: '2. Review of credentials', text: 'We check through any certificates, trade papers, or Gulf experience letters you have available.' },
          { title: '3. Transparent matching', text: 'We name the routes that realistically suit you and explain why other pathways do not.' },
          { title: '4. Written timelines and fees', text: 'We outline total costs, third-party charges, and processing durations in writing.' },
          { title: '5. Family questions answered', text: 'You and your family can ask whatever you need in Malayalam or English.' },
        ],
        after: ['Where a police certificate is required, we tell you when to apply at the Passport Seva Kendra Kollam.'],
      },
      {
        type: 'prose',
        h2: 'Offices You Will Deal With Near Kollam',
        body: [
          'Each stage involves a specific government department, and we explain which one comes next:',
        ],
        list: [
          '<strong>The Passport Seva Kendra (PSK) Kollam:</strong> Located at Anandavalleeswaram / Kadappakada, handling fresh passports and police clearance certificates.',
          '<strong>The Regional Passport Office (RPO) Thiruvananthapuram:</strong> Oversees passport jurisdiction for Kollam district.',
          '<strong>NORKA-ROOTS Head Office Thiruvananthapuram:</strong> Handles authentication and HRD attestation of educational certificates.',
          '<strong>eMigrate Portal:</strong> Online clearance for workers whose passports carry the ECR (Emigration Check Required) endorsement.',
        ],
        after: ['Start the police certificate early, because administrative processing can take several weeks.'],
      },
      {
        type: 'prose',
        h2: 'Getting to Kochi From Kollam',
        body: [
          'Most clients complete nearly all stages from home and make only one visit to our Kochi office when original certificates need to be sighted.',
        ],
        list: [
          '<strong>Online:</strong> The usual choice, with no travel required for assessments or consultations.',
          '<strong>Train:</strong> Kollam Junction to Ernakulam takes around 2.5 to 3 hours (under 2 hours on Vande Bharat), followed by a short Metro ride to Edappally Road (Metro Pillar 485).',
          '<strong>Road:</strong> North along the coastal highway (NH 66), approximately 135 km (about 3.5 to 4 hours).',
          '<strong>From Karunagappally or Kottarakkara:</strong> Karunagappally is about 2.5 hours by train; Kottarakkara is about 3.5 hours via the MC Road route.',
        ],
      },
      {
        type: 'prose',
        h2: 'Coaching You Can Join From Home',
        body: [
          'Classes for IELTS, PTE, OET and German are available online, so you can keep earning while you prepare. Your trainer and adviser agree one test date that fits your visa plan.',
        ],
      },
      {
        type: 'prose',
        h2: 'Starting Remotely From Kollam',
        body: [
          'Clients anywhere in Kollam district can finish most steps from home before one trip to Kochi. Files involving past refusals or family members are also reviewed by our head office in Thrissur. Our immigration consultants in Kollam keep you updated by WhatsApp at every stage.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Kollam: What to Check',
        intro: 'Immigration consultants in Kollam vary from licensed firms to individuals with only a mobile number. Before paying anyone, ask these questions:',
        items: [
          { title: 'MEA licence verification', text: 'Does their recruiting licence appear on the government\'s eMigrate portal under their own registered name?' },
          { title: 'Clear signed fee contracts', text: 'Will they write every fee into a formal contract and issue tax receipts for every payment?' },
          { title: 'Honest answers on visas', text: 'Do they refuse to promise a certain visa or a job "already fixed" without genuine employer verification?' },
          { title: 'Physical office presence', text: 'Is there an established office where you can meet a named, qualified adviser in person?' },
        ],
        after: ['Put the same questions to us. Visa consultants Kollam residents can trust will answer them openly.'],
      },
      {
        type: 'reviews',
        h2: 'What Clients Say About Mountbell',
      },
      {
        type: 'prose',
        h2: 'Kollam Taluks We Support',
        body: [
          'Our immigration consultants in Kollam work with clients in Karunagappally and Chavara, Kottarakkara and Kundara, Punalur and Anchal near the hills, and Paravur and Chathannoor in the south.',
          'Families in neighbouring Pathanamthitta (Adoor, Pandalam) and southern Alappuzha (Kayamkulam) can use the same online service, and Kollam families living abroad can join calls from wherever they are.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Does Mountbell have a Kollam office?', a: 'Not at present. You can deal with our team online and visit our Kochi branch at Mathewsons Centre Point, Palarivattom when needed.' },
          { q: 'Can I verify that your immigration consultants in Kollam are licensed?', a: 'Yes. Our licence number (B-1921/KER/PART/100/5/10348/2023) can be checked directly on the government\'s eMigrate portal.' },
          { q: 'Where do Kollam residents get a police clearance certificate?', a: 'At the Passport Seva Kendra Kollam at Anandavalleeswaram / Kadappakada, booked through the Passport Seva website.' },
          { q: 'Does Gulf work count for Europe?', a: 'Frequently, when your experience certificates clearly state your clinical or technical duties and exact employment dates.' },
          { q: 'Do you help Kollam nurses with a GNM diploma?', a: 'Yes. Some countries accept GNM (such as Germany and Malta), and we name them before you pay for any exam.' },
          { q: 'How can I tell if visa consultants Kollam friends suggest are genuine?', a: 'Ask for their MEA licence number and look it up on eMigrate yourself. Never pay without checking.' },
          { q: 'Is there a fee for the first assessment?', a: 'No. Your initial consultation with Mountbell is completely free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Ask an Adviser Today',
        rows: [
          ['Call & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Free Assessment', '<a href="/free-immigration-assessment/">Book a free assessment</a>'],
          ['Kochi Office (closest to Kollam)', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025'],
          ['Thrissur Head Office', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
        ],
      },
    ],
    related: ['/immigration-consultants-kochi/', '/immigration-consultants-kottayam/', '/contact-us/', '/free-immigration-assessment/'],
  },
  {
    path: '/immigration-consultants-kottayam/', parent: '/contact-us/', crumb: 'Kottayam',
    title: 'Immigration Consultants in Kottayam | Mountbell, Online',
    description: 'Immigration consultants in Kottayam: MEA-licensed Mountbell advice on nursing, PR, work visas and overseas jobs, online or at our Kochi office. Free assessment.',
    label: 'Kottayam & Central Travancore',
    h1: 'Immigration Consultants in Kottayam: Licensed Advice for Nurses, Families and Professionals',
    lede: 'Immigration consultants in Kottayam should hold a licence you can check, explain routes in plain words and be easy to reach. Mountbell does not have an office in Kottayam yet. We work with clients across the district through online meetings, calls and WhatsApp, and in person at our Kochi office, the closest to you. Your first assessment is free, in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Kottayam and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Get started in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Book a consultation slot that suits your schedule.' },
          { title: '2. Meet an adviser online, or visit our Kochi office', text: 'Connect over video from home or visit our Palarivattom branch in Kochi.' },
          { title: '3. Get a free assessment of the routes that fit you', text: 'Receive an honest, transparent breakdown of your migration or nursing prospects.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Is There a Mountbell Office in Kottayam?',
        body: [
          'Not yet. Our immigration consultants in Kottayam work with clients online and by phone, and in person at Mathewsons Centre Point, Palarivattom, Kochi. Our head office in Thrissur handles complex cases. Call +91 9207014777 to book. We advise on nursing careers, skilled migration, PR, work visas, overseas recruitment and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023).',
        ],
      },
      {
        type: 'facts',
        h2: 'Our Service in Brief',
        rows: [
          ['Online meetings', 'By video session, including evenings for working professionals and shift nurses'],
          ['Calls and WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Closest office', 'Kochi office (Palarivattom), about 1 to 1.5 hours from Kottayam town by road or rail'],
          ['Languages spoken', 'Malayalam and English'],
          ['Licence status', 'MEA licensed recruiting agent B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Kottayam Families Want Licensed Advice',
        body: [
          'Kottayam district is known for high literacy, strong schools and one of the largest pools of trained nurses in India. Many homes here already have a relative working abroad. Younger graduates now compare the UK, Germany, Malta, Australia and Canada before they decide.',
          'That history also draws agents who promise more than they can deliver, and a wrong choice can cost savings and years. That is why people search for immigration consultants in Kottayam with a licence they can verify, rather than a name passed on by word of mouth.',
        ],
      },
      {
        type: 'checks',
        h2: 'What You Get From Us',
        intro: 'We combine government-certified legitimacy with dedicated sector specialists:',
        items: [
          { title: 'Ministry of External Affairs licence', text: 'Recruiting Agent licence B-1921/KER/PART/100/5/10348/2023, verifiable on eMigrate.' },
          { title: 'Standardised fair pricing', text: 'The same advisers, fees and document checks as our Kochi and Thrissur offices with zero hidden fees.' },
          { title: 'Specialist nursing team', text: 'A dedicated team that focuses on nurse registration, bridging courses, and hospital placements.' },
          { title: 'Single accountable adviser', text: 'One adviser stays with your case from the first phone call until your final visa issuance.' },
        ],
        after: ['These are the immigration consultants in Kottayam who also review our guides, so the advice you hear matches what you read online.'],
      },
      {
        type: 'links',
        h2: 'Every Service, Online or in Person',
        intro: 'Every Mountbell programme is available to Kottayam candidates:',
        items: [
          { title: 'Nursing careers abroad', text: 'Registration and hospital placement in the UK, Germany, Malta, the Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Skilled migration and PR', text: 'Points-tested permanent residence in Australia and Canada.', href: '/services/pr-visa/' },
          { title: 'Work visas through employers', text: 'Employer-sponsored work permits with verified contracts in Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Overseas recruitment', text: 'Direct recruitment for skilled tradespeople, drivers, and technical specialists.', href: '/overseas-jobs/' },
          { title: 'Skills assessment & language classes', text: 'Academic/trade credential assessments and online IELTS, PTE, OET, and German training.', href: '/services/skills-assessment/' },
          { title: 'Focused study abroad service', text: 'University programmes structured for post-graduation work rights and residency.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Where Kottayam Applicants Go',
        body: [
          'The routes we handle most often for clients from Kottayam district:',
        ],
        list: [
          '<strong>United Kingdom and Malta:</strong> Nurses, midwives, and healthcare care professionals.',
          '<strong>Germany:</strong> Nurses and skilled workers learning German to B1 or B2 level.',
          '<strong>Australia and Canada:</strong> Nurses, engineers, and IT staff seeking permanent residence.',
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Drivers, welders, and industrial electricians.',
          '<strong>The Maldives:</strong> Nurses and allied health staff wanting a tax-free position close to Kerala.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Kottayam',
        body: [
          'Kottayam nurses often train at the Government Medical College at Gandhinagar. Others work at Caritas Hospital, Matha Hospital, or at Mar Sleeva Medicity in Pala. Our nursing advisers explain which countries accept a GNM diploma, which need a BSc, how long registration takes and when to sit OET or IELTS.',
          'Keep your Kerala Nurses and Midwives Council (KNMC) registration current before you start, because every country asks for it. Private hospital experience usually counts, provided your letters show your wards, bed capacities, and exact dates.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Professionals and Returning Gulf Workers',
        body: [
          'Engineers, teachers and tradespeople from the district often weigh a route scored on points against a direct job offer. Gulf experience can count too, provided your letters spell out your duties and dates. The visa consultants Kottayam clients speak to at Mountbell check whether your job fits a skilled list before you spend money on tests.',
          'If you are weighing overseas jobs Kottayam agents advertise, we check the employer and the contract before you sign anything.',
        ],
      },
      {
        type: 'steps',
        h2: 'Your Opening Session With an Adviser',
        intro: 'Most first meetings take about an hour, online or in Kochi, and the visa consultants Kottayam clients meet are the same people who handle the file. Our immigration consultants in Kottayam keep it clear and unhurried:',
        items: [
          { title: '1. Profile discussion', text: 'A few structured questions about your work history, education, language proficiencies, and family.' },
          { title: '2. Review of papers', text: 'A careful check of any degree certificates, nursing registrations, or experience letters you share.' },
          { title: '3. Transparent pathways', text: 'The routes that suit you, and the ones that do not, explained honestly with zero false optimism.' },
          { title: '4. Written timelines & costs', text: 'Likely timelines, government charges, and service fees in writing if you want them.' },
          { title: '5. Time for family questions', text: 'Open time for every question from you, your spouse, or your parents.' },
        ],
        after: ['If your route will need a police certificate, we explain how to book at the Passport Seva Kendra Kottayam.'],
      },
      {
        type: 'prose',
        h2: 'Government Offices for Kottayam Applicants',
        body: [
          'Some steps happen at government offices, and our advisers tell you exactly when each one is needed:',
        ],
        list: [
          '<strong>The Passport Seva Kendra Kottayam:</strong> Located at the Head Post Office building on MC Road, Nagampadam, handling passports and police certificates.',
          '<strong>NORKA-ROOTS Ernakulam Centre:</strong> The closest centre to the district, handling attestation of educational and vocational documents.',
          '<strong>The eMigrate Portal:</strong> Handles emigration clearance for workers whose passports are marked ECR.',
          '<strong>The Protector of Emigrants / Emigration Office in Kochi:</strong> Handles recruitment complaints and clearance queries.',
        ],
        after: ['Book early, because most work and immigrant visas require a valid police certificate.'],
      },
      {
        type: 'prose',
        h2: 'Getting to Our Kochi Office',
        body: [
          'Our immigration consultants in Kottayam can handle most of your case online, with one or two visits for verifying original documents.',
        ],
        list: [
          '<strong>Online:</strong> Book a video session, with no travel needed.',
          '<strong>By train:</strong> Kottayam station to Ernakulam takes about 1 to 1.25 hours, followed by a short Metro ride to our office at Metro Pillar 485 in Palarivattom.',
          '<strong>By road:</strong> Along MC Road or the Vaikom route, about 1.5 to 2 hours (60–65 km) to Edappally Road.',
          '<strong>By Kochi Metro:</strong> Get off at Palarivattom station and walk about 4 minutes north along Edappally Road.',
        ],
      },
      {
        type: 'prose',
        h2: 'Test Coaching From Home',
        body: [
          'IELTS, PTE, OET and German preparation can be arranged online, so you can keep working while you study. Your trainer and adviser plan one timeline, so your test date fits your route.',
        ],
      },
      {
        type: 'prose',
        h2: 'Online or in Kochi?',
        body: [
          'Most clients from Kottayam district start online and visit Kochi once their papers are ready. Complex cases, such as past refusals or family moves, are reviewed by our head office team in Thrissur either way.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Kottayam: What to Check',
        intro: 'Immigration consultants in Kottayam range from licensed firms to people working from a phone. Before you pay anyone, check these points:',
        items: [
          { title: 'MEA licence listed on eMigrate', text: 'A recruiting agent licence listed on the government\'s eMigrate portal under the firm\'s exact name.' },
          { title: 'Fees written in a signed agreement', text: 'Fees written into an agreement you sign, with an official receipt for every payment.' },
          { title: 'No false visa or job guarantees', text: 'No promise of a guaranteed visa, job or nursing registration; honest advisers explain true approval standards.' },
          { title: 'Established physical office', text: 'A real office you can visit, with named advisers you can meet in person.' },
        ],
        after: ['Apply the same checks to every firm, including ours. Good visa consultants Kottayam families trust will welcome them.'],
      },
      {
        type: 'reviews',
        h2: 'What Local Clients Say',
      },
      {
        type: 'prose',
        h2: 'Towns Across Kottayam We Serve',
        body: [
          'Our immigration consultants in Kottayam work with clients from across the district, including Changanassery and Pala, Ettumanoor and Kuravilangad, Vaikom near the backwaters, and Kanjirappally and Erattupetta in the hills.',
          'Families in neighbouring Central Travancore towns such as Thiruvalla (Pathanamthitta) and Thodupuzha (Idukki) also regularly reach us online.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Does Mountbell have an office in Kottayam?', a: 'Not yet. We serve you online and at our Kochi office at Mathewsons Centre Point, Palarivattom.' },
          { q: 'Are your immigration consultants in Kottayam licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs (Licence No. B-1921/KER/PART/100/5/10348/2023), which you can verify on eMigrate.' },
          { q: 'Where do I get a police certificate locally in Kottayam?', a: 'Through Passport Seva, at the Passport Seva Kendra Kottayam in the Head Post Office building at Nagampadam, once the centre confirms your slot.' },
          { q: 'Do you help Kottayam nurses with a GNM diploma?', a: 'Yes. Several countries accept GNM (such as Germany and Malta), and we explain which ones before you pay for tests.' },
          { q: 'Can visa consultants Kottayam families find online be trusted?', a: 'Only if they hold a licence you can check on eMigrate. Always ask for the number before you pay.' },
          { q: 'Do you list overseas jobs Kottayam workers can apply for?', a: 'Yes, with verified employers. See our overseas jobs page for current openings.' },
          { q: 'Is the first meeting free?', a: 'Yes. Your first assessment with Mountbell is free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Talk to Our Advisers',
        rows: [
          ['Call & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Free Assessment', '<a href="/free-immigration-assessment/">Book a free assessment</a>'],
          ['Kochi Office (closest to you)', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025'],
          ['Thrissur Head Office', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
        ],
      },
    ],
    related: ['/immigration-consultants-kochi/', '/immigration-consultants-kollam/', '/contact-us/', '/free-immigration-assessment/'],
  },
{
    path: '/immigration-consultants-malappuram/', parent: '/contact-us/', crumb: 'Malappuram',
    title: 'Immigration Consultants in Malappuram | Mountbell',
    description: 'Immigration consultants in Malappuram: MEA-licensed Mountbell advice on Europe work visas, nursing, PR and Gulf-to-Europe moves, online or in Thrissur.',
    label: 'Malappuram & Gulf Transitions',
    h1: 'Immigration Consultants in Malappuram: Licensed Advice Beyond the Gulf',
    lede: 'Immigration consultants in Malappuram should hold a licence you can check, explain each route in plain words and stay with you until you travel. Mountbell does not have an office in Malappuram yet. We serve clients across the district through online meetings, calls and WhatsApp, and in person at our head office in Thrissur. Your first assessment is free, in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Malappuram and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Get started in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Reach our advisers to book an initial consultation time that works for your family.' },
          { title: '2. Meet an adviser online, or visit our Thrissur office', text: 'Connect over video from home or take a short trip to our head office in Thrissur.' },
          { title: '3. Get a free assessment of the routes that fit you', text: 'Receive an honest, transparent evaluation of your European, UK, Canadian or Australian options.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: How Do Malappuram Clients Reach Mountbell?',
        body: [
          'Online, by phone, or at our head office at Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur. Our immigration consultants in Malappuram advise on work visas, overseas recruitment, nursing careers, skilled migration, PR and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023). Call +91 9207014777 to book.',
        ],
      },
      {
        type: 'facts',
        h2: 'Our Malappuram Service Options',
        rows: [
          ['Online meetings', 'On screen, including late evenings for clients currently working in the Gulf'],
          ['Calls and WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['In-person visits', 'Thrissur head office, about 1.5 to 2 hours from Malappuram town by road or rail'],
          ['Languages spoken', 'Malayalam and English'],
          ['Licence status', 'MEA licensed recruiting agent B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Malappuram Looks Beyond the Gulf',
        body: [
          'Malappuram district sends more workers abroad than almost anywhere in Kerala, and most have gone to the Gulf. Remittances built homes, schools and businesses across the district. Today the questions are changing. Gulf contracts are shorter, and many workers want a route that can lead to settling for good. Their children, now nurses, engineers and graduates, look at Europe, the UK, Australia and Canada.',
          'Malappuram families have also seen what unlicensed agents can cost: lost savings, fake offers and workers stranded abroad. That is why people search for immigration consultants in Malappuram whose licence they can verify first on eMigrate.',
        ],
      },
      {
        type: 'checks',
        h2: 'What Makes Mountbell a Safe Choice',
        intro: 'We provide legal protections and full transparency for Malappuram families:',
        items: [
          { title: 'Ministry of External Affairs licence', text: 'A verified recruiting licence (B-1921/KER/PART/100/5/10348/2023) searchable on eMigrate.' },
          { title: 'Employer check before payment', text: 'Every job offer checked directly against the overseas employer before you pay any service fee.' },
          { title: 'Agreed written fees & receipts', text: 'Fees agreed in a signed contract, with an official tax invoice and receipt for every payment.' },
          { title: 'One consistent adviser', text: 'One dedicated adviser who stays with your case from the first phone call until departure.' },
        ],
        after: ['These are the immigration consultants in Malappuram who also review our guides, so what you hear on a call matches what you read online.'],
      },
      {
        type: 'links',
        h2: 'Help Available to Malappuram Clients',
        intro: 'Every core Mountbell programme is open to Malappuram candidates:',
        items: [
          { title: 'Work visas through employers', text: 'Direct hiring by verified employers in Germany, Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Overseas recruitment', text: 'Recruitment for heavy drivers, tradespeople, mechanics and hospitality staff.', href: '/overseas-jobs/' },
          { title: 'Nursing careers abroad', text: 'Nursing placements in the UK, Germany, Malta, the Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Skilled migration and PR', text: 'Australia and Canada points-tested permanent residence pathways.', href: '/services/pr-visa/' },
          { title: 'Skills assessment & language classes', text: 'Credential evaluations and online IELTS, OET, PTE, and German coaching.', href: '/services/skills-assessment/' },
          { title: 'Focused study abroad service', text: 'University admissions with post-study work permits and PR potential.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Leading Routes for Malappuram Applicants',
        body: [
          'Routes handled most frequently for candidates from Malappuram district:',
        ],
        list: [
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Heavy-vehicle drivers, welders, electricians, and warehouse staff on European work permits.',
          '<strong>Germany:</strong> Nurses and skilled tradespeople learning German to B1 or B2 level.',
          '<strong>United Kingdom and Malta:</strong> Registered nurses, healthcare assistants, and care professionals.',
          '<strong>Australia and Canada:</strong> Engineers, accountants, and healthcare staff seeking points-tested PR.',
          '<strong>The Maldives:</strong> Registered nurses and allied health staff wanting tax-free hospital roles close to home.',
        ],
        after: ['Each route has its own tests, costs and timelines, set out in writing before you decide.'],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Malappuram',
        body: [
          'Malappuram nurses train at colleges and hospitals across the district, from the Government Medical College at Manjeri to private multi-speciality hospitals in Perinthalmanna (such as Moulana Hospital, Al Shifa, and MES Medical College). Many Malappuram nurses have also worked in Saudi Arabia or the UAE.',
          'Our nursing advisers explain which countries accept a GNM diploma, which need a BSc, how long registration takes and when to sit OET or IELTS. Keep your Kerala Nurses and Midwives Council (KNMC) registration current before you start, because every country asks for it.',
        ],
      },
      {
        type: 'prose',
        h2: 'Turning Gulf Experience Into a Skilled Visa',
        body: [
          'For workers from Malappuram district, years in Riyadh, Dubai, Doha or Kuwait can count towards work routes in Europe and skilled routes in Australia or Canada. What matters is proof: experience letters that list your duties and dates, a valid licence for drivers, and certificates for trades.',
          'The visa consultants Malappuram workers speak to at Mountbell check your papers and the employer before you pay anything. If a letter is missing or ambiguous, we tell you exactly what to request from your old company.',
        ],
      },
      {
        type: 'steps',
        h2: 'A Walk Through Your First Meeting',
        intro: 'Most first meetings take about an hour, online or at our Thrissur office. Our immigration consultants in Malappuram keep it frank and focused:',
        items: [
          { title: '1. Structured intake', text: 'A few questions about your work history, education, language scores and family plans.' },
          { title: '2. Review of papers', text: 'A review of any certificates, GCC licences, or employer letters you share.' },
          { title: '3. Transparent matching', text: 'The routes that fit you, and the ones that do not, explained honestly with zero false promises.' },
          { title: '4. Written timelines & costs', text: 'Likely timelines and fee schedules provided in writing if you want them.' },
          { title: '5. Family questions answered', text: 'Time for every question from you and your family in Malayalam or English.' },
        ],
        after: ['If your route will need a police certificate, we explain how to book at the Passport Seva Kendra Malappuram.'],
      },
      {
        type: 'prose',
        h2: 'Official Offices for Malappuram Applicants',
        body: [
          'Some steps happen at government offices, and our advisers tell you exactly when each one is needed:',
        ],
        list: [
          '<strong>Passport Seva Kendra (PSK) Malappuram:</strong> Located at Sajidha Tower, Jubilee Road, Moonampadi, handling passports and police clearance certificates.',
          '<strong>Regional Passport Office (RPO) Kozhikode:</strong> Oversees passport administrative services for Malappuram district.',
          '<strong>NORKA-ROOTS Centre Kozhikode:</strong> Handles educational and certificate attestation.',
          '<strong>eMigrate Portal:</strong> Handles emigration clearance for workers whose passports are marked ECR.',
        ],
        after: ['Book early, because most visas need a police certificate.'],
      },
      {
        type: 'prose',
        h2: 'Coming to Thrissur From Malappuram',
        body: [
          'Our immigration consultants in Malappuram can handle most of your case online, with a visit or two for original papers:',
        ],
        list: [
          '<strong>Online:</strong> Book a meeting on screen, with no travel required.',
          '<strong>By road:</strong> Travel south through Kuttippuram and Edappal to Thrissur along SH 69 / NH 66, taking about 1.5 to 2 hours from Malappuram town.',
          '<strong>By train:</strong> From Tirur or Kuttippuram railway stations to Thrissur (approx 1 to 1.25 hours), followed by a 10-minute auto ride to Ashwini Junction.',
          '<strong>From Ponnani or Changaramkulam:</strong> Easy road access via Kunnamkulam to Thrissur in about 1 to 1.25 hours.',
        ],
      },
      {
        type: 'prose',
        h2: 'Online Language Coaching',
        body: [
          'IELTS, PTE, OET and German preparation can be arranged online, so you can keep working, even from the Gulf. Your trainer and adviser plan one timeline, so your test date fits your route.',
        ],
      },
      {
        type: 'prose',
        h2: 'Call First, Visit Later',
        body: [
          'Most clients from Malappuram district start online and visit Thrissur once their papers are ready. Workers still in the Gulf can finish most steps before they fly home, and Malappuram families often join the first call together. Complex cases, such as past refusals or family moves, are handled at our head office.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Malappuram: What to Check',
        intro: 'Immigration consultants in Malappuram range from licensed firms to people working from a phone. Before you pay anyone, check these points:',
        items: [
          { title: 'MEA licence check', text: "A recruiting agent licence listed on the government's eMigrate portal." },
          { title: 'Signed fee contracts', text: 'Fees written in an agreement you sign, with a receipt for every payment.' },
          { title: 'No false promises', text: 'No promise of a guaranteed visa, and no offer of a visa that costs nothing.' },
          { title: 'Real registered office', text: 'A real office you can visit, with named, accountable advisers.' },
        ],
        after: ['Apply the same checks to every firm, including ours. Good visa consultants Malappuram clients trust will welcome them.'],
      },
      {
        type: 'reviews',
        h2: 'What Malappuram Clients Tell Us',
      },
      {
        type: 'prose',
        h2: 'Where in the District We Work',
        body: [
          'Our immigration consultants in Malappuram work with clients from Manjeri and Perinthalmanna to Tirur, Ponnani and Kottakkal, and from Kondotty and Valanchery to Nilambur in the east.',
          'Clients anywhere in Malappuram district, or families residing in the Gulf, can also meet us seamlessly online.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Does Mountbell have an office in Malappuram?', a: 'Not yet. We serve you online and at our head office in Thrissur at Fair Trade Center, TUDA Road, Ashwini Jn.' },
          { q: 'Are your immigration consultants in Malappuram licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs (Licence No. B-1921/KER/PART/100/5/10348/2023), which you can verify on eMigrate.' },
          { q: 'Where do I get a police certificate in Malappuram?', a: 'Through Passport Seva, at the Passport Seva Kendra Malappuram at Sajidha Tower on Jubilee Road, Moonampadi.' },
          { q: 'Can I start while I am still working in the Gulf?', a: 'Yes. Most steps—including eligibility review, credential evaluation, and language coaching—can be completed online before you return to Kerala.' },
          { q: 'Do you help Malappuram nurses with Gulf experience?', a: 'Yes. Gulf hospital experience often counts towards European, UK, and Australian registrations, and we check your letters first.' },
          { q: 'Can visa consultants Malappuram clients find online be trusted?', a: 'Only if they hold a licence you can check on eMigrate. Ask for the registration number before you pay.' },
          { q: 'Is the first meeting free?', a: 'Yes. Your initial assessment with Mountbell is completely free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Get in Touch With an Adviser',
        rows: [
          ['Central Mobile & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Thrissur Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Free Assessment', '<a href="/free-immigration-assessment/">Book a free consultation</a>'],
          ['Thrissur Head Office (closest)', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
          ['Kochi Branch', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom, Kochi 682025'],
        ],
      },
    ],
    related: ['/immigration-consultants-thrissur/', '/immigration-consultants-calicut/', '/immigration-consultants-palakkad/', '/contact-us/', '/free-immigration-assessment/'],
  },
{
    path: '/immigration-consultants-palakkad/', parent: '/contact-us/', crumb: 'Palakkad',
    title: 'Immigration Consultants in Palakkad | Mountbell',
    description: 'Immigration consultants in Palakkad: MEA-licensed Mountbell advice on work visas, nursing, PR and overseas jobs, online or in Thrissur. Free assessment.',
    label: 'Palakkad & Industrial Belt',
    h1: 'Immigration Consultants in Palakkad: Licensed Advice for Work, Nursing and PR',
    lede: 'Immigration consultants in Palakkad should hold a licence you can check, explain each route honestly and be close enough to visit. Mountbell does not have an office in Palakkad yet. We serve clients across the district through online meetings, calls and WhatsApp, and in person at our head office in Thrissur, the nearest one to you. Your first assessment is free, in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Palakkad and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Get started in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Schedule a consultation appointment at a time that works for your schedule.' },
          { title: '2. Meet an adviser online, or visit our Thrissur office', text: 'Connect over video from home or take a short trip to our head office in Thrissur.' },
          { title: '3. Get a free assessment of the routes that fit you', text: 'Receive an honest, transparent breakdown of your trade, nursing, or skilled PR options.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Where Can Palakkad Clients Meet Mountbell?',
        body: [
          'Online, by phone, or at our head office at Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, a short drive or train ride from Palakkad. Our immigration consultants in Palakkad advise on work visas, overseas recruitment, nursing careers, skilled migration, PR and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023). Call +91 9207014777 to book.',
        ],
      },
      {
        type: 'facts',
        h2: 'How We Work With Palakkad Clients',
        rows: [
          ['Online meetings', 'On screen, including evening sessions for shift workers and factory technicians'],
          ['Calls and WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Office for in-person visits', 'Thrissur head office, about 1 to 1.25 hours from Palakkad town by train or road'],
          ['Languages spoken', 'Malayalam, English, and Tamil on request'],
          ['Licence status', 'MEA licensed recruiting agent B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Palakkad Households Plan Moves Abroad',
        body: [
          "Palakkad district is Kerala's rice bowl. Its farming towns sit beside the Kanjikode industrial belt, with close links to Coimbatore across the border. Many young people here train in nursing, engineering, ITI trades and driving, then find wages at home too low for their skills. Some Palakkad families already have a relative in the Gulf; others are the first in their family to look abroad.",
          'People moving abroad for the first time are the easiest target for empty promises, and Palakkad families are no exception. That is why people search for immigration consultants in Palakkad with a licence they can verify, rather than an agent who simply says the visa is "confirmed".',
        ],
      },
      {
        type: 'checks',
        h2: 'Reasons Clients Here Pick Mountbell',
        intro: 'We combine regional proximity with official government accreditation:',
        items: [
          { title: 'Ministry of External Affairs licence', text: 'Licence B-1921/KER/PART/100/5/10348/2023, searchable directly on eMigrate.' },
          { title: 'Head office is closest to you', text: 'Our head office in Thrissur, where our leadership and senior advisers work, is the closest Mountbell location to Palakkad.' },
          { title: 'Clear fees with receipts', text: 'Fees set out in writing, with an official receipt for every payment.' },
          { title: 'One dedicated adviser', text: 'One adviser stays with your case from first call to departure.' },
        ],
        after: ['These are the immigration consultants in Palakkad who also review our guides, so what you hear on a call matches what you read online.'],
      },
      {
        type: 'links',
        h2: 'Services You Can Use From Palakkad',
        intro: 'Comprehensive migration and job programmes available online or in Thrissur:',
        items: [
          { title: 'Work visas through employers', text: 'Direct employment contracts with verified employers in Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Overseas recruitment', text: 'Recruitment for tradespeople, mechanics, welders, drivers and factory staff.', href: '/overseas-jobs/' },
          { title: 'Nursing careers abroad', text: 'Placements in the UK, Germany, Malta, the Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Skilled migration and PR', text: 'Points-tested permanent residence for Australia and Canada.', href: '/services/pr-visa/' },
          { title: 'Skills assessment & documentation', text: 'TRA trade assessments, document legalisation, and language classes.', href: '/services/skills-assessment/' },
          { title: 'Focused study abroad service', text: 'Higher education with confirmed post-graduation work rights and PR routes.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Common Destinations From Palakkad',
        body: [
          'The pathways most frequently chosen by Palakkad applicants:',
        ],
        list: [
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Welders, fitters, electricians, and drivers with proven experience.',
          '<strong>Germany:</strong> Nurses and skilled workers learning German to B1 or B2 level.',
          '<strong>United Kingdom and Malta:</strong> Nurses and healthcare care professionals.',
          '<strong>Australia and Canada:</strong> Engineers, IT specialists, and health staff seeking PR.',
          '<strong>The Maldives:</strong> Nurses and allied health staff seeking hospital positions close to Kerala.',
        ],
        after: ['Each route has its own tests, costs and timelines, which we set out in writing before you decide.'],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Palakkad',
        body: [
          'Palakkad nurses often train locally, then gain experience in Coimbatore, Thrissur or the Gulf before looking further. Our nursing advisers explain which countries accept a GNM diploma, which need a BSc, how long registration takes and when to sit OET or IELTS.',
          'Keep your Kerala Nurses and Midwives Council (KNMC) registration current before you start, because every country asks for it. Palakkad nurses who worked in Tamil Nadu should keep those experience letters too; they usually count toward registration requirements.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Tradespeople and Factory Workers',
        body: [
          'Many clients in Palakkad district work in the Kanjikode industrial factories, in automotive workshops, or as commercial drivers. Employers in Europe hire welders, fitters, electricians and drivers with proven experience.',
          'The visa consultants Palakkad workers speak to at Mountbell check the employer, the contract and the salary before you pay anything. ITI certificates and experience letters matter most, so bring both to your first meeting.',
        ],
      },
      {
        type: 'steps',
        h2: 'Inside Your First Consultation',
        intro: 'Most first meetings take about an hour, online or at our Thrissur office. Our immigration consultants in Palakkad keep it simple and honest:',
        items: [
          { title: '1. Structured background check', text: 'A few questions about your work history, studies, and family goals.' },
          { title: '2. Review of trade/academic papers', text: 'A review of any ITI certificates, degree papers, or experience letters you share.' },
          { title: '3. Transparent matching', text: 'The routes that fit you, and the ones that do not, explained honestly.' },
          { title: '4. Written timelines & costs', text: 'Likely timelines and costs, in writing if you want them.' },
          { title: '5. Family questions answered', text: 'Time for every question from you and your family in Malayalam, English, or Tamil.' },
        ],
        after: ['If your route will need a police certificate, we explain how to book at the Passport Seva Kendra Palakkad.'],
      },
      {
        type: 'prose',
        h2: 'Offices Palakkad Applicants Use',
        body: [
          'Some steps happen at government offices, and our advisers tell you exactly when each one is needed:',
        ],
        list: [
          '<strong>Passport Seva Kendra (PSK) Palakkad:</strong> Located at the Head Post Office in Olavakode, handling passports and police certificates.',
          '<strong>NORKA-ROOTS Attestation Centre Ernakulam:</strong> Handles attestation of educational and vocational documents.',
          '<strong>eMigrate Portal:</strong> Handles clearance for workers whose passports are marked ECR.',
          '<strong>Emigration Office in Kochi:</strong> Handles recruitment complaints and emigration clearances.',
        ],
        after: ['Book early, because most visas need a police certificate.'],
      },
      {
        type: 'prose',
        h2: 'Travelling to Our Thrissur Office from Palakkad',
        body: [
          'Because Thrissur is right next door, meeting our team in person is straightforward:',
        ],
        list: [
          '<strong>Online:</strong> Book a meeting on screen, with no travel needed.',
          '<strong>By train:</strong> Palakkad Junction (Olavakode) to Thrissur takes about 1 to 1.25 hours on frequent express trains, followed by a 10-minute auto ride to Ashwini Junction.',
          '<strong>By road:</strong> Along the national highway (NH 544) through Vadakkencherry, taking about 1.25 to 1.5 hours (approx 65–70 km).',
          '<strong>From Ottapalam or Shoranur:</strong> Regular local trains reach Thrissur in 35 to 45 minutes; by road, it is about 40–50 minutes.',
        ],
      },
      {
        type: 'prose',
        h2: 'Exam Preparation Without Travel',
        body: [
          'IELTS, PTE, OET and German preparation can be arranged online, so you can keep working while you study. Your trainer and adviser plan one timeline, so your test date fits your route. Many trade routes need only basic English, while nurses usually need OET or IELTS.',
        ],
      },
      {
        type: 'prose',
        h2: 'Online First, Thrissur When Needed',
        body: [
          'Most clients from Palakkad district start online and visit Thrissur once their papers are ready. Because Thrissur is our head office, complex cases such as past refusals or family moves are handled there by our longest-serving advisers.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Palakkad: What to Check',
        intro: 'Immigration consultants in Palakkad range from licensed firms to people working from a phone. Before you pay anyone, check these points:',
        items: [
          { title: 'MEA licence listed on eMigrate', text: "A recruiting agent licence listed on the government's eMigrate portal." },
          { title: 'Signed fee schedule & receipts', text: 'Fees written in an agreement you sign, with a receipt for every payment.' },
          { title: 'No "confirmed" visa promises', text: 'No promise of a guaranteed visa or a "confirmed" job; approvals rest with foreign governments.' },
          { title: 'Real physical office', text: 'A real office you can visit, with named advisers you can hold accountable.' },
        ],
        after: ['Apply the same checks to every firm, including ours. Good visa consultants Palakkad clients trust will welcome them.'],
      },
      {
        type: 'reviews',
        h2: 'Feedback From Palakkad Clients',
      },
      {
        type: 'prose',
        h2: 'Taluks and Towns We Cover in Palakkad',
        body: [
          'Our immigration consultants in Palakkad work with clients across the district, from Ottapalam, Shoranur and Pattambi in the west to Mannarkkad and Attappadi in the north, Alathur and Nemmara in the south, and Chittur near the Tamil Nadu border.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Does Mountbell have an office in Palakkad?', a: 'Not yet. We serve you online and at our head office in Thrissur, which is easily accessible by train or road.' },
          { q: 'Are your immigration consultants in Palakkad licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs (Licence No. B-1921/KER/PART/100/5/10348/2023), which you can verify on eMigrate.' },
          { q: 'Where do I get a police certificate in Palakkad?', a: 'Through Passport Seva, at the Passport Seva Kendra Palakkad at the Head Post Office in Olavakode.' },
          { q: 'Can my Tamil Nadu work experience count?', a: 'Usually, if your experience certificates show your duties, dates, and hours clearly.' },
          { q: 'Do you help Palakkad nurses with a GNM diploma?', a: 'Yes. Several countries accept GNM (such as Germany and Malta), and we explain which ones before you pay for tests.' },
          { q: 'Can visa consultants Palakkad clients find online be trusted?', a: 'Only if they hold a licence you can check on eMigrate. Ask for the number before you pay.' },
          { q: 'Is the first meeting free?', a: 'Yes. Your initial profile assessment with Mountbell is completely free.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Reach Our Advisers',
        rows: [
          ['Central Mobile & WhatsApp', `<a href="tel:${site.phone.tel}">${site.phone.display}</a>`],
          ['Thrissur Landline', '<a href="tel:+914872221317">+91 487 222 1317</a>'],
          ['Email', `<a href="mailto:${site.email}">${site.email}</a>`],
          ['Free Assessment', '<a href="/free-immigration-assessment/">Book a free consultation</a>'],
          ['Thrissur Office (HQ, nearest to you)', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
          ['Kochi Branch', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom, Kochi 682025'],
        ],
      },
    ],
    related: ['/immigration-consultants-thrissur/', '/immigration-consultants-malappuram/', '/contact-us/', '/free-immigration-assessment/'],
  },
{
    path: '/immigration-consultants-trivandrum/', parent: '/contact-us/', crumb: 'Trivandrum',
    title: 'Immigration Consultants in Trivandrum | Mountbell',
    description: 'Immigration consultants in Trivandrum: MEA-licensed Mountbell advice on PR, nursing, work visas and overseas jobs, online or in Kochi. Free assessment.',
    label: 'Thiruvananthapuram Capital',
    h1: 'Immigration Consultants in Trivandrum: Licensed Advice for the Capital, Online and In Person',
    lede: 'Immigration consultants in Trivandrum should hold a licence you can check, give straight answers about your chances and be easy to reach from home. Mountbell does not have an office in Trivandrum yet. We work with clients across the capital through online meetings, calls and WhatsApp, and in person at our Kochi office. Your first assessment is free, in Malayalam or English.',
    acts: { check: 'Book a Free Assessment', wa: 'WhatsApp Us' },
    img: 'kerala',
    wa: 'Hi Mountbell, I am from Trivandrum and would like an immigration consultation.',
    blocks: [
      { type: 'cert', h2: 'Licensed by the Ministry of External Affairs' },
      {
        type: 'steps',
        h2: 'Get started in 3 steps',
        items: [
          { title: '1. Call or WhatsApp +91 9207014777', text: 'Book an appointment time that suits your daily schedule.' },
          { title: '2. Meet an adviser online, or visit our Kochi office', text: 'Connect over a video consultation or visit our main branch in Palarivattom, Kochi.' },
          { title: '3. Get a free assessment of the routes that fit you', text: 'Receive an honest, objective breakdown of your international visa and career prospects.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Quick Answer: Can I Meet Mountbell in Trivandrum?',
        body: [
          'Not in person in the city yet. Our immigration consultants in Trivandrum work with clients online and by phone, and in person at Mathewsons Centre Point, Edappally Road, Kochi. Our head office in Thrissur handles complex cases. Call +91 9207014777 to book. We advise on skilled migration, PR, work visas, overseas recruitment, nursing careers and study abroad, under a Ministry of External Affairs recruiting licence (B-1921/KER/PART/100/5/10348/2023).',
        ],
      },
      {
        type: 'facts',
        h2: 'Trivandrum Service Snapshot',
        rows: [
          ['Online meetings', 'On screen, including evenings and weekends by arrangement'],
          ['Calls and WhatsApp', '<a href="tel:+919207014777">+91 92070 14777</a>'],
          ['Email', '<a href="mailto:edu@mountbell.com">edu@mountbell.com</a>'],
          ['Nearest Mountbell office', 'Kochi branch (Palarivattom), about 3 hours from Thiruvananthapuram Central by train'],
          ['Languages spoken', 'Malayalam and English'],
          ['Licence status', 'MEA licensed recruiting agent B-1921/KER/PART/100/5/10348/2023'],
        ],
      },
      {
        type: 'prose',
        h2: 'Why Families in the Capital Seek Licensed Advisers',
        body: [
          'Thiruvananthapuram district mixes government jobs, a large IT park (Technopark), major hospitals and a long coastline with deep ties to the Gulf. Nurses ask about the UK and Germany. Engineers and developers compare PR in Australia and Canada, and Thiruvananthapuram immigration consultants hear the same questions every week. Fishing and coastal families often have a relative in the Gulf and want a safer next step.',
          'Because so many agents work across Thiruvananthapuram district, a licence matters more than a smart office. That is why people search for immigration consultants in Trivandrum whose licence number they can check before paying a rupee.',
        ],
      },
      {
        type: 'checks',
        h2: 'Why Clients Here Choose Mountbell',
        intro: 'We bring verified government accountability to professionals in the capital:',
        items: [
          { title: 'Ministry of External Affairs licence', text: 'A licence number (B-1921/KER/PART/100/5/10348/2023) you can verify directly on eMigrate.' },
          { title: 'Standardised fee schedule', text: 'The same advisers, fees and document checks as our Kochi and Thrissur offices.' },
          { title: 'Specialist nursing desk', text: 'Nursing advisers who work exclusively with nurses and midwives on overseas registrations.' },
          { title: 'One dedicated case manager', text: 'One adviser who stays with your case from first exploratory call right through to departure.' },
        ],
        after: ['These are the immigration consultants in Trivandrum who also review our guides, so what you hear on a call matches what you read online.'],
      },
      {
        type: 'links',
        h2: 'What We Can Handle for You',
        intro: 'Comprehensive migration and placement programmes accessible online or in Kochi:',
        items: [
          { title: 'Skilled migration and PR', text: 'Australia and Canada permanent residence pathways for tech, engineering, and health professionals.', href: '/services/pr-visa/' },
          { title: 'Nursing careers abroad', text: 'Hospital placement in the UK, Germany, Malta, the Maldives and Denmark.', href: '/nursing-careers/' },
          { title: 'Work visas through employers', text: 'Verified employer-sponsored positions across Europe and the Gulf.', href: '/services/work-visa/' },
          { title: 'Overseas recruitment', text: 'Direct hiring for tradespeople, mechanics, and technical professionals.', href: '/overseas-jobs/' },
          { title: 'Skills assessment & language classes', text: 'ACS, Engineers Australia, TRA assessments, and online IELTS, PTE, OET, and German classes.', href: '/services/skills-assessment/' },
          { title: 'Focused study abroad service', text: 'Higher education admissions leading to confirmed post-study work rights.', href: '/study-abroad/' },
        ],
      },
      {
        type: 'prose',
        h2: 'Popular Routes From the Capital',
        body: [
          'Routes handled most frequently for candidates from Thiruvananthapuram:',
        ],
        list: [
          '<strong>Australia and Canada:</strong> Software developers, systems engineers, civil/mechanical engineers, and health staff seeking points PR.',
          '<strong>United Kingdom and Malta:</strong> Registered nurses, healthcare support workers, and care professionals.',
          '<strong>Germany:</strong> Nurses and skilled workers learning German to B1 or B2 level, plus Opportunity Card.',
          '<strong>Poland, Latvia, Lithuania and Bulgaria:</strong> Welders, heavy vehicle drivers, and industrial electricians.',
          '<strong>The Maldives:</strong> Nurses and allied health staff, a short flight away from Trivandrum International Airport.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Nurses in Trivandrum',
        body: [
          "Trivandrum nurses train and work at some of Kerala's best-known hospitals, from the Government Medical College Thiruvananthapuram to large private hospitals such as KIMSHEALTH, PRS Hospital, Cosmopolitan, and Ananthapuri Hospitals. Our nursing advisers explain which countries accept a GNM diploma, which need a BSc, how long registration takes and when to sit OET or IELTS.",
          'Keep your Kerala Nurses and Midwives Council (KNMC) registration current before you start, because every country asks for it. Many Trivandrum nurses also ask about specialist experience; ICU, theatre and emergency ward experience often accelerates international placement, provided your letters show it clearly.',
        ],
      },
      {
        type: 'prose',
        h2: 'For Developers and Engineers in Technopark',
        body: [
          "Many clients here work in the city's IT parks (Technopark Phase I, II, III) or in prominent engineering firms. PR routes that score age, English and experience in Australia and Canada often suit them, provided their job matches a skilled list and their English score is strong.",
          'The visa consultants Trivandrum clients speak to at Mountbell check your occupation against ANZSCO / NOC codes and evaluate your points before you pay for skills assessments. Gulf experience can count too, if your letters spell out your duties and dates.',
        ],
      },
      {
        type: 'steps',
        h2: 'What Happens in Your First Meeting',
        intro: 'Most first meetings take about an hour, online or at our Kochi office, and the visa consultants Trivandrum clients meet there handle the file themselves. Our immigration consultants in Trivandrum keep it plain and practical:',
        items: [
          { title: '1. Structured intake', text: 'A few questions about your work history, studies, language level, and family.' },
          { title: '2. Review of papers', text: 'A thorough check of any certificates or employment letters you share.' },
          { title: '3. Transparent matching', text: 'The routes that fit you, and the ones that do not, explained honestly.' },
          { title: '4. Written timelines & costs', text: 'Likely timelines and fee schedules, in writing if you want them.' },
          { title: '5. Family questions answered', text: 'Time for every question from you and your family in Malayalam or English.' },
        ],
        after: ['If your route will need a police certificate, we explain the right time to book through the Regional Passport Office Thiruvananthapuram.'],
      },
      {
        type: 'prose',
        h2: 'Key Government Offices in the Capital',
        body: [
          'As the state capital, the city hosts several crucial administrative offices you may need:',
        ],
        list: [
          '<strong>Regional Passport Office (RPO) Thiruvananthapuram:</strong> Located at Karalkada Junction in Pettah, overseeing passports and police clearance for the region.',
          '<strong>Passport Seva Kendra (PSK):</strong> Located at Carmel Towers, Vazhuthacaud, handling appointments for passports and police certificates.',
          '<strong>NORKA-ROOTS Head Office:</strong> The state agency for Keralites abroad, headquartered in Thycaud / Thiruvananthapuram, handling state attestation of educational documents.',
          '<strong>Protector of Emigrants (PoE) / Emigration Office:</strong> Handles ECR queries and recruitment complaints.',
        ],
        after: ['Book early, because most visas need a police certificate.'],
      },
      {
        type: 'prose',
        h2: 'Meeting Us From Trivandrum',
        body: [
          'Our immigration consultants in Trivandrum handle most of your case online, with one or two visits for verifying original documents:',
        ],
        list: [
          '<strong>Online:</strong> Book a meeting on screen, with no travel required.',
          '<strong>By train:</strong> Thiruvananthapuram Central to Ernakulam takes about 3 to 3.5 hours on express trains (under 2 hours on Vande Bharat), followed by a short Metro ride to our office at Metro Pillar 485 in Palarivattom.',
          '<strong>By road:</strong> North along NH 66, approximately 205–215 km (about 4.5 to 5 hours) to Edappally Road.',
        ],
      },
      {
        type: 'prose',
        h2: 'Language Training Online',
        body: [
          'IELTS, PTE, OET and German preparation can be arranged online, so you can keep your job while you study. Your trainer and adviser plan one timeline, so your test date fits your route.',
        ],
      },
      {
        type: 'prose',
        h2: 'Start Online, Finish in Kochi',
        body: [
          'Most clients from Thiruvananthapuram district start online and visit Kochi once their papers are ready. Complex cases, such as past refusals or family moves, are reviewed by our head office in Thrissur either way.',
        ],
      },
      {
        type: 'checks',
        h2: 'Choosing Visa Consultants in Trivandrum: What to Check',
        intro: 'Immigration consultants in Trivandrum range from licensed firms to people working from a phone. Before you pay anyone, check these points:',
        items: [
          { title: 'MEA licence listed on eMigrate', text: "A recruiting agent licence listed on the government's eMigrate portal under the firm's exact name." },
          { title: 'Written fee agreements & receipts', text: 'Fees written in an agreement you sign, with an official receipt for every payment.' },
          { title: 'No false visa or job promises', text: 'No promise of a guaranteed visa, job or success rate; true decisions rest solely with embassies.' },
          { title: 'Real physical offices with named staff', text: 'A real office you can visit, with named advisers you can hold accountable.' },
        ],
      },
      {
        type: 'reviews',
        h2: 'Reviews From Clients in the South',
      },
      {
        type: 'prose',
        h2: 'Places Across the District We Serve',
        body: [
          'Our immigration consultants in Trivandrum work with clients from across the district, including Kazhakoottam and Attingal in the north, Neyyattinkara and Parassala in the south, Nedumangad inland, and Varkala, Kovalam and Vizhinjam along the coast.',
          'In addition, families across southern Kerala, including Kollam, also regularly reach our advisers online.',
        ],
      },
      {
        type: 'faq',
        h2: 'Frequently Asked Questions',
        items: [
          { q: 'Does Mountbell have an office in Trivandrum?', a: 'Not yet. We serve you online and at our Kochi office at Mathewsons Centre Point, Palarivattom.' },
          { q: 'Are Thiruvananthapuram immigration consultants at Mountbell licensed?', a: 'Yes. Mountbell holds a recruiting agent licence from the Ministry of External Affairs (Licence No. B-1921/KER/PART/100/5/10348/2023), which you can verify on eMigrate.' },
          { q: 'Where do I get a police certificate in the city?', a: 'Through Passport Seva, at the Carmel Towers centre in Vazhuthacaud, under the Regional Passport Office Thiruvananthapuram.' },
          { q: 'Do you help Trivandrum nurses with a GNM diploma?', a: 'Yes. Several countries accept GNM (such as Germany and Malta), and we explain which ones before you pay for tests.' },
          { q: 'Can visa consultants Trivandrum families find online be trusted?', a: 'Only if they hold a licence you can check on eMigrate. Ask for the number before you pay.' },
          { q: 'Do Thiruvananthapuram immigration consultants charge for the first meeting?', a: 'We do not. Your first assessment with Mountbell is free.' },
          { q: 'Do you assist software developers from Technopark?', a: 'Yes. Points-tested PR pathways for Australia and Canada, plus European tech work permits, are popular among Technopark engineers.' },
        ],
      },
      {
        type: 'facts',
        h2: 'Contact Our Advisers',
        rows: [
          ['Central Mobile & WhatsApp', '<a href="tel:+919207014777">+91 92070 14777</a>'],
          ['Email', '<a href="mailto:edu@mountbell.com">edu@mountbell.com</a>'],
          ['Free Assessment', '<a href="/free-immigration-assessment/">Book a free consultation</a>'],
          ['Kochi Office (closest to you)', 'Mathewsons Centre Point, 5th Floor, Metro Pillar No. 485, Palarivattom P O, Mamangalam, Edappally Road, Kochi, Kerala 682025'],
          ['Thrissur Head Office', 'Fair Trade Center, TUDA Road, Ashwini Jn, Thrissur, Kerala 680022'],
        ],
      },
    ],
    related: ['/immigration-consultants-kochi/', '/immigration-consultants-kollam/', '/contact-us/', '/free-immigration-assessment/'],
  }
];
