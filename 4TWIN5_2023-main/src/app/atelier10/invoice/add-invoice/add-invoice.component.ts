import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { InvoiceServiceService } from '../../invoice-service.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  fg=new FormGroup({
    nomp: new FormControl(''),
    prenom: new FormControl('')
  });
  constructor(private invoiceService:InvoiceServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }
  addinvoice(myform:any){
    this.invoiceService.addInvoice(myform).subscribe(
      ()=> {
        console.log("added");
        this.router.navigate(['listInvoices'])
      }
    );
  }

}
