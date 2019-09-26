import { Component, OnInit } from '@angular/core';
import {Book} from '../../../books/book-list/book-list.component';

export interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.less']
})
export class AdminBooksComponent implements OnInit {
  books: Book[] = [
    {name: 'Bloody hope', author: 'Sansiel'},
    {name: 'Crimson Tree', author: 'Sansiel'},
    {name: 'World\'s Brige', author: 'Sansiel'},
    {name: 'Maou Gakun', author: 'Mine'},
    {name: 'Viridian Gate Online', author: 'Sekvoja'},
    {name: 'Magical Explorer', author: 'MrShu'},
    {name: 'The Empress\'s Gigolo', author: 'LegendarySlipper'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
