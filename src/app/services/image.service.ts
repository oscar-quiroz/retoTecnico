import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url :string ='https://jsonplaceholder.typicode.com/photos'


  constructor(private http: HttpClient) { }

  getImages() {
    
    return this.http.get(this.url);
  }


}
