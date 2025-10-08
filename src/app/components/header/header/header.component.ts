import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { Links } from 'src/app/forms/view';

export enum Colors {
  sun = 'sun',
  moon = 'moon',
  colorful = 'colorful'
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  link: Links;
  private _unsubscribe$ = new Subject<void>();

  get Colors () {
    return Colors; 
  }

  color: Colors = Colors.moon;

  constructor(public navService: NavigationService) { }
  
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

  changeColors(color: Colors): void {
    this.color = color;
  }

  cycleColor(): void {
    switch(this.color) { 
      case Colors.sun: {
        this.color = Colors.moon;
        break; 
      }
      case Colors.moon: {
        this.color = Colors.colorful;
        break; 
      }
      case Colors.colorful: {
        this.color = Colors.sun;
        break; 
      }
      default: { 
        this.color = Colors.moon;
        break; 
      }
    }
  }
}
