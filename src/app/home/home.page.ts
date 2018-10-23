import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: string;
  terapeuta: string;
  items: string[];

  constructor() {
    this.user = 'Mundo';
    this.terapeuta = 'Terapeuta';
    this.items = [
      'item',
      'item2',
    ];
  }
}
