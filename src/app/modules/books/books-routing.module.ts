import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailsComponent } from './books-details/Books-details.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: ':id', component: BooksDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [BooksDetailsComponent],
})
export class BooksRoutingModule {}
