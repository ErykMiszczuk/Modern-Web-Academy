import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
