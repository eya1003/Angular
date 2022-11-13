import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
id:any;
  constructor(private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.id=this.ac.snapshot.params['id']
console.log(this.id);
this.ac.params.subscribe(
  (d)=>{
console.log(d);
  }
);

  }
goToUser(){
this.router.navigate(['user'])
}
}
