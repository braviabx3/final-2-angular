import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  key = 'mi key';
  constructor(private httpClient: HttpClient) {}
  public get(url: string) {
    return this.httpClient.get(url);
  }
}
