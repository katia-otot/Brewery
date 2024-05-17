import { Component } from '@angular/core';
import { Pizza } from './Pizza';

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
   // "oferta" : "true",
  },
    { "nombre": "Cuatro quesos",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/cuatro-quesos.jpg",
    "cantidad" : 0,
   // "oferta" : "false",
  },
    { "nombre": "Margarita",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 0,
    "imagen" : "assets/img/margarita.jpg",
    "cantidad" : 0,
   // "oferta" : "false",
  },
    
    { "nombre": "Fugazzeta",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/fugazzeta.jpg", 
    "cantidad" : 0,
   // "oferta" : "false",
  },
    { "nombre": "Calabresa",
    "tipo" : "",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/calabresa.jpg",
    "cantidad" : 0,
   // "oferta" : "false",
  },
    { "nombre": "Verduras del campo",
    "tipo" : "Vegana",
    "precio" : 4000, 
    "stock" : 0,
    "imagen" : "assets/img/verduras.jpg",
    "cantidad" : 0,
   // "oferta" : "false",
  }

  ];

  upCantidad(pizza: Pizza) :void{
    if(pizza.cantidad < pizza.stock){
      pizza.cantidad++;
    }
   
  }
  downCantidad(pizza: Pizza) :void{
    if(pizza.cantidad>0){
      pizza.cantidad--;
    }
  }

  validarCantidad($event: any, pizza: Pizza): void{
    if ($event.key === 'Enter') {
      const newCantidad = parseInt($event.target.value, 10);
      if (isNaN(newCantidad) || newCantidad < 0) {
        pizza.cantidad = 0;
      } else if (newCantidad > pizza.stock) {
        pizza.cantidad = pizza.stock;
      } else {
        pizza.cantidad = newCantidad;
      }
    }
  }
}
