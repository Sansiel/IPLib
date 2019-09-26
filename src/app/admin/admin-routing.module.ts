import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminBooksComponent} from './components/admin-books/admin-books.component';
import {AdminComponent} from './components/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'books', component: AdminBooksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
