import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CicloComponent } from "./ciclo/ciclo.component";
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from "./diretiva-ngif/diretiva-ngif.component";
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from "./diretiva-ngfor/diretiva-ngfor.component";
import { DiretivaNgclassComponent } from "./diretiva-ngclass/diretiva-ngclass.component";
import { DiretivaNgstyleComponent } from "./diretiva-ngstyle/diretiva-ngstyle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponent, CursosComponent, DataBindingComponent, CicloComponent, CommonModule, DiretivaNgifComponent, DiretivaNgswitchComponent, DiretivaNgforComponent, DiretivaNgclassComponent, DiretivaNgstyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Olá mundo!';

  exibir: boolean = true;

  valorInicial: number = 10;

  mudarValor(){
    this.valorInicial++;
  }
}
