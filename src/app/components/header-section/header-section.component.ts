import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faShoppingBasket,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';

import { CartProductService } from 'src/app/services/cart-product.service';
@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css'],
})
export class HeaderSectionComponent implements OnInit {
  searchIcon = faSearch;
  facebook = faFacebook;
  youtube = faYoutube;
  twitch = faTwitch;
  twitter = faTwitter;
  shoppingBasket = faShoppingBasket;
  shoppingCart = faShoppingCart;

  public totalItem: number = 0;
  public searchTerm!: string;
  constructor(private hamzaCartService: CartProductService) {}

  ngOnInit(): void {
    this.hamzaCartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.hamzaCartService.search.next(this.searchTerm);
  }
}
