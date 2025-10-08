import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Links } from 'src/app/forms/view';
import { NavigationService } from 'src/app/services/navigation.service';
import { PdfGeneratorService } from 'src/app/services/pdf-generator.service';
import { fadeIn, scaleIn, slideInLeft, slideInRight } from 'src/app/animations/animations';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    animations: [fadeIn, scaleIn, slideInLeft, slideInRight],
    standalone: false
})
export class ResumeComponent implements AfterViewInit, OnDestroy {
  @Input() link: Links;
  @Input() navService: NavigationService;
  @ViewChild('main') elementRef: ElementRef;
  intersectionObserver: IntersectionObserver;

  constructor(private pdfGeneratorService: PdfGeneratorService) {}

  // Collapsibles
  displayMoreEd = false;
  moreEdSectionsShown = 0;
  displayMoreJobs = false;
  moreJobsSectionsShown = 0;
  displayMoreEC = false;
  moreECSectionsShown = 0;
  displayMoreCapitalOne = false;
  moreCapitalOneSectionsShown = 0;


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

  toggleDisplayMoreCapitalOne(): void {
    this.displayMoreCapitalOne = true;
    this.moreCapitalOneSectionsShown += 1;
  }

  toggleDisplayNoMoreCapitalOne(): void {
    this.displayMoreCapitalOne = false;
    this.moreCapitalOneSectionsShown = 0;
  }

  downloadResume(): void {
    this.pdfGeneratorService.generateResumePDF();
  }
}
