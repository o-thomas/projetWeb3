import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../parametre.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  updateUser = {

  }
  constructor(private _parametreservice: ParametreService) { }

  ngOnInit() {
  }
  remove() {
    this._parametreservice.deleteAccount(localStorage.getItem('token'))
      .subscribe(
        res => console.log(res),
        err => console.log(err),
    )
  }

  update() {
    this._parametreservice.updateAccount(this.updateUser, localStorage.getItem("token"))
      .subscribe(
        res => console.log(res),
        err => console.log(err),
    )
  }
}
