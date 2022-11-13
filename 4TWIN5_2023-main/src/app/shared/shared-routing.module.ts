import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'nav' ,component:NavComponent
  },
  {
    path: 'footer' ,component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
