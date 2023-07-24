import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageBack',
  templateUrl: './pageBack.component.html',
  styleUrls: ['./pageBack.component.css']
})
export class NavbarComponent {
  @Input() pageBack?: String;

  constructor(private router: Router) {
  }

  navigateBack() {
    this.router.navigate([this.pageBack]);
  }
}
