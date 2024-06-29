import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.component.html',
  styleUrl: './servicio-detalle.component.css'
})
export class ServicioDetalleComponent implements OnInit {
  title: string='';
  descrip: string = '';
  img: string = '';
  serv: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'] || '';
      this.descrip = params['descrip'] || '';
      this.img = params['img'] || '';
      this.serv = params['serv'] ? params['serv'].split(',') : [];
    });
  }
}