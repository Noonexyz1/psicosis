import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-estudiante',
  imports: [NgClass],
  templateUrl: './estudiante.html',
  styleUrl: './estudiante.css',
})
export class Estudiante {
  isSidebarOpen: boolean = false; // Empieza cerrado por defecto

  mostrarMenuAside() {
    this.isSidebarOpen = !this.isSidebarOpen; // Cambia entre true y false
  }
}
