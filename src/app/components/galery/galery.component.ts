import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {
  allImages: any = [];

  images: any = [];

  nAlbum: number = 1;

  constructor(private imageService: ImageService) {
    this.getImages();
  }

  ngOnInit(): void {}

  getImages() {
    this.imageService.getImages().subscribe(
      (res) => {
        this.allImages = res;
        console.log(res);

        this.getAlbum(this.nAlbum);
      },

      (err) => {
        console.log(err);
      }
    );
  }

  mostrar() {
    for (let step = 0; step < 20; step++) {
      // Se ejecuta 5 veces, con valores del paso 0 al 4.
      this.images.push(this.allImages[step]);
    }
  }

  getAlbum(id) {
    this.images = this.allImages.filter((item) => {
      return item.albumId == id;
    });
  }

  changeAlbum(num) {
    this.nAlbum = this.nAlbum + num;
    if (this.nAlbum === 0) {
      this.nAlbum = 1;
      this.getAlbum(this.nAlbum);
    } else {
      this.getAlbum(this.nAlbum);
    }

    console.log(this.nAlbum);
  }
}
