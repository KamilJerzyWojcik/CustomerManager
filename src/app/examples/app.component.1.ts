import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name.toUpperCase() }}<h1>
    {{1 + 2}}
  `,
  styles: [
  ]
})
export class AppComponent {
  name: string = "Jan Kowalski";

  constructor(){
    setTimeout(() => {
      this.name = "Wojciech";
    }, 3000);
  }
}
