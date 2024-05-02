import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  link: Links;
  private _unsubscribe$ = new Subject<void>();
  @ViewChild('main') elementRef: ElementRef;
  intersectionObserver: IntersectionObserver;

  constructor(public navService: NavigationService) {}

  ngOnInit() {
    this._getData();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();      
  }

  _getData(): void {
    this.navService.selectedLink$
    .pipe(takeUntil(this._unsubscribe$))
    .subscribe((link: Links) => this.link = link);
  }

  ngAfterViewInit() {
    this.intersectionObserver = this.navService.checkIfComponentIsVisible(Links.about, 0.66);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
}
