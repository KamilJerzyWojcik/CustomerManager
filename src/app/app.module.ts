import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { CounterService } from './counter.service';
import { Config, CONFIG } from './model';
import { MessageService } from './message.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerAddComponent } from './customer-add/customer-add.component'
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

const config: Config = {
  customerLimit: 20,
  apiUrl: 'https://localhost:5001/api'
};

@NgModule({
  declarations: [//dyrektywy
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CustomerAddComponent
  ],
  imports: [//moduły
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()//mozliwosc odwolywania sie do ToastrService
  ],
  providers: [//serwisy
    //CustomerService
    //usevalue - już zainicjowana istancja
    //useFactory - podanie funkcji tworzącej instancje
    { provide: CustomerService, useClass: CustomerService },
    CounterService,//lukier
    { provide: CONFIG, useValue: config },//stała z tokenem
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
