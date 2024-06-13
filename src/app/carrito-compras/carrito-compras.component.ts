import { Component } from '@angular/core';
import { PizzaCarritoService } from '../pizza-carrito.service';
import { Pizza } from '../pizza-list/Pizza';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {

  carritoLista$: Observable<Pizza[] | undefined>;

  constructor(private carrito: PizzaCarritoService){
   this.carritoLista$ = carrito.carritoLista.asObservable();
  }
}
