import { Attribute, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  Products!:Product[]
    list =[
      { idProduct: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
      { idProduct: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
      { idProduct: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
    
  ]
  constructor() { }

  getAllProducts(){
    return this.list
  }
  getNbProductsByLibelle(libelle1:string){
    const i=[];
    for(let t of this.list){
      if (t.libelle==libelle1){
      i.push(t);
      }
    } 
    return of(i.length);
  }
}
