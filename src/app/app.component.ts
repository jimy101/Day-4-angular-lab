import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './DataTypes/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mearn-app';
  Name = '';
  age=18

  p :Product[] =[ 
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    new Product("10010","HP",90000,"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"),
    
  ]



  clicked(val:string){
    console.log(val);
    this.Name = val
    
  }
}
