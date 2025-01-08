import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';

  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  urlImagem:string = 'http://lorempixel.com/400/200/nature/'

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert("Botão clicado")
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value
  }

  salvarValor(valor: string){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }
}
