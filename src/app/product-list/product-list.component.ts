import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  onNotifyFromChild(e) {
    alert(
      `You will be notified about ${e.name} that costs ${e.price}, you cheeky mofo.`
    );
  }

  share(product) {
    window.alert(`${product} has been shared!`);
  }
}
