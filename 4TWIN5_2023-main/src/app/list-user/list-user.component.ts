import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
user:any;
  constructor(public service:UserServiceService) { }

  ngOnInit(): void {
   // this.user=this.service.getAllUsers(); hedhi ken service private 
    console.log(this.service.fetchNbInList(this.service.list, "lastName","Clooney"))
  }

}
