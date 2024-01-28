import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Services/Api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
constructor (
  private route:ActivatedRoute,
  private PrdApiServ:ApiService
  ){
  let id = this.route.snapshot.params["id"];
    this.PrdApiServ.GetProductByID(id).subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
}





}
