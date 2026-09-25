import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-portada',
  imports: [],
  templateUrl: './portada.html',
  styleUrl: './portada.css',
})
export class Portada {

  @Output()
  isInicioDeSesionEmited = new EventEmitter<boolean>();

  precionarBotonIniciarSesion() {
    this.isInicioDeSesionEmited.emit(true);
  }

}
