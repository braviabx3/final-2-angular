import { BooksService } from './../../../core/services/books/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.interface';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books) => {
      console.log(books);
      this.books = books;
    });
  }
}
