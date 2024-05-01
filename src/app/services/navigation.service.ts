import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { help } from '../help/help';
import { Links } from '../forms/view';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  selectedLink$ = new BehaviorSubject(Links.home);
  visibleComponent$ = new BehaviorSubject(Links.home);

  get Links () {
    return Links; 
  }

  goTo(link: Links): any {
    this.selectedLink$.next(link);
    help.vew.scrollToSection(link);
  }

  /**
   * Sets that the component is visible, they use the
   * Link for name for consistency & simplicity.
   * @param link 
   * @param threshold % of the element in view
   */
  setComponentIsVisible(link: Links): void {
    this.visibleComponent$.next(link);
  }

  checkIfComponentIsVisible(component: Links, threshold: number): IntersectionObserver {
    return new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  this.setComponentIsVisible(component);
                  this.selectedLink$.next(component);
                }
            });
        },
        { threshold }
    );
  }
}
