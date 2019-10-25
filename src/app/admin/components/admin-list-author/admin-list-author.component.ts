import { Component, OnInit } from '@angular/core';
import {Author} from '../../../books/models/author.model';
import {Router} from '@angular/router';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-admin-list-author',
  templateUrl: './admin-list-author.component.html',
  styleUrls: ['./admin-list-author.component.less']
})
export class AdminListAuthorComponent implements OnInit {
  authors: Author[];

  constructor(private router: Router, private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAll()
      .subscribe(data => this.authors = data);
  }

  deleteAuthor(author: Author): void {
    this.authorService.delete(author.id)
      .subscribe(data => {
        this.authors = this.authors.filter(b => b.id !== author.id);
      });
  }

  editAuthor(author: Author): void {
    window.localStorage.removeItem('editAuthorId');
    window.localStorage.setItem('editAuthorId', author.id.toString());
    this.router.navigate(['admin', 'edit-author']);
  }

}
