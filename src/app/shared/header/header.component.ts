import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {BehaviorSubject} from "rxjs";
import {CartItem} from "../../@core/data";
import {CartService} from "../../@core/service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCart = faShoppingCart;
  cart$: BehaviorSubject<CartItem[]> = this.cs.cart$;

  constructor(
    private cs: CartService
  ) { }

  ngOnInit(): void {
  }

}
