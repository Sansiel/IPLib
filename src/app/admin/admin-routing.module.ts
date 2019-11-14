import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminBooksComponent} from './components/admin-books/admin-books.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {AdminEditAuthorComponent} from './components/admin-edit-author/admin-edit-author.component';
import {AdminListAuthorComponent} from './components/admin-list-author/admin-list-author.component';
import {AdminAddAuthorComponent} from './components/admin-add-author/admin-add-author.component';
import { AuthGuardService } from '../authorization/service/auth-guard.service';
import { AdminGroupComponent } from './components/admin-group/admin-group.component';
import { AdminFilesComponent} from './components/admin-files/admin-files.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'books', component: AdminBooksComponent},
      { path: 'add-book', component: AddBookComponent},
      { path: 'edit-book', component: EditBookComponent},
      { path: 'edit-author', component: AdminEditAuthorComponent},
      { path: 'author-list', component: AdminListAuthorComponent},
      { path: 'add-author', component: AdminAddAuthorComponent},
      { path: 'group', component: AdminGroupComponent},
      { path: 'files', component: AdminFilesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
