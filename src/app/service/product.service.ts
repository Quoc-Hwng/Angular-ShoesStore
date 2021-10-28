import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/products';

constructor(private httpClient: HttpClient) {

}
getAll(){
  return this.httpClient.get(this.url)
}
getProById(id: any){
  return this.httpClient.get(this.url+ '/?ID_Product='+id)
}
}
