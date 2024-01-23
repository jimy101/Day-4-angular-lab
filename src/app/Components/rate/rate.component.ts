import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {
@Input() val:number=0
@Output() event:EventEmitter<string>= new EventEmitter<string>()

input(value:string){
  // console.log(value);
  this.event.emit(value)
}
}
