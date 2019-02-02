import * as fromCustomerModule from "./CustomerModule";
import {Observable } from'rxjs';

let cust11 = new fromCustomerModule.Customer11("Jan", 123, "Agnieszka");

console.log(fromCustomerModule.persons);
console.log(cust11.welcome());
fromCustomerModule.getIds();