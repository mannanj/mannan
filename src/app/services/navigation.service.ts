import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { help } from '../help/help';
import { Links } from '../forms/view';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  selectedLink$ = new BehaviorSubject(Links.home);

  get Links () {
    return Links; 
  }

  goTo(link: Links): any {
    this.selectedLink$.next(link);
    help.vew.scrollToSection(link);
  }
}
