import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../http/home.service';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css'],
})
export class BookCardsComponent implements OnInit {
  bookList: any;
  items: any;

  constructor(
    private homeService: HomeService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.homeService
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=harry+potter&langRestrict=es&maxResults=39'
      )
      .subscribe((response: any) => {
        console.log(response.items);
        this.bookList = response.items;
      });
  }
}
