import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carrera',
  imports: [NgClass],
  templateUrl: './carrera.html',
  styleUrl: './carrera.css',
})
export class Carrera {

  isSidebarOpen: boolean = false; // Empieza cerrado por defecto

  mostrarMenuAside() {
    this.isSidebarOpen = !this.isSidebarOpen; // Cambia entre true y false
  }
}
