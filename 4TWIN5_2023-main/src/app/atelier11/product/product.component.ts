import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProduct=[
   { id:1,title: "esprit",  price: 25, quantity:0},
   { id:2,title: "ben",  price: 32, quantity:5}

  ];
  constructor() { }

  ngOnInit(): void {
  }
  increaseLike(t:any){
    let index=this.listProduct.indexOf(t); //t objet = produit s'il existe retourne l'id sinon -1
   // if (index!=-1)
      //incomplete
  }

}
