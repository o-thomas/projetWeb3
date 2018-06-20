import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
import { ConsoleService, } from '../console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  filterByYear = "";
  filterByConstructor = ""


  consoles: any
  getConsole: any;
  constructor(private _consoleService: ConsoleService, private _router: Router) { }



  ngOnInit() {
    if ("token" in localStorage) {



    } else {
      this._router.navigate(['login'])
    }
    this.getUserConsole()
  }

  getUserConsole() {
    this._consoleService.getGameByName(localStorage.getItem('token'))

      .subscribe(
        res => { this.consoles = res; console.log(res) },
        err => console.log(err)
      )


  }
  getConsoleByYearConstructor() {
    localStorage.setItem("year", this.filterByYear)
    localStorage.setItem("constructor", this.filterByConstructor)
    this._consoleService.getConsoleByFilter(localStorage.getItem('token'), localStorage.getItem("year"), localStorage.getItem("constructor"))

      .subscribe(
        res => { this.consoles = res; console.log(res) },
        err => console.log(err)
      )


  }
  select(machine) {
    localStorage.setItem("consoleId", machine)
    this._router.navigate(['consoleDetail'])
  }




}
