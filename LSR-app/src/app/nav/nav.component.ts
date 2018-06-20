import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  gogames() {
    this._router.navigate(['/games'])
  }
  goprofil() {
    this._router.navigate(['/home'])
  }
  goaddgames() {
    this._router.navigate(['/add-game'])
  }
  gobadges() {
    this._router.navigate(['/badges'])
  }
  goconsoles() {
    this._router.navigate(['/console'])
  }
  goaddconsoles() {
    this._router.navigate(['/addconsole'])
  }

  vertiMenu() {
    if (document.getElementById("verticalMenu").style.display == "unset") {
      document.getElementById("verticalMenu").style.display = "none"
    } else {
      document.getElementById("verticalMenu").style.display = "unset"
    }

  }

}

