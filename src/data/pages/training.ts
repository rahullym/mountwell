import type { Page } from './types';
import { training as courses } from '../site';

export const training: Page[] = [
  {
    path: '/training/', crumb: 'Training',
    title: 'Online Language Training | German, Danish, IELTS, OET | Mount Bell',
    description: 'Online language training from Mount Bell: German, Danish, IELTS, OET and English courses for people preparing to work or migrate abroad.',
    label: 'Training',
    h1: 'Online Language Training',
    lede: 'German, Danish, IELTS, OET and English courses, taught online. Mount Bell runs its language training as a dedicated educational service alongside its migration and recruitment work.',
    wa: 'Hi Mount Bell, I would like to know about your language training courses.',
    blocks: [
      { type: 'prose', h2: 'Why we train as well as recruit', body: [
        'For most overseas jobs the language exam sits in the middle of the process. A nurse cannot be registered in Germany or authorised in Denmark without the language, and a skilled visa for Australia needs an English test score before an application can go in.',
        'When the training and the file are handled in one place, your exam date and your paperwork are planned together. German and Danish matter most here, because they lead directly into our overseas employment programmes.',
      ] },
      { type: 'links', h2: 'Courses', intro: 'All courses are taught online.', items: courses.map((c) => ({
        id: c.id,
        title: c.native ? `${c.name} language` : c.name,
        text: c.links ? `${c.text} Related programmes: ${c.links.map((l) => `<a href="${l.href}">${l.label}</a>`).join(', ')}.` : c.text,
      })) },
      { type: 'table', h2: 'Which language for which destination', head: ['Destination', 'Language you need', 'Who it applies to'], rows: [
        ['<a href="/countries/germany/">Germany</a>', 'German', 'Healthcare roles and Ausbildung. The Opportunity Card accepts basic German or good English.'],
        ['<a href="/nursing-careers/denmark/">Denmark</a>', 'Danish', 'Nurses and dentists, as part of Danish authorisation.'],
        ['<a href="/countries/australia/">Australia</a>', 'English test such as IELTS or OET', 'Skilled migration applicants and nurses registering with AHPRA.'],
        ['<a href="/countries/malta/">Malta</a> and the Maldives', 'English', 'Both work in English.'],
      ], note: 'Required levels and accepted tests are set by each country’s authorities and change. We confirm the current requirement during your assessment.' },
      { type: 'prose', h2: 'Batches, duration and fees', body: [
        'Course dates, duration and fees depend on the language and your starting level. Send an enquiry or message us on WhatsApp and we will share the current schedule and the fee in writing.',
      ] },
      { type: 'form', h2: 'Ask about a course' },
    ],
    related: ['/nursing-careers/', '/countries/germany/', '/free-immigration-assessment/'],
  },
];
