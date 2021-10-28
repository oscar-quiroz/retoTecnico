import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/interfaces/Imagen.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() img:string = "";
  valor:string ="1000"

  imagenNueva:Imagen = {
    albumId:0,
    id:0,
    title: '',
    url: '',
    thumbnailUrl:''
  }



  constructor() { }

  ngOnInit(): void {
  }

  obtenerImagen(){

    this.imagenNueva= {
      url: this.img,
      id:10
    }
    //console.log(this.imagenNueva.valor, this.imagenNueva.img)
  
  }


}
