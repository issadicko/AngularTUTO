import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexModule
  ]
})
export class DefaultModule { }
