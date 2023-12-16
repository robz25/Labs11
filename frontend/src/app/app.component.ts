import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos:any=[
    {codigo:1,descripcion:'Mouse',precio:5.50},
    {codigo:2,descripcion:'Teclado',precio:10.99},
    {codigo:3,descripcion:'Monitor',precio:200.35},
    {codigo:4,descripcion:'Silla',precio:150.85},
    
  ]
}
