import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'





@Injectable()
export class BadgeService {
    private _badgeUrl = "http://localhost:3000/api/badges";
    constructor(private http: HttpClient,) { }
 

    getBadgeByName(name) {
      return this.http.get(this._badgeUrl, name);
    }

}
