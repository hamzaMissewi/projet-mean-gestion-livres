import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-angular';

  // public onOpenModal(book: Book, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addBookModal');
  //   }
  //   if (mode === 'edit') {
  //     this.editBook = book;
  //     button.setAttribute('data-target', '#updateBookModal');
  //   }
  //   if (mode === 'delete') {
  //     this.deleteBook = book;
  //     button.setAttribute('data-target', '#deleteBookModal');
  //   }
  //   container.appendChild(button);
  //   button.click();
  // }
}
