import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaCarritoService {
  carritoLista: Pizza[] = [];

  constructor() { }

  addToCarrito(pizza: Pizza) {
    let item: Pizza | undefined = this.carritoLista.find(v1 => v1.nombre == pizza.nombre);
    if(!item){
      this.carritoLista.push({...pizza});
    }else{
      item.cantidad += pizza.cantidad;
    }
  }
}
