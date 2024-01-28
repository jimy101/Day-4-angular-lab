import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Services/Api.service';
import { IProduct } from '../../DataTypes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  form: FormGroup;
  data: FormData;
  constructor(private builder: FormBuilder, private apiServ: ApiService,private router:Router) {
    this.data = new FormData()

    ///get one
    this.form = this.builder.group({
      name: this.builder.control("", [Validators.required, Validators.minLength(3)]),
      price: ["", [Validators.required, Validators.min(10)]],
      quantity: ["", [Validators.required, Validators.min(1)]],
      colors: this.builder.array([
        this.builder.control("#FF0000"),
        this.builder.control("#0000FF")
      ]),
      // imgURL:["",[Validators.required]],
      categoryName: ["test"],
      categoryID: ["1"],
      description: ["", [Validators.required, Validators.minLength(10)]],

    })

  }
  //form.controls["colors"].controls
  get colorArray() {
    return this.form.controls["colors"] as FormArray
  }
  addColor() {
    this.colorArray.push(this.builder.control(""))
  }
  removeColor(ind: any) {
    this.colorArray.removeAt(ind)
  }
  chooseImage(imginput: any) {
    this.data.append("imgURL", imginput.files[0])
  }
  send() {
    console.log("send");
    console.log(this.form.value);
    //call api
    for (const key in this.form.controls) {
      this.data.append(key, this.form.controls[key].value)
    }
    this.apiServ.AddProduct(this.data).subscribe({
      next: (responce) => {
        console.log(responce);
        if(responce.success){
          alert(responce.message)
          this.form.reset();
          this.data = new FormData()
          // this.router.navigateByUrl("/products")
        }
        else{
          alert(responce.message)
        }

      },
      error: (err) => {
        console.log(err);

      }
    })
  }


}
