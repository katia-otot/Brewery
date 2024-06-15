import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Menu } from './menu-list/Menu';
const URL = 'https://63716d2f025414c637f7efe3.mockapi.io/api/menu';
@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(private http : HttpClient) { }

  public getAll(): Observable<Menu[]>{
   return this.http.get<Menu[]>(URL)
    .pipe(
      tap((menu: Menu[]) => menu.forEach(menu => menu.cantidad = 0))
      );
  }
}
