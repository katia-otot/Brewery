import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrl: './pagar.component.scss'
})
export class PagarComponent {
constructor(public dialogRef: MatDialogRef<PagarComponent>) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}
