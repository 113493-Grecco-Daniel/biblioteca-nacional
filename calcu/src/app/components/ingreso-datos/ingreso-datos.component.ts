import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent {
  NumberOne = 0;
  NumberTwo = 0;
  result: number = 0;

  onNumberOneChanged(event: any) {
    this.NumberOne = event.target.value;
  }

  onNumberTwoChanged(event: any) {
    this.NumberTwo = event.target.value;
  }

  onCalculated(event: number) {
    this.result = event;
  }
  
  onLimpiarCampos() {
    this.NumberOne = 0;
    this.NumberTwo = 0;
    this.result = 0;
  }
}
