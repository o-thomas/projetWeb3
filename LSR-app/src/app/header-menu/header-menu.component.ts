import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  user = {

  }


  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.welcome()
  }
  logout() {
    localStorage.clear()    
    this._router.navigate(['/login'])
  }
  parametre() {
    this._router.navigate(['/parametre'])
  }

  welcome() {
    this._authService.getUserName(this.user)

      .subscribe(
        res => { this.user = res; console.log(res) },
        err => console.log(err)
      )

  }
}