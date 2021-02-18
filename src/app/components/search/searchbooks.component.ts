import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';
import { Store } from '@ngrx/store';
import { BooksFacade } from 'src/app/store/facades/books.facades';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: 'searchbooks.component.html',
})
export class SearchBooksComponent implements OnInit {
  books$: Observable<BookDetails[]>;

  constructor(
    public dataService: DataService,
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.books$ = this.booksFacade.books$;
  }

  searchInputChange(term): void {
    this.booksFacade.loadBooks(term);
  }
}
