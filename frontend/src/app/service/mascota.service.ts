import { HttpClient } from "@angular/common/http";
import { identifierName } from "@angular/compiler";
import { Injectable } from '@angular/core';
import { Observable, first, firstValueFrom } from "rxjs";
import { Mascota, MascotaGenerico} from "src/interface/mascota";


//Esto es para declaracion de servicio por default
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  URL:string= 'http://localhost:8081/mascota';


  httpOptions={
    headers:{
      'Content-Type': 'application/json'
    }
  }

  constructor(private http:HttpClient){}




  getMascota():Observable<Mascota[]>{
    return this.http.get<Mascota[]>(this.URL);
    //Esto hace que el objeto convierte lo que se trae contenido y lo convierte para traerme el objeto que yo ocupo
  }



  //Me retorne un id string
  getMascotaByID(id:string):Observable<Mascota>{
    
    return this.http.get<Mascota>(this.URL+"/"+id);
  }

  addMascota(mascota:MascotaGenerico):Observable<Mascota>{
    
    return this.http.post<Mascota>(this.URL+"/",mascota,this.httpOptions)
  }

  updateMascota(id:string,mascotaModificar:MascotaGenerico){

    return this.http.put<MascotaGenerico>(
      this.URL+"/"+id, mascotaModificar,
      this.httpOptions
      );
  }

  deleteMascota(id:string){

    return firstValueFrom(
      this.http.delete<Mascota>(`${this.URL}/${id}`,this.httpOptions)
      
      );
  }
}
