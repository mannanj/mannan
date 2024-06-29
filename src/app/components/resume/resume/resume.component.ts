import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit, OnDestroy {
  @Input() link: Links;
  @Input() navService: NavigationService;
  @ViewChild('main') elementRef: ElementRef;
  intersectionObserver: IntersectionObserver;

  // Collapsibles
  displayMoreEd = false;
  moreEdSectionsShown = 0;
  displayMoreJobs = false;
  moreJobsSectionsShown = 0;
  displayMoreEC = false;
  moreECSectionsShown = 0;

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }

  ngAfterViewInit() {
    this.intersectionObserver = this.navService.makeIntersectionObsAndSetFlags(Links.resume, 0.33);
    this.intersectionObserver.observe(this.elementRef.nativeElement);
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
