import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book.model';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
private book:Book;
  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    const title= this.route.snapshot.params['title'] 
    console.log(title)
    
    console.log(this.booksService.getBook(title))
    this.book= this.booksService.getBook(title)
  }


}
