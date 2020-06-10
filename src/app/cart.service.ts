import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems = [];

  getShippingPrices() {
    return this.http.get('assets/shipping.json');
  }

  addToCart(item) {
    this.cartItems.push(item);
  }
  getItems() {
    return this.cartItems;
  }
  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
  constructor(private http: HttpClient) {}
}
