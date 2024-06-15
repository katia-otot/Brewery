import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

import { FormsModule } from '@angular/forms';
import { BreweryContactoComponent } from './brewery-contacto/brewery-contacto.component';
import { BreweryMenusComponent } from './brewery-menus/brewery-menus.component';
import { MasInfoComponent } from './mas-info/mas-info.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    CarritoComprasComponent,
    BreweryContactoComponent,
    BreweryMenusComponent,
    MasInfoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
