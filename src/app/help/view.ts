import { Links } from "../forms/view";

const TEMP_PROPERTIES = [
    'hovered',
    'now',
    'passed',
    'backupText',
    'editing'
];

export function scrollToSection(section: Links, offsetPx: number): void {
  const elem = document.getElementById(section);
  if (elem) {
    window.scrollTo(0, elem.offsetTop - offsetPx);
    // elem.scrollIntoView(); // this approach had cut off area.
  }
}

export function determineOffsetPx(link: Links): number {
  let offsetRatio;
  switch(link) { 
    case Links.home: {
      offsetRatio = 0.33;
      break; 
    }
    case Links.about: {
      offsetRatio = 0.22;
      break; 
    }
    case Links.resume: {
      offsetRatio = 0.17;
      break; 
    }
    case Links.contact: {
      offsetRatio = 0.11;
      break; 
    }
    default: {
      offsetRatio = 0.11;
      break; 
    }
  }
  const headerHeight = document.getElementById('header') ? document.getElementById('header')!.offsetHeight : 0;
  return 0 + document.documentElement.clientHeight * offsetRatio;
}