import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  addGameData = {
    userId: ""
  }
  constructor(private gameService: GameService, private _router: Router) { }

  ngOnInit() {
    if ("token" in localStorage) {


    } else {
      this._router.navigate(['login'])
    }
  }

  addGame() {
    this.addGameData.userId = localStorage.getItem("token")
    this.gameService.addGame(this.addGameData, localStorage.getItem("token"))

      .subscribe(
        res => {

          this._router.navigate(['/games'])

        },

        err => console.log(err)

      )
  }

}
