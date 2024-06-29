import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  @Input() link: Links;
  @Input() navService: NavigationService;
  @ViewChild('main') elementRef: ElementRef;
  intersectionObserver: IntersectionObserver;

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }

  ngAfterViewInit() {
    this.intersectionObserver = this.navService.makeIntersectionObsAndSetFlags(Links.contact, 0.99);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

}
