import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './atelier10/invoice/add-invoice/add-invoice.component';
import { DeleteInvoiceComponent } from './atelier10/invoice/delete-invoice/delete-invoice.component';
import { InvoiceComponent } from './atelier10/invoice/invoice.component';
import { UpdateInvoiceComponent } from './atelier10/invoice/update-invoice/update-invoice.component';
import { ListProductsComponentComponent } from './atelier9/list-products-component/list-products-component.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { RemoveuserComponent } from './user/removeuser/removeuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

const routes: Routes = [
  //{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'user',component:ListUserComponent},
  {path:'login',component:LoginComponent},

  {path: 'deleteInvoices/:id', component:DeleteInvoiceComponent},
  {path: 'addInvoices', component:AddInvoiceComponent},
  {path: 'listInvoices', component:InvoiceComponent},
  {path: 'updateInvoices/:id', component:UpdateInvoiceComponent},
  {path:'atelier9',component:ListProductsComponentComponent},
  {path:'form',component:FormComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'user',component:ListuserComponent, children:[
    {path:'add',component:AdduserComponent},
    {path:'update/:id',component:UpdateuserComponent},
    {path:'remove/:id', component:RemoveuserComponent},
  ]},
  {path:'product',loadChildren:()=>import('./product/product.module').then((m)=>{return m.ProductModule} )},
  {path:'shared',loadChildren:()=>import('./shared/shared.module').then((m)=>{return m.SharedModule} )},

  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
