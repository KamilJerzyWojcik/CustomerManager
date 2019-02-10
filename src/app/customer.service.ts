import { Injectable, Inject } from '@angular/core';
import { ICustomer, Config, CONFIG } from './model'
import { CounterService } from './counter.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

//ng generate service customer

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private counterService: CounterService, 
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config) { }

  getCustomers(): Observable<ICustomer[]>{
    this.counterService.increase();
    return this.httpClient.get<ICustomer[]>(`${this.config.apiUrl}/Customer`)
    .pipe(
      map(customers => customers.slice(0, this.config.customerLimit))
    );
  }

  createCustomer(customer: ICustomer){
   return this.httpClient.post(`${this.config.apiUrl}/Customer`, customer);
  }

  deleteCustomer(customer: ICustomer){
    return this.httpClient.delete(`${this.config.apiUrl}/Customer/${customer.id}`);

  }
}
