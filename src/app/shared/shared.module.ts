import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ProductItemComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { }
