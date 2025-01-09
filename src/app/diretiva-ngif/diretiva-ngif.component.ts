import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }
}
