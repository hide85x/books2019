import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { BooksOverviewComponent } from './books/books-overview/books-overview.component';
import { BookCardComponent } from './books/book-card/book-card.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { AppRouting } from './app-routing';
import { BooksService } from './books/books.service';
import { AuthGuard } from './books/auth-guard.service';
import { AuthService } from './books/auth.service';
import { BookEditComponent } from './books/book-details/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BooksOverviewComponent,
    BookCardComponent,
    BookDetailsComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [BooksService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
