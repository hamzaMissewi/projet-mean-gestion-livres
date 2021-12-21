import { Component, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';

@Component({
  selector: 'app-hamza-cart',
  templateUrl: './hamza-cart.component.html',
  styleUrls: ['./hamza-cart.component.css'],
})
export class HamzaCartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  constructor(private hamzaCartService: CartProductService) {}

  ngOnInit(): void {
    this.hamzaCartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.hamzaCartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.hamzaCartService.removeCartItem(item);
  }
  emptycart() {
    this.hamzaCartService.removeAllCart();
  }
}
