import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {BooksModule} from './books/books.module';
import {AdminModule} from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminGuard }   from './admin/admin.guard';
import { OauthSuccessComponent } from './authorization/components/oauth-success/oauth-success.component';

@NgModule({
  declarations: [
    AppComponent,
    OauthSuccessComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    BooksModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
