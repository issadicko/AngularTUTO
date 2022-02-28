import { Component, OnInit } from '@angular/core';
import {CartItem, PRODUCTS} from "../../@core/data";
import {CartService} from "../../@core/service/cart.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = PRODUCTS;
  cart$: BehaviorSubject<CartItem[]> = this.cs.cart$;

  constructor(
    private cs: CartService
  ) { }

  ngOnInit(): void {
  }

}
