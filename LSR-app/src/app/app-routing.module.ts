import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ConsoleComponent } from './console/console.component'
import { AddConsoleComponent } from './add-console/add-console.component'
import { ConsoleDetailComponent } from './console-detail/console-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'nav',  component: NavComponent, },
  { path: 'home', component: HomeComponent, },
  { path:'login', component: LoginComponent },
  {path:'games', component: GamesComponent},
  {path: 'add-game',component:AddGameComponent},
  {path: 'parametre', component:ParametreComponent},
  {path: 'game-detail',component:GameDetailComponent},
  {path: 'console',component:ConsoleComponent},
  {path: 'addconsole',component:AddConsoleComponent},
  { path: 'consoleDetail',component:ConsoleDetailComponent }
  
];


@NgModule({
  exports: [ RouterModule ],

  imports: [
    CommonModule, RouterModule.forRoot(routes) 
  ],
  declarations: []
}
)
export class AppRoutingModule { }
