import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookElement: any;
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
