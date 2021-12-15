import { Injectable } from '@angular/core';

import { LocalStorageService } from "src/app/services/local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartContent: any[] = [];

  constructor(private localStorageService: LocalStorageService) {
    this.cartContent = this.load();
  }

  add(productId: string) {
    const course = this.cartContent.filter((elem) => elem.id == productId)[0];
    if (course) {
      course.quantity++;
    } else {
      this.cartContent.push({ id: productId, quantity: 1 });
    }
    this.localStorageService.set('cart', this.cartContent);
  }

  load() {
    return this.localStorageService.get('cart');
  }

  clear() {
    // 1st method
    // this.localStorageService.clear('cart');
    // 2st method
    this.cartContent = [];
    this.localStorageService.set('cart', this.cartContent);
  }
}
