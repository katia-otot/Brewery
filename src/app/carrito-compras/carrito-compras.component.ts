import { Component } from '@angular/core';
import { PizzaCarritoService } from '../pizza-carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {
  constructor(private carrito: PizzaCarritoService){
  }
}
