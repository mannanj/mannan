import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Links } from 'src/app/forms/view';
import { bounceIn, fadeIn, slideInLeft } from 'src/app/animations/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [bounceIn, fadeIn, slideInLeft],
    standalone: false
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @Input() link: Links;
  @Input() navService: NavigationService;
  @ViewChild('main') elementRef: ElementRef;
  intersectionObserver: IntersectionObserver;

  ngOnDestroy(): void { 
    this.intersectionObserver.disconnect();
  }

  ngAfterViewInit() {
    this.intersectionObserver = this.navService.makeIntersectionObsAndSetFlags(Links.home, 0.99);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
}
