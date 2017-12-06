import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  showTitle: boolean;
  arrayOfItems: Array<any>;
  constructor() {
    this.title = `Test`;
    this.showTitle = true;
    this.arrayOfItems = ['asd', 'qwe', 'zxc', '123'];
  }

  changeTitle(): void {
    this.title = Math.random().toString();
  }

  toggleTitle(): void {
    this.showTitle = !this.showTitle;
  }
}
