import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from '../../models/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data:product={
    title:'refrigeradora',
    price:18,
    description:'equipo electrodomestico/Angelo Torres',
    categoryId: 1,
    images:['http://www.santosdistribuidores.com.ec/462-large_default/cuaderno-espiral-universitario-lineas-100-hojas.jpg']
  }

  dataupdate:product={
    title:'Chompas de Cuero',
    description:'Ropa Casual/Angelo Torres',
    categoryId:6,
  }
  url:string='http://api.escuelajs.co/api/v1/products'
  title:any
  constructor(private productservice:ProductService){}

  ngOnInit(): void {
      //this.getProducts()
      //this.getProduct()
      //this.createproduct()
      //this.updateproduct()
      this.deleteproduct()

  }

  getProducts():void{
    this.productservice.getAll().subscribe(e=>{
      return e
    })
  }
  getProduct(){
    this.productservice.getOne(9).subscribe(e=>{
      return e
    })
  }
  createproduct(){
    this.productservice.store(this.data).subscribe(e=>{
      return e
    })
  }
  updateproduct(){
    this.productservice.update(this.dataupdate,6).subscribe(e=>{
      return e
    })
  }

  deleteproduct(){
    this.productservice.destroy(6).subscribe(e=>{
      return e
    })
  }
}

