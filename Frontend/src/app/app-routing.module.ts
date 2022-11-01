import { BtsComponent } from './bts/bts.component';
import { VeilleComponent } from './veille/veille.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},

  { path: 'home', component:HomeComponent, pathMatch: 'full' }, // Laisser début de la liste
  { path: 'parcours', component:ParcoursComponent, pathMatch: 'full' }, // Laisser début de la liste
  { path: 'veille', component:VeilleComponent, pathMatch: 'full' }, // Laisser début de la liste
  { path: 'bts', component:BtsComponent, pathMatch: 'full' }, // Laisser début de la liste





  { path: '**', component: AppComponent, pathMatch: 'full' }, // Laisser a la fin de la liste
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
