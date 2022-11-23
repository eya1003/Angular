import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-showone-product',
  templateUrl: './showone-product.component.html',
  styleUrls: ['./showone-product.component.css']
})
export class ShowoneProductComponent implements OnInit,OnChanges {
@Input() singleProduct: any;
@Output() like= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}
sendProductToParent(){
this.like.emit(this.singleProduct)
}
}
