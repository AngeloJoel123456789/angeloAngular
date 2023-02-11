import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { product } from '../models/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string='http://api.escuelajs.co/api/v1/products'
  

  constructor(private http:HttpClient){}

  getAll():Observable<product[]>{
    return this.http.get<product[]>(this.url)
  }
  getOne(id:product['id']):Observable<product[]>{
    let url=`${this.url}/${id}`
    return this.http.get<product[]>(url)
  }
  store(data:product):Observable<product[]>{
    return this.http.post<product[]>(this.url,data)
  }
  update(data:product,id:product['id']):Observable<product[]>{
    let url= `${this.url}/${id}`
    return this.http.put<product[]>(url,data)
  }

  destroy(id:product['id']):Observable<boolean>{
    let url= `${this.url}/${id}`
    return this.http.delete<boolean>(url)
  }

}
