import { Component } from '@angular/core';
import { ApiService } from '../../Services/Api.service';
import { IRegisterUser } from '../../DataTypes/user';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  regForm!: FormGroup;
  user!: IRegisterUser;
  constructor(
    private AuthApiServ: ApiService,
    private router: Router,
    private Builder: FormBuilder
  ) {
    // this.user = new FormData();
    // name = new FormControl('')
    this.regForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+@\S+\.\S+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm
        ),
      ]),
    });

    // this.regForm = this.Builder.group({
    //   name: ['', [Validators.required]],
    //   phone: ['', [Validators.required]],
    //   email: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.pattern(
    //         '^(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^wds:])([^s]){8,16}$'
    //       ),
    //     ],
    //   ],
    //   password: ['', [Validators.required]],
    // });
  }

  Send() {
    this.AuthApiServ.Register(this.regForm.value).subscribe({
      next: (responce) => {
        if (responce.success == true) {
          alert(responce.message);
          this.router.navigateByUrl('/login');
        } else {
          alert(responce.message);
        }
      },
    });
  }
}
