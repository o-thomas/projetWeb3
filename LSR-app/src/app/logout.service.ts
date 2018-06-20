import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class LogoutService {

  constructor(private http: HttpClient) { }

}
