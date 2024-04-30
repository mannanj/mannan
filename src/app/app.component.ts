import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mannan';

  // OLD CODE.
  // Track elements scrolled.
  @ViewChild('homeDiv', {static: false}) private homeDiv: ElementRef<HTMLDivElement>;
  @ViewChild('aboutDiv', {static: false}) private aboutDiv: ElementRef<HTMLDivElement>;
  @ViewChild('resumeDiv', {static: false}) private resumeDiv: ElementRef<HTMLDivElement>;
  @ViewChild('contactDiv', {static: false}) private contactDiv: ElementRef<HTMLDivElement>;

  // @HostListener('window:scroll', ['$event'])
  // isScrolledIntoView(){
  //   if (this.homeDiv){
  //     const rect = this.homeDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     if (topShown && bottomShown) {
  //       this.setLinkUnderl('home');
  //     }
  //   }
  //   if (this.aboutDiv){
  //     const rect = this.aboutDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     if (topShown && bottomShown) {
  //       this.setLinkUnderl('about');
  //     }
  //   }
  //   if (this.resumeDiv){
  //     const rect = this.resumeDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  //     const onePercentVisible = (
  //       Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < 1 ||
  //       Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < 1
  //     )
  //     if (!onePercentVisible) {
  //       this.setLinkUnderl('resume');
  //     }
  //   }
  //   if (this.contactDiv){
  //     const rect = this.contactDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     if (topShown && bottomShown) {
  //       this.setLinkUnderl('contact');
  //     }
  //   }
  // }

}
