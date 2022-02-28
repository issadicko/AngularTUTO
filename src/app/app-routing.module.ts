import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./default/layout/layout.component";
import {HomeComponent} from "./default/home/home.component";
import {CartComponent} from "./default/cart/cart.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'cart', component: CartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
