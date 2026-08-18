// Shared Field Notes list — the single source for the Field Notes page and the
// "Where I am right now" block on the About page (which shows the latest three).
// Newest first. TODO: when Field Notes moves to a Markdown/CMS collection, replace
// this module with the loader and update both importers (field-notes.astro, about.astro).
export const fieldNotes = [
  { date: 'November 30, 2025', location: 'Ushuaia, Argentina', title: 'Love has no age no limit and no death.' },
  { date: 'November 17, 2025', location: 'Longyearbyen, Svalbard', title: 'The weight of the whistle: responsibility on the ice.' },
  { date: 'November 2, 2025', location: 'Ilulissat, Greenland', title: 'What Shackleton got wrong about heroic leadership.' },
  { date: 'October 21, 2025', location: 'Kirkenes, Norway', title: 'Sea ice dialects and the language of the north.' },
  { date: 'October 5, 2025', location: 'Punta Arenas, Chile', title: 'Permafrost’s long goodbye and the shifting ground.' },
  { date: 'September 22, 2025', location: 'Nuuk, Greenland', title: 'The quiet authority of the sweep guide.' },
  { date: 'September 8, 2025', location: 'Tromsø, Norway', title: 'When all options are bad: deciding on the ice.' },
];
