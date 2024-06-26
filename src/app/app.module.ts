import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaaderComponent } from './components/header/heaader.component';
import {CargarScriptsService} from './services/CargarScripts/cargar-scripts.service';
import { MainComponent } from './views/main/main.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ContactanosComponent } from './views/contactanos/contactanos.component';
import { VideoComponent } from './components/video/video.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderOtherComponent } from './components/header-other/header-other.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaaderComponent,
    MainComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProyectosComponent,
    ClientesComponent,
    ContactanosComponent,
    VideoComponent,
    FormContactoComponent,
    FooterComponent,
    HeaderOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
