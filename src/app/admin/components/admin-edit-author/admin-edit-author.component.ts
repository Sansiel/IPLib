import { Component, OnInit } from '@angular/core';
import {Book} from '../../../books/models/book.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Author} from '../../../books/models/author.model';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-admin-edit-author',
  templateUrl: './admin-edit-author.component.html',
  styleUrls: ['./admin-edit-author.component.less']
})
export class AdminEditAuthorComponent implements OnInit {
  author: Author;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authorService: AuthorService) { }

  ngOnInit() {
    const authorId = window.localStorage.getItem('editAuthorId');
    if (!authorId) {
      alert('Действие запрещено');
      this.router.navigate(['author-list']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
    });

    this.authorService.get(+authorId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.authorService.update(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
            alert('Данные успешно изменены');
            this.router.navigate(['admin', 'list-author']);
      });
  }
}
