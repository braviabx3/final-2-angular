import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from '../../http/api.service';



@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {

  items: any;
  loading: boolean = false;
  queryField: FormControl = new FormControl();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.queryField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((queryField: any) => {
        let te = queryField.replace(/\s/g, "");
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
  combineSlug(id: any) {
    return `${id}`;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
