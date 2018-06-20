import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ConsoleService,  } from '../console.service';
@Component({
  selector: 'app-console-detail',
  templateUrl: './console-detail.component.html',
  styleUrls: ['./console-detail.component.css']
})
export class ConsoleDetailComponent implements OnInit {
  console={
  
  }
  consoleUpdated={
  
  }
  constructor(private _router:Router,private _consoleService: ConsoleService) { }

  ngOnInit() {
    this.getConsoleById()
  }
  getConsoleById(){
    this._consoleService.getConsoleById(localStorage.getItem('consoleId'))
    
    .subscribe(
      res => {
        this.console = res
     },
      err => console.log(err)
      )
  }

  updateConsole(){
    console.log(this.consoleUpdated)
     this._consoleService.putConsole(this.consoleUpdated)
     .subscribe(
       res => this._router.navigate(['console']),
       err => console.log(err),
      
     )
     
   }
   displayForm(){
   let form = document.getElementById("form")
   let card = document.getElementById("card")
   
   card.style.display="none"
   form.style.display="unset"
   }


   removeConsole(){
    this._consoleService.deleteConsole( localStorage.getItem('consoleId'))
    
      .subscribe(
        res => console.log(res),
        err => console.log(err),
    )
  }

   }


