import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngclass.component.html',
  styleUrl: './diretiva-ngclass.component.css'
})
export class DiretivaNgclassComponent {

  active: boolean = false;
}
