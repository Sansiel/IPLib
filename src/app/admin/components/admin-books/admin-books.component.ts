import { Component, OnInit } from '@angular/core';
import {Book} from '../../../books/models/book.model';
import {BookService} from '../../../books/services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.less']
})

export class AdminBooksComponent implements OnInit {
  books: Book[];

  constructor(private router: Router, private bookService: BookService) { }
  
  ngOnInit() {
    this.bookService.getAll()
      .subscribe(data => this.books = data);
  }

  deleteBook(book: Book): void {
    this.bookService.delete(book.id)
      .subscribe(data => {
        this.books = this.books.filter(b => b.id !== book.id);
      });
  }

  editBook(book: Book): void {
    window.localStorage.removeItem('editBookId');
    window.localStorage.setItem('editBookId', book.id.toString());
    this.router.navigate(['admin', 'edit-book']);
  }

}
