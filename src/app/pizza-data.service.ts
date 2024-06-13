import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pizza } from './pizza-list/Pizza';
const URL = 'https://63716d2f025414c637f7efe3.mockapi.io/api/pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {

  constructor(private http : HttpClient) { }

  public getAll(): Observable<Pizza[]>{
   return this.http.get<Pizza[]>(URL)
    .pipe(
      tap((pizza: Pizza[]) => pizza.forEach(pizza => pizza.cantidad = 0))
      );
  }
}
