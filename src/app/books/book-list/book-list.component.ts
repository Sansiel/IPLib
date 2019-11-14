import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';
import {debounce, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
  private socket: WebSocket;
  books: Book[];
  searchQuery: string;
  queryChanged = new Subject<string>();
  
  constructor(
    private bookService: BookService,    
    ) { 
      this.socket = new WebSocket('wss://iplibwebsocket.herokuapp.com/');
      this.books  = [];
      this.socket.onopen = () => {
        this.socket.onmessage = (event) => {
          console.log(event.data);
          const model = JSON.parse(event.data);
          if(model.data) {
            const messageType = JSON.parse(model.data).messageType;
            console.log(messageType);
            if(messageType == "data") {
              console.log(JSON.parse(model.data).books);
              this.books = JSON.parse(model.data).books;
            }
          }
        }
      }
    }

  ngOnInit() {
    this.bookService.getAll()
    .subscribe(data => {
      this.books = data;
    });
    
    this.queryChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(q => this.bookService.search(q).subscribe(val => this.books = val));
  }

  changed(query: string) {
    if (query.trim() === '') {
      return;
    }
    this.queryChanged.next(query);
  }
}
