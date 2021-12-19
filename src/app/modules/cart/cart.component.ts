import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { bookService } from 'src/app/services/book.service';

// import { books } from "src/app/books-list";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartContent: any = [];
  totalPrice: number = 0;
  TAX_RATE: number = 0.2;

  constructor(
    private cartService: CartService,
    private bookService: bookService
  ) {}

  ngOnInit(): void {
    this.getCartContentDetails();
  }

  getCartContentDetails() {
    this.cartContent = this.cartService.cartContent;
    this.bookService.all().subscribe((res) => {
      const books = Object.values(res);
      for (let index = 0; index < this.cartContent.length; index++) {
        const book = books.filter(
          (book) => book._id == this.cartContent[index].id
        )[0];
        this.cartContent[index].title = book.title;
        this.cartContent[index].price = book.price;
      }
      this.computeTotalPrice();
    });
  }
  computeTotalPrice() {
    this.cartContent.forEach((item: { price: number; quantity: number }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  clearCart() {
    this.cartService.clear();
    this.ngOnInit();
  }
}
