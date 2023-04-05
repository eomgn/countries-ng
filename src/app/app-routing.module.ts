import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MapsComponent } from './features/maps/maps.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},

  {path: 'maps/:name', component: MapsComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }