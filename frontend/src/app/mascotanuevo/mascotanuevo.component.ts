
import { Component, OnInit, inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotaService } from '../service/mascota.service';
import { FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-mascotanuevo',
  templateUrl: './mascotanuevo.component.html',
  styleUrls: ['./mascotanuevo.component.css']
})
export class MascotanuevoComponent implements OnInit{

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
    edad: new FormControl(),
    peso: new FormControl()
  })
 }



  ngOnInit(): void {
    
    
    
  }

  onSubmit(){

    console.log("formualrio:",this.formulario.value);
    this.mascotaService.addMascota(this.formulario.value).subscribe(data=>{

      this.router.navigate([''])


    })
  }

}
