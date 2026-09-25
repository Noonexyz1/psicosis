import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario: string = '';

  @Output()
  tipoUsuarioEmited = new EventEmitter<string>();

  inicioDeSesionClicked() {
    console.log(this.usuario);

    let usuarioValidado =
      this.usuario === 'empresa' || this.usuario === 'estudiante' || this.usuario === 'carrera';

    if (usuarioValidado) {
      this.tipoUsuarioEmited.emit(this.usuario);
      return;
    } else {
      alert('Usuario no reconocido');
    }

  }

}
