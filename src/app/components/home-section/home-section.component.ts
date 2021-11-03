import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  providers: [BooksService],
})
export class HomeSectionComponent implements OnInit {
  // books: {
  //   id: number;
  //   titre: string;
  //   auteur: string;
  //   prix: number;
  //   reviews: number;
  //   category: string;
  //   imageUrl: string;
  //   published_date: Date;
  //   nbre_page: number;
  // }[] = [];

  // @Input() book: { id; number;}
  books = [];
  constructor(private router: Router, private booksService: BooksService) {}
  // addToCart = () => {
  //   this.router.navigate(['/admin/list-books']);
  // };
  ngOnInit(): void {
    this.books = this.booksService.BooksArray;
  }
}
