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
   // "oferta" : "true",
  },
    { "nombre": "Cuatro quesos",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/cuatro-quesos.jpg",
   // "oferta" : "false",
  },
    { "nombre": "Margarita",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 0,
    "imagen" : "assets/img/margarita.jpg",
   // "oferta" : "false",
  },
    
    { "nombre": "Fugazzeta",
    "tipo" : "Vegetarania",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/fugazzeta.jpg", 
   // "oferta" : "false",
  },
    { "nombre": "Calabresa",
    "tipo" : "",
    "precio" : 4000, 
    "stock" : 5,
    "imagen" : "assets/img/calabresa.jpg",
   // "oferta" : "false",
  },
    { "nombre": "Verduras del campo",
    "tipo" : "Vegana",
    "precio" : 4000, 
    "stock" : 0,
    "imagen" : "assets/img/verduras.jpg",
   // "oferta" : "false",
  }

  ]
}
