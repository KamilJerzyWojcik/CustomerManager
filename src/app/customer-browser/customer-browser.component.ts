import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerType, ICustomer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

@ViewChild('details') detailsComponent: CustomerDetailsComponent;

  customers: ICustomer[] = [{
    name: "Józef Kwiatek",
    photoUrl: "assets/images/customer2.png",
    age: 34,
    description: "very important client",
    address: {
      street: "Zielona",
      houseNumber: 9,
      city: "Warszawa"
    },
    type: CustomerType.VIP,
    categories: ["zagraniczny", "mikroprzedsiębiorstwo", "duży obrót"]
  },
  {
    name: "Andrzej Jeziorak",
    photoUrl: "assets/images/customer3.png",
    age: 51,
    description: "Kluczowy klient",
    address: {
      street: "Fiołkowa",
      houseNumber: 12,
      city: "Poznań"
    },
    type: CustomerType.Premium,
    categories: ["krajowy", "przedsiębiorstwo", "średni obrót"]
  },
  {
    name: "Kazimierz Nowak",
    photoUrl: "assets/images/customer.png",
    age: 21,
    description: "Niezbyt ważny klient",
    address: {
      street: "Bagenna",
      houseNumber: 88,
      city: "Gdańsk"
    },
    type: CustomerType.Standard,
    categories: ["krajowy", "zielarstwo", "mikro obrót"]
  },
];

  customer: ICustomer = this.customers[0];
  
  constructor() { }

  ngOnInit() {
  }

  changeColor(){
    if(this.detailsComponent !== null && this.detailsComponent !== undefined)  
      this.detailsComponent.changeColor();
  }

  onShift(direction) {
    const index = this.customers.indexOf(this.customer);
    if(direction == 'left' && index > 0){
      this.customer = this.customers[index - 1];
    }
    if(direction == 'right' && index < this.customers.length - 1) {
      this.customer = this.customers[index + 1];
    }
  }

}
