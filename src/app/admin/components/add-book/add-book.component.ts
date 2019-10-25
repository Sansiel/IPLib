import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../books/services/book.service';
import {Router} from '@angular/router';
import {AuthorService} from '../../services/author.service';
import {Author} from '../../../books/models/author.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.less']
})
export class AddBookComponent implements OnInit {
  addForm: FormGroup;
  authors: Author[];
  editor = ClassicEditor;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authorService.getAll()
      .subscribe(data => this.authors = data);

    this.addForm = this.formBuilder.group({
      id: [],
      authorId: ['', Validators.required],
      title: ['', Validators.required],
    });

    this.authorService.getAll().subscribe(data => {
      this.authors = data;
      this.addForm.controls.author.patchValue(this.authors[0].id);
    });
  }

  onSubmit() {
      const formData = this.addForm.value;
      formData.authorId = +formData.authorId;
      this.bookService.create(formData)
        .subscribe(data => {
          this.router.navigate(['admin', 'books']);
        });
  }
}
