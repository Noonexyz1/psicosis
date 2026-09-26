import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Pantalla } from './pantalla/pantalla';
import { Login } from './login/login';
import { Portada } from './portada/portada';
import { Carrera } from './carrera/carrera';
import { Estudiante } from './estudiante/estudiante';
import { Empresa } from './empresa/empresa';
import { Principal } from './principal/principal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pantalla, Login, Portada, Carrera, Estudiante, Empresa, Principal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  isPortadaShowed = true;
  isLoginShowed = false;

  tipoUsuarioSesion: string = '';

  ngOnInit(): void {
    initFlowbite();
  }

  capturarTipoUsuarioEmitido(tipoUsuarioEmited: string) {
    this.tipoUsuarioSesion = tipoUsuarioEmited;
    this.isPortadaShowed = false;
    this.isLoginShowed = false;
  }

  capturarIsInicioDeSesionEmitido(isInicioDeSesionEmited: boolean) {
    this.isLoginShowed = isInicioDeSesionEmited;
    this.isPortadaShowed = false;
  }
}
