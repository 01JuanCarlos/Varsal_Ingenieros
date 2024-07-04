import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../services/CargarScripts/cargar-scripts.service';

@Component({
  selector: 'app-cards-servicios',
  templateUrl: './cards-servicios.component.html',
  styleUrl: './cards-servicios.component.css'
})
export class CardsServiciosComponent implements OnInit, AfterViewInit{
  constructor(private _scripts:CargarScriptsService){}

  ngOnInit(): void {
   this._scripts.cargar(['main']);
   
   
  }
  ngAfterViewInit(): void {
    //manejo de opacidad de tarjetas
    $(document).ready(function() {
      if (window.innerWidth > 991) {

        $('.input').change(function() {
          var idSeleccionado = $(this).attr('id');
          if ($(this).is(':checked')) {
            $('.carta').addClass('opacity');
            var idSeleccionado = $(this).attr('id');
            console.log(idSeleccionado);
            var labelElement = $('label[for="' + idSeleccionado + '"]');
            labelElement.removeClass('opacity')
            }
          }
        
        );
      }else{
        $('.carta').removeClass('opacity');

      }
     


     /*   $('.carta').mouseenter(function() {
          $('.carta').addClass('opacity');

          var idSeleccionado = $(this).attr('for'); 
          var labelElement = $('label[for="' + idSeleccionado + '"]');
          labelElement.removeClass('opacity')
          
          console.log(idSeleccionado);      
      }).mouseleave(function() {
       //var  idSeleccionado = $(this).attr('for');    
          //console.log(idSeleccionado);      
      });
*/
    });


  
  }
}
