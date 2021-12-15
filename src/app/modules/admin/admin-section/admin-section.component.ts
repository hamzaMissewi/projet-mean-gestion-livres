import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css'],
})
export class AdminSectionComponent {
  image: string =
    'https://api.time.com/wp-content/uploads/2015/06/521811839-copy.jpg?quality=85&w=507&h=338&crop=1';
  // _id: number = 1;
  author: string = 'harry poter';
  // title: string = 'kteb e safi sa3id ';
  releaseDate: Date = new Date();

  clicked = false;
  // title = `Angular ${VERSION.full} is rad!`;

  handleClick() {
    this.clicked = true;
    window.location.href = 'http://www.w3schools.com';
    // window.location.replace('http://www.w3schools.com');
  }
  // BooksArray: any[] = [
  //   {
  //     title: 'book',
  //     author: 'victor',
  //   },
  // ];
  constructor(private http: HttpClient) {}

  // ngOnInit(): void {}
}
