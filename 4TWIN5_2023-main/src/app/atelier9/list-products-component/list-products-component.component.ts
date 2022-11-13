import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-list-products-component',
  templateUrl: './list-products-component.component.html',
  styleUrls: ['./list-products-component.component.css']
})
export class ListProductsComponentComponent implements OnInit {
  ListProduct!:Product[]
  text:any
  len!: number
  data!:number
  selectedRow!:number
  constructor(public service: ProductServiceService) { }

  ngOnInit(): void {
    this.ListProduct= this.service.getAllProducts();
  }
  onclick(){
    this.service.getNbProductsByLibelle(this.text).subscribe(data => this.len = data) 
  }

  handle(value: any){

    this.service.getNbProductsByLibelle(value).subscribe(data => this.data = data)
  }

}
