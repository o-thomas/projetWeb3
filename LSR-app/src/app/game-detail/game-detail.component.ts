import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GameService, } from '../game.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game = {

  }
  gameUpdated = {

  }
  constructor(private _router: Router, private _gameService: GameService) { }

  ngOnInit() {
    this.getGameById()


  }
  getGameById() {
    this._gameService.getGameById(localStorage.getItem('gameId'))

      .subscribe(
        res => {
          this.game = res
        },
        err => console.log(err)
      )
  }

  updateGame() {
    console.log(this.gameUpdated)
    this._gameService.putGame(this.gameUpdated)
      .subscribe(
        res => console.log(res),
        err => console.log(err),

    )
    window.location.reload()
  }



  removeGame() {
    this._gameService.deleteGame(localStorage.getItem('gameId'))
      .subscribe(
        res => console.log(res),
        err => console.log(err),
    )
  }

  displayForm() {
    let form = document.getElementById("form")
    let card = document.getElementById("card")

    card.style.display = "none"
    form.style.display = "unset"
  }
}



