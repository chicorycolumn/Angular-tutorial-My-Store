import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.myLovelyForm = this.formBuilder.group({
      nameroonie: '',
      addressypoos: '',
    });
  }

  onSubmit(customerData) {
    console.log('sending to server for payment');
    console.log(this.cartItems, customerData);
    this.cartService.clearCart();
    this.myLovelyForm.reset();
  }

  cartItems: any[] = [];
  myLovelyForm;

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }
}
