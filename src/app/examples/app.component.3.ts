import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [style.color]="nameColor" [class.isActive] = "isActive">{{ name.toUpperCase() }}<h1>
    <img [src]="photoUrl" /> <br/>

    <button (click)="changeIsActive()" type="button">
      Przełącz podreślenie
    </button>
    <br/>
    <button (click)="changeIsActive()" type="button">
      Przełącz podreślenie
    </button>
    <br/>
    <button (click)="changeColor()" type="button">
      Zmien kolor
    </button>

  `,
  styles: [
    '.isActive { text-decoration: underline; }'
  ]
})
export class AppComponent {
  name: string = "Jan Kowalski";
  nameColor: string = "blue";
  photoUrl: string = "assets/images/customer.png";
  isActive: boolean = false;

  constructor(){
  }

  changeIsActive(){
    this.isActive = !this.isActive;
  }

  changeColor(){
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
  }
}
