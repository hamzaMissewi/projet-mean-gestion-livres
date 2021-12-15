import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  public img404 = 'assets/images/404-not-found.png';

  constructor() {}

  ngOnInit(): void {}
}
