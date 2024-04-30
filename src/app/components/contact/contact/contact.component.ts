import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
