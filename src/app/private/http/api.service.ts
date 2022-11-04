import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  key = 'mi key';
  constructor(private httpClient: HttpClient) {}
  get(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=20&printType=books`

      /*   https://www.googleapis.com/books/v1/volumes?q=${queryField}&langRestrict=es&maxResults=39&keyes&key=${this.key} */
    );
  }
  /* getUserData(blogID: any) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes/${blogID}`
    );
  } */
}
