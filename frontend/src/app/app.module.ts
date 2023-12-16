import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadorarticulosComponent } from './listadorarticulos/listadorarticulos.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { MascotaComponent } from './mascota/mascota.component';
import { InicioComponent } from './inicio/inicio.component';
//import { NuevoMascotaComponent } from './nuevo-mascota/nuevo-mascota.component';
import { ActualizarMascotaComponent } from './actualizar-mascota/actualizar-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascotanuevoComponent } from './mascotanuevo/mascotanuevo.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadorarticulosComponent,
    PostComponent,
    MascotaComponent,
    InicioComponent,
    //NuevoMascotaComponent,
    ActualizarMascotaComponent,
    MascotanuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
