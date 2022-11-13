import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceServiceService } from '../../invoice-service.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {
id:any;
  constructor(public invoiceService:InvoiceServiceService,
    private acR:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  }
  updateInvoice(myformdata:any){
    this.id=this.acR.snapshot.params['id'];
    this.invoiceService.updateInvoice(myformdata,this.id).subscribe(
      ()=> {
        console.log("updated");
        this.router.navigate(['listInvoices'])
      },
      (error)=>{
        if (error.status==404){
          console.log('id not found')
        }
        console.log(error)
      }
    );  
  }
  

}
