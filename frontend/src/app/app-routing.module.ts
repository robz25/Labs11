//This was the original code from default

/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotaComponent } from './mascota/mascota.component';
//import { NuevoMascotaComponent } from './nuevo-mascota/nuevo-mascota.component';
import { ActualizarMascotaComponent } from './actualizar-mascota/actualizar-mascota.component';
import { MascotanuevoComponent } from './mascotanuevo/mascotanuevo.component';


const routes: Routes = [

{

  path:'',
  component:MascotaComponent

},

{

  path:'actualizarMascota/:mascotaId',
  component:ActualizarMascotaComponent

},

{

  path:'Mascotanuevo',
  component:MascotanuevoComponent

},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }