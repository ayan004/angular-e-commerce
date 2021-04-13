import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/furnitures";

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get(this.url);
  }

  getById(id : any){
    return this.http.get(`${this.url}/${id}`);
  }

}
