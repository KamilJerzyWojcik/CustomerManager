import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor{
    
constructor(private messageService: MessageService){}

    intercept(
        req: import("@angular/common/http").HttpRequest<any>, 
        next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> 
    {
        console.log(req);
        return next.handle(req)
        .pipe(
            catchError( error => {
                if(error instanceof HttpErrorResponse){
                    this.messageService.error(`Błąd połączenia ${error.message}`);
                }
                return Observable.throw(error);
         }));
    }

}