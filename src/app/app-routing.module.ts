import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component'; 
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ContactanosComponent } from './views/contactanos/contactanos.component';
import { MedioAmbienteComponent } from './views/servicios/medio-ambiente/medio-ambiente.component';
import { SeguridadSaludComponent } from './views/servicios/seguridad-salud/seguridad-salud.component';
import { SupervisionComponent } from './views/servicios/supervision/supervision.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'medio-ambiente',component:MedioAmbienteComponent},
  {path:'seguridad-salud',component:SeguridadSaludComponent},
  {path:'supervision',component:SupervisionComponent},
  {path:'clientes-proyectos',component:ProyectosComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'**',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
