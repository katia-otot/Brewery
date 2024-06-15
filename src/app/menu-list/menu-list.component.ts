import { Component } from '@angular/core';
import { Menu } from './Menu';
import { MenuCarritoService } from '../menu-carrito.service';
import { Observable } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  menus: Menu[] = [];

  carritoLista$: Observable<Menu[]>;
  
  constructor(
    private carritoService: MenuCarritoService,
    private menuDataService: MenuDataService){
    this.carritoLista$ = carritoService.carritoLista.asObservable();
  }
  ngOnInit(): void {
    // Carga los menús y luego los ordena
    this.menuDataService.getAll().subscribe((menus: Menu[]) => {
      this.menus = menus;
      this.sortMenus();  // Llama a sortMenus después de que los menús se han cargado
    });
  }
  
  addToCarrito(menu: Menu):void{
    this.carritoService.addToCarrito(menu);
    menu.cantidad = 0;
  }

  getStock(menu: Menu): number {
    let stock = menu.stock;
    this.carritoLista$.subscribe(carrito => {
      const item = carrito.find(p => p.nombre === menu.nombre);
      if (item) {
        stock -= item.cantidad;
      }
    });
    return stock;
  }

  sortMenus(): void {
    this.menus.sort((a,b) => {
      return this.getOrdenByTipo(a.tipo) - this.getOrdenByTipo(b.tipo);
    })
  }

  getOrdenByTipo(tipo: string) {
    if(tipo == 'p') return 1;
    if(tipo == 'b') return 2;
    if(tipo == 'po') return 3;
    return -1;
  }

  getHeader(tipo: 'p' | 'b' | 'po'): string {
    switch(tipo) {
      case 'p': return 'Pizzas';
      case 'b': return 'Bebidas';
      case 'po': return 'Postres';
      default: return '';
    }
  }
}
