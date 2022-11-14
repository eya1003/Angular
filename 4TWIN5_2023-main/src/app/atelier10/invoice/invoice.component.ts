import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
invoices:any;
show=false;
singleUser:any;
  constructor(private invoiceService:InvoiceServiceService) { }

  ngOnInit(): void {
    this.invoiceService.fetchInvoice().subscribe(
      (d)=> {
this.invoices=d;  
     }
    );
  }
  showFormUpdate(p:any){
    this.singleUser=p;
this.show=true;
  }

}
