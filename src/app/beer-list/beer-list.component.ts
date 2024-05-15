import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  pizzas: any[] = [
   { "nombre": "Napolitana",
    "tipo" : "Vegetarania",
    "precio" : "2343", 
    "imagen" : "assets/img/napolitana.jpg"},
    { "nombre": "Cuatro quesos",
    "tipo" : "Vegetarania",
    "precio" : "4000", 
    "imagen" : "assets/img/cuatro-quesos.jpg"},
    { "nombre": "Margarita",
    "tipo" : "Vegetarania",
    "precio" : "4000", 
    "imagen" : "assets/img/margarita.jpg"},
    { "nombre": "Fugazzeta",
    "tipo" : "Vegetarania",
    "precio" : "4000", 
    "imagen" : "assets/img/fugazzeta.jpg"},
    { "nombre": "Calabresa",
    "tipo" : "",
    "precio" : "4000", 
    "imagen" : "assets/img/calabresa.jpg"},
    { "nombre": "Verduras del campo",
    "tipo" : "Vegana",
    "precio" : "4000", 
    "imagen" : "assets/img/verduras.jpg"}

  ]
}
