import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mannan';
  selectedLink: string = 'home';
  darkMode: boolean = true;

  setLink(link: string): any {
    this.selectedLink = link;
  }

  isVisible(result: any): void {
    console.log('result', result);
    // if (visible) {
    //   console.log('target visible', target);
    // }
  }
  
  scrollToSection(section: string): void {
    const elem = document.getElementById(section);
    if (elem) {
      elem.scrollIntoView();
    }
  }

  setDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
