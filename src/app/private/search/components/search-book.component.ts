import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiService } from '../../http/api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
})
export class SearchBookComponent implements OnInit {
  items: any;
  loading: boolean = false;
  queryField: FormControl = new FormControl();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loading = false;
    this.queryField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((queryField: any) => {
        let te = queryField.replace(/\s/g, '');
        if (te.length > 2) {
          this.apiService.get(queryField).subscribe((result: any) => {
            this.loading = true;
            setTimeout(() => {
              this.items = result.items;
            }, 2000);
          });
        }
      });
  }
  /*   combineSlug(id: any) {
    return `${id}`;
  } */
  /*   goToLink(url: string) {
    window.open(url, "_blank");
  } */
}
