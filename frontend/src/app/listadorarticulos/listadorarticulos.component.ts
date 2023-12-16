import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadorarticulos',
  templateUrl: './listadorarticulos.component.html',
  styleUrls: ['./listadorarticulos.component.css']
})
export class ListadorarticulosComponent implements OnInit{

  @Input() datos:any;
  constructor(){}

  ngOnInit(): void {
    
  }

}
