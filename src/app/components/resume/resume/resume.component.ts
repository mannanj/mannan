import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  link: Links;
  private _unsubscribe$ = new Subject<void>();

  constructor(public navService: NavigationService) {}

  // Collapsibles
  displayMoreEd = false;
  moreEdSectionsShown = 0;
  displayMoreJobs = false;
  moreJobsSectionsShown = 0;
  displayMoreEC = false;
  moreECSectionsShown = 0;

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


  // Collapsibles
  toggleDisplayMoreEd(): void {
    this.displayMoreEd = true;
    this.moreEdSectionsShown += 1;
  }

  toggleDisplayNoMoreEd(): void {
    this.displayMoreEd = false;
    this.moreEdSectionsShown = 0;
  }

  toggleDisplayMoreJobs(): void {
    this.displayMoreJobs = true;
    this.moreJobsSectionsShown += 1;
  }

  toggleDisplayNoMoreJobs(): void {
    this.displayMoreJobs = false;
    this.moreJobsSectionsShown = 0;
  }
  
  toggleDisplayMoreEC(): void {
    this.displayMoreEC = true;
    this.moreECSectionsShown += 1;
  }

  toggleDisplayNoMoreEC(): void {
    this.displayMoreEC = false;
    this.moreECSectionsShown = 0;
  }
}
