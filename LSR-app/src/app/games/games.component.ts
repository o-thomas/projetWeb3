import { Component, OnInit } from '@angular/core';
import { GameService, } from '../game.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  token = {
    value: localStorage.getItem("token")
  }
  filterByConsole = "";
  filterByName = ""


  games: any
  getGame: any;
  constructor(private _gameService: GameService, private _router: Router) { }

  ngOnInit() {
    if ("token" in localStorage) {



    } else {
      this._router.navigate(['login'])
    }
    this.getUserGames()

  }




  getUserGames() {
    this._gameService.getGameByName(localStorage.getItem('token'))

      .subscribe(
        res => { this.games = res; console.log(res) },
        err => console.log(err)
      )
    console.log(this.token.value)

  }
  getGameByConsoleName() {
    localStorage.setItem("console", this.filterByConsole)
    localStorage.setItem("name", this.filterByName)
    this._gameService.getGameByFilter(localStorage.getItem('token'), localStorage.getItem("console"), localStorage.getItem("name"))

      .subscribe(
        res => {
          this.games = res; console.log(res)

        },
        err => console.log(err)
      )
    console.log(this.token.value)

  }
  select(games) {
    localStorage.setItem("gameId", games)
    this._router.navigate(['game-detail'])
  }
}




