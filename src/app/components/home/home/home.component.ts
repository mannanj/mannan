import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { Links } from 'src/app/forms/view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
    this.intersectionObserver.disconnect();
  }

  _getData(): void {
    this.navService.selectedLink$
    .pipe(takeUntil(this._unsubscribe$))
    .subscribe((link: Links) => this.link = link);
  }

  ngAfterViewInit() {
    this.intersectionObserver = this.navService.checkIfComponentIsVisible(Links.home, 0.2);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }
}
