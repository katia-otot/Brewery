import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../pizza-list/Pizza';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input() cantidad!: number;
  @Input() max! : number;

  @Output () cantidadChange : EventEmitter<number> = new EventEmitter<number>();
   
  upCantidad() :void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  downCantidad() :void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  validarCantidad($event: any): void{
    const newCantidad = parseInt($event.target.value, 10);
    if (isNaN(newCantidad) || newCantidad < 0) {
      this.cantidad = 0;
    } else if (newCantidad > this.max) {
      this.cantidad = this.max;
    } else {
      this.cantidad = newCantidad;
    }
    this.cantidadChange.emit(this.cantidad);
  }
}
