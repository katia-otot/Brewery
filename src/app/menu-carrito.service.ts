import { Injectable } from '@angular/core';
import { Menu } from './menu-list/Menu';
import { BehaviorSubject } from 'rxjs';
import { MenuDataService } from './menu-data.service';

@Injectable({
  providedIn: 'root'
})
export class MenuCarritoService {
  
  private _carritoLista: Menu[] = [];
  carritoLista: BehaviorSubject<Menu[]> = new BehaviorSubject(this._carritoLista);

  constructor(private menuDataService: MenuDataService) { }

  addToCarrito(menu: Menu) {
    let item: Menu | undefined = this._carritoLista.find(v1 => v1.nombre == menu.nombre);
    if(!item){
      this._carritoLista.push({...menu});
    }else{
      item.cantidad += menu.cantidad;
    }
    this.carritoLista.next(this._carritoLista);
  }

  removeFromCarrito(menu: Menu): void {
    let item = this._carritoLista.find(m => m.nombre === menu.nombre);
    if (item) {
      item.cantidad--;
      if (item.cantidad <= 0) {
        this._carritoLista = this._carritoLista.filter(m => m.nombre !== menu.nombre);
      }
      this.carritoLista.next(this._carritoLista);
    }

    // Reponer stock en el menú
    this.reponerStock(menu);
  }

  reponerStock(menu: Menu): void {
    this.menuDataService.updateStock(menu, 1);
  }
}
