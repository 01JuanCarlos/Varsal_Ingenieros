import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }
  
  cargar(archivos: string[]) {
    if (typeof document !== 'undefined') {
      for (let archivo of archivos) {
        let script = document.createElement('script');
        script.src = './assets/js/' + archivo + '.js';
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
      }
    } else {
      console.warn('El objeto document no está definido. No se pueden cargar scripts en este entorno.');
    }
  }

}
