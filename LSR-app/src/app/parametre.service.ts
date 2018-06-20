import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable()
export class ParametreService {


  private _deleteUrl='http://localhost:3000/api/deleteAccount';
  private _updateUrl='http://localhost:3000/api/updateUser';
  constructor(private http: HttpClient) { }


  
    deleteAccount(name){
      let params = new HttpParams().set('token', name)
      return this.http.delete(this._deleteUrl, {params});
    }
    updateAccount(obj,name){
      let params = new HttpParams().set('token', name)
     
      return this.http.put(this._updateUrl,obj,  {params});
    }
  }

