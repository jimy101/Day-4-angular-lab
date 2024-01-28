import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../Services/Api.service';
import { IProduct } from '../../DataTypes/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Edit-Product',
  templateUrl: './Edit-Product.component.html',
  styleUrls: ['./Edit-Product.component.css'],
})
export class EditProductComponent {
  prod!: IProduct;
  form!: FormGroup;
  formData!: FormData;

  constructor(
    private builder: FormBuilder,
    private ApiServ: ApiService,
    private Route: ActivatedRoute
  ) {
    let id = Route.snapshot.params['id'];
    this.ApiServ.GetProductByID(id).subscribe({
      next: (res) => {
        console.log(res);
        this.prod = res.data;
        console.log(this.prod);
        // ////////
        this.formData = new FormData();
        //build form
        this.form = this.builder.group({
          name: this.builder.control(this.prod.name, [
            Validators.required,
            Validators.minLength(3),
          ]),
          quantity: [
            this.prod.quantity,
            [Validators.required, Validators.min(1)],
          ],
          price: [this.prod.price, [Validators.required, Validators.min(10)]],
          // colors: this.builder.array([this.builder.control('#0000FF')]),
          // imgURL:["",[Validators.required]],
          categoryName: ['test'],
          categoryID: ['1'],
          description: [
            this.prod.description,
            [Validators.required, Validators.minLength(10)],
          ],
        });
      },
    });
  }
  // ngOnInit(): void {}
  edit() {
    let id = this.Route.snapshot.params['id'];
    console.log(this.form.value);
    for (const key in this.form.controls) {
      this.formData.append(key, this.form.controls[key].value);
    }
    this.ApiServ.EditProduct(id, this.formData).subscribe({
      next: (res) => {
        console.log(res);
        if (res.success) {
          alert(res.message);
          // this.form.reset();
          // this.formData = new FormData();
          // this.router.navigateByUrl("/products")
        } else {
          alert(res.message);
        }
      },
    });
  }
}
