import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal :string;

  cursos: string[] = ['Angular', 'Java', 'C#'];

  constructor() { 
    this.nomePortal = 'http://loiane.training';

    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

}
