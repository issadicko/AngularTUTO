import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartItem} from "../data";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart$: BehaviorSubject<CartItem[]> = new BehaviorSubject<any>([])

  constructor() {

    this.loadFromCache();


    this.cart$.subscribe({
      next: value => {
        localStorage.setItem("appCart", JSON.stringify(value));
      }
    })

  }


  addItem(item: CartItem){

    let cart = this.cart$.getValue();

    let index = cart.findIndex(value => value.product.id === item.product.id);

    if (index !== -1){

      let copy = [...cart];
      let existingItem = {...copy[index]};
      existingItem.quantity = existingItem.quantity+item.quantity;

      copy[index] = existingItem;
      this.cart$.next(copy);

    }else {

      cart = [...cart, item];
      this.cart$.next(cart);

    }


  }

  private loadFromCache(){

    const string = localStorage.getItem("appCart");
    if (string !== null){

      let DATA = JSON.parse(string);
      this.cart$.next(DATA);

    }

  }


  removeFromCart(index : number){

    let copy = [...this.cart$.getValue()];
    copy.splice(index, 1)
    this.cart$.next(copy);

  }

}
