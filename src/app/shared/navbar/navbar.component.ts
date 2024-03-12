import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'chz-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  home: boolean = false;
  about: boolean = false;
  services: boolean = false;
  portifolio: boolean = false;
  contact: boolean = false;
  menuColapse: boolean = false;

  menuIconFunction() {
    this.menuColapse = !this.menuColapse;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    this.home = false;
    this.about = false;
    this.services = false;
    this.portifolio = false;
    this.contact = false;
    if (scrollPosition >= 0 && scrollPosition <= 822) {
      this.home = true;
    } else if (scrollPosition > 822 && scrollPosition <= 1644) {
      this.about = true;
    } else if (scrollPosition > 1644 && scrollPosition <= 2466) {
      this.services = true;
    } else if (scrollPosition > 2466 && scrollPosition <= 3288) {
      this.portifolio = true;
    } else if (scrollPosition > 3288 && scrollPosition <= 4110) {
      this.contact = true;
    }
  }
}
