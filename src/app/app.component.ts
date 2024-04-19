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

  setDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
