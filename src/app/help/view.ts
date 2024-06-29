import { Links } from "../forms/view";

/**
 * 
 * Scroll to a div on the page based on id and offset px.
 * 
 * @param section a div with an id to scroll to
 */
export function scrollToSection(section: Links): void {
  const elem: HTMLElement | null = document.getElementById(section);
  if (elem) {
    const offsetPx: number = determineOffsetPx(section);
    window.scrollTo(0, elem.offsetTop - offsetPx);
    // elem.scrollIntoView(); // this approach had cut off area.
  }
}

/**
 * 
 * @param link The component link, which has an offset ratio in the viewport
 * that is smaller as we move down.
 * 
 * Hand calculation.
 * @returns 
 */
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
  return document.documentElement.clientHeight * offsetRatio;
}