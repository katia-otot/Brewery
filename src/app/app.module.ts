import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

import { FormsModule } from '@angular/forms';
import { BreweryContactoComponent } from './brewery-contacto/brewery-contacto.component';
import { BreweryPizzasComponent } from './brewery-pizzas/brewery-pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    CarritoComprasComponent,
    BreweryContactoComponent,
    BreweryPizzasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
