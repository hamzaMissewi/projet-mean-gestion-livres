// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { APIResponse, Game } from '../../models/book.model';
// import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  background_image: string;
  libelle: string;
  reviews: number;

  constructor() {}

  ngOnInit(): void {}
}
