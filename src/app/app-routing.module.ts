import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryMenusComponent } from './brewery-menus/brewery-menus.component';
import { BreweryContactoComponent } from './brewery-contacto/brewery-contacto.component';

const routes: Routes = [
  {path: '', redirectTo:'menus',pathMatch:'full'},
  {path:'menus', component: BreweryMenusComponent},
  {path:'contacto', component: BreweryContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
