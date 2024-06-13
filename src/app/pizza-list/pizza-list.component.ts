import { Component } from '@angular/core';
import { Pizza } from './Pizza';
import { PizzaCarritoService } from '../pizza-carrito.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.scss'
})
export class PizzaListComponent {
  pizzas: Pizza[] = [
   { "nombre": "Napolitana",
    "tipo" : "Vegetarania",
    "precio" : 2343, 
    "stock" : 5,
    "imagen" : "assets/img/napolitana.jpg",
    "cantidad" : 0,
   "oferta" : true,
  },
    { "nombre": "Cuatro quesos",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/cuatro-quesos.jpg",
    "cantidad" : 0,
   "oferta" : false,
  },
    { "nombre": "Margarita",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 0,
    "imagen" : "assets/img/margarita.jpg",
    "cantidad" : 0,
   "oferta" : false,
  },
    
    { "nombre": "Fugazzeta",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/fugazzeta.jpg", 
    "cantidad" : 0,
    "oferta" : false,
  },
    { "nombre": "Calabresa",
    "tipo" : "",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/calabresa.jpg",
    "cantidad" : 0,
  "oferta" : false,
  },
    { "nombre": "Verduras del campo",
    "tipo" : "Vegana",
    "precio" : 4000, 
    "stock" : 0,
    "imagen" : "assets/img/verduras.jpg",
    "cantidad" : 0,
   "oferta" : false,
  }

  ];

  carritoLista$: Observable<Pizza[]>;
  
  constructor(private carritoService: PizzaCarritoService){
    this.carritoLista$ = carritoService.carritoLista.asObservable();
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
