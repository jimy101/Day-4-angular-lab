import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginUser, IStoredUser } from '../../DataTypes/user';
import { ApiService } from '../../Services/Api.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: ILoginUser
  constructor(private router: Router, private apiServ: ApiService,private authServ:AuthService) {
    this.user = { email: "", password: '' }
  }
  Send() {
    this.apiServ.Login(this.user).subscribe({
      next: (responce) => {
        if (responce.success) {
          alert(responce.message)
          console.log(responce.data);
          let data : IStoredUser = {
            token : responce.data.token,
            name : responce.data.user.name,
            email : responce.data.user.email,
            phoneNumber : responce.data.user.phoneNumber,

          }
          this.authServ.newUserLoggedIn(data)
          this.router.navigateByUrl("/home")

        } else {
          alert(responce.message)
        }
      }
    })

  }

}
