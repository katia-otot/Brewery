import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryPizzasComponent } from './brewery-pizzas/brewery-pizzas.component';
import { BreweryContactoComponent } from './brewery-contacto/brewery-contacto.component';

const routes: Routes = [
  {path: '', redirectTo:'pizzas',pathMatch:'full'},
  {path:'pizzas', component: BreweryPizzasComponent},
  {path:'contacto', component: BreweryContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
