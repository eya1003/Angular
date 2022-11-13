import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
