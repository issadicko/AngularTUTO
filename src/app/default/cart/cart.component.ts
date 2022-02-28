import { Component, OnInit } from '@angular/core';
import {CartService} from "../../@core/service/cart.service";
import {BehaviorSubject} from "rxjs";
import {CartItem} from "../../@core/data";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: BehaviorSubject<CartItem[]> = this.cs.cart$;

  constructor(private cs: CartService) { }

  ngOnInit(): void {
  }

  handleRemove(i: number) {
    this.cs.removeFromCart(i);
  }
}
