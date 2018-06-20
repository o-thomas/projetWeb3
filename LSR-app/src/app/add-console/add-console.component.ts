import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../console.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-console',
  templateUrl: './add-console.component.html',
  styleUrls: ['./add-console.component.css']
})
export class AddConsoleComponent implements OnInit {
  addConsoleData = {
    userId :""
  }
  constructor(private consoleService: ConsoleService, private _router: Router) { }

  ngOnInit() {
    if("token" in localStorage ){
      

    }else{
      this._router.navigate(['login'])
    }
  }
  addConsole() {
    this.addConsoleData.userId = localStorage.getItem("token")
     
      this.consoleService.addConsole(this.addConsoleData,localStorage.getItem("token"))
     
       
      .subscribe(
        res => this._router.navigate(['/console']) ,
          
        
        err => console.log(err)
      
      )}
  
    }


