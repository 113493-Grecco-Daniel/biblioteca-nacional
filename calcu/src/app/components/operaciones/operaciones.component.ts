import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
  @Input() num1DelPadre: number = 0;
  @Input() num2DelPadre: number = 0;
  @Output() resultadoParaPadre: EventEmitter<number> = new EventEmitter();
  @Output() limpiarCampos: EventEmitter<void> = new EventEmitter();

  resultado: number = 0;

  onSumar() {
    this.resultado = parseFloat(this.num1DelPadre.toString()) + parseFloat(this.num2DelPadre.toString());
    this.resultadoParaPadre.emit(this.resultado);
  }

  onRestar() {
    this.resultado = parseFloat(this.num1DelPadre.toString()) - parseFloat(this.num2DelPadre.toString());
    this.resultadoParaPadre.emit(this.resultado);
  }

  onDividir() {
    this.resultado = parseFloat(this.num1DelPadre.toString()) / parseFloat(this.num2DelPadre.toString());
    this.resultadoParaPadre.emit(this.resultado);
  }

  onMultiplicar() {
    this.resultado = parseFloat(this.num1DelPadre.toString()) * parseFloat(this.num2DelPadre.toString());
    this.resultadoParaPadre.emit(this.resultado);
  }

  onPotenciar() {
    this.resultado = Math.pow(parseFloat(this.num1DelPadre.toString()), parseFloat(this.num2DelPadre.toString()));
    this.resultadoParaPadre.emit(this.resultado);
  }
  onLimpiarCampos() {
    this.limpiarCampos.emit();
  }
}
