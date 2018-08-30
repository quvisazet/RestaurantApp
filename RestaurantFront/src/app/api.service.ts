import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plat } from './model/plat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getPlats(){
    return this.http.get('http://localhost:9090/Plats');
  }
  getPlat(id:string){
    return this.http.get('http://localhost:9090/Plats/'+id);
  }
  addPlat(plat:Plat):void{
    this.http.post('http://localhost:9090/Plats',plat).subscribe();
  }
  deletePlat(id:number):void{
    this.http.delete('http://localhost:9090/Plats/'+id).subscribe();
  }
  modifyPlat(plat:Plat){
    this.http.put('http://localhost:9090/Plats',plat).subscribe();
  }
  getCategories(){
    return this.http.get('http://localhost:9090/PlatTypes');
  }
}
