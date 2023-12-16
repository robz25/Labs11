// Esto es lo que trae app por defecto al hacer  Ng g c mascota



/* import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {



}
 */

import { Component,OnInit } from '@angular/core';
// para agregar servicio

import { MascotaService } from '../service/mascota.service';
import { Mascota } from 'src/interface/mascota';

//Para agregar rutas
import { Router } from '@angular/router';




@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
//Aca se implementa con OnInit
export class MascotaComponent implements OnInit{


  //Un mascota que sea el arreglo de mascota
mascota:Mascota[]=[]


//Llamamos al  contructor

constructor(private mascotaServicio:MascotaService, private router:Router){}

ngOnInit(): void {
  
  this.mascotaServicio.getMascota().subscribe(data=>{
    this.mascota=data;
    console.log(data)
  })
}



//Para actualizar

onUpdate(id:string){

  this.router.navigate([`actualizarMascota/${id}`])

}

onDelete(id:string, identificacion:string){
  
  if(confirm(`vamos a eliminar las mascota con nombre:${identificacion} `)){

    this.mascotaServicio.deleteMascota(id);
    this.router.navigate([''])
    this.mascota=this.mascota.filter((e:Mascota)=>e._id!==id)

  }
  
}

onInsert(){

  this.router.navigate([`Mascotanuevo`]);
}




}
