import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  key = "AIzaSyDNY-vNPEVK-SJNhxus9XzZDz7y3Cem9Qk";
  constructor(private httpClient: HttpClient) { }
  get(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=20&printType=books&langRestrict=es&key=${this.key} `

      /*   https://www.googleapis.com/books/v1/volumes?q=${queryField}&langRestrict=es&maxResults=39&keyes&key=${this.key} */
    );
  }
  getUserData(blogID: any) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes/${blogID}`
    );
  }

}
