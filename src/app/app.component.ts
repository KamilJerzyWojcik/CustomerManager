import { ICustomer, CustomerType } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: [
    '.isActive { text-decoration: underline; }',
    `p {font-size: 15px;}`,
    `.oddCategory {color: red}`
  ]
})
export class AppComponent {

  constructor(){ }
}
