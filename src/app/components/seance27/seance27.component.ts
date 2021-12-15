import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './seance27.component.html',
  styleUrls: ['./seance27.component.css'],
})
export class Seance27Component implements OnInit {
  public user = {
    name: 'Foulen Ben Foulen',
    age: '21',
    email: 'foulen@example.cosm',
  };

  public serverCreated = false;
  public today = new Date();

  public colors = ['red', 'green', 'yellow', 'black'];
  constructor() {}

  ngOnInit(): void {}

  public reverseName() {
    return this.user.name.split('').reverse().join('');
  }

  public changeUserName() {
    this.user.name =
      this.user.name == 'Mohamed Ben Salah'
        ? 'Foulen Ben Foulen'
        : 'Mohamed Ben Salah';
  }
}
