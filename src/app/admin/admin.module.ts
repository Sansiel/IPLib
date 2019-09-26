import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './components/admin/admin.component';
import {AdminBooksComponent} from './components/admin-books/admin-books.component';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminBooksComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
