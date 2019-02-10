import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerType, ICustomer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { CounterService } from '../counter.service';
import { MessageService } from '../message.service';

//ng generate component customer-browser

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

@ViewChild('details') detailsComponent: CustomerDetailsComponent;

  customers: ICustomer[];
  
  customer: ICustomer;;
  
  constructor(
    private customerService: CustomerService,
    private counterService: CounterService,
    private messageService: MessageService) {
     }

  ngOnInit() {
    this.refresh();
    this.counterService.increase();
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

  delete(){
    this.customerService.deleteCustomer(this.customer).subscribe(
      () =>{ 
        this.messageService.success("Udało się usunąć klienta");
        this.refresh();
      }//,
      // error => { //zapewnione globalnie, error-handling.interceptor
      //   console.log(error);
      //   this.messageService.error("Błąd w połączeniu z serwerem");
      // }
    );
  }

  private refresh() {
    this.customerService.getCustomers().subscribe(
      result => {
      console.log(result);
      this.customers = result;
      this.customer = this.customers[0];
      this.messageService.success("Pobrano wszystkich klientów");
     }//,
    // error => { //zapewnione globalnie, error-handling.interceptor
    //   console.log(error);
    //   this.messageService.error("Nie udało się pobrać klientów");
    // }

    );
  }

}
