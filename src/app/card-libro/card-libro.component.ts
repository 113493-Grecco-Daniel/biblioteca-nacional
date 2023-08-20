import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-libro',
  templateUrl: './card-libro.component.html',
  styleUrls: ['./card-libro.component.css']
})
export class CardLibroComponent implements OnInit {
   nombre: string;
    descripcion: string;
    categoria: string;
    ano_de_publicacion: number;
    autor: string;
 
  
  constructor() { 
    this.nombre="Aprendiendo Angular";
    this.descripcion="Un libro que presenta el framework Angular";
    this.categoria="Programacion";
    this.ano_de_publicacion=2023;
    this.autor="Danielazo";
  }

  ngOnInit() {

    
  }
  incrementarAno(){
    this.ano_de_publicacion++;
  }

}
