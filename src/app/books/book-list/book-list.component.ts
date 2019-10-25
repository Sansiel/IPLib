import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
  books: Book[];
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAll()
    .subscribe(data => {
      this.books = data;
    });
  }

}
