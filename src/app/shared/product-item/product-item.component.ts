import {Component, Input, OnInit} from '@angular/core';
import {CartItem, Product} from "../../@core/data";
import {registerLocaleData} from "@angular/common";
import fr from "@angular/common/locales/fr"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {CartService} from "../../@core/service/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined;
  faCart = faShoppingCart;

  constructor(
    private cs: CartService
  ) { }

  ngOnInit(): void {

    registerLocaleData(fr);

  }

  handleAddToCart() {
    const cartItem: CartItem = {
      product: this.product!,
      quantity: 1
    }
    this.cs.addItem(cartItem);
  }
}
