import { Component, OnInit } from '@angular/core';

export interface Book {
  name: string;
  author: string;
}



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
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
