import { Component, OnInit } from '@angular/core';
import { CartProductService } from 'src/app/services/cart-product.service';
import { FakeApiService } from 'src/app/services/fake-api.service';
import { booksData } from 'src/app/shared/dummy_data';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})
export class HomeSectionComponent implements OnInit {
  // public books: any;
  // public booksList = booksData;
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';

  constructor(
    private api: FakeApiService,
    private cartService: CartProductService
  ) {}

  ngOnInit(): void {
    // console.log(this.booksList);
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}

