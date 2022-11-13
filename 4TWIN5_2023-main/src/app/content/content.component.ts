import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
msg='bonjour';
kolor='red';
list:any;
j=-1;
user=[
   { idCustomer: 1, firstName: "med", lastName: " un", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 2, firstName: "ali", lastName: " t", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 3, firstName: "hiba", lastName: " e", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 4, firstName: "Mila3", lastName: " f", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },
{ idCustomer: 5, firstName: "Mila4", lastName: "K", birthDate: "1999 - 06 - 30", accountCategory: "Admin", email: "mila@kunis.com", password: "test", picture: "https://bootdey.com/img/Content/avatar/avatar3.png", profession: "Software Engineer" },

]
  constructor() { 
    console.log('cons')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
showMsg(){
  //console.log('bonjour msg')
  this.kolor='green';
}
getColor(){
  if(this.kolor=='red'){
this.kolor='pink';

  }
  return this.kolor;
}
deleteUser(user:any){
  this.user.splice(user,1)

}
detail(i:any){
  console.log(this.user[i]);
  this.j=i;
this.list=this.user[i];

}
}
