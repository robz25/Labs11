import { Component, OnInit, inject, signal} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotaService } from '../service/mascota.service';
import { FormGroup, FormControl} from '@angular/forms';
FormGroup
Router
MascotaService

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent implements OnInit{




  mascotaId:string='';
  formulario:FormGroup;


  activatedRoute= inject(ActivatedRoute)
  mascotaService= inject(MascotaService)
  router=inject(Router);

  
  //This last injects substitute this
/*   constructor(private ActivatedRoute: ActivatedRoute){

  } */



 constructor(){ 
  this.formulario= new FormGroup({

    nombre: new FormControl(),
    especie: new FormControl(),
    dueno: new FormControl(),
  })
 }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {

      let mascotaId=params ['mascotaId']
      this.mascotaId=mascotaId;
      await this.mascotaService.getMascotaByID(mascotaId).subscribe(data=>{
        console.log('Data object::', data)
        const vMascota: any = data;
        delete vMascota._id;
        delete vMascota._v;
        delete vMascota.create_date;
        this.formulario.setValue(vMascota)
      })
    }
      
      )
    
  }

  onSubmit(){

    this.mascotaService.updateMascota(this.mascotaId,this.formulario.value).subscribe(data=>{

      this.router.navigate([''])


    })
  }
}
