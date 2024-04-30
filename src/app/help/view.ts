const TEMP_PROPERTIES = [
    'hovered',
    'now',
    'passed',
    'backupText',
    'editing'
];

export function scrollToSection(section: string): void {
  const elem = document.getElementById(section);
  const header = document.getElementById('header');
  if (elem && header) {
    window.scrollTo(0, elem.offsetTop - (header.offsetHeight + 40 + 28));
    // elem.scrollIntoView(); // this approach had cut off area.
  }
}