import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard }   from './admin/admin.guard';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'auth', loadChildren: () => import('./authorization/auth.module').then(m => m.AuthModule)},
  {path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
