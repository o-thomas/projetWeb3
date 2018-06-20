import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'

@Injectable()
export class AuthService {
  
  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _userName = "http://localhost:3000/api/username"
  constructor(private http: HttpClient) { }

  registerUser(user) {
   return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user){
    let params = new HttpParams().set('token', user.login,)
   .set("pass",user.password)
  return this.http.get<any>(this._loginUrl,{params})
}
getUserName(user){
  let params = new HttpParams().set('token', localStorage.getItem("token"))
  return this.http.get<any>(this._userName,{params})
}

}
