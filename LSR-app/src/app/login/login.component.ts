import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerlogin = ""
  registerUserData = {}
  constructor(private _auth: AuthService, private _router: Router) { }
  loginUserData = {}

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res),
            localStorage.setItem('token', res._id)
            localStorage.setItem("pass", res.password)
          this._router.navigate(['home'])
        },
        err => console.log(err)
      )


  }
  loginUser() {

    this._auth.loginUser(this.loginUserData)

      .subscribe(
        res => {

          console.log(res),
            localStorage.setItem('token', res._id)
          localStorage.setItem("pass", res.password)
          console.log(res.login)
          console.log(res._id)

          this._router.navigate(['/home'])
        },
        err => console.log(err)
      )
  }











}
export class AppComponent {


}