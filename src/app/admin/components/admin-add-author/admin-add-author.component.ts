import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-admin-add-author',
  templateUrl: './admin-add-author.component.html',
  styleUrls: ['./admin-add-author.component.less']
})
export class AdminAddAuthorComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authorService.create(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['admin', 'author-list']);
      });
  }
}
