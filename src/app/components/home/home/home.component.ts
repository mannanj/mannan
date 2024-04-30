import { Component } from '@angular/core';
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

}
