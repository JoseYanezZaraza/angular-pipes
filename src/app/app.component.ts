import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  
  name = 'José Yáñez'
  irregularName = "JoSé maNuEl yáÑeZ ZaraZA";
  numberList = [1,2,3,4,5,6,7,8,9,0];

  PI = Math.PI;
  internationSalary = 2590
  perc = 0.234;
  hero = {
    name: "Logan",
    keyName: "Wolverine",
    age: 500,
    address: {
      street: "i dont`t know",
      houseNumber: 69
    }
  }

  newPromise = new Promise((resolve, reject) => {
    setTimeout (() => resolve('hi! i`m here!!'), 3500);
  });
  fecha = new Date();

  video = '9yBYSnSc27Y';
  activate = true;
}
