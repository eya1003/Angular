import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InvoiceServiceService } from '../../invoice-service.service';

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css']
})
export class DeleteInvoiceComponent implements OnInit {
id:any;
  constructor(private invoiceService:InvoiceServiceService,
     private acR:ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
   this.id=this.acR.snapshot.params['id'];
    this.invoiceService.removeInvoice(this.id).subscribe(
      ()=>{
      console.log('removed')
    this.router.navigate(['listInvoices'])
  }
  );
  }

}
