import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})

// export class HomeSectionComponent implements OnInit {
export class HomeSectionComponent {
  BooksArray = [
    {
      id: 1,
      titre: 'math',
      auteur: 'colby convigton',
      category: 'science',
      published_date: '10/5/1998',
      reviews: 1997,
      nbre_page: 20,
      prix: '700 $',
      imageUrl: '../../assets/images/livre-math.jpeg',
    },
    {
      id: 2,
      titre: 'Poor economics',
      auteur: 'kumaru usman',
      prix: '500 $',
      reviews: 8228,
      category: 'science',
      imageUrl: '../../assets/images/phy-chimie-prepa.png',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
    {
      id: 3,
      titre: 'physique',
      auteur: 'victor hugo',
      prix: '300 £',
      reviews: 8228,
      category: 'science',
      imageUrl: '../../assets/images/phy-chimie-prepa.png',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
    {
      id: 4,
      titre: 'Predictably Irrational',
      auteur: 'Dr. dan ariely',
      prix: '300 $',
      reviews: 8228,
      category: 'economics',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/516XdxUXpNL._SX326_BO1,204,203,200_.jpg',
      published_date: '10/11/1997',
      nbre_page: 50,
    },
    {
      id: 5,
      titre: 'The Storyteller: Tales of Life and Music',
      auteur: 'Drave Grohl',
      prix: '26.94 $',
      reviews: 8228,
      category: 'Audio Book',
      imageUrl: 'https://m.media-amazon.com/images/I/51PsdEs6H9S.jpg',
      published_date: '10/11/2020',
      nbre_page: 50,
    },
  ];

  constructor(books: BooksService) {}
  ngOnInit() {}
}
