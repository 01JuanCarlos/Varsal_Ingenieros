import { Component, OnInit } from '@angular/core';
import { servicios } from '../../../interfaces/servicios';
import { servicio } from '../../../interfaces/servicio';

@Component({
  selector: 'app-medio-ambiente',
  templateUrl: './medio-ambiente.component.html',
  styleUrl: './medio-ambiente.component.css'
})
export class MedioAmbienteComponent  {
 
  servicios: servicio[] = servicios;
  


}
