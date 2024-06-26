import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component'; 
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ContactanosComponent } from './views/contactanos/contactanos.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'**',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
