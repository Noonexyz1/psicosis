import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portada',
  imports: [CommonModule, FormsModule],
  templateUrl: './portada.html',
  styleUrl: './portada.css',
})
export class Portada {
  @Output()
  isInicioDeSesionEmited = new EventEmitter<boolean>();

  precionarBotonIniciarSesion() {
    this.isInicioDeSesionEmited.emit(true);
  }



  swPush = inject(SwPush);

  // Variables vinculadas al formulario
  tituloNoti: string = 'Aviso de Prueba';
  cuerpoNoti: string = 'Este es el contenido configurado desde el formulario.';

  solicitarPermiso() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        alert('¡Permiso concedido con éxito! 🎉');
      } else {
        alert('Permiso denegado por el usuario 😢');
      }
    });
  }

  async lanzarNotificacionLocal() {
    if (Notification.permission !== 'granted') {
      alert('Primero debes activar y conceder permisos de notificación.');
      return;
    }

    // Obtenemos el registro del Service Worker activo para mostrar la notificación de forma nativa
    const registration = await navigator.serviceWorker.ready;

    registration.showNotification(this.tituloNoti, {
      body: this.cuerpoNoti,
      icon: '/icons/icon-192x192.png', // Icono por defecto de tu PWA
      badge: '/icons/icon-72x72.png',
    });
  }
}
