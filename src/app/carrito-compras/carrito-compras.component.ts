import { Component } from '@angular/core';
import { MenuCarritoService } from '../menu-carrito.service';
import { Menu } from '../menu-list/Menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {

  carritoLista$: Observable<Menu[] | undefined>;

  constructor(private carrito: MenuCarritoService){
   this.carritoLista$ = carrito.carritoLista.asObservable();
  }
}
