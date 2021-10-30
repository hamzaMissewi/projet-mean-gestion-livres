import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})

// export class HomeSectionComponent implements OnInit {
export class HomeSectionComponent {
  books_data = [
    {
      book1: {
        id: 1,
        title: 'math',
        prix: 500,
        reviews: 1997,
        imageUrl: '../../assets/',
      },
      book2: {
        id: 2,
        title: 'physique',
      },
    },
  ];
  // constructor() {}
  // ngOnInit(): void {}
}
