import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule }   from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

import { GamesComponent } from './games/games.component';

import {GameService} from './game.service';
import { AddGameComponent } from './add-game/add-game.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ParametreService } from './parametre.service';
import { GameDetailComponent } from './game-detail/game-detail.component';

import { ConsoleComponent } from './console/console.component'
import { ConsoleService } from './console.service';
import { AddConsoleComponent } from './add-console/add-console.component';
import { ConsoleDetailComponent } from './console-detail/console-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    GamesComponent,
    
    AddGameComponent,
    HeaderComponent,
    HeaderMenuComponent,
    ParametreComponent,
    GameDetailComponent,
    ConsoleComponent,
    AddConsoleComponent,
    ConsoleDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    HttpClientModule             // <-Add HttpModule
  ],
  providers: [AuthService, GameService,ParametreService,ConsoleService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
