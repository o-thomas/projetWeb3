import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class GameService {
  private _gamesUrl = "http://localhost:3000/api/games";
  private _gamesFilter = "http://localhost:3000/api/gameFilter";
  private _addGameUrl = "http://localhost:3000/api/addgame";
  private _gameProfilUrl = "http://localhost:3000/api/gameprofil"
  private _gameDetailUrl = "http://localhost:3000/api/gameDetail"
  private _putGameUrl = "http://localhost:3000/api/updateGame"
  private _deleteUrl = 'http://localhost:3000/api/deleteGame';

  constructor(private http: HttpClient) { }
  ;

  getGameByName(name) {
    console.log(name);
    let params = new HttpParams().set('token', name)

    return this.http.get<any>(this._gamesUrl, { params })
  }

  addGame(game, name) {
    return this.http.post(this._addGameUrl, game, name);
  }

  getGameByProfil(name) {
    let params = new HttpParams().set('token', name)
    return this.http.get(this._gameProfilUrl, { params });
  }
  getGameById(gameId) {
    let params = new HttpParams().set('gameId', gameId)

    return this.http.get(this._gameDetailUrl, { params });
  }
  getGameByFilter(user, machine, name) {
    let params = new HttpParams().set('console', machine).set("name", name).set('id', user)
    return this.http.get(this._gamesFilter, { params });
  }
  putGame(updatedGame) {
    let params = new HttpParams().set('id', localStorage.getItem('gameId'))
    console.log(updatedGame)
    return this.http.put(this._putGameUrl, updatedGame, { params });
  }
  deleteGame(id) {
    let params = new HttpParams().set('remove', id)
    return this.http.delete(this._deleteUrl, { params });
  }
}

