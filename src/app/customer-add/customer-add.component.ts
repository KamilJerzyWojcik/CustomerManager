import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerType } from '../model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  name: string;
  age: number;
  type: CustomerType;

  CustomerType = CustomerType;

  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit() {
  }

  add(): void{
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: "",
      description: "",
      categories: [],
      address: {
        city: "",
        houseNumber: 0,
        street: ""
      }
    }).subscribe(
      () => this.messageService.success("Dodano nowego klienta")//,
     //error => { //zapewnione globalnie, error-handling.interceptor 
        //console.log(error);
        //this.messageService.error("Nie udało się dodać nowego klienta")
     // }  
      
    );
  }

}
