import { Component } from '@angular/core';
import { MenuCarritoService } from '../menu-carrito.service';
import { Menu } from '../menu-list/Menu';
import { Observable, of } from 'rxjs';
import { PagarComponent } from '../pagar/pagar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {

  carritoLista$: Observable<Menu[]> = new Observable<Menu[]>();;
  totalGeneral: number = 0;

  ngOnInit(): void {
    this.carritoLista$.subscribe(items => {
      if (items) {
        this.totalGeneral = this.getTotalGeneral(items);
      } else {
        this.totalGeneral = 0;
      }
    });
  }

  constructor(private carrito: MenuCarritoService, private dialog: MatDialog){
   this.carritoLista$ = carrito.carritoLista.asObservable();
  }

  getTotalPrecio(item: Menu): number {
    return item.precio * item.cantidad;
  }

  getTotalGeneral(items: Menu[]): number {
    return items.reduce((total, item) => total + this.getTotalPrecio(item), 0);
  }

  removeFromCarrito(menu: Menu): void {
    this.carrito.removeFromCarrito(menu);
  }

  irAPagar(): void {
    this.dialog.open(PagarComponent);
  }
}
