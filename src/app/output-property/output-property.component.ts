import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput!: ElementRef

  incrementar() {
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementar() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
