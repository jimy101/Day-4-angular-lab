import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginUser } from '../../DataTypes/user';
import { ApiService } from '../../Services/Api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: ILoginUser
  constructor(private router: Router, private apiServ: ApiService) {
    this.user = { email: "", password: '' }
  }
  Send() {
    this.apiServ.Login(this.user).subscribe({
      next: (responce) => {
        if (responce.success) {
          alert(responce.message)
          console.log(responce.data);
          
          this.router.navigateByUrl("/home")

        } else {
          alert(responce.message)
        }
      }
    })

  }

}
