import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css',
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementar(){
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementar(){
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
