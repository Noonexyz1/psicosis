import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [NgClass],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

  // En escritorio puedes iniciar en true si quieres que se muestre por defecto
  isSidebarOpen: boolean = false;

  mostrarMenuAside() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Cierra el sidebar al hacer clic en una opción (útil para móviles)
  cerrarSidebarOpcion() {
    // Opcional: podrías evaluar si estás en mobile con window.innerWidth < 1024
    if (window.innerWidth < 1024) {
      this.isSidebarOpen = false;
    }
  }
}
