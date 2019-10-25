import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../../books/services/book.service';
import {Book} from '../../../books/models/book.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {
  book: Book;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    const bookId = window.localStorage.getItem('editBookId');
    if (!bookId) {
      alert('Действие запрещено');
      this.router.navigate(['books']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });

    this.bookService.get(+bookId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.bookService.update(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
            alert('Данные успешно изменены');
            this.router.navigate(['admin', 'books']);
      });
  }
}
