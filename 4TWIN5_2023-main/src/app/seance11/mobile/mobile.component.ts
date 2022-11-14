import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
TVS=[{
  "id":1,
  "nom":"mobile1"
  ,"prix" : 500
}
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
