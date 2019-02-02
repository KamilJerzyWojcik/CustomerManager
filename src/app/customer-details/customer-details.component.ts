import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnDestroy, 
  OnChanges,
  SimpleChanges } from '@angular/core';
import { CustomerType, ICustomer } from '../model';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() customer: ICustomer;
  @Output() shift: EventEmitter<string> = new EventEmitter<string>();

  nameColor: string = "blue";
  isActive: boolean = false;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: number;


  CustomerType = CustomerType;


  constructor() {
    setTimeout(() => {
      this.customer.categories.push("branza budowlana");
    }, 3000)

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.customer.firstChange){
      console.log(`change from: ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  ngOnInit() {
    console.log("powstanie komponentu details");

    //  setInterval(() => {
    //   this.counter++;
    // }, 1000);

  }

  ngOnDestroy() {
    console.log("usuniecie komponentu");
  }

  
  changeColor() {
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }
}
