import { Injectable } from '@angular/core';
import { Menu } from './menu-list/Menu';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuCarritoService {
  private _carritoLista: Menu[] = [];
  carritoLista: BehaviorSubject<Menu[]> = new BehaviorSubject(this._carritoLista);

  constructor() { }

  addToCarrito(menu: Menu) {
    let item: Menu | undefined = this._carritoLista.find(v1 => v1.nombre == menu.nombre);
    if(!item){
      this._carritoLista.push({...menu});
    }else{
      item.cantidad += menu.cantidad;
    }
    this.carritoLista.next(this._carritoLista);
  }
}
