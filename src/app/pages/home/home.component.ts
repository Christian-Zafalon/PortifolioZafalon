import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'chz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('sections', { static: false }) sections?: ElementRef;
  @ViewChild('navLinks', { static: false }) navLinks?: ElementRef;

  ngAfterViewInit() {
    this.updateNavLinks();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateNavLinks();
  }

  updateNavLinks() {
    if (this.sections && this.navLinks) {
      const sections = this.sections.nativeElement.querySelectorAll('section');
      const navLinks = this.navLinks.nativeElement.querySelectorAll("header nav a");

      const top = window.scrollY;

      sections.forEach((sec: HTMLElement) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link: HTMLElement) => {
            link.classList.remove('active');
            const linkId = document.querySelector(`header nav a[href*=${id}]`);
            if (linkId) {
              linkId.classList.add('active');
            }
          });
        }
      });
    }
  }
}