import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import {SharedModule} from '../shared/shared.module';
import {BooksRoutingModule} from './books-routing.module';



@NgModule({
  declarations: [BookListComponent],
  exports: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
  ],
})
export class BooksModule { }
