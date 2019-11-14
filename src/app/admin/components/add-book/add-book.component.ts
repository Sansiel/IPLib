import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../books/services/book.service';
import {Router} from '@angular/router';
import {AuthorService} from '../../services/author.service';
import {Author} from '../../../books/models/author.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FilesUploadService } from '../../services/files-upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.less']
})
export class AddBookComponent implements OnInit {
  addForm: FormGroup;
  authors: Author[];
  editor = ClassicEditor;
  fileToUpload: File;
  fileUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private filesUploadService: FilesUploadService,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.authorService.getAll()
      .subscribe(data => this.authors = data);

    this.addForm = this.formBuilder.group({
      id: [],
      author_id: ['', Validators.required],
      title: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.authorService.getAll().subscribe(data => {
      this.authors = data;
      this.addForm.controls.author.patchValue(this.authors[0].id);
    });
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit() {
    
    this.filesUploadService.upload(this.fileToUpload)
      .subscribe(data => {
        this.fileUrl = `${environment.apiUrl + data['file']}`;
      
        this.addForm.value['image'] = this.fileUrl;


        // const formData = this.addForm.value;
        // formData.authorId = +formData.authorId;
      this.bookService.create(this.addForm.value)
        .subscribe(data => {
          alert('Данные успешно добавлены');
          this.router.navigate(['admin', 'books']);
        });

        
        
    });
  }
}
