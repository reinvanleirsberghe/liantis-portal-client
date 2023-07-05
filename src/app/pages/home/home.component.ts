import { Component } from '@angular/core';

@Component({
  selector: 'portal-client1-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  open = false;

  constructor() {}

  toggleDrawer() {
    this.open = !this.open;
  }

  onModalClosed(event: Event) {
    this.open = false;
  }
}
