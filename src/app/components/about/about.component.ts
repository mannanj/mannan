import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';
import { fadeIn, slideInRight, scaleIn } from 'src/app/animations/animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [fadeIn, slideInRight, scaleIn],
    standalone: false
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @Input() link: Links;
  @Input() navService: NavigationService;
  @ViewChild('main') elementRef: ElementRef;
  intersectionObserver: IntersectionObserver;

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }
  ngAfterViewInit() {
    this.intersectionObserver = this.navService.makeIntersectionObsAndSetFlags(Links.about, 0.66);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
}
