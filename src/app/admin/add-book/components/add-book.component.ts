import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from './../../../core/services/books/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  formBook!: FormGroup;
  currentDate: string | null;

  constructor(private booksService: BooksService, private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
  ngOnInit(): void {
    console.log(this.currentDate);
    this.formBook = new FormGroup({
      id: new FormControl(),
      authors: new FormControl(),
      title: new FormControl(),
      date: new FormControl(this.currentDate),
      genre: new FormControl(),
      description: new FormControl(),
      imageLinks: new FormControl(),
      language: new FormControl(),
      pdf: new FormControl(),
      buyLink: new FormControl(),
    });
    /* this.formBook.get('date')?.disable(); */
  }

  async onSubmit() {
    await this.booksService.addBook(this.formBook.value);
  }
}
