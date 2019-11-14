import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './components/admin/admin.component';
import {AdminBooksComponent} from './components/admin-books/admin-books.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBookComponent } from './components/add-book/add-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AdminListAuthorComponent } from './components/admin-list-author/admin-list-author.component';
import { AdminAddAuthorComponent } from './components/admin-add-author/admin-add-author.component';
import { AdminEditAuthorComponent } from './components/admin-edit-author/admin-edit-author.component';
import { AdminGroupComponent } from './components/admin-group/admin-group.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    AdminBooksComponent,
    AdminComponent,
    AddBookComponent,
    EditBookComponent,
    AdminListAuthorComponent,
    AdminAddAuthorComponent,
    AdminEditAuthorComponent,
    AdminGroupComponent
  ],
  imports: [
    CKEditorModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
