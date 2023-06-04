import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getCart() {
    return this.cartService.get();
  }
  calculateTotal() {
    const cart = this.getCart();
    let total = 0;
    for (const book of cart) {
      total += book.amount;
    }
    return total;
  }
}
