import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/Pizza';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaCarritoService {
  private _carritoLista: Pizza[] = [];
  carritoLista: BehaviorSubject<Pizza[]> = new BehaviorSubject(this._carritoLista);

  constructor() { }

  addToCarrito(pizza: Pizza) {
    let item: Pizza | undefined = this._carritoLista.find(v1 => v1.nombre == pizza.nombre);
    if(!item){
      this._carritoLista.push({...pizza});
    }else{
      item.cantidad += pizza.cantidad;
    }
    this.carritoLista.next(this._carritoLista);
  }
}
