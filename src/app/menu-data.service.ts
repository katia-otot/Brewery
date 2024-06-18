import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Menu } from './menu-list/Menu';
const URL = 'https://63716d2f025414c637f7efe3.mockapi.io/api/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  
  private _menuList: Menu[] = [];
  menuList: BehaviorSubject<Menu[]> = new BehaviorSubject(this._menuList);

  constructor(private http : HttpClient) { 
    this.loadMenus();
  }

  private loadMenus(): void {
    this.getAll().subscribe(menus => {
      this._menuList = menus;
      this.menuList.next(this._menuList);
    });
  }

  public getAll(): Observable<Menu[]>{
   return this.http.get<Menu[]>(URL)
    .pipe(
      tap((menu: Menu[]) => menu.forEach(menu => menu.cantidad = 0))
      );
  }

  public getMenuList(): Menu[] {
    return this._menuList;
  }

  public updateStock(menu: Menu, change: number): void {
    let item = this._menuList.find(m => m.nombre === menu.nombre);
    if (item) {
      item.stock += change;
      this.menuList.next(this._menuList);
    }
  }
}
