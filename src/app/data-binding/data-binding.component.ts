import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { OutputPropertyComponent } from "../output-property/output-property.component";


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, InputPropertyComponent, OutputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';

  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa = {
    nome: 'Ser',
    idade: 30
  }
  nomeDoCurso: string = 'Typescript';

  valorInicial: number = 15

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

  onMudouValor(event: any){
    // console.log(event.novoValor)
  }
}
