import { Component } from '@angular/core';
import { Pizza } from './Pizza';
import { PizzaCarritoService } from '../pizza-carrito.service';
import { Observable } from 'rxjs';
import { PizzaDataService } from '../pizza-data.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  pizzas: Pizza[] = [];

  carritoLista$: Observable<Pizza[]>;
  
  constructor(
    private carritoService: PizzaCarritoService,
    private pizzaDataService: PizzaDataService){
    this.carritoLista$ = carritoService.carritoLista.asObservable();
  }
  ngOnInit(): void{
    this.pizzaDataService.getAll()
    .subscribe(pizzas =>this.pizzas = pizzas);
  }
  
  addToCarrito(pizza: Pizza):void{
    this.carritoService.addToCarrito(pizza);
    
    pizza.cantidad = 0;
  }

  getStock(pizza: Pizza): number {
    let stock = pizza.stock;
    this.carritoLista$.subscribe(carrito => {
      const item = carrito.find(p => p.nombre === pizza.nombre);
      if (item) {
        stock -= item.cantidad;
      }
    });
    return stock;
  }
}
