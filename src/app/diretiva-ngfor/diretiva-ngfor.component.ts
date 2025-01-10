import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent {

  cursos: string[] = ["Angular", "Java", "C#"]
}
