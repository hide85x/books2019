import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  private books: Book[]= [];
    constructor(private booksService: BooksService) { }

  ngOnInit() {
this.books= this.booksService.getBooks()
  }

}
