import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../services/CargarScripts/cargar-scripts.service';
import $ from 'jquery';


@Component({
  selector: 'app-heaader',
  templateUrl: './heaader.component.html',
  styleUrl: './heaader.component.css'
})
export class HeaaderComponent implements OnInit,AfterViewInit{
  dynamicRoute: string = '/';

  

  constructor(private _scripts:CargarScriptsService){}

  ngOnInit(): void {
   this._scripts.cargar(['main']);

    let carrucel = [
      {
          img: '/assets/backgrounds/fondo-main.png',
          titulo: "Medio Ambiente, Cambio Climático y Sostenibilidad",
          descrip: "Diseñamos e Implementamos el Sistema de gestión ambiental conforme a la ISO 14001:2015, ayudando a las organizaciones a gestionar sus impactos ambientales, cumplir con la normativa aplicable y avanzar hacia prácticas más sostenibles.",
          ruta: '/medio-ambiente'
      },
      {
          img: '/assets/backgrounds/slier2.png',
          titulo: "Seguridad y Salud",
          descrip: "Diseñamos e implementamos el Sistema de gestión de SST conforme a la naturaleza de su organización y a la Ley N° 29783, Ley de SST, ayudando a las empresas a cumplir con la legislación vigente, mejorar las condiciones laborales y reducir los riesgos de accidentes y enfermedades ocupacionales; que contribuye a crear un ambiente de trabajo seguro y saludable, lo que se traduce en una fuerza laboral más comprometida y productiva.",
          ruta: '/seguridad-salud'
      },
      {
          img: '/assets/backgrounds/slider3.png',
          titulo: "Gestión de Riesgos Ocupacionales",
          descrip: "Efectuamos y garantizamos un estricto seguimiento a la empresa constructora, para que el proyecto se ejecute cumpliendo el Expediente Técnico, con la calidad y seguridad, en el tiempo y con el costo estipulados en el Contrato.",
          ruta: '/supervision'
      }

  ];
    // Variables para manejar el estado del carrusel
    var cont: number = 0;
    let totalImages: number = carrucel.length;
    let intervalId: any; // Tipo 'any' porque el tipo exacto depende de cómo se usará intervalId
    // Elementos del DOM para modificar
    let fondo = $('.fondo');
    let title = $('.title-c');
    let descrip = $('.descrip-c');
    const showImage = (index: number): void => {
      // Mostrar nueva imagen después de ocultar título y descripción
      setTimeout(() => {
          fondo.addClass('fade-out');
          setTimeout(() => {
              fondo.attr('src', carrucel[index].img).removeClass('fade-out');
              title.text(carrucel[index].titulo);
              descrip.text(carrucel[index].descrip).css('transform', 'translateY(0)');
              this.dynamicRoute=carrucel[index].ruta
          }, 300); 
      }, 300); 
  
      /*
      clearInterval(intervalId);
      startInterval();
      */
  }
  
    // Mostrar la primera imagen al cargar la página
    showImage(cont);
    // Obtener elementos jQuery
    const arr1 = $('.arr1');
    const arr2 = $('.arr2');

    // Función para manejar el clic en .arr1
    arr1.click(() => {
      cont = (cont - 1 + totalImages) % totalImages;
            showImage(cont);
    });

    // Función para manejar el clic en .arr2
    arr2.click(() => {
      cont = (cont + 1) % totalImages;
            showImage(cont);
    });



  }



  ngAfterViewInit(): void {
  
  }



 
}
