import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
