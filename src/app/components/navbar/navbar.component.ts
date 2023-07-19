import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;
  hamburgerMenu = false;

  onClick(){
    this.isOpen = true;
  }

  menu() {
    this.hamburgerMenu = true;
  }
}
