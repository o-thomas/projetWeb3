import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ConsoleService {
  private _consolesUrl = "http://localhost:3000/api/consoles";
  private _consolesFilter = "http://localhost:3000/api/consoleFilter";
  private _addConsolesUrl = "http://localhost:3000/api/addconsole";
  private _consolesProfilUrl ="http://localhost:3000/api/consoleprofil"
  private _consolesDetailUrl ="http://localhost:3000/api/consoleDetail"
  private _putConsoleUrl = "http://localhost:3000/api/updateConsole"
  private _deleteUrl='http://localhost:3000/api/deleteConsole';

  constructor(private http: HttpClient) { }
  
  getGameByName(name) {
    console.log(name);
    let params = new HttpParams().set('token', name)
     
    return this.http.get<any>(this._consolesUrl,{params})
  }

  addConsole(game,name) {
    return this.http.post(this._addConsolesUrl, game,name);
  }

  getConsolesByProfil(name) {
    let params = new HttpParams().set('token', name)
    return this.http.get(this._consolesProfilUrl, {params});
  }
  getConsoleById(consoleId) {
    let params = new HttpParams().set('consoleId',consoleId)
    
    return this.http.get(this._consolesDetailUrl, {params});
  }



  getConsoleByFilter(user,year,constructor){
    let params = new HttpParams().set('year', year).set("constructor",constructor).set('id',user)
    return this.http.get(this._consolesFilter, {params});
  }

  putConsole(updatedConsole){
    let params = new HttpParams().set('id', localStorage.getItem('consoleId'))
       console.log(updatedConsole)
    return this.http.put(this._putConsoleUrl,updatedConsole,{params});
  }
  deleteConsole(id){
    let params = new HttpParams().set('remove', id)
    return this.http.delete(this._deleteUrl, {params});
  }
  

}
