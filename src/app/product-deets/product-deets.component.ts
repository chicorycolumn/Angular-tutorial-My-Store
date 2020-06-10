import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-deets',
  templateUrl: './product-deets.component.html',
  styleUrls: ['./product-deets.component.css'],
})
export class ProductDeetsComponent implements OnInit {
  specificProductDeetsForThisRoute;

  chuckInCart(product) {
    this.cartService.addToCart(product);
    alert(`HEY i just added ${product.name} to your CART`);
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) //the ActivatedRoute contains information about the route, its parameters, and additional data associated with the route.
  {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.specificProductDeetsForThisRoute =
        products[parseInt(params.get('productID').toString().slice(1))];
    });
  }
}
