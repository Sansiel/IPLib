import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './authorization/service/auth-guard.service';
import { OauthSuccessComponent } from './authorization/components/oauth-success/oauth-success.component';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'auth', loadChildren: () => import('./authorization/auth.module').then(m => m.AuthModule)},
  { path: "oauthSuccess", component: OauthSuccessComponent},
  {path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: 'admin', canActivate: [AuthGuardService], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
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
