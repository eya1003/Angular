import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
// base=environment.url+'invoices';
  constructor(private http:HttpClient) { }

fetchInvoice(){
 return  this.http.get('http://localhost:3000/invoices')
}

removeInvoice(id:any){
  return this.http.delete('http://localhost:3000/invoices/'+id)
}
addInvoice(invoice:any){
  return this.http.post('http://localhost:3000/invoices/',invoice)
}

updateInvoice(invoice:any,id:any){
  return this.http.put('http://localhost:3000/invoices/'+id,invoice)
}

getById(id:any){
  return this.http.get('http://localhost:3000/invoices/'+id)
}


}
