import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 User = new User ();
  constructor() { }

  ngOnInit(): void {
  }

  showf(){
    
  }
}
