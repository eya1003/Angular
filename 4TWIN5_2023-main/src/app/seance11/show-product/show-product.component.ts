import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit ,OnChanges{
  @Input()oneProduct:any; 
  constructor() { }
  

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
