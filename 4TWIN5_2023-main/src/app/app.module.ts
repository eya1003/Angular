import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { RemoveuserComponent } from './user/removeuser/removeuser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListProductsComponentComponent } from './atelier9/list-products-component/list-products-component.component';
import { InvoiceComponent } from './atelier10/invoice/invoice.component';
import { DeleteInvoiceComponent } from './atelier10/invoice/delete-invoice/delete-invoice.component';
import { AddInvoiceComponent } from './atelier10/invoice/add-invoice/add-invoice.component';

import { MobileComponent } from './seance11/mobile/mobile.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ErrorsComponent } from './errors/errors.component';
import { UpdateInvoiceComponent } from './atelier10/invoice/update-invoice/update-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AdduserComponent,
    UpdateuserComponent,
    RemoveuserComponent,
    ListuserComponent,
    NotfoundComponent,
    LoginComponent,
    DetailComponent,
    FormComponent,
    ListUserComponent,
    ListProductsComponentComponent,
    InvoiceComponent,
    DeleteInvoiceComponent,
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    MobileComponent,
    ShowProductComponent,
    ErrorsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
