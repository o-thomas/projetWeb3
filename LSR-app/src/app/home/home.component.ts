import { Component, OnInit } from '@angular/core';
import { GameService, } from '../game.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  games: any
  getGame: any;
  constructor(private _gameService: GameService, private _router: Router) { }


  ngOnInit() {
    this.getUserGamesProfil()
  }
  getUserGamesProfil() {
    this._gameService.getGameByProfil(localStorage.getItem("token"))
      .subscribe(
        res => { this.games = res; console.log(res) },
        err => console.log(err)
      )


  }

  select(games) {
    localStorage.setItem("gameId", games)
    this._router.navigate(['game-detail'])
  }
}
